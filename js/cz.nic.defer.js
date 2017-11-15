'use strict';
const cz = {};
cz.nic = {};

cz.nic.deferJs = class {

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

		/*
		 * @private
		 */
		this._methodsList = {
			'accessKeyHightlighter': true,
			'clickjackingDefense': true,
			'ctrlFormSubmitter': true,
			'delegateFileDrop': true,
			'desktopVersionOnMobile': true,
			'safeFormReset': true,
			'showPasswords': true,
			'tabsInForm': true,
		};


		/*
		 * @private
		 */
		this._settings = {
			'maxFilesToOpenOnDrop': 5,
			'safeResetConfirmQuestion': 'Are you sure you want to reset form?',
			'showPasswordElementTagName': 'a',
			'showPasswordText': '[Show Password]',
			'showPasswordClassName': 'icon show-password',
			'showPassDataAttribude': 'data-show-pass-button',
			'tabsInFormElements': {
				textarea: true,
				textLikeInput: false,
			},
		};


		/*
		 * @public
		 */
		this.textLikeFormElements = [
			'textarea',
			'text',
			'password',
			'datetime',
			'datetime-local',
			'email',
			'month',
			'number',
			'search',
			'tel',
			'type',
			'url',
			'week',
		];

	}


	/*
	 * Set which methods to use and which not
	 * @param {Object} variables
	 * @returns {Boolean}
	 */
	set methodsList(variables = {})
	{
		for (const i in variables) {
			this._methodsList[i] = variables[i];
		}
		return true;
	}


	/*
	 * Get methods from list
	 * @returns {Object}
	 */
	get methodsList()
	{
		return this._methodsList;
	}


	/*
	 * Set settings for whole class
	 * @param {Object} variables
	 * @returns {Boolean}
	 */
	set settings(variables = {})
	{
		for (const i in variables) {
			if (typeof variables[i] === 'object' && variables[i].constructor.name === 'Object') {
				this.settings = variables[i];
			} else {
				this._settings[i] = variables[i];
			}
		}
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


	/*
	 * Highlight letter in text when accesskey attribute is set on it (in form label, link …)
	 * @returns {Boolean}
	 */
	accessKeyHightlighter()
	{
		// @ todo
		return true;
	}


	/*
	 * Disallows using this website in iframe (X-FRAME-OPTIONS header is better solution)
	 * @returns {Boolean}
	 */
	clickjackingDefense()
	{
		this.window.document.body.style.display = 'none';
		if (self === top) {
			this.window.document.body.style.display = 'block';
		} else { 
			top.location = self.location;
		}
		return true;
	}


	/*
	 * Make all forms submittable by CTRL + Enter (when any form element active)
	 * @returns {Boolean}
	 */
	ctrlFormSubmitter()
	{
		const ENTER_NAME = 'Enter';

		/*
		 * @param {KeyboardEvent} event - pressed key(s)
		 */
		function keydownListener(event)
		{
			if (event.ctrlKey && (event.key === ENTER_NAME || event.code === ENTER_NAME)) {
				event.target.form.submit();
			}
			return true;
		}

		/** @type {HTMLCollection} */
		const forms = this.window.document.getElementsByTagName('form');

		for (let i = 0; i < forms.length; i++) {
			forms[i].addEventListener('keydown', keydownListener);
		}
		return true;
	}


	/*
	 * When file dropped on website… delegate it into new tab/window
	 * @returns {Boolean}
	 */
	delegateFileDrop()
	{
		/*
		 * @param {DragEvent} event - allways same event, divided by 'type'
		 */
		function manageFiles(event)
		{
			event.stopPropagation();
			event.preventDefault();
			const files = event.target.files || event.dataTransfer.files;
			if (files.length > 0 && files.length <= this.settings.maxFilesToOpenOnDrop) {
				for (let i = 0; i < files.length; i++) {
					if (this.window.navigator.msSaveOrOpenBlob) { // IE
						this.window.navigator.msSaveOrOpenBlob(files[i], files[i].name);
					} else { // Other browsers
						this.window.open(URL.createObjectURL(files[i]));
					}
				}
			}
			return true;
		}

		const document = this.window.document;
		document.addEventListener('dragover', manageFiles.bind(this), false);
		document.addEventListener('dragleave', manageFiles.bind(this), false);
		document.addEventListener('drop', manageFiles.bind(this), false);
		return true;
	}


	/*
	 * Allow users to view desktop version of page on mobile device
	 * @returns {Boolean}
	 */
	desktopVersionOnMobile()
	{
		// @todo
		return true;
	}


	/*
	 * Whenever is lost connection and there is no offline web serveice, than all links required confirm
	 * @returns {Boolean}
	 */
	offlineLinksBlock()
	{
		// @todo
		return true;
	}


	/*
	 * Add confirmation dialogue bedere form reset, and add ESC keyboard shortcut to form reset (when any form element active)
	 * @returns {Boolean}
	 */
	safeFormReset()
	{
		const ESCAPES = ['Escape', 'Esc']; // 'Esc' in IE, 'Escape' in others

		/*
		 * @param {HTMLFormControlsCollection} formElements - elements (input , textarea , fieldset , …) 
		 * @returns {Array}
		 */
		function findAllResets(formElements = {})
		{
			const resets = [];
			for (let i = 0; i < formElements.length; i++) {
				if (formElements[i].type === 'reset') {
					resets.push(formElements[i]);
				}
			}
			return resets;
		}

		/*
		 * @param {MouseEvent|KeyboardEvent} event - user interaction event
		 */
		function hideShowPassButton(event)
		{
			/** @type {HTMLFormControlsCollection} */
			const formElements = event.target.form.elements;

			for (let i = 0; i < formElements.length; i++) {
				if (formElements[i].getAttribute(this.settings.showPassDataAttribude)) {
					formElements[i].setAttribute(this.settings.showPassDataAttribude, false);
					formElements[i].nextSibling.hidden = true;
				}
			}
			return true;
		}

		/*
		 * @param {MouseEvent|KeyboardEvent} event - user interaction event
		 */
		function confirmReset(event)
		{
			// @todo : do not require js confirm if form has no changes yet
			event.preventDefault();
			if (confirm(this.settings.safeResetConfirmQuestion)) {
				hideShowPassButton.bind(this)(event);
				event.target.form.reset();
			}
			return true;
		}

		/** @type {HTMLCollection} */
		const forms = this.window.document.getElementsByTagName('form');

		for (let i = 0; i < forms.length; i++) {

			/** @type {HTMLFormElement} */
			const singleForm = forms[i];

			const resets = findAllResets(singleForm.elements);

			/** @type {Integer} */
			const resetsLength = resets.length;

			for (const i in resets) {
				resets[i].hidden = false;
				resets[i].addEventListener('click', confirmReset.bind(this), false);
			}
			if (resetsLength) {
				singleForm.addEventListener('keydown', (event) => {
					if (ESCAPES.indexOf(event.key || event.code) !== -1) {
						return confirmReset.bind(this)(event);
					}
					return false;
				}, false);
			}
		}
		return true;
	}


	/*
	 * Add button to show passwords hidden under stars *****
	 * @returns {Boolean}
	 */
	showPasswords()
	{
		/*
		 * @param {MouseEvent} event - when mouse button (also touch event on touch devices) pressed on element
		 */
		function showDown(event)
		{
			event.target.previousSibling.type = 'text';
			return true;
		}

		/*
		 * @param {MouseEvent} event - when mouse button (also touch event on touch devices) pressed on element
		 */
		function cancel(event)
		{
			event.stopPropagation();
			event.preventDefault();
			event.target.previousSibling.type = 'password';
			return true;
		}

		/*
		 * @param {Event} event - this method using only event.target
		 */
		function showPassButton(event)
		{
			if (event.target.value) {
				if (event.target.getAttribute(this.settings.showPassDataAttribude)) {
					event.target.setAttribute(this.settings.showPassDataAttribude, false);
					event.target.nextSibling.hidden = false;
				} else {
					event.target.setAttribute(this.settings.showPassDataAttribude, true);
					const el = document.createElement(this.settings.showPasswordElementTagName);
					if (this.settings.showPasswordElementTagName === 'a') {
						el.href = '#show-password';
					}
					if (this.settings.showPasswordClassName) {
						el.className = this.settings.showPasswordClassName;
					}
					el.addEventListener('mousedown', showDown, false);
					el.addEventListener('mouseup', cancel, false);
					el.addEventListener('mousemove', cancel, false); // @todo : allow some small tolerance
					el.addEventListener('dragstart', cancel, false); // @todo : allow some small tolerance
					el.addEventListener('click', cancel, false);
					el.appendChild(document.createTextNode(this.settings.showPasswordText));
					event.target.parentNode.insertBefore(el, event.target.nextSibling);
				}
			} else if (event.target.getAttribute(this.settings.showPassDataAttribude)) {
				event.target.nextSibling.hidden = true;
			}
		}

		const document = this.window.document;

		/** @type {NodeList} */
		const passwords = document.querySelectorAll('input[type="password"]');

		for (let i = 0; i < passwords.length; i++) {
			passwords[i].addEventListener('input', showPassButton.bind(this), false);
		}

		return true;
	}


	/*
	 * Allows to create tab character into form elements by pressing ALT + SHIFT + TAB
	 * @returns {Boolean}
	 */
	tabsInForm()
	{
		const TAB_NAME = 'Tab';

		/*
		 * @param {KeyboardEvent} event - pressed key(s)
		 */
		function keydownListener(event)
		{
			if (event.altKey && event.shiftKey && (event.key === TAB_NAME || event.code === TAB_NAME)) {
				event.preventDefault();
				const ss = event.target.selectionStart;
				event.target.value = event.target.value.substring(0, ss)
					+ '\t'
					+ event.target.value.substring(event.target.selectionEnd);
				event.target.selectionEnd = ss + 1;
			}
			return true;
		}

		/** @type {HTMLCollection} */
		const forms = this.window.document.getElementsByTagName('form');

		for (let i = 0; i < forms.length; i++) {
			const formElements = forms[i].elements;
			for (let i = 0; i < formElements.length; i++) {
				if (this.textLikeFormElements.indexOf(formElements[i].type) >= 0) {
					formElements[i].addEventListener('keydown', keydownListener);
				}
			}
		}
		return true;
	}


	/*
	 * Run all methods allowed by methodsList
	 * @returns {Boolean}
	 */
	run()
	{
		const ml = this.methodsList;
		const ok = Object.keys(ml);

		for (const i in ok) {
			if (ml[ok[i]]) {
				this[ok[i]]();
			}
		}

		return true;
	}

};

/*
 * Example usage:
 * 
	<script src="cz.nic.defer.js" defer></script>
	<script>
		window.addEventListener('load', () => {
			const cndj = new cz.nic.deferJs(window);
			//cndj.useMethods = {'ctrlFormSubmitter': false, 'delegateFileDrop': true};
			cndj.run();
		}, false);
		const cs = window.document.currentScript;
		cs.parentNode.removeChild(cs);
	</script>
 */
