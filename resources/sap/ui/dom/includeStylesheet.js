/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/dom/appendHead","sap/base/assert"],function(D,a,b){"use strict";var D=sap.ui.Device;function c(s){var o={};if(s){for(var k in s){if(s.hasOwnProperty(k)){o[k]=s[k];}}}return o;}function _(u,A,l,e){var d=function(u,A,l,e){var L=document.createElement("link");L.type="text/css";L.rel="stylesheet";L.href=u;if(A&&typeof A==="object"){Object.keys(A).forEach(function(k){if(A[k]!=null){L.setAttribute(k,A[k]);}});}var E=function(){jQuery(L).attr("data-sap-ui-ready","false").off("error");if(typeof e==="function"){e();}};var f=function(){jQuery(L).attr("data-sap-ui-ready","true").off("load");if(typeof l==="function"){l();}};if(D.browser.msie||D.browser.edge){var g=f;f=function(h){var r;try{r=h.target&&h.target.sheet&&h.target.sheet.rules;}catch(i){}if(r&&r.length>0){g();}else{E();}};}jQuery(L).load(f);jQuery(L).error(E);return L;};var o=document.getElementById(A&&A.id);var L=d(u,A,l,e);if(o&&o.tagName==="LINK"&&o.rel==="stylesheet"){if(typeof l==="function"||typeof e==="function"||o.href!==L.href){if(o.getAttribute("data-sap-ui-foucmarker")===L.id){jQuery(o).removeAttr("id").before(L);}else{jQuery(o).replaceWith(L);}}else{if(o.getAttribute("data-sap-ui-foucmarker")===L.id){o.removeAttribute("data-sap-ui-foucmarker");}}}else{o=jQuery('#sap-ui-core-customcss');if(o.length>0){o.first().before(L);}else{a(L);}}}return function includeStyleSheet(u,i,l,e){var A;if(typeof u==="string"){A=typeof i==="string"?{id:i}:i;_(u,A,l,e);}else{b(typeof u==='object'&&u.url,"vUrl must be an object and requires a URL");A=c(u.attributes);if(u.id){A.id=u.id;}return new Promise(function(r,R){_(u.url,A,r,R);});}};});
