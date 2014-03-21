ApolloWeb.UsersNewController = Ember.ObjectController.extend({
  name: '',
  email: '',
  password: '',
  pwd: '',
  message: '',
  actions: {
    new: function() {
      var self = this;
      var user = this.getProperties('name', 'email', 'password');
      Ember.$.post('http://localhost:8000/users', JSON.stringify(user), 'json').then(function(data, textStatus, jqXHR) {
        self.transitionToRoute('users.authenticate');
      }, function(jqXHR, textStatus, errorThrown) {
        self.setProperties({message: jqXHR.responseText});
      });
    }
  }
});
