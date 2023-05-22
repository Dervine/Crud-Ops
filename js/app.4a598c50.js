(function(){"use strict";var e={5448:function(e,t,i){var n=i(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{"data-app":""}},[t("ManageUser")],1)},o=[],r=i(1828),a=i(3058),l=i(5223),d=i(4437),c=i(6035),u=i(9487),f=i(5452),h=i(4192),m=i(5057),p=i(5294),v=i(5234),b=i(5251),g=i(1002),x=i(2370),Z=function(){var e=this,t=e._self._c;return t(u.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"hide-default-footer":!0,"sort-by":"id"},on:{"click:row":e.handleClick},scopedSlots:e._u([{key:"top",fn:function(){return[t(g.Z,{attrs:{flat:""}},[t(x.qW,[e._v("Users")]),t(h.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(v.Z),t(f.Z,{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:n}){return[t(r.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),i),[e._v(" New User ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(a.Z,[t(l.EB,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),t(l.ZB,[t(c.Z,[t(p.Z,[t(d.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(b.Z,{attrs:{label:"User Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),t(d.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(b.Z,{attrs:{label:"User Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),t(d.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(b.Z,{attrs:{type:"password",label:"Password"},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1)],1)],1)],1),t(l.h7,[t(v.Z),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),t(f.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(a.Z,[t(l.EB,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this user?")]),t(l.h7,[t(v.Z),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(r.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.deleteItemConfirm(e.item)}}},[e._v("OK")]),t(v.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[t(m.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),t(m.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(r.Z,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})},y=[],I={data:()=>({dialog:!1,dialogDelete:!1,currentUser:0,headers:[{text:"Id",value:"id"},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Email",value:"email"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",email:"",password:""},defaultItem:{name:"",email:"",password:""}}),computed:{baseUrl(){return"http://localhost:3333/v1/users/"},formTitle(){return-1===this.editedIndex?"New User":"Edit User"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize()},methods:{async initialize(){const e=this;fetch(this.baseUrl).then((function(t){200===t.status&&t.json().then((function(t){e.desserts=t}))})).catch((function(e){console.log("Fetch Error :-S",e)}))},refreshList(){this.initialize()},editItem(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},handleClick(e){this.currentUser=e.id},deleteItemConfirm(){const e=this;fetch(this.baseUrl+this.currentUser,{method:"DELETE"}).then((t=>{console.log(t),e.refreshList()})),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){const e=this;let t=null,i="";this.editedItem.id?(i=`http://localhost:3333/v1/users/${this.editedItem.id}`,t={method:"put",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(this.editedItem)}):(i=this.baseUrl,t={method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(this.editedItem)}),fetch(i,t).then((e=>e.json())).then((t=>{console.log(t),e.refreshList()})).catch((function(e){console.log("Request failed",e)})),this.close()}}},k=I,_=i(1001),w=(0,_.Z)(k,Z,y,!1,null,null,null),O=w.exports,U={name:"app",components:{ManageUser:O}},j=U,C=(0,_.Z)(j,s,o,!1,null,null,null),D=C.exports,T=i(2250);i(8556);n.ZP.use(T.Z);var S=new T.Z({});n.ZP.config.productionTip=!1,new n.ZP({vuetify:S,render:e=>e(D)}).$mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,o){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],o=e[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,s,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,r=n[0],a=n[1],l=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(l)var c=l(i)}for(t&&t(n);d<r.length;d++)o=r[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},n=self["webpackChunkcrud_ops_frontend"]=self["webpackChunkcrud_ops_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(5448)}));n=i.O(n)})();
//# sourceMappingURL=app.4a598c50.js.map