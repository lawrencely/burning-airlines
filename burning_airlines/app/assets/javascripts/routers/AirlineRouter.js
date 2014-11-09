var app = app || {};

app.AirlineRouter = Backbone.Router.extend({
	routes: {
		'': 'showFlights',
		// 'planes/:id': 'getPlane',
   // 'flight': 'getFlight'
    'flight/:id': 'getFlight',
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

// // //Jacqui Start //

// 	pageNotFound: function () {
// 	    app.router.navigate('', {trigger: true});
// 	  },

// //Fabian Start
// 	showPlanes: function () {
// 		var plane = app.planes.get(id);
// 		var view = new app.Views.PlanesView({model: plane});
// 		view.render();
// 	},
// //Fabian End

// >>>>>>> a15b0493562ec857f97caf602f7f6eb0e71d0c71

// // 	chooseSeat: function (id) {
// // 		var seat = app.flight.get(id);
// //     	app.flight = new app.Models.Flight();

// <<<<<<< HEAD
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
    var flights = new app.Collections.Flights();
    flights.fetch({
      success: function(fli) {
        var view = new app.Views.FlightListView({ collection: fli});
      view.render();

      }
    });
  },
// =======
	// chooseSeat: function (id) {
	// 	var seat = app.flight.get(id);
 //    	app.flight = new app.Models.Flight();

 //    	app.flight.fetch().done(function () {
 //      	var view = new app.Views.FlightView({model: flight});
 //      	view.render();
 //    	});
 //  },
	// chooseSeat: function (id) {
	// 	var seat = app.flight.get(id);
 //    	app.flight = new app.Models.Flight();
// >>>>>>> a15b0493562ec857f97caf602f7f6eb0e71d0c71

  getFlight: function (id) {
    var flight = new app.Models.Flight({id: id});
    flight.fetch({
      success: function (flight) {
         var view = new app.Views.FlightView({model: flight});
         view.render();
         $('#main').html(view.$el);
      }
    });
  }



// <<<<<<< HEAD
// =======
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
//   }
// >>>>>>> a15b0493562ec857f97caf602f7f6eb0e71d0c71

//Lawrence end//

});