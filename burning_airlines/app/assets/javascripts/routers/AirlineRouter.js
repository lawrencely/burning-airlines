var app = app || {};
var flights = flights || {};

app.AirlineRouter = Backbone.Router.extend({
	routes: {
		'': 'showFlights'
		// 'planes/:id': 'getPlane',
  //   'flights': 'showFlights'
  //   'flight/:id': 'getFlight',
		// '*anythingElse': 'pageNotFound'
	},
	// index: function () {
 //    console.log('index');
	// 	new app.Views.AppView({collection: app.planes});
	// },

// 	getPlane: function (id) {
// 		var plane = app.planes.get(id);
// 		if (!plane) {
// 			app.router.navigate('', {trigger: true});
// 		} else {
// 			var view = new app.Views.PlaneView({model: plane});
// 			view.render();
// 		}
// 	},

//  pageNotFound: function () {
//     app.router.navigate('', {trigger: true});
//   }

// //Jacqui Start //

// 	chooseSeat: function (id) {
// 		var seat = app.flight.get(id);
//     	app.flight = new app.Models.Flight();

//     	app.flight.fetch().done(function () {
//       	var view = new app.Views.FlightView({model: flight});
//       	view.render();
//     	});
//   },
// 	// chooseSeat: function (id) {
// 	// 	var seat = app.flight.get(id);
//  //    	app.flight = new app.Models.Flight();

//  //    	app.flight.fetch().done(function () {
//  //      	var view = new app.Views.FlightView({model: flight});
//  //      	view.render();
//  //    	});
//  //  },

// //Jacqui End //
// //Lawrence Start//

  showFlights: function () {
    console.log('show flights')
    var flights = new app.Collections.Flights;
    flights.fetch().done(function (flights) {
      var view = new app.Views.FlightListView({ collection: flights});
      view.render();
    });
  }

//   getFlight: function (id) {
//     var flight = new app.Models.Flight();
//     flight.id = id;
//     flight.fetch();
//     if (!flight) {
//       app.router.navigate('', {trigger: true });
//     } else {
//       var view = new app.Views.FlightView({model: flight})
//       view.render()
//     }
//   };



//Lawrence end//

});