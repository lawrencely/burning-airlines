
 $(document).ready(function () {
  	if ($('#main').length === 0) {
  	return;
  };

//Jacqui start

var obj = $('#fire');
var fps = 200;
var letters = obj.html().split('');
obj.empty();
$.each(letters,function(el){
    obj.append($('<span>'+this+'</span>'));
});
var animateLetters = obj.find('span');
setInterval(function(){
    animateLetters.each(function(){
        $(this).css('fontSize', 80+(Math.floor(Math.random()*50)));        
    });
},fps);
    
    
// jacqui end


//phil
  // app.flights = new app.Collection.Flights();

  console.log('burning airlines.js');
  app.router = new app.AirlineRouter();
  Backbone.history.start();

  // //Fabian
 	// app.planes = new app.Collection.Planes();

 	// app.planes.fetch().done(function () {
 	// 	app.router = new app.AirlineRouter();
 	// 	Backbone.history.start();
 	// });

 	// $('#new_plane').on('submit', function (event) {
 	// 	event.preventDefault();

 	// 	var newPlane = new app.Models.Plane();
 	// 	newPlane.set('name', $('#plane_name').val());
 	// 	newPlane.set('rows', $('#plane_rows').val());
 	// 	newPlane.set('columns', $('#plane_columns').val());

 	// 	newPlane.save().done(function () {
 	// 		app.planes.fetch();
 	// 		app.router.navigate('', {trigger: true});
 	// 	});

 	// 	this.reset();
 	// });

  // app.flights.fetch().done(function (){
  //   app.router = new app.AirlineRouter();
  //   Backbone.history.start();
  // });



  // //Fabian
 	// app.planes = new app.Collections.Planes();

 	// app.planes.fetch().done(function () {
 	// 	app.router = new app.AirlineRouter();
 	// 	Backbone.history.start();
 	// });
  // //Fabian end

  //Jacquie
  //Jacquie end

  //Phil
  //Phil end

  //Larry
  //Larry end

});
