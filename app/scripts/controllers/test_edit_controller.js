ApolloWeb.TestEditController = Ember.ObjectController.extend({
  needs: 'test',
  actions: {
    save: function(){
      this.get('buffer').forEach(function(attr){
        this.get('controllers.test.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('test',this.get('model'));
    }
  }
});

