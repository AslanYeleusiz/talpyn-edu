import{A as u}from"./AdminLayout.2eb06c42.js";import{L as h,H as b,a as r,o as f,c as p,g as i,w as d,F as v,d as o,j as c,k as y,v as g,e as l}from"./app.0de5844c.js";import{P as k}from"./Pagination.282955a2.js";import{V as w}from"./ValidationError.edb65d2b.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const V={components:{AdminLayout:u,Link:h,Pagination:k,ValidationError:w,Head:b},data(){return{role:{name:null}}},methods:{submit(){this.$inertia.post(route("admin.roles.store"),this.role,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},A=o("head",null,[o("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0420\u043E\u043B\u044C \u049B\u043E\u0441\u0443")],-1),L={class:"row mb-2"},C=o("div",{class:"col-sm-6"},[o("h1",{class:"m-0"},"\u0420\u043E\u043B\u044C \u049B\u043E\u0441\u0443")],-1),B={class:"col-sm-6"},E={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},T=["href"],F=o("i",{class:"fas fa-dashboard"},null,-1),H=l(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=o("i",{class:"fas fa-dashboard"},null,-1),j=l(" \u0420\u043E\u043B\u044C \u0442\u0456\u0437\u0456\u043C\u0456 "),D=[$,j],U=o("li",{class:"breadcrumb-item active"}," \u0420\u043E\u043B\u044C \u049B\u043E\u0441\u0443 ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=o("label",{for:""},"\u0410\u0442\u044B",-1),K={class:"card-footer"},O=o("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Q(e,s,R,W,a,n){const m=r("validation-error"),_=r("AdminLayout");return f(),p(v,null,[A,i(_,null,{breadcrumbs:d(()=>[o("div",L,[C,o("div",B,[o("ol",E,[o("li",N,[o("a",{href:e.route("admin.index")},M,8,T)]),o("li",P,[o("a",{href:e.route("admin.roles.index")},D,8,S)]),U])])])]),default:d(()=>[o("div",q,[o("div",z,[o("form",{method:"post",onSubmit:s[2]||(s[2]=c((...t)=>n.submit&&n.submit(...t),["prevent"]))},[o("div",G,[o("div",I,[J,y(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>a.role.name=t),name:"name",placeholder:"\u0410\u0442\u044B"},null,512),[[g,a.role.name]]),i(m,{field:"name"})])]),o("div",K,[O,o("button",{type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=c(t=>e.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const to=x(V,[["render",Q]]);export{to as default};
