var app = app || {};
app.Models = app.Models || {};

app.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights'
});

// app.Models.Plane.fetch({ integer: plane_id })
