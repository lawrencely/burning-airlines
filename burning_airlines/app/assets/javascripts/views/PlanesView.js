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

$('#new_plane').on('submit', function (event) {
	event.preventDefault();

	var newPlane = new app.Models.Plane();
	newPlane.set('name', $('#plane_name').val());
	newPlane.set('rows', $('#plane_rows').val());
	newPlane.set('columns', $('#plane_columns').val());

	newPlane.save().done(function () {
		app.planes.fetch();
		app.router.navigate('planes', {trigger: true});
	});

	this.reset();
});