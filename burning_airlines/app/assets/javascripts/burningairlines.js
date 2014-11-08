
 $(document).ready(function () {
  	if ($('#main').length === 0) {
  	return;
  };
//phil
  app.flights = new app.Collection.Flights();

  app.flights.fetch().done(function (){
    app.router = new app.AirlineRouter();
    Backbone.history.start();
  });

  
  
  //Fabian
 	app.planes = new app.Collections.Planes();

 	app.planes.fetch().done(function () {
 		app.router = new app.AirlineRouter();
 		Backbone.history.start();
 	});
  //Fabian end

  //Jacquie
  //Jacquie end

  //Phil
  //Phil end

  //Larry
  //Larry end

});
