ApolloWeb.OrganizationEditController = Ember.ObjectController.extend({
  needs: 'organization',
  actions: {
    save: function(){
      this.get('buffer').forEach(function(attr){
        this.get('controllers.organization.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('organization',this.get('model'));
    }
  }
});

