/*global Ember*/
ApolloWeb.Device = DS.Model.extend({
    codename: DS.attr('string'),

    permission: DS.belongsTo('permissions'),

    owner: DS.belongsTo('user'),

    status: DS.attr('string'),

    name: DS.attr('string'),

    vendor: DS.attr('string'),

    manufacturer: DS.attr('string'),

    type: DS.attr('string'),

    platform: DS.attr('string'),

    cpu: DS.attr('string'),

    gpu: DS.attr('string'),

    ram: DS.attr('string'),

    weight: DS.attr('string'),

    dimensions: DS.attr('string'),

    screenDimension: DS.attr('string'),

    resolution: DS.attr('string'),

    screenDensity: DS.attr('string'),

    internalStorage: DS.attr('string'),

    sdCard: DS.attr('string'),

    bluetooth: DS.attr('string'),

    wifi: DS.attr('string'),

    mainCamera: DS.attr('string'),

    secondaryCamera: DS.attr('string'),

    power: DS.attr('string'),

    peripherals: DS.attr('string')
});

// probably should be mixed-in...
ApolloWeb.Device.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

ApolloWeb.Permissions = DS.Model.extend({
    organization: DS.belongsTo('permission'),

    team: DS.belongsTo('permission')
});

ApolloWeb.Permission = DS.Model.extend({
    run: DS.attr('boolean', {defaultValue: false}),

    results: DS.attr('boolean', {defaultValue: false}),

    info: DS.attr('boolean', {defaultValue: false})
});

// delete below here if you do not want fixtures
ApolloWeb.Device.FIXTURES = [
  
  {
    id: 0,
    
    codename: 'foo',
    
    permission: 'foo',
    
    owner: 'foo',
    
    status: 'foo',
    
    name: 'foo',
    
    vendor: 'foo',
    
    manufacturer: 'foo',
    
    type: 'foo',
    
    platform: 'foo',
    
    cpu: 'foo',
    
    gpu: 'foo',
    
    ram: 'foo',
    
    weight: 'foo',
    
    dimensions: 'foo',
    
    screenDimension: 'foo',
    
    resolution: 'foo',
    
    screenDensity: 'foo',
    
    internalStorage: 'foo',
    
    sdCard: 'foo',
    
    bluetooth: 'foo',
    
    wifi: 'foo',
    
    mainCamera: 'foo',
    
    secondaryCamera: 'foo',
    
    power: 'foo',
    
    peripherals: 'foo'
    
  },
  
  {
    id: 1,
    
    codename: 'foo',
    
    permission: 'foo',
    
    owner: 'foo',
    
    status: 'foo',
    
    name: 'foo',
    
    vendor: 'foo',
    
    manufacturer: 'foo',
    
    type: 'foo',
    
    platform: 'foo',
    
    cpu: 'foo',
    
    gpu: 'foo',
    
    ram: 'foo',
    
    weight: 'foo',
    
    dimensions: 'foo',
    
    screenDimension: 'foo',
    
    resolution: 'foo',
    
    screenDensity: 'foo',
    
    internalStorage: 'foo',
    
    sdCard: 'foo',
    
    bluetooth: 'foo',
    
    wifi: 'foo',
    
    mainCamera: 'foo',
    
    secondaryCamera: 'foo',
    
    power: 'foo',
    
    peripherals: 'foo'
    
  }
  
];
