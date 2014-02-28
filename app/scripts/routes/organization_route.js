ApolloWeb.OrganizationRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('organization', params.organization_id);
  }
});

