var app = app || {};
app.Views = app.Views || {};

app.Views.PlaneView = Backbone.View.extend({
	tagName: 'li',

	render: function (plane) {
		var template = $('#planeView').html();
		var planeHTML = Handlebars.compile(template);

		this.$el.html(planeHTML(this.model.toJSON())); //TODO: assign model
	}
});

