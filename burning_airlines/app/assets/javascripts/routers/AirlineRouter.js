var app = app || {};

app.AirlineRouter = Backbone.Router.extend({
	routes: {
		'': 'showFlights',
    'planes': 'showPlanes',
		'planes/:id': 'getPlane',
   // 'flight': 'getFlight'
    'flight/:id': 'getFlight',
    'reservations': 'showReservations',
    // 'reservation/:id': 'getReservation'
		// '*anythingElse': 'pageNotFound'

	},


	// index: function () {
 //    console.log('index');
	// 	new app.Views.AppView({collection: app.planes});
	// },

	getPlane: function (id) {
		var plane = app.Models.Plane({id: id});
    plane.fetch({
      success: function (plane) {
        var view = new app.Views.PlaneView({model: plane});
			   view.render();
        $('#main').html(view.$el);
		  }
    });
	},


//  pageNotFound: function () {
//     app.router.navigate('', {trigger: true});
//   }


/// Phil
 // getReservation: function (id) {
 //    var reservation = new app.Models.Reservation({id: id});
 //    reservation.fetch({
 //      success: function (reservation) {
 //         var view = new app.Views.ReservationView({model: reservation});
 //         view.render();
 //         $('#main').html(view.$el);
 //      }
 //    });
 //  }

 //   showReservations: function () {
 //    var reservations = new app.Collections.Reservations();
 //    reservations.fetch({
 //      success: function(res) {
 //        var view = new app.Views.ReservationsView({ collection: res});
 //      view.render();
 //      },
 //    });
 //  },


//// Phil
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
      },
    });
  },

  showPlanes: function () {
    console.log('show planes')
    var planes = new app.Collections.Planes();
    planes.fetch({
      success: function(plane) {
        var view = new app.Views.PlanesView({ collection: plane});
      view.render();
      },
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