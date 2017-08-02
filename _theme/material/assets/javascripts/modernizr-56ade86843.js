!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,f;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],f=s.split("."),1===f.length?_[f[0]]=o:(!_[f[0]]||_[f[0]]instanceof Boolean||(_[f[0]]=new Boolean(_[f[0]])),_[f[0]][f[1]]=o),x.push((o?"":"no-")+f.join("-"))}}function i(e){var n=b.className,t=_._config.classPrefix||"";if(P&&(n=n.baseVal),_._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}_._config.enableClasses&&(n+=" "+t+e.join(" "+t),P?b.className.baseVal=n:b.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)S(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=_[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return _;n="function"==typeof n?n():n,1==r.length?_[r[0]]=n:(!_[r[0]]||_[r[0]]instanceof Boolean||(_[r[0]]=new Boolean(_[r[0]])),_[r[0]][r[1]]=n),i([(n&&0!=n?"":"no-")+r.join("-")]),_._trigger(e,n)}return _}function f(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):P?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(P?"svg":"body"),e.fake=!0),e}function u(e,t,r,o){var i,s,f,u,p="modernizr",d=a("div"),c=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:p+(r+1),d.appendChild(f);return i=a("style"),i.type="text/css",i.id="s"+p,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=u,b.offsetHeight):d.parentNode.removeChild(d),!!s}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function h(e,n,o,i){function s(){u&&(delete E.style,delete E.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var l=d(e,o);if(!r(l,"undefined"))return l}for(var u,p,h,m,v,y=["modernizr","tspan"];!E.style;)u=!0,E.modElem=a(y.shift()),E.style=E.modElem.style;for(h=e.length,p=0;p<h;p++)if(m=e[p],v=E.style[m],f(m,"-")&&(m=c(m)),E.style[m]!==t){if(i||r(o,"undefined"))return s(),"pfx"!=n||m;try{E.style[m]=o}catch(e){}if(E.style[m]!=v)return s(),"pfx"!=n||m}return s(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?m(o,t||n):o);return!1}function y(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),f=(e+" "+z.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?h(f,n,o,i):(f=(e+" "+k.join(s+" ")+s).split(" "),v(f,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var w=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},_=function(){};_.prototype=C,_=new _;var S,x=[],b=n.documentElement,P="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),_.hasOwnProperty(e)&&setTimeout(function(){_._trigger(e,_[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},_._q.push(function(){C.addTest=s});var T="Moz O ms Webkit",z=C._config.usePrefixes?T.split(" "):[];C._cssomPrefixes=z;var j={elem:a("modernizr")};_._q.push(function(){delete j.elem});var E={style:j.elem.style};_._q.unshift(function(){delete E.style});var k=C._config.usePrefixes?T.toLowerCase().split(" "):[];C._domPrefixes=k,C.testAllProps=y,C.testAllProps=g;var N=C.testStyles=u,q="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;_.addTest("supports",q||A),_.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=_._config.usePrefixes;if(e&&(!n||"webkitPerspective"in b.style)){var t,r="#modernizr{width:0;height:0}";_.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),o(),i(x),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<_._q.length;L++)_._q[L]();e.Modernizr=_}(window,document);