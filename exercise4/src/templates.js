this["templates"] = this["templates"] || {};

this["templates"]["reverse"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<input type=\"text\" class=\"indata\" />\r\n<br />\r\n<strong>Answer:</strong><br />\r\n<span class=\"result\"></span>";
  });