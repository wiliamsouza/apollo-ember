ApolloWeb.TestEditController = Ember.ObjectController.extend({
  needs: 'test',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.test.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('test',this.get('model'));
    }
  }
});

