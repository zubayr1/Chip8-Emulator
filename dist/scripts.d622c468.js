parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K2eu":[function(require,module,exports) {
"use strict";function s(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function t(s,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function i(s,i,e){return i&&t(s.prototype,i),e&&t(s,e),s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=64,a=32,h=20,l=function(){function t(i,l){s(this,t),this.cols=e,this.rows=a,this.display=new Array(this.cols*this.rows);for(var o=0;o<this.cols*this.rows;o++)this.display[o]=0;this.canvas=i,this.scale=h,console.log(this.canvas),this.canvas.width=this.cols*this.scale,this.canvas.height=this.rows*this.scale,this.canvasCtx=this.canvas.getContext("2d")}return i(t,[{key:"setPixel",value:function(s,t){return s>this.cols?s-=this.cols:s<0&&(s+=this.cols),t>this.rows?t-=this.rows:t<0&&(t+=this.rows),this.display[s+t*this.cols]^=1,1!=this.display[s+t*this.cols]}},{key:"clear",value:function(){this.display=new Array(this.cols*this.rows);for(var s=0;s<this.cols*this.rows;s++)this.display[s]=0}},{key:"paint",value:function(){this.canvasCtx.fillStyle="#000",this.canvasCtx.fillRect(0,0,this.canvas.width,this.canvas.height);for(var s=0;s<this.cols*this.rows;s++){var t=s%this.cols*this.scale,i=Math.floor(s/this.cols)*this.scale;1==this.display[s]&&(this.canvasCtx.fillStyle="#FFF",this.canvasCtx.fillRect(t,i,this.scale,this.scale))}}},{key:"testRender",value:function(){this.setPixel(0,0),this.setPixel(5,2),this.paint()}}]),t}(),o=l;exports.default=o;
},{}],"v54u":[function(require,module,exports) {
"use strict";function s(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function e(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function t(s,t,i){return t&&e(s.prototype,t),i&&e(s,i),s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=4096,r=16,a=function(){function e(t,a){s(this,e),this.mempry=new Uint8Array(i),this.V=new Uint8Array(r),this.index=16,this.pc=512,this.stack=[],this.sp=0,this.delayTimer=0,this.soundTimer=0,this.keyboard=a,this.monitor=t,this.paused=!1,this.speed=10}return t(e,[{key:"interpretInstructions",value:function(s){var e=this;this.pc+=2;var t=(3840&s)>>8,i=(240&s)>>4;switch(61440&s){case 0:switch(s){case 224:this.monitor.clear();break;case 238:this.pc=this.stack.pop()}break;case 4096:this.pc=4095&s;break;case 8192:this.stack.push(this.pc),this.pc=4095&s;break;case 12288:this.v[t]===(255&s)&&(this.pc+=2);break;case 16384:this.v[t]!=(255&s)&&(this.pc+=2);break;case 20480:this.v[t]===this.v[i]&&(this.pc+=2);break;case 24576:this.v[t]=255&s;break;case 28672:this.v[t]+=255&s;break;case 32768:switch(15&s){case 0:this.v[t]=this.v[i];break;case 1:this.v[t]|=this.v[i];break;case 2:this.v[t]&=this.v[i];break;case 3:this.v[t]^=this.v[i];break;case 4:var r=this.v[t]+=this.v[i];this.v[15]=0,r>255&&(this.v[15]=1),this.v[t]=r;break;case 5:this.v[15]=0,this.v[t]>this.v[i]&&(this.v[15]=1),this.v[t]-=this.v[i];break;case 6:this.v[15]=1&this.v[t],this.v[t]>>=1;break;case 7:this.v[15]=0,this.v[i]>this.v[t]&&(this.v[15]=1),this.v[t]=this.v[i]-this.v[t];break;case 14:this.v[15]=128&this.v[t],this.v[t]<<=1;break;default:throw new Error("BAD OPCODE")}break;case 36864:this.v[t]!=this.v[i]&&(this.pc+=2);break;case 40960:this.index=4095&s;break;case 45056:this.pc=(4095&s)+this.v[0];break;case 49152:var a=Math.floor(255*Math.random());this.v[t]=255&a&s;break;case 53248:var h=15&s;this.v[15]=0;for(var c=0;c<h;c++)for(var o=this.memory[this.index+c],v=0;v<8;v++)(128&o)>0&&this.monitor.setPixel(this.v[t]+v,this.v[i]+c)&&(this.v[15]=1),o<<=1;break;case 57344:switch(255&s){case 158:this.keyboard.isKeyPressed(this.v[t])&&(this.pc+=2);break;case 161:this.keyboard.isKeyPressed(this.v[t])||(this.pc+=2);break;default:throw new Error("BAD OPCODE")}break;case 61440:switch(255&s){case 7:this.v[t]=this.delayTimer;break;case 10:this.paused=!0;this.keyboard.onNextKeyPress=function(s){e.v[t]=s,e.paused=!1}.bind(this);break;case 21:this.delayTimer=this.v[t];break;case 24:this.soundTimer=this.v[t];break;case 30:this.index+=this.v[t];break;case 41:this.index=5*this.v[t];break;case 51:this.memory[this.index]=parseInt(this.v[t]/100),this.memory[this.index+1]=parseInt(this.v[t]%100/10),this.memory[this.index+2]=parseInt(this.v[t]%10);break;case 85:for(var n=0;n<=t;n++)this.memory[this.index+n]=this.v[n];break;case 101:for(var k=0;k<=t;k++)this.v[k]=this.memory[this.index+k];break;default:throw new Error("0xF BAD OPCODE "+s)}break;default:throw new Error("BAD OPCODE")}}},{key:"loadSpritsIntoMemory",value:function(){for(var s=[240,144,144,144,240,32,96,32,32,112,240,16,240,128,240,240,16,240,16,240,144,144,240,16,16,240,128,240,16,240,240,128,240,144,240,240,16,32,64,64,240,144,240,144,240,240,144,240,16,240,240,144,240,144,144,224,144,224,144,224,240,128,128,128,240,224,144,144,144,224,240,128,240,128,240,240,128,240,128,128],e=0;e<s.length;e++)this.memory[e]=s[e]}},{key:"loadProgramIntoMemory",value:function(s){for(var e=0;e<s.length;e++)this.memory[512+e]=s[e]}},{key:"updateTimers",value:function(){this.delayTimer>0&&(this.delayTimer-=1),this.soundTimer>0&&(this.soundTimer-=1)}},{key:"cycle",value:function(){for(var s=0;s<this.speed;s++)if(!this.paused){var e=this.memory[this.pc]<<8|this.memory[this.pc+1];this.interpretInstruction(e)}this.paused||this.updateTimers(),this.sound(),this.monitor.paint()}}]),e}(),h=a;exports.default=h;
},{}],"G6Lp":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function t(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function n(){e(this,n),this.keymap={49:1,50:2,51:3,52:12,81:4,87:5,69:6,82:13,65:7,83:8,68:9,70:14,90:10,88:0,67:11,86:15},this.keysPressed=[],this.onNextKeyPress=null,window.addEventListener("keydown",this.onKeyDown.bind(this),!1),window.addEventListener("keyup",this.onKeyUp.bind(this),!1)}return t(n,[{key:"isKeyPressed",value:function(e){return this.keysPressed[e]}},{key:"onKeyDown",value:function(e){var n=this.keymap[e.which];this.keysPressed[n]=!0,null!==this.onNextKeyPress&&n&&(this.onNextKeyPress(parseInt(n)),this.onNextKeyPress=null)}},{key:"onKeyUp",value:function(e){var n=this.keymap[e.which];this.keysPressed[n]=!1}}]),n}(),i=s;exports.default=i;
},{}],"IkwW":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=440,s=function(){function i(){var e=this;t(this,i),this.audioCtx=new window.AudioContext,this.audioCtx.resume(),window.addEventListener("click",function(){e.audioCtx.resume()})}return e(i,[{key:"play",value:function(){this.audioCtx&&!this.oscillator&&(this.oscillator=this.audioCtx.createOscillator(),this.oscillator.frequency.setValueAtTime(o,this.audioCtx.currentTime),this.oscillator.type="square",this.oscillator.connect(this.audioCtx.destination),this.oscillator.start())}},{key:"stop",value:function(){this.oscillator&&(this.oscillator.stop(),this.oscillator.disconnect(),this.oscillator=null)}}]),i}(),n=s;exports.default=n;
},{}],"dMDE":[function(require,module,exports) {

},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=o(require("./renderer")),n=o(require("./Chip8")),t=o(require("./Keyboard")),r=o(require("./Speaker"));function o(e){return e&&e.__esModule?e:{default:e}}require("./style.css");var a,i,l,d,c,u,s=60,m=document.getElementById("roms");m.addEventListener("change",function(){var e=m.options[m.selectedIndex].value;console.log(e),v(e)});var f=document.getElementById("reload");f.addEventListener("click",function(){console.log("click");var e=m.options[m.selectedIndex].value;console.log(e),v(e)});var g=document.getElementById("loading-text");function v(o){var m=new e.default(document.getElementById("screen"),20),v=new t.default,y=new r.default,w=new n.default(m,v,y);function I(){d=Date.now(),(u=d-c)>i&&w.cycle(),a=requestAnimationFrame(I)}window.cancelAnimationFrame(a);var q="/rom/".concat(o);f.disabled=!0,g.innerHTML="Loading "+o+" ... ",fetch(q).then(function(e){return e.arrayBuffer()}).then(function(e){console.log(e.byteLength);var n=new Uint8Array(e);i=1e3/s,c=Date.now(),l=c,f.disabled=!1,w.loadSpritsIntoMemory(),w.loadProgramIntoMemory(n),console.log(n),a=requestAnimationFrame(I),g.innerHTML="Playing "+o+" "})}v("BLITZ");
},{"./renderer":"K2eu","./Chip8":"v54u","./Keyboard":"G6Lp","./Speaker":"IkwW","./style.css":"dMDE"}]},{},["g2Hq"], null)
//# sourceMappingURL=/scripts.d622c468.js.map