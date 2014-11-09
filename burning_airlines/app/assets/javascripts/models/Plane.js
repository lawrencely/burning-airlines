var app = app || {};
app.Models = app.Models || {};

app.Models.Plane = Backbone.Model.extend({
	urlRoot: '/planes'
});