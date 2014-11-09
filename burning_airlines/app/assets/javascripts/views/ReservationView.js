var app = app || {};
app.Views = app.Views || {};

app.Views.ReservationView = Backbone.View.extend({
	tagName: 'li',

	render: function (reservation) {
		var template = $('#ReservationView').html();
		var reservationHTML = Handlebars.compile(template);

		this.$el.html(reservationHTML(this.model.toJSON())); //TODO: assign model
	}
});

