module.exports = Backbone.View.extend({
        initialize: function() {
        var autoIndicator = document.getElementById('auto-trade'); 
   },
    defaults: {
       status: 'on', 
    },
    events: {
      "click #start-auto": 'start',  
      "click #stop-auto":  'stop',
    },
    start: function(autoIndicator) {
        console.log('Started auto-trade');
        
    },
    stop: function() {
        console.log('Started auto-trade');
        
    },
});