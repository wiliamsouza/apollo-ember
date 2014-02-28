/*global Ember*/
ApolloWeb.User = DS.Model.extend({
    name: DS.attr('string'),

    email: DS.attr('string'),

    apikey: DS.attr('string'),

    created: DS.attr('date'),

    lastlogin: DS.attr('date')
});

// probably should be mixed-in...
ApolloWeb.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ApolloWeb.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    email: 'foo',
    
    apikey: 'foo',
    
    created: 'foo',
    
    lastlogin: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    email: 'foo',
    
    apikey: 'foo',
    
    created: 'foo',
    
    lastlogin: 'foo'
    
  }
  
];
