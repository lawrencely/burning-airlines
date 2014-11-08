var app = app || {}
app.Collections = app.Collections || {};

app.Collections.Planes = Backbone.Collection.extend({
	url: '/planes',
	model: app.Models.Plane
});