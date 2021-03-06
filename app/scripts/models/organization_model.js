/*global Ember*/
ApolloWeb.Organization = DS.Model.extend({
    name: DS.attr('string'),

    teams: DS.hasMany('team'),

    admins: DS.hasMany('user')
});

// probably should be mixed-in...
ApolloWeb.Organization.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

ApolloWeb.Team = DS.Model.extend({
    name: DS.attr('string'),

    users: DS.hasMany('user')
});

// delete below here if you do not want fixtures
ApolloWeb.Organization.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    teams: 'foo',
    
    admins: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    teams: 'foo',
    
    admins: 'foo'
    
  }
  
];
