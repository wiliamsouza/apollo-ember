ApolloWeb.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model) {
      controller.set('signedIn', !!localStorage.token);
  },
  actions: {
    signout: function() {
      delete localStorage.token;
      this.controllerFor('application').set('signedIn', false);
      this.transitionToRoute('users.authenticate');
    }
  }
});

ApolloWeb.LoginRequiredRoute = Ember.Route.extend({
  beforeModel: function(transition) {
      if (!localStorage.token) {
        this.transitionTo('users.authenticate');
    }
  }
});