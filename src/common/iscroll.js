const rAF = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

const utils = (function () {
    const me = {};

    const _elementStyle = document.createElement('div').style;
    const _vendor = (function () {
        const vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];


        let transform;


        let i = 0;


        const l = vendors.length;

        for (; i < l; i++) {
            transform = `${vendors[i]}ransform`;
            if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
        }

        return false;
    }());

    function _prefixStyle(style) {
        if (_vendor === false) return false;
        if (_vendor === '') return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime() {
        return new Date().getTime();
    };

    me.extend = function (target, obj) {
        for (const i in obj) {
            target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
        return window.MSPointerEvent
            ? `MSPointer${pointerEvent.charAt(7).toUpperCase()}${pointerEvent.substr(8)}`
            : pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        let distance = current - start;


        const speed = Math.abs(distance) / time;


        let destination;


        let duration;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
        duration = speed / deceleration;

        if (destination < lowerMargin) {
            destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
            distance = Math.abs(destination - current);
            duration = distance / speed;
        } else if (destination > 0) {
            destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
            distance = Math.abs(current) + destination;
            duration = distance / speed;
        }

        return {
            destination: Math.round(destination),
            duration,
        };
    };

    const _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle,
    });

    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
    me.isBadAndroid = (function () {
        const appVersion = window.navigator.appVersion;
        // Android browser is not a chrome browser.
        if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
            const safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
            if (safariVersion && typeof safariVersion === 'object' && safariVersion.length >= 2) {
                return parseFloat(safariVersion[1]) < 535.19;
            }
            return true;
        }
        return false;
    }());

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin'),
    });

    me.hasClass = function (e, c) {
        const re = new RegExp(`(^|\\s)${c}(\\s|$)`);
        return re.test(e.className);
    };

    me.addClass = function (e, c) {
        if (me.hasClass(e, c)) {
            return;
        }

        const newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
        if (!me.hasClass(e, c)) {
            return;
        }

        const re = new RegExp(`(^|\\s)${c}(\\s|$)`, 'g');
        e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
        let left = -el.offsetLeft;


        let top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return {
            left,
            top,
        };
    };

    me.preventDefaultException = function (el, exceptions) {
        for (const i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3,
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn(k) {
                return k * (2 - k);
            },
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
            fn(k) {
                return Math.sqrt(1 - (--k * k));
            },
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn(k) {
                const b = 4;
                return (k -= 1) * k * ((b + 1) * k + b) + 1;
            },
        },
        bounce: {
            style: '',
            fn(k) {
                if ((k /= 1) < (1 / 2.75)) {
                    return 7.5625 * k * k;
                } if (k < (2 / 2.75)) {
                    return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                } if (k < (2.5 / 2.75)) {
                    return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                }
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            },
        },
        elastic: {
            style: '',
            fn(k) {
                const f = 0.22;


                const e = 0.4;

                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }

                return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1);
            },
        },
    });

    me.tap = function (e, eventName) {
        const ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
        const {target} = e;
        let ev;

        if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
            ev = document.createEvent('MouseEvents');
            ev.initMouseEvent('click', true, true, e.view, 1,
                target.screenX, target.screenY, target.clientX, target.clientY,
                e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                0, null);

            ev._constructed = true;
            target.dispatchEvent(ev);
        }
    };

    return me;
}());

function IScroll(el, options) {
    this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style; // cache style for better performance

    this.options = {

        // INSERT POINT: OPTIONS
        disablePointer: !utils.hasPointer,
        disableTouch: utils.hasPointer || !utils.hasTouch,
        disableMouse: utils.hasPointer || utils.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,

        bounce: true,
        bounceTime: 600,
        bounceEasing: '',

        preventDefault: true,
        preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},

        HWCompositing: true,
        useTransition: true,
        useTransform: true,
        bindToWrapper: typeof window.onmousedown === 'undefined',
    };

    for (const i in options) {
        this.options[i] = options[i];
    }

    // Normalize options
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;

    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    this.options.bounceEasing = typeof this.options.bounceEasing === 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if (this.options.tap === true) {
        this.options.tap = 'tap';
    }

    // INSERT POINT: NORMALIZATION

    // Some defaults
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};

    // INSERT POINT: DEFAULTS

    this._init();
    this.refresh();

    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
}

IScroll.prototype = {
    version: '5.2.0',

    _init() {
        this._initEvents();
    },

    destroy() {
        this._initEvents(true);
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
        this._execEvent('destroy');
    },

    _transitionEnd(e) {
        if (e.target !== this.scroller || !this.isInTransition) {
            return;
        }

        this._transitionTime();
        if (!this.resetPosition(this.options.bounceTime)) {
            this.isInTransition = false;
            this._execEvent('scrollEnd');
        }
    },

    _start(e) {
        // React to left mouse button only
        if (utils.eventType[e.type] !== 1) {
            // for button property
            // http://unixpapa.com/js/mouse.html
            let button;
            if (!e.which) {
                /* IE case */
                button = (e.button < 2) ? 0
                    : ((e.button == 4) ? 1 : 2);
            } else {
                /* All others */
                button = e.button;
            }
            if (button !== 0) {
                return;
            }
        }

        if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
            return;
        }

        if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
        }

        const point = e.touches ? e.touches[0] : e;


        let pos;

        this.initiated = utils.eventType[e.type];
        this.moved = false;
        this.distX = 0;
        this.distY = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;

        this.startTime = utils.getTime();

        if (this.options.useTransition && this.isInTransition) {
            this._transitionTime();
            this.isInTransition = false;
            pos = this.getComputedPosition();
            this._translate(Math.round(pos.x), Math.round(pos.y));
            this._execEvent('scrollEnd');
        } else if (!this.options.useTransition && this.isAnimating) {
            this.isAnimating = false;
            this._execEvent('scrollEnd');
        }

        this.startX = this.x;
        this.startY = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX = point.pageX;
        this.pointY = point.pageY;

        this._execEvent('beforeScrollStart');
    },

    _move(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
            return;
        }

        if (this.options.preventDefault) { // increases performance on Android? TODO: check!
            e.preventDefault();
        }

        const point = e.touches ? e.touches[0] : e;


        let deltaX = point.pageX - this.pointX;


        let deltaY = point.pageY - this.pointY;


        const timestamp = utils.getTime();


        let newX; let newY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;

        this.distX += deltaX;
        this.distY += deltaY;
        const absDistX = Math.abs(this.distX);
        const absDistY = Math.abs(this.distY);

        // We need to move at least 10 pixels for the scrolling to initiate
        if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
            return;
        }

        // If you are scrolling in one direction lock the other
        if (!this.directionLocked && !this.options.freeScroll) {
            if (absDistX > absDistY + this.options.directionLockThreshold) {
                this.directionLocked = 'h';// lock horizontally
            } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                this.directionLocked = 'v';// lock vertically
            } else {
                this.directionLocked = 'n';// no lock
            }
        }

        if (this.directionLocked === 'h') {
            if (this.options.eventPassthrough === 'vertical') {
                e.preventDefault();
            } else if (this.options.eventPassthrough === 'horizontal') {
                this.initiated = false;
                return;
            }

            deltaY = 0;
        } else if (this.directionLocked === 'v') {
            if (this.options.eventPassthrough === 'horizontal') {
                e.preventDefault();
            } else if (this.options.eventPassthrough === 'vertical') {
                this.initiated = false;
                return;
            }

            deltaX = 0;
        }

        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        // Slow down if outside of the boundaries
        if (newX > 0 || newX < this.maxScrollX) {
            newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if (newY > 0 || newY < this.maxScrollY) {
            newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }

        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

        if (!this.moved) {
            this._execEvent('scrollStart');
        }

        this.moved = true;

        this._translate(newX, newY);

        /* REPLACE START: _move */

        if (timestamp - this.startTime > 300) {
            this.startTime = timestamp;
            this.startX = this.x;
            this.startY = this.y;
        }

        /* REPLACE END: _move */
    },

    _end(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
            return;
        }

        if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
        }

        // const point = e.changedTouches ? e.changedTouches[0] : e;


        let momentumX;


        let momentumY;


        const duration = utils.getTime() - this.startTime;


        let newX = Math.round(this.x);


        let newY = Math.round(this.y);


        const distanceX = Math.abs(newX - this.startX);


        const distanceY = Math.abs(newY - this.startY);


        let time = 0;


        let easing = '';

        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();

        // reset if we are outside of the boundaries
        if (this.resetPosition(this.options.bounceTime)) {
            return;
        }

        this.scrollTo(newX, newY); // ensures that the last position is rounded

        // we scrolled less than 10 pixels
        if (!this.moved) {
            if (this.options.tap) {
                utils.tap(e, this.options.tap);
            }

            if (this.options.click) {
                utils.click(e);
            }

            this._execEvent('scrollCancel');
            return;
        }

        if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
            this._execEvent('flick');
            return;
        }

        // start momentum animation if needed
        if (this.options.momentum && duration < 300) {
            momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                destination: newX,
                duration: 0,
            };
            momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                destination: newY,
                duration: 0,
            };
            newX = momentumX.destination;
            newY = momentumY.destination;
            time = Math.max(momentumX.duration, momentumY.duration);
            this.isInTransition = 1;
        }

        // INSERT POINT: _end

        if (newX !== this.x || newY !== this.y) {
            // change easing function when scroller goes out of the boundaries
            if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                easing = utils.ease.quadratic;
            }

            this.scrollTo(newX, newY, time, easing);
            return;
        }

        this._execEvent('scrollEnd');
    },

    _resize() {
        const that = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(() => {
            that.refresh();
        }, this.options.resizePolling);
    },

    resetPosition(time) {
        let {x, y} = this;
        time = time || 0;

        if (!this.hasHorizontalScroll || this.x > 0) {
            x = 0;
        } else if (this.x < this.maxScrollX) {
            x = this.maxScrollX;
        }

        if (!this.hasVerticalScroll || this.y > 0) {
            y = 0;
        } else if (this.y < this.maxScrollY) {
            y = this.maxScrollY;
        }

        if (x === this.x && y === this.y) {
            return false;
        }

        this.scrollTo(x, y, time, this.options.bounceEasing);

        return true;
    },

    disable() {
        this.enabled = false;
    },

    enable() {
        this.enabled = true;
    },

    refresh() {
        const rf = this.wrapper.offsetHeight;// Force reflow

        this.wrapperWidth = this.wrapper.clientWidth;
        this.wrapperHeight = this.wrapper.clientHeight;

        /* REPLACE START: refresh */

        this.scrollerWidth = this.scroller.offsetWidth;
        this.scrollerHeight = this.scroller.offsetHeight;

        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

        /* REPLACE END: refresh */

        this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

        if (!this.hasHorizontalScroll) {
            this.maxScrollX = 0;
            this.scrollerWidth = this.wrapperWidth;
        }

        if (!this.hasVerticalScroll) {
            this.maxScrollY = 0;
            this.scrollerHeight = this.wrapperHeight;
        }

        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.wrapperOffset = utils.offset(this.wrapper);

        this._execEvent('refresh');

        this.resetPosition();

        // INSERT POINT: _refresh
    },

    on(type, fn) {
        if (!this._events[type]) {
            this._events[type] = [];
        }

        this._events[type].push(fn);
    },

    off(type, fn) {
        if (!this._events[type]) {
            return;
        }

        const index = this._events[type].indexOf(fn);

        if (index > -1) {
            this._events[type].splice(index, 1);
        }
    },

    _execEvent(type) {
        if (!this._events[type]) {
            return;
        }

        let i = 0;


        const l = this._events[type].length;

        if (!l) {
            return;
        }

        for (; i < l; i++) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
    },

    scrollBy(x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;

        this.scrollTo(x, y, time, easing);
    },

    scrollTo(x, y, time, easing) {
        easing = easing || utils.ease.circular;

        this.isInTransition = this.options.useTransition && time > 0;
        const transitionType = this.options.useTransition && easing.style;
        if (!time || transitionType) {
            if (transitionType) {
                this._transitionTimingFunction(easing.style);
                this._transitionTime(time);
            }
            this._translate(x, y);
        } else {
            this._animate(x, y, time, easing.fn);
        }
    },

    scrollToElement(el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);

        if (!el) {
            return;
        }

        const pos = utils.offset(el);

        pos.left -= this.wrapperOffset.left;
        pos.top -= this.wrapperOffset.top;

        // if offsetX/Y are true we center the element to the screen
        if (offsetX === true) {
            offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if (offsetY === true) {
            offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }

        pos.left -= offsetX || 0;
        pos.top -= offsetY || 0;

        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

        this.scrollTo(pos.left, pos.top, time, easing);
    },

    _transitionTime(time) {
        time = time || 0;

        const durationProp = utils.style.transitionDuration;
        this.scrollerStyle[durationProp] = `${time}ms`;

        if (!time && utils.isBadAndroid) {
            this.scrollerStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            const self = this;
            rAF(() => {
                if (self.scrollerStyle[durationProp] === '0.0001ms') {
                    self.scrollerStyle[durationProp] = '0s';
                }
            });
        }

        // INSERT POINT: _transitionTime
    },

    _transitionTimingFunction(easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

        // INSERT POINT: _transitionTimingFunction
    },

    _translate(x, y) {
        if (this.options.useTransform) {
            /* REPLACE START: _translate */

            this.scrollerStyle[utils.style.transform] = `translate(${x}px,${y}px)${this.translateZ}`;

            /* REPLACE END: _translate */
        } else {
            x = Math.round(x);
            y = Math.round(y);
            this.scrollerStyle.left = `${x}px`;
            this.scrollerStyle.top = `${y}px`;
        }

        this.x = x;
        this.y = y;

        // INSERT POINT: _translate
    },

    _initEvents(remove) {
        const eventType = remove ? utils.removeEvent : utils.addEvent;


        const target = this.options.bindToWrapper ? this.wrapper : window;

        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);

        if (this.options.click) {
            eventType(this.wrapper, 'click', this, true);
        }

        if (!this.options.disableMouse) {
            eventType(this.wrapper, 'mousedown', this);
            eventType(target, 'mousemove', this);
            eventType(target, 'mousecancel', this);
            eventType(target, 'mouseup', this);
        }

        if (utils.hasPointer && !this.options.disablePointer) {
            eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
            eventType(target, utils.prefixPointerEvent('pointermove'), this);
            eventType(target, utils.prefixPointerEvent('pointercancel'), this);
            eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }

        if (utils.hasTouch && !this.options.disableTouch) {
            eventType(this.wrapper, 'touchstart', this);
            eventType(target, 'touchmove', this);
            eventType(target, 'touchcancel', this);
            eventType(target, 'touchend', this);
        }

        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
    },

    getComputedPosition() {
        let matrix = window.getComputedStyle(this.scroller, null);


        let x; let
            y;

        if (this.options.useTransform) {
            matrix = matrix[utils.style.transform].split(')')[0].split(', ');
            x = +(matrix[12] || matrix[4]);
            y = +(matrix[13] || matrix[5]);
        } else {
            x = +matrix.left.replace(/[^-\d.]/g, '');
            y = +matrix.top.replace(/[^-\d.]/g, '');
        }

        return {x, y};
    },
    _animate(destX, destY, duration, easingFn) {
        const that = this;


        const startX = this.x;


        const startY = this.y;


        const startTime = utils.getTime();


        const destTime = startTime + duration;

        function step() {
            let now = utils.getTime();
            if (now >= destTime) {
                that.isAnimating = false;
                that._translate(destX, destY);

                if (!that.resetPosition(that.options.bounceTime)) {
                    that._execEvent('scrollEnd');
                }

                return;
            }

            now = (now - startTime) / duration;
            const easing = easingFn(now);
            const newX = (destX - startX) * easing + startX;
            const newY = (destY - startY) * easing + startY;
            that._translate(newX, newY);

            if (that.isAnimating) {
                rAF(step);
            }
        }

        this.isAnimating = true;
        step();
    },
    handleEvent(e) {
        switch (e.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            case 'click':
                if (this.enabled && !e._constructed) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
            default:
        }
    },
};
IScroll.utils = utils;

export default IScroll;
