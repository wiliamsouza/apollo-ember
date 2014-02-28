ApolloWeb.DeviceEditController = Ember.ObjectController.extend({
  needs: 'device',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.device.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('device',this.get('model'));
    }
  }
});

