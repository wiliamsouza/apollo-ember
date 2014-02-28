/*global Ember*/
ApolloWeb.Test = DS.Model.extend({
    name: DS.attr('string'),

    device: DS.attr('string'),

    packages: DS.attr('string')
});

// probably should be mixed-in...
ApolloWeb.Test.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
ApolloWeb.Test.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    device: 'foo',
    
    packages: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    device: 'foo',
    
    packages: 'foo'
    
  }
  
];
