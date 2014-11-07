var app = app || {}
app.Collections = app.Collections || {};

app.Collections.Planes = Backbone.Collections.extend({
	url: '/planes',
	model: app.Models.Plane
});