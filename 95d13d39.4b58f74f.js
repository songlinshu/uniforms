/*! For license information please see 95d13d39.4b58f74f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return f}));t(196);var a=t(2),r=t(11),c=t(0),o=t.n(c),i=t(219),u=t(285),s=t(443),l={id:"installation",title:"Installation"},m={id:"installation",isDocsHomePage:!1,title:"Installation",description:"Core package first.",source:"@site/../docs/installation.mdx",permalink:"/docs/installation",sidebar:"docs",previous:{title:"Comparison matrix",permalink:"/docs/compare-matrix"},next:{title:"FAQ",permalink:"/docs/faq"}},p=[],b={rightToc:p};function f(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Core package first."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install uniforms\n")),Object(i.b)("p",null,"Now the schema package."),Object(i.b)(s.b,{group:"bridge",tabs:[{name:"GraphQL"},{name:"JSON-Schema"},{name:"Simple-Schema"},{name:"Simple-Schema-2"}],mdxType:"Tabs"},(function(e){var n=e.name;return Object(i.b)(o.a.Fragment,null,Object(i.b)(u.a,{language:"shell",source:"npm install uniforms-bridge-"+n.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"Finally, pick your theme."),Object(i.b)(s.b,{group:"theme",tabs:[{name:"Semantic"},{name:"Material"},{name:"Bootstrap3"},{name:"Bootstrap4"},{name:"AntD"},{name:"Unstyled"}],mdxType:"Tabs"},(function(e){var t=e.name;return Object(i.b)(o.a.Fragment,null,Object(i.b)(u.a,{language:"shell",source:"npm install uniforms-"+t.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"TL;DR; Just let me copy it!"),Object(i.b)(u.a,{language:"shell",source:"npm install uniforms uniforms-bridge-"+n.toLowerCase()+" uniforms-"+t.toLowerCase(),mdxType:"CodeSection"}))})))})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you are going to use a themed package - remember to include correct styles!"))}f.isMDXComponent=!0},196:function(e,n,t){var a=t(34).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||t(12)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},198:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},284:function(e,n,t){var a=t(6),r=t(99)(!0);a(a.S,"Object",{entries:function(e){return r(e)}})},285:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(201),t(202),t(93),t(33),t(25),t(24),t(284),t(85),t(58),t(437),t(82);var a=t(0),r=t.n(a),c=t(467);function o(e){var n=e.language,t=e.replace,a=e.section,o=e.source;if("object"==typeof o&&"default"in o&&(o=o.default),a){var i=new RegExp("// <"+a+">\\s([\\s\\S]*?)\\s// </"+a+">\\s","g");o=o.split(i).reduce((function(e,n,t){return t%2==0?e:e+"\n\n"+n}),"")}if(o=o.replace(/\/\/ <.*?\n/g,""),t)for(var u=0,s=Object.entries(t);u<s.length;u++){var l=s[u],m=l[0],p=l[1];o=o.replace(new RegExp(m,"gs"),p)}return(o=o.trim()).includes("\n")||(o+="\n"),r.a.createElement(c.a.pre,null,r.a.createElement(c.a.code,{children:o,className:"language-"+n,mdxType:"code",originalType:"code",parentName:"pre"}))}},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(26),t(86);var a=t(0),r={},c={};function o(e){var n=Object(a.useState)(r[e]||0),t=n[0],o=n[1],i=Object(a.useCallback)((function(n){return function(e,n){r[e]=n,c[e].forEach((function(e){e(n)}))}(e,n)}),[e]);return Object(a.useEffect)((function(){return function(e,n){return void 0===c[e]&&(r[e]=0,c[e]=[]),c[e].push(n),function(){c[e].splice(c[e].indexOf(n),1)}}(e,o)}),[e]),{activeTab:t,onTab:i}}},443:function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return l}));var a=t(0),r=t.n(a),c=(t(196),t(81),t(198)),o=t.n(c),i=t(146),u=t.n(i);function s(e){var n=e.children,t=e.active,a=e.onClick;return r.a.createElement("span",{className:o()(u.a.item,t&&u.a.active),onClick:a},n)}var l=function(e){var n=e.items,t=e.activeTab,a=e.onTab;return r.a.createElement("div",{className:u.a.tabs},n.map((function(e,n){var c=e.name;return r.a.createElement(s,{active:t===n,key:n,onClick:function(){return a(n)}},c)})))},m=t(286);var p=function(e){var n=e.children,t=e.group,a=e.tabs,c=Object(m.a)(t),o=c.activeTab,i=c.onTab;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,{activeTab:o,items:a,onTab:i}),n(a[o]))}}}]);