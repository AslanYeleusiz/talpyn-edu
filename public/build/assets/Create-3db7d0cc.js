import{A as C}from"./AdminLayout-ee86e078.js";import{L as A,H as U,r as f,o as r,d as l,k as u,w as y,F as v,a as e,f as p,b as d,y as S,m as x,t as h,v as q,q as w,c as j,u as M,p as B,g as L,s as b}from"./app-20f48993.js";import{P as T}from"./Pagination-495d9059.js";import{V as E}from"./ValidationError-070e76c6.js";import{C as I,_ as F}from"./uploadAdapter-1ca7b258.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const H={components:{AdminLayout:C,Link:A,Pagination:T,ValidationError:E,Head:U},props:["subjects"],data(){return{question:{text:null,subject_id:null,answers:[{number:1,text:null},{number:2,text:null},{number:3,text:null},{number:4,text:null},{number:5,text:null}],is_active:!1},editor:I,input_type:"input",correct_answer_number:null,editorConfig:{extraPlugins:[this.uploader]},preparationIds:[]}},methods:{uploader(o){o.plugins.get("FileRepository").createUploadAdapter=s=>new F(s)},deleteAnswer(o){this.correct_answer_number==o&&(this.correct_answer_number=null),this.question.answers=this.question.answers.filter(s=>s.number!=o),this.correct_answer_number=null},getAnswerOptionTextType(o){switch(o){case 1:return"A ";case 2:return"B ";case 3:return"C ";case 4:return"D ";case 5:return"E ";case 6:return"F ";case 7:return"G ";case 8:return"H ";case 9:return"J "}},addAnswer(){let o={number:this.question.answers.length+1,text:null,is_correct:!1};this.question.answers.push(o),this.correct_answer_number=null},submit(){if(!this.question.subject_id)return this.warningMessage("Пән тандалмады");if(this.question.correct_answer_number=this.correct_answer_number,!this.question.correct_answer_number)return this.warningMessage("Дұрыс жауап белгіленбеді");var o=!0;if(this.question.answers.forEach(s=>{if(s.text==null)return o=!1}),!o)return this.warningMessage("Жауап енгізілмеді");this.$inertia.post(route("admin.test.questions.store"),this.question,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},warningMessage(o){return Swal.fire({title:o,icon:"warning",showCancelButton:!1})}},computed:{preparations(){return this.question.subject_id?this.subjects.filter(s=>s.id==this.question.subject_id).shift().preparation_childs??[]:[]}}},i=o=>(B("data-v-c50a67b3"),o=o(),L(),o),N=i(()=>e("head",null,[e("title",null,"Админ панель | Сұрақты қосу")],-1)),P={class:"row mb-2"},O=i(()=>e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Сұрақ қосу")],-1)),R={class:"col-sm-6"},G={class:"breadcrumb float-sm-right"},J={class:"breadcrumb-item"},z=["href"],K=i(()=>e("i",{class:"fas fa-dashboard"},null,-1)),Q=b(" Басты бет "),W=[K,Q],X={class:"breadcrumb-item"},Y=["href"],Z=i(()=>e("i",{class:"fas fa-dashboard"},null,-1)),$=b(" Сұрақтар тізімі "),ee=[Z,$],te=i(()=>e("li",{class:"breadcrumb-item active"},"Сұрақ қосу",-1)),se={class:"container-fluid"},oe={class:"card card-primary"},ne={class:"card-body"},ie={class:"table table-bordered"},re={class:"odd even"},le=i(()=>e("td",null,[e("b",null,"Пән"),e("i",{class:"red"},"*")],-1)),de=i(()=>e("option",{value:"null",selected:"",disabled:""}," Пәнді таңдаңыз ",-1)),ce=["value"],ae={class:"odd even"},ue=i(()=>e("td",null,[e("b",null,"Сұрақ"),b(),e("i",{class:"red"},"*")],-1)),_e={id:"question"},me={key:0},pe=i(()=>e("a",{class:"d-block mt-2",href:"https://latex.codecogs.com/eqneditor/editor.php",target:"_blank"},"Latex формула",-1)),he={class:"odd even"},be=i(()=>e("td",null,"Жауап нұсқаларын енгізіңіз:",-1)),fe={class:"d-flex align-items-center"},ve={class:"d-flex align-items-center mr-2"},we=i(()=>e("p",{class:"ml-2"},"- input",-1)),ge={class:"d-flex align-items-center"},ye=i(()=>e("p",{class:"ml-2"},"- ckeditor",-1)),xe=["id"],qe={class:"d-flex align-items-center"},ke=["value"],Ve=["onClick"],Ce=i(()=>e("i",{class:"fas fa-trash"},null,-1)),Ae=[Ce],Ue=["onUpdate:modelValue"],Se={class:"odd even"},je=i(()=>e("td",null,[e("b",null,"Белсенді/ Белсенді емес ")],-1)),Me={class:"custom-control custom-switch"},Be=i(()=>e("label",{class:"custom-control-label",for:"customSwitch1"},"Белсенді/Белсенді емес",-1)),Le={class:"odd even"},Te=i(()=>e("i",{class:"fa fa-trash"},null,-1)),Ee=b(" Тазалау "),Ie=[Te,Ee],Fe=i(()=>e("button",{class:"btn btn-success",type:"submit"}," Сақтау ",-1));function De(o,s,k,He,n,c){const m=f("validation-error"),g=f("ckeditor"),V=f("AdminLayout");return r(),l(v,null,[N,u(V,null,{breadcrumbs:y(()=>[e("div",P,[O,e("div",R,[e("ol",G,[e("li",J,[e("a",{href:o.route("admin.index")},W,8,z)]),e("li",X,[e("a",{href:o.route("admin.test.questions.index")},ee,8,Y)]),te])])])]),default:y(()=>[e("div",se,[e("div",oe,[e("div",ne,[e("form",{onSubmit:s[9]||(s[9]=p((...t)=>c.submit&&c.submit(...t),["prevent"]))},[e("table",ie,[e("tbody",null,[e("tr",re,[le,e("td",null,[d(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.question.subject_id=t),class:"form-control"},[de,(r(!0),l(v,null,x(k.subjects,(t,_)=>(r(),l("option",{value:t.id,key:"subject"+_},h(t.name)+" "+h(t.description?"("+t.description+")":"")+" ("+h(t.language.name)+") ",9,ce))),128))],512),[[S,n.question.subject_id]]),u(m,{field:"subject_id"})])]),e("tr",ae,[ue,e("td",_e,[n.input_type==="ckeditor"?(r(),l("div",me,[u(g,{editor:n.editor,modelValue:n.question.text,"onUpdate:modelValue":s[1]||(s[1]=t=>n.question.text=t),config:n.editorConfig,class:"form-control"},null,8,["editor","modelValue","config"]),pe])):d((r(),l("input",{key:1,"onUpdate:modelValue":s[2]||(s[2]=t=>n.question.text=t),type:"text",class:"form-control",placeholder:"Сұрақ енгізіңіз"},null,512)),[[q,n.question.text]]),u(m,{field:"text"})])]),e("tr",he,[be,e("td",null,[e("div",fe,[e("div",ve,[d(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>n.input_type=t),type:"radio",class:"select-answer",value:"input"},null,512),[[w,n.input_type]]),we]),e("div",ge,[d(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>n.input_type=t),type:"radio",class:"select-answer",value:"ckeditor"},null,512),[[w,n.input_type]]),ye])])])]),(r(!0),l(v,null,x(n.question.answers,(t,_)=>(r(),l("tr",{key:"answer"+_,class:"odd even"},[e("td",null,[e("b",null,h(c.getAnswerOptionTextType(_+1))+") ",1)]),e("td",{id:"answer"+t.number},[e("div",qe,[d(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>n.correct_answer_number=a),class:"select-answer",type:"radio",name:"Buttonradio25",value:t.number},null,8,ke),[[w,n.correct_answer_number]]),e("button",{class:"btn btn-danger btn-xs ml-2 mr-2 h-25",style:{"margin-top":"5px",height:"25px"},type:"button",onClick:p(a=>c.deleteAnswer(t.number),["prevent"]),title:"Жою"},Ae,8,Ve),n.input_type==="ckeditor"?(r(),j(g,{key:0,editor:n.editor,modelValue:t.text,"onUpdate:modelValue":a=>t.text=a,config:n.editorConfig,class:"form-control"},null,8,["editor","modelValue","onUpdate:modelValue","config"])):d((r(),l("input",{key:1,"onUpdate:modelValue":a=>t.text=a,type:"text",class:"form-control"},null,8,Ue)),[[q,t.text]])]),u(m,{field:`answers.${_}.text`},null,8,["field"])],8,xe)]))),128)),e("tr",Se,[je,e("td",null,[e("div",Me,[d(e("input",{type:"checkbox","onUpdate:modelValue":s[6]||(s[6]=t=>n.question.is_active=t),class:"custom-control-input",id:"customSwitch1"},null,512),[[M,n.question.is_active]]),Be]),u(m,{field:"is_active"})])]),e("tr",Le,[e("td",null,[e("button",{class:"btn btn-danger",type:"button",onClick:s[7]||(s[7]=p((...t)=>o.clear&&o.clear(...t),["prevent"]))},Ie)]),e("td",null,[Fe,e("button",{class:"btn btn-primary ml-2",onClick:s[8]||(s[8]=p((...t)=>c.addAnswer&&c.addAnswer(...t),["prevent"])),type:"button"}," Жауап қосу ")])])])])],32)])])])]),_:1})],64)}const ze=D(H,[["render",De],["__scopeId","data-v-c50a67b3"]]);export{ze as default};
