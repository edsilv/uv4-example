(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[142],{212:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return o}));var s=t(9),n=function(e,r,t,s){return new(t||(t=Promise))((function(n,i){function o(e){try{h(s.next(e))}catch(e){i(e)}}function l(e){try{h(s.throw(e))}catch(e){i(e)}}function h(e){e.done?n(e.value):new t((function(r){r(e.value)})).then(o,l)}h((s=s.apply(e,r||[])).next())}))},i=function(e,r){var t,s,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,s&&(n=2&i[0]?s.return:i[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,i[1])).done)return n;switch(s=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,s=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],s=0}finally{t=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},o=function(){function e(e){Object(s.o)(this,e),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(s.d)(this,"ionRefresh",7),this.ionPull=Object(s.d)(this,"ionPull",7),this.ionStart=Object(s.d)(this,"ionStart",7)}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.connectedCallback=function(){return n(this,void 0,void 0,(function(){var e,r,s,n=this;return i(this,(function(i){switch(i.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?(r=this,[4,e.getScrollElement()]):(console.error("<ion-refresher> must be used inside an <ion-content>"),[2]);case 1:return r.scrollEl=i.sent(),s=this,[4,t.e(1).then(t.bind(null,16))];case 2:return s.gesture=i.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return n.canStart()},onStart:function(){return n.onStart()},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged(),[2]}}))}))},e.prototype.disconnectedCallback=function(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*t;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(s,"0ms",!0,""),0!==s){var n=this.pullMin;this.progress=s/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<n?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var i=this;this.appliedStyles=e>0,Object(s.p)((function(){if(i.scrollEl){var s=i.scrollEl.style;s.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",s.transitionDuration=r,s.transitionDelay=n,s.overflow=t?"hidden":""}}))},e.prototype.render=function(){var e,r=Object(s.g)(this);return Object(s.i)(s.a,{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(s.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),e}()}}]);