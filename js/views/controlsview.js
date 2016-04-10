/* jslint browser: true */
module.exports = Backbone.View.extend ({
   events: {
       "click #buy": 'buy', 
       "click #sell": 'sell',
       "click #buy5": 'buy5', 
       "click #sell5": 'sell5',
       "click #buy10": 'buy10', 
       "click #sell10": 'sell10',
       
   },
    buy: function() {
        this.model.buy(1);
    },
    sell: function() {
        this.model.sell(1);
    },
    buy5: function() {
        this.model.buy(5);
    },
    sell5: function() {
        this.model.sell(5);
    },
    buy10: function() {
        this.model.buy(10);
    },
    sell10: function() {
        this.model.sell(10);
    },
    
});