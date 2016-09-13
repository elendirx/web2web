# W2W
Websites get seized by losing control over the webserver or the domain.
If we remove both the webserver and the domain then there's nothing left to seize.
We achieve it using [torrents](https://webtorrent.io) and the [blockchain](https://bitcoin.org/en).


## How it Works
This repo contains two HTML files:

+ `index.html` is responsible for loading the webpage,
+ `webpage.html` is the actual webpage.


When you open `index.html` in the browser (TODO: live demo), here's what happens.


1. `index.html` searches the bitcoin address `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` for the latest outgoing transaction containing `webpage.html` torrent hash in `OP_RETURN` [script](https://en.bitcoin.it/wiki/Script).
2. `webpage.html` source HTML is loaded from torrent using [Webtorrent](https://webtorrent.io).
3. `index.html` overwrites itself with the `webpage.html` source HTML.


### Updates
To perform serverless updates, create torrent of the updated `webpage.html` and copy its hash into new bitcoin transaction's `OP_RETURN` sent from `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` address.


## What's next
### User Accounts
Users can sign up by sending small amount of bitcoin to the `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` bitcoin address.
Users can update their content by inserting torrent hashes into transactions sent from their addresses.

### E-commerce
It will be possible to build complex serverless anonymous e-commerce websites using bitcoin for payments.


## Project status
Proof of concept, just for fun. If you want this to be further developed, throw money at me.



