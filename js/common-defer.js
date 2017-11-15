'use strict';

document.addEventListener('keydown', (event) => {
	event = event || window.event;
	if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
		return true;
	}
	const ARROW_LEFT = 'ArrowLeft';
	const ARROW_RIGHT = 'ArrowRight';
	if (event.key === ARROW_LEFT || event.code === ARROW_LEFT) {
		document.getElementById('nav-status').checked = false;
	} else if (event.key === ARROW_RIGHT || event.code === ARROW_RIGHT) {
		document.getElementById('nav-status').checked = true;
	}
	return true;
}, false);

(function() {
	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;
	var yDown = null;

	function handleTouchStart(evt) {
		xDown = evt.touches[0].clientX;
		yDown = evt.touches[0].clientY;
	};

	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}

		const xDiff = xDown - evt.touches[0].clientX;
		const yDiff = yDown - evt.touches[0].clientY;

		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
			if ( xDiff > 0 ) {
				document.getElementById('nav-status').checked = false;
			} else {
				document.getElementById('nav-status').checked = true;
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	};

}());

(function() {
	const menuLinks = document.getElementById('nav-status').nextElementSibling.getElementsByTagName('a');
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			document.getElementById('nav-status').checked = false;
		});
	}
}());

(function() {
	const INACTIVE_CLASS_NAME = 'inactive';
	const TEXT_LIKE_INPUTS = [
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
		'week'
	];
	const labels = document.getElementsByTagName('label');
	function switchLabelClassByFocus(/* bool */ setEventListener = false) {
		for (let i = 0; i < labels.length; i++) {
			for (let j = 0; j < labels[i].children.length; j++) {
				if (
					labels[i].children[j]
					&& typeof labels[i].children[j].type !== 'undefined'
					&& (
						(
							labels[i].children[j].tagName === 'INPUT'
							&& TEXT_LIKE_INPUTS.indexOf(labels[i].children[j].type) >= 0
						)
						|| labels[i].children[j].tagName === 'TEXTAREA'
					)
				) {
					const inputElement = labels[i].children[j];
					if (!inputElement.value) {
						labels[i].classList.add(INACTIVE_CLASS_NAME);
					}
					if (setEventListener) {
						inputElement.addEventListener('focus', (event) => {
							switchLabelClassByFocus(false);
							event.target.parentNode.classList.remove(INACTIVE_CLASS_NAME);
						});
						inputElement.addEventListener('focusout', (event) => {
							if (!event.target.value) {
								event.target.parentNode.classList.add(INACTIVE_CLASS_NAME);
							}
						});
					}
					break;
				}
			}
		}
	}
	switchLabelClassByFocus(true);
}());

/*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.3.1 (2014-10-22)
 * Previous version 1.3.0 (2014-07-23)
 * Previous version 1.2.0 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0.0 (2013-10-27)
 * Requirement : None, it is a framework-free function (i.e. you do not need to include any other file in your page such as jQuery)
 * Fork-me on github : https://github.com/Yappli/smooth-scroll
 * */
(function(window, undefined) // Code in a function to create an isolate scope
{
	var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
		speed = 500,
		moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
		links = document.getElementsByTagName('a'),
		href;

	for(var i = 0; i < links.length; i++)
	{
		href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
		if(href !== null && href.length > 1 && href.indexOf('#') !== -1) // href.substr(0, 1) == '#'
		{
			links[i].onclick = function()
			{
				var element,
					href = this.attributes.href.nodeValue.toString(),
					url = href.substr(0, href.indexOf('#')),
					id = href.substr(href.indexOf('#') + 1);
				if (element = document.getElementById(id))
				{

					var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
						getScrollTopDocumentAtBegin = getScrollTopDocument(),
						gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

					if (window.history && typeof window.history.pushState === 'function')
						window.history.pushState({}, undefined, url + '#' + id); // Change URL for modern browser

					for (var i = 1; i <= hop_count; i++)
					{
						(function()
						{
							var hop_top_position = gap * i;
							setTimeout(function(){ window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
						})();
					}

					return false;
				}
			};
		}
	}

	var getScrollTopElement =  function(e)
	{
		var top = height_fixed_header * -1;

		while (e.offsetParent !== undefined && e.offsetParent !== null)
		{
			top += e.offsetTop + (e.clientTop !== null ? e.clientTop : 0);
			e = e.offsetParent;
		}

		return top;
	};

	var getScrollTopDocument = function()
	{
		return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
	};
})(window);

window.addEventListener('scroll', function() {
	document.getElementById('scroll-to-top').hidden = (this.pageYOffset < 200) ? true : false;
});
