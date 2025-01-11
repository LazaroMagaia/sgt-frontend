import{T as Z,W as $,r as l,o as _,d as x,f as t,e as s,w as u,j as e,_ as ee,s as te,u as oe,a as ae,m as se,g as k,U as le,a6 as ne,c as q,L as re,M as B,h as z}from"./index-5257d121.js";import{C as ce}from"./index-ee012d29.js";import{I as O}from"./index-a99f37f1.js";import{B as E,M as U,_ as ie,I as de,T as P,P as ue}from"./loadingPage-d0b9612f.js";import{T as A}from"./index-0ce5dbaa.js";import{T as G}from"./index-523b0d82.js";import"./cleave-phone.mz-1deb776e.js";import"./index-ac72f062.js";import"./transition-f4c2e5eb.js";import"./use-outside-click-507e6bef.js";const pe=Z("routes",()=>({createRoute:async i=>{try{return await $.post("routes",i)}catch(r){throw r}},deleteRoute:async i=>{try{return await $.delete("routes/"+i.id)}catch(r){throw console.error("Failed to create Route:",r),r}},updateRoute:async i=>{try{return await $.put("routes/"+i.id,i)}catch(r){throw r}}})),me={class:"grid grid-cols-12 gap-4 p-4"},ve={class:"col-span-12 md:col-span-6"},_e={class:"text-base text-slate-600 dark:text-slate-300"},he={class:"col-span-12"},fe={class:"text-base text-slate-600 dark:text-slate-300"},ge={class:"flex gap-5 mx-2 px-2"},be={__name:"createModal",emits:["CreateEmployeeModal"],setup(M,{emit:C}){const g=l(!1),i=()=>{g.value=!g.value},r=()=>{g.value=!1},h=l(""),p=l(""),c=l("");l("");const b=()=>{let y=!0;return h.value?c.value="":(c.value="Nome é obrigatório",y=!1),y},R=()=>{if(b()){const y={name:h.value,description:p.value};C("CreateEmployeeModal",y),h.value="",p.value="",r()}else console.log("Formulário inválido")};return(y,v)=>(_(),x("div",null,[t("button",{onClick:i,class:"btn inline-flex justify-center btn-outline-dark"},"Novo rota"),s(e(U),{title:"Novo rota",label:"Novo rota",activeModal:g.value,onClose:r,sizeClass:"max-w-5xl"},{default:u(()=>[t("div",me,[t("div",ve,[t("div",_e,[s(e(A),{label:"Nome*",type:"text",placeholder:"Maputo",modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=w=>h.value=w),error:c.value},null,8,["modelValue","error"])])]),t("div",he,[t("div",fe,[s(e(G),{label:"Descrição",name:"pd",placeholder:"Descrição",modelValue:p.value,"onUpdate:modelValue":v[1]||(v[1]=w=>p.value=w)},null,8,["modelValue"])])])]),t("div",ge,[s(e(E),{type:"button",text:"Cancelar",btnClass:"btn-outline-dark",onClick:r}),s(e(E),{text:"Cadastrar",btnClass:"btn-dark",type:"button",onClick:R})])]),_:1},8,["activeModal"])]))}};const ye={class:"grid grid-cols-12 gap-4 p-4"},xe={class:"col-span-12 md:col-span-6"},Ce={class:"text-base text-slate-600 dark:text-slate-300"},we={class:"col-span-12"},ke={class:"text-base text-slate-600 dark:text-slate-300"},Ee={class:"flex gap-5 mx-2 px-2"},Me={__name:"EditModal",props:{modalEditStatus:{type:Boolean,default:!1},initialData:{type:Object,default:()=>({})}},emits:["closeModelEdit","update"],setup(M,{emit:C}){const g=M,i=l({name:"",description:"",id:""});te(()=>g.initialData,p=>{p&&(i.value={id:p.id,name:p.name||"",description:p.description||""})},{immediate:!0});const r=()=>{C("closeModelEdit")},h=()=>{C("update",i.value)};return(p,c)=>(_(),x("div",null,[s(e(U),{title:"Editar Motorista",label:"Editar Motorista",activeModal:M.modalEditStatus,onClose:r,sizeClass:"max-w-5xl"},{default:u(()=>[t("div",ye,[t("div",xe,[t("div",Ce,[s(e(A),{label:"Nome completo",type:"text",placeholder:"Nome completo",modelValue:i.value.name,"onUpdate:modelValue":c[0]||(c[0]=b=>i.value.name=b)},null,8,["modelValue"])])]),t("div",we,[t("div",ke,[s(e(G),{label:"Descrição",name:"pd",placeholder:"Descrição",modelValue:i.value.description,"onUpdate:modelValue":c[1]||(c[1]=b=>i.value.description=b)},null,8,["modelValue"])])])]),t("div",Ee,[s(e(E),{type:"button",text:"Cancelar",btnClass:"btn-outline-dark",onClick:r}),s(e(E),{text:"Salvar",btnClass:"btn-dark",type:"button",onClick:h})])]),_:1},8,["activeModal"])]))}},Re=ee(Me,[["__scopeId","data-v-0427eed3"]]),Ve={key:0},$e={class:"md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center"},De=t("h5",null,"Funcionarios",-1),Se={key:0},Te={key:0},Ne={style:{"text-transform":"lowercase"}},Be={key:1},Oe={key:1,class:"flex justify-center"},Pe={class:"flex space-x-3 rtl:space-x-reverse"},Ue=["onClick"],je=t("span",null," Edit",-1),Ie=["onClick"],Fe=t("span",null," Edit",-1),qe=["onClick"],ze=t("span",null,"Delete",-1),Ae={class:"py-4 px-3"},et={__name:"indexPage",setup(M){const C=pe(),{createRoute:g,deleteRoute:i,updateRoute:r}=C,h=l(0),p=l([]);l([]);const c=oe(),b=l(null),R=l(!1),y=l([]),v=l(!1);ae();const w=localStorage.getItem("sigt_user_role"),V=async()=>{try{const n=await $.get("routes");p.value=n.data,h.value=n.data.length}catch(n){console.error("Failed to fetch courses:",n)}};se(()=>{V()});const j=l(1),I=l(10),L=l(5),D=l("");l([{name:"view",icon:"heroicons-outline:eye"},{name:"edit",icon:"heroicons:pencil-square"},{name:"delete",icon:"heroicons-outline:trash"}]);const Q=l([{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}]),W=l([{label:"Id",field:"id"},{label:"Nome do usuario",field:"name"},{label:"Descrição",field:"description"},{label:"Action",field:"action"}]),H=async n=>{var m,d;v.value=!0;try{const a=await g(n);if(a&&a.status===200)c.success("Rota criada com sucesso",{timeout:2e3}),V();else throw new Error("Falha ao criar a rota")}catch(a){if(a.response&&a.response.data&&a.response.data.errors){const o=a.response.data.errors;Object.keys(o).forEach(f=>{o[f].forEach(N=>{c.error(N,{timeout:2e3})})})}else{const o=((d=(m=a.response)==null?void 0:m.data)==null?void 0:d.message)||"Ocorreu um erro desconhecido";c.error(o,{timeout:2e3})}}finally{v.value=!1}},J=n=>{b.value=n,R.value=!0},S=()=>{R.value=!1,b.value=null},K=async()=>{var n,m;v.value=!0;try{const d=await i(b.value);c.success("rota removido com sucesso",{timeout:2e3}),V()}catch(d){if(d.response&&d.response.data&&d.response.data.errors){const a=d.response.data.errors;Object.keys(a).forEach(o=>{a[o].forEach(f=>{c.error(f,{timeout:2e3})})})}else{const a=((m=(n=d.response)==null?void 0:n.data)==null?void 0:m.message)||"Ocorreu um erro desconhecido";c.error(a,{timeout:2e3})}}finally{v.value=!1,S()}},T=l(!1),X=n=>{T.value=!0,y.value=n,console.log(y)},F=()=>{T.value=!1},Y=async n=>{var m,d;v.value=!0,F(),console.log("Dados atualizados:",n);try{const a=await r(n);if(a&&a.status===200)c.success("Rota editada com sucesso",{timeout:2e3}),V();else throw new Error("Falha ao editar a rota")}catch(a){if(a.response&&a.response.data&&a.response.data.errors){const o=a.response.data.errors;Object.keys(o).forEach(f=>{o[f].forEach(N=>{c.error(N,{timeout:2e3})})})}else{const o=((d=(m=a.response)==null?void 0:m.data)==null?void 0:d.message)||"Ocorreu um erro desconhecido";c.error(o,{timeout:2e3})}}finally{v.value=!1}};return(n,m)=>{const d=q("router-view"),a=q("vue-good-table");return _(),x("div",null,[v.value?(_(),x("div",Ve,[s(e(ie))])):k("",!0),s(d),le(t("div",null,[s(e(ce),{noborder:""},{default:u(()=>[t("div",null,[s(e(be),{onCreateEmployeeModal:H,class:"py-5"}),t("div",$e,[De,s(e(de),{modelValue:D.value,"onUpdate:modelValue":m[0]||(m[0]=o=>D.value=o),placeholder:"Search",type:"text",prependIcon:"heroicons-outline:search",merged:""},null,8,["modelValue"])])]),s(a,{columns:W.value,styleClass:" vgt-table bordered centered lowercase",rows:p.value,"pagination-options":{enabled:!0,perPage:I.value},"search-options":{enabled:!0,externalQuery:D.value},"select-options":{enabled:!0,selectOnCheckboxOnly:!0,selectioninfoClass:"custom-class",selectionText:"rows selected",clearSelectionText:"clear",disableSelectinfo:!0,selectAllByGroup:!0}},{"table-row":u(o=>[o.column.field=="description"?(_(),x("span",Se,[o.row.description?(_(),x("span",Te,[t("span",Ne,re(o.row.description),1)])):(_(),x("span",Be,"-"))])):k("",!0),o.column.field=="action"?(_(),x("span",Oe,[t("div",Pe,[e(w)=="secretary"&&o.row.role!=="admin"?(_(),B(e(P),{key:0,placement:"top",arrow:"",theme:"danger-500"},{button:u(()=>[t("div",{class:"action-btn",onClick:f=>n.toggleEditDelete(o.row)},[s(e(O),{icon:"heroicons:pencil-square"})],8,Ue)]),default:u(()=>[je]),_:2},1024)):k("",!0),e(w)=="admin"?(_(),B(e(P),{key:1,placement:"top",arrow:"",theme:"danger-500"},{button:u(()=>[t("div",{class:"action-btn",onClick:f=>X(o.row)},[s(e(O),{icon:"heroicons:pencil-square"})],8,Ie)]),default:u(()=>[Fe]),_:2},1024)):k("",!0),e(w)==="admin"?(_(),B(e(P),{key:2,placement:"top",arrow:"",theme:"danger-500"},{button:u(()=>[t("div",{class:"action-btn",onClick:f=>J(o.row)},[s(e(O),{icon:"heroicons:trash"})],8,qe)]),default:u(()=>[ze]),_:2},1024)):k("",!0)])])):k("",!0)]),"pagination-bottom":u(o=>[t("div",Ae,[s(e(ue),{total:h.value,current:j.value,"per-page":I.value,pageRange:L.value,onPageChanged:m[1]||(m[1]=f=>j.value=f),pageChanged:o.pageChanged,perPageChanged:o.perPageChanged,enableSearch:"",enableSelect:"",options:Q.value},{default:u(()=>[z(" > ")]),_:2},1032,["total","current","per-page","pageRange","pageChanged","perPageChanged","options"])])]),_:1},8,["columns","rows","pagination-options","search-options"])]),_:1}),s(e(U),{title:"Basic Modal",label:"Modal title",activeModal:R.value,onClose:S},{footer:u(()=>[s(e(E),{text:"Cancelar",btnClass:"btn-outline-dark",onClick:S}),s(e(E),{text:"Confirmar",btnClass:"btn-dark ",onClick:K})]),default:u(()=>[z(" Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididun ut . ")]),_:1},8,["activeModal"]),s(e(Re),{modalEditStatus:T.value,onCloseModelEdit:F,initialData:y.value,onUpdate:Y},null,8,["modalEditStatus","initialData"])],512),[[ne,!n.UserDetails]])])}}};export{et as default};
