var ApolloWeb = window.ApolloWeb = Ember.Application.create();

/* Enable html5 attributes */
Ember.TextField.reopen({attributeBindings: ['autofocus', 'required']});
Ember.Checkbox.reopen({attributeBindings: ['autofocus', 'required']});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');