(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,e,a){t.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",quantity:"Profile_quantity__1zFQ4"}},,function(t,e,a){t.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statList:"Statistics_statList__3BR2u",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t,e,a){t.exports={friendList:"FriendList_friendList__1lQQU",item:"FriendList_item__-lYix",statusOnline:"FriendList_statusOnline__3G94F",statusOfline:"FriendList_statusOfline__3mHKq"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(t,e,a){t.exports={transactionHistory:"TransactionHistory_transactionHistory__1k0Uk"}},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},,,,,,function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),i=a(8),n=a.n(i),r=a(5),l=a.n(r),d=a.p+"static/media/default.2e01288c.jpeg",o=a(0),b=function(t){var e=t.friends;return Object(o.jsx)("ul",{className:l.a.friendList,children:e.map((function(t){return Object(o.jsxs)("li",{className:l.a.item,children:[t.isOnline?Object(o.jsx)("span",{className:l.a.statusOnline,children:" "}):Object(o.jsx)("span",{className:l.a.statusOfline,children:" "}),Object(o.jsx)("img",{class:"avatar",src:t.avatar,alt:t.name,width:"48"}),Object(o.jsx)("p",{class:"name",children:t.name})]},t.id)}))})};b.defaultProps={name:"",isOnline:"",avatar:d};var u=b,p=a(1),j=a.n(p),m=a.p+"static/media/default.2e01288c.jpeg",f=function(t){var e=t.name,a=t.tag,s=t.location,c=t.avatar,i=t.stats;return Object(o.jsxs)("div",{className:j.a.profile,children:[Object(o.jsxs)("div",{className:j.a.description,children:[Object(o.jsx)("img",{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",class:"avatar"}),Object(o.jsx)("p",{className:j.a.name,children:e}),Object(o.jsxs)("p",{className:j.a.tag,children:["@",a]}),Object(o.jsx)("p",{className:j.a.location,children:s})]}),Object(o.jsxs)("ul",{className:j.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{class:"label",children:"Followers"}),Object(o.jsx)("span",{className:j.a.quantity,children:i.followers})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{class:"label",children:"Views"}),Object(o.jsx)("span",{className:j.a.quantity,children:i.views})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{class:"label",children:"Likes"}),Object(o.jsx)("span",{className:j.a.quantity,children:i.likes})]})]})]})};f.defaultProps={avatar:m};var O=f,y=a(3),h=a.n(y),x=function(t){var e=t.title,a=t.stats;return Object(o.jsxs)("section",{className:h.a.statistics,children:[e&&Object(o.jsx)("h2",{className:h.a.title,children:e}),Object(o.jsx)("ul",{className:h.a.statList,children:a.map((function(t){return Object(o.jsxs)("li",{className:h.a.item,children:[Object(o.jsx)("span",{className:h.a.label,children:t.label}),Object(o.jsxs)("span",{className:h.a.percentage,children:[t.percentage,"%"]})]},t.id)}))})]})};x.defaultProps={title:"",stats:""};var v=x,_=a(9),g=a.n(_),w=function(t){var e=t.items;return Object(o.jsxs)("table",{className:g.a.transactionHistory,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),e.map((function(t){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.type}),Object(o.jsx)("td",{children:t.amount}),Object(o.jsx)("td",{children:t.currency})]})},t.id)}))]})};w.defaultProps={type:"",amount:"",currency:""};var N=w,P=a(4),L=a(10),S=a(7),U=a(11),J=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{name:P.name,tag:P.tag,location:P.location,avatar:P.avatar,stats:P.stats}),Object(o.jsx)(v,{title:"Upload stats",stats:S}),Object(o.jsx)(v,{stats:S}),Object(o.jsx)(u,{friends:U}),Object(o.jsx)(N,{items:L})]})};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.bf2d6b7a.chunk.js.map