function(doc, req){
   // !code vendor/couchapp/path.js
   // !code vendor/crayon/lib/escape.js
   // !code vendor/crayon/lib/template.js
   // !code vendor/crayon/lib/error.js

   // !code lib/helper.js

   // !json couchapp
   // !json templates.site
   // !json templates.top

   // !json config
   if( config["local"] ){
      config = Crayon.extend(config["default"], config["local"]);
   }

   var bindings = {
      assetPath : assetPath(),
      site : {
         title: "TStore::Search",
         config : config
      }
   };

   return render(templates.site.header, bindings) +
      render(templates.top.main, bindings) +
      render(templates.site.footer, bindings);
}