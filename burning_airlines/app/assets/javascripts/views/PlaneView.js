var app = app || {};
app.Views = app.Views || {};

app.Views.PlaneView = Backbone.View.extend({
	el: '#planes-main',
	initialize: function () {},
	render: function () {
		var template = $('#PlaneView').html();
		var planeHTML = Handlebars.compile(template);

		this.$el.html(planeHTML(this.model.toJSON())); //TODO: assign model
	}
});

