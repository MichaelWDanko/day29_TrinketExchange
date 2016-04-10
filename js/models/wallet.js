module.exports = Backbone.Model.extend({
    /*Use initialize for functions, and default to declare varibles.*/
    initialize: function (fedRes) {
        fedRes.on('change:price', this.setPrice, this);
    },
    defaults: {
        coins: 200,
        trinkets: 0,
        saveAmount: 0,
        savings: 0,
        percent: 0.10,
        price: 100,
    },
    setPrice: function (fedRes) {
        this.set('price', fedRes.get('price'));
        console.log('New price: ' + this.get('price'));
    },
    buy: function (qty) {
        if (this.get('coins') >= (this.get('price') * qty)) {
            /*You have enough money*/
            this.set('coins', this.get('coins') - this.get('price') * qty);
            this.set('trinkets', this.get('trinkets') + 1);
            console.log('Trinket bought');
            console.log('coins: ' + this.get('coins'));
            console.log('trinkets: ' + this.get('trinkets'));
        } else {
            /*You do not have enough money*/
            console.log('Insufficient funds');
        }
    },
    sell: function (qty) {
        if (this.get('trinkets') >= qty) {
            this.set('trinkets', this.get('trinkets') - qty);
            this.set('saveAmount', this.get('percent') * (this.get('price') * qty));
            //            this.savings = this.savings + this.saveAmount;
            this.set('coins', this.get('coins')+((this.get('price')*qty)-this.get('saveAmount')));
            this.set('savings', this.get('savings') + this.get('saveAmount'));
            console.log('Trinket sold!');
            console.log('coins: ' + this.get('coins'));
            console.log('trinkets: ' + this.get('trinkets'));
        } else {
            console.log('You do not have any trinkets to sell!');
        }
    },
});
