webpackJsonp([1,4],{343:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=343},344:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(431),r=n(0),i=n(454),c=n(452);i.a.production&&n.i(r.a)(),n.i(o.a)().bootstrapModule(c.a)},451:function(t,e,n){"use strict";var o=n(0),r=n(453);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){var e=this;this.appService=t,this.title="app works!",this.color={},this.appService.getUser().subscribe(function(t){return e.color=t}),console.log("LLLLLLLLLL",this.color)}return t=i([n.i(o.U)({selector:"app-root",template:n(607),styles:[n(606)],providers:[r.a]}),c("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},452:function(t,e,n){"use strict";var o=n(191),r=n(0),i=n(422),c=n(284),a=n(451);n.d(e,"a",function(){return s});var f=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=f([n.i(r.b)({declarations:[a.a],imports:[o.a,i.a,c.a],providers:[],bootstrap:[a.a]}),u("design:paramtypes",[])],t)}()},453:function(t,e,n){"use strict";var o=n(0),r=n(284),i=n(609);n.n(i);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.http=t}return t.prototype.getUser=function(){return this.http.get("./assets/colorData.json").map(function(t){return t.json()})},t=c([n.i(o.d)(),a("design:paramtypes",["function"==typeof(e=void 0!==r.b&&r.b)&&e||Object])],t);var e}()},454:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},606:function(t,e){t.exports=""},607:function(t,e){t.exports="\n  <div>\n    \x3c!-- <button (click)=\"loadUser()\">Load</button> --\x3e\n    <div *ngFor=\"let item of color.data; let i = index\" [attr.data-index]=\"i\">\n        <div  [ngStyle]=\"{'background-color':item.color, 'color': '#ffffff', 'text-align':'center', 'height':'auto'}\">\n          <h2>{{ item.text }}</h2>\n        </div>\n        <hr>\n  </div>\n  </div>\n"},621:function(t,e,n){t.exports=n(344)}},[621]);