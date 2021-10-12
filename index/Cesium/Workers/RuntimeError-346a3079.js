define(["exports","./when-4bbc8319"],function(t,n){"use strict";function o(t){var e;this.name="DeveloperError",this.message=t;try{throw new Error}catch(t){e=t.stack}this.stack=e}n.defined(Object.create)&&((o.prototype=Object.create(Error.prototype)).constructor=o),o.prototype.toString=function(){var t=this.name+": "+this.message;return n.defined(this.stack)&&(t+="\n"+this.stack.toString()),t},o.throwInstantiationError=function(){throw new o("This function defines an interface and should not be called directly.")};var a={};function r(t,e,n){return"Expected "+n+" to be typeof "+e+", actual typeof was "+t}function e(t){var e;this.name="RuntimeError",this.message=t;try{throw new Error}catch(t){e=t.stack}this.stack=e}a.typeOf={},a.defined=function(t,e){if(!n.defined(e))throw new o(t+" is required, actual value was undefined")},a.typeOf.func=function(t,e){if("function"!=typeof e)throw new o(r(typeof e,"function",t))},a.typeOf.string=function(t,e){if("string"!=typeof e)throw new o(r(typeof e,"string",t))},a.typeOf.number=function(t,e){if("number"!=typeof e)throw new o(r(typeof e,"number",t))},a.typeOf.number.lessThan=function(t,e,n){if(a.typeOf.number(t,e),n<=e)throw new o("Expected "+t+" to be less than "+n+", actual value was "+e)},a.typeOf.number.lessThanOrEquals=function(t,e,n){if(a.typeOf.number(t,e),n<e)throw new o("Expected "+t+" to be less than or equal to "+n+", actual value was "+e)},a.typeOf.number.greaterThan=function(t,e,n){if(a.typeOf.number(t,e),e<=n)throw new o("Expected "+t+" to be greater than "+n+", actual value was "+e)},a.typeOf.number.greaterThanOrEquals=function(t,e,n){if(a.typeOf.number(t,e),e<n)throw new o("Expected "+t+" to be greater than or equal to "+n+", actual value was "+e)},a.typeOf.object=function(t,e){if("object"!=typeof e)throw new o(r(typeof e,"object",t))},a.typeOf.bool=function(t,e){if("boolean"!=typeof e)throw new o(r(typeof e,"boolean",t))},a.typeOf.bigint=function(t,e){if("bigint"!=typeof e)throw new o(r(typeof e,"bigint",t))},a.typeOf.number.equals=function(t,e,n,r){if(a.typeOf.number(t,n),a.typeOf.number(e,r),n!==r)throw new o(t+" must be equal to "+e+", the actual values are "+n+" and "+r)},n.defined(Object.create)&&((e.prototype=Object.create(Error.prototype)).constructor=e),e.prototype.toString=function(){var t=this.name+": "+this.message;return n.defined(this.stack)&&(t+="\n"+this.stack.toString()),t},t.Check=a,t.DeveloperError=o,t.RuntimeError=e});