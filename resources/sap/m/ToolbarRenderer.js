/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./BarInPageEnabler'],function(B){"use strict";var T={};T.hasNewFlexBoxSupport=(function(){var s=document.documentElement.style;return(s.flex!==undefined||s.webkitFlexShrink!==undefined);}());T.render=B.prototype.render;T.decorateRootElement=function(r,t){r.addClass("sapMTB");r.writeAccessibilityState(t,{role:t._getAccessibilityRole()});if(!T.hasNewFlexBoxSupport){r.addClass("sapMTBOldFlex");}else{r.addClass("sapMTBNewFlex");}if(t.getActive()){r.addClass("sapMTBActive");r.writeAttribute("tabindex","0");}else{r.addClass("sapMTBInactive");}r.addClass("sapMTB"+t.getStyle());r.addClass("sapMTB-"+t.getActiveDesign()+"-CTX");var w=t.getWidth();var h=t.getHeight();w&&r.addStyle("width",w);h&&r.addStyle("height",h);};T.renderBarContent=function(r,t){t.getContent().forEach(function(c){B.addChildClassTo(c,t);r.renderControl(c);});};T.shouldAddIBarContext=function(c){return false;};return T;},true);
