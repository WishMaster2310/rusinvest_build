"use strict";$(function(){function t(t,i){var s=$(i).css("backgroundImage"),e=$(i).find(".hero__tile-list");s&&e.length>0&&$(e).css({backgroundImage:s})}function i(t){t.preventDefault();var i=$(this).attr("href");$(this).addClass("is-active").siblings().removeClass("is-active"),$(i).addClass("is-active").siblings().removeClass("is-active")}function s(t,i,s,e){function a(){d.addClass("no-animate")}function n(t,i,s){var e=$(d).find(".timed-dots__item");e.eq(s).addClass("is-active").siblings().removeClass("is-active")}function o(){d.removeClass("no-animate")}function l(){$(i).slick("goTo",$(this).index())}var r=t.$slides.length;if(!(r<2))for(var c=t.options.autoplaySpeed,d=$("<div />",{"class":s+" timed-dots"}),p=0;p<r;p++){var f=$("<div />",{"class":"timed-dots__item",html:"<span>0"+(p+1)+'</span>\n\t\t\t\t\t\t\t<svg viewBox="0 0 56 56">\n\t\t\t\t\t\t\t\t<circle \n\t\t\t\t\t\t\t\t\tcx="28" \n\t\t\t\t\t\t\t\t\tcy="28" \n\t\t\t\t\t\t\t\t\tr="25" \n\t\t\t\t\t\t\t\t\tstroke-width="2" \n\t\t\t\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\t-moz-animation-duration: '+c+"ms !important;\n\t\t\t\t\t\t\t\t\t\t-webkit-animation-duration: "+c+"ms !important; \n\t\t\t\t\t\t\t\t\t\tanimation-duration: "+c+'ms !important" />\n\t\t\t\t\t\t\t</svg>'});0===p&&f.addClass("is-active"),f.on("click",l),d.append(f),$(e).append(d),$(i).on("mouseover",a).on("mouseout",o).on("afterChange",n)}}function e(){var t=$(this).closest(".person-slider-wrapper").find(".person-slider");$(t).length>0&&$(t).slick("goTo",$(this).index())}$(".hero__slider").on("init",function(t,i){s(i,".hero__slider","hero__dots",".hero")}),$(".hero__slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,fade:!0,arrows:!1,dots:!1}),$(".hero__slider .hero__slide").each(t),$(".js-select").SumoSelect({captionFormat:"{0} Выбрано",captionFormatAllSelected:"{0} Все выбраны"}),$(".newstab-nav__item").on("click",i),$(".person-slider").each(function(t,i){var s=$(i).closest(".slider-wrapper"),e=$(i).closest(".person-slider-wrapper"),a=e.find(".person-list");$(i).slick({fade:!0,adaptiveHeight:!0,appendArrows:$(s)}),a.length>0&&$(i).on("afterChange",function(t,i,s){a.find(".person-list__item").eq(s).addClass("is-active").siblings(".person-list__item").removeClass("is-active")})}),$(".service-slider").each(function(t,i){var s=$(i).closest(".slider-wrapper");$(i).slick({appendArrows:$(s),slidesToShow:5,slidesToScroll:5,infinite:!1})}),$(".person-list__item").on("click",e),function(){$(".mapper__link").on("click",function(t){t.preventDefault();$(this).closest(".mapper").addClass("is-active")})}(),function(){function t(){var t=$(this),i=$("<div />",{"class":"lined-list-wrapper slider-wrapper"});t.wrap(i);var s=$(t).closest(".lined-list-wrapper");t.slick({appendArrows:$(s),infinite:!1,slidesToShow:5})}$(".lined-list, .pillar-list").each(t),$(".lined-list, .pillar-list").on("setPosition",function(){$(this).find(".slick-slide").height("auto");var t=$(this).find(".slick-track"),i=$(t).height();$(this).find(".slick-slide").css("height",i+"px")}),$(".wysiwyg table").wrap('<div class="table-wrap"></div>')}(),function(){$(".carousel").on("init",function(t,i){s(i,".carousel","carousel__dots",".carousel")}),$(".carousel").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,arrows:!1,dots:!1,fade:!0})}(),function(){function t(t){var i=$(this);if(t.preventDefault(),!i.hasClass("is-active")){var s=i.attr("href");$(s).length>0&&($(s).addClass("is-active").siblings(".tab").removeClass("is-active"),i.addClass("is-active").siblings(".tab-nav__item").removeClass("is-active"))}}$(".tab-nav__item").on("click",t)}(),!function(){$(".invest-card").each(function(t,i){var s=$(i).attr("data-chart");if(s){try{s=JSON.parse(decodeURIComponent(s))}catch(e){if(e)throw new Error(e)}var a=$(i).find(".invest-card__test");AmCharts.makeChart(a[0],{type:"serial",marginRight:0,marginLeft:0,autoMarginOffset:0,colors:["#fff"],dataProvider:s,dataDateFormat:"YYYY-MM-DD",valueAxes:[{axisAlpha:0,labelsEnabled:!1,gridAlpha:0,gridThickness:0,offset:0,ignoreAxisWidth:!0,inside:!0}],graphs:[{id:"g1",lineThickness:2,valueField:"value",fillColors:["#fff"]}],categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0,labelsEnabled:!1,gridAlpha:0,gridThickness:0,ignoreAxisWidth:!0,inside:!0}})}}),$(".invest-slider__list").slick({slidesToShow:3,slidesToScroll:3,infinite:!1,prevArrow:$(".invest-slider__arrow--prev"),nextArrow:$(".invest-slider__arrow--next")})}(),!function(){function t(){var t=$(this),i=t.closest(".accordeon__item"),s=i.find(".accordeon__data");i.hasClass("is-active")?(s.stop(!0,!0).slideUp(),i.removeClass("is-active")):(s.stop(!0,!0).slideDown(),i.addClass("is-active"))}$(".accordeon__title").on("click",t)}(),function(){function t(t,i){function s(){var t=$(this).attr("data-slick")||0;i.goTo(t)}var e=$(i.$slider).closest(".slider-wrapper"),a=$("<div />",{"class":"gallery-thumbs"});console.log("slick: ",i),i.$slides.each(function(t,e){var n=$(e).attr("data-thumb")||$(e).attr("src"),o=$("<div />",{"class":"gallery-thumbs__item","data-slick":t,css:{backgroundImage:"url("+n+")"}});i.currentSlide===t&&o.addClass("is-active"),o.on("click",s),a.append(o)}),a.insertAfter(e)}$(".gallery").each(function(i,s){var e=$(s).closest(".slider-wrapper");$(s).on("init",t),$(s).slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3,dots:!1,appendArrows:$(e)}),setTimeout(function(){var t=$(e).siblings(".gallery-thumbs");$(s).on("afterChange",function(i,s,e){var a=t.find(".gallery-thumbs__item")[e];$(a).addClass("is-active").siblings(".gallery-thumbs__item").removeClass("is-active")})},0)})}(),function(){function t(t){if($(t).find(".checkbox__box"),!($(t).find(".checkbox__box").length>0)){var i=$(t).find("input"),s=(i[0].type,$("<div />",{"class":"checkbox__box"}));$(t).addClass("is-initialize"),s.insertAfter(i)}}$(".checkbox").each(function(i,s){t(s)})}()});
//# sourceMappingURL=../javascripts/common.js.map
