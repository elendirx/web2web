# web2web
Server-less & domain-less websites updatable via torrents and bitcoin blockchain.

[live demo](https://elendirx.github.io/web2web)


### Why
Websites get seized by losing control over a webserver or a domain.
If we replace both the webserver and the domain with [torrents](https://webtorrent.io) and [blockchain](https://bitcoin.org/en) then there's nothing left to seize.


## How It Works
This repo contains two HTML files:

+ `index.html` is responsible for loading the webpage from torrent,
+ `webpage.html` is the actual webpage.


When you open `index.html` in the browser ([live demo](https://elendirx.github.io/web2web)), here's what happens:


1. Bitcoin address `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` is searched for the latest outgoing transaction containing `OP_RETURN` [script](https://en.bitcoin.it/wiki/OP_RETURN). Inside the script there is a torrent infohash of `webpage.html`.
2. `webpage.html` is downloaded from torrent via [webtorrent](https://webtorrent.io) and displayed.


### How Is It Updated
To perform serverless updates, torrent of the updated `webpage.html` is created and its infohash is inserted into new bitcoin transaction sent from `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` address.


### How Is It Domainless
Save the `index.html` to your PC and open it from `localhost`. It will still work and receive updates.


## What Next
### User Accounts
Users will be able to sign up by sending small amount of bitcoin to the `1DhDyqB4xgDWjZzfbYGeutqdqBhSF7tGt4` bitcoin address.
Then they can update their content by inserting torrent infohashes into transactions sent from their addresses.

### E-commerce
It will be possible to build complex serverless anonymous e-commerce websites using bitcoin for payments.


## Project Status
Proof of concept, just for fun. Works in chrome, firefox and opera.

To create your own distributed webpage, take a look at [web2web gateway](https://elendirx.github.io/web2web-gateway).



