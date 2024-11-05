"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{7138:(e,t,r)=>{r.d(t,{default:()=>o.a});var n=r(231),o=r.n(n)},6463:(e,t,r)=>{var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}})},844:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8157);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8505:(e,t,r)=>{function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8157),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},231:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(9920),o=r(7437),a=n._(r(2265)),i=r(8016),u=r(8029),s=r(1142),l=r(3461),c=r(844),f=r(291),d=r(4467),p=r(3106),h=r(8505),_=r(4897),g=r(1507),m=r(7616),E=new Set;function R(e,t,r,n,o,a){if("undefined"!=typeof window&&(a||(0,u.isLocalURL)(t))){if(!n.bypassPrefetchedCheck&&!a){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(E.has(o))return;E.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function S(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let r,n;let{href:s,as:E,children:y,prefetch:P=null,passHref:b,replace:A,shallow:O,scroll:v,locale:T,onClick:N,onMouseEnter:I,onTouchStart:C,legacyBehavior:x=!1,...j}=e;r=y,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=a.default.useContext(f.RouterContext),w=a.default.useContext(d.AppRouterContext),L=null!=M?M:w,D=!M,U=!1!==P,k=null===P?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:F,as:X}=a.default.useMemo(()=>{if(!M){let e=S(s);return{href:e,as:E?S(E):e}}let[e,t]=(0,i.resolveHref)(M,s,!0);return{href:e,as:E?(0,i.resolveHref)(M,E):t||e}},[M,s,E]),W=a.default.useRef(F),G=a.default.useRef(X);x&&(n=a.default.Children.only(r));let H=x?n&&"object"==typeof n&&n.ref:t,[B,Y,K]=(0,p.useIntersection)({rootMargin:"200px"}),V=a.default.useCallback(e=>{(G.current!==X||W.current!==F)&&(K(),G.current=X,W.current=F),B(e)},[X,F,K,B]),z=(0,m.useMergedRef)(V,H);a.default.useEffect(()=>{L&&Y&&U&&R(L,F,X,{locale:T},{kind:k},D)},[X,F,Y,T,U,null==M?void 0:M.locale,L,D,k]);let q={ref:z,onClick(e){x||"function"!=typeof N||N(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,i,s,l,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?a.default.startTransition(d):d()}(e,L,F,X,A,O,v,T,D)},onMouseEnter(e){x||"function"!=typeof I||I(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(U||!D)&&R(L,F,X,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:k},D)},onTouchStart:function(e){x||"function"!=typeof C||C(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(U||!D)&&R(L,F,X,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:k},D)}};if((0,l.isAbsoluteUrl)(X))q.href=X;else if(!x||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==T?T:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(X,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=t||(0,_.addBasePath)((0,c.addLocale)(X,e,null==M?void 0:M.defaultLocale))}return x?a.default.cloneElement(n,q):(0,o.jsx)("a",{...j,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8016:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(8323),o=r(1142),a=r(5519),i=r(3461),u=r(8157),s=r(8029),l=r(9195),c=r(20);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,l.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,u)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3106:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(2265),o=r(9189),a="function"==typeof IntersectionObserver,i=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,l=s||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(l||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_SUFFIX:function(){return c},APP_DIR_ALIAS:function(){return x},CACHE_ONE_YEAR:function(){return b},DOT_NEXT_ALIAS:function(){return I},ESLINT_DEFAULT_DIRS:function(){return $},GSP_NO_RETURNED_VALUE:function(){return B},GSSP_COMPONENT_MEMBER_ERROR:function(){return V},GSSP_NO_RETURNED_VALUE:function(){return Y},INFINITE_CACHE:function(){return A},INSTRUMENTATION_HOOK_FILENAME:function(){return T},MIDDLEWARE_FILENAME:function(){return O},MIDDLEWARE_LOCATION_REGEXP:function(){return v},NEXT_BODY_SUFFIX:function(){return p},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return P},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return g},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return m},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return _},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return y},NEXT_CACHE_TAGS_HEADER:function(){return h},NEXT_CACHE_TAG_MAX_ITEMS:function(){return R},NEXT_CACHE_TAG_MAX_LENGTH:function(){return S},NEXT_DATA_SUFFIX:function(){return f},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return n},NEXT_META_SUFFIX:function(){return d},NEXT_QUERY_PARAM_PREFIX:function(){return r},NEXT_RESUME_HEADER:function(){return E},NON_STANDARD_NODE_ENV:function(){return z},PAGES_DIR_ALIAS:function(){return N},PRERENDER_REVALIDATE_HEADER:function(){return o},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return a},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return k},ROOT_DIR_ALIAS:function(){return C},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return U},RSC_ACTION_ENCRYPTION_ALIAS:function(){return D},RSC_ACTION_PROXY_ALIAS:function(){return w},RSC_ACTION_VALIDATE_ALIAS:function(){return M},RSC_CACHE_WRAPPER_ALIAS:function(){return L},RSC_MOD_REF_PROXY_ALIAS:function(){return j},RSC_PREFETCH_SUFFIX:function(){return i},RSC_SEGMENTS_DIR_SUFFIX:function(){return u},RSC_SEGMENT_SUFFIX:function(){return s},RSC_SUFFIX:function(){return l},SERVER_PROPS_EXPORT_ERROR:function(){return H},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return X},SERVER_PROPS_SSG_CONFLICT:function(){return W},SERVER_RUNTIME:function(){return Q},SSG_FALLBACK_EXPORT_ERROR:function(){return q},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return F},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return G},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return K},WEBPACK_LAYERS:function(){return J},WEBPACK_RESOURCE_QUERIES:function(){return ee}});let r="nxtP",n="nxtI",o="x-prerender-revalidate",a="x-prerender-revalidate-if-generated",i=".prefetch.rsc",u=".segments",s=".segment.rsc",l=".rsc",c=".action",f=".json",d=".meta",p=".body",h="x-next-cache-tags",_="x-next-cache-soft-tags",g="x-next-revalidated-tags",m="x-next-revalidate-tag-token",E="next-resume",R=64,S=256,y=1024,P="_N_T_",b=31536e3,A=0xfffffffe,O="middleware",v=`(?:src/)?${O}`,T="instrumentation",N="private-next-pages",I="private-dot-next",C="private-next-root-dir",x="private-next-app-dir",j="private-next-rsc-mod-ref-proxy",M="private-next-rsc-action-validate",w="private-next-rsc-server-reference",L="private-next-rsc-cache-wrapper",D="private-next-rsc-action-encryption",U="private-next-rsc-action-client-wrapper",k="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",F="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",X="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",W="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",G="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",H="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",B="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",Y="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",K="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",V="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",z='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',q="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",$=["app","pages","components","lib","src"],Q={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},Z={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route"},J={...Z,GROUP:{builtinReact:[Z.reactServerComponents,Z.actionBrowser,Z.appMetadataRoute],serverOnly:[Z.reactServerComponents,Z.actionBrowser,Z.appMetadataRoute,Z.instrument,Z.middleware],neutralTarget:[Z.api],clientOnly:[Z.serverSideRendering,Z.appPagesBrowser],bundled:[Z.reactServerComponents,Z.actionBrowser,Z.appMetadataRoute,Z.serverSideRendering,Z.appPagesBrowser,Z.shared,Z.instrument],appPages:[Z.reactServerComponents,Z.serverSideRendering,Z.appPagesBrowser,Z.actionBrowser]}},ee={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},1943:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},1142:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return i}});let n=r(1452)._(r(8323)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",s=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+l+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},9195:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRouteObjects:function(){return n.getSortedRouteObjects},getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(9089),o=r(8083)},20:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let n=r(1533),o=r(3169);function a(e,t,r){let a="",i=(0,o.getRouteRegex)(e),u=i.groups,s=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let l=Object.keys(u);return l.every(e=>{let t=s[e]||"",{repeat:r,optional:n}=u[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in s)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:l,result:a}}},8083:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let n=r(3100),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},8029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(3461),o=r(9404);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},5519:(e,t)=>{function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},8323:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},1533:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(3461);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),i}}},3169:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return _},getNamedRouteRegex:function(){return h},getRouteRegex:function(){return f},parseParameter:function(){return s}});let n=r(3345),o=r(3100),a=r(1943),i=r(7741),u=/\[((?:\[.*\])|.+)\]/;function s(e){let t=e.match(u);return t?l(t[1]):l(e)}function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=o.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(u);if(t&&i){let{key:e,optional:o,repeat:u}=l(i[1]);return r[e]={pos:n++,repeat:u,optional:o},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:o}=l(i[1]);return r[e]={pos:n++,repeat:t,optional:o},t?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function d(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:i}=e,{key:u,optional:s,repeat:c}=l(n),f=u.replace(/\W/g,"");i&&(f=""+i+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),i?o[f]=""+i+u:o[f]=u;let p=t?(0,a.escapeStringRegexp)(t):"";return c?s?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function p(e,t){let r;let u=(0,i.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:u.map(e=>{let r=o.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&i){let[r]=e.split(i[0]);return d({getSafeRouteKey:s,interceptionMarker:r,segment:i[1],routeKeys:l,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return i?d({getSafeRouteKey:s,segment:i[1],routeKeys:l,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function h(e,t){let r=p(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function _(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=p(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},9089:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRouteObjects:function(){return o},getSortedRoutes:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("…"))throw Error("Detected a three-dot character ('…') at ('"+r+"'). Did you mean ('...')?");if(r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function a(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}function o(e,t){let r={},o=[];for(let n=0;n<e.length;n++){let a=t(e[n]);r[a]=n,o[n]=a}return n(o).map(t=>e[r[t]])}},3461:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return m},NormalizeError:function(){return _},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return i},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return R}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=i();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class _ extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function R(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);