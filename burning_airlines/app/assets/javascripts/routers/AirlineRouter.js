var app = app || {}

app.AirlineRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'planes/:id': 'getPlane',
		'*anythingElse': 'pageNotFound'
	},
	index: function () {
		new app.Views.AppView({collection: app.planes});
	},

	getPlane: function (id) {
		var plane = app.planes.get(id);
		if (!plane) {
			app.router.navigate('', {trigger: true});	
		} else {
			var view = new app.Views.PlaneView({model: plane});
			view.render();
		}
	},

 pageNotFound: function () {
    app.router.navigate('', {trigger: true});
  }

});