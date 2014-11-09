var app = app || {};
app.Views = app.Views || {};

app.Views.ReservationsView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'viewReservation'
	},
	initialize: function () {},
	render: function () {
		var template = $('#ReservationsView').html();
		var reservationsHTML = Handlebars.compile(template);

		this.$el.html(reservationsHTML({reservation: this.collection.toJSON()}));
		$('#main').append(this.el);
	},
	viewReservation: function () {
		// app.router.navigate('planes/' + this.model.get('id'), {trigger: true});
	}
});

