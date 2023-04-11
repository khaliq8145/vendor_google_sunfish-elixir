(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{"1EL4":function(e,t){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getUser"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currentUser"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"callouts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"featureName"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:108}};r.loc.source={body:"query getUser {\n  currentUser {\n    id\n    callouts {\n      nodes {\n        featureName\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function i(e,t){for(var r=0;r<e.definitions.length;r++){var n=e.definitions[r];if(n.name&&n.name.value==t)return n}}r.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,r){if("FragmentSpread"===t.kind)r.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&r.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,r)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,r)})),t.definitions&&t.definitions.forEach((function(t){e(t,r)}))}(e,t),n[e.name.value]=t}})),e.exports=r,e.exports.getUser=function(e,t){var r={kind:e.kind,definitions:[i(e,t)]};e.hasOwnProperty("loc")&&(r.loc=e.loc);var o=n[t]||new Set,a=new Set,s=new Set;for(o.forEach((function(e){s.add(e)}));s.size>0;){var l=s;s=new Set,l.forEach((function(e){a.has(e)||(a.add(e),(n[e]||new Set).forEach((function(e){s.add(e)})))}))}return a.forEach((function(t){var n=i(e,t);n&&r.definitions.push(n)})),r}(r,"getUser")},Cf2W:function(e,t,r){(function(t){(function(){var n,i,o,a,s,l,c,u;o=r("tNrK"),a=r("HBgj"),u=r("mE4v"),l=r("zLmZ"),n=r("YKBT"),c=null,i="win32"===(null!=t?t.platform:void 0)?"\\":"/",e.exports={filter:function(e,t,r){return null==r&&(r={}),(null!=t?t.length:void 0)&&(null!=e?e.length:void 0)?(r=s(r,t),o(e,t,r)):[]},score:function(e,t,r){return null==r&&(r={}),(null!=e?e.length:void 0)&&(null!=t?t.length:void 0)?(r=s(r,t)).usePathScoring?l.score(e,t,r):u.score(e,t,r):0},match:function(e,t,r){var n;return null==r&&(r={}),e&&t?e===t?function(){n=[];for(var t=0,r=e.length;0<=r?t<r:t>r;0<=r?t++:t--)n.push(t);return n}.apply(this):(r=s(r,t),a.match(e,t,r)):[]},wrap:function(e,t,r){return null==r&&(r={}),e&&t?(r=s(r,t),a.wrap(e,t,r)):[]},prepareQuery:function(e,t){return null==t&&(t={}),(t=s(t,e)).preparedQuery}},s=function(e,t){return null==e.allowErrors&&(e.allowErrors=!1),null==e.usePathScoring&&(e.usePathScoring=!0),null==e.useExtensionBonus&&(e.useExtensionBonus=!1),null==e.pathSeparator&&(e.pathSeparator=i),null==e.optCharRegEx&&(e.optCharRegEx=null),null==e.wrap&&(e.wrap=null),null==e.preparedQuery&&(e.preparedQuery=c&&c.query===t?c:c=new n(t,e)),e}}).call(this)}).call(this,r("YJr0"))},Etn4:function(e,t,r){"use strict";var n=r("6IRw");const i={props:{headerClass:{type:[String,Object,Array],required:!1,default:""},bodyClass:{type:[String,Object,Array],required:!1,default:""},footerClass:{type:[String,Object,Array],required:!1,default:""}}};const o=r.n(n)()({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gl-card"},[e.$scopedSlots.header?r("div",{staticClass:"gl-card-header",class:e.headerClass},[e._t("header")],2):e._e(),e._v(" "),r("div",{staticClass:"gl-card-body",class:e.bodyClass},[e._t("default")],2),e._v(" "),e.$scopedSlots.footer?r("div",{staticClass:"gl-card-footer",class:e.footerClass},[e._t("footer")],2):e._e()])},staticRenderFns:[]},void 0,i,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=o},HBgj:function(e,t,r){(function(){var e,n,i,o,a,s,l,c,u,d;d=r("mE4v"),i=d.isMatch,o=d.isWordStart,u=d.scoreConsecutives,c=d.scoreCharacter,l=d.scoreAcronyms,t.match=a=function(t,r,o){var a,l,c,u,d,h;return a=o.allowErrors,d=o.preparedQuery,u=o.pathSeparator,a||i(t,d.core_lw,d.core_up)?(h=t.toLowerCase(),0===(c=n(t,h,d)).length||t.indexOf(u)>-1&&(l=e(t,h,d,u),c=s(c,l)),c):[]},t.wrap=function(e,t,r){var n,i,o,s,l,c,u,d,h;if(null!=r.wrap&&(c=(h=r.wrap).tagClass,d=h.tagOpen,u=h.tagClose),null==c&&(c="highlight"),null==d&&(d='<strong class="'+c+'">'),null==u&&(u="</strong>"),e===t)return d+e+u;if(0===(o=a(e,0,r)).length)return e;for(s="",n=-1,l=0;++n<o.length;){for((i=o[n])>l&&(s+=e.substring(l,i),l=i);++n<o.length;){if(o[n]!==i+1){n--;break}i++}++i>l&&(s+=d,s+=e.substring(l,i),s+=u,l=i)}return l<=e.length-1&&(s+=e.substring(l)),s},e=function(e,t,r,i){var o,a,s;for(s=e.length-1;e[s]===i;)s--;if(-1===(o=e.lastIndexOf(i,s)))return[];for(a=r.depth;a-- >0;)if(-1===(o=e.lastIndexOf(i,o-1)))return[];return o++,s++,n(e.slice(o,s),t.slice(o,s),r,o)},s=function(e,t){var r,n,i,o,a,s,l;if(a=e.length,0===(s=t.length))return e.slice();if(0===a)return t.slice();for(i=-1,n=t[o=0],l=[];++i<a;){for(r=e[i];n<=r&&++o<s;)n<r&&l.push(n),n=t[o];l.push(r)}for(;o<s;)l.push(t[o++]);return l},n=function(e,t,r,n){var i,a,s,d,h,f,p,m,g,v,b,y,w,j,S,_,x,E,k,C,I,O;for(null==n&&(n=0),j=r.query,S=r.query_lw,g=e.length,y=j.length,i=l(e,t,j,S).score,E=new Array(y),h=new Array(y),0,1,2,3,O=new Array(g*y),w=-1,m=-1;++m<y;)E[m]=0,h[m]=0;for(p=-1;++p<g;)for(_=0,k=0,d=0,C=t[p],m=-1;++m<y;)f=0,a=0,x=k,S[m]===C&&(I=o(p,e,t),f=d>0?d:u(e,t,j,S,p,m,I),a=x+c(p,m,I,i,f)),k=E[m],d=h[m],_>k?b=2:(_=k,b=1),a>_?(_=a,b=3):f=0,E[m]=_,h[m]=f,O[++w]=_>0?b:0;for(w=(p=g-1)*y+(m=y-1),s=!0,v=[];s&&p>=0&&m>=0;)switch(O[w]){case 1:p--,w-=y;break;case 2:m--,w--;break;case 3:v.push(p+n),m--,p--,w-=y+1;break;default:s=!1}return v.reverse(),v}}).call(this)},Og7b:function(e,t,r){"use strict";var n=r("Fcvx"),i=r("cuRJ"),o=r("Etn4"),a=r("6IRw"),s=r.n(a);const l={name:"GlBanner",components:{GlButton:i.a,GlCard:o.a},props:{title:{type:String,required:!0},buttonText:{type:String,required:!0},buttonLink:{type:String,required:!1,default:null},svgPath:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:n.l[0],validator:e=>n.l.includes(e)},embedded:{type:Boolean,required:!1,default:null}},computed:{isIntroducing(){return this.variant===n.l[1]}},methods:{handleClose(){this.$emit("close")},primaryButtonClicked(){this.$emit("primary")}}};const c=s()({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("gl-card",{staticClass:"gl-px-8 gl-py-6 gl-line-height-20",class:{"gl-banner-introduction":e.isIntroducing,"gl-border-none!":e.embedded},attrs:{"body-class":"gl-display-flex gl-p-0!"}},[e.svgPath?r("div",{staticClass:"gl-banner-illustration"},[r("img",{attrs:{src:e.svgPath,alt:"",role:"presentation"}})]):e._e(),e._v(" "),r("div",{staticClass:"gl-banner-content"},[r("h2",{staticClass:"gl-banner-title"},[e._v(e._s(e.title))]),e._v(" "),e._t("default"),e._v(" "),r("gl-button",{attrs:{variant:"confirm",category:"primary","data-testid":"gl-banner-primary-button",href:e.buttonLink},on:{click:e.primaryButtonClicked}},[e._v(e._s(e.buttonText))]),e._v(" "),e._t("actions")],2),e._v(" "),r("gl-button",{staticClass:"gl-banner-close",attrs:{variant:e.isIntroducing?"confirm":"default",category:"tertiary",size:"small",icon:"close","aria-label":"Close banner"},on:{click:e.handleClose}})],1)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=c},Vb3e:function(e,t,r){"use strict";r("ylB9"),r("3R5X"),r("XexO");var n=r("Ml5J"),i=r.n(n),o=r("1EL4"),a={name:"UserCalloutDismisser",props:{featureName:{type:String,required:!0},skipQuery:{type:Boolean,required:!1,default:!1}},data:()=>({currentUser:null,isDismissedLocal:!1,isLoadingMutation:!1,mutationError:null,queryError:null}),apollo:{currentUser:{query:r.n(o).a,update:e=>null==e?void 0:e.currentUser,result(e){this.$emit("queryResult",{...e,...this.slotProps})},error(e){this.queryError=e},skip(){return this.skipQuery}}},computed:{featureNameEnumValue(){return this.featureName.toUpperCase()},isLoadingQuery(){return this.$apollo.queries.currentUser.loading},isAnonUser(){return!(this.skipQuery||this.queryError||this.isLoadingQuery||this.currentUser)},isDismissedRemote(){var e,t,r,n=this;return(null!==(e=null===(t=this.currentUser)||void 0===t||null===(r=t.callouts)||void 0===r?void 0:r.nodes)&&void 0!==e?e:[]).some((function(e){let{featureName:t}=e;return t===n.featureNameEnumValue}))},isDismissed(){return this.isDismissedLocal||this.isDismissedRemote},slotProps(){const{dismiss:e,isAnonUser:t,isDismissed:r,isLoadingMutation:n,isLoadingQuery:i,mutationError:o,queryError:a,shouldShowCallout:s}=this;return{dismiss:e,isAnonUser:t,isDismissed:r,isLoadingMutation:n,isLoadingQuery:i,mutationError:o,queryError:a,shouldShowCallout:s}},shouldShowCallout(){return!(this.isLoadingQuery||this.isDismissed||this.queryError||this.isAnonUser)}},methods:{async dismiss(){this.isLoadingMutation=!0,this.isDismissedLocal=!0;try{var e,t;const{data:r}=await this.$apollo.mutate({mutation:i.a,variables:{input:{featureName:this.featureName}}}),n=null!==(e=null==r||null===(t=r.userCalloutCreate)||void 0===t?void 0:t.errors)&&void 0!==e?e:[];n.length>0&&this.onDismissalError(n)}catch(e){this.onDismissalError([e.message])}finally{this.isLoadingMutation=!1}},onDismissalError(e){this.mutationError=e}},render(){return this.$scopedSlots.default(this.slotProps)}},s=r("bPvS"),l=Object(s.a)(a,void 0,void 0,!1,null,null,null);t.a=l.exports},YKBT:function(e,t,r){(function(){var t,n,i,o,a,s,l;l=r("zLmZ"),n=l.countDir,o=l.getExtension,e.exports=function(e,r){var a,l,c;if(a=(c=null!=r?r:{}).optCharRegEx,l=c.pathSeparator,!e||!e.length)return null;this.query=e,this.query_lw=e.toLowerCase(),this.core=t(e,a),this.core_lw=this.core.toLowerCase(),this.core_up=s(this.core),this.depth=n(e,e.length,l),this.ext=o(this.query_lw),this.charCodes=i(this.query_lw)},a=/[ _\-:\/\\]/g,t=function(e,t){return null==t&&(t=a),e.replace(t,"")},s=function(e){var t,r,n;for(t="",r=0,n=e.length;r<n;r++)t+=e[r].toUpperCase()[0];return t},i=function(e){var t,r,n;for(n=e.length,r=-1,t=[];++r<n;)t[e.charCodeAt(r)]=!0;return t}}).call(this)},fznm:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));r("0no1"),r("3R5X"),r("gdbl"),r("uHfJ"),r("R0RX"),r("ujLG"),r("HaUQ"),r("g+EE"),r("h8Et");var n=r("vRHk");const i=function(e){const t=new FormData(e);return function(e){return e.reduce((function(e,t){let{name:r,value:n}=t;return Object.assign(e,{[r]:n})}),{})}(Array.from(t.keys()).map((function(e){let r=t.getAll(e);return r=r.filter((function(e){return e})),{name:e,value:1===r.length?r[0]:r}})))},o=function(e){if(!e)throw new TypeError("`mountEl` argument is required");return[...e.querySelectorAll("[name]")].reduce((function(e,t){const r=t.dataset.jsName;if(!r)return e;const i=Object(n.g)(r),{id:o,placeholder:a,name:s,value:l,type:c,checked:u,maxLength:d,pattern:h}=t,f={name:s,id:o,value:l,...a&&{placeholder:a},...t.hasAttribute("maxlength")&&{maxLength:d},...h&&{pattern:h}};return["radio","checkbox"].includes(c)?{...e,[i]:[...e[i]||[],{...f,checked:u}]}:{...e,[i]:f}}),{})}},mE4v:function(e,t){(function(){var e,r,n,i,o,a,s,l,c,u,d,h,f,p,m,g;t.score=function(e,t,n){var i,a,s;return i=n.preparedQuery,n.allowErrors||o(e,i.core_lw,i.core_up)?(s=e.toLowerCase(),a=r(e,s,i),Math.ceil(a)):0},t.isMatch=o=function(e,t,r){var n,i,o,a,s,l,c;if(o=e.length,a=t.length,!o||a>o)return!1;for(n=-1,i=-1;++i<a;){for(s=t.charCodeAt(i),l=r.charCodeAt(i);++n<o&&(c=e.charCodeAt(n))!==s&&c!==l;);if(n===o)return!1}return!0},t.computeScore=r=function(e,t,r){var n,i,o,a,s,p,m,v,b,y,w,j,S,_,x,E,k,C,I,O,L,q,P,T;if(x=r.query,E=r.query_lw,y=e.length,S=x.length,i=(n=c(e,t,x,E)).score,n.count===S)return h(S,y,i,n.pos);if((_=t.indexOf(E))>-1)return f(e,t,x,E,_,S,y);for(O=new Array(S),s=new Array(S),T=g(S,y),j=w=Math.ceil(.75*S)+5,m=!0,b=-1;++b<S;)O[b]=0,s[b]=0;for(v=-1;++v<y;)if(!(q=t[v]).charCodeAt(0)in r.charCodes){if(m){for(b=-1;++b<S;)s[b]=0;m=!1}}else for(C=0,I=0,a=0,k=!0,m=!0,b=-1;++b<S;){if((L=O[b])>C&&(C=L),p=0,E[b]===q)if(P=l(v,e,t),p=a>0?a:d(e,t,x,E,v,b,P),(o=I+u(v,b,P,i,p))>C)C=o,j=w;else{if(k&&--j<=0)return Math.max(C,O[S-1])*T;k=!1}I=L,a=s[b],s[b]=p,O[b]=C}return(C=O[S-1])*T},t.isWordStart=l=function(e,t,r){var n,i;return 0===e||(n=t[e],i=t[e-1],a(i)||n!==r[e]&&i===r[e-1])},t.isWordEnd=s=function(e,t,r,n){var i,o;return e===n-1||(i=t[e],o=t[e+1],a(o)||i===r[e]&&o!==r[e+1])},a=function(e){return" "===e||"."===e||"-"===e||"_"===e||"/"===e||"\\"===e},m=function(e){var t;return e<20?100+(t=20-e)*t:Math.max(120-e,0)},t.scoreSize=g=function(e,t){return 150/(150+Math.abs(t-e))},h=function(e,t,r,n){return 2*e*(150*r+m(n))*g(e,t)},t.scorePattern=p=function(e,t,r,n,i){var o,a;return a=e,o=6,r===e&&(o+=2),n&&(o+=3),i&&(o+=1),e===t&&(n&&(a+=r===t?2:1),i&&(o+=1)),r+a*(a+o)},t.scoreCharacter=u=function(e,t,r,n,i){var o;return o=m(e),r?o+150*((n>i?n:i)+10):o+150*i},t.scoreConsecutives=d=function(e,t,r,n,i,o,a){var l,c,u,d,h,f,m;for(l=(u=(c=e.length)-i)<(h=(d=r.length)-o)?u:h,f=0,m=0,r[o]===e[i]&&f++;++m<l&&n[++o]===t[++i];)r[o]===e[i]&&f++;return m<l&&i--,1===m?1+2*f:p(m,d,f,a,s(i,e,t,c))},t.scoreExactMatch=f=function(e,t,r,n,i,o,a){var c,u,d,f,m;for((m=l(i,e,t))||(d=t.indexOf(n,i+1))>-1&&(m=l(d,e,t))&&(i=d),u=-1,f=0;++u<o;)r[i+u]===e[u]&&f++;return c=s(i+o-1,e,t,a),h(o,a,p(o,o,f,m,c),i)},n=new(e=function(e,t,r){this.score=e,this.pos=t,this.count=r})(0,.1,0),t.scoreAcronyms=c=function(t,r,o,s){var c,u,d,h,f,m,g,v,b,y,w;if(f=t.length,m=o.length,!(f>1&&m>1))return n;for(c=0,y=0,w=0,v=0,d=-1,h=-1;++h<m;){if(g=s[h],a(g)){if((d=r.indexOf(g,d+1))>-1){y++;continue}break}for(;++d<f;)if(g===r[d]&&l(d,t,r)){o[h]===t[d]&&v++,w+=d,c++;break}if(d===f)break}return c<2?n:(u=c===m&&i(t,r,o,c),b=p(c,m,v,!0,u),new e(b,w/c,c+y))},i=function(e,t,r,n){var i,o,a;if(i=0,(a=e.length)>12*r.length)return!1;for(o=-1;++o<a;)if(l(o,e,t)&&++i>n)return!1;return!0}}).call(this)},"n/nT":function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));r("WmlO"),r("3R5X"),r("W9Nl"),r("h8Et");var n=r("6oy4"),i=r.n(n),o=r("oj/M"),a=r("sXPh"),s=r("rl6E"),l=r("teVv"),c=r("mphk"),u=r("fznm"),d=r("yYHy"),h=r("t9l/"),f=r("zP9b");const p=Object(h.a)("Branches"),m=Object(h.a)("Tags");class g{constructor(){Object(a.a)(),document.querySelector(".js-project-refs-dropdown")&&(g.initRefSwitcher(),i()(".project-refs-select").on("change",(function(){return i()(this).parents("form").trigger("submit")}))),i()(".js-hide-no-ssh-message").on("click",(function(e){return Object(o.L)("hide_no_ssh_message","false"),i()(this).parents(".js-no-ssh-key-message").remove(),e.preventDefault()})),i()(".js-hide-no-password-message").on("click",(function(e){return Object(o.L)("hide_no_password_message","false"),i()(this).parents(".js-no-password-message").remove(),e.preventDefault()})),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){const t="hide_auto_devops_implicitly_enabled_banner_"+i()(this).data("project-id");return Object(o.L)(t,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),g.projectSelectDropdown()}static projectSelectDropdown(){Object(f.a)(),i()(".project-item-select").on("click",(function(e){return g.changeProject(i()(e.currentTarget).val())}))}static changeProject(e){return window.location=e}static initRefSwitcher(){const e=document.createElement("li"),t=document.createElement("a");return t.href="#",i()(".js-project-refs-dropdown").each((function(){const r=i()(this),n=r.data("selected"),o=r.data("refType"),a=r.data("fieldName"),f=Boolean(r.data("visit")),g=r.closest("form"),v=g.find("#path").val(),b=g.attr("action"),y=Object(d.z)(Object(u.b)(g[0]),b);return Object(s.a)(r,{data(e,t){c.a.get(r.data("refsUrl"),{params:{ref:r.data("ref"),search:e}}).then((function(e){let{data:r}=e;return t(r)})).catch((function(){return Object(l.createAlert)({message:Object(h.a)("An error occurred while getting projects")})}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:r.data("inputFieldName"),fieldName:a,renderRow(r,i,s){const l=e.cloneNode(!1),c=t.cloneNode(!1);if(r===n&&("heads"===o&&s.group===p||"tags"===o&&s.group===m||!o)&&(c.className="is-active"),c.textContent=r,c.dataset.ref=r,r.length>0&&f){const e={[a]:r};s.group===p?e.ref_type="heads":e.ref_type="tags",c.href=Object(d.z)(e,y)}return l.appendChild(c),l},id:(e,t)=>t.attr("data-ref"),toggleLabel:(e,t)=>t.text().trim(),clicked(e){const{e:t}=e;if(f||t.preventDefault(),f&&void 0===v){t.preventDefault();const e=new URL(t.target.href),n=window.location.href;if(n.includes("/-/")){const t=r.data("ref"),i=n.split("/-/")[1].split(t)[1];if(null==i?void 0:i.startsWith("/")){const t=null==i?void 0:i.slice(1).split("#")[0].split("?")[0];e.searchParams.set("path",t),e.hash=window.location.hash}}t.metaKey?window.open(e.href,"_blank"):window.location.href=e.href}}})}))}}},sXPh:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("WmlO"),r("3R5X"),r("W9Nl");var n=r("6oy4"),i=r.n(n);function o(){const e=i()("ul.clone-options-dropdown");if(e.length){const t=i()("#clone_url"),r=i()(".js-git-clone-holder .js-clone-dropdown-label"),n=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),o=r.text().trim();o.length>0&&i()(`a:contains('${o}')`,e).addClass("is-active"),i()("a",e).on("click",(function(r){const o=i()(r.currentTarget),a=o.attr("href");if(a&&(a.startsWith("vscode://")||a.startsWith("xcode://")||a.startsWith("jetbrains://")))return;r.preventDefault();const s=o.data("cloneType");i()(".is-active",e).removeClass("is-active"),i()(`a[data-clone-type="${s}"]`).each((function(){const e=i()(this),t=e.find(".dropdown-menu-inner-title").text(),r=e.closest(".js-git-clone-holder, .js-mobile-git-clone").find(".js-clone-dropdown-label");e.toggleClass("is-active"),r.text(t)})),n?n.dataset.clipboardText=a:t.val(a),i()(".js-git-empty .js-clone").text(a)}))}}},tNrK:function(e,t,r){(function(){var t,n,i,o;i=r("mE4v"),t=r("zLmZ"),r("YKBT"),n=function(e){return e.candidate},o=function(e,t){return t.score-e.score},e.exports=function(e,r,a){var s,l,c,u,d,h,f,p,m,g,v,b,y;for(p=[],c=a.key,d=a.maxResults,u=a.maxInners,v=a.usePathScoring,m=null!=u&&u>0?u:e.length+1,s=null!=c,f=v?t:i,b=0,y=e.length;b<y&&(l=e[b],!((g=s?l[c]:l)&&(h=f.score(g,r,a))>0)||(p.push({candidate:l,score:h}),--m));b++);return p.sort(o),e=p.map(n),null!=d&&(e=e.slice(0,d)),e}}).call(this)},yxpZ:function(e,t,r){"use strict";r.r(t);var n=r("HWy0"),i=r("q+nE"),o=r("EfTh"),a=r("voi4"),s=r("Og7b"),l=r("mcoW"),c=r("t9l/"),u=r("mWeI"),d=r("Vb3e");const h=u.a.mixin({label:"terraform_banner"});var f={name:"TerraformNotification",i18n:{title:Object(c.g)("TerraformBanner|Using Terraform? Try the GitLab Managed Terraform State"),description:Object(c.g)("TerraformBanner|The GitLab managed Terraform state backend can store your Terraform state easily and securely, and spares you from setting up additional remote resources. Its features include: versioning, encryption of the state file both in transit and at rest, locking, and remote Terraform plan/apply execution."),buttonText:Object(c.g)("TerraformBanner|Learn more about GitLab's Backend State")},components:{GlBanner:s.a,UserCalloutDismisser:d.a},mixins:[h],inject:["terraformImagePath"],computed:{docsUrl:()=>Object(l.a)("user/infrastructure/iac/terraform_state.md")},methods:{handleClose(){this.track("dismiss_banner"),this.$refs.calloutDismisser.dismiss()},buttonClick(){this.track("click_button")}}},p=r("bPvS"),m=Object(p.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("user-callout-dismisser",{ref:"calloutDismisser",attrs:{"feature-name":"terraform_notification_dismissed"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.shouldShowCallout?r("div",{staticClass:"gl-py-5"},[r("gl-banner",{attrs:{title:e.$options.i18n.title,"button-text":e.$options.i18n.buttonText,"button-link":e.docsUrl,"svg-path":e.terraformImagePath,variant:"promotion"},on:{primary:e.buttonClick,close:e.handleClose}},[r("p",[e._v(e._s(e.$options.i18n.description))])])],1):e._e()]}}])})}),[],!1,null,null,null).exports;i.default.use(o.b);const g=new o.b({defaultClient:Object(a.a)()});new(r("n/nT").a),new n.a,function(){const e=document.querySelector(".js-terraform-notification");if(!e)return!1;const{terraformImagePath:t}=e.dataset;new i.default({el:e,apolloProvider:g,provide:{terraformImagePath:t},render:function(e){return e(m)}})}()},zLmZ:function(e,t,r){(function(){var e,n,i,o,a,s,l;l=r("mE4v"),o=l.isMatch,e=l.computeScore,s=l.scoreSize,t.score=function(t,r,n){var i,s,l;return i=n.preparedQuery,n.allowErrors||o(t,i.core_lw,i.core_up)?(l=t.toLowerCase(),s=e(t,l,i),s=a(t,l,s,n),Math.ceil(s)):0},a=function(t,r,o,a){var l,c,u,d,h,f,p,m,g,v;if(0===o)return 0;for(g=a.preparedQuery,v=a.useExtensionBonus,m=a.pathSeparator,h=t.length-1;t[h]===m;)h--;if(p=h-(u=t.lastIndexOf(m,h)),f=1,v&&(o*=f+=i(r,g.ext,u,h,2)),-1===u)return o;for(d=g.depth;u>-1&&d-- >0;)u=t.lastIndexOf(m,u-1);return c=-1===u?o:f*e(t.slice(u+1,h+1),r.slice(u+1,h+1),g),(l=10/(20+n(t,h+1,m)))*c+(1-l)*o*s(0,2.5*p)},t.countDir=n=function(e,t,r){var n,i;if(t<1)return 0;for(n=0,i=-1;++i<t&&e[i]===r;);for(;++i<t;)if(e[i]===r)for(n++;++i<t&&e[i]===r;);return n},t.getExtension=function(e){var t;return(t=e.lastIndexOf("."))<0?"":e.substr(t+1)},i=function(e,t,r,n,o){var a,s,l,c;if(!t.length)return 0;if(!((c=e.lastIndexOf(".",n))>r))return 0;for((a=n-c)<(l=t.length)&&(l=a,a=t.length),c++,s=-1;++s<l&&e[c+s]===t[s];);return 0===s&&o>0?.9*i(e,t,r,c-2,o-1):s/a}}).call(this)},zP9b:function(e,t,r){"use strict";var n=r("6oy4"),i=r.n(n),o=r("teVv"),a=r("htOw"),s=r("e+le"),l=r("t9l/"),c=r("yYHy"),u=r("xqp2");class d{constructor(e){this.projectSelectInput=i()(e),this.newItemBtn=i()(".js-new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}initLocalStorage(){u.a.canUseLocalStorage()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(e){r.e(704).then(r.t.bind(null,"adUV",7)).then((function(){Object(s.b)(gon.select2_css_path).then((function(){i()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const e=JSON.parse(this.projectSelectInput.val()),t={url:`${e.url}/${this.projectSelectInput.data("relativePath")}`,name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}setBtnTextFromLocalStorage(){const e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}setNewItemBtnAttributes(e){e?(this.newItemBtn.attr("href",Object(c.J)(e.url)),this.newItemBtn.text(Object(l.h)(Object(l.a)("New %{type} in %{project}"),{type:this.resourceLabel,project:e.name}))):this.newItemBtn.text(Object(l.h)(Object(l.a)("Select project to create %{type}"),{type:this.formattedText.presetTextSuffix}))}getProjectFromLocalStorage(){const e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}setProjectInLocalStorage(e){const t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}deriveTextVariants(){return{localStorageItemType:"new-"+this.resourceType.split("_").join("-").slice(0,-1),presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const h=async function(){await Object(s.b)(gon.select2_css_path),i()(".ajax-project-select").each((function(e,t){var r=this;let n;const s=i()(t).data("simpleFilter")||!1,c=i()(t).data("select2");return this.groupId=i()(t).data("groupId"),this.userId=i()(t).data("userId"),this.includeGroups=i()(t).data("includeGroups"),this.allProjects=i()(t).data("allProjects")||!1,this.orderBy=i()(t).data("orderBy")||"id",this.withIssuesEnabled=i()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(t).data("withShared")||i()(t).data("withShared"),this.includeProjectsInSubgroups=i()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(t).data("allowClear")||!1,n=Object(l.g)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(l.g)("ProjectSelect| or group")),i()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){let t;const n=function(t){const r={results:t};return e.callback(r)};return t=r.includeGroups?function(t){return a.b.groups(e.term,{},(function(e){const r=e.concat(t);return n(r)}))}:n,r.groupId?a.b.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups,order_by:"similarity",simple:!0},t).catch((function(){Object(o.createAlert)({message:Object(l.g)("ProjectSelect|Something went wrong while fetching projects")})})):r.userId?a.b.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):a.b.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:e=>s?e.id:JSON.stringify({name:e.name,url:e.web_url}),text:e=>e.name_with_namespace||e.name,initSelection:(e,t)=>a.b.project(e.val()).then((function(e){let{data:r}=e;return t(r)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||s?t:new d(t)}))};t.a=function(){i()(".ajax-project-select").length&&r.e(704).then(r.t.bind(null,"adUV",7)).then(h).catch((function(){}))}}}]);
//# sourceMappingURL=commons-pages.projects-pages.projects.activity-pages.projects.alert_management.details-pages.project-0778bc06.9c2950f7.chunk.js.map