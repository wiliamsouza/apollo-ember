ApolloWeb.TestsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('test');
  }
});

