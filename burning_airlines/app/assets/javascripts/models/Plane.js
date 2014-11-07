var app = app || {};
app.Models = app.Models || {};

app.Models.Plane = Backbone.Model.extend({
	urlRoot: '/planes',
	defaults: {
		name: 'untitled-plane',
		rows: 0,
		columns: 0
	}
});