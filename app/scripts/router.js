ApolloWeb.Router.map(function () {
  
  this.resource('devices', function(){
    this.resource('device', { path: '/:device_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('organizations', function(){
    this.resource('organization', { path: '/:organization_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('packages', function(){
    this.resource('package', { path: '/:package_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
