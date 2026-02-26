(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Fm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hc={exports:{}},Po={},pc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function q0(){if(Sp)return ht;Sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=m&&U[m]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(U,ie,Ue){this.props=U,this.context=ie,this.refs=w,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function I(U,ie,Ue){this.props=U,this.context=ie,this.refs=w,this.updater=Ue||S}var D=I.prototype=new v;D.constructor=I,E(D,y.prototype),D.isPureReactComponent=!0;var R=Array.isArray,Z=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ie,Ue){var q,de={},Ee=null,xe=null;if(ie!=null)for(q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)Z.call(ie,q)&&!F.hasOwnProperty(q)&&(de[q]=ie[q]);var Ce=arguments.length-2;if(Ce===1)de.children=Ue;else if(1<Ce){for(var Fe=Array(Ce),Ke=0;Ke<Ce;Ke++)Fe[Ke]=arguments[Ke+2];de.children=Fe}if(U&&U.defaultProps)for(q in Ce=U.defaultProps,Ce)de[q]===void 0&&(de[q]=Ce[q]);return{$$typeof:s,type:U,key:Ee,ref:xe,props:de,_owner:z.current}}function b(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ue=/\/+/g;function ee(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ie.toString(36)}function he(U,ie,Ue,q,de){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,de=de(xe),U=q===""?"."+ee(xe,0):q,R(de)?(Ue="",U!=null&&(Ue=U.replace(ue,"$&/")+"/"),he(de,ie,Ue,"",function(Ke){return Ke})):de!=null&&(C(de)&&(de=b(de,Ue+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ue,"$&/")+"/")+U)),ie.push(de)),1;if(xe=0,q=q===""?".":q+":",R(U))for(var Ce=0;Ce<U.length;Ce++){Ee=U[Ce];var Fe=q+ee(Ee,Ce);xe+=he(Ee,ie,Ue,Fe,de)}else if(Fe=_(U),typeof Fe=="function")for(U=Fe.call(U),Ce=0;!(Ee=U.next()).done;)Ee=Ee.value,Fe=q+ee(Ee,Ce++),xe+=he(Ee,ie,Ue,Fe,de);else if(Ee==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(U,ie,Ue){if(U==null)return U;var q=[],de=0;return he(U,q,"","",function(Ee){return ie.call(Ue,Ee,de++)}),q}function le(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var fe={current:null},k={transition:null},ce={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:pe,forEach:function(U,ie,Ue){pe(U,function(){ie.apply(this,arguments)},Ue)},count:function(U){var ie=0;return pe(U,function(){ie++}),ie},toArray:function(U){return pe(U,function(ie){return ie})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=y,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=I,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ht.act=se,ht.cloneElement=function(U,ie,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var q=E({},U.props),de=U.key,Ee=U.ref,xe=U._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=z.current),ie.key!==void 0&&(de=""+ie.key),U.type&&U.type.defaultProps)var Ce=U.type.defaultProps;for(Fe in ie)Z.call(ie,Fe)&&!F.hasOwnProperty(Fe)&&(q[Fe]=ie[Fe]===void 0&&Ce!==void 0?Ce[Fe]:ie[Fe])}var Fe=arguments.length-2;if(Fe===1)q.children=Ue;else if(1<Fe){Ce=Array(Fe);for(var Ke=0;Ke<Fe;Ke++)Ce[Ke]=arguments[Ke+2];q.children=Ce}return{$$typeof:s,type:U.type,key:de,ref:Ee,props:q,_owner:xe}},ht.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ht.createElement=W,ht.createFactory=function(U){var ie=W.bind(null,U);return ie.type=U,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:d,render:U}},ht.isValidElement=C,ht.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:le}},ht.memo=function(U,ie){return{$$typeof:g,type:U,compare:ie===void 0?null:ie}},ht.startTransition=function(U){var ie=k.transition;k.transition={};try{U()}finally{k.transition=ie}},ht.unstable_act=se,ht.useCallback=function(U,ie){return fe.current.useCallback(U,ie)},ht.useContext=function(U){return fe.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return fe.current.useDeferredValue(U)},ht.useEffect=function(U,ie){return fe.current.useEffect(U,ie)},ht.useId=function(){return fe.current.useId()},ht.useImperativeHandle=function(U,ie,Ue){return fe.current.useImperativeHandle(U,ie,Ue)},ht.useInsertionEffect=function(U,ie){return fe.current.useInsertionEffect(U,ie)},ht.useLayoutEffect=function(U,ie){return fe.current.useLayoutEffect(U,ie)},ht.useMemo=function(U,ie){return fe.current.useMemo(U,ie)},ht.useReducer=function(U,ie,Ue){return fe.current.useReducer(U,ie,Ue)},ht.useRef=function(U){return fe.current.useRef(U)},ht.useState=function(U){return fe.current.useState(U)},ht.useSyncExternalStore=function(U,ie,Ue){return fe.current.useSyncExternalStore(U,ie,Ue)},ht.useTransition=function(){return fe.current.useTransition()},ht.version="18.3.1",ht}var Mp;function Bf(){return Mp||(Mp=1,pc.exports=q0()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function $0(){if(Ep)return Po;Ep=1;var s=Bf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,g){var x,m={},_=null,S=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!u.hasOwnProperty(x)&&(m[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)m[x]===void 0&&(m[x]=p[x]);return{$$typeof:e,type:d,key:_,ref:S,props:m,_owner:a.current}}return Po.Fragment=n,Po.jsx=c,Po.jsxs=c,Po}var Tp;function K0(){return Tp||(Tp=1,hc.exports=$0()),hc.exports}var qe=K0(),xr=Bf();const Z0=Fm(xr);var Ka={},mc={exports:{}},bn={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function Q0(){return wp||(wp=1,(function(s){function e(k,ce){var se=k.length;k.push(ce);e:for(;0<se;){var U=se-1>>>1,ie=k[U];if(0<a(ie,ce))k[U]=ce,k[se]=ie,se=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ce=k[0],se=k.pop();if(se!==ce){k[0]=se;e:for(var U=0,ie=k.length,Ue=ie>>>1;U<Ue;){var q=2*(U+1)-1,de=k[q],Ee=q+1,xe=k[Ee];if(0>a(de,se))Ee<ie&&0>a(xe,de)?(k[U]=xe,k[Ee]=se,U=Ee):(k[U]=de,k[q]=se,U=q);else if(Ee<ie&&0>a(xe,se))k[U]=xe,k[Ee]=se,U=Ee;else break e}}return ce}function a(k,ce){var se=k.sortIndex-ce.sortIndex;return se!==0?se:k.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],g=[],x=1,m=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var ce=n(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=k)r(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(g)}}function R(k){if(w=!1,D(k),!E)if(n(p)!==null)E=!0,le(Z);else{var ce=n(g);ce!==null&&fe(R,ce.startTime-k)}}function Z(k,ce){E=!1,w&&(w=!1,v(W),W=-1),S=!0;var se=_;try{for(D(ce),m=n(p);m!==null&&(!(m.expirationTime>ce)||k&&!B());){var U=m.callback;if(typeof U=="function"){m.callback=null,_=m.priorityLevel;var ie=U(m.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(p)&&r(p),D(ce)}else r(p);m=n(p)}if(m!==null)var Ue=!0;else{var q=n(g);q!==null&&fe(R,q.startTime-ce),Ue=!1}return Ue}finally{m=null,_=se,S=!1}}var z=!1,F=null,W=-1,b=5,C=-1;function B(){return!(s.unstable_now()-C<b)}function ue(){if(F!==null){var k=s.unstable_now();C=k;var ce=!0;try{ce=F(!0,k)}finally{ce?ee():(z=!1,F=null)}}else z=!1}var ee;if(typeof I=="function")ee=function(){I(ue)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=ue,ee=function(){pe.postMessage(null)}}else ee=function(){y(ue,0)};function le(k){F=k,z||(z=!0,ee())}function fe(k,ce){W=y(function(){k(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,le(Z))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var se=_;_=ce;try{return k()}finally{_=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ce){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=_;_=k;try{return ce()}finally{_=se}},s.unstable_scheduleCallback=function(k,ce,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,k={id:x++,callback:ce,priorityLevel:k,startTime:se,expirationTime:ie,sortIndex:-1},se>U?(k.sortIndex=se,e(g,k),n(p)===null&&k===n(g)&&(w?(v(W),W=-1):w=!0,fe(R,se-U))):(k.sortIndex=ie,e(p,k),E||S||(E=!0,le(Z))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var ce=_;return function(){var se=_;_=ce;try{return k.apply(this,arguments)}finally{_=se}}}})(vc)),vc}var Ap;function J0(){return Ap||(Ap=1,gc.exports=Q0()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function ev(){if(Cp)return bn;Cp=1;var s=Bf(),e=J0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},m={};function _(t){return p.call(m,t)?!0:p.call(x,t)?!1:g.test(t)?m[t]=!0:(x[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,f,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,I);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?_(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),k=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),h=l.stack.split(`
`),M=f.length-1,L=h.length-1;1<=M&&0<=L&&f[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==h[L]){var O=`
`+f[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function de(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case b:return"Profiler";case W:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=Fe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function vt(t){t._valueTracker||(t._valueTracker=Ke(t))}function ve(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Fe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function G(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function wt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function at(t,i){ct(t,i);var o=Ce(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?_t(t,i.type,o):i.hasOwnProperty("defaultValue")&&_t(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function _t(t,i,o){(i!=="number"||Tt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ce(o)}}function K(t,i){var o=Ce(i.value),l=Ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ae(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function re(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?re(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Me,Le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Me=Me||document.createElement("div"),Me.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Me.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function rt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,oe=null,me=null;function Ie(t){if(t=mo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),Re(t.stateNode,t.type,i))}}function De(t){oe?me?me.push(t):me=[t]:oe=t}function ot(){if(oe){var t=oe,i=me;if(me=oe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function It(t,i){return t(i)}function Xt(){}var xt=!1;function Mn(t,i,o){if(xt)return t(i,o);xt=!0;try{return It(t,i,o)}finally{xt=!1,(oe!==null||me!==null)&&(Xt(),ot())}}function gn(t,i){var o=t.stateNode;if(o===null)return null;var l=fa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Jr=!1;if(d)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Jr=!1}function Ei(t,i,o,l,f,h,M,L,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(_e){this.onError(_e)}}var Ti=!1,Er=null,Tr=!1,Yi=null,Xo={onError:function(t){Ti=!0,Er=t}};function es(t,i,o,l,f,h,M,L,O){Ti=!1,Er=null,Ei.apply(Xo,arguments)}function jo(t,i,o,l,f,h,M,L,O){if(es.apply(this,arguments),Ti){if(Ti){var Q=Er;Ti=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,Yi=Q)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(hi(t)!==t)throw Error(n(188))}function Nl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return qo(f),t;if(h===l)return qo(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var M=!1,L=f.child;L;){if(L===o){M=!0,o=f,l=h;break}if(L===l){M=!0,l=f,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=f;break}if(L===l){M=!0,l=h,o=f;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Nl(t),t!==null?X(t):null}function X(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=X(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,j=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,At=null,pt=null;function an(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Mt,Ye=Math.log,Zn=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Ye(t)/Zn|0)|0}var ln=64,Qn=4194304;function jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~f;L!==0?l=jt(L):(h&=M,h!==0&&(l=jt(h)))}else M=o&~f,M!==0?l=jt(M):h!==0&&(l=jt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-lt(i),f=1<<o,l|=t[o],i&=~f;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-lt(h),L=1<<M,O=f[M];O===-1?((L&o)===0||(L&l)!==0)&&(f[M]=Lt(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function Bn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function En(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function $o(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-lt(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function Fl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-lt(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var bt=0;function Jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ed,Ol,td,nd,id,kl=!1,Ko=[],qi=null,$i=null,Ki=null,Qs=new Map,Js=new Map,Zi=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=mo(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function vg(t,i,o,l,f){switch(i){case"focusin":return qi=eo(qi,t,i,o,l,f),!0;case"dragenter":return $i=eo($i,t,i,o,l,f),!0;case"mouseover":return Ki=eo(Ki,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,o,l,f)),!0}return!1}function sd(t){var i=wr(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,id(t.priority,function(){td(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Rt=l,o.target.dispatchEvent(l),Rt=null}else return i=mo(o),i!==null&&Ol(i),t.blockedOn=o,!1;i.shift()}return!0}function od(t,i,o){Zo(t)&&o.delete(i)}function _g(){kl=!1,qi!==null&&Zo(qi)&&(qi=null),$i!==null&&Zo($i)&&($i=null),Ki!==null&&Zo(Ki)&&(Ki=null),Qs.forEach(od),Js.forEach(od)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_g)))}function no(t){function i(f){return to(f,t)}if(0<Ko.length){to(Ko[0],t);for(var o=1;o<Ko.length;o++){var l=Ko[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&to(qi,t),$i!==null&&to($i,t),Ki!==null&&to(Ki,t),Qs.forEach(i),Js.forEach(i),o=0;o<Zi.length;o++)l=Zi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)sd(o),o.blockedOn===null&&Zi.shift()}var ts=R.ReactCurrentBatchConfig,Qo=!0;function xg(t,i,o,l){var f=bt,h=ts.transition;ts.transition=null;try{bt=1,zl(t,i,o,l)}finally{bt=f,ts.transition=h}}function yg(t,i,o,l){var f=bt,h=ts.transition;ts.transition=null;try{bt=4,zl(t,i,o,l)}finally{bt=f,ts.transition=h}}function zl(t,i,o,l){if(Qo){var f=Bl(t,i,o,l);if(f===null)iu(t,i,l,Jo,o),rd(t,l);else if(vg(f,t,i,o,l))l.stopPropagation();else if(rd(t,l),i&4&&-1<gg.indexOf(t)){for(;f!==null;){var h=mo(f);if(h!==null&&ed(h),h=Bl(t,i,o,l),h===null&&iu(t,i,l,Jo,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else iu(t,i,l,null,o)}}var Jo=null;function Bl(t,i,o,l){if(Jo=null,t=V(l),t=wr(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function ad(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case He:return 1;case tt:return 4;case it:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Qi=null,Hl=null,ea=null;function ld(){if(ea)return ea;var t,i=Hl,o=i.length,l,f="value"in Qi?Qi.value:Qi.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[h-l];l++);return ea=f.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function ud(){return!1}function Dn(t){function i(o,l,f,h,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:ud,this.isPropagationStopped=ud,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Dn(ns),io=se({},ns,{view:0,detail:0}),Sg=Dn(io),Gl,Wl,ro,ia=se({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Gl=t.screenX-ro.screenX,Wl=t.screenY-ro.screenY):Wl=Gl=0,ro=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),cd=Dn(ia),Mg=se({},ia,{dataTransfer:0}),Eg=Dn(Mg),Tg=se({},io,{relatedTarget:0}),Xl=Dn(Tg),wg=se({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=Dn(wg),Cg=se({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=Dn(Cg),bg=se({},ns,{data:0}),fd=Dn(bg),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ig(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Dg[t])?!!i[t]:!1}function jl(){return Ig}var Ug=se({},io,{key:function(t){if(t.key){var i=Pg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ng=Dn(Ug),Fg=se({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=Dn(Fg),Og=se({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),kg=Dn(Og),zg=se({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=Dn(zg),Hg=se({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=Dn(Hg),Gg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var Wg=d&&"TextEvent"in window&&!so,hd=d&&(!Yl||so&&8<so&&11>=so),pd=" ",md=!1;function gd(t,i){switch(t){case"keyup":return Gg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Xg(t,i){switch(t){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(md=!0,pd);case"textInput":return t=i.data,t===pd&&md?null:t;default:return null}}function jg(t,i){if(is)return t==="compositionend"||!Yl&&gd(t,i)?(t=ld(),ea=Hl=Qi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hd&&i.locale!=="ko"?null:i.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yg[t.type]:i==="textarea"}function xd(t,i,o,l){De(l),i=la(i,"onChange"),0<i.length&&(o=new Vl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function qg(t){Od(t,0)}function ra(t){var i=ls(t);if(ve(i))return t}function $g(t,i){if(t==="change")return i}var yd=!1;if(d){var ql;if(d){var $l="oninput"in document;if(!$l){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),$l=typeof Sd.oninput=="function"}ql=$l}else ql=!1;yd=ql&&(!document.documentMode||9<document.documentMode)}function Md(){oo&&(oo.detachEvent("onpropertychange",Ed),ao=oo=null)}function Ed(t){if(t.propertyName==="value"&&ra(ao)){var i=[];xd(i,ao,t,V(t)),Mn(qg,i)}}function Kg(t,i,o){t==="focusin"?(Md(),oo=i,ao=o,oo.attachEvent("onpropertychange",Ed)):t==="focusout"&&Md()}function Zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(ao)}function Qg(t,i){if(t==="click")return ra(i)}function Jg(t,i){if(t==="input"||t==="change")return ra(i)}function e0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:e0;function lo(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Jn(t[f],i[f]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,i){var o=Td(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Td(o)}}function Ad(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ad(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var t=window,i=Tt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Tt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function t0(t){var i=Cd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ad(o.ownerDocument.documentElement,o)){if(l!==null&&Kl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=wd(o,h);var M=wd(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n0=d&&"documentMode"in document&&11>=document.documentMode,rs=null,Zl=null,uo=null,Ql=!1;function Rd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||rs==null||rs!==Tt(l)||(l=rs,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=la(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=rs)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ss={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Jl={},bd={};d&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function oa(t){if(Jl[t])return Jl[t];if(!ss[t])return t;var i=ss[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in bd)return Jl[t]=i[o];return t}var Pd=oa("animationend"),Ld=oa("animationiteration"),Dd=oa("animationstart"),Id=oa("transitionend"),Ud=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){Ud.set(t,i),u(i,[t])}for(var eu=0;eu<Nd.length;eu++){var tu=Nd[eu],i0=tu.toLowerCase(),r0=tu[0].toUpperCase()+tu.slice(1);Ji(i0,"on"+r0)}Ji(Pd,"onAnimationEnd"),Ji(Ld,"onAnimationIteration"),Ji(Dd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Id,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Fd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,jo(l,i,void 0,t),t.currentTarget=null}function Od(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==h&&f.isPropagationStopped())break e;Fd(f,L,Q),h=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,Q=L.currentTarget,L=L.listener,O!==h&&f.isPropagationStopped())break e;Fd(f,L,Q),h=O}}}if(Tr)throw t=Yi,Tr=!1,Yi=null,t}function Ut(t,i){var o=i[uu];o===void 0&&(o=i[uu]=new Set);var l=t+"__bubble";o.has(l)||(kd(i,t,2,!1),o.add(l))}function nu(t,i,o){var l=0;i&&(l|=4),kd(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(o){o!=="selectionchange"&&(s0.has(o)||nu(o,!1,t),nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,nu("selectionchange",!1,i))}}function kd(t,i,o,l){switch(ad(i)){case 1:var f=xg;break;case 4:f=yg;break;default:f=zl}o=f.bind(null,i,o,t),f=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function iu(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;L!==null;){if(M=wr(L),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Mn(function(){var Q=h,_e=V(o),Se=[];e:{var ge=Ud.get(t);if(ge!==void 0){var Ne=Vl,Be=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Ne=Ng;break;case"focusin":Be="focus",Ne=Xl;break;case"focusout":Be="blur",Ne=Xl;break;case"beforeblur":case"afterblur":Ne=Xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=kg;break;case Pd:case Ld:case Dd:Ne=Ag;break;case Id:Ne=Bg;break;case"scroll":Ne=Sg;break;case"wheel":Ne=Vg;break;case"copy":case"cut":case"paste":Ne=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=dd}var Ve=(i&4)!==0,Vt=!Ve&&t==="scroll",Y=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=Q,$;H!==null;){$=H;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,Y!==null&&(we=gn(H,Y),we!=null&&Ve.push(ho(H,we,$)))),Vt)break;H=H.return}0<Ve.length&&(ge=new Ne(ge,Be,null,o,_e),Se.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ge&&o!==Rt&&(Be=o.relatedTarget||o.fromElement)&&(wr(Be)||Be[Ai]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Be=o.relatedTarget||o.toElement,Ne=Q,Be=Be?wr(Be):null,Be!==null&&(Vt=hi(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=Q),Ne!==Be)){if(Ve=cd,we="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=dd,we="onPointerLeave",Y="onPointerEnter",H="pointer"),Vt=Ne==null?ge:ls(Ne),$=Be==null?ge:ls(Be),ge=new Ve(we,H+"leave",Ne,o,_e),ge.target=Vt,ge.relatedTarget=$,we=null,wr(_e)===Q&&(Ve=new Ve(Y,H+"enter",Be,o,_e),Ve.target=$,Ve.relatedTarget=Vt,we=Ve),Vt=we,Ne&&Be)t:{for(Ve=Ne,Y=Be,H=0,$=Ve;$;$=os($))H++;for($=0,we=Y;we;we=os(we))$++;for(;0<H-$;)Ve=os(Ve),H--;for(;0<$-H;)Y=os(Y),$--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=os(Ve),Y=os(Y)}Ve=null}else Ve=null;Ne!==null&&zd(Se,ge,Ne,Ve,!1),Be!==null&&Vt!==null&&zd(Se,Vt,Be,Ve,!0)}}e:{if(ge=Q?ls(Q):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=$g;else if(_d(ge))if(yd)Xe=Jg;else{Xe=Zg;var Je=Kg}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Qg);if(Xe&&(Xe=Xe(t,Q))){xd(Se,Xe,o,_e);break e}Je&&Je(t,ge,Q),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&_t(ge,"number",ge.value)}switch(Je=Q?ls(Q):window,t){case"focusin":(_d(Je)||Je.contentEditable==="true")&&(rs=Je,Zl=Q,uo=null);break;case"focusout":uo=Zl=rs=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Rd(Se,o,_e);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Rd(Se,o,_e)}var et;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else is?gd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(hd&&o.locale!=="ko"&&(is||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&is&&(et=ld()):(Qi=_e,Hl="value"in Qi?Qi.value:Qi.textContent,is=!0)),Je=la(Q,nt),0<Je.length&&(nt=new fd(nt,t,null,o,_e),Se.push({event:nt,listeners:Je}),et?nt.data=et:(et=vd(o),et!==null&&(nt.data=et)))),(et=Wg?Xg(t,o):jg(t,o))&&(Q=la(Q,"onBeforeInput"),0<Q.length&&(_e=new fd("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:Q}),_e.data=et))}Od(Se,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=gn(t,o),h!=null&&l.unshift(ho(t,h,f)),h=gn(t,i),h!=null&&l.push(ho(t,h,f))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,o,l,f){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,O=L.alternate,Q=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&Q!==null&&(L=Q,f?(O=gn(o,h),O!=null&&M.unshift(ho(o,O,L))):f||(O=gn(o,h),O!=null&&M.push(ho(o,O,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(o0,`
`).replace(a0,"")}function ua(t,i,o){if(i=Bd(i),Bd(t)!==i&&o)throw Error(n(425))}function ca(){}var ru=null,su=null;function ou(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(c0)}:au;function c0(t){setTimeout(function(){throw t})}function lu(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);no(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Vd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),mi="__reactFiber$"+as,po="__reactProps$"+as,Ai="__reactContainer$"+as,uu="__reactEvents$"+as,f0="__reactListeners$"+as,d0="__reactHandles$"+as;function wr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Vd(t);t!==null;){if(o=t[mi])return o;t=Vd(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[mi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[po]||null}var cu=[],us=-1;function tr(t){return{current:t}}function Nt(t){0>us||(t.current=cu[us],cu[us]=null,us--)}function Dt(t,i){us++,cu[us]=t.current,t.current=i}var nr={},un=tr(nr),Tn=tr(!1),Ar=nr;function cs(t,i){var o=t.type.contextTypes;if(!o)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function wn(t){return t=t.childContextTypes,t!=null}function da(){Nt(Tn),Nt(un)}function Gd(t,i,o){if(un.current!==nr)throw Error(n(168));Dt(un,i),Dt(Tn,o)}function Wd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return se({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Ar=un.current,Dt(un,t),Dt(Tn,Tn.current),!0}function Xd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Wd(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Nt(Tn),Nt(un),Dt(un,t)):Nt(Tn),Dt(Tn,o)}var Ci=null,pa=!1,fu=!1;function jd(t){Ci===null?Ci=[t]:Ci.push(t)}function h0(t){pa=!0,jd(t)}function ir(){if(!fu&&Ci!==null){fu=!0;var t=0,i=bt;try{var o=Ci;for(bt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ci=null,pa=!1}catch(f){throw Ci!==null&&(Ci=Ci.slice(t+1)),te(He,ir),f}finally{bt=i,fu=!1}}return null}var fs=[],ds=0,ma=null,ga=0,Hn=[],Vn=0,Cr=null,Ri=1,bi="";function Rr(t,i){fs[ds++]=ga,fs[ds++]=ma,ma=t,ga=i}function Yd(t,i,o){Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Cr,Cr=t;var l=Ri;t=bi;var f=32-lt(l)-1;l&=~(1<<f),o+=1;var h=32-lt(i)+f;if(30<h){var M=f-f%5;h=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ri=1<<32-lt(i)+f|o<<f|l,bi=h+t}else Ri=1<<h|o<<f|l,bi=t}function du(t){t.return!==null&&(Rr(t,1),Yd(t,1,0))}function hu(t){for(;t===ma;)ma=fs[--ds],fs[ds]=null,ga=fs[--ds],fs[ds]=null;for(;t===Cr;)Cr=Hn[--Vn],Hn[Vn]=null,bi=Hn[--Vn],Hn[Vn]=null,Ri=Hn[--Vn],Hn[Vn]=null}var In=null,Un=null,Ft=!1,ei=null;function qd(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function $d(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Un=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ri,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Un=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Ft){var i=Un;if(i){var o=i;if(!$d(t,i)){if(pu(t))throw Error(n(418));i=er(o.nextSibling);var l=In;i&&$d(t,i)?qd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function Kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function va(t){if(t!==In)return!1;if(!Ft)return Kd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ou(t.type,t.memoizedProps)),i&&(i=Un)){if(pu(t))throw Zd(),Error(n(418));for(;i;)qd(t,i),i=er(i.nextSibling)}if(Kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=In?er(t.stateNode.nextSibling):null;return!0}function Zd(){for(var t=Un;t;)t=er(t.nextSibling)}function hs(){Un=In=null,Ft=!1}function gu(t){ei===null?ei=[t]:ei.push(t)}var p0=R.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=f.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Qd(t){var i=t._init;return i(t._payload)}function Jd(t){function i(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function o(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=fr(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,H,$,we){return H===null||H.tag!==6?(H=ac($,Y.mode,we),H.return=Y,H):(H=f(H,$),H.return=Y,H)}function O(Y,H,$,we){var Xe=$.type;return Xe===F?_e(Y,H,$.props.children,we,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&Qd(Xe)===H.type)?(we=f(H,$.props),we.ref=go(Y,H,$),we.return=Y,we):(we=Va($.type,$.key,$.props,null,Y.mode,we),we.ref=go(Y,H,$),we.return=Y,we)}function Q(Y,H,$,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=lc($,Y.mode,we),H.return=Y,H):(H=f(H,$.children||[]),H.return=Y,H)}function _e(Y,H,$,we,Xe){return H===null||H.tag!==7?(H=Fr($,Y.mode,we,Xe),H.return=Y,H):(H=f(H,$),H.return=Y,H)}function Se(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ac(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Z:return $=Va(H.type,H.key,H.props,null,Y.mode,$),$.ref=go(Y,null,H),$.return=Y,$;case z:return H=lc(H,Y.mode,$),H.return=Y,H;case le:var we=H._init;return Se(Y,we(H._payload),$)}if(je(H)||ce(H))return H=Fr(H,Y.mode,$,null),H.return=Y,H;_a(Y,H)}return null}function ge(Y,H,$,we){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:L(Y,H,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Z:return $.key===Xe?O(Y,H,$,we):null;case z:return $.key===Xe?Q(Y,H,$,we):null;case le:return Xe=$._init,ge(Y,H,Xe($._payload),we)}if(je($)||ce($))return Xe!==null?null:_e(Y,H,$,we,null);_a(Y,$)}return null}function Ne(Y,H,$,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get($)||null,L(H,Y,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Z:return Y=Y.get(we.key===null?$:we.key)||null,O(H,Y,we,Xe);case z:return Y=Y.get(we.key===null?$:we.key)||null,Q(H,Y,we,Xe);case le:var Je=we._init;return Ne(Y,H,$,Je(we._payload),Xe)}if(je(we)||ce(we))return Y=Y.get($)||null,_e(H,Y,we,Xe,null);_a(H,we)}return null}function Be(Y,H,$,we){for(var Xe=null,Je=null,et=H,nt=H=0,Jt=null;et!==null&&nt<$.length;nt++){et.index>nt?(Jt=et,et=null):Jt=et.sibling;var Et=ge(Y,et,$[nt],we);if(Et===null){et===null&&(et=Jt);break}t&&et&&Et.alternate===null&&i(Y,et),H=h(Et,H,nt),Je===null?Xe=Et:Je.sibling=Et,Je=Et,et=Jt}if(nt===$.length)return o(Y,et),Ft&&Rr(Y,nt),Xe;if(et===null){for(;nt<$.length;nt++)et=Se(Y,$[nt],we),et!==null&&(H=h(et,H,nt),Je===null?Xe=et:Je.sibling=et,Je=et);return Ft&&Rr(Y,nt),Xe}for(et=l(Y,et);nt<$.length;nt++)Jt=Ne(et,Y,nt,$[nt],we),Jt!==null&&(t&&Jt.alternate!==null&&et.delete(Jt.key===null?nt:Jt.key),H=h(Jt,H,nt),Je===null?Xe=Jt:Je.sibling=Jt,Je=Jt);return t&&et.forEach(function(dr){return i(Y,dr)}),Ft&&Rr(Y,nt),Xe}function Ve(Y,H,$,we){var Xe=ce($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var Je=Xe=null,et=H,nt=H=0,Jt=null,Et=$.next();et!==null&&!Et.done;nt++,Et=$.next()){et.index>nt?(Jt=et,et=null):Jt=et.sibling;var dr=ge(Y,et,Et.value,we);if(dr===null){et===null&&(et=Jt);break}t&&et&&dr.alternate===null&&i(Y,et),H=h(dr,H,nt),Je===null?Xe=dr:Je.sibling=dr,Je=dr,et=Jt}if(Et.done)return o(Y,et),Ft&&Rr(Y,nt),Xe;if(et===null){for(;!Et.done;nt++,Et=$.next())Et=Se(Y,Et.value,we),Et!==null&&(H=h(Et,H,nt),Je===null?Xe=Et:Je.sibling=Et,Je=Et);return Ft&&Rr(Y,nt),Xe}for(et=l(Y,et);!Et.done;nt++,Et=$.next())Et=Ne(et,Y,nt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&et.delete(Et.key===null?nt:Et.key),H=h(Et,H,nt),Je===null?Xe=Et:Je.sibling=Et,Je=Et);return t&&et.forEach(function(Y0){return i(Y,Y0)}),Ft&&Rr(Y,nt),Xe}function Vt(Y,H,$,we){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Z:e:{for(var Xe=$.key,Je=H;Je!==null;){if(Je.key===Xe){if(Xe=$.type,Xe===F){if(Je.tag===7){o(Y,Je.sibling),H=f(Je,$.props.children),H.return=Y,Y=H;break e}}else if(Je.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&Qd(Xe)===Je.type){o(Y,Je.sibling),H=f(Je,$.props),H.ref=go(Y,Je,$),H.return=Y,Y=H;break e}o(Y,Je);break}else i(Y,Je);Je=Je.sibling}$.type===F?(H=Fr($.props.children,Y.mode,we,$.key),H.return=Y,Y=H):(we=Va($.type,$.key,$.props,null,Y.mode,we),we.ref=go(Y,H,$),we.return=Y,Y=we)}return M(Y);case z:e:{for(Je=$.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){o(Y,H.sibling),H=f(H,$.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=lc($,Y.mode,we),H.return=Y,Y=H}return M(Y);case le:return Je=$._init,Vt(Y,H,Je($._payload),we)}if(je($))return Be(Y,H,$,we);if(ce($))return Ve(Y,H,$,we);_a(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(o(Y,H.sibling),H=f(H,$),H.return=Y,Y=H):(o(Y,H),H=ac($,Y.mode,we),H.return=Y,Y=H),M(Y)):o(Y,H)}return Vt}var ps=Jd(!0),eh=Jd(!1),xa=tr(null),ya=null,ms=null,vu=null;function _u(){vu=ms=ya=null}function xu(t){var i=xa.current;Nt(xa),t._currentValue=i}function yu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function gs(t,i){ya=t,vu=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(ya===null)throw Error(n(308));ms=t,ya.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var br=null;function Su(t){br===null?br=[t]:br.push(t)}function th(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Su(i)):(o.next=f.next,f.next=o),i.interleaved=o,Pi(t,l)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Pi(t,o)}return f=l.interleaved,f===null?(i.next=i,Su(l)):(i.next=f.next,f.next=i),l.interleaved=i,Pi(t,o)}function Sa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Fl(t,o)}}function ih(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ma(t,i,o,l){var f=t.updateQueue;rr=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var O=L,Q=O.next;O.next=null,M===null?h=Q:M.next=Q,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=Q:L.next=Q,_e.lastBaseUpdate=O))}if(h!==null){var Se=f.baseState;M=0,_e=Q=O=null,L=h;do{var ge=L.lane,Ne=L.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(ge=i,Ne=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Ne,Se,ge);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Ne,Se,ge):Be,ge==null)break e;Se=se({},Se,ge);break e;case 2:rr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[L]:ge.push(L))}else Ne={eventTime:Ne,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(Q=_e=Ne,O=Se):_e=_e.next=Ne,M|=ge;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(O=Se),f.baseState=O,f.firstBaseUpdate=Q,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Dr|=M,t.lanes=M,t.memoizedState=Se}}function rh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var vo={},gi=tr(vo),_o=tr(vo),xo=tr(vo);function Pr(t){if(t===vo)throw Error(n(174));return t}function Eu(t,i){switch(Dt(xo,i),Dt(_o,t),Dt(gi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Pe(i,t)}Nt(gi),Dt(gi,i)}function vs(){Nt(gi),Nt(_o),Nt(xo)}function sh(t){Pr(xo.current);var i=Pr(gi.current),o=Pe(i,t.type);i!==o&&(Dt(_o,t),Dt(gi,o))}function Tu(t){_o.current===t&&(Nt(gi),Nt(_o))}var kt=tr(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Au(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Ta=R.ReactCurrentDispatcher,Cu=R.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,Zt=null,wa=!1,yo=!1,So=0,m0=0;function cn(){throw Error(n(321))}function Ru(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function bu(t,i,o,l,f,h){if(Lr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?x0:y0,t=o(l,f),yo){h=0;do{if(yo=!1,So=0,25<=h)throw Error(n(301));h+=1,Zt=Yt=null,i.updateQueue=null,Ta.current=S0,t=o(l,f)}while(yo)}if(Ta.current=Ra,i=Yt!==null&&Yt.next!==null,Lr=0,Zt=Yt=zt=null,wa=!1,i)throw Error(n(300));return t}function Pu(){var t=So!==0;return So=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?zt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Wn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Zt===null?zt.memoizedState:Zt.next;if(i!==null)Zt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?zt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Mo(t,i){return typeof i=="function"?i(t):i}function Lu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var L=M=null,O=null,Q=h;do{var _e=Q.lane;if((Lr&_e)===_e)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var Se={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=Se,M=l):O=O.next=Se,zt.lanes|=_e,Dr|=_e}Q=Q.next}while(Q!==null&&Q!==h);O===null?M=l:O.next=L,Jn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,zt.lanes|=h,Dr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);Jn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function oh(){}function ah(t,i){var o=zt,l=Wn(),f=i(),h=!Jn(l.memoizedState,f);if(h&&(l.memoizedState=f,An=!0),l=l.queue,Iu(ch.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,Eo(9,uh.bind(null,o,l,f,i),void 0,null),Qt===null)throw Error(n(349));(Lr&30)!==0||lh(o,i,f)}return f}function lh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function uh(t,i,o,l){i.value=o,i.getSnapshot=l,fh(i)&&dh(t)}function ch(t,i,o){return o(function(){fh(i)&&dh(t)})}function fh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function dh(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function hh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=_0.bind(null,zt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function ph(){return Wn().memoizedState}function Aa(t,i,o,l){var f=vi();zt.flags|=t,f.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var f=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Ru(l,M.deps)){f.memoizedState=Eo(i,o,h,l);return}}zt.flags|=t,f.memoizedState=Eo(1|i,o,h,l)}function mh(t,i){return Aa(8390656,8,t,i)}function Iu(t,i){return Ca(2048,8,t,i)}function gh(t,i){return Ca(4,2,t,i)}function vh(t,i){return Ca(4,4,t,i)}function _h(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xh(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,_h.bind(null,i,t),o)}function Uu(){}function yh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Sh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Mh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):(Jn(o,i)||(o=vn(),zt.lanes|=o,Dr|=o,t.baseState=!0),i)}function g0(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var l=Cu.transition;Cu.transition={};try{t(!1),i()}finally{bt=o,Cu.transition=l}}function Eh(){return Wn().memoizedState}function v0(t,i,o){var l=ur(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Th(t))wh(i,o);else if(o=th(t,i,o,l),o!==null){var f=xn();ri(o,t,l,f),Ah(o,i,l)}}function _0(t,i,o){var l=ur(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Th(t))wh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(f.hasEagerState=!0,f.eagerState=L,Jn(L,M)){var O=i.interleaved;O===null?(f.next=f,Su(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=th(t,i,f,l),o!==null&&(f=xn(),ri(o,t,l,f),Ah(o,i,l))}}function Th(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function wh(t,i){yo=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ah(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Fl(t,o)}}var Ra={readContext:Gn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},x0={readContext:Gn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:mh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,_h.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=vi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=v0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:hh,useDebugValue:Uu,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=hh(!1),i=t[0];return t=g0.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,f=vi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Lr&30)!==0||lh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,mh(ch.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,uh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=vi(),i=Qt.identifierPrefix;if(Ft){var o=bi,l=Ri;o=(l&~(1<<32-lt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=So++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=m0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},y0={readContext:Gn,useCallback:yh,useContext:Gn,useEffect:Iu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:vh,useMemo:Sh,useReducer:Lu,useRef:ph,useState:function(){return Lu(Mo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Wn();return Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Lu(Mo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1},S0={readContext:Gn,useCallback:yh,useContext:Gn,useEffect:Iu,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:vh,useMemo:Sh,useReducer:Du,useRef:ph,useState:function(){return Du(Mo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Mh(i,Yt.memoizedState,t)},useTransition:function(){var t=Du(Mo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ba={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=xn(),f=ur(t),h=Li(l,f);h.payload=i,o!=null&&(h.callback=o),i=sr(t,h,f),i!==null&&(ri(i,t,f,l),Sa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=xn(),f=ur(t),h=Li(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=sr(t,h,f),i!==null&&(ri(i,t,f,l),Sa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xn(),l=ur(t),f=Li(o,l);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,l),i!==null&&(ri(i,t,l,o),Sa(i,t,l))}};function Ch(t,i,o,l,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(f,h):!0}function Rh(t,i,o){var l=!1,f=nr,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(f=wn(i)?Ar:un.current,l=i.contextTypes,h=(l=l!=null)?cs(t,f):nr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function bh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ba.enqueueReplaceState(i,i.state,null)}function Fu(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Mu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Gn(h):(h=wn(i)?Ar:un.current,f.context=cs(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Nu(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ba.enqueueReplaceState(f,f.state,null),Ma(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=de(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ku(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function Ph(t,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Fa||(Fa=!0,Ju=l),ku(t,i)},o}function Lh(t,i,o){o=Li(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ku(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ku(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Dh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new M0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=F0.bind(null,t,i,o),i.then(t,t))}function Ih(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Uh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var E0=R.ReactCurrentOwner,An=!1;function _n(t,i,o,l){i.child=t===null?eh(i,null,o,l):ps(i,t.child,o,l)}function Nh(t,i,o,l,f){o=o.render;var h=i.ref;return gs(i,f),l=bu(t,i,o,l,h,f),o=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Ft&&o&&du(i),i.flags|=1,_n(t,i,l,f),i.child)}function Fh(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!oc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Oh(t,i,h,l,f)):(t=Va(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,l)&&t.ref===i.ref)return Di(t,i,f)}return i.flags|=1,t=fr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Oh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Di(t,i,f)}return zu(t,i,o,l,f)}function kh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(ys,Nn),Nn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(ys,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(ys,Nn),Nn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(ys,Nn),Nn|=l;return _n(t,i,f,o),i.child}function zh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function zu(t,i,o,l,f){var h=wn(o)?Ar:un.current;return h=cs(i,h),gs(i,f),o=bu(t,i,o,l,h,f),l=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Ft&&l&&du(i),i.flags|=1,_n(t,i,o,f),i.child)}function Bh(t,i,o,l,f){if(wn(o)){var h=!0;ha(i)}else h=!1;if(gs(i,f),i.stateNode===null)La(t,i),Rh(i,o,l),Fu(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Gn(Q):(Q=wn(o)?Ar:un.current,Q=cs(i,Q));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==Q)&&bh(i,M,l,Q),rr=!1;var ge=i.memoizedState;M.state=ge,Ma(i,l,M,f),O=i.memoizedState,L!==l||ge!==O||Tn.current||rr?(typeof _e=="function"&&(Nu(i,o,_e,l),O=i.memoizedState),(L=rr||Ch(i,o,L,l,ge,O,Q))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,nh(t,i),L=i.memoizedProps,Q=i.type===i.elementType?L:ti(i.type,L),M.props=Q,Se=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Gn(O):(O=wn(o)?Ar:un.current,O=cs(i,O));var Ne=o.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||ge!==O)&&bh(i,M,l,O),rr=!1,ge=i.memoizedState,M.state=ge,Ma(i,l,M,f);var Be=i.memoizedState;L!==Se||ge!==Be||Tn.current||rr?(typeof Ne=="function"&&(Nu(i,o,Ne,l),Be=i.memoizedState),(Q=rr||Ch(i,o,Q,l,ge,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Bu(t,i,o,l,h,f)}function Bu(t,i,o,l,f,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Xd(i,o,!1),Di(t,i,h);l=i.stateNode,E0.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,h),i.child=ps(i,null,L,h)):_n(t,i,L,h),i.memoizedState=l.state,f&&Xd(i,o,!0),i.child}function Hh(t){var i=t.stateNode;i.pendingContext?Gd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(t,i.context,!1),Eu(t,i.containerInfo)}function Vh(t,i,o,l,f){return hs(),gu(f),i.flags|=256,_n(t,i,o,l),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gh(t,i,o){var l=i.pendingProps,f=kt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(kt,f&1),t===null)return mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ga(M,l,0,null),t=Fr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Vu(o),i.memoizedState=Hu,t):Gu(i,M));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return T0(t,i,M,l,L,f,o);if(h){h=l.fallback,M=i.mode,f=t.child,L=f.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=fr(f,O),l.subtreeFlags=f.subtreeFlags&14680064),L!==null?h=fr(L,h):(h=Fr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Vu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Hu,l}return h=t.child,t=h.sibling,l=fr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Gu(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,o,l){return l!==null&&gu(l),ps(i,t.child,null,o),t=Gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function T0(t,i,o,l,f,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Ou(Error(n(422))),Pa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Ga({mode:"visible",children:l.children},f,0,null),h=Fr(h,f,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ps(i,t.child,null,M),i.child.memoizedState=Vu(M),i.memoizedState=Hu,h);if((i.mode&1)===0)return Pa(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Ou(h,l,void 0),Pa(t,i,M,l)}if(L=(M&t.childLanes)!==0,An||L){if(l=Qt,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Pi(t,f),ri(l,t,f,-1))}return sc(),l=Ou(Error(n(421))),Pa(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=O0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Un=er(f.nextSibling),In=i,Ft=!0,ei=null,t!==null&&(Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Cr,Ri=t.id,bi=t.overflow,Cr=i),i=Gu(i,l.children),i.flags|=4096,i)}function Wh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yu(t.return,i,o)}function Wu(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function Xh(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(_n(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,o,i);else if(t.tag===19)Wh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Wu(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ea(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Wu(i,!0,o,null,h);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function w0(t,i,o){switch(i.tag){case 3:Hh(i),hs();break;case 5:sh(i);break;case 1:wn(i.type)&&ha(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Dt(xa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Gh(t,i,o):(Dt(kt,kt.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Xh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,kh(t,i,o)}return Di(t,i,o)}var jh,Xu,Yh,qh;jh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},Yh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Pr(gi.current);var h=null;switch(o){case"input":f=G(t,f),l=G(t,l),h=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":f=T(t,f),l=T(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}dt(o,l);var M;o=null;for(Q in f)if(!l.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var L=f[Q];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(L=f!=null?f[Q]:void 0,l.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(Q,o)),o=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Ut("scroll",t),h||L===O||(h=[])):(h=h||[]).push(Q,O))}o&&(h=h||[]).push("style",o);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},qh=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function A0(t,i,o){var l=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return wn(i.type)&&da(),fn(i),null;case 3:return l=i.stateNode,vs(),Nt(Tn),Nt(un),Au(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(nc(ei),ei=null))),Xu(t,i),fn(i),null;case 5:Tu(i);var f=Pr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Yh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Pr(gi.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[mi]=i,l[po]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(f=0;f<co.length;f++)Ut(co[f],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":wt(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":N(l,h),Ut("invalid",l)}dt(o,h),f=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,L,t),f=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,L,t),f=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":vt(l),$e(l,h,!0);break;case"textarea":vt(l),ae(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=re(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[po]=l,jh(t,i,!1,!1),i.stateNode=t;e:{switch(M=st(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),f=l;break;case"iframe":case"object":case"embed":Ut("load",t),f=l;break;case"video":case"audio":for(f=0;f<co.length;f++)Ut(co[f],t);f=l;break;case"source":Ut("error",t),f=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=l;break;case"details":Ut("toggle",t),f=l;break;case"input":wt(t,l),f=G(t,l),Ut("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":N(t,l),f=T(t,l),Ut("invalid",t);break;default:f=l}dt(o,f),L=f;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?Qe(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Le(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&rt(t,O):typeof O=="number"&&rt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&D(t,h,O,M))}switch(o){case"input":vt(t),$e(t,l,!1);break;case"textarea":vt(t),ae(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?P(t,!!l.multiple,h,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(xo.current),Pr(gi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(h=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:ua(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return fn(i),null;case 13:if(Nt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),hs(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[mi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else ei!==null&&(nc(ei),ei=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?qt===0&&(qt=3):sc())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return vs(),Xu(t,i),t===null&&fo(i.stateNode.containerInfo),fn(i),null;case 10:return xu(i.type._context),fn(i),null;case 17:return wn(i.type)&&da(),fn(i),null;case 19:if(Nt(kt),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>Ss&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return fn(i),null}else 2*Te()-h.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=kt.current,Dt(kt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return rc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function C0(t,i){switch(hu(i),i.tag){case 1:return wn(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Nt(Tn),Nt(un),Au(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(Nt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return vs(),null;case 10:return xu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Da=!1,dn=!1,R0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function xs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function ju(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var $h=!1;function b0(t,i){if(ru=Qo,t=Cd(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,O=-1,Q=0,_e=0,Se=t,ge=null;t:for(;;){for(var Ne;Se!==o||f!==0&&Se.nodeType!==3||(L=M+f),Se!==h||l!==0&&Se.nodeType!==3||(O=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)ge=Se,Se=Ne;for(;;){if(Se===t)break t;if(ge===o&&++Q===f&&(L=M),ge===h&&++_e===l&&(O=M),(Ne=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ne}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:t,selectionRange:o},Qo=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Vt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ti(i.type,Ve),Vt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Bt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Be=$h,$h=!1,Be}function wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&ju(i,o,h)}f=f.next}while(f!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Kh(t){var i=t.alternate;i!==null&&(t.alternate=null,Kh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[po],delete i[uu],delete i[f0],delete i[d0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zh(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}function $u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}var nn=null,ni=!1;function or(t,i,o){for(o=o.child;o!==null;)Jh(t,i,o),o=o.sibling}function Jh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:dn||xs(o,i);case 6:var l=nn,f=ni;nn=null,or(t,i,o),nn=l,ni=f,nn!==null&&(ni?(t=nn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nn.removeChild(o.stateNode));break;case 18:nn!==null&&(ni?(t=nn,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),no(t)):lu(nn,o.stateNode));break;case 4:l=nn,f=ni,nn=o.stateNode.containerInfo,ni=!0,or(t,i,o),nn=l,ni=f;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&ju(o,i,M),f=f.next}while(f!==l)}or(t,i,o);break;case 1:if(!dn&&(xs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Bt(o,i,L)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,or(t,i,o),dn=l):or(t,i,o);break;default:or(t,i,o)}}function ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new R0),i.forEach(function(l){var f=k0.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:nn=L.stateNode,ni=!1;break e;case 3:nn=L.stateNode.containerInfo,ni=!0;break e;case 4:nn=L.stateNode.containerInfo,ni=!0;break e}L=L.return}if(nn===null)throw Error(n(160));Jh(h,M,f),nn=null,ni=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(Q){Bt(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tp(i,t),i=i.sibling}function tp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),_i(t),l&4){try{wo(3,t,t.return),Ia(3,t)}catch(Ve){Bt(t,t.return,Ve)}try{wo(5,t,t.return)}catch(Ve){Bt(t,t.return,Ve)}}break;case 1:ii(i,t),_i(t),l&512&&o!==null&&xs(o,o.return);break;case 5:if(ii(i,t),_i(t),l&512&&o!==null&&xs(o,o.return),t.flags&32){var f=t.stateNode;try{rt(f,"")}catch(Ve){Bt(t,t.return,Ve)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ct(f,h),st(L,M);var Q=st(L,h);for(M=0;M<O.length;M+=2){var _e=O[M],Se=O[M+1];_e==="style"?Qe(f,Se):_e==="dangerouslySetInnerHTML"?Le(f,Se):_e==="children"?rt(f,Se):D(f,_e,Se,Q)}switch(L){case"input":at(f,h);break;case"textarea":K(f,h);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?P(f,!!h.multiple,Ne,!1):ge!==!!h.multiple&&(h.defaultValue!=null?P(f,!!h.multiple,h.defaultValue,!0):P(f,!!h.multiple,h.multiple?[]:"",!1))}f[po]=h}catch(Ve){Bt(t,t.return,Ve)}}break;case 6:if(ii(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(ii(i,t),_i(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}break;case 4:ii(i,t),_i(t);break;case 13:ii(i,t),_i(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Qu=Te())),l&4&&ep(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(Q=dn)||_e,ii(i,t),dn=Q):ii(i,t),_i(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!_e&&(t.mode&1)!==0)for(ke=t,_e=t.child;_e!==null;){for(Se=ke=_e;ke!==null;){switch(ge=ke,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:wo(4,ge,ge.return);break;case 1:xs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Bt(l,o,Ve)}}break;case 5:xs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){rp(Se);continue}}Ne!==null?(Ne.return=ge,ke=Ne):rp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,Q?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Se.stateNode,O=Se.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=Ze("display",M))}catch(Ve){Bt(t,t.return,Ve)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=Q?"":Se.memoizedProps}catch(Ve){Bt(t,t.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,t),_i(t),l&4&&ep(t);break;case 21:break;default:ii(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Zh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(rt(f,""),l.flags&=-33);var h=Qh(t);$u(t,h,f);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Qh(t);qu(t,L,M);break;default:throw Error(n(161))}}catch(O){Bt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function P0(t,i,o){ke=t,np(t)}function np(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var f=ke,h=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Da;if(!M){var L=f.alternate,O=L!==null&&L.memoizedState!==null||dn;L=Da;var Q=dn;if(Da=M,(dn=O)&&!Q)for(ke=f;ke!==null;)M=ke,O=M.child,M.tag===22&&M.memoizedState!==null?sp(f):O!==null?(O.return=M,ke=O):sp(f);for(;h!==null;)ke=h,np(h),h=h.sibling;ke=f,Da=L,dn=Q}ip(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,ke=h):ip(t)}}function ip(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&rh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}rh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&no(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Yu(i)}catch(ge){Bt(i,i.return,ge)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function rp(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function sp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(O){Bt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(O){Bt(i,f,O)}}var h=i.return;try{Yu(i)}catch(O){Bt(i,h,O)}break;case 5:var M=i.return;try{Yu(i)}catch(O){Bt(i,M,O)}}}catch(O){Bt(i,i.return,O)}if(i===t){ke=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ke=L;break}ke=i.return}}var L0=Math.ceil,Ua=R.ReactCurrentDispatcher,Ku=R.ReactCurrentOwner,Xn=R.ReactCurrentBatchConfig,yt=0,Qt=null,Gt=null,rn=0,Nn=0,ys=tr(0),qt=0,Ao=null,Dr=0,Na=0,Zu=0,Co=null,Cn=null,Qu=0,Ss=1/0,Ii=null,Fa=!1,Ju=null,ar=null,Oa=!1,lr=null,ka=0,Ro=0,ec=null,za=-1,Ba=0;function xn(){return(yt&6)!==0?Te():za!==-1?za:za=Te()}function ur(t){return(t.mode&1)===0?1:(yt&2)!==0&&rn!==0?rn&-rn:p0.transition!==null?(Ba===0&&(Ba=vn()),Ba):(t=bt,t!==0||(t=window.event,t=t===void 0?16:ad(t.type)),t)}function ri(t,i,o,l){if(50<Ro)throw Ro=0,ec=null,Error(n(185));En(t,o,l),((yt&2)===0||t!==Qt)&&(t===Qt&&((yt&2)===0&&(Na|=o),qt===4&&cr(t,rn)),Rn(t,l),o===1&&yt===0&&(i.mode&1)===0&&(Ss=Te()+500,pa&&ir()))}function Rn(t,i){var o=t.callbackNode;zn(t,i);var l=pi(t,t===Qt?rn:0);if(l===0)o!==null&&ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ne(o),i===1)t.tag===0?h0(ap.bind(null,t)):jd(ap.bind(null,t)),u0(function(){(yt&6)===0&&ir()}),o=null;else{switch(Jf(l)){case 1:o=He;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=mt;break;default:o=it}o=mp(o,op.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function op(t,i){if(za=-1,Ba=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var l=pi(t,t===Qt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var f=yt;yt|=2;var h=up();(Qt!==t||rn!==i)&&(Ii=null,Ss=Te()+500,Ur(t,i));do try{U0();break}catch(L){lp(t,L)}while(!0);_u(),Ua.current=h,yt=f,Gt!==null?i=0:(Qt=null,rn=0,i=qt)}if(i!==0){if(i===2&&(f=wi(t),f!==0&&(l=f,i=tc(t,f))),i===1)throw o=Ao,Ur(t,0),cr(t,l),Rn(t,Te()),o;if(i===6)cr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!D0(f)&&(i=Ha(t,l),i===2&&(h=wi(t),h!==0&&(l=h,i=tc(t,h))),i===1))throw o=Ao,Ur(t,0),cr(t,l),Rn(t,Te()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Cn,Ii);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Qu+500-Te(),10<i)){if(pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){xn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=au(Nr.bind(null,t,Cn,Ii),i);break}Nr(t,Cn,Ii);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-lt(l);h=1<<M,M=i[M],M>f&&(f=M),l&=~h}if(l=f,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*L0(l/1960))-l,10<l){t.timeoutHandle=au(Nr.bind(null,t,Cn,Ii),l);break}Nr(t,Cn,Ii);break;case 5:Nr(t,Cn,Ii);break;default:throw Error(n(329))}}}return Rn(t,Te()),t.callbackNode===o?op.bind(null,t):null}function tc(t,i){var o=Co;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=Cn,Cn=o,i!==null&&nc(i)),t}function nc(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function D0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Jn(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Zu,i&=~Na,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),l=1<<o;t[o]=-1,i&=~l}}function ap(t){if((yt&6)!==0)throw Error(n(327));Ms();var i=pi(t,0);if((i&1)===0)return Rn(t,Te()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=wi(t);l!==0&&(i=l,o=tc(t,l))}if(o===1)throw o=Ao,Ur(t,0),cr(t,i),Rn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Cn,Ii),Rn(t,Te()),null}function ic(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(Ss=Te()+500,pa&&ir())}}function Ir(t){lr!==null&&lr.tag===0&&(yt&6)===0&&Ms();var i=yt;yt|=1;var o=Xn.transition,l=bt;try{if(Xn.transition=null,bt=1,t)return t()}finally{bt=l,Xn.transition=o,yt=i,(yt&6)===0&&ir()}}function rc(){Nn=ys.current,Nt(ys)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,l0(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(hu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:vs(),Nt(Tn),Nt(un),Au();break;case 5:Tu(l);break;case 4:vs();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:xu(l.type._context);break;case 22:case 23:rc()}o=o.return}if(Qt=t,Gt=t=fr(t.current,null),rn=Nn=i,qt=0,Ao=null,Zu=Na=Dr=0,Cn=Co=null,br!==null){for(i=0;i<br.length;i++)if(o=br[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=f,l.next=M}o.pending=l}br=null}return t}function lp(t,i){do{var o=Gt;try{if(_u(),Ta.current=Ra,wa){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}wa=!1}if(Lr=0,Zt=Yt=zt=null,yo=!1,So=0,Ku.current=null,o===null||o.return===null){qt=1,Ao=i,Gt=null;break}e:{var h=t,M=o.return,L=o,O=i;if(i=rn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,_e=L,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=Ih(M);if(Ne!==null){Ne.flags&=-257,Uh(Ne,M,L,h,i),Ne.mode&1&&Dh(h,Q,i),i=Ne,O=Q;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Be.add(O);break e}else{if((i&1)===0){Dh(h,Q,i),sc();break e}O=Error(n(426))}}else if(Ft&&L.mode&1){var Vt=Ih(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Uh(Vt,M,L,h,i),gu(_s(O,L));break e}}h=O=_s(O,L),qt!==4&&(qt=2),Co===null?Co=[h]:Co.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Ph(h,O,i);ih(h,Y);break e;case 1:L=O;var H=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ar===null||!ar.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Lh(h,L,i);ih(h,we);break e}}h=h.return}while(h!==null)}fp(o)}catch(Xe){i=Xe,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function up(){var t=Ua.current;return Ua.current=Ra,t===null?Ra:t}function sc(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Dr&268435455)===0&&(Na&268435455)===0||cr(Qt,rn)}function Ha(t,i){var o=yt;yt|=2;var l=up();(Qt!==t||rn!==i)&&(Ii=null,Ur(t,i));do try{I0();break}catch(f){lp(t,f)}while(!0);if(_u(),yt=o,Ua.current=l,Gt!==null)throw Error(n(261));return Qt=null,rn=0,qt}function I0(){for(;Gt!==null;)cp(Gt)}function U0(){for(;Gt!==null&&!j();)cp(Gt)}function cp(t){var i=pp(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?fp(t):Gt=i,Ku.current=null}function fp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=A0(o,i,Nn),o!==null){Gt=o;return}}else{if(o=C0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Nr(t,i,o){var l=bt,f=Xn.transition;try{Xn.transition=null,bt=1,N0(t,i,o,l)}finally{Xn.transition=f,bt=l}return null}function N0(t,i,o,l){do Ms();while(lr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if($o(t,h),t===Qt&&(Gt=Qt=null,rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,mp(it,function(){return Ms(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=bt;bt=1;var L=yt;yt|=4,Ku.current=null,b0(t,o),tp(o,t),t0(su),Qo=!!ru,su=ru=null,t.current=o,P0(o),Ae(),yt=L,bt=M,Xn.transition=h}else t.current=o;if(Oa&&(Oa=!1,lr=t,ka=f),h=t.pendingLanes,h===0&&(ar=null),an(o.stateNode),Rn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Fa)throw Fa=!1,t=Ju,Ju=null,t;return(ka&1)!==0&&t.tag!==0&&Ms(),h=t.pendingLanes,(h&1)!==0?t===ec?Ro++:(Ro=0,ec=t):Ro=0,ir(),null}function Ms(){if(lr!==null){var t=Jf(ka),i=Xn.transition,o=bt;try{if(Xn.transition=null,bt=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,ka=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,ke=t.current;ke!==null;){var h=ke,M=h.child;if((ke.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(ke=Q;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:wo(8,_e,h)}var Se=_e.child;if(Se!==null)Se.return=_e,ke=Se;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ne=_e.return;if(Kh(_e),_e===Q){ke=null;break}if(ge!==null){ge.return=Ne,ke=ge;break}ke=Ne}}}var Be=h.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Vt=Ve.sibling;Ve.sibling=null,Ve=Vt}while(Ve!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ke=M;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,ke=Y;break e}ke=h.return}}var H=t.current;for(ke=H;ke!==null;){M=ke;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ke=$;else e:for(M=H;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ia(9,L)}}catch(Xe){Bt(L,L.return,Xe)}if(L===M){ke=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,ke=we;break e}ke=L.return}}if(yt=f,ir(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{bt=o,Xn.transition=i}}return!1}function dp(t,i,o){i=_s(o,i),i=Ph(t,i,1),t=sr(t,i,1),i=xn(),t!==null&&(En(t,1,i),Rn(t,i))}function Bt(t,i,o){if(t.tag===3)dp(t,t,o);else for(;i!==null;){if(i.tag===3){dp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=_s(o,t),t=Lh(i,t,1),i=sr(i,t,1),t=xn(),i!==null&&(En(i,1,t),Rn(i,t));break}}i=i.return}}function F0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(rn&o)===o&&(qt===4||qt===3&&(rn&130023424)===rn&&500>Te()-Qu?Ur(t,0):Zu|=o),Rn(t,i)}function hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=xn();t=Pi(t,i),t!==null&&(En(t,i,o),Rn(t,o))}function O0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),hp(t,o)}function k0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),hp(t,o)}var pp;pp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,w0(t,i,o);An=(t.flags&131072)!==0}else An=!1,Ft&&(i.flags&1048576)!==0&&Yd(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var f=cs(i,un.current);gs(i,o),f=bu(null,i,l,t,f,o);var h=Pu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,ha(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Mu(i),f.updater=ba,i.stateNode=f,f._reactInternals=i,Fu(i,l,t,o),i=Bu(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&du(i),_n(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=B0(l),t=ti(l,t),f){case 0:i=zu(null,i,l,t,o);break e;case 1:i=Bh(null,i,l,t,o);break e;case 11:i=Nh(null,i,l,t,o);break e;case 14:i=Fh(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),zu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),Bh(t,i,l,f,o);case 3:e:{if(Hh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,nh(t,i),Ma(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=_s(Error(n(423)),i),i=Vh(t,i,l,o,f);break e}else if(l!==f){f=_s(Error(n(424)),i),i=Vh(t,i,l,o,f);break e}else for(Un=er(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,ei=null,o=eh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),l===f){i=Di(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return sh(i),t===null&&mu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,M=f.children,ou(l,f)?M=null:h!==null&&ou(l,h)&&(i.flags|=32),zh(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&mu(i),null;case 13:return Gh(t,i,o);case 4:return Eu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ps(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),Nh(t,i,l,f,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,M=f.value,Dt(xa,l._currentValue),l._currentValue=M,h!==null)if(Jn(h.value,M)){if(h.children===f.children&&!Tn.current){i=Di(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Li(-1,o&-o),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),Q.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),yu(h.return,o,i),L.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),yu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}_n(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,gs(i,o),f=Gn(f),l=l(f),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,f=ti(l,i.pendingProps),f=ti(l.type,f),Fh(t,i,l,f,o);case 15:return Oh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ti(l,f),La(t,i),i.tag=1,wn(l)?(t=!0,ha(i)):t=!1,gs(i,o),Rh(i,l,f),Fu(i,l,f,o),Bu(null,i,l,!0,t,o);case 19:return Xh(t,i,o);case 22:return kh(t,i,o)}throw Error(n(156,i.tag))};function mp(t,i){return te(t,i)}function z0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new z0(t,i,o,l)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B0(t){if(typeof t=="function")return oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===pe)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,f,h){var M=2;if(l=t,typeof t=="function")oc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Fr(o.children,f,h,i);case W:M=8,f|=8;break;case b:return t=jn(12,o,i,f|2),t.elementType=b,t.lanes=h,t;case ee:return t=jn(13,o,i,f),t.elementType=ee,t.lanes=h,t;case he:return t=jn(19,o,i,f),t.elementType=he,t.lanes=h,t;case fe:return Ga(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case B:M=9;break e;case ue:M=11;break e;case pe:M=14;break e;case le:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Fr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=jn(22,t,l,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function ac(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function lc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function H0(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function uc(t,i,o,l,f,h,M,L,O){return t=new H0(t,i,o,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(h),t}function V0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function gp(t){if(!t)return nr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return Wd(t,o,i)}return i}function vp(t,i,o,l,f,h,M,L,O){return t=uc(o,l,!0,t,f,h,M,L,O),t.context=gp(null),o=t.current,l=xn(),f=ur(o),h=Li(l,f),h.callback=i??null,sr(o,h,f),t.current.lanes=f,En(t,f,l),Rn(t,l),t}function Wa(t,i,o,l){var f=i.current,h=xn(),M=ur(f);return o=gp(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(f,i,M),t!==null&&(ri(t,f,M,h),Sa(t,f,M)),M}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function cc(t,i){_p(t,i),(t=t.alternate)&&_p(t,i)}function G0(){return null}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}ja.prototype.render=fc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},ja.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Wa(null,t,null,null)}),i[Ai]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=nd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&sd(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function W0(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var Q=Xa(M);h.call(Q)}}var M=vp(i,l,t,0,null,!1,!1,"",yp);return t._reactRootContainer=M,t[Ai]=M.current,fo(t.nodeType===8?t.parentNode:t),Ir(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var L=l;l=function(){var Q=Xa(O);L.call(Q)}}var O=uc(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=O,t[Ai]=O.current,fo(t.nodeType===8?t.parentNode:t),Ir(function(){Wa(i,O,o,l)}),O}function qa(t,i,o,l,f){var h=o._reactRootContainer;if(h){var M=h;if(typeof f=="function"){var L=f;f=function(){var O=Xa(M);L.call(O)}}Wa(i,M,t,f)}else M=W0(o,i,t,f,l);return Xa(M)}ed=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);o!==0&&(Fl(i,o|1),Rn(i,Te()),(yt&6)===0&&(Ss=Te()+500,ir()))}break;case 13:Ir(function(){var l=Pi(t,1);if(l!==null){var f=xn();ri(l,t,1,f)}}),cc(t,1)}},Ol=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=xn();ri(i,t,134217728,o)}cc(t,134217728)}},td=function(t){if(t.tag===13){var i=ur(t),o=Pi(t,i);if(o!==null){var l=xn();ri(o,t,i,l)}cc(t,i)}},nd=function(){return bt},id=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},Re=function(t,i,o){switch(i){case"input":if(at(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=fa(l);if(!f)throw Error(n(90));ve(l),at(l,f)}}}break;case"textarea":K(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},It=ic,Xt=Ir;var X0={usingClientEntryPoint:!1,Events:[mo,ls,fa,De,ot,ic]},bo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{At=$a.inject(j0),pt=$a}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0,bn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return V0(t,i,null,o)},bn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,l="",f=xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=uc(t,1,!1,null,null,o,!1,l,f),t[Ai]=i.current,fo(t.nodeType===8?t.parentNode:t),new fc(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Ir(t)},bn.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!0,o)},bn.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",M=xp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=vp(i,null,t,1,o??null,f,!1,h,M),t[Ai]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ja(i)},bn.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!1,o)},bn.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},bn.unstable_batchedUpdates=ic,bn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Rp;function tv(){if(Rp)return mc.exports;Rp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mc.exports=ev(),mc.exports}var bp;function nv(){if(bp)return Ka;bp=1;var s=tv();return Ka.createRoot=s.createRoot,Ka.hydrateRoot=s.hydrateRoot,Ka}var iv=nv();const rv=Fm(iv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="170",sv=0,Pp=1,ov=2,Om=1,av=2,zi=3,Wi=0,mn=1,li=2,Sr=0,zs=1,Lp=2,Dp=3,Ip=4,lv=5,Xr=100,uv=101,cv=102,fv=103,dv=104,hv=200,pv=201,mv=202,gv=203,Kc=204,Zc=205,vv=206,_v=207,xv=208,yv=209,Sv=210,Mv=211,Ev=212,Tv=213,wv=214,Qc=0,Jc=1,ef=2,Vs=3,tf=4,nf=5,rf=6,sf=7,Vf=0,Av=1,Cv=2,Mr=0,Rv=1,bv=2,Pv=3,km=4,Lv=5,Dv=6,Iv=7,zm=300,Gs=301,Ws=302,of=303,af=304,Pl=306,qr=1e3,$r=1001,lf=1002,fi=1003,Uv=1004,Za=1005,yi=1006,_c=1007,Kr=1008,Xi=1009,Bm=1010,Hm=1011,zo=1012,Gf=1013,Zr=1014,Hi=1015,Bo=1016,Wf=1017,Xf=1018,Xs=1020,Vm=35902,Gm=1021,Wm=1022,ci=1023,Xm=1024,jm=1025,Bs=1026,js=1027,Ym=1028,jf=1029,qm=1030,Yf=1031,qf=1033,Sl=33776,Ml=33777,El=33778,Tl=33779,uf=35840,cf=35841,ff=35842,df=35843,hf=36196,pf=37492,mf=37496,gf=37808,vf=37809,_f=37810,xf=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,wf=37817,Af=37818,Cf=37819,Rf=37820,bf=37821,wl=36492,Pf=36494,Lf=36495,$m=36283,Df=36284,If=36285,Uf=36286,Nv=3200,Fv=3201,Km=0,Ov=1,yr="",qn="srgb",qs="srgb-linear",Ll="linear",Pt="srgb",Es=7680,Up=519,kv=512,zv=513,Bv=514,Zm=515,Hv=516,Vv=517,Gv=518,Wv=519,Np=35044,Fp="300 es",Vi=2e3,Cl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,Nf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Ln(s,e,n){return Math.max(e,Math.min(n,s))}function Xv(s,e){return(s%e+e)%e}function yc(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,u,c,d,p,g){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,g)}set(e,n,r,a,u,c,d,p,g){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=n,x[4]=u,x[5]=p,x[6]=r,x[7]=c,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],g=r[1],x=r[4],m=r[7],_=r[2],S=r[5],E=r[8],w=a[0],y=a[3],v=a[6],I=a[1],D=a[4],R=a[7],Z=a[2],z=a[5],F=a[8];return u[0]=c*w+d*I+p*Z,u[3]=c*y+d*D+p*z,u[6]=c*v+d*R+p*F,u[1]=g*w+x*I+m*Z,u[4]=g*y+x*D+m*z,u[7]=g*v+x*R+m*F,u[2]=_*w+S*I+E*Z,u[5]=_*y+S*D+E*z,u[8]=_*v+S*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],g=e[7],x=e[8];return n*c*x-n*d*g-r*u*x+r*d*p+a*u*g-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],g=e[7],x=e[8],m=x*c-d*g,_=d*p-x*u,S=g*u-c*p,E=n*m+r*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=m*w,e[1]=(a*g-x*r)*w,e[2]=(d*r-a*c)*w,e[3]=_*w,e[4]=(x*n-a*p)*w,e[5]=(a*u-d*n)*w,e[6]=S*w,e[7]=(r*p-g*n)*w,e[8]=(c*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const p=Math.cos(u),g=Math.sin(u);return this.set(r*p,r*g,-r*(p*c+g*d)+c+e,-a*g,a*p,-a*(-g*c+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Sc.makeScale(e,n)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new ut;function Qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jv(){const s=Rl("canvas");return s.style.display="block",s}const Op={};function Fo(s){s in Op||(Op[s]=!0,console.warn(s))}function Yv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function qv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $v(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yr?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const kp=[.64,.33,.3,.6,.15,.06],zp=[.2126,.7152,.0722],Bp=[.3127,.329],Hp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[qs]:{primaries:kp,whitePoint:Bp,transfer:Ll,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:zp,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:kp,whitePoint:Bp,transfer:Pt,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:zp,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let Ts;class Kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Rl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Gi(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zv=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Mc(a[c].image)):u.push(Mc(a[c]))}else u=Mc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Sn extends $s{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,r=$r,a=$r,u=yi,c=Kr,d=ci,p=Xi,g=Sn.DEFAULT_ANISOTROPY,x=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ho(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=zm;Sn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,g=p[0],x=p[4],m=p[8],_=p[1],S=p[5],E=p[9],w=p[2],y=p[6],v=p[10];if(Math.abs(x-_)<.01&&Math.abs(m-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(m+w)<.1&&Math.abs(E+y)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,R=(S+1)/2,Z=(v+1)/2,z=(x+_)/4,F=(m+w)/4,W=(E+y)/4;return D>R&&D>Z?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=z/r,u=F/r):R>Z?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=z/a,u=W/a):Z<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Z),r=F/u,a=W/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-E)*(y-E)+(m-w)*(m-w)+(_-x)*(_-x));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(m-w)/I,this.z=(_-x)/I,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Sn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Jm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Jv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class eg extends Sn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e_ extends Sn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let p=r[a+0],g=r[a+1],x=r[a+2],m=r[a+3];const _=u[c+0],S=u[c+1],E=u[c+2],w=u[c+3];if(d===0){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=m;return}if(d===1){e[n+0]=_,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(m!==w||p!==_||g!==S||x!==E){let y=1-d;const v=p*_+g*S+x*E+m*w,I=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const Z=Math.sqrt(D),z=Math.atan2(Z,v*I);y=Math.sin(y*z)/Z,d=Math.sin(d*z)/Z}const R=d*I;if(p=p*y+_*R,g=g*y+S*R,x=x*y+E*R,m=m*y+w*R,y===1-d){const Z=1/Math.sqrt(p*p+g*g+x*x+m*m);p*=Z,g*=Z,x*=Z,m*=Z}}e[n]=p,e[n+1]=g,e[n+2]=x,e[n+3]=m}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],p=r[a+1],g=r[a+2],x=r[a+3],m=u[c],_=u[c+1],S=u[c+2],E=u[c+3];return e[n]=d*E+x*m+p*S-g*_,e[n+1]=p*E+x*_+g*m-d*S,e[n+2]=g*E+x*S+d*_-p*m,e[n+3]=x*E-d*m-p*_-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,g=d(r/2),x=d(a/2),m=d(u/2),_=p(r/2),S=p(a/2),E=p(u/2);switch(c){case"XYZ":this._x=_*x*m+g*S*E,this._y=g*S*m-_*x*E,this._z=g*x*E+_*S*m,this._w=g*x*m-_*S*E;break;case"YXZ":this._x=_*x*m+g*S*E,this._y=g*S*m-_*x*E,this._z=g*x*E-_*S*m,this._w=g*x*m+_*S*E;break;case"ZXY":this._x=_*x*m-g*S*E,this._y=g*S*m+_*x*E,this._z=g*x*E+_*S*m,this._w=g*x*m-_*S*E;break;case"ZYX":this._x=_*x*m-g*S*E,this._y=g*S*m+_*x*E,this._z=g*x*E-_*S*m,this._w=g*x*m+_*S*E;break;case"YZX":this._x=_*x*m+g*S*E,this._y=g*S*m+_*x*E,this._z=g*x*E-_*S*m,this._w=g*x*m-_*S*E;break;case"XZY":this._x=_*x*m-g*S*E,this._y=g*S*m-_*x*E,this._z=g*x*E+_*S*m,this._w=g*x*m+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],p=n[9],g=n[2],x=n[6],m=n[10],_=r+d+m;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(x-p)*S,this._y=(u-g)*S,this._z=(c-a)*S}else if(r>d&&r>m){const S=2*Math.sqrt(1+r-d-m);this._w=(x-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-r-m);this._w=(u-g)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+m-r-d);this._w=(c-a)/S,this._x=(u+g)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,p=n._y,g=n._z,x=n._w;return this._x=r*x+c*d+a*g-u*p,this._y=a*x+c*p+u*d-r*g,this._z=u*x+c*g+r*p-a*d,this._w=c*x-r*d-a*p-u*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const g=Math.sqrt(p),x=Math.atan2(g,d),m=Math.sin((1-n)*x)/g,_=Math.sin(n*x)/g;return this._w=c*m+this._w*_,this._x=r*m+this._x*_,this._y=a*m+this._y*_,this._z=u*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,g=2*(c*a-d*r),x=2*(d*n-u*a),m=2*(u*r-c*n);return this.x=n+p*g+c*m-d*x,this.y=r+p*x+d*g-u*m,this.z=a+p*m+u*x-c*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new J,Gp=new Vo;class Go{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(u,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Ja.subVectors(this.max,Do),ws.subVectors(e.a,Do),As.subVectors(e.b,Do),Cs.subVectors(e.c,Do),hr.subVectors(As,ws),pr.subVectors(Cs,As),Or.subVectors(ws,Cs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Or.z,Or.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Or.z,0,-Or.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Or.y,Or.x,0];return!Tc(n,ws,As,Cs,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,ws,As,Cs,Ja))?!1:(el.crossVectors(hr,pr),n=[el.x,el.y,el.z],Tc(n,ws,As,Cs,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new J,new J,new J,new J,new J,new J,new J,new J],si=new J,Qa=new Go,ws=new J,As=new J,Cs=new J,hr=new J,pr=new J,Or=new J,Do=new J,Ja=new J,el=new J,kr=new J;function Tc(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){kr.fromArray(s,u);const d=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),p=e.dot(kr),g=n.dot(kr),x=r.dot(kr);if(Math.max(-Math.max(p,g,x),Math.min(p,g,x))>d)return!1}return!0}const t_=new Go,Io=new J,wc=new J;class Dl{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):t_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Io,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(wc)),this.expandByPoint(Io.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new J,Ac=new J,tl=new J,mr=new J,Cc=new J,nl=new J,Rc=new J;class $f{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ac.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Ac);const u=e.distanceTo(n)*.5,c=-this.direction.dot(tl),d=mr.dot(this.direction),p=-mr.dot(tl),g=mr.lengthSq(),x=Math.abs(1-c*c);let m,_,S,E;if(x>0)if(m=c*p-d,_=c*d-p,E=u*x,m>=0)if(_>=-E)if(_<=E){const w=1/x;m*=w,_*=w,S=m*(m+c*_+2*d)+_*(c*m+_+2*p)+g}else _=u,m=Math.max(0,-(c*_+d)),S=-m*m+_*(_+2*p)+g;else _=-u,m=Math.max(0,-(c*_+d)),S=-m*m+_*(_+2*p)+g;else _<=-E?(m=Math.max(0,-(-c*u+d)),_=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g):_<=E?(m=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+g):(m=Math.max(0,-(c*u+d)),_=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g);else _=c>0?-u:u,m=Math.max(0,-(c*_+d)),S=-m*m+_*(_+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Ac).addScaledVector(tl,_),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,p;const g=1/this.direction.x,x=1/this.direction.y,m=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,a=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,a=(e.min.x-_.x)*g),x>=0?(u=(e.min.y-_.y)*x,c=(e.max.y-_.y)*x):(u=(e.max.y-_.y)*x,c=(e.min.y-_.y)*x),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),m>=0?(d=(e.min.z-_.z)*m,p=(e.max.z-_.z)*m):(d=(e.max.z-_.z)*m,p=(e.min.z-_.z)*m),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),nl.subVectors(r,e),Rc.crossVectors(Cc,nl);let c=this.direction.dot(Rc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;mr.subVectors(this.origin,e);const p=d*this.direction.dot(nl.crossVectors(mr,nl));if(p<0)return null;const g=d*this.direction.dot(Cc.cross(mr));if(g<0||p+g>c)return null;const x=-d*mr.dot(Rc);return x<0?null:this.at(x/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,a,u,c,d,p,g,x,m,_,S,E,w,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,g,x,m,_,S,E,w,y)}set(e,n,r,a,u,c,d,p,g,x,m,_,S,E,w,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=u,v[5]=c,v[9]=d,v[13]=p,v[2]=g,v[6]=x,v[10]=m,v[14]=_,v[3]=S,v[7]=E,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),c=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),g=Math.sin(a),x=Math.cos(u),m=Math.sin(u);if(e.order==="XYZ"){const _=c*x,S=c*m,E=d*x,w=d*m;n[0]=p*x,n[4]=-p*m,n[8]=g,n[1]=S+E*g,n[5]=_-w*g,n[9]=-d*p,n[2]=w-_*g,n[6]=E+S*g,n[10]=c*p}else if(e.order==="YXZ"){const _=p*x,S=p*m,E=g*x,w=g*m;n[0]=_+w*d,n[4]=E*d-S,n[8]=c*g,n[1]=c*m,n[5]=c*x,n[9]=-d,n[2]=S*d-E,n[6]=w+_*d,n[10]=c*p}else if(e.order==="ZXY"){const _=p*x,S=p*m,E=g*x,w=g*m;n[0]=_-w*d,n[4]=-c*m,n[8]=E+S*d,n[1]=S+E*d,n[5]=c*x,n[9]=w-_*d,n[2]=-c*g,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const _=c*x,S=c*m,E=d*x,w=d*m;n[0]=p*x,n[4]=E*g-S,n[8]=_*g+w,n[1]=p*m,n[5]=w*g+_,n[9]=S*g-E,n[2]=-g,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const _=c*p,S=c*g,E=d*p,w=d*g;n[0]=p*x,n[4]=w-_*m,n[8]=E*m+S,n[1]=m,n[5]=c*x,n[9]=-d*x,n[2]=-g*x,n[6]=S*m+E,n[10]=_-w*m}else if(e.order==="XZY"){const _=c*p,S=c*g,E=d*p,w=d*g;n[0]=p*x,n[4]=-m,n[8]=g*x,n[1]=_*m+w,n[5]=c*x,n[9]=S*m-E,n[2]=E*m-S,n[6]=d*x,n[10]=w*m+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,i_)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),gr.crossVectors(r,Fn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),gr.crossVectors(r,Fn)),gr.normalize(),il.crossVectors(Fn,gr),a[0]=gr.x,a[4]=il.x,a[8]=Fn.x,a[1]=gr.y,a[5]=il.y,a[9]=Fn.y,a[2]=gr.z,a[6]=il.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],g=r[12],x=r[1],m=r[5],_=r[9],S=r[13],E=r[2],w=r[6],y=r[10],v=r[14],I=r[3],D=r[7],R=r[11],Z=r[15],z=a[0],F=a[4],W=a[8],b=a[12],C=a[1],B=a[5],ue=a[9],ee=a[13],he=a[2],pe=a[6],le=a[10],fe=a[14],k=a[3],ce=a[7],se=a[11],U=a[15];return u[0]=c*z+d*C+p*he+g*k,u[4]=c*F+d*B+p*pe+g*ce,u[8]=c*W+d*ue+p*le+g*se,u[12]=c*b+d*ee+p*fe+g*U,u[1]=x*z+m*C+_*he+S*k,u[5]=x*F+m*B+_*pe+S*ce,u[9]=x*W+m*ue+_*le+S*se,u[13]=x*b+m*ee+_*fe+S*U,u[2]=E*z+w*C+y*he+v*k,u[6]=E*F+w*B+y*pe+v*ce,u[10]=E*W+w*ue+y*le+v*se,u[14]=E*b+w*ee+y*fe+v*U,u[3]=I*z+D*C+R*he+Z*k,u[7]=I*F+D*B+R*pe+Z*ce,u[11]=I*W+D*ue+R*le+Z*se,u[15]=I*b+D*ee+R*fe+Z*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],g=e[13],x=e[2],m=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],v=e[15];return E*(+u*p*m-a*g*m-u*d*_+r*g*_+a*d*S-r*p*S)+w*(+n*p*S-n*g*_+u*c*_-a*c*S+a*g*x-u*p*x)+y*(+n*g*m-n*d*S-u*c*m+r*c*S+u*d*x-r*g*x)+v*(-a*d*x-n*p*m+n*d*_+a*c*m-r*c*_+r*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],g=e[7],x=e[8],m=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],v=e[15],I=m*y*g-w*_*g+w*p*S-d*y*S-m*p*v+d*_*v,D=E*_*g-x*y*g-E*p*S+c*y*S+x*p*v-c*_*v,R=x*w*g-E*m*g+E*d*S-c*w*S-x*d*v+c*m*v,Z=E*m*p-x*w*p-E*d*_+c*w*_+x*d*y-c*m*y,z=n*I+r*D+a*R+u*Z;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=I*F,e[1]=(w*_*u-m*y*u-w*a*S+r*y*S+m*a*v-r*_*v)*F,e[2]=(d*y*u-w*p*u+w*a*g-r*y*g-d*a*v+r*p*v)*F,e[3]=(m*p*u-d*_*u-m*a*g+r*_*g+d*a*S-r*p*S)*F,e[4]=D*F,e[5]=(x*y*u-E*_*u+E*a*S-n*y*S-x*a*v+n*_*v)*F,e[6]=(E*p*u-c*y*u-E*a*g+n*y*g+c*a*v-n*p*v)*F,e[7]=(c*_*u-x*p*u+x*a*g-n*_*g-c*a*S+n*p*S)*F,e[8]=R*F,e[9]=(E*m*u-x*w*u-E*r*S+n*w*S+x*r*v-n*m*v)*F,e[10]=(c*w*u-E*d*u+E*r*g-n*w*g-c*r*v+n*d*v)*F,e[11]=(x*d*u-c*m*u-x*r*g+n*m*g+c*r*S-n*d*S)*F,e[12]=Z*F,e[13]=(x*w*a-E*m*a+E*r*_-n*w*_-x*r*y+n*m*y)*F,e[14]=(E*d*a-c*w*a-E*r*p+n*w*p+c*r*y-n*d*y)*F,e[15]=(c*m*a-x*d*a+x*r*p-n*m*p-c*r*_+n*d*_)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,g=u*c,x=u*d;return this.set(g*c+r,g*d-a*p,g*p+a*d,0,g*d+a*p,x*d+r,x*p-a*c,0,g*p-a*d,x*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,g=u+u,x=c+c,m=d+d,_=u*g,S=u*x,E=u*m,w=c*x,y=c*m,v=d*m,I=p*g,D=p*x,R=p*m,Z=r.x,z=r.y,F=r.z;return a[0]=(1-(w+v))*Z,a[1]=(S+R)*Z,a[2]=(E-D)*Z,a[3]=0,a[4]=(S-R)*z,a[5]=(1-(_+v))*z,a[6]=(y+I)*z,a[7]=0,a[8]=(E+D)*F,a[9]=(y-I)*F,a[10]=(1-(_+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const c=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const g=1/u,x=1/c,m=1/d;return oi.elements[0]*=g,oi.elements[1]*=g,oi.elements[2]*=g,oi.elements[4]*=x,oi.elements[5]*=x,oi.elements[6]*=x,oi.elements[8]*=m,oi.elements[9]*=m,oi.elements[10]*=m,n.setFromRotationMatrix(oi),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=Vi){const p=this.elements,g=2*u/(n-e),x=2*u/(r-a),m=(n+e)/(n-e),_=(r+a)/(r-a);let S,E;if(d===Vi)S=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(d===Cl)S=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=x,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=Vi){const p=this.elements,g=1/(n-e),x=1/(r-a),m=1/(c-u),_=(n+e)*g,S=(r+a)*x;let E,w;if(d===Vi)E=(c+u)*m,w=-2*m;else if(d===Cl)E=u*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new J,oi=new Ot,n_=new J(0,0,0),i_=new J(1,1,1),gr=new J,il=new J,Fn=new J,Wp=new Ot,Xp=new Vo;class Si{constructor(e=0,n=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],g=a[5],x=a[9],m=a[2],_=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r_=0;const jp=new J,bs=new Vo,Fi=new Ot,rl=new J,Uo=new J,s_=new J,o_=new Vo,Yp=new J(1,0,0),qp=new J(0,1,0),$p=new J(0,0,1),Kp={type:"added"},a_={type:"removed"},Ps={type:"childadded",child:null},bc={type:"childremoved",child:null};class on extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new J,n=new Si,r=new Vo,a=new J(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ut}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Uo,rl,this.up):Fi.lookAt(rl,Uo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Fi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a_),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,x=p.length;g<x;g++){const m=p[g];u(e.shapes,m)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),g=c(e.textures),x=c(e.images),m=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),m.length>0&&(r.shapes=m),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const p=[];for(const g in d){const x=d[g];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new J(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new J,Oi=new J,Pc=new J,ki=new J,Ls=new J,Ds=new J,Zp=new J,Lc=new J,Dc=new J,Ic=new J,Uc=new Ht,Nc=new Ht,Fc=new Ht;class ui{constructor(e=new J,n=new J,r=new J){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ai.subVectors(a,n),Oi.subVectors(r,n),Pc.subVectors(e,n);const c=ai.dot(ai),d=ai.dot(Oi),p=ai.dot(Pc),g=Oi.dot(Oi),x=Oi.dot(Pc),m=c*g-d*d;if(m===0)return u.set(0,0,0),null;const _=1/m,S=(g*p-d*x)*_,E=(c*x-d*p)*_;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,u,c,d,p){return this.getBarycoord(e,n,r,a,ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ki.x),p.addScaledVector(c,ki.y),p.addScaledVector(d,ki.z),p)}static getInterpolatedAttribute(e,n,r,a,u,c){return Uc.setScalar(0),Nc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,r),Fc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Uc,u.x),c.addScaledVector(Nc,u.y),c.addScaledVector(Fc,u.z),c}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Oi.subVectors(e,n),ai.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;Ls.subVectors(a,r),Ds.subVectors(u,r),Lc.subVectors(e,r);const p=Ls.dot(Lc),g=Ds.dot(Lc);if(p<=0&&g<=0)return n.copy(r);Dc.subVectors(e,a);const x=Ls.dot(Dc),m=Ds.dot(Dc);if(x>=0&&m<=x)return n.copy(a);const _=p*m-x*g;if(_<=0&&p>=0&&x<=0)return c=p/(p-x),n.copy(r).addScaledVector(Ls,c);Ic.subVectors(e,u);const S=Ls.dot(Ic),E=Ds.dot(Ic);if(E>=0&&S<=E)return n.copy(u);const w=S*g-p*E;if(w<=0&&g>=0&&E<=0)return d=g/(g-E),n.copy(r).addScaledVector(Ds,d);const y=x*E-S*m;if(y<=0&&m-x>=0&&S-E>=0)return Zp.subVectors(u,a),d=(m-x)/(m-x+(S-E)),n.copy(a).addScaledVector(Zp,d);const v=1/(y+w+_);return c=w*v,d=_*v,n.copy(r).addScaledVector(Ls,c).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Oc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=St.workingColorSpace){if(e=Xv(e,1),n=Ln(n,0,1),r=Ln(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Oc(c,u,e+1/3),this.g=Oc(c,u,e),this.b=Oc(c,u,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return St.fromWorkingColorSpace(pn.copy(this),e),Math.round(Ln(pn.r*255,0,255))*65536+Math.round(Ln(pn.g*255,0,255))*256+Math.round(Ln(pn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,u=pn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,g;const x=(d+c)/2;if(d===c)p=0,g=0;else{const m=c-d;switch(g=x<=.5?m/(c+d):m/(2-c-d),c){case r:p=(a-u)/m+(a<u?6:0);break;case a:p=(u-r)/m+2;break;case u:p=(r-a)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=x,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=qn){St.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(sl);const r=yc(vr.h,sl.h,n),a=yc(vr.s,sl.s,n),u=yc(vr.l,sl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new gt;gt.NAMES=tg;let l_=0;class Ks extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ho(),this.name="",this.blending=zs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Wi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kc&&(r.blendSrc=this.blendSrc),this.blendDst!==Zc&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jr extends Ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new J,ol=new Ct;class Kn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class ng extends Kn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ig extends Kn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class kn extends Kn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let u_=0;const Yn=new Ot,kc=new on,Is=new J,On=new Go,No=new Go,en=new J;class di extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(On.min,No.min),On.expandByPoint(en),en.addVectors(On.max,No.max),On.expandByPoint(en)):(On.expandByPoint(No.min),On.expandByPoint(No.max))}On.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let g=0,x=d.count;g<x;g++)en.fromBufferAttribute(d,g),p&&(Is.fromBufferAttribute(e,g),en.add(Is)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new J,p[W]=new J;const g=new J,x=new J,m=new J,_=new Ct,S=new Ct,E=new Ct,w=new J,y=new J;function v(W,b,C){g.fromBufferAttribute(r,W),x.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),_.fromBufferAttribute(u,W),S.fromBufferAttribute(u,b),E.fromBufferAttribute(u,C),x.sub(g),m.sub(g),S.sub(_),E.sub(_);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(w.copy(x).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(B),y.copy(m).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(B),d[W].add(w),d[b].add(w),d[C].add(w),p[W].add(y),p[b].add(y),p[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let W=0,b=I.length;W<b;++W){const C=I[W],B=C.start,ue=C.count;for(let ee=B,he=B+ue;ee<he;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new J,R=new J,Z=new J,z=new J;function F(W){Z.fromBufferAttribute(a,W),z.copy(Z);const b=d[W];D.copy(b),D.sub(Z.multiplyScalar(Z.dot(b))).normalize(),R.crossVectors(z,b);const B=R.dot(p[W])<0?-1:1;c.setXYZW(W,D.x,D.y,D.z,B)}for(let W=0,b=I.length;W<b;++W){const C=I[W],B=C.start,ue=C.count;for(let ee=B,he=B+ue;ee<he;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const a=new J,u=new J,c=new J,d=new J,p=new J,g=new J,x=new J,m=new J;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),c.fromBufferAttribute(n,y),x.subVectors(c,u),m.subVectors(a,u),x.cross(m),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),d.add(x),p.add(x),g.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,S=n.count;_<S;_+=3)a.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),x.subVectors(c,u),m.subVectors(a,u),x.cross(m),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const g=d.array,x=d.itemSize,m=d.normalized,_=new g.constructor(p.length*x);let S=0,E=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*x;for(let v=0;v<x;v++)_[E++]=g[S++]}return new Kn(_,x,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],g=e(p,r);n.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let x=0,m=g.length;x<m;x++){const _=g[x],S=e(_,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],x=[];for(let m=0,_=g.length;m<_;m++){const S=g[m];x.push(S.toJSON(e.data))}x.length>0&&(a[p]=x,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const x=a[g];this.setAttribute(g,x.clone(n))}const u=e.morphAttributes;for(const g in u){const x=[],m=u[g];for(let _=0,S=m.length;_<S;_++)x.push(m[_].clone(n));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let g=0,x=c.length;g<x;g++){const m=c[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qp=new Ot,zr=new $f,al=new Dl,Jp=new J,ll=new J,ul=new J,cl=new J,zc=new J,fl=new J,em=new J,dl=new J;class tn extends on{constructor(e=new di,n=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){fl.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const x=d[p],m=u[p];x!==0&&(zc.fromBufferAttribute(m,e),c?fl.addScaledVector(zc,x):fl.addScaledVector(zc.sub(n),x))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(u),zr.copy(e.ray).recast(e.near),!(al.containsPoint(zr.origin)===!1&&(zr.intersectSphere(al,Jp)===null||zr.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(Qp.copy(u).invert(),zr.copy(e.ray).applyMatrix4(Qp),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,x=u.attributes.uv1,m=u.attributes.normal,_=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],I=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,Z=D;R<Z;R+=3){const z=d.getX(R),F=d.getX(R+1),W=d.getX(R+2);a=hl(this,v,e,r,g,x,m,z,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const I=d.getX(y),D=d.getX(y+1),R=d.getX(y+2);a=hl(this,c,e,r,g,x,m,I,D,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],I=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,Z=D;R<Z;R+=3){const z=R,F=R+1,W=R+2;a=hl(this,v,e,r,g,x,m,z,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const I=y,D=y+1,R=y+2;a=hl(this,c,e,r,g,x,m,I,D,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function c_(s,e,n,r,a,u,c,d){let p;if(e.side===mn?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===Wi,d),p===null)return null;dl.copy(d),dl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(dl);return g<n.near||g>n.far?null:{distance:g,point:dl.clone(),object:s}}function hl(s,e,n,r,a,u,c,d,p,g){s.getVertexPosition(d,ll),s.getVertexPosition(p,ul),s.getVertexPosition(g,cl);const x=c_(s,e,n,r,ll,ul,cl,em);if(x){const m=new J;ui.getBarycoord(em,ll,ul,cl,m),a&&(x.uv=ui.getInterpolatedAttribute(a,d,p,g,m,new Ct)),u&&(x.uv1=ui.getInterpolatedAttribute(u,d,p,g,m,new Ct)),c&&(x.normal=ui.getInterpolatedAttribute(c,d,p,g,m,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new J,materialIndex:0};ui.getNormal(ll,ul,cl,_.normal),x.face=_,x.barycoord=m}return x}class Wo extends di{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],g=[],x=[],m=[];let _=0,S=0;E("z","y","x",-1,-1,r,n,e,c,u,0),E("z","y","x",1,-1,r,n,-e,c,u,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(x,3)),this.setAttribute("uv",new kn(m,2));function E(w,y,v,I,D,R,Z,z,F,W,b){const C=R/F,B=Z/W,ue=R/2,ee=Z/2,he=z/2,pe=F+1,le=W+1;let fe=0,k=0;const ce=new J;for(let se=0;se<le;se++){const U=se*B-ee;for(let ie=0;ie<pe;ie++){const Ue=ie*C-ue;ce[w]=Ue*I,ce[y]=U*D,ce[v]=he,g.push(ce.x,ce.y,ce.z),ce[w]=0,ce[y]=0,ce[v]=z>0?1:-1,x.push(ce.x,ce.y,ce.z),m.push(ie/F),m.push(1-se/W),fe+=1}}for(let se=0;se<W;se++)for(let U=0;U<F;U++){const ie=_+U+pe*se,Ue=_+U+pe*(se+1),q=_+(U+1)+pe*(se+1),de=_+(U+1)+pe*se;p.push(ie,Ue,de),p.push(Ue,q,de),k+=6}d.addGroup(S,k,b),S+=k,_+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function f_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const d_={clone:Ys,merge:yn};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=f_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class sg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new J,tm=new Ct,nm=new Ct;class $n extends sg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,tm,nm),n.subVectors(nm,tm)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,g=c.fullHeight;u+=c.offsetX*a/p,n-=c.offsetY*r/g,a*=c.width/p,r*=c.height/g}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Ns=1;class m_ extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Us,Ns,e,n);a.layers=this.layers,this.add(a);const u=new $n(Us,Ns,e,n);u.layers=this.layers,this.add(u);const c=new $n(Us,Ns,e,n);c.layers=this.layers,this.add(c);const d=new $n(Us,Ns,e,n);d.layers=this.layers,this.add(d);const p=new $n(Us,Ns,e,n);p.layers=this.layers,this.add(p);const g=new $n(Us,Ns,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,p]=n;for(const g of n)this.remove(g);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,g,x]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,x),e.setRenderTarget(m,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class og extends Sn{constructor(e,n,r,a,u,c,d,p,g,x){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,u,c,d,p,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g_ extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new og(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Wo(5,5,5),u=new Mi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mn,blending:Sr});u.uniforms.tEquirect.value=n;const c=new tn(a,u),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=yi),new m_(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}const Bc=new J,v_=new J,__=new ut;class Gr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bc.subVectors(r,n).cross(v_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||__.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Dl,pl=new J;class Zf{constructor(e=new Gr,n=new Gr,r=new Gr,a=new Gr,u=new Gr,c=new Gr){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],g=a[4],x=a[5],m=a[6],_=a[7],S=a[8],E=a[9],w=a[10],y=a[11],v=a[12],I=a[13],D=a[14],R=a[15];if(r[0].setComponents(p-u,_-g,y-S,R-v).normalize(),r[1].setComponents(p+u,_+g,y+S,R+v).normalize(),r[2].setComponents(p+c,_+x,y+E,R+I).normalize(),r[3].setComponents(p-c,_-x,y-E,R-I).normalize(),r[4].setComponents(p-d,_-m,y-w,R-D).normalize(),n===Vi)r[5].setComponents(p+d,_+m,y+w,R+D).normalize();else if(n===Cl)r[5].setComponents(d,m,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(pl.x=a.normal.x>0?e.max.x:e.min.x,pl.y=a.normal.y>0?e.max.y:e.min.y,pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ag(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function x_(s){const e=new WeakMap;function n(d,p){const g=d.array,x=d.usage,m=g.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,g,x),d.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,p,g){const x=p.array,m=p.updateRanges;if(s.bindBuffer(g,d),m.length===0)s.bufferSubData(g,0,x);else{m.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<m.length;S++){const E=m[_],w=m[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,m[_]=w)}m.length=_+1;for(let S=0,E=m.length;S<E;S++){const w=m[S];s.bufferSubData(g,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,n(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,p),g.version=d.version}}return{get:a,remove:u,update:c}}class Il extends di{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(a),g=d+1,x=p+1,m=e/d,_=n/p,S=[],E=[],w=[],y=[];for(let v=0;v<x;v++){const I=v*_-c;for(let D=0;D<g;D++){const R=D*m-u;E.push(R,-I,0),w.push(0,0,1),y.push(D/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let I=0;I<d;I++){const D=I+g*v,R=I+g*(v+1),Z=I+1+g*(v+1),z=I+1+g*v;S.push(D,R,z),S.push(R,Z,z)}this.setIndex(S),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.widthSegments,e.heightSegments)}}var y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,G_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ky=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,By=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:y_,alphahash_pars_fragment:S_,alphamap_fragment:M_,alphamap_pars_fragment:E_,alphatest_fragment:T_,alphatest_pars_fragment:w_,aomap_fragment:A_,aomap_pars_fragment:C_,batching_pars_vertex:R_,batching_vertex:b_,begin_vertex:P_,beginnormal_vertex:L_,bsdfs:D_,iridescence_fragment:I_,bumpmap_pars_fragment:U_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:k_,color_fragment:z_,color_pars_fragment:B_,color_pars_vertex:H_,color_vertex:V_,common:G_,cube_uv_reflection_fragment:W_,defaultnormal_vertex:X_,displacementmap_pars_vertex:j_,displacementmap_vertex:Y_,emissivemap_fragment:q_,emissivemap_pars_fragment:$_,colorspace_fragment:K_,colorspace_pars_fragment:Z_,envmap_fragment:Q_,envmap_common_pars_fragment:J_,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:dx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:rx,fog_fragment:sx,fog_pars_fragment:ox,gradientmap_pars_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:cx,lights_pars_begin:fx,lights_toon_fragment:hx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:vx,lights_physical_pars_fragment:_x,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:wx,map_fragment:Ax,map_pars_fragment:Cx,map_particle_fragment:Rx,map_particle_pars_fragment:bx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Dx,morphcolor_vertex:Ix,morphnormal_vertex:Ux,morphtarget_pars_vertex:Nx,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:kx,normal_pars_fragment:zx,normal_pars_vertex:Bx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:jx,opaque_fragment:Yx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Qx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:ry,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:ly,specularmap_fragment:uy,specularmap_pars_fragment:cy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:hy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:vy,worldpos_vertex:_y,background_vert:xy,background_frag:yy,backgroundCube_vert:Sy,backgroundCube_frag:My,cube_vert:Ey,cube_frag:Ty,depth_vert:wy,depth_frag:Ay,distanceRGBA_vert:Cy,distanceRGBA_frag:Ry,equirect_vert:by,equirect_frag:Py,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Iy,meshbasic_frag:Uy,meshlambert_vert:Ny,meshlambert_frag:Fy,meshmatcap_vert:Oy,meshmatcap_frag:ky,meshnormal_vert:zy,meshnormal_frag:By,meshphong_vert:Hy,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:jy,points_vert:Yy,points_frag:qy,shadow_vert:$y,shadow_frag:Ky,sprite_vert:Zy,sprite_frag:Qy},be={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new gt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new gt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};xi.physical={uniforms:yn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const ml={r:0,b:0,g:0},Hr=new Si,Jy=new Ot;function eS(s,e,n,r,a,u,c){const d=new gt(0);let p=u===!0?0:1,g,x,m=null,_=0,S=null;function E(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?n:e).get(D)),D}function w(I){let D=!1;const R=E(I);R===null?v(d,p):R&&R.isColor&&(v(R,1),D=!0);const Z=s.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,c):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,D){const R=E(D);R&&(R.isCubeTexture||R.mapping===Pl)?(x===void 0&&(x=new tn(new Wo(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ys(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(Z,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),Hr.copy(D.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.material.uniforms.envMap.value=R,x.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(Hr)),x.material.toneMapped=St.getTransfer(R.colorSpace)!==Pt,(m!==R||_!==R.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,m=R,_=R.version,S=s.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new tn(new Il(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ys(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=St.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||_!==R.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,m=R,_=R.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null))}function v(I,D){I.getRGB(ml,rg(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,D,c)}return{getClearColor:function(){return d},setClearColor:function(I,D=1){d.set(I),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,v(d,p)},render:w,addToRenderList:y}}function tS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let u=a,c=!1;function d(C,B,ue,ee,he){let pe=!1;const le=m(ee,ue,B);u!==le&&(u=le,g(u.object)),pe=S(C,ee,ue,he),pe&&E(C,ee,ue,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,R(C,B,ue,ee),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function m(C,B,ue){const ee=ue.wireframe===!0;let he=r[C.id];he===void 0&&(he={},r[C.id]=he);let pe=he[B.id];pe===void 0&&(pe={},he[B.id]=pe);let le=pe[ee];return le===void 0&&(le=_(p()),pe[ee]=le),le}function _(C){const B=[],ue=[],ee=[];for(let he=0;he<n;he++)B[he]=0,ue[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ue,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,B,ue,ee){const he=u.attributes,pe=B.attributes;let le=0;const fe=ue.getAttributes();for(const k in fe)if(fe[k].location>=0){const se=he[k];let U=pe[k];if(U===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;le++}return u.attributesNum!==le||u.index!==ee}function E(C,B,ue,ee){const he={},pe=B.attributes;let le=0;const fe=ue.getAttributes();for(const k in fe)if(fe[k].location>=0){let se=pe[k];se===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),he[k]=U,le++}u.attributes=he,u.attributesNum=le,u.index=ee}function w(){const C=u.newAttributes;for(let B=0,ue=C.length;B<ue;B++)C[B]=0}function y(C){v(C,0)}function v(C,B){const ue=u.newAttributes,ee=u.enabledAttributes,he=u.attributeDivisors;ue[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),he[C]!==B&&(s.vertexAttribDivisor(C,B),he[C]=B)}function I(){const C=u.newAttributes,B=u.enabledAttributes;for(let ue=0,ee=B.length;ue<ee;ue++)B[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),B[ue]=0)}function D(C,B,ue,ee,he,pe,le){le===!0?s.vertexAttribIPointer(C,B,ue,he,pe):s.vertexAttribPointer(C,B,ue,ee,he,pe)}function R(C,B,ue,ee){w();const he=ee.attributes,pe=ue.getAttributes(),le=B.defaultAttributeValues;for(const fe in pe){const k=pe[fe];if(k.location>=0){let ce=he[fe];if(ce===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const se=ce.normalized,U=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const Ue=ie.buffer,q=ie.type,de=ie.bytesPerElement,Ee=q===s.INT||q===s.UNSIGNED_INT||ce.gpuType===Gf;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ce=xe.stride,Fe=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<k.locationSize;Ke++)v(k.location+Ke,xe.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ke=0;Ke<k.locationSize;Ke++)y(k.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ke=0;Ke<k.locationSize;Ke++)D(k.location+Ke,U/k.locationSize,q,se,Ce*de,(Fe+U/k.locationSize*Ke)*de,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)v(k.location+xe,ce.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<k.locationSize;xe++)D(k.location+xe,U/k.locationSize,q,se,U*de,U/k.locationSize*xe*de,Ee)}}else if(le!==void 0){const se=le[fe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(k.location,se);break;case 3:s.vertexAttrib3fv(k.location,se);break;case 4:s.vertexAttrib4fv(k.location,se);break;default:s.vertexAttrib1fv(k.location,se)}}}}I()}function Z(){W();for(const C in r){const B=r[C];for(const ue in B){const ee=B[ue];for(const he in ee)x(ee[he].object),delete ee[he];delete B[ue]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ue in B){const ee=B[ue];for(const he in ee)x(ee[he].object),delete ee[he];delete B[ue]}delete r[C.id]}function F(C){for(const B in r){const ue=r[B];if(ue[C.id]===void 0)continue;const ee=ue[C.id];for(const he in ee)x(ee[he].object),delete ee[he];delete ue[C.id]}}function W(){b(),c=!0,u!==a&&(u=a,g(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:b,dispose:Z,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function nS(s,e,n){let r;function a(g){r=g}function u(g,x){s.drawArrays(r,g,x),n.update(x,r,1)}function c(g,x,m){m!==0&&(s.drawArraysInstanced(r,g,x,m),n.update(x,r,m))}function d(g,x,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,m);let S=0;for(let E=0;E<m;E++)S+=x[E];n.update(S,r,1)}function p(g,x,m,_){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)c(g[E],x[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,g,0,x,0,_,0,m);let E=0;for(let w=0;w<m;w++)E+=x[w]*_[w];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function iS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!W)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const x=p(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const m=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Z=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:Z,maxSamples:z}}function rS(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new Gr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const S=m.length!==0||_||r!==0||a;return a=_,r=m.length,S},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,_){n=x(m,_,0)},this.setState=function(m,_,S){const E=m.clippingPlanes,w=m.clipIntersection,y=m.clipShadows,v=s.get(m);if(!a||E===null||E.length===0||u&&!y)u?x(null):g();else{const I=u?0:r,D=I*4;let R=v.clippingState||null;p.value=R,R=x(E,_,D,S);for(let Z=0;Z!==D;++Z)R[Z]=n[Z];v.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(m,_,S,E){const w=m!==null?m.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const v=S+w*4,I=_.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,R=S;D!==w;++D,R+=4)c.copy(m[D]).applyMatrix4(I,d),c.normal.toArray(y,R),y[R+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function sS(s){let e=new WeakMap;function n(c,d){return d===of?c.mapping=Gs:d===af&&(c.mapping=Ws),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===of||d===af)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const g=new g_(p.height);return g.fromEquirectangularTexture(s,c),e.set(c,g),c.addEventListener("dispose",a),n(g.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class lg extends sg{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,c=u+g*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,im=[.125,.215,.35,.446,.526,.582],Yr=20,Hc=new lg,rm=new gt;let Vc=null,Gc=0,Wc=0,Xc=!1;const Wr=(1+Math.sqrt(5))/2,Fs=1/Wr,sm=[new J(-Wr,Fs,0),new J(Wr,Fs,0),new J(-Fs,0,Wr),new J(Fs,0,Wr),new J(0,Wr,-Fs),new J(0,Wr,Fs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Bo,format:ci,colorSpace:qs,depthBuffer:!1},a=am(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(u)),this._blurMaterial=aS(u,e,n)}return a}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(rm),x.toneMapping=Mr,x.autoClear=!1;const S=new jr({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),E=new tn(new Wo,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(rm),w=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(d.up.set(0,p[v],0),d.lookAt(g[v],0,0)):I===1?(d.up.set(0,0,p[v]),d.lookAt(0,g[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,g[v]));const D=this._cubeSize;gl(a,I*D,v>2?D:0,D,D),x.setRenderTarget(a),w&&x.render(E,d),x.render(e,d)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=_,x.autoClear=m,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new tn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;gl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Hc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=sm[(a-u-1)%sm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const p=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,m=new tn(this._lodPlanes[a],g),_=g.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),w=u/E,y=isFinite(u)?1+Math.floor(x*w):Yr;y>Yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const v=[];let I=0;for(let F=0;F<Yr;++F){const W=F/w,b=Math.exp(-W*W/2);v.push(b),F===0?I+=b:F<y&&(I+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/I;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const R=this._sizeLods[a],Z=3*R*(a>D-Os?a-D+Os:0),z=4*(this._cubeSize-R);gl(n,Z,z,3*R,2*R),p.setRenderTarget(n),p.render(m,Hc)}}function oS(s){const e=[],n=[],r=[];let a=s;const u=s-Os+1+im.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let p=1/d;c>s-Os?p=im[c-s+Os-1]:c===0&&(p=0),r.push(p);const g=1/(d-2),x=-g,m=1+g,_=[x,x,m,x,m,m,x,x,m,m,x,m],S=6,E=6,w=3,y=2,v=1,I=new Float32Array(w*E*S),D=new Float32Array(y*E*S),R=new Float32Array(v*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,W=z>2?0:-1,b=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];I.set(b,w*E*z),D.set(_,y*E*z);const C=[z,z,z,z,z,z];R.set(C,v*E*z)}const Z=new di;Z.setAttribute("position",new Kn(I,w)),Z.setAttribute("uv",new Kn(D,y)),Z.setAttribute("faceIndex",new Kn(R,v)),e.push(Z),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function am(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function aS(s,e,n){const r=new Float32Array(Yr),a=new J(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function lm(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function um(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===of||p===af,x=p===Gs||p===Ws;if(g||x){let m=e.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new om(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||x&&S&&a(S)?(n===null&&(n=new om(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d){let p=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function uS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function cS(s,e,n,r){const a={},u=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const w=_.morphAttributes[E];for(let y=0,v=w.length;y<v;y++)e.remove(w[y])}_.removeEventListener("dispose",c),delete a[_.id];const S=u.get(_);S&&(e.remove(S),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(m,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,n.memory.geometries++),_}function p(m){const _=m.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const S=m.morphAttributes;for(const E in S){const w=S[E];for(let y=0,v=w.length;y<v;y++)e.update(w[y],s.ARRAY_BUFFER)}}function g(m){const _=[],S=m.index,E=m.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let D=0,R=I.length;D<R;D+=3){const Z=I[D+0],z=I[D+1],F=I[D+2];_.push(Z,z,z,F,F,Z)}}else if(E!==void 0){const I=E.array;w=E.version;for(let D=0,R=I.length/3-1;D<R;D+=3){const Z=D+0,z=D+1,F=D+2;_.push(Z,z,z,F,F,Z)}}else return;const y=new(Qm(_)?ig:ng)(_,1);y.version=w;const v=u.get(m);v&&e.remove(v),u.set(m,y)}function x(m){const _=u.get(m);if(_){const S=m.index;S!==null&&_.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:x}}function fS(s,e,n){let r;function a(_){r=_}let u,c;function d(_){u=_.type,c=_.bytesPerElement}function p(_,S){s.drawElements(r,S,u,_*c),n.update(S,r,1)}function g(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,_*c,E),n.update(S,r,E))}function x(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,_,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];n.update(y,r,1)}function m(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)g(_[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,_,0,w,0,E);let v=0;for(let I=0;I<E;I++)v+=S[I]*w[I];n.update(v,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=m}function dS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function hS(s,e,n){const r=new WeakMap,a=new Ht;function u(c,d,p){const g=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=x!==void 0?x.length:0;let _=r.get(d);if(_===void 0||_.count!==m){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let Z=d.attributes.position.count*R,z=1;Z>e.maxTextureSize&&(z=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const F=new Float32Array(Z*z*4*m),W=new eg(F,Z,z,m);W.type=Hi,W.needsUpdate=!0;const b=R*4;for(let B=0;B<m;B++){const ue=v[B],ee=I[B],he=D[B],pe=Z*z*4*B;for(let le=0;le<ue.count;le++){const fe=le*b;E===!0&&(a.fromBufferAttribute(ue,le),F[pe+fe+0]=a.x,F[pe+fe+1]=a.y,F[pe+fe+2]=a.z,F[pe+fe+3]=0),w===!0&&(a.fromBufferAttribute(ee,le),F[pe+fe+4]=a.x,F[pe+fe+5]=a.y,F[pe+fe+6]=a.z,F[pe+fe+7]=0),y===!0&&(a.fromBufferAttribute(he,le),F[pe+fe+8]=a.x,F[pe+fe+9]=a.y,F[pe+fe+10]=a.z,F[pe+fe+11]=he.itemSize===4?a.w:1)}}_={count:m,texture:W,size:new Ct(Z,z)},r.set(d,_),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<g.length;y++)E+=g[y];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function pS(s,e,n,r){let a=new WeakMap;function u(p){const g=r.render.frame,x=p.geometry,m=e.get(p,x);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;a.get(_)!==g&&(_.update(),a.set(_,g))}return m}function c(){a=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:c}}class ug extends Sn{constructor(e,n,r,a,u,c,d,p,g,x=Bs){if(x!==Bs&&x!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Bs&&(r=Zr),r===void 0&&x===js&&(r=Xs),super(null,a,u,c,d,p,x,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cg=new Sn,cm=new ug(1,1),fg=new eg,dg=new e_,hg=new og,fm=[],dm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=fm[a];if(u===void 0&&(u=new Float32Array(a),fm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function mS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;mm.set(r),s.uniformMatrix2fv(this.addr,!1,mm),Kt(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;pm.set(r),s.uniformMatrix3fv(this.addr,!1,pm),Kt(n,r)}}function SS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;hm.set(r),s.uniformMatrix4fv(this.addr,!1,hm),Kt(n,r)}}function MS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function PS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(cm.compareFunction=Zm,u=cm):u=cg,n.setTexture2D(e||u,a)}function LS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||dg,a)}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||hg,a)}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||fg,a)}function US(s){switch(s){case 5126:return mS;case 35664:return gS;case 35665:return vS;case 35666:return _S;case 35674:return xS;case 35675:return yS;case 35676:return SS;case 5124:case 35670:return MS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return IS}}function NS(s,e){s.uniform1fv(this.addr,e)}function FS(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function OS(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function kS(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function zS(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function BS(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function HS(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function VS(s,e){s.uniform1iv(this.addr,e)}function GS(s,e){s.uniform2iv(this.addr,e)}function WS(s,e){s.uniform3iv(this.addr,e)}function XS(s,e){s.uniform4iv(this.addr,e)}function jS(s,e){s.uniform1uiv(this.addr,e)}function YS(s,e){s.uniform2uiv(this.addr,e)}function qS(s,e){s.uniform3uiv(this.addr,e)}function $S(s,e){s.uniform4uiv(this.addr,e)}function KS(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||cg,u[c])}function ZS(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||dg,u[c])}function QS(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||hg,u[c])}function JS(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||fg,u[c])}function eM(s){switch(s){case 5126:return NS;case 35664:return FS;case 35665:return OS;case 35666:return kS;case 35674:return zS;case 35675:return BS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return jS;case 36294:return YS;case 36295:return qS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=US(n.type)}}class nM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function gm(s,e){s.seq.push(e),s.map[e.id]=e}function rM(s,e,n){const r=s.name,a=r.length;for(jc.lastIndex=0;;){const u=jc.exec(r),c=jc.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&c+2===a){gm(n,g===void 0?new tM(d,s,e):new nM(d,s,e));break}else{let m=n.map[d];m===void 0&&(m=new iM(d),gm(n,m)),n=m}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);rM(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function vm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const sM=37297;let oM=0;function aM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const _m=new ut;function lM(s){St._getMatrix(_m,St.workingColorSpace,s);const e=`mat3( ${_m.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Ll:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+aM(s.getShaderSource(e),c)}else return a}function uM(s,e){const n=lM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cM(s,e){let n;switch(e){case Rv:n="Linear";break;case bv:n="Reinhard";break;case Pv:n="Cineon";break;case km:n="ACESFilmic";break;case Dv:n="AgX";break;case Iv:n="Neutral";break;case Lv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new J;function fM(){St.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function hM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function pM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Oo(s){return s!==""}function ym(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(s){return s.replace(mM,vM)}const gM=new Map;function vM(s,e){let n=ft[e];if(n===void 0){const r=gM.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ff(n)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(s){return s.replace(_M,xM)}function xM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Em(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Om?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===av?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vf:e="ENVMAP_BLENDING_MULTIPLY";break;case Av:e="ENVMAP_BLENDING_MIX";break;case Cv:e="ENVMAP_BLENDING_ADD";break}return e}function TM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function wM(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=yM(n),g=SM(n),x=MM(n),m=EM(n),_=TM(n),S=dM(n),E=hM(u),w=a.createProgram();let y,v,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),v.length>0&&(v+=`
`)):(y=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),v=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",n.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ft.tonemapping_pars_fragment:"",n.toneMapping!==Mr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,uM("linearToOutputTexel",n.outputColorSpace),fM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),c=Ff(c),c=ym(c,n),c=Sm(c,n),d=Ff(d),d=ym(d,n),d=Sm(d,n),c=Mm(c),d=Mm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=I+y+c,R=I+v+d,Z=vm(a,a.VERTEX_SHADER,D),z=vm(a,a.FRAGMENT_SHADER,R);a.attachShader(w,Z),a.attachShader(w,z),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(B){if(s.debug.checkShaderErrors){const ue=a.getProgramInfoLog(w).trim(),ee=a.getShaderInfoLog(Z).trim(),he=a.getShaderInfoLog(z).trim();let pe=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,Z,z);else{const fe=xm(a,Z,"vertex"),k=xm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ue+`
`+fe+`
`+k)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ee===""||he==="")&&(le=!1);le&&(B.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:ee,prefix:y},fragmentShader:{log:he,prefix:v}})}a.deleteShader(Z),a.deleteShader(z),W=new Al(a,w),b=pM(a,w)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,sM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=Z,this.fragmentShader=z,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new RM(e),n.set(e,r)),r}}class RM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function bM(s,e,n,r,a,u,c){const d=new Kf,p=new CM,g=new Set,x=[],m=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return g.add(b),b===0?"uv":`uv${b}`}function y(b,C,B,ue,ee){const he=ue.fog,pe=ee.geometry,le=b.isMeshStandardMaterial?ue.environment:null,fe=(b.isMeshStandardMaterial?n:e).get(b.envMap||le),k=fe&&fe.mapping===Pl?fe.image.height:null,ce=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=se!==void 0?se.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let Ue,q,de,Ee;if(ce){const xt=xi[ce];Ue=xt.vertexShader,q=xt.fragmentShader}else Ue=b.vertexShader,q=b.fragmentShader,p.update(b),de=p.getVertexShaderID(b),Ee=p.getFragmentShaderID(b);const xe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Fe=ee.isInstancedMesh===!0,Ke=ee.isBatchedMesh===!0,vt=!!b.map,ve=!!b.matcap,Tt=!!fe,G=!!b.aoMap,wt=!!b.lightMap,ct=!!b.bumpMap,at=!!b.normalMap,$e=!!b.displacementMap,_t=!!b.emissiveMap,je=!!b.metalnessMap,P=!!b.roughnessMap,T=b.anisotropy>0,N=b.clearcoat>0,K=b.dispersion>0,ae=b.iridescence>0,re=b.sheen>0,Pe=b.transmission>0,Me=T&&!!b.anisotropyMap,Le=N&&!!b.clearcoatMap,rt=N&&!!b.clearcoatNormalMap,ye=N&&!!b.clearcoatRoughnessMap,Oe=ae&&!!b.iridescenceMap,Ze=ae&&!!b.iridescenceThicknessMap,Qe=re&&!!b.sheenColorMap,ze=re&&!!b.sheenRoughnessMap,dt=!!b.specularMap,st=!!b.specularColorMap,Rt=!!b.specularIntensityMap,V=Pe&&!!b.transmissionMap,Re=Pe&&!!b.thicknessMap,oe=!!b.gradientMap,me=!!b.alphaMap,Ie=b.alphaTest>0,De=!!b.alphaHash,ot=!!b.extensions;let It=Mr;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Xt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&ee._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ee.instanceColor!==null,instancingMorph:Fe&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:qs,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:ve,envMap:Tt,envMapMode:Tt&&fe.mapping,envMapCubeUVHeight:k,aoMap:G,lightMap:wt,bumpMap:ct,normalMap:at,displacementMap:_&&$e,emissiveMap:_t,normalMapObjectSpace:at&&b.normalMapType===Ov,normalMapTangentSpace:at&&b.normalMapType===Km,metalnessMap:je,roughnessMap:P,anisotropy:T,anisotropyMap:Me,clearcoat:N,clearcoatMap:Le,clearcoatNormalMap:rt,clearcoatRoughnessMap:ye,dispersion:K,iridescence:ae,iridescenceMap:Oe,iridescenceThicknessMap:Ze,sheen:re,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:st,specularIntensityMap:Rt,transmission:Pe,transmissionMap:V,thicknessMap:Re,gradientMap:oe,opaque:b.transparent===!1&&b.blending===zs&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:De,combine:b.combine,mapUv:vt&&w(b.map.channel),aoMapUv:G&&w(b.aoMap.channel),lightMapUv:wt&&w(b.lightMap.channel),bumpMapUv:ct&&w(b.bumpMap.channel),normalMapUv:at&&w(b.normalMap.channel),displacementMapUv:$e&&w(b.displacementMap.channel),emissiveMapUv:_t&&w(b.emissiveMap.channel),metalnessMapUv:je&&w(b.metalnessMap.channel),roughnessMapUv:P&&w(b.roughnessMap.channel),anisotropyMapUv:Me&&w(b.anisotropyMap.channel),clearcoatMapUv:Le&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(b.sheenRoughnessMap.channel),specularMapUv:dt&&w(b.specularMap.channel),specularColorMapUv:st&&w(b.specularColorMap.channel),specularIntensityMapUv:Rt&&w(b.specularIntensityMap.channel),transmissionMapUv:V&&w(b.transmissionMap.channel),thicknessMapUv:Re&&w(b.thicknessMap.channel),alphaMapUv:me&&w(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(at||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(vt||me),fog:!!he,useFog:b.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ce,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=g.has(1),Xt.vertexUv2s=g.has(2),Xt.vertexUv3s=g.has(3),g.clear(),Xt}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(I(C,b),D(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function I(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function D(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const C=E[b.type];let B;if(C){const ue=xi[C];B=d_.clone(ue.uniforms)}else B=b.uniforms;return B}function Z(b,C){let B;for(let ue=0,ee=x.length;ue<ee;ue++){const he=x[ue];if(he.cacheKey===C){B=he,++B.usedTimes;break}}return B===void 0&&(B=new wM(s,C,b,u),x.push(B)),B}function z(b){if(--b.usedTimes===0){const C=x.indexOf(b);x[C]=x[x.length-1],x.pop(),b.destroy()}}function F(b){p.remove(b)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:Z,releaseProgram:z,releaseShaderCache:F,programs:x,dispose:W}}function PM(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function LM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(m,_,S,E,w,y){let v=s[e];return v===void 0?(v={id:m.id,object:m,geometry:_,material:S,groupOrder:E,renderOrder:m.renderOrder,z:w,group:y},s[e]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=w,v.group=y),e++,v}function d(m,_,S,E,w,y){const v=c(m,_,S,E,w,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(m,_,S,E,w,y){const v=c(m,_,S,E,w,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function g(m,_){n.length>1&&n.sort(m||LM),r.length>1&&r.sort(_||Tm),a.length>1&&a.sort(_||Tm)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:x,sort:g}}function DM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new wm,s.set(r,[c])):a>=u.length?(c=new wm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function IM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new gt};break;case"SpotLight":n={position:new J,direction:new J,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=n,n}}}function UM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let NM=0;function FM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OM(s){const e=new IM,n=UM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new J);const a=new J,u=new Ot,c=new Ot;function d(g){let x=0,m=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,v=0,I=0,D=0,R=0,Z=0,z=0,F=0;g.sort(FM);for(let b=0,C=g.length;b<C;b++){const B=g[b],ue=B.color,ee=B.intensity,he=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=ue.r*ee,m+=ue.g*ee,_+=ue.b*ee;else if(B.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(B.sh.coefficients[le],ee);F++}else if(B.isDirectionalLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const fe=B.shadow,k=n.get(B);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=B.shadow.matrix,I++}r.directional[S]=le,S++}else if(B.isSpotLight){const le=e.get(B);le.position.setFromMatrixPosition(B.matrixWorld),le.color.copy(ue).multiplyScalar(ee),le.distance=he,le.coneCos=Math.cos(B.angle),le.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),le.decay=B.decay,r.spot[w]=le;const fe=B.shadow;if(B.map&&(r.spotLightMap[Z]=B.map,Z++,fe.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[w]=fe.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,r.spotShadow[w]=k,r.spotShadowMap[w]=pe,R++}w++}else if(B.isRectAreaLight){const le=e.get(B);le.color.copy(ue).multiplyScalar(ee),le.halfWidth.set(B.width*.5,0,0),le.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=le,y++}else if(B.isPointLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),le.distance=B.distance,le.decay=B.decay,B.castShadow){const fe=B.shadow,k=n.get(B);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,k.shadowCameraNear=fe.camera.near,k.shadowCameraFar=fe.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=B.shadow.matrix,D++}r.point[E]=le,E++}else if(B.isHemisphereLight){const le=e.get(B);le.skyColor.copy(B.color).multiplyScalar(ee),le.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[v]=le,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=m,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==w||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==I||W.numPointShadows!==D||W.numSpotShadows!==R||W.numSpotMaps!==Z||W.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+Z-z,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=w,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=I,W.numPointShadows=D,W.numSpotShadows=R,W.numSpotMaps=Z,W.numLightProbes=F,r.version=NM++)}function p(g,x){let m=0,_=0,S=0,E=0,w=0;const y=x.matrixWorldInverse;for(let v=0,I=g.length;v<I;v++){const D=g[v];if(D.isDirectionalLight){const R=r.directional[m];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),m++}else if(D.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),c.identity(),u.copy(D.matrixWorld),u.premultiply(y),c.extractRotation(u),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function Am(s){const e=new OM(s),n=[],r=[];function a(x){g.camera=x,n.length=0,r.length=0}function u(x){n.push(x)}function c(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function kM(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Am(s),e.set(a,[d])):u>=c.length?(d=new Am(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class zM extends Ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BM extends Ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(s,e,n){let r=new Zf;const a=new Ct,u=new Ct,c=new Ht,d=new zM({depthPacking:Fv}),p=new BM,g={},x=n.maxTextureSize,m={[Wi]:mn,[mn]:Wi,[li]:li},_=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new tn(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Om;let v=this.type;this.render=function(z,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Sr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ee=v!==zi&&this.type===zi,he=v===zi&&this.type!==zi;for(let pe=0,le=z.length;pe<le;pe++){const fe=z[pe],k=fe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ce=k.getFrameExtents();if(a.multiply(ce),u.copy(k.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(u.x=Math.floor(x/ce.x),a.x=u.x*ce.x,k.mapSize.x=u.x),a.y>x&&(u.y=Math.floor(x/ce.y),a.y=u.y*ce.y,k.mapSize.y=u.y)),k.map===null||ee===!0||he===!0){const U=this.type!==zi?{minFilter:fi,magFilter:fi}:{};k.map!==null&&k.map.dispose(),k.map=new Qr(a.x,a.y,U),k.map.texture.name=fe.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const se=k.getViewportCount();for(let U=0;U<se;U++){const ie=k.getViewport(U);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ue.viewport(c),k.updateMatrices(fe,U),r=k.getFrustum(),R(F,W,k.camera,fe,this.type)}k.isPointLightShadow!==!0&&this.type===zi&&I(k,W),k.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(b,C,B)};function I(z,F){const W=e.update(w);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qr(a.x,a.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,W,_,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,W,S,w,null)}function D(z,F,W,b){let C=null;const B=W.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)C=B;else if(C=W.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=C.uuid,ee=F.uuid;let he=g[ue];he===void 0&&(he={},g[ue]=he);let pe=he[ee];pe===void 0&&(pe=C.clone(),he[ee]=pe,F.addEventListener("dispose",Z)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,b===zi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:m[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=W}return C}function R(z,F,W,b,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===zi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),he=z.material;if(Array.isArray(he)){const pe=ee.groups;for(let le=0,fe=pe.length;le<fe;le++){const k=pe[le],ce=he[k.materialIndex];if(ce&&ce.visible){const se=D(z,ce,b,C);z.onBeforeShadow(s,z,F,W,ee,se,k),s.renderBufferDirect(W,null,ee,se,z,k),z.onAfterShadow(s,z,F,W,ee,se,k)}}}else if(he.visible){const pe=D(z,he,b,C);z.onBeforeShadow(s,z,F,W,ee,pe,null),s.renderBufferDirect(W,null,ee,pe,z,null),z.onAfterShadow(s,z,F,W,ee,pe,null)}}const ue=z.children;for(let ee=0,he=ue.length;ee<he;ee++)R(ue[ee],F,W,b,C)}function Z(z){z.target.removeEventListener("dispose",Z);for(const W in g){const b=g[W],C=z.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const WM={[Qc]:Jc,[ef]:rf,[tf]:sf,[Vs]:nf,[Jc]:Qc,[rf]:ef,[sf]:tf,[nf]:Vs};function XM(s,e){function n(){let V=!1;const Re=new Ht;let oe=null;const me=new Ht(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!V&&(s.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){V=Ie},setClear:function(Ie,De,ot,It,Xt){Xt===!0&&(Ie*=It,De*=It,ot*=It),Re.set(Ie,De,ot,It),me.equals(Re)===!1&&(s.clearColor(Ie,De,ot,It),me.copy(Re))},reset:function(){V=!1,oe=null,me.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,oe=null,me=null,Ie=null;return{setReversed:function(De){if(Re!==De){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Ie;Ie=null,this.setClear(It)}Re=De},getReversed:function(){return Re},setTest:function(De){De?xe(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(De){oe!==De&&!V&&(s.depthMask(De),oe=De)},setFunc:function(De){if(Re&&(De=WM[De]),me!==De){switch(De){case Qc:s.depthFunc(s.NEVER);break;case Jc:s.depthFunc(s.ALWAYS);break;case ef:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case tf:s.depthFunc(s.EQUAL);break;case nf:s.depthFunc(s.GEQUAL);break;case rf:s.depthFunc(s.GREATER);break;case sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=De}},setLocked:function(De){V=De},setClear:function(De){Ie!==De&&(Re&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){V=!1,oe=null,me=null,Ie=null,Re=!1}}}function a(){let V=!1,Re=null,oe=null,me=null,Ie=null,De=null,ot=null,It=null,Xt=null;return{setTest:function(xt){V||(xt?xe(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!V&&(s.stencilMask(xt),Re=xt)},setFunc:function(xt,Mn,gn){(oe!==xt||me!==Mn||Ie!==gn)&&(s.stencilFunc(xt,Mn,gn),oe=xt,me=Mn,Ie=gn)},setOp:function(xt,Mn,gn){(De!==xt||ot!==Mn||It!==gn)&&(s.stencilOp(xt,Mn,gn),De=xt,ot=Mn,It=gn)},setLocked:function(xt){V=xt},setClear:function(xt){Xt!==xt&&(s.clearStencil(xt),Xt=xt)},reset:function(){V=!1,Re=null,oe=null,me=null,Ie=null,De=null,ot=null,It=null,Xt=null}}}const u=new n,c=new r,d=new a,p=new WeakMap,g=new WeakMap;let x={},m={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,I=null,D=null,R=null,Z=null,z=null,F=new gt(0,0,0),W=0,b=!1,C=null,B=null,ue=null,ee=null,he=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,fe=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(k)[1]),le=fe>=1):k.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),le=fe>=2);let ce=null,se={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ue=new Ht().fromArray(U),q=new Ht().fromArray(ie);function de(V,Re,oe,me){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<oe;ot++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const Ee={};Ee[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Vs),ct(!1),at(Pp),xe(s.CULL_FACE),G(Sr);function xe(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function Ce(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Fe(V,Re){return m[V]!==Re?(s.bindFramebuffer(V,Re),m[V]=Re,V===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Re),V===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(V,Re){let oe=S,me=!1;if(V){oe=_.get(Re),oe===void 0&&(oe=[],_.set(Re,oe));const Ie=V.textures;if(oe.length!==Ie.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ot=Ie.length;De<ot;De++)oe[De]=s.COLOR_ATTACHMENT0+De;oe.length=Ie.length,me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,me=!0);me&&s.drawBuffers(oe)}function vt(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const ve={[Xr]:s.FUNC_ADD,[uv]:s.FUNC_SUBTRACT,[cv]:s.FUNC_REVERSE_SUBTRACT};ve[fv]=s.MIN,ve[dv]=s.MAX;const Tt={[hv]:s.ZERO,[pv]:s.ONE,[mv]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[Sv]:s.SRC_ALPHA_SATURATE,[xv]:s.DST_COLOR,[vv]:s.DST_ALPHA,[gv]:s.ONE_MINUS_SRC_COLOR,[Zc]:s.ONE_MINUS_SRC_ALPHA,[yv]:s.ONE_MINUS_DST_COLOR,[_v]:s.ONE_MINUS_DST_ALPHA,[Mv]:s.CONSTANT_COLOR,[Ev]:s.ONE_MINUS_CONSTANT_COLOR,[Tv]:s.CONSTANT_ALPHA,[wv]:s.ONE_MINUS_CONSTANT_ALPHA};function G(V,Re,oe,me,Ie,De,ot,It,Xt,xt){if(V===Sr){w===!0&&(Ce(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),V!==lv){if(V!==y||xt!==b){if((v!==Xr||R!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,R=Xr),xt)switch(V){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFunc(s.ONE,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,D=null,Z=null,z=null,F.set(0,0,0),W=0,y=V,b=xt}return}Ie=Ie||Re,De=De||oe,ot=ot||me,(Re!==v||Ie!==R)&&(s.blendEquationSeparate(ve[Re],ve[Ie]),v=Re,R=Ie),(oe!==I||me!==D||De!==Z||ot!==z)&&(s.blendFuncSeparate(Tt[oe],Tt[me],Tt[De],Tt[ot]),I=oe,D=me,Z=De,z=ot),(It.equals(F)===!1||Xt!==W)&&(s.blendColor(It.r,It.g,It.b,Xt),F.copy(It),W=Xt),y=V,b=!1}function wt(V,Re){V.side===li?Ce(s.CULL_FACE):xe(s.CULL_FACE);let oe=V.side===mn;Re&&(oe=!oe),ct(oe),V.blending===zs&&V.transparent===!1?G(Sr):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),u.setMask(V.colorWrite);const me=V.stencilWrite;d.setTest(me),me&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_t(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function at(V){V!==sv?(xe(s.CULL_FACE),V!==B&&(V===Pp?s.cullFace(s.BACK):V===ov?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),B=V}function $e(V){V!==ue&&(le&&s.lineWidth(V),ue=V)}function _t(V,Re,oe){V?(xe(s.POLYGON_OFFSET_FILL),(ee!==Re||he!==oe)&&(s.polygonOffset(Re,oe),ee=Re,he=oe)):Ce(s.POLYGON_OFFSET_FILL)}function je(V){V?xe(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function P(V){V===void 0&&(V=s.TEXTURE0+pe-1),ce!==V&&(s.activeTexture(V),ce=V)}function T(V,Re,oe){oe===void 0&&(ce===null?oe=s.TEXTURE0+pe-1:oe=ce);let me=se[oe];me===void 0&&(me={type:void 0,texture:void 0},se[oe]=me),(me.type!==V||me.texture!==Re)&&(ce!==oe&&(s.activeTexture(oe),ce=oe),s.bindTexture(V,Re||Ee[V]),me.type=V,me.texture=Re)}function N(){const V=se[ce];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(V){Ue.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ue.copy(V))}function ze(V){q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function dt(V,Re){let oe=g.get(Re);oe===void 0&&(oe=new WeakMap,g.set(Re,oe));let me=oe.get(V);me===void 0&&(me=s.getUniformBlockIndex(Re,V.name),oe.set(V,me))}function st(V,Re){const me=g.get(Re).get(V);p.get(Re)!==me&&(s.uniformBlockBinding(Re,me,V.__bindingPointIndex),p.set(Re,me))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ce=null,se={},m={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,I=null,D=null,R=null,Z=null,z=null,F=new gt(0,0,0),W=0,b=!1,C=null,B=null,ue=null,ee=null,he=null,Ue.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:xe,disable:Ce,bindFramebuffer:Fe,drawBuffers:Ke,useProgram:vt,setBlending:G,setMaterial:wt,setFlipSided:ct,setCullFace:at,setLineWidth:$e,setPolygonOffset:_t,setScissorTest:je,activeTexture:P,bindTexture:T,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:ae,texImage2D:Oe,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:ye,texSubImage2D:re,texSubImage3D:Pe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Le,scissor:Qe,viewport:ze,reset:Rt}}function Cm(s,e,n,r){const a=jM(r);switch(n){case Gm:return s*e;case Xm:return s*e;case jm:return s*e*2;case Ym:return s*e/a.components*a.byteLength;case jf:return s*e/a.components*a.byteLength;case qm:return s*e*2/a.components*a.byteLength;case Yf:return s*e*2/a.components*a.byteLength;case Wm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case qf:return s*e*4/a.components*a.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(s,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(s,8)*Math.max(e,8)/2;case hf:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wl:case Pf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $m:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*8;case If:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jM(s){switch(s){case Xi:case Bm:return{byteLength:1,components:1};case zo:case Hm:case Bo:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case Zr:case Gf:case Hi:return{byteLength:4,components:1};case Vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function YM(s,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ct,x=new WeakMap;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):Rl("canvas")}function w(P,T,N){let K=1;const ae=je(P);if((ae.width>N||ae.height>N)&&(K=N/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(K*ae.width),Pe=Math.floor(K*ae.height);m===void 0&&(m=E(re,Pe));const Me=T?E(re,Pe):m;return Me.width=re,Me.height=Pe,Me.getContext("2d").drawImage(P,0,0,re,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Pe+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,T,N,K,ae=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=T;if(T===s.RED&&(N===s.FLOAT&&(re=s.R32F),N===s.HALF_FLOAT&&(re=s.R16F),N===s.UNSIGNED_BYTE&&(re=s.R8)),T===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(re=s.R8UI),N===s.UNSIGNED_SHORT&&(re=s.R16UI),N===s.UNSIGNED_INT&&(re=s.R32UI),N===s.BYTE&&(re=s.R8I),N===s.SHORT&&(re=s.R16I),N===s.INT&&(re=s.R32I)),T===s.RG&&(N===s.FLOAT&&(re=s.RG32F),N===s.HALF_FLOAT&&(re=s.RG16F),N===s.UNSIGNED_BYTE&&(re=s.RG8)),T===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(re=s.RG8UI),N===s.UNSIGNED_SHORT&&(re=s.RG16UI),N===s.UNSIGNED_INT&&(re=s.RG32UI),N===s.BYTE&&(re=s.RG8I),N===s.SHORT&&(re=s.RG16I),N===s.INT&&(re=s.RG32I)),T===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(re=s.RGB8UI),N===s.UNSIGNED_SHORT&&(re=s.RGB16UI),N===s.UNSIGNED_INT&&(re=s.RGB32UI),N===s.BYTE&&(re=s.RGB8I),N===s.SHORT&&(re=s.RGB16I),N===s.INT&&(re=s.RGB32I)),T===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),N===s.UNSIGNED_INT&&(re=s.RGBA32UI),N===s.BYTE&&(re=s.RGBA8I),N===s.SHORT&&(re=s.RGBA16I),N===s.INT&&(re=s.RGBA32I)),T===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),T===s.RGBA){const Pe=ae?Ll:St.getTransfer(K);N===s.FLOAT&&(re=s.RGBA32F),N===s.HALF_FLOAT&&(re=s.RGBA16F),N===s.UNSIGNED_BYTE&&(re=Pe===Pt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(P,T){let N;return P?T===null||T===Zr||T===Xs?N=s.DEPTH24_STENCIL8:T===Hi?N=s.DEPTH32F_STENCIL8:T===zo&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zr||T===Xs?N=s.DEPTH_COMPONENT24:T===Hi?N=s.DEPTH_COMPONENT32F:T===zo&&(N=s.DEPTH_COMPONENT16),N}function Z(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==fi&&P.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),W(T),T.isVideoTexture&&x.delete(T)}function F(P){const T=P.target;T.removeEventListener("dispose",F),C(T)}function W(P){const T=r.get(P);if(T.__webglInit===void 0)return;const N=P.source,K=_.get(N);if(K){const ae=K[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(P),Object.keys(K).length===0&&_.delete(N)}r.remove(P)}function b(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const N=P.source,K=_.get(N);delete K[T.__cacheKey],c.memory.textures--}function C(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let ae=0;ae<T.__webglFramebuffer[K].length;ae++)s.deleteFramebuffer(T.__webglFramebuffer[K][ae]);else s.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)s.deleteFramebuffer(T.__webglFramebuffer[K]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const N=P.textures;for(let K=0,ae=N.length;K<ae;K++){const re=r.get(N[K]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),c.memory.textures--),r.remove(N[K])}r.remove(P)}let B=0;function ue(){B=0}function ee(){const P=B;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),B+=1,P}function he(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function pe(P,T){const N=r.get(P);if(P.isVideoTexture&&$e(P),P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,P,T);return}}n.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+T)}function le(P,T){const N=r.get(P);if(P.version>0&&N.__version!==P.version){q(N,P,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+T)}function fe(P,T){const N=r.get(P);if(P.version>0&&N.__version!==P.version){q(N,P,T);return}n.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+T)}function k(P,T){const N=r.get(P);if(P.version>0&&N.__version!==P.version){de(N,P,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+T)}const ce={[qr]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[lf]:s.MIRRORED_REPEAT},se={[fi]:s.NEAREST,[Uv]:s.NEAREST_MIPMAP_NEAREST,[Za]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[_c]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[kv]:s.NEVER,[Wv]:s.ALWAYS,[zv]:s.LESS,[Zm]:s.LEQUAL,[Bv]:s.EQUAL,[Gv]:s.GEQUAL,[Hv]:s.GREATER,[Vv]:s.NOTEQUAL};function ie(P,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===_c||T.magFilter===Za||T.magFilter===Kr||T.minFilter===yi||T.minFilter===_c||T.minFilter===Za||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ce[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Za&&T.minFilter!==Kr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(P,T){let N=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const K=T.source;let ae=_.get(K);ae===void 0&&(ae={},_.set(K,ae));const re=he(T);if(re!==P.__cacheKey){ae[re]===void 0&&(ae[re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,N=!0),ae[re].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(T)),P.__cacheKey=re,P.__webglTexture=ae[re].texture}return N}function q(P,T,N){let K=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=s.TEXTURE_3D);const ae=Ue(P,T),re=T.source;n.bindTexture(K,P.__webglTexture,s.TEXTURE0+N);const Pe=r.get(re);if(re.version!==Pe.__version||ae===!0){n.activeTexture(s.TEXTURE0+N);const Me=St.getPrimaries(St.workingColorSpace),Le=T.colorSpace===yr?null:St.getPrimaries(T.colorSpace),rt=T.colorSpace===yr||Me===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=w(T.image,!1,a.maxTextureSize);ye=_t(T,ye);const Oe=u.convert(T.format,T.colorSpace),Ze=u.convert(T.type);let Qe=D(T.internalFormat,Oe,Ze,T.colorSpace,T.isVideoTexture);ie(K,T);let ze;const dt=T.mipmaps,st=T.isVideoTexture!==!0,Rt=Pe.__version===void 0||ae===!0,V=re.dataReady,Re=Z(T,ye);if(T.isDepthTexture)Qe=R(T.format===js,T.type),Rt&&(st?n.texStorage2D(s.TEXTURE_2D,1,Qe,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Oe,Ze,null));else if(T.isDataTexture)if(dt.length>0){st&&Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Qe,dt[0].width,dt[0].height);for(let oe=0,me=dt.length;oe<me;oe++)ze=dt[oe],st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,Ze,ze.data):n.texImage2D(s.TEXTURE_2D,oe,Qe,ze.width,ze.height,0,Oe,Ze,ze.data);T.generateMipmaps=!1}else st?(Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Qe,ye.width,ye.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Oe,Ze,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Oe,Ze,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,dt[0].width,dt[0].height,ye.depth);for(let oe=0,me=dt.length;oe<me;oe++)if(ze=dt[oe],T.format!==ci)if(Oe!==null)if(st){if(V)if(T.layerUpdates.size>0){const Ie=Cm(ze.width,ze.height,T.format,T.type);for(const De of T.layerUpdates){const ot=ze.data.subarray(De*Ie/ze.data.BYTES_PER_ELEMENT,(De+1)*Ie/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,De,ze.width,ze.height,1,Oe,ot)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,ye.depth,Oe,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Qe,ze.width,ze.height,ye.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,ye.depth,Oe,Ze,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,Qe,ze.width,ze.height,ye.depth,0,Oe,Ze,ze.data)}else{st&&Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Qe,dt[0].width,dt[0].height);for(let oe=0,me=dt.length;oe<me;oe++)ze=dt[oe],T.format!==ci?Oe!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Oe,Ze,ze.data):n.texImage2D(s.TEXTURE_2D,oe,Qe,ze.width,ze.height,0,Oe,Ze,ze.data)}else if(T.isDataArrayTexture)if(st){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,ye.width,ye.height,ye.depth),V)if(T.layerUpdates.size>0){const oe=Cm(ye.width,ye.height,T.format,T.type);for(const me of T.layerUpdates){const Ie=ye.data.subarray(me*oe/ye.data.BYTES_PER_ELEMENT,(me+1)*oe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Oe,Ze,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Ze,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Oe,Ze,ye.data);else if(T.isData3DTexture)st?(Rt&&n.texStorage3D(s.TEXTURE_3D,Re,Qe,ye.width,ye.height,ye.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Ze,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Oe,Ze,ye.data);else if(T.isFramebufferTexture){if(Rt)if(st)n.texStorage2D(s.TEXTURE_2D,Re,Qe,ye.width,ye.height);else{let oe=ye.width,me=ye.height;for(let Ie=0;Ie<Re;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,Qe,oe,me,0,Oe,Ze,null),oe>>=1,me>>=1}}else if(dt.length>0){if(st&&Rt){const oe=je(dt[0]);n.texStorage2D(s.TEXTURE_2D,Re,Qe,oe.width,oe.height)}for(let oe=0,me=dt.length;oe<me;oe++)ze=dt[oe],st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Ze,ze):n.texImage2D(s.TEXTURE_2D,oe,Qe,Oe,Ze,ze);T.generateMipmaps=!1}else if(st){if(Rt){const oe=je(ye);n.texStorage2D(s.TEXTURE_2D,Re,Qe,oe.width,oe.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ze,ye)}else n.texImage2D(s.TEXTURE_2D,0,Qe,Oe,Ze,ye);y(T)&&v(K),Pe.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,N){if(T.image.length!==6)return;const K=Ue(P,T),ae=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+N);const re=r.get(ae);if(ae.version!==re.__version||K===!0){n.activeTexture(s.TEXTURE0+N);const Pe=St.getPrimaries(St.workingColorSpace),Me=T.colorSpace===yr?null:St.getPrimaries(T.colorSpace),Le=T.colorSpace===yr||Pe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let me=0;me<6;me++)!rt&&!ye?Oe[me]=w(T.image[me],!0,a.maxCubemapSize):Oe[me]=ye?T.image[me].image:T.image[me],Oe[me]=_t(T,Oe[me]);const Ze=Oe[0],Qe=u.convert(T.format,T.colorSpace),ze=u.convert(T.type),dt=D(T.internalFormat,Qe,ze,T.colorSpace),st=T.isVideoTexture!==!0,Rt=re.__version===void 0||K===!0,V=ae.dataReady;let Re=Z(T,Ze);ie(s.TEXTURE_CUBE_MAP,T);let oe;if(rt){st&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,Ze.width,Ze.height);for(let me=0;me<6;me++){oe=Oe[me].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){const De=oe[Ie];T.format!==ci?Qe!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,Qe,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,Qe,ze,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,dt,De.width,De.height,0,Qe,ze,De.data)}}}else{if(oe=T.mipmaps,st&&Rt){oe.length>0&&Re++;const me=je(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,me.width,me.height)}for(let me=0;me<6;me++)if(ye){st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe[me].width,Oe[me].height,Qe,ze,Oe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Oe[me].width,Oe[me].height,0,Qe,ze,Oe[me].data);for(let Ie=0;Ie<oe.length;Ie++){const ot=oe[Ie].image[me].image;st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ot.width,ot.height,Qe,ze,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,dt,ot.width,ot.height,0,Qe,ze,ot.data)}}else{st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Qe,ze,Oe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Qe,ze,Oe[me]);for(let Ie=0;Ie<oe.length;Ie++){const De=oe[Ie];st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,Qe,ze,De.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,dt,Qe,ze,De.image[me])}}}y(T)&&v(s.TEXTURE_CUBE_MAP),re.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ee(P,T,N,K,ae,re){const Pe=u.convert(N.format,N.colorSpace),Me=u.convert(N.type),Le=D(N.internalFormat,Pe,Me,N.colorSpace),rt=r.get(T),ye=r.get(N);if(ye.__renderTarget=T,!rt.__hasExternalTextures){const Oe=Math.max(1,T.width>>re),Ze=Math.max(1,T.height>>re);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?n.texImage3D(ae,re,Le,Oe,Ze,T.depth,0,Pe,Me,null):n.texImage2D(ae,re,Le,Oe,Ze,0,Pe,Me,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ae,ye.__webglTexture,0,ct(T)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ae,ye.__webglTexture,re),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,T,N){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const K=T.depthTexture,ae=K&&K.isDepthTexture?K.type:null,re=R(T.stencilBuffer,ae),Pe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=ct(T);at(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,re,T.width,T.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,P)}else{const K=T.textures;for(let ae=0;ae<K.length;ae++){const re=K[ae],Pe=u.convert(re.format,re.colorSpace),Me=u.convert(re.type),Le=D(re.internalFormat,Pe,Me,re.colorSpace),rt=ct(T);N&&at(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Le,T.width,T.height):at(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Le,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Le,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ae=K.__webglTexture,re=ct(T);if(T.depthTexture.format===Bs)at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(T.depthTexture.format===js)at(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const T=r.get(P),N=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=K}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,P)}else if(N){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[K],P,!1);else{const ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,re)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ae)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,T,N){const K=r.get(P);T!==void 0&&Ee(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Fe(P)}function vt(P){const T=P.texture,N=r.get(P),K=r.get(T);P.addEventListener("dispose",F);const ae=P.textures,re=P.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=T.version,c.memory.textures++),re){N.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer[Me]=[];for(let Le=0;Le<T.mipmaps.length;Le++)N.__webglFramebuffer[Me][Le]=s.createFramebuffer()}else N.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){N.__webglFramebuffer=[];for(let Me=0;Me<T.mipmaps.length;Me++)N.__webglFramebuffer[Me]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let Me=0,Le=ae.length;Me<Le;Me++){const rt=r.get(ae[Me]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&at(P)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Me=0;Me<ae.length;Me++){const Le=ae[Me];N.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[Me]);const rt=u.convert(Le.format,Le.colorSpace),ye=u.convert(Le.type),Oe=D(Le.internalFormat,rt,ye,Le.colorSpace,P.isXRRenderTarget===!0),Ze=ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,N.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Me=0;Me<6;Me++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)Ee(N.__webglFramebuffer[Me][Le],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le);else Ee(N.__webglFramebuffer[Me],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);y(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Me=0,Le=ae.length;Me<Le;Me++){const rt=ae[Me],ye=r.get(rt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ie(s.TEXTURE_2D,rt),Ee(N.__webglFramebuffer,P,rt,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),y(rt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Me=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Me,K.__webglTexture),ie(Me,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)Ee(N.__webglFramebuffer[Le],P,T,s.COLOR_ATTACHMENT0,Me,Le);else Ee(N.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Me,0);y(T)&&v(Me),n.unbindTexture()}P.depthBuffer&&Fe(P)}function ve(P){const T=P.textures;for(let N=0,K=T.length;N<K;N++){const ae=T[N];if(y(ae)){const re=I(P),Pe=r.get(ae).__webglTexture;n.bindTexture(re,Pe),v(re),n.unbindTexture()}}}const Tt=[],G=[];function wt(P){if(P.samples>0){if(at(P)===!1){const T=P.textures,N=P.width,K=P.height;let ae=s.COLOR_BUFFER_BIT;const re=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(P),Me=T.length>1;if(Me)for(let Le=0;Le<T.length;Le++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const rt=r.get(T[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,N,K,0,0,N,K,ae,s.NEAREST),p===!0&&(Tt.length=0,G.length=0,Tt.push(s.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Tt.push(re),G.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Le=0;Le<T.length;Le++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const rt=r.get(T[Le]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,rt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(P){return Math.min(a.maxSamples,P.samples)}function at(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(P){const T=c.render.frame;x.get(P)!==T&&(x.set(P,T),P.update())}function _t(P,T){const N=P.colorSpace,K=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||N!==qs&&N!==yr&&(St.getTransfer(N)===Pt?(K!==ci||ae!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),T}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=ee,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=fe,this.setTextureCube=k,this.rebindTextures=Ke,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=at}function qM(s,e){function n(r,a=yr){let u;const c=St.getTransfer(a);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Bm)return s.BYTE;if(r===Hm)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Gm)return s.ALPHA;if(r===Wm)return s.RGB;if(r===ci)return s.RGBA;if(r===Xm)return s.LUMINANCE;if(r===jm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===Ym)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===qm)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===Tl)if(c===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uf||r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===uf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===df)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===hf||r===pf)return c===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===mf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gf||r===vf||r===_f||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===bf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===gf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_f)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ef)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Af)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Pf||r===Lf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===wl)return c===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$m||r===Df||r===If||r===Uf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===wl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class $M extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){c=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),v=this._getHandJoint(g,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],_=x.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&_>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Sn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mi({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new Il(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends $s{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,g=null,x=null,m=null,_=null,S=null,E=null;const w=new JM,y=n.getContextAttributes();let v=null,I=null;const D=[],R=[],Z=new Ct;let z=null;const F=new $n;F.viewport=new Ht;const W=new $n;W.viewport=new Ht;const b=[F,W],C=new $M;let B=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let de=D[q];return de===void 0&&(de=new Yc,D[q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(q){let de=D[q];return de===void 0&&(de=new Yc,D[q]=de),de.getGripSpace()},this.getHand=function(q){let de=D[q];return de===void 0&&(de=new Yc,D[q]=de),de.getHandSpace()};function ee(q){const de=R.indexOf(q.inputSource);if(de===-1)return;const Ee=D[de];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,g||c),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function he(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",he),a.removeEventListener("inputsourceschange",pe);for(let q=0;q<D.length;q++){const de=R[q];de!==null&&(R[q]=null,D[q].disconnect(de))}B=null,ue=null,w.reset(),e.setRenderTarget(v),S=null,_=null,m=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(q){g=q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",he),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(Z),a.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?js:Bs,Ee=y.stencil?Xs:Zr);const Ce={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:u};m=new XRWebGLBinding(a,n),_=m.createProjectionLayer(Ce),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new Qr(_.textureWidth,_.textureHeight,{format:ci,type:Xi,depthTexture:new ug(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),g=null,c=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(q){for(let de=0;de<q.removed.length;de++){const Ee=q.removed[de],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,D[xe].disconnect(Ee))}for(let de=0;de<q.added.length;de++){const Ee=q.added[de];let xe=R.indexOf(Ee);if(xe===-1){for(let Fe=0;Fe<D.length;Fe++)if(Fe>=R.length){R.push(Ee),xe=Fe;break}else if(R[Fe]===null){R[Fe]=Ee,xe=Fe;break}if(xe===-1)break}const Ce=D[xe];Ce&&Ce.connect(Ee)}}const le=new J,fe=new J;function k(q,de,Ee){le.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);const xe=le.distanceTo(fe),Ce=de.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Ke=Ce[14]/(Ce[10]-1),vt=Ce[14]/(Ce[10]+1),ve=(Ce[9]+1)/Ce[5],Tt=(Ce[9]-1)/Ce[5],G=(Ce[8]-1)/Ce[0],wt=(Fe[8]+1)/Fe[0],ct=Ke*G,at=Ke*wt,$e=xe/(-G+wt),_t=$e*-G;if(de.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_t),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Ke+$e,P=vt+$e,T=ct-_t,N=at+(xe-_t),K=ve*vt/P*je,ae=Tt*vt/P*je;q.projectionMatrix.makePerspective(T,N,K,ae,je,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,de){de===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(de.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let de=q.near,Ee=q.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),C.near=W.near=F.near=de,C.far=W.far=F.far=Ee,(B!==C.near||ue!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ue=C.far),F.layers.mask=q.layers.mask|2,W.layers.mask=q.layers.mask|4,C.layers.mask=F.layers.mask|W.layers.mask;const xe=q.parent,Ce=C.cameras;ce(C,xe);for(let Fe=0;Fe<Ce.length;Fe++)ce(Ce[Fe],xe);Ce.length===2?k(C,F,W):C.projectionMatrix.copy(F.projectionMatrix),se(q,C,xe)};function se(q,de,Ee){Ee===null?q.matrix.copy(de.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(de.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(q){p=q,_!==null&&(_.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let U=null;function ie(q,de){if(x=de.getViewerPose(g||c),E=de,x!==null){const Ee=x.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Ke=Ee[Fe];let vt=null;if(S!==null)vt=S.getViewport(Ke);else{const Tt=m.getViewSubImage(_,Ke);vt=Tt.viewport,Fe===0&&(e.setRenderTargetTextures(I,Tt.colorTexture,_.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(I))}let ve=b[Fe];ve===void 0&&(ve=new $n,ve.layers.enable(Fe),ve.viewport=new Ht,b[Fe]=ve),ve.matrix.fromArray(Ke.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ke.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(vt.x,vt.y,vt.width,vt.height),Fe===0&&(C.matrix.copy(ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(ve)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Fe=m.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(e,Fe,a.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const xe=R[Ee],Ce=D[Ee];xe!==null&&Ce!==void 0&&Ce.update(xe,de,g||c)}U&&U(q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ue=new ag;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const Vr=new Si,tE=new Ot;function nE(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,rg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,I,D,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),m(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(u(y,v),E(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),w(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,I,D):v.isSpriteMaterial?g(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===mn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===mn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const I=e.get(v),D=I.envMap,R=I.envMapRotation;D&&(y.envMap.value=D,Vr.copy(R),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),y.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(Vr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,I,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*I,y.scale.value=D*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,I){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===mn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const I=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(s,e,n,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const R=D.program;r.uniformBlockBinding(I,R)}function g(I,D){let R=a[I.id];R===void 0&&(E(I),R=x(I),a[I.id]=R,I.addEventListener("dispose",y));const Z=D.program;r.updateUBOMapping(I,Z);const z=e.render.frame;u[I.id]!==z&&(_(I),u[I.id]=z)}function x(I){const D=m();I.__bindingPointIndex=D;const R=s.createBuffer(),Z=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,Z,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function m(){for(let I=0;I<d;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const D=a[I.id],R=I.uniforms,Z=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,F=R.length;z<F;z++){const W=Array.isArray(R[z])?R[z]:[R[z]];for(let b=0,C=W.length;b<C;b++){const B=W[b];if(S(B,z,b,Z)===!0){const ue=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let pe=0;pe<ee.length;pe++){const le=ee[pe],fe=w(le);typeof le=="number"||typeof le=="boolean"?(B.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,ue+he,B.__data)):le.isMatrix3?(B.__data[0]=le.elements[0],B.__data[1]=le.elements[1],B.__data[2]=le.elements[2],B.__data[3]=0,B.__data[4]=le.elements[3],B.__data[5]=le.elements[4],B.__data[6]=le.elements[5],B.__data[7]=0,B.__data[8]=le.elements[6],B.__data[9]=le.elements[7],B.__data[10]=le.elements[8],B.__data[11]=0):(le.toArray(B.__data,he),he+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,D,R,Z){const z=I.value,F=D+"_"+R;if(Z[F]===void 0)return typeof z=="number"||typeof z=="boolean"?Z[F]=z:Z[F]=z.clone(),!0;{const W=Z[F];if(typeof z=="number"||typeof z=="boolean"){if(W!==z)return Z[F]=z,!0}else if(W.equals(z)===!1)return W.copy(z),!0}return!1}function E(I){const D=I.uniforms;let R=0;const Z=16;for(let F=0,W=D.length;F<W;F++){const b=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,B=b.length;C<B;C++){const ue=b[C],ee=Array.isArray(ue.value)?ue.value:[ue.value];for(let he=0,pe=ee.length;he<pe;he++){const le=ee[he],fe=w(le),k=R%Z,ce=k%fe.boundary,se=k+ce;R+=ce,se!==0&&Z-se<fe.storage&&(R+=Z-se),ue.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=fe.storage}}}const z=R%Z;return z>0&&(R+=Z-z),I.__size=R,I.__cache={},this}function w(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function y(I){const D=I.target;D.removeEventListener("dispose",y);const R=c.indexOf(D.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function v(){for(const I in a)s.deleteBuffer(a[I]);c=[],a={},u={}}return{bind:p,update:g,dispose:v}}class rE{constructor(e={}){const{canvas:n=jv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let Z=!1,z=0,F=0,W=null,b=-1,C=null;const B=new Ht,ue=new Ht;let ee=null;const he=new gt(0);let pe=0,le=n.width,fe=n.height,k=1,ce=null,se=null;const U=new Ht(0,0,le,fe),ie=new Ht(0,0,le,fe);let Ue=!1;const q=new Zf;let de=!1,Ee=!1;const xe=new Ot,Ce=new Ot,Fe=new J,Ke=new Ht,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Tt(){return W===null?k:1}let G=r;function wt(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),G===null){const X="webgl2";if(G=wt(X,A),G===null)throw wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,at,$e,_t,je,P,T,N,K,ae,re,Pe,Me,Le,rt,ye,Oe,Ze,Qe,ze,dt,st,Rt,V;function Re(){ct=new uS(G),ct.init(),st=new qM(G,ct),at=new iS(G,ct,e,st),$e=new XM(G,ct),at.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),_t=new dS(G),je=new PM,P=new YM(G,ct,$e,je,at,st,_t),T=new sS(R),N=new lS(R),K=new x_(G),Rt=new tS(G,K),ae=new cS(G,K,_t,Rt),re=new pS(G,ae,K,_t),Qe=new hS(G,at,P),ye=new rS(je),Pe=new bM(R,T,N,ct,at,Rt,ye),Me=new nE(R,je),Le=new DM,rt=new kM(ct),Ze=new eS(R,T,N,$e,re,S,p),Oe=new GM(R,re,at),V=new iE(G,_t,at,$e),ze=new nS(G,ct,_t),dt=new fS(G,ct,_t),_t.programs=Pe.programs,R.capabilities=at,R.extensions=ct,R.properties=je,R.renderLists=Le,R.shadowMap=Oe,R.state=$e,R.info=_t}Re();const oe=new eE(R,G);this.xr=oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(le,fe,!1))},this.getSize=function(A){return A.set(le,fe)},this.setSize=function(A,X,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,fe=X,n.width=Math.floor(A*k),n.height=Math.floor(X*k),te===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*k,fe*k).floor()},this.setDrawingBufferSize=function(A,X,te){le=A,fe=X,k=te,n.width=Math.floor(A*te),n.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,te,ne){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,te,ne),$e.viewport(B.copy(U).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,X,te,ne){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,te,ne),$e.scissor(ue.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){$e.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,X=!0,te=!0){let ne=0;if(A){let j=!1;if(W!==null){const Ae=W.texture.format;j=Ae===qf||Ae===Yf||Ae===jf}if(j){const Ae=W.texture.type,Te=Ae===Xi||Ae===Zr||Ae===zo||Ae===Xs||Ae===Wf||Ae===Xf,Ge=Ze.getClearColor(),He=Ze.getClearAlpha(),tt=Ge.r,it=Ge.g,We=Ge.b;Te?(E[0]=tt,E[1]=it,E[2]=We,E[3]=He,G.clearBufferuiv(G.COLOR,0,E)):(w[0]=tt,w[1]=it,w[2]=We,w[3]=He,G.clearBufferiv(G.COLOR,0,w))}else ne|=G.COLOR_BUFFER_BIT}X&&(ne|=G.DEPTH_BUFFER_BIT),te&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Le.dispose(),rt.dispose(),je.dispose(),T.dispose(),N.dispose(),re.dispose(),Rt.dispose(),V.dispose(),Pe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Jr),oe.removeEventListener("sessionend",ji),Ei.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const A=_t.autoReset,X=Oe.enabled,te=Oe.autoUpdate,ne=Oe.needsUpdate,j=Oe.type;Re(),_t.autoReset=A,Oe.enabled=X,Oe.autoUpdate=te,Oe.needsUpdate=ne,Oe.type=j}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const X=A.target;X.removeEventListener("dispose",ot),It(X)}function It(A){Xt(A),je.remove(A)}function Xt(A){const X=je.get(A).programs;X!==void 0&&(X.forEach(function(te){Pe.releaseProgram(te)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,ne,j,Ae){X===null&&(X=vt);const Te=j.isMesh&&j.matrixWorld.determinant()<0,Ge=Yo(A,X,te,ne,j);$e.setMaterial(ne,Te);let He=te.index,tt=1;if(ne.wireframe===!0){if(He=ae.getWireframeAttribute(te),He===void 0)return;tt=2}const it=te.drawRange,We=te.attributes.position;let mt=it.start*tt,At=(it.start+it.count)*tt;Ae!==null&&(mt=Math.max(mt,Ae.start*tt),At=Math.min(At,(Ae.start+Ae.count)*tt)),He!==null?(mt=Math.max(mt,0),At=Math.min(At,He.count)):We!=null&&(mt=Math.max(mt,0),At=Math.min(At,We.count));const pt=At-mt;if(pt<0||pt===1/0)return;Rt.setup(j,ne,Ge,te,He);let an,lt=ze;if(He!==null&&(an=K.get(He),lt=dt,lt.setIndex(an)),j.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*Tt()),lt.setMode(G.LINES)):lt.setMode(G.TRIANGLES);else if(j.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*Tt()),j.isLineSegments?lt.setMode(G.LINES):j.isLineLoop?lt.setMode(G.LINE_LOOP):lt.setMode(G.LINE_STRIP)}else j.isPoints?lt.setMode(G.POINTS):j.isSprite&&lt.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Zn=j._multiDrawCounts,Mt=j._multiDrawCount,ln=He?K.get(He).bytesPerElement:1,Qn=je.get(ne).currentProgram.getUniforms();for(let jt=0;jt<Mt;jt++)Qn.setValue(G,"_gl_DrawID",jt),lt.render(Ye[jt]/ln,Zn[jt])}else if(j.isInstancedMesh)lt.renderInstances(mt,pt,j.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Zn=Math.min(te.instanceCount,Ye);lt.renderInstances(mt,pt,Zn)}else lt.render(mt,pt)};function xt(A,X,te){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,es(A,X,te),A.side=Wi,A.needsUpdate=!0,es(A,X,te),A.side=li):es(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),v=rt.get(te),v.init(X),D.push(v),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==te&&A.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ne=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Te=0;Te<Ae.length;Te++){const Ge=Ae[Te];xt(Ge,te,j),ne.add(Ge)}else xt(Ae,te,j),ne.add(Ae)}),D.pop(),v=null,ne},this.compileAsync=function(A,X,te=null){const ne=this.compile(A,X,te);return new Promise(j=>{function Ae(){if(ne.forEach(function(Te){je.get(Te).currentProgram.isReady()&&ne.delete(Te)}),ne.size===0){j(A);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gn(A){Mn&&Mn(A)}function Jr(){Ei.stop()}function ji(){Ei.start()}const Ei=new ag;Ei.setAnimationLoop(gn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Mn=A,oe.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},oe.addEventListener("sessionstart",Jr),oe.addEventListener("sessionend",ji),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(X),X=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,W),v=rt.get(A,D.length),v.init(X),D.push(v),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,de=ye.init(this.clippingPlanes,Ee),y=Le.get(A,I.length),y.init(),I.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&Ti(Ae,X,-1/0,R.sortObjects)}Ti(A,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ce,se),ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ve&&Ze.addToRenderList(y,A),this.info.render.frame++,de===!0&&ye.beginShadows();const te=v.state.shadowsArray;Oe.render(te,A,X),de===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,j=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(j.length>0)for(let Te=0,Ge=Ae.length;Te<Ge;Te++){const He=Ae[Te];Tr(ne,j,A,He)}ve&&Ze.render(A);for(let Te=0,Ge=Ae.length;Te<Ge;Te++){const He=Ae[Te];Er(y,A,He,He.viewport)}}else j.length>0&&Tr(ne,j,A,X),ve&&Ze.render(A),Er(y,A,X);W!==null&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(R,A,X),Rt.resetDefaultState(),b=-1,C=null,D.pop(),D.length>0?(v=D[D.length-1],de===!0&&ye.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ti(A,X,te,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){ne&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Te=re.update(A),Ge=A.material;Ge.visible&&y.push(A,Te,Ge,te,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Te=re.update(A),Ge=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ke.copy(Te.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ge)){const He=Te.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],mt=Ge[We.materialIndex];mt&&mt.visible&&y.push(A,Te,mt,te,Ke.z,We)}}else Ge.visible&&y.push(A,Te,Ge,te,Ke.z,null)}}const Ae=A.children;for(let Te=0,Ge=Ae.length;Te<Ge;Te++)Ti(Ae[Te],X,te,ne)}function Er(A,X,te,ne){const j=A.opaque,Ae=A.transmissive,Te=A.transparent;v.setupLightsView(te),de===!0&&ye.setGlobalState(R.clippingPlanes,te),ne&&$e.viewport(B.copy(ne)),j.length>0&&Yi(j,X,te),Ae.length>0&&Yi(Ae,X,te),Te.length>0&&Yi(Te,X,te),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Tr(A,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Qr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Bo:Xi,minFilter:Kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[ne.id],Te=ne.viewport||B;Ae.setSize(Te.z,Te.w);const Ge=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(he),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),ve&&Ze.render(te);const He=R.toneMapping;R.toneMapping=Mr;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),de===!0&&ye.setGlobalState(R.clippingPlanes,ne),Yi(A,te,ne),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,mt=X.length;We<mt;We++){const At=X[We],pt=At.object,an=At.geometry,lt=At.material,Ye=At.group;if(lt.side===li&&pt.layers.test(ne.layers)){const Zn=lt.side;lt.side=mn,lt.needsUpdate=!0,Xo(pt,te,ne,an,lt,Ye),lt.side=Zn,lt.needsUpdate=!0,it=!0}}it===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae))}R.setRenderTarget(Ge),R.setClearColor(he,pe),tt!==void 0&&(ne.viewport=tt),R.toneMapping=He}function Yi(A,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ae=A.length;j<Ae;j++){const Te=A[j],Ge=Te.object,He=Te.geometry,tt=ne===null?Te.material:ne,it=Te.group;Ge.layers.test(te.layers)&&Xo(Ge,X,te,He,tt,it)}}function Xo(A,X,te,ne,j,Ae){A.onBeforeRender(R,X,te,ne,j,Ae),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,X,te,ne,A,Ae),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=mn,j.needsUpdate=!0,R.renderBufferDirect(te,X,ne,j,A,Ae),j.side=Wi,j.needsUpdate=!0,R.renderBufferDirect(te,X,ne,j,A,Ae),j.side=li):R.renderBufferDirect(te,X,ne,j,A,Ae),A.onAfterRender(R,X,te,ne,j,Ae)}function es(A,X,te){X.isScene!==!0&&(X=vt);const ne=je.get(A),j=v.state.lights,Ae=v.state.shadowsArray,Te=j.state.version,Ge=Pe.getParameters(A,j.state,Ae,X,te),He=Pe.getProgramCacheKey(Ge);let tt=ne.programs;ne.environment=A.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(A.isMeshStandardMaterial?N:T).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",ot),tt=new Map,ne.programs=tt);let it=tt.get(He);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Te)return hi(A,Ge),it}else Ge.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Ge,R),it=Pe.acquireProgram(Ge,He),tt.set(He,it),ne.uniforms=Ge.uniforms;const We=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ye.uniform),hi(A,Ge),ne.needsLights=Nl(A),ne.lightsStateVersion=Te,ne.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function jo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Al.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function hi(A,X){const te=je.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Yo(A,X,te,ne,j){X.isScene!==!0&&(X=vt),P.resetTextureUnits();const Ae=X.fog,Te=ne.isMeshStandardMaterial?X.environment:null,Ge=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qs,He=(ne.isMeshStandardMaterial?N:T).get(ne.envMap||Te),tt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,At=!!te.morphAttributes.color;let pt=Mr;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(pt=R.toneMapping);const an=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,lt=an!==void 0?an.length:0,Ye=je.get(ne),Zn=v.state.lights;if(de===!0&&(Ee===!0||A!==C)){const vn=A===C&&ne.id===b;ye.setState(ne,A,vn)}let Mt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Zn.state.version||Ye.outputColorSpace!==Ge||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==He||ne.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==We||Ye.morphNormals!==mt||Ye.morphColors!==At||Ye.toneMapping!==pt||Ye.morphTargetsCount!==lt)&&(Mt=!0):(Mt=!0,Ye.__version=ne.version);let ln=Ye.currentProgram;Mt===!0&&(ln=es(ne,X,j));let Qn=!1,jt=!1,pi=!1;const Lt=ln.getUniforms(),zn=Ye.uniforms;if($e.useProgram(ln.program)&&(Qn=!0,jt=!0,pi=!0),ne.id!==b&&(b=ne.id,jt=!0),Qn||C!==A){$e.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),qv(xe),$v(xe),Lt.setValue(G,"projectionMatrix",xe)):Lt.setValue(G,"projectionMatrix",A.projectionMatrix),Lt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Bn=Lt.map.cameraPosition;Bn!==void 0&&Bn.setValue(G,Fe.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,jt=!0,pi=!0)}if(j.isSkinnedMesh){Lt.setOptional(G,j,"bindMatrix"),Lt.setOptional(G,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue(G,"boneTexture",vn.boneTexture,P))}j.isBatchedMesh&&(Lt.setOptional(G,j,"batchingTexture"),Lt.setValue(G,"batchingTexture",j._matricesTexture,P),Lt.setOptional(G,j,"batchingIdTexture"),Lt.setValue(G,"batchingIdTexture",j._indirectTexture,P),Lt.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(G,"batchingColorTexture",j._colorsTexture,P));const wi=te.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Qe.update(j,te,ln),(jt||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Lt.setValue(G,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(zn.envMap.value=He,zn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(zn.envMapIntensity.value=X.environmentIntensity),jt&&(Lt.setValue(G,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&qo(zn,pi),Ae&&ne.fog===!0&&Me.refreshFogUniforms(zn,Ae),Me.refreshMaterialUniforms(zn,ne,k,fe,v.state.transmissionRenderTarget[A.id]),Al.upload(G,jo(Ye),zn,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Al.upload(G,jo(Ye),zn,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(G,"center",j.center),Lt.setValue(G,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(G,"normalMatrix",j.normalMatrix),Lt.setValue(G,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const vn=ne.uniformsGroups;for(let Bn=0,En=vn.length;Bn<En;Bn++){const $o=vn[Bn];V.update($o,ln),V.bind($o,ln)}}return ln}function qo(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,X,te){je.get(A.texture).__webglTexture=X,je.get(A.depthTexture).__webglTexture=te;const ne=je.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const te=je.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,te=0){W=A,z=X,F=te;let ne=!0,j=null,Ae=!1,Te=!1;if(A){const He=je.get(A);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(G.FRAMEBUFFER,null),ne=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(He.__hasExternalTextures)P.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&je.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Te=!0);const it=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?j=it[X][te]:j=it[X],Ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?j=je.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[te]:j=it,B.copy(A.viewport),ue.copy(A.scissor),ee=A.scissorTest}else B.copy(U).multiplyScalar(k).floor(),ue.copy(ie).multiplyScalar(k).floor(),ee=Ue;if($e.bindFramebuffer(G.FRAMEBUFFER,j)&&ne&&$e.drawBuffers(A,j),$e.viewport(B),$e.scissor(ue),$e.setScissorTest(ee),Ae){const He=je.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,te)}else if(Te){const He=je.get(A.texture),tt=X||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,te||0,tt)}b=-1},this.readRenderTargetPixels=function(A,X,te,ne,j,Ae,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){$e.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const He=A.texture,tt=He.format,it=He.type;if(!at.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-j&&G.readPixels(X,te,ne,j,st.convert(tt),st.convert(it),Ae)}finally{const He=W!==null?je.get(W).__webglFramebuffer:null;$e.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,ne,j,Ae,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ge=Ge[Te]),Ge){const He=A.texture,tt=He.format,it=He.type;if(!at.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-j){$e.bindFramebuffer(G.FRAMEBUFFER,Ge);const We=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),G.readPixels(X,te,ne,j,st.convert(tt),st.convert(it),0);const mt=W!==null?je.get(W).__webglFramebuffer:null;$e.bindFramebuffer(G.FRAMEBUFFER,mt);const At=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Yv(G,At,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(We),G.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,te=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),j=Math.floor(A.image.width*ne),Ae=Math.floor(A.image.height*ne),Te=X!==null?X.x:0,Ge=X!==null?X.y:0;P.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Te,Ge,j,Ae),$e.unbindTexture()},this.copyTextureToTexture=function(A,X,te=null,ne=null,j=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],X=arguments[2],j=arguments[3]||0,te=null);let Ae,Te,Ge,He,tt,it,We,mt,At;const pt=A.isCompressedTexture?A.mipmaps[j]:A.image;te!==null?(Ae=te.max.x-te.min.x,Te=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,He=te.min.x,tt=te.min.y,it=te.isBox3?te.min.z:0):(Ae=pt.width,Te=pt.height,Ge=pt.depth||1,He=0,tt=0,it=0),ne!==null?(We=ne.x,mt=ne.y,At=ne.z):(We=0,mt=0,At=0);const an=st.convert(X.format),lt=st.convert(X.type);let Ye;X.isData3DTexture?(P.setTexture3D(X,0),Ye=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Ye=G.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Zn=G.getParameter(G.UNPACK_ROW_LENGTH),Mt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ln=G.getParameter(G.UNPACK_SKIP_PIXELS),Qn=G.getParameter(G.UNPACK_SKIP_ROWS),jt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,pt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,He),G.pixelStorei(G.UNPACK_SKIP_ROWS,tt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,it);const pi=A.isDataArrayTexture||A.isData3DTexture,Lt=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=je.get(A),wi=je.get(X),vn=je.get(zn.__renderTarget),Bn=je.get(wi.__renderTarget);$e.bindFramebuffer(G.READ_FRAMEBUFFER,vn.__webglFramebuffer),$e.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let En=0;En<Ge;En++)pi&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(A).__webglTexture,j,it+En),A.isDepthTexture?(Lt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(X).__webglTexture,j,At+En),G.blitFramebuffer(He,tt,Ae,Te,We,mt,Ae,Te,G.DEPTH_BUFFER_BIT,G.NEAREST)):Lt?G.copyTexSubImage3D(Ye,j,We,mt,At+En,He,tt,Ae,Te):G.copyTexSubImage2D(Ye,j,We,mt,At+En,He,tt,Ae,Te);$e.bindFramebuffer(G.READ_FRAMEBUFFER,null),$e.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ye,j,We,mt,At,Ae,Te,Ge,an,lt,pt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,j,We,mt,At,Ae,Te,Ge,an,pt.data):G.texSubImage3D(Ye,j,We,mt,At,Ae,Te,Ge,an,lt,pt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,j,We,mt,Ae,Te,an,lt,pt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,j,We,mt,pt.width,pt.height,an,pt.data):G.texSubImage2D(G.TEXTURE_2D,j,We,mt,Ae,Te,an,lt,pt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ln),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jt),j===0&&X.generateMipmaps&&G.generateMipmap(Ye),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,ne=null,j=0){return A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],X=arguments[3],j=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,ne,j)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){z=0,F=0,W=null,$e.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}class sE extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pg extends Ks{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rm=new Ot,Of=new $f,_l=new Dl,xl=new J;class oE extends on{constructor(e=new di,n=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=u,e.ray.intersectsSphere(_l)===!1)return;Rm.copy(a).invert(),Of.copy(e.ray).applyMatrix4(Rm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=_,w=S;E<w;E++){const y=g.getX(E);xl.fromBufferAttribute(m,y),bm(xl,y,p,a,e,n,this)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=_,w=S;E<w;E++)xl.fromBufferAttribute(m,E),bm(xl,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function bm(s,e,n,r,a,u,c){const d=Of.distanceSqToPoint(s);if(d<n){const p=new J;Of.closestPointToPoint(s,p),p.applyMatrix4(r);const g=a.ray.origin.distanceTo(p);if(g<a.near||g>a.far)return;u.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class yl extends Sn{constructor(e,n,r,a,u,c,d,p,g){super(e,n,r,a,u,c,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bi extends di{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let g=0;const x=[],m=new J,_=new J,S=[],E=[],w=[],y=[];for(let v=0;v<=r;v++){const I=[],D=v/r;let R=0;v===0&&c===0?R=.5/n:v===r&&p===Math.PI&&(R=-.5/n);for(let Z=0;Z<=n;Z++){const z=Z/n;m.x=-e*Math.cos(a+z*u)*Math.sin(c+D*d),m.y=e*Math.cos(c+D*d),m.z=e*Math.sin(a+z*u)*Math.sin(c+D*d),E.push(m.x,m.y,m.z),_.copy(m).normalize(),w.push(_.x,_.y,_.z),y.push(z+R,1-D),I.push(g++)}x.push(I)}for(let v=0;v<r;v++)for(let I=0;I<n;I++){const D=x[v][I+1],R=x[v][I],Z=x[v+1][I],z=x[v+1][I+1];(v!==0||c>0)&&S.push(D,R,z),(v!==r-1||p<Math.PI)&&S.push(R,Z,z)}this.setIndex(S),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bl extends di{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],p=[],g=[],x=new J,m=new J,_=new J;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const w=E/a*u,y=S/r*Math.PI*2;m.x=(e+n*Math.cos(y))*Math.cos(w),m.y=(e+n*Math.cos(y))*Math.sin(w),m.z=n*Math.sin(y),d.push(m.x,m.y,m.z),x.x=e*Math.cos(w),x.y=e*Math.sin(w),_.subVectors(m,x).normalize(),p.push(_.x,_.y,_.z),g.push(E/a),g.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const w=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,I=(a+1)*S+E;c.push(w,y,I),c.push(y,v,I)}this.setIndex(c),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pm extends Ks{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mg extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const qc=new Ot,Lm=new J,Dm=new J;class aE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lE extends aE{constructor(){super(new lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends mg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new lE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uE extends mg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Im=new Ot;class cE{constructor(e,n,r=0,a=1/0){this.ray=new $f(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Im),this}intersectObject(e,n=!0,r=[]){return kf(e,this,r,n),r.sort(Um),r}intersectObjects(e,n=!0,r=[]){for(let a=0,u=e.length;a<u;a++)kf(e[a],this,r,n);return r.sort(Um),r}}function Um(s,e){return s.distance-e.distance}function kf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const u=s.children;for(let c=0,d=u.length;c<d;c++)kf(u[c],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);const sn=[{id:0,range:"90°–80°N",name:"Ice Cap",subtitle:"Permanent Ice, Polar Desert",latStart:90,latEnd:80,temp:-35,rainfall:50,population:0,biodiversity:5,elevation:0,icon:"❄️",vegetation:"None — permanent ice sheet",climate:"Polar. 24hr dark/light cycles. Rarely above 0°C.",cultures:"No permanent settlement. Research stations only.",resources:"Freshwater locked in ice, emerging Arctic routes",industries:"Research, military monitoring",water:"Arctic Ocean — increasingly ice-free summers",keyFact:"The Arctic Ocean beneath the ice is surprisingly productive — algae grow on the underside of sea ice, feeding an entire food web.",places:["Arctic Ocean","North Pole"]},{id:1,range:"80°–70°N",name:"High Arctic",subtitle:"Tundra & Permafrost",latStart:80,latEnd:70,temp:-20,rainfall:150,population:1,biodiversity:10,elevation:200,icon:"🧊",vegetation:"Mosses, lichens, dwarf shrubs. No trees.",climate:"Polar tundra. Permafrost. Brief summer thaw.",cultures:"Inuit, Sámi fringe. Deep cold-adaptation spanning millennia.",resources:"Oil, gas, rare earths — accessible as permafrost thaws",industries:"Resource extraction, indigenous subsistence, research",water:"Seasonal meltwater, permafrost lakes",keyFact:"Climate change is rewriting geography here faster than anywhere — permafrost collapse releases ancient methane and reshapes coastlines.",places:["Svalbard","N. Greenland","Siberian coast"]},{id:2,range:"70°–60°N",name:"Subarctic",subtitle:"Taiga — Earth's Largest Biome",latStart:70,latEnd:60,temp:-10,rainfall:400,population:5,biodiversity:25,elevation:300,icon:"🌲",vegetation:"Boreal coniferous forest — spruce, pine, larch.",climate:"Subarctic. 8-month winters, explosive short summers.",cultures:"Viking origins. Russian frontier. Finnish sisu. Winter survival = collective problem.",resources:"Timber, hydropower, minerals, massive carbon sink",industries:"Forestry, hydroelectric, mining, fishing",water:"Vast rivers — Ob, Yenisei, Lena drain into Arctic",keyFact:"The boreal forest stores more carbon than all tropical rainforests combined. It's Earth's thermostat.",places:["Finland","Siberia","Alaska","N. Canada"]},{id:3,range:"60°–50°N",name:"Power Belt",subtitle:"Temperate-Boreal Transition",latStart:60,latEnd:50,temp:5,rainfall:700,population:40,biodiversity:45,elevation:250,icon:"⚡",vegetation:"Mixed deciduous-coniferous forest. Meadows.",climate:"Cool temperate. Four seasons. Oceanic west, continental inland.",cultures:"Drove the Industrial Revolution. Collective structures.",resources:"Coal seams, fertile glacial soils, navigable rivers",industries:"Heavy industry, manufacturing, tech, agriculture",water:"Dense rivers — Thames, Rhine, Volga",keyFact:"Punches absurdly above its weight — the sweet spot between 'harsh enough to demand technology' and 'mild enough to accumulate surplus.'",places:["S. Scandinavia","Scotland","Moscow","S. Canada"]},{id:4,range:"50°–40°N",name:"Temperate Heartland",subtitle:"Civilization's Engine Room",latStart:50,latEnd:40,temp:12,rainfall:800,population:85,biodiversity:55,elevation:400,icon:"🏛️",vegetation:"Deciduous forest, grasslands, steppe. Wheat, wine, olives.",climate:"Temperate. Mediterranean coasts, continental inland.",cultures:"Most great empires. Dense cities. Grain surplus → states → empires.",resources:"Rich soils, diverse minerals, trade routes",industries:"Finance, tech, agriculture, automotive, aerospace",water:"Great rivers — Danube, Yangtze, Mississippi",keyFact:"The densest concentration of historical civilizational power on Earth.",places:["France","Germany","US East","N. China","Japan"]},{id:5,range:"40°–30°N",name:"Cradle Belt",subtitle:"Where Civilization Began",latStart:40,latEnd:30,temp:20,rainfall:500,population:90,biodiversity:50,elevation:500,icon:"🏾",vegetation:"Mediterranean scrub, grasslands, desert margins.",climate:"Subtropical. Mediterranean coasts, arid interiors.",cultures:"Fertile Crescent, Nile, Indus, Yellow River — birthplaces of civilization.",resources:"Ancient soils, oil, strategic waterways",industries:"Agriculture, tech hubs, tourism",water:"Nile, Tigris-Euphrates, Indus, Yellow River",keyFact:"River valleys birthed first cities; deserts between them let distinct civilizations evolve independently.",places:["California","Turkey","Fertile Crescent","N. India"]},{id:6,range:"30°–20°N",name:"Desert–Monsoon",subtitle:"Hadley Cell Divide",latStart:30,latEnd:20,temp:28,rainfall:300,population:75,biodiversity:35,elevation:350,icon:"🏜️",vegetation:"Desert scrub west, monsoon agriculture east.",climate:"Subtropical high-pressure → deserts west. Monsoons east.",cultures:"Oasis routes. Gulf oil states. India's heartland.",resources:"Oil (massive), solar potential, monsoon agriculture",industries:"Oil & gas, agriculture, solar energy",water:"Monsoon rains east; wadis and oases west",keyFact:"The energy powering the industrial belt largely comes from here — fossil fuels and future solar.",places:["Sahara","Arabia","Rajasthan","Florida"]},{id:7,range:"20°–10°N",name:"Tropical Monsoon",subtitle:"Spice Belt",latStart:20,latEnd:10,temp:30,rainfall:1500,population:70,biodiversity:75,elevation:200,icon:"🌿",vegetation:"Savannas, tropical dry forests. Rice, sugarcane, spices.",climate:"Tropical wet-dry. Monsoon-driven seasons.",cultures:"Societies built around seasonal water. Spice trade funded Age of Exploration.",resources:"Spices, tropical agriculture, timber",industries:"Agriculture, textiles, emerging tech",water:"Monsoon rivers, seasonal flooding, rich deltas",keyFact:"Most biodiverse transition zone — spice trade from here changed world history.",places:["Central America","W. Africa","S. India","SE Asia"]},{id:8,range:"10°N–0°",name:"Equatorial North",subtitle:"Rainforest Canopy",latStart:10,latEnd:0,temp:27,rainfall:2500,population:45,biodiversity:95,elevation:100,icon:"🌳",vegetation:"Dense rainforest. Most species per hectare. Poor soils.",climate:"Equatorial. Peak solar, minimal seasons. Daily storms.",cultures:"Distributed, forest-adapted, trade-network societies.",resources:"Biodiversity, timber, minerals beneath",industries:"Plantation agriculture, mining, research",water:"Amazon tributaries, Congo River",keyFact:"Tropical disease loads historically limited state formation — controversial but real factor.",places:["Amazon","Congo","Indonesia","Malaysia"]},{id:9,range:"0°–10°S",name:"Equatorial South",subtitle:"Humanity's Launchpad",latStart:0,latEnd:-10,temp:26,rainfall:2200,population:50,biodiversity:90,elevation:800,icon:"🧬",vegetation:"Rainforest + East African highland exception.",climate:"Equatorial lowlands + highland exception. Fastest-growing cities.",cultures:"East African Rift: where Homo sapiens evolved.",resources:"Coffee, minerals, geothermal energy",industries:"Coffee, tea, mining, emerging tech",water:"Rift Valley lakes — Victoria, Tanganyika",keyFact:"East African highlands break the tropical pattern — our species was born here.",places:["Amazon core","Congo","Kenya","Ethiopia"]},{id:10,range:"10°–20°S",name:"Southern Tropical",subtitle:"Resource Extraction Zone",latStart:-10,latEnd:-20,temp:25,rainfall:1200,population:25,biodiversity:70,elevation:600,icon:"⛏️",vegetation:"Savanna, dry tropical forest. Cerrado → soy/cattle.",climate:"Tropical wet-dry. Less land than northern mirror.",cultures:"Indigenous communities. Colonial extraction legacy.",resources:"Copper, iron, soy, cattle",industries:"Mining, ranching, soy agriculture",water:"Zambezi, Pantanal wetlands",keyFact:"The cerrado feeds the 40°–50°N belt. Global economy's resource extraction zone.",places:["N. Australia","Zambia","Bolivia","Cerrado"]},{id:11,range:"20°–30°S",name:"Southern Subtropical",subtitle:"Desert Mirrors",latStart:-20,latEnd:-30,temp:22,rainfall:400,population:35,biodiversity:40,elevation:500,icon:"🍷",vegetation:"Deserts (Atacama, Kalahari, Outback) + productive pockets.",climate:"Same Hadley dynamics as north. Desert interiors.",cultures:"Southern economic engines. Wine cultures.",resources:"Minerals, wine regions, lithium",industries:"Mining, viticulture, finance",water:"Orange River, coastal aquifers",keyFact:"Same physics as 20–30°N but far less land = smaller populations.",places:["São Paulo","Johannesburg","Atacama"]},{id:12,range:"30°–40°S",name:"Southern Temperate",subtitle:"Pleasant but Sparse",latStart:-30,latEnd:-40,temp:15,rainfall:700,population:20,biodiversity:45,elevation:200,icon:"🐑",vegetation:"Grasslands, Mediterranean scrub, temperate forest.",climate:"Mediterranean/oceanic. Mild, pleasant.",cultures:"Shaped by European colonization.",resources:"Agricultural land, fisheries, wind energy",industries:"Agriculture, wine, wool, tourism",water:"Coastal waters, Murray-Darling",keyFact:"Mirrors 30°–40°N but barely any land exists here.",places:["Buenos Aires","Cape Town","Sydney","NZ"]},{id:13,range:"40°–50°S",name:"Roaring Forties",subtitle:"Windiest Latitudes",latStart:-40,latEnd:-50,temp:8,rainfall:1e3,population:2,biodiversity:30,elevation:100,icon:"💨",vegetation:"Windswept grasslands, cold rainforest.",climate:"Cool maritime. Constant westerlies. Frequent storms.",cultures:"Patagonian gauchos, Māori. Very sparse.",resources:"Fisheries, wind energy, sheep",industries:"Sheep, fishing, wind energy",water:"Southern Ocean — global circulation driver",keyFact:"Unbroken ocean lets winds circle the planet. Enormous planetary importance.",places:["Patagonia","S. New Zealand"]},{id:14,range:"50°–60°S",name:"Subantarctic",subtitle:"Ocean Realm",latStart:-50,latEnd:-60,temp:2,rainfall:600,population:0,biodiversity:20,elevation:50,icon:"🐋",vegetation:"Tussock grass on islands. Marine ecosystems.",climate:"Subpolar maritime. Cold, wet, windy.",cultures:"Scientific outposts. Contested sovereignty.",resources:"Krill — underpins Southern Ocean food web",industries:"Research, fishing",water:"Antarctic Convergence Zone",keyFact:"Krill here underpins the entire Southern Ocean food web.",places:["Tierra del Fuego","Falklands","S. Georgia"]},{id:15,range:"60°–90°S",name:"Antarctica",subtitle:"Frozen Continent",latStart:-60,latEnd:-90,temp:-50,rainfall:50,population:0,biodiversity:8,elevation:2300,icon:"🏔️",vegetation:"Almost none. Ice up to 4.8km thick.",climate:"Polar. Coldest: -89.2°C. Technically a desert.",cultures:"No permanent pop. Antarctic Treaty expires 2048.",resources:"70% of Earth's freshwater. Minerals beneath.",industries:"Scientific research only (by treaty)",water:"26.5M km³ frozen freshwater",keyFact:"What happens when the Antarctic Treaty expires in 2048 is one of the big quiet geopolitical questions.",places:["Antarctic Peninsula","South Pole"]}],ko=[{key:"temp",label:"Temperature",unit:"°C",icon:"🌡️",stops:[{v:-50,c:[26,35,126]},{v:-20,c:[2,136,209]},{v:0,c:[77,208,225]},{v:10,c:[255,241,118]},{v:20,c:[255,167,38]},{v:30,c:[244,67,54]},{v:35,c:[183,28,28]}]},{key:"rainfall",label:"Rainfall",unit:"mm/yr",icon:"💧",stops:[{v:0,c:[210,180,100]},{v:400,c:[180,170,120]},{v:800,c:[100,181,246]},{v:1500,c:[25,118,210]},{v:2500,c:[13,71,161]}]},{key:"population",label:"Population",unit:"density",icon:"👥",stops:[{v:0,c:[20,20,40]},{v:20,c:[60,40,80]},{v:50,c:[180,120,255]},{v:80,c:[255,215,0]},{v:100,c:[255,248,225]}]},{key:"biodiversity",label:"Biodiversity",unit:"index",icon:"🌿",stops:[{v:0,c:[80,60,50]},{v:25,c:[141,110,99]},{v:50,c:[129,199,132]},{v:75,c:[46,125,50]},{v:100,c:[27,94,32]}]},{key:"elevation",label:"Elevation",unit:"m",icon:"⛰️",stops:[{v:0,c:[21,101,192]},{v:200,c:[76,175,80]},{v:600,c:[139,195,74]},{v:1200,c:[255,152,0]},{v:2500,c:[121,85,72]}]}],fE={temp:{min:-50,max:35},rainfall:{min:0,max:2500},population:{min:0,max:100},biodiversity:{min:0,max:100},elevation:{min:0,max:2500}};function zf(s,e){const n=s.stops;if(e<=n[0].v)return n[0].c;if(e>=n[n.length-1].v)return n[n.length-1].c;for(let r=0;r<n.length-1;r++)if(e>=n[r].v&&e<=n[r+1].v){const a=(e-n[r].v)/(n[r+1].v-n[r].v);return n[r].c.map((u,c)=>Math.round(u+(n[r+1].c[c]-u)*a))}return n[n.length-1].c}function dE(s){return[["#7ec8e3","#0a1a5c"],["#80cbc4","#003d40"],["#2e7d32","#81c784"],["#43a047","#a5d6a7"],["#558b2f","#c5e1a5"],["#f9a825","#fff59d"],["#e65100","#ffab40"],["#2e7d32","#69f0ae"],["#00695c","#80cbc4"],["#00695c","#80cbc4"],["#558b2f","#aed581"],["#e65100","#ffab40"],["#33691e","#81c784"],["#37474f","#90a4ae"],["#263238","#78909c"],["#90caf9","#1565c0"]][s]||["#333","#666"]}function hE(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const r=n.getContext("2d"),a=r.createLinearGradient(0,0,0,1024);a.addColorStop(0,"#060e2a"),a.addColorStop(.12,"#0b1e4a"),a.addColorStop(.28,"#0d2d65"),a.addColorStop(.5,"#0a3d80"),a.addColorStop(.72,"#0d2d65"),a.addColorStop(.88,"#0b1e4a"),a.addColorStop(1,"#060e2a"),r.fillStyle=a,r.fillRect(0,0,2048,1024);for(let S=0;S<5e4;S++){const E=Math.random()*2048,w=Math.random()*1024,y=Math.random()*.03;r.fillStyle=`rgba(80,160,240,${y})`,r.fillRect(E,w,2,1)}function u(S,E){return[(S+180)/360*2048,(90-E)/180*1024]}function c(S,E,w){r.beginPath();const[y,v]=u(S[0][0],S[0][1]);r.moveTo(y,v);for(let I=1;I<S.length;I++){const[D,R]=u(S[I][0],S[I][1]);r.lineTo(D,R)}r.closePath(),r.fillStyle=E,r.fill(),r.strokeStyle=w,r.lineWidth=1.5,r.stroke()}const d="rgba(40,62,40,0.93)",p="rgba(70,100,70,0.5)",g="rgba(200,218,235,0.92)",x="rgba(170,195,220,0.5)",m="rgba(95,82,55,0.9)",_="rgba(120,105,70,0.45)";c([[-17,35],[-5,36],[10,37],[15,32],[25,32],[33,30],[35,27],[38,20],[42,12],[50,12],[51,8],[45,2],[42,-2],[40,-5],[35,-8],[33,-15],[35,-22],[33,-27],[30,-30],[28,-33],[26,-34],[20,-35],[18,-34],[15,-28],[12,-18],[12,-10],[10,-5],[8,4],[5,5],[2,6],[-2,5],[-8,5],[-12,8],[-16,12],[-17,15],[-17,21],[-13,25],[-15,28],[-17,32]],d,p),c([[-10,36],[-9,38],[-8,43],[-2,44],[0,46],[2,48],[5,48],[8,48],[6,54],[8,55],[10,54],[12,55],[14,54],[17,55],[20,54],[22,55],[24,54],[26,55],[28,54],[30,55],[32,52],[35,48],[40,48],[42,45],[38,42],[35,40],[30,38],[28,37],[25,36],[20,36],[15,38],[12,38],[8,44],[5,46],[3,47],[0,44],[-3,44],[-5,44],[-8,44],[-9,43],[-10,40]],d,p),c([[40,48],[45,52],[50,55],[55,58],[60,60],[65,62],[70,65],[80,68],[90,70],[100,68],[110,65],[120,62],[125,60],[130,55],[135,52],[140,50],[142,46],[140,42],[135,38],[130,35],[128,33],[125,30],[120,25],[115,22],[110,20],[108,15],[105,12],[100,14],[98,16],[95,20],[90,22],[85,23],[80,25],[75,24],[70,22],[68,24],[65,25],[62,26],[55,25],[50,27],[45,30],[42,32],[40,35],[38,42],[40,45]],d,p),c([[68,24],[72,22],[75,20],[78,16],[80,12],[80,8],[77,8],[75,10],[72,14],[70,18],[68,22]],d,p),c([[-168,65],[-162,64],[-150,62],[-140,60],[-135,58],[-130,55],[-125,50],[-124,46],[-122,42],[-118,35],[-115,32],[-110,30],[-105,28],[-100,26],[-97,26],[-95,28],[-92,30],[-88,30],[-85,30],[-82,28],[-81,26],[-80,25],[-82,30],[-78,35],[-75,38],[-73,41],[-70,42],[-68,44],[-66,45],[-65,47],[-60,47],[-58,50],[-55,52],[-60,55],[-65,58],[-70,60],[-80,62],[-90,65],[-100,68],[-110,70],[-120,72],[-130,71],[-140,68],[-150,65],[-160,66]],d,p),c([[-80,10],[-78,8],[-75,5],[-72,2],[-70,-2],[-72,-5],[-75,-10],[-76,-15],[-72,-18],[-68,-22],[-66,-25],[-65,-30],[-67,-35],[-68,-40],[-70,-45],[-72,-50],[-74,-52],[-72,-48],[-70,-42],[-68,-38],[-65,-35],[-62,-30],[-58,-28],[-55,-25],[-50,-22],[-48,-18],[-45,-15],[-42,-12],[-40,-8],[-38,-5],[-36,-2],[-35,0],[-38,2],[-42,5],[-48,6],[-52,5],[-55,6],[-60,8],[-65,10],[-70,11],[-75,11],[-78,10]],d,p),c([[115,-12],[120,-14],[125,-14],[130,-12],[135,-12],[138,-15],[140,-18],[142,-20],[145,-22],[148,-24],[150,-26],[152,-28],[153,-30],[150,-33],[148,-35],[145,-38],[140,-38],[138,-36],[135,-34],[132,-32],[130,-32],[128,-30],[125,-28],[122,-26],[118,-24],[116,-22],[114,-22],[113,-24],[115,-26],[116,-30],[115,-32],[114,-33],[113,-32],[114,-28],[114,-24],[113,-20],[114,-18],[115,-15]],d,p),c([[-55,60],[-50,62],[-45,65],[-40,68],[-35,72],[-30,75],[-25,78],[-20,80],[-25,82],[-30,83],[-40,82],[-50,80],[-55,78],[-58,75],[-60,72],[-58,68],[-55,64]],g,x),c([[-180,-65],[-150,-68],[-120,-70],[-90,-72],[-60,-70],[-30,-68],[0,-68],[30,-70],[60,-68],[90,-70],[120,-68],[150,-70],[180,-65],[180,-90],[-180,-90]],g,x),c([[-15,20],[-5,22],[5,25],[15,28],[25,30],[35,28],[40,25],[45,22],[50,20],[55,18],[50,15],[40,15],[30,18],[20,20],[10,18],[0,16],[-10,18]],m,_),c([[68,28],[72,26],[76,24],[72,22],[68,24]],m,_),c([[125,-20],[130,-22],[135,-24],[138,-26],[140,-28],[138,-30],[135,-30],[130,-28],[126,-26],[124,-24],[125,-22]],m,_),c([[-72,-18],[-70,-22],[-70,-28],[-68,-30],[-66,-28],[-68,-24],[-70,-20]],m,_);for(let S=0;S<2e4;S++){const E=Math.random()*2048,w=Math.random()*1024,y=90-w/1024*180;if(Math.abs(y)<28){const v=1-Math.abs(y)/28;r.fillStyle=`rgba(15,70,15,${Math.random()*.04*v})`,r.fillRect(E,w,3,2)}}for(let S=0;S<8e3;S++){const E=Math.random()*2048,w=Math.random()*1024,y=90-w/1024*180;y>50&&y<70&&(r.fillStyle=`rgba(10,45,30,${Math.random()*.04})`,r.fillRect(E,w,3,2))}return n}function pE(){const n=document.createElement("canvas");n.width=1024,n.height=512;const r=n.getContext("2d");for(let a=0;a<2200;a++){const u=Math.random()*1024,c=Math.random()*512,d=90-c/512*180,p=Math.abs(d)<12?.85:Math.abs(d)>38&&Math.abs(d)<62?.7:Math.abs(d)>18&&Math.abs(d)<32?.15:.4;if(Math.random()>p)continue;const g=8+Math.random()*28,x=r.createRadialGradient(u,c,0,u,c,g);x.addColorStop(0,`rgba(255,255,255,${.04+Math.random()*.06})`),x.addColorStop(.6,`rgba(255,255,255,${.01+Math.random()*.02})`),x.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=x,r.beginPath(),r.arc(u,c,g,0,Math.PI*2),r.fill()}return n}function Nm(s){const r=document.createElement("canvas");r.width=2048,r.height=1024;const a=r.getContext("2d");if(!s)return a.clearRect(0,0,2048,1024),r;const u=ko.find(d=>d.key===s),c=[];sn.forEach(d=>{const g=(90-(d.latStart+d.latEnd)/2)/180;c.push({y:g,value:d[s]})}),c.sort((d,p)=>d.y-p.y);for(let d=0;d<1024;d++){const p=d/1024;let g;if(p<=c[0].y)g=c[0].value;else if(p>=c[c.length-1].y)g=c[c.length-1].value;else for(let m=0;m<c.length-1;m++)if(p>=c[m].y&&p<=c[m+1].y){const _=(p-c[m].y)/(c[m+1].y-c[m].y),S=_*_*(3-2*_);g=c[m].value+(c[m+1].value-c[m].value)*S;break}const x=zf(u,g);a.fillStyle=`rgba(${x[0]},${x[1]},${x[2]},0.6)`,a.fillRect(0,d,2048,1)}return r}const mE=`
@keyframes latFadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes latBarGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes latPulseRing {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 0.9; }
}
.lat-scroll::-webkit-scrollbar { width: 0; display: none; }
.lat-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;function gE(){const s=xr.useRef(null),e=xr.useRef({}),[n,r]=xr.useState(null),[a,u]=xr.useState(null),c=n!==null?sn[n]:null;xr.useEffect(()=>{const m=s.current;if(!m)return;const _=m.clientWidth,S=m.clientHeight,E=new sE,w=new $n(40,_/S,.1,100);w.position.set(0,.3,4.8),w.lookAt(0,0,0);const y=new rE({antialias:!0,alpha:!0});y.setSize(_,S),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.setClearColor(264208,1),y.toneMapping=km,y.toneMappingExposure=1.1,m.appendChild(y.domElement),E.add(new uE(16777215,.45));const v=new $c(16774368,1.4);v.position.set(5,3,5),E.add(v);const I=new $c(4482730,.25);I.position.set(-4,-2,3),E.add(I);const D=new $c(6719692,.2);D.position.set(-3,1,-4),E.add(D);const R=new di,Z=6e3,z=new Float32Array(Z*3),F=new Float32Array(Z*3);for(let N=0;N<Z*3;N+=3){z[N]=(Math.random()-.5)*120,z[N+1]=(Math.random()-.5)*120,z[N+2]=(Math.random()-.5)*120;const K=.4+Math.random()*.6,ae=Math.random();F[N]=K*(ae>.8?.9:1),F[N+1]=K*(ae>.9?.85:1),F[N+2]=K*(ae<.3?.95:1)}R.setAttribute("position",new Kn(z,3)),R.setAttribute("color",new Kn(F,3)),E.add(new oE(R,new pg({size:.05,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85})));const W=new ks;E.add(W);const b=hE(),C=new yl(b);C.wrapS=qr;const B=new Bi(2,128,64),ue=new Pm({map:C,shininess:15,specular:new gt(1716304)}),ee=new tn(B,ue);W.add(ee);const he=pE(),pe=new yl(he);pe.wrapS=qr;const le=new Bi(2.025,64,32),fe=new Pm({map:pe,transparent:!0,opacity:.55,depthWrite:!1,side:Wi}),k=new tn(le,fe);W.add(k);const ce=Nm(null),se=new yl(ce);se.wrapS=qr;const U=new Bi(2.008,128,64),ie=new jr({map:se,transparent:!0,opacity:0,depthWrite:!1}),Ue=new tn(U,ie);W.add(Ue);const q=new ks;W.add(q);function de(){for(;q.children.length;){const N=q.children[0];q.remove(N),N.geometry&&N.geometry.dispose(),N.material&&N.material.dispose()}}function Ee(N,K){de();const ae=(90-N)*Math.PI/180,re=(N-K)*Math.PI/180,Pe=new Bi(2.014,128,16,0,Math.PI*2,ae,re),Me=new jr({color:16777215,transparent:!0,opacity:.15,depthWrite:!1,side:li});q.add(new tn(Pe,Me)),[ae,ae+re].forEach(Le=>{const rt=2.018*Math.sin(Le),ye=2.018*Math.cos(Le);if(rt<.01)return;const Oe=new bl(rt,.005,8,128),Ze=new jr({color:16777215,transparent:!0,opacity:.7}),Qe=new tn(Oe,Ze);Qe.position.y=ye,Qe.rotation.x=Math.PI/2,q.add(Qe)})}for(let N=-80;N<=80;N+=10){const K=(90-N)*Math.PI/180,ae=2.01*Math.sin(K),re=2.01*Math.cos(K),Pe=N===0,Me=Math.abs(N)===20||Math.abs(N)===30,Le=new bl(ae,Pe?.004:.0012,8,200),rt=new jr({color:Pe?16763904:Me?16750916:16777215,transparent:!0,opacity:Pe?.3:Me?.12:.06}),ye=new tn(Le,rt);ye.position.y=re,ye.rotation.x=Math.PI/2,W.add(ye)}const xe=new Bi(2.18,64,64),Ce=new Mi({vertexShader:`
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          vNorm = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          float rim = 1.0 - max(0.0, dot(normalize(-vPos), vNorm));
          vec3 col = mix(vec3(0.28, 0.55, 1.0), vec3(0.12, 0.28, 0.85), rim);
          float alpha = pow(rim, 3.0) * 0.55;
          gl_FragColor = vec4(col, alpha);
        }`,transparent:!0,side:mn,depthWrite:!1});W.add(new tn(xe,Ce));const Fe=new Bi(2.5,32,32),Ke=new Mi({vertexShader:`
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          vNorm = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying vec3 vNorm; varying vec3 vPos;
        void main(){
          float rim = 1.0 - max(0.0, dot(normalize(-vPos), vNorm));
          gl_FragColor = vec4(0.15, 0.3, 0.7, pow(rim, 6.0) * 0.2);
        }`,transparent:!0,side:mn,depthWrite:!1});W.add(new tn(Fe,Ke));const vt=[];sn.forEach(N=>{const K=(90-N.latStart)*Math.PI/180,ae=(N.latStart-N.latEnd)*Math.PI/180,re=new Bi(2.02,64,8,0,Math.PI*2,K,ae),Pe=new jr({visible:!1,side:li}),Me=new tn(re,Pe);Me.userData.bandId=N.id,W.add(Me),vt.push(Me)});const ve={dragging:!1,lx:0,ly:0,sx:0,sy:0,ry:.4,rx:.15,vy:.0015,vx:0,auto:!0,lastT:0,selId:null,targetOverlayOpacity:0,targetRx:null,targetZoom:null,cloudRotation:0};e.current={renderer:y,camera:w,scene:E,globe:W,overlayMesh:Ue,overlayTex:se,overlayCanvas:ce,state:ve,hitMeshes:vt,makeHighlightBand:Ee,clearHighlightBand:de,hlGroup:q,cloudMesh:k};const Tt=new cE,G=new Ct,wt=y.domElement;function ct(N){const K=wt.getBoundingClientRect(),ae=N.touches?N.touches[0].clientX:N.clientX,re=N.touches?N.touches[0].clientY:N.clientY;return{x:ae-K.left,y:re-K.top,w:K.width,h:K.height}}function at(N){const K=ct(N);Object.assign(ve,{dragging:!0,lx:K.x,ly:K.y,sx:K.x,sy:K.y,vy:0,vx:0,auto:!1,lastT:Date.now(),targetRx:null,targetZoom:null})}function $e(N){const K=ct(N);if(ve.dragging){const ae=K.x-ve.lx,re=K.y-ve.ly;ve.ry+=ae*.005,ve.rx=Math.max(-1.55,Math.min(1.55,ve.rx+re*.004)),ve.vy=ae*.0025,ve.vx=re*.002,ve.lx=K.x,ve.ly=K.y}else{G.x=K.x/K.w*2-1,G.y=-(K.y/K.h)*2+1,Tt.setFromCamera(G,w);const ae=Tt.intersectObjects(vt);wt.style.cursor=ae.length?"pointer":"grab"}}function _t(N){if(!ve.dragging)return;ve.dragging=!1;const K=wt.getBoundingClientRect(),ae=N.changedTouches?N.changedTouches[0].clientX-K.left:N.clientX-K.left,re=N.changedTouches?N.changedTouches[0].clientY-K.top:N.clientY-K.top;if(Math.sqrt((ae-ve.sx)**2+(re-ve.sy)**2)<8){G.x=ae/K.width*2-1,G.y=-(re/K.height)*2+1,Tt.setFromCamera(G,w);const Pe=Tt.intersectObjects(vt);if(Pe.length){const Me=Pe[0].object.userData.bandId;ve.selId=Me,r(Me),Ee(sn[Me].latStart,sn[Me].latEnd);const Le=(sn[Me].latStart+sn[Me].latEnd)/2;ve.targetRx=Le*Math.PI/180,ve.targetZoom=4.2}else ve.selId=null,r(null),de(),ve.targetZoom=4.8}ve.lastT=Date.now()}wt.addEventListener("mousedown",at),wt.addEventListener("mousemove",$e),wt.addEventListener("mouseup",_t),wt.addEventListener("touchstart",at,{passive:!0}),wt.addEventListener("touchmove",N=>{if(!ve.dragging)return;const K=wt.getBoundingClientRect(),ae=N.touches[0].clientX-K.left,re=N.touches[0].clientY-K.top,Pe=ae-ve.lx,Me=re-ve.ly;ve.ry+=Pe*.005,ve.rx=Math.max(-1.55,Math.min(1.55,ve.rx+Me*.004)),ve.vy=Pe*.0025,ve.vx=Me*.002,ve.lx=ae,ve.ly=re},{passive:!0}),wt.addEventListener("touchend",_t),wt.addEventListener("wheel",N=>{N.preventDefault(),w.position.z=Math.max(3,Math.min(8,w.position.z+N.deltaY*.003))},{passive:!1});let je;function P(){je=requestAnimationFrame(P);const N=Date.now();!ve.dragging&&N-ve.lastT>3500&&(ve.auto=!0),ve.auto?(ve.ry+=.001,ve.vy*=.95,ve.vx*=.95):ve.dragging||(ve.ry+=ve.vy,ve.rx+=ve.vx,ve.rx=Math.max(-1.55,Math.min(1.55,ve.rx)),ve.vy*=.97,ve.vx*=.97),ve.targetRx!==null&&(ve.rx+=(ve.targetRx-ve.rx)*.04,Math.abs(ve.targetRx-ve.rx)<.002&&(ve.targetRx=null)),ve.targetZoom!==null&&(w.position.z+=(ve.targetZoom-w.position.z)*.04,Math.abs(ve.targetZoom-w.position.z)<.01&&(ve.targetZoom=null)),W.rotation.y=ve.ry,W.rotation.x=ve.rx,ve.cloudRotation+=3e-4,k.rotation.y=ve.cloudRotation;const K=ve.targetOverlayOpacity;ie.opacity+=(K-ie.opacity)*.08,q.children.forEach((ae,re)=>{ae.material&&(re===0?ae.material.opacity=.12+Math.sin(N*.003)*.06:ae.material.opacity=.5+Math.sin(N*.004)*.25)}),y.render(E,w)}P();function T(){const N=m.clientWidth,K=m.clientHeight;w.aspect=N/K,w.updateProjectionMatrix(),y.setSize(N,K)}return window.addEventListener("resize",T),()=>{cancelAnimationFrame(je),window.removeEventListener("resize",T),wt.removeEventListener("mousedown",at),wt.removeEventListener("mousemove",$e),wt.removeEventListener("mouseup",_t),de(),E.traverse(N=>{N.geometry&&N.geometry.dispose(),N.material&&(N.material.map&&N.material.map.dispose(),N.material.dispose())}),m.removeChild(wt),y.dispose()}},[]),xr.useEffect(()=>{const m=e.current;if(!m.overlayMesh)return;const _=m.overlayMesh.material.map,S=Nm(a);m.overlayMesh.material.map=new yl(S),m.overlayMesh.material.map.wrapS=qr,m.overlayMesh.material.needsUpdate=!0,m.state.targetOverlayOpacity=a?1:0,_&&_.dispose()},[a]);const d=xr.useCallback(m=>{r(m);const _=e.current;if(_.state&&(_.state.selId=m),m!==null&&_.makeHighlightBand){_.makeHighlightBand(sn[m].latStart,sn[m].latEnd);const S=(sn[m].latStart+sn[m].latEnd)/2;_.state.targetRx=S*Math.PI/180,_.state.targetZoom=4.2,_.state.auto=!1,_.state.lastT=Date.now()}else _.clearHighlightBand&&(_.clearHighlightBand(),_.state.targetZoom=4.8)},[]),p=a?ko.find(m=>m.key===a):null,g=c?dE(c.id):null,x=c?[{label:"Climate",text:c.climate,icon:"☁️"},{label:"Vegetation",text:c.vegetation,icon:"🌱"},{label:"Cultures & History",text:c.cultures,icon:"🏠"},{label:"Resources",text:c.resources,icon:"💎"},{label:"Industries",text:c.industries,icon:"🏭"},{label:"Water Systems",text:c.water,icon:"🌊"}]:[];return qe.jsxs("div",{style:{width:"100%",height:"100vh",background:"radial-gradient(ellipse at 40% 40%, #0a1228 0%, #040810 60%, #020408 100%)",position:"relative",overflow:"hidden",fontFamily:"'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",display:"flex",color:"white"},children:[qe.jsx("style",{children:mE}),qe.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"none",background:"radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)"}}),qe.jsxs("div",{style:{flex:1,position:"relative",minWidth:0,transition:"flex 0.4s ease"},children:[qe.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),qe.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"24px 28px",zIndex:10,pointerEvents:"none"},children:[qe.jsx("div",{style:{fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:6,fontWeight:500},children:"Interactive Atlas"}),qe.jsx("h1",{style:{fontSize:24,fontWeight:700,margin:0,letterSpacing:"-0.03em",background:"linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Earth's Latitude Bands"}),qe.jsx("div",{style:{fontSize:12,color:"rgba(255,255,255,0.25)",marginTop:6,letterSpacing:"0.02em"},children:"Drag to rotate · Tap a band · Scroll to zoom"})]}),qe.jsx("div",{style:{position:"absolute",top:106,left:28,zIndex:10,display:"flex",flexDirection:"column",gap:6,pointerEvents:"auto"},children:ko.map(m=>{const _=a===m.key;return qe.jsxs("button",{onClick:()=>u(_?null:m.key),style:{padding:"8px 16px",borderRadius:24,cursor:"pointer",fontSize:11,fontWeight:550,letterSpacing:"0.01em",border:_?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.08)",background:_?"rgba(255,255,255,0.12)":"rgba(10,14,24,0.6)",color:_?"#fff":"rgba(255,255,255,0.5)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",transition:"all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",textAlign:"left",boxShadow:_?"0 0 20px rgba(100,160,255,0.12)":"none"},children:[qe.jsx("span",{style:{marginRight:6},children:m.icon}),m.label]},m.key)})}),a&&p&&qe.jsxs("div",{style:{position:"absolute",bottom:28,left:28,zIndex:10,pointerEvents:"none",background:"rgba(10,14,24,0.7)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderRadius:16,padding:"14px 18px",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 8px 32px rgba(0,0,0,0.3)"},children:[qe.jsxs("div",{style:{fontSize:11,color:"rgba(255,255,255,0.5)",marginBottom:10,fontWeight:600,letterSpacing:"0.05em"},children:[p.icon," ",p.label]}),qe.jsx("div",{style:{width:140,height:8,borderRadius:4,background:`linear-gradient(to right, ${p.stops.map(m=>`rgb(${m.c.join(",")})`).join(", ")})`}}),qe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:9,color:"rgba(255,255,255,0.35)",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:[qe.jsxs("span",{children:[p.stops[0].v,p.unit==="°C"?"°":""]}),qe.jsxs("span",{children:[p.stops[p.stops.length-1].v,p.unit==="°C"?"°":""]})]})]}),qe.jsx("div",{style:{position:"absolute",right:c?400:20,top:"50%",transform:"translateY(-50%)",zIndex:10,display:"flex",flexDirection:"column",gap:2,pointerEvents:"auto",transition:"right 0.45s cubic-bezier(0.22, 1, 0.36, 1)"},children:sn.map(m=>{const _=n===m.id,S=a?ko.find(w=>w.key===a):null,E=S?`rgb(${zf(S,m[a]).join(",")})`:"rgba(255,255,255,0.18)";return qe.jsx("div",{onClick:()=>d(_?null:m.id),title:`${m.range} — ${m.name}`,style:{width:_?32:20,height:m.latStart-m.latEnd>15?18:10,borderRadius:4,cursor:"pointer",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",background:E,border:_?"2px solid rgba(255,255,255,0.85)":"1px solid rgba(255,255,255,0.06)",opacity:_?1:.6,boxShadow:_?"0 0 10px rgba(255,255,255,0.2)":"none"}},m.id)})})]}),qe.jsx("div",{style:{width:c?385:0,overflow:"hidden",transition:"width 0.45s cubic-bezier(0.22, 1, 0.36, 1)",background:"rgba(8,12,20,0.88)",backdropFilter:"blur(50px)",WebkitBackdropFilter:"blur(50px)",borderLeft:c?"1px solid rgba(255,255,255,0.05)":"none",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:c&&qe.jsxs("div",{className:"lat-scroll",style:{padding:0,overflowY:"auto",flex:1,minWidth:385},children:[qe.jsx("div",{style:{height:4,background:`linear-gradient(90deg, ${g[0]}, ${g[1]})`,borderRadius:"0 0 2px 2px"}}),qe.jsxs("div",{style:{padding:"18px 22px 28px"},children:[qe.jsx("button",{onClick:()=>d(null),style:{float:"right",background:"rgba(255,255,255,0.06)",border:"none",borderRadius:"50%",width:30,height:30,color:"rgba(255,255,255,0.45)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",marginTop:2},children:"\\u2715"}),qe.jsxs("div",{style:{marginBottom:22,animation:"latFadeUp 0.4s ease-out both"},children:[qe.jsx("span",{style:{fontSize:44,display:"block",marginBottom:4,filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"},children:c.icon}),qe.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.3)",fontFamily:"'SF Mono', 'Fira Code', monospace",marginTop:8,letterSpacing:"0.04em"},children:c.range}),qe.jsx("div",{style:{fontSize:24,fontWeight:700,letterSpacing:"-0.02em",marginTop:4,background:"linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:c.name}),qe.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.4)",marginTop:4,fontWeight:400},children:c.subtitle})]}),qe.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:ko.map((m,_)=>{const E=`rgb(${zf(m,c[m.key]).join(",")})`,w=fE[m.key],y=Math.max(0,Math.min(100,(c[m.key]-w.min)/(w.max-w.min)*100)),v=a===m.key;return qe.jsxs("div",{onClick:()=>u(v?null:m.key),style:{background:v?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.025)",borderRadius:12,padding:"10px 10px 8px",textAlign:"center",cursor:"pointer",border:v?"1px solid rgba(255,255,255,0.15)":"1px solid rgba(255,255,255,0.04)",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",animation:`latFadeUp 0.4s ease-out ${.1+_*.06}s both`},children:[qe.jsx("div",{style:{fontSize:13},children:m.icon}),qe.jsxs("div",{style:{fontSize:18,fontWeight:700,color:E,fontFamily:"'SF Mono', 'Fira Code', monospace",marginTop:4},children:[c[m.key],m.key==="temp"?"°":""]}),qe.jsx("div",{style:{width:"100%",height:3,borderRadius:2,background:"rgba(255,255,255,0.06)",marginTop:6,overflow:"hidden"},children:qe.jsx("div",{style:{width:`${y}%`,height:"100%",background:`linear-gradient(90deg, ${E}, ${E})`,borderRadius:2,transformOrigin:"left",animation:`latBarGrow 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${.3+_*.08}s both`}})}),qe.jsx("div",{style:{fontSize:8,color:"rgba(255,255,255,0.28)",textTransform:"uppercase",letterSpacing:"0.06em",marginTop:5,fontWeight:500},children:m.key==="temp"?"°C":m.unit})]},m.key)})}),qe.jsx("div",{style:{height:1,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",marginBottom:16}}),x.map((m,_)=>qe.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",borderRadius:12,padding:"12px 14px",marginBottom:8,border:"1px solid rgba(255,255,255,0.035)",animation:`latFadeUp 0.4s ease-out ${.35+_*.06}s both`,transition:"background 0.2s"},children:[qe.jsxs("div",{style:{fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,0.25)",marginBottom:6,fontWeight:600},children:[m.icon," ",m.label]}),qe.jsx("div",{style:{fontSize:12.5,color:"rgba(255,255,255,0.75)",lineHeight:1.6,fontWeight:400},children:m.text})]},m.label)),qe.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,170,40,0.06), rgba(255,90,40,0.03))",borderRadius:14,padding:"14px 16px",marginTop:4,marginBottom:14,border:"1px solid rgba(255,170,40,0.1)",animation:`latFadeUp 0.4s ease-out ${.35+x.length*.06}s both`},children:[qe.jsx("div",{style:{fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,190,80,0.55)",marginBottom:8,fontWeight:700},children:"\\u2728 Key Insight"}),qe.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.88)",lineHeight:1.7,fontStyle:"italic",fontWeight:400},children:c.keyFact})]}),qe.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",animation:`latFadeUp 0.4s ease-out ${.45+x.length*.06}s both`},children:c.places.map(m=>qe.jsxs("span",{style:{fontSize:10,padding:"4px 10px",background:"rgba(255,255,255,0.04)",borderRadius:20,color:"rgba(255,255,255,0.5)",border:"1px solid rgba(255,255,255,0.05)",fontWeight:500,letterSpacing:"0.01em"},children:["\\ud83d\\udccd ",m]},m))}),qe.jsxs("div",{style:{marginTop:22,animation:`latFadeUp 0.4s ease-out ${.55+x.length*.06}s both`},children:[qe.jsx("div",{style:{fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,0.2)",marginBottom:10,fontWeight:600},children:"Adjacent Bands"}),qe.jsxs("div",{style:{display:"flex",gap:8},children:[c.id>0&&qe.jsxs("button",{onClick:()=>d(c.id-1),style:{flex:1,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:10,padding:"10px 12px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",color:"inherit"},children:[qe.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.25)",marginBottom:2},children:"\\u2191 North"}),qe.jsxs("div",{style:{fontSize:11,color:"rgba(255,255,255,0.6)",fontWeight:600},children:[sn[c.id-1].icon," ",sn[c.id-1].name]})]}),c.id<sn.length-1&&qe.jsxs("button",{onClick:()=>d(c.id+1),style:{flex:1,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:10,padding:"10px 12px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",color:"inherit"},children:[qe.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.25)",marginBottom:2},children:"\\u2193 South"}),qe.jsxs("div",{style:{fontSize:11,color:"rgba(255,255,255,0.6)",fontWeight:600},children:[sn[c.id+1].icon," ",sn[c.id+1].name]})]})]})]}),qe.jsx("div",{style:{height:20}})]})]},c.id)})]})}rv.createRoot(document.getElementById("root")).render(qe.jsx(Z0.StrictMode,{children:qe.jsx(gE,{})}));
