(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"245":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),l=n(49),i=_interopRequireDefault(n(50)),u=_interopRequireDefault(n(53)),c=_interopRequireDefault(n(64)),f=_interopRequireDefault(n(91)),s=_interopRequireDefault(n(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(246);var d=function(e){function AtTabBar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTabBar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTabBar.__proto__||Object.getPrototypeOf(AtTabBar)).apply(this,arguments));return e.state={"isIPhoneX":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTabBar,s.default),r(AtTabBar,[{"key":"componentDidMount","value":function componentDidMount(){a.default.getEnv()===a.default.ENV_TYPE.WEAPP&&a.default.getSystemInfoSync().model.indexOf("iPhone X")>=0&&this.setState({"isIPhoneX":!0})}},{"key":"handleClick","value":function handleClick(e){var t;(t=this.props).onClick.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.customStyle,r=t.className,a=t.fixed,i=t.backgroundColor,s=t.tabList,d=t.current,p=t.color,b=t.iconSize,m=t.fontSize,y=t.selectedColor,_=this.state.isIPhoneX,h="color: "+p+";",v="color: "+y+";",g="font-size: "+m+"px;",w="background-color: "+i+";";return o.default.createElement(l.View,{"className":(0,u.default)({"at-tab-bar":!0,"at-tab-bar--fixed":a,"at-tab-bar--ipx":_},r),"style":this.mergeStyle(w,n)},s.map(function(t,n){return o.default.createElement(l.View,{"className":"at-tab-bar__item","style":d===n?v:h,"key":t.title,"onClick":e.handleClick.bind(e,n)},t.iconType?o.default.createElement(f.default,{"dot":t.dot,"value":t.text,"max":t.max},o.default.createElement(l.View,{"className":"at-tab-bar__icon"},o.default.createElement(c.default,{"prefixClass":t.iconPrefixClass,"value":d===n&&t.selectedIconType?t.selectedIconType:t.iconType,"size":b,"color":d===n?y:p}))):null,o.default.createElement(l.View,null,o.default.createElement(f.default,{"dot":t.iconType?"":t.dot,"value":t.iconType?"":t.text,"max":t.iconType?"":t.max},o.default.createElement(l.View,{"className":"at-tab-bar__title","style":g},t.title))))}))}}]),AtTabBar}();d.defaultProps={"customStyle":"","className":"","fixed":!1,"backgroundColor":"#fff","current":0,"iconSize":"24","fontSize":"14","color":"#333","selectedColor":"#6190E8","scroll":!1,"tabList":[],"onClick":function onClick(){}},d.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"fixed":i.default.bool,"backgroundColor":i.default.string,"current":i.default.number,"iconSize":i.default.oneOfType([i.default.number,i.default.string]),"fontSize":i.default.oneOfType([i.default.number,i.default.string]),"color":i.default.string,"selectedColor":i.default.string,"scroll":i.default.bool,"tabList":i.default.array,"onClick":i.default.func},t.default=d},"246":function(e,t,n){},"248":function(e,t,n){},"31":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(49),l=_interopRequireDefault(n(245)),i=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(248);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0,"current3":0,"current4":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"current"+e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,r=e.current3,u=e.current4,c=[{"title":"待办事项","iconType":"bullet-list","text":"new"},{"title":"拍照","iconType":"camera"},{"title":"文件夹","iconType":"folder","text":"100","max":"99"}];return a.default.createElement(o.View,{"className":"page"},a.default.createElement(i.default,{"title":"TabBar 标签栏"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"文本标签栏"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":[{"title":"待办事项","text":8},{"title":"拍照"},{"title":"通讯录","dot":!0}],"onClick":this.handleClick.bind(this,1),"current":t}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"图标文本标签栏"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"tabList":c,"onClick":this.handleClick.bind(this,2),"current":n}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"自定义图标颜色、字体颜色、背景颜色"),a.default.createElement(o.View,{"className":"panel__content no-padding"},a.default.createElement(l.default,{"backgroundColor":"#FAFBFC","color":"#ea6bb8","selectedColor":"#e64340","tabList":c,"onClick":this.handleClick.bind(this,3),"current":r}))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"固定底部"),a.default.createElement(o.View,{"className":"panel__content no-padding","style":"padding-bottom: 24px;"},a.default.createElement(l.default,{"fixed":!0,"tabList":c,"onClick":this.handleClick.bind(this,4),"current":u})))))}}]),Index}();t.default=u},"58":function(e,t,n){var r=n(60).Symbol;e.exports=r},"59":function(e,t,n){var r=n(58),a=n(62),o=n(63),l="[object Null]",i="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?i:l:u&&u in Object(e)?a(e):o(e)}},"60":function(e,t,n){var r=n(61),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"61":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"62":function(e,t,n){var r=n(58),a=Object.prototype,o=a.hasOwnProperty,l=a.toString,i=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(t?e[i]=n:delete e[i]),a}},"63":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"79":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(50))),o=_interopRequireDefault(n(0)),l=n(49),i=_interopRequireDefault(n(92)),u=_interopRequireDefault(n(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(94);var c=function(e){function AtBadge(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,u.default),r(AtBadge,[{"key":"formatValue","value":function formatValue(e,t){if(""===e||null===e)return"";var n=+e;return(0,i.default)(n)?e:n>t?t+"+":n}},{"key":"render","value":function render(){var e=this.props,t=e.dot,n=e.value,r=e.maxValue,a=this.formatValue(n,r);return o.default.createElement(l.View,{"className":["at-badge"]},this.props.children,t?o.default.createElement(l.View,{"className":"at-badge__dot"}):""!==a&&o.default.createElement(l.View,{"className":"at-badge__num"},a))}}]),AtBadge}();t.default=c,c.defaultProps={"dot":!1,"value":"","maxValue":99},c.propTypes={"dot":a.default.bool,"value":a.default.oneOfType([a.default.string,a.default.number]),"maxValue":a.default.number}},"92":function(e,t,n){var r=n(93);e.exports=function isNaN(e){return r(e)&&e!=+e}},"93":function(e,t,n){var r=n(59),a=n(79),o="[object Number]";e.exports=function isNumber(e){return"number"==typeof e||a(e)&&r(e)==o}},"94":function(e,t,n){}}]);