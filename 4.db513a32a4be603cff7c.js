(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{a1ig:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return J}));var i=r("ofXK"),c=r("tyNb"),n=r("LRne"),s=r("vkgz"),o=r("fXoL"),a=r("qXBG");let p=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(){return Object(n.a)(this.auth.isLoggedIn()).pipe(Object(s.a)(t=>{t||this.router.navigateByUrl("/")}))}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(c.b),o.Rb(a.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=r("XNiG"),b=r("zx2A");function l(t){return e=>e.lift(new d(t))}class d{constructor(t){this.notifier=t}call(t,e){const r=new h(t),i=Object(b.c)(this.notifier,new b.a(r));return i&&!r.seenValue?(r.add(i),e.subscribe(r)):r}}class h extends b.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var m=r("jhN1"),g=r("JIr8"),f=r("lJxs"),y=r("AytR"),v=r("tk/3"),w=r("5eHb");let M=(()=>{class t{constructor(t,e){this.http=t,this.toastr=e,this.baseUrl=y.a.baseUrl}getProductList(){return this.http.get(this.baseUrl+"products.json").pipe(Object(g.a)(t=>(console.error(t),this.toastr.error(t,"Error"),Object(n.a)(null))))}getProductById(t){return this.http.get(this.baseUrl+"products.json").pipe(Object(f.a)(({productsList:e})=>e.find(e=>e.id===t)),Object(g.a)(t=>(console.error(t),this.toastr.error(t,"Error"),Object(n.a)(null))))}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(v.b),o.Rb(w.b))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=r("2Vo4");let _=(()=>{class t{constructor(t){this.typeList=[],this.filterByType$=new x.a(null),t.getProductList().subscribe(t=>{console.log(t.productsList),this.uniqueTypesArray(t.productsList)})}uniqueTypesArray(t){this.typeList=[...new Set(t.reduce((t,e)=>(t.push(e.type),t),[]))]}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(M))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var j=r("z6cu"),O=r("eIep");function N(t){const e=e=>e?Object(n.a)(e):(setTimeout(()=>this.productList=N(t),100),Object(j.a)("Error!"));return Object(n.a)(this).pipe(Object(f.a)(e=>e?e.list.reduce((e,r)=>(r.type===t&&e.push(r),e),[]):null),Object(O.a)(t=>e(t)),Object(g.a)(t=>(console.warn(t),Object(n.a)(null))))}let k=(()=>{class t{constructor(t){this.sanitization=t}getImg(t){return this.sanitization.bypassSecurityTrustUrl(` https://scoop.co.za/download/marketing/images/${t}.jpg`)}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(m.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-small-card"]],inputs:{product:"product",isSimilar:"isSimilar"},decls:11,vars:7,consts:[[1,"product-card","show-item"],[1,"product__card-img-wrapper"],[1,"product__card-img",3,"src","alt"],[1,"product-card__bottom","d-flex","justify-content-between","align-items-end"],[1,"d-flex","flex-column"],[1,"product__type","text-muted"],[1,"product__name","font-weight-bold"],[1,"product__price","text-success"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.Jb(2,"img",2),o.Mb(),o.Nb(3,"div",3),o.Nb(4,"div",4),o.Nb(5,"small",5),o.jc(6),o.Mb(),o.Nb(7,"span",6),o.jc(8),o.Mb(),o.Mb(),o.Nb(9,"span",7),o.jc(10),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.Ab("product-card__similar",e.isSimilar),o.xb(2),o.Zb("src",e.getImg(e.product.img),o.ec)("alt",e.product.name),o.xb(4),o.kc(e.product.type),o.xb(2),o.kc(e.product.name),o.xb(2),o.lc("",e.product.price," $"))},styles:[".product-card[_ngcontent-%COMP%]{border:1px solid #e5e5e5;border-radius:1rem;padding:2rem;transition:all .2s cubic-bezier(.25,.46,.45,.94);cursor:pointer}.product-card[_ngcontent-%COMP%]:hover{box-shadow:0 0 1.5rem 0 rgba(0,0,0,.3)}.product__card-img[_ngcontent-%COMP%]{max-width:100%}.product-card__similar[_ngcontent-%COMP%]{padding:1rem}.product-card__similar[_ngcontent-%COMP%]   .product-card__bottom[_ngcontent-%COMP%]{display:block!important;text-align:center;margin-top:1rem}"]}),t})();function L(t,e){if(1&t){const t=o.Ob();o.Lb(0),o.Nb(1,"app-small-card",3),o.Ub("click",(function(){o.cc(t);const r=e.$implicit;return o.Wb().navigate(r.id)})),o.Mb(),o.Kb()}if(2&t){const t=e.$implicit;o.xb(1),o.Zb("product",t)("isSimilar",!0)}}let I=(()=>{class t{constructor(t,e){this.api=t,this.router=e}navigate(t){this.router.navigate(["products/details/",t]),document.querySelector(".products-router-container").scrollTo(0,0)}ngOnInit(){this.api.getProductList().subscribe(t=>{console.log(t.productsList),this.list=t.productsList,this.productList=N.call(this,this.type)})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(M),o.Ib(c.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-similar-products"]],inputs:{type:"type"},decls:4,vars:3,consts:[[1,"container","product__container"],[1,"product-wrapper"],[4,"ngFor","ngForOf"],[3,"product","isSimilar","click"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.ic(2,L,2,2,"ng-container",2),o.Xb(3,"async"),o.Mb(),o.Mb()),2&t&&(o.xb(2),o.Zb("ngForOf",o.Yb(3,1,e.productList)))},directives:[i.i,k],pipes:[i.b],styles:[".product__container[_ngcontent-%COMP%]{padding:2rem 0 4rem}.product-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}@media (min-width:768px){.product-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}}"]}),t})();function S(t,e){if(1&t&&(o.Nb(0,"div",4),o.Nb(1,"div",5),o.Jb(2,"img",6),o.Mb(),o.Nb(3,"div",7),o.Nb(4,"small",8),o.jc(5),o.Mb(),o.Nb(6,"span",9),o.jc(7),o.Mb(),o.Nb(8,"span",10),o.jc(9),o.Mb(),o.Nb(10,"span",11),o.jc(11),o.Mb(),o.Mb(),o.Mb()),2&t){const t=o.Wb();o.xb(2),o.Zb("src",t.getImg(t.product.img),o.ec)("alt",t.product.name),o.xb(3),o.kc(t.product.type),o.xb(2),o.kc(t.product.name),o.xb(2),o.lc("",t.product.price," $"),o.xb(2),o.kc(t.product.desc)}}function P(t,e){if(1&t&&o.Jb(0,"app-similar-products",12),2&t){const t=o.Wb();o.Zb("type",t.product.type)}}let C=(()=>{class t{constructor(t,e,r,i){this.sanitization=t,this.api=e,this.route=r,this.filterService=i,this.unsubscribe$=new u.a}getImg(t){return this.sanitization.bypassSecurityTrustUrl(` https://scoop.co.za/download/marketing/images/${t}.jpg`)}getProduct(t){this.api.getProductById(+t).subscribe(t=>{this.product=t,this.filterService.filterByType$.next(t.type)})}ngOnInit(){this.route.params.pipe(l(this.unsubscribe$)).subscribe(t=>this.getProduct(t.id))}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.filterService.filterByType$.next(null)}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(m.b),o.Ib(M),o.Ib(c.a),o.Ib(_))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-big-card"]],decls:6,vars:2,consts:[[1,"text-primary","text-center","mt-5","mb-5"],["class","d-flex justify-content-center show-item",4,"ngIf"],[1,"text-primary","text-center","mt-5","mb-2"],[3,"type",4,"ngIf"],[1,"d-flex","justify-content-center","show-item"],[1,"product__big-card-img-wrapper","mr-4","w-50"],[1,"product__big-card-img","w-100",3,"src","alt"],[1,"d-flex","flex-column","pr-2"],[1,"product__type","text-muted"],[1,"product__name","font-weight-bold"],[1,"product__price","text-success"],[1,"product__desc"],[3,"type"]],template:function(t,e){1&t&&(o.Nb(0,"h1",0),o.jc(1," Product\n"),o.Mb(),o.ic(2,S,12,6,"div",1),o.Nb(3,"h4",2),o.jc(4," Similar Products\n"),o.Mb(),o.ic(5,P,1,1,"app-similar-products",3)),2&t&&(o.xb(2),o.Zb("ngIf",e.product),o.xb(3),o.Zb("ngIf",e.product))},directives:[i.j,I],styles:[".product__name[_ngcontent-%COMP%]{font-size:2rem}"]}),t})();var T=r("pLZG");function $(t,e){if(1&t){const t=o.Ob();o.Lb(0),o.Nb(1,"app-small-card",3),o.Ub("click",(function(){o.cc(t);const r=e.$implicit;return o.Wb().navigate(r.id)})),o.Mb(),o.Kb()}if(2&t){const t=e.$implicit;o.xb(1),o.Zb("product",t)}}let U=(()=>{class t{constructor(t,e,r){this.api=t,this.filterService=e,this.router=r,this.unsubscribe$=new u.a,e.filterByType$.pipe(Object(T.a)(t=>!!t),l(this.unsubscribe$)).subscribe(t=>this.filterByType(t))}navigate(t){this.router.navigate(["products/details/",t])}filterByType(t){this.productList="reset"===t?Object(n.a)(this.list):N.call(this,t)}setProducts(t){return this.productList=Object(n.a)(t)}ngOnInit(){this.api.getProductList().subscribe(t=>{console.log(t.productsList),this.filterService.saveType?this.filterByType(this.filterService.saveType):this.setProducts(t.productsList),this.list=t.productsList})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(M),o.Ib(_),o.Ib(c.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-product-list"]],decls:4,vars:3,consts:[[1,"container","product__container"],[1,"product-wrapper"],[4,"ngFor","ngForOf"],[3,"product","click"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.ic(2,$,2,1,"ng-container",2),o.Xb(3,"async"),o.Mb(),o.Mb()),2&t&&(o.xb(2),o.Zb("ngForOf",o.Yb(3,1,e.productList)))},directives:[i.i,k],pipes:[i.b],styles:[".product__container[_ngcontent-%COMP%]{padding:2rem 0 4rem}.product-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}@media (min-width:768px){.product-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]}),t})();const B=function(){return["/products"]};function Z(t,e){if(1&t){const t=o.Ob();o.Nb(0,"a",13),o.Ub("click",(function(){o.cc(t);const r=e.$implicit,i=o.Wb();return[i.eventString(r),i.closeMenu()]})),o.jc(1),o.Mb()}if(2&t){const t=e.$implicit;o.Zb("routerLink",o.ac(2,B)),o.xb(1),o.kc(t)}}let z=(()=>{class t{constructor(t,e,r){this.auth=t,this.router=e,this.filterService=r,this.isShowMenu=!1,this.type=new o.n}eventString(t){this.type.emit(t),this.currentType=t,this.filterService.saveType=t}reset(){this.type.emit("reset"),this.currentType=null,this.filterService.saveType=null}toggleMenu(){this.isShowMenu=!this.isShowMenu}closeMenu(){this.isShowMenu=!1}logout(){this.auth.logout().subscribe(t=>{t&&this.router.navigateByUrl("/")})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(a.a),o.Ib(c.b),o.Ib(_))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-nav"]],inputs:{typeList:"typeList"},outputs:{type:"type"},decls:18,vars:8,consts:[[1,"navbar","navbar-dark","bg-primary"],[1,"container","align-items-baseline"],[1,"logo-wrapper","d-flex","justify-content-between","align-items-baseline","w-100"],["href","#",1,"navbar-brand","font-weight-bold","logo"],["href","javascript:void(0)",1,"text-light","d-md-none","d-block",3,"click"],[1,"navbar-nav","ml-md-5","ml-0","mr-auto","d-flex","flex-row","align-items-baseline"],[1,"nav-item","dropdown","mr-4"],["role","button",1,"nav-link","dropdown-toggle",3,"click"],[1,"dropdown-menu","position-absolute"],["class","dropdown-item","href","javascript:void(0)",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"nav-item"],[1,"text-light","mr-auto",3,"routerLink","click"],["href","javascript:void(0)",1,"text-light","d-none","d-md-block",3,"click"],["href","javascript:void(0)",1,"dropdown-item",3,"routerLink","click"]],template:function(t,e){1&t&&(o.Nb(0,"nav",0),o.Nb(1,"div",1),o.Nb(2,"div",2),o.Nb(3,"a",3),o.jc(4,"Logo"),o.Mb(),o.Nb(5,"a",4),o.Ub("click",(function(){return e.logout()})),o.jc(6,"Logout"),o.Mb(),o.Mb(),o.Nb(7,"ul",5),o.Nb(8,"li",6),o.Nb(9,"span",7),o.Ub("click",(function(){return e.toggleMenu()})),o.jc(10),o.Mb(),o.Nb(11,"div",8),o.ic(12,Z,2,3,"a",9),o.Mb(),o.Mb(),o.Nb(13,"li",10),o.Nb(14,"a",11),o.Ub("click",(function(){return[e.reset(),e.closeMenu()]})),o.jc(15,"Reset"),o.Mb(),o.Mb(),o.Mb(),o.Nb(16,"a",12),o.Ub("click",(function(){return e.logout()})),o.jc(17,"Logout"),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.xb(9),o.Ab("show",e.isShowMenu),o.xb(1),o.lc(" ",e.currentType?e.currentType:"Choose Category"," "),o.xb(1),o.Ab("show",e.isShowMenu),o.xb(1),o.Zb("ngForOf",e.typeList),o.xb(2),o.Zb("routerLink",o.ac(7,B)))},directives:[i.i,c.c],styles:[".dropdown-toggle[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}@media (min-width:768px){.logo-wrapper[_ngcontent-%COMP%]{width:auto!important}}"]}),t})();const F=[{path:"",component:(()=>{class t{constructor(t){this.filterService=t}filterByType(t){this.filterService.filterByType$.next(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(_))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-products"]],decls:4,vars:1,consts:[[3,"typeList","type"],[1,"products-router-container"],[1,"container"]],template:function(t,e){1&t&&(o.Nb(0,"app-nav",0),o.Ub("type",(function(t){return e.filterByType(t)})),o.Mb(),o.Nb(1,"div",1),o.Nb(2,"div",2),o.Jb(3,"router-outlet"),o.Mb(),o.Mb()),2&t&&o.Zb("typeList",e.filterService.typeList)},directives:[z,c.e],styles:[".products-router-container[_ngcontent-%COMP%]{max-height:calc(100vh - 5rem);overflow-y:auto}"]}),t})(),canActivate:[p],children:[{path:"details/:id",component:C,pathMatch:"prefix"},{path:"",component:U,pathMatch:"prefix"}]}];let A=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[c.d.forChild(F)],c.d]}),t})(),J=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[i.c,A]]}),t})()}}]);