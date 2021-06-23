(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[23],{25:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.CANVAS_RENDERINGS="canvasRenderings",t.CURRENT_VIEW="currentView",t.ENTIRE_DOCUMENT_AS_PDF="entireDocumentAsPdf",t.ENTIRE_DOCUMENT_AS_TEXT="entireDocumentAsText",t.ENTIRE_FILE_AS_ORIGINAL="entireFileAsOriginal",t.IMAGE_RENDERINGS="imageRenderings",t.MANIFEST_RENDERINGS="manifestRenderings",t.RANGE_RENDERINGS="rangeRenderings",t.SELECTION="selection",t.UNKNOWN="unknown",t.WHOLE_IMAGE_HIGH_RES="wholeImageHighRes",t.WHOLE_IMAGE_LOW_RES="wholeImageLowRes",t.WHOLE_IMAGES_HIGH_RES="wholeImagesHighRes"}(i||(i={}))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i,o=n(4),s=n(17),a=n(25),r=n(3),h=n(1),l=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e,n=this;this.setConfig("downloadDialogue"),t.prototype.create.call(this),this.$element.attr("role","region"),this.$element.attr("aria-label",this.content.title),this.openCommand=o.a.SHOW_DOWNLOAD_DIALOGUE,this.closeCommand=o.a.HIDE_DOWNLOAD_DIALOGUE,this.component.subscribe(this.openCommand,(function(t){e=t,n.open(t)})),this.component.subscribe(this.closeCommand,(function(){e&&e.focus(),n.close()})),this.$title=$('<div role="heading" class="heading">'+this.content.title+"</div>"),this.$content.append(this.$title),this.$noneAvailable=$('<div class="noneAvailable">'+this.content.noneAvailable+"</div>"),this.$content.append(this.$noneAvailable),this.$downloadOptions=$('<ol class="options"></ol>'),this.$content.append(this.$downloadOptions),this.$footer=$('<div class="footer"></div>'),this.$content.append(this.$footer),this.$termsOfUseButton=$('<a href="#">'+this.extension.data.config.content.termsOfUse+"</a>"),this.$footer.append(this.$termsOfUseButton),this.$termsOfUseButton.onPressed((function(){n.component.publish(o.a.SHOW_TERMS_OF_USE)})),this.$element.hide(),this.updateTermsOfUseButton()},e.prototype.addEntireFileDownloadOptions=function(){if(this.isDownloadOptionAvailable(a.a.ENTIRE_FILE_AS_ORIGINAL)){this.$downloadOptions.empty();for(var t=this.extension.helper.getCurrentCanvas(),e=!1,n=t.getRenderings(),i=0;i<n.length;i++){var o=n[i],s=o.getFormat(),r="";s&&(r=s.toString()),this.addEntireFileDownloadOption(o.id,h.LanguageMap.getValue(o.getLabel()),r),e=!0}if(!e){var l=!1,c=t.getContent();for(i=0;i<c.length;i++){var p=c[i].getBody();if(p.length)(r=p[0].getFormat())&&(this.addEntireFileDownloadOption(p[0].id,"",r.toString()),l=!0)}l||this.addEntireFileDownloadOption(t.id,"","")}}},e.prototype.addEntireFileDownloadOption=function(t,e,n){var i;i=n?r.f.simplifyMimeType(n):this.getFileExtension(t),e||(e=this.content.entireFileAsOriginal),i&&(e+=" ("+i+")"),this.$downloadOptions.append('<li><a href="'+t+'" target="_blank" download tabindex="0">'+e+"</li>")},e.prototype.resetDynamicDownloadOptions=function(){this.renderingUrls=[],this.renderingUrlsCount=0,this.$downloadOptions.find("li.dynamic").remove()},e.prototype.getDownloadOptionsForRenderings=function(t,e,n){for(var i=t.getRenderings(),o=[],s=0;s<i.length;s++){var a=i[s];if(a){var l=h.LanguageMap.getValue(a.getLabel(),this.extension.getLocale()),c="downloadOption"+ ++this.renderingUrlsCount;l?l+=" ({0})":l=e;var p=r.f.simplifyMimeType(a.getFormat().toString());l=r.n.format(l,p),this.renderingUrls[c]=a.id;var u=$('<li class="option dynamic"><input id="'+c+'" data-mime="'+p+'" title="'+l+'" type="radio" name="downloadOptions" tabindex="0" /><label for="'+c+'">'+l+"</label></li>");o.push({type:n,button:u})}}return o},e.prototype.getSelectedOption=function(){return this.$downloadOptions.find("li.option input:checked")},e.prototype.getCurrentResourceId=function(){return this.extension.helper.getCurrentCanvas().externalResource.data.id},e.prototype.getCurrentResourceFormat=function(){var t=this.getCurrentResourceId();return t.substr(t.lastIndexOf(".")+1).toLowerCase()},e.prototype.updateNoneAvailable=function(){this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show()},e.prototype.updateTermsOfUseButton=function(){var t=this.extension.helper.getRequiredStatement();r.b.getBool(this.extension.data.config.options.termsOfUseEnabled,!1)&&t&&t.value?this.$termsOfUseButton.show():this.$termsOfUseButton.hide()},e.prototype.getFileExtension=function(t){var e=t.split(".").pop();return e.length>5||-1!==e.indexOf("/")?null:e},e.prototype.isMediaDownloadEnabled=function(){return this.extension.helper.isUIEnabled("mediaDownload")},e.prototype.isDownloadOptionAvailable=function(t){switch(t){case a.a.ENTIRE_FILE_AS_ORIGINAL:return this.isMediaDownloadEnabled()}return!0},e.prototype.close=function(){t.prototype.close.call(this)},e.prototype.resize=function(){this.setDockedPosition()},e}(s.a)},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i,o=n(4),s=n(20),a=n(0),r=n(32),h=n(3),l=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e,!0,!0)||this;return n.isCreated=!1,n.isOpen=!1,n}return l(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.component.subscribe(o.a.CANVAS_INDEX_CHANGE,(function(t){e.selectIndex(parseInt(t))})),this.component.subscribe(o.a.LOGIN,(function(){e.loadThumbs()})),this.component.subscribe(o.a.CLICKTHROUGH,(function(){e.loadThumbs()})),this.$thumbs=$('<div class="thumbs"></div>'),this.$element.append(this.$thumbs);var n=this.extension.helper.getViewingDirection()||a.f.LEFT_TO_RIGHT;this.$thumbs.addClass(n);var i=this;$.templates({thumbsTemplate:'<a id="thumb{{>index}}" class="{{:~className()}}" data-src="{{>uri}}" data-visible="{{>visible}}" data-index="{{>index}}" tabindex="0">                                <div class="wrap" style="height:{{>height + ~extraHeight()}}px"></div>                                <div class="info">                                    <span class="index">{{:#index + 1}}</span>                                    <span class="label" title="{{>label}}">{{>label}}&nbsp;</span>                                    <span class="searchResults" title="{{:~searchResultsTitle()}}">{{>data.searchResults}}</span>                                </div>                             </a>                             {{if ~separator()}}                                  <div class="separator"></div>                              {{/if}}'});var s=this.options.thumbsExtraHeight;$.views.helpers({separator:function(){return!1},extraHeight:function(){return s},className:function(){var t="thumb";0===this.data.index&&(t+=" first"),this.data.uri||(t+=" placeholder");var e=i.extension.helper.getViewingDirection();return!e||e!==a.f.LEFT_TO_RIGHT&&e!==a.f.RIGHT_TO_LEFT?i.extension.helper.isPaged()?t+=" twoCol":t+=" oneCol":t+=" twoCol",t},searchResultsTitle:function(){var t=Number(this.data.data.searchResults);return t?t>1?h.n.format(i.content.searchResults,t.toString()):h.n.format(i.content.searchResult,t.toString()):""}}),this.$element.on("scroll",(function(){e.scrollStop()}),100),this.resize()},e.prototype.databind=function(){this.thumbs&&(this._$thumbsCache=null,this.createThumbs(),this.loadThumbs(0),this.selectIndex(this.extension.helper.canvasIndex))},e.prototype.createThumbs=function(){var t=this;if(this.thumbs){for(var e=[],n=0;n<this.thumbs.length;n++){var i=this.thumbs[n];e.push(i.height)}var s=h.h.median(e);for(n=0;n<this.thumbs.length;n++){(i=this.thumbs[n]).height=s}this.$thumbs.link($.templates.thumbsTemplate,this.thumbs),this.$thumbs.undelegate(".thumb","click"),this.$thumbs.delegate(".thumb","click",(function(e){e.preventDefault();var n=$.view(this).data;return t.lastThumbClickedIndex=n.index,t.component.publish(o.a.THUMB_SELECTED,n),!1})),this.$thumbs.delegate(".thumb","keydown",(function(e){var n=e.originalEvent,i=h.g.getCharCode(n);if(i===r.a.Spacebar||i===r.a.Enter){e.preventDefault();var s=$.view(this).data;t.lastThumbClickedIndex=s.index,t.component.publish(o.a.THUMB_SELECTED,s)}})),this.setLabel(),this.isCreated=!0}},e.prototype.scrollStop=function(){var t=1/((this.$thumbs.height()-this.$element.height())/this.$element.scrollTop());t>1&&(t=1);var e=Math.floor((this.thumbs.length-1)*t);this.loadThumbs(e)},e.prototype.loadThumbs=function(t){if(void 0===t&&(t=this.extension.helper.canvasIndex),this.thumbs&&this.thumbs.length){var e,n=this.extension.helper.getCanvasByIndex(t).getContent();if(n.length){var i=n[0].getBody();if(i.length){var o=i[0].getType();o&&(e=o.toString().toLowerCase())}}for(var s=t,a=this.options.thumbsLoadRange,r={start:s>a?s-a:0,end:s<this.thumbs.length-1-a?s+a:this.thumbs.length-1},l=this.options.thumbsImageFadeInDuration,c=r.start;c<=r.end;c++){var p=this.getThumbByIndex(c),u=p.find(".wrap");if(!u.hasClass("loading")&&!u.hasClass("loaded"))if("false"!==p.attr("data-visible")){u.removeClass("loadingFailed"),u.addClass("loading"),e&&u.addClass(e);var d=p.attr("data-src");this.config.options.thumbsCacheInvalidation&&this.config.options.thumbsCacheInvalidation.enabled&&(d+=this.config.options.thumbsCacheInvalidation.paramType+"t="+h.c.getTimeStamp());var f=$('<img src="'+d+'" alt=""/>');f.hide(),f.on("load",(function(){$(this).fadeIn(l,(function(){$(this).parent().switchClass("loading","loaded")}))})),f.on("error",(function(){$(this).parent().switchClass("loading","loadingFailed")})),u.append(f)}else u.addClass("hidden")}}},e.prototype.show=function(){var t=this;this.isOpen=!0,this.$element.show(),setTimeout((function(){t.selectIndex(t.extension.helper.canvasIndex)}),1)},e.prototype.hide=function(){this.isOpen=!1,this.$element.hide()},e.prototype.isPDF=function(){var t=this.extension.helper.getCurrentCanvas().getType();return!!t&&t.toString().includes("pdf")},e.prototype.setLabel=function(){$(this.$thumbs).find("span.index").hide(),$(this.$thumbs).find("span.label").show()},e.prototype.addSelectedClassToThumbs=function(t){this.getThumbByIndex(t).addClass("selected")},e.prototype.selectIndex=function(t){-1!==t&&(this.thumbs&&this.thumbs.length&&(this.getAllThumbs().removeClass("selected"),this.$selectedThumb=this.getThumbByIndex(t),this.addSelectedClassToThumbs(t),~this.extension.getPagedIndices(t).indexOf(this.lastThumbClickedIndex)||this.$element.scrollTop(this.$selectedThumb.position().top),this.loadThumbs(t)))},e.prototype.getAllThumbs=function(){return this._$thumbsCache||(this._$thumbsCache=this.$thumbs.find(".thumb")),this._$thumbsCache},e.prototype.getThumbByIndex=function(t){return this.$thumbs.find('[data-index="'+t+'"]')},e.prototype.scrollToThumb=function(t){var e=this.getThumbByIndex(t);this.$element.scrollTop(e.position().top)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(s.a)},301:function(t,e,n){"use strict";n.r(e);var i,o=n(4),s=n(44),a=n(37),r=n(26),h=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(e){return t.call(this,e)||this}return h(e,t),e.prototype.create=function(){this.setConfig("downloadDialogue"),t.prototype.create.call(this)},e.prototype.open=function(e){t.prototype.open.call(this,e),this.addEntireFileDownloadOptions(),this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show(),this.resize()},e.prototype.isDownloadOptionAvailable=function(e){return t.prototype.isDownloadOptionAvailable.call(this,e)},e}(r.a),c=n(27),p=n(46),u=n(33),d=function(){function t(){}return t.namespace="pdfExtension.",t.PDF_LOADED=t.namespace+"pdfLoaded",t.PAGE_INDEX_CHANGE=t.namespace+"pageIndexChange",t.SEARCH=t.namespace+"search",t}(),f=n(3),b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),_=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function a(t){try{h(i.next(t))}catch(t){s(t)}}function r(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}h((i=i.apply(t,e||[])).next())}))},g=function(t,e){var n,i,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}},v=function(t){function e(e){var n=t.call(this,e)||this;return n._maxScale=5,n._minScale=.7,n._nextButtonEnabled=!1,n._pageIndex=1,n._pageIndexPending=null,n._pageRendering=!1,n._pdfDoc=null,n._prevButtonEnabled=!1,n._scale=.7,n}return b(e,t),e.prototype.create=function(){var e=this;this.setConfig("pdfCenterPanel"),t.prototype.create.call(this),this._$pdfContainer=$('<div class="pdfContainer"></div>'),this._$canvas=$("<canvas></canvas>"),this._$spinner=$('<div class="spinner"></div>'),this._canvas=this._$canvas[0],this._ctx=this._canvas.getContext("2d"),this._$prevButton=$('<div class="btn prev" tabindex="0"></div>'),this._$nextButton=$('<div class="btn next" tabindex="0"></div>'),this._$zoomInButton=$('<div class="btn zoomIn" tabindex="0"></div>'),this._$zoomOutButton=$('<div class="btn zoomOut" tabindex="0"></div>'),f.b.getBool(this.extension.data.config.options.usePdfJs,!1)&&(this.$content.append(this._$spinner),this.$content.append(this._$prevButton),this.$content.append(this._$nextButton),this.$content.append(this._$zoomInButton),this.$content.append(this._$zoomOutButton)),this._$pdfContainer.append(this._$canvas),this.$content.prepend(this._$pdfContainer),this.component.subscribe(o.a.OPEN_EXTERNAL_RESOURCE,(function(t){e.openMedia(t)})),this.component.subscribe(o.a.FIRST,(function(){e._pdfDoc&&(e._pageIndex=1,e._queueRenderPage(e._pageIndex))})),this.component.subscribe(o.a.PREV,(function(){e._pdfDoc&&(e._pageIndex<=1||(e._pageIndex--,e._queueRenderPage(e._pageIndex)))})),this.component.subscribe(o.a.NEXT,(function(){e._pdfDoc&&(e._pageIndex>=e._pdfDoc.numPages||(e._pageIndex++,e._queueRenderPage(e._pageIndex)))})),this.component.subscribe(o.a.LAST,(function(){e._pdfDoc&&(e._pageIndex=e._pdfDoc.numPages,e._queueRenderPage(e._pageIndex))})),this.component.subscribe(o.a.CANVAS_INDEX_CHANGE,(function(){e._pdfDoc&&(e._pageIndex=1,e._queueRenderPage(e._pageIndex))})),this.component.subscribe(d.SEARCH,(function(t){e._pdfDoc&&(t<1||t>e._pdfDoc.numPages||(e._pageIndex=t,e._queueRenderPage(e._pageIndex)))})),this._$prevButton.onPressed((function(t){t.preventDefault(),e._prevButtonEnabled&&e.component.publish(o.a.PREV)})),this.disablePrevButton(),this._$nextButton.onPressed((function(t){t.preventDefault(),e._nextButtonEnabled&&e.component.publish(o.a.NEXT)})),this.disableNextButton(),this._$zoomInButton.onPressed((function(t){t.preventDefault();var n=e._scale+.5;n<e._maxScale?e._scale=n:e._scale=e._maxScale,e._render(e._pageIndex)})),this._$zoomOutButton.onPressed((function(t){t.preventDefault();var n=e._scale-.5;n>e._minScale?e._scale=n:e._scale=e._minScale,e._render(e._pageIndex)}))},e.prototype.disablePrevButton=function(){this._prevButtonEnabled=!1,this._$prevButton.addClass("disabled")},e.prototype.enablePrevButton=function(){this._prevButtonEnabled=!0,this._$prevButton.removeClass("disabled")},e.prototype.hidePrevButton=function(){this.disablePrevButton(),this._$prevButton.hide()},e.prototype.showPrevButton=function(){this.enablePrevButton(),this._$prevButton.show()},e.prototype.disableNextButton=function(){this._nextButtonEnabled=!1,this._$nextButton.addClass("disabled")},e.prototype.enableNextButton=function(){this._nextButtonEnabled=!0,this._$nextButton.removeClass("disabled")},e.prototype.hideNextButton=function(){this.disableNextButton(),this._$nextButton.hide()},e.prototype.showNextButton=function(){this.enableNextButton(),this._$nextButton.show()},e.prototype.openMedia=function(t){return _(this,void 0,void 0,(function(){var e,i,s,a,r,h,l;return g(this,(function(c){switch(c.label){case 0:return this._$spinner.show(),[4,this.extension.getExternalResources(t)];case 1:return c.sent(),e=null,i=this.extension.helper.getCurrentCanvas(),s=this.extension.getMediaFormats(i),a=i.id,e=s&&s.length?s[0].id:i.id,f.b.getBool(this.extension.data.config.options.usePdfJs,!1)?[3,3]:(r=window,[4,n.e(16).then(n.t.bind(null,294,7))]);case 2:return r.PDFObject=c.sent(),window.PDFObject.embed(a,".pdfContainer",{id:"PDF"}),[3,6];case 3:return[4,Promise.all([n.e(5),n.e(24),n.e(15)]).then(n.t.bind(null,295,7))];case 4:return PDFJS=c.sent(),PDFJS.disableWorker=!0,h={url:e,withCredentials:i.externalResource.isAccessControlled()},[4,PDFJS.getDocument(h)];case 5:l=c.sent(),this._pdfDoc=l,this._render(this._pageIndex),this.component.publish(d.PDF_LOADED,l),this._$spinner.hide(),c.label=6;case 6:return this.component.publish(o.a.EXTERNAL_RESOURCE_OPENED),this.component.publish(o.a.LOAD),[2]}}))}))},e.prototype._render=function(t){var e=this;if(f.b.getBool(this.extension.data.config.options.usePdfJs,!1)){this._pageRendering=!0,this._$zoomOutButton.enable(),this._$zoomInButton.enable();var n=this._scale-.5,i=this._scale+.5;n<this._minScale&&this._$zoomOutButton.disable(),i>this._maxScale&&this._$zoomInButton.disable(),this._pdfDoc.getPage(t).then((function(t){e._renderTask&&e._renderTask.cancel(),e._viewport=t.getViewport(e._scale),e._canvas.height=e._viewport.height,e._canvas.width=e._viewport.width;var n={canvasContext:e._ctx,viewport:e._viewport};e._renderTask=t.render(n),e._renderTask.promise.then((function(){e.component.publish(d.PAGE_INDEX_CHANGE,e._pageIndex),e._pageRendering=!1,null!==e._pageIndexPending&&(e._render(e._pageIndexPending),e._pageIndexPending=null),1===e._pageIndex?e.disablePrevButton():e.enablePrevButton(),e._pageIndex===e._pdfDoc.numPages?e.disableNextButton():e.enableNextButton()})).catch((function(t){}))}))}},e.prototype._queueRenderPage=function(t){this._pageRendering?this._pageIndexPending=t:this._render(t)},e.prototype.resize=function(){t.prototype.resize.call(this),this._$pdfContainer.width(this.$content.width()),this._$pdfContainer.height(this.$content.height()),this._$spinner.css("top",this.$content.height()/2-this._$spinner.height()/2),this._$spinner.css("left",this.$content.width()/2-this._$spinner.width()/2),this._$prevButton.css({top:(this.$content.height()-this._$prevButton.height())/2,left:this._$prevButton.horizontalMargins()}),this._$nextButton.css({top:(this.$content.height()-this._$nextButton.height())/2,left:this.$content.width()-(this._$nextButton.width()+this._$nextButton.horizontalMargins())}),this._viewport&&this._render(this._pageIndex)},e}(u.a),m=n(45),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),x=function(t){function e(e){var n=t.call(this,e)||this;return n.firstButtonEnabled=!1,n.lastButtonEnabled=!1,n.nextButtonEnabled=!1,n.prevButtonEnabled=!1,n._pageIndex=0,n._pdfDoc=null,n}return y(e,t),e.prototype.create=function(){var e=this;this.setConfig("pdfHeaderPanel"),t.prototype.create.call(this),this.component.subscribe(d.PAGE_INDEX_CHANGE,(function(t){e._pageIndex=t,e.render()})),this.component.subscribe(d.PDF_LOADED,(function(t){e._pdfDoc=t})),this.$prevOptions=$('<div class="prevOptions"></div>'),this.$centerOptions.append(this.$prevOptions),this.$firstButton=$('\n          <button class="btn imageBtn first" tabindex="0" title="'+this.content.first+'">\n            <i class="uv-icon-first" aria-hidden="true"></i>\n            <span class="sr-only">'+this.content.first+"</span>\n          </button>\n        "),this.$prevOptions.append(this.$firstButton),this.$firstButton.disable(),this.$prevButton=$('\n          <button class="btn imageBtn prev" tabindex="0" title="'+this.content.previous+'">\n            <i class="uv-icon-prev" aria-hidden="true"></i>\n            <span class="sr-only">'+this.content.previous+"</span>\n          </button>\n        "),this.$prevOptions.append(this.$prevButton),this.$prevButton.disable(),this.$search=$('<div class="search"></div>'),this.$centerOptions.append(this.$search),this.$searchText=$('<input class="searchText" maxlength="50" type="text" tabindex="0" aria-label="'+this.content.pageSearchLabel+'"/>'),this.$search.append(this.$searchText),this.$total=$('<span class="total"></span>'),this.$search.append(this.$total),this.$searchButton=$('<a class="go btn btn-primary" tabindex="0">'+this.content.go+"</a>"),this.$search.append(this.$searchButton),this.$searchButton.disable(),this.$nextOptions=$('<div class="nextOptions"></div>'),this.$centerOptions.append(this.$nextOptions),this.$nextButton=$('\n          <button class="btn imageBtn next" tabindex="0" title="'+this.content.next+'">\n            <i class="uv-icon-next" aria-hidden="true"></i>\n            <span class="sr-only">'+this.content.next+"</span>\n          </button>\n        "),this.$nextOptions.append(this.$nextButton),this.$nextButton.disable(),this.$lastButton=$('\n          <button class="btn imageBtn last" tabindex="0" title="'+this.content.last+'">\n            <i class="uv-icon-last" aria-hidden="true"></i>\n            <span class="sr-only">'+this.content.last+"</span>\n          </button>\n        "),this.$nextOptions.append(this.$lastButton),this.$lastButton.disable(),this.$firstButton.onPressed((function(){e.component.publish(o.a.FIRST)})),this.$prevButton.onPressed((function(){e.component.publish(o.a.PREV)})),this.$nextButton.onPressed((function(){e.component.publish(o.a.NEXT)})),this.$lastButton.onPressed((function(){e.component.publish(o.a.LAST)})),this.$searchText.onEnter((function(){e.$searchText.blur(),e.search(e.$searchText.val())})),this.$searchText.click((function(){$(this).select()})),this.$searchButton.onPressed((function(){e.search(e.$searchText.val())}))},e.prototype.render=function(){1===this._pdfDoc.numPages?this.$centerOptions.hide():this.$centerOptions.show(),this.$searchText.val(this._pageIndex);var t=this.content.of;this.$total.html(f.n.format(t,this._pdfDoc.numPages.toString())),this.$searchButton.enable(),1===this._pageIndex?(this.$firstButton.disable(),this.$prevButton.disable()):(this.$firstButton.enable(),this.$prevButton.enable()),this._pageIndex===this._pdfDoc.numPages?(this.$lastButton.disable(),this.$nextButton.disable()):(this.$lastButton.enable(),this.$nextButton.enable())},e.prototype.search=function(t){if(t){var e=parseInt(this.$searchText.val(),10);isNaN(e)?this.extension.showMessage(this.extension.data.config.modules.genericDialogue.content.invalidNumber):this.component.publish(d.SEARCH,e)}else this.extension.showMessage(this.content.emptyValue)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(m.a),w=n(55),E=n(34),O=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),I=function(t){function e(e){return t.call(this,e)||this}return O(e,t),e.prototype.create=function(){this.setConfig("settingsDialogue"),t.prototype.create.call(this)},e}(E.a),P=n(35),T=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),B=function(t){function e(e){return t.call(this,e)||this}return T(e,t),e.prototype.create=function(){this.setConfig("shareDialogue"),t.prototype.create.call(this)},e.prototype.update=function(){t.prototype.update.call(this),this.code=this.extension.getEmbedScript(this.options.embedTemplate,this.currentWidth,this.currentHeight),this.$code.val(this.code)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(P.a),C=n(0),D=n(1),A=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.component.subscribe(o.a.CANVAS_INDEX_CHANGE,(function(t){e.viewCanvas(t)})),this.component.subscribe(o.a.THUMB_SELECTED,(function(t){e.component.publish(o.a.CANVAS_INDEX_CHANGE,t.index)})),this.component.subscribe(o.a.LEFTPANEL_EXPAND_FULL_START,(function(){e.shell.$centerPanel.hide(),e.shell.$rightPanel.hide()})),this.component.subscribe(o.a.LEFTPANEL_COLLAPSE_FULL_FINISH,(function(){e.shell.$centerPanel.show(),e.shell.$rightPanel.show(),e.resize()})),this.component.subscribe(o.a.SHOW_OVERLAY,(function(){e.IsOldIE()&&e.centerPanel.$element.hide()})),this.component.subscribe(o.a.HIDE_OVERLAY,(function(){e.IsOldIE()&&e.centerPanel.$element.show()})),this.component.subscribe(o.a.EXIT_FULLSCREEN,(function(){setTimeout((function(){e.resize()}),10)}))},e.prototype.render=function(){t.prototype.render.call(this)},e.prototype.IsOldIE=function(){var t=window.browserDetect.browser,e=window.browserDetect.version;return"Explorer"===t&&e<=9},e.prototype.isHeaderPanelEnabled=function(){return t.prototype.isHeaderPanelEnabled.call(this)&&f.b.getBool(this.data.config.options.usePdfJs,!0)},e.prototype.createModules=function(){t.prototype.createModules.call(this),this.isHeaderPanelEnabled()?this.headerPanel=new x(this.shell.$headerPanel):this.shell.$headerPanel.hide(),this.isLeftPanelEnabled()&&(this.leftPanel=new w.a(this.shell.$leftPanel)),this.centerPanel=new v(this.shell.$centerPanel),this.isRightPanelEnabled()&&(this.rightPanel=new p.a(this.shell.$rightPanel)),this.isFooterPanelEnabled()?this.footerPanel=new c.a(this.shell.$footerPanel):this.shell.$footerPanel.hide(),this.$downloadDialogue=$('<div class="overlay download" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$downloadDialogue),this.downloadDialogue=new l(this.$downloadDialogue),this.$shareDialogue=$('<div class="overlay share" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$shareDialogue),this.shareDialogue=new B(this.$shareDialogue),this.$settingsDialogue=$('<div class="overlay settings" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$settingsDialogue),this.settingsDialogue=new I(this.$settingsDialogue),this.isLeftPanelEnabled()&&this.leftPanel.init(),this.isRightPanelEnabled()&&this.rightPanel.init()},e.prototype.bookmark=function(){t.prototype.bookmark.call(this);var e=this.helper.getCurrentCanvas(),n=new a.a;n.index=this.helper.canvasIndex,n.label=D.LanguageMap.getValue(e.getLabel()),n.thumb=e.getProperty("thumbnail"),n.title=this.helper.getLabel(),n.trackingLabel=window.trackingLabel,n.type=C.a.DOCUMENT,this.fire(o.a.BOOKMARK,n)},e.prototype.dependencyLoaded=function(t,e){0===t&&(window.PDFObject=e)},e.prototype.getEmbedScript=function(t,e,n){var i=this.getAppUri()+"#?manifest="+this.helper.manifestUri+"&c="+this.helper.collectionIndex+"&m="+this.helper.manifestIndex+"&cv="+this.helper.canvasIndex;return f.n.format(t,i,e.toString(),n.toString())},e}(s.a);e.default=L},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,o=n(4),s=n(36),a=n(28),r=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this)},e}(a.a),l=n(0),c=n(3),p=n(1),u=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),d=function(t){function e(e){return t.call(this,e)||this}return u(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this),this.setTitle(this.content.title),this.$tabsContent=$('<div class="tabsContent"></div>'),this.$main.append(this.$tabsContent),this.$views=$('<div class="views"></div>'),this.$tabsContent.append(this.$views),this.$thumbsView=$('<div class="thumbsView"></div>'),this.$views.append(this.$thumbsView),this.$resourcesView=$('<div class="resourcesView"></div>'),this.$resources=$("<ul></ul>"),this.$resourcesView.append(this.$resources),this.$views.append(this.$resourcesView),this.thumbsView=new h(this.$thumbsView),this.dataBind()},e.prototype.dataBind=function(){this.dataBindThumbsView();var t=this.extension.helper.getCurrentCanvas().getResources();0===t.length&&this.$resourcesView.hide();for(var e=0;e<t.length;e++){var n=t[e].getResource();if(n){var i=p.LanguageMap.getValue(n.getLabel());if(i){var o=c.f.simplifyMimeType(n.getFormat().toString()),s=$('<li><a href="'+n.id+'" target="_blank">'+i+" ("+o+")</li>");this.$resources.append(s)}}}},e.prototype.dataBindThumbsView=function(){if(this.thumbsView){var t,e,n=this.extension.helper.getViewingDirection();!n||n!==l.f.LEFT_TO_RIGHT&&n!==l.f.RIGHT_TO_LEFT?(t=this.config.options.oneColThumbWidth,e=this.config.options.oneColThumbHeight):(t=this.config.options.twoColThumbWidth,e=this.config.options.twoColThumbHeight),void 0===t&&(t=100),void 0===e&&(e=100),this.thumbsView.thumbs=this.extension.helper.getThumbs(t,e),this.thumbsView.thumbs.length<2&&this.$thumbsView.hide(),this.thumbsView.databind()}},e.prototype.expandFullStart=function(){t.prototype.expandFullStart.call(this),this.component.publish(o.a.LEFTPANEL_EXPAND_FULL_START)},e.prototype.expandFullFinish=function(){t.prototype.expandFullFinish.call(this),this.component.publish(o.a.LEFTPANEL_EXPAND_FULL_FINISH)},e.prototype.collapseFullStart=function(){t.prototype.collapseFullStart.call(this),this.component.publish(o.a.LEFTPANEL_COLLAPSE_FULL_START)},e.prototype.collapseFullFinish=function(){t.prototype.collapseFullFinish.call(this),this.component.publish(o.a.LEFTPANEL_COLLAPSE_FULL_FINISH)},e.prototype.resize=function(){t.prototype.resize.call(this),this.$views.height(this.$main.height()),this.$resources.height(this.$main.height())},e}(s.a)}}]);