/* jslint browser: true */
module.exports = Backbone.View.extend({
   initialize: function () {
       this.model.on('change', this.render, this);
   },
    render: function () {
      var priceSpot = document.getElementById('exchange');
        priceSpot.textContent = this.model.get('price');
    },
});