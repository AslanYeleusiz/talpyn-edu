import{A as V}from"./AdminLayout.2eb06c42.js";import{L as S,H as U,a as g,o as b,c as v,g as d,w as y,F as w,d as t,j as u,k as l,u as _,v as k,x as f,f as A,m as T,e as m,t as E}from"./app.0de5844c.js";import{P as L}from"./Pagination.282955a2.js";import{V as D}from"./ValidationError.edb65d2b.js";import{C as x}from"./ckeditor.343d27cd.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const q={components:{AdminLayout:V,Link:S,Pagination:L,ValidationError:D,Head:U},props:["surak"],data(){return{changed:1,bagyt_id:route().params.bagyt,option_id:route().params.option,editor:x,input_type:"input",editorConfig:{}}},methods:{changeInputType(n){this.input_type==="ckeditor"&&this.changed&&(this.changed=0,this.getCkeditor())},getCkeditor(){var n=document.querySelectorAll("#editor"),e=window.location.origin,a=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),h=[this.surak.surak];this.surak.zhauap.forEach(o=>{h.push(o.variant)}),n.forEach((o,i)=>{x.create(o,{initialData:h[i],simpleUpload:{uploadUrl:e+"/ckeditor/upload-image",withCredentials:!0,headers:{"X-CSRF-TOKEN":a}}}).then(r=>{r.model.document.on("change:data",()=>{i?this.surak.zhauap[i-1].variant=r.getData():this.surak.surak=r.getData()})}).catch(r=>{console.log(r)})})},submit(){this.$inertia.put(route("admin.olimpiadaSuraktar.update",[this.bagyt_id,this.option_id,this.surak.id]),this.surak,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},getAnswerOptionTextType(n){switch(n){case 1:return"A ";case 2:return"B ";case 3:return"C ";case 4:return"D ";case 5:return"E ";case 6:return"F ";case 7:return"G ";case 8:return"H ";case 9:return"J "}}}},z=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 | \u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443")],-1),F={class:"row mb-2"},M=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443")],-1),N={class:"col-sm-6"},H={class:"breadcrumb float-sm-right"},O={class:"breadcrumb-item"},I=["href"],P=t("i",{class:"fas fa-dashboard"},null,-1),R=m(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),j=[P,R],G={class:"breadcrumb-item"},J=["href"],K=t("i",{class:"fas fa-dashboard"},null,-1),Q=m(" \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u0431\u0430\u0493\u044B\u0442 "),X=[K,Q],W=t("li",{class:"breadcrumb-item active"},"\u0421\u04B1\u0440\u0430\u049B \u049B\u043E\u0441\u0443",-1),Y={class:"container-fluid"},Z={class:"card card-primary"},$={class:"card-body"},tt={class:"table table-bordered"},et={class:"odd even"},st=t("td",{class:"w-25"},[t("b",null,"\u0421\u04B1\u0440\u0430\u049B"),m(),t("i",{class:"red"},"*")],-1),ot={id:"turnirQuestion"},at=t("textarea",{name:"surak",id:"editor"},null,-1),nt=t("a",{class:"d-block mt-2",href:"https://latex.codecogs.com/eqneditor/editor.php",target:"_blank"},"Latex \u0444\u043E\u0440\u043C\u0443\u043B\u0430",-1),it=[at,nt],rt={class:"odd even"},lt=t("td",null,"\u0416\u0430\u0443\u0430\u043F \u043D\u04B1\u0441\u049B\u0430\u043B\u0430\u0440\u044B\u043D \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437:",-1),dt={class:"d-flex align-items-center"},ct={class:"d-flex align-items-center mr-2"},ut=t("p",{class:"ml-2"},"- input",-1),_t={class:"d-flex align-items-center"},mt=t("p",{class:"ml-2"},"- ckeditor",-1),ht=t("i",{class:"red"},"*",-1),pt={class:"d-flex align-items-center"},bt=["value"],vt=t("textarea",{name:"variant",id:"editor"},null,-1),kt=t("a",{class:"d-block mt-2",href:"https://latex.codecogs.com/eqneditor/editor.php",target:"_blank"},"Latex \u0444\u043E\u0440\u043C\u0443\u043B\u0430",-1),ft=[vt,kt],gt=["onUpdate:modelValue"],yt={class:"odd even"},wt=t("td",null,[t("b",null,"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456/ \u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456 \u0435\u043C\u0435\u0441 ")],-1),xt={class:"custom-control custom-switch"},Ct=t("label",{class:"custom-control-label",for:"customSwitch1"},"\u0410\u0440\u0445\u0438\u0432",-1),Vt={class:"odd even"},St=t("i",{class:"fa fa-trash"},null,-1),Ut=m(" \u0422\u0430\u0437\u0430\u043B\u0430\u0443 "),At=[St,Ut],Tt={class:"form-group"},Et=t("label",{for:""},"\u0422\u04AF\u0441\u0456\u043D\u0456\u043A",-1),Lt={class:"card-footer"},Dt=t("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Bt(n,e,a,h,o,i){const r=g("validation-error"),C=g("AdminLayout");return b(),v(w,null,[z,d(C,null,{breadcrumbs:y(()=>[t("div",F,[M,t("div",N,[t("ol",H,[t("li",O,[t("a",{href:n.route("admin.index")},j,8,I)]),t("li",G,[t("a",{href:n.route("admin.olimpiadaSuraktar.index",[o.bagyt_id,o.option_id])},X,8,J)]),W])])])]),default:y(()=>[t("div",Y,[t("div",Z,[t("form",{method:"post",onSubmit:e[10]||(e[10]=u((...s)=>i.submit&&i.submit(...s),["prevent"]))},[t("div",$,[t("form",{onSubmit:e[8]||(e[8]=u((...s)=>i.submit&&i.submit(...s),["prevent"]))},[t("table",tt,[t("tbody",null,[t("tr",et,[st,t("td",ot,[l(t("div",null,it,512),[[_,o.input_type==="ckeditor"]]),l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.surak.surak=s),type:"text",class:"form-control"},null,512),[[_,o.input_type!="ckeditor"],[k,a.surak.surak]]),d(r,{field:"surak"})])]),t("tr",rt,[lt,t("td",null,[t("div",dt,[t("div",ct,[l(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.input_type=s),type:"radio",class:"select-answer",value:"input"},null,512),[[f,o.input_type]]),ut]),t("div",_t,[l(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.input_type=s),type:"radio",class:"select-answer",value:"ckeditor",onChange:e[3]||(e[3]=s=>i.changeInputType())},null,544),[[f,o.input_type]]),mt])])])]),(b(!0),v(w,null,A(a.surak.zhauap,(s,c)=>(b(),v("tr",{key:"zhauap"+c,class:"odd even"},[t("td",null,[t("b",null,E(i.getAnswerOptionTextType(c+1)),1),ht]),t("td",null,[t("div",pt,[l(t("input",{"onUpdate:modelValue":e[4]||(e[4]=p=>a.surak.correct_answer_number=p),class:"select-answer mr-2 h-25",type:"radio",name:"Buttonradio25",value:c},null,8,bt),[[f,a.surak.correct_answer_number]]),l(t("div",null,ft,512),[[_,o.input_type==="ckeditor"]]),l(t("input",{"onUpdate:modelValue":p=>s.variant=p,type:"text",class:"form-control"},null,8,gt),[[_,o.input_type!="ckeditor"],[k,s.variant]])]),d(r,{field:`zhauaptar.${c}.variant`},null,8,["field"])])]))),128)),t("tr",yt,[wt,t("td",null,[t("div",xt,[l(t("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=s=>a.surak.archive=s),"true-value":"1","false-value":"0",class:"custom-control-input",id:"customSwitch1"},null,512),[[T,a.surak.archive]]),Ct]),d(r,{field:"is_active"})])]),t("tr",Vt,[t("td",null,[t("button",{class:"btn btn-danger",type:"button",onClick:e[6]||(e[6]=u((...s)=>n.clear&&n.clear(...s),["prevent"]))},At)])])])]),t("div",Tt,[Et,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=s=>a.surak.tusinik=s),name:"name",placeholder:"\u0422\u04AF\u0441\u0456\u043D\u0456\u043A"},null,512),[[k,a.surak.tusinik]]),d(r,{field:"tusinik"})])],32)]),t("div",Lt,[Dt,t("button",{type:"button",class:"btn btn-danger",onClick:e[9]||(e[9]=u(s=>n.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const Ot=B(q,[["render",Bt]]);export{Ot as default};