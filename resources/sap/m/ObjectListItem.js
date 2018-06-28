/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBase','./library','sap/ui/core/IconPool','sap/m/ObjectNumber','sap/ui/core/library','./ObjectListItemRenderer'],function(L,l,I,O,c,a){"use strict";var b=l.ObjectMarkerType;var d=l.ImageHelper;var T=c.TextAlign;var e=c.TextDirection;var V=c.ValueState;var f=L.extend("sap.m.ObjectListItem",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Misc",defaultValue:null},number:{type:"string",group:"Misc",defaultValue:null},numberUnit:{type:"string",group:"Misc",defaultValue:null},intro:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},activeIcon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconDensityAware:{type:"boolean",group:"Misc",defaultValue:true},markFavorite:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},markFlagged:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},showMarkers:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},numberState:{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:V.None},titleTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:e.Inherit},introTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:e.Inherit},numberTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:e.Inherit},markLocked:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true}},defaultAggregation:"attributes",aggregations:{attributes:{type:"sap.m.ObjectAttribute",multiple:true,singularName:"attribute"},firstStatus:{type:"sap.m.ObjectStatus",multiple:false},secondStatus:{type:"sap.m.ObjectStatus",multiple:false},markers:{type:"sap.m.ObjectMarker",multiple:true,singularName:"marker"},_objectNumber:{type:"sap.m.ObjectNumber",multiple:false,visibility:"hidden"}},designtime:"sap/m/designtime/ObjectListItem.designtime"}});f.prototype.init=function(E){this._generateObjectNumber();};f.prototype.exit=function(E){if(this._oImageControl){this._oImageControl.destroy();}if(this._oTitleText){this._oTitleText.destroy();this._oTitleText=undefined;}L.prototype.exit.apply(this);};f.prototype.onAfterRendering=function(){var o=this.getAggregation("_objectNumber"),p=sap.ui.getCore().getConfiguration().getRTL(),t=p?T.Left:T.Right;if(o&&o.getNumber()){o.setTextAlign(t);}};f.prototype._generateObjectNumber=function(){var n=this.getNumber(),N=this.getNumberUnit(),s=this.getNumberState(),t=this.getNumberTextDirection();this.setAggregation("_objectNumber",new O(this.getId()+"-ObjectNumber",{number:n,unit:N,state:s,textDirection:t}),true);};f.prototype._hasAttributes=function(){var g=this.getAttributes();if(g.length>0){for(var i=0;i<g.length;i++){if(!g[i]._isEmpty()){return true;}}}return false;};f.prototype._hasStatus=function(){return((this.getFirstStatus()&&!this.getFirstStatus()._isEmpty())||(this.getSecondStatus()&&!this.getSecondStatus()._isEmpty()));};f.prototype._hasBottomContent=function(){return(this._hasAttributes()||this._hasStatus()||this.getShowMarkers()||this.getMarkLocked()||this.getMarkers().length>0);};f.prototype._getVisibleAttributes=function(){var A=this.getAttributes();var v=[];for(var i=0;i<A.length;i++){if(A[i].getVisible()){v.push(A[i]);}}return v;};f.prototype._getImageControl=function(){var i=this.getId()+'-img';var s="2.5rem";var p;if(I.isIconURI(this.getIcon())){p={src:this.getIcon(),height:s,width:s,size:s,useIconTooltip:false,densityAware:this.getIconDensityAware()};}else{p={src:this.getIcon(),useIconTooltip:false,densityAware:this.getIconDensityAware()};}var C=['sapMObjLIcon'];this._oImageControl=d.getImageControl(i,this._oImageControl,this,p,C);return this._oImageControl;};f.prototype._activeHandlingInheritor=function(){var A=this.getActiveIcon();if(!!this._oImageControl&&!!A){this._oImageControl.setSrc(A);}};f.prototype._inactiveHandlingInheritor=function(){var s=this.getIcon();if(!!this._oImageControl){this._oImageControl.setSrc(s);}};f.prototype.setNumber=function(n){this.setProperty('number',n,true);this.getAggregation("_objectNumber").setNumber(n);return this;};f.prototype.setNumberUnit=function(n){this.setProperty('numberUnit',n,true);this.getAggregation('_objectNumber').setUnit(n);return this;};f.prototype.setNumberTextDirection=function(t){this.setProperty('numberTextDirection',t,true);this.getAggregation("_objectNumber").setTextDirection(t);return this;};f.prototype.setNumberState=function(v){this.setProperty('numberState',v,true);this.getAggregation("_objectNumber").setState(v);return this;};f.prototype.setMarkFavorite=function(m){return this._setOldMarkers(b.Favorite,m);};f.prototype.setMarkFlagged=function(m){return this._setOldMarkers(b.Flagged,m);};f.prototype.setMarkLocked=function(m){return this._setOldMarkers(b.Locked,m);};f.prototype.setShowMarkers=function(m){var M;var A=this.getMarkers();this.setProperty("showMarkers",m,false);for(var i=0;i<A.length;i++){M=A[i].getType();if((M===b.Flagged&&this.getMarkFlagged())||(M===b.Favorite&&this.getMarkFavorite())||(M===b.Locked&&this.getMarkLocked())){A[i].setVisible(m);}}return this;};f.prototype._setOldMarkers=function(m,M){var A=this.getMarkers();var h=false;var o={Flagged:"-flag",Favorite:"-favorite",Locked:"-lock"};this.setProperty("mark"+m,M,false);if(!this.getShowMarkers()){M=false;}for(var i=0;i<A.length;i++){if(A[i].getType()===m){h=true;A[i].setVisible(M);break;}}if(!h){this.insertAggregation("markers",new sap.m.ObjectMarker({id:this.getId()+o[m],type:m,visible:M}));}return this;};f.prototype._getTitleText=function(){if(!this._oTitleText){this._oTitleText=new sap.m.Text(this.getId()+"-titleText",{maxLines:2});this._oTitleText.setParent(this,null,true);}return this._oTitleText;};return f;});
