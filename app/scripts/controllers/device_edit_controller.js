ApolloWeb.DeviceEditController = Ember.ObjectController.extend({
  needs: 'device',
  actions: {
    save: function(){
      this.get('buffer').forEach(function(attr){
        this.get('controllers.device.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('device',this.get('model'));
    }
  }
});

