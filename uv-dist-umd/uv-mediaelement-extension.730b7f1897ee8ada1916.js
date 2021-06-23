(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[20],{25:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.CANVAS_RENDERINGS="canvasRenderings",t.CURRENT_VIEW="currentView",t.ENTIRE_DOCUMENT_AS_PDF="entireDocumentAsPdf",t.ENTIRE_DOCUMENT_AS_TEXT="entireDocumentAsText",t.ENTIRE_FILE_AS_ORIGINAL="entireFileAsOriginal",t.IMAGE_RENDERINGS="imageRenderings",t.MANIFEST_RENDERINGS="manifestRenderings",t.RANGE_RENDERINGS="rangeRenderings",t.SELECTION="selection",t.UNKNOWN="unknown",t.WHOLE_IMAGE_HIGH_RES="wholeImageHighRes",t.WHOLE_IMAGE_LOW_RES="wholeImageLowRes",t.WHOLE_IMAGES_HIGH_RES="wholeImagesHighRes"}(i||(i={}))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i,o=n(4),s=n(17),r=n(25),a=n(3),h=n(1),l=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.create=function(){var e,n=this;this.setConfig("downloadDialogue"),t.prototype.create.call(this),this.$element.attr("role","region"),this.$element.attr("aria-label",this.content.title),this.openCommand=o.a.SHOW_DOWNLOAD_DIALOGUE,this.closeCommand=o.a.HIDE_DOWNLOAD_DIALOGUE,this.component.subscribe(this.openCommand,(function(t){e=t,n.open(t)})),this.component.subscribe(this.closeCommand,(function(){e&&e.focus(),n.close()})),this.$title=$('<div role="heading" class="heading">'+this.content.title+"</div>"),this.$content.append(this.$title),this.$noneAvailable=$('<div class="noneAvailable">'+this.content.noneAvailable+"</div>"),this.$content.append(this.$noneAvailable),this.$downloadOptions=$('<ol class="options"></ol>'),this.$content.append(this.$downloadOptions),this.$footer=$('<div class="footer"></div>'),this.$content.append(this.$footer),this.$termsOfUseButton=$('<a href="#">'+this.extension.data.config.content.termsOfUse+"</a>"),this.$footer.append(this.$termsOfUseButton),this.$termsOfUseButton.onPressed((function(){n.component.publish(o.a.SHOW_TERMS_OF_USE)})),this.$element.hide(),this.updateTermsOfUseButton()},e.prototype.addEntireFileDownloadOptions=function(){if(this.isDownloadOptionAvailable(r.a.ENTIRE_FILE_AS_ORIGINAL)){this.$downloadOptions.empty();for(var t=this.extension.helper.getCurrentCanvas(),e=!1,n=t.getRenderings(),i=0;i<n.length;i++){var o=n[i],s=o.getFormat(),a="";s&&(a=s.toString()),this.addEntireFileDownloadOption(o.id,h.LanguageMap.getValue(o.getLabel()),a),e=!0}if(!e){var l=!1,c=t.getContent();for(i=0;i<c.length;i++){var u=c[i].getBody();if(u.length)(a=u[0].getFormat())&&(this.addEntireFileDownloadOption(u[0].id,"",a.toString()),l=!0)}l||this.addEntireFileDownloadOption(t.id,"","")}}},e.prototype.addEntireFileDownloadOption=function(t,e,n){var i;i=n?a.f.simplifyMimeType(n):this.getFileExtension(t),e||(e=this.content.entireFileAsOriginal),i&&(e+=" ("+i+")"),this.$downloadOptions.append('<li><a href="'+t+'" target="_blank" download tabindex="0">'+e+"</li>")},e.prototype.resetDynamicDownloadOptions=function(){this.renderingUrls=[],this.renderingUrlsCount=0,this.$downloadOptions.find("li.dynamic").remove()},e.prototype.getDownloadOptionsForRenderings=function(t,e,n){for(var i=t.getRenderings(),o=[],s=0;s<i.length;s++){var r=i[s];if(r){var l=h.LanguageMap.getValue(r.getLabel(),this.extension.getLocale()),c="downloadOption"+ ++this.renderingUrlsCount;l?l+=" ({0})":l=e;var u=a.f.simplifyMimeType(r.getFormat().toString());l=a.n.format(l,u),this.renderingUrls[c]=r.id;var p=$('<li class="option dynamic"><input id="'+c+'" data-mime="'+u+'" title="'+l+'" type="radio" name="downloadOptions" tabindex="0" /><label for="'+c+'">'+l+"</label></li>");o.push({type:n,button:p})}}return o},e.prototype.getSelectedOption=function(){return this.$downloadOptions.find("li.option input:checked")},e.prototype.getCurrentResourceId=function(){return this.extension.helper.getCurrentCanvas().externalResource.data.id},e.prototype.getCurrentResourceFormat=function(){var t=this.getCurrentResourceId();return t.substr(t.lastIndexOf(".")+1).toLowerCase()},e.prototype.updateNoneAvailable=function(){this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show()},e.prototype.updateTermsOfUseButton=function(){var t=this.extension.helper.getRequiredStatement();a.b.getBool(this.extension.data.config.options.termsOfUseEnabled,!1)&&t&&t.value?this.$termsOfUseButton.show():this.$termsOfUseButton.hide()},e.prototype.getFileExtension=function(t){var e=t.split(".").pop();return e.length>5||-1!==e.indexOf("/")?null:e},e.prototype.isMediaDownloadEnabled=function(){return this.extension.helper.isUIEnabled("mediaDownload")},e.prototype.isDownloadOptionAvailable=function(t){switch(t){case r.a.ENTIRE_FILE_AS_ORIGINAL:return this.isMediaDownloadEnabled()}return!0},e.prototype.close=function(){t.prototype.close.call(this)},e.prototype.resize=function(){this.setDockedPosition()},e}(s.a)},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i,o=n(4),s=n(20),r=n(0),a=n(32),h=n(3),l=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e,!0,!0)||this;return n.isCreated=!1,n.isOpen=!1,n}return l(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),this.component.subscribe(o.a.CANVAS_INDEX_CHANGE,(function(t){e.selectIndex(parseInt(t))})),this.component.subscribe(o.a.LOGIN,(function(){e.loadThumbs()})),this.component.subscribe(o.a.CLICKTHROUGH,(function(){e.loadThumbs()})),this.$thumbs=$('<div class="thumbs"></div>'),this.$element.append(this.$thumbs);var n=this.extension.helper.getViewingDirection()||r.f.LEFT_TO_RIGHT;this.$thumbs.addClass(n);var i=this;$.templates({thumbsTemplate:'<a id="thumb{{>index}}" class="{{:~className()}}" data-src="{{>uri}}" data-visible="{{>visible}}" data-index="{{>index}}" tabindex="0">                                <div class="wrap" style="height:{{>height + ~extraHeight()}}px"></div>                                <div class="info">                                    <span class="index">{{:#index + 1}}</span>                                    <span class="label" title="{{>label}}">{{>label}}&nbsp;</span>                                    <span class="searchResults" title="{{:~searchResultsTitle()}}">{{>data.searchResults}}</span>                                </div>                             </a>                             {{if ~separator()}}                                  <div class="separator"></div>                              {{/if}}'});var s=this.options.thumbsExtraHeight;$.views.helpers({separator:function(){return!1},extraHeight:function(){return s},className:function(){var t="thumb";0===this.data.index&&(t+=" first"),this.data.uri||(t+=" placeholder");var e=i.extension.helper.getViewingDirection();return!e||e!==r.f.LEFT_TO_RIGHT&&e!==r.f.RIGHT_TO_LEFT?i.extension.helper.isPaged()?t+=" twoCol":t+=" oneCol":t+=" twoCol",t},searchResultsTitle:function(){var t=Number(this.data.data.searchResults);return t?t>1?h.n.format(i.content.searchResults,t.toString()):h.n.format(i.content.searchResult,t.toString()):""}}),this.$element.on("scroll",(function(){e.scrollStop()}),100),this.resize()},e.prototype.databind=function(){this.thumbs&&(this._$thumbsCache=null,this.createThumbs(),this.loadThumbs(0),this.selectIndex(this.extension.helper.canvasIndex))},e.prototype.createThumbs=function(){var t=this;if(this.thumbs){for(var e=[],n=0;n<this.thumbs.length;n++){var i=this.thumbs[n];e.push(i.height)}var s=h.h.median(e);for(n=0;n<this.thumbs.length;n++){(i=this.thumbs[n]).height=s}this.$thumbs.link($.templates.thumbsTemplate,this.thumbs),this.$thumbs.undelegate(".thumb","click"),this.$thumbs.delegate(".thumb","click",(function(e){e.preventDefault();var n=$.view(this).data;return t.lastThumbClickedIndex=n.index,t.component.publish(o.a.THUMB_SELECTED,n),!1})),this.$thumbs.delegate(".thumb","keydown",(function(e){var n=e.originalEvent,i=h.g.getCharCode(n);if(i===a.a.Spacebar||i===a.a.Enter){e.preventDefault();var s=$.view(this).data;t.lastThumbClickedIndex=s.index,t.component.publish(o.a.THUMB_SELECTED,s)}})),this.setLabel(),this.isCreated=!0}},e.prototype.scrollStop=function(){var t=1/((this.$thumbs.height()-this.$element.height())/this.$element.scrollTop());t>1&&(t=1);var e=Math.floor((this.thumbs.length-1)*t);this.loadThumbs(e)},e.prototype.loadThumbs=function(t){if(void 0===t&&(t=this.extension.helper.canvasIndex),this.thumbs&&this.thumbs.length){var e,n=this.extension.helper.getCanvasByIndex(t).getContent();if(n.length){var i=n[0].getBody();if(i.length){var o=i[0].getType();o&&(e=o.toString().toLowerCase())}}for(var s=t,r=this.options.thumbsLoadRange,a={start:s>r?s-r:0,end:s<this.thumbs.length-1-r?s+r:this.thumbs.length-1},l=this.options.thumbsImageFadeInDuration,c=a.start;c<=a.end;c++){var u=this.getThumbByIndex(c),p=u.find(".wrap");if(!p.hasClass("loading")&&!p.hasClass("loaded"))if("false"!==u.attr("data-visible")){p.removeClass("loadingFailed"),p.addClass("loading"),e&&p.addClass(e);var d=u.attr("data-src");this.config.options.thumbsCacheInvalidation&&this.config.options.thumbsCacheInvalidation.enabled&&(d+=this.config.options.thumbsCacheInvalidation.paramType+"t="+h.c.getTimeStamp());var f=$('<img src="'+d+'" alt=""/>');f.hide(),f.on("load",(function(){$(this).fadeIn(l,(function(){$(this).parent().switchClass("loading","loaded")}))})),f.on("error",(function(){$(this).parent().switchClass("loading","loadingFailed")})),p.append(f)}else p.addClass("hidden")}}},e.prototype.show=function(){var t=this;this.isOpen=!0,this.$element.show(),setTimeout((function(){t.selectIndex(t.extension.helper.canvasIndex)}),1)},e.prototype.hide=function(){this.isOpen=!1,this.$element.hide()},e.prototype.isPDF=function(){var t=this.extension.helper.getCurrentCanvas().getType();return!!t&&t.toString().includes("pdf")},e.prototype.setLabel=function(){$(this.$thumbs).find("span.index").hide(),$(this.$thumbs).find("span.label").show()},e.prototype.addSelectedClassToThumbs=function(t){this.getThumbByIndex(t).addClass("selected")},e.prototype.selectIndex=function(t){-1!==t&&(this.thumbs&&this.thumbs.length&&(this.getAllThumbs().removeClass("selected"),this.$selectedThumb=this.getThumbByIndex(t),this.addSelectedClassToThumbs(t),~this.extension.getPagedIndices(t).indexOf(this.lastThumbClickedIndex)||this.$element.scrollTop(this.$selectedThumb.position().top),this.loadThumbs(t)))},e.prototype.getAllThumbs=function(){return this._$thumbsCache||(this._$thumbsCache=this.$thumbs.find(".thumb")),this._$thumbsCache},e.prototype.getThumbByIndex=function(t){return this.$thumbs.find('[data-index="'+t+'"]')},e.prototype.scrollToThumb=function(t){var e=this.getThumbByIndex(t);this.$element.scrollTop(e.position().top)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(s.a)},300:function(t,e,n){"use strict";n.r(e);var i,o=n(4),s=n(44),r=n(37),a=n(26),h=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(e){return t.call(this,e)||this}return h(e,t),e.prototype.create=function(){this.setConfig("downloadDialogue"),t.prototype.create.call(this)},e.prototype.open=function(e){t.prototype.open.call(this,e),this.addEntireFileDownloadOptions(),this.updateNoneAvailable();for(var n=0,i=this.extension.helper.getCurrentCanvas().getContent();n<i.length;n++)for(var o=0,s=i[n].getBody();o<s.length;o++){var r=s[o],a=r.getFormat();!a||"text/plain"!==a.toString()&&"text/vtt"!==a.toString()||this.addEntireFileDownloadOption(r.id,r.getDefaultLabel()||"Download as text "+(r.__jsonld.language?"("+r.__jsonld.language+")":""),a.toString())}this.resize()},e.prototype.isDownloadOptionAvailable=function(e){return t.prototype.isDownloadOptionAvailable.call(this,e)},e}(a.a),c=function(){function t(){}return t.namespace="mediaelementExtension.",t.MEDIA_ENDED=t.namespace+"mediaEnded",t.MEDIA_PAUSED=t.namespace+"mediaPaused",t.MEDIA_PLAYED=t.namespace+"mediaPlayed",t.MEDIA_TIME_UPDATE=t.namespace+"mediaTimeUpdate",t}(),u=n(27),p=n(45),d=n(50),f=n(33),g=n(22),m=n(3),b=(n(108),n(109),n(110),function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),y=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{h(i.next(t))}catch(t){s(t)}}function a(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}h((i=i.apply(t,e||[])).next())}))},v=function(t,e){var n,i,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=r.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},_=function(t){function e(e){return t.call(this,e)||this}return b(e,t),e.prototype.create=function(){this.setConfig("mediaelementCenterPanel"),t.prototype.create.call(this);var e=this;this.component.subscribe(o.a.SET_TARGET,(function(t){e.player.setCurrentTime(t.t),e.player.play()})),this.isVideo()&&this.component.subscribe(o.a.TOGGLE_FULLSCREEN,(function(){e.component.isFullScreen?e.player.enterFullScreen(!1):e.player.exitFullScreen(!1)})),this.component.subscribe(o.a.OPEN_EXTERNAL_RESOURCE,(function(t){e.openMedia(t)})),this.$container=$('<div class="container"></div>'),this.$content.append(this.$container),this.title=this.extension.helper.getLabel()},e.prototype.openMedia=function(t){return y(this,void 0,void 0,(function(){var e,n,i,s,r,a,h,l,u,p,d,f,g;return v(this,(function(m){switch(m.label){case 0:return e=this,[4,this.extension.getExternalResources(t)];case 1:if(m.sent(),this.$container.empty(),n=this.extension.helper.getCurrentCanvas(),this.mediaHeight=this.config.defaultHeight,this.mediaWidth=this.config.defaultWidth,this.$container.height(this.mediaHeight),this.$container.width(this.mediaWidth),i=this.extension.getPosterImageUri(),s=[],r=[],(a=n.getRenderings())&&a.length?n.getRenderings().forEach((function(t){s.push({type:t.getFormat().toString(),src:t.id})})):(h=this.extension.getMediaFormats(this.extension.helper.getCurrentCanvas()))&&h.length&&h.forEach((function(t){var e=t.getFormat();e&&"text/vtt"===e.toString()?r.push(t.__jsonld):e&&s.push({label:t.__jsonld.label?t.__jsonld.label:"",type:e.toString(),src:t.id})})),this.isVideo()){for(this.$media=$('<video controls="controls" preload="none" crossorigin=""></video>'),l=0,u=r;l<u.length;l++)p=u[l],this.$media.append($('<track label="'+p.label+'" kind="subtitles" srclang="'+p.language+'" crossorigin="" src="'+p.id+'" '+(0===r.indexOf(p)?"default":"")+">\n"));for(d=0,f=s;d<f.length;d++)g=f[d],this.$media.append($('<source src="'+g.src+'" type="'+g.type+'" title="'+g.label+'">'));this.$container.append(this.$media),this.player=new MediaElementPlayer($("video")[0],{poster:i,toggleCaptionsButtonWhenOnlyOne:!0,features:["playpause","current","progress","tracks","volume","sourcechooser"],success:function(t,n){t.addEventListener("canplay",(function(){e.resize()})),t.addEventListener("play",(function(){e.component.publish(c.MEDIA_PLAYED,Math.floor(t.currentTime))})),t.addEventListener("pause",(function(){Math.floor(t.currentTime)!=Math.floor(t.duration)&&e.component.publish(c.MEDIA_PAUSED,Math.floor(t.currentTime))})),t.addEventListener("ended",(function(){e.component.publish(c.MEDIA_ENDED,Math.floor(t.duration))})),t.addEventListener("timeupdate",(function(){e.component.publish(c.MEDIA_TIME_UPDATE,Math.floor(t.currentTime))}))}})}else this.$media=$('<audio controls="controls" preload="none"></audio>'),this.$container.append(this.$media),this.player=new MediaElementPlayer($("audio")[0],{poster:i,defaultAudioWidth:"auto",features:["playpause","current","progress","tracks","volume","sourcechooser"],defaultAudioHeight:"auto",showPosterWhenPaused:!0,showPosterWhenEnded:!0,success:function(t,n){t.addEventListener("canplay",(function(){e.resize()})),t.addEventListener("play",(function(){e.component.publish(c.MEDIA_PLAYED,Math.floor(t.currentTime))})),t.addEventListener("pause",(function(){Math.floor(t.currentTime)!=Math.floor(t.duration)&&e.component.publish(c.MEDIA_PAUSED,Math.floor(t.currentTime))})),t.addEventListener("ended",(function(){e.component.publish(c.MEDIA_ENDED,Math.floor(t.duration))}));for(var i=0,o=s;i<o.length;i++){var r=o[i];t.append($('<source src="'+r.src+'" type="'+r.type+'" title="'+r.label+'">'))}}});return this._$mejsContainer=this.$container.find(".mejs__container"),this._$mejsLayers=this.$container.find(".mejs__layer"),this.component.publish(o.a.EXTERNAL_RESOURCE_OPENED),this.component.publish(o.a.LOAD),[2]}}))}))},e.prototype.isVideo=function(){return this.extension.isVideo()},e.prototype.resize=function(){t.prototype.resize.call(this);var e=this;if("Firefox"===window.browserDetect.browser&&window.browserDetect.version<13)this.$container.width(this.mediaWidth),this.$container.height(this.mediaHeight);else{var n=m.d.fitRect(this.mediaWidth,this.mediaHeight,this.$content.width(),this.$content.height());this.$container.height(n.height),this.$container.width(n.width),this.player&&!this.extension.isFullScreen()&&(this.$media.width(n.width),this.$media.height(n.height))}var i=Math.floor((this.$content.width()-this.$container.width())/2),o=Math.floor((this.$content.height()-this.$container.height())/2);this.$container.css({left:i,top:o}),this.title&&this.$title.text(Object(g.b)(this.title)),this.player&&(!this.isVideo()||this.isVideo()&&!this.component.isFullScreen)&&(this.player.setPlayerSize(),this.player.setControlsSize(),this._$mejsContainer.height(this.$container.height()),this._$mejsContainer.width(this.$container.width()),this._$mejsLayers.each((function(){$(this).height(e.$container.height()),$(this).width(e.$container.width())})))},e}(f.a),E=n(46),w=n(55),O=n(34),T=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),C=function(t){function e(e){return t.call(this,e)||this}return T(e,t),e.prototype.create=function(){this.setConfig("settingsDialogue"),t.prototype.create.call(this)},e}(O.a),D=n(35),A=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),I=function(t){function e(e){return t.call(this,e)||this}return A(e,t),e.prototype.create=function(){this.setConfig("shareDialogue"),t.prototype.create.call(this)},e.prototype.update=function(){t.prototype.update.call(this),this.code=this.extension.getEmbedScript(this.options.embedTemplate,this.currentWidth,this.currentHeight),this.$code.val(this.code)},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(D.a),L=n(0),x=n(1),P=function(){function t(t){this.t=t}return t.prototype.toString=function(){return""+this.t},t.fromString=function(e){return e=e.replace("t=",""),new t(Number(e))},t}(),S=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),F=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return S(e,t),e.prototype.create=function(){var e=this;t.prototype.create.call(this),$(window).bind("enterfullscreen",(function(){e.component.publish(o.a.TOGGLE_FULLSCREEN)})),$(window).bind("exitfullscreen",(function(){e.component.publish(o.a.TOGGLE_FULLSCREEN)})),this.component.subscribe(o.a.CANVAS_INDEX_CHANGE,(function(t){e.viewCanvas(t)})),this.component.subscribe(o.a.THUMB_SELECTED,(function(t){e.component.publish(o.a.CANVAS_INDEX_CHANGE,t.index)})),this.component.subscribe(o.a.LEFTPANEL_EXPAND_FULL_START,(function(){e.shell.$centerPanel.hide(),e.shell.$rightPanel.hide()})),this.component.subscribe(o.a.LEFTPANEL_COLLAPSE_FULL_FINISH,(function(){e.shell.$centerPanel.show(),e.shell.$rightPanel.show(),e.resize()})),this.component.subscribe(c.MEDIA_ENDED,(function(){e.fire(c.MEDIA_ENDED)})),this.component.subscribe(c.MEDIA_PAUSED,(function(){e.fire(c.MEDIA_PAUSED)})),this.component.subscribe(c.MEDIA_PLAYED,(function(){e.fire(c.MEDIA_PLAYED)})),this.component.subscribe(c.MEDIA_TIME_UPDATE,(function(t){var n=e.helper.getCurrentCanvas();n&&(e.data.target=n.id+"#t="+t,e.fire(o.a.TARGET_CHANGE,e.data.target))}))},e.prototype.createModules=function(){t.prototype.createModules.call(this),this.isHeaderPanelEnabled()?this.headerPanel=new p.a(this.shell.$headerPanel):this.shell.$headerPanel.hide(),this.isLeftPanelEnabled()&&(this.leftPanel=new w.a(this.shell.$leftPanel)),this.centerPanel=new _(this.shell.$centerPanel),this.isRightPanelEnabled()&&(this.rightPanel=new E.a(this.shell.$rightPanel)),this.isFooterPanelEnabled()?this.footerPanel=new u.a(this.shell.$footerPanel):this.shell.$footerPanel.hide(),this.$helpDialogue=$('<div class="overlay help" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$helpDialogue),this.helpDialogue=new d.a(this.$helpDialogue),this.$downloadDialogue=$('<div class="overlay download" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$downloadDialogue),this.downloadDialogue=new l(this.$downloadDialogue),this.$shareDialogue=$('<div class="overlay share" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$shareDialogue),this.shareDialogue=new I(this.$shareDialogue),this.$settingsDialogue=$('<div class="overlay settings" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$settingsDialogue),this.settingsDialogue=new C(this.$settingsDialogue),this.isLeftPanelEnabled()&&this.leftPanel.init(),this.isRightPanelEnabled()&&this.rightPanel.init()},e.prototype.render=function(){t.prototype.render.call(this),this.checkForTarget()},e.prototype.checkForTarget=function(){if(this.data.target){var t=this.data.target.split("#"),e=t[0],n=this.helper.getCanvasIndexById(e);null!==n&&this.helper.canvasIndex!==n&&this.component.publish(o.a.CANVAS_INDEX_CHANGE,n);var i=t[1];this.component.publish(o.a.SET_TARGET,P.fromString(i))}},e.prototype.isLeftPanelEnabled=function(){return m.b.getBool(this.data.config.options.leftPanelEnabled,!0)&&(this.helper.isMultiCanvas()||this.helper.isMultiSequence()||this.helper.hasResources())},e.prototype.bookmark=function(){t.prototype.bookmark.call(this);var e=this.extensions.helper.getCurrentCanvas(),n=new r.a;n.index=this.helper.canvasIndex,n.label=x.LanguageMap.getValue(e.getLabel()),n.thumb=e.getProperty("thumbnail"),n.title=this.helper.getLabel(),n.trackingLabel=window.trackingLabel,this.isVideo()?n.type=L.a.MOVING_IMAGE:n.type=L.a.SOUND,this.fire(o.a.BOOKMARK,n)},e.prototype.getEmbedScript=function(t,e,n){var i=this.getAppUri()+"#?manifest="+this.helper.manifestUri+"&c="+this.helper.collectionIndex+"&m="+this.helper.manifestIndex+"&cv="+this.helper.canvasIndex;return m.n.format(t,i,e.toString(),n.toString())},e.prototype.getPosterImageUri=function(){var t=this.helper.getCurrentCanvas(),e=t.getContent();return e&&e.length?e[0].getProperty("thumbnail"):t.getProperty("thumbnail")},e.prototype.isVideoFormat=function(t){return-1!=[L.c.VIDEO_MP4,L.c.WEBM].indexOf(t)},e.prototype.isVideo=function(){var t=this.helper.getCurrentCanvas(),e=t.getContent();if(e&&e.length)for(var n=this.getMediaFormats(t),i=0;i<n.length;i++){var o;if((o=n[i].getFormat())&&this.isVideoFormat(o.toString()))return!0}else if(o=t.getType())return o.toString()===L.a.MOVING_IMAGE;throw new Error("Unable to determine media type")},e}(s.a);e.default=F},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){}},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i,o=n(4),s=n(17),r=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.create=function(){var e=this;this.setConfig("helpDialogue"),t.prototype.create.call(this),this.openCommand=o.a.SHOW_HELP_DIALOGUE,this.closeCommand=o.a.HIDE_HELP_DIALOGUE,this.component.subscribe(this.openCommand,(function(){e.open()})),this.component.subscribe(this.closeCommand,(function(){e.close()})),this.$title=$('<div role="heading" class="heading"></div>'),this.$content.append(this.$title),this.$scroll=$('<div class="scroll"></div>'),this.$content.append(this.$scroll),this.$message=$("<p></p>"),this.$scroll.append(this.$message),this.$title.text(this.content.title),this.$message.html(this.content.text),this.$message.targetBlank(),this.$element.hide()},e.prototype.resize=function(){t.prototype.resize.call(this)},e}(s.a)},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,o=n(4),s=n(36),r=n(28),a=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this)},e}(r.a),l=n(0),c=n(3),u=n(1),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),d=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.create=function(){this.setConfig("resourcesLeftPanel"),t.prototype.create.call(this),this.setTitle(this.content.title),this.$tabsContent=$('<div class="tabsContent"></div>'),this.$main.append(this.$tabsContent),this.$views=$('<div class="views"></div>'),this.$tabsContent.append(this.$views),this.$thumbsView=$('<div class="thumbsView"></div>'),this.$views.append(this.$thumbsView),this.$resourcesView=$('<div class="resourcesView"></div>'),this.$resources=$("<ul></ul>"),this.$resourcesView.append(this.$resources),this.$views.append(this.$resourcesView),this.thumbsView=new h(this.$thumbsView),this.dataBind()},e.prototype.dataBind=function(){this.dataBindThumbsView();var t=this.extension.helper.getCurrentCanvas().getResources();0===t.length&&this.$resourcesView.hide();for(var e=0;e<t.length;e++){var n=t[e].getResource();if(n){var i=u.LanguageMap.getValue(n.getLabel());if(i){var o=c.f.simplifyMimeType(n.getFormat().toString()),s=$('<li><a href="'+n.id+'" target="_blank">'+i+" ("+o+")</li>");this.$resources.append(s)}}}},e.prototype.dataBindThumbsView=function(){if(this.thumbsView){var t,e,n=this.extension.helper.getViewingDirection();!n||n!==l.f.LEFT_TO_RIGHT&&n!==l.f.RIGHT_TO_LEFT?(t=this.config.options.oneColThumbWidth,e=this.config.options.oneColThumbHeight):(t=this.config.options.twoColThumbWidth,e=this.config.options.twoColThumbHeight),void 0===t&&(t=100),void 0===e&&(e=100),this.thumbsView.thumbs=this.extension.helper.getThumbs(t,e),this.thumbsView.thumbs.length<2&&this.$thumbsView.hide(),this.thumbsView.databind()}},e.prototype.expandFullStart=function(){t.prototype.expandFullStart.call(this),this.component.publish(o.a.LEFTPANEL_EXPAND_FULL_START)},e.prototype.expandFullFinish=function(){t.prototype.expandFullFinish.call(this),this.component.publish(o.a.LEFTPANEL_EXPAND_FULL_FINISH)},e.prototype.collapseFullStart=function(){t.prototype.collapseFullStart.call(this),this.component.publish(o.a.LEFTPANEL_COLLAPSE_FULL_START)},e.prototype.collapseFullFinish=function(){t.prototype.collapseFullFinish.call(this),this.component.publish(o.a.LEFTPANEL_COLLAPSE_FULL_FINISH)},e.prototype.resize=function(){t.prototype.resize.call(this),this.$views.height(this.$main.height()),this.$resources.height(this.$main.height())},e}(s.a)}}]);