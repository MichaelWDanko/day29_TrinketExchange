/* jslint browser: true */
window.addEventListener('load', function () {
    //    var backbone = require('backbone');
    var _ = require('underscore');
    var Bank = require('./models/bank');
    var Wallet = require('./models/wallet');
    var PriceView = require('./views/updateprice.js');
    var BuyAndSell = require('./views/controlsview.js');
    var UpdateWealth = require('./views/updatewealth.js');

    var fedRes = new Bank();
    var price = new PriceView({
        model: fedRes,
        el: document.getElementById('exchange')
    });
//    var transaction = _.template(document.getElementById('transaction-template'));
    //Set the functions in the model 'wallet'

    var test = document.getElementById('transaction-template');
    console.log(test);
    
    
    var pocket = new Wallet(fedRes);
    var controlView = new BuyAndSell({
        model: pocket,
        el: document.getElementById('controls')
    });

    var wealth = new UpdateWealth({
        model: pocket,
        el: document.getElementById('resources')
    });

    function autoBuy() {
        if (pocket.get('price') <= 45) {
            pocket.buy(1);
        }
    }

    function autoSell() {
        if (pocket.get('price') >= 55) {
            pocket.sell(1);
        }
    }

    function autoTrade() {
        autoBuy();
        autoSell();
    }
    var intervalId;
    var autoIndicator = document.getElementById('auto-trade');
    var startAuto = document.getElementById('start-auto');
    startAuto.addEventListener('click', function () {
        console.log('Started auto-trade');
        intervalId = window.setInterval(autoTrade, 1000);
        autoIndicator.textContent = "On";
        autoIndicator.classList.remove('off');
        autoIndicator.classList.add('on');
    });
    var stopAuto = document.getElementById('stop-auto');
    stopAuto.addEventListener('click', function () {
        console.log('Stopped auto-trade');
        clearInterval(intervalId);
        autoIndicator.textContent = "Off";
        autoIndicator.classList.remove('on');
        autoIndicator.classList.add('off');
    });

    /*The Backbone View for the Activity Log*/

});
