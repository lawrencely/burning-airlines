//Jacqui Start // 

var app = app || {}
app.Collections = app.Collections || {};

app.Collections.Reservations = Backbone.Collections.extend({
	// initialize: function();
		url: '/reservations',
	model: app.Models.Reservation
});

// Jacqui end //