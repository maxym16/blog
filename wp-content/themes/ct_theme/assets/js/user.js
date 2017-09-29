webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(1);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAPTCHA_API_URL = 'https://www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit';

var captcha = new _module2.default('captcha');

window.onloadCaptchaCallback = function () {
  grecaptcha.render('register-captcha', {
    sitekey: '2544254'
  });
};

captcha.load = function () {
  var script = document.createElement('script');

  script.src = CAPTCHA_API_URL;
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);
};

exports.default = captcha;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(1);

var _module2 = _interopRequireDefault(_module);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _fancybox = __webpack_require__(16);

var _fancybox2 = _interopRequireDefault(_fancybox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fancybox2.default)(_jquery2.default);

var FANCYBOX_SETTINGS = {
  margin: 10,
  padding: 0,
  fitToView: false,
  width: 'auto',
  maxWidth: '98%',
  height: 'auto',
  wrapCSS: 'fancy-modal',
  tpl: {
    closeBtn: '<button class="fancybox-item fancybox-close" title="Close" type="button"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle" width="14" height="14" viewBox="0 0 34 34" fill="currentColor"><rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/><line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="2.5680007934570312" y1="31.433998107910156" x2="31.43199920654297" y2="2.5660018920898438" /><line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="31.43199920654297" y1="31.433998107910156" x2="2.5680007934570312" y2="2.5660018920898438" /></svg></button>'
  }
};

var modal = new _module2.default('modal');

modal.launch = function (settings, el) {
  if (typeof el !== 'undefined' && el.length) {
    el.fancybox(_jquery2.default.extend(true, {}, FANCYBOX_SETTINGS, settings));
  } else {
    _jquery2.default.fancybox(_jquery2.default.extend(true, {}, FANCYBOX_SETTINGS, settings));
  }
};
modal.closeModal = function () {
  _jquery2.default.fancybox.close();
};

exports.default = modal;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(1);

var _module2 = _interopRequireDefault(_module);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = new _module2.default('user');

user.closeGreeting = function () {
  (0, _jquery2.default)(this).closest('.js-greeting').remove();
};

exports.default = user;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modal = __webpack_require__(8);

var _modal2 = _interopRequireDefault(_modal);

var _captcha = __webpack_require__(4);

var _captcha2 = _interopRequireDefault(_captcha);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = _modal2.default.alias.body;

_modal2.default.launch({}, (0, _jquery2.default)('.js-modal'));

_captcha2.default.load();

body.on('click', '.js-close-greeting', _user2.default.closeGreeting);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

module.exports = function(jQuery) {
    "use strict";

    var H = jQuery("html"),
        W = jQuery(window),
        D = jQuery(document),
        F = jQuery.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,

        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof jQuery;
        },
        isString = function(str) {
            return str && jQuery.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    jQuery.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up', // page down
                    39: 'left', // right arrow
                    40: 'up' // down arrow
                },
                prev: {
                    8: 'right', // backspace
                    33: 'down', // page up
                    37: 'right', // left arrow
                    38: 'down' // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70] // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: jQuery.noop, // If canceling
            beforeLoad: jQuery.noop, // Before loading
            afterLoad: jQuery.noop, // After loading
            beforeShow: jQuery.noop, // Before changing in current item
            afterShow: jQuery.noop, // After opening
            beforeChange: jQuery.noop, // Before changing gallery item
            beforeClose: jQuery.noop, // Before closing
            afterClose: jQuery.noop // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null, // Previous element
        coming: null, // Element being loaded
        current: null, // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
         *	Static methods
         */

        open: function(group, opts) {
            if (!group) {
                return;
            }

            if (!jQuery.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!jQuery.isArray(group)) {
                group = isQuery(group) ? jQuery(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            jQuery.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if (jQuery.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = jQuery(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: jQuery('<div/>').text(element.data('fancybox-title') || element.attr('title') || '').html(),
                            isDom: true,
                            element: element
                        };

                        if (jQuery.metadata) {
                            jQuery.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = jQuery(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                jQuery.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = jQuery.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? jQuery.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function() {
            var coming = F.coming;

            if (coming && false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (!coming) {
                return;
            }

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function(event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                jQuery('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                jQuery('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   jQuery.fancybox.play(); - toggle slideshow
        //   jQuery.fancybox.play( true ); - start
        //   jQuery.fancybox.play( false ); - stop
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function(index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = jQuery.extend({}, current.dim, pos);
                }
            }
        },

        update: function(e) {
            var type = (e && e.originalEvent && e.originalEvent.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = jQuery.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function() {
            D.unbind('.loading');

            jQuery('#fancybox-loading').remove();
        },

        showLoading: function() {
            var el, viewport;

            F.hideLoading();

            el = jQuery(F.opts.tpl.loading).click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }

            F.trigger('onLoading');
        },

        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function() {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || jQuery(target).is('[contenteditable]')))) {
                        jQuery.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if (jQuery.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if (jQuery.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = jQuery(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = jQuery(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;

            if (obj) {
                if (jQuery.isFunction(obj[event])) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    jQuery.each(obj.helpers, function(helper, opts) {
                        if (opts && F.helpers[helper] && jQuery.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event](jQuery.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }

            D.trigger(event);
        },

        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function(index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = jQuery.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if (jQuery.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if (jQuery.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                jQuery.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = jQuery(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            jQuery.extend(coming, {
                skin: jQuery('.fancybox-skin', coming.wrap),
                outer: jQuery('.fancybox-outer', coming.wrap),
                inner: jQuery('.fancybox-inner', coming.wrap)
            });

            jQuery.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function(type) {
            jQuery.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function() {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function() {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function() {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = jQuery.ajax(jQuery.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = jQuery(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                .attr('src', coming.href);

            // This helps IE
            jQuery(coming.wrap).bind('onReset', function() {
                try {
                    jQuery(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    jQuery(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        jQuery(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    jQuery(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            jQuery.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = jQuery('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, jQuery('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function() {
                            if (jQuery(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    jQuery.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                jQuery('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            jQuery.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function() {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!jQuery(e.target).is('a') && !jQuery(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                jQuery(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    jQuery(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    jQuery(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {

                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play(true);
            }
        },

        _afterZoomOut: function(obj) {
            obj = obj || F.current;

            jQuery('.fancybox-wrap').trigger('onReset').remove();

            jQuery.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function(now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = jQuery.extend({
                    opacity: 1
                }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    jQuery(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

    F.helpers.overlay = {
        defaults: {
            closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200, // duration of fadeOut animation
            showEarly: true, // indicates if should be opened immediately or wait until the content is ready
            css: {}, // custom CSS properties
            locked: !isTouch, // if true, the content will be locked into overlay
            fixed: true // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null, // current handle
        fixed: false, // indicates if the overlay has position "fixed"
        el: jQuery('html'), // element that contains "the lock"

        // Public methods
        create: function(opts) {
            var parent;

            opts = jQuery.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            parent = F.coming ? F.coming.parent : opts.parent;

            this.overlay = jQuery('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : 'body');
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function(opts) {
            var that = this;

            opts = jQuery.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', jQuery.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if (jQuery(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function() {
            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                jQuery('.fancybox-margin').removeClass('fancybox-margin');

                this.el.removeClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            jQuery('.fancybox-overlay').remove().hide();

            jQuery.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function() {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(opts, obj) {
            var overlay = this.overlay;

            jQuery('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function(opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    jQuery('*').filter(function() {
                        return (jQuery(this).css('position') === 'fixed' && !jQuery(this).hasClass("fancybox-overlay") && !jQuery(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');
                }

                this.el.addClass('fancybox-margin');

                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            this.open(opts);
        },

        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function(opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, jQuery.proxy(this.close, this));
            }
        }
    };

    /*
     *	Title helper
     */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title,
                target;

            if (jQuery.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || jQuery.trim(text) === '') {
                return;
            }

            title = jQuery('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };

    // jQuery plugin initialization
    jQuery.fn.fancybox = function(options) {
        var index,
            that = jQuery(this),
            selector = this.selector || '',
            run = function(e) {
                var what = jQuery(this).blur(), idx = index, relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? jQuery(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if (jQuery.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            jQuery.scrollbarWidth = function() {
                var parent = jQuery('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if (jQuery.support.fixedPosition === undefined) {
            jQuery.support.fixedPosition = (function() {
                var elem = jQuery('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        jQuery.extend(F.defaults, {
            scrollbarWidth: jQuery.scrollbarWidth(),
            fixed: jQuery.support.fixedPosition,
            parent: jQuery('body')
        });

        //Get real width of page scroll-bar
        w1 = jQuery(window).width();

        H.addClass('fancybox-lock-test');

        w2 = jQuery(window).width();

        H.removeClass('fancybox-lock-test');

        jQuery("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });
}


/***/ })
],[13]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvZGV2L2pzL21vZHVsZXMvY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vYXBwL2Rldi9qcy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovLy9hcHAvZGV2L2pzL21vZHVsZXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vYXBwL2Rldi9qcy9wYWdlcy91c2VyLmpzIiwid2VicGFjazovLy9DOi9XZWJTZXJ2ZXIvT3BlblNlcnZlci9kb21haW5zL2Nvbm5lY3Rpbmd0YWxlbnRzLmxvYy9+L2ZhbmN5Ym94L2Rpc3QvanMvanF1ZXJ5LmZhbmN5Ym94LmNqcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgTW9kdWxlIGZyb20gJy4uL21vZHVsZSc7XHJcblxyXG5jb25zdCBDQVBUQ0hBX0FQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP29ubG9hZD1vbmxvYWRDYXB0Y2hhQ2FsbGJhY2smcmVuZGVyPWV4cGxpY2l0JztcclxuXHJcbnZhciBjYXB0Y2hhID0gbmV3IE1vZHVsZSgnY2FwdGNoYScpO1xyXG5cclxud2luZG93Lm9ubG9hZENhcHRjaGFDYWxsYmFjayA9ICgpID0+IHtcclxuICBncmVjYXB0Y2hhLnJlbmRlcigncmVnaXN0ZXItY2FwdGNoYScsIHtcclxuICAgIHNpdGVrZXk6ICcyNTQ0MjU0J1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY2FwdGNoYS5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgc2NyaXB0LnNyYyA9IENBUFRDSEFfQVBJX1VSTDtcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcHRjaGE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvZGV2L2pzL21vZHVsZXMvY2FwdGNoYS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi4vbW9kdWxlJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBmYW5jeWJveCBmcm9tICdmYW5jeWJveCc7XHJcblxyXG5mYW5jeWJveCgkKTtcclxuXHJcbmNvbnN0IEZBTkNZQk9YX1NFVFRJTkdTID0ge1xyXG4gIG1hcmdpbjogMTAsXHJcbiAgcGFkZGluZzogMCxcclxuICBmaXRUb1ZpZXc6IGZhbHNlLFxyXG4gIHdpZHRoOiAnYXV0bycsXHJcbiAgbWF4V2lkdGg6ICc5OCUnLFxyXG4gIGhlaWdodDogJ2F1dG8nLFxyXG4gIHdyYXBDU1M6ICdmYW5jeS1tb2RhbCcsXHJcbiAgdHBsOiB7XHJcbiAgICBjbG9zZUJ0bjogJzxidXR0b24gY2xhc3M9XCJmYW5jeWJveC1pdGVtIGZhbmN5Ym94LWNsb3NlXCIgdGl0bGU9XCJDbG9zZVwiIHR5cGU9XCJidXR0b25cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb24gaWNvbi0tbWlkZGxlXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAzNCAzNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwibm9uZVwiLz48bGluZSBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiMi41NjgwMDA3OTM0NTcwMzEyXCIgeTE9XCIzMS40MzM5OTgxMDc5MTAxNTZcIiB4Mj1cIjMxLjQzMTk5OTIwNjU0Mjk3XCIgeTI9XCIyLjU2NjAwMTg5MjA4OTg0MzhcIiAvPjxsaW5lIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgeDE9XCIzMS40MzE5OTkyMDY1NDI5N1wiIHkxPVwiMzEuNDMzOTk4MTA3OTEwMTU2XCIgeDI9XCIyLjU2ODAwMDc5MzQ1NzAzMTJcIiB5Mj1cIjIuNTY2MDAxODkyMDg5ODQzOFwiIC8+PC9zdmc+PC9idXR0b24+J1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBtb2RhbCA9IG5ldyBNb2R1bGUoJ21vZGFsJyk7XHJcblxyXG5tb2RhbC5sYXVuY2ggPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGVsKSB7XHJcbiAgaWYgKHR5cGVvZiBlbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWwubGVuZ3RoKSB7XHJcbiAgICBlbC5mYW5jeWJveCgkLmV4dGVuZCh0cnVlLCB7fSwgRkFOQ1lCT1hfU0VUVElOR1MsIHNldHRpbmdzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuZmFuY3lib3goJC5leHRlbmQodHJ1ZSwge30sIEZBTkNZQk9YX1NFVFRJTkdTLCBzZXR0aW5ncykpO1xyXG4gIH1cclxufTtcclxubW9kYWwuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAkLmZhbmN5Ym94LmNsb3NlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9kZXYvanMvbW9kdWxlcy9tb2RhbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi4vbW9kdWxlJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG52YXIgdXNlciA9IG5ldyBNb2R1bGUoJ3VzZXInKTtcclxuXHJcbnVzZXIuY2xvc2VHcmVldGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLmNsb3Nlc3QoJy5qcy1ncmVldGluZycpLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9kZXYvanMvbW9kdWxlcy91c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG1vZGFsIGZyb20gJy4uL21vZHVsZXMvbW9kYWwnO1xyXG5pbXBvcnQgY2FwdGNoYSBmcm9tICcuLi9tb2R1bGVzL2NhcHRjaGEnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuLi9tb2R1bGVzL3VzZXInO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbnZhciBib2R5ID0gbW9kYWwuYWxpYXMuYm9keTtcclxuXHJcbm1vZGFsLmxhdW5jaCh7fSwgJCgnLmpzLW1vZGFsJykpO1xyXG5cclxuY2FwdGNoYS5sb2FkKCk7XHJcblxyXG5ib2R5Lm9uKCdjbGljaycsICcuanMtY2xvc2UtZ3JlZXRpbmcnLCB1c2VyLmNsb3NlR3JlZXRpbmcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvZGV2L2pzL3BhZ2VzL3VzZXIuanMiLCIvKiFcbiAqIGZhbmN5Qm94IC0galF1ZXJ5IFBsdWdpblxuICogdmVyc2lvbjogMi4xLjUgKEZyaSwgMTQgSnVuIDIwMTMpXG4gKiByZXF1aXJlcyBqUXVlcnkgdjEuNiBvciBsYXRlclxuICpcbiAqIEV4YW1wbGVzIGF0IGh0dHA6Ly9mYW5jeWFwcHMuY29tL2ZhbmN5Ym94L1xuICogTGljZW5zZTogd3d3LmZhbmN5YXBwcy5jb20vZmFuY3lib3gvI2xpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiBKYW5pcyBTa2FybmVsaXMgLSBqYW5pc0BmYW5jeWFwcHMuY29tXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oalF1ZXJ5KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgSCA9IGpRdWVyeShcImh0bWxcIiksXG4gICAgICAgIFcgPSBqUXVlcnkod2luZG93KSxcbiAgICAgICAgRCA9IGpRdWVyeShkb2N1bWVudCksXG4gICAgICAgIEYgPSBqUXVlcnkuZmFuY3lib3ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEYub3Blbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21zaWUvaSksXG4gICAgICAgIGRpZFVwZGF0ZSA9IG51bGwsXG4gICAgICAgIGlzVG91Y2ggPSBkb2N1bWVudC5jcmVhdGVUb3VjaCAhPT0gdW5kZWZpbmVkLFxuXG4gICAgICAgIGlzUXVlcnkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLmhhc093blByb3BlcnR5ICYmIG9iaiBpbnN0YW5jZW9mIGpRdWVyeTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdHJpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIgJiYgalF1ZXJ5LnR5cGUoc3RyKSA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgfSxcbiAgICAgICAgaXNQZXJjZW50YWdlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTdHJpbmcoc3RyKSAmJiBzdHIuaW5kZXhPZignJScpID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTY3JvbGxhYmxlID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoZWwgJiYgIShlbC5zdHlsZS5vdmVyZmxvdyAmJiBlbC5zdHlsZS5vdmVyZmxvdyA9PT0gJ2hpZGRlbicpICYmICgoZWwuY2xpZW50V2lkdGggJiYgZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aCkgfHwgKGVsLmNsaWVudEhlaWdodCAmJiBlbC5zY3JvbGxIZWlnaHQgPiBlbC5jbGllbnRIZWlnaHQpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFNjYWxhciA9IGZ1bmN0aW9uKG9yaWcsIGRpbSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQob3JpZywgMTApIHx8IDA7XG5cbiAgICAgICAgICAgIGlmIChkaW0gJiYgaXNQZXJjZW50YWdlKG9yaWcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBGLmdldFZpZXdwb3J0KClbZGltXSAvIDEwMCAqIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgZGltKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U2NhbGFyKHZhbHVlLCBkaW0pICsgJ3B4JztcbiAgICAgICAgfTtcblxuICAgIGpRdWVyeS5leHRlbmQoRiwge1xuICAgICAgICAvLyBUaGUgY3VycmVudCB2ZXJzaW9uIG9mIGZhbmN5Qm94XG4gICAgICAgIHZlcnNpb246ICcyLjEuNScsXG5cbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1LFxuICAgICAgICAgICAgbWFyZ2luOiAyMCxcblxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMTAwLFxuICAgICAgICAgICAgbWF4V2lkdGg6IDk5OTksXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDk5OTksXG4gICAgICAgICAgICBwaXhlbFJhdGlvOiAxLCAvLyBTZXQgdG8gMiBmb3IgcmV0aW5hIGRpc3BsYXkgc3VwcG9ydFxuXG4gICAgICAgICAgICBhdXRvU2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiBmYWxzZSxcblxuICAgICAgICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9DZW50ZXI6ICFpc1RvdWNoLFxuICAgICAgICAgICAgZml0VG9WaWV3OiB0cnVlLFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgdG9wUmF0aW86IDAuNSxcbiAgICAgICAgICAgIGxlZnRSYXRpbzogMC41LFxuXG4gICAgICAgICAgICBzY3JvbGxpbmc6ICdhdXRvJywgLy8gJ2F1dG8nLCAneWVzJyBvciAnbm8nXG4gICAgICAgICAgICB3cmFwQ1NTOiAnJyxcblxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG46IHRydWUsXG4gICAgICAgICAgICBjbG9zZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIG5leHRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZVdoZWVsOiB0cnVlLFxuICAgICAgICAgICAgYXV0b1BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgcHJlbG9hZDogMyxcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG5cbiAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtZmFuY3lCb3gnOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlmcmFtZToge1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2Y6IHtcbiAgICAgICAgICAgICAgICB3bW9kZTogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46ICd0cnVlJyxcbiAgICAgICAgICAgICAgICBhbGxvd3NjcmlwdGFjY2VzczogJ2Fsd2F5cydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICAgICBuZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIDEzOiAnbGVmdCcsIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgICAgIDM0OiAndXAnLCAvLyBwYWdlIGRvd25cbiAgICAgICAgICAgICAgICAgICAgMzk6ICdsZWZ0JywgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgNDA6ICd1cCcgLy8gZG93biBhcnJvd1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJldjoge1xuICAgICAgICAgICAgICAgICAgICA4OiAncmlnaHQnLCAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgMzM6ICdkb3duJywgLy8gcGFnZSB1cFxuICAgICAgICAgICAgICAgICAgICAzNzogJ3JpZ2h0JywgLy8gbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgICAgICAzODogJ2Rvd24nIC8vIHVwIGFycm93XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogWzI3XSwgLy8gZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIHBsYXk6IFszMl0sIC8vIHNwYWNlIC0gc3RhcnQvc3RvcCBzbGlkZXNob3dcbiAgICAgICAgICAgICAgICB0b2dnbGU6IFs3MF0gLy8gbGV0dGVyIFwiZlwiIC0gdG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIG5leHQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICBwcmV2OiAncmlnaHQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzY3JvbGxPdXRzaWRlOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSBzb21lIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIGhyZWY6IG51bGwsXG4gICAgICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICAgICAgdGl0bGU6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIEhUTUwgdGVtcGxhdGVzXG4gICAgICAgICAgICB0cGw6IHtcbiAgICAgICAgICAgICAgICB3cmFwOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXdyYXBcIiB0YWJJbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LXNraW5cIj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtb3V0ZXJcIj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtaW5uZXJcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnPGltZyBjbGFzcz1cImZhbmN5Ym94LWltYWdlXCIgc3JjPVwie2hyZWZ9XCIgYWx0PVwiXCIgLz4nLFxuICAgICAgICAgICAgICAgIGlmcmFtZTogJzxpZnJhbWUgaWQ9XCJmYW5jeWJveC1mcmFtZXtybmR9XCIgbmFtZT1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBjbGFzcz1cImZhbmN5Ym94LWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIHZzcGFjZT1cIjBcIiBoc3BhY2U9XCIwXCIgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4nICsgKElFID8gJyBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIicgOiAnJykgKyAnPjwvaWZyYW1lPicsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICc8cCBjbGFzcz1cImZhbmN5Ym94LWVycm9yXCI+VGhlIHJlcXVlc3RlZCBjb250ZW50IGNhbm5vdCBiZSBsb2FkZWQuPGJyLz5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyLjwvcD4nLFxuICAgICAgICAgICAgICAgIGNsb3NlQnRuOiAnPGEgdGl0bGU9XCJDbG9zZVwiIGNsYXNzPVwiZmFuY3lib3gtaXRlbSBmYW5jeWJveC1jbG9zZVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+JyxcbiAgICAgICAgICAgICAgICBuZXh0OiAnPGEgdGl0bGU9XCJOZXh0XCIgY2xhc3M9XCJmYW5jeWJveC1uYXYgZmFuY3lib3gtbmV4dFwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48c3Bhbj48L3NwYW4+PC9hPicsXG4gICAgICAgICAgICAgICAgcHJldjogJzxhIHRpdGxlPVwiUHJldmlvdXNcIiBjbGFzcz1cImZhbmN5Ym94LW5hdiBmYW5jeWJveC1wcmV2XCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjxzcGFuPjwvc3Bhbj48L2E+JyxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAnPGRpdiBpZD1cImZhbmN5Ym94LWxvYWRpbmdcIj48ZGl2PjwvZGl2PjwvZGl2PidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIFByb3BlcnRpZXMgZm9yIGVhY2ggYW5pbWF0aW9uIHR5cGVcbiAgICAgICAgICAgIC8vIE9wZW5pbmcgZmFuY3lCb3hcbiAgICAgICAgICAgIG9wZW5FZmZlY3Q6ICdmYWRlJywgLy8gJ2VsYXN0aWMnLCAnZmFkZScgb3IgJ25vbmUnXG4gICAgICAgICAgICBvcGVuU3BlZWQ6IDI1MCxcbiAgICAgICAgICAgIG9wZW5FYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICBvcGVuT3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIG9wZW5NZXRob2Q6ICd6b29tSW4nLFxuXG4gICAgICAgICAgICAvLyBDbG9zaW5nIGZhbmN5Qm94XG4gICAgICAgICAgICBjbG9zZUVmZmVjdDogJ2ZhZGUnLCAvLyAnZWxhc3RpYycsICdmYWRlJyBvciAnbm9uZSdcbiAgICAgICAgICAgIGNsb3NlU3BlZWQ6IDI1MCxcbiAgICAgICAgICAgIGNsb3NlRWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICAgICAgY2xvc2VPcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VNZXRob2Q6ICd6b29tT3V0JyxcblxuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgbmV4dCBnYWxsZXJ5IGl0ZW1cbiAgICAgICAgICAgIG5leHRFZmZlY3Q6ICdlbGFzdGljJywgLy8gJ2VsYXN0aWMnLCAnZmFkZScgb3IgJ25vbmUnXG4gICAgICAgICAgICBuZXh0U3BlZWQ6IDI1MCxcbiAgICAgICAgICAgIG5leHRFYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICBuZXh0TWV0aG9kOiAnY2hhbmdlSW4nLFxuXG4gICAgICAgICAgICAvLyBDaGFuZ2luZyBwcmV2aW91cyBnYWxsZXJ5IGl0ZW1cbiAgICAgICAgICAgIHByZXZFZmZlY3Q6ICdlbGFzdGljJywgLy8gJ2VsYXN0aWMnLCAnZmFkZScgb3IgJ25vbmUnXG4gICAgICAgICAgICBwcmV2U3BlZWQ6IDI1MCxcbiAgICAgICAgICAgIHByZXZFYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICBwcmV2TWV0aG9kOiAnY2hhbmdlT3V0JyxcblxuICAgICAgICAgICAgLy8gRW5hYmxlIGRlZmF1bHQgaGVscGVyc1xuICAgICAgICAgICAgaGVscGVyczoge1xuICAgICAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIENhbGxiYWNrc1xuICAgICAgICAgICAgb25DYW5jZWw6IGpRdWVyeS5ub29wLCAvLyBJZiBjYW5jZWxpbmdcbiAgICAgICAgICAgIGJlZm9yZUxvYWQ6IGpRdWVyeS5ub29wLCAvLyBCZWZvcmUgbG9hZGluZ1xuICAgICAgICAgICAgYWZ0ZXJMb2FkOiBqUXVlcnkubm9vcCwgLy8gQWZ0ZXIgbG9hZGluZ1xuICAgICAgICAgICAgYmVmb3JlU2hvdzogalF1ZXJ5Lm5vb3AsIC8vIEJlZm9yZSBjaGFuZ2luZyBpbiBjdXJyZW50IGl0ZW1cbiAgICAgICAgICAgIGFmdGVyU2hvdzogalF1ZXJ5Lm5vb3AsIC8vIEFmdGVyIG9wZW5pbmdcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZTogalF1ZXJ5Lm5vb3AsIC8vIEJlZm9yZSBjaGFuZ2luZyBnYWxsZXJ5IGl0ZW1cbiAgICAgICAgICAgIGJlZm9yZUNsb3NlOiBqUXVlcnkubm9vcCwgLy8gQmVmb3JlIGNsb3NpbmdcbiAgICAgICAgICAgIGFmdGVyQ2xvc2U6IGpRdWVyeS5ub29wIC8vIEFmdGVyIGNsb3NpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvL0N1cnJlbnQgc3RhdGVcbiAgICAgICAgZ3JvdXA6IHt9LCAvLyBTZWxlY3RlZCBncm91cFxuICAgICAgICBvcHRzOiB7fSwgLy8gR3JvdXAgb3B0aW9uc1xuICAgICAgICBwcmV2aW91czogbnVsbCwgLy8gUHJldmlvdXMgZWxlbWVudFxuICAgICAgICBjb21pbmc6IG51bGwsIC8vIEVsZW1lbnQgYmVpbmcgbG9hZGVkXG4gICAgICAgIGN1cnJlbnQ6IG51bGwsIC8vIEN1cnJlbnRseSBsb2FkZWQgZWxlbWVudFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsIC8vIElzIGFjdGl2YXRlZFxuICAgICAgICBpc09wZW46IGZhbHNlLCAvLyBJcyBjdXJyZW50bHkgb3BlblxuICAgICAgICBpc09wZW5lZDogZmFsc2UsIC8vIEhhdmUgYmVlbiBmdWxseSBvcGVuZWQgYXQgbGVhc3Qgb25jZVxuXG4gICAgICAgIHdyYXA6IG51bGwsXG4gICAgICAgIHNraW46IG51bGwsXG4gICAgICAgIG91dGVyOiBudWxsLFxuICAgICAgICBpbm5lcjogbnVsbCxcblxuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTG9hZGVyc1xuICAgICAgICBhamF4TG9hZDogbnVsbCxcbiAgICAgICAgaW1nUHJlbG9hZDogbnVsbCxcblxuICAgICAgICAvLyBTb21lIGNvbGxlY3Rpb25zXG4gICAgICAgIHRyYW5zaXRpb25zOiB7fSxcbiAgICAgICAgaGVscGVyczoge30sXG5cbiAgICAgICAgLypcbiAgICAgICAgICpcdFN0YXRpYyBtZXRob2RzXG4gICAgICAgICAqL1xuXG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKGdyb3VwLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWpRdWVyeS5pc1BsYWluT2JqZWN0KG9wdHMpKSB7XG4gICAgICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9zZSBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAgICAgICAgaWYgKGZhbHNlID09PSBGLmNsb3NlKHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgZ3JvdXBcbiAgICAgICAgICAgIGlmICghalF1ZXJ5LmlzQXJyYXkoZ3JvdXApKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBpc1F1ZXJ5KGdyb3VwKSA/IGpRdWVyeShncm91cCkuZ2V0KCkgOiBbZ3JvdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWNoZWNrIGlmIHRoZSB0eXBlIG9mIGVhY2ggZWxlbWVudCBpcyBgb2JqZWN0YCBhbmQgc2V0IGNvbnRlbnQgdHlwZSAoaW1hZ2UsIGFqYXgsIGV0YylcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGdyb3VwLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV6LFxuICAgICAgICAgICAgICAgICAgICBocmVmUGFydHMsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yO1xuXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS50eXBlKGVsZW1lbnQpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGlzIERPTSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0galF1ZXJ5KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUXVlcnkoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBlbGVtZW50LmRhdGEoJ2ZhbmN5Ym94LWhyZWYnKSB8fCBlbGVtZW50LmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogalF1ZXJ5KCc8ZGl2Lz4nKS50ZXh0KGVsZW1lbnQuZGF0YSgnZmFuY3lib3gtdGl0bGUnKSB8fCBlbGVtZW50LmF0dHIoJ3RpdGxlJykgfHwgJycpLmh0bWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5Lm1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZCh0cnVlLCBvYmosIGVsZW1lbnQubWV0YWRhdGEoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBocmVmID0gb3B0cy5ocmVmIHx8IG9iai5ocmVmIHx8IChpc1N0cmluZyhlbGVtZW50KSA/IGVsZW1lbnQgOiBudWxsKTtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IG9wdHMudGl0bGUgIT09IHVuZGVmaW5lZCA/IG9wdHMudGl0bGUgOiBvYmoudGl0bGUgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICBjb250ZW50ID0gb3B0cy5jb250ZW50IHx8IG9iai5jb250ZW50O1xuICAgICAgICAgICAgICAgIHR5cGUgPSBjb250ZW50ID8gJ2h0bWwnIDogKG9wdHMudHlwZSB8fCBvYmoudHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXR5cGUgJiYgb2JqLmlzRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBlbGVtZW50LmRhdGEoJ2ZhbmN5Ym94LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJleiA9IGVsZW1lbnQucHJvcCgnY2xhc3MnKS5tYXRjaCgvZmFuY3lib3hcXC4oXFx3KykvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSByZXogPyByZXpbMV0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBndWVzcyB0aGUgY29udGVudCB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEYuaXNJbWFnZShocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaW1hZ2UnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEYuaXNTV0YoaHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3N3Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHJlZi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaW5saW5lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaHRtbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTcGxpdCB1cmwgaW50byB0d28gcGllY2VzIHdpdGggc291cmNlIHVybCBhbmQgY29udGVudCBzZWxlY3RvciwgZS5nLFxuICAgICAgICAgICAgICAgICAgICAvLyBcIi9teXBhZ2UuaHRtbCAjbXlfaWRcIiB3aWxsIGxvYWQgXCIvbXlwYWdlLmh0bWxcIiBhbmQgZGlzcGxheSBlbGVtZW50IGhhdmluZyBpZCBcIm15X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdhamF4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZlBhcnRzID0gaHJlZi5zcGxpdCgvXFxzKy8sIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGhyZWZQYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBocmVmUGFydHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGpRdWVyeShpc1N0cmluZyhocmVmKSA/IGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpIDogaHJlZik7IC8vc3RyaXAgZm9yIGllN1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iai5pc0RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gaHJlZjtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0eXBlICYmICFocmVmICYmIG9iai5pc0RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdpbmxpbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKG9iaiwge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ3JvdXBbaV0gPSBvYmo7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBkZWZhdWx0c1xuICAgICAgICAgICAgRi5vcHRzID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgRi5kZWZhdWx0cywgb3B0cyk7XG5cbiAgICAgICAgICAgIC8vIEFsbCBvcHRpb25zIGFyZSBtZXJnZWQgcmVjdXJzaXZlIGV4Y2VwdCBrZXlzXG4gICAgICAgICAgICBpZiAob3B0cy5rZXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBGLm9wdHMua2V5cyA9IG9wdHMua2V5cyA/IGpRdWVyeS5leHRlbmQoe30sIEYuZGVmYXVsdHMua2V5cywgb3B0cy5rZXlzKSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGLmdyb3VwID0gZ3JvdXA7XG5cbiAgICAgICAgICAgIHJldHVybiBGLl9zdGFydChGLm9wdHMuaW5kZXgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIENhbmNlbCBpbWFnZSBsb2FkaW5nIG9yIGFib3J0IGFqYXggcmVxdWVzdFxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbWluZyA9IEYuY29taW5nO1xuXG4gICAgICAgICAgICBpZiAoY29taW5nICYmIGZhbHNlID09PSBGLnRyaWdnZXIoJ29uQ2FuY2VsJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgICAgaWYgKCFjb21pbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChGLmFqYXhMb2FkKSB7XG4gICAgICAgICAgICAgICAgRi5hamF4TG9hZC5hYm9ydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGLmFqYXhMb2FkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKEYuaW1nUHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIEYuaW1nUHJlbG9hZC5vbmxvYWQgPSBGLmltZ1ByZWxvYWQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb21pbmcud3JhcCkge1xuICAgICAgICAgICAgICAgIGNvbWluZy53cmFwLnN0b3AodHJ1ZSwgdHJ1ZSkudHJpZ2dlcignb25SZXNldCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGLmNvbWluZyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBmaXJzdCBpdGVtIGhhcyBiZWVuIGNhbmNlbGVkLCB0aGVuIGNsZWFyIGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgIGlmICghRi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgRi5fYWZ0ZXJab29tT3V0KGNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gU3RhcnQgY2xvc2luZyBhbmltYXRpb24gaWYgaXMgb3BlbjsgcmVtb3ZlIGltbWVkaWF0ZWx5IGlmIG9wZW5pbmcvY2xvc2luZ1xuICAgICAgICBjbG9zZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIEYuY2FuY2VsKCk7XG5cbiAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gRi50cmlnZ2VyKCdiZWZvcmVDbG9zZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgICAgICBpZiAoIUYuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghRi5pc09wZW4gfHwgZXZlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5mYW5jeWJveC13cmFwJykuc3RvcCh0cnVlKS50cmlnZ2VyKCdvblJlc2V0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBGLl9hZnRlclpvb21PdXQoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBGLmlzT3BlbiA9IEYuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBGLmlzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5mYW5jeWJveC1pdGVtLCAuZmFuY3lib3gtbmF2JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBGLndyYXAuc3RvcCh0cnVlLCB0cnVlKS5yZW1vdmVDbGFzcygnZmFuY3lib3gtb3BlbmVkJyk7XG5cbiAgICAgICAgICAgICAgICBGLnRyYW5zaXRpb25zW0YuY3VycmVudC5jbG9zZU1ldGhvZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBNYW5hZ2Ugc2xpZGVzaG93OlxuICAgICAgICAvLyAgIGpRdWVyeS5mYW5jeWJveC5wbGF5KCk7IC0gdG9nZ2xlIHNsaWRlc2hvd1xuICAgICAgICAvLyAgIGpRdWVyeS5mYW5jeWJveC5wbGF5KCB0cnVlICk7IC0gc3RhcnRcbiAgICAgICAgLy8gICBqUXVlcnkuZmFuY3lib3gucGxheSggZmFsc2UgKTsgLSBzdG9wXG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChGLnBsYXllci50aW1lcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoRi5jdXJyZW50ICYmIEYucGxheWVyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGLnBsYXllci50aW1lciA9IHNldFRpbWVvdXQoRi5uZXh0LCBGLmN1cnJlbnQucGxheVNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIEQudW5iaW5kKCcucGxheWVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgRi5wbGF5ZXIuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBGLnRyaWdnZXIoJ29uUGxheUVuZCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEYuY3VycmVudCAmJiAoRi5jdXJyZW50Lmxvb3AgfHwgRi5jdXJyZW50LmluZGV4IDwgRi5ncm91cC5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRi5wbGF5ZXIuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBELmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbkNhbmNlbC5wbGF5ZXIgYmVmb3JlQ2xvc2UucGxheWVyJzogc3RvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGUucGxheWVyJzogc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZWZvcmVMb2FkLnBsYXllcic6IGNsZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEYudHJpZ2dlcignb25QbGF5U3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IHRydWUgfHwgKCFGLnBsYXllci5pc0FjdGl2ZSAmJiBhY3Rpb24gIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOYXZpZ2F0ZSB0byBuZXh0IGdhbGxlcnkgaXRlbVxuICAgICAgICBuZXh0OiBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNTdHJpbmcoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBjdXJyZW50LmRpcmVjdGlvbi5uZXh0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEYuanVtcHRvKGN1cnJlbnQuaW5kZXggKyAxLCBkaXJlY3Rpb24sICduZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gcHJldmlvdXMgZ2FsbGVyeSBpdGVtXG4gICAgICAgIHByZXY6IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1N0cmluZyhkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQuZGlyZWN0aW9uLnByZXY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRi5qdW1wdG8oY3VycmVudC5pbmRleCAtIDEsIGRpcmVjdGlvbiwgJ3ByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOYXZpZ2F0ZSB0byBnYWxsZXJ5IGl0ZW0gYnkgaW5kZXhcbiAgICAgICAganVtcHRvOiBmdW5jdGlvbihpbmRleCwgZGlyZWN0aW9uLCByb3V0ZXIpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZGV4ID0gZ2V0U2NhbGFyKGluZGV4KTtcblxuICAgICAgICAgICAgRi5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgY3VycmVudC5kaXJlY3Rpb25bKGluZGV4ID49IGN1cnJlbnQuaW5kZXggPyAnbmV4dCcgOiAncHJldicpXTtcbiAgICAgICAgICAgIEYucm91dGVyID0gcm91dGVyIHx8ICdqdW1wdG8nO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudC5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGN1cnJlbnQuZ3JvdXAubGVuZ3RoICsgKGluZGV4ICUgY3VycmVudC5ncm91cC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXggJSBjdXJyZW50Lmdyb3VwLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZ3JvdXBbaW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBGLmNhbmNlbCgpO1xuXG4gICAgICAgICAgICAgICAgRi5fc3RhcnQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIENlbnRlciBpbnNpZGUgdmlld3BvcnQgYW5kIHRvZ2dsZSBwb3NpdGlvbiB0eXBlIHRvIGZpeGVkIG9yIGFic29sdXRlIGlmIG5lZWRlZFxuICAgICAgICByZXBvc2l0aW9uOiBmdW5jdGlvbihlLCBvbmx5QWJzb2x1dGUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHdyYXAgPSBjdXJyZW50ID8gY3VycmVudC53cmFwIDogbnVsbCxcbiAgICAgICAgICAgICAgICBwb3M7XG5cbiAgICAgICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAgICAgcG9zID0gRi5fZ2V0UG9zaXRpb24ob25seUFic29sdXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChlICYmIGUudHlwZSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvcy5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICB3cmFwLnN0b3AodHJ1ZSwgdHJ1ZSkuYW5pbWF0ZShwb3MsIDIwMCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmNzcyhwb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQucG9zID0galF1ZXJ5LmV4dGVuZCh7fSwgY3VycmVudC5kaW0sIHBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSAoZSAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnR5cGUpLFxuICAgICAgICAgICAgICAgIGFueXdheSA9ICF0eXBlIHx8IHR5cGUgPT09ICdvcmllbnRhdGlvbmNoYW5nZSc7XG5cbiAgICAgICAgICAgIGlmIChhbnl3YXkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGlkVXBkYXRlKTtcblxuICAgICAgICAgICAgICAgIGRpZFVwZGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghRi5pc09wZW4gfHwgZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaWRVcGRhdGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50IHx8IEYuaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGLndyYXAucmVtb3ZlQ2xhc3MoJ2ZhbmN5Ym94LXRtcCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFueXdheSB8fCB0eXBlID09PSAnbG9hZCcgfHwgKHR5cGUgPT09ICdyZXNpemUnICYmIGN1cnJlbnQuYXV0b1Jlc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgRi5fc2V0RGltZW5zaW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEodHlwZSA9PT0gJ3Njcm9sbCcgJiYgY3VycmVudC5jYW5TaHJpbmspKSB7XG4gICAgICAgICAgICAgICAgICAgIEYucmVwb3NpdGlvbihlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGLnRyaWdnZXIoJ29uVXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBkaWRVcGRhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICB9LCAoYW55d2F5ICYmICFpc1RvdWNoID8gMCA6IDMwMCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFNocmluayBjb250ZW50IHRvIGZpdCBpbnNpZGUgdmlld3BvcnQgb3IgcmVzdG9yZSBpZiByZXNpemVkXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoRi5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICBGLmN1cnJlbnQuZml0VG9WaWV3ID0galF1ZXJ5LnR5cGUoYWN0aW9uKSA9PT0gXCJib29sZWFuXCIgPyBhY3Rpb24gOiAhRi5jdXJyZW50LmZpdFRvVmlldztcblxuICAgICAgICAgICAgICAgIC8vIEhlbHAgYnJvd3NlciB0byByZXN0b3JlIGRvY3VtZW50IGRpbWVuc2lvbnNcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBGLndyYXAucmVtb3ZlQXR0cignc3R5bGUnKS5hZGRDbGFzcygnZmFuY3lib3gtdG1wJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgRi50cmlnZ2VyKCdvblVwZGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEYudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZUxvYWRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgRC51bmJpbmQoJy5sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGpRdWVyeSgnI2ZhbmN5Ym94LWxvYWRpbmcnKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93TG9hZGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwsIHZpZXdwb3J0O1xuXG4gICAgICAgICAgICBGLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgIGVsID0galF1ZXJ5KEYub3B0cy50cGwubG9hZGluZykuY2xpY2soRi5jYW5jZWwpLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgICAgIC8vIElmIHVzZXIgd2lsbCBwcmVzcyB0aGUgZXNjYXBlLWJ1dHRvbiwgdGhlIHJlcXVlc3Qgd2lsbCBiZSBjYW5jZWxlZFxuICAgICAgICAgICAgRC5iaW5kKCdrZXlkb3duLmxvYWRpbmcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBGLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIUYuZGVmYXVsdHMuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydCA9IEYuZ2V0Vmlld3BvcnQoKTtcblxuICAgICAgICAgICAgICAgIGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICh2aWV3cG9ydC5oICogMC41KSArIHZpZXdwb3J0LnksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICh2aWV3cG9ydC53ICogMC41KSArIHZpZXdwb3J0LnhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi50cmlnZ2VyKCdvbkxvYWRpbmcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRWaWV3cG9ydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbG9ja2VkID0gKEYuY3VycmVudCAmJiBGLmN1cnJlbnQubG9ja2VkKSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXogPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IFcuc2Nyb2xsTGVmdCgpLFxuICAgICAgICAgICAgICAgICAgICB5OiBXLnNjcm9sbFRvcCgpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGxvY2tlZCAmJiBsb2NrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV6LncgPSBsb2NrZWRbMF0uY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgcmV6LmggPSBsb2NrZWRbMF0uY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC82NzI0XG4gICAgICAgICAgICAgICAgcmV6LncgPSBpc1RvdWNoICYmIHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBXLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgcmV6LmggPSBpc1RvdWNoICYmIHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IFcuaGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXo7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBrZXlib2FyZCAvIGNsaWNraW5nIGFjdGlvbnNcbiAgICAgICAgdW5iaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChGLndyYXAgJiYgaXNRdWVyeShGLndyYXApKSB7XG4gICAgICAgICAgICAgICAgRi53cmFwLnVuYmluZCgnLmZiJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEQudW5iaW5kKCcuZmInKTtcbiAgICAgICAgICAgIFcudW5iaW5kKCcuZmInKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGtleXM7XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgZG9jdW1lbnQgaGVpZ2h0IG9uIGlPUyBkZXZpY2VzIHRyaWdnZXJzIGEgJ3Jlc2l6ZScgZXZlbnQsXG4gICAgICAgICAgICAvLyB0aGF0IGNhbiBjaGFuZ2UgZG9jdW1lbnQgaGVpZ2h0Li4uIHJlcGVhdGluZyBpbmZpbml0ZWx5XG4gICAgICAgICAgICBXLmJpbmQoJ29yaWVudGF0aW9uY2hhbmdlLmZiJyArIChpc1RvdWNoID8gJycgOiAnIHJlc2l6ZS5mYicpICsgKGN1cnJlbnQuYXV0b0NlbnRlciAmJiAhY3VycmVudC5sb2NrZWQgPyAnIHNjcm9sbC5mYicgOiAnJyksIEYudXBkYXRlKTtcblxuICAgICAgICAgICAga2V5cyA9IGN1cnJlbnQua2V5cztcblxuICAgICAgICAgICAgaWYgKGtleXMpIHtcbiAgICAgICAgICAgICAgICBELmJpbmQoJ2tleWRvd24uZmInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gZS53aGljaCB8fCBlLmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBlc2Mga2V5IGlmIGxvYWRpbmcsIGJlY2F1c2Ugc2hvd0xvYWRpbmcgd2lsbCBjYW5jZWwgcHJlbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gMjcgJiYgRi5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBrZXkgY29tYmluYXRpb25zIGFuZCBrZXkgZXZlbnRzIHdpdGhpbiBmb3JtIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5ICYmICFlLmFsdEtleSAmJiAhZS5zaGlmdEtleSAmJiAhZS5tZXRhS2V5ICYmICEodGFyZ2V0ICYmICh0YXJnZXQudHlwZSB8fCBqUXVlcnkodGFyZ2V0KS5pcygnW2NvbnRlbnRlZGl0YWJsZV0nKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChrZXlzLCBmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ncm91cC5sZW5ndGggPiAxICYmIHZhbFtjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZbaV0odmFsW2NvZGVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkoY29kZSwgdmFsKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZbaV0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmZuLm1vdXNld2hlZWwgJiYgY3VycmVudC5tb3VzZVdoZWVsKSB7XG4gICAgICAgICAgICAgICAgRi53cmFwLmJpbmQoJ21vdXNld2hlZWwuZmInLCBmdW5jdGlvbihlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBqUXVlcnkodGFyZ2V0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuU2Nyb2xsIHx8IHBhcmVudC5pcygnLmZhbmN5Ym94LXNraW4nKSB8fCBwYXJlbnQuaXMoJy5mYW5jeWJveC13cmFwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuU2Nyb2xsID0gaXNTY3JvbGxhYmxlKHBhcmVudFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBqUXVlcnkocGFyZW50KS5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSAhPT0gMCAmJiAhY2FuU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRi5ncm91cC5sZW5ndGggPiAxICYmICFjdXJyZW50LmNhblNocmluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YVkgPiAwIHx8IGRlbHRhWCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRi5wcmV2KGRlbHRhWSA+IDAgPyAnZG93bicgOiAnbGVmdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZWx0YVkgPCAwIHx8IGRlbHRhWCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRi5uZXh0KGRlbHRhWSA8IDAgPyAndXAnIDogJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnQsIG8pIHtcbiAgICAgICAgICAgIHZhciByZXQsIG9iaiA9IG8gfHwgRi5jb21pbmcgfHwgRi5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5pc0Z1bmN0aW9uKG9ialtldmVudF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IG9ialtldmVudF0uYXBwbHkob2JqLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oZWxwZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKG9iai5oZWxwZXJzLCBmdW5jdGlvbihoZWxwZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzICYmIEYuaGVscGVyc1toZWxwZXJdICYmIGpRdWVyeS5pc0Z1bmN0aW9uKEYuaGVscGVyc1toZWxwZXJdW2V2ZW50XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGLmhlbHBlcnNbaGVscGVyXVtldmVudF0oalF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgRi5oZWxwZXJzW2hlbHBlcl0uZGVmYXVsdHMsIG9wdHMpLCBvYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEQudHJpZ2dlcihldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNJbWFnZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTdHJpbmcoc3RyKSAmJiBzdHIubWF0Y2goLyheZGF0YTppbWFnZVxcLy4qLCl8KFxcLihqcChlfGd8ZWcpfGdpZnxwbmd8Ym1wfHdlYnB8c3ZnKSgoXFw/fCMpLiopPyQpL2kpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzU1dGOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1N0cmluZyhzdHIpICYmIHN0ci5tYXRjaCgvXFwuKHN3ZikoKFxcP3wjKS4qKT8kL2kpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9zdGFydDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb21pbmcgPSB7fSxcbiAgICAgICAgICAgICAgICBvYmosXG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1hcmdpbixcbiAgICAgICAgICAgICAgICBwYWRkaW5nO1xuXG4gICAgICAgICAgICBpbmRleCA9IGdldFNjYWxhcihpbmRleCk7XG4gICAgICAgICAgICBvYmogPSBGLmdyb3VwW2luZGV4XSB8fCBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29taW5nID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgRi5vcHRzLCBvYmopO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcmdpbiBhbmQgcGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFycmF5IC0gdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XG4gICAgICAgICAgICBtYXJnaW4gPSBjb21pbmcubWFyZ2luO1xuICAgICAgICAgICAgcGFkZGluZyA9IGNvbWluZy5wYWRkaW5nO1xuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LnR5cGUobWFyZ2luKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb21pbmcubWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChqUXVlcnkudHlwZShwYWRkaW5nKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb21pbmcucGFkZGluZyA9IFtwYWRkaW5nLCBwYWRkaW5nLCBwYWRkaW5nLCBwYWRkaW5nXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gJ21vZGFsJyBwcm9wZXJ5IGlzIGp1c3QgYSBzaG9ydGN1dFxuICAgICAgICAgICAgaWYgKGNvbWluZy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQodHJ1ZSwgY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VDbGljazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5leHRDbGljazogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlV2hlZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBrZXlzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDbGljazogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAnYXV0b1NpemUnIHByb3BlcnR5IGlzIGEgc2hvcnRjdXQsIHRvb1xuICAgICAgICAgICAgaWYgKGNvbWluZy5hdXRvU2l6ZSkge1xuICAgICAgICAgICAgICAgIGNvbWluZy5hdXRvV2lkdGggPSBjb21pbmcuYXV0b0hlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb21pbmcud2lkdGggPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgIGNvbWluZy5hdXRvV2lkdGggPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29taW5nLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgY29taW5nLmF1dG9IZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogQWRkIHJlZmVyZW5jZSB0byB0aGUgZ3JvdXAsIHNvIGl0YHMgcG9zc2libGUgdG8gYWNjZXNzIGZyb20gY2FsbGJhY2tzLCBleGFtcGxlOlxuICAgICAgICAgICAgICogYWZ0ZXJMb2FkIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgKiAgICAgdGhpcy50aXRsZSA9ICdJbWFnZSAnICsgKHRoaXMuaW5kZXggKyAxKSArICcgb2YgJyArIHRoaXMuZ3JvdXAubGVuZ3RoICsgKHRoaXMudGl0bGUgPyAnIC0gJyArIHRoaXMudGl0bGUgOiAnJyk7XG4gICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgY29taW5nLmdyb3VwID0gRi5ncm91cDtcbiAgICAgICAgICAgIGNvbWluZy5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICAvLyBHaXZlIGEgY2hhbmNlIGZvciBjYWxsYmFjayBvciBoZWxwZXJzIHRvIHVwZGF0ZSBjb21pbmcgaXRlbSAodHlwZSwgdGl0bGUsIGV0YylcbiAgICAgICAgICAgIEYuY29taW5nID0gY29taW5nO1xuXG4gICAgICAgICAgICBpZiAoZmFsc2UgPT09IEYudHJpZ2dlcignYmVmb3JlTG9hZCcpKSB7XG4gICAgICAgICAgICAgICAgRi5jb21pbmcgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0eXBlID0gY29taW5nLnR5cGU7XG4gICAgICAgICAgICBocmVmID0gY29taW5nLmhyZWY7XG5cbiAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgIEYuY29taW5nID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vSWYgd2UgY2FuIG5vdCBkZXRlcm1pbmUgY29udGVudCB0eXBlIHRoZW4gZHJvcCBzaWxlbnRseSBvciBkaXNwbGF5IG5leHQvcHJldiBpdGVtIGlmIGxvb3BpbmcgdGhyb3VnaCBnYWxsZXJ5XG4gICAgICAgICAgICAgICAgaWYgKEYuY3VycmVudCAmJiBGLnJvdXRlciAmJiBGLnJvdXRlciAhPT0gJ2p1bXB0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgRi5jdXJyZW50LmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZbRi5yb3V0ZXJdKEYuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnc3dmJykge1xuICAgICAgICAgICAgICAgIGNvbWluZy5hdXRvSGVpZ2h0ID0gY29taW5nLmF1dG9XaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbWluZy5zY3JvbGxpbmcgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgY29taW5nLmFzcGVjdFJhdGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpZnJhbWUnICYmIGlzVG91Y2gpIHtcbiAgICAgICAgICAgICAgICBjb21pbmcuc2Nyb2xsaW5nID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBuZWNjZXNzYXJ5IG1hcmt1cFxuICAgICAgICAgICAgY29taW5nLndyYXAgPSBqUXVlcnkoY29taW5nLnRwbC53cmFwKS5hZGRDbGFzcygnZmFuY3lib3gtJyArIChpc1RvdWNoID8gJ21vYmlsZScgOiAnZGVza3RvcCcpICsgJyBmYW5jeWJveC10eXBlLScgKyB0eXBlICsgJyBmYW5jeWJveC10bXAgJyArIGNvbWluZy53cmFwQ1NTKS5hcHBlbmRUbyhjb21pbmcucGFyZW50IHx8ICdib2R5Jyk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoY29taW5nLCB7XG4gICAgICAgICAgICAgICAgc2tpbjogalF1ZXJ5KCcuZmFuY3lib3gtc2tpbicsIGNvbWluZy53cmFwKSxcbiAgICAgICAgICAgICAgICBvdXRlcjogalF1ZXJ5KCcuZmFuY3lib3gtb3V0ZXInLCBjb21pbmcud3JhcCksXG4gICAgICAgICAgICAgICAgaW5uZXI6IGpRdWVyeSgnLmZhbmN5Ym94LWlubmVyJywgY29taW5nLndyYXApXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgalF1ZXJ5LmVhY2goW1wiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCJdLCBmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgY29taW5nLnNraW4uY3NzKCdwYWRkaW5nJyArIHYsIGdldFZhbHVlKGNvbWluZy5wYWRkaW5nW2ldKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRi50cmlnZ2VyKCdvblJlYWR5Jyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGJlZm9yZSB0cnkgdG8gbG9hZDsgJ2lubGluZScgYW5kICdodG1sJyB0eXBlcyBuZWVkIGNvbnRlbnQsIG90aGVycyAtIGhyZWZcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5saW5lJyB8fCB0eXBlID09PSAnaHRtbCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbWluZy5jb250ZW50IHx8ICFjb21pbmcuY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEYuX2Vycm9yKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFocmVmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEYuX2Vycm9yKCdocmVmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgRi5fbG9hZEltYWdlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FqYXgnKSB7XG4gICAgICAgICAgICAgICAgRi5fbG9hZEFqYXgoKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaWZyYW1lJykge1xuICAgICAgICAgICAgICAgIEYuX2xvYWRJZnJhbWUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBGLl9hZnRlckxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfZXJyb3I6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoRi5jb21pbmcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogJ25vJyxcbiAgICAgICAgICAgICAgICBoYXNFcnJvcjogdHlwZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBGLmNvbWluZy50cGwuZXJyb3JcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBGLl9hZnRlckxvYWQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfbG9hZEltYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHByZWxvYWQgaW1hZ2Ugc28gaXQgaXMgbGF0ZXIgcG9zc2libGUgdG8gY2hlY2sgXCJjb21wbGV0ZVwiIHByb3BlcnR5XG4gICAgICAgICAgICB2YXIgaW1nID0gRi5pbWdQcmVsb2FkID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ubG9hZCA9IHRoaXMub25lcnJvciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBGLmNvbWluZy53aWR0aCA9IHRoaXMud2lkdGggLyBGLm9wdHMucGl4ZWxSYXRpbztcbiAgICAgICAgICAgICAgICBGLmNvbWluZy5oZWlnaHQgPSB0aGlzLmhlaWdodCAvIEYub3B0cy5waXhlbFJhdGlvO1xuXG4gICAgICAgICAgICAgICAgRi5fYWZ0ZXJMb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25sb2FkID0gdGhpcy5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIEYuX2Vycm9yKCdpbWFnZScpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IEYuY29taW5nLmhyZWY7XG5cbiAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBGLnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2xvYWRBamF4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb21pbmcgPSBGLmNvbWluZztcblxuICAgICAgICAgICAgRi5zaG93TG9hZGluZygpO1xuXG4gICAgICAgICAgICBGLmFqYXhMb2FkID0galF1ZXJ5LmFqYXgoalF1ZXJ5LmV4dGVuZCh7fSwgY29taW5nLmFqYXgsIHtcbiAgICAgICAgICAgICAgICB1cmw6IGNvbWluZy5ocmVmLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRi5jb21pbmcgJiYgdGV4dFN0YXR1cyAhPT0gJ2Fib3J0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgRi5fZXJyb3IoJ2FqYXgnLCBqcVhIUik7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEYuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21pbmcuY29udGVudCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEYuX2FmdGVyTG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9sb2FkSWZyYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb21pbmcgPSBGLmNvbWluZyxcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSBqUXVlcnkoY29taW5nLnRwbC5pZnJhbWUucmVwbGFjZSgvXFx7cm5kXFx9L2csIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSlcbiAgICAgICAgICAgICAgICAuYXR0cignc2Nyb2xsaW5nJywgaXNUb3VjaCA/ICdhdXRvJyA6IGNvbWluZy5pZnJhbWUuc2Nyb2xsaW5nKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBjb21pbmcuaHJlZik7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaGVscHMgSUVcbiAgICAgICAgICAgIGpRdWVyeShjb21pbmcud3JhcCkuYmluZCgnb25SZXNldCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCdpZnJhbWUnKS5oaWRlKCkuYXR0cignc3JjJywgJy8vYWJvdXQ6YmxhbmsnKS5lbmQoKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbWluZy5pZnJhbWUucHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIEYuc2hvd0xvYWRpbmcoKTtcblxuICAgICAgICAgICAgICAgIGlmcmFtZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ3JlYWR5JywgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaU9TIHdpbGwgbG9zZSBzY3JvbGxpbmcgaWYgd2UgcmVzaXplXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmJpbmQoJ2xvYWQuZmInLCBGLnVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBXaXRob3V0IHRoaXMgdHJpY2s6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgLSBpZnJhbWUgd29uJ3Qgc2Nyb2xsIG9uIGlPUyBkZXZpY2VzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLSBJRTcgc29tZXRpbWVzIGRpc3BsYXlzIGVtcHR5IGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50cygnLmZhbmN5Ym94LXdyYXAnKS53aWR0aCgnMTAwJScpLnJlbW92ZUNsYXNzKCdmYW5jeWJveC10bXAnKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgRi5fYWZ0ZXJMb2FkKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbWluZy5jb250ZW50ID0gaWZyYW1lLmFwcGVuZFRvKGNvbWluZy5pbm5lcik7XG5cbiAgICAgICAgICAgIGlmICghY29taW5nLmlmcmFtZS5wcmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgRi5fYWZ0ZXJMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3ByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwID0gRi5ncm91cCxcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGxlbiA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjbnQgPSBjdXJyZW50LnByZWxvYWQgPyBNYXRoLm1pbihjdXJyZW50LnByZWxvYWQsIGxlbiAtIDEpIDogMCxcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gY250OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gZ3JvdXBbKGN1cnJlbnQuaW5kZXggKyBpKSAlIGxlbl07XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UnICYmIGl0ZW0uaHJlZikge1xuICAgICAgICAgICAgICAgICAgICBuZXcgSW1hZ2UoKS5zcmMgPSBpdGVtLmhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9hZnRlckxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbWluZyA9IEYuY29taW5nLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJ2ZhbmN5Ym94LXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmcsXG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICBlbWJlZDtcblxuICAgICAgICAgICAgRi5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICBpZiAoIWNvbWluZyB8fCBGLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZhbHNlID09PSBGLnRyaWdnZXIoJ2FmdGVyTG9hZCcsIGNvbWluZywgcHJldmlvdXMpKSB7XG4gICAgICAgICAgICAgICAgY29taW5nLndyYXAuc3RvcCh0cnVlKS50cmlnZ2VyKCdvblJlc2V0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBGLmNvbWluZyA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICAgICAgICAgIEYudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgcHJldmlvdXMpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlvdXMud3JhcC5zdG9wKHRydWUpLnJlbW92ZUNsYXNzKCdmYW5jeWJveC1vcGVuZWQnKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmZhbmN5Ym94LWl0ZW0sIC5mYW5jeWJveC1uYXYnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIGN1cnJlbnQgPSBjb21pbmc7XG4gICAgICAgICAgICBjb250ZW50ID0gY29taW5nLmNvbnRlbnQ7XG4gICAgICAgICAgICB0eXBlID0gY29taW5nLnR5cGU7XG4gICAgICAgICAgICBzY3JvbGxpbmcgPSBjb21pbmcuc2Nyb2xsaW5nO1xuXG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKEYsIHtcbiAgICAgICAgICAgICAgICB3cmFwOiBjdXJyZW50LndyYXAsXG4gICAgICAgICAgICAgICAgc2tpbjogY3VycmVudC5za2luLFxuICAgICAgICAgICAgICAgIG91dGVyOiBjdXJyZW50Lm91dGVyLFxuICAgICAgICAgICAgICAgIGlubmVyOiBjdXJyZW50LmlubmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaHJlZiA9IGN1cnJlbnQuaHJlZjtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5saW5lJzpcbiAgICAgICAgICAgICAgICBjYXNlICdhamF4JzpcbiAgICAgICAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBqUXVlcnkoJzxkaXY+JykuaHRtbChjb250ZW50KS5maW5kKGN1cnJlbnQuc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNRdWVyeShjb250ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50LmRhdGEocGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5kYXRhKHBsYWNlaG9sZGVyLCBqUXVlcnkoJzxkaXYgY2xhc3M9XCInICsgcGxhY2Vob2xkZXIgKyAnXCI+PC9kaXY+JykuaW5zZXJ0QWZ0ZXIoY29udGVudCkuaGlkZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc2hvdygpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LndyYXAuYmluZCgnb25SZXNldCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZmluZChjb250ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5oaWRlKCkucmVwbGFjZUFsbChjb250ZW50LmRhdGEocGxhY2Vob2xkZXIpKS5kYXRhKHBsYWNlaG9sZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjdXJyZW50LnRwbC5pbWFnZS5yZXBsYWNlKC9cXHtocmVmXFx9L2csIGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3N3Zic6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnPG9iamVjdCBpZD1cImZhbmN5Ym94LXN3ZlwiIGNsYXNzaWQ9XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PHBhcmFtIG5hbWU9XCJtb3ZpZVwiIHZhbHVlPVwiJyArIGhyZWYgKyAnXCI+PC9wYXJhbT4nO1xuICAgICAgICAgICAgICAgICAgICBlbWJlZCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKGN1cnJlbnQuc3dmLCBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxwYXJhbSBuYW1lPVwiJyArIG5hbWUgKyAnXCIgdmFsdWU9XCInICsgdmFsICsgJ1wiPjwvcGFyYW0+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkICs9ICcgJyArIG5hbWUgKyAnPVwiJyArIHZhbCArICdcIic7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gJzxlbWJlZCBzcmM9XCInICsgaHJlZiArICdcIiB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCInICsgZW1iZWQgKyAnPjwvZW1iZWQ+PC9vYmplY3Q+JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGlzUXVlcnkoY29udGVudCkgJiYgY29udGVudC5wYXJlbnQoKS5pcyhjdXJyZW50LmlubmVyKSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlubmVyLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2l2ZSBhIGNoYW5jZSBmb3IgaGVscGVycyBvciBjYWxsYmFja3MgdG8gdXBkYXRlIGVsZW1lbnRzXG4gICAgICAgICAgICBGLnRyaWdnZXIoJ2JlZm9yZVNob3cnKTtcblxuICAgICAgICAgICAgLy8gU2V0IHNjcm9sbGluZyBiZWZvcmUgY2FsY3VsYXRpbmcgZGltZW5zaW9uc1xuICAgICAgICAgICAgY3VycmVudC5pbm5lci5jc3MoJ292ZXJmbG93Jywgc2Nyb2xsaW5nID09PSAneWVzJyA/ICdzY3JvbGwnIDogKHNjcm9sbGluZyA9PT0gJ25vJyA/ICdoaWRkZW4nIDogc2Nyb2xsaW5nKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIGRpbWVuc2lvbnMgYW5kIHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgICAgICBGLl9zZXREaW1lbnNpb24oKTtcblxuICAgICAgICAgICAgRi5yZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIEYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBGLmNvbWluZyA9IG51bGw7XG5cbiAgICAgICAgICAgIEYuYmluZEV2ZW50cygpO1xuXG4gICAgICAgICAgICBpZiAoIUYuaXNPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5mYW5jeWJveC13cmFwJykubm90KGN1cnJlbnQud3JhcCkuc3RvcCh0cnVlKS50cmlnZ2VyKCdvblJlc2V0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMucHJldk1ldGhvZCkge1xuICAgICAgICAgICAgICAgIEYudHJhbnNpdGlvbnNbcHJldmlvdXMucHJldk1ldGhvZF0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi50cmFuc2l0aW9uc1tGLmlzT3BlbmVkID8gY3VycmVudC5uZXh0TWV0aG9kIDogY3VycmVudC5vcGVuTWV0aG9kXSgpO1xuXG4gICAgICAgICAgICBGLl9wcmVsb2FkSW1hZ2VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3NldERpbWVuc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmlld3BvcnQgPSBGLmdldFZpZXdwb3J0KCksXG4gICAgICAgICAgICAgICAgc3RlcHMgPSAwLFxuICAgICAgICAgICAgICAgIGNhblNocmluayA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhbkV4cGFuZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyYXAgPSBGLndyYXAsXG4gICAgICAgICAgICAgICAgc2tpbiA9IEYuc2tpbixcbiAgICAgICAgICAgICAgICBpbm5lciA9IEYuaW5uZXIsXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IEYuY3VycmVudCxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGN1cnJlbnQud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gY3VycmVudC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBjdXJyZW50Lm1pbldpZHRoLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodCA9IGN1cnJlbnQubWluSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1heFdpZHRoID0gY3VycmVudC5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBjdXJyZW50Lm1heEhlaWdodCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmcgPSBjdXJyZW50LnNjcm9sbGluZyxcbiAgICAgICAgICAgICAgICBzY3JvbGxPdXQgPSBjdXJyZW50LnNjcm9sbE91dHNpZGUgPyBjdXJyZW50LnNjcm9sbGJhcldpZHRoIDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW4gPSBjdXJyZW50Lm1hcmdpbixcbiAgICAgICAgICAgICAgICB3TWFyZ2luID0gZ2V0U2NhbGFyKG1hcmdpblsxXSArIG1hcmdpblszXSksXG4gICAgICAgICAgICAgICAgaE1hcmdpbiA9IGdldFNjYWxhcihtYXJnaW5bMF0gKyBtYXJnaW5bMl0pLFxuICAgICAgICAgICAgICAgIHdQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhQYWRkaW5nLFxuICAgICAgICAgICAgICAgIHdTcGFjZSxcbiAgICAgICAgICAgICAgICBoU3BhY2UsXG4gICAgICAgICAgICAgICAgb3JpZ1dpZHRoLFxuICAgICAgICAgICAgICAgIG9yaWdIZWlnaHQsXG4gICAgICAgICAgICAgICAgb3JpZ01heFdpZHRoLFxuICAgICAgICAgICAgICAgIG9yaWdNYXhIZWlnaHQsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgd2lkdGhfLFxuICAgICAgICAgICAgICAgIGhlaWdodF8sXG4gICAgICAgICAgICAgICAgbWF4V2lkdGhfLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodF8sXG4gICAgICAgICAgICAgICAgaWZyYW1lLFxuICAgICAgICAgICAgICAgIGJvZHk7XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGRpbWVuc2lvbnMgc28gd2UgY291bGQgcmUtY2hlY2sgYWN0dWFsIHNpemVcbiAgICAgICAgICAgIHdyYXAuYWRkKHNraW4pLmFkZChpbm5lcikud2lkdGgoJ2F1dG8nKS5oZWlnaHQoJ2F1dG8nKS5yZW1vdmVDbGFzcygnZmFuY3lib3gtdG1wJyk7XG5cbiAgICAgICAgICAgIHdQYWRkaW5nID0gZ2V0U2NhbGFyKHNraW4ub3V0ZXJXaWR0aCh0cnVlKSAtIHNraW4ud2lkdGgoKSk7XG4gICAgICAgICAgICBoUGFkZGluZyA9IGdldFNjYWxhcihza2luLm91dGVySGVpZ2h0KHRydWUpIC0gc2tpbi5oZWlnaHQoKSk7XG5cbiAgICAgICAgICAgIC8vIEFueSBzcGFjZSBiZXR3ZWVuIGNvbnRlbnQgYW5kIHZpZXdwb3J0IChtYXJnaW4sIHBhZGRpbmcsIGJvcmRlciwgdGl0bGUpXG4gICAgICAgICAgICB3U3BhY2UgPSB3TWFyZ2luICsgd1BhZGRpbmc7XG4gICAgICAgICAgICBoU3BhY2UgPSBoTWFyZ2luICsgaFBhZGRpbmc7XG5cbiAgICAgICAgICAgIG9yaWdXaWR0aCA9IGlzUGVyY2VudGFnZSh3aWR0aCkgPyAodmlld3BvcnQudyAtIHdTcGFjZSkgKiBnZXRTY2FsYXIod2lkdGgpIC8gMTAwIDogd2lkdGg7XG4gICAgICAgICAgICBvcmlnSGVpZ2h0ID0gaXNQZXJjZW50YWdlKGhlaWdodCkgPyAodmlld3BvcnQuaCAtIGhTcGFjZSkgKiBnZXRTY2FsYXIoaGVpZ2h0KSAvIDEwMCA6IGhlaWdodDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ2lmcmFtZScpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSBjdXJyZW50LmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hdXRvSGVpZ2h0ICYmIGlmcmFtZS5kYXRhKCdyZWFkeScpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lci53aWR0aChvcmlnV2lkdGgpLmhlaWdodCg5OTk5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBpZnJhbWUuY29udGVudHMoKS5maW5kKCdib2R5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuY3NzKCdvdmVyZmxvdy14JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdIZWlnaHQgPSBib2R5Lm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuYXV0b1dpZHRoIHx8IGN1cnJlbnQuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGlubmVyLmFkZENsYXNzKCdmYW5jeWJveC10bXAnKTtcblxuICAgICAgICAgICAgICAgIC8vIFNldCB3aWR0aCBvciBoZWlnaHQgaW4gY2FzZSB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSBvbmx5IG9uZSBkaW1lbnNpb25cbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQuYXV0b1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyLndpZHRoKG9yaWdXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50LmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXIuaGVpZ2h0KG9yaWdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmF1dG9XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnV2lkdGggPSBpbm5lci53aWR0aCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ0hlaWdodCA9IGlubmVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlubmVyLnJlbW92ZUNsYXNzKCdmYW5jeWJveC10bXAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkdGggPSBnZXRTY2FsYXIob3JpZ1dpZHRoKTtcbiAgICAgICAgICAgIGhlaWdodCA9IGdldFNjYWxhcihvcmlnSGVpZ2h0KTtcblxuICAgICAgICAgICAgcmF0aW8gPSBvcmlnV2lkdGggLyBvcmlnSGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGlvbnMgZm9yIHRoZSBjb250ZW50XG4gICAgICAgICAgICBtaW5XaWR0aCA9IGdldFNjYWxhcihpc1BlcmNlbnRhZ2UobWluV2lkdGgpID8gZ2V0U2NhbGFyKG1pbldpZHRoLCAndycpIC0gd1NwYWNlIDogbWluV2lkdGgpO1xuICAgICAgICAgICAgbWF4V2lkdGggPSBnZXRTY2FsYXIoaXNQZXJjZW50YWdlKG1heFdpZHRoKSA/IGdldFNjYWxhcihtYXhXaWR0aCwgJ3cnKSAtIHdTcGFjZSA6IG1heFdpZHRoKTtcblxuICAgICAgICAgICAgbWluSGVpZ2h0ID0gZ2V0U2NhbGFyKGlzUGVyY2VudGFnZShtaW5IZWlnaHQpID8gZ2V0U2NhbGFyKG1pbkhlaWdodCwgJ2gnKSAtIGhTcGFjZSA6IG1pbkhlaWdodCk7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBnZXRTY2FsYXIoaXNQZXJjZW50YWdlKG1heEhlaWdodCkgPyBnZXRTY2FsYXIobWF4SGVpZ2h0LCAnaCcpIC0gaFNwYWNlIDogbWF4SGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gVGhlc2Ugd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiB3cmFwIGNhbiBmaXQgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICBvcmlnTWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgICAgIG9yaWdNYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmZpdFRvVmlldykge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoID0gTWF0aC5taW4odmlld3BvcnQudyAtIHdTcGFjZSwgbWF4V2lkdGgpO1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IE1hdGgubWluKHZpZXdwb3J0LmggLSBoU3BhY2UsIG1heEhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1heFdpZHRoXyA9IHZpZXdwb3J0LncgLSB3TWFyZ2luO1xuICAgICAgICAgICAgbWF4SGVpZ2h0XyA9IHZpZXdwb3J0LmggLSBoTWFyZ2luO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudC5hc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGdldFNjYWxhcih3aWR0aCAvIHJhdGlvKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBnZXRTY2FsYXIoaGVpZ2h0ICogcmF0aW8pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gbWluV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGdldFNjYWxhcih3aWR0aCAvIHJhdGlvKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG1pbkhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBnZXRTY2FsYXIoaGVpZ2h0ICogcmF0aW8pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KG1pbldpZHRoLCBNYXRoLm1pbih3aWR0aCwgbWF4V2lkdGgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmF1dG9IZWlnaHQgJiYgY3VycmVudC50eXBlICE9PSAnaWZyYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBpbm5lci53aWR0aCh3aWR0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaW5uZXIuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBNYXRoLm1pbihoZWlnaHQsIG1heEhlaWdodCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZml0IGluc2lkZSB2aWV3cG9ydCAoaW5jbHVkaW5nIHRoZSB0aXRsZSlcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmZpdFRvVmlldykge1xuICAgICAgICAgICAgICAgIGlubmVyLndpZHRoKHdpZHRoKS5oZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIHdyYXAud2lkdGgod2lkdGggKyB3UGFkZGluZyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZWFsIHdyYXAgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgIHdpZHRoXyA9IHdyYXAud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBoZWlnaHRfID0gd3JhcC5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgod2lkdGhfID4gbWF4V2lkdGhfIHx8IGhlaWdodF8gPiBtYXhIZWlnaHRfKSAmJiB3aWR0aCA+IG1pbldpZHRoICYmIGhlaWdodCA+IG1pbkhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBzKysgPiAxOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0IC0gMTApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gZ2V0U2NhbGFyKGhlaWdodCAqIHJhdGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoIDwgbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG1pbldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGdldFNjYWxhcih3aWR0aCAvIHJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG1heFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGdldFNjYWxhcih3aWR0aCAvIHJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXIud2lkdGgod2lkdGgpLmhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwLndpZHRoKHdpZHRoICsgd1BhZGRpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aF8gPSB3cmFwLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHRfID0gd3JhcC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heChtaW5XaWR0aCwgTWF0aC5taW4od2lkdGgsIHdpZHRoIC0gKHdpZHRoXyAtIG1heFdpZHRoXykpKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBNYXRoLm1pbihoZWlnaHQsIGhlaWdodCAtIChoZWlnaHRfIC0gbWF4SGVpZ2h0XykpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxPdXQgJiYgc2Nyb2xsaW5nID09PSAnYXV0bycgJiYgaGVpZ2h0IDwgb3JpZ0hlaWdodCAmJiAod2lkdGggKyB3UGFkZGluZyArIHNjcm9sbE91dCkgPCBtYXhXaWR0aF8pIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBzY3JvbGxPdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlubmVyLndpZHRoKHdpZHRoKS5oZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgd3JhcC53aWR0aCh3aWR0aCArIHdQYWRkaW5nKTtcblxuICAgICAgICAgICAgd2lkdGhfID0gd3JhcC53aWR0aCgpO1xuICAgICAgICAgICAgaGVpZ2h0XyA9IHdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGNhblNocmluayA9ICh3aWR0aF8gPiBtYXhXaWR0aF8gfHwgaGVpZ2h0XyA+IG1heEhlaWdodF8pICYmIHdpZHRoID4gbWluV2lkdGggJiYgaGVpZ2h0ID4gbWluSGVpZ2h0O1xuICAgICAgICAgICAgY2FuRXhwYW5kID0gY3VycmVudC5hc3BlY3RSYXRpbyA/ICh3aWR0aCA8IG9yaWdNYXhXaWR0aCAmJiBoZWlnaHQgPCBvcmlnTWF4SGVpZ2h0ICYmIHdpZHRoIDwgb3JpZ1dpZHRoICYmIGhlaWdodCA8IG9yaWdIZWlnaHQpIDogKCh3aWR0aCA8IG9yaWdNYXhXaWR0aCB8fCBoZWlnaHQgPCBvcmlnTWF4SGVpZ2h0KSAmJiAod2lkdGggPCBvcmlnV2lkdGggfHwgaGVpZ2h0IDwgb3JpZ0hlaWdodCkpO1xuXG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKGN1cnJlbnQsIHtcbiAgICAgICAgICAgICAgICBkaW06IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGdldFZhbHVlKHdpZHRoXyksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZ2V0VmFsdWUoaGVpZ2h0XylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9yaWdXaWR0aDogb3JpZ1dpZHRoLFxuICAgICAgICAgICAgICAgIG9yaWdIZWlnaHQ6IG9yaWdIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2FuU2hyaW5rOiBjYW5TaHJpbmssXG4gICAgICAgICAgICAgICAgY2FuRXhwYW5kOiBjYW5FeHBhbmQsXG4gICAgICAgICAgICAgICAgd1BhZGRpbmc6IHdQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhQYWRkaW5nOiBoUGFkZGluZyxcbiAgICAgICAgICAgICAgICB3cmFwU3BhY2U6IGhlaWdodF8gLSBza2luLm91dGVySGVpZ2h0KHRydWUpLFxuICAgICAgICAgICAgICAgIHNraW5TcGFjZTogc2tpbi5oZWlnaHQoKSAtIGhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghaWZyYW1lICYmIGN1cnJlbnQuYXV0b0hlaWdodCAmJiBoZWlnaHQgPiBtaW5IZWlnaHQgJiYgaGVpZ2h0IDwgbWF4SGVpZ2h0ICYmICFjYW5FeHBhbmQpIHtcbiAgICAgICAgICAgICAgICBpbm5lci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9ubHlBYnNvbHV0ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgdmlld3BvcnQgPSBGLmdldFZpZXdwb3J0KCksXG4gICAgICAgICAgICAgICAgbWFyZ2luID0gY3VycmVudC5tYXJnaW4sXG4gICAgICAgICAgICAgICAgd2lkdGggPSBGLndyYXAud2lkdGgoKSArIG1hcmdpblsxXSArIG1hcmdpblszXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBGLndyYXAuaGVpZ2h0KCkgKyBtYXJnaW5bMF0gKyBtYXJnaW5bMl0sXG4gICAgICAgICAgICAgICAgcmV6ID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBtYXJnaW5bMF0sXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IG1hcmdpblszXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmF1dG9DZW50ZXIgJiYgY3VycmVudC5maXhlZCAmJiAhb25seUFic29sdXRlICYmIGhlaWdodCA8PSB2aWV3cG9ydC5oICYmIHdpZHRoIDw9IHZpZXdwb3J0LncpIHtcbiAgICAgICAgICAgICAgICByZXoucG9zaXRpb24gPSAnZml4ZWQnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjdXJyZW50LmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJlei50b3AgKz0gdmlld3BvcnQueTtcbiAgICAgICAgICAgICAgICByZXoubGVmdCArPSB2aWV3cG9ydC54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXoudG9wID0gZ2V0VmFsdWUoTWF0aC5tYXgocmV6LnRvcCwgcmV6LnRvcCArICgodmlld3BvcnQuaCAtIGhlaWdodCkgKiBjdXJyZW50LnRvcFJhdGlvKSkpO1xuICAgICAgICAgICAgcmV6LmxlZnQgPSBnZXRWYWx1ZShNYXRoLm1heChyZXoubGVmdCwgcmV6LmxlZnQgKyAoKHZpZXdwb3J0LncgLSB3aWR0aCkgKiBjdXJyZW50LmxlZnRSYXRpbykpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlejtcbiAgICAgICAgfSxcblxuICAgICAgICBfYWZ0ZXJab29tSW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi5pc09wZW4gPSBGLmlzT3BlbmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgRi53cmFwLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpLmFkZENsYXNzKCdmYW5jeWJveC1vcGVuZWQnKS5oaWRlKCkuc2hvdygwKTtcblxuICAgICAgICAgICAgRi51cGRhdGUoKTtcblxuICAgICAgICAgICAgLy8gQXNzaWduIGEgY2xpY2sgZXZlbnRcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNsb3NlQ2xpY2sgfHwgKGN1cnJlbnQubmV4dENsaWNrICYmIEYuZ3JvdXAubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgICAgICAgICBGLmlubmVyLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKS5iaW5kKCdjbGljay5mYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqUXVlcnkoZS50YXJnZXQpLmlzKCdhJykgJiYgIWpRdWVyeShlLnRhcmdldCkucGFyZW50KCkuaXMoJ2EnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBGW2N1cnJlbnQuY2xvc2VDbGljayA/ICdjbG9zZScgOiAnbmV4dCddKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY2xvc2UgYnV0dG9uXG4gICAgICAgICAgICBpZiAoY3VycmVudC5jbG9zZUJ0bikge1xuICAgICAgICAgICAgICAgIGpRdWVyeShjdXJyZW50LnRwbC5jbG9zZUJ0bikuYXBwZW5kVG8oRi5za2luKS5iaW5kKCdjbGljay5mYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIEYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5hdmlnYXRpb24gYXJyb3dzXG4gICAgICAgICAgICBpZiAoY3VycmVudC5hcnJvd3MgJiYgRi5ncm91cC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubG9vcCB8fCBjdXJyZW50LmluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoY3VycmVudC50cGwucHJldikuYXBwZW5kVG8oRi5vdXRlcikuYmluZCgnY2xpY2suZmInLCBGLnByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lmxvb3AgfHwgY3VycmVudC5pbmRleCA8IEYuZ3JvdXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoY3VycmVudC50cGwubmV4dCkuYXBwZW5kVG8oRi5vdXRlcikuYmluZCgnY2xpY2suZmInLCBGLm5leHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi50cmlnZ2VyKCdhZnRlclNob3cnKTtcblxuICAgICAgICAgICAgLy8gU3RvcCB0aGUgc2xpZGVzaG93IGlmIHRoaXMgaXMgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgaWYgKCFjdXJyZW50Lmxvb3AgJiYgY3VycmVudC5pbmRleCA9PT0gY3VycmVudC5ncm91cC5sZW5ndGggLSAxKSB7XG5cbiAgICAgICAgICAgICAgICBGLnBsYXkoZmFsc2UpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEYub3B0cy5hdXRvUGxheSAmJiAhRi5wbGF5ZXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBGLm9wdHMuYXV0b1BsYXkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIEYucGxheSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfYWZ0ZXJab29tT3V0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIG9iaiA9IG9iaiB8fCBGLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIGpRdWVyeSgnLmZhbmN5Ym94LXdyYXAnKS50cmlnZ2VyKCdvblJlc2V0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoRiwge1xuICAgICAgICAgICAgICAgIGdyb3VwOiB7fSxcbiAgICAgICAgICAgICAgICBvcHRzOiB7fSxcbiAgICAgICAgICAgICAgICByb3V0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzT3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzQ2xvc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JhcDogbnVsbCxcbiAgICAgICAgICAgICAgICBza2luOiBudWxsLFxuICAgICAgICAgICAgICAgIG91dGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGlubmVyOiBudWxsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRi50cmlnZ2VyKCdhZnRlckNsb3NlJywgb2JqKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKlx0RGVmYXVsdCB0cmFuc2l0aW9uc1xuICAgICAqL1xuXG4gICAgRi50cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgZ2V0T3JpZ1Bvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBjdXJyZW50LmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb3JpZyA9IGN1cnJlbnQub3JpZyxcbiAgICAgICAgICAgICAgICBwb3MgPSB7fSxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDUwLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDUwLFxuICAgICAgICAgICAgICAgIGhQYWRkaW5nID0gY3VycmVudC5oUGFkZGluZyxcbiAgICAgICAgICAgICAgICB3UGFkZGluZyA9IGN1cnJlbnQud1BhZGRpbmcsXG4gICAgICAgICAgICAgICAgdmlld3BvcnQgPSBGLmdldFZpZXdwb3J0KCk7XG5cbiAgICAgICAgICAgIGlmICghb3JpZyAmJiBjdXJyZW50LmlzRG9tICYmIGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICBvcmlnID0gZWxlbWVudC5maW5kKCdpbWc6Zmlyc3QnKTtcblxuICAgICAgICAgICAgICAgIGlmICghb3JpZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNRdWVyeShvcmlnKSkge1xuICAgICAgICAgICAgICAgIHBvcyA9IG9yaWcub2Zmc2V0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3JpZy5pcygnaW1nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBvcmlnLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gb3JpZy5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MudG9wID0gdmlld3BvcnQueSArICh2aWV3cG9ydC5oIC0gaGVpZ2h0KSAqIGN1cnJlbnQudG9wUmF0aW87XG4gICAgICAgICAgICAgICAgcG9zLmxlZnQgPSB2aWV3cG9ydC54ICsgKHZpZXdwb3J0LncgLSB3aWR0aCkgKiBjdXJyZW50LmxlZnRSYXRpbztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKEYud3JhcC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcgfHwgY3VycmVudC5sb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBwb3MudG9wIC09IHZpZXdwb3J0Lnk7XG4gICAgICAgICAgICAgICAgcG9zLmxlZnQgLT0gdmlld3BvcnQueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9zID0ge1xuICAgICAgICAgICAgICAgIHRvcDogZ2V0VmFsdWUocG9zLnRvcCAtIGhQYWRkaW5nICogY3VycmVudC50b3BSYXRpbyksXG4gICAgICAgICAgICAgICAgbGVmdDogZ2V0VmFsdWUocG9zLmxlZnQgLSB3UGFkZGluZyAqIGN1cnJlbnQubGVmdFJhdGlvKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogZ2V0VmFsdWUod2lkdGggKyB3UGFkZGluZyksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBnZXRWYWx1ZShoZWlnaHQgKyBoUGFkZGluZylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RlcDogZnVuY3Rpb24obm93LCBmeCkge1xuICAgICAgICAgICAgdmFyIHJhdGlvLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcCA9IGZ4LnByb3AsXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IEYuY3VycmVudCxcbiAgICAgICAgICAgICAgICB3cmFwU3BhY2UgPSBjdXJyZW50LndyYXBTcGFjZSxcbiAgICAgICAgICAgICAgICBza2luU3BhY2UgPSBjdXJyZW50LnNraW5TcGFjZTtcblxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICd3aWR0aCcgfHwgcHJvcCA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICByYXRpbyA9IGZ4LmVuZCA9PT0gZnguc3RhcnQgPyAxIDogKG5vdyAtIGZ4LnN0YXJ0KSAvIChmeC5lbmQgLSBmeC5zdGFydCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoRi5pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFkZGluZyA9IHByb3AgPT09ICd3aWR0aCcgPyBjdXJyZW50LndQYWRkaW5nIDogY3VycmVudC5oUGFkZGluZztcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdyAtIHBhZGRpbmc7XG5cbiAgICAgICAgICAgICAgICBGLnNraW5bcHJvcF0oZ2V0U2NhbGFyKHByb3AgPT09ICd3aWR0aCcgPyB2YWx1ZSA6IHZhbHVlIC0gKHdyYXBTcGFjZSAqIHJhdGlvKSkpO1xuICAgICAgICAgICAgICAgIEYuaW5uZXJbcHJvcF0oZ2V0U2NhbGFyKHByb3AgPT09ICd3aWR0aCcgPyB2YWx1ZSA6IHZhbHVlIC0gKHdyYXBTcGFjZSAqIHJhdGlvKSAtIChza2luU3BhY2UgKiByYXRpbykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB6b29tSW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgc3RhcnRQb3MgPSBjdXJyZW50LnBvcyxcbiAgICAgICAgICAgICAgICBlZmZlY3QgPSBjdXJyZW50Lm9wZW5FZmZlY3QsXG4gICAgICAgICAgICAgICAgZWxhc3RpYyA9IGVmZmVjdCA9PT0gJ2VsYXN0aWMnLFxuICAgICAgICAgICAgICAgIGVuZFBvcyA9IGpRdWVyeS5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSwgc3RhcnRQb3MpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgXCJwb3NpdGlvblwiIHByb3BlcnR5IHRoYXQgYnJlYWtzIG9sZGVyIElFXG4gICAgICAgICAgICBkZWxldGUgZW5kUG9zLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICBpZiAoZWxhc3RpYykge1xuICAgICAgICAgICAgICAgIHN0YXJ0UG9zID0gdGhpcy5nZXRPcmlnUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm9wZW5PcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9zLm9wYWNpdHkgPSAwLjE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVmZmVjdCA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQb3Mub3BhY2l0eSA9IDAuMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi53cmFwLmNzcyhzdGFydFBvcykuYW5pbWF0ZShlbmRQb3MsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZWZmZWN0ID09PSAnbm9uZScgPyAwIDogY3VycmVudC5vcGVuU3BlZWQsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBjdXJyZW50Lm9wZW5FYXNpbmcsXG4gICAgICAgICAgICAgICAgc3RlcDogZWxhc3RpYyA/IHRoaXMuc3RlcCA6IG51bGwsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IEYuX2FmdGVyWm9vbUluXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB6b29tT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gRi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGVmZmVjdCA9IGN1cnJlbnQuY2xvc2VFZmZlY3QsXG4gICAgICAgICAgICAgICAgZWxhc3RpYyA9IGVmZmVjdCA9PT0gJ2VsYXN0aWMnLFxuICAgICAgICAgICAgICAgIGVuZFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGVsYXN0aWMpIHtcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB0aGlzLmdldE9yaWdQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuY2xvc2VPcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZFBvcy5vcGFjaXR5ID0gMC4xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRi53cmFwLmFuaW1hdGUoZW5kUG9zLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGVmZmVjdCA9PT0gJ25vbmUnID8gMCA6IGN1cnJlbnQuY2xvc2VTcGVlZCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGN1cnJlbnQuY2xvc2VFYXNpbmcsXG4gICAgICAgICAgICAgICAgc3RlcDogZWxhc3RpYyA/IHRoaXMuc3RlcCA6IG51bGwsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IEYuX2FmdGVyWm9vbU91dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlSW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gY3VycmVudC5uZXh0RWZmZWN0LFxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zID0gY3VycmVudC5wb3MsXG4gICAgICAgICAgICAgICAgZW5kUG9zID0ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBGLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IDIwMCxcbiAgICAgICAgICAgICAgICBmaWVsZDtcblxuICAgICAgICAgICAgc3RhcnRQb3Mub3BhY2l0eSA9IDAuMTtcblxuICAgICAgICAgICAgaWYgKGVmZmVjdCA9PT0gJ2VsYXN0aWMnKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBkaXJlY3Rpb24gPT09ICdkb3duJyB8fCBkaXJlY3Rpb24gPT09ICd1cCcgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NbZmllbGRdID0gZ2V0VmFsdWUoZ2V0U2NhbGFyKHN0YXJ0UG9zW2ZpZWxkXSkgLSBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGVuZFBvc1tmaWVsZF0gPSAnKz0nICsgZGlzdGFuY2UgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NbZmllbGRdID0gZ2V0VmFsdWUoZ2V0U2NhbGFyKHN0YXJ0UG9zW2ZpZWxkXSkgKyBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGVuZFBvc1tmaWVsZF0gPSAnLT0nICsgZGlzdGFuY2UgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIyNzNcbiAgICAgICAgICAgIGlmIChlZmZlY3QgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIEYuX2FmdGVyWm9vbUluKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRi53cmFwLmNzcyhzdGFydFBvcykuYW5pbWF0ZShlbmRQb3MsIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGN1cnJlbnQubmV4dFNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IGN1cnJlbnQubmV4dEVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IEYuX2FmdGVyWm9vbUluXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IEYucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gcHJldmlvdXMucHJldkVmZmVjdCxcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gRi5kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSAyMDA7XG5cbiAgICAgICAgICAgIGlmIChlZmZlY3QgPT09ICdlbGFzdGljJykge1xuICAgICAgICAgICAgICAgIGVuZFBvc1tkaXJlY3Rpb24gPT09ICdkb3duJyB8fCBkaXJlY3Rpb24gPT09ICd1cCcgPyAndG9wJyA6ICdsZWZ0J10gPSAoZGlyZWN0aW9uID09PSAndXAnIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJy0nIDogJysnKSArICc9JyArIGRpc3RhbmNlICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldmlvdXMud3JhcC5hbmltYXRlKGVuZFBvcywge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBlZmZlY3QgPT09ICdub25lJyA/IDAgOiBwcmV2aW91cy5wcmV2U3BlZWQsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBwcmV2aW91cy5wcmV2RWFzaW5nLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRyaWdnZXIoJ29uUmVzZXQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAqXHRPdmVybGF5IGhlbHBlclxuICAgICAqL1xuXG4gICAgRi5oZWxwZXJzLm92ZXJsYXkgPSB7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICBjbG9zZUNsaWNrOiB0cnVlLCAvLyBpZiB0cnVlLCBmYW5jeUJveCB3aWxsIGJlIGNsb3NlZCB3aGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBvdmVybGF5XG4gICAgICAgICAgICBzcGVlZE91dDogMjAwLCAvLyBkdXJhdGlvbiBvZiBmYWRlT3V0IGFuaW1hdGlvblxuICAgICAgICAgICAgc2hvd0Vhcmx5OiB0cnVlLCAvLyBpbmRpY2F0ZXMgaWYgc2hvdWxkIGJlIG9wZW5lZCBpbW1lZGlhdGVseSBvciB3YWl0IHVudGlsIHRoZSBjb250ZW50IGlzIHJlYWR5XG4gICAgICAgICAgICBjc3M6IHt9LCAvLyBjdXN0b20gQ1NTIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGxvY2tlZDogIWlzVG91Y2gsIC8vIGlmIHRydWUsIHRoZSBjb250ZW50IHdpbGwgYmUgbG9ja2VkIGludG8gb3ZlcmxheVxuICAgICAgICAgICAgZml4ZWQ6IHRydWUgLy8gaWYgZmFsc2UsIHRoZSBvdmVybGF5IENTUyBwb3NpdGlvbiBwcm9wZXJ0eSB3aWxsIG5vdCBiZSBzZXQgdG8gXCJmaXhlZFwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgb3ZlcmxheTogbnVsbCwgLy8gY3VycmVudCBoYW5kbGVcbiAgICAgICAgZml4ZWQ6IGZhbHNlLCAvLyBpbmRpY2F0ZXMgaWYgdGhlIG92ZXJsYXkgaGFzIHBvc2l0aW9uIFwiZml4ZWRcIlxuICAgICAgICBlbDogalF1ZXJ5KCdodG1sJyksIC8vIGVsZW1lbnQgdGhhdCBjb250YWlucyBcInRoZSBsb2NrXCJcblxuICAgICAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQ7XG5cbiAgICAgICAgICAgIG9wdHMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50ID0gRi5jb21pbmcgPyBGLmNvbWluZy5wYXJlbnQgOiBvcHRzLnBhcmVudDtcblxuICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0galF1ZXJ5KCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtb3ZlcmxheVwiPjwvZGl2PicpLmFwcGVuZFRvKHBhcmVudCAmJiBwYXJlbnQubGVuZ3RoID8gcGFyZW50IDogJ2JvZHknKTtcbiAgICAgICAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG9wdHMuZml4ZWQgJiYgRi5kZWZhdWx0cy5maXhlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5hZGRDbGFzcygnZmFuY3lib3gtb3ZlcmxheS1maXhlZCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3BlbjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICBvcHRzID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0cyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkudW5iaW5kKCcub3ZlcmxheScpLndpZHRoKCdhdXRvJykuaGVpZ2h0KCdhdXRvJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGUob3B0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5maXhlZCkge1xuICAgICAgICAgICAgICAgIFcuYmluZCgncmVzaXplLm92ZXJsYXknLCBqUXVlcnkucHJveHkodGhpcy51cGRhdGUsIHRoaXMpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmNsb3NlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuYmluZCgnY2xpY2sub3ZlcmxheScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShlLnRhcmdldCkuaGFzQ2xhc3MoJ2ZhbmN5Ym94LW92ZXJsYXknKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEYuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3Mob3B0cy5jc3MpLnNob3coKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBXLnVuYmluZCgncmVzaXplLm92ZXJsYXknKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZWwuaGFzQ2xhc3MoJ2ZhbmN5Ym94LWxvY2snKSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmZhbmN5Ym94LW1hcmdpbicpLnJlbW92ZUNsYXNzKCdmYW5jeWJveC1tYXJnaW4nKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2xhc3MoJ2ZhbmN5Ym94LWxvY2snKTtcblxuICAgICAgICAgICAgICAgIFcuc2Nyb2xsVG9wKHRoaXMuc2Nyb2xsVikuc2Nyb2xsTGVmdCh0aGlzLnNjcm9sbEgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqUXVlcnkoJy5mYW5jeWJveC1vdmVybGF5JykucmVtb3ZlKCkuaGlkZSgpO1xuXG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBudWxsLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gUHJpdmF0ZSwgY2FsbGJhY2tzXG5cbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICcxMDAlJywgb2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IHdpZHRoL2hlaWdodCBzbyBpdCB3aWxsIG5vdCBtZXNzXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkud2lkdGgod2lkdGgpLmhlaWdodCgnMTAwJScpO1xuXG4gICAgICAgICAgICAvLyBqUXVlcnkgZG9lcyBub3QgcmV0dXJuIHJlbGlhYmxlIHJlc3VsdCBmb3IgSUVcbiAgICAgICAgICAgIGlmIChJRSkge1xuICAgICAgICAgICAgICAgIG9mZnNldFdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChELndpZHRoKCkgPiBvZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IEQud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoRC53aWR0aCgpID4gVy53aWR0aCgpKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBELndpZHRoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS53aWR0aCh3aWR0aCkuaGVpZ2h0KEQuaGVpZ2h0KCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgY2FuIG1hbmlwdWxhdGUgRE9NLCBiZWNhdXNlIGxhdGVyIGl0IHdvdWxkIGNhdXNlIGlmcmFtZXMgdG8gcmVsb2FkXG4gICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uKG9wdHMsIG9iaikge1xuICAgICAgICAgICAgdmFyIG92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG5cbiAgICAgICAgICAgIGpRdWVyeSgnLmZhbmN5Ym94LW92ZXJsYXknKS5zdG9wKHRydWUsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZShvcHRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdHMubG9ja2VkICYmIHRoaXMuZml4ZWQgJiYgb2JqLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgb2JqLmxvY2tlZCA9IHRoaXMub3ZlcmxheS5hcHBlbmQob2JqLndyYXApO1xuICAgICAgICAgICAgICAgIG9iai5maXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5zaG93RWFybHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZVNob3cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVTaG93OiBmdW5jdGlvbihvcHRzLCBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubG9ja2VkICYmICF0aGlzLmVsLmhhc0NsYXNzKCdmYW5jeWJveC1sb2NrJykpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maXhQb3NpdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcqJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChqUXVlcnkodGhpcykuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnICYmICFqUXVlcnkodGhpcykuaGFzQ2xhc3MoXCJmYW5jeWJveC1vdmVybGF5XCIpICYmICFqUXVlcnkodGhpcykuaGFzQ2xhc3MoXCJmYW5jeWJveC13cmFwXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYWRkQ2xhc3MoJ2ZhbmN5Ym94LW1hcmdpbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkQ2xhc3MoJ2ZhbmN5Ym94LW1hcmdpbicpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWID0gVy5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEggPSBXLnNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZWwuYWRkQ2xhc3MoJ2ZhbmN5Ym94LWxvY2snKTtcblxuICAgICAgICAgICAgICAgIFcuc2Nyb2xsVG9wKHRoaXMuc2Nyb2xsVikuc2Nyb2xsTGVmdCh0aGlzLnNjcm9sbEgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wZW4ob3B0cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgb3ZlcmxheSBpZiBleGlzdHMgYW5kIGZhbmN5Qm94IGlzIG5vdCBvcGVuaW5nXG4gICAgICAgICAgICAvLyAoZS5nLiwgaXQgaXMgbm90IGJlaW5nIG9wZW4gdXNpbmcgYWZ0ZXJDbG9zZSBjYWxsYmFjaylcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgIUYuY29taW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LmZhZGVPdXQob3B0cy5zcGVlZE91dCwgalF1ZXJ5LnByb3h5KHRoaXMuY2xvc2UsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAqXHRUaXRsZSBoZWxwZXJcbiAgICAgKi9cblxuICAgIEYuaGVscGVycy50aXRsZSA9IHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsIC8vICdmbG9hdCcsICdpbnNpZGUnLCAnb3V0c2lkZScgb3IgJ292ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nIC8vICd0b3AnIG9yICdib3R0b20nXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlU2hvdzogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBGLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgdGV4dCA9IGN1cnJlbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgdHlwZSA9IG9wdHMudHlwZSxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmIChqUXVlcnkuaXNGdW5jdGlvbih0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LmNhbGwoY3VycmVudC5lbGVtZW50LCBjdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1N0cmluZyh0ZXh0KSB8fCBqUXVlcnkudHJpbSh0ZXh0KSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpdGxlID0galF1ZXJ5KCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdGl0bGUgZmFuY3lib3gtdGl0bGUtJyArIHR5cGUgKyAnLXdyYXBcIj4nICsgdGV4dCArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5zaWRlJzpcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gRi5za2luO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ291dHNpZGUnOlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBGLndyYXA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3Zlcic6XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IEYuaW5uZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8gJ2Zsb2F0J1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBGLnNraW47XG5cbiAgICAgICAgICAgICAgICAgICAgdGl0bGUuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoSUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLndpZHRoKHRpdGxlLndpZHRoKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGl0bGUud3JhcElubmVyKCc8c3BhbiBjbGFzcz1cImNoaWxkXCI+PC9zcGFuPicpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vSW5jcmVhc2UgYm90dG9tIG1hcmdpbiBzbyB0aGlzIHRpdGxlIHdpbGwgYWxzbyBmaXQgaW50byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICBGLmN1cnJlbnQubWFyZ2luWzJdICs9IE1hdGguYWJzKGdldFNjYWxhcih0aXRsZS5jc3MoJ21hcmdpbi1ib3R0b20nKSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGl0bGVbKG9wdHMucG9zaXRpb24gPT09ICd0b3AnID8gJ3ByZXBlbmRUbycgOiAnYXBwZW5kVG8nKV0odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBqUXVlcnkgcGx1Z2luIGluaXRpYWxpemF0aW9uXG4gICAgalF1ZXJ5LmZuLmZhbmN5Ym94ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgaW5kZXgsXG4gICAgICAgICAgICB0aGF0ID0galF1ZXJ5KHRoaXMpLFxuICAgICAgICAgICAgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAgICAgcnVuID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciB3aGF0ID0galF1ZXJ5KHRoaXMpLmJsdXIoKSwgaWR4ID0gaW5kZXgsIHJlbFR5cGUsIHJlbFZhbDtcblxuICAgICAgICAgICAgICAgIGlmICghKGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5IHx8IGUubWV0YUtleSkgJiYgIXdoYXQuaXMoJy5mYW5jeWJveC13cmFwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsVHlwZSA9IG9wdGlvbnMuZ3JvdXBBdHRyIHx8ICdkYXRhLWZhbmN5Ym94LWdyb3VwJztcbiAgICAgICAgICAgICAgICAgICAgcmVsVmFsID0gd2hhdC5hdHRyKHJlbFR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVsVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxUeXBlID0gJ3JlbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxWYWwgPSB3aGF0LmdldCgwKVtyZWxUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxWYWwgJiYgcmVsVmFsICE9PSAnJyAmJiByZWxWYWwgIT09ICdub2ZvbGxvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoYXQgPSBzZWxlY3Rvci5sZW5ndGggPyBqUXVlcnkoc2VsZWN0b3IpIDogdGhhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoYXQgPSB3aGF0LmZpbHRlcignWycgKyByZWxUeXBlICsgJz1cIicgKyByZWxWYWwgKyAnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPSB3aGF0LmluZGV4KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGlkeDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGFuIGV2ZW50IGZyb20gYnViYmxpbmcgaWYgZXZlcnl0aGluZyBpcyBmaW5lXG4gICAgICAgICAgICAgICAgICAgIGlmIChGLm9wZW4od2hhdCwgb3B0aW9ucykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpbmRleCA9IG9wdGlvbnMuaW5kZXggfHwgMDtcblxuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IG9wdGlvbnMubGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoYXQudW5iaW5kKCdjbGljay5mYi1zdGFydCcpLmJpbmQoJ2NsaWNrLmZiLXN0YXJ0JywgcnVuKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRC51bmRlbGVnYXRlKHNlbGVjdG9yLCAnY2xpY2suZmItc3RhcnQnKS5kZWxlZ2F0ZShzZWxlY3RvciArIFwiOm5vdCgnLmZhbmN5Ym94LWl0ZW0sIC5mYW5jeWJveC1uYXYnKVwiLCAnY2xpY2suZmItc3RhcnQnLCBydW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXIoJ1tkYXRhLWZhbmN5Ym94LXN0YXJ0PTFdJykudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLy8gVGVzdHMgdGhhdCBuZWVkIGEgYm9keSBhdCBkb2MgcmVhZHlcbiAgICBELnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdzEsIHcyO1xuXG4gICAgICAgIGlmIChqUXVlcnkuc2Nyb2xsYmFyV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaHR0cDovL2JlbmFsbWFuLmNvbS9wcm9qZWN0cy9qcXVlcnktbWlzYy1wbHVnaW5zLyNzY3JvbGxiYXJ3aWR0aFxuICAgICAgICAgICAgalF1ZXJ5LnNjcm9sbGJhcldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGpRdWVyeSgnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6YXV0b1wiPjxkaXYvPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5JyksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gcGFyZW50LmNoaWxkcmVuKCksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gY2hpbGQuaW5uZXJXaWR0aCgpIC0gY2hpbGQuaGVpZ2h0KDk5KS5pbm5lcldpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGpRdWVyeS5zdXBwb3J0LmZpeGVkUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgalF1ZXJ5LnN1cHBvcnQuZml4ZWRQb3NpdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGpRdWVyeSgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O1wiPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5JyksXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkID0gKGVsZW1bMF0ub2Zmc2V0VG9wID09PSAyMCB8fCBlbGVtWzBdLm9mZnNldFRvcCA9PT0gMTUpO1xuXG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkuZXh0ZW5kKEYuZGVmYXVsdHMsIHtcbiAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBqUXVlcnkuc2Nyb2xsYmFyV2lkdGgoKSxcbiAgICAgICAgICAgIGZpeGVkOiBqUXVlcnkuc3VwcG9ydC5maXhlZFBvc2l0aW9uLFxuICAgICAgICAgICAgcGFyZW50OiBqUXVlcnkoJ2JvZHknKVxuICAgICAgICB9KTtcblxuICAgICAgICAvL0dldCByZWFsIHdpZHRoIG9mIHBhZ2Ugc2Nyb2xsLWJhclxuICAgICAgICB3MSA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgSC5hZGRDbGFzcygnZmFuY3lib3gtbG9jay10ZXN0Jyk7XG5cbiAgICAgICAgdzIgPSBqUXVlcnkod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIEgucmVtb3ZlQ2xhc3MoJ2ZhbmN5Ym94LWxvY2stdGVzdCcpO1xuXG4gICAgICAgIGpRdWVyeShcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+LmZhbmN5Ym94LW1hcmdpbnttYXJnaW4tcmlnaHQ6XCIgKyAodzIgLSB3MSkgKyBcInB4O308L3N0eWxlPlwiKS5hcHBlbmRUbyhcImhlYWRcIik7XG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9XZWJTZXJ2ZXIvT3BlblNlcnZlci9kb21haW5zL2Nvbm5lY3Rpbmd0YWxlbnRzLmxvYy9+L2ZhbmN5Ym94L2Rpc3QvanMvanF1ZXJ5LmZhbmN5Ym94LmNqcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==