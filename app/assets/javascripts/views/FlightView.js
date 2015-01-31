var app = app || {};
app.Views = app.Views || {};

app.Views.FlightView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'makeReservation'
  },

  render: function (flight) {

    var template = $('#flightView').html();
    var flightViewHTML = Handlebars.compile(template);
    this.$el.html(flightViewHTML(this.model.toJSON()));
  }
});



