ApolloWeb.OrganizationsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('organization');
  }
});

