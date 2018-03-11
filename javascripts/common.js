"use strict";$(function(){function t(t,s){var i=$(s).css("backgroundImage"),e=$(s).find(".hero__tile-list");i&&e.length>0&&$(e).css({backgroundImage:i})}function s(t){t.preventDefault();var s=$(this).attr("href");$(this).addClass("is-active").siblings().removeClass("is-active"),$(s).addClass("is-active").siblings().removeClass("is-active")}function i(t,s,i,e){function a(){d.addClass("no-animate")}function o(t,s,i){var e=$(d).find(".timed-dots__item");e.eq(i).addClass("is-active").siblings().removeClass("is-active")}function n(){d.removeClass("no-animate")}function r(){$(s).slick("goTo",$(this).index())}var l=t.$slides.length;if(!(l<2))for(var c=t.options.autoplaySpeed,d=$("<div />",{"class":i+" timed-dots"}),p=0;p<l;p++){var h=$("<div />",{"class":"timed-dots__item",html:"<span>0"+(p+1)+'</span>\n\t\t\t\t\t\t\t<svg viewBox="0 0 56 56">\n\t\t\t\t\t\t\t\t<circle \n\t\t\t\t\t\t\t\t\tcx="28" \n\t\t\t\t\t\t\t\t\tcy="28" \n\t\t\t\t\t\t\t\t\tr="25" \n\t\t\t\t\t\t\t\t\tstroke-width="2" \n\t\t\t\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\t-moz-animation-duration: '+c+"ms !important;\n\t\t\t\t\t\t\t\t\t\t-webkit-animation-duration: "+c+"ms !important; \n\t\t\t\t\t\t\t\t\t\tanimation-duration: "+c+'ms !important" />\n\t\t\t\t\t\t\t</svg>'});0===p&&h.addClass("is-active"),h.on("click",r),d.append(h),$(e).append(d),$(s).on("mouseover",a).on("mouseout",n).on("afterChange",o)}}function e(){var t=$(this).closest(".person-slider-wrapper").find(".person-slider");$(t).length>0&&$(t).slick("goTo",$(this).index())}$(".hero__slider").on("init",function(t,s){i(s,".hero__slider","hero__dots",".hero")}),$(".hero__slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,fade:!0,arrows:!1,dots:!1}),$(".hero__slider .hero__slide").each(t),$(".js-select").SumoSelect({captionFormat:"{0} Выбрано",captionFormatAllSelected:"{0} Все выбраны"}),$(".newstab-nav__item").on("click",s),$(".person-slider").each(function(t,s){var i=$(s).closest(".slider-wrapper"),e=$(s).closest(".person-slider-wrapper"),a=e.find(".person-list");$(s).slick({fade:!0,adaptiveHeight:!0,appendArrows:$(i),responsive:[{breakpoint:1024,settings:{arrows:!1,dots:!0}}]}),a.length>0&&$(s).on("afterChange",function(t,s,i){a.find(".person-list__item").eq(i).addClass("is-active").siblings(".person-list__item").removeClass("is-active")})}),$(".service-slider").each(function(t,s){var i=$(s).closest(".slider-wrapper");$(s).slick({appendArrows:$(i),slidesToShow:5,slidesToScroll:5,infinite:!1,responsive:[{breakpoint:1200,settings:{arrows:!1,dots:!0}},{breakpoint:1024,settings:{arrows:!1,slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:680,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2,dots:!0}}]})}),$(".person-list__item").on("click",e),function(){$(".mapper__link").on("click",function(t){t.preventDefault();$(this).closest(".mapper").addClass("is-active")})}(),function(){function t(){var t=$(this),s=$("<div />",{"class":"lined-list-wrapper slider-wrapper"});t.wrap(s);var i=$(t).closest(".lined-list-wrapper");t.slick({appendArrows:$(i),infinite:!1,slidesToShow:5,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!0}},{breakpoint:780,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1,dots:!0}}]})}$(".lined-list, .pillar-list").each(t),$(".lined-list, .pillar-list").on("setPosition",function(){$(this).find(".slick-slide").height("auto");var t=$(this).find(".slick-track"),s=$(t).height();$(this).find(".slick-slide").css("height",s+"px")}),$(".wysiwyg table").wrap('<div class="table-wrap"></div>')}(),function(){$(".carousel").on("init",function(t,s){i(s,".carousel","carousel__dots",".carousel")}),$(".carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,arrows:!1,dots:!1,fade:!0})}(),function(){function t(t){var s=$(this);if(t.preventDefault(),!s.hasClass("is-active")){var i=s.attr("href");$(i).length>0&&($(i).addClass("is-active").siblings(".tab").removeClass("is-active"),s.addClass("is-active").siblings(".tab-nav__item").removeClass("is-active"))}}$(".tab-nav__item").on("click",t)}(),!function(){$(".invest-card").each(function(t,s){var i=$(s).attr("data-chart");if(i){try{i=JSON.parse(decodeURIComponent(i))}catch(e){if(e)throw new Error(e)}var a=$(s).find(".invest-card__test");AmCharts.makeChart(a[0],{type:"serial",marginRight:0,marginLeft:0,autoMarginOffset:0,colors:["#fff"],dataProvider:i,dataDateFormat:"YYYY-MM-DD",valueAxes:[{axisAlpha:0,labelsEnabled:!1,gridAlpha:0,gridThickness:0,offset:0,ignoreAxisWidth:!0,inside:!0}],graphs:[{id:"g1",lineThickness:2,valueField:"value",fillColors:["#fff"]}],categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0,labelsEnabled:!1,gridAlpha:0,gridThickness:0,ignoreAxisWidth:!0,inside:!0}})}}),$(".invest-slider__list").slick({slidesToShow:3,slidesToScroll:3,infinite:!1,prevArrow:$(".invest-slider__arrow--prev"),nextArrow:$(".invest-slider__arrow--next")})}(),!function(){function t(){var t=$(this),s=t.closest(".accordeon__item"),i=s.find(".accordeon__data");s.hasClass("is-active")?(i.stop(!0,!0).slideUp(),s.removeClass("is-active")):(i.stop(!0,!0).slideDown(),s.addClass("is-active"))}$(".accordeon__title").on("click",t)}(),function(){function t(t,s){function i(){var t=$(this).attr("data-slick")||0;s.goTo(t)}var e=$(s.$slider).closest(".slider-wrapper"),a=$("<div />",{"class":"gallery-thumbs"});console.log("slick: ",s),s.$slides.each(function(t,e){var o=$(e).attr("data-thumb")||$(e).attr("src"),n=$("<div />",{"class":"gallery-thumbs__item","data-slick":t,css:{backgroundImage:"url("+o+")"}});s.currentSlide===t&&n.addClass("is-active"),n.on("click",i),a.append(n)}),a.insertAfter(e)}$(".gallery").each(function(s,i){var e=$(i).closest(".slider-wrapper");$(i).on("init",t),$(i).slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,dots:!1,appendArrows:$(e)}),setTimeout(function(){var t=$(e).siblings(".gallery-thumbs");$(i).on("afterChange",function(s,i,e){var a=t.find(".gallery-thumbs__item")[e];$(a).addClass("is-active").siblings(".gallery-thumbs__item").removeClass("is-active")})},0)})}(),function(){function t(t){if($(t).find(".checkbox__box"),!($(t).find(".checkbox__box").length>0)){var s=$(t).find("input"),i=(s[0].type,$("<div />",{"class":"checkbox__box"}));$(t).addClass("is-initialize"),i.insertAfter(s)}}$(".checkbox").each(function(s,i){t(i)})}()});
//# sourceMappingURL=../javascripts/common.js.map
