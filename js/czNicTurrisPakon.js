'use strict';

const czNicTurrisPakon = class {

	/*
	 * @constructor
	 * @param {Window} w - root website object
	 */
	constructor (w = window)
	{
		/*
		 * @public
		 */
		this.window = w;

		this.idb = this.window.indexedDB
			|| this.window.mozIndexedDB
			|| this.window.webkitIndexedDB
			|| this.window.msIndexedDB
			|| this.window.shimIndexedDB; // This works on all devices/browsers, and uses IndexedDBShim as a final fallback

		/*
		 * @public
		 */
		this.brandColors = Object.freeze([
			'500px',
			'about-me',
			'adobe',
			'aer-lingus',
			'aetna',
			'aiesec',
			'aim',
			'airbnb',
			'akamai',
			'alcon',
			'algolia',
			'alibaba',
			'alienware',
			'alphabet',
			'amazon',
			'american-express',
			'american-red-cross',
			'android',
			'angies-list',
			'angularjs',
			'answers',
			'aol',
			'arch-linux',
			'arizona-state-university-asu',
			'arriva-danmark',
			'asana',
			'askfm',
			'associated-press',
			'att',
			'atlanta-falcons',
			'atlantic-coast-conference-acc',
			'atlassian',
			'auth0',
			'avira',
			'baidu',
			'bandcamp',
			'barclays',
			'barnes-noble',
			'basecamp',
			'beats-by-dre',
			'bebo',
			'behance',
			'best-buy',
			'big-cartel',
			'bing',
			'bitbucket',
			'bitly',
			'blackberry',
			'blockchain',
			'blogger',
			'boeing',
			'boise-state-university',
			'bombardier',
			'booking-com',
			'bower',
			'box',
			'boy-scouts-of-america',
			'british-airways',
			'bt',
			'buffer',
			'burger-king',
			'buzzfeed',
			'bynder',
			'cadbury',
			'canon',
			'capital-one',
			'carbonmade',
			'carrefour',
			'carrot',
			'cartoon-network',
			'case-mate',
			'change-org',
			'channel-4',
			'charity-water',
			'cheddar',
			'clemson-university',
			'coca-cola',
			'code-school',
			'codecademy',
			'codepen',
			'connexxion',
			'continental-ag',
			'courtyard',
			'craft-cms',
			'creative-commons',
			'creative-market',
			'crowdin',
			'crowne-plaza',
			'crunchbase',
			'culvers',
			'cunard',
			'cvs',
			'dailymotion',
			'daimler',
			'dealhack',
			'debian',
			'deezer',
			'delectable',
			'delicious',
			'dell',
			'delta-airlines',
			'dental-plans',
			'designer-news',
			'designmoo',
			'deutsche-bahn',
			'deviantart',
			'devour',
			'dewalt',
			'dhl',
			'diebold',
			'digg',
			'digital-ocean',
			'dindr',
			'direct-energy',
			'directv',
			'discogs',
			'discord',
			'dish-network',
			'disney-xd',
			'disqus',
			'django',
			'docker',
			'dominos',
			'dow',
			'dribbble',
			'dropbox',
			'droplr',
			'drupal',
			'dunked',
			'duolingo',
			'dwolla',
			'etrade',
			'e4',
			'easy-jet',
			'ebay',
			'el-al',
			'elance',
			'ello',
			'ember',
			'emma',
			'endomundo',
			'engadget',
			'envato',
			'epam',
			'epictions',
			'ericsson',
			'esl',
			'espn',
			'estimote',
			'etsy',
			'evaneos',
			'eventbrite',
			'evernote',
			'execucar',
			'fab-com',
			'facebook',
			'fairfield-inn-suites',
			'fairmont',
			'famo-us',
			'fancy',
			'fedex',
			'feedly',
			'fendi',
			'ferrari',
			'fiat',
			'film4',
			'firefox',
			'fiskars',
			'fitbit',
			'five-guys',
			'fiverr',
			'flattr',
			'flavors-me',
			'flickr',
			'flipboard',
			'flixster',
			'follr',
			'ford',
			'4ormat',
			'forrst',
			'foursquare',
			'freecodecamp',
			'friend2friend',
			'gallaudet-university',
			'gannett',
			'garmin',
			'garuda',
			'generatepress',
			'geocaching',
			'georgia-southern-university',
			'ghost',
			'gibson',
			'gimmebar',
			'github',
			'gitlab',
			'gitter',
			'gittip',
			'godaddy',
			'gogo',
			'goodreads',
			'google',
			'google-allo',
			'google-duo',
			'google-plus',
			'gospel-for-asia',
			'gravatar',
			'gravit',
			'greenhouse',
			'groupon',
			'grunt',
			'gumtree',
			'gvb',
			'hacker-news',
			'hangouts',
			'happn',
			'heineken',
			'hellowallet',
			'help-scout',
			'heroku',
			'hewlett-packard-enterprise',
			'hi5',
			'highfive',
			'home-depot',
			'homeaway',
			'hootsuite',
			'houzz',
			'hp',
			'hsbc',
			'html5',
			'hulu',
			'hyatt',
			'ibm',
			'icons8',
			'ideal',
			'identi-ca',
			'ifttt',
			'iheartradio',
			'ikea',
			'imdb',
			'imgur',
			'indeed',
			'indiegogo',
			'instacart',
			'instagram',
			'instapage',
			'instapaper',
			'intel',
			'intuit',
			'ios',
			'issuu',
			'istock',
			'javascript',
			'jawbone',
			'jbl',
			'jetpack',
			'joomla',
			'joyent',
			'jquery',
			'kaspersky-lab',
			'keeeb',
			'khan-academy',
			'kia',
			'kickstarter',
			'kik',
			'kippt',
			'kitkat',
			'kiva',
			'kiwipay',
			'klm',
			'lamborghini',
			'laravel',
			'lastfm',
			'lastpass',
			'lego',
			'line',
			'linkedin',
			'livestream',
			'lloyds',
			'lomo',
			'london-underground',
			'lowes',
			'lumo',
			'lyft',
			'magento',
			'mail-ru',
			'mailchimp',
			'manjaro-linux',
			'mapbox',
			'massy-group',
			'mastercard',
			'mcdonalds',
			'medium',
			'meetup',
			'meijer',
			'mercadolibre-com',
			'messenger',
			'microsoft',
			'microsoft-band',
			'microsoft-office',
			'microsoft-surface',
			'milligram',
			'mixcloud',
			'mixpanel',
			'mobilink',
			'mollie',
			'mongodb',
			'montclair-state-university',
			'more4',
			'motorola',
			'mozilla',
			'musixmatch',
			'muut',
			'myspace',
			'mysql',
			'nanowrimo',
			'nasa',
			'national-geographic',
			'nationwide',
			'nbc',
			'nc-state-university',
			'nest',
			'netflix',
			'netvibes',
			'new-balance',
			'new-york-post',
			'nexar',
			'nexmo',
			'nextdoor',
			'nfl',
			'nike-football',
			'nikefuel',
			'ning',
			'ninjas-in-pyjamas',
			'node-js',
			'nokia',
			'norsan-media',
			'northern-arizona-university',
			'northwestern-university',
			'novartis',
			'npm',
			'ns',
			'nvidia',
			'nzxt',
			'obb',
			'odnoklassniki',
			'office-sway',
			'oktopost',
			'olark',
			'olympus',
			'oneplus',
			'onshape',
			'oovoo',
			'opera',
			'oracle',
			'oregon-state-university',
			'overstock',
			'oxford-university-press',
			'pac-12',
			'panasonic',
			'pandora',
			'path',
			'patreon',
			'paymill',
			'paypal',
			'pearson',
			'penguin-books',
			'pepsi',
			'periscope',
			'pfizer',
			'philips',
			'photobucket',
			'php',
			'pinboard',
			'pinterest',
			'pizza-hut',
			'plasso',
			'plaxo',
			'playstation',
			'pocket',
			'polariod',
			'portfolium',
			'postman',
			'postmates',
			'prestashop',
			'prezi',
			'priceline',
			'princeton-university',
			'product-hunt',
			'protonmail',
			'puma',
			'purdue-university',
			'python',
			'qantas-airlines',
			'qualtrics',
			'quizup',
			'quora',
			'quote-fm',
			'raspberry-pi',
			'razer',
			'rdio',
			'remax',
			'react',
			'readability',
			'realex-payments',
			'red-hat',
			'reddit',
			'redfin',
			'redox',
			'renaissance-hotels',
			'rentler',
			'residence-inn',
			'reverbnation',
			'rochester-institute-of-technology',
			'rockpack',
			'roku',
			'rolls-royce',
			'roo-kids',
			'roon',
			'rosetta-stone',
			'rounds',
			'rowan-university',
			'royal-mail',
			'rss-2',
			'ruby',
			'ruby-on-rails',
			'rutgers-university',
			'ryanair',
			'sabre',
			'sage',
			'sainsburys',
			'salesforce',
			'samsung',
			'san-francisco-49ers',
			'san-francisco-giants',
			'sap',
			'scouts-uk',
			'scribd',
			'septa',
			'seton-hall-university',
			'shazam',
			'sherwin-williams',
			'shopify',
			'shopmium',
			'siemens',
			'skillshare',
			'skoda',
			'skype',
			'skywest',
			'slack',
			'slideshare',
			'slipcase',
			'smashing-magazine',
			'snagajob',
			'snapchat',
			'socialbro',
			'softonic',
			'songkick',
			'sonicbids',
			'sony',
			'soulcycle',
			'soundcloud',
			'spoken',
			'spotify',
			'sprint',
			'sprout-social',
			'square-cash',
			'squarespace',
			'stack-exchange',
			'stackoverflow',
			'staples',
			'starbucks',
			'state-farm',
			'status-chart',
			'steam',
			'sterling-hotels',
			'stockton-university',
			'storyful',
			'strava',
			'streamable',
			'stripe',
			'stubhub',
			'studyblue',
			'stumbleupon',
			'subway',
			'sugarcrm',
			'suntrust',
			'supershuttle',
			'swarm',
			't-mobile',
			'tagstr',
			'taiga',
			'target',
			'technorati',
			'ted',
			'telegram',
			'tvtag',
			'temple',
			'tesco',
			'tesla',
			'texas-am-university',
			'texas-tech-university',
			'the-audience-awards',
			'the-college-of-new-jersey',
			'the-next-web',
			'the-ritz-carlton',
			'the-sun',
			'the-sun-goals',
			'the-sun-perks',
			'the-times',
			'thomson-reuters',
			'tivo',
			'totaljobs',
			'treehouse',
			'trello',
			'tripadvisor',
			'trulia',
			'tumblr',
			'tunngle',
			'turbotax',
			'twentythree',
			'twitch-tv',
			'twitter',
			'typekit',
			'typepad',
			'typo3',
			'uber',
			'ubuntu',
			'uc-berkeley',
			'ucsf',
			'united-way',
			'unity',
			'universitat-hamburg',
			'university-of-alberta',
			'university-of-arizona',
			'university-of-cambridge',
			'university-of-florida',
			'university-of-illinois-urbana-champaign',
			'university-of-kentucky',
			'university-of-michigan',
			'university-of-oregon',
			'university-of-texas',
			'university-of-victoria',
			'university-of-washington',
			'university-of-waterloo',
			'university-of-wisconsin-milwaukee',
			'univision',
			'ups',
			'usps',
			'ustream',
			'verizon',
			'viadeo',
			'viber',
			'vidme',
			'viki',
			'vimeo',
			'vine',
			'virb',
			'virgin-media',
			'virgin-money',
			'visa',
			'visualcv',
			'visually',
			'vkontakte',
			'vodafone',
			'volvo',
			'vue-js',
			'walgreens',
			'walmart',
			'warby-parker',
			'wave-apps',
			'webzunder',
			'wechat',
			'wendys',
			'western-digital',
			'whatsapp',
			'whoosnap-designer',
			'wikipedia',
			'windows',
			'windows-phone',
			'woocommerce',
			'wooga',
			'wordpress',
			'wordpress-com',
			'world-organisation-of-the-scout-movement-wosm',
			'worldline',
			'wufoo',
			'wunderlist',
			'wwe',
			'xbox',
			'xing',
			'xy-gaming',
			'yahoo',
			'yandex',
			'yellow-pages',
			'yelp',
			'yii-framework',
			'yo',
			'youtube',
			'zapier',
			'zendesk',
			'zerply',
			'zillow',
			'zomato',
			'zopim',
		]);

		/*
		 * @private
		 */
		this._SORT_BY_OPTIONS = Object.freeze({
			N_HITS: 1,
			DATA_SUM_SENT: 2,
			DATA_SUM_RECVD: 3, // @todo : add more possible sorting options
		});

		/*
		 * @private
		 */
		this._GROUP_BY_OPTIONS = Object.freeze({
			HOSTNAME_COUNT: 1,
			DUR_SUM: 2,
			DATA_SUM: 3, // @todo : add more possible grouping options
		});

		/*
		 * @private
		 */
		this._FILTER_BY_OPTIONS = Object.freeze({
			SRC_MAC: 1,
			DATETIME: 2,
			HOSTNAME: 3,
			SENT: 4,
			RECVD: 5, // @todo : add more possible sorting options
		});

		/*
		 * @private
		 */
		this._CHART_COLORS = Object.freeze({ // from pallete https://www.materialui.co/colors
			lightness300: {
				red: '#e57373',
				pink: '#f06292',
				purple: '#ba68c8',
				deepPurple: '#9575cd',
				indigo: '#7986cb',
				blue: '#64b5f6',
				lightBlue: '#4fc3f7',
				cyan: '#4dd0e1',
				teal: '#4db6ac',
				green: '#81c784',
				lightGreen: '#aed581',
				lime: '#dce775',
				yellow: '#fff176',
				amber: '#ffd54f',
				orange: '#ffb74d',
				deepOrange: '#ff8a65',
				brown: '#a1887f',
				grey: '#e0e0e0',
				blueGrey: '#90a4ae',
			},
			lightness400: {
				red: '#ef5350',
				pink: '#ec407a',
				purple: '#ab47bc',
				deepPurple: '#7e57c2',
				indigo: '#5c6bC0',
				blue: '#42a5f5',
				lightBlue: '#29b6f6',
				cyan: '#26c6da',
				teal: '#26a69a',
				green: '#66bb6a',
				lightGreen: '#9ccc65',
				lime: '#d4e157',
				yellow: '#ffee58',
				amber: '#ffca28',
				orange: '#ffa726',
				deepOrange: '#ff7043',
				brown: '#8d6e63',
				grey: '#bdbdbd',
				blueGrey: '#78909c',
			},
		});

		/*
		 * @private
		 */
		this._settings = {
			'eventSource': {
				'baseUrl': null,
				'completeUrl': null,
				'dumpIntoStatistics': false,
				'query': { // all possible options
					'start': 0,
					'end': 0,
					'mac': [],
					'hostname': [],
					'aggregate': false,
				},
			},
			'lang': 'en',
			'strLen': 60, // max string length for table cells
			'groupBy': this.GROUP_BY_OPTIONS['HOSTNAME_COUNT'],
			'sortBy': this.SORT_BY_OPTIONS['N_HITS'],
			'filterBy': null, // @refactor later
			'itemsTextContent': ' Items',
			'textareaSeparator': ', ',
			'maxInterval': 0,
			'maxDur': 0,
			'maxSent': 0,
			'maxRecvd': 0,
			'postRenderImprove': {
				'hostname': {
					'openLink': true,
					'newWindow': true,
					'schemesPriority': [ // just name, without '://'
						'https',
						'http',
					],
					'linkTextContent': '\u29C9', // TWO JOINED SQUARES ⧉
					'linkTitle': 'Open this hostname as URL in new window',
				},
				'srcMAC': {
					'enable': true,
					'className': 'clickable',
					'add': {
						'linkTextContent': '\u2442', // OCR FORK
						'linkTitle': 'Filter by this MAC address',
					},
					'remove':{
						'linkTextContent': '\u2443', // OCR INVERTED FORK
						'linkTitle': 'Remove filter by this MAC address',
					},
				},
			},
			'resultsTable': document.getElementById('pakon-results-table'),
			'statisticsElement': document.getElementById('pakon-results-statistics'),
			'controlForm': {
				'timeLimitationInputs': {
					'dateFrom': document.getElementById('date-from'),
					'dateTo': document.getElementById('date-to'),
					'timeFrom': document.getElementById('time-from'),
					'timeTo': document.getElementById('time-to'),
				},
				'aggregate': document.getElementById('aggregate'),
				'hostnameFilter': document.getElementById('hostname-filter'),
				'srcMACFilter': document.getElementById('srcMAC-filter'),
			},
			'timeLimitation': {
				'from': null,
				'to': null,
				'suggestedInterval': 90, // in days
			},
			'tableHeader': {
				10: ['id', 'n ID'], // id
				20: ['datetime', 'Datetime'], // date and time the hostname was accessed
				30: ['dur', 'Duration', 'time'], // duration for which the given hostname was accessed
				40: ['srcMAC', 'Source MAC'], // source MAC address or the MAC address of the device, which was used to access the hostname
				50: ['hostname', 'Hostname'], // hostname
				60: ['dstPort', 'Destination port'], // destination port (for well-known services this is shown as service name)
				70: ['proto', 'Application level protocol'], // application level protocol as detected by Suricata
				80: ['sent', 'Size of data Sent', 'number'], // size of data sent
				90: ['recvd', 'Size of data Received', 'number'], // size of data received
			},
			'statisticsData': {
				'nHits': 0,
				'nAggregatedHits': 0,
				'protoElement': document.getElementById('proto'),
				'graphs': {
					'type': 'pie',
					'maxItems': 6,
					'mostFrequentTextContent': ' most frequent',
					'createFor': {
						'srcMAC': {
							'type': 'frequency',
							'dataStore': null,
						},
						'hostname': {
							'type': 'frequency',
							'dataStore': null,
						},
						'proto': {
							'type': 'frequency',
							'dataStore': null,
						},
						'dstPort': {
							'type': 'frequency',
							'dataStore': null,
						},
						/* @todo
						'recvd': {
							'type': 'frequency',
							'dataStore': null,
						},
						*/
					},
					'knownColors': {
						'tls': 'lightGreen',
						'http': 'red',
						'https': 'green',
					},
				},
			},
		};

		/*
		 * @private
		 */
		this._dataStructure = {};

		/*
		 * @private
		 */
		this._virtualTable = null;

		/*
		 * @private
		 */
		this._virtualStatistics = null;

		Date.prototype.toDateInput = function() {
			return new Date(this.getTime() - (this.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
		};

		Date.prototype.toTimeInput = function() {
			return new Date(this.getTime() - (this.getTimezoneOffset() * 60000)).toISOString().split('T')[1].substr(0, 5);
		};

		String.prototype.hashCode = function() { // collision probability is 31^11
			let hash = 0;
			for (let i = 0; i < this.length; i++) {
				const character = this.charCodeAt(i);
				hash = ((hash<<5)-hash)+character;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;
		};

		String.prototype.capitalize = function() {
			return this[0].toUpperCase() + this.slice(1);
		}

		String.prototype.truncate = function(maxLen = 1, append = '\u2026', clever = false) { // \u2026 is HORIZONTAL ELLIPSIS ( … )
			if (this.length > maxLen) {
				const regular = new RegExp('^.{1,' + maxLen + '}(?=[\\s !-\\/:-@\\[-`\\{-¿])', 'u'); // eats a lot of resources :(
				let parts = [];
				maxLen = maxLen - append.length;
				if (maxLen < 1) {
					return append;
				} else if (clever && (parts = this.match(regular))) {
					if (parts) {
						return parts[0] + append;
					}
				} else {
					return this.substring(0, maxLen) + append;
				}
			}
			return this;
		};

		String.prototype.hms2Secs = function(lang = 'cs') {
			const parts = this.replace('.', ':').split(':');
			const hNumber = parseInt(parts[0]) * 60 * 60;
			const mNumber = parseInt(parts[1]) * 60;
			const sNumber = parseInt(parts[2]);
			return hNumber + mNumber + sNumber;
		};

		String.prototype.fromLocaleString = function() {
			// String.split() and String.join() is faster than single regexp
			return parseInt(this.split('\u00A0').join('')); // NO-BREAK SPACE
		};

		Number.prototype.seconds2Hms = function(lang = 'cs') {
			const HOURS_SEPARATOR = (lang === 'cs' ? '.' : ':');
			const MINUTES_SEPARATOR = ':';

			const h = Math.floor(this / 3600);
			const m = Math.floor(this % 3600 / 60);
			const s = Math.floor(this % 3600 % 60);
			const hString = (h > 0) ? (h <= 9 ? '0' + h : h) : '00';
			const mString = (m > 0) ? (m <= 9 ? '0' + m : m) : '00';
			const sString = (s > 0) ? (s <= 9 ? '0' + s : s) : '00';
			return hString + HOURS_SEPARATOR + mString + MINUTES_SEPARATOR + sString;
		};

		Object.defineProperty(Array.prototype, 'frequencyUnique', { // cannot use simple: Array.prototype.frequencyUnique = func…
			enumerable: false,
			value: function frequencyUnique() {
				const a = [];
				const o = {};

				const arrLen = this.length;
				let item;
				for (let i = 0; i < arrLen; i++) {
					item = this[i];
					if (!item) {
						continue;
					}
					if (o[item] === 'undefined') {
						o[item] = 1;
					} else {
						++o[item];
					}
				}
				for (const i in o) {
					a[a.length] = i;
				}
				return a.sort(function(a, b) {
					return o[b]-o[a];
				});
			}
		});

	}

	/*
	 * Set settings for whole class
	 * @param {Object} variables
	 * @returns {Boolean}
	 */
	//set settings(variables = {})
	set settings(variables)
	{
		level1:
		for (const i in variables) {
			if (typeof variables[i] === 'object'
				&& variables[i].constructor.name === 'Object'
				&& typeof this._settings[i] !== 'undefined'
			) {
				level2:
				for (const ii in variables[i]) {
					if (typeof variables[i][ii] === 'object' && variables[i][ii].constructor.name === 'Object') {
						level3:
						for (const iii in variables[i][ii]) {
							if (typeof variables[i][ii][iii] === 'object' && variables[i][ii][iii].constructor.name === 'Object') {
								delete variables[i][ii][iii];
							}
						}
						Object.assign(this._settings[i][ii], variables[i][ii]);
						delete variables[i][ii];
					}
				}
				Object.assign(this._settings[i], variables[i]);
				delete variables[i];
			}
		}
		Object.assign(this._settings, variables);

		return true;
	}

	/*
	 * Get settings for whole class
	 * @returns {Object}
	 */
	get settings()
	{
		return this._settings;
	}


	//set statistics(inObj = {})
	set statistics(inObj)
	{
		this.inObj = inObj;
	}

	/*
	 * Get statistics data
	 * @returns {Object}
	 */
	get statistics()
	{
		return this._statistics;
	}

	/*
	 * Get GROUP_BY_OPTIONS
	 * @returns {Object}
	 */
	get GROUP_BY_OPTIONS()
	{
		return this._GROUP_BY_OPTIONS;
	}

	/*
	 * Get SORT_BY_OPTIONS
	 * @returns {Object}
	 */
	get SORT_BY_OPTIONS()
	{
		return this._SORT_BY_OPTIONS;
	}

	/*
	 * Get FILTER_BY_OPTIONS
	 * @returns {Object}
	 */
	get FILTER_BY_OPTIONS()
	{
		return this._FILTER_BY_OPTIONS;
	}

	get CHART_COLORS()
	{
		return this._CHART_COLORS;
	}

	//set dataStructure(inObj = {})
	set dataStructure(inObj)
	{
		this._dataStructure = inObj;
	}

	/*
	 * Get statistics data
	 * @returns {Object}
	 */
	get dataStructure()
	{
		return this._dataStructure;
	}

	//set timeLimitation(input = {from: null, to: Date.now()})
	set timeLimitation(input)
	{
		this.settings.timeLimitation.from = input.from;
		this.settings.timeLimitation.to = input.to;
	}

	//set virtualTable(table = null)
	set virtualTable(table)
	{
		this._virtualTable = table;
	}

	get virtualTable()
	{
		return this._virtualTable;
	}

	//set virtualStatistics(element = null)
	set virtualStatistics(element)
	{
		this._virtualStatistics = element;
	}

	get virtualStatistics()
	{
		return this._virtualStatistics;
	}


	createSourceUrl()
	{
		const query = this.settings.eventSource.query;

		if (!query.start) {
			query.start = this.settings.timeLimitation.from / 1000; // to unix timestamp
		}

		if (!query.end) {
			query.end = this.settings.timeLimitation.to / 1000; // to unix timestamp
		}

		if (new Date() < this.settings.timeLimitation.to) {
			delete query.end;
		}

		if ( !Array.isArray(query.mac) || !query.mac.length ) {
			delete query.mac;
		}

		if ( !Array.isArray(query.hostname) || !query.hostname.length ) {
			delete query.hostname;
		}

		if (!query.aggregate) {
			delete query.aggregate;
		}

		const url = this.settings.eventSource.baseUrl;
		url.searchParams.set('action', 'eventsource');
		url.searchParams.set('query', JSON.stringify(query));

		this.settings.eventSource.completeUrl = url;

		if (this.settings.eventSource.dumpIntoStatistics) {
			const container = document.createElement('div');

			const urlDumpRoot = document.createElement('div');
			urlDumpRoot.id = 'url-dump';
			urlDumpRoot.appendChild(document.createTextNode('query before encoding : ' + JSON.stringify(query)));
			urlDumpRoot.appendChild(document.createElement('br'));
			urlDumpRoot.appendChild(document.createTextNode('url : ' + url));
			container.appendChild(urlDumpRoot);

			this.virtualStatistics = container;
			this.flush();
		}

		return true;
	}


	eventMessage(event)
	{
		const messageArray = JSON.parse(event.data);
		this.dataStructure[messageArray.join()] = messageArray;
/*
		const evtSource = new EventSource(ESUrl + '&timeout=' + Math.round(+new Date()/1000));
		evtSource.onmessage = this.eventMessage; // regenerate
*/
setTimeout(() => { ////////////////
		event.target.close();
}, 3000); ////////////////////
	}


	/*
	 * @todo : description
	 * @returns {Boolean}
	 */
	loadFreshHits()
	{
		this.createSourceUrl(); // set into settings

		if (!this.dataStructure) {
			this.dataStructure = []; // @todo : inicialize real dataStructure (this is dummy data)
		}

		const evtSource = new EventSource(this.settings.eventSource.completeUrl);
		evtSource.onmessage = this.eventMessage.bind(this);
	}

	/*
	 * 
	 * @todo : description
	 * @returns {Boolean}
	 */
	storeHitsToIndexedDB()
	{

		const openReq = this.idb.open('PakonLive', 1.2);

		openReq.onupgradeneeded = function() {
			const db = openReq.result;
			const store = db.createObjectStore('hits', {keyPath: 'id', unique: true, autoIncrement: false});
			store.createIndex('hostname', 'hostname', {unique: false});
			store.createIndex('srcMAC', 'srcMAC', {unique: false});
			store.createIndex('dstPort', 'dstPort', {unique: false});
			store.createIndex('proto', 'proto', {unique: false});
			store.createIndex('recvd', 'recvd', {unique: false});
		};

		openReq.onsuccess = function() {
			const db = openReq.result;
			const tx = db.transaction("hits", "readwrite");
			const store = tx.objectStore("hits"); 
			store.index("hostname");
			store.index("srcMAC");
			store.index('dstPort');
			store.index('recvd');

			for (const i in this.dataStructure) {
				store.put({
					id: this.dataStructure[i].join('').hashCode().toString(36), // id
					datetime: this.dataStructure[i][0], // date and time the hostname was accessed
					dur: this.dataStructure[i][1], // duration for which the given hostname was accessed
					srcMAC: this.dataStructure[i][2], // source MAC address or the MAC address of the device, which was used to access the hostname
					hostname: this.dataStructure[i][3], // hostname
					dstPort: this.dataStructure[i][4], // destination port (for well-known services this is shown as service name)
					proto: this.dataStructure[i][5], // application level protocol as detected by Suricata
					sent: this.dataStructure[i][6], // size of data sent
					recvd: this.dataStructure[i][7], // size of data received
				});
			}

			tx.oncomplete = function() {
				db.close();
			};
		}.bind(this);

	}


	combinatedSorting(inArray = [], by = this.settings.sortBy)
	{
		if (by = this.SORT_BY_OPTIONS['N_HITS']) { // sort by number of values
			var sortedUniqueHostnameKeys = Object.keys(inArray)
				.map(function(k) { return { key: k, value: inArray[k] }; })
				.sort(function(a, b) { return b.value.length - a.value.length; });
		} else if (false) { // @todo : another sorting method (like service name, date, …) not implemented yet
			var sortedUniqueHostnameKeys = '…'; // @todo
		} // some sorting methods cannot be done here and must be done after aggregation
		return sortedUniqueHostnameKeys;
	}


	groupSortData(inArray = [], group = this.settings.grupBy, sort = this.settings.sortBy)
	{
		const sortedUniqueHostnameKeys = this.combinatedSorting(inArray, sort);
		const summedUniqueHostnameKeys = [];
		let order = 0;
		hostnamesLoop:
		for (const i in sortedUniqueHostnameKeys) {
			const rowData = sortedUniqueHostnameKeys[i];
			const sum = { // inicialize with empty values
				'id': [],
				'datetime': {
					'from': null, // Date or null
					'to': null, // Date or null
					'interval': 0, // in seconds
				},
				'dur': 0,
				'srcMAC': [],
				'dstPort': [],
				'proto': [],
				'sent': 0,
				'recvd': 0,
			};
			sumDataLoop:
			for (const ii in rowData.value) {
				const currentLoopDate = new Date(rowData.value[ii].datetime);

				sum['id'].push(rowData.value[ii].id);
				if (!sum['datetime'].from || sum['datetime'].from > currentLoopDate) {
					sum['datetime'].from = currentLoopDate;
				}
				if (!sum['datetime'].to || sum['datetime'].to < currentLoopDate) {
					sum['datetime'].to = currentLoopDate;
				}
				sum['dur'] += parseInt(rowData.value[ii].dur);
				sum['srcMAC'].push(rowData.value[ii].srcMAC);
				//delete rowData.value[ii].hostname;
				sum['dstPort'].push(rowData.value[ii].dstPort);
				sum['proto'].push(rowData.value[ii].proto);
				sum['sent'] += parseInt(rowData.value[ii].sent);
				sum['recvd'] += parseInt(rowData.value[ii].recvd);
			}
			sum['datetime'].interval = ((sum['datetime'].to.getTime() - sum['datetime'].from.getTime()) / 1000);
			if (this.settings.maxInterval < sum['datetime'].interval) {
				this.settings.maxInterval = sum['datetime'].interval;
			}
			summedUniqueHostnameKeys[sortedUniqueHostnameKeys[i].key] = {
				'order': order++, // prevent loosing original information
				'hidden': false, // for later use by filtering
				'ids': sum['id'], // @todo : can I make plural from id?
				'length': sortedUniqueHostnameKeys[i].value.length, // counting now for performance reasons
				'datetime': sum['datetime'],
				'dur': sum['dur'].seconds2Hms(),
				'srcMAC': sum['srcMAC'].frequencyUnique().join(', ').truncate(this.settings.strLen),
				'dstPort': sum['dstPort'].frequencyUnique().join(', ').truncate(this.settings.strLen),
				'proto': sum['proto'].frequencyUnique().join(', ').truncate(this.settings.strLen),
				'sent': sum['sent'].toLocaleString(),
				'recvd': sum['recvd'].toLocaleString(),
			}
		}
		return summedUniqueHostnameKeys;
	}


	async countHits()
	{
		return new Promise((resolve) => {
			const openReq = this.idb.open('PakonLive', 1.2);
			openReq.onsuccess = function() {
				const db = openReq.result;
				const transaction = db.transaction('hits', 'readonly');
				const objectStore = transaction.objectStore('hits');
				const countRequest = objectStore.count();
				countRequest.onsuccess = function() {
					resolve(countRequest.result);
				};
				transaction.oncomplete = function (event) {
					db.close();
				};
			}
		});
	}


	async mostUsedHostnames()
	{
		return new Promise((resolve) => {
			const openReq = this.idb.open('PakonLive', 1.2);

			openReq.onsuccess = function() {
				const uniqueHostnameKeys = [];
				const db = openReq.result;
				const transaction = db.transaction('hits', 'readonly');
				const objectStore = transaction.objectStore('hits');
				objectStore.openCursor().onsuccess = function(event) { // alternative and easier .getAll() is badly supported in browsers yet
					const cursor = event.target.result;
					if (cursor) {
						const clearedValues = cursor.value;
						uniqueHostnameKeys[cursor.value.hostname] = uniqueHostnameKeys[cursor.value.hostname] || []; // initialize or add
						uniqueHostnameKeys[cursor.value.hostname].push(clearedValues); // initialize or add
						cursor.continue();
					}
				};
				transaction.oncomplete = function (event) {
					resolve(this.groupSortData(uniqueHostnameKeys));
					db.close();
				}.bind(this);
			}.bind(this);
		});
	}


	async groupData()
	{
		return new Promise((resolve) => {
			if (this.settings.groupBy === this.GROUP_BY_OPTIONS['HOSTNAME_COUNT']) {
				this.mostUsedHostnames().then((result) => {
					this.dataStructure = result;
					this.dataStructure.length = Object.keys(result).length; // counting and storing length now for performance reasons
					resolve(result);
				});
			} else if (false) { // @todo : add more grouping methods
				// …
			}
		});
	}


	async getDataFromColumns()
	{
		return new Promise((resolve) => {
			const list = this.settings.statisticsData.graphs.createFor;
			const lastKey = Object.keys(list)[Object.keys(list).length - 1];
			for (const i in list) { // @todo : refactor… remove depricated PROTO variable names
				const openReq = this.idb.open('PakonLive', 1.2);
				openReq.onsuccess = function() {
					const db = openReq.result;
					const transaction = db.transaction('hits', 'readonly');
					const objectStore = transaction.objectStore('hits');
					if (true) { // @todo
						const index = objectStore.index(i);
						const openCursorRequest = index.openCursor(null, 'next');
						const protos = [];
						openCursorRequest.onsuccess = function (event) {
							const cursor = event.target.result;
							if (cursor) {
								protos[cursor.value[i]] = protos[cursor.value[i]] || []; // initialize or add
								protos[cursor.value[i]].push(cursor.primaryKey); // initialize or add
								cursor.continue();
							}
						};
						transaction.oncomplete = function () {
							const sortedProtos = this.combinatedSorting(protos, 1);
							const niceObject = [];
							for (const i in sortedProtos) {
								if (i >= this.settings.statisticsData.graphs.maxItems) {
									break;
								}
								niceObject[sortedProtos[i].key] = sortedProtos[i].value;
							}
							list[i].dataStore = niceObject;
							if (i === lastKey) {
								resolve(true);
							}
							db.close();
						}.bind(this);
					} else if (false) {
						
					}
				}.bind(this);
			}
		});
	}


	async createFullTable() {
		return new Promise((resolve) => {
			const resultsTable = this.settings.resultsTable;
			const virtualTable = document.createElement('table');
			let tHead = null;
			if (resultsTable) {
				tHead = resultsTable.tHead;
				while (resultsTable.firstChild) {
					resultsTable.removeChild(resultsTable.firstChild);
				}
			}
			if (tHead) {
				virtualTable.appendChild(tHead);
			} else {
				virtualTable.appendChild(this.createTHead());
			}
			const tbody = document.createElement('tbody');
			// @todo : sort this.settings.tableHeader by item keys
			rowsLoop:
			for (const i in this.dataStructure) {
				if (!this.dataStructure[i].hidden) {
					const row = document.createElement('tr');
					cellsLoop:
					for (const ii in this.settings.tableHeader) { // tbody works aginst thead
						const cell = document.createElement('td');
						if (this.settings.tableHeader[ii][0] === 'id') { // it's already time for switch() ?
							console.log(this.dataStructure[i]['ids']);
							if (this.dataStructure[i]['ids'].length < 9) {
								cell.title = '[' + this.dataStructure[i]['ids'].join(', ').truncate(this.settings.strLen) + ']';
							}
							const idText = this.dataStructure[i]['ids'].length + '\u00A0\u00D7'; // NO-BREAK SPACE and MULTIPLICATION SIGN
							cell.appendChild(document.createTextNode(idText));
						} else if(this.settings.tableHeader[ii][0] === 'datetime') {
							const interval = this.dataStructure[i][this.settings.tableHeader[ii][0]];
							const lang = this.settings.lang;
							let intString = '';
							if (interval.from.toLocaleDateString(lang) === interval.to.toLocaleDateString(lang)) {
								intString += interval.to.toLocaleDateString(lang)
								+ ' (' + interval.from.toLocaleTimeString(lang)
								+ ' - ';
							} else {
								intString += interval.from.toLocaleDateString(lang)
								+ ' ' + interval.from.toLocaleTimeString(lang)
								+ ' - ' + interval.to.toLocaleDateString(lang)
								+ ' ';
							}
							intString += interval.to.toLocaleTimeString(lang);
							if (interval.from.toLocaleDateString(lang) === interval.to.toLocaleDateString(lang)) {
								intString += ')';
							}
							cell.setAttribute('data-percentage', Math.round(( 100 / this.settings.maxInterval ) * interval.interval) );
							cell.appendChild(document.createTextNode(intString));
						} else if(this.settings.tableHeader[ii][0] === 'hostname') {
							cell.appendChild(document.createTextNode(i));
						} else {
							cell.appendChild(document.createTextNode(this.dataStructure[i][this.settings.tableHeader[ii][0]]));
						}
						row.appendChild(cell);
					}
					tbody.appendChild(row);
				}
			}
			virtualTable.appendChild(tbody);
			this.virtualTable = virtualTable;

			resolve(true);
		});
	}


	async createFullStatistic()
	{
		return new Promise((resolve) => {
			const container = document.createElement('div');

			this.countHits().then((result) => {
				this.settings.statisticsData.nHits = result;
			});

			this.settings.statisticsData.nAggregatedHits = this.dataStructure.length;

			this.getDataFromColumns().then(() => {
				const list = this.settings.statisticsData.graphs.createFor;
				const lastKey = Object.keys(list)[Object.keys(list).length - 1];
				for (const i in list) { // @todo : refactor… better names than protoXYZ (reference to proto column)

					const protoRoot = document.createElement('div');
					protoRoot.id = i;
					protoRoot.className = 'chart';

					const protoList = document.createElement('ol');

					const singleItem = list[i].dataStore;
					for (const i in singleItem) {
						const percentage = Math.round( (100 / this.settings.statisticsData.nHits ) * singleItem[i].length );
						const protoItem = document.createElement('li');
						protoItem.style.width = percentage + '%';
						protoItem.appendChild(document.createTextNode(i + ': '));
						const protoVal = document.createElement('span');
						protoVal.appendChild(document.createTextNode(singleItem[i].length + this.settings.itemsTextContent));
						protoItem.appendChild(protoVal);
						const protoPercentage = document.createElement('span');
						protoPercentage.appendChild(document.createTextNode(' (' + percentage + '\u00A0%)')); // NO-BREAK SPACE
						protoItem.appendChild(protoPercentage);
						protoList.appendChild(protoItem);
					}

					protoRoot.appendChild(document.createTextNode(this.getColumnNameBy(i)));
					protoRoot.appendChild(protoList);

					container.appendChild(protoRoot);

					if (i === lastKey) {
						resolve(true);
					}
				}
			});

			if (this.virtualStatistics) {
				const nodes = this.virtualStatistics;
				while (nodes.firstChild) { // node is deleted automatically after append
					container.appendChild(nodes.firstChild);
				}
			}
			this.virtualStatistics = container;
		});
	}


	async fillTimeLimitationForm() // from this.settings.timeLimitation
	{
		return new Promise((resolve) => {
			const inp = this.settings.controlForm.timeLimitationInputs;

			if (inp.dateFrom && inp.timeFrom && this.settings.timeLimitation.from) {
				inp.dateFrom.value = this.settings.timeLimitation.from.toDateInput();
				inp.timeFrom.value = this.settings.timeLimitation.from.toTimeInput();
			}
			if (inp.dateTo && inp.timeTo && this.settings.timeLimitation.to) {
				inp.dateTo.value = this.settings.timeLimitation.to.toDateInput();
				inp.timeTo.value = this.settings.timeLimitation.to.toTimeInput();
			}

			resolve(true);
		});
	}


	async setSyncWorkTo(status = false)
	{
		return new Promise((resolve) => {
			const formControls = this.settings.controlForm;

			for (const i in formControls) {
				if (status) {
					if (formControls[i] && formControls[i].nodeType === Node.ELEMENT_NODE) {
						formControls[i].disabled = true;
					} else {
						for (const ii in formControls[i]) {
							if (formControls[i][ii]) {
								formControls[i][ii].disabled = true;
							}
						}
					}
				} else {
					if (formControls[i] && formControls[i].nodeType === Node.ELEMENT_NODE) {
						formControls[i].disabled = false;
					} else {
						for (const ii in formControls[i]) {
							if (formControls[i][ii]) {
								formControls[i][ii].disabled = false;
							}
						}
					}
				}
			}

			// @todo : place some spinner ?!?!?

			if (status) {
				setTimeout(() => {
					resolve(true);
				}, 1); // 1ms winting force browser to redraw website
			} else {
				resolve(true);
			}

		});
	}


	percentageFromRaw(currentCell = null, suffixes = [])
	{
		for (const i in suffixes) {
			if (currentCell.getAttribute('data-raw-content-' + suffixes[i])) {
				currentCell.setAttribute('data-percentage',
					Math.round(( 100 / this.settings['max' + suffixes[i].capitalize()] ) * currentCell.getAttribute('data-raw-content-' + suffixes[i]))
				);
				currentCell.removeAttribute('data-raw-content-' + suffixes[i]);
				break; // one cell can have just one data-raw-…
			}
		}
		return true;
	}


	improveTableUX()
	{
		this.getMaxDur(); // sets it into settings
		this.getMaxDataFrom('sent'); // sets it into settings
		this.getMaxDataFrom('recvd'); // sets it into settings

		const hostnamePosition = this.getColumnPositionBy('hostname');
		const dstPortPosition = this.getColumnPositionBy('dstPort');
		const srcMACPosition = this.getColumnPositionBy('srcMAC');

		const rows = this.settings.resultsTable.tBodies[0].rows;
		rowsLoop:
		for (let i = 0; i < rows.length; i++) {
			if (hostnamePosition) {
				const part = rows[i].children[hostnamePosition].textContent.split('.');
				const index = Math.max(
					this.brandColors.indexOf(part[0]),
					this.brandColors.indexOf('www.' + part[0]),
					this.brandColors.indexOf(part[1]), // example: from 'api.soundclound.com' take 'soundcloud' part
					(part[2]) ? this.brandColors.indexOf(part[2]) : -1,
					(part[3]) ? this.brandColors.indexOf(part[3]) : -1,
				);
				if (index !== -1) {
					const square = document.createElement('span');
					square.classList.add('bc-background-' + this.brandColors[index]);
					rows[i].children[hostnamePosition].appendChild(square);
				}
				if (this.settings.postRenderImprove.hostname.openLink) {
					const link = document.createElement('a');
					let currentScheme = null;
					const possibleSchemes = rows[i].children[dstPortPosition].textContent.split(', ');
					const schemesPriority = this.settings.postRenderImprove.hostname.schemesPriority;
					for (const i in schemesPriority) {
						if (possibleSchemes.includes(schemesPriority[i])) {
							currentScheme = schemesPriority[i];
							break;
						}
					}
					if (currentScheme) {
						currentScheme += '://';
					} else {
						currentScheme = '//'; // protocol relative
					}
					link.href = currentScheme + rows[i].children[hostnamePosition].textContent;
					link.title = this.settings.postRenderImprove.hostname.linkTitle;
					if (this.settings.postRenderImprove.hostname.newWindow) {
						link.onclick = function() {
							return !window.open(this.href);
						};
					}
					link.appendChild(document.createTextNode(this.settings.postRenderImprove.hostname.linkTextContent));
					rows[i].children[hostnamePosition].appendChild(document.createTextNode('\u00A0')); // NO-BREAK SPACE
					rows[i].children[hostnamePosition].appendChild(link);
				}
			}
			if (this.settings.postRenderImprove.srcMAC.enable && srcMACPosition) {
				const code = document.createElement('code');
				code.appendChild(document.createTextNode(rows[i].children[srcMACPosition].textContent));
				rows[i].children[srcMACPosition].textContent = '';

				const link = document.createElement('span');
				link.className = this.settings.postRenderImprove.srcMAC.className;
				link.onclick = function() {
					let macs = this.settings.eventSource.query.mac = this.readFromTextarea(this.settings.controlForm.srcMACFilter);
					const currentMAC = arguments[0].target.parentNode.firstElementChild.textContent;
					if (Array.isArray(macs)) {
						if (macs.includes(currentMAC)) {
							link.textContent = this.settings.postRenderImprove.srcMAC.remove.linkTextContent;
							link.title = this.settings.postRenderImprove.srcMAC.remove.linkTitle;
							if (arguments[0].isTrusted) {
								macs = this.settings.eventSource.query.mac = macs.filter(item => item !== currentMAC); // removes current from array
								this.settings.controlForm.srcMACFilter.value = macs.join(this.settings.textareaSeparator);
								this.settings.controlForm.srcMACFilter.dispatchEvent(new Event('change'));
							}
						} else {
							link.textContent = this.settings.postRenderImprove.srcMAC.add.linkTextContent;
							link.title = this.settings.postRenderImprove.srcMAC.add.linkTitle;
							if (arguments[0].isTrusted) {
								macs.push(currentMAC); // I'm watching you
								this.settings.controlForm.srcMACFilter.value = macs.join(this.settings.textareaSeparator);
								this.settings.controlForm.srcMACFilter.dispatchEvent(new Event('change'));
							}
						}
					}
				}.bind(this);

				rows[i].children[srcMACPosition].appendChild(code);
				rows[i].children[srcMACPosition].appendChild(document.createTextNode('\u00A0')); // NO-BREAK SPACE
				rows[i].children[srcMACPosition].appendChild(link);
				link.dispatchEvent(new Event('click'));
			}
			const cells = rows[i].children;
			cellsLoop:
			for (let i = 0; i < cells.length; i++) {
				this.percentageFromRaw(cells[i], ['dur', 'sent', 'recvd']); // faster than autodetection from 'data-raw-content-' attribute prefix

				if (cells[i].getAttribute('data-percentage')) {
					if (cells[i].getAttribute('data-percentage') > 0) {
						cells[i].style.backgroundSize = cells[i].getAttribute('data-percentage') + '% 0.2em';
					}
					cells[i].removeAttribute('data-percentage');
				}
			}
		}

		return true;
	}


	createColorsFrom(labels = [])
	{
		if (labels.length === 0) {
			return false;
		}

		const color = this.CHART_COLORS.lightness300;
		const colors = [];
		const base = (Object.keys(color).length < 36) ? Object.keys(color).length : 36;
		for (const i in labels) {
			const labelParts = labels[i].split(': ');
			const knownColors = this.settings.statisticsData.graphs.knownColors;
			let currentColor;
			if (Object.keys(knownColors).includes(labelParts[0])) { // known colors
				currentColor = color[knownColors[labelParts[0]]];
			} else { // pseudo-random color from label name
				const labelHash = labels[i].hashCode().toString(base);
				let firstInDecimal = (labelHash[0] === '-') ? parseInt(labelHash[1], base) : parseInt(labelHash[0], base);
				currentColor = color[Object.keys(color)[firstInDecimal]];
				if (labels.length < base) {
					while (colors.includes(currentColor)) {
						const n = (firstInDecimal < base) ? firstInDecimal++ : firstInDecimal--;
						currentColor = color[Object.keys(color)[n]];
					}
				} else {
					if (colors[i] === colors[i-1]) {
						const n = (firstInDecimal < base) ? firstInDecimal++ : firstInDecimal--;
						currentColor = color[Object.keys(color)[n]];
					}
				}
			}
			colors.push(currentColor);
		}

		return colors;
	}


	makeFullGraphs()
	{
		if (typeof Chart === 'undefined') { // Chart.js library is missing
			return false;
		}
		if (!this.settings.statisticsElement) { // nothing to do
			return true;
		}
		const CANVAS_TAG_NAME = 'CANVAS';
		const statisticParts = this.settings.statisticsElement.children; // real already-drawed element
		for (let i = 0; i < statisticParts.length; i++) {
			if (statisticParts[i].classList.contains('chart')) {
				const labels = [];
				const data = [];
				const items = statisticParts[i].firstElementChild.children;
				for (let i = 0; i < items.length; i++) {
					labels.push(items[i].childNodes[0].textContent + items[i].childNodes[2].textContent);
					data.push(items[i].childNodes[1].textContent.replace(this.settings.itemsTextContent, ''));
				}
				const color = this.CHART_COLORS.lightness400;
				const canvasElement = document.createElement(CANVAS_TAG_NAME.toLowerCase());
				statisticParts[i].appendChild(canvasElement);
				const chart = new Chart(canvasElement.getContext('2d'), {
					type: this.settings.statisticsData.graphs.type,
					data: {
						labels: labels,
						datasets: [{
							data: data,
							backgroundColor: this.createColorsFrom(labels),
						}]
					},
					options: {
						title: {
							display: true,
							fontSize: 20, // in px
							text: (items.length === this.settings.statisticsData.graphs.maxItems) ?
								statisticParts[i].firstChild.textContent + ' [' + items.length + this.settings.statisticsData.graphs.mostFrequentTextContent + ']' :
								statisticParts[i].firstChild.textContent,
						}
					}
				});
				while (statisticParts[i].firstChild) { // better performance than simple statisticParts[i].innerHTML = '';
					if (statisticParts[i].firstChild.nodeName === CANVAS_TAG_NAME) { // do not remove canvas
						break;
					}
					statisticParts[i].removeChild(statisticParts[i].firstChild);
				}
				statisticParts[i].appendChild(document.createElement('br'));
			}
		}

		return true;
	}


	getColumnPositionBy(key = '')
	{
		const tHeadElements = this.settings.resultsTable.tHead.firstElementChild.children;
		let columnPosition = false;
		for (let i = 0; i < tHeadElements.length; i++) {
			if (tHeadElements[i].textContent === this.getColumnNameBy(key)) {
				columnPosition = i;
				break;
			}
		}

		return columnPosition;
	}


	getColumnNameBy(key = '')
	{
		const sth = this.settings.tableHeader;
		for (let i = 0; i < Object.keys(sth).length; i++) {
			if (sth[Object.keys(sth)[i]][0] === key) {
				return sth[Object.keys(sth)[i]][1];
			}
		}

		return false;
	}


	getMaxDur() // from visible results table
	{
		const tBodies = this.settings.resultsTable.tBodies;
		if (tBodies.length) {
			const columnPosition = this.getColumnPositionBy('dur');
			if (columnPosition ) {
				const rows = tBodies[0].rows;
				for (let i = 0; i < rows.length; i++) {
					const rawContent = rows[i].children[columnPosition].textContent.hms2Secs(this.settings.lang);
					rows[i].children[columnPosition].setAttribute('data-raw-content-dur', rawContent);
					if (rawContent > this.settings.maxDur) {
						this.settings.maxDur = rawContent;
					}
				}
				return this.settings.maxDur;
			}
		}
		return false;
	}


	getMaxDataFrom(col = '') // from visible results table
	{
		const tBodies = this.settings.resultsTable.tBodies;
		if (tBodies.length) {
			const columnPosition = this.getColumnPositionBy(col);
			if (columnPosition) {
				const rows = tBodies[0].rows;
				for (let i = 0; i < rows.length; i++) {
					const rawContent = Number(rows[i].children[columnPosition].textContent.fromLocaleString());
					rows[i].children[columnPosition].setAttribute('data-raw-content-' + col, rawContent);
					if (rawContent > this.settings['max' + col.capitalize()]) {
						this.settings['max' + col.capitalize()] = rawContent;
					}
				}
				return this.settings['max' + col.capitalize()];
			}
		}
		return false;
	}


	createTHead()
	{
		const thead = document.createElement('thead');
		const row = document.createElement('tr');
		// @todo : sort this.settings.tableHeader by item keys
		for (const i in this.settings.tableHeader) {
			const cell = document.createElement('th');
			cell.appendChild(document.createTextNode(this.settings.tableHeader[i][1]));
			if (this.settings.tableHeader[i][2]) {
				cell.className = this.settings.tableHeader[i][2];
			}
			row.appendChild(cell);
		}
		thead.appendChild(row);
		return thead;
	}


	applyFilters() // @ depricated … soon :)
	{
		if (!this.settings.filterBy) {
			return true;
		}
		if (this.settings.filterBy === this.FILTER_BY_OPTIONS['DATETIME']) {
			const ds = this.dataStructure;
			for (const i in ds) {
				ds[i].hidden = false;
				if (ds[i].datetime.from < this.settings.timeLimitation.from) {
					ds[i].hidden = true;
					continue;
				}
				if (ds[i].datetime.to > this.settings.timeLimitation.to) {
					ds[i].hidden = true;
					continue;
				}
			}

			return true;
		}
	}


	readTimeLimitationForm()
	{
		let fromString = '';
		let toString = '';
		const inp = this.settings.controlForm.timeLimitationInputs;
		const d = new Date();
		if (inp.dateTo && inp.dateTo.value) {
			const part1 = inp.dateTo.value.substr(0, 4);
			const part2 = inp.dateTo.value.substr(5);
			toString += part2.replace('-', ', ') + ', ' + part1 + ', ';
		} else {
			toString += (d.getMonth()+1) + ', ' + d.getDate() + ', ' + d.getFullYear() + ', ';
		}
		if (inp.timeFrom && inp.timeFrom.value) {
			toString += inp.timeTo.value;
		} else {
			toString += '23:59:59';
		}
		if (inp.dateFrom && inp.dateFrom.value) {
			const part1 = inp.dateFrom.value.substr(0, 4);
			const part2 = inp.dateFrom.value.substr(5);
			fromString += part2.replace('-', ', ') + ', ' + part1 + ', ';
		} else {
			d.setDate(d.getDate() - this.settings.timeLimitation.suggestedInterval);
			fromString += (d.getMonth()+1) + ', ' + d.getDate() + ', ' + d.getFullYear() + ', ';
		}
		if (inp.timeFrom && inp.timeFrom.value) {
			fromString += inp.timeFrom.value;
		} else {
			fromString += '00:00:00';
		}
		let fromDate = new Date(fromString);
		let toDate = new Date(toString);
		if (toDate < fromDate) { // if user set bad interval
			[toDate, fromDate] = [fromDate, toDate]; // swap
		}
		return {
			'from': fromDate,
			'to': toDate,
		};
	}


	readAggregation()
	{
		const element = this.settings.controlForm.aggregate;
		if (element && element.nodeType === Node.ELEMENT_NODE) {
			return element.checked;
		}

		return false;
	}


	readFromTextarea(element)
	{
		if (element && element.nodeType === Node.ELEMENT_NODE && element.value) {
			const regexp = new RegExp('(?:,|;|\\s| |\\r?\\n)+', 'u'); // lot of possible dividers
			const list = element.value.split(regexp);
			const withoutEmptyItems = list.filter(String);
			return [...new Set(withoutEmptyItems)]; // this make [] unique
		}

		return [];
	}


	readControlForm()
	{
		this.timeLimitation = this.readTimeLimitationForm(); // special setter into settings
		this.settings.eventSource.query.aggregate = this.readAggregation();
		this.settings.eventSource.query.hostname = this.readFromTextarea(this.settings.controlForm.hostnameFilter);
		this.settings.eventSource.query.mac = this.readFromTextarea(this.settings.controlForm.srcMACFilter);

		return true;
	}


	/*
	 * Make real elements from virtual DOM (table and statistics)
	 * @returns {Boolean}
	 */
	flush()
	{
		if (this.virtualTable && this.settings.resultsTable) {
			const resultsTable = this.settings.resultsTable;
			for (let i = 0; i < resultsTable.attributes.length; i++) {
				this.virtualTable.setAttribute(resultsTable.attributes[i].nodeName, resultsTable.attributes[i].nodeValue);
			}
			resultsTable.parentNode.replaceChild(this.virtualTable, resultsTable);
			this.settings.resultsTable = this.virtualTable;
		}

		if (this.virtualStatistics && this.settings.statisticsElement) {
			const resultsElement = this.settings.statisticsElement;
			for (let i = 0; i < resultsElement.attributes.length; i++) {
				this.virtualStatistics.setAttribute(resultsElement.attributes[i].nodeName, resultsElement.attributes[i].nodeValue);
			}
			resultsElement.parentNode.replaceChild(this.virtualStatistics, resultsElement);
			this.settings.statisticsElement = this.virtualStatistics;
		}

		return true;
	}


	universalFormHook()
	{
		this.setSyncWorkTo(true).then(() => {
			this.readControlForm();
			this.loadFreshHits();
			this.createFullTable().then(() => {
				this.improveTableUX(); // post render improvement
			});
			this.createFullStatistic().then(() => {
				this.makeFullGraphs(); // post render improvement
			});
			this.flush(); // place virtual DOM elements instead of real site elements
			this.setSyncWorkTo(false);
		});
	}


	inicializeHTMLHooks()
	{
		const CHANGE_EVENT_NAME = 'change';
		const inputs = this.settings.controlForm;
		for (const i in inputs) {
			if (inputs[i] && inputs[i].nodeType) {
				inputs[i].addEventListener(CHANGE_EVENT_NAME, this.universalFormHook.bind(this));
			} else {
				for (const ii in inputs[i]) {
					if (inputs[i][ii]) {
						inputs[i][ii].addEventListener(CHANGE_EVENT_NAME, () => {
							this.setSyncWorkTo(true).then(() => {
								this.settings.filterBy = this.FILTER_BY_OPTIONS['DATETIME']; // change settings of current filter
								this.readControlForm();
								this.loadFreshHits();
								this.fillTimeLimitationForm().then(() => {}); // from this.settings.timeLimitation
								//this.applyFilters();
								this.createFullTable().then(() => {
									this.improveTableUX(); // post render improvement
								});
								this.createFullStatistic().then(() => {
									this.makeFullGraphs(); // post render improvement
								});
								this.flush(); // place virtual DOM elements instead of real site elements
								this.setSyncWorkTo(false);
							});
						}, false);
					}
				}
			}
		}

		return true;
	}


	/*
	 * @todo : description
	 * @returns {Boolean}
	 */
	run()
	{
		this.setSyncWorkTo(true).then(() => {
			this.readControlForm();
			this.loadFreshHits(); // from backend
setTimeout(() => { //////////////////////////////////
			this.storeHitsToIndexedDB();
			this.inicializeHTMLHooks();
			this.fillTimeLimitationForm().then(() => {}); // from this.settings.timeLimitation
			this.groupData().then(() => {
				//this.applyFilters(); // works with virtual DOM
				this.createFullStatistic().then(() => {
					this.makeFullGraphs(); // pwitch statement testing for which is visible but can not pass the source.close() to my event directly ost render improvement
				});
				this.createFullTable().then(() => {
					this.improveTableUX(); // post render improvement
				});
				this.flush(); // place virtual DOM elements instead of real site elements
				this.setSyncWorkTo(false);
			});
}, 2200); ///////////////////
		});

		return true;
	}

};

/*
 * Example usage:
 * 
	<script src="czNicTurrisPakon.js"></script>
	<script>
		const cntp = new czNicTurrisPakon(window);
		//cntp.settings = {'lang': 'cs', '…': true};
		cntp.run();
		//const cs = window.document.currentScript;
		//cs.parentNode.removeChild(cs);
	</script>
 */
