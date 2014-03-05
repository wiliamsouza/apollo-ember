/*global Ember*/
ApolloWeb.Package = DS.Model.extend({
    filename: DS.attr('string'),

    metadata: DS.belongsTo('metadata')
});

// probably should be mixed-in...
ApolloWeb.Package.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

ApolloWeb.Metadata = DS.Model.extend({
    version: DS.attr('number'),

    description: DS.attr('string'),

    install: DS.attr('string'),

    run: DS.attr('string')
})

// delete below here if you do not want fixtures
ApolloWeb.Package.FIXTURES = [
  
  {
    id: 0,
    
    filename: 'foo',
    
    metadata: 'foo'
    
  },
  
  {
    id: 1,
    
    filename: 'foo',
    
    metadata: 'foo'
    
  }
  
];
