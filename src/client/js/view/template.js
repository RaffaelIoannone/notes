(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addNote'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"./\" method=\"POST\" id=\"form-add-note\"> \n  <label class=\"form-label\" for=\"title\">Title</label>\n  <input class=\"form-input\" type=\"text\" name=\"title\" id=\"title\" placeholder=\"Enter your title\">\n\n  <label class=\"form-label\" for=\"description\">Description</label>\n  <textarea lass=\"form-input\" name=\"description\" id=\"description\" placeholder=\"Enter your description\"></textarea>\n\n  <label class=\"form-label\" for=\"importance\">Importance</label>\n  <div class=\"form-input\">\n      <input type=\"radio\" name=\"importance\" value=\"1\" id=\"importance\">\n      <input type=\"radio\" name=\"importance\" value=\"2\">\n      <input type=\"radio\" name=\"importance\" value=\"3\">\n      <input type=\"radio\" name=\"importance\" value=\"4\">\n      <input type=\"radio\" name=\"importance\" value=\"5\">\n  </div>\n\n  <label class=\"form-label\" for=\"duedate\">Done until</label>\n  <input lass=\"form-input\" type=\"date\" name=\"duedate\" id=\"duedate\">\n\n  <button class=\"form-submit\" type=\"submit\">Save</button>\n  <button class=\" form-cancel\" type=\"button\">Cancel</button>\n</form>";
},"useData":true});
templates['noteList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"note\">\n      <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":19}}}) : helper)))
    + "</h1>\n      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":24}}}) : helper)))
    + " <br>\n      dueDate "
    + alias4(((helper = (helper = lookupProperty(helpers,"dueDate") || (depth0 != null ? lookupProperty(depth0,"dueDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dueDate","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":25}}}) : helper)))
    + " <br>\n      finishDate "
    + alias4(((helper = (helper = lookupProperty(helpers,"finishDate") || (depth0 != null ? lookupProperty(depth0,"finishDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finishDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":17},"end":{"line":7,"column":31}}}) : helper)))
    + " <br>\n      creationDate "
    + alias4(((helper = (helper = lookupProperty(helpers,"creationDate") || (depth0 != null ? lookupProperty(depth0,"creationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creationDate","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":35}}}) : helper)))
    + " <br>\n      importance "
    + alias4(((helper = (helper = lookupProperty(helpers,"importance") || (depth0 != null ? lookupProperty(depth0,"importance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"importance","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":31}}}) : helper)))
    + "</p>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"noteList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"notes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();