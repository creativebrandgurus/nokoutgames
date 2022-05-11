var em = {};
$(document).ready(function () {
    for (var e in em) "function" == typeof em[e].init ? em[e].init() : console.error("Your block " + e + " doesn't define init-method.")
}),
    function () {
        for (var e, t = function () { }, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], a = i.length, n = window.console = window.console || {}; a--;) e = i[a], n[e] || (n[e] = t)
    }(),
    function () {
        em.ajax = {}, em.ajax.init = function () {
            em.ajax.postsSearch()
        }, em.ajax.postsSearch = function () {
            var e = $("form.ajax-posts");
            e.on("submit", function (e) {
                e.preventDefault();
                var t = $(this),
                    i = t.find(".ajax-posts__errors"),
                    a = "/wp-site/wp/wp-admin/admin-ajax.php",
                    n = t.find(".ajax-posts__results"),
                    o = t.find('input[name="paged"]');
                t.find('input[name="per_page"]');
                t.find(".ajax-posts__show-more i").addClass("fa-spin");
                var r = t.serializeArray();
                r.push({
                    name: "action",
                    value: t.attr("action")
                }), $.ajax({
                    url: a,
                    type: t.attr("method"),
                    data: r,
                    success: function (e) {
                        if (i.empty(), 0 === e.errors.length) o.val(function (e, t) {
                            return ++t
                        }), n.append($(e.data.html)), em.animations.capture();
                        else {
                            $(".ajax-posts__show-more").css({
                                opacity: 0,
                                visibility: "hidden"
                            });
                            for (var a in e.errors)
                                if ("end" != a) {
                                    var r = $("<li></li>");
                                    r.html(e.errors[a]), i.append(r)
                                }
                        }
                        t.find(".ajax-posts__show-more i").removeClass("fa-spin")
                    },
                    error: function (e, t, i) {
                        var n = ["Issues requesting: " + a, i];
                        console.log(n)
                    }
                })
            }), e.submit(), e.find(".ajax-posts__show-more").on("click", function (t) {
                t.preventDefault(), e.submit()
            })
        }
    }(),
    function () {
        em.animations = {
            elements: {},
            winWidthOk: !1
        }, em.animations.init = function () {
            em.animations.capture(), em.animations.checkRequiredWidth(), em.animations.animateFirstBlockIn(), em.animations.setup()
        }, em.animations.capture = function () {
            em.animations.elements = $("[data-animate]")
        }, em.animations.checkRequiredWidth = function () {
            window.innerWidth > 1024 ? (em.animations.winWidthOk = !0, em.animations.animate(), em.animations.animateFirstBlockIn()) : em.animations.winWidthOk = !1
        }, em.animations.canWe = function () {
            return !(!em.animations.elements.length || em.animations.winWidthOk !== !0)
        }, em.animations.setup = function () {
            $(window).on("scroll", function () {
                return !!em.animations.canWe() && void em.animations.animate()
            }).scroll(), em.animations.canWe() || em.animations.elements.each(function () {
                $(this).addClass($(this).data("animate"))
            })
        }, em.animations.animate = function () {
            em.animations.elements.each(function () {
                var e = $(window),
                    t = $(this),
                    i = e.scrollTop(),
                    a = e.height(),
                    n = t.offset().top;
                n < i + a && t.addClass(t.data("animate"))
            })
        }, em.animations.animateFirstBlockIn = function () {
            if (em.animations.canWe()) {
                var e = $(".main-header > section.hero + section"),
                    t = e.find("div").eq(0);
                e.hasClass("toBeAnimated") ? t.css({
                    opacity: 1
                }) : t.addClass("animated fadeInUp")
            }
        }
    }(),
    function () {
        em.blog = {}, em.blog.slickSettings = {
            adaptiveHeight: !0,
            arrows: !1,
            asNavFor: ".js-blog-nav",
            cssEase: "ease",
            dots: !1,
            infinite: !1,
            initialSlide: 1,
            mobileFirst: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            transformEnabled: !0,
            useTransform: !0,
            responsive: [{
                breakpoint: 992,
                settings: "unslick"
            }]
        }, em.blog.slickNavSettings = {
            arrows: !1,
            asNavFor: ".js-blog-items",
            centerMode: !0,
            centerPadding: "33.33%",
            cssEase: "ease",
            dots: !1,
            focusOnSelect: !0,
            infinite: !1,
            initialSlide: 1,
            mobileFirst: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            transformEnabled: !0,
            useTransform: !0,
            responsive: [{
                breakpoint: 992,
                settings: "unslick"
            }]
        }, em.blog.init = function () {
            em.blog.setup()
        }, em.blog.capture = function () {
            em.blog.elements = $(".blog")
        }, em.blog.setup = function () {
            em.blog.capture(), em.blog.elements.each(function () {
                var e = $(this);
                em.blog.initSlick(e)
            })
        }, em.blog.initSlick = function (e) {
            var t = e.find(".js-blog-items"),
                i = e.find(".js-blog-nav");
            t.slick(em.blog.slickSettings), i.slick(em.blog.slickNavSettings)
        }, em.blog.resize = function () {
            Modernizr.mq("only screen and (min-width: 992px)") || em.blog.elements.each(function () {
                var e = $(this),
                    t = e.find(".js-blog-items"),
                    i = e.find(".js-blog-nav");
                t.hasClass("slick-initialized") || t.slick(em.blog.slickSettings), i.hasClass("slick-initialized") || i.slick(em.blog.slickNavSettings)
            })
        }
    }(),
    function () {
        em.config = {}, em.config.init = function () { }, em.config.breakpoints = {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200
        }
    }(),
    function () {
        em.creators = {}, em.creators.init = function () {
            em.creators.capture(), em.creators.setup()
        }, em.creators.capture = function () {
            em.creators.elements = $(".creator-leafs")
        }, em.creators.setup = function () {
            em.creators.elements.each(function () {
                em.creators.initAnimation($(this))
            })
        }, em.creators.initAnimation = function (e) {
            var t = [e.find(".creator-leaf--01"), e.find(".creator-leaf--02"), e.find(".creator-leaf--03"), e.find(".creator-leaf--04"), e.find(".creator-leaf--05"), e.find(".creator-leaf--06")],
                i = [e.find(".creator-leaf--07"), e.find(".creator-leaf--08"), e.find(".creator-leaf--09"), e.find(".creator-leaf--10"), e.find(".creator-leaf--11"), e.find(".creator-leaf--12")];
            em.creators.animateLeaf(t[0], i[0], 15, 25), em.creators.animateLeaf(t[1], i[1], 12, -25), em.creators.animateLeaf(t[2], i[2], 22, 25), em.creators.animateLeaf(t[3], i[3], 18, -25), em.creators.animateLeaf(t[4], i[4], 17, 25), em.creators.animateLeaf(t[5], i[5], 14, -25), e.addClass("is-loaded")
        }, em.creators.animateLeaf = function (e, t, i, a) {
            if (!e) return !1;
            var n = gsap.timeline({
                repeat: -1
            });
            if (n.fromTo(e, {
                y: "-50vh",
                xPercent: 25
            }, {
                y: "50vh",
                xPercent: -25,
                rotate: a,
                duration: i,
                ease: "linear"
            }), n.fromTo(e, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1
            }, 0), n.fromTo(e, {
                opacity: 1
            }, {
                opacity: 0,
                duration: 1
            }, i - 1), !t) return !1;
            var o = gsap.timeline({
                repeat: -1
            });
            o.fromTo(t, {
                y: "-50vh",
                xPercent: -25
            }, {
                y: "50vh",
                xPercent: 25,
                rotate: a,
                duration: i,
                ease: "linear"
            }), o.fromTo(t, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1
            }, 0), o.fromTo(t, {
                opacity: 1
            }, {
                opacity: 0,
                duration: 1
            }, i - 1), o.seek(i / 2)
        }
    }(),
    function () {
        em.dev = {}, em.dev.init = function () {
            em.dev.toolbox()
        }, em.dev.toolbox = function () {
            $(".toolbox__navbar .toolbox__open").on("click", function (e) {
                e.preventDefault(), $("body").toggleClass("js-toolbox-open"), $(this).next().toggleClass("js-show")
            }), $(".js-toggle-code").on("click", function (e) {
                e.preventDefault();
                var t = $(this),
                    i = t.closest(".toolbox__item");
                i.find(".toolbox__item__code").toggleClass("hidden")
            }), $(document).on("keydown", function (e) {
                84 == e.which && $(".toolbox__navbar .toolbox__open").click()
            })
        }
    }(),
    function () {
        em.download = {}, em.download.init = function () {
            em.download.setup()
        }, em.download.capture = function () {
            em.download.elements = $(".js-download")
        }, em.download.setup = function () {
            em.download.capture(), em.download.setupEmailSend(), em.download.elements.each(function () {
                var e = $(this);
                e.click(function (t) {
                    t.preventDefault(), em.download.start(e)
                })
            })
        }, em.download.start = function (e) {
            var t = em.download.checkDevice(),
                i = {
                    iosUrl: e.data("ios"),
                    appleArcadeUrl: e.data("appleArcade"),
                    androidUrl: e.data("android"),
                    amazonUrl: e.data("amazon"),
                    macUrl: e.data("mac"),
                    facebookUrl: e.data("facebook"),
                    hasEmailUrl: e.data("email"),
                    appIcon: e.data("appIcon"),
                    appKeyArt: e.data("appKeyArt"),
                    title: e.data("title"),
                    description: e.data("description"),
                    pageUrl: e.data("pageUrl")
                };
            t ? "ios" == t && i.iosUrl ? window.location.href = i.iosUrl : "ios" == t && i.appleArcadeUrl ? window.location.href = i.appleArcadeUrl : "android" == t && i.androidUrl ? window.location.href = i.androidUrl : window.location.href = e.attr("href") : em.download.showPopup(i)
        }, em.download.checkDevice = function () {
            return em.helper.isAndroid() ? "android" : !!em.helper.isIOS() && "ios"
        }, em.download.showPopup = function (e) {
            var t = [];
            t = e.appKeyArt ? ['<div class="mfp-inline__download mfp-inline__download--header-img">', '<div class="mfp-inline__download__header" style="background-image:url(' + e.appKeyArt + ');">', "</div>", '<div class="mfp-inline__download__content">', "<p>Available from:</p>", em.download.buildBadgeOutput(e), em.download.buildEmailForm(e), "</div>", "</div>"] : ['<div class="mfp-inline__download">', '<div class="mfp-inline__download__header">', '<img class="mfp-inline__download__header__image" src="' + e.appIcon + '" alt="' + e.title + '" />', '<div class="mfp-inline__download__header__content">', '<h4 class="h6">' + e.title + "</h4>", "<p>" + e.description + "</p>", "</div>", "</div>", '<div class="mfp-inline__download__content">', "<p>Available from:</p>", em.download.buildBadgeOutput(e), em.download.buildEmailForm(e), "</div>", "</div>"], t = t.join(""), $.magnificPopup.open({
                items: {
                    src: t,
                    type: "inline"
                },
                closeBtnInside: !0,
                removalDelay: 300,
                mainClass: "mfp-inline mfp-fade",
                callbacks: {
                    beforeOpen: function () {
                        $("html").addClass("mfp-active")
                    },
                    beforeClose: function () {
                        $("html").removeClass("mfp-active")
                    }
                }
            })
        }, em.download.buildBadgeOutput = function (e) {
            var t = "";
            return e.iosUrl && (t += '<a href="' + e.iosUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.apple.url + '" alt="' + php_data.badges.apple.alt + '" /></a>'), e.appleArcadeUrl && (t += '<a href="' + e.appleArcadeUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.appleArcade.url + '" alt="' + php_data.badges.appleArcade.alt + '" /></a>'), e.androidUrl && (t += '<a href="' + e.androidUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.google.url + '" alt="' + php_data.badges.google.alt + '" /></a>'), e.amazonUrl && (t += '<a href="' + e.amazonUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.amazon.url + '" alt="' + php_data.badges.amazon.alt + '" /></a>'), e.macUrl && (t += '<a href="' + e.macUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.mac.url + '" alt="' + php_data.badges.mac.alt + '" /></a>'), e.facebookUrl && (t += '<a href="' + e.facebookUrl + '" target="_blank" class="mfp-inline__download__content__badge"><img src="' + php_data.badges.facebook.url + '" alt="' + php_data.badges.facebook.alt + '" /></a>'), t
        }, em.download.buildEmailForm = function (e) {
            var t;
            return e.hasEmailUrl && (t = ['<div class="mfp-inline__download__content__send">', '<div class="mfp-inline__download__content__form">', '<h5 class="mfp-inline__download__content__title">' + php_data.str.send_download_link_title + "</h5>", '<input class="mfp-inline__download__content__input js-download-send-email" name="EMAIL_FIELD" type="email" placeholder="Email" />', '<a href="' + e.pageUrl + '" class="btn btn--yellow js-download-send">Send the link</a>', "</div>", '<div class="mfp-inline__download__content__success wysiwyg-html">' + php_data.str.download_link_success_message + "</div>", "</div>"], t = t.join("")), t
        }, em.download.setupEmailSend = function () {
            $("body").on("click", ".js-download-send", function (e) {
                e.preventDefault();
                var t = $(this),
                    i = t.parent().parent(),
                    a = t.siblings(".js-download-send-email"),
                    n = t.attr("href") + "?action=email_download",
                    o = {
                        email: a.val()
                    };
                a.removeClass("error"), a.siblings(".js-download-send-error").remove(), em.helper.isValidEmail(o.email) ? (t.addClass("disabled").html("Sending..."), i.addClass("loading"), $.ajax({
                    url: n,
                    type: "post",
                    data: o,
                    success: function (e, n) {
                        t.removeClass("disabled").html("Send the link"), i.removeClass("loading"), "success" === e ? i.addClass("success") : a.after('<div class="mfp-inline__download__content__error-container js-download-send-error"><div class="mfp-inline__download__content__error">' + php_data.str.download_link_error_message + "</div></div>")
                    },
                    error: function (e, t, i) {
                        console.log(e), console.log("Details: " + t + "\nError:" + i)
                    }
                })) : (a.addClass("error"), a.after('<div class="mfp-inline__download__content__error-container js-download-send-error"><div class="mfp-inline__download__content__error">Please enter a valid email address!</div></div>'))
            })
        }
    }(),
    function () {
        em.example = {}, em.example.init = function () {
            em.example.setup()
        }, em.example.setup = function () { }
    }(),
    function () {
        em.forms = {}, em.forms.init = function () {
            em.forms.events()
        }, em.forms.events = function () {
            $("select.js-on-change-submit").change(function () {
                this.form.submit()
            })
        }
    }(),
    function () {
        em.galleryItem = {}, em.galleryItem.init = function () {
            em.galleryItem.setup()
        }, em.galleryItem.capture = function () {
            em.galleryItem.elements = $(".js-gallery-item")
        }, em.galleryItem.setup = function () {
            em.galleryItem.capture(), em.galleryItem.elements.magnificPopup({
                type: "image",
                mainClass: "mfp-image mfp-cover",
                removalDelay: 500,
                closeBtnInside: !1,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0
                }
            })
        }
    }(),
    function () {
        em.gallery = {}, em.gallery.init = function () {
            em.gallery.capture(), em.gallery.setup()
        }, em.gallery.capture = function () {
            em.gallery.elements = $(".js-gallery")
        }, em.gallery.setup = function () {
            em.gallery.elements.each(function () {
                var e = $(this);
                em.gallery.initMasonry(e)
            })
        }, em.gallery.initMasonry = function (e) {
            var t = e.find(".gallery-block__item");
            e.imagesLoaded(function () {
                e.masonry({
                    columnWidth: ".gallery-block__sizer",
                    itemSelector: ".gallery-block__item",
                    transitionDuration: 0,
                    percentPosition: !0
                }), em.gallery.animateMasonry(e, t)
            })
        }, em.gallery.animateMasonry = function (e, t) {
            e.addClass("animated fadeIn")
        }, em.gallery.resize = function () {
            em.gallery.elements.each(function () {
                var e = $(this);
                e.masonry("layout")
            })
        }
    }(),
    function () {
        em.gridEqualHeight = {}, em.gridEqualHeight.init = function () {
            em.gridEqualHeight.capture(), em.gridEqualHeight.setup(), $(window).resizeend(function () {
                em.gridEqualHeight.resize()
            })
        }, em.gridEqualHeight.capture = function () {
            em.gridEqualHeight.elements = $(".js-grid-equal-height")
        }, em.gridEqualHeight.reCapture = function () {
            em.gridEqualHeight.capture(), em.gridEqualHeight.setup()
        }, em.gridEqualHeight.setup = function () {
            em.gridEqualHeight.elements.each(function () {
                var e = $(this),
                    t = e.find(".js-grid-equal-height-container"),
                    i = e.find(".js-grid-equal-height-item");
                if (t.length || (t = i), i.length) {
                    var a = Math.round(e.outerWidth() / $(t[0]).outerWidth()),
                        n = 0;
                    a > 1 ? i.each(function (e) {
                        var t, o = $(this),
                            r = e + 1;
                        if (o.css({
                            minHeight: 0
                        }), t = o.outerHeight() + 1, t > n && (n = t), r % a === 0) em.gridEqualHeight.setHeights(i, e, a, n), n = 0;
                        else if (r == i.length) {
                            var s = r % a;
                            1 !== s && em.gridEqualHeight.setHeights(i, e, s, n)
                        }
                    }) : i.each(function () {
                        $(this).css({
                            minHeight: 0
                        })
                    })
                }
            })
        }, em.gridEqualHeight.setHeights = function (e, t, i, a) {
            for (var n = [], o = t; o > t - i; o--) n.push(e[o]);
            $.each(n, function () {
                $(this).css({
                    minHeight: a + "px"
                })
            })
        }, em.gridEqualHeight.resize = function () {
            em.gridEqualHeight.setup()
        }
    }(),
    function () {
        em.helper = {}, em.helper.init = function () {
            em.helper.imgRemoveDimensions(), em.helper.resizeVideos(), em.helper.jumpTo(), em.helper.hashCheck(), em.helper.goToNext(), em.helper.externalLinks()
        }, em.helper.externalLinks = function () {
            var e = document.querySelectorAll("a");
            if (e.length > 0)
                for (var t = 0; t < e.length; ++t) {
                    var i = new RegExp("/" + window.location.host + "/");
                    i.test(e[t].href) || e[t].setAttribute("target", "_blank")
                }
        }, em.helper.hashCheck = function () {
            if (window.location.hash) {
                var e = $('[data-jump="' + window.location.hash.substring(1) + '"]').eq(0);
                if (1 == e.length) {
                    var t = e.offset();
                    setTimeout(function () {
                        $("html,body").stop(!0, !0).animate({
                            scrollTop: t.top
                        }, 400, function () { })
                    }, 1e3)
                }
            }
        }, em.helper.imgRemoveDimensions = function () {
            for (var e = document.querySelectorAll("img"), t = 0, i = e.length; t < i; t++) e[t].removeAttribute("width"), e[t].removeAttribute("height")
        }, em.helper.goToNext = function () {
            $(".js-go-to-next").on("click", function (e) {
                e.preventDefault();
                var t = $(this),
                    i = t.closest("section").next(),
                    a = $(i).offset();
                $("html,body").stop(!0, !0).animate({
                    scrollTop: a.top
                }, 400, function () { })
            })
        }, em.helper.isAndroid = function () {
            return !(!/Android/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent))
        }, em.helper.isIOS = function () {
            return !(!/iPhone|iPad|iPod/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent))
        }, em.helper.resizeVideos = function () {
            $("iframe").each(function () {
                var e = $(this);
                e.attr("data-original-width") || (e.attr("data-original-width", e.attr("width")), e.attr("data-original-height", e.attr("height"))), e.attr("width", "100%");
                var t = e.attr("data-original-height") * e.width() / e.attr("data-original-width");
                e.attr("height", t)
            })
        }, em.helper.jumpTo = function () {
            $("body").on("click", ".jump", function () {
                var e = $(this).attr("href");
                if (0 === $(e).length) return !1;
                var t = $(e).offset();
                return $("html,body").stop(!0, !0).animate({
                    scrollTop: t.top
                }, 300, function () {
                    window.location.hash = e
                }), !1
            })
        }, em.helper.isValidDate = function (e) {
            if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e)) return !1;
            var t = e.split("/"),
                i = parseInt(t[1], 10),
                a = parseInt(t[0], 10),
                n = parseInt(t[2], 10);
            if (n < 1900 || n > 2017 || 0 === a || a > 12) return !1;
            var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return (n % 400 === 0 || n % 100 !== 0 && n % 4 === 0) && (o[1] = 29), i > 0 && i <= o[a - 1]
        }, em.helper.isOldEnough = function (e) {
            e = e.substr(6, 4) + "-" + e.substr(0, 2) + "-" + e.substr(3, 2), console.log(e);
            var t = new Date,
                i = new Date(e),
                a = t.getFullYear() - i.getFullYear(),
                n = t.getMonth() - i.getMonth();
            return (n < 0 || 0 === n && t.getDate() < i.getDate()) && a--, a >= 13
        }, em.helper.isValidEmail = function (e) {
            var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return t.test(e)
        }
    }(),
    function () {
        em.iframeOverlay = {}, em.iframeOverlay.init = function () {
            em.iframeOverlay.setupVideo()
        }, em.iframeOverlay.setupVideo = function () {
            $(".js-overlay-iframe").click(function (e) {
                e.preventDefault(), $self = $(this), $.magnificPopup.open({
                    items: {
                        src: $self.attr("href")
                    },
                    type: "iframe",
                    mainClass: "mfp-iframe mfp-cover",
                    removalDelay: 500,
                    closeBtnInside: !1
                })
            })
        }
    }(),
    function () {
        em.listItem = {}, em.listItem.init = function () {
            em.listItem.overlay()
        }, em.listItem.overlay = function () {
            var e = $(".list-item--extend");
            e.each(function () {
                var e = $(this),
                    t = e.find(".list-item__image");
                Modernizr.touch || e.hasClass("list-item--extend--onclick") ? t.on("click", function () {
                    $(this).toggleClass("js-active")
                }) : t.hover(function () {
                    $(this).toggleClass("js-active")
                })
            })
        }
    }(),
    function () {
        em.masonry = {}, em.masonry.init = function () {
            em.masonry.setup()
        }, em.masonry.setup = function () {
            var e = $("div.masonry__items");
            e.imagesLoaded(function () {
                e.masonry({
                    itemSelector: "div.masonry__item"
                })
            })
        }
    }(),
    function () {
        em.navigation = {}, em.navigation.init = function () {
            $(".navtoggle").on("click", function () {
                return $("body").toggleClass("nav-open"), !1
            }), $("body").on("click", "body.nav-open", function (e) {
                return ".nav-bar .nav" !== e.target.className && $("body.nav-open .navtoggle").click(), !0
            }), $("body").on("click", 'a[href^="#scroll-"]', function (e) {
                e.preventDefault();
                var t = $(e.target),
                    i = t.attr("href").replace("scroll-", "");
                $(i).offset() && $("html, body").animate({
                    scrollTop: $(i).offset().top - 52
                }, 500)
            })
        }
    }(),
    function () {
        em.ninjaForms = {}, em.ninjaForms.init = function () {
            em.ninjaForms.setup()
        }, em.ninjaForms.setup = function () {
            em.ninjaForms.customValidation()
        }, em.ninjaForms.customValidation = function () {
            if ("undefined" != typeof Marionette) {
                var e = Marionette.Object.extend({
                    initialize: function () {
                        var e = Backbone.Radio.channel("submit");
                        this.listenTo(e, "validate:field", this.validateRequired)
                    },
                    validateRequired: function (e) {
                        var t = e.get("key"),
                            i = e.get("value"),
                            a = "date_of_birth",
                            n = "age_gate",
                            o = t.indexOf(a) > -1,
                            r = t.indexOf(n) > -1;
                        if (o && 0 !== e.get("required") && i)
                            if (em.helper.isValidDate(i)) {
                                if (Backbone.Radio.channel("fields").request("remove:error", e.get("id"), "invalid-date-error"), !r) return;
                                em.helper.isOldEnough(i) ? Backbone.Radio.channel("fields").request("remove:error", e.get("id"), "age-gate-error") : Backbone.Radio.channel("fields").request("add:error", e.get("id"), "age-gate-error", php_data.str.age_gate_error)
                            } else Backbone.Radio.channel("fields").request("add:error", e.get("id"), "invalid-date-error", php_data.str.valid_date_error)
                    }
                });
                new e
            }
        }
    }(),
    function () {
        em.playlistCarousel = {}, em.playlistCarousel.init = function () {
            em.playlistCarousel.capture(), em.playlistCarousel.setup()
        }, em.playlistCarousel.capture = function () {
            em.playlistCarousel.elements = $(".js-playlist-carousel")
        }, em.playlistCarousel.setup = function () {
            em.playlistCarousel.elements.each(function () {
                var e = $(this);
                em.playlistCarousel.createSlides(e), em.playlistCarousel.setupSlick(e)
            })
        }, em.playlistCarousel.createSlides = function (e) {
            var t = e.find(".playlist-carousel__item"),
                i = 6;
            Modernizr.mq("only screen and (min-width: 768px)") && (i = 9), Modernizr.mq("only screen and (min-width: 992px)") && (i = 8), Modernizr.mq("only screen and (min-width: 1200px)") && (i = 10);
            for (var a = 0; a < t.length; a += i) t.slice(a, a + i).wrapAll('<div class="playlist-carousel__slide"></div>')
        }, em.playlistCarousel.destroySlides = function (e) {
            var t = e.find(".playlist-carousel__slide");
            t.contents().unwrap()
        }, em.playlistCarousel.setupSlick = function (e) {
            e.slick({
                arrows: !1,
                dots: !0,
                speed: 500,
                mobileFirst: !0,
                useTransform: !0,
                transformEnabled: !0,
                infinite: !1,
                slidestoShow: 1,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: !0
                    }
                }]
            })
        }, em.playlistCarousel.destroySlick = function (e) {
            e.slick("unslick")
        }, em.playlistCarousel.resize = function () { }
    }(),
    function () {
        em.product = {}, em.product.init = function () {
            em.product.setup()
        }, em.product.capture = function () {
            em.product.elements = $(".product")
        }, em.product.setup = function () {
            em.product.capture(), em.product.elements.each(function () {
                var e = $(this);
                em.product.clearEmptyPrice(e)
            })
        }, em.product.clearEmptyPrice = function (e) {
            var t = e.find(".product__price"),
                i = t.html();
            "---" === i && t.remove()
        }
    }(),
    function () {
        em.resize = {}, em.resize.init = function () {
            em.resize.dom()
        }, em.resize.dom = function () {
            $(window).resizeend(function () {
                $("body.nav-open .navtoggle").click(), em.animations.checkRequiredWidth(), em.helper.resizeVideos(), em.gallery.resize(), em.slideshows.resize(), em.blog.resize(), em.skrollr.resize(), em.playlistCarousel.resize()
            })
        }
    }(),
    function () {
        em.skrollr = {}, em.skrollr.init = function () {
            em.skrollr.setup()
        }, em.skrollr.setup = function () {
            Modernizr.mq("only screen and (min-width: 1025px)") && !Modernizr.touch ? em.skrollr.s = skrollr.init({}) : em.skrollr.s && (em.skrollr.s = skrollr.init().destroy()), $(window).load(function () {
                em.skrollr.refresh()
            }), setInterval(em.skrollr.refresh, 1e4)
        }, em.skrollr.resize = function () {
            em.skrollr.setup()
        }, em.skrollr.refresh = function () {
            "undefined" != typeof em.skrollr.s && em.skrollr.s.refresh()
        }
    }(),
    function () {
        em.slideshows = {}, em.slideshows.columnsSettings = {
            dots: !0,
            speed: 500,
            mobileFirst: !0,
            useTransform: !0,
            transformEnabled: !0,
            slidestoShow: 1,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            }]
        }, em.slideshows.productsSettings = {
            dots: !0,
            speed: 500,
            mobileFirst: !0,
            useTransform: !0,
            transformEnabled: !0,
            slidestoShow: 1,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            }]
        }, em.slideshows.relatedSettings = {
            dots: !0,
            arrows: !1,
            speed: 500,
            slide: ".js-slick-related-item",
            mobileFirst: !0,
            useTransform: !0,
            transformEnabled: !0,
            slidestoShow: 1,
            responsive: [{
                breakpoint: 992,
                settings: "unslick"
            }]
        }, em.slideshows.init = function () {
            em.slideshows.slick()
        }, em.slideshows.slick = function () {
            $(".slick, .slick--hero, .slick--centermode, .slick--blocks, .slick--columns, .slick--related").on("init", function (e) {
                em.skrollr.refresh()
            }), $(".slick").slick({
                dots: !0,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 4e4,
                speed: 500,
                fade: !0,
                cssEase: "linear",
                centerMode: !0,
                slidesToScroll: 1
            }), $(".slick--hero").slick({
                dots: !1,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 4e3,
                speed: 500,
                fade: !0,
                cssEase: "linear",
                slidesToScroll: 1
            }), $(".slick--centermode").slick({
                dots: !0,
                speed: 500,
                slidesToShow: 3,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        arrows: !0,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".slick--blocks").slick({
                dots: !0,
                arrows: !1,
                speed: 500,
                autoplay: !0,
                autoplaySpeed: 5e3,
                useTransform: !0,
                transformEnabled: !0,
                adaptiveHeight: !0
            }), $(".slick--columns").find(".columns__row").slick(em.slideshows.columnsSettings), $(".slick--related").slick(em.slideshows.relatedSettings)
        }, em.slideshows.resize = function () {
            var e = $(".slick--columns").find(".columns__row");
            Modernizr.mq("only screen and (min-width: 768px)") || e.hasClass("slick-initialized") || e.slick(em.slideshows.columnsSettings);
            var t = $(".slick--related");
            Modernizr.mq("only screen and (min-width: 992px)") || t.hasClass("slick-initialized") || t.slick(em.slideshows.relatedSettings)
        }
    }(),
    function () {
        em.sticky = {}, em.sticky.init = function () {
            em.sticky.setup()
        }, em.sticky.setup = function () {
            $(".blog__content, .blog__sidebar").theiaStickySidebar({
                additionalMarginTop: 30
            })
        }
    }(),
    function () {
        em.timeline = {}, em.timeline.init = function () {
            em.timeline.setup()
        }, em.timeline.setup = function () {
            var e = $(".js-timeline");
            e.each(function () {
                var e = $(this).find(".js-timeline-slider");
                e.slick({
                    dots: !1,
                    arrows: !0,
                    autoplay: !1,
                    slidesToScroll: 1,
                    useTransform: !0,
                    adaptiveHeight: !0
                });
                var t = $(this).find(".js-timeline-control-item");
                t.on("click", function (t) {
                    t.preventDefault(), e.slick("slickGoTo", $(this).index() - 1)
                });
                var i = $(this).find(".js-timeline-background-item");
                e.on("beforeChange", function (e, a, n, o) {
                    t.removeClass("is-active"), t.eq(o).addClass("is-active"), i.removeClass("is-active"), i.eq(o).addClass("is-active")
                })
            })
        }
    }(),
    function () {
        em.videoOverlay = {}, em.videoOverlay.init = function () {
            em.videoOverlay.setupVideo()
        }, em.videoOverlay.setupVideo = function () {
            $(".js-overlay-video").click(function (e) {
                e.preventDefault(), $self = $(this), $.magnificPopup.open({
                    items: {
                        src: $self.attr("href")
                    },
                    type: "iframe",
                    mainClass: "mfp-video mfp-cover",
                    removalDelay: 500,
                    closeBtnInside: !1,
                    iframe: {
                        patterns: {
                            youtube: {
                                index: "youtube.com/",
                                id: "v=",
                                src: "//www.youtube.com/embed/%id%?showinfo=0&color=white&rel=0&autoplay=1"
                            }
                        }
                    },
                    callbacks: {
                        open: function () {
                            em.videoOverlay.pauseBGVideos()
                        },
                        close: function () {
                            em.videoOverlay.playBGVideos()
                        }
                    }
                })
            })
        }, em.videoOverlay.pauseBGVideos = function () {
            $.each(em.youtubeAPIPlayer.players, function () {
                this.pauseVideo()
            })
        }, em.videoOverlay.playBGVideos = function () {
            $.each(em.youtubeAPIPlayer.players, function () {
                this.playVideo()
            })
        }
    }(),
    function () {
        em.youtubeAPIPlayer = {}, em.youtubeAPIPlayer.loopRefs = [], em.youtubeAPIPlayer.players = [], em.youtubeAPIPlayer.init = function () {
            if (0 === $("script[src$='www.youtube.com/iframe_api']").length) {
                var e = document.createElement("script");
                e.src = "https://www.youtube.com/iframe_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
        }, em.youtubeAPIPlayer.canAutoplay = function () {
            return window.innerWidth < 768 ? 0 : /iPad|iPhone/.test(navigator.userAgent) ? 0 : 1
        }, window.onYouTubeIframeAPIReady = function () {
            $(".youtube-api-player").each(function () {
                var e = $(this);
                em.youtubeAPIPlayer.canAutoplay() || (e.data("controls", 1), e.data("loop", 0), e.data("autoplay", 0), e.data("autoplay-viewport", 0));
                var t = e.data("video-id"),
                    i = (Number(e.data("sound")) || 0, Number(e.data("autoplay")) || 0),
                    a = Number(e.data("autoplay-viewport")) || 0,
                    n = (Number(e.data("loop")) || 0, Number(e.data("mask-logo")) || 0, Number(e.data("controls")) || 0),
                    o = Number(e.data("showinfo")) || 0,
                    r = Number(e.data("related")) || 0,
                    s = Number(e.data("cover")) || 0,
                    l = Number(e.data("start")) || 0,
                    d = Number(e.data("end")) || 0;
                if (s && e.css({
                    opacity: 0
                }), !s || !Modernizr.touch) {
                    var m = "em-player-" + t + "-" + Math.ceil(9999 * Math.random());
                    $('<div id="' + m + '"></div>').appendTo(e);
                    var c = new YT.Player(m, {
                        height: "390",
                        width: "640",
                        videoId: t,
                        playerVars: {
                            autoplay: a ? 0 : i,
                            controls: n,
                            showinfo: o,
                            start: l,
                            end: d,
                            rel: r,
                            iv_load_policy: 3,
                            wmode: "opaque"
                        },
                        events: {
                            onReady: em.youtubeAPIPlayer.onReady,
                            onStateChange: em.youtubeAPIPlayer.onPlayerStateChange
                        }
                    });
                    em.youtubeAPIPlayer.players.push(c)
                }
            })
        }, em.youtubeAPIPlayer.onReady = function (e) {
            var t = e.target,
                i = $(t.getIframe().parentNode),
                a = Number(i.data("sound")) || 0,
                n = Number(i.data("loop")) || 0,
                o = Number(i.data("autoplay")) || 0,
                r = Number(i.data("autoplay-viewport")) || 0,
                s = Number(i.data("cover")) || 0,
                l = Number(i.data("start")) || 0,
                d = Number(i.data("end")) || 0;
            a || e.target.mute(), r && (em.youtubeAPIPlayer.playIfInViewport(t, i, n, l, d), $(window).on("scroll", function () {
                em.youtubeAPIPlayer.playIfInViewport(t, i, n, l, d)
            })), !r && o && n && em.youtubeAPIPlayer.makeLoop(t, l, d), $(window).resizeend(function () {
                em.youtubeAPIPlayer.onResize(i)
            }), s && (em.youtubeAPIPlayer.videoFill(i), setTimeout(function () {
                i.css({
                    opacity: 1,
                    transition: "all 2s ease"
                })
            }, 1e3))
        }, em.youtubeAPIPlayer.onPlayerStateChange = function (e) {
            var t = e.target;
            $(t.getIframe().parentNode)
        }, em.youtubeAPIPlayer.playIfInViewport = function (e, t, i, a, n) {
            em.helper.inViewPort(t[0]) ? t.data("playing") || (t.data("playing", 1), e.playVideo(), i && (em.youtubeAPIPlayer.makeLoop(e, a, n), console.log("inviewport"))) : t.data("playing") && (t.data("playing", 0), e.pauseVideo())
        }, em.youtubeAPIPlayer.makeLoop = function (e, t, i) {
            t = "undefined" != typeof t ? t : 0, i = "undefined" != typeof i ? i : 0;
            var a = $(e.getIframe()).attr("id"),
                n = 0,
                o = 1,
                r = 0 !== i ? i : e.getDuration(),
                s = r - t - o;
            "undefined" != typeof em.youtubeAPIPlayer.loopRefs[a] && (e.seekTo(t + n), clearInterval(em.youtubeAPIPlayer.loopRefs[a])), em.youtubeAPIPlayer.loopRefs[a] = setInterval(function () {
                e.getPlayerState() == YT.PlayerState.PLAYING && e.seekTo(t + n)
            }, 1e3 * s)
        }, em.youtubeAPIPlayer.videoFill = function (e, t) {
            var i, a;
            t = "undefined" == typeof t ? 16 / 9 : t, e.width() / e.height() < t ? (i = e.height(), a = i * t) : (a = e.width(), i = a / t), e.find("iframe").css({
                height: i + "px",
                width: a + "px"
            })
        }, em.youtubeAPIPlayer.onResize = function (e) {
            var t = Number(e.data("cover")) || 0;
            t && em.youtubeAPIPlayer.videoFill(e)
        }, em.youtubeAPIPlayer.pauseVideo = function (e) {
            e.pauseVideo()
        }, em.youtubeAPIPlayer.playVideo = function (e) {
            e.playVideo()
        }
    }();