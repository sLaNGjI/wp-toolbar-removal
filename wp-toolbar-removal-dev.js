
/*
 * @package WP Toolbar Removal
 * @subpackage External JS Enqueue Script
 * @branche 2014
 * @build   2014-07-09
 * @since   3.8.3
 * @tested  4.0.0
 * @version 2014.0709.0400
 * @target  2014.1210.0410
 * @status STABLE (trunk) release
 * @development Code in Becoming!
 * @author slangjis
 * @license GPLv2 or later
 * @indentation GNU style coding standard
*/

	/**
	 * Please contact me @ slangji.wordpress.com/contact/
	 * to know how to get this file and test new features
	 * that will be developed offline on github.com/slangji
	 */

jQuery(document).ready(function($){
	$('#wpadminbar').find('li.menupop').hover( function(){
		$(this).toggleClass('hover');
	});

	// bring menu into scope defined by common.js

	var menu;

	// copy of the function from common.js, just without hoverintent

	$('li.wp-has-submenu', menu).hover(

		function(e){
			var b, h, o, f, m = $(this).find('.wp-submenu'), menutop, wintop, maxtop;

			if ( !$(document.body).hasClass('folded') && $(this).hasClass('wp-menu-open') )
				return;

			menutop = $(this).offset().top;
			wintop = $(window).scrollTop();
			maxtop = menutop - wintop - 30;			// maxtop = make the top of the sub almost touch admin bar

			b = menutop + m.height() + 1;			// bottom offset of the menu
			h = $('#wpwrap').height();				// height of the entire page
			o = 60 + b - h;
			f = $(window).height() + wintop - 15;	// the fold

			if ( f < (b - o) )
				o = b - f;

			if ( o > maxtop )
				o = maxtop;

			if ( o > 1 )
				m.css({'marginTop':'-'+o+'px'});
			else if ( m.css('marginTop') )
				m.css({'marginTop':''});

			m.addClass('sub-open');
		},

		function(){
			$(this).find('.wp-submenu').removeClass('sub-open');
		}
	);
});
