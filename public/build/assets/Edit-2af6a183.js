import{A as k}from"./AdminLayout-ee86e078.js";import{L as w,H as E,r as v,o as r,d,k as s,w as g,F as u,a as e,f as V,b as i,v as a,y as m,m as _,t as f,e as b,s as U}from"./app-20f48993.js";import{P as L}from"./Pagination-495d9059.js";import{V as A}from"./ValidationError-070e76c6.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const N={components:{AdminLayout:k,Link:w,Pagination:L,ValidationError:A,Head:E},props:["roles","user"],data(){return{type:0,family_types:["Женат(Замужем)","Неженат(Незамужем)","В активном поиске"],type_studies:["Грант","Ақылы","Квота"],type_publications:["Ресми басылым","Ғылыми басылым","Ғылыми көпшілік басылым","Өндірістік практика басылым","Нормативтік өндірістік практика басылым","Оқу басылым","Көпшілік басылым"]}},methods:{submit(){this.$inertia.put(route("admin.users.update",this.user.id),this.user,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},S=e("head",null,[e("title",null,"Админ панель | Қолданушы өзгерту")],-1),B={class:"row mb-2"},M=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Қолданушы өзгерту")],-1),T={class:"col-sm-6"},D={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},H=["href"],P=e("i",{class:"fas fa-dashboard"},null,-1),j=U(" Басты бет "),q=[P,j],z={class:"breadcrumb-item"},G=["href"],I=e("i",{class:"fas fa-dashboard"},null,-1),J=U(" Қолданушылар тізімі "),K=[I,J],O=e("li",{class:"breadcrumb-item active"}," Қолданушы өзгерту ",-1),Q={class:"container-fluid"},R={class:"card card-primary"},W={class:"card-body"},X=e("legend",null,"Жалпы ақпарат",-1),Y={class:"form-group"},Z=e("label",{for:""},"Аты-жөні",-1),$={class:"form-group"},ee=e("label",{for:""},"ИИН",-1),te={class:"form-group"},oe=e("label",{for:""},"Жеке куәлік нөмері",-1),le={class:"form-group"},se=e("label",{for:""},"Email",-1),ne={class:"form-group"},ie=e("label",{for:""},"Телефон",-1),ae={class:"form-group"},re=e("label",{for:""},"Құпия сөз",-1),de={class:"form-group"},ue=e("label",{for:""},"Рөл",-1),ce=e("option",{value:null,disabled:"",hidden:""}," Рөлді таңдаңыз ",-1),me=["value"],_e=e("legend",null,"Қосымша ақпарат",-1),fe={class:"form-group"},pe=e("label",{for:""},"Мекен-жай",-1),he={class:"form-group"},be=e("label",{for:""},"Отбасы жағдай",-1),ye=e("option",{value:null,disabled:"",hidden:""}," Отбасылық жағдайды таңдаңыз ",-1),ve=["value"],ge={class:"form-group"},Ve=e("label",{for:""},"Оқу түрі",-1),Ue=e("option",{value:null,disabled:"",hidden:""}," Оқу түрін таңдаңыз ",-1),xe=["value"],ke={class:"form-group"},we=e("label",{for:""},"Курс",-1),Ee={class:"form-group"},Le=e("label",{for:""},"Тобы",-1),Ae={class:"form-group"},Ce=e("label",{for:""},"Ата-анасы",-1),Ne={class:"form-group"},Se=e("label",{for:""},"Ата-анасының байланыс нөмері",-1),Be={class:"form-group"},Me=e("label",{for:""},"Ата-анасының жұмыс орны",-1),Te={class:"form-group"},De=e("label",{for:""},"Сертификаттар",-1),Fe={class:"form-group"},He=e("label",{for:""},"Мүгедектік",-1),Pe={class:"form-group"},je=e("label",{for:""},"Хобби",-1),qe={class:"form-group"},ze=e("label",{for:""},"Діни наным",-1),Ge={class:"form-group"},Ie=e("label",{for:""},"Басылым түрі",-1),Je=e("option",{value:null,disabled:"",hidden:""}," Басылым түрін таңдаңыз ",-1),Ke=["value"],Oe={class:"form-group"},Qe=e("label",{for:""},"Басылым атауы",-1),Re={class:"form-group"},We=e("label",{for:""},"Шыққан жылы",-1),Xe={class:"form-group"},Ye=e("label",{for:""},"Басылым нөмірі",-1),Ze={class:"form-group"},$e=e("label",{for:""},"Бірлескен авторлар",-1),et={class:"form-group"},tt=e("label",{for:""},"Растайтын құжаттар",-1),ot={class:"form-group"},lt=e("label",{for:""},"Награда түрі",-1),st={class:"form-group"},nt=e("label",{for:""},"Құрметті атағы",-1),it={class:"form-group"},at=e("label",{for:""},"Марапаттау мерзімі",-1),rt={class:"form-group"},dt=e("label",{for:""},"Біліктілікті арттыру нысаны",-1),ut={class:"form-group"},ct=e("label",{for:""},"Қаласы",-1),mt={class:"form-group"},_t=e("label",{for:""},"Ұйым атауы",-1),ft={class:"form-group"},pt=e("label",{for:""},"Басталуы",-1),ht={class:"form-group"},bt=e("label",{for:""},"Аяқталуы",-1),yt={class:"form-group"},vt=e("label",{for:""},"Ұзақтылығы",-1),gt={class:"form-group"},Vt=e("label",{for:""},"Тақырыбы",-1),Ut={class:"form-group"},xt=e("label",{for:""},"Растайтын құжат түрі",-1),kt={class:"card-footer"},wt=e("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Et(p,l,o,Lt,h,y){const n=v("validation-error"),x=v("AdminLayout");return r(),d(u,null,[S,s(x,null,{breadcrumbs:g(()=>[e("div",B,[M,e("div",T,[e("ol",D,[e("li",F,[e("a",{href:p.route("admin.index")},q,8,H)]),e("li",z,[e("a",{href:p.route("admin.users.index")},K,8,G)]),O])])])]),default:g(()=>[e("div",Q,[e("div",R,[e("form",{method:"post",onSubmit:l[37]||(l[37]=V((...t)=>y.submit&&y.submit(...t),["prevent"]))},[e("div",W,[X,e("div",Y,[Z,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=t=>o.user.full_name=t),name:"full_name",placeholder:"Аты-жөні"},null,512),[[a,o.user.full_name]]),s(n,{field:"full_name"})]),e("div",$,[ee,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=t=>o.user.iin=t),name:"iin",placeholder:"ИИН"},null,512),[[a,o.user.iin]]),s(n,{field:"iin"})]),e("div",te,[oe,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=t=>o.user.nomer_card=t),name:"nomer_card",placeholder:"Удостоверение личности"},null,512),[[a,o.user.nomer_card]]),s(n,{field:"nomer_card"})]),e("div",le,[se,i(e("input",{type:"email",class:"form-control","onUpdate:modelValue":l[3]||(l[3]=t=>o.user.email=t),name:"email",placeholder:"Email"},null,512),[[a,o.user.email]]),s(n,{field:"email"})]),e("div",ne,[ie,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[4]||(l[4]=t=>o.user.phone=t),name:"phone",placeholder:"Телефон"},null,512),[[a,o.user.phone]]),s(n,{field:"phone"})]),e("div",ae,[re,i(e("input",{type:"password","onUpdate:modelValue":l[5]||(l[5]=t=>o.user.password=t),class:"form-control",name:"password",placeholder:"Құпия сөз"},null,512),[[a,o.user.password]]),s(n,{field:"password"})]),e("div",de,[ue,i(e("select",{class:"form-control","onUpdate:modelValue":l[6]||(l[6]=t=>o.user.role=t),name:"role"},[ce,(r(!0),d(u,null,_(o.roles,t=>(r(),d("option",{value:t.id,key:"r"+t.id},f(t.name.kk),9,me))),128))],512),[[m,o.user.role]]),s(n,{field:"role"})]),o.user.role==3||o.user.role==2?(r(),d(u,{key:0},[_e,e("div",fe,[pe,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[7]||(l[7]=t=>o.user.place_live=t),name:"place_live",placeholder:"Мекен-жай"},null,512),[[a,o.user.place_live]]),s(n,{field:"place_live"})]),o.user.role==3?(r(),d(u,{key:0},[e("div",he,[be,i(e("select",{class:"form-control","onUpdate:modelValue":l[8]||(l[8]=t=>o.user.family=t),name:"family"},[ye,(r(!0),d(u,null,_(h.family_types,(t,c)=>(r(),d("option",{value:c+1},f(t),9,ve))),256))],512),[[m,o.user.family]]),s(n,{field:"family"})]),e("div",ge,[Ve,i(e("select",{class:"form-control","onUpdate:modelValue":l[9]||(l[9]=t=>o.user.type_study=t),name:"family"},[Ue,(r(!0),d(u,null,_(h.type_studies,(t,c)=>(r(),d("option",{value:c+1},f(t),9,xe))),256))],512),[[m,o.user.type_study]]),s(n,{field:"type_study"})]),e("div",ke,[we,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[10]||(l[10]=t=>o.user.course=t),name:"course",placeholder:"Курс"},null,512),[[a,o.user.course]]),s(n,{field:"course"})]),e("div",Ee,[Le,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[11]||(l[11]=t=>o.user.group=t),name:"group",placeholder:"Тобы"},null,512),[[a,o.user.group]]),s(n,{field:"group"})]),e("div",Ae,[Ce,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[12]||(l[12]=t=>o.user.parents=t),name:"parents",placeholder:"Ата-анасы"},null,512),[[a,o.user.parents]]),s(n,{field:"parents"})]),e("div",Ne,[Se,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[13]||(l[13]=t=>o.user.parents_phone=t),name:"parents_phone",placeholder:"Ата-анасының байланыс нөмері"},null,512),[[a,o.user.parents_phone]]),s(n,{field:"parents_phone"})]),e("div",Be,[Me,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[14]||(l[14]=t=>o.user.parents_work=t),name:"parents_work",placeholder:"Ата-анасының жұмыс орны"},null,512),[[a,o.user.parents_work]]),s(n,{field:"parents_work"})]),e("div",Te,[De,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[15]||(l[15]=t=>o.user.certificates=t),name:"certificates",placeholder:"Сертификаттар"},null,512),[[a,o.user.certificates]]),s(n,{field:"certificates"})]),e("div",Fe,[He,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[16]||(l[16]=t=>o.user.disability=t),name:"disability",placeholder:"Мүгедектік"},null,512),[[a,o.user.disability]]),s(n,{field:"disability"})]),e("div",Pe,[je,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[17]||(l[17]=t=>o.user.hobby=t),name:"hobby",placeholder:"Хобби"},null,512),[[a,o.user.hobby]]),s(n,{field:"hobby"})]),e("div",qe,[ze,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[18]||(l[18]=t=>o.user.faith=t),name:"faith",placeholder:"Діни наным"},null,512),[[a,o.user.faith]]),s(n,{field:"faith"})])],64)):b("",!0),o.user.role==2?(r(),d(u,{key:1},[e("div",Ge,[Ie,i(e("select",{class:"form-control","onUpdate:modelValue":l[19]||(l[19]=t=>o.user.type_publication=t),name:"type_publication"},[Je,(r(!0),d(u,null,_(h.type_publications,(t,c)=>(r(),d("option",{value:c+1},f(t),9,Ke))),256))],512),[[m,o.user.type_publication]]),s(n,{field:"type_publication"})]),e("div",Oe,[Qe,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[20]||(l[20]=t=>o.user.name_publication=t),name:"name_publication",placeholder:"Басылым атауы"},null,512),[[a,o.user.name_publication]]),s(n,{field:"name_publication"})]),e("div",Re,[We,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[21]||(l[21]=t=>o.user.created_at_publication=t),name:"created_at_publication",placeholder:"Шыққан жылы"},null,512),[[a,o.user.created_at_publication]]),s(n,{field:"created_at_publication"})]),e("div",Xe,[Ye,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[22]||(l[22]=t=>o.user.nomer_publication=t),name:"nomer_publication",placeholder:"Басылым нөмірі"},null,512),[[a,o.user.nomer_publication]]),s(n,{field:"nomer_publication"})]),e("div",Ze,[$e,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[23]||(l[23]=t=>o.user.authors_publication=t),name:"authors_publication",placeholder:"Бірлескен авторлар"},null,512),[[a,o.user.authors_publication]]),s(n,{field:"authors_publication"})]),e("div",et,[tt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[24]||(l[24]=t=>o.user.certificates=t),name:"certificates",placeholder:"Растайтын құжаттар"},null,512),[[a,o.user.certificates]]),s(n,{field:"certificates"})]),e("div",ot,[lt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[25]||(l[25]=t=>o.user.certificate_type=t),name:"certificate_type",placeholder:"Награда түрі"},null,512),[[a,o.user.certificate_type]]),s(n,{field:"certificate_type"})]),e("div",st,[nt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[26]||(l[26]=t=>o.user.kurmet=t),name:"kurmet",placeholder:"Құрметті атағы"},null,512),[[a,o.user.kurmet]]),s(n,{field:"kurmet"})]),e("div",it,[at,i(e("input",{type:"date",class:"form-control","onUpdate:modelValue":l[27]||(l[27]=t=>o.user.certification_at=t),name:"certification_at",placeholder:"Марапаттау мерзімі"},null,512),[[a,o.user.certification_at]]),s(n,{field:"certification_at"})]),e("div",rt,[dt,i(e("textarea",{"onUpdate:modelValue":l[28]||(l[28]=t=>o.user.form_cualification=t),name:"",id:"",cols:"30",rows:"4",placeholder:"Біліктілікті арттыру нысаны",class:"form-control"},null,512),[[a,o.user.form_cualification]]),s(n,{field:"form_cualification"})]),e("div",ut,[ct,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[29]||(l[29]=t=>o.user.city=t),name:"city",placeholder:"Қаласы"},null,512),[[a,o.user.city]]),s(n,{field:"city"})]),e("div",mt,[_t,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[30]||(l[30]=t=>o.user.place_work=t),name:"place_work",placeholder:"Ұйым атауы"},null,512),[[a,o.user.place_work]]),s(n,{field:"place_work"})]),e("div",ft,[pt,i(e("input",{type:"date",class:"form-control","onUpdate:modelValue":l[31]||(l[31]=t=>o.user.start_date=t),name:"start_date",placeholder:"Басталуы"},null,512),[[a,o.user.start_date]]),s(n,{field:"start_date"})]),e("div",ht,[bt,i(e("input",{type:"date",class:"form-control","onUpdate:modelValue":l[32]||(l[32]=t=>o.user.end_date=t),name:"end_date",placeholder:"Аяқталуы"},null,512),[[a,o.user.end_date]]),s(n,{field:"end_date"})]),e("div",yt,[vt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[33]||(l[33]=t=>o.user.duration_work=t),name:"duration_work",placeholder:"Ұзақтылығы"},null,512),[[a,o.user.duration_work]]),s(n,{field:"duration_work"})]),e("div",gt,[Vt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[34]||(l[34]=t=>o.user.title=t),name:"title",placeholder:"Тақырыбы"},null,512),[[a,o.user.title]]),s(n,{field:"title"})]),e("div",Ut,[xt,i(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[35]||(l[35]=t=>o.user.document_verification_type=t),name:"document_verification_type",placeholder:"Растайтын құжат түрі"},null,512),[[a,o.user.document_verification_type]]),s(n,{field:"document_verification_type"})])],64)):b("",!0)],64)):b("",!0)]),e("div",kt,[wt,e("button",{type:"button",class:"btn btn-danger",onClick:l[36]||(l[36]=V(t=>p.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const Mt=C(N,[["render",Et]]);export{Mt as default};
