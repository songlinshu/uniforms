import get from 'lodash/get';
import mapValues from 'lodash/mapValues';
import { useCallback, useEffect, useMemo } from 'react';

import { GuaranteedProps } from './types';
import { joinName } from './joinName';
import { useForm } from './useForm';

function propagate(
  prop: unknown,
  schema: unknown,
  state: boolean,
  fallback: string,
): [string, string] {
  const schemaDisabled = schema === false || schema === '';
  const schemaValue =
    typeof schema === 'string' ? schema : schemaDisabled ? '' : fallback;
  const resultValue =
    typeof prop === 'string'
      ? prop
      : prop === null ||
        prop === false ||
        (prop === undefined && !state) ||
        schemaDisabled
      ? ''
      : schemaValue;
  return [resultValue, schemaValue];
}

export function useField<
  Props extends Record<string, any>,
  Value = Props['value'],
  Model = Record<string, any>
>(
  fieldName: string,
  props: Props,
  options?: { absoluteName?: boolean; initialValue?: boolean },
) {
  const context = useForm<Model>();

  const name = joinName(options?.absoluteName ? '' : context.name, fieldName);
  const state = mapValues(context.state, (prev, key) => {
    const next = props[key];
    return next === null || next === undefined ? prev : !!next;
  });

  const changed = !!get(context.changedMap, name);
  const error = context.schema.getError(name, context.error);
  const errorMessage = context.schema.getErrorMessage(name, context.error);
  const field = context.schema.getField(name);
  const fieldType = context.schema.getType(name);
  const fields = context.schema.getSubfields(name);
  const schemaProps = context.schema.getProps(name, { ...state, ...props });

  const [label, labelFallback] = propagate(
    props.label,
    schemaProps.label,
    state.label,
    '',
  );
  const [placeholder] = propagate(
    props.placeholder,
    schemaProps.placeholder,
    state.placeholder,
    label || labelFallback,
  );

  const id = useMemo(() => context.randomId(), []);
  const onChange = useCallback(
    (value?: Value, key: string = name) => {
      context.onChange(key, value);
    },
    [context.onChange, name],
  );

  const valueFromModel: Value | undefined = get(context.model, name);
  let initialValue: Value | undefined;
  let value: Value | undefined = props.value ?? valueFromModel;

  if (value === undefined) {
    value = context.schema.getInitialValue(name, props);
    initialValue = value;
  } else if (props.value !== undefined && props.value !== valueFromModel) {
    initialValue = props.value;
  }

  if (options?.initialValue !== false) {
    useEffect(() => {
      const required = props.required ?? schemaProps.required;
      if (required && initialValue !== undefined) {
        onChange(initialValue);
      }
    }, []);
  }

  const fieldProps: GuaranteedProps<Value> & Props = {
    id,
    ...state,
    changed,
    error,
    errorMessage,
    field,
    fieldType,
    fields,
    onChange,
    value,
    ...schemaProps,
    ...props,
    label,
    name,
    placeholder,
  };

  return [fieldProps, context] as [typeof fieldProps, typeof context];
}
