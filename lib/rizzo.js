var helpers = require("./helpers/loader");

function Rizzo () {

}
  
Rizzo.prototype.helpers = function() {
  return helpers;
};

Rizzo.prototype.templatesDirectory = function() {
  return "node_modules/rizzo-assets/templates/components";
};


module.exports = Rizzo;