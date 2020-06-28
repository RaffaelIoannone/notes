(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addNote'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form method=\"dialog\" id=\"form-add-note\">\n  <label class=\"form-label\" for=\"title\">Title</label>\n  <input class=\"form-input\" type=\"text\" name=\"title\" id=\"title\" placeholder=\"Enter your title\">\n\n  <label class=\"form-label\" for=\"description\">Description</label>\n  <textarea lass=\"form-input\" name=\"description\" id=\"description\" placeholder=\"Enter your description\"></textarea>\n\n  <label class=\"form-label\" for=\"importance\">Importance</label>\n  <div class=\"form-input\">\n    <input type=\"radio\" name=\"importance\" value=\"1\" id='importance'>\n    <input type=\"radio\" name=\"importance\" value=\"2\">\n    <input type=\"radio\" name=\"importance\" value=\"3\">\n    <input type=\"radio\" name=\"importance\" value=\"4\">\n    <input type=\"radio\" name=\"importance\" value=\"5\">\n  </div>\n\n  <label class=\"form-label\" for=\"duedate\">Done until</label>\n  <input lass=\"form-input\" type=\"date\" name=\"duedate\" id=\"duedate\">\n\n  <button class=\"form-submit\" type=\"submit\">Save</button>\n  <button class=\" form-cancel\" type=\"button\">Cancel</button>\n</form>";
},"useData":true});
templates['auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <form action=\"./\" method=\"POST\" id=\"form-login\">\n    <label class=\"form-label\" for=\"email\">E-Mail</label>\n    <input class=\"form-input\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"name@email.com\">\n    <label class=\"form-label\" for=\"password\">Password</label>\n    <input class=\"form-input\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"your password\">\n    <button class=\"form-submit\" type=\"submit\">Login</button>\n  </form>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"authorized") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['noteList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"note\">\n    <div class=\"note-finished\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isFinished") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"note-edit\">\n      <button class=\"icon-button\" type=\"button\">\n        <i class=\"material-icons\">edit</i>\n      </button>\n      <button class=\"icon-button\" type=\"button\">\n        <i class=\"material-icons\">delete</i>\n      </button>\n    </div>\n\n    <div class=\"note-header\">\n      <h4>\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":23,"column":17}}}) : helper)))
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"times")||(depth0 && lookupProperty(depth0,"times"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"importance") : depth0),{"name":"times","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":26,"column":18}}})) != null ? stack1 : "")
    + "      </h4>\n    </div>\n\n\n    <div class=\"note-description\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":21}}}) : helper)))
    + "\n    </div>\n\n    <div class=\"note-duedate\">\n      <p><i>due until: "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"dueDate") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":36,"column":23},"end":{"line":36,"column":45}}}))
    + "</i></p>\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"checkbox-finished material-icons\">check_box</i>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"checkbox-finished material-icons\">check_box_outline_blank</i>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <i class=\"material-icons\">star</i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"noteList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"notes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":39,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['settings'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"material-icons\">toggle_on</i>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <i class=\"material-icons\">toggle_off</i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n  <h1>Settings</h1>\n\n  <div>\n    Dark mode:\n    <button class=\"icon-button\" type=\"button\" id=\"theme-button\" data-action=changeTheme>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"darkThemeOn") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "    </button>\n  </div>\n\n  <div>\n    Show finished items:\n    <button class=\"icon-button\" type=\"button\" id=\"show-finished-notes-button\" data-action=toggleFinishedNotes>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showFinishedNotesOn") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n  <div>\n    Sort list by:\n    <select id=\"sort-select\">\n      <option selected value=\"creationDate\">Creation Date</option>\n      <option value=\"dueDate\">Due Date</option>\n      <option value=\"importance\">Importance</option>\n    </select>\n  </div>\n\n  <div>\n    Logout:\n    <button class=\"icon-button\" type=\"button\" id=\"logout-button\" data-action=logout>\n      <i class=\"material-icons\">logout</i>\n    </button>\n  </div>\n\n</div>";
},"useData":true});
})();