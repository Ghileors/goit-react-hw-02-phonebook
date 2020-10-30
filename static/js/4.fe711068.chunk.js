(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[4],{101:function(e,t,n){"use strict";var r=n(2),a=n(9),i=n(11);n(19);function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n(0),u=n.n(s),l=n(21),c=n.n(l),p=!1,f=n(84),d=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[c.a.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!n||p?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!p?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(f.a.Provider,{value:null},"function"===typeof n?n(e,r):u.a.cloneElement(u.a.Children.only(n),r))},t}(u.a.Component);function h(){}d.contextType=f.a,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED="unmounted",d.EXITED="exited",d.ENTERING="entering",d.ENTERED="entered",d.EXITING="exiting";var m=d,g=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"===typeof n.className?n.className=o(n.className,r):n.setAttribute("class",o(n.className&&n.className.baseVal||"",r)));var n,r}))},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"===typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}Object(i.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},r&&g(e,r),a&&g(e,a),i&&g(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(a.a)(e,["classNames"]));return u.a.createElement(m,Object(r.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(u.a.Component);v.defaultProps={classNames:""},v.propTypes={};t.a=v},102:function(e,t,n){"use strict";var r=n(9),a=n(2);var i=n(11),o=(n(19),n(0)),s=n.n(o),u=n(84);function l(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function c(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var r=l(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),i=[];for(var o in e)o in t?i.length&&(a[o]=i,i=[]):i.push(o);var s={};for(var u in t){if(a[u])for(r=0;r<a[u].length;r++){var l=a[u][r];s[a[u][r]]=n(l)}s[u]=n(u)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(a).forEach((function(i){var s=a[i];if(Object(o.isValidElement)(s)){var u=i in t,l=i in r,p=t[i],f=Object(o.isValidElement)(p)&&!p.props.in;!l||u&&!f?l||!u||f?l&&u&&Object(o.isValidElement)(p)&&(a[i]=Object(o.cloneElement)(s,{onExited:n.bind(null,s),in:p.props.in,exit:c(s,"exit",e),enter:c(s,"enter",e)})):a[i]=Object(o.cloneElement)(s,{in:!1}):a[i]=Object(o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:c(s,"exit",e),enter:c(s,"enter",e)})}})),a}var f=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=function(e){function t(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,a=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,l(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:c(e,"appear",n),enter:c(e,"enter",n),exit:c(e,"exit",n)})}))):p(e,a,i),firstRender:!1}},n.handleExited=function(e,t){var n=l(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(a.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(r.a)(e,["component","childFactory"]),i=this.state.contextValue,o=f(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?s.a.createElement(u.a.Provider,{value:i},o):s.a.createElement(u.a.Provider,{value:i},s.a.createElement(t,a,o))},t}(s.a.Component);d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};t.a=d},84:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=a.a.createContext(null)},86:function(e,t,n){"use strict";var r=n(0),a=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){}function p(){}p.resetWarningCache=c;var f=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,a,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:p,resetWarningCache:c};return n.PropTypes=n,n}()}));function d(){}function h(e){return!!(e||"").match(/\d/)}function m(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function g(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="-"===e[0],r=n&&t,a=(e=e.replace("-","")).split("."),i=a[0],o=a[1]||"";return{beforeDecimal:i,afterDecimal:o,hasNagation:n,addNegation:r}}function v(e,t,n){for(var r="",a=n?"0":"",i=0;i<=t-1;i++)r+=e[i]||a;return r}function x(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function E(e,t,n){return Math.min(Math.max(e,t),n)}function y(e){return Math.max(e.selectionStart,e.selectionEnd)}var b={thousandSeparator:f.oneOfType([f.string,f.oneOf([!0])]),decimalSeparator:f.string,allowedDecimalSeparators:f.arrayOf(f.string),thousandsGroupStyle:f.oneOf(["thousand","lakh","wan"]),decimalScale:f.number,fixedDecimalScale:f.bool,displayType:f.oneOf(["input","text"]),prefix:f.string,suffix:f.string,format:f.oneOfType([f.string,f.func]),removeFormatting:f.func,mask:f.oneOfType([f.string,f.arrayOf(f.string)]),value:f.oneOfType([f.number,f.string]),defaultValue:f.oneOfType([f.number,f.string]),isNumericString:f.bool,customInput:f.elementType,allowNegative:f.bool,allowEmptyFormatting:f.bool,allowLeadingZeros:f.bool,onValueChange:f.func,onKeyDown:f.func,onMouseUp:f.func,onChange:f.func,onFocus:f.func,onBlur:f.func,type:f.oneOf(["text","tel","password"]),isAllowed:f.func,renderText:f.func,getInputRef:f.oneOfType([f.func,f.shape({current:f.any})])},S={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:d,onChange:d,onKeyDown:d,onMouseUp:d,onFocus:d,onBlur:d,isAllowed:function(){return!0}},O=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(a=s(t).call(this,e))||"object"!==typeof a&&"function"!==typeof a?l(r):a;var i=e.defaultValue;n.validateProps();var o=n.formatValueProp(i);return n.state={value:o,numAsString:n.removeFormatting(o)},n.selectionBeforeInput={selectionStart:0,selectionEnd:0},n.onChange=n.onChange.bind(l(n)),n.onKeyDown=n.onKeyDown.bind(l(n)),n.onMouseUp=n.onMouseUp.bind(l(n)),n.onFocus=n.onFocus.bind(l(n)),n.onBlur=n.onBlur.bind(l(n)),n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,n=this.state,r=this.focusedElm,a=n.value,i=n.numAsString,o=void 0===i?"":i;if(e!==t){this.validateProps();var s=this.formatNumString(o),u=void 0===t.value?s:this.formatValueProp(),l=this.removeFormatting(u),c=parseFloat(l),p=parseFloat(o);(isNaN(c)&&isNaN(p)||c===p)&&s===a&&(null!==r||u===a)||this.updateValue({formattedValue:u,numAsString:l,input:r})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,n=this.getSeparators(),r=n.decimalSeparator,a=this.getNumberRegex(!0),i="-"===e[0];i&&(e=e.replace("-","")),r&&0===t&&(e=e.split(r)[0]);var o=(e=(e.match(a)||[]).join("").replace(r,".")).indexOf(".");return-1!==o&&(e="".concat(e.substring(0,o),".").concat(e.substring(o+1,e.length).replace(new RegExp(m(r),"g"),""))),i&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var n=this.props,r=n.format,a=n.decimalScale,i=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!i||0===a||t||r?"":"|"+m(i)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props,n=t.thousandSeparator,r=t.allowedDecimalSeparators;return!0===n&&(n=","),r||(r=[e,"."]),{decimalSeparator:e,thousandSeparator:n,allowedDecimalSeparators:r}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,n=void 0===t?" ":t;return"string"===typeof n?n:n[e]||" "}},{key:"getValueObject",value:function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),n=t.decimalSeparator,r=t.thousandSeparator;if(n===r)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(r,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(n," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,n){x(e,t),setTimeout((function(){e.value===n&&x(e,t)}),0)}},{key:"correctCaretPosition",value:function(e,t,n){var r=this.props,a=r.prefix,i=r.suffix,o=r.format;if(""===e)return 0;if(t=E(t,0,e.length),!o){var s="-"===e[0];return E(t,a.length+(s?1:0),e.length-i.length)}if("function"===typeof o)return t;if("#"===o[t]&&h(e[t]))return t;if("#"===o[t-1]&&h(e[t-1]))return t;var u=o.indexOf("#");t=E(t,u,o.lastIndexOf("#")+1);for(var l=o.substring(t,o.length).indexOf("#"),c=t,p=t+(-1===l?0:l);c>u&&("#"!==o[c]||!h(e[c]));)c-=1;return!h(e[p])||"left"===n&&t!==u||t-c<p-t?h(e[c])?c+1:c:p}},{key:"getCaretPosition",value:function(e,t,n){var r,a,i=this.props.format,o=this.state.value,s=this.getNumberRegex(!0),u=(e.match(s)||[]).join(""),l=(t.match(s)||[]).join("");for(r=0,a=0;a<n;a++){var c=e[a]||"",p=t[r]||"";if((c.match(s)||c===p)&&("0"!==c||!p.match(s)||"0"===p||u.length===l.length)){for(;c!==t[r]&&r<t.length;)r++;r++}}return"string"!==typeof i||o||(r=t.length),r=this.correctCaretPosition(t,r)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,n=t.format,r=t.prefix,a=t.suffix;if(!n&&e){var i="-"===e[0];i&&(e=e.substring(1,e.length));var o=(e=r&&0===e.indexOf(r)?e.substring(r.length,e.length):e).lastIndexOf(a);e=a&&-1!==o&&o===e.length-a.length?e.substring(0,o):e,i&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),n=0,r="",a=0,i=t.length;a<=i;a++){var o=t[a]||"",s=a===i?e.length:e.indexOf(o,n);if(-1===s){r=e;break}r+=e.substring(n,s),n=s+o.length}return(r.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,n=t.format,r=t.removeFormatting;return e?(n?e="string"===typeof n?this.removePatternFormatting(e):"function"===typeof r?r(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,n=0,r=t.split(""),a=0,i=t.length;a<i;a++)"#"===t[a]&&(r[a]=e[n]||this.getMaskAtIndex(n),n+=1);return r.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,n=t.decimalScale,r=t.fixedDecimalScale,a=t.prefix,i=t.suffix,o=t.allowNegative,s=t.thousandsGroupStyle,u=this.getSeparators(),l=u.thousandSeparator,c=u.decimalSeparator,p=-1!==e.indexOf(".")||n&&r,f=g(e,o),d=f.beforeDecimal,h=f.afterDecimal,m=f.addNegation;return void 0!==n&&(h=v(h,n,r)),l&&(d=function(e,t,n){var r=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(n),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(r,"$1"+t)}(d,l,s)),a&&(d=a+d),i&&(h+=i),m&&(d="-"+d),e=d+(p&&c||"")+h}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,n=t.format,r=t.allowEmptyFormatting,a=e;return a=""!==e||r?"-"!==e||n?"string"===typeof n?this.formatWithPattern(a):"function"===typeof n?n(a):this.formatAsNumber(a):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,n=t.format,r=t.decimalScale,a=t.fixedDecimalScale,i=t.allowEmptyFormatting,o=this.props,s=o.value,u=void 0===s?e:s,l=o.isNumericString,c=!u&&0!==u;return c&&i&&(u=""),c&&!i?"":("number"===typeof u&&(u=u.toString(),l=!0),"Infinity"===u&&l&&(u=""),l&&!n&&"number"===typeof r&&(u=function(e,t,n){if(-1!==["","-"].indexOf(e))return e;var r=-1!==e.indexOf(".")&&t,a=g(e),i=a.beforeDecimal,o=a.afterDecimal,s=a.hasNagation,u=parseFloat("0.".concat(o||"0")).toFixed(t).split("."),l=i.split("").reverse().reduce((function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),u[0]),c=v(u[1]||"",Math.min(t,o.length),n),p=r?".":"";return"".concat(s?"-":"").concat(l).concat(p).concat(c)}(u,r,a)),l?this.formatNumString(u):this.formatInput(u))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),a=n.test(e),i=r.test(e);return e=e.replace(/-/g,""),a&&!i&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.format;return t||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var n=this.props,r=n.format,a=n.prefix,i=n.suffix,o=n.decimalScale,s=n.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof r&&"#"!==r[e]||!(r||!(e<a.length||e>=t.length-i.length||o&&s&&t[e]===u))}},{key:"checkIfFormatGotDeleted",value:function(e,t,n){for(var r=e;r<t;r++)if(this.isCharacterAFormat(r,n))return!0;return!1}},{key:"correctInputValue",value:function(e,t,n){var r=this.props,a=r.format,i=r.allowNegative,o=r.prefix,s=r.suffix,u=r.decimalScale,l=this.getSeparators(),c=l.allowedDecimalSeparators,p=l.decimalSeparator,f=this.state.numAsString||"",d=this.selectionBeforeInput,h=d.selectionStart,m=d.selectionEnd,v=function(e,t){for(var n=0,r=0,a=e.length,i=t.length;e[n]===t[n]&&n<a;)n++;for(;e[a-1-r]===t[i-1-r]&&i-r>n&&a-r>n;)r++;return{start:n,end:a-r}}(t,n),x=v.start,E=v.end;if(!a&&x===E&&-1!==c.indexOf(n[h])){var y=0===u?"":p;return n.substr(0,h)+y+n.substr(h+1,n.length)}var b=a?0:o.length,S=t.length-(a?0:s.length);if(n.length>t.length||!n.length||x===E||0===h&&m===t.length||h===b&&m===S)return n;if(this.checkIfFormatGotDeleted(x,E,t)&&(n=t),!a){var O=this.removeFormatting(n),C=g(O,i),N=C.beforeDecimal,k=C.afterDecimal,w=C.addNegation,P=e<n.indexOf(p)+1;if(O.length<f.length&&P&&""===N&&!parseFloat(k))return w?"-":""}return n}},{key:"updateValue",value:function(e){var t=e.formattedValue,n=e.input,r=e.setCaretPosition,a=void 0===r||r,i=e.numAsString,o=e.caretPos,s=this.props.onValueChange,u=this.state.value;if(n)if(a){if(!o){var l=e.inputValue||n.value,c=y(n);n.value=t,o=this.getCaretPosition(l,t,c)}this.setPatchedCaretPosition(n,o,t)}else n.value=t;void 0===i&&(i=this.removeFormatting(t)),t!==u&&(this.setState({value:t,numAsString:i}),s(this.getValueObject(t,i)))}},{key:"onChange",value:function(e){var t=e.target,n=t.value,r=this.state,a=this.props,i=a.isAllowed,o=r.value||"",s=y(t);n=this.correctInputValue(s,o,n);var u=this.formatInput(n)||"",l=this.removeFormatting(u);i(this.getValueObject(u,l))||(u=o),this.updateValue({formattedValue:u,numAsString:l,inputValue:n,input:t}),a.onChange(e)}},{key:"onBlur",value:function(e){var t=this.props,n=this.state,r=t.format,a=t.onBlur,i=t.allowLeadingZeros,o=n.numAsString,s=n.value;if(this.focusedElm=null,this.focusTimeout&&clearTimeout(this.focusTimeout),!r){isNaN(parseFloat(o))&&(o=""),i||(o=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",a=n[1]||"";return"".concat(t?"-":"").concat(r).concat(a?".".concat(a):"")}(o));var u=this.formatNumString(o);if(u!==s)return this.updateValue({formattedValue:u,numAsString:o,input:e.target,setCaretPosition:!1}),void a(e)}a(e)}},{key:"onKeyDown",value:function(e){var t,n=e.target,r=e.key,a=n.selectionStart,i=n.selectionEnd,o=n.value,s=void 0===o?"":o,u=this.props,l=u.decimalScale,c=u.fixedDecimalScale,p=u.prefix,f=u.suffix,d=u.format,h=u.onKeyDown,m=void 0!==l&&c,g=this.getNumberRegex(!1,m),v=new RegExp("-"),x="string"===typeof d;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:i},"ArrowLeft"===r||"Backspace"===r?t=a-1:"ArrowRight"===r?t=a+1:"Delete"===r&&(t=a),void 0!==t&&a===i){var E=t,y=x?d.indexOf("#"):p.length,b=x?d.lastIndexOf("#")+1:s.length-f.length;if("ArrowLeft"===r||"ArrowRight"===r){var S="ArrowLeft"===r?"left":"right";E=this.correctCaretPosition(s,t,S)}else if("Delete"!==r||g.test(s[t])||v.test(s[t])){if("Backspace"===r&&!g.test(s[t]))if(a<=y+1&&"-"===s[0]&&"undefined"===typeof d){var O=s.substring(1);this.updateValue({formattedValue:O,caretPos:E,input:n})}else if(!v.test(s[t])){for(;!g.test(s[E-1])&&E>y;)E--;E=this.correctCaretPosition(s,E,"left")}}else for(;!g.test(s[E])&&E<b;)E++;(E!==t||t<y||t>b)&&(e.preventDefault(),this.setPatchedCaretPosition(n,E,s)),e.isUnitTestRun&&this.setPatchedCaretPosition(n,E,s),h(e)}else h(e)}},{key:"onMouseUp",value:function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,a=t.value,i=void 0===a?"":a;if(n===r){var o=this.correctCaretPosition(i,n);o!==n&&this.setPatchedCaretPosition(t,o,i)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var n=e.target,r=n.selectionStart,a=n.selectionEnd,i=n.value,o=void 0===i?"":i,s=t.correctCaretPosition(o,r);s===r||0===r&&a===o.length||t.setPatchedCaretPosition(n,s,o),t.props.onFocus(e)}),0)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.displayType,r=e.customInput,i=e.renderText,s=e.getInputRef,u=this.state.value,l=function(e,t){var n={};return Object.keys(e).forEach((function(r){t[r]||(n[r]=e[r])})),n}(this.props,b),c=o({inputMode:"numeric"},l,{type:t,value:u,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return i?i(u)||null:a.a.createElement("span",o({},l,{ref:s}),u);if(r){var p=r;return a.a.createElement(p,o({},c,{ref:s}))}return a.a.createElement("input",o({},c,{ref:s}))}}])&&i(n.prototype,r),c&&i(n,c),t}(a.a.Component);O.propTypes=b,O.defaultProps=S,t.a=O}}]);
//# sourceMappingURL=4.fe711068.chunk.js.map