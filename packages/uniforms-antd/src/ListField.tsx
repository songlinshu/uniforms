import React, {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import Tooltip from 'antd/lib/tooltip';
import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';

import ListAddField from './ListAddField';
import ListItemField from './ListItemField';

export type ListFieldProps = HTMLFieldProps<
  unknown[],
  HTMLDivElement,
  {
    addIcon?: ReactNode;
    children?: ReactNode;
    info?: string;
    initialCount?: number;
    itemProps?: {};
    labelCol?: any;
    wrapperCol?: any;
  }
>;

function List({
  children = <ListItemField name="$" />,
  error,
  errorMessage,
  info,
  initialCount,
  itemProps,
  label,
  labelCol,
  showInlineError,
  value,
  wrapperCol,
  ...props
}: ListFieldProps) {
  return (
    <div {...filterDOMProps(props)}>
      {label && (
        <div>
          {label}
          {!!info && (
            <span>
              &nbsp;
              <Tooltip title={info}>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          )}
        </div>
      )}

      {!!(error && showInlineError) && <div>{errorMessage}</div>}

      {value?.map((item, itemIndex) =>
        Children.map(children, (child, childIndex) =>
          isValidElement(child)
            ? cloneElement(child, {
                key: `${itemIndex}-${childIndex}`,
                name: child.props.name?.replace('$', '' + itemIndex),
                labelCol,
                wrapperCol,
                ...itemProps,
              })
            : child,
        ),
      )}

      <ListAddField name="$" initialCount={initialCount} />
    </div>
  );
}

List.defaultProps = {
  style: {
    border: '1px solid #DDD',
    borderRadius: '7px',
    marginBottom: '5px',
    marginTop: '5px',
    padding: '10px',
  },
};

export default connectField(List);
