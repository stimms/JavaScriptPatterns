var BaseStructure = function BaseStructure() {
  "use strict";
  console.log("Structure built");
};
($traceurRuntime.createClass)(BaseStructure, {}, {});
var Castle = function Castle(name) {
  "use strict";
  this.name = name;
  $traceurRuntime.superCall(this, $Castle.prototype, "constructor", []);
};
var $Castle = Castle;
($traceurRuntime.createClass)(Castle, {Build: function() {
    "use strict";
    console.log("Castle built: " + this.name);
  }}, {}, BaseStructure);
