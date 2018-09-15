(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"299":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),r=a(49),o=_interopRequireDefault(a(50)),u=_interopRequireDefault(a(53)),i=_interopRequireDefault(a(64)),s=_interopRequireDefault(a(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(300);var c=function defaultFunc(){},d=function(e){function AtInput(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtInput),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtInput.__proto__||Object.getPrototypeOf(AtInput)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtInput,s.default),n(AtInput,[{"key":"onInput","value":function onInput(e){var t;(t=this.props).onChange.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"onFocus","value":function onFocus(e){var t;(t=this.props).onFocus.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"onBlur","value":function onBlur(e){var t;(t=this.props).onBlur.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"onConfirm","value":function onConfirm(e){var t;(t=this.props).onConfirm.apply(t,[e.target.value].concat(Array.prototype.slice.call(arguments)))}},{"key":"onClick","value":function onClick(e){var t;!this.props.editable&&(t=this.props).onClick.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"clearValue","value":function clearValue(){var e;(e=this.props).onChange.apply(e,[""].concat(Array.prototype.slice.call(arguments)))}},{"key":"onErrorClick","value":function onErrorClick(){var e;(e=this.props).onErrorClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.className,a=e.customStyle,n=e.name,o=e.cursorSpacing,s=e.confirmType,c=e.cursor,d=e.selectionStart,p=e.selectionEnd,f=e.adjustPosition,h=e.border,m=e.title,b=e.editable,v=e.error,y=e.clear,_=e.placeholder,E=e.placeholderStyle,g=e.placeholderClass,C=e.autoFocus,w=e.value,k=this.props,I=k.maxlength,S=k.type,O=k.disabled;return"phone"===S&&(I=11,S="number"),O||b||(O=!0),l.default.createElement(r.View,{"className":(0,u.default)({"at-input":!0,"at-input--without-border":!h},t),"style":a},l.default.createElement(r.View,{"className":(0,u.default)({"at-input__container":!0,"at-input--error":v,"at-input--disabled":O}),"onClick":this.onClick.bind(this)},m?l.default.createElement(r.Label,{"className":"at-input__title","for":n},m):null,l.default.createElement(r.Input,{"className":"at-input__input","id":n,"type":S,"placeholderStyle":E,"placeholderClass":(0,u.default)("placeholder",g),"placeholder":_,"cursorSpacing":o,"maxlength":I,"autoFocus":C,"value":w,"confirmType":s,"cursor":c,"selectionStart":d,"selectionEnd":p,"adjustPosition":f,"disabled":O,"onInput":this.onInput.bind(this),"onChange":this.onInput.bind(this),"onFocus":this.onFocus.bind(this),"onBlur":this.onBlur.bind(this),"onConfirm":this.onConfirm.bind(this)}),y&&w?l.default.createElement(r.View,{"className":"at-input__icon","onTouchStart":this.clearValue.bind(this)},l.default.createElement(i.default,{"value":"close-circle","color":"#ccc","size":"15"})):null,v?l.default.createElement(r.View,{"className":"at-input__icon","onTouchStart":this.onErrorClick.bind(this)},l.default.createElement(i.default,{"value":"alert-circle","color":"#FF4949","size":"15"})):null,l.default.createElement(r.View,{"className":"at-input__children"},this.props.children)))}}]),AtInput}();d.defaultProps={"className":"","customStyle":"","value":"","name":"","placeholder":"","placeholderStyle":"","placeholderClass":"","title":"","cursorSpacing":50,"confirmType":"完成","cursor":0,"selectionStart":-1,"selectionEnd":-1,"adjustPosition":!0,"maxlength":140,"type":"text","disabled":!1,"border":!0,"editable":!0,"error":!1,"clear":!1,"autoFocus":!1,"onChange":c,"onFocus":c,"onBlur":c,"onConfirm":c,"onErrorClick":c,"onClick":c},d.propTypes={"className":o.default.oneOfType([o.default.string,o.default.array]),"customStyle":o.default.oneOfType([o.default.string,o.default.object]),"value":o.default.oneOfType([o.default.string,o.default.number]),"name":"","placeholder":o.default.string,"placeholderStyle":o.default.string,"placeholderClass":o.default.string,"title":o.default.string,"confirmType":o.default.string,"cursor":o.default.number,"selectionStart":o.default.number,"selectionEnd":o.default.number,"adjustPosition":o.default.bool,"cursorSpacing":o.default.number,"maxlength":o.default.number,"type":o.default.string,"disabled":o.default.bool,"border":o.default.bool,"editable":o.default.bool,"error":o.default.bool,"clear":o.default.bool,"backgroundColor":o.default.string,"autoFocus":o.default.bool,"onChange":o.default.func,"onFocus":o.default.func,"onBlur":o.default.func,"onConfirm":o.default.func,"onErrorClick":o.default.func,"onClick":o.default.func},t.default=d},"300":function(e,t,a){},"302":function(e,t,a){e.exports=a.p+"static/images/verification_code.png"},"303":function(e,t,a){},"40":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(0)),o=a(49),u=_interopRequireDefault(a(299)),i=_interopRequireDefault(a(96)),s=_interopRequireDefault(a(302)),c=_interopRequireDefault(a(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(303);var d=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":"","value5":"","value6":"","value7":"","value8":"","value9":"","value10":"","value13":"","value14":"","value15":"","disabled":!1,"second":60},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),n(Index,[{"key":"showTipText","value":function showTipText(){return this.state.disabled?this.state.second+"s后重试":"发送验证码"}},{"key":"sendCode","value":function sendCode(){var e=this;if(!this.state.disabled){this.setState({"disabled":!0});var t=setInterval(function(){e.state.second>0?e.setState({"second":e.state.second-1}):(e.setState({"second":60,"disabled":!1}),clearInterval(t))},1e3)}}},{"key":"handleInput","value":function handleInput(e,t){this.setState(function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}({},e,t))}},{"key":"handleClick","value":function handleClick(){l.default.showToast({"title":"已发送验证码","icon":"success","duration":2e3})}},{"key":"onClickErrorIcon","value":function onClickErrorIcon(){l.default.showToast({"title":"请输入数字","icon":"success","duration":2e3})}},{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(c.default,{"title":"Input 输入框"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础用法"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"component-item"},r.default.createElement(i.default,null,r.default.createElement(u.default,{"name":"value1","title":"标准五个字","type":"text","placeholder":"标准五个字","value":this.state.value1,"onChange":this.handleInput.bind(this,"value1")}),r.default.createElement(u.default,{"name":"value2","title":"标题实在特别长就换行","placeholder":"其他列保持正常间距","value":this.state.value2,"onChange":this.handleInput.bind(this,"value2")}),r.default.createElement(u.default,{"name":"value3","border":!1,"placeholder":"无标题","value":this.state.value3,"onChange":this.handleInput.bind(this,"value3")}))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"输入框类型"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"component-item"},r.default.createElement(i.default,null,r.default.createElement(u.default,{"name":"value4","title":"文本","type":"text","placeholder":"单行文本","value":this.state.value4,"onChange":this.handleInput.bind(this,"value4")}),r.default.createElement(u.default,{"name":"value5","title":"数字","type":"number","placeholder":"请输入数字","value":this.state.value5,"onChange":this.handleInput.bind(this,"value5")}),r.default.createElement(u.default,{"name":"value6","title":"密码","type":"password","placeholder":"密码不能少于10位数","value":this.state.value6,"onChange":this.handleInput.bind(this,"value6")}),r.default.createElement(u.default,{"name":"value7","title":"身份证","type":"idcard","placeholder":"身份证号码","value":this.state.value7,"onChange":this.handleInput.bind(this,"value7")}),r.default.createElement(u.default,{"name":"value8","title":"小数","type":"digit","placeholder":"请输入小数","value":this.state.value8,"onChange":this.handleInput.bind(this,"value8")}),r.default.createElement(u.default,{"name":"value9","border":!1,"title":"手机号码","type":"phone","placeholder":"手机号码","value":this.state.value9,"onChange":this.handleInput.bind(this,"value9")}))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"状态"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"component-item"},r.default.createElement(i.default,null,r.default.createElement(u.default,{"name":"value10","disabled":!0,"title":"禁用","type":"text","placeholder":"禁止输入","value":this.state.value10,"onChange":this.handleInput.bind(this,"value10")}),r.default.createElement(u.default,{"name":"value11","error":!0,"title":"出现错误","type":"text","placeholder":"点击按钮触发回调","value":this.state.value11,"onChange":this.handleInput.bind(this,"value11"),"onErrorClick":this.onClickErrorIcon.bind(this)}),r.default.createElement(u.default,{"name":"value12","editable":!1,"title":"不可编辑","type":"text","placeholder":"不可编辑","value":"不可编辑的内容"}),r.default.createElement(u.default,{"name":"value13","border":!1,"clear":!0,"title":"清除按钮","type":"text","placeholder":"点击清除按钮清空内容","value":this.state.value13,"onChange":this.handleInput.bind(this,"value13")}))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义右边栏"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"component-item"},r.default.createElement(i.default,null,r.default.createElement(u.default,{"name":"value14","title":"验证码","type":"text","maxlength":"4","clear":!0,"placeholder":"验证码","value":this.state.value14,"onChange":this.handleInput.bind(this,"value14")},r.default.createElement(o.Image,{"src":s.default})),r.default.createElement(u.default,{"name":"value15","border":!1,"type":"phone","clear":!0,"placeholder":"请输入手机号码","value":this.state.value15,"onChange":this.handleInput.bind(this,"value15")},r.default.createElement(o.View,{"style":{"color":this.state.disabled?"#FF4949":"","fontSize":"12px","width":"90px"},"onClick":this.sendCode.bind(this)},this.showTipText()))))))))}}]),Index}();t.default=d},"96":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),r=a(49),o=_interopRequireDefault(a(50)),u=_interopRequireDefault(a(53)),i=_interopRequireDefault(a(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(97);var s=function defaultFunc(){},c=function(e){function AtForm(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtForm),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtForm.__proto__||Object.getPrototypeOf(AtForm)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtForm,i.default),n(AtForm,[{"key":"onSubmit","value":function onSubmit(){var e;(e=this.props).onSubmit.apply(e,arguments)}},{"key":"reportSubmit","value":function reportSubmit(){var e;(e=this.props).reportSubmit.apply(e,arguments)}},{"key":"onReset","value":function onReset(){var e;(e=this.props).onReset.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,a=e.className,n=e.reportSubmit;return l.default.createElement(r.Form,{"className":(0,u.default)("at-form",a),"style":t,"onSubmit":this.onSubmit.bind(this),"reportSubmit":n,"onReset":this.onReset.bind(this)},this.props.children)}}]),AtForm}();c.defaultProps={"customStyle":"","className":"","reportSubmit":!1,"onSubmit":s,"onReset":s},c.propTypes={"customStyle":o.default.oneOfType([o.default.object,o.default.string]),"className":o.default.oneOfType([o.default.array,o.default.string]),"reportSubmit":o.default.bool,"onSubmit":o.default.func,"onReset":o.default.func},t.default=c},"97":function(e,t,a){}}]);