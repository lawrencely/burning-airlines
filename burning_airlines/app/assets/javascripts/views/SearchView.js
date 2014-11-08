var app = app || {};
app.Views = app.Views || {};

app.Views.SearchView = Backbone.View.extend({
	el: '#main',
	initialize: function () {
		this.render();
	},
	render: function () {
		var template = $('#SearchView').html();
		this.$el.html(template);

		this.collection.each(function (search) {
			var view = new app.Views.SearchView({model: search});
			view.render();
		});
	}
});