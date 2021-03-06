ApolloWeb.PackageEditController = Ember.ObjectController.extend({
  needs: 'package',
  actions: {
    save: function(){
      this.get('buffer').forEach(function(attr){
        this.get('controllers.package.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('package',this.get('model'));
    }
  }
});

