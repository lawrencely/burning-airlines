var app = app || {};
app.Views = app.Views || {};

app.Views.PlanesAppView = Backbone.View.extend({
	el: '#planes-main',
	initialize: function () {
		this.render();
	},
	render: function () {
		var template = $('#planesAppView').html();
		this.$el.html(template);

		this.collection.each(function (plane) {
			var view = new app.Views.PlanesView({model: plane});
			view.render();
		});
	}
});