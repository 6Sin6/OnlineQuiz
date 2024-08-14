var gu=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Rv=gu((Pv,Un)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var kn,P,ka,yt,zr,Na,cs,Fs,us,hs,Ra,pn={},Aa=[],vu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Si=Array.isArray;function $e(n,e){for(var t in e)n[t]=e[t];return n}function Pa(n){var e=n.parentNode;e&&e.removeChild(n)}function Zn(n,e,t){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?kn.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)o[r]===void 0&&(o[r]=n.defaultProps[r]);return ln(n,o,i,s,null)}function ln(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++ka,__i:-1,__u:0};return s==null&&P.vnode!=null&&P.vnode(r),r}function ct(n){return n.children}function xe(n,e){this.props=n,this.context=e}function Tt(n,e){if(e==null)return n.__?Tt(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Tt(n):null}function Oa(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Oa(n)}}function ds(n){(!n.__d&&(n.__d=!0)&&yt.push(n)&&!ei.__r++||zr!==P.debounceRendering)&&((zr=P.debounceRendering)||Na)(ei)}function ei(){var n,e,t,i,s,r,o,a;for(yt.sort(cs);n=yt.shift();)n.__d&&(e=yt.length,i=void 0,r=(s=(t=n).__v).__e,o=[],a=[],t.__P&&((i=$e({},s)).__v=s.__v+1,P.vnode&&P.vnode(i),Us(t.__P,i,s,t.__n,t.__P.namespaceURI,32&s.__u?[r]:null,o,r??Tt(s),!!(32&s.__u),a),i.__v=s.__v,i.__.__k[i.__i]=i,Ma(o,i,a),i.__e!=r&&Oa(i)),yt.length>e&&yt.sort(cs));ei.__r=0}function xa(n,e,t,i,s,r,o,a,l,c,h){var u,d,_,g,w,y=i&&i.__k||Aa,b=e.length;for(t.__d=l,yu(t,e,y),l=t.__d,u=0;u<b;u++)(_=t.__k[u])!=null&&typeof _!="boolean"&&typeof _!="function"&&(d=_.__i===-1?pn:y[_.__i]||pn,_.__i=u,Us(n,_,d,s,r,o,a,l,c,h),g=_.__e,_.ref&&d.ref!=_.ref&&(d.ref&&Ws(d.ref,null,_),h.push(_.ref,_.__c||g,_)),w==null&&g!=null&&(w=g),65536&_.__u||d.__k===_.__k?l=Da(_,l,n):typeof _.type=="function"&&_.__d!==void 0?l=_.__d:g&&(l=g.nextSibling),_.__d=void 0,_.__u&=-196609);t.__d=l,t.__e=w}function yu(n,e,t){var i,s,r,o,a,l=e.length,c=t.length,h=c,u=0;for(n.__k=[],i=0;i<l;i++)o=i+u,(s=n.__k[i]=(s=e[i])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?ln(null,s,null,null,null):Si(s)?ln(ct,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?ln(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null?(s.__=n,s.__b=n.__b+1,a=bu(s,t,o,h),s.__i=a,r=null,a!==-1&&(h--,(r=t[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&u--,typeof s.type!="function"&&(s.__u|=65536)):a!==o&&(a==o-1?u=a-o:a==o+1?u++:a>o?h>l-o?u+=a-o:u--:a<o&&u++,a!==i+u&&(s.__u|=65536))):(r=t[o])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==n.__d&&(n.__d=Tt(r)),fs(r,r,!1),t[o]=null,h--);if(h)for(i=0;i<c;i++)(r=t[i])!=null&&!(131072&r.__u)&&(r.__e==n.__d&&(n.__d=Tt(r)),fs(r,r))}function Da(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Da(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=Tt(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ht(n,e){return e=e||[],n==null||typeof n=="boolean"||(Si(n)?n.some(function(t){Ht(t,e)}):e.push(n)),e}function bu(n,e,t,i){var s=n.key,r=n.type,o=t-1,a=t+1,l=e[t];if(l===null||l&&s==l.key&&r===l.type&&!(131072&l.__u))return t;if(i>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&!(131072&l.__u)&&s==l.key&&r===l.type)return o;o--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&s==l.key&&r===l.type)return a;a++}}return-1}function jr(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||vu.test(e)?t:t+"px"}function Bn(n,e,t,i,s){var r;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||jr(n.style,e,"");if(t)for(e in t)i&&t[e]===i[e]||jr(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t.u=i.u:(t.u=Fs,n.addEventListener(e,r?hs:us,r)):n.removeEventListener(e,r?hs:us,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Gr(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Fs++;else if(e.t<t.u)return;return t(P.event?P.event(e):e)}}}function Us(n,e,t,i,s,r,o,a,l,c){var h,u,d,_,g,w,y,b,I,R,N,B,K,fe,_e,Ie,oe=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[a=e.__e=t.__e]),(h=P.__b)&&h(e);e:if(typeof oe=="function")try{if(b=e.props,I="prototype"in oe&&oe.prototype.render,R=(h=oe.contextType)&&i[h.__c],N=h?R?R.props.value:h.__:i,t.__c?y=(u=e.__c=t.__c).__=u.__E:(I?e.__c=u=new oe(b,N):(e.__c=u=new xe(b,N),u.constructor=oe,u.render=Iu),R&&R.sub(u),u.props=b,u.state||(u.state={}),u.context=N,u.__n=i,d=u.__d=!0,u.__h=[],u._sb=[]),I&&u.__s==null&&(u.__s=u.state),I&&oe.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=$e({},u.__s)),$e(u.__s,oe.getDerivedStateFromProps(b,u.__s))),_=u.props,g=u.state,u.__v=e,d)I&&oe.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),I&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(I&&oe.getDerivedStateFromProps==null&&b!==_&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(b,N),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(b,u.__s,N)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(u.props=b,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(j){j&&(j.__=e)}),B=0;B<u._sb.length;B++)u.__h.push(u._sb[B]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(b,u.__s,N),I&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(_,g,w)})}if(u.context=N,u.props=b,u.__P=n,u.__e=!1,K=P.__r,fe=0,I){for(u.state=u.__s,u.__d=!1,K&&K(e),h=u.render(u.props,u.state,u.context),_e=0;_e<u._sb.length;_e++)u.__h.push(u._sb[_e]);u._sb=[]}else do u.__d=!1,K&&K(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++fe<25);u.state=u.__s,u.getChildContext!=null&&(i=$e($e({},i),u.getChildContext())),I&&!d&&u.getSnapshotBeforeUpdate!=null&&(w=u.getSnapshotBeforeUpdate(_,g)),xa(n,Si(Ie=h!=null&&h.type===ct&&h.key==null?h.props.children:h)?Ie:[Ie],e,t,i,s,r,o,a,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&o.push(u),y&&(u.__E=u.__=null)}catch(j){if(e.__v=null,l||r!=null){for(e.__u|=l?160:32;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;r[r.indexOf(a)]=null,e.__e=a}else e.__e=t.__e,e.__k=t.__k;P.__e(j,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=wu(t.__e,e,t,i,s,r,o,l,c);(h=P.diffed)&&h(e)}function Ma(n,e,t){e.__d=void 0;for(var i=0;i<t.length;i++)Ws(t[i],t[++i],t[++i]);P.__c&&P.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){P.__e(r,s.__v)}})}function wu(n,e,t,i,s,r,o,a,l){var c,h,u,d,_,g,w,y=t.props,b=e.props,I=e.type;if(I==="svg"?s="http://www.w3.org/2000/svg":I==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((_=r[c])&&"setAttribute"in _==!!I&&(I?_.localName===I:_.nodeType===3)){n=_,r[c]=null;break}}if(n==null){if(I===null)return document.createTextNode(b);n=document.createElementNS(s,I,b.is&&b),r=null,a=!1}if(I===null)y===b||a&&n.data===b||(n.data=b);else{if(r=r&&kn.call(n.childNodes),y=t.props||pn,!a&&r!=null)for(y={},c=0;c<n.attributes.length;c++)y[(_=n.attributes[c]).name]=_.value;for(c in y)if(_=y[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=_;else if(c!=="key"&&!(c in b)){if(c=="value"&&"defaultValue"in b||c=="checked"&&"defaultChecked"in b)continue;Bn(n,c,null,_,s)}}for(c in b)_=b[c],c=="children"?d=_:c=="dangerouslySetInnerHTML"?h=_:c=="value"?g=_:c=="checked"?w=_:c==="key"||a&&typeof _!="function"||y[c]===_||Bn(n,c,_,y[c],s);if(h)a||u&&(h.__html===u.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(u&&(n.innerHTML=""),xa(n,Si(d)?d:[d],e,t,i,I==="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&Tt(t,0),a,l),r!=null)for(c=r.length;c--;)r[c]!=null&&Pa(r[c]);a||(c="value",g!==void 0&&(g!==n[c]||I==="progress"&&!g||I==="option"&&g!==y[c])&&Bn(n,c,g,y[c],s),c="checked",w!==void 0&&w!==n[c]&&Bn(n,c,w,y[c],s))}return n}function Ws(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){P.__e(s,t)}}function fs(n,e,t){var i,s;if(P.unmount&&P.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||Ws(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){P.__e(r,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&fs(i[s],e,t||typeof n.type!="function");t||n.__e==null||Pa(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function Iu(n,e,t){return this.constructor(n,t)}function Eu(n,e,t){var i,s,r,o;P.__&&P.__(n,e),s=(i=typeof t=="function")?null:e.__k,r=[],o=[],Us(e,n=(!i&&t||e).__k=Zn(ct,null,[n]),s||pn,pn,e.namespaceURI,!i&&t?[t]:s?null:e.firstChild?kn.call(e.childNodes):null,r,!i&&t?t:s?s.__e:e.firstChild,i,o),Ma(r,n,o)}function Cu(n,e,t){var i,s,r,o,a=$e({},n.props);for(r in n.type&&n.type.defaultProps&&(o=n.type.defaultProps),e)r=="key"?i=e[r]:r=="ref"?s=e[r]:a[r]=e[r]===void 0&&o!==void 0?o[r]:e[r];return arguments.length>2&&(a.children=arguments.length>3?kn.call(arguments,2):t),ln(n.type,a,i||n.key,s||n.ref,null)}function La(n,e){var t={__c:e="__cC"+Ra++,__:n,Consumer:function(i,s){return i.children(s)},Provider:function(i){var s,r;return this.getChildContext||(s=[],(r={})[e]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){s=null},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&s.some(function(a){a.__e=!0,ds(a)})},this.sub=function(o){s.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){s&&s.splice(s.indexOf(o),1),a&&a.call(o)}}),i.children}};return t.Provider.__=t.Consumer.contextType=t}kn=Aa.slice,P={__e:function(n,e,t,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},ka=0,xe.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$e({},this.state),typeof n=="function"&&(n=n($e({},t),this.props)),n&&$e(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ds(this))},xe.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ds(this))},xe.prototype.render=ct,yt=[],Na=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,cs=function(n,e){return n.__v.__b-e.__v.__b},ei.__r=0,Fs=0,us=Gr(!1),hs=Gr(!0),Ra=0;var Tu=0;function m(n,e,t,i,s,r){e||(e={});var o,a,l=e;if("ref"in l)for(a in l={},e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Tu,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return P.vnode&&P.vnode(c),c}var zt,Y,Gi,qr,ti=0,Fa=[],ee=P,Kr=ee.__b,Qr=ee.__r,Yr=ee.diffed,Jr=ee.__c,Xr=ee.unmount,Zr=ee.__;function ki(n,e){ee.__h&&ee.__h(Y,n,ti||e),ti=0;var t=Y.__H||(Y.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Q(n){return ti=1,Su(Wa,n)}function Su(n,e,t){var i=ki(zt++,2);if(i.t=n,!i.__c&&(i.__=[t?t(e):Wa(void 0,e),function(a){var l=i.__N?i.__N[0]:i.__[0],c=i.t(l,a);l!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=Y,!Y.u)){var s=function(a,l,c){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(d){return!!d.__c});if(h.every(function(d){return!d.__N}))return!r||r.call(this,a,l,c);var u=!1;return h.forEach(function(d){if(d.__N){var _=d.__[0];d.__=d.__N,d.__N=void 0,_!==d.__[0]&&(u=!0)}}),!(!u&&i.__c.props===a)&&(!r||r.call(this,a,l,c))};Y.u=!0;var r=Y.shouldComponentUpdate,o=Y.componentWillUpdate;Y.componentWillUpdate=function(a,l,c){if(this.__e){var h=r;r=void 0,s(a,l,c),r=h}o&&o.call(this,a,l,c)},Y.shouldComponentUpdate=s}return i.__N||i.__}function de(n,e){var t=ki(zt++,3);!ee.__s&&Ua(t.__H,e)&&(t.__=n,t.i=e,Y.__H.__h.push(t))}function ku(n){return ti=5,Nu(function(){return{current:n}},[])}function Nu(n,e){var t=ki(zt++,7);return Ua(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Ru(n){var e=Y.context[n.__c],t=ki(zt++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(Y)),e.props.value):n.__}function Au(){for(var n;n=Fa.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(qn),n.__H.__h.forEach(_s),n.__H.__h=[]}catch(e){n.__H.__h=[],ee.__e(e,n.__v)}}ee.__b=function(n){Y=null,Kr&&Kr(n)},ee.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Zr&&Zr(n,e)},ee.__r=function(n){Qr&&Qr(n),zt=0;var e=(Y=n.__c).__H;e&&(Gi===Y?(e.__h=[],Y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(qn),e.__h.forEach(_s),e.__h=[],zt=0)),Gi=Y},ee.diffed=function(n){Yr&&Yr(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Fa.push(e)!==1&&qr===ee.requestAnimationFrame||((qr=ee.requestAnimationFrame)||Pu)(Au)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Gi=Y=null},ee.__c=function(n,e){e.some(function(t){try{t.__h.forEach(qn),t.__h=t.__h.filter(function(i){return!i.__||_s(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],ee.__e(i,t.__v)}}),Jr&&Jr(n,e)},ee.unmount=function(n){Xr&&Xr(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{qn(i)}catch(s){e=s}}),t.__H=void 0,e&&ee.__e(e,t.__v))};var eo=typeof requestAnimationFrame=="function";function Pu(n){var e,t=function(){clearTimeout(i),eo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,100);eo&&(e=requestAnimationFrame(t))}function qn(n){var e=Y,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Y=e}function _s(n){var e=Y;n.__c=n.__(),Y=e}function Ua(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Wa(n,e){return typeof e=="function"?e(n):e}var Ou={};function $n(n,e){for(var t in e)n[t]=e[t];return n}function xu(n,e,t){var i,s=/(?:\?([^#]*))?(#.*)?$/,r=n.match(s),o={};if(r&&r[1])for(var a=r[1].split("&"),l=0;l<a.length;l++){var c=a[l].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}n=ps(n.replace(s,"")),e=ps(e||"");for(var h=Math.max(n.length,e.length),u=0;u<h;u++)if(e[u]&&e[u].charAt(0)===":"){var d=e[u].replace(/(^:|[+*?]+$)/g,""),_=(e[u].match(/[+*?]+$/)||Ou)[0]||"",g=~_.indexOf("+"),w=~_.indexOf("*"),y=n[u]||"";if(!y&&!w&&(_.indexOf("?")<0||g)){i=!1;break}if(o[d]=decodeURIComponent(y),g||w){o[d]=n.slice(u).map(decodeURIComponent).join("/");break}}else if(e[u]!==n[u]){i=!1;break}return(t.default===!0||i!==!1)&&o}function Du(n,e){return n.rank<e.rank?1:n.rank>e.rank?-1:n.index-e.index}function Mu(n,e){return n.index=e,n.rank=function(t){return t.props.default?0:ps(t.props.path).map(Lu).join("")}(n),n.props}function ps(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function Lu(n){return n.charAt(0)==":"?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var Fu={},Et=[],to=[],be=null,Ba={url:Bs()},Uu=La(Ba);function Bs(){var n;return""+((n=be&&be.location?be.location:be&&be.getCurrentLocation?be.getCurrentLocation():typeof location<"u"?location:Fu).pathname||"")+(n.search||"")}function te(n,e){return e===void 0&&(e=!1),typeof n!="string"&&n.url&&(e=n.replace,n=n.url),function(t){for(var i=Et.length;i--;)if(Et[i].canRoute(t))return!0;return!1}(n)&&function(t,i){i===void 0&&(i="push"),be&&be[i]?be[i](t):typeof history<"u"&&history[i+"State"]&&history[i+"State"](null,null,t)}(n,e?"replace":"push"),$a(n)}function $a(n){for(var e=!1,t=0;t<Et.length;t++)Et[t].routeTo(n)&&(e=!0);return e}function Wu(n){if(n&&n.getAttribute){var e=n.getAttribute("href"),t=n.getAttribute("target");if(e&&e.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return te(e)}}function Bu(n){return n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault(),!1}function $u(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.button)){var e=n.target;do if(e.localName==="a"&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(Wu(e))return Bu(n)}while(e=e.parentNode)}}var no=!1;function Va(n){n.history&&(be=n.history),this.state={url:n.url||Bs()}}$n(Va.prototype=new xe,{shouldComponentUpdate:function(n){return n.static!==!0||n.url!==this.props.url||n.onChange!==this.props.onChange},canRoute:function(n){var e=Ht(this.props.children);return this.g(e,n)!==void 0},routeTo:function(n){this.setState({url:n});var e=this.canRoute(n);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var n=this;no||(no=!0,be||addEventListener("popstate",function(){$a(Bs())}),addEventListener("click",$u)),Et.push(this),be&&(this.u=be.listen(function(e){var t=e.location||e;n.routeTo(""+(t.pathname||"")+(t.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),Et.splice(Et.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(n,e){n=n.filter(Mu).sort(Du);for(var t=0;t<n.length;t++){var i=n[t],s=xu(e,i.props.path,i.props);if(s)return[i,s]}},render:function(n,e){var t,i,s=n.onChange,r=e.url,o=this.c,a=this.g(Ht(n.children),r);if(a&&(i=Cu(a[0],$n($n({url:r,matches:t=a[1]},t),{key:void 0,ref:void 0}))),r!==(o&&o.url)){$n(Ba,o=this.c={url:r,previous:o&&o.url,current:i,path:i?i.props.path:null,matches:t}),o.router=this,o.active=i?[i]:[];for(var l=to.length;l--;)to[l]({});typeof s=="function"&&s(o)}return Zn(Uu.Provider,{value:o},i)}});function Vu(n,e){for(var t in e)n[t]=e[t];return n}function io(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var i in e)if(i!=="__source"&&n[i]!==e[i])return!0;return!1}function so(n,e){this.props=n,this.context=e}(so.prototype=new xe).isPureReactComponent=!0,so.prototype.shouldComponentUpdate=function(n,e){return io(this.props,n)||io(this.state,e)};var ro=P.__b;P.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),ro&&ro(n)};var Hu=P.__e;P.__e=function(n,e,t,i){if(n.then){for(var s,r=e;r=r.__;)if((s=r.__c)&&s.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),s.__c(n,e)}Hu(n,e,t,i)};var oo=P.unmount;function Ha(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),n.__c.__H=null),(n=Vu({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(i){return Ha(i,e,t)})),n}function za(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(i){return za(i,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function qi(){this.__u=0,this.t=null,this.__b=null}function ja(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Vn(){this.u=null,this.o=null}P.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),oo&&oo(n)},(qi.prototype=new xe).__c=function(n,e){var t=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(t);var s=ja(i.__v),r=!1,o=function(){r||(r=!0,t.__R=null,s?s(a):a())};t.__R=o;var a=function(){if(!--i.__u){if(i.state.__a){var l=i.state.__a;i.__v.__k[0]=za(l,l.__c.__P,l.__c.__O)}var c;for(i.setState({__a:i.__b=null});c=i.t.pop();)c.forceUpdate()}};i.__u++||32&e.__u||i.setState({__a:i.__b=i.__v.__k[0]}),n.then(o,o)},qi.prototype.componentWillUnmount=function(){this.t=[]},qi.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Ha(this.__b,t,i.__O=i.__P)}this.__b=null}var s=e.__a&&Zn(ct,null,n.fallback);return s&&(s.__u&=-33),[Zn(ct,null,e.__a?null:n.children),s]};var ao=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(Vn.prototype=new xe).__a=function(n){var e=this,t=ja(e.__v),i=e.o.get(n);return i[0]++,function(s){var r=function(){e.props.revealOrder?(i.push(s),ao(e,n,i)):s()};t?t(r):r()}},Vn.prototype.render=function(n){this.u=null,this.o=new Map;var e=Ht(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Vn.prototype.componentDidUpdate=Vn.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){ao(n,t,e)})};var zu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ju=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Gu=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,qu=/[A-Z0-9]/g,Ku=typeof document<"u",Qu=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};xe.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(xe.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var lo=P.event;function Yu(){}function Ju(){return this.cancelBubble}function Xu(){return this.defaultPrevented}P.event=function(n){return lo&&(n=lo(n)),n.persist=Yu,n.isPropagationStopped=Ju,n.isDefaultPrevented=Xu,n.nativeEvent=n};var Zu={enumerable:!1,configurable:!0,get:function(){return this.class}},co=P.vnode;P.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,i=e.type,s={};for(var r in t){var o=t[r];if(!(r==="value"&&"defaultValue"in t&&o==null||Ku&&r==="children"&&i==="noscript"||r==="class"||r==="className")){var a=r.toLowerCase();r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&o===!0?o="":a==="translate"&&o==="no"?o=!1:a==="ondoubleclick"?r="ondblclick":a!=="onchange"||i!=="input"&&i!=="textarea"||Qu(t.type)?a==="onfocus"?r="onfocusin":a==="onblur"?r="onfocusout":Gu.test(r)?r=a:i.indexOf("-")===-1&&ju.test(r)?r=r.replace(qu,"-$&").toLowerCase():o===null&&(o=void 0):a=r="oninput",a==="oninput"&&s[r=a]&&(r="oninputCapture"),s[r]=o}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Ht(t.children).forEach(function(l){l.props.selected=s.value.indexOf(l.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=Ht(t.children).forEach(function(l){l.props.selected=s.multiple?s.defaultValue.indexOf(l.props.value)!=-1:s.defaultValue==l.props.value})),t.class&&!t.className?(s.class=t.class,Object.defineProperty(s,"className",Zu)):(t.className&&!t.class||t.class&&t.className)&&(s.class=s.className=t.className),e.props=s}(n),n.$$typeof=zu,co&&co(n)};var uo=P.__r;P.__r=function(n){uo&&uo(n),n.__c};var ho=P.diffed;P.diffed=function(n){ho&&ho(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value)};const Ga=La();function eh({children:n}){const[e,t]=Q(()=>{const i=localStorage.getItem("globalState");return i?JSON.parse(i):{GlobalVarIsLoggedIn:!1,GlobalVarUserEmailGuest:"Guest",GlobalVarUserEmail:"Guest",NophotoUrl:"https://th.bing.com/th/id/OIP.PRyT3WbMgUpQFp8uD_qudQAAAA?rs=1&pid=ImgDetMain",GlobalVarprofilePhotoUrl:"https://th.bing.com/th/id/OIP.PRyT3WbMgUpQFp8uD_qudQAAAA?rs=1&pid=ImgDetMain"}});return de(()=>{localStorage.setItem("globalState",JSON.stringify(e))},[e]),m(Ga.Provider,{value:{state:e,setState:t},children:n})}function ft(){return Ru(Ga)}const th=()=>{const n=ku(null),{state:e,setState:t}=ft();return de(()=>{n.current&&(console.log("Scrolling to top using ref"),n.current.scrollIntoView({behavior:"smooth"}))},[]),de(()=>{e.GlobalVarIsLoggedIn||te("/")},[e.GlobalVarIsLoggedIn]),m("div",{ref:n,className:"flex flex-col items-center justify-center h-screen",children:[m("h1",{className:"text-5xl mb-10 shimmer",children:"Welcome to the Online Quiz"}),m("div",{className:"grid grid-cols-2 grid-rows-2 gap-5",children:[m("button",{onClick:()=>{te("/main")},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500",children:"Play Quizzes"}),m("button",{onClick:()=>{te("/create")},className:"bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500",children:"Create Quiz"}),m("button",{onClick:()=>{te("/edit")},className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500",children:"Edit Quiz"}),m("button",{onClick:()=>{t(a=>({...a,GlobalVarIsLoggedIn:!1,GlobalVarUserEmail:e.GlobalVarUserEmailGuest,GlobalVarprofilePhotoUrl:e.NophotoUrl})),te("/")},className:"bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500",children:"Log Out"})]})]})};var fo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(n,e){if(!n)throw Yt(e)},Yt=function(n){return new Error("Firebase Database ("+qa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},nh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),i.push(t[h],t[u],t[d],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ka(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new ih;const d=r<<2|a>>4;if(i.push(d),c!==64){const _=a<<4&240|c>>2;if(i.push(_),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ih extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qa=function(n){const e=Ka(n);return $s.encodeByteArray(e,!0)},ni=function(n){return Qa(n).replace(/\./g,"")},ii=function(n){try{return $s.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){return Ya(void 0,n)}function Ya(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rh(t)||(n[t]=Ya(n[t],e[t]));return n}function rh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=()=>oh().__FIREBASE_DEFAULTS__,lh=()=>{if(typeof process>"u"||typeof fo>"u")return;const n=fo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ch=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ii(n[1]);return e&&JSON.parse(e)},Vs=()=>{try{return ah()||lh()||ch()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ja=n=>{var e,t;return(t=(e=Vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xa=n=>{const e=Ja(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Za=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config},el=n=>{var e;return(e=Vs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ni(JSON.stringify(t)),ni(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function uh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hh(){const n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function il(){return qa.NODE_ADMIN===!0}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function fh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="FirebaseError";class Ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_h,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ph(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ze(s,a,i)}}function ph(n,e){return n.replace(mh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const mh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=mn(ii(r[0])||""),t=mn(ii(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},gh=function(n){const e=sl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vh=function(n){const e=sl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function jt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ms(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function si(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ri(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(_o(r)&&_o(o)){if(!ri(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function _o(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function bh(n,e){const t=new wh(n,e);return t.subscribe.bind(t)}class wh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ih(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ki),s.error===void 0&&(s.error=Ki),s.complete===void 0&&(s.complete=Ki);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ih(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ki(){}function zs(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,v(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ri=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ni;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sh(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Th(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Th(n){return n===gt?void 0:n}function Sh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ch(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Nh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Rh=$.INFO,Ah={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ph=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Ah[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class js{constructor(e){this.name=e,this._logLevel=Rh,this._logHandler=Ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Oh=(n,e)=>e.some(t=>n instanceof t);let po,mo;function xh(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dh(){return mo||(mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,gs=new WeakMap,ol=new WeakMap,Qi=new WeakMap,Gs=new WeakMap;function Mh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ot(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rl.set(t,n)}).catch(()=>{}),Gs.set(e,n),e}function Lh(n){if(gs.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});gs.set(n,e)}let vs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ol.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fh(n){vs=n(vs)}function Uh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Yi(this),e,...t);return ol.set(i,e.sort?e.sort():[e]),ot(i)}:Dh().includes(n)?function(...e){return n.apply(Yi(this),e),ot(rl.get(this))}:function(...e){return ot(n.apply(Yi(this),e))}}function Wh(n){return typeof n=="function"?Uh(n):(n instanceof IDBTransaction&&Lh(n),Oh(n,xh())?new Proxy(n,vs):n)}function ot(n){if(n instanceof IDBRequest)return Mh(n);if(Qi.has(n))return Qi.get(n);const e=Wh(n);return e!==n&&(Qi.set(n,e),Gs.set(e,n)),e}const Yi=n=>Gs.get(n);function Bh(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ot(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ot(o.result),l.oldVersion,l.newVersion,ot(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $h=["get","getKey","getAll","getAllKeys","count"],Vh=["put","add","delete","clear"],Ji=new Map;function go(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Vh.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$h.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ji.set(e,r),r}Fh(n=>({...n,get:(e,t,i)=>go(e,t)||n.get(e,t,i),has:(e,t)=>!!go(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",vo="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new js("@firebase/app"),jh="@firebase/app-compat",Gh="@firebase/analytics-compat",qh="@firebase/analytics",Kh="@firebase/app-check-compat",Qh="@firebase/app-check",Yh="@firebase/auth",Jh="@firebase/auth-compat",Xh="@firebase/database",Zh="@firebase/database-compat",ed="@firebase/functions",td="@firebase/functions-compat",nd="@firebase/installations",id="@firebase/installations-compat",sd="@firebase/messaging",rd="@firebase/messaging-compat",od="@firebase/performance",ad="@firebase/performance-compat",ld="@firebase/remote-config",cd="@firebase/remote-config-compat",ud="@firebase/storage",hd="@firebase/storage-compat",dd="@firebase/firestore",fd="@firebase/vertexai-preview",_d="@firebase/firestore-compat",pd="firebase",md="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",gd={[ys]:"fire-core",[jh]:"fire-core-compat",[qh]:"fire-analytics",[Gh]:"fire-analytics-compat",[Qh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Yh]:"fire-auth",[Jh]:"fire-auth-compat",[Xh]:"fire-rtdb",[Zh]:"fire-rtdb-compat",[ed]:"fire-fn",[td]:"fire-fn-compat",[nd]:"fire-iid",[id]:"fire-iid-compat",[sd]:"fire-fcm",[rd]:"fire-fcm-compat",[od]:"fire-perf",[ad]:"fire-perf-compat",[ld]:"fire-rc",[cd]:"fire-rc-compat",[ud]:"fire-gcs",[hd]:"fire-gcs-compat",[dd]:"fire-fst",[_d]:"fire-fst-compat",[fd]:"fire-vertex","fire-js":"fire-js",[pd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Map,vd=new Map,ws=new Map;function yo(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kt(n){const e=n.name;if(ws.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;ws.set(e,n);for(const t of gn.values())yo(t,n);for(const t of vd.values())yo(t,n);return!0}function Ai(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new Nn("app","Firebase",yd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=md;function al(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(t||(t=Za()),!t)throw at.create("no-options");const r=gn.get(s);if(r){if(ri(t,r.options)&&ri(i,r.config))return r;throw at.create("duplicate-app",{appName:s})}const o=new kh(s);for(const l of ws.values())o.addComponent(l);const a=new bd(t,i,o);return gn.set(s,a),a}function Pi(n=bs){const e=gn.get(n);if(!e&&n===bs&&Za())return al();if(!e)throw at.create("no-app",{appName:n});return e}function wd(){return Array.from(gn.values())}function De(n,e,t){var i;let s=(i=gd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}kt(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-heartbeat-database",Ed=1,vn="firebase-heartbeat-store";let Xi=null;function ll(){return Xi||(Xi=Bh(Id,Ed,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vn)}catch(t){console.warn(t)}}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),Xi}async function Cd(n){try{const t=(await ll()).transaction(vn),i=await t.objectStore(vn).get(cl(n));return await t.done,i}catch(e){if(e instanceof Ze)St.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function bo(n,e){try{const i=(await ll()).transaction(vn,"readwrite");await i.objectStore(vn).put(e,cl(n)),await i.done}catch(t){if(t instanceof Ze)St.warn(t.message);else{const i=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(i.message)}}}function cl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=1024,Sd=30*24*60*60*1e3;class kd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wo(),{heartbeatsToSend:i,unsentEntries:s}=Nd(this._heartbeatsCache.heartbeats),r=ni(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wo(){return new Date().toISOString().substring(0,10)}function Nd(n,e=Td){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Io(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Io(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?fh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Io(n){return ni(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n){kt(new ut("platform-logger",e=>new Hh(e),"PRIVATE")),kt(new ut("heartbeat",e=>new kd(e),"PRIVATE")),De(ys,vo,n),De(ys,vo,"esm2017"),De("fire-js","")}Ad("");var Eo={};const Co="@firebase/database",To="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul="";function Pd(n){ul=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:mn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Od(e)}}catch{}return new xd},bt=hl("localStorage"),Dd=hl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new js("@firebase/database"),Md=function(){let n=1;return function(){return n++}}(),dl=function(n){const e=Eh(n),t=new yh;t.update(e);const i=t.digest();return $s.encodeByteArray(i)},Rn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rn.apply(null,i):typeof i=="object"?e+=re(i):e+=i,e+=" "}return e};let cn=null,So=!0;const Ld=function(n,e){v(!e,"Can't turn on custom loggers persistently."),Ft.logLevel=$.VERBOSE,cn=Ft.log.bind(Ft)},ce=function(...n){if(So===!0&&(So=!1,cn===null&&Dd.get("logging_enabled")===!0&&Ld()),cn){const e=Rn.apply(null,n);cn(e)}},An=function(n){return function(...e){ce(n,...e)}},Is=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rn(...n);Ft.error(e)},Ke=function(...n){const e=`FIREBASE FATAL ERROR: ${Rn(...n)}`;throw Ft.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+Rn(...n);Ft.warn(e)},Fd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ud=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Gt="[MIN_NAME]",Nt="[MAX_NAME]",Xt=function(n,e){if(n===e)return 0;if(n===Gt||e===Nt)return-1;if(e===Gt||n===Nt)return 1;{const t=ko(n),i=ko(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Wd=function(n,e){return n===e?0:n<e?-1:1},sn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},qs=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=re(e[i]),t+=":",t+=qs(n[e[i]]);return t+="}",t},_l=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ye(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pl=function(n){v(!fl(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Bd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$d=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Vd(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Hd=new RegExp("^-?(0*)\\d{1,10}$"),zd=-2147483648,jd=2147483647,ko=function(n){if(Hd.test(n)){const e=Number(n);if(e>=zd&&e<=jd)return e}return null},Zt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},un=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class Kn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="5",ml="v",gl="s",vl="r",yl="f",bl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wl="ls",Il="p",Es="ac",El="websocket",Cl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qd(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sl(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let i;if(e===El)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Cl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qd(n)&&(t.ns=n.namespace);const s=[];return ye(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.counters_={}}incrementCounter(e,t=1){et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={},es={};function Qs(n){const e=n.toString();return Zi[e]||(Zi[e]=new Yd),Zi[e]}function Jd(n,e){const t=n.toString();return es[t]||(es[t]=e()),es[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Zt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="start",Zd="close",ef="pLPCommand",tf="pRTLPCB",kl="id",Nl="pw",Rl="ser",nf="cb",sf="seg",rf="ts",of="d",af="dframe",Al=1870,Pl=30,lf=Al-Pl,cf=25e3,uf=3e4;class Lt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=An(e),this.stats_=Qs(t),this.urlFn=l=>(this.appCheckToken&&(l[Es]=this.appCheckToken),Sl(t,Cl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uf)),Ud(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ys((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===No)this.id=a,this.password=l;else if(o===Zd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[No]="t",i[Rl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[nf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ml]=Ks,this.transportSessionId&&(i[gl]=this.transportSessionId),this.lastSessionId&&(i[wl]=this.lastSessionId),this.applicationId&&(i[Il]=this.applicationId),this.appCheckToken&&(i[Es]=this.appCheckToken),typeof location<"u"&&location.hostname&&bl.test(location.hostname)&&(i[vl]=yl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return Lt.forceAllow_?!0:!Lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bd()&&!$d()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Qa(t),s=_l(i,lf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[af]="t",i[kl]=e,i[Nl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ys{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Md(),window[ef+this.uniqueCallbackIdentifier]=e,window[tf+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ys.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kl]=this.myID,e[Nl]=this.myPW,e[Rl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pl+i.length<=Al;){const o=this.pendingSegs.shift();i=i+"&"+sf+s+"="+o.seg+"&"+rf+s+"="+o.ts+"&"+of+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(cf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=16384,df=45e3;let oi=null;typeof MozWebSocket<"u"?oi=MozWebSocket:typeof WebSocket<"u"&&(oi=WebSocket);class Se{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=An(this.connId),this.stats_=Qs(t),this.connURL=Se.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ml]=Ks,typeof location<"u"&&location.hostname&&bl.test(location.hostname)&&(o[vl]=yl),t&&(o[gl]=t),i&&(o[wl]=i),s&&(o[Es]=s),r&&(o[Il]=r),Sl(e,El,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let i;il(),this.mySock=new oi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&oi!==null&&!Se.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=mn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=_l(t,hf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(df))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Se.responsesRequiredToBeHealthy=2;Se.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lt,Se]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Se&&Se.isAvailable();let i=t&&!Se.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Se];else{const s=this.transports_=[];for(const r of yn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=6e4,_f=5e3,pf=10*1024,mf=100*1024,ts="t",Ro="d",gf="s",Ao="r",vf="e",Po="o",Oo="a",xo="n",Do="p",yf="h";class bf{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=An("c:"+this.id+":"),this.transportManager_=new yn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=un(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ts in e){const t=e[ts];t===Oo?this.upgradeIfSecondaryHealthy_():t===Ao?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Po&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Do,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Oo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sn(ts,e);if(Ro in e){const i=e[Ro];if(t===yf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===xo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gf?this.onConnectionShutdown_(i):t===Ao?this.onReset_(i):t===vf?Is("Server Error: "+i):t===Po?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Is("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ks!==i&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),un(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ff))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):un(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_f))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Do,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends xl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ai}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=32,Lo=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function W(){return new V("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ht(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function Dl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function wf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ml(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ll(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function ne(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof V)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new V(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function me(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return me(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Js(n,e){if(ht(n)!==ht(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ke(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ht(n)>ht(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class If{constructor(e,t){this.errorPrefix_=t,this.parts_=Ml(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ri(this.parts_[i]);Fl(this)}}function Ef(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ri(e),Fl(n)}function Cf(n){const e=n.parts_.pop();n.byteLength_-=Ri(e),n.parts_.length>0&&(n.byteLength_-=1)}function Fl(n){if(n.byteLength_>Lo)throw new Error(n.errorPrefix_+"has a key path longer than "+Lo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Mo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mo+") or object contains a cycle "+vt(n))}function vt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends xl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Xs}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=1e3,Tf=60*5*1e3,Fo=30*1e3,Sf=1.3,kf=3e4,Nf="server_kill",Uo=3;class qe extends Ol{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qe.nextPersistentConnectionId_++,this.log_=An("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rn,this.maxReconnectDelay_=Tf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!il())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ai.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(re(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ni,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;qe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&et(e,"w")){const i=jt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Is("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kf&&(this.reconnectDelay_=rn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+qe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new bf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Nf)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ve(u),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ms(this.interruptReasons_)&&(this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>qs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new V(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uo&&(this.reconnectDelay_=Fo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ul.replace(/\./g,"-")]=1,Hs()?e["framework.cordova"]=1:nl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ai.getInstance().currentlyOnline();return ms(this.interruptReasons_)&&e}}qe.nextPersistentConnectionId_=0;qe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(Gt,e),s=new D(Gt,t);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class Ul extends Oi{static get __EMPTY_NODE(){return Hn}static set __EMPTY_NODE(e){Hn=e}compare(e,t){return Xt(e.name,t.name)}isDefinedOn(e){throw Yt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(Nt,Hn)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,Hn)}toString(){return".key"}}const Ut=new Ul;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class se{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??se.RED,this.left=s??ge.EMPTY_NODE,this.right=r??ge.EMPTY_NODE}copy(e,t,i,s,r){return new se(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}se.RED=!0;se.BLACK=!1;class Rf{copy(e,t,i,s,r){return this}insert(e,t,i){return new se(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ge{constructor(e,t=ge.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,se.BLACK,null,null))}remove(e){return new ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,se.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zn(this.root_,null,this.comparator_,!0,e)}}ge.EMPTY_NODE=new Rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,e){return Xt(n.name,e.name)}function Zs(n,e){return Xt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;function Pf(n){Cs=n}const Wl=function(n){return typeof n=="number"?"number:"+pl(n):"string:"+n},Bl=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&et(e,".sv"),"Priority must be a string or number.")}else v(n===Cs||n.isEmpty(),"priority of unexpected type.");v(n===Cs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class ie{constructor(e,t=ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bl(this.priorityNode_)}static set __childrenNodeConstructor(e){Wo=e}static get __childrenNodeConstructor(){return Wo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:x(e)===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pl(this.value_):e+=this.value_,this.lazyHash_=dl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ie.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ie.VALUE_TYPE_ORDER.indexOf(t),r=ie.VALUE_TYPE_ORDER.indexOf(i);return v(s>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l,Vl;function Of(n){$l=n}function xf(n){Vl=n}class Df extends Oi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Xt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Nt,new ie("[PRIORITY-POST]",Vl))}makePost(e,t){const i=$l(e);return new D(t,new ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const Z=new Df;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=Math.log(2);class Lf{constructor(e){const t=r=>parseInt(Math.log(r)/Mf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new se(d,u.node,se.BLACK,null,null);{const _=parseInt(h/2,10)+l,g=s(l,_),w=s(_+1,c);return u=n[_],d=t?t(u):u,new se(d,u.node,se.BLACK,g,w)}},r=function(l){let c=null,h=null,u=n.length;const d=function(g,w){const y=u-g,b=u;u-=g;const I=s(y+1,b),R=n[y],N=t?t(R):R;_(new se(N,R.node,w,null,I))},_=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));w?d(y,se.BLACK):(d(y,se.BLACK),d(y,se.RED))}return h},o=new Lf(n.length),a=r(o);return new ge(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;const Mt={};class He{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(Mt&&Z,"ChildrenNode.ts has not been loaded"),ns=ns||new He({".priority":Mt},{".priority":Z}),ns}get(e){const t=jt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ge?t:null}hasIndex(e){return et(this.indexSet_,e.toString())}addIndex(e,t){v(e!==Ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=li(i,e.getCompare()):a=Mt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new He(h,c)}addToIndexes(e,t){const i=si(this.indexes_,(s,r)=>{const o=jt(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),s===Mt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),li(a,o.getCompare())}else return Mt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new He(i,this.indexSet_)}removeFromIndexes(e,t){const i=si(this.indexes_,s=>{if(s===Mt)return s;{const r=t.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new He(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class C{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bl(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return on||(on=new C(new ge(Zs),null,He.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||on}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?on:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?on:this.priorityNode_;return new C(s,o,r)}}updateChild(e,t){const i=x(e);if(i===null)return t;{v(x(e)!==".priority"||ht(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Z,(o,a)=>{t[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wl(this.getPriority().val())+":"),this.forEachChild(Z,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":dl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pn?-1:0}withIndex(e){if(e===Ut||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Z),s=t.getIterator(Z);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ut?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ff extends C{constructor(){super(new ge(Zs),C.EMPTY_NODE,He.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Pn=new Ff;Object.defineProperties(D,{MIN:{value:new D(Gt,C.EMPTY_NODE)},MAX:{value:new D(Nt,Pn)}});Ul.__EMPTY_NODE=C.EMPTY_NODE;ie.__childrenNodeConstructor=C;Pf(Pn);xf(Pn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=!0;function le(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ie(t,le(e))}if(!(n instanceof Array)&&Uf){const t=[];let i=!1;if(ye(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=le(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new D(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=li(t,Af,o=>o.name,Zs);if(i){const o=li(t,Z.getCompare());return new C(r,le(e),new He({".priority":o},{".priority":Z}))}else return new C(r,le(e),He.Default)}else{let t=C.EMPTY_NODE;return ye(n,(i,s)=>{if(et(n,i)&&i.substring(0,1)!=="."){const r=le(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(le(e))}}Of(le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends Oi{constructor(e){super(),this.indexPath_=e,v(!M(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Xt(e.name,t.name):r}makePost(e,t){const i=le(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Pn);return new D(Nt,e)}toString(){return Ml(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Oi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Xt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=le(e);return new D(t,i)}toString(){return".value"}}const $f=new Bf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){return{type:"value",snapshotNode:n}}function qt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Vf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(bn(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qt(t,i)):o.trackChildChange(wn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Z,(s,r)=>{t.hasChild(s)||i.trackChildChange(bn(s,r))}),t.isLeafNode()||t.forEachChild(Z,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(wn(s,r,o))}else i.trackChildChange(qt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.indexedFilter_=new er(e.getIndex()),this.index_=e.getIndex(),this.startPost_=In.getStartPost_(e),this.endPost_=In.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new D(t,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=C.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(Z,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new In(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new D(t,i))||(i=C.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new D(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(h&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(wn(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(bn(t,u));const w=a.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(qt(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(bn(c.name,c.node)),r.trackChildChange(qt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gt}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new tr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zf(n){return n.loadsAllData()?new er(n.getIndex()):n.hasLimit()?new Hf(n):new In(n)}function Bo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Z?t="$priority":n.index_===$f?t="$value":n.index_===Ut?t="$key":(v(n.index_ instanceof Wf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=re(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+re(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=re(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $o(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Z&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ol{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=An("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ci.getListenId_(e,i),a={};this.listens_[o]=a;const l=Bo(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),jt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=ci.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Bo(e._queryParams),i=e._path.toString(),s=new Ni;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mn(a.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return{value:null,children:new Map}}function zl(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,ui());const s=n.children.get(i);e=z(e),zl(s,e,t)}}function Ts(n,e,t){n.value!==null?t(e,n.value):Gf(n,(i,s)=>{const r=new V(e.toString()+"/"+i);Ts(s,r,t)})}function Gf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ye(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=10*1e3,Kf=30*1e3,Qf=5*60*1e3;class Yf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qf(e);const i=Vo+(Kf-Vo)*Math.random();un(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ye(e,(s,r)=>{r>0&&et(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),un(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ne||(Ne={}));function jl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ir(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ne.ACK_USER_WRITE,this.source=jl()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new hi(W(),t,this.revert)}}else return v(x(this.path)===e,"operationForChild called for unrelated child."),new hi(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.source=e,this.path=t,this.type=Ne.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new En(this.source,W()):new En(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ne.OVERWRITE}operationForChild(e){return M(this.path)?new Rt(this.source,W(),this.snap.getImmediateChild(e)):new Rt(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ne.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new Rt(this.source,W(),t.value):new Cn(this.source,W(),t)}else return v(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cn(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vf(o.childName,o.snapshotNode))}),an(n,s,"child_removed",e,i,t),an(n,s,"child_added",e,i,t),an(n,s,"child_moved",r,i,t),an(n,s,"child_changed",e,i,t),an(n,s,"value",e,i,t),s}function an(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>e_(n,a,l)),o.forEach(a=>{const l=Zf(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Zf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function e_(n,e,t){if(e.childName==null||t.childName==null)throw Yt("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n,e){return{eventCache:n,serverCache:e}}function hn(n,e,t,i){return xi(new At(e,t,i),n.serverCache)}function Gl(n,e,t,i){return xi(n.eventCache,new At(e,t,i))}function Ss(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;const t_=()=>(is||(is=new ge(Wd)),is);class q{constructor(e,t=t_()){this.value=e,this.children=t}static fromObject(e){let t=new q(null);return ye(e,(i,s)=>{t=t.set(new V(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:W(),value:this.value};if(M(e))return null;{const i=x(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:ne(new V(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree(z(e)):new q(null)}}set(e,t){if(M(e))return new q(t,this.children);{const i=x(e),r=(this.children.get(i)||new q(null)).set(z(e),t),o=this.children.insert(i,r);return new q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const s=i.remove(z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new q(null):new q(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get(z(e)):null}}setTree(e,t){if(M(e))return t;{const i=x(e),r=(this.children.get(i)||new q(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ne(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,W(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(z(e),ne(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,W(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=x(e),r=this.children.get(s);return r?r.foreachOnPath_(z(e),ne(t,s),i):new q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ne(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.writeTree_=e}static empty(){return new Ae(new q(null))}}function dn(n,e,t){if(M(e))return new Ae(new q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=me(s,e);return r=r.updateChild(o,t),new Ae(n.writeTree_.set(s,r))}else{const s=new q(t),r=n.writeTree_.setTree(e,s);return new Ae(r)}}}function Ho(n,e,t){let i=n;return ye(t,(s,r)=>{i=dn(i,ne(e,s),r)}),i}function zo(n,e){if(M(e))return Ae.empty();{const t=n.writeTree_.setTree(e,new q(null));return new Ae(t)}}function ks(n,e){return Dt(n,e)!=null}function Dt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(me(t.path,e)):null}function jo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Z,(i,s)=>{e.push(new D(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function lt(n,e){if(M(e))return n;{const t=Dt(n,e);return t!=null?new Ae(new q(t)):new Ae(n.writeTree_.subtree(e))}}function Ns(n){return n.writeTree_.isEmpty()}function Kt(n,e){return ql(W(),n.writeTree_,e)}function ql(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=ql(ne(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ne(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,e){return Jl(e,n)}function n_(n,e,t,i,s){v(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=dn(n.visibleWrites,e,t)),n.lastWriteId=i}function i_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function s_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&r_(a,i.path)?s=!1:ke(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return o_(n),!0;if(i.snap)n.visibleWrites=zo(n.visibleWrites,i.path);else{const a=i.children;ye(a,l=>{n.visibleWrites=zo(n.visibleWrites,ne(i.path,l))})}return!0}else return!1}function r_(n,e){if(n.snap)return ke(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ke(ne(n.path,t),e))return!0;return!1}function o_(n){n.visibleWrites=Kl(n.allWrites,a_,W()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function a_(n){return n.visible}function Kl(n,e,t){let i=Ae.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ke(t,o)?(a=me(t,o),i=dn(i,a,r.snap)):ke(o,t)&&(a=me(o,t),i=dn(i,W(),r.snap.getChild(a)));else if(r.children){if(ke(t,o))a=me(t,o),i=Ho(i,a,r.children);else if(ke(o,t))if(a=me(o,t),M(a))i=Ho(i,W(),r.children);else{const l=jt(r.children,x(a));if(l){const c=l.getChild(z(a));i=dn(i,W(),c)}}}else throw Yt("WriteRecord should have .snap or .children")}}return i}function Ql(n,e,t,i,s){if(!i&&!s){const r=Dt(n.visibleWrites,e);if(r!=null)return r;{const o=lt(n.visibleWrites,e);if(Ns(o))return t;if(t==null&&!ks(o,W()))return null;{const a=t||C.EMPTY_NODE;return Kt(o,a)}}}else{const r=lt(n.visibleWrites,e);if(!s&&Ns(r))return t;if(!s&&t==null&&!ks(r,W()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ke(c.path,e)||ke(e,c.path))},a=Kl(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Kt(a,l)}}}function l_(n,e,t){let i=C.EMPTY_NODE;const s=Dt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Z,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=lt(n.visibleWrites,e);return t.forEachChild(Z,(o,a)=>{const l=Kt(lt(r,new V(o)),a);i=i.updateImmediateChild(o,l)}),jo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=lt(n.visibleWrites,e);return jo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function c_(n,e,t,i,s){v(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,t);if(ks(n.visibleWrites,r))return null;{const o=lt(n.visibleWrites,r);return Ns(o)?s.getChild(t):Kt(o,s.getChild(t))}}function u_(n,e,t,i){const s=ne(e,t),r=Dt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=lt(n.visibleWrites,s);return Kt(o,i.getNode().getImmediateChild(t))}else return null}function h_(n,e){return Dt(n.visibleWrites,e)}function d_(n,e,t,i,s,r,o){let a;const l=lt(n.visibleWrites,e),c=Dt(l,W());if(c!=null)a=c;else if(t!=null)a=Kt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&h.length<s;)u(_,i)!==0&&h.push(_),_=d.getNext();return h}else return[]}function f_(){return{visibleWrites:Ae.empty(),allWrites:[],lastWriteId:-1}}function di(n,e,t,i){return Ql(n.writeTree,n.treePath,e,t,i)}function rr(n,e){return l_(n.writeTree,n.treePath,e)}function Go(n,e,t,i){return c_(n.writeTree,n.treePath,e,t,i)}function fi(n,e){return h_(n.writeTree,ne(n.treePath,e))}function __(n,e,t,i,s,r){return d_(n.writeTree,n.treePath,e,t,i,s,r)}function or(n,e,t){return u_(n.writeTree,n.treePath,e,t)}function Yl(n,e){return Jl(ne(n.treePath,e),n.writeTree)}function Jl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,wn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,bn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,qt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,wn(i,e.snapshotNode,s.oldSnap));else throw Yt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Xl=new m_;class ar{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new At(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return or(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),r=__(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){return{filter:n}}function v_(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function y_(n,e,t,i,s){const r=new p_;let o,a;if(t.type===Ne.OVERWRITE){const c=t;c.source.fromUser?o=Rs(n,e,c.path,c.snap,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=_i(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ne.MERGE){const c=t;c.source.fromUser?o=w_(n,e,c.path,c.children,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=As(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ne.ACK_USER_WRITE){const c=t;c.revert?o=C_(n,e,c.path,i,s,r):o=I_(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ne.LISTEN_COMPLETE)o=E_(n,e,t.path,i,r);else throw Yt("Unknown operation type: "+t.type);const l=r.getChanges();return b_(e,o,l),{viewCache:o,changes:l}}function b_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ss(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Hl(Ss(e)))}}function Zl(n,e,t,i,s,r){const o=e.eventCache;if(fi(i,t)!=null)return e;{let a,l;if(M(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pt(e),h=c instanceof C?c:C.EMPTY_NODE,u=rr(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=di(i,Pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=x(t);if(c===".priority"){v(ht(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Go(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=z(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Go(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=or(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return hn(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function _i(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(M(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),_,null)}else{const _=x(t);if(!l.isCompleteForPath(t)&&ht(t)>1)return e;const g=z(t),y=l.getNode().getImmediateChild(_).updateChild(g,i);_===".priority"?c=h.updatePriority(l.getNode(),y):c=h.updateChild(l.getNode(),_,y,g,Xl,null)}const u=Gl(e,c,l.isFullyInitialized()||M(t),h.filtersNodes()),d=new ar(s,u,r);return Zl(n,u,t,s,d,a)}function Rs(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new ar(s,e,r);if(M(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=hn(e,c,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=hn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=z(t),_=a.getNode().getImmediateChild(u);let g;if(M(d))g=i;else{const w=h.getCompleteChild(u);w!=null?Dl(d)===".priority"&&w.getChild(Ll(d)).isEmpty()?g=w:g=w.updateChild(d,i):g=C.EMPTY_NODE}if(_.equals(g))l=e;else{const w=n.filter.updateChild(a.getNode(),u,g,d,h,o);l=hn(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function qo(n,e){return n.eventCache.isCompleteForChild(e)}function w_(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=ne(t,l);qo(e,x(h))&&(a=Rs(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=ne(t,l);qo(e,x(h))||(a=Rs(n,a,h,c,s,r,o))}),a}function Ko(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function As(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;M(t)?c=i:c=new q(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),g=Ko(n,_,d);l=_i(n,l,new V(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const g=e.serverCache.getNode().getImmediateChild(u),w=Ko(n,g,d);l=_i(n,l,new V(u),w,s,r,o,a)}}),l}function I_(n,e,t,i,s,r,o){if(fi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(M(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return _i(n,e,t,l.getNode().getChild(t),s,r,a,o);if(M(t)){let c=new q(null);return l.getNode().forEachChild(Ut,(h,u)=>{c=c.set(new V(h),u)}),As(n,e,t,c,s,r,a,o)}else return e}else{let c=new q(null);return i.foreach((h,u)=>{const d=ne(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),As(n,e,t,c,s,r,a,o)}}function E_(n,e,t,i,s){const r=e.serverCache,o=Gl(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return Zl(n,o,t,i,Xl,s)}function C_(n,e,t,i,s,r){let o;if(fi(i,t)!=null)return e;{const a=new ar(i,e,s),l=e.eventCache.getNode();let c;if(M(t)||x(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=di(i,Pt(e));else{const u=e.serverCache.getNode();v(u instanceof C,"serverChildren would be complete if leaf node"),h=rr(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=x(t);let u=or(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,z(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,C.EMPTY_NODE,z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=di(i,Pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(i,W())!=null,hn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new er(i.getIndex()),r=zf(i);this.processor_=g_(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),h=new At(l,o.isFullyInitialized(),s.filtersNodes()),u=new At(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(u,h),this.eventGenerator_=new Jf(this.query_)}get query(){return this.query_}}function S_(n){return n.viewCache_.serverCache.getNode()}function k_(n,e){const t=Pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function Qo(n){return n.eventRegistrations_.length===0}function N_(n,e){n.eventRegistrations_.push(e)}function Yo(n,e,t){const i=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Jo(n,e,t,i){e.type===Ne.MERGE&&e.source.queryId!==null&&(v(Pt(n.viewCache_),"We should always have a full cache before handling merges"),v(Ss(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=y_(n.processor_,s,e,t,i);return v_(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ec(n,r.changes,r.viewCache.eventCache.getNode(),null)}function R_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Z,(r,o)=>{i.push(qt(r,o))}),t.isFullyInitialized()&&i.push(Hl(t.getNode())),ec(n,i,t.getNode(),e)}function ec(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Xf(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class A_{constructor(){this.views=new Map}}function P_(n){v(!pi,"__referenceConstructor has already been defined"),pi=n}function O_(){return v(pi,"Reference.ts has not been loaded"),pi}function x_(n){return n.views.size===0}function lr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return v(r!=null,"SyncTree gave us an op for an invalid query."),Jo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Jo(o,e,t,i));return r}}function D_(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=di(t,s?i:null),l=!1;a?l=!0:i instanceof C?(a=rr(t,i),l=!1):(a=C.EMPTY_NODE,l=!1);const c=xi(new At(a,l,!1),new At(i,s,!1));return new T_(e,c)}return o}function M_(n,e,t,i,s,r){const o=D_(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),N_(o,t),R_(o,t)}function L_(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=dt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Yo(c,t,i)),Qo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Yo(l,t,i)),Qo(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!dt(n)&&r.push(new(O_())(e._repo,e._path)),{removed:r,events:o}}function tc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Wt(n,e){let t=null;for(const i of n.views.values())t=t||k_(i,e);return t}function nc(n,e){if(e._queryParams.loadsAllData())return Di(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ic(n,e){return nc(n,e)!=null}function dt(n){return Di(n)!=null}function Di(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;function F_(n){v(!mi,"__referenceConstructor has already been defined"),mi=n}function U_(){return v(mi,"Reference.ts has not been loaded"),mi}let W_=1;class Xo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=f_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sc(n,e,t,i,s){return n_(n.pendingWriteTree_,e,t,i,s),s?On(n,new Rt(jl(),e,t)):[]}function wt(n,e,t=!1){const i=i_(n.pendingWriteTree_,e);if(s_(n.pendingWriteTree_,e)){let r=new q(null);return i.snap!=null?r=r.set(W(),!0):ye(i.children,o=>{r=r.set(new V(o),!0)}),On(n,new hi(i.path,r,t))}else return[]}function Mi(n,e,t){return On(n,new Rt(nr(),e,t))}function B_(n,e,t){const i=q.fromObject(t);return On(n,new Cn(nr(),e,i))}function $_(n,e){return On(n,new En(nr(),e))}function V_(n,e,t){const i=ur(n,t);if(i){const s=hr(i),r=s.path,o=s.queryId,a=me(r,e),l=new En(ir(o),a);return dr(n,r,l)}else return[]}function Ps(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ic(o,e))){const l=L_(o,e,t,i);x_(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,_)=>dt(_));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=j_(d);for(let g=0;g<_.length;++g){const w=_[g],y=w.query,b=ac(n,w);n.listenProvider_.startListening(fn(y),gi(n,y),b.hashFn,b.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(fn(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(Li(d));n.listenProvider_.stopListening(fn(d),_)}))}G_(n,c)}return a}function H_(n,e,t,i){const s=ur(n,i);if(s!=null){const r=hr(s),o=r.path,a=r.queryId,l=me(o,e),c=new Rt(ir(a),l,t);return dr(n,o,c)}else return[]}function z_(n,e,t,i){const s=ur(n,i);if(s){const r=hr(s),o=r.path,a=r.queryId,l=me(o,e),c=q.fromObject(t),h=new Cn(ir(a),l,c);return dr(n,o,h)}else return[]}function Zo(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,_)=>{const g=me(d,s);r=r||Wt(_,g),o=o||dt(_)});let a=n.syncPointTree_.get(s);a?(o=o||dt(a),r=r||Wt(a,W())):(a=new A_,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((_,g)=>{const w=Wt(g,W());w&&(r=r.updateImmediateChild(_,w))}));const c=ic(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Li(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=q_();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const h=sr(n.pendingWriteTree_,s);let u=M_(a,e,t,h,r,l);if(!c&&!o&&!i){const d=nc(a,e);u=u.concat(K_(n,e,d))}return u}function cr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=Wt(a,l);if(c)return c});return Ql(s,e,r,t,!0)}function On(n,e){return rc(e,n.syncPointTree_,null,sr(n.pendingWriteTree_,W()))}function rc(n,e,t,i){if(M(n.path))return oc(n,e,t,i);{const s=e.get(W());t==null&&s!=null&&(t=Wt(s,W()));let r=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Yl(i,o);r=r.concat(rc(a,l,c,h))}return s&&(r=r.concat(lr(s,n,i,t))),r}}function oc(n,e,t,i){const s=e.get(W());t==null&&s!=null&&(t=Wt(s,W()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Yl(i,o),h=n.operationForChild(o);h&&(r=r.concat(oc(h,a,l,c)))}),s&&(r=r.concat(lr(s,n,i,t))),r}function ac(n,e){const t=e.query,i=gi(n,t);return{hashFn:()=>(S_(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?V_(n,t._path,i):$_(n,t._path);{const r=Vd(s,t);return Ps(n,t,null,r)}}}}function gi(n,e){const t=Li(e);return n.queryToTagMap.get(t)}function Li(n){return n._path.toString()+"$"+n._queryIdentifier}function ur(n,e){return n.tagToQueryMap.get(e)}function hr(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function dr(n,e,t){const i=n.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const s=sr(n.pendingWriteTree_,e);return lr(i,t,s,null)}function j_(n){return n.fold((e,t,i)=>{if(t&&dt(t))return[Di(t)];{let s=[];return t&&(s=tc(t)),ye(i,(r,o)=>{s=s.concat(o)}),s}})}function fn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(U_())(n._repo,n._path):n}function G_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Li(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function q_(){return W_++}function K_(n,e,t){const i=e._path,s=gi(n,e),r=ac(n,t),o=n.listenProvider_.startListening(fn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)v(!dt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!M(c)&&h&&dt(h))return[Di(h).query];{let d=[];return h&&(d=d.concat(tc(h).map(_=>_.query))),ye(u,(_,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(fn(h),gi(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fr(t)}node(){return this.node_}}class _r{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ne(this.path_,e);return new _r(this.syncTree_,t)}node(){return cr(this.syncTree_,this.path_)}}const Q_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ea=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Y_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return J_(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Y_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},J_=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const s=e.node();if(v(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},X_=function(n,e,t,i){return pr(e,new _r(t,n),i)},lc=function(n,e,t){return pr(n,new fr(e),t)};function pr(n,e,t){const i=n.getPriority().val(),s=ea(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ea(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ie(a,le(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ie(s))),o.forEachChild(Z,(a,l)=>{const c=pr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function gr(n,e){let t=e instanceof V?e:new V(e),i=n,s=x(t);for(;s!==null;){const r=jt(i.node.children,s)||{children:{},childCount:0};i=new mr(s,i,r),t=z(t),s=x(t)}return i}function en(n){return n.node.value}function cc(n,e){n.node.value=e,Os(n)}function uc(n){return n.node.childCount>0}function Z_(n){return en(n)===void 0&&!uc(n)}function Fi(n,e){ye(n.node.children,(t,i)=>{e(new mr(t,n,i))})}function hc(n,e,t,i){t&&!i&&e(n),Fi(n,s=>{hc(s,e,!0,i)}),t&&i&&e(n)}function ep(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xn(n){return new V(n.parent===null?n.name:xn(n.parent)+"/"+n.name)}function Os(n){n.parent!==null&&tp(n.parent,n.name,n)}function tp(n,e,t){const i=Z_(t),s=et(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Os(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Os(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=/[\[\].#$\/\u0000-\u001F\u007F]/,ip=/[\[\].#$\u0000-\u001F\u007F]/,ss=10*1024*1024,dc=function(n){return typeof n=="string"&&n.length!==0&&!np.test(n)},fc=function(n){return typeof n=="string"&&n.length!==0&&!ip.test(n)},sp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fc(n)},_c=function(n,e,t,i){i&&e===void 0||vr(zs(n,"value"),e,t)},vr=function(n,e,t){const i=t instanceof V?new If(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+vt(i));if(typeof e=="function")throw new Error(n+"contains a function "+vt(i)+" with contents = "+e.toString());if(fl(e))throw new Error(n+"contains "+e.toString()+" "+vt(i));if(typeof e=="string"&&e.length>ss/3&&Ri(e)>ss)throw new Error(n+"contains a string greater than "+ss+" utf8 bytes "+vt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ye(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dc(o)))throw new Error(n+" contains an invalid key ("+o+") "+vt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ef(i,o),vr(n,a,i),Cf(i)}),s&&r)throw new Error(n+' contains ".value" child '+vt(i)+" in addition to actual children.")}},pc=function(n,e,t,i){if(!fc(t))throw new Error(zs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pc(n,e,t)},yr=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},op=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sp(t))throw new Error(zs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function br(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Js(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function mc(n,e,t){br(n,t),gc(n,i=>Js(i,e))}function Qe(n,e,t){br(n,t),gc(n,i=>ke(i,e)||ke(e,i))}function gc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(lp(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function lp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();cn&&ce("event: "+t.toString()),Zt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="repo_interrupt",up=25;class hp{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ap,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ui(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dp(n,e,t){if(n.stats_=Qs(n.repoInfo_),n.forceRestClient_||Gd())n.server_=new ci(n.repoInfo_,(i,s,r,o)=>{ta(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>na(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new qe(n.repoInfo_,e,(i,s,r,o)=>{ta(n,i,s,r,o)},i=>{na(n,i)},i=>{fp(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Jd(n.repoInfo_,()=>new Yf(n.stats_,n.server_)),n.infoData_=new jf,n.infoSyncTree_=new Xo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Mi(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ir(n,"connected",!1),n.serverSyncTree_=new Xo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Qe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function vc(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function wr(n){return Q_({timestamp:vc(n)})}function ta(n,e,t,i,s){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=si(t,c=>le(c));o=z_(n.serverSyncTree_,r,l,s)}else{const l=le(t);o=H_(n.serverSyncTree_,r,l,s)}else if(i){const l=si(t,c=>le(c));o=B_(n.serverSyncTree_,r,l)}else{const l=le(t);o=Mi(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ui(n,r)),Qe(n.eventQueue_,a,o)}function na(n,e){Ir(n,"connected",e),e===!1&&pp(n)}function fp(n,e){ye(e,(t,i)=>{Ir(n,t,i)})}function Ir(n,e,t){const i=new V("/.info/"+e),s=le(t);n.infoData_.updateSnapshot(i,s);const r=Mi(n.infoSyncTree_,i,s);Qe(n.eventQueue_,i,r)}function yc(n){return n.nextWriteId_++}function _p(n,e,t,i,s){Er(n,"set",{path:e.toString(),value:t,priority:i});const r=wr(n),o=le(t,i),a=cr(n.serverSyncTree_,e),l=lc(o,a,r),c=yc(n),h=sc(n.serverSyncTree_,e,l,c,!0);br(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const g=d==="ok";g||ve("set at "+e+" failed: "+d);const w=wt(n.serverSyncTree_,c,!g);Qe(n.eventQueue_,e,w),yp(n,s,d,_)});const u=Cc(n,e);Ui(n,u),Qe(n.eventQueue_,u,[])}function pp(n){Er(n,"onDisconnectEvents");const e=wr(n),t=ui();Ts(n.onDisconnect_,W(),(s,r)=>{const o=X_(s,r,n.serverSyncTree_,e);zl(t,s,o)});let i=[];Ts(t,W(),(s,r)=>{i=i.concat(Mi(n.serverSyncTree_,s,r));const o=Cc(n,s);Ui(n,o)}),n.onDisconnect_=ui(),Qe(n.eventQueue_,W(),i)}function mp(n,e,t){let i;x(e._path)===".info"?i=Zo(n.infoSyncTree_,e,t):i=Zo(n.serverSyncTree_,e,t),mc(n.eventQueue_,e._path,i)}function gp(n,e,t){let i;x(e._path)===".info"?i=Ps(n.infoSyncTree_,e,t):i=Ps(n.serverSyncTree_,e,t),mc(n.eventQueue_,e._path,i)}function vp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(cp)}function Er(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ce(t,...e)}function yp(n,e,t,i){e&&Zt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function bc(n,e,t){return cr(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Cr(n,e=n.transactionQueueTree_){if(e||Wi(n,e),en(e)){const t=Ic(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&bp(n,xn(e),t)}else uc(e)&&Fi(e,t=>{Cr(n,t)})}function bp(n,e,t){const i=t.map(c=>c.currentWriteId),s=bc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];v(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=me(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Er(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(wt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Wi(n,gr(n.transactionQueueTree_,e)),Cr(n,n.transactionQueueTree_),Qe(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Zt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ve("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Ui(n,e)}},o)}function Ui(n,e){const t=wc(n,e),i=xn(t),s=Ic(n,t);return wp(n,s,i),i}function wp(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(t,l.path);let h=!1,u;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(wt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=up)h=!0,u="maxretry",s=s.concat(wt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=bc(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){vr("transaction failed: Data returned ",_,l.path);let g=le(_);typeof _=="object"&&_!=null&&et(_,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,b=wr(n),I=lc(g,d,b);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=yc(n),o.splice(o.indexOf(y),1),s=s.concat(sc(n.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(wt(n.serverSyncTree_,y,!0))}else h=!0,u="nodata",s=s.concat(wt(n.serverSyncTree_,l.currentWriteId,!0))}Qe(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Wi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Zt(i[a]);Cr(n,n.transactionQueueTree_)}function wc(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&en(i)===void 0;)i=gr(i,t),e=z(e),t=x(e);return i}function Ic(n,e){const t=[];return Ec(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ec(n,e,t){const i=en(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Fi(e,s=>{Ec(n,s,t)})}function Wi(n,e){const t=en(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,cc(e,t.length>0?t:void 0)}Fi(e,i=>{Wi(n,i)})}function Cc(n,e){const t=xn(wc(n,e)),i=gr(n.transactionQueueTree_,e);return ep(i,s=>{rs(n,s)}),rs(n,i),hc(i,s=>{rs(n,s)}),t}function rs(n,e){const t=en(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(wt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?cc(e,void 0):t.length=r+1,Qe(n.eventQueue_,xn(e),s);for(let o=0;o<i.length;o++)Zt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ep(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const ia=function(n,e){const t=Cp(n),i=t.namespace;t.domain==="firebase.com"&&Ke(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ke("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Fd();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Tl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new V(t.pathString)}},Cp=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=Ip(n.substring(h,u)));const d=Ep(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tp=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=sa.charAt(t%64),t=Math.floor(t/64);v(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=sa.charAt(e[s]);return v(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class kp{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Dl(this._path)}get ref(){return new _t(this._repo,this._path)}get _queryIdentifier(){const e=$o(this._queryParams),t=qs(e);return t==="{}"?"default":t}get _queryObject(){return $o(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof Tr))return!1;const t=this._repo===e._repo,i=Js(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+wf(this._path)}}class _t extends Tr{constructor(e,t){super(e,t,new tr,!1)}get parent(){const e=Ll(this._path);return e===null?null:new _t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),i=Tn(this.ref,e);return new vi(this._node.getChild(t),i,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new vi(s,Tn(this.ref,i),Z)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ye(n,e){return n=we(n),n._checkNotDeleted("ref"),e!==void 0?Tn(n._root,e):n._root}function Tn(n,e){return n=we(n),x(n._path)===null?rp("child","path",e):pc("child","path",e),new _t(n._repo,ne(n._path,e))}function Tc(n,e){n=we(n),yr("push",n._path),_c("push",e,n._path,!0);const t=vc(n._repo),i=Tp(t),s=Tn(n,i),r=Tn(n,i);let o;return e!=null?o=Sr(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Sc(n){return yr("remove",n._path),Sr(n,null)}function Sr(n,e){n=we(n),yr("set",n._path),_c("set",e,n._path,!1);const t=new Ni;return _p(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class kr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Sp("value",this,new vi(e.snapshotNode,new _t(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new kp(this,e,t):null}matches(e){return e instanceof kr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Rp(n,e,t,i,s){const r=new Np(t,void 0),o=new kr(r);return mp(n._repo,n,o),()=>gp(n._repo,n,o)}function Dn(n,e,t,i){return Rp(n,"value",e)}P_(_t);F_(_t);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="FIREBASE_DATABASE_EMULATOR_HOST",xs={};let Pp=!1;function Op(n,e,t,i){n.repoInfo_=new Tl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function xp(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ke("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ia(r,s),a=o.repoInfo,l;typeof process<"u"&&Eo&&(l=Eo[Ap]),l?(r=`http://${l}?ns=${a.namespace}`,o=ia(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Kd(n.name,n.options,e);op("Invalid Firebase Database URL",o),M(o.path)||Ke("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Mp(a,n,c,new qd(n.name,t));return new Lp(h,n)}function Dp(n,e){const t=xs[e];(!t||t[n.key]!==n)&&Ke(`Database ${e}(${n.repoInfo_}) has already been deleted.`),vp(n),delete t[n.key]}function Mp(n,e,t,i){let s=xs[e.name];s||(s={},xs[e.name]=s);let r=s[n.toURLString()];return r&&Ke("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hp(n,Pp,t,i),s[n.toURLString()]=r,r}class Lp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _t(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ke("Cannot call "+e+" on a deleted database.")}}function Fp(n=Pi(),e){const t=Ai(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Xa("database");i&&Up(t,...i)}return t}function Up(n,e,t,i={}){n=we(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ke("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ke('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Kn(Kn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:tl(i.mockUserToken,n.app.options.projectId);r=new Kn(o)}Op(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){Pd(xt),kt(new ut("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xp(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),De(Co,To,n),De(Co,To,"esm2017")}qe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};qe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Wp();var Bp="firebase",$p="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Bp,$p,"app");function Nr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function kc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vp=kc,Nc=new Nn("auth","Firebase",kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new js("@firebase/auth");function Hp(n,...e){yi.logLevel<=$.WARN&&yi.warn(`Auth (${xt}): ${n}`,...e)}function Qn(n,...e){yi.logLevel<=$.ERROR&&yi.error(`Auth (${xt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,...e){throw Ar(n,...e)}function Pe(n,...e){return Ar(n,...e)}function Rr(n,e,t){const i=Object.assign(Object.assign({},Vp()),{[e]:t});return new Nn("auth","Firebase",i).create(e,{appName:n.name})}function Ct(n){return Rr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zp(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Le(n,"argument-error"),Rr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ar(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Nc.create(n,...e)}function S(n,e,...t){if(!n)throw Ar(e,...t)}function ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qn(e),new Error(e)}function Je(n,e){n||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jp(){return ra()==="http:"||ra()==="https:"}function ra(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||uh()||"connection"in navigator)?navigator.onLine:!0}function qp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=Hs()||nl()}get(){return Gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Mn(3e4,6e4);function Or(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tn(n,e,t,i,s={}){return Ac(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Jt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Rc.fetch()(Pc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ac(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Kp),e);try{const s=new Jp(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw jn(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rr(n,h,c);Le(n,h)}}catch(s){if(s instanceof Ze)throw s;Le(n,"network-request-failed",{message:String(s)})}}async function Yp(n,e,t,i,s={}){const r=await tn(n,e,t,i,s);return"mfaPendingCredential"in r&&Le(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Pc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Pr(n.config,s):`${n.config.apiScheme}://${s}`}class Jp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Pe(this.auth,"network-request-failed")),Qp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Pe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(n,e){return tn(n,"POST","/v1/accounts:delete",e)}async function Oc(n,e){return tn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zp(n,e=!1){const t=we(n),i=await t.getIdToken(e),s=xr(i);S(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_n(os(s.auth_time)),issuedAtTime:_n(os(s.iat)),expirationTime:_n(os(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function os(n){return Number(n)*1e3}function xr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ii(t);return s?JSON.parse(s):(Qn("Failed to decode base64 JWT payload"),null)}catch(s){return Qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oa(n){const e=xr(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ze&&em(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function em({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_n(this.lastLoginAt),this.creationTime=_n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Sn(n,Oc(t,{idToken:i}));S(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xc(r.providerUserInfo):[],a=im(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ms(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function nm(n){const e=we(n);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function im(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xc(n){return n.map(e=>{var{providerId:t}=e,i=Nr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e){const t=await Ac(n,{},async()=>{const i=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Pc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rm(n,e){return tn(n,"POST","/v2/accounts:revokeToken",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){S(e.length!==0,"internal-error");const t=oa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await sm(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Bt;return i&&(S(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(S(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(S(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Nr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ms(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zp(this,e)}reload(){return nm(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await Sn(this,Xp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,h;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:N,isAnonymous:B,providerData:K,stsTokenManager:fe}=t;S(R&&fe,e,"internal-error");const _e=Bt.fromJSON(this.name,fe);S(typeof R=="string",e,"internal-error"),nt(u,e.name),nt(d,e.name),S(typeof N=="boolean",e,"internal-error"),S(typeof B=="boolean",e,"internal-error"),nt(_,e.name),nt(g,e.name),nt(w,e.name),nt(y,e.name),nt(b,e.name),nt(I,e.name);const Ie=new je({uid:R,auth:e,email:d,emailVerified:N,displayName:u,isAnonymous:B,photoURL:g,phoneNumber:_,tenantId:w,stsTokenManager:_e,createdAt:b,lastLoginAt:I});return K&&Array.isArray(K)&&(Ie.providerData=K.map(oe=>Object.assign({},oe))),y&&(Ie._redirectEventId=y),Ie}static async _fromIdTokenResponse(e,t,i=!1){const s=new Bt;s.updateFromServerResponse(t);const r=new je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bi(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];S(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?xc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Bt;a.updateFromIdToken(i);const l=new je({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ms(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map;function Ge(n){Je(n instanceof Function,"Expected a class definition");let e=aa.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,aa.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Dc.type="NONE";const la=Dc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e,t){return`firebase:${n}:${e}:${t}`}class $t{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Yn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Yn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $t(Ge(la),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ge(la);const o=Yn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const u=je._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new $t(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new $t(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wc(e))return"Blackberry";if(Bc(e))return"Webos";if(Dr(e))return"Safari";if((e.includes("chrome/")||Lc(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Mc(n=ue()){return/firefox\//i.test(n)}function Dr(n=ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lc(n=ue()){return/crios\//i.test(n)}function Fc(n=ue()){return/iemobile/i.test(n)}function Uc(n=ue()){return/android/i.test(n)}function Wc(n=ue()){return/blackberry/i.test(n)}function Bc(n=ue()){return/webos/i.test(n)}function Bi(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function om(n=ue()){var e;return Bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function am(){return hh()&&document.documentMode===10}function $c(n=ue()){return Bi(n)||Uc(n)||Bc(n)||Wc(n)||/windows phone/i.test(n)||Fc(n)}function lm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e=[]){let t;switch(n){case"Browser":t=ca(ue());break;case"Worker":t=`${ca(ue())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(n,e={}){return tn(n,"GET","/v2/passwordPolicy",Or(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=6;class dm{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:hm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ua(this),this.idTokenSubscription=new ua(this),this.beforeStateQueue=new cm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oc(this,{idToken:e}),i=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Ct(this));const t=e?we(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await um(this),t=new dm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await rm(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Hp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $i(n){return we(n)}class ua{constructor(e){this.auth=e,this.observer=null,this.addObserver=bh(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _m(n){Mr=n}function pm(n){return Mr.loadJS(n)}function mm(){return Mr.gapiScript}function gm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){const t=Ai(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ri(r,e??{}))return s;Le(s,"already-initialized")}return t.initialize({options:e})}function ym(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bm(n,e,t){const i=$i(n);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Hc(e),{host:o,port:a}=wm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Im()}function Hc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wm(n){const e=Hc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ha(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ha(o)}}}function ha(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Im(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,t){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(n,e){return Yp(n,"POST","/v1/accounts:signInWithIdp",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="http://localhost";class Ot extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Nr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ot(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Vt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Vt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vt(e,t)}buildRequest(){const e={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ln{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ot._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Ln{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Ln{constructor(){super("twitter.com")}static credential(e,t){return Ot._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await je._fromIdTokenResponse(e,i,s),o=da(i);return new Qt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=da(i);return new Qt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function da(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Ze{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new wi(e,t,i,s)}}function jc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(n,r,e,i):r})}async function Cm(n,e,t=!1){const i=await Sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(n,e,t=!1){const{auth:i}=n;if(Ve(i.app))return Promise.reject(Ct(i));const s="reauthenticate";try{const r=await Sn(n,jc(i,s,e,n),t);S(r.idToken,i,"internal-error");const o=xr(r.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(n.uid===a,i,"user-mismatch"),Qt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Le(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ct(n));const i="signIn",s=await jc(n,i,e),r=await Qt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function km(n,e,t,i){return we(n).onIdTokenChanged(e,t,i)}function Nm(n,e,t){return we(n).beforeAuthStateChanged(e,t)}const Ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){const n=ue();return Dr(n)||Bi(n)}const Am=1e3,Pm=10;class qc extends Gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rm()&&lm(),this.fallbackToPolling=$c(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);am()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qc.type="LOCAL";const Om=qc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kc.type="SESSION";const Qc=Kc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Vi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await xm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fr("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function Mm(n){Me().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Um(){return Yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="firebaseLocalStorageDb",Wm=1,Ei="firebaseLocalStorage",Xc="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hi(n,e){return n.transaction([Ei],e?"readwrite":"readonly").objectStore(Ei)}function Bm(){const n=indexedDB.deleteDatabase(Jc);return new Fn(n).toPromise()}function Ls(){const n=indexedDB.open(Jc,Wm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ei,{keyPath:Xc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ei)?e(i):(i.close(),await Bm(),e(await Ls()))})})}async function fa(n,e,t){const i=Hi(n,!0).put({[Xc]:e,value:t});return new Fn(i).toPromise()}async function $m(n,e){const t=Hi(n,!1).get(e),i=await new Fn(t).toPromise();return i===void 0?null:i.value}function _a(n,e){const t=Hi(n,!0).delete(e);return new Fn(t).toPromise()}const Vm=800,Hm=3;class Zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ls(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Hm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lm(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ls();return await fa(e,Ii,"1"),await _a(e,Ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>fa(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>$m(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_a(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Hi(s,!1).getAll();return new Fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zc.type="LOCAL";const zm=Zc;new Mn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e){return e?Ge(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jm(n){return Sm(n.auth,new Ur(n),n.bypassAuthState)}function Gm(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),Tm(t,new Ur(n),n.bypassAuthState)}async function qm(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),Cm(t,new Ur(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jm;case"linkViaPopup":case"linkViaRedirect":return qm;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:Le(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Mn(2e3,1e4);async function Qm(n,e,t){if(Ve(n.app))return Promise.reject(Pe(n,"operation-not-supported-in-this-environment"));const i=$i(n);zp(n,e,Lr);const s=eu(i,t);return new It(i,"signInViaPopup",e,s).executeNotNull()}class It extends tu{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Fr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Km.get())};e()}}It.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="pendingRedirect",Jn=new Map;class Jm extends tu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Jn.get(this.auth._key());if(!e){try{const i=await Xm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Jn.set(this.auth._key(),e)}return this.bypassAuthState||Jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xm(n,e){const t=tg(e),i=eg(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Zm(n,e){Jn.set(n._key(),e)}function eg(n){return Ge(n._redirectPersistence)}function tg(n){return Yn(Ym,n.config.apiKey,n.name)}async function ng(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ct(n));const i=$i(n),s=eu(i,e),o=await new Jm(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=10*60*1e3;class sg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Pe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(pa(e))}saveEventToCache(e){this.cachedEventUids.add(pa(e)),this.lastProcessedEventTime=Date.now()}}function pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(n,e={}){return tn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lg=/^https?/;async function cg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await og(n);for(const t of e)try{if(ug(t))return}catch{}Le(n,"unauthorized-domain")}function ug(n){const e=Ds(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!lg.test(t))return!1;if(ag.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Mn(3e4,6e4);function ma(){const n=Me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dg(n){return new Promise((e,t)=>{var i,s,r;function o(){ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ma(),t(Pe(n,"network-request-failed"))},timeout:hg.get()})}if(!((s=(i=Me().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Me().gapi)===null||r===void 0)&&r.load)o();else{const a=gm("iframefcb");return Me()[a]=()=>{gapi.load?o():t(Pe(n,"network-request-failed"))},pm(`${mm()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function fg(n){return Xn=Xn||dg(n),Xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Mn(5e3,15e3),pg="__/auth/iframe",mg="emulator/auth/iframe",gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pr(e,mg):`https://${n.config.authDomain}/${pg}`,i={apiKey:e.apiKey,appName:n.name,v:xt},s=vg.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Jt(i).slice(1)}`}async function bg(n){const e=await fg(n),t=Me().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gg,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Pe(n,"network-request-failed"),a=Me().setTimeout(()=>{r(o)},_g.get());function l(){Me().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Eg=600,Cg="_blank",Tg="http://localhost";class ga{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sg(n,e,t,i=Ig,s=Eg){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ue().toLowerCase();t&&(a=Lc(c)?Cg:t),Mc(c)&&(e=e||Tg,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[_,g])=>`${d}${_}=${g},`,"");if(om(c)&&a!=="_self")return kg(e||"",a),new ga(null);const u=window.open(e||"",a,h);S(u,n,"popup-blocked");try{u.focus()}catch{}return new ga(u)}function kg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="__/auth/handler",Rg="emulator/auth/handler",Ag=encodeURIComponent("fac");async function va(n,e,t,i,s,r){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xt,eventId:s};if(e instanceof Lr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ms(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof Ln){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${Ag}=${encodeURIComponent(l)}`:"";return`${Pg(n)}?${Jt(a).slice(1)}${c}`}function Pg({config:n}){return n.emulator?Pr(n,Rg):`https://${n.authDomain}/${Ng}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="webStorageSupport";class Og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=ng,this._overrideRedirectResult=Zm}async _openPopup(e,t,i,s){var r;Je((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await va(e,t,i,Ds(),s);return Sg(e,o,Fr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await va(e,t,i,Ds(),s);return Mm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Je(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await bg(e),i=new sg(e);return t.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(as,{type:as},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[as];o!==void 0&&t(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $c()||Dr()||Bi()}}const xg=Og;var ya="@firebase/auth",ba="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lg(n){kt(new ut("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vc(n)},c=new fm(i,s,r,l);return ym(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),kt(new ut("auth-internal",e=>{const t=$i(e.getProvider("auth").getImmediate());return(i=>new Dg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(ya,ba,Mg(n)),De(ya,ba,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=5*60,Ug=el("authIdTokenMaxAge")||Fg;let wa=null;const Wg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ug)return;const s=t==null?void 0:t.token;wa!==s&&(wa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bg(n=Pi()){const e=Ai(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vm(n,{popupRedirectResolver:xg,persistence:[zm,Om,Qc]}),i=el("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Wg(r.toString());Nm(t,o,()=>o(t.currentUser)),km(t,a=>o(a))}}const s=Ja("auth");return s&&bm(t,`http://${s}`),t}function $g(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_m({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Pe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",$g().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lg("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="firebasestorage.googleapis.com",Vg="storageBucket",Hg=2*60*1e3,zg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ze{constructor(e,t,i=0){super(ls(e),`Firebase Storage: ${t} (${ls(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ls(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function ls(n){return"storage/"+n}function jg(){const n="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,n)}function Gg(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qg(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function Kg(n){return new Ue(Fe.INVALID_URL,"Invalid URL '"+n+"'.")}function Qg(n){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ia(n){return new Ue(Fe.INVALID_ARGUMENT,n)}function su(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function Yg(n){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Re.makeFromUrl(e,t)}catch{return new Re(e,"")}if(i.path==="")return i;throw Qg(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${u}/${h}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},w=t===iu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",b=new RegExp(`^https?://${w}/${s}/${y}`,"i"),R=[{regex:a,indices:l,postModify:r},{regex:_,indices:g,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<R.length;N++){const B=R[N],K=B.regex.exec(e);if(K){const fe=K[B.indices.bucket];let _e=K[B.indices.path];_e||(_e=""),i=new Re(fe,_e),B.postModify(i);break}}if(i==null)throw Kg(e);return i}}class Jg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...y){c||(c=!0,e.apply(null,y))}function u(y){s=setTimeout(()=>{s=null,n(_,l())},y)}function d(){r&&clearTimeout(r)}function _(y,...b){if(c){d();return}if(y){d(),h.call(null,y,...b);return}if(l()||o){d(),h.call(null,y,...b);return}i<64&&(i*=2);let R;a===1?(a=2,R=0):R=(i+Math.random())*1e3,u(R)}let g=!1;function w(y){g||(g=!0,d(),!c&&(s!==null?(y||(a=2),clearTimeout(s),u(0)):y||(a=1)))}return u(0),r=setTimeout(()=>{o=!0,w(!0)},t),w}function Zg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){return n!==void 0}function Ea(n,e,t,i){if(i<e)throw Ia(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Ia(`Invalid value for '${n}'. Expected ${t} or less.`)}function tv(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ci;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ci||(Ci={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,i,s,r,o,a,l,c,h,u,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,g)=>{this.resolve_=_,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Gn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ci.NO_ERROR,l=r.getStatus();if(!a||nv(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Ci.ABORT;i(!1,new Gn(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Gn(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ev(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=jg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?su():qg();o(l)}else{const l=Gg();o(l)}};this.canceled_?t(!1,new Gn(!1,null,!0)):this.backoffId_=Xg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Zg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gn{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function sv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ov(n,e){e&&(n["X-Firebase-GMPID"]=e)}function av(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function lv(n,e,t,i,s,r,o=!0){const a=tv(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return ov(c,e),sv(c,t),rv(c,r),av(c,i),new iv(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function uv(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this._service=e,t instanceof Re?this._location=t:this._location=Re.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ti(e,t)}get root(){const e=new Re(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uv(this._location.path)}get storage(){return this._service}get parent(){const e=cv(this._location.path);if(e===null)return null;const t=new Re(this._location.bucket,e);return new Ti(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Yg(e)}}function Ca(n,e){const t=e==null?void 0:e[Vg];return t==null?null:Re.makeFromBucketSpec(t,n)}function hv(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:tl(s,n.app.options.projectId))}class dv{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=iu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hg,this._maxUploadRetryTime=zg,this._requests=new Set,s!=null?this._bucket=Re.makeFromBucketSpec(s,this._host):this._bucket=Ca(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Re.makeFromBucketSpec(this._url,e):this._bucket=Ca(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ea("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ea("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new Jg(su());{const o=lv(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Ta="@firebase/storage",Sa="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="storage";function fv(n=Pi(),e){n=we(n);const i=Ai(n,ru).getImmediate({identifier:e}),s=Xa("storage");return s&&_v(i,...s),i}function _v(n,e,t,i={}){hv(n,e,t,i)}function pv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new dv(t,i,s,e,xt)}function mv(){kt(new ut(ru,pv,"PUBLIC").setMultipleInstances(!0)),De(Ta,Sa,""),De(Ta,Sa,"esm2017")}mv();const gv={apiKey:"AIzaSyAU319sPwWFhYBlcXkVgEjBbfFU122H1MY",authDomain:"online-quiz-11669.firebaseapp.com",databaseURL:"https://online-quiz-11669-default-rtdb.firebaseio.com",projectId:"online-quiz-11669",storageBucket:"online-quiz-11669.appspot.com",messagingSenderId:"118557079543",appId:"1:118557079543:web:9276249b389978131520f2",measurementId:"G-YKDLZZ6S2Z"},Wr=wd().length?Pi():al(gv),Xe=Fp(Wr),ou=Bg(Wr);fv(Wr);const vv=({quizzes:n})=>{const[e,t]=Q(!1),[i,s]=Q({}),{state:r}=ft();de(()=>{const c=localStorage.getItem("mode");t(c==="dark")},[]);const o=()=>{window.LOGEDIN?te("/welcome"):te("/")},a=c=>{te(`/quiz/${c}`)},l=()=>{try{const c=Ye(Xe,"results");Dn(c,h=>{const u=h.val();if(u){const d={};Object.keys(u).forEach(_=>{const g=u[_],w=g.user,y=g.quizId,b=g.score||0;w===r.GlobalVarUserEmail&&(!d[y]||b>d[y])&&(d[y]=b)}),s(d)}})}catch(c){console.error("Fetch high scores failed:",c)}};return de(()=>{l()},[]),m("div",{className:`flex flex-col items-center justify-center ${e?"dark-mode":""}`,children:[m("h2",{className:"text-5xl mb-5 shimmer",children:"Select a Quiz to Play"}),m("div",{className:"space-y-4",children:n.length>0?n.map(c=>m("div",{className:`bg-white/[0.2] p-4 rounded shadow-2xl mb-4 text-center ${e?"bg-gray-800 text-white":"bg-white text-black"}`,children:[m("h3",{className:"text-2xl font-bold mb-2",children:c.title}),m("p",{className:"text-gray-700 mb-4",children:c.description}),c.image&&m("img",{src:c.image,alt:`${c.title} image`,className:"w-full h-64 object-cover mb-4"}),m("p",{className:"text-lg font-bold",children:["High Score: ",i[c.id]!==void 0?i[c.id]:"N/A"]}),m("button",{onClick:()=>a(c.id),className:`font-bold py-2 px-4 rounded-lg shadow-xl transition duration-500 ${e?"bg-green-600 hover:bg-green-800 text-white":"bg-green-500 hover:bg-green-700 text-white"}`,children:"Play Quiz"})]},c.id)):m("p",{className:"text-gray-700",children:"No quizzes available."})}),m("button",{onClick:o,className:`font-bold py-4 px-8 rounded-lg shadow-lg mt-8 ${e?"bg-red-600 hover:bg-red-800 text-white":"bg-red-500 hover:bg-red-700 text-white"}`,children:"Back"})]})},au=({quizId:n,quizzes:e,setQuizzes:t})=>{const[i,s]=Q(""),[r,o]=Q(""),[a,l]=Q([]),[c,h]=Q({visible:!1,title:"",message:"",type:""}),{state:u}=ft();de(()=>{u.GlobalVarIsLoggedIn||te("/")},[u.GlobalVarIsLoggedIn]),de(()=>{e&&(s(e.title||""),o(e.description||""),l((e.questions||[]).map(b=>({text:b.text,options:b.options,correctOptionIndex:b.correctOption}))),document.getElementById("titleQuizForm").style="hidden")},[e]);const d=()=>{h({visible:!0,message:"You have unsaved changes. Are you sure you want to go back?",type:"confirm"})},_=()=>{l([...a,{text:"",answer:"",options:["","","",""],correctOptionIndex:null}])},g=b=>{const I=a.filter((R,N)=>N!==b);l(I)},w=async b=>{if(b.preventDefault(),!i||!r||a.length===0){h({title:"Empty cells",visible:!0,message:"Please provide a title, description, and at least one question before saving the quiz.",type:"error"});return}const I={title:i,description:r,questions:a.map(R=>({text:R.text,options:R.options,correctOption:R.correctOptionIndex}))};try{if(e.id){const B=Ye(Xe,`quizzes/${e.id}`);await Sc(B)}const R=Ye(Xe,"quizzes"),N=Tc(R);await Sr(N,I),t(B=>{const K=Array.isArray(B)?B:[];return e.id?K.map(fe=>fe.id===e.id?{...I,id:N.key}:fe):[...K,{...I,id:N.key}]}),h({title:"Success",visible:!0,message:"Quiz saved successfully!",type:"success"})}catch(R){h({title:"Fail",visible:!0,message:"Failed to save quiz. Please try again.",type:"error"}),console.error("Save quiz failed:",R)}},y=()=>{(c.type==="confirm"||c.type==="success")&&te("/welcome"),h({visible:!1,message:"",type:""})};return m("div",{className:"flex flex-col items-center justify-center text-center mb-20",children:[m("h2",{id:"titleQuizForm",className:"text-5xl mb-5 shimmer",children:"Create a New Quiz"}),m("form",{onSubmit:w,className:"flex flex-col items-center w-full",children:[m("div",{className:"mb-4 w-1/2",children:[m("label",{className:"block text-center font-bold mb-4",htmlFor:"quiz-title",children:"Quiz Title"}),m("input",{className:"shadow appearance-none border border-black rounded w-full py-4 h-10 px-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-200 text-black",id:"quiz-title",type:"text",placeholder:"Enter quiz title",value:i,onChange:b=>s(b.target.value)})]}),m("div",{className:"mb-4 w-1/2",children:[m("label",{className:"block text-center font-bold mb-4",htmlFor:"quiz-description",children:"Quiz Description"}),m("textarea",{className:"bg-blue-200 text-black shadow appearance-none border border-black rounded w-full py-4 h-20 px-3 leading-tight focus:outline-none focus:shadow-outline",id:"quiz-description",placeholder:"Enter quiz description",value:r,onChange:b=>o(b.target.value)})]}),m("div",{id:"questions-list",className:"mb-4 w-1/2",children:a.map((b,I)=>m("div",{className:"mb-4 bg-blue-200 p-4 border border-black rounded shadow",children:[m("label",{onClick:()=>g(I),className:"block text-right text-red-500 hover:text-red-700 font-bold mb-2 ml-2",children:"Cancel"}),m("label",{className:"block text-gray-700 text-center font-bold mb-2",children:["Question ",I+1]}),m("input",{className:"shadow appearance-none border border-black rounded w-full py-4 h-12 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Enter question",value:b.text,onChange:R=>{const N=[...a];N[I].text=R.target.value,l(N)}}),m("label",{className:"block text-gray-700 text-center font-bold mb-2",children:"Options"}),m("p",{className:"text-gray-600 text-center mb-2",children:"Enter the possible answers and select the correct one using the radio buttons."}),b.options.map((R,N)=>m("div",{className:"flex items-center mb-2",children:[m("input",{type:"radio",name:`correctOption-${I}`,checked:b.correctOptionIndex===N,onChange:()=>{const B=[...a];B[I].correctOptionIndex=N,B[I].answer=B[I].options[N],l(B)}}),m("input",{className:"ml-2 shadow appearance-none border border-black rounded w-full py-4 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:`Enter option ${N+1}`,value:R,onChange:B=>{const K=[...a];K[I].options[N]=B.target.value,l(K)}})]},N))]},I))}),m("div",{className:"mb-2 flex flex-col items-center",children:[m("button",{type:"button",onClick:_,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg mb-4 transition duration-500",children:"Add Question"}),m("button",{type:"submit",className:"bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg mb-4 transition duration-500",children:"Save Quiz"}),m("button",{type:"button",onClick:d,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg",children:"Back"})]})]}),c.visible&&m("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:m("div",{className:"bg-white p-6 rounded-lg text-black shadow-lg",children:[m("h2",{className:"text-xl font-bold mb-4",children:c.type==="confirm"?"Are you sure?":c.title}),m("p",{className:"mb-4",children:c.message}),m("div",{className:"flex justify-between",children:c.type==="confirm"?m(ct,{children:[m("button",{onClick:()=>h({visible:!1,message:"",type:""}),className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",children:"Cancel"}),m("button",{onClick:y,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Yes, Go Back"})]}):m("div",{className:"flex justify-center w-full",children:m("button",{onClick:y,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full",children:"OK"})})})]})})]})};var Un={};(function n(e,t,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;var p=new OffscreenCanvas(1,1),f=p.getContext("2d");f.fillRect(0,0,1,1);var E=p.transferToImageBitmap();try{f.createPattern(E,"no-repeat")}catch{return!1}return!0}();function l(){}function c(p){var f=t.exports.Promise,E=f!==void 0?f:e.Promise;return typeof E=="function"?new E(p):(p(l,l),null)}var h=function(p,f){return{transform:function(E){if(p)return E;if(f.has(E))return f.get(E);var k=new OffscreenCanvas(E.width,E.height),A=k.getContext("2d");return A.drawImage(E,0,0),f.set(E,k),k},clear:function(){f.clear()}}}(a,new Map),u=function(){var p=Math.floor(16.666666666666668),f,E,k={},A=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(f=function(O){var L=Math.random();return k[L]=requestAnimationFrame(function T(F){A===F||A+p-1<F?(A=F,delete k[L],O()):k[L]=requestAnimationFrame(T)}),L},E=function(O){k[O]&&cancelAnimationFrame(k[O])}):(f=function(O){return setTimeout(O,p)},E=function(O){return clearTimeout(O)}),{frame:f,cancel:E}}(),d=function(){var p,f,E={};function k(A){function O(L,T){A.postMessage({options:L||{},callback:T})}A.init=function(T){var F=T.transferControlToOffscreen();A.postMessage({canvas:F},[F])},A.fire=function(T,F,H){if(f)return O(T,null),f;var J=Math.random().toString(36).slice(2);return f=c(function(G){function X(ae){ae.data.callback===J&&(delete E[J],A.removeEventListener("message",X),f=null,h.clear(),H(),G())}A.addEventListener("message",X),O(T,J),E[J]=X.bind(null,{data:{callback:J}})}),f},A.reset=function(){A.postMessage({reset:!0});for(var T in E)E[T](),delete E[T]}}return function(){if(p)return p;if(!i&&r){var A=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{p=new Worker(URL.createObjectURL(new Blob([A])))}catch(O){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",O),null}k(p)}return p}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(p,f){return f?f(p):p}function w(p){return p!=null}function y(p,f,E){return g(p&&w(p[f])?p[f]:_[f],E)}function b(p){return p<0?0:Math.floor(p)}function I(p,f){return Math.floor(Math.random()*(f-p))+p}function R(p){return parseInt(p,16)}function N(p){return p.map(B)}function B(p){var f=String(p).replace(/[^0-9a-f]/gi,"");return f.length<6&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),{r:R(f.substring(0,2)),g:R(f.substring(2,4)),b:R(f.substring(4,6))}}function K(p){var f=y(p,"origin",Object);return f.x=y(f,"x",Number),f.y=y(f,"y",Number),f}function fe(p){p.width=document.documentElement.clientWidth,p.height=document.documentElement.clientHeight}function _e(p){var f=p.getBoundingClientRect();p.width=f.width,p.height=f.height}function Ie(p){var f=document.createElement("canvas");return f.style.position="fixed",f.style.top="0px",f.style.left="0px",f.style.pointerEvents="none",f.style.zIndex=p,f}function oe(p,f,E,k,A,O,L,T,F){p.save(),p.translate(f,E),p.rotate(O),p.scale(k,A),p.arc(0,0,1,L,T,F),p.restore()}function j(p){var f=p.angle*(Math.PI/180),E=p.spread*(Math.PI/180);return{x:p.x,y:p.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:p.startVelocity*.5+Math.random()*p.startVelocity,angle2D:-f+(.5*E-Math.random()*E),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:p.color,shape:p.shape,tick:0,totalTicks:p.ticks,decay:p.decay,drift:p.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:p.gravity*3,ovalScalar:.6,scalar:p.scalar,flat:p.flat}}function he(p,f){f.x+=Math.cos(f.angle2D)*f.velocity+f.drift,f.y+=Math.sin(f.angle2D)*f.velocity+f.gravity,f.velocity*=f.decay,f.flat?(f.wobble=0,f.wobbleX=f.x+10*f.scalar,f.wobbleY=f.y+10*f.scalar,f.tiltSin=0,f.tiltCos=0,f.random=1):(f.wobble+=f.wobbleSpeed,f.wobbleX=f.x+10*f.scalar*Math.cos(f.wobble),f.wobbleY=f.y+10*f.scalar*Math.sin(f.wobble),f.tiltAngle+=.1,f.tiltSin=Math.sin(f.tiltAngle),f.tiltCos=Math.cos(f.tiltAngle),f.random=Math.random()+2);var E=f.tick++/f.totalTicks,k=f.x+f.random*f.tiltCos,A=f.y+f.random*f.tiltSin,O=f.wobbleX+f.random*f.tiltCos,L=f.wobbleY+f.random*f.tiltSin;if(p.fillStyle="rgba("+f.color.r+", "+f.color.g+", "+f.color.b+", "+(1-E)+")",p.beginPath(),o&&f.shape.type==="path"&&typeof f.shape.path=="string"&&Array.isArray(f.shape.matrix))p.fill(pt(f.shape.path,f.shape.matrix,f.x,f.y,Math.abs(O-k)*.1,Math.abs(L-A)*.1,Math.PI/10*f.wobble));else if(f.shape.type==="bitmap"){var T=Math.PI/10*f.wobble,F=Math.abs(O-k)*.1,H=Math.abs(L-A)*.1,J=f.shape.bitmap.width*f.scalar,G=f.shape.bitmap.height*f.scalar,X=new DOMMatrix([Math.cos(T)*F,Math.sin(T)*F,-Math.sin(T)*H,Math.cos(T)*H,f.x,f.y]);X.multiplySelf(new DOMMatrix(f.shape.matrix));var ae=p.createPattern(h.transform(f.shape.bitmap),"no-repeat");ae.setTransform(X),p.globalAlpha=1-E,p.fillStyle=ae,p.fillRect(f.x-J/2,f.y-G/2,J,G),p.globalAlpha=1}else if(f.shape==="circle")p.ellipse?p.ellipse(f.x,f.y,Math.abs(O-k)*f.ovalScalar,Math.abs(L-A)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI):oe(p,f.x,f.y,Math.abs(O-k)*f.ovalScalar,Math.abs(L-A)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI);else if(f.shape==="star")for(var U=Math.PI/2*3,pe=4*f.scalar,Ce=8*f.scalar,Te=f.x,We=f.y,mt=5,Oe=Math.PI/mt;mt--;)Te=f.x+Math.cos(U)*Ce,We=f.y+Math.sin(U)*Ce,p.lineTo(Te,We),U+=Oe,Te=f.x+Math.cos(U)*pe,We=f.y+Math.sin(U)*pe,p.lineTo(Te,We),U+=Oe;else p.moveTo(Math.floor(f.x),Math.floor(f.y)),p.lineTo(Math.floor(f.wobbleX),Math.floor(A)),p.lineTo(Math.floor(O),Math.floor(L)),p.lineTo(Math.floor(k),Math.floor(f.wobbleY));return p.closePath(),p.fill(),f.tick<f.totalTicks}function tt(p,f,E,k,A){var O=f.slice(),L=p.getContext("2d"),T,F,H=c(function(J){function G(){T=F=null,L.clearRect(0,0,k.width,k.height),h.clear(),A(),J()}function X(){i&&!(k.width===s.width&&k.height===s.height)&&(k.width=p.width=s.width,k.height=p.height=s.height),!k.width&&!k.height&&(E(p),k.width=p.width,k.height=p.height),L.clearRect(0,0,k.width,k.height),O=O.filter(function(ae){return he(L,ae)}),O.length?T=u.frame(X):G()}T=u.frame(X),F=G});return{addFettis:function(J){return O=O.concat(J),H},canvas:p,promise:H,reset:function(){T&&u.cancel(T),F&&F()}}}function Wn(p,f){var E=!p,k=!!y(f||{},"resize"),A=!1,O=y(f,"disableForReducedMotion",Boolean),L=r&&!!y(f||{},"useWorker"),T=L?d():null,F=E?fe:_e,H=p&&T?!!p.__confetti_initialized:!1,J=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,G;function X(U,pe,Ce){for(var Te=y(U,"particleCount",b),We=y(U,"angle",Number),mt=y(U,"spread",Number),Oe=y(U,"startVelocity",Number),cu=y(U,"decay",Number),uu=y(U,"gravity",Number),hu=y(U,"drift",Number),Br=y(U,"colors",N),du=y(U,"ticks",Number),$r=y(U,"shapes"),fu=y(U,"scalar"),_u=!!y(U,"flat"),Vr=K(U),Hr=Te,ji=[],pu=p.width*Vr.x,mu=p.height*Vr.y;Hr--;)ji.push(j({x:pu,y:mu,angle:We,spread:mt,startVelocity:Oe,color:Br[Hr%Br.length],shape:$r[I(0,$r.length)],ticks:du,decay:cu,gravity:uu,drift:hu,scalar:fu,flat:_u}));return G?G.addFettis(ji):(G=tt(p,ji,F,pe,Ce),G.promise)}function ae(U){var pe=O||y(U,"disableForReducedMotion",Boolean),Ce=y(U,"zIndex",Number);if(pe&&J)return c(function(Oe){Oe()});E&&G?p=G.canvas:E&&!p&&(p=Ie(Ce),document.body.appendChild(p)),k&&!H&&F(p);var Te={width:p.width,height:p.height};T&&!H&&T.init(p),H=!0,T&&(p.__confetti_initialized=!0);function We(){if(T){var Oe={getBoundingClientRect:function(){if(!E)return p.getBoundingClientRect()}};F(Oe),T.postMessage({resize:{width:Oe.width,height:Oe.height}});return}Te.width=Te.height=null}function mt(){G=null,k&&(A=!1,e.removeEventListener("resize",We)),E&&p&&(document.body.contains(p)&&document.body.removeChild(p),p=null,H=!1)}return k&&!A&&(A=!0,e.addEventListener("resize",We,!1)),T?T.fire(U,Te,mt):X(U,Te,mt)}return ae.reset=function(){T&&T.reset(),G&&G.reset()},ae}var nn;function Ee(){return nn||(nn=Wn(null,{useWorker:!0,resize:!0})),nn}function pt(p,f,E,k,A,O,L){var T=new Path2D(p),F=new Path2D;F.addPath(T,new DOMMatrix(f));var H=new Path2D;return H.addPath(F,new DOMMatrix([Math.cos(L)*A,Math.sin(L)*A,-Math.sin(L)*O,Math.cos(L)*O,E,k])),H}function zi(p){if(!o)throw new Error("path confetti are not supported in this browser");var f,E;typeof p=="string"?f=p:(f=p.path,E=p.matrix);var k=new Path2D(f),A=document.createElement("canvas"),O=A.getContext("2d");if(!E){for(var L=1e3,T=L,F=L,H=0,J=0,G,X,ae=0;ae<L;ae+=2)for(var U=0;U<L;U+=2)O.isPointInPath(k,ae,U,"nonzero")&&(T=Math.min(T,ae),F=Math.min(F,U),H=Math.max(H,ae),J=Math.max(J,U));G=H-T,X=J-F;var pe=10,Ce=Math.min(pe/G,pe/X);E=[Ce,0,0,Ce,-Math.round(G/2+T)*Ce,-Math.round(X/2+F)*Ce]}return{type:"path",path:f,matrix:E}}function lu(p){var f,E=1,k="#000000",A='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof p=="string"?f=p:(f=p.text,E="scalar"in p?p.scalar:E,A="fontFamily"in p?p.fontFamily:A,k="color"in p?p.color:k);var O=10*E,L=""+O+"px "+A,T=new OffscreenCanvas(O,O),F=T.getContext("2d");F.font=L;var H=F.measureText(f),J=Math.ceil(H.actualBoundingBoxRight+H.actualBoundingBoxLeft),G=Math.ceil(H.actualBoundingBoxAscent+H.actualBoundingBoxDescent),X=2,ae=H.actualBoundingBoxLeft+X,U=H.actualBoundingBoxAscent+X;J+=X+X,G+=X+X,T=new OffscreenCanvas(J,G),F=T.getContext("2d"),F.font=L,F.fillStyle=k,F.fillText(f,ae,U);var pe=1/E;return{type:"bitmap",bitmap:T.transferToImageBitmap(),matrix:[pe,0,0,pe,-J*pe/2,-G*pe/2]}}t.exports=function(){return Ee().apply(this,arguments)},t.exports.reset=function(){Ee().reset()},t.exports.create=Wn,t.exports.shapeFromPath=zi,t.exports.shapeFromText=lu})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Un,!1);const yv=Un.exports;Un.exports.create;const bv=({quizId:n})=>{var Ie,oe;const[e,t]=Q(null),[i,s]=Q(0),[r,o]=Q(null),[a,l]=Q(60),[c,h]=Q([]),{state:u}=ft(),d=u.GlobalVarUserEmail,[_,g]=Q(!1),[w,y]=Q(0),[b,I]=Q([]),[R,N]=Q(!1);de(()=>{const j=Ye(Xe,`quizzes/${n}`);Dn(j,he=>{const tt=he.val();tt&&t(tt)})},[n]),de(()=>{if(a<=0)B();else{const j=setInterval(()=>{l(he=>he-1)},1e3);return()=>clearInterval(j)}},[a]);const B=()=>{const j=[...c,r];if(h(j),i<((e==null?void 0:e.questions.length)||0)-1)s(i+1),o(null),l(60);else{const he=e.questions.map(Ee=>Ee.correctOption),tt=j.reduce((Ee,pt,zi)=>pt===he[zi]?Ee+1:Ee,0),Wn=e.questions.map((Ee,pt)=>({question:Ee.text,correctAnswer:Ee.options[Ee.correctOption],userAnswer:Ee.options[j[pt]],isCorrect:j[pt]===he[pt]}));y(tt),I(Wn),g(!0),tt===e.questions.length&&yv({particleCount:500,spread:180,origin:{y:.6}});const nn=Ye(Xe,"results");Tc(nn,{user:d,quizId:n,score:tt,answers:j,timestamp:Date.now()})}},K=j=>{o(j)},fe=()=>{te("/main")},_e=()=>{g(!1),te("/main")};return e?m("div",{className:"flex flex-col items-center justify-center h-screen",children:[m("h2",{className:"text-3xl mb-5 shimmer",children:e.title}),m("p",{className:"mb-4",children:e.description}),m("div",{className:"mb-4",children:[m("h3",{className:"text-xl mb-2 font-bold",children:["Question ",i+1]}),m("p",{className:"mb-3",children:(Ie=e.questions[i])==null?void 0:Ie.text}),m("ul",{className:"grid grid-cols-2 gap-4 mt-4",children:(oe=e.questions[i])==null?void 0:oe.options.map((j,he)=>m("li",{className:`p-6 cursor-pointer rounded-lg border-2 transition duration-300
                ${r===he?"bg-green-500 text-white border-black":r===null&&he===r?"bg-blue-200 text-black border-black":"bg-blue-300 text-black border-black hover:bg-blue-500 hover:text-white"}`,onClick:()=>K(he),children:j},he))})]}),m("div",{className:"mb-4",children:m("p",{children:["Time left: ",a," seconds"]})}),m("button",{onClick:B,className:"bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition duration-500",disabled:r===null,children:"Next Question"}),m("button",{onClick:fe,className:"mt-5 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition duration-500",children:"Back"}),_&&m("div",{className:"fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50",children:m("div",{className:"bg-blue-50 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto",children:[m("h3",{className:"text-2xl font-bold text-center mb-4 text-black",children:"Results"}),m("div",{className:"overflow-x-auto",children:m("table",{className:"min-w-full bg-blue-50 border border-black",children:[m("thead",{children:m("tr",{children:[m("th",{className:"py-2 border border-black text-center font-bold text-black",children:"Question"}),m("th",{className:"py-2 border border-black text-center font-bold text-black",children:"Correct Answer"}),m("th",{className:"py-2 border border-black text-center font-bold text-black",children:"Your Answer"})]})}),m("tbody",{children:b.map((j,he)=>m("tr",{className:"border-b",children:[m("td",{className:"py-4 border text-left border-black text-black",children:j.question}),m("td",{className:"py-4 border border-black text-black",children:j.correctAnswer}),m("td",{className:`py-4 border border-black font-bold text-black ${j.isCorrect?"text-green-500":"text-red-500"}`,children:[j.userAnswer," "]})]},he))})]})}),m("div",{className:"mt-4",children:[m("p",{className:"text-lg font-bold text-black",children:["Your Score: ",w,"/",e.questions.length]}),m("button",{onClick:_e,className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ${R?"text-gray-200":"text-gray-800"}`,children:"Thank You!"})]})]})})]}):m("p",{children:"Loading quiz..."})},wv=({quizId:n})=>{const{state:e}=ft(),[t,i]=Q(null);return de(()=>{e.GlobalVarIsLoggedIn||te("/")},[e.GlobalVarIsLoggedIn]),de(()=>{(()=>{const r=Ye(Xe,`quizzes/${n}`);Dn(r,o=>{const a=o.val();a&&i({...a,id:n})})})()},[n]),t?m("div",{children:[m("h2",{children:"Edit Quiz"}),m(au,{quizId:n,quizzes:t,setQuizzes:i})]}):m("div",{children:"Loading..."})},Iv=new Be,Ev=()=>Qm(ou,Iv).then(n=>(console.clear(),n.user)).catch(n=>{throw console.error(n),n}),Cv=({profilePhoto:n})=>{const{state:e,setState:t}=ft();return de(()=>{e.GlobalVarIsLoggedIn&&te("/welcome")},[e.GlobalVarIsLoggedIn]),m("div",{className:"",children:m("div",{className:"flex flex-col items-center justify-center text-center",children:[m("h1",{className:"text-5xl mb-8 shimmer",children:"Login or Sign Up with Google"})," ",m("div",{className:"flex flex-col items-center mb-6",children:m("button",{onClick:()=>{te("/main")},className:"bg-green-400 hover:bg-green-500 text-white font-bold py-6 px-10 rounded-2xl shadow-lg mb-6 transition duration-500",children:"Play Quizzes"})}),m("button",{onClick:async()=>{try{const r=await Ev();window.LOGEDIN=!0,t(o=>({...o,GlobalVarIsLoggedIn:!0,GlobalVarUserEmail:r.email,GlobalVarprofilePhotoUrl:r.photoURL})),te("/welcome")}catch(r){console.error("Sign-in failed",r)}},className:"bg-blue-600 hover:bg-blue-800 text-white font-bold py-6 px-9 rounded-2xl transition duration-500",children:"Sign in with Google"})]})})},Tv=()=>{const[n,e]=Q([]),{state:t}=ft(),[i,s]=Q({visible:!1,message:"",type:""});de(()=>{t.GlobalVarIsLoggedIn||te("/")},[t.GlobalVarIsLoggedIn]),de(()=>{(()=>{const h=Ye(Xe,"quizzes");Dn(h,u=>{const d=u.val();e(d?Object.keys(d).map(_=>({...d[_],id:_})):[])})})()},[]);const r=()=>{te("/welcome")},o=async c=>{s({visible:!0,message:"Are you sure you want to delete this quiz?",type:"confirm",quizId:c})},a=async()=>{const c=i.quizId;try{const h=Ye(Xe,`quizzes/${c}`);await Sc(h),e(n.filter(u=>u.id!==c)),s({visible:!1,message:"",type:""})}catch(h){console.error("Failed to delete quiz:",h),s({visible:!0,message:"Failed to delete quiz. Please try again.",type:"error"})}},l=c=>{te(`/change-quiz/${c}`)};return m("div",{className:"flex flex-col items-center justify-center",children:[m("h2",{className:"text-5xl mb-5 shimmer",children:"Edit Quizzes"}),n.length>0?m("div",{className:"w-full max-w-lg mx-auto",children:n.map(c=>m("div",{className:"bg-white/[0.2] p-4 rounded shadow-2xl mb-4",children:[m("h3",{className:"text-xl font-bold mb-2",children:c.title}),m("p",{className:"mb-2",children:c.description}),m("button",{onClick:()=>l(c.id),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-2 transition duration-500 mr-2",children:"Edit"}),m("button",{onClick:()=>o(c.id),className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-2 transition duration-500",children:"Delete"})]},c.id))}):m("p",{children:"No quizzes available."}),m("button",{onClick:r,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4",children:"Back"}),i.visible&&m("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:m("div",{className:"bg-white p-6 rounded-lg text-black shadow-lg",children:[m("h2",{className:"text-xl font-bold mb-4",children:i.type==="confirm"?"Confirmation":"Error"}),m("p",{className:"mb-4",children:i.message}),m("div",{className:"flex justify-between",children:i.type==="confirm"?m(ct,{children:[m("button",{onClick:()=>s({visible:!1,message:"",type:""}),className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",children:"Cancel"}),m("button",{onClick:a,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Yes, Delete"})]}):m("div",{className:"flex justify-center w-full",children:m("button",{onClick:()=>s({visible:!1,message:"",type:""}),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full",children:"OK"})})})]})})]})},Sv=()=>m("footer",{className:"footer",children:m("div",{className:"footer-content",children:["© ",new Date().getFullYear()," Ort Braude. All rights reserved.",m("p",{})]})}),kv=({darkMode:n,toggleDarkMode:e,profilePhoto:t,UserEmail:i})=>(Q(""),m("header",{className:"header",children:m("div",{className:"header-content flex justify-between items-center w-full",children:[m("div",{className:"flex items-center",children:[t&&m("img",{src:t,alt:"Profile",className:"rounded-full w-10 h-10 mr-2"}),m("span",{id:"WelcomeSpan",className:"text-xl font-bold",children:["Welcome, ",i]})]}),m("button",{className:"dark-mode-toggle rounded-xl",onClick:e,children:n?"Light Mode":"Dark Mode"})]})})),Nv=()=>{const[n,e]=Q([]),[t,i]=Q(!1);Q("");const{state:s}=ft();de(()=>{(()=>{try{const c=Ye(Xe,"quizzes");Dn(c,h=>{const u=h.val();u&&e(Object.keys(u).map(d=>({...u[d],id:d})))})}catch(c){console.error("Fetch quizzes failed:",c)}})()},[]);const r=()=>{i(l=>!l),document.body.classList.toggle("dark-mode",!t)},o=()=>{window.location.reload()};return m("div",{className:`App ${t?"dark-mode":""}`,children:[m(kv,{darkMode:t,toggleDarkMode:r,onLogout:()=>{ou.signOut().then(()=>{window.location.reload()})},profilePhoto:s.GlobalVarprofilePhotoUrl,UserEmail:s.GlobalVarUserEmail}),m(Va,{children:[m(Cv,{path:"/",onLogin:o}),m(Tv,{path:"/edit"}),m(au,{path:"/create",quizzes:n,setQuizzes:e}),m(th,{path:"/welcome"}),m(vv,{path:"/main",quizzes:n}),m(bv,{path:"/quiz/:quizId"}),m(wv,{path:"/change-quiz/:quizId"})]}),m(Sv,{})]})};Eu(m(eh,{children:m(Nv,{})}),document.getElementById("app"))});export default Rv();
