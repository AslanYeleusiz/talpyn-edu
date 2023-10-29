import{A as C}from"./AdminLayout.2eb06c42.js";import{L as V,H as S,a as y,o as h,c as v,g as l,w as g,F as w,d as t,j as c,k as i,u,v as b,x as k,f as U,m as A,e as _,t as T}from"./app.0de5844c.js";import{P as E}from"./Pagination.282955a2.js";import{V as D}from"./ValidationError.edb65d2b.js";import{C as L}from"./ckeditor.343d27cd.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";const B={components:{AdminLayout:C,Link:V,Pagination:E,ValidationError:D,Head:S},data(){return{surak:{surak:"",zhauaptar:[{variant:""},{variant:""},{variant:""},{variant:""},{variant:""}],correct_answer_number:null,archive:0,tusinik:null},bagyt_id:route().params.bagyt,option_id:route().params.option,input_type:"input",changed:1}},methods:{submit(){console.log(this.surak),this.$inertia.post(route("admin.olimpiadaSuraktar.store",[this.bagyt_id,this.option_id]),this.surak,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},getAnswerOptionTextType(n){switch(n){case 1:return"A ";case 2:return"B ";case 3:return"C ";case 4:return"D ";case 5:return"E ";case 6:return"F ";case 7:return"G ";case 8:return"H ";case 9:return"J "}},changeInputType(n){this.input_type==="ckeditor"&&this.changed&&(this.changed=0,this.getCkeditor())},getCkeditor(){var n=document.querySelectorAll("#editor"),e=window.location.origin,f=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),p=[this.surak.surak];this.surak.zhauaptar.forEach(s=>{p.push(s.variant)}),n.forEach((s,a)=>{L.create(s,{initialData:p[a],simpleUpload:{uploadUrl:e+"/ckeditor/upload-image",withCredentials:!0,headers:{"X-CSRF-TOKEN":f}}}).then(r=>{r.model.document.on("change:data",()=>{a?this.surak.zhauaptar[a-1].variant=r.getData():this.surak.surak=r.getData()})}).catch(r=>{console.log(r)})})}}},F=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 | \u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443")],-1),M={class:"row mb-2"},N=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443")],-1),q={class:"col-sm-6"},H={class:"breadcrumb float-sm-right"},O={class:"breadcrumb-item"},I=["href"],P=t("i",{class:"fas fa-dashboard"},null,-1),R=_(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),j=[P,R],G={class:"breadcrumb-item"},J=["href"],K=t("i",{class:"fas fa-dashboard"},null,-1),Q=_(" \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u0431\u0430\u0493\u044B\u0442 "),X=[K,Q],W=t("li",{class:"breadcrumb-item active"},"\u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443",-1),Y={class:"container-fluid"},Z={class:"card card-primary"},$={class:"card-body"},tt={class:"table table-bordered"},et={class:"odd even"},st=t("td",{class:"w-25"},[t("b",null,"\u0421\u04B1\u0440\u0430\u049B"),_(),t("i",{class:"red"},"*")],-1),ot={id:"turnirQuestion"},nt=t("textarea",{id:"editor"},null,-1),at=t("a",{class:"d-block mt-2",href:"https://latex.codecogs.com/eqneditor/editor.php",target:"_blank"},"Latex \u0444\u043E\u0440\u043C\u0443\u043B\u0430",-1),rt=[nt,at],it={class:"odd even"},lt=t("td",null,"\u0416\u0430\u0443\u0430\u043F \u043D\u04B1\u0441\u049B\u0430\u043B\u0430\u0440\u044B\u043D \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437:",-1),dt={class:"d-flex align-items-center"},ct={class:"d-flex align-items-center mr-2"},ut=t("p",{class:"ml-2"},"- input",-1),_t={class:"d-flex align-items-center"},pt=t("p",{class:"ml-2"},"- ckeditor",-1),mt=t("i",{class:"red"},"*",-1),ht={class:"d-flex align-items-center"},vt=["value"],bt=t("textarea",{name:"variant",id:"editor"},null,-1),kt=[bt],ft=["onUpdate:modelValue"],yt={class:"odd even"},gt=t("td",null,[t("b",null,"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456/ \u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456 \u0435\u043C\u0435\u0441 ")],-1),wt={class:"custom-control custom-switch"},xt=t("label",{class:"custom-control-label",for:"customSwitch1"},"\u0410\u0440\u0445\u0438\u0432",-1),Ct={class:"odd even"},Vt=t("i",{class:"fa fa-trash"},null,-1),St=_(" \u0422\u0430\u0437\u0430\u043B\u0430\u0443 "),Ut=[Vt,St],At={class:"form-group"},Tt=t("label",{for:""},"\u0422\u04AF\u0441\u0456\u043D\u0456\u043A",-1),Et={class:"card-footer"},Dt=t("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Lt(n,e,f,p,s,a){const r=y("validation-error"),x=y("AdminLayout");return h(),v(w,null,[F,l(x,null,{breadcrumbs:g(()=>[t("div",M,[N,t("div",q,[t("ol",H,[t("li",O,[t("a",{href:n.route("admin.index")},j,8,I)]),t("li",G,[t("a",{href:n.route("admin.olimpiadaSuraktar.index",[s.bagyt_id,s.option_id])},X,8,J)]),W])])])]),default:g(()=>[t("div",Y,[t("div",Z,[t("form",{method:"post",onSubmit:e[10]||(e[10]=c((...o)=>a.submit&&a.submit(...o),["prevent"]))},[t("div",$,[t("form",{onSubmit:e[8]||(e[8]=c((...o)=>a.submit&&a.submit(...o),["prevent"]))},[t("table",tt,[t("tbody",null,[t("tr",et,[st,t("td",ot,[i(t("div",null,rt,512),[[u,s.input_type==="ckeditor"]]),i(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.surak.surak=o),type:"text",class:"form-control"},null,512),[[u,s.input_type!="ckeditor"],[b,s.surak.surak]]),l(r,{field:"surak"})])]),t("tr",it,[lt,t("td",null,[t("div",dt,[t("div",ct,[i(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.input_type=o),type:"radio",class:"select-answer",value:"input"},null,512),[[k,s.input_type]]),ut]),t("div",_t,[i(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.input_type=o),type:"radio",class:"select-answer",value:"ckeditor",onChange:e[3]||(e[3]=o=>a.changeInputType())},null,544),[[k,s.input_type]]),pt])])])]),(h(!0),v(w,null,U(s.surak.zhauaptar,(o,d)=>(h(),v("tr",{key:"zhauap"+d,class:"odd even"},[t("td",null,[t("b",null,T(a.getAnswerOptionTextType(d+1)),1),mt]),t("td",null,[t("div",ht,[i(t("input",{"onUpdate:modelValue":e[4]||(e[4]=m=>s.surak.correct_answer_number=m),class:"select-answer mr-2 h-25",type:"radio",name:"Buttonradio25",value:d},null,8,vt),[[k,s.surak.correct_answer_number]]),i(t("div",null,kt,512),[[u,s.input_type==="ckeditor"]]),i(t("input",{"onUpdate:modelValue":m=>o.variant=m,type:"text",class:"form-control"},null,8,ft),[[u,s.input_type!="ckeditor"],[b,o.variant]])]),l(r,{field:`zhauaptar.${d}.variant`},null,8,["field"])])]))),128)),t("tr",yt,[gt,t("td",null,[t("div",wt,[i(t("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=o=>s.surak.archive=o),"true-value":"1","false-value":"0",class:"custom-control-input",id:"customSwitch1"},null,512),[[A,s.surak.archive]]),xt]),l(r,{field:"is_active"})])]),t("tr",Ct,[t("td",null,[t("button",{class:"btn btn-danger",type:"button",onClick:e[6]||(e[6]=c((...o)=>n.clear&&n.clear(...o),["prevent"]))},Ut)])])])]),t("div",At,[Tt,i(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=o=>s.surak.tusinik=o),name:"name",placeholder:"\u0422\u04AF\u0441\u0456\u043D\u0456\u043A"},null,512),[[b,s.surak.tusinik]]),l(r,{field:"tusinik"})])],32)]),t("div",Et,[Dt,t("button",{type:"button",class:"btn btn-danger",onClick:e[9]||(e[9]=c(o=>n.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const Ht=z(B,[["render",Lt]]);export{Ht as default};
