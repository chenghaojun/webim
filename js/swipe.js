window.Swipe = function(a, b) {
    var c = "ontouchstart" in window;
    if (!a)
        return null ;
    if (this.options = b || {},
    this.index = this.options.startSlide || 0,
    this.speed = this.options.speed || 300,
    this.callback = this.options.callback || function() {}
    ,
    this.delay = this.options.auto || 0,
    this.unresize = this.options.unresize,
    this.loop = this.options.loop || !1,
    this.indicate = this.options.indicate || null ,
    this.container = a,
    this.element = this.container.children[0],
    this.length = this.element.children.length,
    this.element.style.listStyle = "none",
    this.loop) {
        var d = this.element.children;
        d.length >= 2 && (this.element.innerHTML = ["<!--before-->", "<!--center-->", "<!--after-->", "<!--478857585@qq.com-->"].join(this.element.innerHTML.toString()),
        this.index = 1 * this.length + this.index)
    }
    this.setup(),
    this.begin(),
    this.element.addEventListener && (this.element.addEventListener(c ? "touchstart" : "mousedown", this, !1),
    this.element.addEventListener("webkitTransitionEnd", this, !1),
    this.element.addEventListener("transitionend", this, !1),
    this.unresize || window.addEventListener(c ? "orientationchange" : "resize", this, !1))
}

Swipe.prototype = {
    setup: function() {
        var a = this;
        if (this.slides = this.element.children,
        this.length < 2)
            return null ;
        if (this.width = this.container.getBoundingClientRect().width || this.width,
        !this.width)
            return null ;
        this.container.style.visibility = "hidden",
        this.element.style.width = this.slides.length * this.width + "px";
        for (var b = this.slides.length; b--; ) {
            var c = this.slides[b];
            c.style.width = this.width + "px",
            c.style.display = "table-cell",
            c.style.verticalAlign = "top"
        }
        if (this.indicate && !this.indicater_s)
            if (this.indicater = document.querySelector(this.indicate),
            this.indicater) {
                var d = new Array(this.length);
                d.splice(this.index % this.length, 1, '<span class="on">&nbsp;</span>'),
                this.indicater.innerHTML = d.join("<span>&nbsp;</span>"),
                this.indicater_s = this.indicater.children
            } else
                this.indicate = !1;
        setTimeout(function() {
            a.slide(a.index, 0),
            a.container.style.visibility = "visible"
        }
        , 100)
    },
    slide: function(a, b) {
        var c = this.element.style;
        void 0 == b && (b = this.speed),
        c.webkitTransition = "-webkit-transform " + b + "ms",
        c.MozTransform = c.webkitTransform = "translate3d(" + -(a * this.width) + "px,0,0)",
        this.index = a
    },
    prev: function(a) {
        this.delay = a || 0,
        clearTimeout(this.interval),
        this.loop ? this.index = this.length + this.index % this.length - 1 : this.index = (this.length + this.index - 1) % this.length,
        this.slide(this.index, this.speed)
    },
    next: function(a) {
        this.delay = a || 0,
        clearTimeout(this.interval),
        this.loop ? this.index = this.length + this.index % this.length + 1 : this.index = (this.index + 1) % this.length,
        this.slide(this.index, this.speed)
    },
    begin: function() {
        var a = this;
        this.interval = this.delay ? setTimeout(function() {
            a.next(a.delay)
        }
        , this.delay) : 0
    },
    stop: function() {
        this.delay = 0,
        clearTimeout(this.interval)
    },
    resume: function() {
        this.delay = this.options.auto || 0,
        this.begin()
    },
    handleEvent: function(a) {
        var b = this;
        switch (a.touches || (a.touches = new Array(a),
        a.scale = !1),
        a.type) {
        case "mousedown":
            !function() {
                b.element.addEventListener("mousemove", b, !1),
                b.element.addEventListener("mouseup", b, !1),
                b.element.addEventListener("mouseout", b, !1),
                b.onTouchStart(a)
            }
            ();
            break;
        case "mousemove":
            this.onTouchMove(a);
            break;
        case "mouseup":
            !function() {
                b.element.removeEventListener("mousemove", b, !1),
                b.element.removeEventListener("mouseup", b, !1),
                b.element.removeEventListener("mouseout", b, !1),
                b.onTouchEnd(a)
            }
            ();
            break;
        case "mouseout":
            !function() {
                b.element.removeEventListener("mousemove", b, !1),
                b.element.removeEventListener("mouseup", b, !1),
                b.element.removeEventListener("mouseout", b, !1),
                b.onTouchEnd(a)
            }
            ();
            break;
        case "touchstart":
            b.element.addEventListener("touchmove", this, !1),
            b.element.addEventListener("touchend", this, !1),
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            b.element.removeEventListener("touchmove", this, !1),
            b.element.removeEventListener("touchend", this, !1),
            this.onTouchEnd(a);
            break;
        case "webkitTransitionEnd":
        case "msTransitionEnd":
        case "oTransitionEnd":
        case "transitionend":
            this.transitionEnd(a);
            break;
        case "orientationchange":
        case "resize":
            this.setup()
        }
    },
    transitionEnd: function(a) {
        if (a.preventDefault(),
        this.delay && this.begin(),
        this.loop) {
            var b = this.length + this.index % this.length;
            b != this.index && (this.index = b) && this.slide(this.index, 0)
        }
        if (this.indicate) {
            var c = this;
            [].forEach.call(this.indicater_s, function(a, b) {
                a.classList.remove("on"),
                b == c.index % c.length && a.classList.add("on")
            }
            )
        }
        this.callback(a, this.index % this.length, this.slides[this.index])
    },
    onTouchStart: function(a) {
        this.start = {
            pageX: a.touches[0].pageX,
            pageY: a.touches[0].pageY,
            time: Number(new Date)
        },
        this.isScrolling = void 0,
        this.deltaX = 0,
        this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0
    },
    onTouchMove: function(a) {
        a.touches.length > 1 || a.scale && 1 !== a.scale || (this.deltaX = a.touches[0].pageX - this.start.pageX,
        "undefined" == typeof this.isScrolling && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a.touches[0].pageY - this.start.pageY))),
        this.isScrolling || (a.preventDefault(),
        clearTimeout(this.interval),
        this.deltaX = this.deltaX / (!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? Math.abs(this.deltaX) / this.width + 1 : 1),
        this.loop && (this.index = this.length + this.index % this.length),
        this.element.style.MozTransform = this.element.style.webkitTransform = "translate3d(" + (this.deltaX - this.index * this.width) + "px,0,0)"))
    },
    onTouchEnd: function(a) {
        var b = Number(new Date) - this.start.time < 250 && Math.abs(this.deltaX) > 20 || Math.abs(this.deltaX) > this.width / 2
          , c = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
        this.isScrolling || this.slide(this.index + (b && !c ? this.deltaX < 0 ? 1 : -1 : 0), this.speed)
    }
}