var app = app || {};
app.Views = app.Views || {};

app.Views.PlanesView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'viewPlane'
	},
	initialize: function () {},
	render: function () {
		var template = $('#planesView').html();
		var planesHTML = Handlebars.compile(template);

		this.$el.html(planesHTML(this.model.toJSON()));
		$('#planes').append(this.el);
	},
	viewPlane: function () {
		app.router.navigate('planes/' + this.model.get('id'), {trigger: true});
	}
});

