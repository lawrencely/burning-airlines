var app = app || {}

app.AirlineRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'planes': 'showPlanes',
		'planes/:id': 'getPlane',
    'flight/:id': 'getFlight',
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
	  },

//Fabian Start
	showPlanes: function () {
		var plane = app.planes.get(id);
		var view = new app.Views.PlanesView({model: plane});
		view.render();
	},
//Fabian End

//Jacqui Start //

	chooseSeat: function (id) {
		var seat = app.flight.get(id);
    	app.flight = new app.Models.Flight();

    	app.flight.fetch().done(function () {
      	var view = new app.Views.FlightView({model: flight});
      	view.render();
    	});
  },
	// chooseSeat: function (id) {
	// 	var seat = app.flight.get(id);
 //    	app.flight = new app.Models.Flight();

 //    	app.flight.fetch().done(function () {
 //      	var view = new app.Views.FlightView({model: flight});
 //      	view.render();
 //    	});
 //  },

//Jacqui End //
//Lawrence Start//

  getFlight: function (id) {
    var flight = new app.Models.Flight();
    flight.id = id;
    flight.fetch();
    if (!flight) {
      app.router.navigate('', {trigger: true });
    } else {
      var view = new app.Views.FlightView({model: flight})
      view.render()
    }
  };

//Lawrence end//

});