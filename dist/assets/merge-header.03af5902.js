import{n as t,_ as e,p as a}from"./index.a1f8c0f1.js";import{a as l}from"./article.30403ae2.js";import"./vendor.ae19cf99.js";const n={};var i=t({name:"MergeHeader",data:()=>({list:null,listLoading:!0,downloadLoading:!1}),created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,l(this.listQuery).then((t=>{this.list=t.data.items,this.listLoading=!1}))},handleDownload(){this.downloadLoading=!0,e((()=>import("./Export2Excel.4a1e1b54.js")),["/assets/Export2Excel.4a1e1b54.js","/assets/FileSaver.min.98bd1f62.js","/assets/vendor.ae19cf99.js","/assets/xlsx.029d5355.js","/assets/___vite-browser-external_commonjs-proxy.dc997961.js"]).then((t=>{const e=this.list,a=this.formatJson(["id","title","author","pageviews","display_time"],e);t.export_json_to_excel({multiHeader:[["Id","Main Information","","","Date"]],header:["","Title","Author","Readings",""],merges:["A1:A2","B1:D1","E1:E2"],data:a}),this.downloadLoading=!1}))},formatJson:(t,e)=>e.map((e=>t.map((t=>"timestamp"===t?a(e[t]):e[t]))))}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v("Export")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),a("el-table-column",{attrs:{label:"Main Information",align:"center"}},[a("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),a("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row.author))])]}}])}),a("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])})],1),a("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)}),[],!1,(function(t){for(let e in n)this[e]=n[e]}),null,null,null);i.options.__file="src/views/excel/merge-header.vue";var o=i.exports;export default o;
