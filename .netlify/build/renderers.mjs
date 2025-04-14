import { options, h as h$1, Fragment, Component } from 'preact';

var n=/[\s\n\\/='"\0<>]/,o=/^(xlink|xmlns|xml)([A-Z])/,i=/^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,a=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c=new Set(["draggable","spellcheck"]),s=/["&<]/;function l(e){if(0===e.length||false===s.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1;}return r!==t&&(n+=e.slice(t,r)),n}var u={},f=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),p=/[A-Z]/g;function h(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:u[r]||(u[r]=r.replace(p,"-$&").toLowerCase()),i=";";"number"!=typeof n||o.startsWith("--")||f.has(o)||(i="px;"),t=t+o+":"+n+i;}}return t||void 0}function d(){this.__d=true;}function v(e,t){return {__v:e,context:t,props:e.props,setState:d,forceUpdate:d,__d:true,__h:new Array(0)}}function _(e,t,r){if(!e.s){if(r instanceof m){if(!r.s)return void(r.o=_.bind(null,e,t));1&t&&(t=r.s),r=r.v;}if(r&&r.then)return void r.then(_.bind(null,e,t),_.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e);}}var m=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{_(n,1,i(this.v));}catch(e){_(n,2,e);}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?_(n,1,t?t(o):o):r?_(n,1,r(o)):_(n,2,o);}catch(e){_(n,2,e);}},n},e}();function y(e){return e instanceof m&&1&e.s}function g(e,t,r){for(var n;;){var o=e();if(y(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!y(i)){n=1;break}i=i.s;}var a; }var c=new m,s=_.bind(null,c,2);return (0===n?o.then(u):1===n?i.then(l):a.then(f)).then(void 0,s),c;function l(n){i=n;do{if(!(o=e())||y(o)&&!o.v)return void _(c,1,i);if(o.then)return void o.then(u).then(void 0,s);y(i=r())&&(i=i.v);}while(!i||!i.then);i.then(l).then(void 0,s);}function u(e){e?(i=r())&&i.then?i.then(l).then(void 0,s):l(i):_(c,1,i);}function f(){(o=e())?o.then?o.then(u).then(void 0,s):u(o):_(c,1,i);}}function b(e,t){try{var r=e();}catch(e){return t(true,e)}return r&&r.then?r.then(t.bind(null,false),t.bind(null,true)):t(false,r)}var k,w,x,C,A=function(n,o){try{var i=options.__s;options.__s=!0,k=options.__b,w=options.diffed,x=options.__r,C=options.unmount;var a=h$1(Fragment,null);return a.__k=[n],Promise.resolve(b(function(){return Promise.resolve(U(n,o||S,!1,void 0,a,!0,void 0)).then(function(e){var t,r=function(){if(E(e)){var r=function(){var e=o.join(j);return t=1,e},n=0,o=e,i=g(function(){return !!o.some(function(e){return e&&"function"==typeof e.then})&&n++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(e){o=e.flat();})});return i&&i.then?i.then(r):r()}}();return r&&r.then?r.then(function(r){return t?r:e}):t?r:e})},function(t,r){if(options.__c&&options.__c(n,L),options.__s=i,L.length=0,t)throw r;return r}))}catch(e){return Promise.reject(e)}},S={},L=[],E=Array.isArray,T=Object.assign,j="";function P(e,t){var r,n=e.type,o=true;return e.__c?(o=false,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=true,null==r.state&&(r.state=S),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=T({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),x&&x(e),r.render(r.props,r.state,t)}function U(t,s,u,f,p,d,_){if(null==t||true===t||false===t||t===j)return j;var m=typeof t;if("object"!=m)return "function"==m?j:"string"==m?l(t):t+j;if(E(t)){var y,g=j;p.__k=t;for(var b=t.length,A=0;A<b;A++){var L=t[A];if(null!=L&&"boolean"!=typeof L){var D,F=U(L,s,u,f,p,d,_);"string"==typeof F?g+=F:(y||(y=new Array(b)),g&&y.push(g),g=j,E(F)?(D=y).push.apply(D,F):y.push(F));}}return y?(g&&y.push(g),y):g}if(void 0!==t.constructor)return j;t.__=p,k&&k(t);var M=t.type,W=t.props;if("function"==typeof M){var $,z,H,N=s;if(M===Fragment){if("tpl"in W){for(var q=j,B=0;B<W.tpl.length;B++)if(q+=W.tpl[B],W.exprs&&B<W.exprs.length){var I=W.exprs[B];if(null==I)continue;"object"!=typeof I||void 0!==I.constructor&&!E(I)?q+=I:q+=U(I,s,u,f,t,d,_);}return q}if("UNSTABLE_comment"in W)return "\x3c!--"+l(W.UNSTABLE_comment)+"--\x3e";z=W.children;}else {if(null!=($=M.contextType)){var O=s[$.__c];N=O?O.props.value:$.__;}var R=M.prototype&&"function"==typeof M.prototype.render;if(R)z=P(t,N),H=t.__c;else {t.__c=H=v(t,N);for(var V=0;H.__d&&V++<25;)H.__d=false,x&&x(t),z=M.call(H,W,N);H.__d=true;}if(null!=H.getChildContext&&(s=T({},s,H.getChildContext())),R&&options.errorBoundaries&&(M.getDerivedStateFromError||H.componentDidCatch)){z=null!=z&&z.type===Fragment&&null==z.key&&null==z.props.tpl?z.props.children:z;try{return U(z,s,u,f,t,d,_)}catch(e){return M.getDerivedStateFromError&&(H.__s=M.getDerivedStateFromError(e)),H.componentDidCatch&&H.componentDidCatch(e,S),H.__d?(z=P(t,s),null!=(H=t.__c).getChildContext&&(s=T({},s,H.getChildContext())),U(z=null!=z&&z.type===Fragment&&null==z.key&&null==z.props.tpl?z.props.children:z,s,u,f,t,d,_)):j}finally{w&&w(t),C&&C(t);}}}z=null!=z&&z.type===Fragment&&null==z.key&&null==z.props.tpl?z.props.children:z;try{var K=U(z,s,u,f,t,d,_);return w&&w(t),options.unmount&&options.unmount(t),K}catch(r){if(!r||"function"!=typeof r.then)throw r;return r.then(function e(){try{return U(z,s,u,f,t,d,_)}catch(r){if(!r||"function"!=typeof r.then)throw r;return r.then(function(){return U(z,s,u,f,t,d,_)},e)}})}}var Q,X="<"+M,Y=j;for(var ee in W){var te=W[ee];if("function"!=typeof te||"class"===ee||"className"===ee){switch(ee){case "children":Q=te;continue;case "key":case "ref":case "__self":case "__source":continue;case "htmlFor":if("for"in W)continue;ee="for";break;case "className":if("class"in W)continue;ee="class";break;case "defaultChecked":ee="checked";break;case "defaultSelected":ee="selected";break;case "defaultValue":case "value":switch(ee="value",M){case "textarea":Q=te;continue;case "select":f=te;continue;case "option":f!=te||"selected"in W||(X+=" selected");}break;case "dangerouslySetInnerHTML":Y=te&&te.__html;continue;case "style":"object"==typeof te&&(te=h(te));break;case "acceptCharset":ee="accept-charset";break;case "httpEquiv":ee="http-equiv";break;default:if(o.test(ee))ee=ee.replace(o,"$1:$2").toLowerCase();else {if(n.test(ee))continue;"-"!==ee[4]&&!c.has(ee)||null==te?u?a.test(ee)&&(ee="panose1"===ee?"panose-1":ee.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(ee)&&(ee=ee.toLowerCase()):te+=j;}}null!=te&&false!==te&&(X=true===te||te===j?X+" "+ee:X+" "+ee+'="'+("string"==typeof te?l(te):te+j)+'"');}}if(n.test(M))throw new Error(M+" is not a valid HTML tag name in "+X+">");if(Y||("string"==typeof Q?Y=l(Q):null!=Q&&false!==Q&&true!==Q&&(Y=U(Q,s,"svg"===M||"foreignObject"!==M&&u,f,t,d,_))),w&&w(t),C&&C(t),!Y&&Z.has(M))return X+"/>";var re="</"+M+">",ne=X+">";return E(Y)?[ne].concat(Y,[re]):"string"!=typeof Y?[ne,Y,re]:ne+Y+re}var Z=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    const isPropArray = Array.isArray(value);
    const isPropObject = !isSignal(value) && typeof props[key] === "object" && props[key] !== null && !isPropArray;
    if (isPropObject || isPropArray) {
      const values = isPropObject ? Object.keys(props[key]) : value;
      values.forEach((valueKey, valueIndex) => {
        const signal = isPropObject ? props[key][valueKey] : valueKey;
        if (isSignal(signal)) {
          const keyOrIndex = isPropObject ? valueKey.toString() : valueIndex;
          props[key] = isPropObject ? Object.assign({}, props[key], { [keyOrIndex]: signal.peek() }) : props[key].map(
            (v, i) => i === valueIndex ? [signal.peek(), i] : v
          );
          const currentMap = map.get(key) || [];
          map.set(key, [...currentMap, [signal, keyOrIndex]]);
          const currentSignals = signals[key] || [];
          signals[key] = [...currentSignals, [getSignalId(ctx, signal), keyOrIndex]];
        }
      });
    } else if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      signals[key] = getSignalId(ctx, value);
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}
function getSignalId(ctx, item) {
  let id = ctx.signals.get(item);
  if (!id) {
    id = incrementId(ctx);
    ctx.signals.set(item, id);
  }
  return id;
}

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h$1(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
async function check(Component$1, props, children) {
  if (typeof Component$1 !== "function") return false;
  if (Component$1.name === "QwikComponent") return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    const { html } = await renderToStaticMarkup.call(this, Component$1, props, children, void 0);
    if (typeof html !== "string") {
      return false;
    }
    return html == "" ? false : !html.includes("<undefined>");
  } catch {
    return false;
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const vNode = h$1(
    Component,
    newProps,
    children != null ? h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value: children
    }) : children
  );
  const html = await A(vNode);
  return { attrs, html };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError) return;
  }
  originalConsoleError(msg, ...rest);
}
const renderer = {
  name: "@astrojs/preact",
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),];

export { renderers };
