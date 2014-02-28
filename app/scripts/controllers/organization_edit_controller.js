ApolloWeb.OrganizationEditController = Ember.ObjectController.extend({
  needs: 'organization',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.organization.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('organization',this.get('model'));
    }
  }
});

