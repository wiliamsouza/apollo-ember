ApolloWeb.TestRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('test', params.test_id);
  }
});

