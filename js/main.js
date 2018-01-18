$(document).ready(function() {
  // Sliding side navigation for when the screen is small
  $('.button-collapse').sideNav();

  // Scrollspy activation
  $('.scrollspy').scrollSpy();

  // FullpageJS setup
	$('#fullpage').fullpage({
		//Navigation
		menu: '#nav-bottom-section',
		lockAnchors: false,
		anchors:['Home', 'Solutions', 'Products', 'Support'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: [/*'Home', 'Industries', 'Products', 'Support', 'Contact Us'*/],
		showActiveTooltip: true,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: false,
		sectionsColor : ['#ccc', '#ccc', '#ccc', '#ccc', '#ccc'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


  /********************************************
    Adding priority inline CSS with JavaScript
  *********************************************/
  // $('.fp-completely').css('padding-bottom', '');
  // $('.section').css('padding-bottom', '');
  // $('.fp-section').css('padding-bottom', '');
  // $('.active').css('padding-bottom', '');
  // $('.fp-table').css('padding-bottom', '');

  // Makes sure the content stays at the bottom of the page.
  $('#support-section .page-content-wrapper').css('bottom', '0px');
});
