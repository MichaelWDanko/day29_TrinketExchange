/* jslint browser: true */
module.exports = Backbone.View.extend ({
    initialize: function () {
      this.model.on('change', this.render, this);  
    },
    render: function () {
        console.log(this.model.get('coins'));
      var coins = document.getElementById('coin-wealth');
      coins.textContent = this.model.get('coins');
       var trinkets = document.getElementById('trinket-wealth');
        trinkets.textContent = this.model.get('trinkets');
       var savings = document.getElementById('savings-wealth');
        savings.textContent = this.model.get('savings');
    },
});