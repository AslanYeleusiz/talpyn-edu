import{A as f}from"./AdminLayout-ee86e078.js";import{L as p,H as b,r as d,o as v,d as k,k as n,w as c,F as g,a as o,f as m,b as i,v as u,u as y,s as _}from"./app-20f48993.js";import{P as w}from"./Pagination-495d9059.js";import{V as x}from"./ValidationError-070e76c6.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{AdminLayout:f,Link:p,Pagination:w,ValidationError:x,Head:b},data(){return{role:{name:{kk:null,ru:null},is_general:!1}}},methods:{submit(){this.$inertia.post(route("admin.roles.store"),this.role,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},C=o("head",null,[o("title",null,"Админ панель | Рөл қосу")],-1),L={class:"row mb-2"},S=o("div",{class:"col-sm-6"},[o("h1",{class:"m-0"},"Рөл қосу")],-1),B={class:"col-sm-6"},E={class:"breadcrumb float-sm-right"},M={class:"breadcrumb-item"},N=["href"],T=o("i",{class:"fas fa-dashboard"},null,-1),U=_(" Басты бет "),F=[T,U],H={class:"breadcrumb-item"},P=["href"],D=o("i",{class:"fas fa-dashboard"},null,-1),j=_(" Рөлдер тізімі "),q=[D,j],z=o("li",{class:"breadcrumb-item active"},"Рөл қосу",-1),G={class:"container-fluid"},I={class:"card card-primary"},J={class:"card-body"},K={class:"form-group"},O=o("label",{for:""},"Аты (қазақша)",-1),Q={class:"form-group"},R=o("label",{for:""},"Аты (орысша)",-1),W={class:"form-group"},X={class:"custom-control custom-switch"},Y=o("label",{class:"custom-control-label",for:"customSwitch1"},"Жалпылама роль",-1),Z={class:"card-footer"},$=o("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function oo(r,s,so,eo,t,a){const l=d("validation-error"),h=d("AdminLayout");return v(),k(g,null,[C,n(h,null,{breadcrumbs:c(()=>[o("div",L,[S,o("div",B,[o("ol",E,[o("li",M,[o("a",{href:r.route("admin.index")},F,8,N)]),o("li",H,[o("a",{href:r.route("admin.roles.index")},q,8,P)]),z])])])]),default:c(()=>[o("div",G,[o("div",I,[o("form",{method:"post",onSubmit:s[4]||(s[4]=m((...e)=>a.submit&&a.submit(...e),["prevent"]))},[o("div",J,[o("div",K,[O,i(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>t.role.name.kk=e),placeholder:"Аты"},null,512),[[u,t.role.name.kk]]),n(l,{field:"name.kk"},null,8,["field"])]),o("div",Q,[R,i(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>t.role.name.ru=e),placeholder:"Аты"},null,512),[[u,t.role.name.ru]]),n(l,{field:"name.ru"},null,8,["field"])]),o("div",W,[o("div",X,[i(o("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=e=>t.role.is_general=e),class:"custom-control-input",id:"customSwitch1"},null,512),[[y,t.role.is_general]]),Y]),n(l,{field:"is_general"})])]),o("div",Z,[$,o("button",{type:"button",class:"btn btn-danger",onClick:s[3]||(s[3]=m(e=>r.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const ao=V(A,[["render",oo]]);export{ao as default};