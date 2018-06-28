/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if(window.jQuery&&window.jQuery.sap&&window.jQuery.sap.declare){window.jQuery.sap.declare("sap.ui.Device",false);}if(typeof window.sap!=="object"&&typeof window.sap!=="function"){window.sap={};}if(typeof window.sap.ui!=="object"){window.sap.ui={};}(function(){"use strict";if(typeof window.sap.ui.Device==="object"||typeof window.sap.ui.Device==="function"){var c="1.54.6";window.sap.ui.Device._checkAPIVersion(c);return;}var d={};function p(i,w){return("000"+String(i)).slice(-w);}var F=0,E=1,W=2,I=3,D=4,T=5;var g=function(){this.defaultComponent='DEVICE';this.sWindowName=(window.top==window)?"":"["+window.location.pathname.split('/').slice(-1)[0]+"] ";this.log=function(i,s,a){a=a||this.defaultComponent||'';var b=new Date(),e={time:p(b.getHours(),2)+":"+p(b.getMinutes(),2)+":"+p(b.getSeconds(),2),date:p(b.getFullYear(),4)+"-"+p(b.getMonth()+1,2)+"-"+p(b.getDate(),2),timestamp:b.getTime(),level:i,message:s||"",component:a||""};if(window.console){var f=e.date+" "+e.time+" "+this.sWindowName+e.message+" - "+e.component;switch(i){case F:case E:console.error(f);break;case W:console.warn(f);break;case I:console.info?console.info(f):console.log(f);break;case D:console.debug?console.debug(f):console.log(f);break;case T:console.trace?console.trace(f):console.log(f);break;}}return e;};};var l=new g();l.log(I,"Device API logging initialized");d._checkAPIVersion=function(s){var v="1.54.6";if(v!=s){l.log(W,"Device API version differs: "+v+" <-> "+s);}};var h={};function j(e,f,a){if(!h[e]){h[e]=[];}h[e].push({oListener:a,fFunction:f});}function k(e,f,a){var b=h[e];if(!b){return this;}for(var i=0,q=b.length;i<q;i++){if(b[i].fFunction===f&&b[i].oListener===a){b.splice(i,1);break;}}if(b.length==0){delete h[e];}}function n(e,a){var b=h[e],f;if(b){b=b.slice();for(var i=0,q=b.length;i<q;i++){f=b[i];f.fFunction.call(f.oListener||window,a);}}}var O={"WINDOWS":"win","MACINTOSH":"mac","LINUX":"linux","IOS":"iOS","ANDROID":"Android","BLACKBERRY":"bb","WINDOWS_PHONE":"winphone"};function o(a){a=a||navigator.userAgent;var b,e;function f(){var s=navigator.platform;if(s.indexOf("Win")!=-1){var t=/Windows NT (\d+).(\d)/i;var v=a.match(t);var w="";if(v[1]=="6"){if(v[2]==1){w="7";}else if(v[2]>1){w="8";}}else{w=v[1];}return{"name":O.WINDOWS,"versionStr":w};}else if(s.indexOf("Mac")!=-1){return{"name":O.MACINTOSH,"versionStr":""};}else if(s.indexOf("Linux")!=-1){return{"name":O.LINUX,"versionStr":""};}l.log(I,"OS detection returned no result");return null;}b=/Windows Phone (?:OS )?([\d.]*)/;e=a.match(b);if(e){return({"name":O.WINDOWS_PHONE,"versionStr":e[1]});}if(a.indexOf("(BB10;")>0){b=/\sVersion\/([\d.]+)\s/;e=a.match(b);if(e){return{"name":O.BLACKBERRY,"versionStr":e[1]};}else{return{"name":O.BLACKBERRY,"versionStr":'10'};}}b=/\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;e=a.match(b);if(e){var i=/iPhone|iPad|iPod/;var q=/PlayBook|BlackBerry/;if(e[0].match(i)){e[3]=e[3].replace(/_/g,".");return({"name":O.IOS,"versionStr":e[3]});}else if(e[2].match(/Android/)){e[2]=e[2].replace(/\s/g,"");return({"name":O.ANDROID,"versionStr":e[3]});}else if(e[0].match(q)){return({"name":O.BLACKBERRY,"versionStr":e[4]});}}b=/\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;e=a.match(b);if(e){return({"name":O.ANDROID,"versionStr":e.length==3?e[2]:""});}return f();}function r(a){d.os=o(a)||{};d.os.OS=O;d.os.version=d.os.versionStr?parseFloat(d.os.versionStr):-1;if(d.os.name){for(var b in O){if(O[b]===d.os.name){d.os[b.toLowerCase()]=true;}}}}r();d._setOS=r;var B={"INTERNET_EXPLORER":"ie","EDGE":"ed","FIREFOX":"ff","CHROME":"cr","SAFARI":"sf","ANDROID":"an"};var u=navigator.userAgent;
/*!
	 * Taken from jQuery JavaScript Library v1.7.1
	 * http://jquery.com/
	 *
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 * Copyright 2011, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses.
	 *
	 * Date: Mon Nov 21 21:11:03 2011 -0500
	 */
function y(a){var b=(a||u).toLowerCase();var e=/(webkit)[ \/]([\w.]+)/;var f=/(opera)(?:.*version)?[ \/]([\w.]+)/;var i=/(msie) ([\w.]+)/;var q=/(trident)\/[\w.]+;.*rv:([\w.]+)/;var s=/(edge)[ \/]([\w.]+)/;var t=/(mozilla)(?:.*? rv:([\w.]+))?/;var v=s.exec(b)||q.exec(b)||e.exec(b)||f.exec(b)||i.exec(b)||b.indexOf("compatible")<0&&t.exec(b)||[];var w={browser:v[1]||"",version:v[2]||"0"};w[w.browser]=true;return w;}function z(a,e){var b=y(a);var f=a||u;var i=e||window.navigator;var q;if(b.mozilla){q=/Mobile/;if(f.match(/Firefox\/(\d+\.\d+)/)){var v=parseFloat(RegExp.$1);return{name:B.FIREFOX,versionStr:""+v,version:v,mozilla:true,mobile:q.test(f)};}else{return{mobile:q.test(f),mozilla:true,version:-1};}}else if(b.webkit){var s=f.toLowerCase().match(/webkit[\/]([\d.]+)/);var w;if(s){w=s[1];}q=/Mobile/;if(f.match(/(Chrome|CriOS)\/(\d+\.\d+).\d+/)){var v=parseFloat(RegExp.$2);return{name:B.CHROME,versionStr:""+v,version:v,mobile:q.test(f),webkit:true,webkitVersion:w};}else if(f.match(/FxiOS\/(\d+\.\d+)/)){var v=parseFloat(RegExp.$1);return{name:B.FIREFOX,versionStr:""+v,version:v,mobile:true,webkit:true,webkitVersion:w};}else if(f.match(/Android .+ Version\/(\d+\.\d+)/)){var v=parseFloat(RegExp.$1);return{name:B.ANDROID,versionStr:""+v,version:v,mobile:q.test(f),webkit:true,webkitVersion:w};}else{var t=/(Version|PhantomJS)\/(\d+\.\d+).*Safari/;var x=i.standalone;if(t.test(f)){var w1=t.exec(f);var v=parseFloat(w1[2]);return{name:B.SAFARI,versionStr:""+v,fullscreen:false,webview:false,version:v,mobile:q.test(f),webkit:true,webkitVersion:w,phantomJS:w1[1]==="PhantomJS"};}else if(/iPhone|iPad|iPod/.test(f)&&!(/CriOS/.test(f))&&!(/FxiOS/.test(f))&&(x===true||x===false)){return{name:B.SAFARI,version:-1,fullscreen:x,webview:!x,mobile:q.test(f),webkit:true,webkitVersion:w};}else{return{mobile:q.test(f),webkit:true,webkitVersion:w,version:-1};}}}else if(b.msie||b.trident){var v;if(document.documentMode&&!a){if(document.documentMode===7){v=8.0;}else{v=parseFloat(document.documentMode);}}else{v=parseFloat(b.version);}return{name:B.INTERNET_EXPLORER,versionStr:""+v,version:v,msie:true,mobile:false};}else if(b.edge){var v=v=parseFloat(b.version);return{name:B.EDGE,versionStr:""+v,version:v,edge:true};}return{name:"",versionStr:"",version:-1,mobile:false};}d._testUserAgent=z;function A(){d.browser=z();d.browser.BROWSER=B;if(d.browser.name){for(var b in B){if(B[b]===d.browser.name){d.browser[b.toLowerCase()]=true;}}}}A();d.support={};d.support.touch=!!(('ontouchstart'in window)||window.DocumentTouch&&document instanceof window.DocumentTouch);if(d.browser.phantomJS){d.support.touch=false;}d.support.pointer=!!window.PointerEvent;d.support.matchmedia=!!window.matchMedia;var m=d.support.matchmedia?window.matchMedia("all and (max-width:0px)"):null;d.support.matchmedialistener=!!(m&&m.addListener);if(d.browser.safari&&d.browser.version<6&&!d.browser.fullscreen&&!d.browser.webview){d.support.matchmedialistener=false;}d.support.orientation=!!("orientation"in window&&"onorientationchange"in window);d.support.retina=(window.retina||window.devicePixelRatio>=2);d.support.websocket=('WebSocket'in window);d.support.input={};d.support.input.placeholder=('placeholder'in document.createElement("input"));d.media={};var R={"SAP_3STEPS":"3Step","SAP_4STEPS":"4Step","SAP_6STEPS":"6Step","SAP_STANDARD":"Std","SAP_STANDARD_EXTENDED":"StdExt"};d.media.RANGESETS=R;d.media._predefinedRangeSets={};d.media._predefinedRangeSets[R.SAP_3STEPS]={points:[520,960],unit:"px",name:R.SAP_3STEPS,names:["S","M","L"]};d.media._predefinedRangeSets[R.SAP_4STEPS]={points:[520,760,960],unit:"px",name:R.SAP_4STEPS,names:["S","M","L","XL"]};d.media._predefinedRangeSets[R.SAP_6STEPS]={points:[241,400,541,768,960],unit:"px",name:R.SAP_6STEPS,names:["XS","S","M","L","XL","XXL"]};d.media._predefinedRangeSets[R.SAP_STANDARD]={points:[600,1024],unit:"px",name:R.SAP_STANDARD,names:["Phone","Tablet","Desktop"]};d.media._predefinedRangeSets[R.SAP_STANDARD_EXTENDED]={points:[600,1024,1440],unit:"px",name:R.SAP_STANDARD_EXTENDED,names:["Phone","Tablet","Desktop","LargeDesktop"]};var _=R.SAP_STANDARD;var C=d.support.matchmedialistener?0:100;var G={};var H=null;function J(f,t,a){a=a||"px";var q="all";if(f>0){q=q+" and (min-width:"+f+a+")";}if(t>0){q=q+" and (max-width:"+t+a+")";}return q;}function K(a){if(!d.support.matchmedialistener&&H==Q()[0]){return;}if(G[a].timer){clearTimeout(G[a].timer);G[a].timer=null;}G[a].timer=setTimeout(function(){var b=M(a,false);if(b){n("media_"+a,b);}},C);}function L(s,i){var q=G[s].queries[i];var a={from:q.from,unit:G[s].unit};if(q.to>=0){a.to=q.to;}if(G[s].names){a.name=G[s].names[i];}return a;}function M(a,b,f){f=f||d.media.matches;if(G[a]){var e=G[a].queries;var s=null;for(var i=0,t=e.length;i<t;i++){var q=e[i];if((q!=G[a].currentquery||b)&&f(q.from,q.to,G[a].unit)){if(!b){G[a].currentquery=q;}if(!G[a].noClasses&&G[a].names&&!b){N(a,G[a].names[i]);}s=L(a,i);}}return s;}l.log(W,"No queryset with name "+a+" found",'DEVICE.MEDIA');return null;}function N(s,a,b){var e="sapUiMedia-"+s+"-";P(e+a,b,e);}function P(s,b,a){var e=document.documentElement;if(e.className.length==0){if(!b){e.className=s;}}else{var f=e.className.split(" ");var q="";for(var i=0;i<f.length;i++){if((a&&f[i].indexOf(a)!=0)||(!a&&f[i]!=s)){q=q+f[i]+" ";}}if(!b){q=q+s;}e.className=q;}}function Q(){return[window.innerWidth,window.innerHeight];}function S(v,a){if(a==="em"||a==="rem"){var s=window.getComputedStyle||function(e){return e.currentStyle;};var x=s(document.documentElement).fontSize;var f=(x&&x.indexOf("px")>=0)?parseFloat(x,10):16;return v*f;}return v;}function U(f,t,e,s){f=S(f,e);t=S(t,e);var w=s[0];var a=f<0||f<=w;var b=t<0||w<=t;return a&&b;}function V(f,t,a){return U(f,t,a,Q());}function X(f,t,a){var q=J(f,t,a);var b=window.matchMedia(q);return b&&b.matches;}d.media.matches=d.support.matchmedia?X:V;d.media.attachHandler=function(f,a,s){var b=s||_;j("media_"+b,f,a);};d.media.detachHandler=function(f,a,s){var b=s||_;k("media_"+b,f,a);};d.media.initRangeSet=function(s,a,b,e,f){var t;if(!s){t=d.media._predefinedRangeSets[_];}else if(s&&d.media._predefinedRangeSets[s]){t=d.media._predefinedRangeSets[s];}else{t={name:s,unit:(b||"px").toLowerCase(),points:a||[],names:e,noClasses:!!f};}if(d.media.hasRangeSet(t.name)){l.log(I,"Range set "+t.name+" has already been initialized",'DEVICE.MEDIA');return;}s=t.name;t.queries=[];t.timer=null;t.currentquery=null;t.listener=function(){return K(s);};var v,w,x;var w1=t.points;for(var i=0,x1=w1.length;i<=x1;i++){v=(i==0)?0:w1[i-1];w=(i==w1.length)?-1:w1[i];x=J(v,w,t.unit);t.queries.push({query:x,from:v,to:w});}if(t.names&&t.names.length!=t.queries.length){t.names=null;}G[t.name]=t;if(d.support.matchmedialistener){var y1=t.queries;for(var i=0;i<y1.length;i++){var q=y1[i];q.media=window.matchMedia(q.query);q.media.addListener(t.listener);}}else{window.addEventListener("resize",t.listener,false);window.addEventListener("orientationchange",t.listener,false);}t.listener();};d.media.getCurrentRange=function(s,w){if(!d.media.hasRangeSet(s)){return null;}return M(s,true,isNaN(w)?null:function(f,t,a){return U(f,t,a,[w,0]);});};d.media.hasRangeSet=function(s){return s&&!!G[s];};d.media.removeRangeSet=function(s){if(!d.media.hasRangeSet(s)){l.log(I,"RangeSet "+s+" not found, thus could not be removed.",'DEVICE.MEDIA');return;}for(var x in R){if(s===R[x]){l.log(W,"Cannot remove default rangeset - no action taken.",'DEVICE.MEDIA');return;}}var a=G[s];if(d.support.matchmedialistener){var q=a.queries;for(var i=0;i<q.length;i++){q[i].media.removeListener(a.listener);}}else{window.removeEventListener("resize",a.listener,false);window.removeEventListener("orientationchange",a.listener,false);}N(s,"",true);delete h["media_"+s];delete G[s];};var Y={"TABLET":"tablet","PHONE":"phone","DESKTOP":"desktop","COMBI":"combi"};d.system={};function Z(a,b){var t=$(b);var i=d.os.windows&&d.os.version>=8;var e=d.os.windows&&d.os.version===7;var s={};s.tablet=!!(((d.support.touch&&!e)||i||!!a)&&t);s.phone=!!(d.os.windows_phone||((d.support.touch&&!e)||!!a)&&!t);s.desktop=!!((!s.tablet&&!s.phone)||i||e);s.combi=!!(s.desktop&&s.tablet);s.SYSTEMTYPE=Y;for(var f in Y){P("sap-"+Y[f],!s[Y[f]]);}return s;}function $(a){var u=a||navigator.userAgent;var i=d.os.windows&&d.os.version>=8;if(d.os.name===d.os.OS.IOS){return/ipad/i.test(u);}else{if(d.support.touch){if(i){return true;}if(d.browser.chrome&&d.os.android&&d.os.version>=4.4){return!/Mobile Safari\/[.0-9]+/.test(u);}else{var b=window.devicePixelRatio?window.devicePixelRatio:1;if(d.os.android&&d.browser.webkit&&(parseFloat(d.browser.webkitVersion)>537.10)){b=1;}var t=(Math.min(window.screen.width/b,window.screen.height/b)>=600);if(s1()&&(window.screen.height===552||window.screen.height===553)&&(/Nexus 7/i.test(u))){t=true;}return t;}}else{var e=(/(?=android)(?=.*mobile)/i.test(u));return(d.browser.msie&&u.indexOf("Touch")!==-1)||(d.os.android&&!e);}}}function a1(a,b){d.system=Z(a,b);if(d.system.tablet||d.system.phone){d.browser.mobile=true;}}a1();d._getSystem=Z;d.orientation={};d.resize={};d.orientation.attachHandler=function(f,a){j("orientation",f,a);};d.resize.attachHandler=function(f,a){j("resize",f,a);};d.orientation.detachHandler=function(f,a){k("orientation",f,a);};d.resize.detachHandler=function(f,a){k("resize",f,a);};function b1(i){i.landscape=s1(true);i.portrait=!i.landscape;}function c1(){b1(d.orientation);n("orientation",{landscape:d.orientation.landscape});}function d1(){e1(d.resize);n("resize",{height:d.resize.height,width:d.resize.width});}function e1(i){i.width=Q()[0];i.height=Q()[1];}function f1(){var w=d.orientation.landscape;var i=s1();if(w!=i){c1();}if(!k1){k1=window.setTimeout(g1,150);}}function g1(){d1();k1=null;}var h1=false;var i1=false;var j1;var k1;var l1;var m1=Q()[1];var n1=Q()[0];var o1=false;var p1;var q1=/INPUT|TEXTAREA|SELECT/;var r1=d.os.ios&&d.browser.name==="sf"&&((d.system.phone&&d.os.version>=7&&d.os.version<7.1)||(d.system.tablet&&d.os.version>=7));function s1(f){if(d.support.touch&&d.support.orientation&&d.os.android){if(o1&&f){return!d.orientation.landscape;}if(o1){return d.orientation.landscape;}}else if(d.support.matchmedia&&d.support.orientation){return!!window.matchMedia("(orientation: landscape)").matches;}var s=Q();return s[0]>s[1];}function t1(e){if(e.type=="resize"){if(r1&&q1.test(document.activeElement.tagName)&&!h1){return;}var w=Q()[1];var i=Q()[0];var t=new Date().getTime();if(w===m1&&i===n1){return;}i1=true;if((m1!=w)&&(n1==i)){if(!p1||(t-p1>300)){o1=(w<m1);}d1();}else{n1=i;}p1=t;m1=w;if(l1){window.clearTimeout(l1);l1=null;}l1=window.setTimeout(v1,1200);}else if(e.type=="orientationchange"){h1=true;}if(j1){clearTimeout(j1);j1=null;}j1=window.setTimeout(u1,50);}function u1(){if(i1&&(h1||(d.system.tablet&&d.os.ios&&d.os.version>=9))){c1();d1();h1=false;i1=false;if(l1){window.clearTimeout(l1);l1=null;}}j1=null;}function v1(){h1=false;i1=false;l1=null;}d._update=function(a){u=navigator.userAgent;l.log(W,"Device API values manipulated: NOT PRODUCTIVE FEATURE!!! This should be only used for test purposes. Only use if you know what you are doing.");A();r();a1(a);};e1(d.resize);b1(d.orientation);window.sap.ui.Device=d;if(d.support.touch&&d.support.orientation){window.addEventListener("resize",t1,false);window.addEventListener("orientationchange",t1,false);}else{window.addEventListener("resize",f1,false);}d.media.initRangeSet();d.media.initRangeSet(R["SAP_STANDARD_EXTENDED"]);if(sap.ui.define){sap.ui.define("sap/ui/Device",[],function(){return d;});}}());
