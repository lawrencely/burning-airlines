//Jacqui Start //

var app = app || {}
app.Collections = app.Collections || {};

app.Collections.Reservations = Backbone.Collection.extend({
	// initialize: function();
		url: '/reservations',
	model: app.Models.Reservation
});

// Jacqui end //