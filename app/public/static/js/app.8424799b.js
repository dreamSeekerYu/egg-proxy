(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},a={app:0},s=[];function r(t){return c.p+"static/js/"+({"Company~Login":"Company~Login",Company:"Company",Login:"Login",Home:"Home"}[t]||t)+"."+{"Company~Login":"f6efaf23",Company:"5b44ba62",Login:"aa6ddcb8",Home:"120248b9"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Login:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var i="static/css/"+({"Company~Login":"Company~Login",Company:"Company",Login:"Login",Home:"Home"}[t]||t)+"."+{"Company~Login":"31d6cfe0",Company:"31d6cfe0",Login:"94103d1e",Home:"31d6cfe0"}[t]+".css",a=c.p+i,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08be":function(t,e,n){"use strict";var i=n("8bdb"),o=n.n(i);o.a},"131f":function(t,e,n){"use strict";var i=n("77bb"),o=n.n(i);o.a},2395:function(t,e,n){},"25ce":function(t,e,n){"use strict";var i=n("d5fa"),o=n.n(i);o.a},4319:function(t,e,n){},4360:function(t,e,n){"use strict";var i=n("2b0e"),o=n("2f62");i["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"4c0a":function(t,e){t.exports="data:image/jpeg;base64,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"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d54e");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isLoginPage?n("commonHeader"):t._e(),n("div",{staticClass:" contentbox"},[n("router-view")],1),t.isLoginPage?n("commonFooter"):t._e()],1)},a=[],s={computed:{isLoginPage:function(){return"/login"!==this.$route.path&&"/"!==this.$route.path}}},r=s,c=(n("7c55"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("8c4f"));i["a"].use(d["a"]);var f=[{path:"/",name:"Home",component:null,redirect:"/home"},{path:"/home",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"6511"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("Company~Login"),n.e("Login")]).then(n.bind(null,"dd7b"))}},{path:"/company",name:"Company",component:function(){return Promise.all([n.e("Company~Login"),n.e("Company")]).then(n.bind(null,"60f1"))}}],m=new d["a"]({mode:"history",routes:f}),p=m,h=n("4360"),g=n("caf9"),v=function(){},b=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){return t.close()}}},[t._v(t._s(t.closeText))])])])])}),w=[],C=(n("a4d3"),n("e01a"),n("c975"),{success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"}),y={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--".concat(this.type)},iconClass:function(){return C[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},k=y,E=(n("08be"),Object(c["a"])(k,b,w,!1,null,null,null)),_=E.exports;_.install=function(t){t.component(_.name,_)};var A=_,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[t.show?n("div",{staticClass:"m-dialog"},["alert"===t.type?n("div",{staticClass:"wrapper"},[t.title?n("header",{staticClass:"header"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"content",attrs:{"data-left":t.left},domProps:{innerHTML:t._s(t.msg)}}),n("footer",{staticClass:"footer"},[n("a",{staticClass:"btn btn-confirm",domProps:{innerHTML:t._s(t.configs.btnConfirm)},on:{click:t.onConfirm}})])]):t._e(),"modal"===t.type?n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content",attrs:{"data-left":t.left}},[n("p",{staticClass:"p",domProps:{innerHTML:t._s(t.msg)}}),t.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}):t._e(),t.isError?n("p",{staticClass:"error"},[t._v(t._s(t.msg))]):t._e()]),n("footer",{staticClass:"footer"},[t.configs.isShowCancelBtn?n("a",{ref:"dom",staticClass:"btn btn-cancel",on:{click:t.onCancel}},[t._v(t._s(t.configs.btnCancel))]):t._e(),n("a",{staticClass:"btn btn-confirm",domProps:{innerHTML:t._s(t.configs.btnConfirm)},on:{click:t.onConfirm}})])]):t._e(),"toast"===t.type?n("div",{staticClass:"toast"},[t._v(t._s(t.msg))]):t._e(),n("div",{staticClass:"mask",attrs:{"data-type":t.type}})]):t._e()])},P=[],x=n("53ca"),I={data:function(){return{msg:"",title:"",left:!1,transition:"fade",value:null,isError:!1,configs:{btnConfirm:"确认",btnCancel:"取消",cancelHandler:function(){},confirmHandler:function(){},isShowCancelBtn:!0},type:"toast",input:!1,show:!1}},watch:{msg:function(t){t.length},show:function(t){}},methods:{initConfigs:function(t){if(this.showHandler(!0),"object"===Object(x["a"])(t)){var e=this.configs,n=e.btnConfirm,i=e.btnCancel,o=e.cancelHandler,a=e.confirmHandler;t.btns&&(this.$set(this.configs,"btnConfirm",t.btns[0]||n),this.$set(this.configs,"btnCancel",t.btns[1]||i)),0==t.isShowCancelBtn&&this.$set(this.configs,"isShowCancelBtn",!1),t.callback&&(this.$set(this.configs,"confirmHandler",t.callback[0]||a),this.$set(this.configs,"cancelHandler",t.callback[1]||o)),t.input&&(this.input=t.input||!1)}},resetConfigs:function(){this.msg="",this.title="",this.value=null,this.configs={btnConfirm:"确认",btnCancel:"取消",cancelHandler:function(){},confirmHandler:function(){},isShowCancelBtn:!0}},showHandler:function(t){t||this.resetConfigs(),this.show=t},alert:function(t,e){this.title=e.title,this.msg=t,this.type="alert",this.transition="fade",this.initConfigs(e)},modal:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.msg=e,this.type="modal",this.transition="fade",this.initConfigs(n)},toast:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.msg=t,this.type="toast",this.transition="toast";var i=2e3;"number"===typeof n.delay&&(i=1e3*n.delay),this.show=!0,setTimeout((function(){"function"===typeof n.callback&&n.callback(),e.show=!1}),i||2e3)},onCancel:function(){this.configs.cancelHandler(this.$refs.dom),this.showHandler(!1)},onConfirm:function(){var t=this,e=new Promise((function(e){e(!t.configs.confirmHandler(t.value))}));e.then((function(e){if(e)return t.showHandler(!1);t.isError=!0}))},close:function(){this.show=!1}}},S=I,B=(n("cb84"),Object(c["a"])(S,H,P,!1,null,"3442f3c9",null)),L=B.exports,M={install:function(t){var e=t.component("mDialog",L),n=new e,i=n.$mount();document.querySelector("body").appendChild(i.$el),t.prototype.$dialog={alert:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t)return n.alert(t,e)},modal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"提示",e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e)return n.modal(t,e,i)},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t)return n.toast(t,e)}}}},j=M,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerBox"},[n("div",{staticClass:"topHeader"},[n("div",{staticClass:"left active"},[t._v("全倾")]),n("div",{staticClass:"middle"},t._l(t.baseData,(function(e,i){return n("p",{key:i,on:{click:function(n){return t.linkTo(e)}}},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"space"}),t._m(0)]),t._m(1)])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("p",{staticClass:"enterButton"},[t._v("入驻")]),n("p",{staticClass:"user-information"},[t._v("登录 | 注册")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"searchHeader"},[i("div",{staticClass:"left-logo"},[i("img",{attrs:{src:n("4c0a"),alt:"logo"}})]),i("div",{staticClass:"middle-input"},[i("input",{attrs:{type:"text"}}),i("span",{staticClass:"iconfont  icon-search"})]),i("div",{staticClass:"right-publish"},[t._v("免费发布需求")])])}],R=(n("dca8"),n("9911"),{name:"commonHeader",data:function(){return{baseData:Object.freeze([{name:"首页",link:"/"},{name:"公司",link:"/companies"},{name:"团队",link:"/teams"},{name:"个人",link:"/personal"},{name:"全倾",link:"/quanqing"}])}},methods:{linkTo:function(t){this.$router.push(t.link)}}}),Q=R,O=(n("25ce"),Object(c["a"])(Q,D,K,!1,null,"783279da",null)),G=O.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerbox"},[n("div",{staticClass:"left"},[n("div",{staticClass:"topTitle"},t._l(t.baseData,(function(e,i){return n("div",{key:i,staticClass:"blockitembox"},[n("p",[t._v(t._s(e.name))]),n("ul",t._l(e.children,(function(e,i){return n("li",{key:i},[t._v(t._s(e.name))])})),0)])})),0),n("div",{staticClass:"bottom"},[n("div",[t._v("友情链接：")]),n("ul",t._l(t.goodPartner,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.openNewPage(e.link)}}},[t._v(t._s(e.name))])})),0)])]),t._m(0)])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("p",{staticClass:"title"},[t._v("全倾")]),n("ul",[n("li",[t._v("京ICP备3987975号")]),n("li",[t._v("北京市海淀区清华同方科技广场D座7层")]),n("li",[t._v("contact@quanqing.com")])])])}],T={name:"commonFooter",data:function(){return{baseData:Object.freeze([{name:"主营服务",link:"",children:[{name:"网站建设",link:""},{name:"APP开发",link:""},{name:"小程序开发",link:""},{name:"内部系统开发",link:""}]},{name:"全倾技术标准",link:"",children:[{name:"可用性标准",link:""},{name:"性能标准",link:""},{name:"安全标准",link:""},{name:"架构标准",link:""}]},{name:"全倾技术产品",link:"",children:[{name:"页面奔溃监控",link:""},{name:"性能检测",link:""},{name:"压力测试",link:""},{name:"安全测试",link:""}]},{name:"入驻",link:"",children:[{name:"技术公司入驻",link:""},{name:"兼职员工入驻",link:""},{name:"兼职团队入驻",link:""},{name:"全职员工入驻",link:""}]},{name:"合作",link:"",children:[{name:"公司推广分佣",link:""},{name:"个人推广分佣",link:""}]},{name:"关于",link:"",children:[{name:"全倾介绍",link:""},{name:"联系全倾",link:""}]}]),goodPartner:Object.freeze([{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"},{name:"百度百度",link:"https://www.baidu.com/"},{name:"百度",link:"https://www.baidu.com/"}])}},methods:{openNewPage:function(t){window.open(t,"_blank")}}},Y=T,q=(n("131f"),Object(c["a"])(Y,J,F,!1,null,"056cf65a",null)),U=q.exports;n("2d26"),n("96cf");i["a"].component("commonHeader",G),i["a"].component("commonFooter",U),i["a"].config.productionTip=!1,i["a"].prototype.$alert=v,i["a"].use(j),i["a"].use(A),i["a"].use(g["a"],{error:"./static/error.png",loading:"./static/loading.png"}),new i["a"]({router:p,store:h["a"],render:function(t){return t(u)}}).$mount("#app")},"77bb":function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("2395"),o=n.n(i);o.a},"8bdb":function(t,e,n){},cb84:function(t,e,n){"use strict";var i=n("4319"),o=n.n(i);o.a},d54e:function(t,e,n){},d5fa:function(t,e,n){}});