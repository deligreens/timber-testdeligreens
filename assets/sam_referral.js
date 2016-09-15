function utilGetParameterByName(e,t){"undefined"==typeof t&&(t=window.location.search),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")
var r="[\\?&]"+e+"=([^&#]*)",a=new RegExp(r),i=a.exec(t)
return null===i?"":decodeURIComponent(i[1].replace(/\+/g," "))}function SAMCheckRef(){if("undefined"!=typeof simpleStorage.get("samr"))return"undefined"==typeof jQuery?void console.log("Error: need to add JQuery to theme.liquid"):void jQuery.ajax({cache:!1,contentType:"application/json; charset=utf-8",dataType:"json",type:"GET",url:"/cart.js",success:function(e){if(0!=e.item_count&&("undefined"==typeof simpleStorage.get("samr_token")||simpleStorage.get("samr_token")!=e.token)){var t=Shopify.shop
jQuery.ajax({cache:!1,contentType:"application/json; charset=utf-8",dataType:"json",type:"POST",url:"https://samembership-www.herokuapp.com/api/v1/public/referrals",data:JSON.stringify({shop_slug:t.replace(".myshopify.com",""),samr:simpleStorage.get("samr"),token:e.token}),success:function(t){simpleStorage.set("samr_token",e.token)}})}}})}!function(e,t){"use strict"
e.simpleStorage=t()}(this,function(){"use strict"
function e(){window.localStorage.setItem("__simpleStorageInitTest","tmpval"),window.localStorage.removeItem("__simpleStorageInitTest"),a(),o(),t(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&r()},!1),p=!0}function t(){"addEventListener"in window?window.addEventListener("storage",r,!1):document.attachEvent("onstorage",r)}function r(){try{a()}catch(e){return void(p=!1)}o()}function a(){var e=localStorage.simpleStorage
try{_=JSON.parse(e)}catch(e){_={}}l=localStorage.simpleStorage?String(localStorage.simpleStorage).length:0}function i(){try{localStorage.simpleStorage=JSON.stringify(_),l=localStorage.simpleStorage?String(localStorage.simpleStorage).length:0}catch(e){return e}return!0}function o(){var e,t,r,a,n,m=1/0,l=0
if(clearTimeout(g),_&&_.__simpleStorage_meta&&_.__simpleStorage_meta.TTL){for(e=+new Date,n=_.__simpleStorage_meta.TTL.keys||[],a=_.__simpleStorage_meta.TTL.expire||{},t=0,r=n.length;t<r;t++){if(!(a[n[t]]<=e)){a[n[t]]<m&&(m=a[n[t]])
break}l++,delete _[n[t]],delete a[n[t]]}m!=1/0&&(g=setTimeout(o,Math.min(m-e,2147483647))),l&&(n.splice(0,l),s(),i())}}function n(e,t){var r,a,i=+new Date,n=!1
if(t=Number(t)||0,0!==t){if(!_.hasOwnProperty(e))return!1
if(_.__simpleStorage_meta||(_.__simpleStorage_meta={}),_.__simpleStorage_meta.TTL||(_.__simpleStorage_meta.TTL={expire:{},keys:[]}),_.__simpleStorage_meta.TTL.expire[e]=i+t,_.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))for(r=0,a=_.__simpleStorage_meta.TTL.keys.length;r<a;r++)_.__simpleStorage_meta.TTL.keys[r]==e&&_.__simpleStorage_meta.TTL.keys.splice(r)
for(r=0,a=_.__simpleStorage_meta.TTL.keys.length;r<a;r++)_.__simpleStorage_meta.TTL.expire[_.__simpleStorage_meta.TTL.keys[r]]>i+t&&_.__simpleStorage_meta.TTL.keys.splice(r,0,e)
n||_.__simpleStorage_meta.TTL.keys.push(e)}else if(_&&_.__simpleStorage_meta&&_.__simpleStorage_meta.TTL){if(_.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))for(delete _.__simpleStorage_meta.TTL.expire[e],r=0,a=_.__simpleStorage_meta.TTL.keys.length;r<a;r++)if(_.__simpleStorage_meta.TTL.keys[r]==e){_.__simpleStorage_meta.TTL.keys.splice(r,1)
break}s()}return clearTimeout(g),_&&_.__simpleStorage_meta&&_.__simpleStorage_meta.TTL&&_.__simpleStorage_meta.TTL.keys.length&&(g=setTimeout(o,Math.min(Math.max(_.__simpleStorage_meta.TTL.expire[_.__simpleStorage_meta.TTL.keys[0]]-i,0),2147483647))),!0}function s(){var e,t=!1,r=!1
if(!_||!_.__simpleStorage_meta)return t
_.__simpleStorage_meta.TTL&&!_.__simpleStorage_meta.TTL.keys.length&&(delete _.__simpleStorage_meta.TTL,t=!0)
for(e in _.__simpleStorage_meta)if(_.__simpleStorage_meta.hasOwnProperty(e)){r=!0
break}return r||(delete _.__simpleStorage_meta,t=!0),t}var m="0.1.2",_=!1,l=0,p=!1,g=null
try{e()}catch(e){}return{version:m,canUse:function(){return!!p},set:function(e,t,r){if("__simpleStorage_meta"==e)return!1
if(!_)return!1
if("undefined"==typeof t)return this.deleteKey(e)
r=r||{}
try{t=JSON.parse(JSON.stringify(t))}catch(e){return e}return _[e]=t,n(e,r.TTL||0),i()},get:function(e){return!!_&&(_.hasOwnProperty(e)&&"__simpleStorage_meta"!=e&&this.getTTL(e)?_[e]:void 0)},deleteKey:function(e){return!!_&&(e in _&&(delete _[e],n(e,0),i()))},setTTL:function(e,t){return!!_&&(n(e,t),i())},getTTL:function(e){var t
return!!_&&(!!_.hasOwnProperty(e)&&(_.__simpleStorage_meta&&_.__simpleStorage_meta.TTL&&_.__simpleStorage_meta.TTL.expire&&_.__simpleStorage_meta.TTL.expire.hasOwnProperty(e)?(t=Math.max(_.__simpleStorage_meta.TTL.expire[e]-+new Date||0,0),t||!1):1/0))},flush:function(){if(!_)return!1
_={}
try{return localStorage.removeItem("simpleStorage"),!0}catch(e){return e}},index:function(){if(!_)return!1
var e,t=[]
for(e in _)_.hasOwnProperty(e)&&"__simpleStorage_meta"!=e&&t.push(e)
return t},storageSize:function(){return l}}}),utilGetParameterByName("samr")&&simpleStorage.set("samr",utilGetParameterByName("samr"),{TTL:27648e5}),SAMCheckRef()
