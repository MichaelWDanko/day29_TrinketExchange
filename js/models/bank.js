/* jslint browser: true */
module.exports = Backbone.Model.extend({

    defaults: {
        price: 100,
    },

    initialize: function () {
        var self = this;
        function refresh() {
            var server = new XMLHttpRequest();
            server.open('GET', 'http://trinkets.queencityiron.com/price');
            server.onload = function () {
                var data = JSON.parse(server.responseText);

                self.set('price', Math.round((data.price * 100)/100));
//                console.log('New price: ' + Math.round((data.price * 100)/100));
            };
            server.send();
//           console.log(this.get('price')); 
        }
        refresh();
        setInterval(refresh, 3000);
    }
});
