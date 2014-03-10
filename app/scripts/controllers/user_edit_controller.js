ApolloWeb.UserEditController = Ember.ObjectController.extend({
  needs: 'user',
  actions: {
    save: function(){
      this.get('buffer').forEach(function(attr){
        this.get('controllers.user.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('user',this.get('model'));
    }
  }
});

