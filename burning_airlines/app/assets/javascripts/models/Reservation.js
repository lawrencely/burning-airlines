//jacqui start //
var app = app || {};
app.Models = app.Models || {};

app.Models.Reservation = Backbone.Model.extend({
	urlRoot: '/reservations',
	defaults: {
		user_id: '1',
		plane_id: '1',
		row: '1',
		column: '1'
	}
});


//jacqui end//