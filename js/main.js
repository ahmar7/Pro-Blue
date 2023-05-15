/*!
 * front-end-boilerplate v0.0.2
 * A description for your project.
 * (c) 2022 front-end-boilerplate
 * MIT License
 * http://link-to-your-git-repo.com
 */

'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready((function () {

	AOS.init();
}));

///////////////////////////////////////////////////////////////////////////
$(document).ready((function () {
	$('.navbar-toggler').click((function (e) {
		setTimeout((function () {
			var header = $('.navbar-toggler').hasClass("collapsed");
			if (header) {
				$('.header').removeClass('mobMenu');
				$('.hamburger').removeClass("is-active");
			} else {
				$('.header').addClass('mobMenu');
				$('.hamburger').addClass("is-active");
			}
		}), 1);
	}));

	if ($(window).width() > 769) {
		$('.megamenu-li').hover((function () {
			$(this).find('.megamenu').first().stop(true, true).delay(250).slideDown();
		}), (function () {
			$(this).find('.megamenu').first().stop(true, true).delay(100).slideUp();
		}));

		$('.megamenu-li > a').click((function () {
			location.href = this.href;
		}));
	}

	//category image check
	$('.checkbox').click((function () {
		$(this).find(":checkbox").prop("checked", !$(this).find(":checkbox").prop("checked"));
	}));

	//////////////////////////////////
	if ($(window).width() < 768) {
		$('#select').click((function () {
			// alert();
			$('#manpowerMyTab').show();
		}));
		$('#manpowerMyTab a').click((function (e) {
			$('#select').text($(this).text());
			$('#manpowerMyTab').hide();
			$(this).addClass('current');
			e.preventDefault();
		}));
	}
}));

///////////////////////////////////////////////////////////////////////////////
// var slider = new Swiper ('.gallery-slider', {
// 	slidesPerView: 1,
// 	loop: true,
// 	slideToClickedSlide: true,
// navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// },
// });
// var thumbs = new Swiper ('.gallery-thumbs', {
// 	slidesPerView: 2,
// 	spaceBetween: 10,
// 	loop: false,
// 	slideToClickedSlide: true,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// },
// });


//slider.params.control = thumbs;
//thumbs.params.control = slider;

// slider.controller.control = thumbs;
// thumbs.controller.control = slider;
///////////////////////////////////////////////////////////////////////////////
$(document).ready((function () {
	$('.navbar-nav a').on("click", (function () {
		//removing the previous selected menu state
		$('.navbar-nav').find('li.active').removeClass('active');
		//adding the state for this parent menu
		$(this).parents("li").addClass('active');
	}));
	$('#getaquote li a').on("click", (function () {
		//removing the previous selected menu state
		$('#getaquote').find('li.active').removeClass('active');
		//adding the state for this parent menu
		$(this).parents("li").addClass('active');
	}));

	// $(" li a.active").parent().addClass("active");
}));
/////////////////////////////////////////////////////////////////////////////////

$(document).ready((function () {
	$(".megamenu").on("click", (function (e) {
		$(this).toggleClass('show');
		e.stopPropagation();
	}));

	//////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".projectSwiper", {
		slidesPerView: 4,
		spaceBetween: 0,
		slidesPerGroup: 4,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true

		},
		// navigation: { 
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
		breakpoints: {

			1000: {
				slidesPerView: 4
			},
			700: {
				slidesPerView: 3
			},
			500: {
				slidesPerView: 2
			},
			320: _defineProperty({
				spaceBetween: 0,
				slidesPerGroup: 1,
				slidesPerView: 1
			}, 'spaceBetween', 0)
		}
	});

	//////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".bannerSwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,

		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
	//////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".bannerThumbSwiper", {

		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 15,
		autoplay: true,
		loop: true,
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,

		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {

			575: {
				slidesPerView: 2
			},
			300: {
				slidesPerView: 1,
				slidesPerGroup: 1

			}
		}

	});

	///////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".clientSwiper", {
		slidesPerView: 5,
		centeredSlides: true,
		centeredSlidesBounds: true,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,

		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			992: {
				slidesPerView: 5
			},
			575: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 1
			}
		}

	});

	///////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".companyGroup", {
		slidesPerView: 4,
		// centeredSlides: true,
		// centeredSlidesBounds: true,
		spaceBetween: 10,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,

		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				centeredSlides: false
			},
			768: {
				slidesPerView: 3,
				centeredSlides: false
			},
			575: {
				slidesPerView: 2,
				centeredSlides: false
			},
			300: {
				slidesPerView: 1,
				centeredSlides: false
			}
		}

	});
	///////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".topClientSwiper", {
		slidesPerView: 5,
		centeredSlides: true,
		centeredSlidesBounds: true,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,

		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			992: {
				slidesPerView: 5
			},
			575: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 1
			}
		}

	});
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

	var swiper = new Swiper(".aboutClientSwiper", {
		slidesPerView: 5,
		centeredSlides: true,
		centeredSlidesBounds: true,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,
		breakpoints: {
			992: {
				slidesPerView: 5
			},
			575: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 1
			}
			// pagination: {
			//   el: ".swiper-pagination",
			//   clickable: true,
			// },
			// navigation: {
			//   nextEl: ".swiper-button-next",
			//   prevEl: ".swiper-button-prev",
			// },

		} });
	///////////////////////////////////////////////////////////////////////////////////
	var swiper = new Swiper(".accreditationsSwiper", {
		slidesPerView: 4,
		spaceBetween: 5,
		slidesPerGroup: 1,
		loop: true,
		autoplay: true,
		loopFillGroupWithBlank: true,
		// pagination: {
		//   el: ".swiper-pagination",
		//   clickable: true,
		// },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			992: {
				slidesPerView: 4
			},
			700: {
				slidesPerView: 3
			},
			500: {
				slidesPerView: 2
			},
			300: {
				slidesPerView: 1
			}
		}

	});
	///////////////////////////////////////////////////////////////////////////////////
	var counters = $(".count");
	var countersQuantity = counters.length;
	var counter = [];
	var startcount = [];
	var i = 0;
	var j = 0;
	for (i = 0; i < countersQuantity; i++) {
		counter[i] = parseInt(counters[i].innerHTML);
		startcount[i] = counter[i];
	}

	var count = function count(start, value, id) {
		var localStart = start;
		setInterval((function () {
			if (localStart < value) {
				localStart++;
				counters[id].innerHTML = localStart;
			}
		}), 40);
	};

	startcount.sort((function (a, b) {
		return a - b;
	}));

	for (j = 0; j < countersQuantity; j++) {
		var start = counter[j] - startcount[0];
		count(start, counter[j], j);
	}
}));

///////////////////////////////
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,

// All list items
menuItems = topMenu.find("a"),

// Anchors corresponding to menu items
scrollItems = menuItems.map((function () {
	var item = $($(this).attr("href"));
	if (item.length) {
		return item;
	}
}));

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click((function (e) {
	var href = $(this).attr("href"),
	    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	$('html, body').stop().animate({
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
}));

// Bind to scroll
$(window).scroll((function () {
	// Get container scroll position
	var fromTop = $(this).scrollTop() + topMenuHeight;

	// Get id of current scroll item
	var cur = scrollItems.map((function () {
		if ($(this).offset().top < fromTop) return this;
	}));
	// Get the id of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
		lastId = id;
		// Set/remove active class
		menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
	}
}));

//////////////////////////////////////////////////////////////////////


var swiper = new Swiper('.project-swiper', {
	pagination: '.swiper-pagination',
	// slidesPerView: 1.5,
	// centeredSlides: true,
	// loop: true,
	// spaceBetween: 10,


	slidesPerView: 1.5,
	spaceBetween: 1,
	centeredSlides: true,
	freeMode: true,
	loop: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true
	// },
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		1200: {
			slidesPerView: 1.5
		},
		1199: {
			slidesPerView: 1,
			centeredSlides: false
		},
		300: {
			slidesPerView: 1
		}
	}

});
///////////////////////Button Count////////////////////////////////
var num;
$(document).on('click', '.button-count:first-child', (function () {
	num = parseInt($(this).parent().find('input:text').val());
	if (num > 0) {
		$(this).parent().find('input:text').val(num - 1);
	}
	if (num == 1) {
		$(this).parent().find('.button-count:first-child').prop('disabled', true);
	}
	if (num == 100) {
		$(this).parent().find('.button-count:last-child').prop('disabled', false);
	}
}));

$(document).on('click', '.button-count:last-child', (function () {
	num = parseInt($(this).parent().find('input:text').val());
	if (num < 100) {
		$(this).parent().find('input:text').val(num + 1);
	}
	if (num > 0) {
		$(this).parent().find('.button-count:first-child').prop('disabled', false);
	}
	if (num == 100) {
		$(this).parent().find('.button-count:last-child').prop('disabled', true);
	}
}));
/////////////////////Select File Name//////////////////////
var input = document.getElementById('file-upload');
var infoArea = document.getElementById('file-upload-filename');
if (input) input.addEventListener('change', showFileName);

function showFileName(event) {
	var input = event.srcElement;
	var fileName = input.files[0].name;
	infoArea.textContent = 'File name: ' + fileName;
}

var inputpop = document.getElementById('file-upload-popup');
var infoAreapop = document.getElementById('file-upload-filename-popup');
if (input) inputpop.addEventListener('change', showFileNamepop);

function showFileNamepop(event) {
	var inputpop = event.srcElement;
	var fileNamepop = inputpop.files[0].name;
	infoAreapop.textContent = 'File name: ' + fileNamepop;
}

////////////////////////////////////////////


(function ($) {
	$(document).ready((function () {
		log();
	}));
	var log = function log() {
		console.log('ready');
	};
})(jQuery);

// For breakpoint..
function isBreakpointDown(breakpoint) {
	if ($gridBreakpoints[breakpoint] && $win.width() <= $gridBreakpoints[breakpoint] - .02) {
		return true;
	} else {
		return false;
	}
}

// Breakpoints
var $gridBreakpoints = {
	xs: '0',
	sm: 576,
	// md: 768,
	md: 778,
	lg: 992,
	xl: 1200

	// window
};var $win = $(window);

// header
var $header = $(".app-header");
var $body = $('body');

// page offset margin
var $pageOffsetX = 80;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjFfZ2xvYmFsL2N1c3RvbS5qcyIsIjFfZ2xvYmFsL19kb2N1bWVudC1yZWFkeS5qcyIsIjFfZ2xvYmFsL19pc0JyZWFrcG9pbnQuanMiLCIxX2dsb2JhbC9fdmFyaWFibGVzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiQU9TIiwiaW5pdCIsImNsaWNrIiwiZSIsInNldFRpbWVvdXQiLCJoZWFkZXIiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ3aW5kb3ciLCJ3aWR0aCIsImhvdmVyIiwiZmluZCIsImZpcnN0Iiwic3RvcCIsImRlbGF5Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsImxvY2F0aW9uIiwiaHJlZiIsInByb3AiLCJzaG93IiwidGV4dCIsImhpZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uIiwicGFyZW50cyIsInRvZ2dsZUNsYXNzIiwic3RvcFByb3BhZ2F0aW9uIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1Blckdyb3VwIiwibG9vcCIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwiYXV0b3BsYXkiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlcmVkU2xpZGVzIiwiY2VudGVyZWRTbGlkZXNCb3VuZHMiLCJjb3VudGVycyIsImNvdW50ZXJzUXVhbnRpdHkiLCJsZW5ndGgiLCJjb3VudGVyIiwic3RhcnRjb3VudCIsImkiLCJqIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJjb3VudCIsInN0YXJ0IiwidmFsdWUiLCJpZCIsImxvY2FsU3RhcnQiLCJzZXRJbnRlcnZhbCIsInNvcnQiLCJhIiwiYiIsImxhc3RJZCIsInRvcE1lbnUiLCJ0b3BNZW51SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJtZW51SXRlbXMiLCJzY3JvbGxJdGVtcyIsIm1hcCIsIml0ZW0iLCJhdHRyIiwib2Zmc2V0VG9wIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbCIsImZyb21Ub3AiLCJjdXIiLCJwYXJlbnQiLCJlbmQiLCJmaWx0ZXIiLCJmcmVlTW9kZSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibnVtIiwidmFsIiwiaW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsImluZm9BcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dGaWxlTmFtZSIsImV2ZW50Iiwic3JjRWxlbWVudCIsImZpbGVOYW1lIiwiZmlsZXMiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJpbnB1dHBvcCIsImluZm9BcmVhcG9wIiwic2hvd0ZpbGVOYW1lcG9wIiwiZmlsZU5hbWVwb3AiLCJsb2ciLCJjb25zb2xlIiwialF1ZXJ5IiwiaXNCcmVha3BvaW50RG93biIsImJyZWFrcG9pbnQiLCIkZ3JpZEJyZWFrcG9pbnRzIiwiJHdpbiIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCIkaGVhZGVyIiwiJGJvZHkiLCIkcGFnZU9mZnNldFgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFBQyxRQUFBLEVBQUFDLEtBQUEsQ0FBQSxZQUFBOztBQUVBQyxLQUFBQyxJQUFBO0FBRUEsQ0FKQTs7QUFPQTtBQUNBSixFQUFBQyxRQUFBLEVBQUFDLEtBQUEsQ0FBQSxZQUFBO0FBQ0FGLEdBQUEsaUJBQUEsRUFBQUssS0FBQSxDQUFBLFVBQUFDLENBQUEsRUFBQTtBQUNBQyxhQUFBLFlBQUE7QUFDQSxPQUFBQyxTQUFBUixFQUFBLGlCQUFBLEVBQUFTLFFBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQSxPQUFBRCxNQUFBLEVBQUE7QUFDQVIsTUFBQSxTQUFBLEVBQUFVLFdBQUEsQ0FBQSxTQUFBO0FBQ0FWLE1BQUEsWUFBQSxFQUFBVSxXQUFBLENBQUEsV0FBQTtBQUNBLElBSEEsTUFJQTtBQUNBVixNQUFBLFNBQUEsRUFBQVcsUUFBQSxDQUFBLFNBQUE7QUFDQVgsTUFBQSxZ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QUFBO0FBQ0FFLEtBQUEsR0FEQTtBQUVBQyxLQUFBLEdBRkE7QUFHQTtBQUNBQyxLQUFBLEdBSkE7QUFLQUMsS0FBQSxHQUxBO0FBTUFDLEtBQUE7O0FBR0E7QUFUQSxDQUFBLENBVUEsSUFBQUwsT0FBQWhILEVBQUFZLE1BQUEsQ0FBQTs7QUFFQTtBQUNBLElBQUEwRyxVQUFBdEgsRUFBQSxhQUFBLENBQUE7QUFDQSxJQUFBdUgsUUFBQXZILEVBQUEsTUFBQSxDQUFBOztBQUVBO0FBQ0EsSUFBQXdILGVBQUEsRUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRBT1MuaW5pdCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KChmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm5hdmJhci10b2dnbGVyJykuY2xpY2soKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBoZWFkZXIgPSAkKCcubmF2YmFyLXRvZ2dsZXInKS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuXHRcdFx0aWYoaGVhZGVyKXtcclxuXHRcdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ21vYk1lbnUnKTtcclxuXHRcdFx0XHQkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JCgnLmhlYWRlcicpLmFkZENsYXNzKCdtb2JNZW51Jyk7XHJcblx0XHRcdFx0JCgnLmhhbWJ1cmdlcicpLmFkZENsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LDEpO1xyXG5cdH0pKTtcclxuXHJcblx0aWYgKCQod2luZG93KS53aWR0aCgpID4gNzY5KSB7XHJcblx0XHQkKCcubWVnYW1lbnUtbGknKS5ob3ZlcigoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKHRoaXMpLmZpbmQoJy5tZWdhbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5kZWxheSgyNTApLnNsaWRlRG93bigpO1xyXG5cdFx0fSksIChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQodGhpcykuZmluZCgnLm1lZ2FtZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLmRlbGF5KDEwMCkuc2xpZGVVcCgpO1xyXG5cdFx0fSkpO1xyXG5cclxuXHRcdCQoJy5tZWdhbWVudS1saSA+IGEnKS5jbGljaygoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xyXG5cdFx0fSkpO1xyXG5cdH1cclxuXHJcblx0Ly9jYXRlZ29yeSBpbWFnZSBjaGVja1xyXG5cdCQoJy5jaGVja2JveCcpLmNsaWNrKChmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLmZpbmQoXCI6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgISQodGhpcykuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiKSk7XHJcblx0fSkpO1xyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aWYoJCggd2luZG93ICkud2lkdGgoKSA8IDc2OCl7XHJcblx0XHRcdCQoJyNzZWxlY3QnKS5jbGljaygoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdC8vIGFsZXJ0KCk7XHJcblx0XHRcdFx0JCgnI21hbnBvd2VyTXlUYWInKS5zaG93KCk7XHJcblx0XHRcdH0pKTtcclxuXHRcdFx0JCgnI21hbnBvd2VyTXlUYWIgYScpLmNsaWNrKChmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdCQoJyNzZWxlY3QnKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHRcdFx0XHQkKCcjbWFucG93ZXJNeVRhYicpLmhpZGUoKTtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9KSk7XHJcblx0fVxyXG59KSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB2YXIgc2xpZGVyID0gbmV3IFN3aXBlciAoJy5nYWxsZXJ5LXNsaWRlcicsIHtcclxuLy8gXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG4vLyBcdGxvb3A6IHRydWUsXHJcbi8vIFx0c2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuLy8gbmF2aWdhdGlvbjoge1xyXG4vLyBcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbi8vIFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuLy8gfSxcclxuLy8gfSk7XHJcbi8vIHZhciB0aHVtYnMgPSBuZXcgU3dpcGVyICgnLmdhbGxlcnktdGh1bWJzJywge1xyXG4vLyBcdHNsaWRlc1BlclZpZXc6IDIsXHJcbi8vIFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuLy8gXHRsb29wOiBmYWxzZSxcclxuLy8gXHRzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxyXG4vLyBcdG5hdmlnYXRpb246IHtcclxuLy8gXHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4vLyBcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbi8vIH0sXHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vc2xpZGVyLnBhcmFtcy5jb250cm9sID0gdGh1bWJzO1xyXG4vL3RodW1icy5wYXJhbXMuY29udHJvbCA9IHNsaWRlcjtcclxuXHJcbi8vIHNsaWRlci5jb250cm9sbGVyLmNvbnRyb2wgPSB0aHVtYnM7XHJcbi8vIHRodW1icy5jb250cm9sbGVyLmNvbnRyb2wgPSBzbGlkZXI7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5uYXZiYXItbmF2IGEnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vcmVtb3ZpbmcgdGhlIHByZXZpb3VzIHNlbGVjdGVkIG1lbnUgc3RhdGVcclxuXHRcdCQoJy5uYXZiYXItbmF2JykuZmluZCgnbGkuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0Ly9hZGRpbmcgdGhlIHN0YXRlIGZvciB0aGlzIHBhcmVudCBtZW51XHJcblx0XHQkKHRoaXMpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdH0pO1xyXG5cdCQoJyNnZXRhcXVvdGUgbGkgYScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly9yZW1vdmluZyB0aGUgcHJldmlvdXMgc2VsZWN0ZWQgbWVudSBzdGF0ZVxyXG5cdFx0JCgnI2dldGFxdW90ZScpLmZpbmQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdC8vYWRkaW5nIHRoZSBzdGF0ZSBmb3IgdGhpcyBwYXJlbnQgbWVudVxyXG5cdFx0JCh0aGlzKS5wYXJlbnRzKFwibGlcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gJChcIiBsaSBhLmFjdGl2ZVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdCQoXCIubWVnYW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9qZWN0U3dpcGVyXCIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogNCxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cclxuXHRcdH0sXHJcblx0XHQvLyBuYXZpZ2F0aW9uOiB7IFxyXG5cdFx0Ly8gXHRuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG5cdFx0Ly8gXHRwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG5cdFx0Ly8gfSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblxyXG5cdFx0XHQxMDAwOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogNFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3MDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdDUwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0dmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuYmFubmVyU3dpcGVyXCIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcblx0XHQvLyBwYWdpbmF0aW9uOiB7XHJcblx0XHQvLyBcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdC8vIFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cclxuXHRcdC8vIH0sXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcblx0XHRcdHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5iYW5uZXJUaHVtYlN3aXBlclwiLCB7XHJcblxyXG5cdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAxNSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdC8vIHBhZ2luYXRpb246IHtcclxuXHRcdC8vIFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0Ly8gXHRjbGlja2FibGU6IHRydWUsXHJcblxyXG5cdFx0Ly8gfSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cclxuXHRcdFx0NTc1OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0fSxcclxuXHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5jbGllbnRTd2lwZXJcIiwge1xyXG5cdFx0c2xpZGVzUGVyVmlldzogNSxcclxuXHRcdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cdFx0Y2VudGVyZWRTbGlkZXNCb3VuZHM6IHRydWUsXHJcblx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcblxyXG5cdFx0Ly8gcGFnaW5hdGlvbjoge1xyXG5cdFx0Ly8gXHRlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdC8vIFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0Ly8gfSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ1NzU6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmNvbXBhbnlHcm91cFwiLCB7XHJcblx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0Ly8gY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHQvLyBjZW50ZXJlZFNsaWRlc0JvdW5kczogdHJ1ZSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcblxyXG5cdFx0Ly8gcGFnaW5hdGlvbjoge1xyXG5cdFx0Ly8gXHRlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdC8vIFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0Ly8gfSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdDU3NToge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi50b3BDbGllbnRTd2lwZXJcIiwge1xyXG5cdFx0c2xpZGVzUGVyVmlldzogNSxcclxuXHRcdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cdFx0Y2VudGVyZWRTbGlkZXNCb3VuZHM6IHRydWUsXHJcblx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcblxyXG5cdFx0Ly8gcGFnaW5hdGlvbjoge1xyXG5cdFx0Ly8gXHRlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuXHRcdC8vIFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0Ly8gfSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuXHRcdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ1NzU6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5hYm91dENsaWVudFN3aXBlclwiLCB7XHJcblx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRjZW50ZXJlZFNsaWRlc0JvdW5kczogdHJ1ZSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0bG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDU3NToge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDFcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHRcdC8vIHBhZ2luYXRpb246IHtcclxuXHRcdC8vICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcblx0XHQvLyAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBuYXZpZ2F0aW9uOiB7XHJcblx0XHQvLyAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcblx0XHQvLyAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcblx0XHQvLyB9LFxyXG5cclxuXHR9KTtcclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmFjY3JlZGl0YXRpb25zU3dpcGVyXCIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRzcGFjZUJldHdlZW46IDUsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcblx0XHQvLyBwYWdpbmF0aW9uOiB7XHJcblx0XHQvLyAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG5cdFx0Ly8gICBjbGlja2FibGU6IHRydWUsXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG5cdFx0XHRwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG5cdFx0fSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdH0sXHJcblx0XHRcdDcwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDUwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdH0sXHJcblx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDFcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHR2YXIgY291bnRlcnMgPSAkKFwiLmNvdW50XCIpO1xyXG5cdHZhciBjb3VudGVyc1F1YW50aXR5ID0gY291bnRlcnMubGVuZ3RoO1xyXG5cdHZhciBjb3VudGVyID0gW107XHJcblx0dmFyIHN0YXJ0Y291bnQgPSBbXTtcclxuXHR2YXIgaSA9IDA7XHJcblx0dmFyIGogPSAwO1xyXG5cdGZvciAoaSA9IDA7IGkgPCBjb3VudGVyc1F1YW50aXR5OyBpKyspIHtcclxuXHRcdGNvdW50ZXJbaV0gPSBwYXJzZUludChjb3VudGVyc1tpXS5pbm5lckhUTUwpO1xyXG5cdFx0c3RhcnRjb3VudFtpXSA9IGNvdW50ZXJbaV07XHJcblx0fVxyXG5cclxuXHR2YXIgY291bnQgPSBmdW5jdGlvbiBjb3VudChzdGFydCwgdmFsdWUsIGlkKSB7XHJcblx0XHR2YXIgbG9jYWxTdGFydCA9IHN0YXJ0O1xyXG5cdFx0c2V0SW50ZXJ2YWwoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGxvY2FsU3RhcnQgPCB2YWx1ZSkge1xyXG5cdFx0XHRcdGxvY2FsU3RhcnQrKztcclxuXHRcdFx0XHRjb3VudGVyc1tpZF0uaW5uZXJIVE1MID0gbG9jYWxTdGFydDtcclxuXHRcdFx0fVxyXG5cdFx0fSksIDQwKTtcclxuXHR9O1xyXG5cclxuXHRzdGFydGNvdW50LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG5cdCAgcmV0dXJuIGEgLSBiO1xyXG5cdH0pO1xyXG5cclxuXHRmb3IgKGogPSAwOyBqIDwgY291bnRlcnNRdWFudGl0eTsgaisrKSB7XHJcblx0XHR2YXIgc3RhcnQgPSBjb3VudGVyW2pdIC0gc3RhcnRjb3VudFswXTtcclxuXHRcdGNvdW50KHN0YXJ0LCBjb3VudGVyW2pdLCBqKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBDYWNoZSBzZWxlY3RvcnNcclxudmFyIGxhc3RJZCxcclxuXHR0b3BNZW51ID0gJChcIiN0b3AtbWVudVwiKSxcclxuXHR0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpICsgMTUsXHJcblx0Ly8gQWxsIGxpc3QgaXRlbXNcclxuXHRtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhXCIpLFxyXG5cdC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXHJcblx0c2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcclxuXHRcdGlmIChpdGVtLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbi8vIEJpbmQgY2xpY2sgaGFuZGxlciB0byBtZW51IGl0ZW1zXHJcbi8vIHNvIHdlIGNhbiBnZXQgYSBmYW5jeSBzY3JvbGwgYW5pbWF0aW9uXHJcbm1lbnVJdGVtcy5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cdHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuXHRcdG9mZnNldFRvcCA9IGhyZWYgPT09IFwiI1wiID8gMCA6ICQoaHJlZikub2Zmc2V0KCkudG9wIC0gdG9wTWVudUhlaWdodCArIDE7XHJcblx0JCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuXHRcdHNjcm9sbFRvcDogb2Zmc2V0VG9wXHJcblx0fSwgMzAwKTtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gQmluZCB0byBzY3JvbGxcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0Ly8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cclxuXHR2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkgKyB0b3BNZW51SGVpZ2h0O1xyXG5cclxuXHQvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxyXG5cdHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0fSk7XHJcblx0Ly8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XHJcblx0Y3VyID0gY3VyW2N1ci5sZW5ndGggLSAxXTtcclxuXHR2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XHJcblxyXG5cdGlmIChsYXN0SWQgIT09IGlkKSB7XHJcblx0XHRsYXN0SWQgPSBpZDtcclxuXHRcdC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXHJcblx0XHRtZW51SXRlbXNcclxuXHRcdFx0LnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXHJcblx0XHRcdC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnByb2plY3Qtc3dpcGVyJywge1xyXG5cdHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdC8vIHNsaWRlc1BlclZpZXc6IDEuNSxcclxuXHQvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHQvLyBsb29wOiB0cnVlLFxyXG5cdC8vIHNwYWNlQmV0d2VlbjogMTAsXHJcblxyXG5cclxuXHJcblx0c2xpZGVzUGVyVmlldzogMS41LFxyXG5cdHNwYWNlQmV0d2VlbjogMSxcclxuXHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRmcmVlTW9kZTogdHJ1ZSxcclxuXHRsb29wOiB0cnVlLFxyXG5cdC8vIHBhZ2luYXRpb246IHtcclxuXHQvLyBcdGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG5cdC8vIFx0Y2xpY2thYmxlOiB0cnVlXHJcblx0Ly8gfSxcclxuXHRhdXRvcGxheToge1xyXG5cdFx0ZGVsYXk6IDQwMDAsXHJcblx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuXHR9LFxyXG5cdG5hdmlnYXRpb246IHtcclxuXHRcdG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcblx0XHRwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiXHJcblx0fSxcclxuXHRicmVha3BvaW50czoge1xyXG5cdFx0MTIwMDoge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLjUsXHJcblx0XHR9LFxyXG5cdFx0MTE5OToge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0MzAwOiB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDFcclxuXHRcdH0sXHJcblx0fVxyXG5cclxuXHJcblxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9CdXR0b24gQ291bnQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG52YXIgbnVtO1xyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ1dHRvbi1jb3VudDpmaXJzdC1jaGlsZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRudW0gPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0OnRleHQnKS52YWwoKSk7XHJcblx0aWYgKG51bSA+IDApIHtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnaW5wdXQ6dGV4dCcpLnZhbChudW0gLSAxKTtcclxuXHR9XHJcblx0aWYgKG51bSA9PSAxKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5idXR0b24tY291bnQ6Zmlyc3QtY2hpbGQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdH1cclxuXHRpZiAobnVtID09IDEwMCkge1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYnV0dG9uLWNvdW50Omxhc3QtY2hpbGQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idXR0b24tY291bnQ6bGFzdC1jaGlsZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRudW0gPSBwYXJzZUludCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0OnRleHQnKS52YWwoKSk7XHJcblx0aWYgKG51bSA8IDEwMCkge1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dDp0ZXh0JykudmFsKG51bSArIDEpO1xyXG5cdH1cclxuXHRpZiAobnVtID4gMCkge1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYnV0dG9uLWNvdW50OmZpcnN0LWNoaWxkJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0fVxyXG5cdGlmIChudW0gPT0gMTAwKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5idXR0b24tY291bnQ6bGFzdC1jaGlsZCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vU2VsZWN0IEZpbGUgTmFtZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdXBsb2FkJyk7XHJcbnZhciBpbmZvQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlLXVwbG9hZC1maWxlbmFtZScpO1xyXG5pZihpbnB1dClcclxuXHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzaG93RmlsZU5hbWUpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0ZpbGVOYW1lKGV2ZW50KSB7XHJcblx0dmFyIGlucHV0ID0gZXZlbnQuc3JjRWxlbWVudDtcclxuXHR2YXIgZmlsZU5hbWUgPSBpbnB1dC5maWxlc1swXS5uYW1lO1xyXG5cdGluZm9BcmVhLnRleHRDb250ZW50ID0gJ0ZpbGUgbmFtZTogJyArIGZpbGVOYW1lO1xyXG59XHJcblxyXG52YXIgaW5wdXRwb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS11cGxvYWQtcG9wdXAnKTtcclxudmFyIGluZm9BcmVhcG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdXBsb2FkLWZpbGVuYW1lLXBvcHVwJyk7XHJcbmlmKGlucHV0KVxyXG5cdGlucHV0cG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNob3dGaWxlTmFtZXBvcCk7XHJcblxyXG5mdW5jdGlvbiBzaG93RmlsZU5hbWVwb3AoZXZlbnQpIHtcclxuXHR2YXIgaW5wdXRwb3AgPSBldmVudC5zcmNFbGVtZW50O1xyXG5cdHZhciBmaWxlTmFtZXBvcCA9IGlucHV0cG9wLmZpbGVzWzBdLm5hbWU7XHJcblx0aW5mb0FyZWFwb3AudGV4dENvbnRlbnQgPSAnRmlsZSBuYW1lOiAnICsgZmlsZU5hbWVwb3A7XHJcbn0gXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbG9nKClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbG9nID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeScpO1xyXG4gICAgfVxyXG59KShqUXVlcnkpO1xyXG4gICAgIiwiLy8gRm9yIGJyZWFrcG9pbnQuLlxyXG5mdW5jdGlvbiBpc0JyZWFrcG9pbnREb3duKGJyZWFrcG9pbnQpIHtcclxuICAgIGlmICgkZ3JpZEJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdICYmICR3aW4ud2lkdGgoKSA8PSAkZ3JpZEJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIC0gLjAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWUgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZSBcclxuICAgIH1cclxufVxyXG4iLCIvLyBCcmVha3BvaW50c1xyXG5sZXQgJGdyaWRCcmVha3BvaW50cyA9IHtcclxuICAgIHhzOiAnMCcsXHJcbiAgICBzbTogNTc2LFxyXG4gICAgLy8gbWQ6IDc2OCxcclxuICAgIG1kOiA3NzgsXHJcbiAgICBsZzogOTkyLFxyXG4gICAgeGw6IDEyMDBcclxufVxyXG5cclxuLy8gd2luZG93XHJcbmNvbnN0ICR3aW4gPSAkKHdpbmRvdyk7XHJcblxyXG4vLyBoZWFkZXJcclxudmFyICRoZWFkZXIgPSAkKFwiLmFwcC1oZWFkZXJcIik7XHJcbnZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbi8vIHBhZ2Ugb2Zmc2V0IG1hcmdpblxyXG52YXIgJHBhZ2VPZmZzZXRYID0gODA7XHJcblxyXG4iXX0=