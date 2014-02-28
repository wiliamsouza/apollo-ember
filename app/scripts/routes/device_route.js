ApolloWeb.DeviceRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('device', params.device_id);
  }
});

