/* jslint browser: true */
module.exports = Backbone.Model.extend({
    /*Use initialize for functions, and default to declare varibles.*/
    initialize: function (fedRes) {
        fedRes.on('change:price', this.setPrice, this);
        var transaction = _.template(document.getElementById('transaction-template'));
    },
    defaults: {
        coins: 500,
        trinkets: 0,
        saveAmount: 0,
        savings: 0,
        percent: 0.10,
        price: 100,
    },
    setPrice: function (fedRes) {
        this.set('price', fedRes.get('price'));
//        console.log('New price: ' + this.get('price'));
    },
    buy: function (qty, transaction) {
        var price = this.get('price');
        if (this.get('coins') >= (this.get('price') * qty)) {
            /*You have enough money*/
            this.set('coins', this.get('coins') - this.get('price') * qty);
            this.set('trinkets', this.get('trinkets') + qty);
            console.log(qty + 'Trinket bought');
            
            var html = transaction({
                qty: qty,
                price: price,
                time: new Date().getTime(),
            });
        } else {
            /*You do not have enough money*/
//            console.log('Insufficient funds');
        }
    },
    sell: function (qty) {
        if (this.get('trinkets') >= qty) {
            this.set('trinkets', this.get('trinkets') - qty);
            this.set('saveAmount', Math.round((this.get('percent') * (this.get('price') * qty)) * 100)/100);
            this.set('coins', Math.round((this.get('coins')+((this.get('price')*qty)-this.get('saveAmount')))*100)/100);
            this.set('savings', Math.round((this.get('savings') + this.get('saveAmount'))*100)/100);
            console.log(qty + 'Trinket sold!');
//            console.log('coins: ' + this.get('coins'));
//            console.log('trinkets: ' + this.get('trinkets'));
        } else {
//            console.log('You do not have any trinkets to sell!');
        }
    },
});
