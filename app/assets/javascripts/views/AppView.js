var app = app || {};
app.Views = app.Views || {};

app.Views.AppView = Backbone.View.extend({
	el: '#main',
	initialize: function () {
		this.render();
	},
	render: function () {
		var template = $('#appView').html();
		this.$el.html(template);

		this.collection.each(function (flight) {
			var view = new app.Views.FlightListView({model: flight});
			this.view.render();
		});
	}
});