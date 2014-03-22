ApolloWeb.UsersAuthenticateController = Ember.ObjectController.extend({
  needs: 'application',
  email: '',
  password: '',
  remember: false,
  message: '',
  actions: {
    authenticate: function() {
      var self = this;
      var auth = self.getProperties('email', 'password');
      Ember.$.post('http://localhost:8000/users/authenticate', JSON.stringify(auth), 'json').then(function(data, textStatus, jqXHR) {
        self.transitionToRoute('index');
        localStorage.token = data.token;
        self.get('controllers.application').set('signedIn', true);
      }, function(jqXHR, textStatus, errorThrown) {
        self.setProperties({message: jqXHR.responseText});
      });
    }
  }
});