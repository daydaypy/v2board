(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),l=t.n(s),c=t("/MKj"),r=t("20nU"),m=t("yWgo");class o extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u4f18\u60e0\u5238\u7ba1\u7406",type:"item",href:"/admin/coupon",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-present"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6559\u7a0b\u7ba1\u7406",type:"item",href:"/admin/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bulb"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{l.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===r["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(c["c"])(e=>{var a=e.header;return{header:a}})(o),h=t("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{l.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&i.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},i.a.createElement("i",{className:"fa fa-fw fa-search"})," ",i.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),i.a.createElement("div",null),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:void(0)",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&i.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},i.a.createElement("div",{className:"content-header bg-dark"},i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},i.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),i.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value),defaultValue:this.props.search.defaultValue}))))))}}var u=Object(c["c"])(e=>{var a=e.header;return{header:a}})(p);class v extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"javascript:void(0)"},window.v2board.title?window.v2board.title:"V2Board"," v1.0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class f extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===r["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(v,null))}}a["a"]=Object(c["c"])(e=>{var a=e.header;return{header:a}})(f)},Cb5i:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d});var n=t("p0pE"),i=t.n(n),s=t("q1tI"),l=t.n(s),c=t("Bl7J"),r=t("t3Un"),m=t("3a4m"),o=t.n(m);class d extends l.a.Component{constructor(){super(...arguments),this.state={}}componentDidMount(){Object(r["a"])("/admin/stat/getOverride").then(e=>{200===e.code&&(console.log(e),this.setState(i()({},e.data)))})}render(){return l.a.createElement(c["a"],this.props,l.a.createElement("main",{id:"main-container"},l.a.createElement("div",{className:"content content-full"},l.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u603b\u89c8"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-xl-3"},l.a.createElement("a",{className:"block block-rounded block-link-pop",href:"javascript:void(0)"},l.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},l.a.createElement("div",null,l.a.createElement("i",{className:"far si fa-2x si-wallet text-primary"})),l.a.createElement("div",{className:"ml-3 text-right"},l.a.createElement("p",{className:"font-size-h3 font-w300 mb-0"},this.state.month_income?(this.state.month_income/100).toFixed(2):"-"),l.a.createElement("p",{className:"text-muted mb-0"},"\u672c\u6708\u6536\u5165"))))),l.a.createElement("div",{className:"col-md-6 col-xl-3"},l.a.createElement("a",{className:"block block-rounded block-link-pop",href:"javascript:void(0)"},l.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},l.a.createElement("div",null,l.a.createElement("i",{className:"far si fa-2x si-users text-primary"})),l.a.createElement("div",{className:"ml-3 text-right"},l.a.createElement("p",{className:"font-size-h3 font-w300 mb-0"},this.state.month_register_total?this.state.month_register_total:"-"),l.a.createElement("p",{className:"text-muted mb-0"},"\u672c\u6708\u65b0\u589e\u7528\u6237"))))),l.a.createElement("div",{className:"col-md-6 col-xl-3"},l.a.createElement("a",{className:"block block-rounded block-link-pop",href:"javascript:void(0)",onClick:()=>o.a.push("/admin/ticket")},l.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},l.a.createElement("div",null,l.a.createElement("i",{className:"far si fa-2x si-support text-primary"})),l.a.createElement("div",{className:"ml-3 text-right"},l.a.createElement("p",{className:"font-size-h3 font-w300 mb-0"},this.state.ticket_pendding_total?this.state.ticket_pendding_total:"-"),l.a.createElement("p",{className:"text-muted mb-0"},"\u5f85\u529e\u5de5\u5355"))))),l.a.createElement("div",{className:"col-md-6 col-xl-3"},l.a.createElement("a",{className:"block block-rounded block-link-pop",href:"javascript:void(0)",onClick:()=>o.a.push("/admin/commission")},l.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},l.a.createElement("div",null,l.a.createElement("i",{className:"far si fa-2x si-user-following text-primary"})),l.a.createElement("div",{className:"ml-3 text-right"},l.a.createElement("p",{className:"font-size-h3 font-w300 mb-0"},this.state.commission_pendding_total?this.state.commission_pendding_total:"-"),l.a.createElement("p",{className:"text-muted mb-0"},"\u4f63\u91d1\u5f85\u786e\u8ba4")))))))))}}}}]);