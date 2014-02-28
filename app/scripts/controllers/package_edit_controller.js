ApolloWeb.PackageEditController = Ember.ObjectController.extend({
  needs: 'package',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.package.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('package',this.get('model'));
    }
  }
});

