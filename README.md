# day29_TrinketExchange
A fully developed interface to trade on the TIY Exchange.

Redeveloped through the construction of Backbone.

###Transaction Log
I was unable to finish the transaction log on the 'activity-log' branch of my repo.
I had issues with the buy property of the wallet model recognizing the template and had an error code.

Perhaps I was implementing the View/Model idea wrong, but I decided that since I have both user initiated trades
and automated trades, the best way to implement the transaction record keeping would be to use the Underscore template each time the buy function was run.

###Stats Section
I was unable to begin working on a Stats Section. I had hoped to record the high/low price over the last 5 minutes.
###Novel Features:
-I have auto-buy/auto-sell working. Buys when the price < 45 and sells when the price is greater than 55.

-You can buy/sell multiple trinkets at once with the buttons.

-Each sell takes 10% of the price and stores it into a savings aggregate.