ApolloWeb.PackageRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('package', params.package_id);
  }
});

