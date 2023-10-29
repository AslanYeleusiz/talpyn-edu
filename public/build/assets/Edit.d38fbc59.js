import{A as b}from"./AdminLayout.2eb06c42.js";import{L as f,H as p,a as d,o as v,c as y,g as r,w as c,F as k,d as s,e as n,t as m,j as I,k as g,v as x}from"./app.0de5844c.js";import{P as L}from"./Pagination.282955a2.js";import{V as w}from"./ValidationError.edb65d2b.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const A={components:{AdminLayout:b,Link:f,Pagination:L,ValidationError:w,Head:p},props:["mektep","oblys","audan"],data(){return{oblysId:route().params.oblysId,audanId:route().params.audanId}},methods:{submit(){this.$inertia.put(route("admin.mektep.update",[this.oblysId,this.audanId,this.mektep.id]),this.mektep,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},E=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041C\u0435\u043A\u0435\u043C\u0435 \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),B={class:"row mb-2"},N=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u041C\u0435\u043A\u0435\u043C\u0435 \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),S={class:"col-sm-6"},T={class:"breadcrumb float-sm-right"},C={class:"breadcrumb-item"},D=["href"],F=s("i",{class:"fas fa-dashboard"},null,-1),H=n(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),M=[F,H],P={class:"breadcrumb-item active"},j=["href"],q=s("i",{class:"fas fa-dashboard"},null,-1),U=n(" \u041E\u0431\u043B\u044B\u0441\u0442\u0430\u0440 "),z=[q,U],G={class:"breadcrumb-item active"},J=["href"],K=s("i",{class:"fas fa-dashboard"},null,-1),O={class:"breadcrumb-item active"},Q=["href"],R=s("i",{class:"fas fa-dashboard"},null,-1),W=s("li",{class:"breadcrumb-item active"},"\u041C\u0435\u043A\u0435\u043C\u0435 \u04E9\u0437\u0433\u0435\u0440\u0442\u0443",-1),X={class:"container-fluid"},Y={class:"card card-primary"},Z={class:"card-body"},$={class:"form-group"},ss=s("label",{for:""},"\u0410\u0442\u044B",-1),es={class:"card-footer"},ts=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1),os=s("button",{type:"button",class:"btn btn-danger"}," \u0410\u0440\u0442\u049B\u0430 ",-1);function as(e,o,a,ns,t,l){const _=d("validation-error"),u=d("Link"),h=d("AdminLayout");return v(),y(k,null,[E,r(h,null,{breadcrumbs:c(()=>[s("div",B,[N,s("div",S,[s("ol",T,[s("li",C,[s("a",{href:e.route("admin.index")},M,8,D)]),s("li",P,[s("a",{href:e.route("admin.oblys.index")},z,8,j)]),s("li",G,[s("a",{href:e.route("admin.audan.index",t.oblysId)},[K,n(" "+m(a.oblys.name),1)],8,J)]),s("li",O,[s("a",{href:e.route("admin.mektep.index",[t.oblysId,t.audanId])},[R,n(" "+m(a.audan.name),1)],8,Q)]),W])])])]),default:c(()=>[s("div",X,[s("div",Y,[s("form",{method:"post",onSubmit:o[1]||(o[1]=I((...i)=>l.submit&&l.submit(...i),["prevent"]))},[s("div",Z,[s("div",$,[ss,g(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=i=>a.mektep.name=i),name:"name",placeholder:"\u0410\u0442\u044B",required:""},null,512),[[x,a.mektep.name]]),r(_,{field:"name"})])]),s("div",es,[ts,r(u,{href:e.route("admin.mektep.index",[t.oblysId,t.audanId])},{default:c(()=>[os]),_:1},8,["href"])])],32)])])]),_:1})],64)}const ms=V(A,[["render",as]]);export{ms as default};