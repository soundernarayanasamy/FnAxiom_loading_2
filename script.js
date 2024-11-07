/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var m1 = Object.create;
    var ti = Object.defineProperty;
    var v1 = Object.getOwnPropertyDescriptor;
    var y1 = Object.getOwnPropertyNames;
    var g1 = Object.getPrototypeOf,
        b1 = Object.prototype.hasOwnProperty;
    var Ns = (e, t) => () => (e && (t = e(e = 0)), t);
    var x = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        x1 = (e, t) => {
            for (var r in t) ti(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Gs = (e, t, r, i) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let n of y1(t)) !b1.call(e, n) && n !== r && ti(e, n, {
                    get: () => t[n],
                    enumerable: !(i = v1(t, n)) || i.enumerable
                });
            return e
        };
    var ln = (e, t, r) => (r = e != null ? m1(g1(e)) : {}, Gs(t || !e || !e.__esModule ? ti(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        S1 = e => Gs(ti({}, "__esModule", {
            value: !0
        }), e);
    var un = x(() => {
        "use strict";
        window.tram = function(e) {
            function t(E, k) {
                var O = new re.Bare;
                return O.init(E, k)
            }

            function r(E) {
                return E.replace(/[A-Z]/g, function(k) {
                    return "-" + k.toLowerCase()
                })
            }

            function i(E) {
                var k = parseInt(E.slice(1), 16),
                    O = k >> 16 & 255,
                    B = k >> 8 & 255,
                    G = 255 & k;
                return [O, B, G]
            }

            function n(E, k, O) {
                return "#" + (1 << 24 | E << 16 | k << 8 | O).toString(16).slice(1)
            }

            function a() {}

            function o(E, k) {
                d("Type warning: Expected: [" + E + "] Got: [" + typeof k + "] " + k)
            }

            function s(E, k, O) {
                d("Units do not match [" + E + "]: " + k + ", " + O)
            }

            function u(E, k, O) {
                if (k !== void 0 && (O = k), E === void 0) return O;
                var B = O;
                return dt.test(E) || !Je.test(E) ? B = parseInt(E, 10) : Je.test(E) && (B = 1e3 * parseFloat(E)), 0 > B && (B = 0), B === B ? B : O
            }

            function d(E) {
                pe.debug && window && window.console.warn(E)
            }

            function h(E) {
                for (var k = -1, O = E ? E.length : 0, B = []; ++k < O;) {
                    var G = E[k];
                    G && B.push(G)
                }
                return B
            }
            var f = function(E, k, O) {
                    function B(U) {
                        return typeof U == "object"
                    }

                    function G(U) {
                        return typeof U == "function"
                    }

                    function V() {}

                    function $(U, se) {
                        function j() {
                            var Me = new Z;
                            return G(Me.init) && Me.init.apply(Me, arguments), Me
                        }

                        function Z() {}
                        se === O && (se = U, U = Object), j.Bare = Z;
                        var Q, de = V[E] = U[E],
                            Ze = Z[E] = j[E] = new V;
                        return Ze.constructor = j, j.mixin = function(Me) {
                            return Z[E] = j[E] = $(j, Me)[E], j
                        }, j.open = function(Me) {
                            if (Q = {}, G(Me) ? Q = Me.call(j, Ze, de, j, U) : B(Me) && (Q = Me), B(Q))
                                for (var fr in Q) k.call(Q, fr) && (Ze[fr] = Q[fr]);
                            return G(Ze.init) || (Ze.init = U), j
                        }, j.open(se)
                    }
                    return $
                }("prototype", {}.hasOwnProperty),
                m = {
                    ease: ["ease", function(E, k, O, B) {
                        var G = (E /= B) * E,
                            V = G * E;
                        return k + O * (-2.75 * V * G + 11 * G * G + -15.5 * V + 8 * G + .25 * E)
                    }],
                    "ease-in": ["ease-in", function(E, k, O, B) {
                        var G = (E /= B) * E,
                            V = G * E;
                        return k + O * (-1 * V * G + 3 * G * G + -3 * V + 2 * G)
                    }],
                    "ease-out": ["ease-out", function(E, k, O, B) {
                        var G = (E /= B) * E,
                            V = G * E;
                        return k + O * (.3 * V * G + -1.6 * G * G + 2.2 * V + -1.8 * G + 1.9 * E)
                    }],
                    "ease-in-out": ["ease-in-out", function(E, k, O, B) {
                        var G = (E /= B) * E,
                            V = G * E;
                        return k + O * (2 * V * G + -5 * G * G + 2 * V + 2 * G)
                    }],
                    linear: ["linear", function(E, k, O, B) {
                        return O * E / B + k
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(E, k, O, B) {
                        return O * (E /= B) * E + k
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(E, k, O, B) {
                        return -O * (E /= B) * (E - 2) + k
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(E, k, O, B) {
                        return (E /= B / 2) < 1 ? O / 2 * E * E + k : -O / 2 * (--E * (E - 2) - 1) + k
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(E, k, O, B) {
                        return O * (E /= B) * E * E + k
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(E, k, O, B) {
                        return O * ((E = E / B - 1) * E * E + 1) + k
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(E, k, O, B) {
                        return (E /= B / 2) < 1 ? O / 2 * E * E * E + k : O / 2 * ((E -= 2) * E * E + 2) + k
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(E, k, O, B) {
                        return O * (E /= B) * E * E * E + k
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(E, k, O, B) {
                        return -O * ((E = E / B - 1) * E * E * E - 1) + k
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(E, k, O, B) {
                        return (E /= B / 2) < 1 ? O / 2 * E * E * E * E + k : -O / 2 * ((E -= 2) * E * E * E - 2) + k
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(E, k, O, B) {
                        return O * (E /= B) * E * E * E * E + k
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(E, k, O, B) {
                        return O * ((E = E / B - 1) * E * E * E * E + 1) + k
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(E, k, O, B) {
                        return (E /= B / 2) < 1 ? O / 2 * E * E * E * E * E + k : O / 2 * ((E -= 2) * E * E * E * E + 2) + k
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(E, k, O, B) {
                        return -O * Math.cos(E / B * (Math.PI / 2)) + O + k
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(E, k, O, B) {
                        return O * Math.sin(E / B * (Math.PI / 2)) + k
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(E, k, O, B) {
                        return -O / 2 * (Math.cos(Math.PI * E / B) - 1) + k
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(E, k, O, B) {
                        return E === 0 ? k : O * Math.pow(2, 10 * (E / B - 1)) + k
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(E, k, O, B) {
                        return E === B ? k + O : O * (-Math.pow(2, -10 * E / B) + 1) + k
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(E, k, O, B) {
                        return E === 0 ? k : E === B ? k + O : (E /= B / 2) < 1 ? O / 2 * Math.pow(2, 10 * (E - 1)) + k : O / 2 * (-Math.pow(2, -10 * --E) + 2) + k
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(E, k, O, B) {
                        return -O * (Math.sqrt(1 - (E /= B) * E) - 1) + k
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(E, k, O, B) {
                        return O * Math.sqrt(1 - (E = E / B - 1) * E) + k
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(E, k, O, B) {
                        return (E /= B / 2) < 1 ? -O / 2 * (Math.sqrt(1 - E * E) - 1) + k : O / 2 * (Math.sqrt(1 - (E -= 2) * E) + 1) + k
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(E, k, O, B, G) {
                        return G === void 0 && (G = 1.70158), O * (E /= B) * E * ((G + 1) * E - G) + k
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(E, k, O, B, G) {
                        return G === void 0 && (G = 1.70158), O * ((E = E / B - 1) * E * ((G + 1) * E + G) + 1) + k
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(E, k, O, B, G) {
                        return G === void 0 && (G = 1.70158), (E /= B / 2) < 1 ? O / 2 * E * E * (((G *= 1.525) + 1) * E - G) + k : O / 2 * ((E -= 2) * E * (((G *= 1.525) + 1) * E + G) + 2) + k
                    }]
                },
                c = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                p = document,
                v = window,
                l = "bkwld-tram",
                y = /[\-\.0-9]/g,
                g = /[A-Z]/,
                b = "number",
                S = /^(rgb|#)/,
                _ = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                w = /(deg|rad|turn)$/,
                C = "unitless",
                F = /(all|none) 0s ease 0s/,
                M = /^(width|height)$/,
                A = " ",
                D = p.createElement("a"),
                q = ["Webkit", "Moz", "O", "ms"],
                T = ["-webkit-", "-moz-", "-o-", "-ms-"],
                L = function(E) {
                    if (E in D.style) return {
                        dom: E,
                        css: E
                    };
                    var k, O, B = "",
                        G = E.split("-");
                    for (k = 0; k < G.length; k++) B += G[k].charAt(0).toUpperCase() + G[k].slice(1);
                    for (k = 0; k < q.length; k++)
                        if (O = q[k] + B, O in D.style) return {
                            dom: O,
                            css: T[k] + E
                        }
                },
                N = t.support = {
                    bind: Function.prototype.bind,
                    transform: L("transform"),
                    transition: L("transition"),
                    backface: L("backface-visibility"),
                    timing: L("transition-timing-function")
                };
            if (N.transition) {
                var H = N.timing.dom;
                if (D.style[H] = m["ease-in-back"][0], !D.style[H])
                    for (var P in c) m[P][0] = c[P]
            }
            var R = t.frame = function() {
                    var E = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                    return E && N.bind ? E.bind(v) : function(k) {
                        v.setTimeout(k, 16)
                    }
                }(),
                z = t.now = function() {
                    var E = v.performance,
                        k = E && (E.now || E.webkitNow || E.msNow || E.mozNow);
                    return k && N.bind ? k.bind(E) : Date.now || function() {
                        return +new Date
                    }
                }(),
                K = f(function(E) {
                    function k(X, oe) {
                        var ye = h(("" + X).split(A)),
                            he = ye[0];
                        oe = oe || {};
                        var qe = J[he];
                        if (!qe) return d("Unsupported property: " + he);
                        if (!oe.weak || !this.props[he]) {
                            var He = qe[0],
                                Oe = this.props[he];
                            return Oe || (Oe = this.props[he] = new He.Bare), Oe.init(this.$el, ye, qe, oe), Oe
                        }
                    }

                    function O(X, oe, ye) {
                        if (X) {
                            var he = typeof X;
                            if (oe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), he == "number" && oe) return this.timer = new ae({
                                duration: X,
                                context: this,
                                complete: V
                            }), void(this.active = !0);
                            if (he == "string" && oe) {
                                switch (X) {
                                    case "hide":
                                        j.call(this);
                                        break;
                                    case "stop":
                                        $.call(this);
                                        break;
                                    case "redraw":
                                        Z.call(this);
                                        break;
                                    default:
                                        k.call(this, X, ye && ye[1])
                                }
                                return V.call(this)
                            }
                            if (he == "function") return void X.call(this, this);
                            if (he == "object") {
                                var qe = 0;
                                Ze.call(this, X, function(Ee, d1) {
                                    Ee.span > qe && (qe = Ee.span), Ee.stop(), Ee.animate(d1)
                                }, function(Ee) {
                                    "wait" in Ee && (qe = u(Ee.wait, 0))
                                }), de.call(this), qe > 0 && (this.timer = new ae({
                                    duration: qe,
                                    context: this
                                }), this.active = !0, oe && (this.timer.complete = V));
                                var He = this,
                                    Oe = !1,
                                    ei = {};
                                R(function() {
                                    Ze.call(He, X, function(Ee) {
                                        Ee.active && (Oe = !0, ei[Ee.name] = Ee.nextStyle)
                                    }), Oe && He.$el.css(ei)
                                })
                            }
                        }
                    }

                    function B(X) {
                        X = u(X, 0), this.active ? this.queue.push({
                            options: X
                        }) : (this.timer = new ae({
                            duration: X,
                            context: this,
                            complete: V
                        }), this.active = !0)
                    }

                    function G(X) {
                        return this.active ? (this.queue.push({
                            options: X,
                            args: arguments
                        }), void(this.timer.complete = V)) : d("No active transition timer. Use start() or wait() before then().")
                    }

                    function V() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var X = this.queue.shift();
                            O.call(this, X.options, !0, X.args)
                        }
                    }

                    function $(X) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var oe;
                        typeof X == "string" ? (oe = {}, oe[X] = 1) : oe = typeof X == "object" && X != null ? X : this.props, Ze.call(this, oe, Me), de.call(this)
                    }

                    function U(X) {
                        $.call(this, X), Ze.call(this, X, fr, f1)
                    }

                    function se(X) {
                        typeof X != "string" && (X = "block"), this.el.style.display = X
                    }

                    function j() {
                        $.call(this), this.el.style.display = "none"
                    }

                    function Z() {
                        this.el.offsetHeight
                    }

                    function Q() {
                        $.call(this), e.removeData(this.el, l), this.$el = this.el = null
                    }

                    function de() {
                        var X, oe, ye = [];
                        this.upstream && ye.push(this.upstream);
                        for (X in this.props) oe = this.props[X], oe.active && ye.push(oe.string);
                        ye = ye.join(","), this.style !== ye && (this.style = ye, this.el.style[N.transition.dom] = ye)
                    }

                    function Ze(X, oe, ye) {
                        var he, qe, He, Oe, ei = oe !== Me,
                            Ee = {};
                        for (he in X) He = X[he], he in Te ? (Ee.transform || (Ee.transform = {}), Ee.transform[he] = He) : (g.test(he) && (he = r(he)), he in J ? Ee[he] = He : (Oe || (Oe = {}), Oe[he] = He));
                        for (he in Ee) {
                            if (He = Ee[he], qe = this.props[he], !qe) {
                                if (!ei) continue;
                                qe = k.call(this, he)
                            }
                            oe.call(this, qe, He)
                        }
                        ye && Oe && ye.call(this, Oe)
                    }

                    function Me(X) {
                        X.stop()
                    }

                    function fr(X, oe) {
                        X.set(oe)
                    }

                    function f1(X) {
                        this.$el.css(X)
                    }

                    function je(X, oe) {
                        E[X] = function() {
                            return this.children ? c1.call(this, oe, arguments) : (this.el && oe.apply(this, arguments), this)
                        }
                    }

                    function c1(X, oe) {
                        var ye, he = this.children.length;
                        for (ye = 0; he > ye; ye++) X.apply(this.children[ye], oe);
                        return this
                    }
                    E.init = function(X) {
                        if (this.$el = e(X), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, pe.keepInherited && !pe.fallback) {
                            var oe = Ce(this.el, "transition");
                            oe && !F.test(oe) && (this.upstream = oe)
                        }
                        N.backface && pe.hideBackface && Se(this.el, N.backface.css, "hidden")
                    }, je("add", k), je("start", O), je("wait", B), je("then", G), je("next", V), je("stop", $), je("set", U), je("show", se), je("hide", j), je("redraw", Z), je("destroy", Q)
                }),
                re = f(K, function(E) {
                    function k(O, B) {
                        var G = e.data(O, l) || e.data(O, l, new K.Bare);
                        return G.el || G.init(O), B ? G.start(B) : G
                    }
                    E.init = function(O, B) {
                        var G = e(O);
                        if (!G.length) return this;
                        if (G.length === 1) return k(G[0], B);
                        var V = [];
                        return G.each(function($, U) {
                            V.push(k(U, B))
                        }), this.children = V, this
                    }
                }),
                W = f(function(E) {
                    function k() {
                        var V = this.get();
                        this.update("auto");
                        var $ = this.get();
                        return this.update(V), $
                    }

                    function O(V, $, U) {
                        return $ !== void 0 && (U = $), V in m ? V : U
                    }

                    function B(V) {
                        var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(V);
                        return ($ ? n($[1], $[2], $[3]) : V).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var G = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    E.init = function(V, $, U, se) {
                        this.$el = V, this.el = V[0];
                        var j = $[0];
                        U[2] && (j = U[2]), _e[j] && (j = _e[j]), this.name = j, this.type = U[1], this.duration = u($[1], this.duration, G.duration), this.ease = O($[2], this.ease, G.ease), this.delay = u($[3], this.delay, G.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = M.test(this.name), this.unit = se.unit || this.unit || pe.defaultUnit, this.angle = se.angle || this.angle || pe.defaultAngle, pe.fallback || se.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + (this.ease != "ease" ? A + m[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                    }, E.set = function(V) {
                        V = this.convert(V, this.type), this.update(V), this.redraw()
                    }, E.transition = function(V) {
                        this.active = !0, V = this.convert(V, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), V == "auto" && (V = k.call(this))), this.nextStyle = V
                    }, E.fallback = function(V) {
                        var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
                        V = this.convert(V, this.type), this.auto && ($ == "auto" && ($ = this.convert(this.get(), this.type)), V == "auto" && (V = k.call(this))), this.tween = new te({
                            from: $,
                            to: V,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, E.get = function() {
                        return Ce(this.el, this.name)
                    }, E.update = function(V) {
                        Se(this.el, this.name, V)
                    }, E.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Se(this.el, this.name, this.get()));
                        var V = this.tween;
                        V && V.context && V.destroy()
                    }, E.convert = function(V, $) {
                        if (V == "auto" && this.auto) return V;
                        var U, se = typeof V == "number",
                            j = typeof V == "string";
                        switch ($) {
                            case b:
                                if (se) return V;
                                if (j && V.replace(y, "") === "") return +V;
                                U = "number(unitless)";
                                break;
                            case S:
                                if (j) {
                                    if (V === "" && this.original) return this.original;
                                    if ($.test(V)) return V.charAt(0) == "#" && V.length == 7 ? V : B(V)
                                }
                                U = "hex or rgb string";
                                break;
                            case _:
                                if (se) return V + this.unit;
                                if (j && $.test(V)) return V;
                                U = "number(px) or string(unit)";
                                break;
                            case I:
                                if (se) return V + this.unit;
                                if (j && $.test(V)) return V;
                                U = "number(px) or string(unit or %)";
                                break;
                            case w:
                                if (se) return V + this.angle;
                                if (j && $.test(V)) return V;
                                U = "number(deg) or string(angle)";
                                break;
                            case C:
                                if (se || j && I.test(V)) return V;
                                U = "number(unitless) or string(unit or %)"
                        }
                        return o(U, V), V
                    }, E.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                ne = f(W, function(E, k) {
                    E.init = function() {
                        k.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), S))
                    }
                }),
                ie = f(W, function(E, k) {
                    E.init = function() {
                        k.init.apply(this, arguments), this.animate = this.fallback
                    }, E.get = function() {
                        return this.$el[this.name]()
                    }, E.update = function(O) {
                        this.$el[this.name](O)
                    }
                }),
                me = f(W, function(E, k) {
                    function O(B, G) {
                        var V, $, U, se, j;
                        for (V in B) se = Te[V], U = se[0], $ = se[1] || V, j = this.convert(B[V], U), G.call(this, $, j, U)
                    }
                    E.init = function() {
                        k.init.apply(this, arguments), this.current || (this.current = {}, Te.perspective && pe.perspective && (this.current.perspective = pe.perspective, Se(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, E.set = function(B) {
                        O.call(this, B, function(G, V) {
                            this.current[G] = V
                        }), Se(this.el, this.name, this.style(this.current)), this.redraw()
                    }, E.transition = function(B) {
                        var G = this.values(B);
                        this.tween = new Ae({
                            current: this.current,
                            values: G,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var V, $ = {};
                        for (V in this.current) $[V] = V in G ? G[V] : this.current[V];
                        this.active = !0, this.nextStyle = this.style($)
                    }, E.fallback = function(B) {
                        var G = this.values(B);
                        this.tween = new Ae({
                            current: this.current,
                            values: G,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, E.update = function() {
                        Se(this.el, this.name, this.style(this.current))
                    }, E.style = function(B) {
                        var G, V = "";
                        for (G in B) V += G + "(" + B[G] + ") ";
                        return V
                    }, E.values = function(B) {
                        var G, V = {};
                        return O.call(this, B, function($, U, se) {
                            V[$] = U, this.current[$] === void 0 && (G = 0, ~$.indexOf("scale") && (G = 1), this.current[$] = this.convert(G, se))
                        }), V
                    }
                }),
                te = f(function(E) {
                    function k(j) {
                        U.push(j) === 1 && R(O)
                    }

                    function O() {
                        var j, Z, Q, de = U.length;
                        if (de)
                            for (R(O), Z = z(), j = de; j--;) Q = U[j], Q && Q.render(Z)
                    }

                    function B(j) {
                        var Z, Q = e.inArray(j, U);
                        Q >= 0 && (Z = U.slice(Q + 1), U.length = Q, Z.length && (U = U.concat(Z)))
                    }

                    function G(j) {
                        return Math.round(j * se) / se
                    }

                    function V(j, Z, Q) {
                        return n(j[0] + Q * (Z[0] - j[0]), j[1] + Q * (Z[1] - j[1]), j[2] + Q * (Z[2] - j[2]))
                    }
                    var $ = {
                        ease: m.ease[1],
                        from: 0,
                        to: 1
                    };
                    E.init = function(j) {
                        this.duration = j.duration || 0, this.delay = j.delay || 0;
                        var Z = j.ease || $.ease;
                        m[Z] && (Z = m[Z][1]), typeof Z != "function" && (Z = $.ease), this.ease = Z, this.update = j.update || a, this.complete = j.complete || a, this.context = j.context || this, this.name = j.name;
                        var Q = j.from,
                            de = j.to;
                        Q === void 0 && (Q = $.from), de === void 0 && (de = $.to), this.unit = j.unit || "", typeof Q == "number" && typeof de == "number" ? (this.begin = Q, this.change = de - Q) : this.format(de, Q), this.value = this.begin + this.unit, this.start = z(), j.autoplay !== !1 && this.play()
                    }, E.play = function() {
                        this.active || (this.start || (this.start = z()), this.active = !0, k(this))
                    }, E.stop = function() {
                        this.active && (this.active = !1, B(this))
                    }, E.render = function(j) {
                        var Z, Q = j - this.start;
                        if (this.delay) {
                            if (Q <= this.delay) return;
                            Q -= this.delay
                        }
                        if (Q < this.duration) {
                            var de = this.ease(Q, 0, 1, this.duration);
                            return Z = this.startRGB ? V(this.startRGB, this.endRGB, de) : G(this.begin + de * this.change), this.value = Z + this.unit, void this.update.call(this.context, this.value)
                        }
                        Z = this.endHex || this.begin + this.change, this.value = Z + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, E.format = function(j, Z) {
                        if (Z += "", j += "", j.charAt(0) == "#") return this.startRGB = i(Z), this.endRGB = i(j), this.endHex = j, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var Q = Z.replace(y, ""),
                                de = j.replace(y, "");
                            Q !== de && s("tween", Z, j), this.unit = Q
                        }
                        Z = parseFloat(Z), j = parseFloat(j), this.begin = this.value = Z, this.change = j - Z
                    }, E.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = a
                    };
                    var U = [],
                        se = 1e3
                }),
                ae = f(te, function(E) {
                    E.init = function(k) {
                        this.duration = k.duration || 0, this.complete = k.complete || a, this.context = k.context, this.play()
                    }, E.render = function(k) {
                        var O = k - this.start;
                        O < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Ae = f(te, function(E, k) {
                    E.init = function(O) {
                        this.context = O.context, this.update = O.update, this.tweens = [], this.current = O.current;
                        var B, G;
                        for (B in O.values) G = O.values[B], this.current[B] !== G && this.tweens.push(new te({
                            name: B,
                            from: this.current[B],
                            to: G,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, E.render = function(O) {
                        var B, G, V = this.tweens.length,
                            $ = !1;
                        for (B = V; B--;) G = this.tweens[B], G.context && (G.render(O), this.current[G.name] = G.value, $ = !0);
                        return $ ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, E.destroy = function() {
                        if (k.destroy.call(this), this.tweens) {
                            var O, B = this.tweens.length;
                            for (O = B; O--;) this.tweens[O].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                pe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !N.transition,
                    agentTests: []
                };
            t.fallback = function(E) {
                if (!N.transition) return pe.fallback = !0;
                pe.agentTests.push("(" + E + ")");
                var k = new RegExp(pe.agentTests.join("|"), "i");
                pe.fallback = k.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(E) {
                return new te(E)
            }, t.delay = function(E, k, O) {
                return new ae({
                    complete: k,
                    duration: E,
                    context: O
                })
            }, e.fn.tram = function(E) {
                return t.call(null, this, E)
            };
            var Se = e.style,
                Ce = e.css,
                _e = {
                    transform: N.transform && N.transform.css
                },
                J = {
                    color: [ne, S],
                    background: [ne, S, "background-color"],
                    "outline-color": [ne, S],
                    "border-color": [ne, S],
                    "border-top-color": [ne, S],
                    "border-right-color": [ne, S],
                    "border-bottom-color": [ne, S],
                    "border-left-color": [ne, S],
                    "border-width": [W, _],
                    "border-top-width": [W, _],
                    "border-right-width": [W, _],
                    "border-bottom-width": [W, _],
                    "border-left-width": [W, _],
                    "border-spacing": [W, _],
                    "letter-spacing": [W, _],
                    margin: [W, _],
                    "margin-top": [W, _],
                    "margin-right": [W, _],
                    "margin-bottom": [W, _],
                    "margin-left": [W, _],
                    padding: [W, _],
                    "padding-top": [W, _],
                    "padding-right": [W, _],
                    "padding-bottom": [W, _],
                    "padding-left": [W, _],
                    "outline-width": [W, _],
                    opacity: [W, b],
                    top: [W, I],
                    right: [W, I],
                    bottom: [W, I],
                    left: [W, I],
                    "font-size": [W, I],
                    "text-indent": [W, I],
                    "word-spacing": [W, I],
                    width: [W, I],
                    "min-width": [W, I],
                    "max-width": [W, I],
                    height: [W, I],
                    "min-height": [W, I],
                    "max-height": [W, I],
                    "line-height": [W, C],
                    "scroll-top": [ie, b, "scrollTop"],
                    "scroll-left": [ie, b, "scrollLeft"]
                },
                Te = {};
            N.transform && (J.transform = [me], Te = {
                x: [I, "translateX"],
                y: [I, "translateY"],
                rotate: [w],
                rotateX: [w],
                rotateY: [w],
                scale: [b],
                scaleX: [b],
                scaleY: [b],
                skew: [w],
                skewX: [w],
                skewY: [w]
            }), N.transform && N.backface && (Te.z = [I, "translateZ"], Te.rotateZ = [w], Te.scaleZ = [b], Te.perspective = [_]);
            var dt = /ms/,
                Je = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var js = x((DB, zs) => {
        "use strict";
        var E1 = window.$,
            P1 = un() && E1.tram;
        zs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                i = Object.prototype,
                n = Function.prototype,
                a = r.push,
                o = r.slice,
                s = r.concat,
                u = i.toString,
                d = i.hasOwnProperty,
                h = r.forEach,
                f = r.map,
                m = r.reduce,
                c = r.reduceRight,
                p = r.filter,
                v = r.every,
                l = r.some,
                y = r.indexOf,
                g = r.lastIndexOf,
                b = Array.isArray,
                S = Object.keys,
                _ = n.bind,
                I = e.each = e.forEach = function(q, T, L) {
                    if (q == null) return q;
                    if (h && q.forEach === h) q.forEach(T, L);
                    else if (q.length === +q.length) {
                        for (var N = 0, H = q.length; N < H; N++)
                            if (T.call(L, q[N], N, q) === t) return
                    } else
                        for (var P = e.keys(q), N = 0, H = P.length; N < H; N++)
                            if (T.call(L, q[P[N]], P[N], q) === t) return;
                    return q
                };
            e.map = e.collect = function(q, T, L) {
                var N = [];
                return q == null ? N : f && q.map === f ? q.map(T, L) : (I(q, function(H, P, R) {
                    N.push(T.call(L, H, P, R))
                }), N)
            }, e.find = e.detect = function(q, T, L) {
                var N;
                return w(q, function(H, P, R) {
                    if (T.call(L, H, P, R)) return N = H, !0
                }), N
            }, e.filter = e.select = function(q, T, L) {
                var N = [];
                return q == null ? N : p && q.filter === p ? q.filter(T, L) : (I(q, function(H, P, R) {
                    T.call(L, H, P, R) && N.push(H)
                }), N)
            };
            var w = e.some = e.any = function(q, T, L) {
                T || (T = e.identity);
                var N = !1;
                return q == null ? N : l && q.some === l ? q.some(T, L) : (I(q, function(H, P, R) {
                    if (N || (N = T.call(L, H, P, R))) return t
                }), !!N)
            };
            e.contains = e.include = function(q, T) {
                return q == null ? !1 : y && q.indexOf === y ? q.indexOf(T) != -1 : w(q, function(L) {
                    return L === T
                })
            }, e.delay = function(q, T) {
                var L = o.call(arguments, 2);
                return setTimeout(function() {
                    return q.apply(null, L)
                }, T)
            }, e.defer = function(q) {
                return e.delay.apply(e, [q, 1].concat(o.call(arguments, 1)))
            }, e.throttle = function(q) {
                var T, L, N;
                return function() {
                    T || (T = !0, L = arguments, N = this, P1.frame(function() {
                        T = !1, q.apply(N, L)
                    }))
                }
            }, e.debounce = function(q, T, L) {
                var N, H, P, R, z, K = function() {
                    var re = e.now() - R;
                    re < T ? N = setTimeout(K, T - re) : (N = null, L || (z = q.apply(P, H), P = H = null))
                };
                return function() {
                    P = this, H = arguments, R = e.now();
                    var re = L && !N;
                    return N || (N = setTimeout(K, T)), re && (z = q.apply(P, H), P = H = null), z
                }
            }, e.defaults = function(q) {
                if (!e.isObject(q)) return q;
                for (var T = 1, L = arguments.length; T < L; T++) {
                    var N = arguments[T];
                    for (var H in N) q[H] === void 0 && (q[H] = N[H])
                }
                return q
            }, e.keys = function(q) {
                if (!e.isObject(q)) return [];
                if (S) return S(q);
                var T = [];
                for (var L in q) e.has(q, L) && T.push(L);
                return T
            }, e.has = function(q, T) {
                return d.call(q, T)
            }, e.isObject = function(q) {
                return q === Object(q)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var C = /(.)^/,
                F = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                M = /\\|'|\r|\n|\u2028|\u2029/g,
                A = function(q) {
                    return "\\" + F[q]
                },
                D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(q, T, L) {
                !T && L && (T = L), T = e.defaults({}, T, e.templateSettings);
                var N = RegExp([(T.escape || C).source, (T.interpolate || C).source, (T.evaluate || C).source].join("|") + "|$", "g"),
                    H = 0,
                    P = "__p+='";
                q.replace(N, function(re, W, ne, ie, me) {
                    return P += q.slice(H, me).replace(M, A), H = me + re.length, W ? P += `'+
    ((__t=(` + W + `))==null?'':_.escape(__t))+
    '` : ne ? P += `'+
    ((__t=(` + ne + `))==null?'':__t)+
    '` : ie && (P += `';
    ` + ie + `
    __p+='`), re
                }), P += `';
    `;
                var R = T.variable;
                if (R) {
                    if (!D.test(R)) throw new Error("variable is not a bare identifier: " + R)
                } else P = `with(obj||{}){
    ` + P + `}
    `, R = "obj";
                P = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` + P + `return __p;
    `;
                var z;
                try {
                    z = new Function(T.variable || "obj", "_", P)
                } catch (re) {
                    throw re.source = P, re
                }
                var K = function(re) {
                    return z.call(this, re, e)
                };
                return K.source = "function(" + R + `){
    ` + P + "}", K
            }, e
        }()
    });
    var at = x((OB, Js) => {
        "use strict";
        var le = {},
            Nt = {},
            Gt = [],
            fn = window.Webflow || [],
            mt = window.jQuery,
            We = mt(window),
            _1 = mt(document),
            Qe = mt.isFunction,
            $e = le._ = js(),
            $s = le.tram = un() && mt.tram,
            ii = !1,
            cn = !1;
        $s.config.hideBackface = !1;
        $s.config.keepInherited = !0;
        le.define = function(e, t, r) {
            Nt[e] && Us(Nt[e]);
            var i = Nt[e] = t(mt, $e, r) || {};
            return Ws(i), i
        };
        le.require = function(e) {
            return Nt[e]
        };

        function Ws(e) {
            le.env() && (Qe(e.design) && We.on("__wf_design", e.design), Qe(e.preview) && We.on("__wf_preview", e.preview)), Qe(e.destroy) && We.on("__wf_destroy", e.destroy), e.ready && Qe(e.ready) && w1(e)
        }

        function w1(e) {
            if (ii) {
                e.ready();
                return
            }
            $e.contains(Gt, e.ready) || Gt.push(e.ready)
        }

        function Us(e) {
            Qe(e.design) && We.off("__wf_design", e.design), Qe(e.preview) && We.off("__wf_preview", e.preview), Qe(e.destroy) && We.off("__wf_destroy", e.destroy), e.ready && Qe(e.ready) && A1(e)
        }

        function A1(e) {
            Gt = $e.filter(Gt, function(t) {
                return t !== e.ready
            })
        }
        le.push = function(e) {
            if (ii) {
                Qe(e) && e();
                return
            }
            fn.push(e)
        };
        le.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var ri = navigator.userAgent.toLowerCase(),
            Ks = le.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            C1 = le.env.chrome = /chrome/.test(ri) && /Google/.test(navigator.vendor) && parseInt(ri.match(/chrome\/(\d+)\./)[1], 10),
            T1 = le.env.ios = /(ipod|iphone|ipad)/.test(ri);
        le.env.safari = /safari/.test(ri) && !C1 && !T1;
        var pn;
        Ks && _1.on("touchstart mousedown", function(e) {
            pn = e.target
        });
        le.validClick = Ks ? function(e) {
            return e === pn || mt.contains(e, pn)
        } : function() {
            return !0
        };
        var Xs = "resize.webflow orientationchange.webflow load.webflow",
            I1 = "scroll.webflow " + Xs;
        le.resize = dn(We, Xs);
        le.scroll = dn(We, I1);
        le.redraw = dn();

        function dn(e, t) {
            var r = [],
                i = {};
            return i.up = $e.throttle(function(n) {
                $e.each(r, function(a) {
                    a(n)
                })
            }), e && t && e.on(t, i.up), i.on = function(n) {
                typeof n == "function" && ($e.contains(r, n) || r.push(n))
            }, i.off = function(n) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = $e.filter(r, function(a) {
                    return a !== n
                })
            }, i
        }
        le.location = function(e) {
            window.location = e
        };
        le.env() && (le.location = function() {});
        le.ready = function() {
            ii = !0, cn ? M1() : $e.each(Gt, Hs), $e.each(fn, Hs), le.resize.up()
        };

        function Hs(e) {
            Qe(e) && e()
        }

        function M1() {
            cn = !1, $e.each(Nt, Ws)
        }
        var Ct;
        le.load = function(e) {
            Ct.then(e)
        };

        function Ys() {
            Ct && (Ct.reject(), We.off("load", Ct.resolve)), Ct = new mt.Deferred, We.on("load", Ct.resolve)
        }
        le.destroy = function(e) {
            e = e || {}, cn = !0, We.triggerHandler("__wf_destroy"), e.domready != null && (ii = e.domready), $e.each(Nt, Us), le.resize.off(), le.scroll.off(), le.redraw.off(), Gt = [], fn = [], Ct.state() === "pending" && Ys()
        };
        mt(le.ready);
        Ys();
        Js.exports = window.Webflow = le
    });
    var Qs = x((RB, Zs) => {
        function q1(e, t, r, i) {
            for (var n = e.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n;)
                if (t(e[a], a, e)) return a;
            return -1
        }
        Zs.exports = q1
    });
    var to = x((LB, eo) => {
        function F1() {
            this.__data__ = [], this.size = 0
        }
        eo.exports = F1
    });
    var mn = x((BB, ro) => {
        function k1(e, t) {
            return e === t || e !== e && t !== t
        }
        ro.exports = k1
    });
    var cr = x((VB, io) => {
        var D1 = mn();

        function O1(e, t) {
            for (var r = e.length; r--;)
                if (D1(e[r][0], t)) return r;
            return -1
        }
        io.exports = O1
    });
    var ao = x((NB, no) => {
        var R1 = cr(),
            L1 = Array.prototype,
            B1 = L1.splice;

        function V1(e) {
            var t = this.__data__,
                r = R1(t, e);
            if (r < 0) return !1;
            var i = t.length - 1;
            return r == i ? t.pop() : B1.call(t, r, 1), --this.size, !0
        }
        no.exports = V1
    });
    var oo = x((GB, so) => {
        var N1 = cr();

        function G1(e) {
            var t = this.__data__,
                r = N1(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        so.exports = G1
    });
    var lo = x((zB, ho) => {
        var z1 = cr();

        function j1(e) {
            return z1(this.__data__, e) > -1
        }
        ho.exports = j1
    });
    var po = x((jB, uo) => {
        var H1 = cr();

        function $1(e, t) {
            var r = this.__data__,
                i = H1(r, e);
            return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
        }
        uo.exports = $1
    });
    var dr = x((HB, fo) => {
        var W1 = to(),
            U1 = ao(),
            K1 = oo(),
            X1 = lo(),
            Y1 = po();

        function zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        zt.prototype.clear = W1;
        zt.prototype.delete = U1;
        zt.prototype.get = K1;
        zt.prototype.has = X1;
        zt.prototype.set = Y1;
        fo.exports = zt
    });
    var mo = x(($B, co) => {
        var J1 = dr();

        function Z1() {
            this.__data__ = new J1, this.size = 0
        }
        co.exports = Z1
    });
    var yo = x((WB, vo) => {
        function Q1(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        vo.exports = Q1
    });
    var bo = x((UB, go) => {
        function eb(e) {
            return this.__data__.get(e)
        }
        go.exports = eb
    });
    var So = x((KB, xo) => {
        function tb(e) {
            return this.__data__.has(e)
        }
        xo.exports = tb
    });
    var vn = x((XB, Eo) => {
        var rb = typeof global == "object" && global && global.Object === Object && global;
        Eo.exports = rb
    });
    var et = x((YB, Po) => {
        var ib = vn(),
            nb = typeof self == "object" && self && self.Object === Object && self,
            ab = ib || nb || Function("return this")();
        Po.exports = ab
    });
    var mr = x((JB, _o) => {
        var sb = et(),
            hb = sb.Symbol;
        _o.exports = hb
    });
    var To = x((ZB, Co) => {
        var wo = mr(),
            Ao = Object.prototype,
            lb = Ao.hasOwnProperty,
            ub = Ao.toString,
            vr = wo ? wo.toStringTag : void 0;

        function pb(e) {
            var t = lb.call(e, vr),
                r = e[vr];
            try {
                e[vr] = void 0;
                var i = !0
            } catch {}
            var n = ub.call(e);
            return i && (t ? e[vr] = r : delete e[vr]), n
        }
        Co.exports = pb
    });
    var Mo = x((QB, Io) => {
        var fb = Object.prototype,
            cb = fb.toString;

        function db(e) {
            return cb.call(e)
        }
        Io.exports = db
    });
    var jt = x((e3, ko) => {
        var qo = mr(),
            mb = To(),
            vb = Mo(),
            yb = "[object Null]",
            gb = "[object Undefined]",
            Fo = qo ? qo.toStringTag : void 0;

        function bb(e) {
            return e == null ? e === void 0 ? gb : yb : Fo && Fo in Object(e) ? mb(e) : vb(e)
        }
        ko.exports = bb
    });
    var yr = x((t3, Do) => {
        function xb(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Do.exports = xb
    });
    var yn = x((r3, Oo) => {
        var Sb = jt(),
            Eb = yr(),
            Pb = "[object AsyncFunction]",
            _b = "[object Function]",
            wb = "[object GeneratorFunction]",
            Ab = "[object Proxy]";

        function Cb(e) {
            if (!Eb(e)) return !1;
            var t = Sb(e);
            return t == _b || t == wb || t == Pb || t == Ab
        }
        Oo.exports = Cb
    });
    var Lo = x((i3, Ro) => {
        var Tb = et(),
            Ib = Tb["__core-js_shared__"];
        Ro.exports = Ib
    });
    var No = x((n3, Vo) => {
        var gn = Lo(),
            Bo = function() {
                var e = /[^.]+$/.exec(gn && gn.keys && gn.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Mb(e) {
            return !!Bo && Bo in e
        }
        Vo.exports = Mb
    });
    var bn = x((a3, Go) => {
        var qb = Function.prototype,
            Fb = qb.toString;

        function kb(e) {
            if (e != null) {
                try {
                    return Fb.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Go.exports = kb
    });
    var jo = x((s3, zo) => {
        var Db = yn(),
            Ob = No(),
            Rb = yr(),
            Lb = bn(),
            Bb = /[\\^$.*+?()[\]{}|]/g,
            Vb = /^\[object .+?Constructor\]$/,
            Nb = Function.prototype,
            Gb = Object.prototype,
            zb = Nb.toString,
            jb = Gb.hasOwnProperty,
            Hb = RegExp("^" + zb.call(jb).replace(Bb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function $b(e) {
            if (!Rb(e) || Ob(e)) return !1;
            var t = Db(e) ? Hb : Vb;
            return t.test(Lb(e))
        }
        zo.exports = $b
    });
    var $o = x((o3, Ho) => {
        function Wb(e, t) {
            return e?.[t]
        }
        Ho.exports = Wb
    });
    var Tt = x((h3, Wo) => {
        var Ub = jo(),
            Kb = $o();

        function Xb(e, t) {
            var r = Kb(e, t);
            return Ub(r) ? r : void 0
        }
        Wo.exports = Xb
    });
    var ni = x((l3, Uo) => {
        var Yb = Tt(),
            Jb = et(),
            Zb = Yb(Jb, "Map");
        Uo.exports = Zb
    });
    var gr = x((u3, Ko) => {
        var Qb = Tt(),
            ex = Qb(Object, "create");
        Ko.exports = ex
    });
    var Jo = x((p3, Yo) => {
        var Xo = gr();

        function tx() {
            this.__data__ = Xo ? Xo(null) : {}, this.size = 0
        }
        Yo.exports = tx
    });
    var Qo = x((f3, Zo) => {
        function rx(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Zo.exports = rx
    });
    var th = x((c3, eh) => {
        var ix = gr(),
            nx = "__lodash_hash_undefined__",
            ax = Object.prototype,
            sx = ax.hasOwnProperty;

        function ox(e) {
            var t = this.__data__;
            if (ix) {
                var r = t[e];
                return r === nx ? void 0 : r
            }
            return sx.call(t, e) ? t[e] : void 0
        }
        eh.exports = ox
    });
    var ih = x((d3, rh) => {
        var hx = gr(),
            lx = Object.prototype,
            ux = lx.hasOwnProperty;

        function px(e) {
            var t = this.__data__;
            return hx ? t[e] !== void 0 : ux.call(t, e)
        }
        rh.exports = px
    });
    var ah = x((m3, nh) => {
        var fx = gr(),
            cx = "__lodash_hash_undefined__";

        function dx(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = fx && t === void 0 ? cx : t, this
        }
        nh.exports = dx
    });
    var oh = x((v3, sh) => {
        var mx = Jo(),
            vx = Qo(),
            yx = th(),
            gx = ih(),
            bx = ah();

        function Ht(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        Ht.prototype.clear = mx;
        Ht.prototype.delete = vx;
        Ht.prototype.get = yx;
        Ht.prototype.has = gx;
        Ht.prototype.set = bx;
        sh.exports = Ht
    });
    var uh = x((y3, lh) => {
        var hh = oh(),
            xx = dr(),
            Sx = ni();

        function Ex() {
            this.size = 0, this.__data__ = {
                hash: new hh,
                map: new(Sx || xx),
                string: new hh
            }
        }
        lh.exports = Ex
    });
    var fh = x((g3, ph) => {
        function Px(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        ph.exports = Px
    });
    var br = x((b3, ch) => {
        var _x = fh();

        function wx(e, t) {
            var r = e.__data__;
            return _x(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        ch.exports = wx
    });
    var mh = x((x3, dh) => {
        var Ax = br();

        function Cx(e) {
            var t = Ax(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        dh.exports = Cx
    });
    var yh = x((S3, vh) => {
        var Tx = br();

        function Ix(e) {
            return Tx(this, e).get(e)
        }
        vh.exports = Ix
    });
    var bh = x((E3, gh) => {
        var Mx = br();

        function qx(e) {
            return Mx(this, e).has(e)
        }
        gh.exports = qx
    });
    var Sh = x((P3, xh) => {
        var Fx = br();

        function kx(e, t) {
            var r = Fx(this, e),
                i = r.size;
            return r.set(e, t), this.size += r.size == i ? 0 : 1, this
        }
        xh.exports = kx
    });
    var ai = x((_3, Eh) => {
        var Dx = uh(),
            Ox = mh(),
            Rx = yh(),
            Lx = bh(),
            Bx = Sh();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var i = e[t];
                this.set(i[0], i[1])
            }
        }
        $t.prototype.clear = Dx;
        $t.prototype.delete = Ox;
        $t.prototype.get = Rx;
        $t.prototype.has = Lx;
        $t.prototype.set = Bx;
        Eh.exports = $t
    });
    var _h = x((w3, Ph) => {
        var Vx = dr(),
            Nx = ni(),
            Gx = ai(),
            zx = 200;

        function jx(e, t) {
            var r = this.__data__;
            if (r instanceof Vx) {
                var i = r.__data__;
                if (!Nx || i.length < zx - 1) return i.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new Gx(i)
            }
            return r.set(e, t), this.size = r.size, this
        }
        Ph.exports = jx
    });
    var xn = x((A3, wh) => {
        var Hx = dr(),
            $x = mo(),
            Wx = yo(),
            Ux = bo(),
            Kx = So(),
            Xx = _h();

        function Wt(e) {
            var t = this.__data__ = new Hx(e);
            this.size = t.size
        }
        Wt.prototype.clear = $x;
        Wt.prototype.delete = Wx;
        Wt.prototype.get = Ux;
        Wt.prototype.has = Kx;
        Wt.prototype.set = Xx;
        wh.exports = Wt
    });
    var Ch = x((C3, Ah) => {
        var Yx = "__lodash_hash_undefined__";

        function Jx(e) {
            return this.__data__.set(e, Yx), this
        }
        Ah.exports = Jx
    });
    var Ih = x((T3, Th) => {
        function Zx(e) {
            return this.__data__.has(e)
        }
        Th.exports = Zx
    });
    var qh = x((I3, Mh) => {
        var Qx = ai(),
            eS = Ch(),
            tS = Ih();

        function si(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new Qx; ++t < r;) this.add(e[t])
        }
        si.prototype.add = si.prototype.push = eS;
        si.prototype.has = tS;
        Mh.exports = si
    });
    var kh = x((M3, Fh) => {
        function rS(e, t) {
            for (var r = -1, i = e == null ? 0 : e.length; ++r < i;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Fh.exports = rS
    });
    var Oh = x((q3, Dh) => {
        function iS(e, t) {
            return e.has(t)
        }
        Dh.exports = iS
    });
    var Sn = x((F3, Rh) => {
        var nS = qh(),
            aS = kh(),
            sS = Oh(),
            oS = 1,
            hS = 2;

        function lS(e, t, r, i, n, a) {
            var o = r & oS,
                s = e.length,
                u = t.length;
            if (s != u && !(o && u > s)) return !1;
            var d = a.get(e),
                h = a.get(t);
            if (d && h) return d == t && h == e;
            var f = -1,
                m = !0,
                c = r & hS ? new nS : void 0;
            for (a.set(e, t), a.set(t, e); ++f < s;) {
                var p = e[f],
                    v = t[f];
                if (i) var l = o ? i(v, p, f, t, e, a) : i(p, v, f, e, t, a);
                if (l !== void 0) {
                    if (l) continue;
                    m = !1;
                    break
                }
                if (c) {
                    if (!aS(t, function(y, g) {
                            if (!sS(c, g) && (p === y || n(p, y, r, i, a))) return c.push(g)
                        })) {
                        m = !1;
                        break
                    }
                } else if (!(p === v || n(p, v, r, i, a))) {
                    m = !1;
                    break
                }
            }
            return a.delete(e), a.delete(t), m
        }
        Rh.exports = lS
    });
    var Bh = x((k3, Lh) => {
        var uS = et(),
            pS = uS.Uint8Array;
        Lh.exports = pS
    });
    var Nh = x((D3, Vh) => {
        function fS(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(i, n) {
                r[++t] = [n, i]
            }), r
        }
        Vh.exports = fS
    });
    var zh = x((O3, Gh) => {
        function cS(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(i) {
                r[++t] = i
            }), r
        }
        Gh.exports = cS
    });
    var Uh = x((R3, Wh) => {
        var jh = mr(),
            Hh = Bh(),
            dS = mn(),
            mS = Sn(),
            vS = Nh(),
            yS = zh(),
            gS = 1,
            bS = 2,
            xS = "[object Boolean]",
            SS = "[object Date]",
            ES = "[object Error]",
            PS = "[object Map]",
            _S = "[object Number]",
            wS = "[object RegExp]",
            AS = "[object Set]",
            CS = "[object String]",
            TS = "[object Symbol]",
            IS = "[object ArrayBuffer]",
            MS = "[object DataView]",
            $h = jh ? jh.prototype : void 0,
            En = $h ? $h.valueOf : void 0;

        function qS(e, t, r, i, n, a, o) {
            switch (r) {
                case MS:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case IS:
                    return !(e.byteLength != t.byteLength || !a(new Hh(e), new Hh(t)));
                case xS:
                case SS:
                case _S:
                    return dS(+e, +t);
                case ES:
                    return e.name == t.name && e.message == t.message;
                case wS:
                case CS:
                    return e == t + "";
                case PS:
                    var s = vS;
                case AS:
                    var u = i & gS;
                    if (s || (s = yS), e.size != t.size && !u) return !1;
                    var d = o.get(e);
                    if (d) return d == t;
                    i |= bS, o.set(e, t);
                    var h = mS(s(e), s(t), i, n, a, o);
                    return o.delete(e), h;
                case TS:
                    if (En) return En.call(e) == En.call(t)
            }
            return !1
        }
        Wh.exports = qS
    });
    var Xh = x((L3, Kh) => {
        function FS(e, t) {
            for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
            return e
        }
        Kh.exports = FS
    });
    var st = x((B3, Yh) => {
        var kS = Array.isArray;
        Yh.exports = kS
    });
    var Zh = x((V3, Jh) => {
        var DS = Xh(),
            OS = st();

        function RS(e, t, r) {
            var i = t(e);
            return OS(e) ? i : DS(i, r(e))
        }
        Jh.exports = RS
    });
    var el = x((N3, Qh) => {
        function LS(e, t) {
            for (var r = -1, i = e == null ? 0 : e.length, n = 0, a = []; ++r < i;) {
                var o = e[r];
                t(o, r, e) && (a[n++] = o)
            }
            return a
        }
        Qh.exports = LS
    });
    var rl = x((G3, tl) => {
        function BS() {
            return []
        }
        tl.exports = BS
    });
    var al = x((z3, nl) => {
        var VS = el(),
            NS = rl(),
            GS = Object.prototype,
            zS = GS.propertyIsEnumerable,
            il = Object.getOwnPropertySymbols,
            jS = il ? function(e) {
                return e == null ? [] : (e = Object(e), VS(il(e), function(t) {
                    return zS.call(e, t)
                }))
            } : NS;
        nl.exports = jS
    });
    var ol = x((j3, sl) => {
        function HS(e, t) {
            for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
            return i
        }
        sl.exports = HS
    });
    var Ut = x((H3, hl) => {
        function $S(e) {
            return e != null && typeof e == "object"
        }
        hl.exports = $S
    });
    var ul = x(($3, ll) => {
        var WS = jt(),
            US = Ut(),
            KS = "[object Arguments]";

        function XS(e) {
            return US(e) && WS(e) == KS
        }
        ll.exports = XS
    });
    var Pn = x((W3, cl) => {
        var pl = ul(),
            YS = Ut(),
            fl = Object.prototype,
            JS = fl.hasOwnProperty,
            ZS = fl.propertyIsEnumerable,
            QS = pl(function() {
                return arguments
            }()) ? pl : function(e) {
                return YS(e) && JS.call(e, "callee") && !ZS.call(e, "callee")
            };
        cl.exports = QS
    });
    var ml = x((U3, dl) => {
        function eE() {
            return !1
        }
        dl.exports = eE
    });
    var _n = x((xr, Kt) => {
        var tE = et(),
            rE = ml(),
            gl = typeof xr == "object" && xr && !xr.nodeType && xr,
            vl = gl && typeof Kt == "object" && Kt && !Kt.nodeType && Kt,
            iE = vl && vl.exports === gl,
            yl = iE ? tE.Buffer : void 0,
            nE = yl ? yl.isBuffer : void 0,
            aE = nE || rE;
        Kt.exports = aE
    });
    var wn = x((K3, bl) => {
        var sE = 9007199254740991,
            oE = /^(?:0|[1-9]\d*)$/;

        function hE(e, t) {
            var r = typeof e;
            return t = t ?? sE, !!t && (r == "number" || r != "symbol" && oE.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        bl.exports = hE
    });
    var oi = x((X3, xl) => {
        var lE = 9007199254740991;

        function uE(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lE
        }
        xl.exports = uE
    });
    var El = x((Y3, Sl) => {
        var pE = jt(),
            fE = oi(),
            cE = Ut(),
            dE = "[object Arguments]",
            mE = "[object Array]",
            vE = "[object Boolean]",
            yE = "[object Date]",
            gE = "[object Error]",
            bE = "[object Function]",
            xE = "[object Map]",
            SE = "[object Number]",
            EE = "[object Object]",
            PE = "[object RegExp]",
            _E = "[object Set]",
            wE = "[object String]",
            AE = "[object WeakMap]",
            CE = "[object ArrayBuffer]",
            TE = "[object DataView]",
            IE = "[object Float32Array]",
            ME = "[object Float64Array]",
            qE = "[object Int8Array]",
            FE = "[object Int16Array]",
            kE = "[object Int32Array]",
            DE = "[object Uint8Array]",
            OE = "[object Uint8ClampedArray]",
            RE = "[object Uint16Array]",
            LE = "[object Uint32Array]",
            fe = {};
        fe[IE] = fe[ME] = fe[qE] = fe[FE] = fe[kE] = fe[DE] = fe[OE] = fe[RE] = fe[LE] = !0;
        fe[dE] = fe[mE] = fe[CE] = fe[vE] = fe[TE] = fe[yE] = fe[gE] = fe[bE] = fe[xE] = fe[SE] = fe[EE] = fe[PE] = fe[_E] = fe[wE] = fe[AE] = !1;

        function BE(e) {
            return cE(e) && fE(e.length) && !!fe[pE(e)]
        }
        Sl.exports = BE
    });
    var _l = x((J3, Pl) => {
        function VE(e) {
            return function(t) {
                return e(t)
            }
        }
        Pl.exports = VE
    });
    var Al = x((Sr, Xt) => {
        var NE = vn(),
            wl = typeof Sr == "object" && Sr && !Sr.nodeType && Sr,
            Er = wl && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
            GE = Er && Er.exports === wl,
            An = GE && NE.process,
            zE = function() {
                try {
                    var e = Er && Er.require && Er.require("util").types;
                    return e || An && An.binding && An.binding("util")
                } catch {}
            }();
        Xt.exports = zE
    });
    var Cn = x((Z3, Il) => {
        var jE = El(),
            HE = _l(),
            Cl = Al(),
            Tl = Cl && Cl.isTypedArray,
            $E = Tl ? HE(Tl) : jE;
        Il.exports = $E
    });
    var ql = x((Q3, Ml) => {
        var WE = ol(),
            UE = Pn(),
            KE = st(),
            XE = _n(),
            YE = wn(),
            JE = Cn(),
            ZE = Object.prototype,
            QE = ZE.hasOwnProperty;

        function eP(e, t) {
            var r = KE(e),
                i = !r && UE(e),
                n = !r && !i && XE(e),
                a = !r && !i && !n && JE(e),
                o = r || i || n || a,
                s = o ? WE(e.length, String) : [],
                u = s.length;
            for (var d in e)(t || QE.call(e, d)) && !(o && (d == "length" || n && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || YE(d, u))) && s.push(d);
            return s
        }
        Ml.exports = eP
    });
    var kl = x((eV, Fl) => {
        var tP = Object.prototype;

        function rP(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || tP;
            return e === r
        }
        Fl.exports = rP
    });
    var Ol = x((tV, Dl) => {
        function iP(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Dl.exports = iP
    });
    var Ll = x((rV, Rl) => {
        var nP = Ol(),
            aP = nP(Object.keys, Object);
        Rl.exports = aP
    });
    var Vl = x((iV, Bl) => {
        var sP = kl(),
            oP = Ll(),
            hP = Object.prototype,
            lP = hP.hasOwnProperty;

        function uP(e) {
            if (!sP(e)) return oP(e);
            var t = [];
            for (var r in Object(e)) lP.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Bl.exports = uP
    });
    var Gl = x((nV, Nl) => {
        var pP = yn(),
            fP = oi();

        function cP(e) {
            return e != null && fP(e.length) && !pP(e)
        }
        Nl.exports = cP
    });
    var Tn = x((aV, zl) => {
        var dP = ql(),
            mP = Vl(),
            vP = Gl();

        function yP(e) {
            return vP(e) ? dP(e) : mP(e)
        }
        zl.exports = yP
    });
    var Hl = x((sV, jl) => {
        var gP = Zh(),
            bP = al(),
            xP = Tn();

        function SP(e) {
            return gP(e, xP, bP)
        }
        jl.exports = SP
    });
    var Ul = x((oV, Wl) => {
        var $l = Hl(),
            EP = 1,
            PP = Object.prototype,
            _P = PP.hasOwnProperty;

        function wP(e, t, r, i, n, a) {
            var o = r & EP,
                s = $l(e),
                u = s.length,
                d = $l(t),
                h = d.length;
            if (u != h && !o) return !1;
            for (var f = u; f--;) {
                var m = s[f];
                if (!(o ? m in t : _P.call(t, m))) return !1
            }
            var c = a.get(e),
                p = a.get(t);
            if (c && p) return c == t && p == e;
            var v = !0;
            a.set(e, t), a.set(t, e);
            for (var l = o; ++f < u;) {
                m = s[f];
                var y = e[m],
                    g = t[m];
                if (i) var b = o ? i(g, y, m, t, e, a) : i(y, g, m, e, t, a);
                if (!(b === void 0 ? y === g || n(y, g, r, i, a) : b)) {
                    v = !1;
                    break
                }
                l || (l = m == "constructor")
            }
            if (v && !l) {
                var S = e.constructor,
                    _ = t.constructor;
                S != _ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (v = !1)
            }
            return a.delete(e), a.delete(t), v
        }
        Wl.exports = wP
    });
    var Xl = x((hV, Kl) => {
        var AP = Tt(),
            CP = et(),
            TP = AP(CP, "DataView");
        Kl.exports = TP
    });
    var Jl = x((lV, Yl) => {
        var IP = Tt(),
            MP = et(),
            qP = IP(MP, "Promise");
        Yl.exports = qP
    });
    var Ql = x((uV, Zl) => {
        var FP = Tt(),
            kP = et(),
            DP = FP(kP, "Set");
        Zl.exports = DP
    });
    var tu = x((pV, eu) => {
        var OP = Tt(),
            RP = et(),
            LP = OP(RP, "WeakMap");
        eu.exports = LP
    });
    var lu = x((fV, hu) => {
        var In = Xl(),
            Mn = ni(),
            qn = Jl(),
            Fn = Ql(),
            kn = tu(),
            ou = jt(),
            Yt = bn(),
            ru = "[object Map]",
            BP = "[object Object]",
            iu = "[object Promise]",
            nu = "[object Set]",
            au = "[object WeakMap]",
            su = "[object DataView]",
            VP = Yt(In),
            NP = Yt(Mn),
            GP = Yt(qn),
            zP = Yt(Fn),
            jP = Yt(kn),
            It = ou;
        (In && It(new In(new ArrayBuffer(1))) != su || Mn && It(new Mn) != ru || qn && It(qn.resolve()) != iu || Fn && It(new Fn) != nu || kn && It(new kn) != au) && (It = function(e) {
            var t = ou(e),
                r = t == BP ? e.constructor : void 0,
                i = r ? Yt(r) : "";
            if (i) switch (i) {
                case VP:
                    return su;
                case NP:
                    return ru;
                case GP:
                    return iu;
                case zP:
                    return nu;
                case jP:
                    return au
            }
            return t
        });
        hu.exports = It
    });
    var yu = x((cV, vu) => {
        var Dn = xn(),
            HP = Sn(),
            $P = Uh(),
            WP = Ul(),
            uu = lu(),
            pu = st(),
            fu = _n(),
            UP = Cn(),
            KP = 1,
            cu = "[object Arguments]",
            du = "[object Array]",
            hi = "[object Object]",
            XP = Object.prototype,
            mu = XP.hasOwnProperty;

        function YP(e, t, r, i, n, a) {
            var o = pu(e),
                s = pu(t),
                u = o ? du : uu(e),
                d = s ? du : uu(t);
            u = u == cu ? hi : u, d = d == cu ? hi : d;
            var h = u == hi,
                f = d == hi,
                m = u == d;
            if (m && fu(e)) {
                if (!fu(t)) return !1;
                o = !0, h = !1
            }
            if (m && !h) return a || (a = new Dn), o || UP(e) ? HP(e, t, r, i, n, a) : $P(e, t, u, r, i, n, a);
            if (!(r & KP)) {
                var c = h && mu.call(e, "__wrapped__"),
                    p = f && mu.call(t, "__wrapped__");
                if (c || p) {
                    var v = c ? e.value() : e,
                        l = p ? t.value() : t;
                    return a || (a = new Dn), n(v, l, r, i, a)
                }
            }
            return m ? (a || (a = new Dn), WP(e, t, r, i, n, a)) : !1
        }
        vu.exports = YP
    });
    var On = x((dV, xu) => {
        var JP = yu(),
            gu = Ut();

        function bu(e, t, r, i, n) {
            return e === t ? !0 : e == null || t == null || !gu(e) && !gu(t) ? e !== e && t !== t : JP(e, t, r, i, bu, n)
        }
        xu.exports = bu
    });
    var Eu = x((mV, Su) => {
        var ZP = xn(),
            QP = On(),
            e_ = 1,
            t_ = 2;

        function r_(e, t, r, i) {
            var n = r.length,
                a = n,
                o = !i;
            if (e == null) return !a;
            for (e = Object(e); n--;) {
                var s = r[n];
                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++n < a;) {
                s = r[n];
                var u = s[0],
                    d = e[u],
                    h = s[1];
                if (o && s[2]) {
                    if (d === void 0 && !(u in e)) return !1
                } else {
                    var f = new ZP;
                    if (i) var m = i(d, h, u, e, t, f);
                    if (!(m === void 0 ? QP(h, d, e_ | t_, i, f) : m)) return !1
                }
            }
            return !0
        }
        Su.exports = r_
    });
    var Rn = x((vV, Pu) => {
        var i_ = yr();

        function n_(e) {
            return e === e && !i_(e)
        }
        Pu.exports = n_
    });
    var wu = x((yV, _u) => {
        var a_ = Rn(),
            s_ = Tn();

        function o_(e) {
            for (var t = s_(e), r = t.length; r--;) {
                var i = t[r],
                    n = e[i];
                t[r] = [i, n, a_(n)]
            }
            return t
        }
        _u.exports = o_
    });
    var Ln = x((gV, Au) => {
        function h_(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Au.exports = h_
    });
    var Tu = x((bV, Cu) => {
        var l_ = Eu(),
            u_ = wu(),
            p_ = Ln();

        function f_(e) {
            var t = u_(e);
            return t.length == 1 && t[0][2] ? p_(t[0][0], t[0][1]) : function(r) {
                return r === e || l_(r, e, t)
            }
        }
        Cu.exports = f_
    });
    var Pr = x((xV, Iu) => {
        var c_ = jt(),
            d_ = Ut(),
            m_ = "[object Symbol]";

        function v_(e) {
            return typeof e == "symbol" || d_(e) && c_(e) == m_
        }
        Iu.exports = v_
    });
    var li = x((SV, Mu) => {
        var y_ = st(),
            g_ = Pr(),
            b_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            x_ = /^\w*$/;

        function S_(e, t) {
            if (y_(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || g_(e) ? !0 : x_.test(e) || !b_.test(e) || t != null && e in Object(t)
        }
        Mu.exports = S_
    });
    var ku = x((EV, Fu) => {
        var qu = ai(),
            E_ = "Expected a function";

        function Bn(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(E_);
            var r = function() {
                var i = arguments,
                    n = t ? t.apply(this, i) : i[0],
                    a = r.cache;
                if (a.has(n)) return a.get(n);
                var o = e.apply(this, i);
                return r.cache = a.set(n, o) || a, o
            };
            return r.cache = new(Bn.Cache || qu), r
        }
        Bn.Cache = qu;
        Fu.exports = Bn
    });
    var Ou = x((PV, Du) => {
        var P_ = ku(),
            __ = 500;

        function w_(e) {
            var t = P_(e, function(i) {
                    return r.size === __ && r.clear(), i
                }),
                r = t.cache;
            return t
        }
        Du.exports = w_
    });
    var Lu = x((_V, Ru) => {
        var A_ = Ou(),
            C_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            T_ = /\\(\\)?/g,
            I_ = A_(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(C_, function(r, i, n, a) {
                    t.push(n ? a.replace(T_, "$1") : i || r)
                }), t
            });
        Ru.exports = I_
    });
    var Vu = x((wV, Bu) => {
        function M_(e, t) {
            for (var r = -1, i = e == null ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
            return n
        }
        Bu.exports = M_
    });
    var $u = x((AV, Hu) => {
        var Nu = mr(),
            q_ = Vu(),
            F_ = st(),
            k_ = Pr(),
            D_ = 1 / 0,
            Gu = Nu ? Nu.prototype : void 0,
            zu = Gu ? Gu.toString : void 0;

        function ju(e) {
            if (typeof e == "string") return e;
            if (F_(e)) return q_(e, ju) + "";
            if (k_(e)) return zu ? zu.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -D_ ? "-0" : t
        }
        Hu.exports = ju
    });
    var Uu = x((CV, Wu) => {
        var O_ = $u();

        function R_(e) {
            return e == null ? "" : O_(e)
        }
        Wu.exports = R_
    });
    var Vn = x((TV, Ku) => {
        var L_ = st(),
            B_ = li(),
            V_ = Lu(),
            N_ = Uu();

        function G_(e, t) {
            return L_(e) ? e : B_(e, t) ? [e] : V_(N_(e))
        }
        Ku.exports = G_
    });
    var _r = x((IV, Xu) => {
        var z_ = Pr(),
            j_ = 1 / 0;

        function H_(e) {
            if (typeof e == "string" || z_(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -j_ ? "-0" : t
        }
        Xu.exports = H_
    });
    var Nn = x((MV, Yu) => {
        var $_ = Vn(),
            W_ = _r();

        function U_(e, t) {
            t = $_(t, e);
            for (var r = 0, i = t.length; e != null && r < i;) e = e[W_(t[r++])];
            return r && r == i ? e : void 0
        }
        Yu.exports = U_
    });
    var Zu = x((qV, Ju) => {
        var K_ = Nn();

        function X_(e, t, r) {
            var i = e == null ? void 0 : K_(e, t);
            return i === void 0 ? r : i
        }
        Ju.exports = X_
    });
    var ep = x((FV, Qu) => {
        function Y_(e, t) {
            return e != null && t in Object(e)
        }
        Qu.exports = Y_
    });
    var rp = x((kV, tp) => {
        var J_ = Vn(),
            Z_ = Pn(),
            Q_ = st(),
            ew = wn(),
            tw = oi(),
            rw = _r();

        function iw(e, t, r) {
            t = J_(t, e);
            for (var i = -1, n = t.length, a = !1; ++i < n;) {
                var o = rw(t[i]);
                if (!(a = e != null && r(e, o))) break;
                e = e[o]
            }
            return a || ++i != n ? a : (n = e == null ? 0 : e.length, !!n && tw(n) && ew(o, n) && (Q_(e) || Z_(e)))
        }
        tp.exports = iw
    });
    var np = x((DV, ip) => {
        var nw = ep(),
            aw = rp();

        function sw(e, t) {
            return e != null && aw(e, t, nw)
        }
        ip.exports = sw
    });
    var sp = x((OV, ap) => {
        var ow = On(),
            hw = Zu(),
            lw = np(),
            uw = li(),
            pw = Rn(),
            fw = Ln(),
            cw = _r(),
            dw = 1,
            mw = 2;

        function vw(e, t) {
            return uw(e) && pw(t) ? fw(cw(e), t) : function(r) {
                var i = hw(r, e);
                return i === void 0 && i === t ? lw(r, e) : ow(t, i, dw | mw)
            }
        }
        ap.exports = vw
    });
    var hp = x((RV, op) => {
        function yw(e) {
            return e
        }
        op.exports = yw
    });
    var up = x((LV, lp) => {
        function gw(e) {
            return function(t) {
                return t?.[e]
            }
        }
        lp.exports = gw
    });
    var fp = x((BV, pp) => {
        var bw = Nn();

        function xw(e) {
            return function(t) {
                return bw(t, e)
            }
        }
        pp.exports = xw
    });
    var dp = x((VV, cp) => {
        var Sw = up(),
            Ew = fp(),
            Pw = li(),
            _w = _r();

        function ww(e) {
            return Pw(e) ? Sw(_w(e)) : Ew(e)
        }
        cp.exports = ww
    });
    var vp = x((NV, mp) => {
        var Aw = Tu(),
            Cw = sp(),
            Tw = hp(),
            Iw = st(),
            Mw = dp();

        function qw(e) {
            return typeof e == "function" ? e : e == null ? Tw : typeof e == "object" ? Iw(e) ? Cw(e[0], e[1]) : Aw(e) : Mw(e)
        }
        mp.exports = qw
    });
    var gp = x((GV, yp) => {
        var Fw = /\s/;

        function kw(e) {
            for (var t = e.length; t-- && Fw.test(e.charAt(t)););
            return t
        }
        yp.exports = kw
    });
    var xp = x((zV, bp) => {
        var Dw = gp(),
            Ow = /^\s+/;

        function Rw(e) {
            return e && e.slice(0, Dw(e) + 1).replace(Ow, "")
        }
        bp.exports = Rw
    });
    var _p = x((jV, Pp) => {
        var Lw = xp(),
            Sp = yr(),
            Bw = Pr(),
            Ep = 0 / 0,
            Vw = /^[-+]0x[0-9a-f]+$/i,
            Nw = /^0b[01]+$/i,
            Gw = /^0o[0-7]+$/i,
            zw = parseInt;

        function jw(e) {
            if (typeof e == "number") return e;
            if (Bw(e)) return Ep;
            if (Sp(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Sp(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = Lw(e);
            var r = Nw.test(e);
            return r || Gw.test(e) ? zw(e.slice(2), r ? 2 : 8) : Vw.test(e) ? Ep : +e
        }
        Pp.exports = jw
    });
    var Cp = x((HV, Ap) => {
        var Hw = _p(),
            wp = 1 / 0,
            $w = 17976931348623157e292;

        function Ww(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = Hw(e), e === wp || e === -wp) {
                var t = e < 0 ? -1 : 1;
                return t * $w
            }
            return e === e ? e : 0
        }
        Ap.exports = Ww
    });
    var Ip = x(($V, Tp) => {
        var Uw = Cp();

        function Kw(e) {
            var t = Uw(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Tp.exports = Kw
    });
    var qp = x((WV, Mp) => {
        var Xw = Qs(),
            Yw = vp(),
            Jw = Ip(),
            Zw = Math.max;

        function Qw(e, t, r) {
            var i = e == null ? 0 : e.length;
            if (!i) return -1;
            var n = r == null ? 0 : Jw(r);
            return n < 0 && (n = Zw(i + n, 0)), Xw(e, Yw(t, 3), n)
        }
        Mp.exports = Qw
    });
    var Y = x((UV, Fp) => {
        var ui = function(e) {
            return e && e.Math == Math && e
        };
        Fp.exports = ui(typeof globalThis == "object" && globalThis) || ui(typeof window == "object" && window) || ui(typeof self == "object" && self) || ui(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var we = x((KV, kp) => {
        kp.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ue = x((XV, Dp) => {
        var eA = we();
        Dp.exports = !eA(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var Le = x((YV, Op) => {
        var wr = Function.prototype.call;
        Op.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    });
    var Vp = x(Bp => {
        "use strict";
        var Rp = {}.propertyIsEnumerable,
            Lp = Object.getOwnPropertyDescriptor,
            tA = Lp && !Rp.call({
                1: 2
            }, 1);
        Bp.f = tA ? function(t) {
            var r = Lp(this, t);
            return !!r && r.enumerable
        } : Rp
    });
    var Ar = x((ZV, Np) => {
        Np.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var ce = x((QV, zp) => {
        var Gp = Function.prototype,
            Gn = Gp.bind,
            zn = Gp.call,
            rA = Gn && Gn.bind(zn);
        zp.exports = Gn ? function(e) {
            return e && rA(zn, e)
        } : function(e) {
            return e && function() {
                return zn.apply(e, arguments)
            }
        }
    });
    var Jt = x((eN, Hp) => {
        var jp = ce(),
            iA = jp({}.toString),
            nA = jp("".slice);
        Hp.exports = function(e) {
            return nA(iA(e), 8, -1)
        }
    });
    var Mt = x((tN, $p) => {
        var aA = Y(),
            sA = ce(),
            oA = we(),
            hA = Jt(),
            jn = aA.Object,
            lA = sA("".split);
        $p.exports = oA(function() {
            return !jn("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return hA(e) == "String" ? lA(e, "") : jn(e)
        } : jn
    });
    var pi = x((rN, Wp) => {
        var uA = Y(),
            pA = uA.TypeError;
        Wp.exports = function(e) {
            if (e == null) throw pA("Can't call method on " + e);
            return e
        }
    });
    var tt = x((iN, Up) => {
        var fA = Mt(),
            cA = pi();
        Up.exports = function(e) {
            return fA(cA(e))
        }
    });
    var ge = x((nN, Kp) => {
        Kp.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Fe = x((aN, Xp) => {
        var dA = ge();
        Xp.exports = function(e) {
            return typeof e == "object" ? e !== null : dA(e)
        }
    });
    var Be = x((sN, Yp) => {
        var Hn = Y(),
            mA = ge(),
            vA = function(e) {
                return mA(e) ? e : void 0
            };
        Yp.exports = function(e, t) {
            return arguments.length < 2 ? vA(Hn[e]) : Hn[e] && Hn[e][t]
        }
    });
    var fi = x((oN, Jp) => {
        var yA = ce();
        Jp.exports = yA({}.isPrototypeOf)
    });
    var vt = x((hN, Zp) => {
        var gA = Be();
        Zp.exports = gA("navigator", "userAgent") || ""
    });
    var yt = x((lN, af) => {
        var nf = Y(),
            $n = vt(),
            Qp = nf.process,
            ef = nf.Deno,
            tf = Qp && Qp.versions || ef && ef.version,
            rf = tf && tf.v8,
            Ke, ci;
        rf && (Ke = rf.split("."), ci = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1]));
        !ci && $n && (Ke = $n.match(/Edge\/(\d+)/), (!Ke || Ke[1] >= 74) && (Ke = $n.match(/Chrome\/(\d+)/), Ke && (ci = +Ke[1])));
        af.exports = ci
    });
    var Wn = x((uN, of) => {
        var sf = yt(),
            bA = we();
        of.exports = !!Object.getOwnPropertySymbols && !bA(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && sf && sf < 41
        })
    });
    var Un = x((pN, hf) => {
        var xA = Wn();
        hf.exports = xA && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Kn = x((fN, lf) => {
        var SA = Y(),
            EA = Be(),
            PA = ge(),
            _A = fi(),
            wA = Un(),
            AA = SA.Object;
        lf.exports = wA ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = EA("Symbol");
            return PA(t) && _A(t.prototype, AA(e))
        }
    });
    var Cr = x((cN, uf) => {
        var CA = Y(),
            TA = CA.String;
        uf.exports = function(e) {
            try {
                return TA(e)
            } catch {
                return "Object"
            }
        }
    });
    var Xe = x((dN, pf) => {
        var IA = Y(),
            MA = ge(),
            qA = Cr(),
            FA = IA.TypeError;
        pf.exports = function(e) {
            if (MA(e)) return e;
            throw FA(qA(e) + " is not a function")
        }
    });
    var gt = x((mN, ff) => {
        var kA = Xe();
        ff.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : kA(r)
        }
    });
    var df = x((vN, cf) => {
        var DA = Y(),
            Xn = Le(),
            Yn = ge(),
            Jn = Fe(),
            OA = DA.TypeError;
        cf.exports = function(e, t) {
            var r, i;
            if (t === "string" && Yn(r = e.toString) && !Jn(i = Xn(r, e)) || Yn(r = e.valueOf) && !Jn(i = Xn(r, e)) || t !== "string" && Yn(r = e.toString) && !Jn(i = Xn(r, e))) return i;
            throw OA("Can't convert object to primitive value")
        }
    });
    var Zt = x((yN, mf) => {
        mf.exports = !1
    });
    var di = x((gN, yf) => {
        var vf = Y(),
            RA = Object.defineProperty;
        yf.exports = function(e, t) {
            try {
                RA(vf, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                vf[e] = t
            }
            return t
        }
    });
    var Tr = x((bN, bf) => {
        var LA = Y(),
            BA = di(),
            gf = "__core-js_shared__",
            VA = LA[gf] || BA(gf, {});
        bf.exports = VA
    });
    var Zn = x((xN, Sf) => {
        var NA = Zt(),
            xf = Tr();
        (Sf.exports = function(e, t) {
            return xf[e] || (xf[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: NA ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var xe = x((SN, Ef) => {
        var GA = Y(),
            zA = pi(),
            jA = GA.Object;
        Ef.exports = function(e) {
            return jA(zA(e))
        }
    });
    var Ve = x((EN, Pf) => {
        var HA = ce(),
            $A = xe(),
            WA = HA({}.hasOwnProperty);
        Pf.exports = Object.hasOwn || function(t, r) {
            return WA($A(t), r)
        }
    });
    var mi = x((PN, _f) => {
        var UA = ce(),
            KA = 0,
            XA = Math.random(),
            YA = UA(1 .toString);
        _f.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + YA(++KA + XA, 36)
        }
    });
    var be = x((_N, If) => {
        var JA = Y(),
            ZA = Zn(),
            wf = Ve(),
            QA = mi(),
            Af = Wn(),
            Tf = Un(),
            Qt = ZA("wks"),
            qt = JA.Symbol,
            Cf = qt && qt.for,
            eC = Tf ? qt : qt && qt.withoutSetter || QA;
        If.exports = function(e) {
            if (!wf(Qt, e) || !(Af || typeof Qt[e] == "string")) {
                var t = "Symbol." + e;
                Af && wf(qt, e) ? Qt[e] = qt[e] : Tf && Cf ? Qt[e] = Cf(t) : Qt[e] = eC(t)
            }
            return Qt[e]
        }
    });
    var kf = x((wN, Ff) => {
        var tC = Y(),
            rC = Le(),
            Mf = Fe(),
            qf = Kn(),
            iC = gt(),
            nC = df(),
            aC = be(),
            sC = tC.TypeError,
            oC = aC("toPrimitive");
        Ff.exports = function(e, t) {
            if (!Mf(e) || qf(e)) return e;
            var r = iC(e, oC),
                i;
            if (r) {
                if (t === void 0 && (t = "default"), i = rC(r, e, t), !Mf(i) || qf(i)) return i;
                throw sC("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), nC(e, t)
        }
    });
    var Ir = x((AN, Df) => {
        var hC = kf(),
            lC = Kn();
        Df.exports = function(e) {
            var t = hC(e, "string");
            return lC(t) ? t : t + ""
        }
    });
    var vi = x((CN, Rf) => {
        var uC = Y(),
            Of = Fe(),
            Qn = uC.document,
            pC = Of(Qn) && Of(Qn.createElement);
        Rf.exports = function(e) {
            return pC ? Qn.createElement(e) : {}
        }
    });
    var ea = x((TN, Lf) => {
        var fC = Ue(),
            cC = we(),
            dC = vi();
        Lf.exports = !fC && !cC(function() {
            return Object.defineProperty(dC("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var yi = x(Vf => {
        var mC = Ue(),
            vC = Le(),
            yC = Vp(),
            gC = Ar(),
            bC = tt(),
            xC = Ir(),
            SC = Ve(),
            EC = ea(),
            Bf = Object.getOwnPropertyDescriptor;
        Vf.f = mC ? Bf : function(t, r) {
            if (t = bC(t), r = xC(r), EC) try {
                return Bf(t, r)
            } catch {}
            if (SC(t, r)) return gC(!vC(yC.f, t, r), t[r])
        }
    });
    var Ie = x((MN, Gf) => {
        var Nf = Y(),
            PC = Fe(),
            _C = Nf.String,
            wC = Nf.TypeError;
        Gf.exports = function(e) {
            if (PC(e)) return e;
            throw wC(_C(e) + " is not an object")
        }
    });
    var Ne = x(Hf => {
        var AC = Y(),
            CC = Ue(),
            TC = ea(),
            zf = Ie(),
            IC = Ir(),
            MC = AC.TypeError,
            jf = Object.defineProperty;
        Hf.f = CC ? jf : function(t, r, i) {
            if (zf(t), r = IC(r), zf(i), TC) try {
                return jf(t, r, i)
            } catch {}
            if ("get" in i || "set" in i) throw MC("Accessors not supported");
            return "value" in i && (t[r] = i.value), t
        }
    });
    var Mr = x((FN, $f) => {
        var qC = Ue(),
            FC = Ne(),
            kC = Ar();
        $f.exports = qC ? function(e, t, r) {
            return FC.f(e, t, kC(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var qr = x((kN, Wf) => {
        var DC = ce(),
            OC = ge(),
            ta = Tr(),
            RC = DC(Function.toString);
        OC(ta.inspectSource) || (ta.inspectSource = function(e) {
            return RC(e)
        });
        Wf.exports = ta.inspectSource
    });
    var Xf = x((DN, Kf) => {
        var LC = Y(),
            BC = ge(),
            VC = qr(),
            Uf = LC.WeakMap;
        Kf.exports = BC(Uf) && /native code/.test(VC(Uf))
    });
    var gi = x((ON, Jf) => {
        var NC = Zn(),
            GC = mi(),
            Yf = NC("keys");
        Jf.exports = function(e) {
            return Yf[e] || (Yf[e] = GC(e))
        }
    });
    var Fr = x((RN, Zf) => {
        Zf.exports = {}
    });
    var kt = x((LN, ic) => {
        var zC = Xf(),
            rc = Y(),
            ra = ce(),
            jC = Fe(),
            HC = Mr(),
            ia = Ve(),
            na = Tr(),
            $C = gi(),
            WC = Fr(),
            Qf = "Object already initialized",
            sa = rc.TypeError,
            UC = rc.WeakMap,
            bi, kr, xi, KC = function(e) {
                return xi(e) ? kr(e) : bi(e, {})
            },
            XC = function(e) {
                return function(t) {
                    var r;
                    if (!jC(t) || (r = kr(t)).type !== e) throw sa("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        zC || na.state ? (bt = na.state || (na.state = new UC), ec = ra(bt.get), aa = ra(bt.has), tc = ra(bt.set), bi = function(e, t) {
            if (aa(bt, e)) throw new sa(Qf);
            return t.facade = e, tc(bt, e, t), t
        }, kr = function(e) {
            return ec(bt, e) || {}
        }, xi = function(e) {
            return aa(bt, e)
        }) : (Ft = $C("state"), WC[Ft] = !0, bi = function(e, t) {
            if (ia(e, Ft)) throw new sa(Qf);
            return t.facade = e, HC(e, Ft, t), t
        }, kr = function(e) {
            return ia(e, Ft) ? e[Ft] : {}
        }, xi = function(e) {
            return ia(e, Ft)
        });
        var bt, ec, aa, tc, Ft;
        ic.exports = {
            set: bi,
            get: kr,
            has: xi,
            enforce: KC,
            getterFor: XC
        }
    });
    var la = x((BN, ac) => {
        var oa = Ue(),
            YC = Ve(),
            nc = Function.prototype,
            JC = oa && Object.getOwnPropertyDescriptor,
            ha = YC(nc, "name"),
            ZC = ha && function() {}.name === "something",
            QC = ha && (!oa || oa && JC(nc, "name").configurable);
        ac.exports = {
            EXISTS: ha,
            PROPER: ZC,
            CONFIGURABLE: QC
        }
    });
    var ot = x((VN, lc) => {
        var eT = Y(),
            sc = ge(),
            tT = Ve(),
            oc = Mr(),
            rT = di(),
            iT = qr(),
            hc = kt(),
            nT = la().CONFIGURABLE,
            aT = hc.get,
            sT = hc.enforce,
            oT = String(String).split("String");
        (lc.exports = function(e, t, r, i) {
            var n = i ? !!i.unsafe : !1,
                a = i ? !!i.enumerable : !1,
                o = i ? !!i.noTargetGet : !1,
                s = i && i.name !== void 0 ? i.name : t,
                u;
            if (sc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!tT(r, "name") || nT && r.name !== s) && oc(r, "name", s), u = sT(r), u.source || (u.source = oT.join(typeof s == "string" ? s : ""))), e === eT) {
                a ? e[t] = r : rT(t, r);
                return
            } else n ? !o && e[t] && (a = !0) : delete e[t];
            a ? e[t] = r : oc(e, t, r)
        })(Function.prototype, "toString", function() {
            return sc(this) && aT(this).source || iT(this)
        })
    });
    var xt = x((NN, uc) => {
        var hT = Math.ceil,
            lT = Math.floor;
        uc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? lT : hT)(t)
        }
    });
    var er = x((GN, pc) => {
        var uT = xt(),
            pT = Math.max,
            fT = Math.min;
        pc.exports = function(e, t) {
            var r = uT(e);
            return r < 0 ? pT(r + t, 0) : fT(r, t)
        }
    });
    var cc = x((zN, fc) => {
        var cT = xt(),
            dT = Math.min;
        fc.exports = function(e) {
            return e > 0 ? dT(cT(e), 9007199254740991) : 0
        }
    });
    var ve = x((jN, dc) => {
        var mT = cc();
        dc.exports = function(e) {
            return mT(e.length)
        }
    });
    var Si = x((HN, vc) => {
        var vT = tt(),
            yT = er(),
            gT = ve(),
            mc = function(e) {
                return function(t, r, i) {
                    var n = vT(t),
                        a = gT(n),
                        o = yT(i, a),
                        s;
                    if (e && r != r) {
                        for (; a > o;)
                            if (s = n[o++], s != s) return !0
                    } else
                        for (; a > o; o++)
                            if ((e || o in n) && n[o] === r) return e || o || 0;
                    return !e && -1
                }
            };
        vc.exports = {
            includes: mc(!0),
            indexOf: mc(!1)
        }
    });
    var pa = x(($N, gc) => {
        var bT = ce(),
            ua = Ve(),
            xT = tt(),
            ST = Si().indexOf,
            ET = Fr(),
            yc = bT([].push);
        gc.exports = function(e, t) {
            var r = xT(e),
                i = 0,
                n = [],
                a;
            for (a in r) !ua(ET, a) && ua(r, a) && yc(n, a);
            for (; t.length > i;) ua(r, a = t[i++]) && (~ST(n, a) || yc(n, a));
            return n
        }
    });
    var Ei = x((WN, bc) => {
        bc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var Pi = x(xc => {
        var PT = pa(),
            _T = Ei(),
            wT = _T.concat("length", "prototype");
        xc.f = Object.getOwnPropertyNames || function(t) {
            return PT(t, wT)
        }
    });
    var Ec = x(Sc => {
        Sc.f = Object.getOwnPropertySymbols
    });
    var _c = x((XN, Pc) => {
        var AT = Be(),
            CT = ce(),
            TT = Pi(),
            IT = Ec(),
            MT = Ie(),
            qT = CT([].concat);
        Pc.exports = AT("Reflect", "ownKeys") || function(t) {
            var r = TT.f(MT(t)),
                i = IT.f;
            return i ? qT(r, i(t)) : r
        }
    });
    var Ac = x((YN, wc) => {
        var FT = Ve(),
            kT = _c(),
            DT = yi(),
            OT = Ne();
        wc.exports = function(e, t) {
            for (var r = kT(t), i = OT.f, n = DT.f, a = 0; a < r.length; a++) {
                var o = r[a];
                FT(e, o) || i(e, o, n(t, o))
            }
        }
    });
    var _i = x((JN, Cc) => {
        var RT = we(),
            LT = ge(),
            BT = /#|\.prototype\./,
            Dr = function(e, t) {
                var r = NT[VT(e)];
                return r == zT ? !0 : r == GT ? !1 : LT(t) ? RT(t) : !!t
            },
            VT = Dr.normalize = function(e) {
                return String(e).replace(BT, ".").toLowerCase()
            },
            NT = Dr.data = {},
            GT = Dr.NATIVE = "N",
            zT = Dr.POLYFILL = "P";
        Cc.exports = Dr
    });
    var ee = x((ZN, Tc) => {
        var fa = Y(),
            jT = yi().f,
            HT = Mr(),
            $T = ot(),
            WT = di(),
            UT = Ac(),
            KT = _i();
        Tc.exports = function(e, t) {
            var r = e.target,
                i = e.global,
                n = e.stat,
                a, o, s, u, d, h;
            if (i ? o = fa : n ? o = fa[r] || WT(r, {}) : o = (fa[r] || {}).prototype, o)
                for (s in t) {
                    if (d = t[s], e.noTargetGet ? (h = jT(o, s), u = h && h.value) : u = o[s], a = KT(i ? s : r + (n ? "." : "#") + s, e.forced), !a && u !== void 0) {
                        if (typeof d == typeof u) continue;
                        UT(d, u)
                    }(e.sham || u && u.sham) && HT(d, "sham", !0), $T(o, s, d, e)
                }
        }
    });
    var Ye = x((QN, qc) => {
        var Ic = ce(),
            XT = Xe(),
            Mc = Ic(Ic.bind);
        qc.exports = function(e, t) {
            return XT(e), t === void 0 ? e : Mc ? Mc(e, t) : function() {
                return e.apply(t, arguments)
            }
        }
    });
    var ca = x((eG, kc) => {
        var YT = Le(),
            Fc = Ie(),
            JT = gt();
        kc.exports = function(e, t, r) {
            var i, n;
            Fc(e);
            try {
                if (i = JT(e, "return"), !i) {
                    if (t === "throw") throw r;
                    return r
                }
                i = YT(i, e)
            } catch (a) {
                n = !0, i = a
            }
            if (t === "throw") throw r;
            if (n) throw i;
            return Fc(i), r
        }
    });
    var Oc = x((tG, Dc) => {
        var ZT = Ie(),
            QT = ca();
        Dc.exports = function(e, t, r, i) {
            try {
                return i ? t(ZT(r)[0], r[1]) : t(r)
            } catch (n) {
                QT(e, "throw", n)
            }
        }
    });
    var tr = x((rG, Rc) => {
        Rc.exports = {}
    });
    var da = x((iG, Lc) => {
        var eI = be(),
            tI = tr(),
            rI = eI("iterator"),
            iI = Array.prototype;
        Lc.exports = function(e) {
            return e !== void 0 && (tI.Array === e || iI[rI] === e)
        }
    });
    var wi = x((nG, Vc) => {
        var nI = be(),
            aI = nI("toStringTag"),
            Bc = {};
        Bc[aI] = "z";
        Vc.exports = String(Bc) === "[object z]"
    });
    var Or = x((aG, Nc) => {
        var sI = Y(),
            oI = wi(),
            hI = ge(),
            Ai = Jt(),
            lI = be(),
            uI = lI("toStringTag"),
            pI = sI.Object,
            fI = Ai(function() {
                return arguments
            }()) == "Arguments",
            cI = function(e, t) {
                try {
                    return e[t]
                } catch {}
            };
        Nc.exports = oI ? Ai : function(e) {
            var t, r, i;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = cI(t = pI(e), uI)) == "string" ? r : fI ? Ai(t) : (i = Ai(t)) == "Object" && hI(t.callee) ? "Arguments" : i
        }
    });
    var Dt = x((sG, Hc) => {
        var dI = ce(),
            mI = we(),
            Gc = ge(),
            vI = Or(),
            yI = Be(),
            gI = qr(),
            zc = function() {},
            bI = [],
            jc = yI("Reflect", "construct"),
            ma = /^\s*(?:class|function)\b/,
            xI = dI(ma.exec),
            SI = !ma.exec(zc),
            Rr = function(e) {
                if (!Gc(e)) return !1;
                try {
                    return jc(zc, bI, e), !0
                } catch {
                    return !1
                }
            },
            EI = function(e) {
                if (!Gc(e)) return !1;
                switch (vI(e)) {
                    case "AsyncFunction":
                    case "GeneratorFunction":
                    case "AsyncGeneratorFunction":
                        return !1
                }
                return SI || !!xI(ma, gI(e))
            };
        Hc.exports = !jc || mI(function() {
            var e;
            return Rr(Rr.call) || !Rr(Object) || !Rr(function() {
                e = !0
            }) || e
        }) ? EI : Rr
    });
    var rr = x((oG, $c) => {
        "use strict";
        var PI = Ir(),
            _I = Ne(),
            wI = Ar();
        $c.exports = function(e, t, r) {
            var i = PI(t);
            i in e ? _I.f(e, i, wI(0, r)) : e[i] = r
        }
    });
    var Lr = x((hG, Uc) => {
        var AI = Or(),
            Wc = gt(),
            CI = tr(),
            TI = be(),
            II = TI("iterator");
        Uc.exports = function(e) {
            if (e != null) return Wc(e, II) || Wc(e, "@@iterator") || CI[AI(e)]
        }
    });
    var Br = x((lG, Kc) => {
        var MI = Y(),
            qI = Le(),
            FI = Xe(),
            kI = Ie(),
            DI = Cr(),
            OI = Lr(),
            RI = MI.TypeError;
        Kc.exports = function(e, t) {
            var r = arguments.length < 2 ? OI(e) : t;
            if (FI(r)) return kI(qI(r, e));
            throw RI(DI(e) + " is not iterable")
        }
    });
    var Zc = x((uG, Jc) => {
        "use strict";
        var LI = Y(),
            BI = Ye(),
            VI = Le(),
            NI = xe(),
            GI = Oc(),
            zI = da(),
            jI = Dt(),
            HI = ve(),
            Xc = rr(),
            $I = Br(),
            WI = Lr(),
            Yc = LI.Array;
        Jc.exports = function(t) {
            var r = NI(t),
                i = jI(this),
                n = arguments.length,
                a = n > 1 ? arguments[1] : void 0,
                o = a !== void 0;
            o && (a = BI(a, n > 2 ? arguments[2] : void 0));
            var s = WI(r),
                u = 0,
                d, h, f, m, c, p;
            if (s && !(this == Yc && zI(s)))
                for (m = $I(r, s), c = m.next, h = i ? new this : []; !(f = VI(c, m)).done; u++) p = o ? GI(m, a, [f.value, u], !0) : f.value, Xc(h, u, p);
            else
                for (d = HI(r), h = i ? new this(d) : Yc(d); d > u; u++) p = o ? a(r[u], u) : r[u], Xc(h, u, p);
            return h.length = u, h
        }
    });
    var Ci = x((pG, rd) => {
        var UI = be(),
            ed = UI("iterator"),
            td = !1;
        try {
            Qc = 0, va = {
                next: function() {
                    return {
                        done: !!Qc++
                    }
                },
                return: function() {
                    td = !0
                }
            }, va[ed] = function() {
                return this
            }, Array.from(va, function() {
                throw 2
            })
        } catch {}
        var Qc, va;
        rd.exports = function(e, t) {
            if (!t && !td) return !1;
            var r = !1;
            try {
                var i = {};
                i[ed] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, e(i)
            } catch {}
            return r
        }
    });
    var id = x(() => {
        var KI = ee(),
            XI = Zc(),
            YI = Ci(),
            JI = !YI(function(e) {
                Array.from(e)
            });
        KI({
            target: "Array",
            stat: !0,
            forced: JI
        }, {
            from: XI
        })
    });
    var St = x((dG, nd) => {
        var ZI = Jt();
        nd.exports = Array.isArray || function(t) {
            return ZI(t) == "Array"
        }
    });
    var ad = x(() => {
        var QI = ee(),
            eM = St();
        QI({
            target: "Array",
            stat: !0
        }, {
            isArray: eM
        })
    });
    var od = x(() => {
        "use strict";
        var tM = ee(),
            rM = Y(),
            iM = we(),
            nM = Dt(),
            aM = rr(),
            sd = rM.Array,
            sM = iM(function() {
                function e() {}
                return !(sd.of.call(e) instanceof e)
            });
        tM({
            target: "Array",
            stat: !0,
            forced: sM
        }, {
            of: function() {
                for (var t = 0, r = arguments.length, i = new(nM(this) ? this : sd)(r); r > t;) aM(i, t, arguments[t++]);
                return i.length = r, i
            }
        })
    });
    var ld = x((bG, hd) => {
        var oM = pa(),
            hM = Ei();
        hd.exports = Object.keys || function(t) {
            return oM(t, hM)
        }
    });
    var pd = x((xG, ud) => {
        var lM = Ue(),
            uM = Ne(),
            pM = Ie(),
            fM = tt(),
            cM = ld();
        ud.exports = lM ? Object.defineProperties : function(t, r) {
            pM(t);
            for (var i = fM(r), n = cM(r), a = n.length, o = 0, s; a > o;) uM.f(t, s = n[o++], i[s]);
            return t
        }
    });
    var ya = x((SG, fd) => {
        var dM = Be();
        fd.exports = dM("document", "documentElement")
    });
    var Et = x((EG, bd) => {
        var mM = Ie(),
            vM = pd(),
            cd = Ei(),
            yM = Fr(),
            gM = ya(),
            bM = vi(),
            xM = gi(),
            dd = ">",
            md = "<",
            ba = "prototype",
            xa = "script",
            yd = xM("IE_PROTO"),
            ga = function() {},
            gd = function(e) {
                return md + xa + dd + e + md + "/" + xa + dd
            },
            vd = function(e) {
                e.write(gd("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            SM = function() {
                var e = bM("iframe"),
                    t = "java" + xa + ":",
                    r;
                return e.style.display = "none", gM.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(gd("document.F=Object")), r.close(), r.F
            },
            Ti, Ii = function() {
                try {
                    Ti = new ActiveXObject("htmlfile")
                } catch {}
                Ii = typeof document < "u" ? document.domain && Ti ? vd(Ti) : SM() : vd(Ti);
                for (var e = cd.length; e--;) delete Ii[ba][cd[e]];
                return Ii()
            };
        yM[yd] = !0;
        bd.exports = Object.create || function(t, r) {
            var i;
            return t !== null ? (ga[ba] = mM(t), i = new ga, ga[ba] = null, i[yd] = t) : i = Ii(), r === void 0 ? i : vM(i, r)
        }
    });
    var Pe = x((PG, xd) => {
        var EM = be(),
            PM = Et(),
            _M = Ne(),
            Sa = EM("unscopables"),
            Ea = Array.prototype;
        Ea[Sa] == null && _M.f(Ea, Sa, {
            configurable: !0,
            value: PM(null)
        });
        xd.exports = function(e) {
            Ea[Sa][e] = !0
        }
    });
    var Pa = x(() => {
        "use strict";
        var wM = ee(),
            AM = xe(),
            CM = ve(),
            TM = xt(),
            IM = Pe();
        wM({
            target: "Array",
            proto: !0
        }, {
            at: function(t) {
                var r = AM(this),
                    i = CM(r),
                    n = TM(t),
                    a = n >= 0 ? n : i + n;
                return a < 0 || a >= i ? void 0 : r[a]
            }
        });
        IM("at")
    });
    var _a = x((AG, Pd) => {
        var MM = Y(),
            Sd = St(),
            qM = Dt(),
            FM = Fe(),
            kM = be(),
            DM = kM("species"),
            Ed = MM.Array;
        Pd.exports = function(e) {
            var t;
            return Sd(e) && (t = e.constructor, qM(t) && (t === Ed || Sd(t.prototype)) ? t = void 0 : FM(t) && (t = t[DM], t === null && (t = void 0))), t === void 0 ? Ed : t
        }
    });
    var Ot = x((CG, _d) => {
        var OM = _a();
        _d.exports = function(e, t) {
            return new(OM(e))(t === 0 ? 0 : t)
        }
    });
    var ir = x((TG, wd) => {
        var RM = we(),
            LM = be(),
            BM = yt(),
            VM = LM("species");
        wd.exports = function(e) {
            return BM >= 51 || !RM(function() {
                var t = [],
                    r = t.constructor = {};
                return r[VM] = function() {
                    return {
                        foo: 1
                    }
                }, t[e](Boolean).foo !== 1
            })
        }
    });
    var qd = x(() => {
        "use strict";
        var NM = ee(),
            GM = Y(),
            zM = we(),
            jM = St(),
            HM = Fe(),
            $M = xe(),
            WM = ve(),
            Ad = rr(),
            UM = Ot(),
            KM = ir(),
            XM = be(),
            YM = yt(),
            Md = XM("isConcatSpreadable"),
            Cd = 9007199254740991,
            Td = "Maximum allowed index exceeded",
            Id = GM.TypeError,
            JM = YM >= 51 || !zM(function() {
                var e = [];
                return e[Md] = !1, e.concat()[0] !== e
            }),
            ZM = KM("concat"),
            QM = function(e) {
                if (!HM(e)) return !1;
                var t = e[Md];
                return t !== void 0 ? !!t : jM(e)
            },
            eq = !JM || !ZM;
        NM({
            target: "Array",
            proto: !0,
            forced: eq
        }, {
            concat: function(t) {
                var r = $M(this),
                    i = UM(r, 0),
                    n = 0,
                    a, o, s, u, d;
                for (a = -1, s = arguments.length; a < s; a++)
                    if (d = a === -1 ? r : arguments[a], QM(d)) {
                        if (u = WM(d), n + u > Cd) throw Id(Td);
                        for (o = 0; o < u; o++, n++) o in d && Ad(i, n, d[o])
                    } else {
                        if (n >= Cd) throw Id(Td);
                        Ad(i, n++, d)
                    } return i.length = n, i
            }
        })
    });
    var kd = x((qG, Fd) => {
        "use strict";
        var tq = xe(),
            wa = er(),
            rq = ve(),
            iq = Math.min;
        Fd.exports = [].copyWithin || function(t, r) {
            var i = tq(this),
                n = rq(i),
                a = wa(t, n),
                o = wa(r, n),
                s = arguments.length > 2 ? arguments[2] : void 0,
                u = iq((s === void 0 ? n : wa(s, n)) - o, n - a),
                d = 1;
            for (o < a && a < o + u && (d = -1, o += u - 1, a += u - 1); u-- > 0;) o in i ? i[a] = i[o] : delete i[a], a += d, o += d;
            return i
        }
    });
    var Dd = x(() => {
        var nq = ee(),
            aq = kd(),
            sq = Pe();
        nq({
            target: "Array",
            proto: !0
        }, {
            copyWithin: aq
        });
        sq("copyWithin")
    });
    var rt = x((DG, Rd) => {
        var oq = Ye(),
            hq = ce(),
            lq = Mt(),
            uq = xe(),
            pq = ve(),
            fq = Ot(),
            Od = hq([].push),
            Pt = function(e) {
                var t = e == 1,
                    r = e == 2,
                    i = e == 3,
                    n = e == 4,
                    a = e == 6,
                    o = e == 7,
                    s = e == 5 || a;
                return function(u, d, h, f) {
                    for (var m = uq(u), c = lq(m), p = oq(d, h), v = pq(c), l = 0, y = f || fq, g = t ? y(u, v) : r || o ? y(u, 0) : void 0, b, S; v > l; l++)
                        if ((s || l in c) && (b = c[l], S = p(b, l, m), e))
                            if (t) g[l] = S;
                            else if (S) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return b;
                        case 6:
                            return l;
                        case 2:
                            Od(g, b)
                    } else switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            Od(g, b)
                    }
                    return a ? -1 : i || n ? n : g
                }
            };
        Rd.exports = {
            forEach: Pt(0),
            map: Pt(1),
            filter: Pt(2),
            some: Pt(3),
            every: Pt(4),
            find: Pt(5),
            findIndex: Pt(6),
            filterReject: Pt(7)
        }
    });
    var it = x((OG, Ld) => {
        "use strict";
        var cq = we();
        Ld.exports = function(e, t) {
            var r = [][e];
            return !!r && cq(function() {
                r.call(null, t || function() {
                    throw 1
                }, 1)
            })
        }
    });
    var Bd = x(() => {
        "use strict";
        var dq = ee(),
            mq = rt().every,
            vq = it(),
            yq = vq("every");
        dq({
            target: "Array",
            proto: !0,
            forced: !yq
        }, {
            every: function(t) {
                return mq(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Gd = x((BG, Nd) => {
        "use strict";
        var gq = xe(),
            Vd = er(),
            bq = ve();
        Nd.exports = function(t) {
            for (var r = gq(this), i = bq(r), n = arguments.length, a = Vd(n > 1 ? arguments[1] : void 0, i), o = n > 2 ? arguments[2] : void 0, s = o === void 0 ? i : Vd(o, i); s > a;) r[a++] = t;
            return r
        }
    });
    var zd = x(() => {
        var xq = ee(),
            Sq = Gd(),
            Eq = Pe();
        xq({
            target: "Array",
            proto: !0
        }, {
            fill: Sq
        });
        Eq("fill")
    });
    var jd = x(() => {
        "use strict";
        var Pq = ee(),
            _q = rt().filter,
            wq = ir(),
            Aq = wq("filter");
        Pq({
            target: "Array",
            proto: !0,
            forced: !Aq
        }, {
            filter: function(t) {
                return _q(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var $d = x(() => {
        "use strict";
        var Cq = ee(),
            Tq = rt().find,
            Iq = Pe(),
            Aa = "find",
            Hd = !0;
        Aa in [] && Array(1)[Aa](function() {
            Hd = !1
        });
        Cq({
            target: "Array",
            proto: !0,
            forced: Hd
        }, {
            find: function(t) {
                return Tq(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Iq(Aa)
    });
    var Ud = x(() => {
        "use strict";
        var Mq = ee(),
            qq = rt().findIndex,
            Fq = Pe(),
            Ca = "findIndex",
            Wd = !0;
        Ca in [] && Array(1)[Ca](function() {
            Wd = !1
        });
        Mq({
            target: "Array",
            proto: !0,
            forced: Wd
        }, {
            findIndex: function(t) {
                return qq(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Fq(Ca)
    });
    var Ta = x((UG, Xd) => {
        "use strict";
        var kq = Y(),
            Dq = St(),
            Oq = ve(),
            Rq = Ye(),
            Lq = kq.TypeError,
            Kd = function(e, t, r, i, n, a, o, s) {
                for (var u = n, d = 0, h = o ? Rq(o, s) : !1, f, m; d < i;) {
                    if (d in r) {
                        if (f = h ? h(r[d], d, t) : r[d], a > 0 && Dq(f)) m = Oq(f), u = Kd(e, t, f, m, u, a - 1) - 1;
                        else {
                            if (u >= 9007199254740991) throw Lq("Exceed the acceptable array length");
                            e[u] = f
                        }
                        u++
                    }
                    d++
                }
                return u
            };
        Xd.exports = Kd
    });
    var Yd = x(() => {
        "use strict";
        var Bq = ee(),
            Vq = Ta(),
            Nq = xe(),
            Gq = ve(),
            zq = xt(),
            jq = Ot();
        Bq({
            target: "Array",
            proto: !0
        }, {
            flat: function() {
                var t = arguments.length ? arguments[0] : void 0,
                    r = Nq(this),
                    i = Gq(r),
                    n = jq(r, 0);
                return n.length = Vq(n, r, r, i, 0, t === void 0 ? 1 : zq(t)), n
            }
        })
    });
    var Jd = x(() => {
        "use strict";
        var Hq = ee(),
            $q = Ta(),
            Wq = Xe(),
            Uq = xe(),
            Kq = ve(),
            Xq = Ot();
        Hq({
            target: "Array",
            proto: !0
        }, {
            flatMap: function(t) {
                var r = Uq(this),
                    i = Kq(r),
                    n;
                return Wq(t), n = Xq(r, 0), n.length = $q(n, r, r, i, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), n
            }
        })
    });
    var Qd = x((ZG, Zd) => {
        "use strict";
        var Yq = rt().forEach,
            Jq = it(),
            Zq = Jq("forEach");
        Zd.exports = Zq ? [].forEach : function(t) {
            return Yq(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var tm = x(() => {
        "use strict";
        var Qq = ee(),
            em = Qd();
        Qq({
            target: "Array",
            proto: !0,
            forced: [].forEach != em
        }, {
            forEach: em
        })
    });
    var rm = x(() => {
        "use strict";
        var eF = ee(),
            tF = Si().includes,
            rF = Pe();
        eF({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return tF(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        rF("includes")
    });
    var nm = x(() => {
        "use strict";
        var iF = ee(),
            nF = ce(),
            aF = Si().indexOf,
            sF = it(),
            Ia = nF([].indexOf),
            im = !!Ia && 1 / Ia([1], 1, -0) < 0,
            oF = sF("indexOf");
        iF({
            target: "Array",
            proto: !0,
            forced: im || !oF
        }, {
            indexOf: function(t) {
                var r = arguments.length > 1 ? arguments[1] : void 0;
                return im ? Ia(this, t, r) || 0 : aF(this, t, r)
            }
        })
    });
    var sm = x((az, am) => {
        var hF = we();
        am.exports = !hF(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    });
    var Mi = x((sz, hm) => {
        var lF = Y(),
            uF = Ve(),
            pF = ge(),
            fF = xe(),
            cF = gi(),
            dF = sm(),
            om = cF("IE_PROTO"),
            Ma = lF.Object,
            mF = Ma.prototype;
        hm.exports = dF ? Ma.getPrototypeOf : function(e) {
            var t = fF(e);
            if (uF(t, om)) return t[om];
            var r = t.constructor;
            return pF(r) && t instanceof r ? r.prototype : t instanceof Ma ? mF : null
        }
    });
    var Da = x((oz, pm) => {
        "use strict";
        var vF = we(),
            yF = ge(),
            gF = Et(),
            lm = Mi(),
            bF = ot(),
            xF = be(),
            SF = Zt(),
            ka = xF("iterator"),
            um = !1,
            ht, qa, Fa;
        [].keys && (Fa = [].keys(), "next" in Fa ? (qa = lm(lm(Fa)), qa !== Object.prototype && (ht = qa)) : um = !0);
        var EF = ht == null || vF(function() {
            var e = {};
            return ht[ka].call(e) !== e
        });
        EF ? ht = {} : SF && (ht = gF(ht));
        yF(ht[ka]) || bF(ht, ka, function() {
            return this
        });
        pm.exports = {
            IteratorPrototype: ht,
            BUGGY_SAFARI_ITERATORS: um
        }
    });
    var Vr = x((hz, cm) => {
        var PF = Ne().f,
            _F = Ve(),
            wF = be(),
            fm = wF("toStringTag");
        cm.exports = function(e, t, r) {
            e && !_F(e = r ? e : e.prototype, fm) && PF(e, fm, {
                configurable: !0,
                value: t
            })
        }
    });
    var mm = x((lz, dm) => {
        "use strict";
        var AF = Da().IteratorPrototype,
            CF = Et(),
            TF = Ar(),
            IF = Vr(),
            MF = tr(),
            qF = function() {
                return this
            };
        dm.exports = function(e, t, r) {
            var i = t + " Iterator";
            return e.prototype = CF(AF, {
                next: TF(1, r)
            }), IF(e, i, !1, !0), MF[i] = qF, e
        }
    });
    var gm = x((uz, ym) => {
        var vm = Y(),
            FF = ge(),
            kF = vm.String,
            DF = vm.TypeError;
        ym.exports = function(e) {
            if (typeof e == "object" || FF(e)) return e;
            throw DF("Can't set " + kF(e) + " as a prototype")
        }
    });
    var qi = x((pz, bm) => {
        var OF = ce(),
            RF = Ie(),
            LF = gm();
        bm.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e = !1,
                t = {},
                r;
            try {
                r = OF(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), r(t, []), e = t instanceof Array
            } catch {}
            return function(n, a) {
                return RF(n), LF(a), e ? r(n, a) : n.__proto__ = a, n
            }
        }() : void 0)
    });
    var Di = x((fz, Im) => {
        "use strict";
        var BF = ee(),
            VF = Le(),
            Fi = Zt(),
            Cm = la(),
            NF = ge(),
            GF = mm(),
            xm = Mi(),
            Sm = qi(),
            zF = Vr(),
            jF = Mr(),
            Oa = ot(),
            HF = be(),
            Em = tr(),
            Tm = Da(),
            $F = Cm.PROPER,
            WF = Cm.CONFIGURABLE,
            Pm = Tm.IteratorPrototype,
            ki = Tm.BUGGY_SAFARI_ITERATORS,
            Nr = HF("iterator"),
            _m = "keys",
            Gr = "values",
            wm = "entries",
            Am = function() {
                return this
            };
        Im.exports = function(e, t, r, i, n, a, o) {
            GF(r, t, i);
            var s = function(y) {
                    if (y === n && m) return m;
                    if (!ki && y in h) return h[y];
                    switch (y) {
                        case _m:
                            return function() {
                                return new r(this, y)
                            };
                        case Gr:
                            return function() {
                                return new r(this, y)
                            };
                        case wm:
                            return function() {
                                return new r(this, y)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                u = t + " Iterator",
                d = !1,
                h = e.prototype,
                f = h[Nr] || h["@@iterator"] || n && h[n],
                m = !ki && f || s(n),
                c = t == "Array" && h.entries || f,
                p, v, l;
            if (c && (p = xm(c.call(new e)), p !== Object.prototype && p.next && (!Fi && xm(p) !== Pm && (Sm ? Sm(p, Pm) : NF(p[Nr]) || Oa(p, Nr, Am)), zF(p, u, !0, !0), Fi && (Em[u] = Am))), $F && n == Gr && f && f.name !== Gr && (!Fi && WF ? jF(h, "name", Gr) : (d = !0, m = function() {
                    return VF(f, this)
                })), n)
                if (v = {
                        values: s(Gr),
                        keys: a ? m : s(_m),
                        entries: s(wm)
                    }, o)
                    for (l in v)(ki || d || !(l in h)) && Oa(h, l, v[l]);
                else BF({
                    target: t,
                    proto: !0,
                    forced: ki || d
                }, v);
            return (!Fi || o) && h[Nr] !== m && Oa(h, Nr, m, {
                name: n
            }), Em[t] = m, v
        }
    });
    var Dm = x((cz, km) => {
        "use strict";
        var UF = tt(),
            Ra = Pe(),
            Mm = tr(),
            qm = kt(),
            KF = Di(),
            Fm = "Array Iterator",
            XF = qm.set,
            YF = qm.getterFor(Fm);
        km.exports = KF(Array, "Array", function(e, t) {
            XF(this, {
                type: Fm,
                target: UF(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = YF(this),
                t = e.target,
                r = e.kind,
                i = e.index++;
            return !t || i >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : r == "keys" ? {
                value: i,
                done: !1
            } : r == "values" ? {
                value: t[i],
                done: !1
            } : {
                value: [i, t[i]],
                done: !1
            }
        }, "values");
        Mm.Arguments = Mm.Array;
        Ra("keys");
        Ra("values");
        Ra("entries")
    });
    var Om = x(() => {
        "use strict";
        var JF = ee(),
            ZF = ce(),
            QF = Mt(),
            ek = tt(),
            tk = it(),
            rk = ZF([].join),
            ik = QF != Object,
            nk = tk("join", ",");
        JF({
            target: "Array",
            proto: !0,
            forced: ik || !nk
        }, {
            join: function(t) {
                return rk(ek(this), t === void 0 ? "," : t)
            }
        })
    });
    var Oi = x((vz, Bm) => {
        var La = Function.prototype,
            Rm = La.apply,
            ak = La.bind,
            Lm = La.call;
        Bm.exports = typeof Reflect == "object" && Reflect.apply || (ak ? Lm.bind(Rm) : function() {
            return Lm.apply(Rm, arguments)
        })
    });
    var Gm = x((yz, Nm) => {
        "use strict";
        var sk = Oi(),
            ok = tt(),
            hk = xt(),
            lk = ve(),
            uk = it(),
            pk = Math.min,
            Ba = [].lastIndexOf,
            Vm = !!Ba && 1 / [1].lastIndexOf(1, -0) < 0,
            fk = uk("lastIndexOf"),
            ck = Vm || !fk;
        Nm.exports = ck ? function(t) {
            if (Vm) return sk(Ba, this, arguments) || 0;
            var r = ok(this),
                i = lk(r),
                n = i - 1;
            for (arguments.length > 1 && (n = pk(n, hk(arguments[1]))), n < 0 && (n = i + n); n >= 0; n--)
                if (n in r && r[n] === t) return n || 0;
            return -1
        } : Ba
    });
    var jm = x(() => {
        var dk = ee(),
            zm = Gm();
        dk({
            target: "Array",
            proto: !0,
            forced: zm !== [].lastIndexOf
        }, {
            lastIndexOf: zm
        })
    });
    var Hm = x(() => {
        "use strict";
        var mk = ee(),
            vk = rt().map,
            yk = ir(),
            gk = yk("map");
        mk({
            target: "Array",
            proto: !0,
            forced: !gk
        }, {
            map: function(t) {
                return vk(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Va = x((Ez, Wm) => {
        var bk = Y(),
            xk = Xe(),
            Sk = xe(),
            Ek = Mt(),
            Pk = ve(),
            _k = bk.TypeError,
            $m = function(e) {
                return function(t, r, i, n) {
                    xk(r);
                    var a = Sk(t),
                        o = Ek(a),
                        s = Pk(a),
                        u = e ? s - 1 : 0,
                        d = e ? -1 : 1;
                    if (i < 2)
                        for (;;) {
                            if (u in o) {
                                n = o[u], u += d;
                                break
                            }
                            if (u += d, e ? u < 0 : s <= u) throw _k("Reduce of empty array with no initial value")
                        }
                    for (; e ? u >= 0 : s > u; u += d) u in o && (n = r(n, o[u], u, a));
                    return n
                }
            };
        Wm.exports = {
            left: $m(!1),
            right: $m(!0)
        }
    });
    var nr = x((Pz, Um) => {
        var wk = Jt(),
            Ak = Y();
        Um.exports = wk(Ak.process) == "process"
    });
    var Xm = x(() => {
        "use strict";
        var Ck = ee(),
            Tk = Va().left,
            Ik = it(),
            Km = yt(),
            Mk = nr(),
            qk = Ik("reduce"),
            Fk = !Mk && Km > 79 && Km < 83;
        Ck({
            target: "Array",
            proto: !0,
            forced: !qk || Fk
        }, {
            reduce: function(t) {
                var r = arguments.length;
                return Tk(this, t, r, r > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Jm = x(() => {
        "use strict";
        var kk = ee(),
            Dk = Va().right,
            Ok = it(),
            Ym = yt(),
            Rk = nr(),
            Lk = Ok("reduceRight"),
            Bk = !Rk && Ym > 79 && Ym < 83;
        kk({
            target: "Array",
            proto: !0,
            forced: !Lk || Bk
        }, {
            reduceRight: function(t) {
                return Dk(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Qm = x(() => {
        "use strict";
        var Vk = ee(),
            Nk = ce(),
            Gk = St(),
            zk = Nk([].reverse),
            Zm = [1, 2];
        Vk({
            target: "Array",
            proto: !0,
            forced: String(Zm) === String(Zm.reverse())
        }, {
            reverse: function() {
                return Gk(this) && (this.length = this.length), zk(this)
            }
        })
    });
    var zr = x((Mz, ev) => {
        var jk = ce();
        ev.exports = jk([].slice)
    });
    var iv = x(() => {
        "use strict";
        var Hk = ee(),
            $k = Y(),
            tv = St(),
            Wk = Dt(),
            Uk = Fe(),
            rv = er(),
            Kk = ve(),
            Xk = tt(),
            Yk = rr(),
            Jk = be(),
            Zk = ir(),
            Qk = zr(),
            eD = Zk("slice"),
            tD = Jk("species"),
            Na = $k.Array,
            rD = Math.max;
        Hk({
            target: "Array",
            proto: !0,
            forced: !eD
        }, {
            slice: function(t, r) {
                var i = Xk(this),
                    n = Kk(i),
                    a = rv(t, n),
                    o = rv(r === void 0 ? n : r, n),
                    s, u, d;
                if (tv(i) && (s = i.constructor, Wk(s) && (s === Na || tv(s.prototype)) ? s = void 0 : Uk(s) && (s = s[tD], s === null && (s = void 0)), s === Na || s === void 0)) return Qk(i, a, o);
                for (u = new(s === void 0 ? Na : s)(rD(o - a, 0)), d = 0; a < o; a++, d++) a in i && Yk(u, d, i[a]);
                return u.length = d, u
            }
        })
    });
    var nv = x(() => {
        "use strict";
        var iD = ee(),
            nD = rt().some,
            aD = it(),
            sD = aD("some");
        iD({
            target: "Array",
            proto: !0,
            forced: !sD
        }, {
            some: function(t) {
                return nD(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Ri = x((Oz, av) => {
        var oD = Y(),
            hD = Or(),
            lD = oD.String;
        av.exports = function(e) {
            if (hD(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return lD(e)
        }
    });
    var hv = x((Rz, ov) => {
        var sv = zr(),
            uD = Math.floor,
            Ga = function(e, t) {
                var r = e.length,
                    i = uD(r / 2);
                return r < 8 ? pD(e, t) : fD(e, Ga(sv(e, 0, i), t), Ga(sv(e, i), t), t)
            },
            pD = function(e, t) {
                for (var r = e.length, i = 1, n, a; i < r;) {
                    for (a = i, n = e[i]; a && t(e[a - 1], n) > 0;) e[a] = e[--a];
                    a !== i++ && (e[a] = n)
                }
                return e
            },
            fD = function(e, t, r, i) {
                for (var n = t.length, a = r.length, o = 0, s = 0; o < n || s < a;) e[o + s] = o < n && s < a ? i(t[o], r[s]) <= 0 ? t[o++] : r[s++] : o < n ? t[o++] : r[s++];
                return e
            };
        ov.exports = Ga
    });
    var pv = x((Lz, uv) => {
        var cD = vt(),
            lv = cD.match(/firefox\/(\d+)/i);
        uv.exports = !!lv && +lv[1]
    });
    var cv = x((Bz, fv) => {
        var dD = vt();
        fv.exports = /MSIE|Trident/.test(dD)
    });
    var vv = x((Vz, mv) => {
        var mD = vt(),
            dv = mD.match(/AppleWebKit\/(\d+)\./);
        mv.exports = !!dv && +dv[1]
    });
    var _v = x(() => {
        "use strict";
        var vD = ee(),
            Ev = ce(),
            yD = Xe(),
            gD = xe(),
            bD = ve(),
            yv = Ri(),
            za = we(),
            xD = hv(),
            SD = it(),
            gv = pv(),
            ED = cv(),
            bv = yt(),
            xv = vv(),
            _t = [],
            Sv = Ev(_t.sort),
            PD = Ev(_t.push),
            _D = za(function() {
                _t.sort(void 0)
            }),
            wD = za(function() {
                _t.sort(null)
            }),
            AD = SD("sort"),
            Pv = !za(function() {
                if (bv) return bv < 70;
                if (!(gv && gv > 3)) {
                    if (ED) return !0;
                    if (xv) return xv < 603;
                    var e = "",
                        t, r, i, n;
                    for (t = 65; t < 76; t++) {
                        switch (r = String.fromCharCode(t), t) {
                            case 66:
                            case 69:
                            case 70:
                            case 72:
                                i = 3;
                                break;
                            case 68:
                            case 71:
                                i = 4;
                                break;
                            default:
                                i = 2
                        }
                        for (n = 0; n < 47; n++) _t.push({
                            k: r + n,
                            v: i
                        })
                    }
                    for (_t.sort(function(a, o) {
                            return o.v - a.v
                        }), n = 0; n < _t.length; n++) r = _t[n].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
                    return e !== "DGBEFHACIJK"
                }
            }),
            CD = _D || !wD || !AD || !Pv,
            TD = function(e) {
                return function(t, r) {
                    return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : yv(t) > yv(r) ? 1 : -1
                }
            };
        vD({
            target: "Array",
            proto: !0,
            forced: CD
        }, {
            sort: function(t) {
                t !== void 0 && yD(t);
                var r = gD(this);
                if (Pv) return t === void 0 ? Sv(r) : Sv(r, t);
                var i = [],
                    n = bD(r),
                    a, o;
                for (o = 0; o < n; o++) o in r && PD(i, r[o]);
                for (xD(i, TD(t)), a = i.length, o = 0; o < a;) r[o] = i[o++];
                for (; o < n;) delete r[o++];
                return r
            }
        })
    });
    var Li = x((zz, Av) => {
        "use strict";
        var ID = Be(),
            MD = Ne(),
            qD = be(),
            FD = Ue(),
            wv = qD("species");
        Av.exports = function(e) {
            var t = ID(e),
                r = MD.f;
            FD && t && !t[wv] && r(t, wv, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    });
    var Cv = x(() => {
        var kD = Li();
        kD("Array")
    });
    var Tv = x(() => {
        "use strict";
        var DD = ee(),
            OD = Y(),
            RD = er(),
            LD = xt(),
            BD = ve(),
            VD = xe(),
            ND = Ot(),
            GD = rr(),
            zD = ir(),
            jD = zD("splice"),
            HD = OD.TypeError,
            $D = Math.max,
            WD = Math.min,
            UD = 9007199254740991,
            KD = "Maximum allowed length exceeded";
        DD({
            target: "Array",
            proto: !0,
            forced: !jD
        }, {
            splice: function(t, r) {
                var i = VD(this),
                    n = BD(i),
                    a = RD(t, n),
                    o = arguments.length,
                    s, u, d, h, f, m;
                if (o === 0 ? s = u = 0 : o === 1 ? (s = 0, u = n - a) : (s = o - 2, u = WD($D(LD(r), 0), n - a)), n + s - u > UD) throw HD(KD);
                for (d = ND(i, u), h = 0; h < u; h++) f = a + h, f in i && GD(d, h, i[f]);
                if (d.length = u, s < u) {
                    for (h = a; h < n - u; h++) f = h + u, m = h + s, f in i ? i[m] = i[f] : delete i[m];
                    for (h = n; h > n - u + s; h--) delete i[h - 1]
                } else if (s > u)
                    for (h = n - u; h > a; h--) f = h + u - 1, m = h + s - 1, f in i ? i[m] = i[f] : delete i[m];
                for (h = 0; h < s; h++) i[h + a] = arguments[h + 2];
                return i.length = n - u + s, d
            }
        })
    });
    var Iv = x(() => {
        var XD = Pe();
        XD("flat")
    });
    var Mv = x(() => {
        var YD = Pe();
        YD("flatMap")
    });
    var Fv = x((Jz, qv) => {
        "use strict";
        var JD = wi(),
            ZD = Or();
        qv.exports = JD ? {}.toString : function() {
            return "[object " + ZD(this) + "]"
        }
    });
    var kv = x(() => {
        var QD = wi(),
            e2 = ot(),
            t2 = Fv();
        QD || e2(Object.prototype, "toString", t2, {
            unsafe: !0
        })
    });
    var Lv = x((e5, Rv) => {
        var ja = ce(),
            r2 = xt(),
            i2 = Ri(),
            n2 = pi(),
            a2 = ja("".charAt),
            Dv = ja("".charCodeAt),
            s2 = ja("".slice),
            Ov = function(e) {
                return function(t, r) {
                    var i = i2(n2(t)),
                        n = r2(r),
                        a = i.length,
                        o, s;
                    return n < 0 || n >= a ? e ? "" : void 0 : (o = Dv(i, n), o < 55296 || o > 56319 || n + 1 === a || (s = Dv(i, n + 1)) < 56320 || s > 57343 ? e ? a2(i, n) : o : e ? s2(i, n, n + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
                }
            };
        Rv.exports = {
            codeAt: Ov(!1),
            charAt: Ov(!0)
        }
    });
    var Nv = x(() => {
        "use strict";
        var o2 = Lv().charAt,
            h2 = Ri(),
            Bv = kt(),
            l2 = Di(),
            Vv = "String Iterator",
            u2 = Bv.set,
            p2 = Bv.getterFor(Vv);
        l2(String, "String", function(e) {
            u2(this, {
                type: Vv,
                string: h2(e),
                index: 0
            })
        }, function() {
            var t = p2(this),
                r = t.string,
                i = t.index,
                n;
            return i >= r.length ? {
                value: void 0,
                done: !0
            } : (n = o2(r, i), t.index += n.length, {
                value: n,
                done: !1
            })
        })
    });
    var zv = x((i5, Gv) => {
        var f2 = Y();
        Gv.exports = f2
    });
    var Hv = x((n5, jv) => {
        id();
        ad();
        od();
        Pa();
        qd();
        Dd();
        Bd();
        zd();
        jd();
        $d();
        Ud();
        Yd();
        Jd();
        tm();
        rm();
        nm();
        Dm();
        Om();
        jm();
        Hm();
        Xm();
        Jm();
        Qm();
        iv();
        nv();
        _v();
        Cv();
        Tv();
        Iv();
        Mv();
        kv();
        Nv();
        var c2 = zv();
        jv.exports = c2.Array
    });
    var Wv = x((a5, $v) => {
        var d2 = Hv();
        $v.exports = d2
    });
    var Yv = x((s5, Xv) => {
        var m2 = Jt(),
            v2 = tt(),
            Uv = Pi().f,
            y2 = zr(),
            Kv = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            g2 = function(e) {
                try {
                    return Uv(e)
                } catch {
                    return y2(Kv)
                }
            };
        Xv.exports.f = function(t) {
            return Kv && m2(t) == "Window" ? g2(t) : Uv(v2(t))
        }
    });
    var Zv = x((o5, Jv) => {
        var b2 = we();
        Jv.exports = !b2(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    });
    var Ua = x((h5, ty) => {
        var x2 = ee(),
            S2 = ce(),
            E2 = Fr(),
            P2 = Fe(),
            Ha = Ve(),
            _2 = Ne().f,
            Qv = Pi(),
            w2 = Yv(),
            A2 = mi(),
            C2 = Zv(),
            ey = !1,
            lt = A2("meta"),
            T2 = 0,
            $a = Object.isExtensible || function() {
                return !0
            },
            Wa = function(e) {
                _2(e, lt, {
                    value: {
                        objectID: "O" + T2++,
                        weakData: {}
                    }
                })
            },
            I2 = function(e, t) {
                if (!P2(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
                if (!Ha(e, lt)) {
                    if (!$a(e)) return "F";
                    if (!t) return "E";
                    Wa(e)
                }
                return e[lt].objectID
            },
            M2 = function(e, t) {
                if (!Ha(e, lt)) {
                    if (!$a(e)) return !0;
                    if (!t) return !1;
                    Wa(e)
                }
                return e[lt].weakData
            },
            q2 = function(e) {
                return C2 && ey && $a(e) && !Ha(e, lt) && Wa(e), e
            },
            F2 = function() {
                k2.enable = function() {}, ey = !0;
                var e = Qv.f,
                    t = S2([].splice),
                    r = {};
                r[lt] = 1, e(r).length && (Qv.f = function(i) {
                    for (var n = e(i), a = 0, o = n.length; a < o; a++)
                        if (n[a] === lt) {
                            t(n, a, 1);
                            break
                        } return n
                }, x2({
                    target: "Object",
                    stat: !0,
                    forced: !0
                }, {
                    getOwnPropertyNames: w2.f
                }))
            },
            k2 = ty.exports = {
                enable: F2,
                fastKey: I2,
                getWeakData: M2,
                onFreeze: q2
            };
        E2[lt] = !0
    });
    var Vi = x((l5, ay) => {
        var D2 = Y(),
            O2 = Ye(),
            R2 = Le(),
            L2 = Ie(),
            B2 = Cr(),
            V2 = da(),
            N2 = ve(),
            ry = fi(),
            G2 = Br(),
            z2 = Lr(),
            iy = ca(),
            j2 = D2.TypeError,
            Bi = function(e, t) {
                this.stopped = e, this.result = t
            },
            ny = Bi.prototype;
        ay.exports = function(e, t, r) {
            var i = r && r.that,
                n = !!(r && r.AS_ENTRIES),
                a = !!(r && r.IS_ITERATOR),
                o = !!(r && r.INTERRUPTED),
                s = O2(t, i),
                u, d, h, f, m, c, p, v = function(y) {
                    return u && iy(u, "normal", y), new Bi(!0, y)
                },
                l = function(y) {
                    return n ? (L2(y), o ? s(y[0], y[1], v) : s(y[0], y[1])) : o ? s(y, v) : s(y)
                };
            if (a) u = e;
            else {
                if (d = z2(e), !d) throw j2(B2(e) + " is not iterable");
                if (V2(d)) {
                    for (h = 0, f = N2(e); f > h; h++)
                        if (m = l(e[h]), m && ry(ny, m)) return m;
                    return new Bi(!1)
                }
                u = G2(e, d)
            }
            for (c = u.next; !(p = R2(c, u)).done;) {
                try {
                    m = l(p.value)
                } catch (y) {
                    iy(u, "throw", y)
                }
                if (typeof m == "object" && m && ry(ny, m)) return m
            }
            return new Bi(!1)
        }
    });
    var Ni = x((u5, sy) => {
        var H2 = Y(),
            $2 = fi(),
            W2 = H2.TypeError;
        sy.exports = function(e, t) {
            if ($2(t, e)) return e;
            throw W2("Incorrect invocation")
        }
    });
    var ly = x((p5, hy) => {
        var U2 = ge(),
            K2 = Fe(),
            oy = qi();
        hy.exports = function(e, t, r) {
            var i, n;
            return oy && U2(i = t.constructor) && i !== r && K2(n = i.prototype) && n !== r.prototype && oy(e, n), e
        }
    });
    var fy = x((f5, py) => {
        "use strict";
        var X2 = ee(),
            Y2 = Y(),
            J2 = ce(),
            uy = _i(),
            Z2 = ot(),
            Q2 = Ua(),
            eO = Vi(),
            tO = Ni(),
            rO = ge(),
            Ka = Fe(),
            Xa = we(),
            iO = Ci(),
            nO = Vr(),
            aO = ly();
        py.exports = function(e, t, r) {
            var i = e.indexOf("Map") !== -1,
                n = e.indexOf("Weak") !== -1,
                a = i ? "set" : "add",
                o = Y2[e],
                s = o && o.prototype,
                u = o,
                d = {},
                h = function(y) {
                    var g = J2(s[y]);
                    Z2(s, y, y == "add" ? function(S) {
                        return g(this, S === 0 ? 0 : S), this
                    } : y == "delete" ? function(b) {
                        return n && !Ka(b) ? !1 : g(this, b === 0 ? 0 : b)
                    } : y == "get" ? function(S) {
                        return n && !Ka(S) ? void 0 : g(this, S === 0 ? 0 : S)
                    } : y == "has" ? function(S) {
                        return n && !Ka(S) ? !1 : g(this, S === 0 ? 0 : S)
                    } : function(S, _) {
                        return g(this, S === 0 ? 0 : S, _), this
                    })
                },
                f = uy(e, !rO(o) || !(n || s.forEach && !Xa(function() {
                    new o().entries().next()
                })));
            if (f) u = r.getConstructor(t, e, i, a), Q2.enable();
            else if (uy(e, !0)) {
                var m = new u,
                    c = m[a](n ? {} : -0, 1) != m,
                    p = Xa(function() {
                        m.has(1)
                    }),
                    v = iO(function(y) {
                        new o(y)
                    }),
                    l = !n && Xa(function() {
                        for (var y = new o, g = 5; g--;) y[a](g, g);
                        return !y.has(-0)
                    });
                v || (u = t(function(y, g) {
                    tO(y, s);
                    var b = aO(new o, y, u);
                    return g != null && eO(g, b[a], {
                        that: b,
                        AS_ENTRIES: i
                    }), b
                }), u.prototype = s, s.constructor = u), (p || l) && (h("delete"), h("has"), i && h("get")), (l || c) && h(a), n && s.clear && delete s.clear
            }
            return d[e] = u, X2({
                global: !0,
                forced: u != o
            }, d), nO(u, e), n || r.setStrong(u, e, i), u
        }
    });
    var Gi = x((c5, cy) => {
        var sO = ot();
        cy.exports = function(e, t, r) {
            for (var i in t) sO(e, i, t[i], r);
            return e
        }
    });
    var by = x((d5, gy) => {
        "use strict";
        var oO = Ne().f,
            hO = Et(),
            dy = Gi(),
            lO = Ye(),
            uO = Ni(),
            pO = Vi(),
            fO = Di(),
            cO = Li(),
            jr = Ue(),
            my = Ua().fastKey,
            yy = kt(),
            vy = yy.set,
            Ya = yy.getterFor;
        gy.exports = {
            getConstructor: function(e, t, r, i) {
                var n = e(function(d, h) {
                        uO(d, a), vy(d, {
                            type: t,
                            index: hO(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), jr || (d.size = 0), h != null && pO(h, d[i], {
                            that: d,
                            AS_ENTRIES: r
                        })
                    }),
                    a = n.prototype,
                    o = Ya(t),
                    s = function(d, h, f) {
                        var m = o(d),
                            c = u(d, h),
                            p, v;
                        return c ? c.value = f : (m.last = c = {
                            index: v = my(h, !0),
                            key: h,
                            value: f,
                            previous: p = m.last,
                            next: void 0,
                            removed: !1
                        }, m.first || (m.first = c), p && (p.next = c), jr ? m.size++ : d.size++, v !== "F" && (m.index[v] = c)), d
                    },
                    u = function(d, h) {
                        var f = o(d),
                            m = my(h),
                            c;
                        if (m !== "F") return f.index[m];
                        for (c = f.first; c; c = c.next)
                            if (c.key == h) return c
                    };
                return dy(a, {
                    clear: function() {
                        for (var h = this, f = o(h), m = f.index, c = f.first; c;) c.removed = !0, c.previous && (c.previous = c.previous.next = void 0), delete m[c.index], c = c.next;
                        f.first = f.last = void 0, jr ? f.size = 0 : h.size = 0
                    },
                    delete: function(d) {
                        var h = this,
                            f = o(h),
                            m = u(h, d);
                        if (m) {
                            var c = m.next,
                                p = m.previous;
                            delete f.index[m.index], m.removed = !0, p && (p.next = c), c && (c.previous = p), f.first == m && (f.first = c), f.last == m && (f.last = p), jr ? f.size-- : h.size--
                        }
                        return !!m
                    },
                    forEach: function(h) {
                        for (var f = o(this), m = lO(h, arguments.length > 1 ? arguments[1] : void 0), c; c = c ? c.next : f.first;)
                            for (m(c.value, c.key, this); c && c.removed;) c = c.previous
                    },
                    has: function(h) {
                        return !!u(this, h)
                    }
                }), dy(a, r ? {
                    get: function(h) {
                        var f = u(this, h);
                        return f && f.value
                    },
                    set: function(h, f) {
                        return s(this, h === 0 ? 0 : h, f)
                    }
                } : {
                    add: function(h) {
                        return s(this, h = h === 0 ? 0 : h, h)
                    }
                }), jr && oO(a, "size", {
                    get: function() {
                        return o(this).size
                    }
                }), n
            },
            setStrong: function(e, t, r) {
                var i = t + " Iterator",
                    n = Ya(t),
                    a = Ya(i);
                fO(e, t, function(o, s) {
                    vy(this, {
                        type: i,
                        target: o,
                        state: n(o),
                        kind: s,
                        last: void 0
                    })
                }, function() {
                    for (var o = a(this), s = o.kind, u = o.last; u && u.removed;) u = u.previous;
                    return !o.target || !(o.last = u = u ? u.next : o.state.first) ? (o.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : s == "keys" ? {
                        value: u.key,
                        done: !1
                    } : s == "values" ? {
                        value: u.value,
                        done: !1
                    } : {
                        value: [u.key, u.value],
                        done: !1
                    }
                }, r ? "entries" : "values", !r, !0), cO(t)
            }
        }
    });
    var xy = x(() => {
        "use strict";
        var dO = fy(),
            mO = by();
        dO("Map", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, mO)
    });
    var Ey = x((y5, Sy) => {
        var vO = Y();
        Sy.exports = vO.Promise
    });
    var _y = x((g5, Py) => {
        var yO = Y(),
            gO = Dt(),
            bO = Cr(),
            xO = yO.TypeError;
        Py.exports = function(e) {
            if (gO(e)) return e;
            throw xO(bO(e) + " is not a constructor")
        }
    });
    var Cy = x((b5, Ay) => {
        var wy = Ie(),
            SO = _y(),
            EO = be(),
            PO = EO("species");
        Ay.exports = function(e, t) {
            var r = wy(e).constructor,
                i;
            return r === void 0 || (i = wy(r)[PO]) == null ? t : SO(i)
        }
    });
    var Ja = x((x5, Ty) => {
        var _O = vt();
        Ty.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(_O)
    });
    var ss = x((S5, Ry) => {
        var Re = Y(),
            wO = Oi(),
            AO = Ye(),
            Iy = ge(),
            CO = Ve(),
            TO = we(),
            My = ya(),
            IO = zr(),
            qy = vi(),
            MO = Ja(),
            qO = nr(),
            is = Re.setImmediate,
            ns = Re.clearImmediate,
            FO = Re.process,
            Za = Re.Dispatch,
            kO = Re.Function,
            Fy = Re.MessageChannel,
            DO = Re.String,
            Qa = 0,
            Hr = {},
            ky = "onreadystatechange",
            $r, Rt, es, ts;
        try {
            $r = Re.location
        } catch {}
        var as = function(e) {
                if (CO(Hr, e)) {
                    var t = Hr[e];
                    delete Hr[e], t()
                }
            },
            rs = function(e) {
                return function() {
                    as(e)
                }
            },
            Dy = function(e) {
                as(e.data)
            },
            Oy = function(e) {
                Re.postMessage(DO(e), $r.protocol + "//" + $r.host)
            };
        (!is || !ns) && (is = function(t) {
            var r = IO(arguments, 1);
            return Hr[++Qa] = function() {
                wO(Iy(t) ? t : kO(t), void 0, r)
            }, Rt(Qa), Qa
        }, ns = function(t) {
            delete Hr[t]
        }, qO ? Rt = function(e) {
            FO.nextTick(rs(e))
        } : Za && Za.now ? Rt = function(e) {
            Za.now(rs(e))
        } : Fy && !MO ? (es = new Fy, ts = es.port2, es.port1.onmessage = Dy, Rt = AO(ts.postMessage, ts)) : Re.addEventListener && Iy(Re.postMessage) && !Re.importScripts && $r && $r.protocol !== "file:" && !TO(Oy) ? (Rt = Oy, Re.addEventListener("message", Dy, !1)) : ky in qy("script") ? Rt = function(e) {
            My.appendChild(qy("script"))[ky] = function() {
                My.removeChild(this), as(e)
            }
        } : Rt = function(e) {
            setTimeout(rs(e), 0)
        });
        Ry.exports = {
            set: is,
            clear: ns
        }
    });
    var By = x((E5, Ly) => {
        var OO = vt(),
            RO = Y();
        Ly.exports = /ipad|iphone|ipod/i.test(OO) && RO.Pebble !== void 0
    });
    var Ny = x((P5, Vy) => {
        var LO = vt();
        Vy.exports = /web0s(?!.*chrome)/i.test(LO)
    });
    var Xy = x((_5, Ky) => {
        var Bt = Y(),
            Gy = Ye(),
            BO = yi().f,
            os = ss().set,
            VO = Ja(),
            NO = By(),
            GO = Ny(),
            hs = nr(),
            zy = Bt.MutationObserver || Bt.WebKitMutationObserver,
            jy = Bt.document,
            Hy = Bt.process,
            zi = Bt.Promise,
            $y = BO(Bt, "queueMicrotask"),
            Uy = $y && $y.value,
            Wr, Lt, Ur, ar, ls, us, ji, Wy;
        Uy || (Wr = function() {
            var e, t;
            for (hs && (e = Hy.domain) && e.exit(); Lt;) {
                t = Lt.fn, Lt = Lt.next;
                try {
                    t()
                } catch (r) {
                    throw Lt ? ar() : Ur = void 0, r
                }
            }
            Ur = void 0, e && e.enter()
        }, !VO && !hs && !GO && zy && jy ? (ls = !0, us = jy.createTextNode(""), new zy(Wr).observe(us, {
            characterData: !0
        }), ar = function() {
            us.data = ls = !ls
        }) : !NO && zi && zi.resolve ? (ji = zi.resolve(void 0), ji.constructor = zi, Wy = Gy(ji.then, ji), ar = function() {
            Wy(Wr)
        }) : hs ? ar = function() {
            Hy.nextTick(Wr)
        } : (os = Gy(os, Bt), ar = function() {
            os(Wr)
        }));
        Ky.exports = Uy || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            Ur && (Ur.next = t), Lt || (Lt = t, ar()), Ur = t
        }
    });
    var ps = x((w5, Jy) => {
        "use strict";
        var Yy = Xe(),
            zO = function(e) {
                var t, r;
                this.promise = new e(function(i, n) {
                    if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
                    t = i, r = n
                }), this.resolve = Yy(t), this.reject = Yy(r)
            };
        Jy.exports.f = function(e) {
            return new zO(e)
        }
    });
    var Qy = x((A5, Zy) => {
        var jO = Ie(),
            HO = Fe(),
            $O = ps();
        Zy.exports = function(e, t) {
            if (jO(e), HO(t) && t.constructor === e) return t;
            var r = $O.f(e),
                i = r.resolve;
            return i(t), r.promise
        }
    });
    var tg = x((C5, eg) => {
        var WO = Y();
        eg.exports = function(e, t) {
            var r = WO.console;
            r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t))
        }
    });
    var ig = x((T5, rg) => {
        rg.exports = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }
    });
    var ag = x((I5, ng) => {
        ng.exports = typeof window == "object"
    });
    var wg = x(() => {
        "use strict";
        var Ki = ee(),
            $i = Zt(),
            ut = Y(),
            UO = Be(),
            pt = Le(),
            Wi = Ey(),
            sg = ot(),
            KO = Gi(),
            og = qi(),
            XO = Vr(),
            YO = Li(),
            fs = Xe(),
            Kr = ge(),
            JO = Fe(),
            ZO = Ni(),
            QO = qr(),
            hg = Vi(),
            eR = Ci(),
            tR = Cy(),
            mg = ss().set,
            vg = Xy(),
            rR = Qy(),
            iR = tg(),
            yg = ps(),
            cs = ig(),
            ys = kt(),
            nR = _i(),
            aR = be(),
            sR = ag(),
            Ui = nr(),
            lg = yt(),
            oR = aR("species"),
            ft = "Promise",
            ug = ys.get,
            hR = ys.set,
            lR = ys.getterFor(ft),
            Vt = Wi && Wi.prototype,
            Ge = Wi,
            sr = Vt,
            gg = ut.TypeError,
            ds = ut.document,
            gs = ut.process,
            lr = yg.f,
            uR = lr,
            pR = !!(ds && ds.createEvent && ut.dispatchEvent),
            bg = Kr(ut.PromiseRejectionEvent),
            xg = "unhandledrejection",
            fR = "rejectionhandled",
            pg = 0,
            Sg = 1,
            cR = 2,
            bs = 1,
            Eg = 2,
            ms = !1,
            Hi, fg, xs, cg, Xr = nR(ft, function() {
                var e = QO(Ge),
                    t = e !== String(Ge);
                if (!t && lg === 66 || $i && !sr.finally) return !0;
                if (lg >= 51 && /native code/.test(e)) return !1;
                var r = new Ge(function(a) {
                        a(1)
                    }),
                    i = function(a) {
                        a(function() {}, function() {})
                    },
                    n = r.constructor = {};
                return n[oR] = i, ms = r.then(function() {}) instanceof i, ms ? !t && sR && !bg : !0
            }),
            dR = Xr || !eR(function(e) {
                Ge.all(e).catch(function() {})
            }),
            Pg = function(e) {
                var t;
                return JO(e) && Kr(t = e.then) ? t : !1
            },
            Ss = function(e, t) {
                if (!e.notified) {
                    e.notified = !0;
                    var r = e.reactions;
                    vg(function() {
                        for (var i = e.value, n = e.state == Sg, a = 0; r.length > a;) {
                            var o = r[a++],
                                s = n ? o.ok : o.fail,
                                u = o.resolve,
                                d = o.reject,
                                h = o.domain,
                                f, m, c;
                            try {
                                s ? (n || (e.rejection === Eg && vR(e), e.rejection = bs), s === !0 ? f = i : (h && h.enter(), f = s(i), h && (h.exit(), c = !0)), f === o.promise ? d(gg("Promise-chain cycle")) : (m = Pg(f)) ? pt(m, f, u, d) : u(f)) : d(i)
                            } catch (p) {
                                h && !c && h.exit(), d(p)
                            }
                        }
                        e.reactions = [], e.notified = !1, t && !e.rejection && mR(e)
                    })
                }
            },
            _g = function(e, t, r) {
                var i, n;
                pR ? (i = ds.createEvent("Event"), i.promise = t, i.reason = r, i.initEvent(e, !1, !0), ut.dispatchEvent(i)) : i = {
                    promise: t,
                    reason: r
                }, !bg && (n = ut["on" + e]) ? n(i) : e === xg && iR("Unhandled promise rejection", r)
            },
            mR = function(e) {
                pt(mg, ut, function() {
                    var t = e.facade,
                        r = e.value,
                        i = dg(e),
                        n;
                    if (i && (n = cs(function() {
                            Ui ? gs.emit("unhandledRejection", r, t) : _g(xg, t, r)
                        }), e.rejection = Ui || dg(e) ? Eg : bs, n.error)) throw n.value
                })
            },
            dg = function(e) {
                return e.rejection !== bs && !e.parent
            },
            vR = function(e) {
                pt(mg, ut, function() {
                    var t = e.facade;
                    Ui ? gs.emit("rejectionHandled", t) : _g(fR, t, e.value)
                })
            },
            or = function(e, t, r) {
                return function(i) {
                    e(t, i, r)
                }
            },
            hr = function(e, t, r) {
                e.done || (e.done = !0, r && (e = r), e.value = t, e.state = cR, Ss(e, !0))
            },
            vs = function(e, t, r) {
                if (!e.done) {
                    e.done = !0, r && (e = r);
                    try {
                        if (e.facade === t) throw gg("Promise can't be resolved itself");
                        var i = Pg(t);
                        i ? vg(function() {
                            var n = {
                                done: !1
                            };
                            try {
                                pt(i, t, or(vs, n, e), or(hr, n, e))
                            } catch (a) {
                                hr(n, a, e)
                            }
                        }) : (e.value = t, e.state = Sg, Ss(e, !1))
                    } catch (n) {
                        hr({
                            done: !1
                        }, n, e)
                    }
                }
            };
        if (Xr && (Ge = function(t) {
                ZO(this, sr), fs(t), pt(Hi, this);
                var r = ug(this);
                try {
                    t(or(vs, r), or(hr, r))
                } catch (i) {
                    hr(r, i)
                }
            }, sr = Ge.prototype, Hi = function(t) {
                hR(this, {
                    type: ft,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: pg,
                    value: void 0
                })
            }, Hi.prototype = KO(sr, {
                then: function(t, r) {
                    var i = lR(this),
                        n = i.reactions,
                        a = lr(tR(this, Ge));
                    return a.ok = Kr(t) ? t : !0, a.fail = Kr(r) && r, a.domain = Ui ? gs.domain : void 0, i.parent = !0, n[n.length] = a, i.state != pg && Ss(i, !1), a.promise
                },
                catch: function(e) {
                    return this.then(void 0, e)
                }
            }), fg = function() {
                var e = new Hi,
                    t = ug(e);
                this.promise = e, this.resolve = or(vs, t), this.reject = or(hr, t)
            }, yg.f = lr = function(e) {
                return e === Ge || e === xs ? new fg(e) : uR(e)
            }, !$i && Kr(Wi) && Vt !== Object.prototype)) {
            cg = Vt.then, ms || (sg(Vt, "then", function(t, r) {
                var i = this;
                return new Ge(function(n, a) {
                    pt(cg, i, n, a)
                }).then(t, r)
            }, {
                unsafe: !0
            }), sg(Vt, "catch", sr.catch, {
                unsafe: !0
            }));
            try {
                delete Vt.constructor
            } catch {}
            og && og(Vt, sr)
        }
        Ki({
            global: !0,
            wrap: !0,
            forced: Xr
        }, {
            Promise: Ge
        });
        XO(Ge, ft, !1, !0);
        YO(ft);
        xs = UO(ft);
        Ki({
            target: ft,
            stat: !0,
            forced: Xr
        }, {
            reject: function(t) {
                var r = lr(this);
                return pt(r.reject, void 0, t), r.promise
            }
        });
        Ki({
            target: ft,
            stat: !0,
            forced: $i || Xr
        }, {
            resolve: function(t) {
                return rR($i && this === xs ? Ge : this, t)
            }
        });
        Ki({
            target: ft,
            stat: !0,
            forced: dR
        }, {
            all: function(t) {
                var r = this,
                    i = lr(r),
                    n = i.resolve,
                    a = i.reject,
                    o = cs(function() {
                        var s = fs(r.resolve),
                            u = [],
                            d = 0,
                            h = 1;
                        hg(t, function(f) {
                            var m = d++,
                                c = !1;
                            h++, pt(s, r, f).then(function(p) {
                                c || (c = !0, u[m] = p, --h || n(u))
                            }, a)
                        }), --h || n(u)
                    });
                return o.error && a(o.value), i.promise
            },
            race: function(t) {
                var r = this,
                    i = lr(r),
                    n = i.reject,
                    a = cs(function() {
                        var o = fs(r.resolve);
                        hg(t, function(s) {
                            pt(o, r, s).then(i.resolve, n)
                        })
                    });
                return a.error && n(a.value), i.promise
            }
        })
    });
    var Dg = x((F5, kg) => {
        var Mg = Y(),
            qg = Tr(),
            Fg = ge(),
            yR = Et(),
            Xi = Mi(),
            gR = ot(),
            bR = be(),
            xR = Zt(),
            Ag = "USE_FUNCTION_CONSTRUCTOR",
            Cg = bR("asyncIterator"),
            Tg = Mg.AsyncIterator,
            Ig = qg.AsyncIteratorPrototype,
            nt, Es;
        if (Ig) nt = Ig;
        else if (Fg(Tg)) nt = Tg.prototype;
        else if (qg[Ag] || Mg[Ag]) try {
            Es = Xi(Xi(Xi(Function("return async function*(){}()")()))), Xi(Es) === Object.prototype && (nt = Es)
        } catch {}
        nt ? xR && (nt = yR(nt)) : nt = {};
        Fg(nt[Cg]) || gR(nt, Cg, function() {
            return this
        });
        kg.exports = nt
    });
    var As = x((k5, Bg) => {
        "use strict";
        var Ps = Oi(),
            Yi = Ie(),
            SR = Et(),
            Og = gt(),
            ER = Gi(),
            Rg = kt(),
            PR = Be(),
            _R = Dg(),
            Ji = PR("Promise"),
            wR = Rg.set,
            _s = Rg.get,
            ws = function(e, t, r) {
                var i = e.done;
                Ji.resolve(e.value).then(function(n) {
                    t({
                        done: i,
                        value: n
                    })
                }, r)
            },
            Lg = function(t) {
                wR(this, {
                    iterator: Yi(t),
                    next: t.next
                })
            };
        Lg.prototype = ER(SR(_R), {
            next: function(t) {
                var r = _s(this),
                    i = !!arguments.length;
                return new Ji(function(n, a) {
                    var o = Yi(Ps(r.next, r.iterator, i ? [t] : []));
                    ws(o, n, a)
                })
            },
            return: function(e) {
                var t = _s(this).iterator,
                    r = !!arguments.length;
                return new Ji(function(i, n) {
                    var a = Og(t, "return");
                    if (a === void 0) return i({
                        done: !0,
                        value: e
                    });
                    var o = Yi(Ps(a, t, r ? [e] : []));
                    ws(o, i, n)
                })
            },
            throw: function(e) {
                var t = _s(this).iterator,
                    r = !!arguments.length;
                return new Ji(function(i, n) {
                    var a = Og(t, "throw");
                    if (a === void 0) return n(e);
                    var o = Yi(Ps(a, t, r ? [e] : []));
                    ws(o, i, n)
                })
            }
        });
        Bg.exports = Lg
    });
    var Ng = x((D5, Vg) => {
        var AR = Le(),
            CR = As(),
            TR = Ie(),
            IR = Br(),
            MR = gt(),
            qR = be(),
            FR = qR("asyncIterator");
        Vg.exports = function(e, t) {
            var r = arguments.length < 2 ? MR(e, FR) : t;
            return r ? TR(AR(r, e)) : new CR(IR(e))
        }
    });
    var zg = x((O5, Gg) => {
        var kR = Y();
        Gg.exports = function(e) {
            return kR[e].prototype
        }
    });
    var Wg = x((R5, $g) => {
        "use strict";
        var DR = Y(),
            jg = Le(),
            Hg = Xe(),
            Cs = Ie(),
            OR = Be(),
            RR = gt(),
            LR = 9007199254740991,
            BR = DR.TypeError,
            Yr = function(e) {
                var t = e == 0,
                    r = e == 1,
                    i = e == 2,
                    n = e == 3;
                return function(a, o, s) {
                    Cs(a);
                    var u = OR("Promise"),
                        d = Hg(a.next),
                        h = 0,
                        f = o !== void 0;
                    return (f || !t) && Hg(o), new u(function(m, c) {
                        var p = function(y, g) {
                                try {
                                    var b = RR(a, "return");
                                    if (b) return u.resolve(jg(b, a)).then(function() {
                                        y(g)
                                    }, function(S) {
                                        c(S)
                                    })
                                } catch (S) {
                                    return c(S)
                                }
                                y(g)
                            },
                            v = function(y) {
                                p(c, y)
                            },
                            l = function() {
                                try {
                                    if (t && h > LR && f) throw BR("The allowed number of iterations has been exceeded");
                                    u.resolve(Cs(jg(d, a))).then(function(y) {
                                        try {
                                            if (Cs(y).done) t ? (s.length = h, m(s)) : m(n ? !1 : i || void 0);
                                            else {
                                                var g = y.value;
                                                f ? u.resolve(t ? o(g, h) : o(g)).then(function(b) {
                                                    r ? l() : i ? b ? l() : p(m, !1) : t ? (s[h++] = b, l()) : b ? p(m, n || g) : l()
                                                }, v) : (s[h++] = g, l())
                                            }
                                        } catch (b) {
                                            v(b)
                                        }
                                    }, v)
                                } catch (y) {
                                    v(y)
                                }
                            };
                        l()
                    })
                }
            };
        $g.exports = {
            toArray: Yr(0),
            forEach: Yr(1),
            every: Yr(2),
            some: Yr(3),
            find: Yr(4)
        }
    });
    var Kg = x((L5, Ug) => {
        "use strict";
        var VR = Ye(),
            NR = xe(),
            GR = Dt(),
            zR = Ng(),
            jR = Br(),
            HR = Lr(),
            $R = gt(),
            WR = zg(),
            UR = Be(),
            KR = be(),
            XR = As(),
            YR = Wg().toArray,
            JR = KR("asyncIterator"),
            ZR = WR("Array").values;
        Ug.exports = function(t) {
            var r = this,
                i = arguments.length,
                n = i > 1 ? arguments[1] : void 0,
                a = i > 2 ? arguments[2] : void 0;
            return new(UR("Promise"))(function(o) {
                var s = NR(t);
                n !== void 0 && (n = VR(n, a));
                var u = $R(s, JR),
                    d = u ? void 0 : HR(s) || ZR,
                    h = GR(r) ? new r : [],
                    f = u ? zR(s, u) : new XR(jR(s, d));
                o(YR(f, n, h))
            })
        }
    });
    var Xg = x(() => {
        var QR = ee(),
            eL = Kg();
        QR({
            target: "Array",
            stat: !0
        }, {
            fromAsync: eL
        })
    });
    var Yg = x(() => {
        Pa()
    });
    var Jg = x(() => {
        "use strict";
        var tL = ee(),
            rL = rt().filterReject,
            iL = Pe();
        tL({
            target: "Array",
            proto: !0
        }, {
            filterOut: function(t) {
                return rL(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        iL("filterOut")
    });
    var Zg = x(() => {
        "use strict";
        var nL = ee(),
            aL = rt().filterReject,
            sL = Pe();
        nL({
            target: "Array",
            proto: !0
        }, {
            filterReject: function(t) {
                return aL(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        sL("filterReject")
    });
    var Ts = x((W5, e0) => {
        var oL = Ye(),
            hL = Mt(),
            lL = xe(),
            uL = ve(),
            Qg = function(e) {
                var t = e == 1;
                return function(r, i, n) {
                    for (var a = lL(r), o = hL(a), s = oL(i, n), u = uL(o), d, h; u-- > 0;)
                        if (d = o[u], h = s(d, u, a), h) switch (e) {
                            case 0:
                                return d;
                            case 1:
                                return u
                        }
                    return t ? -1 : void 0
                }
            };
        e0.exports = {
            findLast: Qg(0),
            findLastIndex: Qg(1)
        }
    });
    var t0 = x(() => {
        "use strict";
        var pL = ee(),
            fL = Ts().findLast,
            cL = Pe();
        pL({
            target: "Array",
            proto: !0
        }, {
            findLast: function(t) {
                return fL(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        cL("findLast")
    });
    var r0 = x(() => {
        "use strict";
        var dL = ee(),
            mL = Ts().findLastIndex,
            vL = Pe();
        dL({
            target: "Array",
            proto: !0
        }, {
            findLastIndex: function(t) {
                return mL(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        vL("findLastIndex")
    });
    var n0 = x((J5, i0) => {
        i0.exports = function(e, t) {
            for (var r = 0, i = t.length, n = new e(i); i > r;) n[r] = t[r++];
            return n
        }
    });
    var s0 = x((Z5, a0) => {
        var yL = Y(),
            gL = Ye(),
            bL = ce(),
            xL = Mt(),
            SL = xe(),
            EL = Ir(),
            PL = ve(),
            _L = Et(),
            wL = n0(),
            AL = yL.Array,
            CL = bL([].push);
        a0.exports = function(e, t, r, i) {
            for (var n = SL(e), a = xL(n), o = gL(t, r), s = _L(null), u = PL(a), d = 0, h, f, m; u > d; d++) m = a[d], f = EL(o(m, d, n)), f in s ? CL(s[f], m) : s[f] = [m];
            if (i && (h = i(n), h !== AL))
                for (f in s) s[f] = wL(h, s[f]);
            return s
        }
    });
    var o0 = x(() => {
        "use strict";
        var TL = ee(),
            IL = s0(),
            ML = _a(),
            qL = Pe();
        TL({
            target: "Array",
            proto: !0
        }, {
            groupBy: function(t) {
                var r = arguments.length > 1 ? arguments[1] : void 0;
                return IL(this, t, r, ML)
            }
        });
        qL("groupBy")
    });
    var u0 = x(() => {
        var FL = ee(),
            kL = St(),
            h0 = Object.isFrozen,
            l0 = function(e, t) {
                if (!h0 || !kL(e) || !h0(e)) return !1;
                for (var r = 0, i = e.length, n; r < i;)
                    if (n = e[r++], !(typeof n == "string" || t && typeof n > "u")) return !1;
                return i !== 0
            };
        FL({
            target: "Array",
            stat: !0
        }, {
            isTemplateObject: function(t) {
                if (!l0(t, !0)) return !1;
                var r = t.raw;
                return !(r.length !== t.length || !l0(r, !1))
            }
        })
    });
    var c0 = x(() => {
        "use strict";
        var DL = Ue(),
            OL = Pe(),
            p0 = xe(),
            f0 = ve(),
            RL = Ne().f;
        DL && !("lastItem" in []) && (RL(Array.prototype, "lastItem", {
            configurable: !0,
            get: function() {
                var t = p0(this),
                    r = f0(t);
                return r == 0 ? void 0 : t[r - 1]
            },
            set: function(t) {
                var r = p0(this),
                    i = f0(r);
                return r[i == 0 ? 0 : i - 1] = t
            }
        }), OL("lastItem"))
    });
    var d0 = x(() => {
        "use strict";
        var LL = Ue(),
            BL = Pe(),
            VL = xe(),
            NL = ve(),
            GL = Ne().f;
        LL && !("lastIndex" in []) && (GL(Array.prototype, "lastIndex", {
            configurable: !0,
            get: function() {
                var t = VL(this),
                    r = NL(t);
                return r == 0 ? 0 : r - 1
            }
        }), BL("lastIndex"))
    });
    var y0 = x((oj, v0) => {
        "use strict";
        var zL = Be(),
            Zi = ce(),
            jL = Xe(),
            HL = ve(),
            $L = xe(),
            WL = Ot(),
            m0 = zL("Map"),
            Is = m0.prototype,
            UL = Zi(Is.forEach),
            KL = Zi(Is.has),
            XL = Zi(Is.set),
            YL = Zi([].push);
        v0.exports = function(t) {
            var r = $L(this),
                i = HL(r),
                n = WL(r, 0),
                a = new m0,
                o = t != null ? jL(t) : function(h) {
                    return h
                },
                s, u, d;
            for (s = 0; s < i; s++) u = r[s], d = o(u), KL(a, d) || XL(a, d, u);
            return UL(a, function(h) {
                YL(n, h)
            }), n
        }
    });
    var g0 = x(() => {
        "use strict";
        var JL = ee(),
            ZL = Pe(),
            QL = y0();
        JL({
            target: "Array",
            proto: !0
        }, {
            uniqueBy: QL
        });
        ZL("uniqueBy")
    });
    var x0 = x((uj, b0) => {
        var eB = Wv();
        xy();
        wg();
        Xg();
        Yg();
        Jg();
        Zg();
        t0();
        r0();
        o0();
        u0();
        c0();
        d0();
        g0();
        b0.exports = eB
    });
    var B0 = x(Os => {
        "use strict";
        Object.defineProperty(Os, "__esModule", {
            value: !0
        });

        function tB(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        tB(Os, {
            strFromU8: function() {
                return L0
            },
            unzip: function() {
                return dB
            }
        });
        var S0 = {},
            rB = function(e, t, r, i, n) {
                let a = new Worker(S0[t] || (S0[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                    type: "text/javascript"
                }))));
                return a.onmessage = function(o) {
                    let s = o.data,
                        u = s.$e$;
                    if (u) {
                        let d = new Error(u[0]);
                        d.code = u[1], d.stack = u[2], n(d, null)
                    } else n(null, s)
                }, a.postMessage(r, i), a
            },
            De = Uint8Array,
            At = Uint16Array,
            Ms = Uint32Array,
            qs = new De([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
            Fs = new De([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
            w0 = new De([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            A0 = function(e, t) {
                let r = new At(31);
                for (var i = 0; i < 31; ++i) r[i] = t += 1 << e[i - 1];
                let n = new Ms(r[30]);
                for (i = 1; i < 30; ++i)
                    for (let a = r[i]; a < r[i + 1]; ++a) n[a] = a - r[i] << 5 | i;
                return [r, n]
            },
            C0 = A0(qs, 2),
            ks = C0[0],
            iB = C0[1];
        ks[28] = 258, iB[258] = 28;
        var nB = A0(Fs, 0),
            T0 = nB[0],
            rn = new At(32768);
        for (ue = 0; ue < 32768; ++ue) {
            let e = (43690 & ue) >>> 1 | (21845 & ue) << 1;
            e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, rn[ue] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
        }
        var ue, ur = function(e, t, r) {
                let i = e.length,
                    n = 0,
                    a = new At(t);
                for (; n < i; ++n) e[n] && ++a[e[n] - 1];
                let o = new At(t);
                for (n = 0; n < t; ++n) o[n] = o[n - 1] + a[n - 1] << 1;
                let s;
                if (r) {
                    s = new At(1 << t);
                    let u = 15 - t;
                    for (n = 0; n < i; ++n)
                        if (e[n]) {
                            let d = n << 4 | e[n],
                                h = t - e[n],
                                f = o[e[n] - 1]++ << h;
                            for (let m = f | (1 << h) - 1; f <= m; ++f) s[rn[f] >>> u] = d
                        }
                } else
                    for (s = new At(i), n = 0; n < i; ++n) e[n] && (s[n] = rn[o[e[n] - 1]++] >>> 15 - e[n]);
                return s
            },
            Jr = new De(288);
        for (ue = 0; ue < 144; ++ue) Jr[ue] = 8;
        for (ue = 144; ue < 256; ++ue) Jr[ue] = 9;
        for (ue = 256; ue < 280; ++ue) Jr[ue] = 7;
        for (ue = 280; ue < 288; ++ue) Jr[ue] = 8;
        var I0 = new De(32);
        for (ue = 0; ue < 32; ++ue) I0[ue] = 5;
        var M0 = ur(Jr, 9, 1),
            q0 = ur(I0, 5, 1),
            en = function(e) {
                let t = e[0];
                for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
                return t
            },
            ze = function(e, t, r) {
                let i = t / 8 | 0;
                return (e[i] | e[i + 1] << 8) >> (7 & t) & r
            },
            tn = function(e, t) {
                let r = t / 8 | 0;
                return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
            },
            F0 = function(e) {
                return (e + 7) / 8 | 0
            },
            nn = function(e, t, r) {
                (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
                let i = new(e.BYTES_PER_ELEMENT === 2 ? At : e.BYTES_PER_ELEMENT === 4 ? Ms : De)(r - t);
                return i.set(e.subarray(t, r)), i
            },
            k0 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
            ke = function(e, t, r) {
                let i = new Error(t || k0[e]);
                if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, ke), !r) throw i;
                return i
            },
            D0 = function(e, t, r) {
                let i = e.length;
                if (!i || r && r.f && !r.l) return t || new De(0);
                let n = !t || r,
                    a = !r || r.i;
                r || (r = {}), t || (t = new De(3 * i));
                let o = function(S) {
                        let _ = t.length;
                        if (S > _) {
                            let I = new De(Math.max(2 * _, S));
                            I.set(t), t = I
                        }
                    },
                    s = r.f || 0,
                    u = r.p || 0,
                    d = r.b || 0,
                    h = r.l,
                    f = r.d,
                    m = r.m,
                    c = r.n,
                    p = 8 * i;
                do {
                    if (!h) {
                        s = ze(e, u, 1);
                        let w = ze(e, u + 1, 3);
                        if (u += 3, !w) {
                            let C = e[(l = F0(u) + 4) - 4] | e[l - 3] << 8,
                                F = l + C;
                            if (F > i) {
                                a && ke(0);
                                break
                            }
                            n && o(d + C), t.set(e.subarray(l, F), d), r.b = d += C, r.p = u = 8 * F, r.f = s;
                            continue
                        }
                        if (w === 1) h = M0, f = q0, m = 9, c = 5;
                        else if (w === 2) {
                            let C = ze(e, u, 31) + 257,
                                F = ze(e, u + 10, 15) + 4,
                                M = C + ze(e, u + 5, 31) + 1;
                            u += 14;
                            let A = new De(M),
                                D = new De(19);
                            for (var v = 0; v < F; ++v) D[w0[v]] = ze(e, u + 3 * v, 7);
                            u += 3 * F;
                            let q = en(D),
                                T = (1 << q) - 1,
                                L = ur(D, q, 1);
                            for (v = 0; v < M;) {
                                let H = L[ze(e, u, T)];
                                var l;
                                if (u += 15 & H, (l = H >>> 4) < 16) A[v++] = l;
                                else {
                                    var y = 0;
                                    let P = 0;
                                    for (l === 16 ? (P = 3 + ze(e, u, 3), u += 2, y = A[v - 1]) : l === 17 ? (P = 3 + ze(e, u, 7), u += 3) : l === 18 && (P = 11 + ze(e, u, 127), u += 7); P--;) A[v++] = y
                                }
                            }
                            let N = A.subarray(0, C);
                            var g = A.subarray(C);
                            m = en(N), c = en(g), h = ur(N, m, 1), f = ur(g, c, 1)
                        } else ke(1);
                        if (u > p) {
                            a && ke(0);
                            break
                        }
                    }
                    n && o(d + 131072);
                    let S = (1 << m) - 1,
                        _ = (1 << c) - 1,
                        I = u;
                    for (;; I = u) {
                        let w = (y = h[tn(e, u) & S]) >>> 4;
                        if (u += 15 & y, u > p) {
                            a && ke(0);
                            break
                        }
                        if (y || ke(2), w < 256) t[d++] = w;
                        else {
                            if (w === 256) {
                                I = u, h = null;
                                break
                            } {
                                let C = w - 254;
                                if (w > 264) {
                                    var b = qs[v = w - 257];
                                    C = ze(e, u, (1 << b) - 1) + ks[v], u += b
                                }
                                let F = f[tn(e, u) & _],
                                    M = F >>> 4;
                                if (F || ke(3), u += 15 & F, g = T0[M], M > 3 && (b = Fs[M], g += tn(e, u) & (1 << b) - 1, u += b), u > p) {
                                    a && ke(0);
                                    break
                                }
                                n && o(d + 131072);
                                let A = d + C;
                                for (; d < A; d += 4) t[d] = t[d - g], t[d + 1] = t[d + 1 - g], t[d + 2] = t[d + 2 - g], t[d + 3] = t[d + 3 - g];
                                d = A
                            }
                        }
                    }
                    r.l = h, r.p = I, r.b = d, r.f = s, h && (s = 1, r.m = m, r.d = f, r.n = c)
                } while (!s);
                return d === t.length ? t : nn(t, 0, d)
            },
            aB = function(e, t) {
                let r = {};
                for (var i in e) r[i] = e[i];
                for (var i in t) r[i] = t[i];
                return r
            },
            E0 = function(e, t, r) {
                let i = e(),
                    n = e.toString(),
                    a = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/\s+/g, "").split(",");
                for (let o = 0; o < i.length; ++o) {
                    let s = i[o],
                        u = a[o];
                    if (typeof s == "function") {
                        t += ";" + u + "=";
                        let d = s.toString();
                        if (s.prototype)
                            if (d.indexOf("[native code]") !== -1) {
                                let h = d.indexOf(" ", 8) + 1;
                                t += d.slice(h, d.indexOf("(", h))
                            } else {
                                t += d;
                                for (let h in s.prototype) t += ";" + u + ".prototype." + h + "=" + s.prototype[h].toString()
                            }
                        else t += d
                    } else r[u] = s
                }
                return [t, r]
            },
            Qi = [],
            sB = function(e) {
                let t = [];
                for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
                return t
            },
            oB = function(e, t, r, i) {
                let n;
                if (!Qi[r]) {
                    let o = "",
                        s = {},
                        u = e.length - 1;
                    for (let d = 0; d < u; ++d) n = E0(e[d], o, s), o = n[0], s = n[1];
                    Qi[r] = E0(e[u], o, s)
                }
                let a = aB({}, Qi[r][1]);
                return rB(Qi[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, sB(a), i)
            },
            hB = function() {
                return [De, At, Ms, qs, Fs, w0, ks, T0, M0, q0, rn, k0, ur, en, ze, tn, F0, nn, ke, D0, Ds, O0, R0]
            },
            O0 = function(e) {
                return postMessage(e, [e.buffer])
            },
            R0 = function(e) {
                return e && e.size && new De(e.size)
            },
            lB = function(e, t, r, i, n, a) {
                var o = oB(r, i, n, function(s, u) {
                    o.terminate(), a(s, u)
                });
                return o.postMessage([e, t], t.consume ? [e.buffer] : []),
                    function() {
                        o.terminate()
                    }
            },
            wt = function(e, t) {
                return e[t] | e[t + 1] << 8
            },
            ct = function(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            };

        function uB(e, t, r) {
            return r || (r = t, t = {}), typeof r != "function" && ke(7), lB(e, t, [hB], function(i) {
                return O0(Ds(i.data[0], R0(i.data[1])))
            }, 1, r)
        }

        function Ds(e, t) {
            return D0(e, t)
        }
        var P0 = typeof TextDecoder < "u" && new TextDecoder,
            pB = function(e) {
                for (let t = "", r = 0;;) {
                    let i = e[r++],
                        n = (i > 127) + (i > 223) + (i > 239);
                    if (r + n > e.length) return [t, nn(e, r - 1)];
                    n ? n === 3 ? (i = ((15 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : t += 1 & n ? String.fromCharCode((31 & i) << 6 | 63 & e[r++]) : String.fromCharCode((15 & i) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(i)
                }
            };

        function L0(e, t) {
            if (t) {
                let r = "";
                for (let i = 0; i < e.length; i += 16384) r += String.fromCharCode.apply(null, e.subarray(i, i + 16384));
                return r
            }
            if (P0) return P0.decode(e);
            {
                let r = pB(e),
                    i = r[0];
                return r[1].length && ke(8), i
            }
        }
        var fB = function(e, t) {
                return t + 30 + wt(e, t + 26) + wt(e, t + 28)
            },
            cB = function(e, t, r) {
                let i = wt(e, t + 28),
                    n = L0(e.subarray(t + 46, t + 46 + i), !(2048 & wt(e, t + 8))),
                    a = t + 46 + i,
                    o = ct(e, t + 20),
                    s = r && o === 4294967295 ? z64e(e, a) : [o, ct(e, t + 24), ct(e, t + 42)],
                    u = s[0],
                    d = s[1],
                    h = s[2];
                return [wt(e, t + 10), u, d, n, a + wt(e, t + 30) + wt(e, t + 32), h]
            },
            _0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
                e()
            };

        function dB(e, t, r) {
            r || (r = t, t = {}), typeof r != "function" && ke(7);
            let i = [],
                n = function() {
                    for (let d = 0; d < i.length; ++d) i[d]()
                },
                a = {},
                o = function(d, h) {
                    _0(function() {
                        r(d, h)
                    })
                };
            _0(function() {
                o = r
            });
            let s = e.length - 22;
            for (; ct(e, s) !== 101010256; --s)
                if (!s || e.length - s > 65558) return o(ke(13, 0, 1), null), n;
            let u = wt(e, s + 8);
            if (u) {
                let d = u,
                    h = ct(e, s + 16),
                    f = h === 4294967295 || d === 65535;
                if (f) {
                    let p = ct(e, s - 12);
                    f = ct(e, p) === 101075792, f && (d = u = ct(e, p + 32), h = ct(e, p + 48))
                }
                let m = t && t.filter,
                    c = function() {
                        let p = cB(e, h, f),
                            v = p[0],
                            l = p[1],
                            y = p[2],
                            g = p[3],
                            b = p[4],
                            S = p[5],
                            _ = fB(e, S);
                        h = b;
                        let I = function(w, C) {
                            w ? (n(), o(w, null)) : (C && (a[g] = C), --u || o(null, a))
                        };
                        if (!m || m({
                                name: g,
                                size: l,
                                originalSize: y,
                                compression: v
                            }))
                            if (v)
                                if (v === 8) {
                                    let w = e.subarray(_, _ + l);
                                    if (l < 32e4) try {
                                        I(null, Ds(w, new De(y)))
                                    } catch (C) {
                                        I(C, null)
                                    } else i.push(uB(w, {
                                        size: y
                                    }, I))
                                } else I(ke(14, "unknown compression type " + v, 1), null);
                        else I(null, nn(e, _, _ + l));
                        else I(null, null)
                    };
                for (let p = 0; p < d; ++p) c(p)
            } else o(null, {});
            return n
        }
    });

    function mB(e) {
        let t = JSON.parse(e);
        if (!("animations" in t)) throw new Error("Manifest not found");
        if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
        return t
    }

    function vB(e) {
        let t = new Uint8Array(e, 0, 32);
        return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
    }
    async function yB(e) {
        return await fetch(new URL(e, window?.location?.href).href).then(t => t.arrayBuffer())
    }
    async function gB(e) {
        return (await new Promise(r => {
            let i = new FileReader;
            i.readAsDataURL(new Blob([e])), i.onload = () => r(i.result)
        })).split(",", 2)[1]
    }
    async function bB(e) {
        let t = new Uint8Array(e),
            r = await new Promise((i, n) => {
                (0, an.unzip)(t, (a, o) => a ? n(a) : i(o))
            });
        return {
            read: i => (0, an.strFromU8)(r[i]),
            readB64: async i => await gB(r[i])
        }
    }
    async function xB(e, t) {
        if (!("assets" in e)) return e;
        async function r(n) {
            let {
                p: a
            } = n;
            if (a == null || t.read(`images/${a}`) == null) return n;
            let o = a.split(".").pop(),
                s = await t.readB64(`images/${a}`);
            if (o?.startsWith("data:")) return n.p = o, n.e = 1, n;
            switch (o) {
                case "svg":
                case "svg+xml":
                    n.p = `data:image/svg+xml;base64,${s}`;
                    break;
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                case "webp":
                    n.p = `data:image/${o};base64,${s}`;
                    break;
                default:
                    n.p = `data:;base64,${s}`
            }
            return n.e = 1, n
        }
        return (await Promise.all(e.assets.map(r))).map((n, a) => {
            e.assets[a] = n
        }), e
    }
    async function SB(e) {
        let t = await bB(e),
            r = mB(t.read("manifest.json"));
        return (await Promise.all(r.animations.map(n => {
            let a = JSON.parse(t.read(`animations/${n.id}.json`));
            return xB(a, t)
        })))[0]
    }
    async function V0(e) {
        let t = await yB(e);
        return vB(t) ? await SB(t) : JSON.parse(new TextDecoder().decode(t))
    }
    var an, N0 = Ns(() => {
        "use strict";
        an = ln(B0())
    });
    var $0 = {};
    x1($0, {
        cleanupElement: () => Bs,
        createInstance: () => j0,
        destroy: () => _B,
        init: () => H0,
        ready: () => wB
    });
    var sn, cj, EB, PB, Zr, Rs, on, G0, Ls, z0, j0, Bs, H0, _B, wB, W0 = Ns(() => {
        "use strict";
        sn = ln(qp()), cj = ln(x0());
        N0();
        EB = e => e.Webflow.require("lottie").lottie, PB = e => !!(e.Webflow.env("design") || e.Webflow.env("preview")), Zr = {
            Playing: "playing",
            Stopped: "stopped"
        }, Rs = class {
            _cache = [];
            set(t, r) {
                let i = (0, sn.default)(this._cache, ({
                    wrapper: n
                }) => n === t);
                i !== -1 && this._cache.splice(i, 1), this._cache.push({
                    wrapper: t,
                    instance: r
                })
            }
            delete(t) {
                let r = (0, sn.default)(this._cache, ({
                    wrapper: i
                }) => i === t);
                r !== -1 && this._cache.splice(r, 1)
            }
            get(t) {
                let r = (0, sn.default)(this._cache, ({
                    wrapper: i
                }) => i === t);
                return r !== -1 ? this._cache[r].instance : null
            }
        }, on = new Rs, G0 = {}, Ls = class {
            config = null;
            currentState = Zr.Stopped;
            animationItem;
            handlers = {
                enterFrame: [],
                complete: [],
                loop: [],
                dataReady: [],
                destroy: [],
                error: []
            };
            load(t) {
                let i = (t.dataset || G0).src || "";
                i.endsWith(".lottie") ? V0(i).then(n => {
                    this._loadAnimation(t, n)
                }) : this._loadAnimation(t, void 0), on.set(t, this), this.container = t
            }
            _loadAnimation(t, r) {
                let i = t.dataset || G0,
                    n = i.src || "",
                    a = i.preserveAspectRatio || "xMidYMid meet",
                    o = i.renderer || "svg",
                    s = parseFloat(i.loop) === 1,
                    u = parseFloat(i.direction) || 1,
                    d = parseFloat(i.autoplay) === 1,
                    h = parseFloat(i.duration) || 0,
                    f = parseFloat(i.isIx2Target) === 1,
                    m = parseFloat(i.ix2InitialState);
                isNaN(m) && (m = null);
                let c = {
                    src: n,
                    loop: s,
                    autoplay: d,
                    renderer: o,
                    direction: u,
                    duration: h,
                    hasIx2: f,
                    ix2InitialValue: m,
                    preserveAspectRatio: a
                };
                if (this.animationItem && this.config && this.config.src === n && o === this.config.renderer && a === this.config.preserveAspectRatio) {
                    if (s !== this.config.loop && this.setLooping(s), f || (u !== this.config.direction && this.setDirection(u), h !== this.config.duration && (h > 0 && h !== this.duration ? this.setSpeed(this.duration / h) : this.setSpeed(1))), d && this.play(), m && m !== this.config.ix2InitialValue) {
                        let l = m / 100;
                        this.goToFrame(this.frames * l)
                    }
                    this.config = c;
                    return
                }
                let p = {
                        container: t,
                        loop: s,
                        autoplay: d,
                        renderer: o,
                        rendererSettings: {
                            preserveAspectRatio: a,
                            progressiveLoad: !0,
                            hideOnTransparent: !0
                        }
                    },
                    v = t.ownerDocument.defaultView;
                try {
                    this.animationItem && this.destroy(), this.animationItem = EB(v).loadAnimation({
                        ...p,
                        ...r ? {
                            animationData: r
                        } : {
                            path: n
                        }
                    })
                } catch (l) {
                    this.handlers.error.forEach(y => y(l));
                    return
                }
                this.animationItem && (PB(v) && (this.animationItem.addEventListener("enterFrame", () => {
                    if (!this.isPlaying) return;
                    let {
                        currentFrame: l,
                        totalFrames: y,
                        playDirection: g
                    } = this.animationItem, b = l / y * 100, S = Math.round(g === 1 ? b : 100 - b);
                    this.handlers.enterFrame.forEach(_ => _(S, l))
                }), this.animationItem.addEventListener("complete", () => {
                    if (this.currentState !== Zr.Playing) {
                        this.handlers.complete.forEach(l => l());
                        return
                    }
                    if (!this.animationItem.loop) {
                        this.handlers.complete.forEach(l => l());
                        return
                    }
                    this.currentState = Zr.Stopped
                }), this.animationItem.addEventListener("loopComplete", l => {
                    this.handlers.loop.forEach(y => y(l))
                }), this.animationItem.addEventListener("data_failed", l => {
                    this.handlers.error.forEach(y => y(l))
                }), this.animationItem.addEventListener("error", l => {
                    this.handlers.error.forEach(y => y(l))
                })), this.isLoaded ? (this.handlers.dataReady.forEach(l => l()), d && this.play()) : this.animationItem.addEventListener("data_ready", () => {
                    if (this.handlers.dataReady.forEach(l => l()), f || (this.setDirection(u), h > 0 && h !== this.duration && this.setSpeed(this.duration / h), d && this.play()), m) {
                        let l = m / 100;
                        this.goToFrame(this.frames * l)
                    }
                }), this.config = c)
            }
            onFrameChange(t) {
                this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
            }
            onPlaybackComplete(t) {
                this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
            }
            onLoopComplete(t) {
                this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
            }
            onDestroy(t) {
                this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
            }
            onDataReady(t) {
                this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
            }
            onError(t) {
                this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
            }
            play() {
                if (!this.animationItem) return;
                let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
                this.animationItem.goToAndPlay(t, !0), this.currentState = Zr.Playing
            }
            stop() {
                if (this.animationItem) {
                    if (this.isPlaying) {
                        let {
                            playDirection: t
                        } = this.animationItem, r = t === 1 ? 0 : this.frames;
                        this.animationItem.goToAndStop(r, !0)
                    }
                    this.currentState = Zr.Stopped
                }
            }
            destroy() {
                this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && on.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
            }
            get isPlaying() {
                return this.animationItem ? !this.animationItem.isPaused : !1
            }
            get isPaused() {
                return this.animationItem ? this.animationItem.isPaused : !1
            }
            get duration() {
                return this.animationItem ? this.animationItem.getDuration() : 0
            }
            get frames() {
                return this.animationItem ? this.animationItem.totalFrames : 0
            }
            get direction() {
                return this.animationItem ? this.animationItem.playDirection : 1
            }
            get isLoaded() {
                return this.animationItem, this.animationItem.isLoaded
            }
            get ix2InitialValue() {
                return this.config ? this.config.ix2InitialValue : null
            }
            goToFrame(t) {
                this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
            }
            setSubframe(t) {
                this.animationItem && this.animationItem.setSubframe(t)
            }
            setSpeed(t = 1) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
            }
            setLooping(t) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
            }
            setDirection(t) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
            }
        }, z0 = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')), j0 = e => {
            let t = on.get(e);
            return t == null && (t = new Ls), t.load(e), t
        }, Bs = e => {
            let t = on.get(e);
            t && t.destroy()
        }, H0 = () => {
            z0().forEach(e => {
                parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Bs(e), j0(e)
            })
        }, _B = () => {
            z0().forEach(Bs)
        }, wB = H0
    });
    var U0 = x((exports, module) => {
        typeof navigator < "u" && function(e, t) {
            typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
        }(exports, function() {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                _useWebWorker = !1,
                initialDefaultFrame = -999999,
                setWebWorker = function(e) {
                    _useWebWorker = !!e
                },
                getWebWorker = function() {
                    return _useWebWorker
                },
                setLocationHref = function(e) {
                    locationHref = e
                },
                getLocationHref = function() {
                    return locationHref
                };

            function createTag(e) {
                return document.createElement(e)
            }

            function extendPrototype(e, t) {
                var r, i, n = e.length;
                for (r = 0; r < n; r += 1)
                    for (var a in i = e[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a])
            }

            function getDescriptor(e, t) {
                return Object.getOwnPropertyDescriptor(e, t)
            }

            function createProxyFunction(e) {
                function t() {}
                return t.prototype = e, t
            }
            var audioControllerFactory = function() {
                    function e(t) {
                        this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                    }
                    return e.prototype = {
                            addAudio: function(t) {
                                this.audios.push(t)
                            },
                            pause: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].pause()
                            },
                            resume: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].resume()
                            },
                            setRate: function(t) {
                                var r, i = this.audios.length;
                                for (r = 0; r < i; r += 1) this.audios[r].setRate(t)
                            },
                            createAudio: function(t) {
                                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                    src: [t]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0
                                    },
                                    seek: function() {
                                        this.isPlaying = !1
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                }
                            },
                            setAudioFactory: function(t) {
                                this.audioFactory = t
                            },
                            setVolume: function(t) {
                                this._volume = t, this._updateVolume()
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume()
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume()
                            },
                            getVolume: function() {
                                return this._volume
                            },
                            _updateVolume: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                            }
                        },
                        function() {
                            return new e
                        }
                }(),
                createTypedArray = function() {
                    function e(t, r) {
                        var i, n = 0,
                            a = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                i = 1;
                                break;
                            default:
                                i = 1.1
                        }
                        for (n = 0; n < r; n += 1) a.push(i);
                        return a
                    }
                    return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(t, r) {
                        return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
                    } : e
                }();

            function createSizedArray(e) {
                return Array.apply(null, {
                    length: e
                })
            }

            function _typeof$6(e) {
                return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$6(e)
            }
            var subframeEnabled = !0,
                expressionsPlugin = null,
                expressionsInterfaces = null,
                idPrefix$1 = "",
                isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                _shouldRoundValues = !1,
                bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};

            function ProjectInterface$1() {
                return {}
            }(function() {
                var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    r = t.length;
                for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
            })(), BMMath.random = Math.random, BMMath.abs = function(e) {
                if (_typeof$6(e) === "object" && e.length) {
                    var t, r = createSizedArray(e.length),
                        i = e.length;
                    for (t = 0; t < i; t += 1) r[t] = Math.abs(e[t]);
                    return r
                }
                return Math.abs(e)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function roundValues(e) {
                _shouldRoundValues = !!e
            }

            function bmRnd(e) {
                return _shouldRoundValues ? Math.round(e) : e
            }

            function styleDiv(e) {
                e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
            }

            function BMEnterFrameEvent(e, t, r, i) {
                this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1
            }

            function BMCompleteEvent(e, t) {
                this.type = e, this.direction = t < 0 ? -1 : 1
            }

            function BMCompleteLoopEvent(e, t, r, i) {
                this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1
            }

            function BMSegmentStartEvent(e, t, r) {
                this.type = e, this.firstFrame = t, this.totalFrames = r
            }

            function BMDestroyEvent(e, t) {
                this.type = e, this.target = t
            }

            function BMRenderFrameErrorEvent(e, t) {
                this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
            }

            function BMConfigErrorEvent(e) {
                this.type = "configError", this.nativeError = e
            }

            function BMAnimationConfigErrorEvent(e, t) {
                this.type = e, this.nativeError = t
            }
            var createElementID = (_count = 0, function() {
                    return idPrefix$1 + "__lottie_element_" + (_count += 1)
                }),
                _count;

            function HSVtoRGB(e, t, r) {
                var i, n, a, o, s, u, d, h;
                switch (u = r * (1 - t), d = r * (1 - (s = 6 * e - (o = Math.floor(6 * e))) * t), h = r * (1 - (1 - s) * t), o % 6) {
                    case 0:
                        i = r, n = h, a = u;
                        break;
                    case 1:
                        i = d, n = r, a = u;
                        break;
                    case 2:
                        i = u, n = r, a = h;
                        break;
                    case 3:
                        i = u, n = d, a = r;
                        break;
                    case 4:
                        i = h, n = u, a = r;
                        break;
                    case 5:
                        i = r, n = u, a = d
                }
                return [i, n, a]
            }

            function RGBtoHSV(e, t, r) {
                var i, n = Math.max(e, t, r),
                    a = Math.min(e, t, r),
                    o = n - a,
                    s = n === 0 ? 0 : o / n,
                    u = n / 255;
                switch (n) {
                    case a:
                        i = 0;
                        break;
                    case e:
                        i = t - r + o * (t < r ? 6 : 0), i /= 6 * o;
                        break;
                    case t:
                        i = r - e + 2 * o, i /= 6 * o;
                        break;
                    case r:
                        i = e - t + 4 * o, i /= 6 * o
                }
                return [i, s, u]
            }

            function addSaturationToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addBrightnessToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addHueToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
            }
            var rgbToHex = function() {
                    var e, t, r = [];
                    for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
                    return function(i, n, a) {
                        return i < 0 && (i = 0), n < 0 && (n = 0), a < 0 && (a = 0), "#" + r[i] + r[n] + r[a]
                    }
                }(),
                setSubframeEnabled = function(e) {
                    subframeEnabled = !!e
                },
                getSubframeEnabled = function() {
                    return subframeEnabled
                },
                setExpressionsPlugin = function(e) {
                    expressionsPlugin = e
                },
                getExpressionsPlugin = function() {
                    return expressionsPlugin
                },
                setExpressionInterfaces = function(e) {
                    expressionsInterfaces = e
                },
                getExpressionInterfaces = function() {
                    return expressionsInterfaces
                },
                setDefaultCurveSegments = function(e) {
                    defaultCurveSegments = e
                },
                getDefaultCurveSegments = function() {
                    return defaultCurveSegments
                },
                setIdPrefix = function(e) {
                    idPrefix$1 = e
                },
                getIdPrefix = function() {
                    return idPrefix$1
                };

            function createNS(e) {
                return document.createElementNS(svgNS, e)
            }

            function _typeof$5(e) {
                return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$5(e)
            }
            var dataManager = function() {
                    var e, t, r = 1,
                        i = [],
                        n = {
                            onmessage: function() {},
                            postMessage: function(u) {
                                e({
                                    data: u
                                })
                            }
                        },
                        a = {
                            postMessage: function(u) {
                                n.onmessage({
                                    data: u
                                })
                            }
                        };

                    function o() {
                        t || (t = function(u) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var d = new Blob(["var _workerSelf = self; self.onmessage = ", u.toString()], {
                                        type: "text/javascript"
                                    }),
                                    h = URL.createObjectURL(d);
                                return new Worker(h)
                            }
                            return e = u, n
                        }(function(u) {
                            if (a.dataManager || (a.dataManager = function() {
                                    function h(w, C) {
                                        var F, M, A, D, q, T, L = w.length;
                                        for (M = 0; M < L; M += 1)
                                            if ("ks" in (F = w[M]) && !F.completed) {
                                                if (F.completed = !0, F.hasMask) {
                                                    var N = F.masksProperties;
                                                    for (D = N.length, A = 0; A < D; A += 1)
                                                        if (N[A].pt.k.i) c(N[A].pt.k);
                                                        else
                                                            for (T = N[A].pt.k.length, q = 0; q < T; q += 1) N[A].pt.k[q].s && c(N[A].pt.k[q].s[0]), N[A].pt.k[q].e && c(N[A].pt.k[q].e[0])
                                                }
                                                F.ty === 0 ? (F.layers = f(F.refId, C), h(F.layers, C)) : F.ty === 4 ? m(F.shapes) : F.ty === 5 && _(F)
                                            }
                                    }

                                    function f(w, C) {
                                        var F = function(M, A) {
                                            for (var D = 0, q = A.length; D < q;) {
                                                if (A[D].id === M) return A[D];
                                                D += 1
                                            }
                                            return null
                                        }(w, C);
                                        return F ? F.layers.__used ? JSON.parse(JSON.stringify(F.layers)) : (F.layers.__used = !0, F.layers) : null
                                    }

                                    function m(w) {
                                        var C, F, M;
                                        for (C = w.length - 1; C >= 0; C -= 1)
                                            if (w[C].ty === "sh")
                                                if (w[C].ks.k.i) c(w[C].ks.k);
                                                else
                                                    for (M = w[C].ks.k.length, F = 0; F < M; F += 1) w[C].ks.k[F].s && c(w[C].ks.k[F].s[0]), w[C].ks.k[F].e && c(w[C].ks.k[F].e[0]);
                                        else w[C].ty === "gr" && m(w[C].it)
                                    }

                                    function c(w) {
                                        var C, F = w.i.length;
                                        for (C = 0; C < F; C += 1) w.i[C][0] += w.v[C][0], w.i[C][1] += w.v[C][1], w.o[C][0] += w.v[C][0], w.o[C][1] += w.v[C][1]
                                    }

                                    function p(w, C) {
                                        var F = C ? C.split(".") : [100, 100, 100];
                                        return w[0] > F[0] || !(F[0] > w[0]) && (w[1] > F[1] || !(F[1] > w[1]) && (w[2] > F[2] || !(F[2] > w[2]) && null))
                                    }
                                    var v, l = function() {
                                            var w = [4, 4, 14];

                                            function C(F) {
                                                var M, A, D, q = F.length;
                                                for (M = 0; M < q; M += 1) F[M].ty === 5 && (D = void 0, D = (A = F[M]).t.d, A.t.d = {
                                                    k: [{
                                                        s: D,
                                                        t: 0
                                                    }]
                                                })
                                            }
                                            return function(F) {
                                                if (p(w, F.v) && (C(F.layers), F.assets)) {
                                                    var M, A = F.assets.length;
                                                    for (M = 0; M < A; M += 1) F.assets[M].layers && C(F.assets[M].layers)
                                                }
                                            }
                                        }(),
                                        y = (v = [4, 7, 99], function(w) {
                                            if (w.chars && !p(v, w.v)) {
                                                var C, F = w.chars.length;
                                                for (C = 0; C < F; C += 1) {
                                                    var M = w.chars[C];
                                                    M.data && M.data.shapes && (m(M.data.shapes), M.data.ip = 0, M.data.op = 99999, M.data.st = 0, M.data.sr = 1, M.data.ks = {
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, w.chars[C].t || (M.data.shapes.push({
                                                        ty: "no"
                                                    }), M.data.shapes[0].it.push({
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })))
                                                }
                                            }
                                        }),
                                        g = function() {
                                            var w = [5, 7, 15];

                                            function C(F) {
                                                var M, A, D = F.length;
                                                for (M = 0; M < D; M += 1) F[M].ty === 5 && (A = void 0, typeof(A = F[M].t.p).a == "number" && (A.a = {
                                                    a: 0,
                                                    k: A.a
                                                }), typeof A.p == "number" && (A.p = {
                                                    a: 0,
                                                    k: A.p
                                                }), typeof A.r == "number" && (A.r = {
                                                    a: 0,
                                                    k: A.r
                                                }))
                                            }
                                            return function(F) {
                                                if (p(w, F.v) && (C(F.layers), F.assets)) {
                                                    var M, A = F.assets.length;
                                                    for (M = 0; M < A; M += 1) F.assets[M].layers && C(F.assets[M].layers)
                                                }
                                            }
                                        }(),
                                        b = function() {
                                            var w = [4, 1, 9];

                                            function C(M) {
                                                var A, D, q, T = M.length;
                                                for (A = 0; A < T; A += 1)
                                                    if (M[A].ty === "gr") C(M[A].it);
                                                    else if (M[A].ty === "fl" || M[A].ty === "st")
                                                    if (M[A].c.k && M[A].c.k[0].i)
                                                        for (q = M[A].c.k.length, D = 0; D < q; D += 1) M[A].c.k[D].s && (M[A].c.k[D].s[0] /= 255, M[A].c.k[D].s[1] /= 255, M[A].c.k[D].s[2] /= 255, M[A].c.k[D].s[3] /= 255), M[A].c.k[D].e && (M[A].c.k[D].e[0] /= 255, M[A].c.k[D].e[1] /= 255, M[A].c.k[D].e[2] /= 255, M[A].c.k[D].e[3] /= 255);
                                                    else M[A].c.k[0] /= 255, M[A].c.k[1] /= 255, M[A].c.k[2] /= 255, M[A].c.k[3] /= 255
                                            }

                                            function F(M) {
                                                var A, D = M.length;
                                                for (A = 0; A < D; A += 1) M[A].ty === 4 && C(M[A].shapes)
                                            }
                                            return function(M) {
                                                if (p(w, M.v) && (F(M.layers), M.assets)) {
                                                    var A, D = M.assets.length;
                                                    for (A = 0; A < D; A += 1) M.assets[A].layers && F(M.assets[A].layers)
                                                }
                                            }
                                        }(),
                                        S = function() {
                                            var w = [4, 4, 18];

                                            function C(M) {
                                                var A, D, q;
                                                for (A = M.length - 1; A >= 0; A -= 1)
                                                    if (M[A].ty === "sh")
                                                        if (M[A].ks.k.i) M[A].ks.k.c = M[A].closed;
                                                        else
                                                            for (q = M[A].ks.k.length, D = 0; D < q; D += 1) M[A].ks.k[D].s && (M[A].ks.k[D].s[0].c = M[A].closed), M[A].ks.k[D].e && (M[A].ks.k[D].e[0].c = M[A].closed);
                                                else M[A].ty === "gr" && C(M[A].it)
                                            }

                                            function F(M) {
                                                var A, D, q, T, L, N, H = M.length;
                                                for (D = 0; D < H; D += 1) {
                                                    if ((A = M[D]).hasMask) {
                                                        var P = A.masksProperties;
                                                        for (T = P.length, q = 0; q < T; q += 1)
                                                            if (P[q].pt.k.i) P[q].pt.k.c = P[q].cl;
                                                            else
                                                                for (N = P[q].pt.k.length, L = 0; L < N; L += 1) P[q].pt.k[L].s && (P[q].pt.k[L].s[0].c = P[q].cl), P[q].pt.k[L].e && (P[q].pt.k[L].e[0].c = P[q].cl)
                                                    }
                                                    A.ty === 4 && C(A.shapes)
                                                }
                                            }
                                            return function(M) {
                                                if (p(w, M.v) && (F(M.layers), M.assets)) {
                                                    var A, D = M.assets.length;
                                                    for (A = 0; A < D; A += 1) M.assets[A].layers && F(M.assets[A].layers)
                                                }
                                            }
                                        }();

                                    function _(w) {
                                        w.t.a.length === 0 && w.t.p
                                    }
                                    var I = {
                                        completeData: function(w) {
                                            w.__complete || (b(w), l(w), y(w), g(w), S(w), h(w.layers, w.assets), function(C, F) {
                                                if (C) {
                                                    var M = 0,
                                                        A = C.length;
                                                    for (M = 0; M < A; M += 1) C[M].t === 1 && (C[M].data.layers = f(C[M].data.refId, F), h(C[M].data.layers, F))
                                                }
                                            }(w.chars, w.assets), w.__complete = !0)
                                        }
                                    };
                                    return I.checkColors = b, I.checkChars = y, I.checkPathProperties = g, I.checkShapes = S, I.completeLayers = h, I
                                }()), a.assetLoader || (a.assetLoader = function() {
                                    function h(f) {
                                        var m = f.getResponseHeader("content-type");
                                        return m && f.responseType === "json" && m.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null
                                    }
                                    return {
                                        load: function(f, m, c, p) {
                                            var v, l = new XMLHttpRequest;
                                            try {
                                                l.responseType = "json"
                                            } catch {}
                                            l.onreadystatechange = function() {
                                                if (l.readyState === 4)
                                                    if (l.status === 200) v = h(l), c(v);
                                                    else try {
                                                        v = h(l), c(v)
                                                    } catch (y) {
                                                        p && p(y)
                                                    }
                                            };
                                            try {
                                                l.open(["G", "E", "T"].join(""), f, !0)
                                            } catch {
                                                l.open(["G", "E", "T"].join(""), m + "/" + f, !0)
                                            }
                                            l.send()
                                        }
                                    }
                                }()), u.data.type === "loadAnimation") a.assetLoader.load(u.data.path, u.data.fullPath, function(h) {
                                a.dataManager.completeData(h), a.postMessage({
                                    id: u.data.id,
                                    payload: h,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: u.data.id,
                                    status: "error"
                                })
                            });
                            else if (u.data.type === "complete") {
                                var d = u.data.animation;
                                a.dataManager.completeData(d), a.postMessage({
                                    id: u.data.id,
                                    payload: d,
                                    status: "success"
                                })
                            } else u.data.type === "loadData" && a.assetLoader.load(u.data.path, u.data.fullPath, function(h) {
                                a.postMessage({
                                    id: u.data.id,
                                    payload: h,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: u.data.id,
                                    status: "error"
                                })
                            })
                        }), t.onmessage = function(u) {
                            var d = u.data,
                                h = d.id,
                                f = i[h];
                            i[h] = null, d.status === "success" ? f.onComplete(d.payload) : f.onError && f.onError()
                        })
                    }

                    function s(u, d) {
                        var h = "processId_" + (r += 1);
                        return i[h] = {
                            onComplete: u,
                            onError: d
                        }, h
                    }
                    return {
                        loadAnimation: function(u, d, h) {
                            o();
                            var f = s(d, h);
                            t.postMessage({
                                type: "loadAnimation",
                                path: u,
                                fullPath: window.location.origin + window.location.pathname,
                                id: f
                            })
                        },
                        loadData: function(u, d, h) {
                            o();
                            var f = s(d, h);
                            t.postMessage({
                                type: "loadData",
                                path: u,
                                fullPath: window.location.origin + window.location.pathname,
                                id: f
                            })
                        },
                        completeAnimation: function(u, d, h) {
                            o();
                            var f = s(d, h);
                            t.postMessage({
                                type: "complete",
                                animation: u,
                                id: f
                            })
                        }
                    }
                }(),
                ImagePreloader = function() {
                    var e = function() {
                        var s = createTag("canvas");
                        s.width = 1, s.height = 1;
                        var u = s.getContext("2d");
                        return u.fillStyle = "rgba(0,0,0,0)", u.fillRect(0, 0, 1, 1), s
                    }();

                    function t() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function r() {
                        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function i(s, u, d) {
                        var h = "";
                        if (s.e) h = s.p;
                        else if (u) {
                            var f = s.p;
                            f.indexOf("images/") !== -1 && (f = f.split("/")[1]), h = u + f
                        } else h = d, h += s.u ? s.u : "", h += s.p;
                        return h
                    }

                    function n(s) {
                        var u = 0,
                            d = setInterval(function() {
                                (s.getBBox().width || u > 500) && (this._imageLoaded(), clearInterval(d)), u += 1
                            }.bind(this), 50)
                    }

                    function a(s) {
                        var u = {
                                assetData: s
                            },
                            d = i(s, this.assetsPath, this.path);
                        return dataManager.loadData(d, function(h) {
                            u.img = h, this._footageLoaded()
                        }.bind(this), function() {
                            u.img = {}, this._footageLoaded()
                        }.bind(this)), u
                    }

                    function o() {
                        this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                    }
                    return o.prototype = {
                        loadAssets: function(s, u) {
                            var d;
                            this.imagesLoadedCb = u;
                            var h = s.length;
                            for (d = 0; d < h; d += 1) s[d].layers || (s[d].t && s[d].t !== "seq" ? s[d].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(s[d]))) : (this.totalImages += 1, this.images.push(this._createImageData(s[d]))))
                        },
                        setAssetsPath: function(s) {
                            this.assetsPath = s || ""
                        },
                        setPath: function(s) {
                            this.path = s || ""
                        },
                        loadedImages: function() {
                            return this.totalImages === this.loadedAssets
                        },
                        loadedFootages: function() {
                            return this.totalFootages === this.loadedFootagesCount
                        },
                        destroy: function() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        },
                        getAsset: function(s) {
                            for (var u = 0, d = this.images.length; u < d;) {
                                if (this.images[u].assetData === s) return this.images[u].img;
                                u += 1
                            }
                            return null
                        },
                        createImgData: function(s) {
                            var u = i(s, this.assetsPath, this.path),
                                d = createTag("img");
                            d.crossOrigin = "anonymous", d.addEventListener("load", this._imageLoaded, !1), d.addEventListener("error", function() {
                                h.img = e, this._imageLoaded()
                            }.bind(this), !1), d.src = u;
                            var h = {
                                img: d,
                                assetData: s
                            };
                            return h
                        },
                        createImageData: function(s) {
                            var u = i(s, this.assetsPath, this.path),
                                d = createNS("image");
                            isSafari ? this.testImageLoaded(d) : d.addEventListener("load", this._imageLoaded, !1), d.addEventListener("error", function() {
                                h.img = e, this._imageLoaded()
                            }.bind(this), !1), d.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this._elementHelper.append ? this._elementHelper.append(d) : this._elementHelper.appendChild(d);
                            var h = {
                                img: d,
                                assetData: s
                            };
                            return h
                        },
                        imageLoaded: t,
                        footageLoaded: r,
                        setCacheType: function(s, u) {
                            s === "svg" ? (this._elementHelper = u, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, o
                }();

            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(e, t) {
                    if (this._cbs[e])
                        for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](t)
                },
                addEventListener: function(e, t) {
                    return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
                        function() {
                            this.removeEventListener(e, t)
                        }.bind(this)
                },
                removeEventListener: function(e, t) {
                    if (t) {
                        if (this._cbs[e]) {
                            for (var r = 0, i = this._cbs[e].length; r < i;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, i -= 1), r += 1;
                            this._cbs[e].length || (this._cbs[e] = null)
                        }
                    } else this._cbs[e] = null
                }
            };
            var markerParser = function() {
                    function e(t) {
                        for (var r, i = t.split(`\r
    `), n = {}, a = 0, o = 0; o < i.length; o += 1)(r = i[o].split(":")).length === 2 && (n[r[0]] = r[1].trim(), a += 1);
                        if (a === 0) throw new Error;
                        return n
                    }
                    return function(t) {
                        for (var r = [], i = 0; i < t.length; i += 1) {
                            var n = t[i],
                                a = {
                                    time: n.tm,
                                    duration: n.dr
                                };
                            try {
                                a.payload = JSON.parse(t[i].cm)
                            } catch {
                                try {
                                    a.payload = e(t[i].cm)
                                } catch {
                                    a.payload = {
                                        name: t[i].cm
                                    }
                                }
                            }
                            r.push(a)
                        }
                        return r
                    }
                }(),
                ProjectInterface = function() {
                    function e(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function t(r) {
                            for (var i = 0, n = this.compositions.length; i < n;) {
                                if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                                i += 1
                            }
                            return null
                        }
                        return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
                    }
                }(),
                renderers = {},
                registerRenderer = function(e, t) {
                    renderers[e] = t
                };

            function getRenderer(e) {
                return renderers[e]
            }

            function getRegisteredRenderer() {
                if (renderers.canvas) return "canvas";
                for (var e in renderers)
                    if (renderers[e]) return e;
                return ""
            }

            function _typeof$4(e) {
                return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$4(e)
            }
            var AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
            };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
                (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                var t = "svg";
                e.animType ? t = e.animType : e.renderer && (t = e.renderer);
                var r = getRenderer(t);
                this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
            }, AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed")
            }, AnimationItem.prototype.setupAnimation = function(e) {
                dataManager.completeAnimation(e, this.configAnimation)
            }, AnimationItem.prototype.setData = function(e, t) {
                t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
                var r = {
                        wrapper: e,
                        animationData: t
                    },
                    i = e.attributes;
                r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                n === "false" ? r.loop = !1 : n === "true" ? r.loop = !0 : n !== "" && (r.loop = parseInt(n, 10));
                var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
            }, AnimationItem.prototype.includeLayers = function(e) {
                e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
                var t, r, i = this.animationData.layers,
                    n = i.length,
                    a = e.layers,
                    o = a.length;
                for (r = 0; r < o; r += 1)
                    for (t = 0; t < n;) {
                        if (i[t].id === a[r].id) {
                            i[t] = a[r];
                            break
                        }
                        t += 1
                    }
                if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
                    for (n = e.assets.length, t = 0; t < n; t += 1) this.animationData.assets.push(e.assets[t]);
                this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
            }, AnimationItem.prototype.onSegmentComplete = function(e) {
                this.animationData = e;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var e = this.animationData.segments;
                if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var t = e.shift();
                this.timeCompleted = t.time * this.frameRate;
                var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, AnimationItem.prototype.configAnimation = function(e) {
                if (this.renderer) try {
                    this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                } catch (t) {
                    this.triggerConfigError(t)
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                }
            }, AnimationItem.prototype.resize = function(e, t) {
                var r = typeof e == "number" ? e : void 0,
                    i = typeof t == "number" ? t : void 0;
                this.renderer.updateContainerSize(r, i)
            }, AnimationItem.prototype.setSubframe = function(e) {
                this.isSubframeEnabled = !!e
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
            }, AnimationItem.prototype.renderFrame = function() {
                if (this.isLoaded !== !1 && this.renderer) try {
                    this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (e) {
                    this.triggerRenderFrameError(e)
                }
            }, AnimationItem.prototype.play = function(e) {
                e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            }, AnimationItem.prototype.pause = function(e) {
                e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            }, AnimationItem.prototype.togglePause = function(e) {
                e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
            }, AnimationItem.prototype.stop = function(e) {
                e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, AnimationItem.prototype.getMarkerData = function(e) {
                for (var t, r = 0; r < this.markers.length; r += 1)
                    if ((t = this.markers[r]).payload && t.payload.name === e) return t;
                return null
            }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
                if (!r || this.name === r) {
                    var i = Number(e);
                    if (isNaN(i)) {
                        var n = this.getMarkerData(e);
                        n && this.goToAndStop(n.time, !0)
                    } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause()
                }
            }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
                if (!r || this.name === r) {
                    var i = Number(e);
                    if (isNaN(i)) {
                        var n = this.getMarkerData(e);
                        n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
                    } else this.goToAndStop(i, t, r);
                    this.play()
                }
            }, AnimationItem.prototype.advanceTime = function(e) {
                if (this.isPaused !== !0 && this.isLoaded !== !1) {
                    var t = this.currentRawFrame + e * this.frameModifier,
                        r = !1;
                    t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
                }
            }, AnimationItem.prototype.adjustSegment = function(e, t) {
                this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
            }, AnimationItem.prototype.setSegment = function(e, t) {
                var r = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
            }, AnimationItem.prototype.playSegments = function(e, t) {
                if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
                    var r, i = e.length;
                    for (r = 0; r < i; r += 1) this.segments.push(e[r])
                } else this.segments.push(e);
                this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(e) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
            }, AnimationItem.prototype.checkSegments = function(e) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
            }, AnimationItem.prototype.destroy = function(e) {
                e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
                this.currentRawFrame = e, this.gotoFrame()
            }, AnimationItem.prototype.setSpeed = function(e) {
                this.playSpeed = e, this.updaFrameModifier()
            }, AnimationItem.prototype.setDirection = function(e) {
                this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
            }, AnimationItem.prototype.setLoop = function(e) {
                this.loop = e
            }, AnimationItem.prototype.setVolume = function(e, t) {
                t && this.name !== t || this.audioController.setVolume(e)
            }, AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }, AnimationItem.prototype.mute = function(e) {
                e && this.name !== e || this.audioController.mute()
            }, AnimationItem.prototype.unmute = function(e) {
                e && this.name !== e || this.audioController.unmute()
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
            }, AnimationItem.prototype.getPath = function() {
                return this.path
            }, AnimationItem.prototype.getAssetsPath = function(e) {
                var t = "";
                if (e.e) t = e.p;
                else if (this.assetsPath) {
                    var r = e.p;
                    r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
                } else t = this.path, t += e.u ? e.u : "", t += e.p;
                return t
            }, AnimationItem.prototype.getAssetData = function(e) {
                for (var t = 0, r = this.assets.length; t < r;) {
                    if (e === this.assets[t].id) return this.assets[t];
                    t += 1
                }
                return null
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }, AnimationItem.prototype.show = function() {
                this.renderer.show()
            }, AnimationItem.prototype.getDuration = function(e) {
                return e ? this.totalFrames : this.totalFrames / this.frameRate
            }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
                try {
                    this.renderer.getElementByPath(e).updateDocumentData(t, r)
                } catch {}
            }, AnimationItem.prototype.trigger = function(e) {
                if (this._cbs && this._cbs[e]) switch (e) {
                    case "enterFrame":
                        this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(e, new BMDestroyEvent(e, this));
                        break;
                    default:
                        this.triggerEvent(e)
                }
                e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
                var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            }, AnimationItem.prototype.triggerConfigError = function(e) {
                var t = new BMConfigErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            };
            var animationManager = function() {
                    var e = {},
                        t = [],
                        r = 0,
                        i = 0,
                        n = 0,
                        a = !0,
                        o = !1;

                    function s(v) {
                        for (var l = 0, y = v.target; l < i;) t[l].animation === y && (t.splice(l, 1), l -= 1, i -= 1, y.isPaused || h()), l += 1
                    }

                    function u(v, l) {
                        if (!v) return null;
                        for (var y = 0; y < i;) {
                            if (t[y].elem === v && t[y].elem !== null) return t[y].animation;
                            y += 1
                        }
                        var g = new AnimationItem;
                        return f(g, v), g.setData(v, l), g
                    }

                    function d() {
                        n += 1, p()
                    }

                    function h() {
                        n -= 1
                    }

                    function f(v, l) {
                        v.addEventListener("destroy", s), v.addEventListener("_active", d), v.addEventListener("_idle", h), t.push({
                            elem: l,
                            animation: v
                        }), i += 1
                    }

                    function m(v) {
                        var l, y = v - r;
                        for (l = 0; l < i; l += 1) t[l].animation.advanceTime(y);
                        r = v, n && !o ? window.requestAnimationFrame(m) : a = !0
                    }

                    function c(v) {
                        r = v, window.requestAnimationFrame(m)
                    }

                    function p() {
                        !o && n && a && (window.requestAnimationFrame(c), a = !1)
                    }
                    return e.registerAnimation = u, e.loadAnimation = function(v) {
                        var l = new AnimationItem;
                        return f(l, null), l.setParams(v), l
                    }, e.setSpeed = function(v, l) {
                        var y;
                        for (y = 0; y < i; y += 1) t[y].animation.setSpeed(v, l)
                    }, e.setDirection = function(v, l) {
                        var y;
                        for (y = 0; y < i; y += 1) t[y].animation.setDirection(v, l)
                    }, e.play = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.play(v)
                    }, e.pause = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.pause(v)
                    }, e.stop = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.stop(v)
                    }, e.togglePause = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.togglePause(v)
                    }, e.searchAnimations = function(v, l, y) {
                        var g, b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            S = b.length;
                        for (g = 0; g < S; g += 1) y && b[g].setAttribute("data-bm-type", y), u(b[g], v);
                        if (l && S === 0) {
                            y || (y = "svg");
                            var _ = document.getElementsByTagName("body")[0];
                            _.innerText = "";
                            var I = createTag("div");
                            I.style.width = "100%", I.style.height = "100%", I.setAttribute("data-bm-type", y), _.appendChild(I), u(I, v)
                        }
                    }, e.resize = function() {
                        var v;
                        for (v = 0; v < i; v += 1) t[v].animation.resize()
                    }, e.goToAndStop = function(v, l, y) {
                        var g;
                        for (g = 0; g < i; g += 1) t[g].animation.goToAndStop(v, l, y)
                    }, e.destroy = function(v) {
                        var l;
                        for (l = i - 1; l >= 0; l -= 1) t[l].animation.destroy(v)
                    }, e.freeze = function() {
                        o = !0
                    }, e.unfreeze = function() {
                        o = !1, p()
                    }, e.setVolume = function(v, l) {
                        var y;
                        for (y = 0; y < i; y += 1) t[y].animation.setVolume(v, l)
                    }, e.mute = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.mute(v)
                    }, e.unmute = function(v) {
                        var l;
                        for (l = 0; l < i; l += 1) t[l].animation.unmute(v)
                    }, e.getRegisteredAnimations = function() {
                        var v, l = t.length,
                            y = [];
                        for (v = 0; v < l; v += 1) y.push(t[v].animation);
                        return y
                    }, e
                }(),
                BezierFactory = function() {
                    var e = {
                            getBezierEasing: function(h, f, m, c, p) {
                                var v = p || ("bez_" + h + "_" + f + "_" + m + "_" + c).replace(/\./g, "p");
                                if (t[v]) return t[v];
                                var l = new d([h, f, m, c]);
                                return t[v] = l, l
                            }
                        },
                        t = {},
                        r = .1,
                        i = typeof Float32Array == "function";

                    function n(h, f) {
                        return 1 - 3 * f + 3 * h
                    }

                    function a(h, f) {
                        return 3 * f - 6 * h
                    }

                    function o(h) {
                        return 3 * h
                    }

                    function s(h, f, m) {
                        return ((n(f, m) * h + a(f, m)) * h + o(f)) * h
                    }

                    function u(h, f, m) {
                        return 3 * n(f, m) * h * h + 2 * a(f, m) * h + o(f)
                    }

                    function d(h) {
                        this._p = h, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return d.prototype = {
                        get: function(h) {
                            var f = this._p[0],
                                m = this._p[1],
                                c = this._p[2],
                                p = this._p[3];
                            return this._precomputed || this._precompute(), f === m && c === p ? h : h === 0 ? 0 : h === 1 ? 1 : s(this._getTForX(h), m, p)
                        },
                        _precompute: function() {
                            var h = this._p[0],
                                f = this._p[1],
                                m = this._p[2],
                                c = this._p[3];
                            this._precomputed = !0, h === f && m === c || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var h = this._p[0], f = this._p[2], m = 0; m < 11; ++m) this._mSampleValues[m] = s(m * r, h, f)
                        },
                        _getTForX: function(h) {
                            for (var f = this._p[0], m = this._p[2], c = this._mSampleValues, p = 0, v = 1; v !== 10 && c[v] <= h; ++v) p += r;
                            var l = p + (h - c[--v]) / (c[v + 1] - c[v]) * r,
                                y = u(l, f, m);
                            return y >= .001 ? function(g, b, S, _) {
                                for (var I = 0; I < 4; ++I) {
                                    var w = u(b, S, _);
                                    if (w === 0) return b;
                                    b -= (s(b, S, _) - g) / w
                                }
                                return b
                            }(h, l, f, m) : y === 0 ? l : function(g, b, S, _, I) {
                                var w, C, F = 0;
                                do(w = s(C = b + (S - b) / 2, _, I) - g) > 0 ? S = C : b = C; while (Math.abs(w) > 1e-7 && ++F < 10);
                                return C
                            }(h, p, p + r, f, m)
                        }
                    }, e
                }(),
                pooling = {
                    double: function(e) {
                        return e.concat(createSizedArray(e.length))
                    }
                },
                poolFactory = function(e, t, r) {
                    var i = 0,
                        n = e,
                        a = createSizedArray(n);
                    return {
                        newElement: function() {
                            return i ? a[i -= 1] : t()
                        },
                        release: function(o) {
                            i === n && (a = pooling.double(a), n *= 2), r && r(o), a[i] = o, i += 1
                        }
                    }
                },
                bezierLengthPool = poolFactory(8, function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }),
                segmentsLengthPool = poolFactory(8, function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function(e) {
                    var t, r = e.lengths.length;
                    for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
                    e.lengths.length = 0
                });

            function bezFunction() {
                var e = Math;

                function t(d, h, f, m, c, p) {
                    var v = d * m + h * c + f * p - c * m - p * d - f * h;
                    return v > -.001 && v < .001
                }
                var r = function(d, h, f, m) {
                    var c, p, v, l, y, g, b = getDefaultCurveSegments(),
                        S = 0,
                        _ = [],
                        I = [],
                        w = bezierLengthPool.newElement();
                    for (v = f.length, c = 0; c < b; c += 1) {
                        for (y = c / (b - 1), g = 0, p = 0; p < v; p += 1) l = bmPow(1 - y, 3) * d[p] + 3 * bmPow(1 - y, 2) * y * f[p] + 3 * (1 - y) * bmPow(y, 2) * m[p] + bmPow(y, 3) * h[p], _[p] = l, I[p] !== null && (g += bmPow(_[p] - I[p], 2)), I[p] = _[p];
                        g && (S += g = bmSqrt(g)), w.percents[c] = y, w.lengths[c] = S
                    }
                    return w.addedLength = S, w
                };

                function i(d) {
                    this.segmentLength = 0, this.points = new Array(d)
                }

                function n(d, h) {
                    this.partialLength = d, this.point = h
                }
                var a, o = (a = {}, function(d, h, f, m) {
                    var c = (d[0] + "_" + d[1] + "_" + h[0] + "_" + h[1] + "_" + f[0] + "_" + f[1] + "_" + m[0] + "_" + m[1]).replace(/\./g, "p");
                    if (!a[c]) {
                        var p, v, l, y, g, b, S, _ = getDefaultCurveSegments(),
                            I = 0,
                            w = null;
                        d.length === 2 && (d[0] !== h[0] || d[1] !== h[1]) && t(d[0], d[1], h[0], h[1], d[0] + f[0], d[1] + f[1]) && t(d[0], d[1], h[0], h[1], h[0] + m[0], h[1] + m[1]) && (_ = 2);
                        var C = new i(_);
                        for (l = f.length, p = 0; p < _; p += 1) {
                            for (S = createSizedArray(l), g = p / (_ - 1), b = 0, v = 0; v < l; v += 1) y = bmPow(1 - g, 3) * d[v] + 3 * bmPow(1 - g, 2) * g * (d[v] + f[v]) + 3 * (1 - g) * bmPow(g, 2) * (h[v] + m[v]) + bmPow(g, 3) * h[v], S[v] = y, w !== null && (b += bmPow(S[v] - w[v], 2));
                            I += b = bmSqrt(b), C.points[p] = new n(b, S), w = S
                        }
                        C.segmentLength = I, a[c] = C
                    }
                    return a[c]
                });

                function s(d, h) {
                    var f = h.percents,
                        m = h.lengths,
                        c = f.length,
                        p = bmFloor((c - 1) * d),
                        v = d * h.addedLength,
                        l = 0;
                    if (p === c - 1 || p === 0 || v === m[p]) return f[p];
                    for (var y = m[p] > v ? -1 : 1, g = !0; g;)
                        if (m[p] <= v && m[p + 1] > v ? (l = (v - m[p]) / (m[p + 1] - m[p]), g = !1) : p += y, p < 0 || p >= c - 1) {
                            if (p === c - 1) return f[p];
                            g = !1
                        } return f[p] + (f[p + 1] - f[p]) * l
                }
                var u = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(d) {
                        var h, f = segmentsLengthPool.newElement(),
                            m = d.c,
                            c = d.v,
                            p = d.o,
                            v = d.i,
                            l = d._length,
                            y = f.lengths,
                            g = 0;
                        for (h = 0; h < l - 1; h += 1) y[h] = r(c[h], c[h + 1], p[h], v[h + 1]), g += y[h].addedLength;
                        return m && l && (y[h] = r(c[h], c[0], p[h], v[0]), g += y[h].addedLength), f.totalLength = g, f
                    },
                    getNewSegment: function(d, h, f, m, c, p, v) {
                        c < 0 ? c = 0 : c > 1 && (c = 1);
                        var l, y = s(c, v),
                            g = s(p = p > 1 ? 1 : p, v),
                            b = d.length,
                            S = 1 - y,
                            _ = 1 - g,
                            I = S * S * S,
                            w = y * S * S * 3,
                            C = y * y * S * 3,
                            F = y * y * y,
                            M = S * S * _,
                            A = y * S * _ + S * y * _ + S * S * g,
                            D = y * y * _ + S * y * g + y * S * g,
                            q = y * y * g,
                            T = S * _ * _,
                            L = y * _ * _ + S * g * _ + S * _ * g,
                            N = y * g * _ + S * g * g + y * _ * g,
                            H = y * g * g,
                            P = _ * _ * _,
                            R = g * _ * _ + _ * g * _ + _ * _ * g,
                            z = g * g * _ + _ * g * g + g * _ * g,
                            K = g * g * g;
                        for (l = 0; l < b; l += 1) u[4 * l] = e.round(1e3 * (I * d[l] + w * f[l] + C * m[l] + F * h[l])) / 1e3, u[4 * l + 1] = e.round(1e3 * (M * d[l] + A * f[l] + D * m[l] + q * h[l])) / 1e3, u[4 * l + 2] = e.round(1e3 * (T * d[l] + L * f[l] + N * m[l] + H * h[l])) / 1e3, u[4 * l + 3] = e.round(1e3 * (P * d[l] + R * f[l] + z * m[l] + K * h[l])) / 1e3;
                        return u
                    },
                    getPointInSegment: function(d, h, f, m, c, p) {
                        var v = s(c, p),
                            l = 1 - v;
                        return [e.round(1e3 * (l * l * l * d[0] + (v * l * l + l * v * l + l * l * v) * f[0] + (v * v * l + l * v * v + v * l * v) * m[0] + v * v * v * h[0])) / 1e3, e.round(1e3 * (l * l * l * d[1] + (v * l * l + l * v * l + l * l * v) * f[1] + (v * v * l + l * v * v + v * l * v) * m[1] + v * v * v * h[1])) / 1e3]
                    },
                    buildBezierData: o,
                    pointOnLine2D: t,
                    pointOnLine3D: function(d, h, f, m, c, p, v, l, y) {
                        if (f === 0 && p === 0 && y === 0) return t(d, h, m, c, v, l);
                        var g, b = e.sqrt(e.pow(m - d, 2) + e.pow(c - h, 2) + e.pow(p - f, 2)),
                            S = e.sqrt(e.pow(v - d, 2) + e.pow(l - h, 2) + e.pow(y - f, 2)),
                            _ = e.sqrt(e.pow(v - m, 2) + e.pow(l - c, 2) + e.pow(y - p, 2));
                        return (g = b > S ? b > _ ? b - S - _ : _ - S - b : _ > S ? _ - S - b : S - b - _) > -1e-4 && g < 1e-4
                    }
                }
            }
            var bez = bezFunction(),
                initFrame = initialDefaultFrame,
                mathAbs = Math.abs;

            function interpolateValue(e, t) {
                var r, i = this.offsetTime;
                this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
                for (var n, a, o, s, u, d, h, f, m, c = t.lastIndex, p = c, v = this.keyframes.length - 1, l = !0; l;) {
                    if (n = this.keyframes[p], a = this.keyframes[p + 1], p === v - 1 && e >= a.t - i) {
                        n.h && (n = a), c = 0;
                        break
                    }
                    if (a.t - i > e) {
                        c = p;
                        break
                    }
                    p < v - 1 ? p += 1 : (c = 0, l = !1)
                }
                o = this.keyframesMetadata[p] || {};
                var y, g = a.t - i,
                    b = n.t - i;
                if (n.to) {
                    o.bezierData || (o.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
                    var S = o.bezierData;
                    if (e >= g || e < b) {
                        var _ = e >= g ? S.points.length - 1 : 0;
                        for (u = S.points[_].point.length, s = 0; s < u; s += 1) r[s] = S.points[_].point[s]
                    } else {
                        o.__fnct ? m = o.__fnct : (m = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, o.__fnct = m), d = m((e - b) / (g - b));
                        var I, w = S.segmentLength * d,
                            C = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastAddedLength : 0;
                        for (f = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastPoint : 0, l = !0, h = S.points.length; l;) {
                            if (C += S.points[f].partialLength, w === 0 || d === 0 || f === S.points.length - 1) {
                                for (u = S.points[f].point.length, s = 0; s < u; s += 1) r[s] = S.points[f].point[s];
                                break
                            }
                            if (w >= C && w < C + S.points[f + 1].partialLength) {
                                for (I = (w - C) / S.points[f + 1].partialLength, u = S.points[f].point.length, s = 0; s < u; s += 1) r[s] = S.points[f].point[s] + (S.points[f + 1].point[s] - S.points[f].point[s]) * I;
                                break
                            }
                            f < h - 1 ? f += 1 : l = !1
                        }
                        t._lastPoint = f, t._lastAddedLength = C - S.points[f].partialLength, t._lastKeyframeIndex = p
                    }
                } else {
                    var F, M, A, D, q;
                    if (v = n.s.length, y = a.s || n.e, this.sh && n.h !== 1) e >= g ? (r[0] = y[0], r[1] = y[1], r[2] = y[2]) : e <= b ? (r[0] = n.s[0], r[1] = n.s[1], r[2] = n.s[2]) : quaternionToEuler(r, slerp(createQuaternion(n.s), createQuaternion(y), (e - b) / (g - b)));
                    else
                        for (p = 0; p < v; p += 1) n.h !== 1 && (e >= g ? d = 1 : e < b ? d = 0 : (n.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[p] ? m = o.__fnct[p] : (F = n.o.x[p] === void 0 ? n.o.x[0] : n.o.x[p], M = n.o.y[p] === void 0 ? n.o.y[0] : n.o.y[p], A = n.i.x[p] === void 0 ? n.i.x[0] : n.i.x[p], D = n.i.y[p] === void 0 ? n.i.y[0] : n.i.y[p], m = BezierFactory.getBezierEasing(F, M, A, D).get, o.__fnct[p] = m)) : o.__fnct ? m = o.__fnct : (F = n.o.x, M = n.o.y, A = n.i.x, D = n.i.y, m = BezierFactory.getBezierEasing(F, M, A, D).get, n.keyframeMetadata = m), d = m((e - b) / (g - b)))), y = a.s || n.e, q = n.h === 1 ? n.s[p] : n.s[p] + (y[p] - n.s[p]) * d, this.propType === "multidimensional" ? r[p] = q : r = q
                }
                return t.lastIndex = c, r
            }

            function slerp(e, t, r) {
                var i, n, a, o, s, u = [],
                    d = e[0],
                    h = e[1],
                    f = e[2],
                    m = e[3],
                    c = t[0],
                    p = t[1],
                    v = t[2],
                    l = t[3];
                return (n = d * c + h * p + f * v + m * l) < 0 && (n = -n, c = -c, p = -p, v = -v, l = -l), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), o = Math.sin((1 - r) * i) / a, s = Math.sin(r * i) / a) : (o = 1 - r, s = r), u[0] = o * d + s * c, u[1] = o * h + s * p, u[2] = o * f + s * v, u[3] = o * m + s * l, u
            }

            function quaternionToEuler(e, t) {
                var r = t[0],
                    i = t[1],
                    n = t[2],
                    a = t[3],
                    o = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
                    s = Math.asin(2 * r * i + 2 * n * a),
                    u = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
                e[0] = o / degToRads, e[1] = s / degToRads, e[2] = u / degToRads
            }

            function createQuaternion(e) {
                var t = e[0] * degToRads,
                    r = e[1] * degToRads,
                    i = e[2] * degToRads,
                    n = Math.cos(t / 2),
                    a = Math.cos(r / 2),
                    o = Math.cos(i / 2),
                    s = Math.sin(t / 2),
                    u = Math.sin(r / 2),
                    d = Math.sin(i / 2);
                return [s * u * o + n * a * d, s * a * o + n * u * d, n * u * o - s * a * d, n * a * o - s * u * d]
            }

            function getValueAtCurrentTime() {
                var e = this.comp.renderedFrame - this.offsetTime,
                    t = this.keyframes[0].t - this.offsetTime,
                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var i = this.interpolateValue(e, this._caching);
                    this.pv = i
                }
                return this._caching.lastFrame = e, this.pv
            }

            function setVValue(e) {
                var t;
                if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
                else
                    for (var r = 0, i = this.v.length; r < i;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
            }

            function processEffectsSequence() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        var e;
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var t = this.effectsSequence.length,
                            r = this.kf ? this.pv : this.data.k;
                        for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
                        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
            }

            function addEffect(e) {
                this.effectsSequence.push(e), this.container.addDynamicProperty(this)
            }

            function ValueProperty(e, t, r, i) {
                this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
            }

            function MultiDimensionalProperty(e, t, r, i) {
                var n;
                this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var a = t.k.length;
                for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), n = 0; n < a; n += 1) this.v[n] = t.k[n] * this.mult, this.pv[n] = t.k[n];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
            }

            function KeyframedValueProperty(e, t, r, i) {
                this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
            }

            function KeyframedMultidimensionalProperty(e, t, r, i) {
                var n;
                this.propType = "multidimensional";
                var a, o, s, u, d = t.k.length;
                for (n = 0; n < d - 1; n += 1) t.k[n].to && t.k[n].s && t.k[n + 1] && t.k[n + 1].s && (a = t.k[n].s, o = t.k[n + 1].s, s = t.k[n].to, u = t.k[n].ti, (a.length === 2 && (a[0] !== o[0] || a[1] !== o[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], a[0] + s[0], a[1] + s[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], o[0] + u[0], o[1] + u[1]) || a.length === 3 && (a[0] !== o[0] || a[1] !== o[1] || a[2] !== o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], a[0] + s[0], a[1] + s[1], a[2] + s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], o[0] + u[0], o[1] + u[1], o[2] + u[2])) && (t.k[n].to = null, t.k[n].ti = null), a[0] === o[0] && a[1] === o[1] && s[0] === 0 && s[1] === 0 && u[0] === 0 && u[1] === 0 && (a.length === 2 || a[2] === o[2] && s[2] === 0 && u[2] === 0) && (t.k[n].to = null, t.k[n].ti = null));
                this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                var h = t.k[0].s.length;
                for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), n = 0; n < h; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: createTypedArray("float32", h)
                }, this.addEffect = addEffect
            }
            var PropertyFactory = {
                getProp: function(e, t, r, i, n) {
                    var a;
                    if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
                        if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, i, n);
                        else switch (r) {
                            case 0:
                                a = new KeyframedValueProperty(e, t, i, n);
                                break;
                            case 1:
                                a = new KeyframedMultidimensionalProperty(e, t, i, n)
                        } else a = new ValueProperty(e, t, i, n);
                    return a.effectsSequence.length && n.addDynamicProperty(a), a
                }
            };

            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(e) {
                    this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var e;
                    this._mdf = !1;
                    var t = this.dynamicProperties.length;
                    for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(e) {
                    this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2)
            });

            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(e, t) {
                this.c = e, this.setLength(t);
                for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
            }, ShapePath.prototype.setLength = function(e) {
                for (; this._maxLength < e;) this.doubleArrayLength();
                this._length = e
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
            }, ShapePath.prototype.setXYAt = function(e, t, r, i, n) {
                var a;
                switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                    case "v":
                        a = this.v;
                        break;
                    case "i":
                        a = this.i;
                        break;
                    case "o":
                        a = this.o;
                        break;
                    default:
                        a = []
                }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = e, a[i][1] = t
            }, ShapePath.prototype.setTripleAt = function(e, t, r, i, n, a, o, s) {
                this.setXYAt(e, t, "v", o, s), this.setXYAt(r, i, "o", o, s), this.setXYAt(n, a, "i", o, s)
            }, ShapePath.prototype.reverse = function() {
                var e = new ShapePath;
                e.setPathData(this.c, this._length);
                var t = this.v,
                    r = this.o,
                    i = this.i,
                    n = 0;
                this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
                var a, o = this._length - 1,
                    s = this._length;
                for (a = n; a < s; a += 1) e.setTripleAt(t[o][0], t[o][1], i[o][0], i[o][1], r[o][0], r[o][1], a, !1), o -= 1;
                return e
            }, ShapePath.prototype.length = function() {
                return this._length
            };
            var shapePool = (factory = poolFactory(4, function() {
                    return new ShapePath
                }, function(e) {
                    var t, r = e._length;
                    for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
                    e._length = 0, e.c = !1
                }), factory.clone = function(e) {
                    var t, r = factory.newElement(),
                        i = e._length === void 0 ? e.v.length : e._length;
                    for (r.setLength(i), r.c = e.c, t = 0; t < i; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
                    return r
                }, factory),
                factory;

            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
            }
            ShapeCollection.prototype.addShape = function(e) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
            }, ShapeCollection.prototype.releaseShapes = function() {
                var e;
                for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
                this._length = 0
            };
            var shapeCollectionPool = (ob = {
                    newShapeCollection: function() {
                        return _length ? pool[_length -= 1] : new ShapeCollection
                    },
                    release: function(e) {
                        var t, r = e._length;
                        for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
                        e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
                    }
                }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                    var e = -999999;

                    function t(c, p, v) {
                        var l, y, g, b, S, _, I, w, C, F = v.lastIndex,
                            M = this.keyframes;
                        if (c < M[0].t - this.offsetTime) l = M[0].s[0], g = !0, F = 0;
                        else if (c >= M[M.length - 1].t - this.offsetTime) l = M[M.length - 1].s ? M[M.length - 1].s[0] : M[M.length - 2].e[0], g = !0;
                        else {
                            for (var A, D, q, T = F, L = M.length - 1, N = !0; N && (A = M[T], !((D = M[T + 1]).t - this.offsetTime > c));) T < L - 1 ? T += 1 : N = !1;
                            if (q = this.keyframesMetadata[T] || {}, F = T, !(g = A.h === 1)) {
                                if (c >= D.t - this.offsetTime) w = 1;
                                else if (c < A.t - this.offsetTime) w = 0;
                                else {
                                    var H;
                                    q.__fnct ? H = q.__fnct : (H = BezierFactory.getBezierEasing(A.o.x, A.o.y, A.i.x, A.i.y).get, q.__fnct = H), w = H((c - (A.t - this.offsetTime)) / (D.t - this.offsetTime - (A.t - this.offsetTime)))
                                }
                                y = D.s ? D.s[0] : A.e[0]
                            }
                            l = A.s[0]
                        }
                        for (_ = p._length, I = l.i[0].length, v.lastIndex = F, b = 0; b < _; b += 1)
                            for (S = 0; S < I; S += 1) C = g ? l.i[b][S] : l.i[b][S] + (y.i[b][S] - l.i[b][S]) * w, p.i[b][S] = C, C = g ? l.o[b][S] : l.o[b][S] + (y.o[b][S] - l.o[b][S]) * w, p.o[b][S] = C, C = g ? l.v[b][S] : l.v[b][S] + (y.v[b][S] - l.v[b][S]) * w, p.v[b][S] = C
                    }

                    function r() {
                        var c = this.comp.renderedFrame - this.offsetTime,
                            p = this.keyframes[0].t - this.offsetTime,
                            v = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            l = this._caching.lastFrame;
                        return l !== e && (l < p && c < p || l > v && c > v) || (this._caching.lastIndex = l < c ? this._caching.lastIndex : 0, this.interpolateShape(c, this.pv, this._caching)), this._caching.lastFrame = c, this.pv
                    }

                    function i() {
                        this.paths = this.localShapeCollection
                    }

                    function n(c) {
                        (function(p, v) {
                            if (p._length !== v._length || p.c !== v.c) return !1;
                            var l, y = p._length;
                            for (l = 0; l < y; l += 1)
                                if (p.v[l][0] !== v.v[l][0] || p.v[l][1] !== v.v[l][1] || p.o[l][0] !== v.o[l][0] || p.o[l][1] !== v.o[l][1] || p.i[l][0] !== v.i[l][0] || p.i[l][1] !== v.i[l][1]) return !1;
                            return !0
                        })(this.v, c) || (this.v = shapePool.clone(c), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var c, p;
                                    this.lock = !0, this._mdf = !1, c = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var v = this.effectsSequence.length;
                                    for (p = 0; p < v; p += 1) c = this.effectsSequence[p](c);
                                    this.setVValue(c), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function o(c, p, v) {
                        this.propType = "shape", this.comp = c.comp, this.container = c, this.elem = c, this.data = p, this.k = !1, this.kf = !1, this._mdf = !1;
                        var l = v === 3 ? p.pt.k : p.ks.k;
                        this.v = shapePool.clone(l), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                    }

                    function s(c) {
                        this.effectsSequence.push(c), this.container.addDynamicProperty(this)
                    }

                    function u(c, p, v) {
                        this.propType = "shape", this.comp = c.comp, this.elem = c, this.container = c, this.offsetTime = c.data.st, this.keyframes = v === 3 ? p.pt.k : p.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                        var l = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, l), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
                            lastFrame: e,
                            lastIndex: 0
                        }, this.effectsSequence = [r.bind(this)]
                    }
                    o.prototype.interpolateShape = t, o.prototype.getValue = a, o.prototype.setVValue = n, o.prototype.addEffect = s, u.prototype.getValue = a, u.prototype.interpolateShape = t, u.prototype.setVValue = n, u.prototype.addEffect = s;
                    var d = function() {
                            var c = roundCorner;

                            function p(v, l) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = l.d, this.elem = v, this.comp = v.comp, this.frameId = -1, this.initDynamicPropertyContainer(v), this.p = PropertyFactory.getProp(v, l.p, 1, 0, this), this.s = PropertyFactory.getProp(v, l.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return p.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var v = this.p.v[0],
                                        l = this.p.v[1],
                                        y = this.s.v[0] / 2,
                                        g = this.s.v[1] / 2,
                                        b = this.d !== 3,
                                        S = this.v;
                                    S.v[0][0] = v, S.v[0][1] = l - g, S.v[1][0] = b ? v + y : v - y, S.v[1][1] = l, S.v[2][0] = v, S.v[2][1] = l + g, S.v[3][0] = b ? v - y : v + y, S.v[3][1] = l, S.i[0][0] = b ? v - y * c : v + y * c, S.i[0][1] = l - g, S.i[1][0] = b ? v + y : v - y, S.i[1][1] = l - g * c, S.i[2][0] = b ? v + y * c : v - y * c, S.i[2][1] = l + g, S.i[3][0] = b ? v - y : v + y, S.i[3][1] = l + g * c, S.o[0][0] = b ? v + y * c : v - y * c, S.o[0][1] = l - g, S.o[1][0] = b ? v + y : v - y, S.o[1][1] = l + g * c, S.o[2][0] = b ? v - y * c : v + y * c, S.o[2][1] = l + g, S.o[3][0] = b ? v - y : v + y, S.o[3][1] = l - g * c
                                }
                            }, extendPrototype([DynamicPropertyContainer], p), p
                        }(),
                        h = function() {
                            function c(p, v) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = p, this.comp = p.comp, this.data = v, this.frameId = -1, this.d = v.d, this.initDynamicPropertyContainer(p), v.sy === 1 ? (this.ir = PropertyFactory.getProp(p, v.ir, 0, 0, this), this.is = PropertyFactory.getProp(p, v.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(p, v.pt, 0, 0, this), this.p = PropertyFactory.getProp(p, v.p, 1, 0, this), this.r = PropertyFactory.getProp(p, v.r, 0, degToRads, this), this.or = PropertyFactory.getProp(p, v.or, 0, 0, this), this.os = PropertyFactory.getProp(p, v.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return c.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var p, v, l, y, g = 2 * Math.floor(this.pt.v),
                                        b = 2 * Math.PI / g,
                                        S = !0,
                                        _ = this.or.v,
                                        I = this.ir.v,
                                        w = this.os.v,
                                        C = this.is.v,
                                        F = 2 * Math.PI * _ / (2 * g),
                                        M = 2 * Math.PI * I / (2 * g),
                                        A = -Math.PI / 2;
                                    A += this.r.v;
                                    var D = this.data.d === 3 ? -1 : 1;
                                    for (this.v._length = 0, p = 0; p < g; p += 1) {
                                        l = S ? w : C, y = S ? F : M;
                                        var q = (v = S ? _ : I) * Math.cos(A),
                                            T = v * Math.sin(A),
                                            L = q === 0 && T === 0 ? 0 : T / Math.sqrt(q * q + T * T),
                                            N = q === 0 && T === 0 ? 0 : -q / Math.sqrt(q * q + T * T);
                                        q += +this.p.v[0], T += +this.p.v[1], this.v.setTripleAt(q, T, q - L * y * l * D, T - N * y * l * D, q + L * y * l * D, T + N * y * l * D, p, !0), S = !S, A += b * D
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var p, v = Math.floor(this.pt.v),
                                        l = 2 * Math.PI / v,
                                        y = this.or.v,
                                        g = this.os.v,
                                        b = 2 * Math.PI * y / (4 * v),
                                        S = .5 * -Math.PI,
                                        _ = this.data.d === 3 ? -1 : 1;
                                    for (S += this.r.v, this.v._length = 0, p = 0; p < v; p += 1) {
                                        var I = y * Math.cos(S),
                                            w = y * Math.sin(S),
                                            C = I === 0 && w === 0 ? 0 : w / Math.sqrt(I * I + w * w),
                                            F = I === 0 && w === 0 ? 0 : -I / Math.sqrt(I * I + w * w);
                                        I += +this.p.v[0], w += +this.p.v[1], this.v.setTripleAt(I, w, I - C * b * g * _, w - F * b * g * _, I + C * b * g * _, w + F * b * g * _, p, !0), S += l * _
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], c), c
                        }(),
                        f = function() {
                            function c(p, v) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = p, this.comp = p.comp, this.frameId = -1, this.d = v.d, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, v.p, 1, 0, this), this.s = PropertyFactory.getProp(p, v.s, 1, 0, this), this.r = PropertyFactory.getProp(p, v.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return c.prototype = {
                                convertRectToPath: function() {
                                    var p = this.p.v[0],
                                        v = this.p.v[1],
                                        l = this.s.v[0] / 2,
                                        y = this.s.v[1] / 2,
                                        g = bmMin(l, y, this.r.v),
                                        b = g * (1 - roundCorner);
                                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + l, v - y + g, p + l, v - y + g, p + l, v - y + b, 0, !0), this.v.setTripleAt(p + l, v + y - g, p + l, v + y - b, p + l, v + y - g, 1, !0), g !== 0 ? (this.v.setTripleAt(p + l - g, v + y, p + l - g, v + y, p + l - b, v + y, 2, !0), this.v.setTripleAt(p - l + g, v + y, p - l + b, v + y, p - l + g, v + y, 3, !0), this.v.setTripleAt(p - l, v + y - g, p - l, v + y - g, p - l, v + y - b, 4, !0), this.v.setTripleAt(p - l, v - y + g, p - l, v - y + b, p - l, v - y + g, 5, !0), this.v.setTripleAt(p - l + g, v - y, p - l + g, v - y, p - l + b, v - y, 6, !0), this.v.setTripleAt(p + l - g, v - y, p + l - b, v - y, p + l - g, v - y, 7, !0)) : (this.v.setTripleAt(p - l, v + y, p - l + b, v + y, p - l, v + y, 2), this.v.setTripleAt(p - l, v - y, p - l, v - y + b, p - l, v - y, 3))) : (this.v.setTripleAt(p + l, v - y + g, p + l, v - y + b, p + l, v - y + g, 0, !0), g !== 0 ? (this.v.setTripleAt(p + l - g, v - y, p + l - g, v - y, p + l - b, v - y, 1, !0), this.v.setTripleAt(p - l + g, v - y, p - l + b, v - y, p - l + g, v - y, 2, !0), this.v.setTripleAt(p - l, v - y + g, p - l, v - y + g, p - l, v - y + b, 3, !0), this.v.setTripleAt(p - l, v + y - g, p - l, v + y - b, p - l, v + y - g, 4, !0), this.v.setTripleAt(p - l + g, v + y, p - l + g, v + y, p - l + b, v + y, 5, !0), this.v.setTripleAt(p + l - g, v + y, p + l - b, v + y, p + l - g, v + y, 6, !0), this.v.setTripleAt(p + l, v + y - g, p + l, v + y - g, p + l, v + y - b, 7, !0)) : (this.v.setTripleAt(p - l, v - y, p - l + b, v - y, p - l, v - y, 1, !0), this.v.setTripleAt(p - l, v + y, p - l, v + y - b, p - l, v + y, 2, !0), this.v.setTripleAt(p + l, v + y, p + l - b, v + y, p + l, v + y, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: i
                            }, extendPrototype([DynamicPropertyContainer], c), c
                        }(),
                        m = {
                            getShapeProp: function(c, p, v) {
                                var l;
                                return v === 3 || v === 4 ? l = (v === 3 ? p.pt : p.ks).k.length ? new u(c, p, v) : new o(c, p, v) : v === 5 ? l = new f(c, p) : v === 6 ? l = new d(c, p) : v === 7 && (l = new h(c, p)), l.k && c.addDynamicProperty(l), l
                            },
                            getConstructorFunction: function() {
                                return o
                            },
                            getKeyframedConstructorFunction: function() {
                                return u
                            }
                        };
                    return m
                }(),
                Matrix = function() {
                    var e = Math.cos,
                        t = Math.sin,
                        r = Math.tan,
                        i = Math.round;

                    function n() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function a(P) {
                        if (P === 0) return this;
                        var R = e(P),
                            z = t(P);
                        return this._t(R, -z, 0, 0, z, R, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function o(P) {
                        if (P === 0) return this;
                        var R = e(P),
                            z = t(P);
                        return this._t(1, 0, 0, 0, 0, R, -z, 0, 0, z, R, 0, 0, 0, 0, 1)
                    }

                    function s(P) {
                        if (P === 0) return this;
                        var R = e(P),
                            z = t(P);
                        return this._t(R, 0, z, 0, 0, 1, 0, 0, -z, 0, R, 0, 0, 0, 0, 1)
                    }

                    function u(P) {
                        if (P === 0) return this;
                        var R = e(P),
                            z = t(P);
                        return this._t(R, -z, 0, 0, z, R, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function d(P, R) {
                        return this._t(1, R, P, 1, 0, 0)
                    }

                    function h(P, R) {
                        return this.shear(r(P), r(R))
                    }

                    function f(P, R) {
                        var z = e(R),
                            K = t(R);
                        return this._t(z, K, 0, 0, -K, z, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(P), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(z, -K, 0, 0, K, z, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function m(P, R, z) {
                        return z || z === 0 || (z = 1), P === 1 && R === 1 && z === 1 ? this : this._t(P, 0, 0, 0, 0, R, 0, 0, 0, 0, z, 0, 0, 0, 0, 1)
                    }

                    function c(P, R, z, K, re, W, ne, ie, me, te, ae, Ae, pe, Se, Ce, _e) {
                        return this.props[0] = P, this.props[1] = R, this.props[2] = z, this.props[3] = K, this.props[4] = re, this.props[5] = W, this.props[6] = ne, this.props[7] = ie, this.props[8] = me, this.props[9] = te, this.props[10] = ae, this.props[11] = Ae, this.props[12] = pe, this.props[13] = Se, this.props[14] = Ce, this.props[15] = _e, this
                    }

                    function p(P, R, z) {
                        return z = z || 0, P !== 0 || R !== 0 || z !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, P, R, z, 1) : this
                    }

                    function v(P, R, z, K, re, W, ne, ie, me, te, ae, Ae, pe, Se, Ce, _e) {
                        var J = this.props;
                        if (P === 1 && R === 0 && z === 0 && K === 0 && re === 0 && W === 1 && ne === 0 && ie === 0 && me === 0 && te === 0 && ae === 1 && Ae === 0) return J[12] = J[12] * P + J[15] * pe, J[13] = J[13] * W + J[15] * Se, J[14] = J[14] * ae + J[15] * Ce, J[15] *= _e, this._identityCalculated = !1, this;
                        var Te = J[0],
                            dt = J[1],
                            Je = J[2],
                            E = J[3],
                            k = J[4],
                            O = J[5],
                            B = J[6],
                            G = J[7],
                            V = J[8],
                            $ = J[9],
                            U = J[10],
                            se = J[11],
                            j = J[12],
                            Z = J[13],
                            Q = J[14],
                            de = J[15];
                        return J[0] = Te * P + dt * re + Je * me + E * pe, J[1] = Te * R + dt * W + Je * te + E * Se, J[2] = Te * z + dt * ne + Je * ae + E * Ce, J[3] = Te * K + dt * ie + Je * Ae + E * _e, J[4] = k * P + O * re + B * me + G * pe, J[5] = k * R + O * W + B * te + G * Se, J[6] = k * z + O * ne + B * ae + G * Ce, J[7] = k * K + O * ie + B * Ae + G * _e, J[8] = V * P + $ * re + U * me + se * pe, J[9] = V * R + $ * W + U * te + se * Se, J[10] = V * z + $ * ne + U * ae + se * Ce, J[11] = V * K + $ * ie + U * Ae + se * _e, J[12] = j * P + Z * re + Q * me + de * pe, J[13] = j * R + Z * W + Q * te + de * Se, J[14] = j * z + Z * ne + Q * ae + de * Ce, J[15] = j * K + Z * ie + Q * Ae + de * _e, this._identityCalculated = !1, this
                    }

                    function l(P) {
                        var R = P.props;
                        return this.transform(R[0], R[1], R[2], R[3], R[4], R[5], R[6], R[7], R[8], R[9], R[10], R[11], R[12], R[13], R[14], R[15])
                    }

                    function y() {
                        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
                    }

                    function g(P) {
                        for (var R = 0; R < 16;) {
                            if (P.props[R] !== this.props[R]) return !1;
                            R += 1
                        }
                        return !0
                    }

                    function b(P) {
                        var R;
                        for (R = 0; R < 16; R += 1) P.props[R] = this.props[R];
                        return P
                    }

                    function S(P) {
                        var R;
                        for (R = 0; R < 16; R += 1) this.props[R] = P[R]
                    }

                    function _(P, R, z) {
                        return {
                            x: P * this.props[0] + R * this.props[4] + z * this.props[8] + this.props[12],
                            y: P * this.props[1] + R * this.props[5] + z * this.props[9] + this.props[13],
                            z: P * this.props[2] + R * this.props[6] + z * this.props[10] + this.props[14]
                        }
                    }

                    function I(P, R, z) {
                        return P * this.props[0] + R * this.props[4] + z * this.props[8] + this.props[12]
                    }

                    function w(P, R, z) {
                        return P * this.props[1] + R * this.props[5] + z * this.props[9] + this.props[13]
                    }

                    function C(P, R, z) {
                        return P * this.props[2] + R * this.props[6] + z * this.props[10] + this.props[14]
                    }

                    function F() {
                        var P = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            R = this.props[5] / P,
                            z = -this.props[1] / P,
                            K = -this.props[4] / P,
                            re = this.props[0] / P,
                            W = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / P,
                            ne = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / P,
                            ie = new Matrix;
                        return ie.props[0] = R, ie.props[1] = z, ie.props[4] = K, ie.props[5] = re, ie.props[12] = W, ie.props[13] = ne, ie
                    }

                    function M(P) {
                        return this.getInverseMatrix().applyToPointArray(P[0], P[1], P[2] || 0)
                    }

                    function A(P) {
                        var R, z = P.length,
                            K = [];
                        for (R = 0; R < z; R += 1) K[R] = M(P[R]);
                        return K
                    }

                    function D(P, R, z) {
                        var K = createTypedArray("float32", 6);
                        if (this.isIdentity()) K[0] = P[0], K[1] = P[1], K[2] = R[0], K[3] = R[1], K[4] = z[0], K[5] = z[1];
                        else {
                            var re = this.props[0],
                                W = this.props[1],
                                ne = this.props[4],
                                ie = this.props[5],
                                me = this.props[12],
                                te = this.props[13];
                            K[0] = P[0] * re + P[1] * ne + me, K[1] = P[0] * W + P[1] * ie + te, K[2] = R[0] * re + R[1] * ne + me, K[3] = R[0] * W + R[1] * ie + te, K[4] = z[0] * re + z[1] * ne + me, K[5] = z[0] * W + z[1] * ie + te
                        }
                        return K
                    }

                    function q(P, R, z) {
                        return this.isIdentity() ? [P, R, z] : [P * this.props[0] + R * this.props[4] + z * this.props[8] + this.props[12], P * this.props[1] + R * this.props[5] + z * this.props[9] + this.props[13], P * this.props[2] + R * this.props[6] + z * this.props[10] + this.props[14]]
                    }

                    function T(P, R) {
                        if (this.isIdentity()) return P + "," + R;
                        var z = this.props;
                        return Math.round(100 * (P * z[0] + R * z[4] + z[12])) / 100 + "," + Math.round(100 * (P * z[1] + R * z[5] + z[13])) / 100
                    }

                    function L() {
                        for (var P = 0, R = this.props, z = "matrix3d("; P < 16;) z += i(1e4 * R[P]) / 1e4, z += P === 15 ? ")" : ",", P += 1;
                        return z
                    }

                    function N(P) {
                        return P < 1e-6 && P > 0 || P > -1e-6 && P < 0 ? i(1e4 * P) / 1e4 : P
                    }

                    function H() {
                        var P = this.props;
                        return "matrix(" + N(P[0]) + "," + N(P[1]) + "," + N(P[4]) + "," + N(P[5]) + "," + N(P[12]) + "," + N(P[13]) + ")"
                    }
                    return function() {
                        this.reset = n, this.rotate = a, this.rotateX = o, this.rotateY = s, this.rotateZ = u, this.skew = h, this.skewFromAxis = f, this.shear = d, this.scale = m, this.setTransform = c, this.translate = p, this.transform = v, this.multiply = l, this.applyToPoint = _, this.applyToX = I, this.applyToY = w, this.applyToZ = C, this.applyToPointArray = q, this.applyToTriplePoints = D, this.applyToPointStringified = T, this.toCSS = L, this.to2dCSS = H, this.clone = b, this.cloneFromProps = S, this.equals = g, this.inversePoints = A, this.inversePoint = M, this.getInverseMatrix = F, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();

            function _typeof$3(e) {
                return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$3(e)
            }
            var lottie = {},
                standalone = "__[STANDALONE]__",
                animationData = "__[ANIMATIONDATA]__",
                renderer = "";

            function setLocation(e) {
                setLocationHref(e)
            }

            function searchAnimations() {
                standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }

            function setSubframeRendering(e) {
                setSubframeEnabled(e)
            }

            function setPrefix(e) {
                setIdPrefix(e)
            }

            function loadAnimation(e) {
                return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
            }

            function setQuality(e) {
                if (typeof e == "string") switch (e) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10)
                } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
                getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
            }

            function inBrowser() {
                return typeof navigator < "u"
            }

            function installPlugin(e, t) {
                e === "expressions" && setExpressionsPlugin(t)
            }

            function getFactory(e) {
                switch (e) {
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix;
                    default:
                        return null
                }
            }

            function checkReady() {
                document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
            }

            function getQueryVariable(e) {
                for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
                    var i = t[r].split("=");
                    if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
                }
                return null
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
            var queryString = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script"),
                    index = scripts.length - 1,
                    myScript = scripts[index] || {
                        src: ""
                    };
                queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                (typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
            } catch (e) {}
            var ShapeModifiers = function() {
                var e = {},
                    t = {};
                return e.registerModifier = function(r, i) {
                    t[r] || (t[r] = i)
                }, e.getModifier = function(r, i, n) {
                    return new t[r](i, n)
                }, e
            }();

            function ShapeModifier() {}

            function TrimModifier() {}

            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
                if (!this.closed) {
                    e.sh.container.addDynamicProperty(e.sh);
                    var t = {
                        shape: e.sh,
                        data: e,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
                }
            }, ShapeModifier.prototype.init = function(e, t) {
                this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
                this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, TrimModifier.prototype.addShapeToModifier = function(e) {
                e.pathsData = []
            }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, i, n) {
                var a = [];
                t <= 1 ? a.push({
                    s: e,
                    e: t
                }) : e >= 1 ? a.push({
                    s: e - 1,
                    e: t - 1
                }) : (a.push({
                    s: e,
                    e: 1
                }), a.push({
                    s: 0,
                    e: t - 1
                }));
                var o, s, u = [],
                    d = a.length;
                for (o = 0; o < d; o += 1) {
                    var h, f;
                    (s = a[o]).e * n < i || s.s * n > i + r || (h = s.s * n <= i ? 0 : (s.s * n - i) / r, f = s.e * n >= i + r ? 1 : (s.e * n - i) / r, u.push([h, f]))
                }
                return u.length || u.push([0, 0]), u
            }, TrimModifier.prototype.releasePathsData = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
                return e.length = 0, e
            }, TrimModifier.prototype.processShapes = function(e) {
                var t, r, i, n;
                if (this._mdf || e) {
                    var a = this.o.v % 360 / 360;
                    if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                        var o = t;
                        t = r, r = o
                    }
                    t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
                } else t = this.sValue, r = this.eValue;
                var s, u, d, h, f, m = this.shapes.length,
                    c = 0;
                if (r === t)
                    for (n = 0; n < m; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                else if (r === 1 && t === 0 || r === 0 && t === 1) {
                    if (this._mdf)
                        for (n = 0; n < m; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                } else {
                    var p, v, l = [];
                    for (n = 0; n < m; n += 1)
                        if ((p = this.shapes[n]).shape._mdf || this._mdf || e || this.m === 2) {
                            if (u = (i = p.shape.paths)._length, f = 0, !p.shape._mdf && p.pathsData.length) f = p.totalShapeLength;
                            else {
                                for (d = this.releasePathsData(p.pathsData), s = 0; s < u; s += 1) h = bez.getSegmentsLength(i.shapes[s]), d.push(h), f += h.totalLength;
                                p.totalShapeLength = f, p.pathsData = d
                            }
                            c += f, p.shape._mdf = !0
                        } else p.shape.paths = p.localShapeCollection;
                    var y, g = t,
                        b = r,
                        S = 0;
                    for (n = m - 1; n >= 0; n -= 1)
                        if ((p = this.shapes[n]).shape._mdf) {
                            for ((v = p.localShapeCollection).releaseShapes(), this.m === 2 && m > 1 ? (y = this.calculateShapeEdges(t, r, p.totalShapeLength, S, c), S += p.totalShapeLength) : y = [
                                    [g, b]
                                ], u = y.length, s = 0; s < u; s += 1) {
                                g = y[s][0], b = y[s][1], l.length = 0, b <= 1 ? l.push({
                                    s: p.totalShapeLength * g,
                                    e: p.totalShapeLength * b
                                }) : g >= 1 ? l.push({
                                    s: p.totalShapeLength * (g - 1),
                                    e: p.totalShapeLength * (b - 1)
                                }) : (l.push({
                                    s: p.totalShapeLength * g,
                                    e: p.totalShapeLength
                                }), l.push({
                                    s: 0,
                                    e: p.totalShapeLength * (b - 1)
                                }));
                                var _ = this.addShapes(p, l[0]);
                                if (l[0].s !== l[0].e) {
                                    if (l.length > 1)
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var I = _.pop();
                                            this.addPaths(_, v), _ = this.addShapes(p, l[1], I)
                                        } else this.addPaths(_, v), _ = this.addShapes(p, l[1]);
                                    this.addPaths(_, v)
                                }
                            }
                            p.shape.paths = v
                        }
                }
            }, TrimModifier.prototype.addPaths = function(e, t) {
                var r, i = e.length;
                for (r = 0; r < i; r += 1) t.addShape(e[r])
            }, TrimModifier.prototype.addSegment = function(e, t, r, i, n, a, o) {
                n.setXYAt(t[0], t[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), o && n.setXYAt(e[0], e[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
            }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
                t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
            }, TrimModifier.prototype.addShapes = function(e, t, r) {
                var i, n, a, o, s, u, d, h, f = e.pathsData,
                    m = e.shape.paths.shapes,
                    c = e.shape.paths._length,
                    p = 0,
                    v = [],
                    l = !0;
                for (r ? (s = r._length, h = r._length) : (r = shapePool.newElement(), s = 0, h = 0), v.push(r), i = 0; i < c; i += 1) {
                    for (u = f[i].lengths, r.c = m[i].c, a = m[i].c ? u.length : u.length + 1, n = 1; n < a; n += 1)
                        if (p + (o = u[n - 1]).addedLength < t.s) p += o.addedLength, r.c = !1;
                        else {
                            if (p > t.e) {
                                r.c = !1;
                                break
                            }
                            t.s <= p && t.e >= p + o.addedLength ? (this.addSegment(m[i].v[n - 1], m[i].o[n - 1], m[i].i[n], m[i].v[n], r, s, l), l = !1) : (d = bez.getNewSegment(m[i].v[n - 1], m[i].v[n], m[i].o[n - 1], m[i].i[n], (t.s - p) / o.addedLength, (t.e - p) / o.addedLength, u[n - 1]), this.addSegmentFromArray(d, r, s, l), l = !1, r.c = !1), p += o.addedLength, s += 1
                        } if (m[i].c && u.length) {
                        if (o = u[n - 1], p <= t.e) {
                            var y = u[n - 1].addedLength;
                            t.s <= p && t.e >= p + y ? (this.addSegment(m[i].v[n - 1], m[i].o[n - 1], m[i].i[0], m[i].v[0], r, s, l), l = !1) : (d = bez.getNewSegment(m[i].v[n - 1], m[i].v[0], m[i].o[n - 1], m[i].i[0], (t.s - p) / y, (t.e - p) / y, u[n - 1]), this.addSegmentFromArray(d, r, s, l), l = !1, r.c = !1)
                        } else r.c = !1;
                        p += o.addedLength, s += 1
                    }
                    if (r._length && (r.setXYAt(r.v[h][0], r.v[h][1], "i", h), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e) break;
                    i < c - 1 && (r = shapePool.newElement(), l = !0, v.push(r), s = 0)
                }
                return v
            }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
            }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
                var r = t / 100,
                    i = [0, 0],
                    n = e._length,
                    a = 0;
                for (a = 0; a < n; a += 1) i[0] += e.v[a][0], i[1] += e.v[a][1];
                i[0] /= n, i[1] /= n;
                var o, s, u, d, h, f, m = shapePool.newElement();
                for (m.c = e.c, a = 0; a < n; a += 1) o = e.v[a][0] + (i[0] - e.v[a][0]) * r, s = e.v[a][1] + (i[1] - e.v[a][1]) * r, u = e.o[a][0] + (i[0] - e.o[a][0]) * -r, d = e.o[a][1] + (i[1] - e.o[a][1]) * -r, h = e.i[a][0] + (i[0] - e.i[a][0]) * -r, f = e.i[a][1] + (i[1] - e.i[a][1]) * -r, m.setTripleAt(o, s, u, d, h, f, a);
                return m
            }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
                var t, r, i, n, a, o, s = this.shapes.length,
                    u = this.amount.v;
                if (u !== 0)
                    for (r = 0; r < s; r += 1) {
                        if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], u));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var TransformPropertyFactory = function() {
                var e = [0, 0];

                function t(r, i, n) {
                    if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = i, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || r), i.p && i.p.s ? (this.px = PropertyFactory.getProp(r, i.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, i.p.y, 0, 0, this), i.p.z && (this.pz = PropertyFactory.getProp(r, i.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, i.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), i.rx) {
                        if (this.rx = PropertyFactory.getProp(r, i.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, i.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, i.rz, 0, degToRads, this), i.or.k[0].ti) {
                            var a, o = i.or.k.length;
                            for (a = 0; a < o; a += 1) i.or.k[a].to = null, i.or.k[a].ti = null
                        }
                        this.or = PropertyFactory.getProp(r, i.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(r, i.r || {
                        k: 0
                    }, 0, degToRads, this);
                    i.sk && (this.sk = PropertyFactory.getProp(r, i.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, i.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, i.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), i.o ? this.o = PropertyFactory.getProp(r, i.o, 0, .01, r) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return t.prototype = {
                    applyToMatrix: function(r) {
                        var i = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || i, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(r) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var n, a;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (n = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        n = [], a = [];
                                        var o = this.px,
                                            s = this.py;
                                        o._caching.lastFrame + o.offsetTime <= o.keyframes[0].t ? (n[0] = o.getValueAtTime((o.keyframes[0].t + .01) / i, 0), n[1] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), a[0] = o.getValueAtTime(o.keyframes[0].t / i, 0), a[1] = s.getValueAtTime(s.keyframes[0].t / i, 0)) : o._caching.lastFrame + o.offsetTime >= o.keyframes[o.keyframes.length - 1].t ? (n[0] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / i, 0), n[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), a[0] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / i, 0), a[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0)) : (n = [o.pv, s.pv], a[0] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / i, o.offsetTime), a[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime))
                                    } else n = a = e;
                                    this.v.rotate(-Math.atan2(n[1] - a[1], n[0] - a[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(r) {
                    this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
                }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(r, i, n) {
                        return new t(r, i, n)
                    }
                }
            }();

            function RepeaterModifier() {}

            function RoundCornersModifier() {}

            function floatEqual(e, t) {
                return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
            }

            function floatZero(e) {
                return Math.abs(e) <= 1e-5
            }

            function lerp(e, t, r) {
                return e * (1 - r) + t * r
            }

            function lerpPoint(e, t, r) {
                return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
            }

            function quadRoots(e, t, r) {
                if (e === 0) return [];
                var i = t * t - 4 * e * r;
                if (i < 0) return [];
                var n = -t / (2 * e);
                if (i === 0) return [n];
                var a = Math.sqrt(i) / (2 * e);
                return [n - a, n + a]
            }

            function polynomialCoefficients(e, t, r, i) {
                return [3 * t - e - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
            }

            function singlePoint(e) {
                return new PolynomialBezier(e, e, e, e, !1)
            }

            function PolynomialBezier(e, t, r, i, n) {
                n && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), n && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
                var a = polynomialCoefficients(e[0], t[0], r[0], i[0]),
                    o = polynomialCoefficients(e[1], t[1], r[1], i[1]);
                this.a = [a[0], o[0]], this.b = [a[1], o[1]], this.c = [a[2], o[2]], this.d = [a[3], o[3]], this.points = [e, t, r, i]
            }

            function extrema(e, t) {
                var r = e.points[0][t],
                    i = e.points[e.points.length - 1][t];
                if (r > i) {
                    var n = i;
                    i = r, r = n
                }
                for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0; o < a.length; o += 1)
                    if (a[o] > 0 && a[o] < 1) {
                        var s = e.point(a[o])[t];
                        s < r ? r = s : s > i && (i = s)
                    } return {
                    min: r,
                    max: i
                }
            }

            function intersectData(e, t, r) {
                var i = e.boundingBox();
                return {
                    cx: i.cx,
                    cy: i.cy,
                    width: i.width,
                    height: i.height,
                    bez: e,
                    t: (t + r) / 2,
                    t1: t,
                    t2: r
                }
            }

            function splitData(e) {
                var t = e.bez.split(.5);
                return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
            }

            function boxIntersect(e, t) {
                return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
            }

            function intersectsImpl(e, t, r, i, n, a) {
                if (boxIntersect(e, t))
                    if (r >= a || e.width <= i && e.height <= i && t.width <= i && t.height <= i) n.push([e.t, t.t]);
                    else {
                        var o = splitData(e),
                            s = splitData(t);
                        intersectsImpl(o[0], s[0], r + 1, i, n, a), intersectsImpl(o[0], s[1], r + 1, i, n, a), intersectsImpl(o[1], s[0], r + 1, i, n, a), intersectsImpl(o[1], s[1], r + 1, i, n, a)
                    }
            }

            function crossProduct(e, t) {
                return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
            }

            function lineIntersection(e, t, r, i) {
                var n = [e[0], e[1], 1],
                    a = [t[0], t[1], 1],
                    o = [r[0], r[1], 1],
                    s = [i[0], i[1], 1],
                    u = crossProduct(crossProduct(n, a), crossProduct(o, s));
                return floatZero(u[2]) ? null : [u[0] / u[2], u[1] / u[2]]
            }

            function polarOffset(e, t, r) {
                return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
            }

            function pointDistance(e, t) {
                return Math.hypot(e[0] - t[0], e[1] - t[1])
            }

            function pointEqual(e, t) {
                return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
            }

            function ZigZagModifier() {}

            function setPoint(e, t, r, i, n, a, o) {
                var s = r - Math.PI / 2,
                    u = r + Math.PI / 2,
                    d = t[0] + Math.cos(r) * i * n,
                    h = t[1] - Math.sin(r) * i * n;
                e.setTripleAt(d, h, d + Math.cos(s) * a, h - Math.sin(s) * a, d + Math.cos(u) * o, h - Math.sin(u) * o, e.length())
            }

            function getPerpendicularVector(e, t) {
                var r = [t[0] - e[0], t[1] - e[1]],
                    i = .5 * -Math.PI;
                return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
            }

            function getProjectingAngle(e, t) {
                var r = t === 0 ? e.length() - 1 : t - 1,
                    i = (t + 1) % e.length(),
                    n = getPerpendicularVector(e.v[r], e.v[i]);
                return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
            }

            function zigZagCorner(e, t, r, i, n, a, o) {
                var s = getProjectingAngle(t, r),
                    u = t.v[r % t._length],
                    d = t.v[r === 0 ? t._length - 1 : r - 1],
                    h = t.v[(r + 1) % t._length],
                    f = a === 2 ? Math.sqrt(Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2)) : 0,
                    m = a === 2 ? Math.sqrt(Math.pow(u[0] - h[0], 2) + Math.pow(u[1] - h[1], 2)) : 0;
                setPoint(e, t.v[r % t._length], s, o, i, m / (2 * (n + 1)), f / (2 * (n + 1)), a)
            }

            function zigZagSegment(e, t, r, i, n, a) {
                for (var o = 0; o < i; o += 1) {
                    var s = (o + 1) / (i + 1),
                        u = n === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
                        d = t.normalAngle(s);
                    setPoint(e, t.point(s), d, a, r, u / (2 * (i + 1)), u / (2 * (i + 1)), n), a = -a
                }
                return a
            }

            function linearOffset(e, t, r) {
                var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
                return [polarOffset(e, i, r), polarOffset(t, i, r)]
            }

            function offsetSegment(e, t) {
                var r, i, n, a, o, s, u;
                r = (u = linearOffset(e.points[0], e.points[1], t))[0], i = u[1], n = (u = linearOffset(e.points[1], e.points[2], t))[0], a = u[1], o = (u = linearOffset(e.points[2], e.points[3], t))[0], s = u[1];
                var d = lineIntersection(r, i, n, a);
                d === null && (d = i);
                var h = lineIntersection(o, s, n, a);
                return h === null && (h = o), new PolynomialBezier(r, d, h, s)
            }

            function joinLines(e, t, r, i, n) {
                var a = t.points[3],
                    o = r.points[0];
                if (i === 3 || pointEqual(a, o)) return a;
                if (i === 2) {
                    var s = -t.tangentAngle(1),
                        u = -r.tangentAngle(0) + Math.PI,
                        d = lineIntersection(a, polarOffset(a, s + Math.PI / 2, 100), o, polarOffset(o, s + Math.PI / 2, 100)),
                        h = d ? pointDistance(d, a) : pointDistance(a, o) / 2,
                        f = polarOffset(a, s, 2 * h * roundCorner);
                    return e.setXYAt(f[0], f[1], "o", e.length() - 1), f = polarOffset(o, u, 2 * h * roundCorner), e.setTripleAt(o[0], o[1], o[0], o[1], f[0], f[1], e.length()), o
                }
                var m = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, o, pointEqual(o, r.points[1]) ? r.points[3] : r.points[1]);
                return m && pointDistance(m, a) < n ? (e.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], e.length()), m) : a
            }

            function getIntersection(e, t) {
                var r = e.intersections(t);
                return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
            }

            function pruneSegmentIntersection(e, t) {
                var r = e.slice(),
                    i = t.slice(),
                    n = getIntersection(e[e.length - 1], t[0]);
                return n && (r[e.length - 1] = e[e.length - 1].split(n[0])[0], i[0] = t[0].split(n[1])[1]), e.length > 1 && t.length > 1 && (n = getIntersection(e[0], t[t.length - 1])) ? [
                    [e[0].split(n[0])[0]],
                    [t[t.length - 1].split(n[1])[1]]
                ] : [r, i]
            }

            function pruneIntersections(e) {
                for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
                return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
            }

            function offsetSegmentSplit(e, t) {
                var r, i, n, a, o = e.inflectionPoints();
                if (o.length === 0) return [offsetSegment(e, t)];
                if (o.length === 1 || floatEqual(o[1], 1)) return r = (n = e.split(o[0]))[0], i = n[1], [offsetSegment(r, t), offsetSegment(i, t)];
                r = (n = e.split(o[0]))[0];
                var s = (o[1] - o[0]) / (1 - o[0]);
                return a = (n = n[1].split(s))[0], i = n[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(i, t)]
            }

            function OffsetPathModifier() {}

            function getFontProperties(e) {
                for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", n = t.length, a = 0; a < n; a += 1) switch (t[a].toLowerCase()) {
                    case "italic":
                        i = "italic";
                        break;
                    case "bold":
                        r = "700";
                        break;
                    case "black":
                        r = "900";
                        break;
                    case "medium":
                        r = "500";
                        break;
                    case "regular":
                    case "normal":
                        r = "400";
                        break;
                    case "light":
                    case "thin":
                        r = "200"
                }
                return {
                    style: i,
                    weight: e.fWeight || r
                }
            }
            extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
            }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, n, a) {
                var o = a ? -1 : 1,
                    s = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
                    u = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
                e.translate(i.p.v[0] * o * n, i.p.v[1] * o * n, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * o * n), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / s : s, a ? 1 / u : u), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
            }, RepeaterModifier.prototype.init = function(e, t, r, i) {
                for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
            }, RepeaterModifier.prototype.cloneElements = function(e) {
                var t = JSON.parse(JSON.stringify(e));
                return this.resetElements(t), t
            }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
                var r, i = e.length;
                for (r = 0; r < i; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
            }, RepeaterModifier.prototype.processShapes = function(e) {
                var t, r, i, n, a, o = !1;
                if (this._mdf || e) {
                    var s, u = Math.ceil(this.c.v);
                    if (this._groups.length < u) {
                        for (; this._groups.length < u;) {
                            var d = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            d.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }), this.arr.splice(0, 0, d), this._groups.splice(0, 0, d), this._currentCopies += 1
                        }
                        this.elem.reloadShapes(), o = !0
                    }
                    for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                        if (s = a < u, this._groups[i]._render = s, this.changeGroupRender(this._groups[i].it, s), !s) {
                            var h = this.elemsData[i].it,
                                f = h[h.length - 1];
                            f.transform.op.v !== 0 ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                        }
                        a += 1
                    }
                    this._currentCopies = u;
                    var m = this.o.v,
                        c = m % 1,
                        p = m > 0 ? Math.floor(m) : Math.ceil(m),
                        v = this.pMatrix.props,
                        l = this.rMatrix.props,
                        y = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var g, b, S = 0;
                    if (m > 0) {
                        for (; S < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), S += c)
                    } else if (m < 0) {
                        for (; S > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), S -= c)
                    }
                    for (i = this.data.m === 1 ? 0 : this._currentCopies - 1, n = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
                        if (b = (r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), S !== 0) {
                            for ((i !== 0 && n === 1 || i !== this._currentCopies - 1 && n === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
                        S += 1, a -= 1, i += n
                    }
                } else
                    for (a = this._currentCopies, i = 0, n = 1; a;) r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, i += n;
                return o
            }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
            }, RoundCornersModifier.prototype.processPath = function(e, t) {
                var r, i = shapePool.newElement();
                i.c = e.c;
                var n, a, o, s, u, d, h, f, m, c, p, v, l = e._length,
                    y = 0;
                for (r = 0; r < l; r += 1) n = e.v[r], o = e.o[r], a = e.i[r], n[0] === o[0] && n[1] === o[1] && n[0] === a[0] && n[1] === a[1] ? r !== 0 && r !== l - 1 || e.c ? (s = r === 0 ? e.v[l - 1] : e.v[r - 1], d = (u = Math.sqrt(Math.pow(n[0] - s[0], 2) + Math.pow(n[1] - s[1], 2))) ? Math.min(u / 2, t) / u : 0, h = p = n[0] + (s[0] - n[0]) * d, f = v = n[1] - (n[1] - s[1]) * d, m = h - (h - n[0]) * roundCorner, c = f - (f - n[1]) * roundCorner, i.setTripleAt(h, f, m, c, p, v, y), y += 1, s = r === l - 1 ? e.v[0] : e.v[r + 1], d = (u = Math.sqrt(Math.pow(n[0] - s[0], 2) + Math.pow(n[1] - s[1], 2))) ? Math.min(u / 2, t) / u : 0, h = m = n[0] + (s[0] - n[0]) * d, f = c = n[1] + (s[1] - n[1]) * d, p = h - (h - n[0]) * roundCorner, v = f - (f - n[1]) * roundCorner, i.setTripleAt(h, f, m, c, p, v, y), y += 1) : (i.setTripleAt(n[0], n[1], o[0], o[1], a[0], a[1], y), y += 1) : (i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], y), y += 1);
                return i
            }, RoundCornersModifier.prototype.processShapes = function(e) {
                var t, r, i, n, a, o, s = this.shapes.length,
                    u = this.rd.v;
                if (u !== 0)
                    for (r = 0; r < s; r += 1) {
                        if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], u));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, PolynomialBezier.prototype.point = function(e) {
                return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
            }, PolynomialBezier.prototype.derivative = function(e) {
                return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
            }, PolynomialBezier.prototype.tangentAngle = function(e) {
                var t = this.derivative(e);
                return Math.atan2(t[1], t[0])
            }, PolynomialBezier.prototype.normalAngle = function(e) {
                var t = this.derivative(e);
                return Math.atan2(t[0], t[1])
            }, PolynomialBezier.prototype.inflectionPoints = function() {
                var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(e)) return [];
                var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
                    r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
                if (r < 0) return [];
                var i = Math.sqrt(r);
                return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter(function(n) {
                    return n > 0 && n < 1
                })
            }, PolynomialBezier.prototype.split = function(e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var t = lerpPoint(this.points[0], this.points[1], e),
                    r = lerpPoint(this.points[1], this.points[2], e),
                    i = lerpPoint(this.points[2], this.points[3], e),
                    n = lerpPoint(t, r, e),
                    a = lerpPoint(r, i, e),
                    o = lerpPoint(n, a, e);
                return [new PolynomialBezier(this.points[0], t, n, o, !0), new PolynomialBezier(o, a, i, this.points[3], !0)]
            }, PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                }
            }, PolynomialBezier.prototype.boundingBox = function() {
                var e = this.bounds();
                return {
                    left: e.x.min,
                    right: e.x.max,
                    top: e.y.min,
                    bottom: e.y.max,
                    width: e.x.max - e.x.min,
                    height: e.y.max - e.y.min,
                    cx: (e.x.max + e.x.min) / 2,
                    cy: (e.y.max + e.y.min) / 2
                }
            }, PolynomialBezier.prototype.intersections = function(e, t, r) {
                t === void 0 && (t = 2), r === void 0 && (r = 7);
                var i = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i
            }, PolynomialBezier.shapeSegment = function(e, t) {
                var r = (t + 1) % e.length();
                return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
            }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
                var r = (t + 1) % e.length();
                return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
            }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
            }, ZigZagModifier.prototype.processPath = function(e, t, r, i) {
                var n = e._length,
                    a = shapePool.newElement();
                if (a.c = e.c, e.c || (n -= 1), n === 0) return a;
                var o = -1,
                    s = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(a, e, 0, t, r, i, o);
                for (var u = 0; u < n; u += 1) o = zigZagSegment(a, s, t, r, i, -o), s = u !== n - 1 || e.c ? PolynomialBezier.shapeSegment(e, (u + 1) % n) : null, zigZagCorner(a, e, u + 1, t, r, i, o);
                return a
            }, ZigZagModifier.prototype.processShapes = function(e) {
                var t, r, i, n, a, o, s = this.shapes.length,
                    u = this.amplitude.v,
                    d = Math.max(0, Math.round(this.frequency.v)),
                    h = this.pointsType.v;
                if (u !== 0)
                    for (r = 0; r < s; r += 1) {
                        if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], u, d, h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
            }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
                var n = shapePool.newElement();
                n.c = e.c;
                var a, o, s, u = e.length();
                e.c || (u -= 1);
                var d = [];
                for (a = 0; a < u; a += 1) s = PolynomialBezier.shapeSegment(e, a), d.push(offsetSegmentSplit(s, t));
                if (!e.c)
                    for (a = u - 1; a >= 0; a -= 1) s = PolynomialBezier.shapeSegmentInverted(e, a), d.push(offsetSegmentSplit(s, t));
                d = pruneIntersections(d);
                var h = null,
                    f = null;
                for (a = 0; a < d.length; a += 1) {
                    var m = d[a];
                    for (f && (h = joinLines(n, f, m[0], r, i)), f = m[m.length - 1], o = 0; o < m.length; o += 1) s = m[o], h && pointEqual(s.points[0], h) ? n.setXYAt(s.points[1][0], s.points[1][1], "o", n.length() - 1) : n.setTripleAt(s.points[0][0], s.points[0][1], s.points[1][0], s.points[1][1], s.points[0][0], s.points[0][1], n.length()), n.setTripleAt(s.points[3][0], s.points[3][1], s.points[3][0], s.points[3][1], s.points[2][0], s.points[2][1], n.length()), h = s.points[3]
                }
                return d.length && joinLines(n, f, d[0][0], r, i), n
            }, OffsetPathModifier.prototype.processShapes = function(e) {
                var t, r, i, n, a, o, s = this.shapes.length,
                    u = this.amount.v,
                    d = this.miterLimit.v,
                    h = this.lineJoin;
                if (u !== 0)
                    for (r = 0; r < s; r += 1) {
                        if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], u, h, d));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var FontManager = function() {
                var e = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    },
                    t = [];
                t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = 127988,
                    i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                function n(h, f) {
                    var m = createTag("span");
                    m.setAttribute("aria-hidden", !0), m.style.fontFamily = f;
                    var c = createTag("span");
                    c.innerText = "giItT1WQy@!-/#", m.style.position = "absolute", m.style.left = "-10000px", m.style.top = "-10000px", m.style.fontSize = "300px", m.style.fontVariant = "normal", m.style.fontStyle = "normal", m.style.fontWeight = "normal", m.style.letterSpacing = "0", m.appendChild(c), document.body.appendChild(m);
                    var p = c.offsetWidth;
                    return c.style.fontFamily = function(v) {
                        var l, y = v.split(","),
                            g = y.length,
                            b = [];
                        for (l = 0; l < g; l += 1) y[l] !== "sans-serif" && y[l] !== "monospace" && b.push(y[l]);
                        return b.join(",")
                    }(h) + ", " + f, {
                        node: c,
                        w: p,
                        parent: m
                    }
                }

                function a(h, f) {
                    var m, c = document.body && f ? "svg" : "canvas",
                        p = getFontProperties(h);
                    if (c === "svg") {
                        var v = createNS("text");
                        v.style.fontSize = "100px", v.setAttribute("font-family", h.fFamily), v.setAttribute("font-style", p.style), v.setAttribute("font-weight", p.weight), v.textContent = "1", h.fClass ? (v.style.fontFamily = "inherit", v.setAttribute("class", h.fClass)) : v.style.fontFamily = h.fFamily, f.appendChild(v), m = v
                    } else {
                        var l = new OffscreenCanvas(500, 500).getContext("2d");
                        l.font = p.style + " " + p.weight + " 100px " + h.fFamily, m = l
                    }
                    return {
                        measureText: function(y) {
                            return c === "svg" ? (m.textContent = y, m.getComputedTextLength()) : m.measureText(y).width
                        }
                    }
                }

                function o(h) {
                    var f = 0,
                        m = h.charCodeAt(0);
                    if (m >= 55296 && m <= 56319) {
                        var c = h.charCodeAt(1);
                        c >= 56320 && c <= 57343 && (f = 1024 * (m - 55296) + c - 56320 + 65536)
                    }
                    return f
                }

                function s(h) {
                    var f = o(h);
                    return f >= 127462 && f <= 127487
                }
                var u = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                u.isModifier = function(h, f) {
                    var m = h.toString(16) + f.toString(16);
                    return i.indexOf(m) !== -1
                }, u.isZeroWidthJoiner = function(h) {
                    return h === 8205
                }, u.isFlagEmoji = function(h) {
                    return s(h.substr(0, 2)) && s(h.substr(2, 2))
                }, u.isRegionalCode = s, u.isCombinedCharacter = function(h) {
                    return t.indexOf(h) !== -1
                }, u.isRegionalFlag = function(h, f) {
                    var m = o(h.substr(f, 2));
                    if (m !== r) return !1;
                    var c = 0;
                    for (f += 2; c < 5;) {
                        if ((m = o(h.substr(f, 2))) < 917601 || m > 917626) return !1;
                        c += 1, f += 2
                    }
                    return o(h.substr(f, 2)) === 917631
                }, u.isVariationSelector = function(h) {
                    return h === 65039
                }, u.BLACK_FLAG_CODE_POINT = r;
                var d = {
                    addChars: function(h) {
                        if (h) {
                            var f;
                            this.chars || (this.chars = []);
                            var m, c, p = h.length,
                                v = this.chars.length;
                            for (f = 0; f < p; f += 1) {
                                for (m = 0, c = !1; m < v;) this.chars[m].style === h[f].style && this.chars[m].fFamily === h[f].fFamily && this.chars[m].ch === h[f].ch && (c = !0), m += 1;
                                c || (this.chars.push(h[f]), v += 1)
                            }
                        }
                    },
                    addFonts: function(h, f) {
                        if (h) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = h.list);
                            if (!document.body) return this.isLoaded = !0, h.list.forEach(function(I) {
                                I.helper = a(I), I.cache = {}
                            }), void(this.fonts = h.list);
                            var m, c = h.list,
                                p = c.length,
                                v = p;
                            for (m = 0; m < p; m += 1) {
                                var l, y, g = !0;
                                if (c[m].loaded = !1, c[m].monoCase = n(c[m].fFamily, "monospace"), c[m].sansCase = n(c[m].fFamily, "sans-serif"), c[m].fPath) {
                                    if (c[m].fOrigin === "p" || c[m].origin === 3) {
                                        if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + c[m].fFamily + '"], style[f-origin="3"][f-family="' + c[m].fFamily + '"]')).length > 0 && (g = !1), g) {
                                            var b = createTag("style");
                                            b.setAttribute("f-forigin", c[m].fOrigin), b.setAttribute("f-origin", c[m].origin), b.setAttribute("f-family", c[m].fFamily), b.type = "text/css", b.innerText = "@font-face {font-family: " + c[m].fFamily + "; font-style: normal; src: url('" + c[m].fPath + "');}", f.appendChild(b)
                                        }
                                    } else if (c[m].fOrigin === "g" || c[m].origin === 1) {
                                        for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), y = 0; y < l.length; y += 1) l[y].href.indexOf(c[m].fPath) !== -1 && (g = !1);
                                        if (g) {
                                            var S = createTag("link");
                                            S.setAttribute("f-forigin", c[m].fOrigin), S.setAttribute("f-origin", c[m].origin), S.type = "text/css", S.rel = "stylesheet", S.href = c[m].fPath, document.body.appendChild(S)
                                        }
                                    } else if (c[m].fOrigin === "t" || c[m].origin === 2) {
                                        for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), y = 0; y < l.length; y += 1) c[m].fPath === l[y].src && (g = !1);
                                        if (g) {
                                            var _ = createTag("link");
                                            _.setAttribute("f-forigin", c[m].fOrigin), _.setAttribute("f-origin", c[m].origin), _.setAttribute("rel", "stylesheet"), _.setAttribute("href", c[m].fPath), f.appendChild(_)
                                        }
                                    }
                                } else c[m].loaded = !0, v -= 1;
                                c[m].helper = a(c[m], f), c[m].cache = {}, this.fonts.push(c[m])
                            }
                            v === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(h, f, m) {
                        for (var c = 0, p = this.chars.length; c < p;) {
                            if (this.chars[c].ch === h && this.chars[c].style === f && this.chars[c].fFamily === m) return this.chars[c];
                            c += 1
                        }
                        return (typeof h == "string" && h.charCodeAt(0) !== 13 || !h) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", h, f, m)), e
                    },
                    getFontByName: function(h) {
                        for (var f = 0, m = this.fonts.length; f < m;) {
                            if (this.fonts[f].fName === h) return this.fonts[f];
                            f += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(h, f, m) {
                        var c = this.getFontByName(f),
                            p = h;
                        if (!c.cache[p]) {
                            var v = c.helper;
                            if (h === " ") {
                                var l = v.measureText("|" + h + "|"),
                                    y = v.measureText("||");
                                c.cache[p] = (l - y) / 100
                            } else c.cache[p] = v.measureText(h) / 100
                        }
                        return c.cache[p] * m
                    },
                    checkLoadedFonts: function() {
                        var h, f, m, c = this.fonts.length,
                            p = c;
                        for (h = 0; h < c; h += 1) this.fonts[h].loaded ? p -= 1 : this.fonts[h].fOrigin === "n" || this.fonts[h].origin === 0 ? this.fonts[h].loaded = !0 : (f = this.fonts[h].monoCase.node, m = this.fonts[h].monoCase.w, f.offsetWidth !== m ? (p -= 1, this.fonts[h].loaded = !0) : (f = this.fonts[h].sansCase.node, m = this.fonts[h].sansCase.w, f.offsetWidth !== m && (p -= 1, this.fonts[h].loaded = !0)), this.fonts[h].loaded && (this.fonts[h].sansCase.parent.parentNode.removeChild(this.fonts[h].sansCase.parent), this.fonts[h].monoCase.parent.parentNode.removeChild(this.fonts[h].monoCase.parent)));
                        p !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                };
                return u.prototype = d, u
            }();

            function SlotManager(e) {
                this.animationData = e
            }

            function slotFactory(e) {
                return new SlotManager(e)
            }

            function RenderableElement() {}
            SlotManager.prototype.getProp = function(e) {
                return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
            }, RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(e) {
                    this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
                },
                removeRenderableComponent: function(e) {
                    this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
                },
                prepareRenderableFrame: function(e) {
                    this.checkLayerLimits(e)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(e) {
                    this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var e, t = this.renderableComponents.length;
                    for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return this.data.ty === 5 ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var getBlendMode = (blendModeEnums = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(e) {
                    return blendModeEnums[e] || ""
                }),
                blendModeEnums;

            function SliderEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function AngleEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function ColorEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
            }

            function PointEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
            }

            function LayerIndexEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function MaskIndexEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function CheckboxEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function NoValueEffect() {
                this.p = {}
            }

            function EffectsManager(e, t) {
                var r, i = e.ef || [];
                this.effectElements = [];
                var n, a = i.length;
                for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], t), this.effectElements.push(n)
            }

            function GroupEffect(e, t) {
                this.init(e, t)
            }

            function BaseElement() {}

            function FrameElement() {}

            function FootageElement(e, t, r) {
                this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
            }

            function AudioElement(e, t, r) {
                this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
                var i = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }

            function BaseRenderer() {}
            extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
                var r;
                this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
                var i, n = this.data.ef.length,
                    a = this.data.ef;
                for (r = 0; r < n; r += 1) {
                    switch (i = null, a[r].ty) {
                        case 0:
                            i = new SliderEffect(a[r], t, this);
                            break;
                        case 1:
                            i = new AngleEffect(a[r], t, this);
                            break;
                        case 2:
                            i = new ColorEffect(a[r], t, this);
                            break;
                        case 3:
                            i = new PointEffect(a[r], t, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(a[r], t, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(a[r], t, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(a[r], t, this);
                            break;
                        case 5:
                            i = new EffectsManager(a[r], t, this);
                            break;
                        default:
                            i = new NoValueEffect(a[r], t, this)
                    }
                    i && this.effectElements.push(i)
                }
            }, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var e = 0, t = this.data.masksProperties.length; e < t;) {
                        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
                        e += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    var e = getExpressionInterfaces();
                    if (e) {
                        var t = e("layer"),
                            r = e("effects"),
                            i = e("shape"),
                            n = e("text"),
                            a = e("comp");
                        this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var o = r.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(o), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
                    }
                },
                setBlendMode: function() {
                    var e = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
                },
                initBaseData: function(e, t, r) {
                    this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(e, t) {
                    var r, i = this.dynamicProperties.length;
                    for (r = 0; r < i; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(e) {
                    this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
                }
            }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                return null
            }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                var e = getExpressionInterfaces();
                if (e) {
                    var t = e("footage");
                    this.layerInterface = t(this)
                }
            }, FootageElement.prototype.getFootageData = function() {
                return this.footageData
            }, AudioElement.prototype.prepareFrame = function(e) {
                if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
                else {
                    var t = this.tm.v;
                    this._currentTime = t
                }
                this._volume = this.lv.v[0];
                var r = this._volume * this._volumeMultiplier;
                this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1
            }, AudioElement.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
            }, AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }, AudioElement.prototype.setRate = function(e) {
                this.audio.rate(e)
            }, AudioElement.prototype.volume = function(e) {
                this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
            }, AudioElement.prototype.getBaseElement = function() {
                return null
            }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
                var t, r, i = this.layers.length;
                for (this.completeLayers = !0, t = i - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(e) {
                switch (e.ty) {
                    case 2:
                        return this.createImage(e);
                    case 0:
                        return this.createComp(e);
                    case 1:
                        return this.createSolid(e);
                    case 3:
                    default:
                        return this.createNull(e);
                    case 4:
                        return this.createShape(e);
                    case 5:
                        return this.createText(e);
                    case 6:
                        return this.createAudio(e);
                    case 13:
                        return this.createCamera(e);
                    case 15:
                        return this.createFootage(e)
                }
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, BaseRenderer.prototype.createAudio = function(e) {
                return new AudioElement(e, this.globalData, this)
            }, BaseRenderer.prototype.createFootage = function(e) {
                return new FootageElement(e, this.globalData, this)
            }, BaseRenderer.prototype.buildAllItems = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1) this.buildItem(e);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(e) {
                var t;
                this.completeLayers = !1;
                var r, i = e.length,
                    n = this.layers.length;
                for (t = 0; t < i; t += 1)
                    for (r = 0; r < n;) {
                        if (this.layers[r].id === e[t].id) {
                            this.layers[r] = e[t];
                            break
                        }
                        r += 1
                    }
            }, BaseRenderer.prototype.setProjectInterface = function(e) {
                this.globalData.projectInterface = e
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
                for (var i = this.elements, n = this.layers, a = 0, o = n.length; a < o;) n[a].ind == t && (i[a] && i[a] !== !0 ? (r.push(i[a]), i[a].setAsParent(), n[a].parent !== void 0 ? this.buildElementParenting(e, n[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
            }, BaseRenderer.prototype.addPendingElement = function(e) {
                this.pendingElements.push(e)
            }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1)
                    if (e[t].xt) {
                        var i = this.createComp(e[t]);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                    }
            }, BaseRenderer.prototype.getElementById = function(e) {
                var t, r = this.elements.length;
                for (t = 0; t < r; t += 1)
                    if (this.elements[t].data.ind === e) return this.elements[t];
                return null
            }, BaseRenderer.prototype.getElementByPath = function(e) {
                var t, r = e.shift();
                if (typeof r == "number") t = this.elements[r];
                else {
                    var i, n = this.elements.length;
                    for (i = 0; i < n; i += 1)
                        if (this.elements[i].data.nm === r) {
                            t = this.elements[i];
                            break
                        }
                }
                return e.length === 0 ? t : t.getElementByPath(e)
            }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
                this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
                    w: e.w,
                    h: e.h
                }
            };
            var effectTypes = {
                TRANSFORM_EFFECT: "transformEFfect"
            };

            function TransformElement() {}

            function MaskElement(e, t, r) {
                this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var i, n, a = this.globalData.defs,
                    o = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(o), this.solidPath = "";
                var s, u, d, h, f, m, c = this.masksProperties,
                    p = 0,
                    v = [],
                    l = createElementID(),
                    y = "clipPath",
                    g = "clip-path";
                for (i = 0; i < o; i += 1)
                    if ((c[i].mode !== "a" && c[i].mode !== "n" || c[i].inv || c[i].o.k !== 100 || c[i].o.x) && (y = "mask", g = "mask"), c[i].mode !== "s" && c[i].mode !== "i" || p !== 0 ? d = null : ((d = createNS("rect")).setAttribute("fill", "#ffffff"), d.setAttribute("width", this.element.comp.data.w || 0), d.setAttribute("height", this.element.comp.data.h || 0), v.push(d)), n = createNS("path"), c[i].mode === "n") this.viewData[i] = {
                        op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                        elem: n,
                        lastPath: ""
                    }, a.appendChild(n);
                    else {
                        var b;
                        if (p += 1, n.setAttribute("fill", c[i].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), c[i].x.k !== 0 ? (y = "mask", g = "mask", m = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (h = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), h.appendChild(f), a.appendChild(h), n.setAttribute("stroke", c[i].mode === "s" ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[i] = {
                                elem: n,
                                x: m,
                                expan: f,
                                lastPath: "",
                                lastOperator: "",
                                filterId: b,
                                lastRadius: 0
                            }, c[i].mode === "i") {
                            u = v.length;
                            var S = createNS("g");
                            for (s = 0; s < u; s += 1) S.appendChild(v[s]);
                            var _ = createNS("mask");
                            _.setAttribute("mask-type", "alpha"), _.setAttribute("id", l + "_" + p), _.appendChild(n), a.appendChild(_), S.setAttribute("mask", "url(" + getLocationHref() + "#" + l + "_" + p + ")"), v.length = 0, v.push(S)
                        } else v.push(n);
                        c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                            elem: n,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                            invRect: d
                        }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i])
                    } for (this.maskElement = createNS(y), o = v.length, i = 0; i < o; i += 1) this.maskElement.appendChild(v[i]);
                p > 0 && (this.maskElement.setAttribute("id", l), this.element.maskedElement.setAttribute(g, "url(" + getLocationHref() + "#" + l + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }
            TransformElement.prototype = {
                initTransform: function() {
                    var e = new Matrix;
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _localMatMdf: !1,
                        _opMdf: !1,
                        mat: e,
                        localMat: e,
                        localOpacity: 1
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var e, t = this.finalTransform.mat,
                            r = 0,
                            i = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; r < i;) {
                                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                r += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < i; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
                    }
                    this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                },
                renderLocalTransform: function() {
                    if (this.localTransforms) {
                        var e = 0,
                            t = this.localTransforms.length;
                        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                            for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
                        if (this.finalTransform._localMatMdf) {
                            var r = this.finalTransform.localMat;
                            for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                                var i = this.localTransforms[e].matrix;
                                r.multiply(i)
                            }
                            r.multiply(this.finalTransform.mat)
                        }
                        if (this.finalTransform._opMdf) {
                            var n = this.finalTransform.localOpacity;
                            for (e = 0; e < t; e += 1) n *= .01 * this.localTransforms[e].opacity;
                            this.finalTransform.localOpacity = n
                        }
                    }
                },
                searchEffectTransforms: function() {
                    if (this.renderableEffectsManager) {
                        var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                        if (e.length) {
                            this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                            var t = 0,
                                r = e.length;
                            for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
                        }
                    }
                },
                globalToLocal: function(e) {
                    var t = [];
                    t.push(this.finalTransform);
                    for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && t.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
                    var a, o = t.length;
                    for (r = 0; r < o; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
                    return e
                },
                mHelper: new Matrix
            }, MaskElement.prototype.getMaskProperty = function(e) {
                return this.viewData[e].prop
            }, MaskElement.prototype.renderFrame = function(e) {
                var t, r = this.element.finalTransform.mat,
                    i = this.masksProperties.length;
                for (t = 0; t < i; t += 1)
                    if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
                        var n = this.storedData[t].expan;
                        this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), n.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
                    }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var e = "M0,0 ";
                return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
            }, MaskElement.prototype.drawPath = function(e, t, r) {
                var i, n, a = " M" + t.v[0][0] + "," + t.v[0][1];
                for (n = t._length, i = 1; i < n; i += 1) a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
                if (t.c && n > 1 && (a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
                    var o = "";
                    r.elem && (t.c && (o = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", o)), r.lastPath = a
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            };
            var filtersFactory = function() {
                    var e = {};
                    return e.createFilter = function(t, r) {
                        var i = createNS("filter");
                        return i.setAttribute("id", t), r !== !0 && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                    }, e.createAlphaToLuminanceFilter = function() {
                        var t = createNS("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                    }, e
                }(),
                featureSupport = function() {
                    var e = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: typeof OffscreenCanvas < "u"
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
                }(),
                registeredEffects$1 = {},
                idPrefix = "filter_result_";

            function SVGEffects(e) {
                var t, r, i = "SourceGraphic",
                    n = e.data.ef ? e.data.ef.length : 0,
                    a = createElementID(),
                    o = filtersFactory.createFilter(a, !0),
                    s = 0;
                for (this.filters = [], t = 0; t < n; t += 1) {
                    r = null;
                    var u = e.data.ef[t].ty;
                    registeredEffects$1[u] && (r = new registeredEffects$1[u].effect(o, e.effectsManager.effectElements[t], e, idPrefix + s, i), i = idPrefix + s, registeredEffects$1[u].countsAsEffect && (s += 1)), r && this.filters.push(r)
                }
                s && (e.globalData.defs.appendChild(o), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
            }

            function registerEffect$1(e, t, r) {
                registeredEffects$1[e] = {
                    effect: t,
                    countsAsEffect: r
                }
            }

            function SVGBaseElement() {}

            function HierarchyElement() {}

            function RenderableDOMElement() {}

            function IImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function ProcessedElement(e, t) {
                this.elem = e, this.pos = t
            }

            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(e) {
                var t, r = this.filters.length;
                for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
            }, SVGEffects.prototype.getEffects = function(e) {
                var t, r = this.filters.length,
                    i = [];
                for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
                return i
            }, SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var e = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var t = createNS("g");
                        t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                        var r = createNS("clipPath"),
                            i = createNS("path");
                        i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var n = createElementID();
                        if (r.setAttribute("id", n), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                            var a = createNS("g");
                            a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
                    }
                    this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
                },
                getMatte: function(e) {
                    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                        var t, r, i, n, a = this.layerId + "_" + e;
                        if (e === 1 || e === 3) {
                            var o = createNS("mask");
                            o.setAttribute("id", a), o.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(i), this.globalData.defs.appendChild(o), featureSupport.maskType || e !== 1 || (o.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(i), o.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
                        } else if (e === 2) {
                            var s = createNS("mask");
                            s.setAttribute("id", a), s.setAttribute("mask-type", "alpha");
                            var u = createNS("g");
                            s.appendChild(u), t = createElementID(), r = filtersFactory.createFilter(t);
                            var d = createNS("feComponentTransfer");
                            d.setAttribute("in", "SourceGraphic"), r.appendChild(d);
                            var h = createNS("feFuncA");
                            h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), d.appendChild(h), this.globalData.defs.appendChild(r);
                            var f = createNS("rect");
                            f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), u.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), u.appendChild(f), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), u.appendChild(i), featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), u.appendChild(f), n.appendChild(this.layerElement), u.appendChild(n)), this.globalData.defs.appendChild(s)
                        }
                        this.matteMasks[e] = a
                    }
                    return this.matteMasks[e]
                },
                setMatte: function(e) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
                }
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(e) {
                    this.hierarchy = e
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            }, extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(e, t, r) {
                    this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(e) {
                    this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var e = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(e) {
                    var t, r = this.shapeModifiers.length;
                    for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
                },
                isShapeInAnimatedModifiers: function(e) {
                    for (var t = this.shapeModifiers.length; 0 < t;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var e, t = this.shapes.length;
                        for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                        for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                    }
                },
                searchProcessedElement: function(e) {
                    for (var t = this.processedElements, r = 0, i = t.length; r < i;) {
                        if (t[r].elem === e) return t[r].pos;
                        r += 1
                    }
                    return 0
                },
                addProcessedElement: function(e, t) {
                    for (var r = this.processedElements, i = r.length; i;)
                        if (r[i -= 1].elem === e) return void(r[i].pos = t);
                    r.push(new ProcessedElement(e, t))
                },
                prepareFrame: function(e) {
                    this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
                }
            };
            var lineCapEnum = {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                lineJoinEnum = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };

            function SVGShapeData(e, t, r) {
                this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
                for (var i = 0, n = e.length; i < n;) {
                    if (e[i].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    i += 1
                }
            }

            function SVGStyleData(e, t) {
                this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
            }

            function DashProperty(e, t, r, i) {
                var n;
                this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                var a, o = t.length || 0;
                for (n = 0; n < o; n += 1) a = PropertyFactory.getProp(e, t[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
                    n: t[n].n,
                    p: a
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function SVGStrokeStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
            }

            function SVGFillStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
            }

            function SVGNoStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
            }

            function GradientProperty(e, t, r) {
                this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
                var i = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
                this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }

            function SVGGradientFillStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
            }

            function SVGGradientStrokeStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
            }

            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g")
            }

            function SVGTransformData(e, t, r) {
                this.transform = {
                    mProps: e,
                    op: t,
                    container: r
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, DashProperty.prototype.getValue = function(e) {
                if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
                    var t = 0,
                        r = this.dataProps.length;
                    for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
                for (var r = 0, i = this.o.length / 2; r < i;) {
                    if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
                    r += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var e = 0, t = this.data.k.k.length; e < t;) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(e) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
                    var t, r, i, n = 4 * this.data.p;
                    for (t = 0; t < n; t += 1) r = t % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[t] * r), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
                    if (this.o.length)
                        for (n = this.prop.v.length, t = 4 * this.data.p; t < n; t += 1) r = t % 2 == 0 ? 100 : 1, i = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== i && (this.o[t - 4 * this.data.p] = i, this._omdf = !e);
                    this._mdf = !e
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
                this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
            }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
                var r = createElementID(),
                    i = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                var n, a, o, s = [];
                for (o = 4 * t.g.p, a = 0; a < o; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
                e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r, i, n, a = createNS("mask"),
                        o = createNS("path");
                    a.appendChild(o);
                    var s = createElementID(),
                        u = createElementID();
                    a.setAttribute("id", u);
                    var d = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
                    d.setAttribute("id", s), d.setAttribute("spreadMethod", "pad"), d.setAttribute("gradientUnits", "userSpaceOnUse"), n = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
                    var h = this.stops;
                    for (i = 4 * e.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), d.appendChild(r), h.push(r);
                    o.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"), e.ty === "gs" && (o.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)), this.of = d, this.ms = a, this.ost = h, this.maskId = u, t.msElem = o
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(e, t, r, i) {
                    if (t === 0) return "";
                    var n, a = e.o,
                        o = e.i,
                        s = e.v,
                        u = " M" + i.applyToPointStringified(s[0][0], s[0][1]);
                    for (n = 1; n < t; n += 1) u += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]);
                    return r && t && (u += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]), u += "z"), u
                },
                SVGElementsRenderer = function() {
                    var e = new Matrix,
                        t = new Matrix;

                    function r(d, h, f) {
                        (f || h.transform.op._mdf) && h.transform.container.setAttribute("opacity", h.transform.op.v), (f || h.transform.mProps._mdf) && h.transform.container.setAttribute("transform", h.transform.mProps.v.to2dCSS())
                    }

                    function i() {}

                    function n(d, h, f) {
                        var m, c, p, v, l, y, g, b, S, _, I = h.styles.length,
                            w = h.lvl;
                        for (y = 0; y < I; y += 1) {
                            if (v = h.sh._mdf || f, h.styles[y].lvl < w) {
                                for (b = t.reset(), S = w - h.styles[y].lvl, _ = h.transformers.length - 1; !v && S > 0;) v = h.transformers[_].mProps._mdf || v, S -= 1, _ -= 1;
                                if (v)
                                    for (S = w - h.styles[y].lvl, _ = h.transformers.length - 1; S > 0;) b.multiply(h.transformers[_].mProps.v), S -= 1, _ -= 1
                            } else b = e;
                            if (c = (g = h.sh.paths)._length, v) {
                                for (p = "", m = 0; m < c; m += 1)(l = g.shapes[m]) && l._length && (p += buildShapeString(l, l._length, l.c, b));
                                h.caches[y] = p
                            } else p = h.caches[y];
                            h.styles[y].d += d.hd === !0 ? "" : p, h.styles[y]._mdf = v || h.styles[y]._mdf
                        }
                    }

                    function a(d, h, f) {
                        var m = h.style;
                        (h.c._mdf || f) && m.pElem.setAttribute("fill", "rgb(" + bmFloor(h.c.v[0]) + "," + bmFloor(h.c.v[1]) + "," + bmFloor(h.c.v[2]) + ")"), (h.o._mdf || f) && m.pElem.setAttribute("fill-opacity", h.o.v)
                    }

                    function o(d, h, f) {
                        s(d, h, f), u(d, h, f)
                    }

                    function s(d, h, f) {
                        var m, c, p, v, l, y = h.gf,
                            g = h.g._hasOpacity,
                            b = h.s.v,
                            S = h.e.v;
                        if (h.o._mdf || f) {
                            var _ = d.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                            h.style.pElem.setAttribute(_, h.o.v)
                        }
                        if (h.s._mdf || f) {
                            var I = d.t === 1 ? "x1" : "cx",
                                w = I === "x1" ? "y1" : "cy";
                            y.setAttribute(I, b[0]), y.setAttribute(w, b[1]), g && !h.g._collapsable && (h.of.setAttribute(I, b[0]), h.of.setAttribute(w, b[1]))
                        }
                        if (h.g._cmdf || f) {
                            m = h.cst;
                            var C = h.g.c;
                            for (p = m.length, c = 0; c < p; c += 1)(v = m[c]).setAttribute("offset", C[4 * c] + "%"), v.setAttribute("stop-color", "rgb(" + C[4 * c + 1] + "," + C[4 * c + 2] + "," + C[4 * c + 3] + ")")
                        }
                        if (g && (h.g._omdf || f)) {
                            var F = h.g.o;
                            for (p = (m = h.g._collapsable ? h.cst : h.ost).length, c = 0; c < p; c += 1) v = m[c], h.g._collapsable || v.setAttribute("offset", F[2 * c] + "%"), v.setAttribute("stop-opacity", F[2 * c + 1])
                        }
                        if (d.t === 1)(h.e._mdf || f) && (y.setAttribute("x2", S[0]), y.setAttribute("y2", S[1]), g && !h.g._collapsable && (h.of.setAttribute("x2", S[0]), h.of.setAttribute("y2", S[1])));
                        else if ((h.s._mdf || h.e._mdf || f) && (l = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)), y.setAttribute("r", l), g && !h.g._collapsable && h.of.setAttribute("r", l)), h.e._mdf || h.h._mdf || h.a._mdf || f) {
                            l || (l = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)));
                            var M = Math.atan2(S[1] - b[1], S[0] - b[0]),
                                A = h.h.v;
                            A >= 1 ? A = .99 : A <= -1 && (A = -.99);
                            var D = l * A,
                                q = Math.cos(M + h.a.v) * D + b[0],
                                T = Math.sin(M + h.a.v) * D + b[1];
                            y.setAttribute("fx", q), y.setAttribute("fy", T), g && !h.g._collapsable && (h.of.setAttribute("fx", q), h.of.setAttribute("fy", T))
                        }
                    }

                    function u(d, h, f) {
                        var m = h.style,
                            c = h.d;
                        c && (c._mdf || f) && c.dashStr && (m.pElem.setAttribute("stroke-dasharray", c.dashStr), m.pElem.setAttribute("stroke-dashoffset", c.dashoffset[0])), h.c && (h.c._mdf || f) && m.pElem.setAttribute("stroke", "rgb(" + bmFloor(h.c.v[0]) + "," + bmFloor(h.c.v[1]) + "," + bmFloor(h.c.v[2]) + ")"), (h.o._mdf || f) && m.pElem.setAttribute("stroke-opacity", h.o.v), (h.w._mdf || f) && (m.pElem.setAttribute("stroke-width", h.w.v), m.msElem && m.msElem.setAttribute("stroke-width", h.w.v))
                    }
                    return {
                        createRenderFunction: function(d) {
                            switch (d.ty) {
                                case "fl":
                                    return a;
                                case "gf":
                                    return s;
                                case "gs":
                                    return o;
                                case "st":
                                    return u;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return n;
                                case "tr":
                                    return r;
                                case "no":
                                    return i;
                                default:
                                    return null
                            }
                        }
                    }
                }();

            function SVGShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
            }

            function LetterProps(e, t, r, i, n, a) {
                this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
                    o: !0,
                    sw: !!t,
                    sc: !!r,
                    fc: !!i,
                    m: !0,
                    p: !0
                }
            }

            function TextProperty(e, t) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var e, t, r, i, n = this.shapes.length,
                    a = this.stylesList.length,
                    o = [],
                    s = !1;
                for (r = 0; r < a; r += 1) {
                    for (i = this.stylesList[r], s = !1, o.length = 0, e = 0; e < n; e += 1)(t = this.shapes[e]).styles.indexOf(i) !== -1 && (o.push(t), s = t._isAnimated || s);
                    o.length > 1 && s && this.setShapesAsAnimated(o)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t].setAsAnimated()
            }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
                var r, i = new SVGStyleData(e, t),
                    n = i.pElem;
                return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, i) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, i) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, i)), e.ty !== "st" && e.ty !== "gs" || (n.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), n.setAttribute("fill-opacity", "0"), e.lj === 1 && n.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && n.setAttribute("fill-rule", "evenodd"), e.ln && n.setAttribute("id", e.ln), e.cl && n.setAttribute("class", e.cl), e.bm && (n.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r
            }, SVGShapeElement.prototype.createGroupElement = function(e) {
                var t = new ShapeGroupData;
                return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
            }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
                var r = TransformPropertyFactory.getTransformProperty(this, e, this),
                    i = new SVGTransformData(r, r.o, t);
                return this.addToAnimatedContents(e, i), i
            }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
                var i = 4;
                e.ty === "rc" ? i = 5 : e.ty === "el" ? i = 6 : e.ty === "sr" && (i = 7);
                var n = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, i, this));
                return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
            }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
                for (var r = 0, i = this.animatedContents.length; r < i;) {
                    if (this.animatedContents[r].element === t) return;
                    r += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(e),
                    element: t,
                    data: e
                })
            }, SVGShapeElement.prototype.setElementStyles = function(e) {
                var t, r = e.styles,
                    i = this.stylesList.length;
                for (t = 0; t < i; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
            }, SVGShapeElement.prototype.reloadShapes = function() {
                var e;
                this._isFirstFrame = !0;
                var t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, n, a, o) {
                var s, u, d, h, f, m, c = [].concat(a),
                    p = e.length - 1,
                    v = [],
                    l = [];
                for (s = p; s >= 0; s -= 1) {
                    if ((m = this.searchProcessedElement(e[s])) ? t[s] = r[m - 1] : e[s]._render = o, e[s].ty === "fl" || e[s].ty === "st" || e[s].ty === "gf" || e[s].ty === "gs" || e[s].ty === "no") m ? t[s].style.closed = !1 : t[s] = this.createStyleElement(e[s], n), e[s]._render && t[s].style.pElem.parentNode !== i && i.appendChild(t[s].style.pElem), v.push(t[s].style);
                    else if (e[s].ty === "gr") {
                        if (m)
                            for (d = t[s].it.length, u = 0; u < d; u += 1) t[s].prevViewData[u] = t[s].it[u];
                        else t[s] = this.createGroupElement(e[s]);
                        this.searchShapes(e[s].it, t[s].it, t[s].prevViewData, t[s].gr, n + 1, c, o), e[s]._render && t[s].gr.parentNode !== i && i.appendChild(t[s].gr)
                    } else e[s].ty === "tr" ? (m || (t[s] = this.createTransformElement(e[s], i)), h = t[s].transform, c.push(h)) : e[s].ty === "sh" || e[s].ty === "rc" || e[s].ty === "el" || e[s].ty === "sr" ? (m || (t[s] = this.createShapeElement(e[s], c, n)), this.setElementStyles(t[s])) : e[s].ty === "tm" || e[s].ty === "rd" || e[s].ty === "ms" || e[s].ty === "pb" || e[s].ty === "zz" || e[s].ty === "op" ? (m ? (f = t[s]).closed = !1 : ((f = ShapeModifiers.getModifier(e[s].ty)).init(this, e[s]), t[s] = f, this.shapeModifiers.push(f)), l.push(f)) : e[s].ty === "rp" && (m ? (f = t[s]).closed = !0 : (f = ShapeModifiers.getModifier(e[s].ty), t[s] = f, f.init(this, e, s, t), this.shapeModifiers.push(f), o = !1), l.push(f));
                    this.addProcessedElement(e[s], s + 1)
                }
                for (p = v.length, s = 0; s < p; s += 1) v[s].closed = !0;
                for (p = l.length, s = 0; s < p; s += 1) l[s].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                var e;
                this.renderModifiers();
                var t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
            }, SVGShapeElement.prototype.renderShape = function() {
                var e, t, r = this.animatedContents.length;
                for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, LetterProps.prototype.update = function(e, t, r, i, n, a) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var o = !1;
                return this.o !== e && (this.o = e, this._mdf.o = !0, o = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, o = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, o = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, o = !0), this.m !== n && (this.m = n, this._mdf.m = !0, o = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, o = !0), o
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }, TextProperty.prototype.setCurrentData = function(e) {
                e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, TextProperty.prototype.addEffect = function(e) {
                this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.getValue = function(e) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var t = this.currentData,
                        r = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var i;
                        this.lock = !0, this._mdf = !1;
                        var n = this.effectsSequence.length,
                            a = e || this.data.d.k[this.keysIndex].s;
                        for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                        t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
                return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
            }, TextProperty.prototype.buildFinalText = function(e) {
                for (var t, r, i = [], n = 0, a = e.length, o = !1, s = !1, u = ""; n < a;) o = s, s = !1, t = e.charCodeAt(n), u = e.charAt(n), FontManager.isCombinedCharacter(t) ? o = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, n) ? u = e.substr(n, 14) : (r = e.charCodeAt(n + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (u = e.substr(n, 2), o = !0) : u = FontManager.isFlagEmoji(e.substr(n, 4)) ? e.substr(n, 4) : e.substr(n, 2)) : t > 56319 ? (r = e.charCodeAt(n + 1), FontManager.isVariationSelector(t) && (o = !0)) : FontManager.isZeroWidthJoiner(t) && (o = !0, s = !0), o ? (i[i.length - 1] += u, o = !1) : i.push(u), n += u.length;
                return i
            }, TextProperty.prototype.completeTextData = function(e) {
                e.__complete = !0;
                var t, r, i, n, a, o, s, u = this.elem.globalData.fontManager,
                    d = this.data,
                    h = [],
                    f = 0,
                    m = d.m.g,
                    c = 0,
                    p = 0,
                    v = 0,
                    l = [],
                    y = 0,
                    g = 0,
                    b = u.getFontByName(e.f),
                    S = 0,
                    _ = getFontProperties(b);
                e.fWeight = _.weight, e.fStyle = _.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
                var I, w = e.tr / 1e3 * e.finalSize;
                if (e.sz)
                    for (var C, F, M = !0, A = e.sz[0], D = e.sz[1]; M;) {
                        C = 0, y = 0, r = (F = this.buildFinalText(e.t)).length, w = e.tr / 1e3 * e.finalSize;
                        var q = -1;
                        for (t = 0; t < r; t += 1) I = F[t].charCodeAt(0), i = !1, F[t] === " " ? q = t : I !== 13 && I !== 3 || (y = 0, i = !0, C += e.finalLineHeight || 1.2 * e.finalSize), u.chars ? (s = u.getCharData(F[t], b.fStyle, b.fFamily), S = i ? 0 : s.w * e.finalSize / 100) : S = u.measureText(F[t], e.f, e.finalSize), y + S > A && F[t] !== " " ? (q === -1 ? r += 1 : t = q, C += e.finalLineHeight || 1.2 * e.finalSize, F.splice(t, q === t ? 1 : 0, "\r"), q = -1, y = 0) : (y += S, y += w);
                        C += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && D < C ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = F, r = e.finalText.length, M = !1)
                    }
                y = -w, S = 0;
                var T, L = 0;
                for (t = 0; t < r; t += 1)
                    if (i = !1, (I = (T = e.finalText[t]).charCodeAt(0)) === 13 || I === 3 ? (L = 0, l.push(y), g = y > g ? y : g, y = -2 * w, n = "", i = !0, v += 1) : n = T, u.chars ? (s = u.getCharData(T, b.fStyle, u.getFontByName(e.f).fFamily), S = i ? 0 : s.w * e.finalSize / 100) : S = u.measureText(n, e.f, e.finalSize), T === " " ? L += S + w : (y += S + w + L, L = 0), h.push({
                            l: S,
                            an: S,
                            add: c,
                            n: i,
                            anIndexes: [],
                            val: n,
                            line: v,
                            animatorJustifyOffset: 0
                        }), m == 2) {
                        if (c += S, n === "" || n === " " || t === r - 1) {
                            for (n !== "" && n !== " " || (c -= S); p <= t;) h[p].an = c, h[p].ind = f, h[p].extra = S, p += 1;
                            f += 1, c = 0
                        }
                    } else if (m == 3) {
                    if (c += S, n === "" || t === r - 1) {
                        for (n === "" && (c -= S); p <= t;) h[p].an = c, h[p].ind = f, h[p].extra = S, p += 1;
                        c = 0, f += 1
                    }
                } else h[f].ind = f, h[f].extra = 0, f += 1;
                if (e.l = h, g = y > g ? y : g, l.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
                else switch (e.boxWidth = g, e.j) {
                    case 1:
                        e.justifyOffset = -e.boxWidth;
                        break;
                    case 2:
                        e.justifyOffset = -e.boxWidth / 2;
                        break;
                    default:
                        e.justifyOffset = 0
                }
                e.lineWidths = l;
                var N, H, P, R, z = d.a;
                o = z.length;
                var K = [];
                for (a = 0; a < o; a += 1) {
                    for ((N = z[a]).a.sc && (e.strokeColorAnim = !0), N.a.sw && (e.strokeWidthAnim = !0), (N.a.fc || N.a.fh || N.a.fs || N.a.fb) && (e.fillColorAnim = !0), R = 0, P = N.s.b, t = 0; t < r; t += 1)(H = h[t]).anIndexes[a] = R, (P == 1 && H.val !== "" || P == 2 && H.val !== "" && H.val !== " " || P == 3 && (H.n || H.val == " " || t == r - 1) || P == 4 && (H.n || t == r - 1)) && (N.s.rn === 1 && K.push(R), R += 1);
                    d.a[a].s.totalChars = R;
                    var re, W = -1;
                    if (N.s.rn === 1)
                        for (t = 0; t < r; t += 1) W != (H = h[t]).anIndexes[a] && (W = H.anIndexes[a], re = K.splice(Math.floor(Math.random() * K.length), 1)[0]), H.anIndexes[a] = re
                }
                e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(e, t) {
                t = t === void 0 ? this.keysIndex : t;
                var r = this.copyData({}, this.data.d.k[t].s);
                r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(e) {
                var t = this.data.d.k[e].s;
                t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
            }, TextProperty.prototype.canResizeFont = function(e) {
                this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.setMinimumFontSize = function(e) {
                this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                var e = Math.max,
                    t = Math.min,
                    r = Math.floor;

                function i(n, a) {
                    this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(n, a.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(n, a.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || {
                        k: 0
                    }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || {
                        k: 100
                    }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return i.prototype = {
                    getMult: function(n) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var a = 0,
                            o = 0,
                            s = 1,
                            u = 1;
                        this.ne.v > 0 ? a = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : u = 1 + this.xe.v / 100;
                        var d = BezierFactory.getBezierEasing(a, o, s, u).get,
                            h = 0,
                            f = this.finalS,
                            m = this.finalE,
                            c = this.data.sh;
                        if (c === 2) h = d(h = m === f ? n >= m ? 1 : 0 : e(0, t(.5 / (m - f) + (n - f) / (m - f), 1)));
                        else if (c === 3) h = d(h = m === f ? n >= m ? 0 : 1 : 1 - e(0, t(.5 / (m - f) + (n - f) / (m - f), 1)));
                        else if (c === 4) m === f ? h = 0 : (h = e(0, t(.5 / (m - f) + (n - f) / (m - f), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = d(h);
                        else if (c === 5) {
                            if (m === f) h = 0;
                            else {
                                var p = m - f,
                                    v = -p / 2 + (n = t(e(0, n + .5 - f), m - f)),
                                    l = p / 2;
                                h = Math.sqrt(1 - v * v / (l * l))
                            }
                            h = d(h)
                        } else c === 6 ? (m === f ? h = 0 : (n = t(e(0, n + .5 - f), m - f), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (m - f))) / 2), h = d(h)) : (n >= r(f) && (h = e(0, t(n - f < 0 ? t(m, 1) - (f - n) : m - n, 1))), h = d(h));
                        if (this.sm.v !== 100) {
                            var y = .01 * this.sm.v;
                            y === 0 && (y = 1e-8);
                            var g = .5 - .5 * y;
                            h < g ? h = 0 : (h = (h - g) / y) > 1 && (h = 1)
                        }
                        return h * this.a.v
                    },
                    getValue: function(n) {
                        this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
                        var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                            o = this.o.v / a,
                            s = this.s.v / a + o,
                            u = this.e.v / a + o;
                        if (s > u) {
                            var d = s;
                            s = u, u = d
                        }
                        this.finalS = s, this.finalE = u
                    }
                }, extendPrototype([DynamicPropertyContainer], i), {
                    getTextSelectorProp: function(n, a, o) {
                        return new i(n, a, o)
                    }
                }
            }();

            function TextAnimatorDataProperty(e, t, r) {
                var i = {
                        propType: !1
                    },
                    n = PropertyFactory.getProp,
                    a = t.a;
                this.a = {
                    r: a.r ? n(e, a.r, 0, degToRads, r) : i,
                    rx: a.rx ? n(e, a.rx, 0, degToRads, r) : i,
                    ry: a.ry ? n(e, a.ry, 0, degToRads, r) : i,
                    sk: a.sk ? n(e, a.sk, 0, degToRads, r) : i,
                    sa: a.sa ? n(e, a.sa, 0, degToRads, r) : i,
                    s: a.s ? n(e, a.s, 1, .01, r) : i,
                    a: a.a ? n(e, a.a, 1, 0, r) : i,
                    o: a.o ? n(e, a.o, 0, .01, r) : i,
                    p: a.p ? n(e, a.p, 1, 0, r) : i,
                    sw: a.sw ? n(e, a.sw, 0, 0, r) : i,
                    sc: a.sc ? n(e, a.sc, 1, 0, r) : i,
                    fc: a.fc ? n(e, a.fc, 1, 0, r) : i,
                    fh: a.fh ? n(e, a.fh, 0, 0, r) : i,
                    fs: a.fs ? n(e, a.fs, 0, .01, r) : i,
                    fb: a.fb ? n(e, a.fb, 0, .01, r) : i,
                    t: a.t ? n(e, a.t, 0, 0, r) : i
                }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
            }

            function TextAnimatorProperty(e, t, r) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
            }

            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var e, t, r = this._textData.a.length,
                    i = PropertyFactory.getProp;
                for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: i(this._elem, this._textData.p.a, 0, 0, this),
                    f: i(this._elem, this._textData.p.f, 0, 0, this),
                    l: i(this._elem, this._textData.p.l, 0, 0, this),
                    r: i(this._elem, this._textData.p.r, 0, 0, this),
                    p: i(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
                if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var r, i, n, a, o, s, u, d, h, f, m, c, p, v, l, y, g, b, S, _ = this._moreOptions.alignment.v,
                        I = this._animatorsData,
                        w = this._textData,
                        C = this.mHelper,
                        F = this._renderType,
                        M = this.renderedLetters.length,
                        A = e.l;
                    if (this._hasMaskedPath) {
                        if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var D, q = S.v;
                            for (this._pathData.r.v && (q = q.reverse()), o = {
                                    tLength: 0,
                                    segments: []
                                }, a = q._length - 1, y = 0, n = 0; n < a; n += 1) D = bez.buildBezierData(q.v[n], q.v[n + 1], [q.o[n][0] - q.v[n][0], q.o[n][1] - q.v[n][1]], [q.i[n + 1][0] - q.v[n + 1][0], q.i[n + 1][1] - q.v[n + 1][1]]), o.tLength += D.segmentLength, o.segments.push(D), y += D.segmentLength;
                            n = a, S.v.c && (D = bez.buildBezierData(q.v[n], q.v[0], [q.o[n][0] - q.v[n][0], q.o[n][1] - q.v[n][1]], [q.i[0][0] - q.v[0][0], q.i[0][1] - q.v[0][1]]), o.tLength += D.segmentLength, o.segments.push(D), y += D.segmentLength), this._pathData.pi = o
                        }
                        if (o = this._pathData.pi, s = this._pathData.f.v, m = 0, f = 1, d = 0, h = !0, v = o.segments, s < 0 && S.v.c)
                            for (o.tLength < Math.abs(s) && (s = -Math.abs(s) % o.tLength), f = (p = v[m = v.length - 1].points).length - 1; s < 0;) s += p[f].partialLength, (f -= 1) < 0 && (f = (p = v[m -= 1].points).length - 1);
                        c = (p = v[m].points)[f - 1], l = (u = p[f]).partialLength
                    }
                    a = A.length, r = 0, i = 0;
                    var T, L, N, H, P, R = 1.2 * e.finalSize * .714,
                        z = !0;
                    N = I.length;
                    var K, re, W, ne, ie, me, te, ae, Ae, pe, Se, Ce, _e = -1,
                        J = s,
                        Te = m,
                        dt = f,
                        Je = -1,
                        E = "",
                        k = this.defaultPropsArray;
                    if (e.j === 2 || e.j === 1) {
                        var O = 0,
                            B = 0,
                            G = e.j === 2 ? -.5 : -1,
                            V = 0,
                            $ = !0;
                        for (n = 0; n < a; n += 1)
                            if (A[n].n) {
                                for (O && (O += B); V < n;) A[V].animatorJustifyOffset = O, V += 1;
                                O = 0, $ = !0
                            } else {
                                for (L = 0; L < N; L += 1)(T = I[L].a).t.propType && ($ && e.j === 2 && (B += T.t.v * G), (P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars)).length ? O += T.t.v * P[0] * G : O += T.t.v * P * G);
                                $ = !1
                            } for (O && (O += B); V < n;) A[V].animatorJustifyOffset = O, V += 1
                    }
                    for (n = 0; n < a; n += 1) {
                        if (C.reset(), ne = 1, A[n].n) r = 0, i += e.yOffset, i += z ? 1 : 0, s = J, z = !1, this._hasMaskedPath && (f = dt, c = (p = v[m = Te].points)[f - 1], l = (u = p[f]).partialLength, d = 0), E = "", Se = "", Ae = "", Ce = "", k = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (Je !== A[n].line) {
                                    switch (e.j) {
                                        case 1:
                                            s += y - e.lineWidths[A[n].line];
                                            break;
                                        case 2:
                                            s += (y - e.lineWidths[A[n].line]) / 2
                                    }
                                    Je = A[n].line
                                }
                                _e !== A[n].ind && (A[_e] && (s += A[_e].extra), s += A[n].an / 2, _e = A[n].ind), s += _[0] * A[n].an * .005;
                                var U = 0;
                                for (L = 0; L < N; L += 1)(T = I[L].a).p.propType && ((P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars)).length ? U += T.p.v[0] * P[0] : U += T.p.v[0] * P), T.a.propType && ((P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars)).length ? U += T.a.v[0] * P[0] : U += T.a.v[0] * P);
                                for (h = !0, this._pathData.a.v && (s = .5 * A[0].an + (y - this._pathData.f.v - .5 * A[0].an - .5 * A[A.length - 1].an) * _e / (a - 1), s += this._pathData.f.v); h;) d + l >= s + U || !p ? (g = (s + U - d) / u.partialLength, re = c.point[0] + (u.point[0] - c.point[0]) * g, W = c.point[1] + (u.point[1] - c.point[1]) * g, C.translate(-_[0] * A[n].an * .005, -_[1] * R * .01), h = !1) : p && (d += u.partialLength, (f += 1) >= p.length && (f = 0, v[m += 1] ? p = v[m].points : S.v.c ? (f = 0, p = v[m = 0].points) : (d -= u.partialLength, p = null)), p && (c = u, l = (u = p[f]).partialLength));
                                K = A[n].an / 2 - A[n].add, C.translate(-K, 0, 0)
                            } else K = A[n].an / 2 - A[n].add, C.translate(-K, 0, 0), C.translate(-_[0] * A[n].an * .005, -_[1] * R * .01, 0);
                            for (L = 0; L < N; L += 1)(T = I[L].a).t.propType && (P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? P.length ? s += T.t.v * P[0] : s += T.t.v * P : P.length ? r += T.t.v * P[0] : r += T.t.v * P));
                            for (e.strokeWidthAnim && (me = e.sw || 0), e.strokeColorAnim && (ie = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (te = [e.fc[0], e.fc[1], e.fc[2]]), L = 0; L < N; L += 1)(T = I[L].a).a.propType && ((P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars)).length ? C.translate(-T.a.v[0] * P[0], -T.a.v[1] * P[1], T.a.v[2] * P[2]) : C.translate(-T.a.v[0] * P, -T.a.v[1] * P, T.a.v[2] * P));
                            for (L = 0; L < N; L += 1)(T = I[L].a).s.propType && ((P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars)).length ? C.scale(1 + (T.s.v[0] - 1) * P[0], 1 + (T.s.v[1] - 1) * P[1], 1) : C.scale(1 + (T.s.v[0] - 1) * P, 1 + (T.s.v[1] - 1) * P, 1));
                            for (L = 0; L < N; L += 1) {
                                if (T = I[L].a, P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars), T.sk.propType && (P.length ? C.skewFromAxis(-T.sk.v * P[0], T.sa.v * P[1]) : C.skewFromAxis(-T.sk.v * P, T.sa.v * P)), T.r.propType && (P.length ? C.rotateZ(-T.r.v * P[2]) : C.rotateZ(-T.r.v * P)), T.ry.propType && (P.length ? C.rotateY(T.ry.v * P[1]) : C.rotateY(T.ry.v * P)), T.rx.propType && (P.length ? C.rotateX(T.rx.v * P[0]) : C.rotateX(T.rx.v * P)), T.o.propType && (P.length ? ne += (T.o.v * P[0] - ne) * P[0] : ne += (T.o.v * P - ne) * P), e.strokeWidthAnim && T.sw.propType && (P.length ? me += T.sw.v * P[0] : me += T.sw.v * P), e.strokeColorAnim && T.sc.propType)
                                    for (ae = 0; ae < 3; ae += 1) P.length ? ie[ae] += (T.sc.v[ae] - ie[ae]) * P[0] : ie[ae] += (T.sc.v[ae] - ie[ae]) * P;
                                if (e.fillColorAnim && e.fc) {
                                    if (T.fc.propType)
                                        for (ae = 0; ae < 3; ae += 1) P.length ? te[ae] += (T.fc.v[ae] - te[ae]) * P[0] : te[ae] += (T.fc.v[ae] - te[ae]) * P;
                                    T.fh.propType && (te = P.length ? addHueToRGB(te, T.fh.v * P[0]) : addHueToRGB(te, T.fh.v * P)), T.fs.propType && (te = P.length ? addSaturationToRGB(te, T.fs.v * P[0]) : addSaturationToRGB(te, T.fs.v * P)), T.fb.propType && (te = P.length ? addBrightnessToRGB(te, T.fb.v * P[0]) : addBrightnessToRGB(te, T.fb.v * P))
                                }
                            }
                            for (L = 0; L < N; L += 1)(T = I[L].a).p.propType && (P = I[L].s.getMult(A[n].anIndexes[L], w.a[L].s.totalChars), this._hasMaskedPath ? P.length ? C.translate(0, T.p.v[1] * P[0], -T.p.v[2] * P[1]) : C.translate(0, T.p.v[1] * P, -T.p.v[2] * P) : P.length ? C.translate(T.p.v[0] * P[0], T.p.v[1] * P[1], -T.p.v[2] * P[2]) : C.translate(T.p.v[0] * P, T.p.v[1] * P, -T.p.v[2] * P));
                            if (e.strokeWidthAnim && (Ae = me < 0 ? 0 : me), e.strokeColorAnim && (pe = "rgb(" + Math.round(255 * ie[0]) + "," + Math.round(255 * ie[1]) + "," + Math.round(255 * ie[2]) + ")"), e.fillColorAnim && e.fc && (Se = "rgb(" + Math.round(255 * te[0]) + "," + Math.round(255 * te[1]) + "," + Math.round(255 * te[2]) + ")"), this._hasMaskedPath) {
                                if (C.translate(0, -e.ls), C.translate(0, _[1] * R * .01 + i, 0), this._pathData.p.v) {
                                    b = (u.point[1] - c.point[1]) / (u.point[0] - c.point[0]);
                                    var se = 180 * Math.atan(b) / Math.PI;
                                    u.point[0] < c.point[0] && (se += 180), C.rotate(-se * Math.PI / 180)
                                }
                                C.translate(re, W, 0), s -= _[0] * A[n].an * .005, A[n + 1] && _e !== A[n + 1].ind && (s += A[n].an / 2, s += .001 * e.tr * e.finalSize)
                            } else {
                                switch (C.translate(r, i, 0), e.ps && C.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                                    case 1:
                                        C.translate(A[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[n].line]), 0, 0);
                                        break;
                                    case 2:
                                        C.translate(A[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[n].line]) / 2, 0, 0)
                                }
                                C.translate(0, -e.ls), C.translate(K, 0, 0), C.translate(_[0] * A[n].an * .005, _[1] * R * .01, 0), r += A[n].l + .001 * e.tr * e.finalSize
                            }
                            F === "html" ? E = C.toCSS() : F === "svg" ? E = C.to2dCSS() : k = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Ce = ne
                        }
                        M <= n ? (H = new LetterProps(Ce, Ae, pe, Se, E, k), this.renderedLetters.push(H), M += 1, this.lettersChangedFlag = !0) : (H = this.renderedLetters[n], this.lettersChangedFlag = H.update(Ce, Ae, pe, Se, E, k) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, ITextElement.prototype.prepareFrame = function(e) {
                this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
            }, ITextElement.prototype.createPathShape = function(e, t) {
                var r, i, n = t.length,
                    a = "";
                for (r = 0; r < n; r += 1) t[r].ty === "sh" && (i = t[r].ks.k, a += buildShapeString(i, i.i.length, !0, e));
                return a
            }, ITextElement.prototype.updateDocumentData = function(e, t) {
                this.textProperty.updateDocumentData(e, t)
            }, ITextElement.prototype.canResizeFont = function(e) {
                this.textProperty.canResizeFont(e)
            }, ITextElement.prototype.setMinimumFontSize = function(e) {
                this.textProperty.setMinimumFontSize(e)
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, i, n) {
                switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
                    case 1:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
                        break;
                    case 2:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
                }
                t.translate(i, n, 0)
            }, ITextElement.prototype.buildColor = function(e) {
                return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            };
            var emptyShapeData = {
                shapes: []
            };

            function SVGTextLottieElement(e, t, r) {
                this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
            }

            function ISolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function NullElement(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
            }

            function SVGRendererBase() {}

            function ICompElement() {}

            function SVGCompElement(e, t, r) {
                this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGRenderer(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var r = "";
                if (t && t.title) {
                    var i = createNS("title"),
                        n = createElementID();
                    i.setAttribute("id", n), i.textContent = t.title, this.svgElement.appendChild(i), r += n
                }
                if (t && t.description) {
                    var a = createNS("desc"),
                        o = createElementID();
                    a.setAttribute("id", o), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + o
                }
                r && this.svgElement.setAttribute("aria-labelledby", r);
                var s = createNS("defs");
                this.svgElement.appendChild(s);
                var u = createNS("g");
                this.svgElement.appendChild(u), this.layerElement = u, this.renderConfig = {
                    preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: t && t.contentVisibility || "visible",
                    progressiveLoad: t && t.progressiveLoad || !1,
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    viewBoxOnly: t && t.viewBoxOnly || !1,
                    viewBoxSize: t && t.viewBoxSize || !1,
                    className: t && t.className || "",
                    id: t && t.id || "",
                    focusable: t && t.focusable,
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "100%",
                        height: t && t.filterSize && t.filterSize.height || "100%",
                        x: t && t.filterSize && t.filterSize.x || "0%",
                        y: t && t.filterSize && t.filterSize.y || "0%"
                    },
                    width: t && t.width,
                    height: t && t.height,
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: s,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
                for (var t = 0, r = e.length, i = [], n = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (i.push(n), n = "") : n += e[t], t += 1;
                return i.push(n), i
            }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
                if (e.shapes && e.shapes.length) {
                    var r = e.shapes[0];
                    if (r.it) {
                        var i = r.it[r.it.length - 1];
                        i.s && (i.s.k[0] = t, i.s.k[1] = t)
                    }
                }
                return e
            }, SVGTextLottieElement.prototype.buildNewText = function() {
                var e, t;
                this.addDynamicProperty(this);
                var r = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                var i = this.globalData.fontManager.getFontByName(r.f);
                if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                else {
                    this.layerElement.setAttribute("font-family", i.fFamily);
                    var n = r.fWeight,
                        a = r.fStyle;
                    this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
                }
                this.layerElement.setAttribute("aria-label", r.t);
                var o, s = r.l || [],
                    u = !!this.globalData.fontManager.chars;
                t = s.length;
                var d = this.mHelper,
                    h = this.data.singleShape,
                    f = 0,
                    m = 0,
                    c = !0,
                    p = .001 * r.tr * r.finalSize;
                if (!h || u || r.sz) {
                    var v, l = this.textSpans.length;
                    for (e = 0; e < t; e += 1) {
                        if (this.textSpans[e] || (this.textSpans[e] = {
                                span: null,
                                childSpan: null,
                                glyph: null
                            }), !u || !h || e === 0) {
                            if (o = l > e ? this.textSpans[e].span : createNS(u ? "g" : "text"), l <= e) {
                                if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = o, u) {
                                    var y = createNS("g");
                                    o.appendChild(y), this.textSpans[e].childSpan = y
                                }
                                this.textSpans[e].span = o, this.layerElement.appendChild(o)
                            }
                            o.style.display = "inherit"
                        }
                        if (d.reset(), h && (s[e].n && (f = -p, m += r.yOffset, m += c ? 1 : 0, c = !1), this.applyTextPropertiesToMatrix(r, d, s[e].line, f, m), f += s[e].l || 0, f += p), u) {
                            var g;
                            if ((v = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) g = new SVGCompElement(v.data, this.globalData, this);
                            else {
                                var b = emptyShapeData;
                                v.data && v.data.shapes && (b = this.buildShapeData(v.data, r.finalSize)), g = new SVGShapeElement(b, this.globalData, this)
                            }
                            if (this.textSpans[e].glyph) {
                                var S = this.textSpans[e].glyph;
                                this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
                            }
                            this.textSpans[e].glyph = g, g._debug = !0, g.prepareFrame(0), g.renderFrame(), this.textSpans[e].childSpan.appendChild(g.layerElement), v.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                        } else h && o.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), o.textContent = s[e].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    h && o && o.setAttribute("d", "")
                } else {
                    var _ = this.textContainer,
                        I = "start";
                    switch (r.j) {
                        case 1:
                            I = "end";
                            break;
                        case 2:
                            I = "middle";
                            break;
                        default:
                            I = "start"
                    }
                    _.setAttribute("text-anchor", I), _.setAttribute("letter-spacing", p);
                    var w = this.buildTextContents(r.finalText);
                    for (t = w.length, m = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(o = this.textSpans[e].span || createNS("tspan")).textContent = w[e], o.setAttribute("x", 0), o.setAttribute("y", m), o.style.display = "inherit", _.appendChild(o), this.textSpans[e] || (this.textSpans[e] = {
                        span: null,
                        glyph: null
                    }), this.textSpans[e].span = o, m += r.finalLineHeight;
                    this.layerElement.appendChild(_)
                }
                for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
                this._sizeChanged = !0
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = {
                        top: e.y,
                        left: e.x,
                        width: e.width,
                        height: e.height
                    }
                }
                return this.bbox
            }, SVGTextLottieElement.prototype.getValue = function() {
                var e, t, r = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var e, t;
                    this._sizeChanged = !0;
                    var r, i, n, a = this.textAnimator.renderedLetters,
                        o = this.textProperty.currentData.l;
                    for (t = o.length, e = 0; e < t; e += 1) o[e].n || (r = a[e], i = this.textSpans[e].span, (n = this.textSpans[e].glyph) && n.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
                }
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var e = createNS("rect");
                e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
            }, NullElement.prototype.prepareFrame = function(e) {
                this.prepareProperties(e, !0)
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
                return new NullElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createShape = function(e) {
                return new SVGShapeElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createText = function(e) {
                return new SVGTextLottieElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createImage = function(e) {
                return new IImageElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createSolid = function(e) {
                return new ISolidElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.configAnimation = function(e) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var t = this.globalData.defs;
                this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
                var r = createNS("clipPath"),
                    i = createNS("rect");
                i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                var n = createElementID();
                r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
            }, SVGRendererBase.prototype.destroy = function() {
                var e;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
                var t = 0,
                    r = this.layers.length;
                for (t = 0; t < r; t += 1)
                    if (this.layers[t].ind === e) return t;
                return -1
            }, SVGRendererBase.prototype.buildItem = function(e) {
                var t = this.elements;
                if (!t[e] && this.layers[e].ty !== 99) {
                    t[e] = !0;
                    var r = this.createItem(this.layers[e]);
                    if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
                        var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (i === -1) return;
                        if (this.elements[i] && this.elements[i] !== !0) {
                            var n = t[i].getMatte(this.layers[e].tt);
                            r.setMatte(n)
                        } else this.buildItem(i), this.addPendingElement(r)
                    }
                }
            }, SVGRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var e = this.pendingElements.pop();
                    if (e.checkParenting(), e.data.tt)
                        for (var t = 0, r = this.elements.length; t < r;) {
                            if (this.elements[t] === e) {
                                var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    n = this.elements[i].getMatte(this.layers[t].tt);
                                e.setMatte(n);
                                break
                            }
                            t += 1
                        }
                }
            }, SVGRendererBase.prototype.renderFrame = function(e) {
                if (this.renderedFrame !== e && !this.destroyed) {
                    var t;
                    e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                    if (this.globalData._mdf)
                        for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }
            }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
                var r = e.getBaseElement();
                if (r) {
                    for (var i, n = 0; n < t;) this.elements[n] && this.elements[n] !== !0 && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
                    i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                }
            }, SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
            }, ICompElement.prototype.prepareFrame = function(e) {
                if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                    else {
                        var t = this.tm.v;
                        t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
                    }
                    var r, i = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }, ICompElement.prototype.setElements = function(e) {
                this.elements = e
            }, ICompElement.prototype.getElements = function() {
                return this.elements
            }, ICompElement.prototype.destroyElements = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
                return new SVGCompElement(e, this.globalData, this)
            }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
                return new SVGCompElement(e, this.globalData, this)
            }, ShapeTransformManager.prototype = {
                addTransformSequence: function(e) {
                    var t, r = e.length,
                        i = "_";
                    for (t = 0; t < r; t += 1) i += e[t].transform.key + "_";
                    var n = this.sequences[i];
                    return n || (n = {
                        transforms: [].concat(e),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[i] = n, this.sequenceList.push(n)), n
                },
                processSequence: function(e, t) {
                    for (var r = 0, i = e.transforms.length, n = t; r < i && !t;) {
                        if (e.transforms[r].transform.mProps._mdf) {
                            n = !0;
                            break
                        }
                        r += 1
                    }
                    if (n)
                        for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
                    e._mdf = n
                },
                processSequences: function(e) {
                    var t, r = this.sequenceList.length;
                    for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count
                }
            };
            var lumaLoader = function() {
                var e = "__lottie_element_luma_buffer",
                    t = null,
                    r = null,
                    i = null;

                function n() {
                    var a, o, s;
                    t || (a = createNS("svg"), o = createNS("filter"), s = createNS("feColorMatrix"), o.setAttribute("id", e), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(s), a.appendChild(o), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
                }
                return {
                    load: n,
                    get: function(a) {
                        return t || n(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
                    }
                }
            };

            function createCanvas(e, t) {
                if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
                var r = createTag("canvas");
                return r.width = e, r.height = t, r
            }
            var assetLoader = {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas
                },
                registeredEffects = {};

            function CVEffects(e) {
                var t, r, i = e.data.ef ? e.data.ef.length : 0;
                for (this.filters = [], t = 0; t < i; t += 1) {
                    r = null;
                    var n = e.data.ef[t].ty;
                    registeredEffects[n] && (r = new registeredEffects[n].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
                }
                this.filters.length && e.addRenderableComponent(this)
            }

            function registerEffect(e, t) {
                registeredEffects[e] = {
                    effect: t
                }
            }

            function CVMaskElement(e, t) {
                var r;
                this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var i = this.masksProperties.length,
                    n = !1;
                for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                this.hasMasks = n, n && this.element.addRenderableComponent(this)
            }

            function CVBaseElement() {}
            CVEffects.prototype.renderFrame = function(e) {
                var t, r = this.filters.length;
                for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
            }, CVEffects.prototype.getEffects = function(e) {
                var t, r = this.filters.length,
                    i = [];
                for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
                return i
            }, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var e, t, r, i, n = this.element.finalTransform.mat,
                        a = this.element.canvasContext,
                        o = this.masksProperties.length;
                    for (a.beginPath(), e = 0; e < o; e += 1)
                        if (this.masksProperties[e].mode !== "n") {
                            var s;
                            this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[e].v, t = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(t[0], t[1]);
                            var u = i._length;
                            for (s = 1; s < u; s += 1) r = n.applyToTriplePoints(i.o[s - 1], i.i[s], i.v[s]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            r = n.applyToTriplePoints(i.o[s - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                        } this.element.globalData.renderer.save(!0), a.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null
            };
            var operationsMap = {
                1: "source-in",
                2: "source-out",
                3: "source-in",
                4: "source-out"
            };

            function CVShapeData(e, t, r, i) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var n, a = 4;
                t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
                var o, s = r.length;
                for (n = 0; n < s; n += 1) r[n].closed || (o = {
                    transforms: i.addTransformSequence(r[n].transforms),
                    trNodes: []
                }, this.styledShapes.push(o), r[n].elements.push(o))
            }

            function CVShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
            }

            function CVTextElement(e, t, r) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(e, t, r)
            }

            function CVImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
            }

            function CVSolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function CanvasRendererBase() {}

            function CanvasContext() {
                this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
            }

            function CVContextData() {
                var e;
                for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
                    var t = new CanvasContext;
                    this.stack[e] = t
                }
                this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
            }

            function CVCompElement(e, t, r) {
                this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function CanvasRenderer(e, t) {
                this.animationItem = e, this.renderConfig = {
                    clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
                    context: t && t.context || null,
                    progressiveLoad: t && t.progressiveLoad || !1,
                    preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: t && t.contentVisibility || "visible",
                    className: t && t.className || "",
                    id: t && t.id || "",
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
            }

            function HBaseElement() {}

            function HSolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function HShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }

            function HTextElement(e, t, r) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
            }

            function HCameraElement(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
                var i = PropertyFactory.getProp;
                if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
                    var n, a = e.ks.or.k.length;
                    for (n = 0; n < a; n += 1) e.ks.or.k[n].to = null, e.ks.or.k[n].ti = null
                }
                this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                }
            }

            function HImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
            }

            function HybridRendererBase(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: t && t.className || "",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "400%",
                        height: t && t.filterSize && t.filterSize.height || "400%",
                        x: t && t.filterSize && t.filterSize.x || "-100%",
                        y: t && t.filterSize && t.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }

            function HCompElement(e, t, r) {
                this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function HybridRenderer(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: t && t.className || "",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "400%",
                        height: t && t.filterSize && t.filterSize.height || "400%",
                        x: t && t.filterSize && t.filterSize.x || "-100%",
                        y: t && t.filterSize && t.filterSize.y || "-100%"
                    },
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    if (this.data.tt >= 1) {
                        this.buffers = [];
                        var e = this.globalData.canvasContext,
                            t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                        this.buffers.push(t);
                        var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                        this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                    }
                    this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
                },
                createContent: function() {},
                setBlendMode: function() {
                    var e = this.globalData;
                    if (e.blendMode !== this.data.bm) {
                        e.blendMode = this.data.bm;
                        var t = getBlendMode(this.data.bm);
                        e.canvasContext.globalCompositeOperation = t
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                clearCanvas: function(e) {
                    e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                },
                prepareLayer: function() {
                    if (this.data.tt >= 1) {
                        var e = this.buffers[0].getContext("2d");
                        this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                    }
                },
                exitLayer: function() {
                    if (this.data.tt >= 1) {
                        var e = this.buffers[1],
                            t = e.getContext("2d");
                        if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                            var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                            r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                        }
                        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                    }
                },
                renderFrame: function(e) {
                    if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
                        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                        var t = this.data.ty === 0;
                        this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }, CVShapeElement.prototype.createStyleElement = function(e, t) {
                var r = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(t),
                        transforms: [],
                        elements: [],
                        closed: e.hd === !0
                    },
                    i = {};
                if (e.ty === "fl" || e.ty === "st" ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
                        k: 0
                    }, 0, .01, this), i.a = PropertyFactory.getProp(this, e.a || {
                        k: 0
                    }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
                    if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
                        var n = new DashProperty(this, e.d, "canvas", this);
                        i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                    }
                } else r.r = e.r === 2 ? "evenodd" : "nonzero";
                return this.stylesList.push(r), i.style = r, i
            }, CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            }, CVShapeElement.prototype.createTransformElement = function(e) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, e.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                    }
                }
            }, CVShapeElement.prototype.createShapeElement = function(e) {
                var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                return this.shapes.push(t), this.addShapeToModifiers(t), t
            }, CVShapeElement.prototype.reloadShapes = function() {
                var e;
                this._isFirstFrame = !0;
                var t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
                var t, r = this.stylesList.length;
                for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var e, t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
            }, CVShapeElement.prototype.closeStyles = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t].closed = !0
            }, CVShapeElement.prototype.searchShapes = function(e, t, r, i, n) {
                var a, o, s, u, d, h, f = e.length - 1,
                    m = [],
                    c = [],
                    p = [].concat(n);
                for (a = f; a >= 0; a -= 1) {
                    if ((u = this.searchProcessedElement(e[a])) ? t[a] = r[u - 1] : e[a]._shouldRender = i, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") u ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], p), m.push(t[a].style);
                    else if (e[a].ty === "gr") {
                        if (u)
                            for (s = t[a].it.length, o = 0; o < s; o += 1) t[a].prevViewData[o] = t[a].it[o];
                        else t[a] = this.createGroupElement(e[a]);
                        this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, p)
                    } else e[a].ty === "tr" ? (u || (h = this.createTransformElement(e[a]), t[a] = h), p.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? u || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (u ? (d = t[a]).closed = !1 : ((d = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = d, this.shapeModifiers.push(d)), c.push(d)) : e[a].ty === "rp" && (u ? (d = t[a]).closed = !0 : (d = ShapeModifiers.getModifier(e[a].ty), t[a] = d, d.init(this, e, a, t), this.shapeModifiers.push(d), i = !1), c.push(d));
                    this.addProcessedElement(e[a], a + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(m), f = c.length, a = 0; a < f; a += 1) c[a].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
                (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                var e, t, r, i, n, a, o, s, u, d = this.stylesList.length,
                    h = this.globalData.renderer,
                    f = this.globalData.canvasContext;
                for (e = 0; e < d; e += 1)
                    if (((s = (u = this.stylesList[e]).type) !== "st" && s !== "gs" || u.wi !== 0) && u.data._shouldRender && u.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
                        for (h.save(), a = u.elements, s === "st" || s === "gs" ? (h.ctxStrokeStyle(s === "st" ? u.co : u.grd), h.ctxLineWidth(u.wi), h.ctxLineCap(u.lc), h.ctxLineJoin(u.lj), h.ctxMiterLimit(u.ml || 0)) : h.ctxFillStyle(s === "fl" ? u.co : u.grd), h.ctxOpacity(u.coOp), s !== "st" && s !== "gs" && f.beginPath(), h.ctxTransform(u.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                            for (s !== "st" && s !== "gs" || (f.beginPath(), u.da && (f.setLineDash(u.da), f.lineDashOffset = u.do)), n = (o = a[t].trNodes).length, i = 0; i < n; i += 1) o[i].t === "m" ? f.moveTo(o[i].p[0], o[i].p[1]) : o[i].t === "c" ? f.bezierCurveTo(o[i].pts[0], o[i].pts[1], o[i].pts[2], o[i].pts[3], o[i].pts[4], o[i].pts[5]) : f.closePath();
                            s !== "st" && s !== "gs" || (h.ctxStroke(), u.da && f.setLineDash(this.dashResetter))
                        }
                        s !== "st" && s !== "gs" && this.globalData.renderer.ctxFill(u.r), h.restore()
                    }
            }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
                var n, a;
                for (a = e, n = t.length - 1; n >= 0; n -= 1) t[n].ty === "tr" ? (a = r[n].transform, this.renderShapeTransform(e, a)) : t[n].ty === "sh" || t[n].ty === "el" || t[n].ty === "rc" || t[n].ty === "sr" ? this.renderPath(t[n], r[n]) : t[n].ty === "fl" ? this.renderFill(t[n], r[n], a) : t[n].ty === "st" ? this.renderStroke(t[n], r[n], a) : t[n].ty === "gf" || t[n].ty === "gs" ? this.renderGradientFill(t[n], r[n], a) : t[n].ty === "gr" ? this.renderShape(a, t[n].it, r[n].it) : t[n].ty;
                i && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
                if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                    var r, i, n, a = e.trNodes,
                        o = t.paths,
                        s = o._length;
                    a.length = 0;
                    var u = e.transforms.finalTransform;
                    for (n = 0; n < s; n += 1) {
                        var d = o.shapes[n];
                        if (d && d.v) {
                            for (i = d._length, r = 1; r < i; r += 1) r === 1 && a.push({
                                t: "m",
                                p: u.applyToPointArray(d.v[0][0], d.v[0][1], 0)
                            }), a.push({
                                t: "c",
                                pts: u.applyToTriplePoints(d.o[r - 1], d.i[r], d.v[r])
                            });
                            i === 1 && a.push({
                                t: "m",
                                p: u.applyToPointArray(d.v[0][0], d.v[0][1], 0)
                            }), d.c && i && (a.push({
                                t: "c",
                                pts: u.applyToTriplePoints(d.o[r - 1], d.i[0], d.v[0])
                            }), a.push({
                                t: "z"
                            }))
                        }
                    }
                    e.trNodes = a
                }
            }, CVShapeElement.prototype.renderPath = function(e, t) {
                if (e.hd !== !0 && e._shouldRender) {
                    var r, i = t.styledShapes.length;
                    for (r = 0; r < i; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
                }
            }, CVShapeElement.prototype.renderFill = function(e, t, r) {
                var i = t.style;
                (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
                var i, n = t.style;
                if (!n.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
                    var a, o = this.globalData.canvasContext,
                        s = t.s.v,
                        u = t.e.v;
                    if (e.t === 1) i = o.createLinearGradient(s[0], s[1], u[0], u[1]);
                    else {
                        var d = Math.sqrt(Math.pow(s[0] - u[0], 2) + Math.pow(s[1] - u[1], 2)),
                            h = Math.atan2(u[1] - s[1], u[0] - s[0]),
                            f = t.h.v;
                        f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                        var m = d * f,
                            c = Math.cos(h + t.a.v) * m + s[0],
                            p = Math.sin(h + t.a.v) * m + s[1];
                        i = o.createRadialGradient(c, p, 0, s[0], s[1], d)
                    }
                    var v = e.g.p,
                        l = t.g.c,
                        y = 1;
                    for (a = 0; a < v; a += 1) t.g._hasOpacity && t.g._collapsable && (y = t.g.o[2 * a + 1]), i.addColorStop(l[4 * a] / 100, "rgba(" + l[4 * a + 1] + "," + l[4 * a + 2] + "," + l[4 * a + 3] + "," + y + ")");
                    n.grd = i
                }
                n.coOp = t.o.v * r.opacity
            }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
                var i = t.style,
                    n = t.d;
                n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v)
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = !1;
                e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
                var r = !1;
                e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
                var i, n, a, o, s, u, d, h, f, m, c, p, v = this.globalData.fontManager.getFontByName(e.f),
                    l = e.l,
                    y = this.mHelper;
                this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
                var g = this.data.singleShape,
                    b = .001 * e.tr * e.finalSize,
                    S = 0,
                    _ = 0,
                    I = !0,
                    w = 0;
                for (i = 0; i < n; i += 1) {
                    o = (a = this.globalData.fontManager.getCharData(e.finalText[i], v.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, y.reset(), g && l[i].n && (S = -b, _ += e.yOffset, _ += I ? 1 : 0, I = !1), f = (d = o.shapes ? o.shapes[0].it : []).length, y.scale(e.finalSize / 100, e.finalSize / 100), g && this.applyTextPropertiesToMatrix(e, y, l[i].line, S, _), c = createSizedArray(f - 1);
                    var C = 0;
                    for (h = 0; h < f; h += 1)
                        if (d[h].ty === "sh") {
                            for (u = d[h].ks.k.i.length, m = d[h].ks.k, p = [], s = 1; s < u; s += 1) s === 1 && p.push(y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), p.push(y.applyToX(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToY(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToX(m.i[s][0], m.i[s][1], 0), y.applyToY(m.i[s][0], m.i[s][1], 0), y.applyToX(m.v[s][0], m.v[s][1], 0), y.applyToY(m.v[s][0], m.v[s][1], 0));
                            p.push(y.applyToX(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToY(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToX(m.i[0][0], m.i[0][1], 0), y.applyToY(m.i[0][0], m.i[0][1], 0), y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), c[C] = p, C += 1
                        } g && (S += l[i].l, S += b), this.textSpans[w] ? this.textSpans[w].elem = c : this.textSpans[w] = {
                        elem: c
                    }, w += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var e, t, r, i, n, a;
                this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, s = this.textAnimator.renderedLetters,
                    u = this.textProperty.currentData.l;
                t = u.length;
                var d, h, f = null,
                    m = null,
                    c = null,
                    p = this.globalData.renderer;
                for (e = 0; e < t; e += 1)
                    if (!u[e].n) {
                        if ((o = s[e]) && (p.save(), p.ctxTransform(o.p), p.ctxOpacity(o.o)), this.fill) {
                            for (o && o.fc ? f !== o.fc && (p.ctxFillStyle(o.fc), f = o.fc) : f !== this.values.fill && (f = this.values.fill, p.ctxFillStyle(this.values.fill)), i = (d = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                for (a = (h = d[r]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(h[n], h[n + 1], h[n + 2], h[n + 3], h[n + 4], h[n + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxFill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? c !== o.sw && (c = o.sw, p.ctxLineWidth(o.sw)) : c !== this.values.sWidth && (c = this.values.sWidth, p.ctxLineWidth(this.values.sWidth)), o && o.sc ? m !== o.sc && (m = o.sc, p.ctxStrokeStyle(o.sc)) : m !== this.values.stroke && (m = this.values.stroke, p.ctxStrokeStyle(this.values.stroke)), i = (d = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                for (a = (h = d[r]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(h[n], h[n + 1], h[n + 2], h[n + 3], h[n + 4], h[n + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxStroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var e = createTag("canvas");
                    e.width = this.assetData.w, e.height = this.assetData.h;
                    var t, r, i = e.getContext("2d"),
                        n = this.img.width,
                        a = this.img.height,
                        o = n / a,
                        s = this.assetData.w / this.assetData.h,
                        u = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    o > s && u === "xMidYMid slice" || o < s && u !== "xMidYMid slice" ? t = (r = a) * s : r = (t = n) / s, i.drawImage(this.img, (n - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
                }
            }, CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            }, CVImageElement.prototype.destroy = function() {
                this.img = null
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
                return new CVShapeElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createText = function(e) {
                return new CVTextElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createImage = function(e) {
                return new CVImageElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createSolid = function(e) {
                return new CVSolidElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
                e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
            }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
                this.canvasContext.globalAlpha *= e < 0 ? 0 : e
            }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
                this.canvasContext.fillStyle = e
            }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
                this.canvasContext.strokeStyle = e
            }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
                this.canvasContext.lineWidth = e
            }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
                this.canvasContext.lineCap = e
            }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
                this.canvasContext.lineJoin = e
            }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
                this.canvasContext.miterLimit = e
            }, CanvasRendererBase.prototype.ctxFill = function(e) {
                this.canvasContext.fill(e)
            }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, i) {
                this.canvasContext.fillRect(e, t, r, i)
            }, CanvasRendererBase.prototype.ctxStroke = function() {
                this.canvasContext.stroke()
            }, CanvasRendererBase.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }, CanvasRendererBase.prototype.save = function() {
                this.canvasContext.save()
            }, CanvasRendererBase.prototype.restore = function(e) {
                this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
            }, CanvasRendererBase.prototype.configAnimation = function(e) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var t = this.animationItem.container.style;
                    t.width = "100%", t.height = "100%";
                    var r = "0px 0px 0px";
                    t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else this.canvasContext = this.renderConfig.context;
                this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
                    w: e.w,
                    h: e.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
            }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
                var r, i, n, a;
                if (this.reset(), e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                    var o = this.renderConfig.preserveAspectRatio.split(" "),
                        s = o[1] || "meet",
                        u = o[0] || "xMidYMid",
                        d = u.substr(0, 4),
                        h = u.substr(4);
                    n = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > n && s === "meet" || a < n && s === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = d === "xMid" && (a < n && s === "meet" || a > n && s === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : d === "xMax" && (a < n && s === "meet" || a > n && s === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = h === "YMid" && (a > n && s === "meet" || a < n && s === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : h === "YMax" && (a > n && s === "meet" || a < n && s === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRendererBase.prototype.destroy = function() {
                var e;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
                if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
                    var r;
                    this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
                    if (this.globalData._mdf) {
                        for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                        this.renderConfig.clearCanvas !== !0 && this.restore()
                    }
                }
            }, CanvasRendererBase.prototype.buildItem = function(e) {
                var t = this.elements;
                if (!t[e] && this.layers[e].ty !== 99) {
                    var r = this.createItem(this.layers[e], this, this.globalData);
                    t[e] = r, r.initExpressions()
                }
            }, CanvasRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, CanvasRendererBase.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }, CanvasRendererBase.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }, CVContextData.prototype.duplicate = function() {
                var e = 2 * this._length,
                    t = 0;
                for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
                this._length = e
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
            }, CVContextData.prototype.restore = function(e) {
                this.cArrPos -= 1;
                var t, r = this.stack[this.cArrPos],
                    i = r.transform,
                    n = this.cTr.props;
                for (t = 0; t < 16; t += 1) n[t] = i[t];
                if (e) {
                    this.nativeContext.restore();
                    var a = this.stack[this.cArrPos + 1];
                    this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
                }
                this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
            }, CVContextData.prototype.save = function(e) {
                e && this.nativeContext.save();
                var t = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var r, i = this.stack[this.cArrPos];
                for (r = 0; r < 16; r += 1) i.transform[r] = t[r];
                this.cArrPos += 1;
                var n = this.stack[this.cArrPos];
                n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit
            }, CVContextData.prototype.setOpacity = function(e) {
                this.stack[this.cArrPos].opacity = e
            }, CVContextData.prototype.setContext = function(e) {
                this.nativeContext = e
            }, CVContextData.prototype.fillStyle = function(e) {
                this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
            }, CVContextData.prototype.strokeStyle = function(e) {
                this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
            }, CVContextData.prototype.lineWidth = function(e) {
                this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
            }, CVContextData.prototype.lineCap = function(e) {
                this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
            }, CVContextData.prototype.lineJoin = function(e) {
                this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
            }, CVContextData.prototype.miterLimit = function(e) {
                this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
            }, CVContextData.prototype.transform = function(e) {
                this.transformMat.cloneFromProps(e);
                var t = this.cTr;
                this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
                var r = t.props;
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
            }, CVContextData.prototype.opacity = function(e) {
                var t = this.stack[this.cArrPos].opacity;
                t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
            }, CVContextData.prototype.fill = function(e) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
            }, CVContextData.prototype.fillRect = function(e, t, r, i) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i)
            }, CVContextData.prototype.stroke = function() {
                this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
            }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var e, t = this.canvasContext;
                for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                var e;
                for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                this.layers = null, this.elements = null
            }, CVCompElement.prototype.createComp = function(e) {
                return new CVCompElement(e, this.globalData, this)
            }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
                return new CVCompElement(e, this.globalData, this)
            }, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    var e = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var t = this.finalTransform.mat.toCSS();
                        e.transform = t, e.webkitTransform = t
                    }
                    this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var e;
                this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var e;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
                else {
                    e = createNS("svg");
                    var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                    e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
            }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
                var r, i = e.length;
                for (r = 0; r < i; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
                return t
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
                var r, i, n, a, o, s = e.sh.v,
                    u = e.transformers,
                    d = s._length;
                if (!(d <= 1)) {
                    for (r = 0; r < d - 1; r += 1) i = this.getTransformedPoint(u, s.v[r]), n = this.getTransformedPoint(u, s.o[r]), a = this.getTransformedPoint(u, s.i[r + 1]), o = this.getTransformedPoint(u, s.v[r + 1]), this.checkBounds(i, n, a, o, t);
                    s.c && (i = this.getTransformedPoint(u, s.v[r]), n = this.getTransformedPoint(u, s.o[r]), a = this.getTransformedPoint(u, s.i[0]), o = this.getTransformedPoint(u, s.v[0]), this.checkBounds(i, n, a, o, t))
                }
            }, HShapeElement.prototype.checkBounds = function(e, t, r, i, n) {
                this.getBoundsOfCurve(e, t, r, i);
                var a = this.shapeBoundingBox;
                n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, i) {
                for (var n, a, o, s, u, d, h, f = [
                        [e[0], i[0]],
                        [e[1], i[1]]
                    ], m = 0; m < 2; ++m) a = 6 * e[m] - 12 * t[m] + 6 * r[m], n = -3 * e[m] + 9 * t[m] - 9 * r[m] + 3 * i[m], o = 3 * t[m] - 3 * e[m], a |= 0, o |= 0, (n |= 0) === 0 && a === 0 || (n === 0 ? (s = -o / a) > 0 && s < 1 && f[m].push(this.calculateF(s, e, t, r, i, m)) : (u = a * a - 4 * o * n) >= 0 && ((d = (-a + bmSqrt(u)) / (2 * n)) > 0 && d < 1 && f[m].push(this.calculateF(d, e, t, r, i, m)), (h = (-a - bmSqrt(u)) / (2 * n)) > 0 && h < 1 && f[m].push(this.calculateF(h, e, t, r, i, m))));
                this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
            }, HShapeElement.prototype.calculateF = function(e, t, r, i, n, a) {
                return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * n[a]
            }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
                var r, i = e.length;
                for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
            }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
                var r = 0;
                if (e.keyframes) {
                    for (var i = 0; i < e.keyframes.length; i += 1) {
                        var n = e.keyframes[i].s;
                        n > r && (r = n)
                    }
                    r *= e.mult
                } else r = e.v * e.mult;
                t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
            }, HShapeElement.prototype.currentBoxContains = function(e) {
                return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var e = this.tempBoundingBox,
                        t = 999999;
                    if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
                    var r = !1;
                    if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
                        this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var i = this.shapeCont.style,
                            n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        i.transform = n, i.webkitTransform = n
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var e = createNS("g");
                    this.maskedElement.appendChild(e), this.innerElem = e
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = this.innerElem.style,
                    r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
                t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
                var i, n, a = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars)
                    if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                    else {
                        t.fontFamily = a.fFamily;
                        var o = e.fWeight,
                            s = e.fStyle;
                        t.fontStyle = s, t.fontWeight = o
                    } var u, d, h, f = e.l;
                n = f.length;
                var m, c = this.mHelper,
                    p = "",
                    v = 0;
                for (i = 0; i < n; i += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[v] ? u = this.textPaths[v] : ((u = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), u.setAttribute("stroke-linejoin", lineJoinEnum[2]), u.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[v] ? h = (d = this.textSpans[v]).children[0] : ((d = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(u), styleDiv(d)))) : this.isMasked ? u = this.textPaths[v] ? this.textPaths[v] : createNS("text") : this.textSpans[v] ? (d = this.textSpans[v], u = this.textPaths[v]) : (styleDiv(d = createTag("span")), styleDiv(u = createTag("span")), d.appendChild(u)), this.globalData.fontManager.chars) {
                        var l, y = this.globalData.fontManager.getCharData(e.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                        if (l = y ? y.data : null, c.reset(), l && l.shapes && l.shapes.length && (m = l.shapes[0].it, c.scale(e.finalSize / 100, e.finalSize / 100), p = this.createPathShape(c, m), u.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(u);
                        else {
                            if (this.innerElem.appendChild(d), l && l.shapes) {
                                document.body.appendChild(h);
                                var g = h.getBBox();
                                h.setAttribute("width", g.width + 2), h.setAttribute("height", g.height + 2), h.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2));
                                var b = h.style,
                                    S = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)";
                                b.transform = S, b.webkitTransform = S, f[i].yOffset = g.y - 1
                            } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                            d.appendChild(h)
                        }
                    } else if (u.textContent = f[i].val, u.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(u);
                    else {
                        this.innerElem.appendChild(d);
                        var _ = u.style,
                            I = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
                        _.transform = I, _.webkitTransform = I
                    }
                    this.isMasked ? this.textSpans[v] = u : this.textSpans[v] = d, this.textSpans[v].style.display = "block", this.textPaths[v] = u, v += 1
                }
                for (; v < this.textSpans.length;) this.textSpans[v].style.display = "none", v += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                var e;
                if (this.validateText(), this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
                        var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        e.transform = t, e.webkitTransform = t
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var r, i, n, a, o, s = 0,
                        u = this.textAnimator.renderedLetters,
                        d = this.textProperty.currentData.l;
                    for (i = d.length, r = 0; r < i; r += 1) d[r].n ? s += 1 : (a = this.textSpans[r], o = this.textPaths[r], n = u[s], s += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && o.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && o.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (o.setAttribute("fill", n.fc), o.style.color = n.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var h = this.innerElem.getBBox();
                        if (this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height)), this.currentBBox.w !== h.width + 2 || this.currentBBox.h !== h.height + 2 || this.currentBBox.x !== h.x - 1 || this.currentBBox.y !== h.y - 1) {
                            this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                            var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            e.transform = f, e.webkitTransform = f
                        }
                    }
                }
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                var e, t, r, i, n = this.comp.threeDElements.length;
                for (e = 0; e < n; e += 1)
                    if ((t = this.comp.threeDElements[e]).type === "3d") {
                        r = t.perspectiveElem.style, i = t.container.style;
                        var a = this.pe.v + "px",
                            o = "0px 0px 0px",
                            s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.perspective = a, r.webkitPerspective = a, i.transformOrigin = o, i.mozTransformOrigin = o, i.webkitTransformOrigin = o, r.transform = s, r.webkitTransform = s
                    }
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var e, t, r = this._isFirstFrame;
                if (this.hierarchy)
                    for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
                if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                            var i = this.hierarchy[e].finalTransform.mProp;
                            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var n;
                        n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                            o = [n[0] / a, n[1] / a, n[2] / a],
                            s = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                            u = Math.atan2(o[1], s),
                            d = Math.atan2(o[0], -o[2]);
                        this.mat.rotateY(d).rotateX(-u)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var h = !this._prevMat.equals(this.mat);
                    if ((h || this.pe._mdf) && this.comp.threeDElements) {
                        var f, m, c;
                        for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
                            if ((f = this.comp.threeDElements[e]).type === "3d") {
                                if (h) {
                                    var p = this.mat.toCSS();
                                    (c = f.container.style).transform = p, c.webkitTransform = p
                                }
                                this.pe._mdf && ((m = f.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px")
                            } this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(e) {
                this.prepareProperties(e, !0)
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var e = this.globalData.getAssetsPath(this.assetData),
                    t = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
                var r = e.getBaseElement();
                if (r) {
                    var i = this.layers[t];
                    if (i.ddd && this.supports3d) this.addTo3dContainer(r, t);
                    else if (this.threeDElements) this.addTo3dContainer(r, t);
                    else {
                        for (var n, a, o = 0; o < t;) this.elements[o] && this.elements[o] !== !0 && this.elements[o].getBaseElement && (a = this.elements[o], n = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement()) || n), o += 1;
                        n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                    }
                }
            }, HybridRendererBase.prototype.createShape = function(e) {
                return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createText = function(e) {
                return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createCamera = function(e) {
                return this.camera = new HCameraElement(e, this.globalData, this), this.camera
            }, HybridRendererBase.prototype.createImage = function(e) {
                return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createSolid = function(e) {
                return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
                for (var t = 0, r = this.threeDElements.length; t < r;) {
                    if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
                    t += 1
                }
                return null
            }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
                var r, i, n = createTag("div");
                styleDiv(n);
                var a = createTag("div");
                if (styleDiv(a), t === "3d") {
                    (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                    var o = "50% 50%";
                    r.webkitTransformOrigin = o, r.mozTransformOrigin = o, r.transformOrigin = o;
                    var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (i = a.style).transform = s, i.webkitTransform = s
                }
                n.appendChild(a);
                var u = {
                    container: a,
                    perspectiveElem: n,
                    startPos: e,
                    endPos: e,
                    type: t
                };
                return this.threeDElements.push(u), u
            }, HybridRendererBase.prototype.build3dContainers = function() {
                var e, t, r = this.layers.length,
                    i = "";
                for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (i !== "3d" && (i = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (i !== "2d" && (i = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
                for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
            }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
                for (var r = 0, i = this.threeDElements.length; r < i;) {
                    if (t <= this.threeDElements[r].endPos) {
                        for (var n, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
                        n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
                        break
                    }
                    r += 1
                }
            }, HybridRendererBase.prototype.configAnimation = function(e) {
                var t = createTag("div"),
                    r = this.animationItem.wrapper,
                    i = t.style;
                i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
                var n = createNS("svg");
                n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
                var a = createNS("defs");
                n.appendChild(a), this.data = e, this.setupGlobalData(e, n), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRendererBase.prototype.destroy = function() {
                var e;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                var t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRendererBase.prototype.updateContainerSize = function() {
                var e, t, r, i, n = this.animationItem.wrapper.offsetWidth,
                    a = this.animationItem.wrapper.offsetHeight,
                    o = n / a;
                this.globalData.compSize.w / this.globalData.compSize.h > o ? (e = n / this.globalData.compSize.w, t = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
                var s = this.resizerElem.style;
                s.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", s.transform = s.webkitTransform
            }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }, HybridRendererBase.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }, HybridRendererBase.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var e, t = this.globalData.compSize.w,
                        r = this.globalData.compSize.h,
                        i = this.threeDElements.length;
                    for (e = 0; e < i; e += 1) {
                        var n = this.threeDElements[e].perspectiveElem.style;
                        n.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
                    }
                }
            }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
                var t, r = e.length,
                    i = createTag("div");
                for (t = 0; t < r; t += 1)
                    if (e[t].xt) {
                        var n = this.createComp(e[t], i, this.globalData.comp, null);
                        n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                    }
            }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }, HCompElement.prototype.addTo3dContainer = function(e, t) {
                for (var r, i = 0; i < t;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
            }, HCompElement.prototype.createComp = function(e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
            }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
            };
            var CompExpressionInterface = function(e) {
                function t(r) {
                    for (var i = 0, n = e.layers.length; i < n;) {
                        if (e.layers[i].nm === r || e.layers[i].ind === r) return e.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(t, "_name", {
                    value: e.data.nm
                }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
            };

            function _typeof$2(e) {
                return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$2(e)
            }

            function seedRandom(e, t) {
                var r, i = this,
                    n = 256,
                    a = t.pow(n, 6),
                    o = t.pow(2, 52),
                    s = 2 * o,
                    u = 255;

                function d(p) {
                    var v, l = p.length,
                        y = this,
                        g = 0,
                        b = y.i = y.j = 0,
                        S = y.S = [];
                    for (l || (p = [l++]); g < n;) S[g] = g++;
                    for (g = 0; g < n; g++) S[g] = S[b = u & b + p[g % l] + (v = S[g])], S[b] = v;
                    y.g = function(_) {
                        for (var I, w = 0, C = y.i, F = y.j, M = y.S; _--;) I = M[C = u & C + 1], w = w * n + M[u & (M[C] = M[F = u & F + I]) + (M[F] = I)];
                        return y.i = C, y.j = F, w
                    }
                }

                function h(p, v) {
                    return v.i = p.i, v.j = p.j, v.S = p.S.slice(), v
                }

                function f(p, v) {
                    var l, y = [],
                        g = _typeof$2(p);
                    if (v && g == "object")
                        for (l in p) try {
                            y.push(f(p[l], v - 1))
                        } catch {}
                    return y.length ? y : g == "string" ? p : p + "\0"
                }

                function m(p, v) {
                    for (var l, y = p + "", g = 0; g < y.length;) v[u & g] = u & (l ^= 19 * v[u & g]) + y.charCodeAt(g++);
                    return c(v)
                }

                function c(p) {
                    return String.fromCharCode.apply(0, p)
                }
                t.seedrandom = function(p, v, l) {
                    var y = [],
                        g = m(f((v = v === !0 ? {
                            entropy: !0
                        } : v || {}).entropy ? [p, c(e)] : p === null ? function() {
                            try {
                                var _ = new Uint8Array(n);
                                return (i.crypto || i.msCrypto).getRandomValues(_), c(_)
                            } catch {
                                var I = i.navigator,
                                    w = I && I.plugins;
                                return [+new Date, i, w, i.screen, c(e)]
                            }
                        }() : p, 3), y),
                        b = new d(y),
                        S = function() {
                            for (var _ = b.g(6), I = a, w = 0; _ < o;) _ = (_ + w) * n, I *= n, w = b.g(1);
                            for (; _ >= s;) _ /= 2, I /= 2, w >>>= 1;
                            return (_ + w) / I
                        };
                    return S.int32 = function() {
                        return 0 | b.g(4)
                    }, S.quick = function() {
                        return b.g(4) / 4294967296
                    }, S.double = S, m(c(b.S), e), (v.pass || l || function(_, I, w, C) {
                        return C && (C.S && h(C, b), _.state = function() {
                            return h(b, {})
                        }), w ? (t.random = _, I) : _
                    })(S, g, "global" in v ? v.global : this == t, v.state)
                }, m(t.random(), e)
            }

            function initialize$2(e) {
                seedRandom([], e)
            }
            var propTypes = {
                SHAPE: "shape"
            };

            function _typeof$1(e) {
                return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$1(e)
            }
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null,
                        XMLHttpRequest = null,
                        fetch = null,
                        frames = null,
                        _lottieGlobal = {};

                    function resetFrame() {
                        _lottieGlobal = {}
                    }

                    function $bm_isInstanceOfArray(e) {
                        return e.constructor === Array || e.constructor === Float32Array
                    }

                    function isNumerable(e, t) {
                        return e === "number" || t instanceof Number || e === "boolean" || e === "string"
                    }

                    function $bm_neg(e) {
                        var t = _typeof$1(e);
                        if (t === "number" || e instanceof Number || t === "boolean") return -e;
                        if ($bm_isInstanceOfArray(e)) {
                            var r, i = e.length,
                                n = [];
                            for (r = 0; r < i; r += 1) n[r] = -e[r];
                            return n
                        }
                        return e.propType ? e.v : -e
                    }
                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(e, t) {
                        var r = _typeof$1(e),
                            i = _typeof$1(t);
                        if (isNumerable(r, e) && isNumerable(i, t) || r === "string" || i === "string") return e + t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] += t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var n = 0, a = e.length, o = t.length, s = []; n < a || n < o;)(typeof e[n] == "number" || e[n] instanceof Number) && (typeof t[n] == "number" || t[n] instanceof Number) ? s[n] = e[n] + t[n] : s[n] = t[n] === void 0 ? e[n] : e[n] || t[n], n += 1;
                            return s
                        }
                        return 0
                    }
                    var add = sum;

                    function sub(e, t) {
                        var r = _typeof$1(e),
                            i = _typeof$1(t);
                        if (isNumerable(r, e) && isNumerable(i, t)) return r === "string" && (e = parseInt(e, 10)), i === "string" && (t = parseInt(t, 10)), e - t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] -= t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var n = 0, a = e.length, o = t.length, s = []; n < a || n < o;)(typeof e[n] == "number" || e[n] instanceof Number) && (typeof t[n] == "number" || t[n] instanceof Number) ? s[n] = e[n] - t[n] : s[n] = t[n] === void 0 ? e[n] : e[n] || t[n], n += 1;
                            return s
                        }
                        return 0
                    }

                    function mul(e, t) {
                        var r, i, n, a = _typeof$1(e),
                            o = _typeof$1(t);
                        if (isNumerable(a, e) && isNumerable(o, t)) return e * t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
                            for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] * t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e * t[i];
                            return r
                        }
                        return 0
                    }

                    function div(e, t) {
                        var r, i, n, a = _typeof$1(e),
                            o = _typeof$1(t);
                        if (isNumerable(a, e) && isNumerable(o, t)) return e / t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
                            for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] / t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e / t[i];
                            return r
                        }
                        return 0
                    }

                    function mod(e, t) {
                        return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(e, t, r) {
                        if (t > r) {
                            var i = r;
                            r = t, t = i
                        }
                        return Math.min(Math.max(e, t), r)
                    }

                    function radiansToDegrees(e) {
                        return e / degToRads
                    }
                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(e) {
                        return e * degToRads
                    }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(e, t) {
                        if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
                        var r;
                        t || (t = helperLengthArray);
                        var i = Math.min(e.length, t.length),
                            n = 0;
                        for (r = 0; r < i; r += 1) n += Math.pow(t[r] - e[r], 2);
                        return Math.sqrt(n)
                    }

                    function normalize(e) {
                        return div(e, length(e))
                    }

                    function rgbToHsl(e) {
                        var t, r, i = e[0],
                            n = e[1],
                            a = e[2],
                            o = Math.max(i, n, a),
                            s = Math.min(i, n, a),
                            u = (o + s) / 2;
                        if (o === s) t = 0, r = 0;
                        else {
                            var d = o - s;
                            switch (r = u > .5 ? d / (2 - o - s) : d / (o + s), o) {
                                case i:
                                    t = (n - a) / d + (n < a ? 6 : 0);
                                    break;
                                case n:
                                    t = (a - i) / d + 2;
                                    break;
                                case a:
                                    t = (i - n) / d + 4
                            }
                            t /= 6
                        }
                        return [t, r, u, e[3]]
                    }

                    function hue2rgb(e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                    }

                    function hslToRgb(e) {
                        var t, r, i, n = e[0],
                            a = e[1],
                            o = e[2];
                        if (a === 0) t = o, i = o, r = o;
                        else {
                            var s = o < .5 ? o * (1 + a) : o + a - o * a,
                                u = 2 * o - s;
                            t = hue2rgb(u, s, n + 1 / 3), r = hue2rgb(u, s, n), i = hue2rgb(u, s, n - 1 / 3)
                        }
                        return [t, r, i, e[3]]
                    }

                    function linear(e, t, r, i, n) {
                        if (i !== void 0 && n !== void 0 || (i = t, n = r, t = 0, r = 1), r < t) {
                            var a = r;
                            r = t, t = a
                        }
                        if (e <= t) return i;
                        if (e >= r) return n;
                        var o, s = r === t ? 0 : (e - t) / (r - t);
                        if (!i.length) return i + (n - i) * s;
                        var u = i.length,
                            d = createTypedArray("float32", u);
                        for (o = 0; o < u; o += 1) d[o] = i[o] + (n[o] - i[o]) * s;
                        return d
                    }

                    function random(e, t) {
                        if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                            var r, i = t.length;
                            e || (e = createTypedArray("float32", i));
                            var n = createTypedArray("float32", i),
                                a = BMMath.random();
                            for (r = 0; r < i; r += 1) n[r] = e[r] + a * (t[r] - e[r]);
                            return n
                        }
                        return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
                    }

                    function createPath(e, t, r, i) {
                        var n, a = e.length,
                            o = shapePool.newElement();
                        o.setPathData(!!i, a);
                        var s, u, d = [0, 0];
                        for (n = 0; n < a; n += 1) s = t && t[n] ? t[n] : d, u = r && r[n] ? r[n] : d, o.setTripleAt(e[n][0], e[n][1], u[0] + e[n][0], u[1] + e[n][1], s[0] + e[n][0], s[1] + e[n][1], n, !0);
                        return o
                    }

                    function initiateExpression(elem, data, property) {
                        function noOp(e) {
                            return e
                        }
                        if (!elem.globalData.renderConfig.runExpressions) return noOp;
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = val.indexOf("random") !== -1,
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || this.data.hd !== !0,
                            wiggle = function(e, t) {
                                var r, i, n = this.pv.length ? this.pv.length : 1,
                                    a = createTypedArray("float32", n),
                                    o = Math.floor(5 * time);
                                for (r = 0, i = 0; r < o;) {
                                    for (i = 0; i < n; i += 1) a[i] += -t + 2 * t * BMMath.random();
                                    r += 1
                                }
                                var s = 5 * time,
                                    u = s - Math.floor(s),
                                    d = createTypedArray("float32", n);
                                if (n > 1) {
                                    for (i = 0; i < n; i += 1) d[i] = this.pv[i] + a[i] + (-t + 2 * t * BMMath.random()) * u;
                                    return d
                                }
                                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * u
                            }.bind(this);

                        function loopInDuration(e, t) {
                            return loopIn(e, t, !0)
                        }

                        function loopOutDuration(e, t) {
                            return loopOut(e, t, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(e, t) {
                            var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                                i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                            return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                        }

                        function easeOut(e, t, r, i, n) {
                            return applyEase(easeOutBez, e, t, r, i, n)
                        }

                        function easeIn(e, t, r, i, n) {
                            return applyEase(easeInBez, e, t, r, i, n)
                        }

                        function ease(e, t, r, i, n) {
                            return applyEase(easeInOutBez, e, t, r, i, n)
                        }

                        function applyEase(e, t, r, i, n, a) {
                            n === void 0 ? (n = r, a = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                            var o = e(t);
                            if ($bm_isInstanceOfArray(n)) {
                                var s, u = n.length,
                                    d = createTypedArray("float32", u);
                                for (s = 0; s < u; s += 1) d[s] = (a[s] - n[s]) * o + n[s];
                                return d
                            }
                            return (a - n) * o + n
                        }

                        function nearestKey(e) {
                            var t, r, i, n = data.k.length;
                            if (data.k.length && typeof data.k[0] != "number")
                                if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                                else {
                                    for (t = 0; t < n - 1; t += 1) {
                                        if (e === data.k[t].t) {
                                            r = t + 1, i = data.k[t].t;
                                            break
                                        }
                                        if (e > data.k[t].t && e < data.k[t + 1].t) {
                                            e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, i = data.k[t + 1].t) : (r = t + 1, i = data.k[t].t);
                                            break
                                        }
                                    }
                                    r === -1 && (r = t + 1, i = data.k[t].t)
                                }
                            else r = 0, i = 0;
                            var a = {};
                            return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
                        }

                        function key(e) {
                            var t, r, i;
                            if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
                            e -= 1, t = {
                                time: data.k[e].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var n = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                            for (i = n.length, r = 0; r < i; r += 1) t[r] = n[r], t.value[r] = n[r];
                            return t
                        }

                        function framesToTime(e, t) {
                            return t || (t = elem.comp.globalData.frameRate), e / t
                        }

                        function timeToFrames(e, t) {
                            return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
                        }

                        function seedRandom(e) {
                            BMMath.seedrandom(randSeed + e)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(e, t) {
                            return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
                        }

                        function substr(e, t) {
                            return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
                        }

                        function posterizeTime(e) {
                            time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
                        }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(e) {
                            return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                        }
                        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                }(),
                Expressions = function() {
                    var e = {};
                    return e.initExpressions = function(t) {
                        var r = 0,
                            i = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            r += 1
                        }, t.renderer.globalData.popExpression = function() {
                            (r -= 1) == 0 && function() {
                                var n, a = i.length;
                                for (n = 0; n < a; n += 1) i[n].release();
                                i.length = 0
                            }()
                        }, t.renderer.globalData.registerExpressionProperty = function(n) {
                            i.indexOf(n) === -1 && i.push(n)
                        }
                    }, e.resetFrame = ExpressionManager.resetFrame, e
                }(),
                MaskManagerInterface = function() {
                    function e(t, r) {
                        this._mask = t, this._data = r
                    }
                    return Object.defineProperty(e.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                            }
                        }), Object.defineProperty(e.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                            }
                        }),
                        function(t) {
                            var r, i = createSizedArray(t.viewData.length),
                                n = t.viewData.length;
                            for (r = 0; r < n; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]);
                            return function(a) {
                                for (r = 0; r < n;) {
                                    if (t.masksProperties[r].nm === a) return i[r];
                                    r += 1
                                }
                                return null
                            }
                        }
                }(),
                ExpressionPropertyInterface = function() {
                    var e = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        t = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };

                    function r(n, a, o) {
                        Object.defineProperty(n, "velocity", {
                            get: function() {
                                return a.getVelocityAtTime(a.comp.currentFrame)
                            }
                        }), n.numKeys = a.keyframes ? a.keyframes.length : 0, n.key = function(s) {
                            if (!n.numKeys) return 0;
                            var u = "";
                            u = "s" in a.keyframes[s - 1] ? a.keyframes[s - 1].s : "e" in a.keyframes[s - 2] ? a.keyframes[s - 2].e : a.keyframes[s - 2].s;
                            var d = o === "unidimensional" ? new Number(u) : Object.assign({}, u);
                            return d.time = a.keyframes[s - 1].t / a.elem.comp.globalData.frameRate, d.value = o === "unidimensional" ? u[0] : u, d
                        }, n.valueAtTime = a.getValueAtTime, n.speedAtTime = a.getSpeedAtTime, n.velocityAtTime = a.getVelocityAtTime, n.propertyGroup = a.propertyGroup
                    }

                    function i() {
                        return e
                    }
                    return function(n) {
                        return n ? n.propType === "unidimensional" ? function(a) {
                            a && "pv" in a || (a = e);
                            var o = 1 / a.mult,
                                s = a.pv * o,
                                u = new Number(s);
                            return u.value = s, r(u, a, "unidimensional"),
                                function() {
                                    return a.k && a.getValue(), s = a.v * o, u.value !== s && ((u = new Number(s)).value = s, r(u, a, "unidimensional")), u
                                }
                        }(n) : function(a) {
                            a && "pv" in a || (a = t);
                            var o = 1 / a.mult,
                                s = a.data && a.data.l || a.pv.length,
                                u = createTypedArray("float32", s),
                                d = createTypedArray("float32", s);
                            return u.value = d, r(u, a, "multidimensional"),
                                function() {
                                    a.k && a.getValue();
                                    for (var h = 0; h < s; h += 1) d[h] = a.v[h] * o, u[h] = d[h];
                                    return u
                                }
                        }(n) : i
                    }
                }(),
                TransformExpressionInterface = function(e) {
                    function t(o) {
                        switch (o) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return t.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return t.rotation;
                            case "ADBE Rotate X":
                                return t.xRotation;
                            case "ADBE Rotate Y":
                                return t.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return t.position;
                            case "ADBE Position_0":
                                return t.xPosition;
                            case "ADBE Position_1":
                                return t.yPosition;
                            case "ADBE Position_2":
                                return t.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return t.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return t.opacity;
                            default:
                                return null
                        }
                    }
                    var r, i, n, a;
                    return Object.defineProperty(t, "rotation", {
                        get: ExpressionPropertyInterface(e.r || e.rz)
                    }), Object.defineProperty(t, "zRotation", {
                        get: ExpressionPropertyInterface(e.rz || e.r)
                    }), Object.defineProperty(t, "xRotation", {
                        get: ExpressionPropertyInterface(e.rx)
                    }), Object.defineProperty(t, "yRotation", {
                        get: ExpressionPropertyInterface(e.ry)
                    }), Object.defineProperty(t, "scale", {
                        get: ExpressionPropertyInterface(e.s)
                    }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (n = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
                        get: function() {
                            return e.p ? a() : [r(), i(), n ? n() : 0]
                        }
                    }), Object.defineProperty(t, "xPosition", {
                        get: ExpressionPropertyInterface(e.px)
                    }), Object.defineProperty(t, "yPosition", {
                        get: ExpressionPropertyInterface(e.py)
                    }), Object.defineProperty(t, "zPosition", {
                        get: ExpressionPropertyInterface(e.pz)
                    }), Object.defineProperty(t, "anchorPoint", {
                        get: ExpressionPropertyInterface(e.a)
                    }), Object.defineProperty(t, "opacity", {
                        get: ExpressionPropertyInterface(e.o)
                    }), Object.defineProperty(t, "skew", {
                        get: ExpressionPropertyInterface(e.sk)
                    }), Object.defineProperty(t, "skewAxis", {
                        get: ExpressionPropertyInterface(e.sa)
                    }), Object.defineProperty(t, "orientation", {
                        get: ExpressionPropertyInterface(e.or)
                    }), t
                },
                LayerExpressionInterface = function() {
                    function e(d) {
                        var h = new Matrix;
                        return d !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(d).clone(h) : this._elem.finalTransform.mProp.applyToMatrix(h), h
                    }

                    function t(d, h) {
                        var f = this.getMatrix(h);
                        return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.applyPoint(f, d)
                    }

                    function r(d, h) {
                        var f = this.getMatrix(h);
                        return this.applyPoint(f, d)
                    }

                    function i(d, h) {
                        var f = this.getMatrix(h);
                        return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.invertPoint(f, d)
                    }

                    function n(d, h) {
                        var f = this.getMatrix(h);
                        return this.invertPoint(f, d)
                    }

                    function a(d, h) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, m = this._elem.hierarchy.length;
                            for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(d)
                        }
                        return d.applyToPointArray(h[0], h[1], h[2] || 0)
                    }

                    function o(d, h) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, m = this._elem.hierarchy.length;
                            for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(d)
                        }
                        return d.inversePoint(h)
                    }

                    function s(d) {
                        var h = new Matrix;
                        if (h.reset(), this._elem.finalTransform.mProp.applyToMatrix(h), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, m = this._elem.hierarchy.length;
                            for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(h);
                            return h.inversePoint(d)
                        }
                        return h.inversePoint(d)
                    }

                    function u() {
                        return [1, 1, 1, 1]
                    }
                    return function(d) {
                        var h;

                        function f(c) {
                            switch (c) {
                                case "ADBE Root Vectors Group":
                                case "Contents":
                                case 2:
                                    return f.shapeInterface;
                                case 1:
                                case 6:
                                case "Transform":
                                case "transform":
                                case "ADBE Transform Group":
                                    return h;
                                case 4:
                                case "ADBE Effect Parade":
                                case "effects":
                                case "Effects":
                                    return f.effect;
                                case "ADBE Text Properties":
                                    return f.textInterface;
                                default:
                                    return null
                            }
                        }
                        f.getMatrix = e, f.invertPoint = o, f.applyPoint = a, f.toWorld = r, f.toWorldVec = t, f.fromWorld = n, f.fromWorldVec = i, f.toComp = r, f.fromComp = s, f.sampleImage = u, f.sourceRectAtTime = d.sourceRectAtTime.bind(d), f._elem = d;
                        var m = getDescriptor(h = TransformExpressionInterface(d.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(f, {
                            hasParent: {
                                get: function() {
                                    return d.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return d.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(h, "rotation"),
                            scale: getDescriptor(h, "scale"),
                            position: getDescriptor(h, "position"),
                            opacity: getDescriptor(h, "opacity"),
                            anchorPoint: m,
                            anchor_point: m,
                            transform: {
                                get: function() {
                                    return h
                                }
                            },
                            active: {
                                get: function() {
                                    return d.isInRange
                                }
                            }
                        }), f.startTime = d.data.st, f.index = d.data.ind, f.source = d.data.refId, f.height = d.data.ty === 0 ? d.data.h : 100, f.width = d.data.ty === 0 ? d.data.w : 100, f.inPoint = d.data.ip / d.comp.globalData.frameRate, f.outPoint = d.data.op / d.comp.globalData.frameRate, f._name = d.data.nm, f.registerMaskInterface = function(c) {
                            f.mask = new MaskManagerInterface(c, d)
                        }, f.registerEffectsInterface = function(c) {
                            f.effect = c
                        }, f
                    }
                }(),
                propertyGroupFactory = function(e, t) {
                    return function(r) {
                        return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
                    }
                },
                PropertyInterface = function(e, t) {
                    var r = {
                        _name: e
                    };
                    return function(i) {
                        return (i = i === void 0 ? 1 : i) <= 0 ? r : t(i - 1)
                    }
                },
                EffectsExpressionInterface = function() {
                    function e(r, i, n, a) {
                        function o(f) {
                            for (var m = r.ef, c = 0, p = m.length; c < p;) {
                                if (f === m[c].nm || f === m[c].mn || f === m[c].ix) return m[c].ty === 5 ? d[c] : d[c]();
                                c += 1
                            }
                            throw new Error
                        }
                        var s, u = propertyGroupFactory(o, n),
                            d = [],
                            h = r.ef.length;
                        for (s = 0; s < h; s += 1) r.ef[s].ty === 5 ? d.push(e(r.ef[s], i.effectElements[s], i.effectElements[s].propertyGroup, a)) : d.push(t(i.effectElements[s], r.ef[s].ty, a, u));
                        return r.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                            get: function() {
                                return d[0]()
                            }
                        }), Object.defineProperties(o, {
                            numProperties: {
                                get: function() {
                                    return r.np
                                }
                            },
                            _name: {
                                value: r.nm
                            },
                            propertyGroup: {
                                value: u
                            }
                        }), o.enabled = r.en !== 0, o.active = o.enabled, o
                    }

                    function t(r, i, n, a) {
                        var o = ExpressionPropertyInterface(r.p);
                        return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
                            function() {
                                return i === 10 ? n.comp.compInterface(r.p.v) : o()
                            }
                    }
                    return {
                        createEffectsInterface: function(r, i) {
                            if (r.effectsManager) {
                                var n, a = [],
                                    o = r.data.ef,
                                    s = r.effectsManager.effectElements.length;
                                for (n = 0; n < s; n += 1) a.push(e(o[n], r.effectsManager.effectElements[n], i, r));
                                var u = r.data.ef || [],
                                    d = function(h) {
                                        for (n = 0, s = u.length; n < s;) {
                                            if (h === u[n].nm || h === u[n].mn || h === u[n].ix) return a[n];
                                            n += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(d, "numProperties", {
                                    get: function() {
                                        return u.length
                                    }
                                }), d
                            }
                            return null
                        }
                    }
                }(),
                ShapePathInterface = function(e, t, r) {
                    var i = t.sh;

                    function n(o) {
                        return o === "Shape" || o === "shape" || o === "Path" || o === "path" || o === "ADBE Vector Shape" || o === 2 ? n.path : null
                    }
                    var a = propertyGroupFactory(n, r);
                    return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
                        path: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        shape: {
                            get: function() {
                                return i.k && i.getValue(), i
                            }
                        },
                        _name: {
                            value: e.nm
                        },
                        ix: {
                            value: e.ix
                        },
                        propertyIndex: {
                            value: e.ix
                        },
                        mn: {
                            value: e.mn
                        },
                        propertyGroup: {
                            value: r
                        }
                    }), n
                },
                ShapeExpressionInterface = function() {
                    function e(c, p, v) {
                        var l, y = [],
                            g = c ? c.length : 0;
                        for (l = 0; l < g; l += 1) c[l].ty === "gr" ? y.push(t(c[l], p[l], v)) : c[l].ty === "fl" ? y.push(r(c[l], p[l], v)) : c[l].ty === "st" ? y.push(a(c[l], p[l], v)) : c[l].ty === "tm" ? y.push(o(c[l], p[l], v)) : c[l].ty === "tr" || (c[l].ty === "el" ? y.push(u(c[l], p[l], v)) : c[l].ty === "sr" ? y.push(d(c[l], p[l], v)) : c[l].ty === "sh" ? y.push(ShapePathInterface(c[l], p[l], v)) : c[l].ty === "rc" ? y.push(h(c[l], p[l], v)) : c[l].ty === "rd" ? y.push(f(c[l], p[l], v)) : c[l].ty === "rp" ? y.push(m(c[l], p[l], v)) : c[l].ty === "gf" ? y.push(i(c[l], p[l], v)) : y.push(n(c[l], p[l])));
                        return y
                    }

                    function t(c, p, v) {
                        var l = function(b) {
                            switch (b) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return l.content;
                                default:
                                    return l.transform
                            }
                        };
                        l.propertyGroup = propertyGroupFactory(l, v);
                        var y = function(b, S, _) {
                                var I, w = function(F) {
                                    for (var M = 0, A = I.length; M < A;) {
                                        if (I[M]._name === F || I[M].mn === F || I[M].propertyIndex === F || I[M].ix === F || I[M].ind === F) return I[M];
                                        M += 1
                                    }
                                    return typeof F == "number" ? I[F - 1] : null
                                };
                                w.propertyGroup = propertyGroupFactory(w, _), I = e(b.it, S.it, w.propertyGroup), w.numProperties = I.length;
                                var C = s(b.it[b.it.length - 1], S.it[S.it.length - 1], w.propertyGroup);
                                return w.transform = C, w.propertyIndex = b.cix, w._name = b.nm, w
                            }(c, p, l.propertyGroup),
                            g = s(c.it[c.it.length - 1], p.it[p.it.length - 1], l.propertyGroup);
                        return l.content = y, l.transform = g, Object.defineProperty(l, "_name", {
                            get: function() {
                                return c.nm
                            }
                        }), l.numProperties = c.np, l.propertyIndex = c.ix, l.nm = c.nm, l.mn = c.mn, l
                    }

                    function r(c, p, v) {
                        function l(y) {
                            return y === "Color" || y === "color" ? l.color : y === "Opacity" || y === "opacity" ? l.opacity : null
                        }
                        return Object.defineProperties(l, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: c.nm
                            },
                            mn: {
                                value: c.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", v)), p.o.setGroupProperty(PropertyInterface("Opacity", v)), l
                    }

                    function i(c, p, v) {
                        function l(y) {
                            return y === "Start Point" || y === "start point" ? l.startPoint : y === "End Point" || y === "end point" ? l.endPoint : y === "Opacity" || y === "opacity" ? l.opacity : null
                        }
                        return Object.defineProperties(l, {
                            startPoint: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            endPoint: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            type: {
                                get: function() {
                                    return "a"
                                }
                            },
                            _name: {
                                value: c.nm
                            },
                            mn: {
                                value: c.mn
                            }
                        }), p.s.setGroupProperty(PropertyInterface("Start Point", v)), p.e.setGroupProperty(PropertyInterface("End Point", v)), p.o.setGroupProperty(PropertyInterface("Opacity", v)), l
                    }

                    function n() {
                        return function() {
                            return null
                        }
                    }

                    function a(c, p, v) {
                        var l, y = propertyGroupFactory(I, v),
                            g = propertyGroupFactory(_, y);

                        function b(w) {
                            Object.defineProperty(_, c.d[w].nm, {
                                get: ExpressionPropertyInterface(p.d.dataProps[w].p)
                            })
                        }
                        var S = c.d ? c.d.length : 0,
                            _ = {};
                        for (l = 0; l < S; l += 1) b(l), p.d.dataProps[l].p.setGroupProperty(g);

                        function I(w) {
                            return w === "Color" || w === "color" ? I.color : w === "Opacity" || w === "opacity" ? I.opacity : w === "Stroke Width" || w === "stroke width" ? I.strokeWidth : null
                        }
                        return Object.defineProperties(I, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            strokeWidth: {
                                get: ExpressionPropertyInterface(p.w)
                            },
                            dash: {
                                get: function() {
                                    return _
                                }
                            },
                            _name: {
                                value: c.nm
                            },
                            mn: {
                                value: c.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", y)), p.o.setGroupProperty(PropertyInterface("Opacity", y)), p.w.setGroupProperty(PropertyInterface("Stroke Width", y)), I
                    }

                    function o(c, p, v) {
                        function l(g) {
                            return g === c.e.ix || g === "End" || g === "end" ? l.end : g === c.s.ix ? l.start : g === c.o.ix ? l.offset : null
                        }
                        var y = propertyGroupFactory(l, v);
                        return l.propertyIndex = c.ix, p.s.setGroupProperty(PropertyInterface("Start", y)), p.e.setGroupProperty(PropertyInterface("End", y)), p.o.setGroupProperty(PropertyInterface("Offset", y)), l.propertyIndex = c.ix, l.propertyGroup = v, Object.defineProperties(l, {
                            start: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            end: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }

                    function s(c, p, v) {
                        function l(g) {
                            return c.a.ix === g || g === "Anchor Point" ? l.anchorPoint : c.o.ix === g || g === "Opacity" ? l.opacity : c.p.ix === g || g === "Position" ? l.position : c.r.ix === g || g === "Rotation" || g === "ADBE Vector Rotation" ? l.rotation : c.s.ix === g || g === "Scale" ? l.scale : c.sk && c.sk.ix === g || g === "Skew" ? l.skew : c.sa && c.sa.ix === g || g === "Skew Axis" ? l.skewAxis : null
                        }
                        var y = propertyGroupFactory(l, v);
                        return p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", y)), p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", y)), p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", y)), p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", y)), p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", y)), p.transform.mProps.sk && (p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", y)), p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", y))), p.transform.op.setGroupProperty(PropertyInterface("Opacity", y)), Object.defineProperties(l, {
                            opacity: {
                                get: ExpressionPropertyInterface(p.transform.mProps.o)
                            },
                            position: {
                                get: ExpressionPropertyInterface(p.transform.mProps.p)
                            },
                            anchorPoint: {
                                get: ExpressionPropertyInterface(p.transform.mProps.a)
                            },
                            scale: {
                                get: ExpressionPropertyInterface(p.transform.mProps.s)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(p.transform.mProps.r)
                            },
                            skew: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sk)
                            },
                            skewAxis: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sa)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.ty = "tr", l.mn = c.mn, l.propertyGroup = v, l
                    }

                    function u(c, p, v) {
                        function l(b) {
                            return c.p.ix === b ? l.position : c.s.ix === b ? l.size : null
                        }
                        var y = propertyGroupFactory(l, v);
                        l.propertyIndex = c.ix;
                        var g = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return g.s.setGroupProperty(PropertyInterface("Size", y)), g.p.setGroupProperty(PropertyInterface("Position", y)), Object.defineProperties(l, {
                            size: {
                                get: ExpressionPropertyInterface(g.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(g.p)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }

                    function d(c, p, v) {
                        function l(b) {
                            return c.p.ix === b ? l.position : c.r.ix === b ? l.rotation : c.pt.ix === b ? l.points : c.or.ix === b || b === "ADBE Vector Star Outer Radius" ? l.outerRadius : c.os.ix === b ? l.outerRoundness : !c.ir || c.ir.ix !== b && b !== "ADBE Vector Star Inner Radius" ? c.is && c.is.ix === b ? l.innerRoundness : null : l.innerRadius
                        }
                        var y = propertyGroupFactory(l, v),
                            g = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return l.propertyIndex = c.ix, g.or.setGroupProperty(PropertyInterface("Outer Radius", y)), g.os.setGroupProperty(PropertyInterface("Outer Roundness", y)), g.pt.setGroupProperty(PropertyInterface("Points", y)), g.p.setGroupProperty(PropertyInterface("Position", y)), g.r.setGroupProperty(PropertyInterface("Rotation", y)), c.ir && (g.ir.setGroupProperty(PropertyInterface("Inner Radius", y)), g.is.setGroupProperty(PropertyInterface("Inner Roundness", y))), Object.defineProperties(l, {
                            position: {
                                get: ExpressionPropertyInterface(g.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(g.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(g.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(g.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(g.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(g.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(g.is)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }

                    function h(c, p, v) {
                        function l(b) {
                            return c.p.ix === b ? l.position : c.r.ix === b ? l.roundness : c.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size" ? l.size : null
                        }
                        var y = propertyGroupFactory(l, v),
                            g = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return l.propertyIndex = c.ix, g.p.setGroupProperty(PropertyInterface("Position", y)), g.s.setGroupProperty(PropertyInterface("Size", y)), g.r.setGroupProperty(PropertyInterface("Rotation", y)), Object.defineProperties(l, {
                            position: {
                                get: ExpressionPropertyInterface(g.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(g.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(g.s)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }

                    function f(c, p, v) {
                        function l(b) {
                            return c.r.ix === b || b === "Round Corners 1" ? l.radius : null
                        }
                        var y = propertyGroupFactory(l, v),
                            g = p;
                        return l.propertyIndex = c.ix, g.rd.setGroupProperty(PropertyInterface("Radius", y)), Object.defineProperties(l, {
                            radius: {
                                get: ExpressionPropertyInterface(g.rd)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }

                    function m(c, p, v) {
                        function l(b) {
                            return c.c.ix === b || b === "Copies" ? l.copies : c.o.ix === b || b === "Offset" ? l.offset : null
                        }
                        var y = propertyGroupFactory(l, v),
                            g = p;
                        return l.propertyIndex = c.ix, g.c.setGroupProperty(PropertyInterface("Copies", y)), g.o.setGroupProperty(PropertyInterface("Offset", y)), Object.defineProperties(l, {
                            copies: {
                                get: ExpressionPropertyInterface(g.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(g.o)
                            },
                            _name: {
                                value: c.nm
                            }
                        }), l.mn = c.mn, l
                    }
                    return function(c, p, v) {
                        var l;

                        function y(g) {
                            if (typeof g == "number") return (g = g === void 0 ? 1 : g) === 0 ? v : l[g - 1];
                            for (var b = 0, S = l.length; b < S;) {
                                if (l[b]._name === g) return l[b];
                                b += 1
                            }
                            return null
                        }
                        return y.propertyGroup = propertyGroupFactory(y, function() {
                            return v
                        }), l = e(c, p, y.propertyGroup), y.numProperties = l.length, y._name = "Contents", y
                    }
                }(),
                TextExpressionInterface = function(e) {
                    var t;

                    function r(i) {
                        return i === "ADBE Text Document" ? r.sourceText : null
                    }
                    return Object.defineProperty(r, "sourceText", {
                        get: function() {
                            e.textProperty.getValue();
                            var i = e.textProperty.currentData.t;
                            return t && i === t.value || ((t = new String(i)).value = i || new String(i), Object.defineProperty(t, "style", {
                                get: function() {
                                    return {
                                        fillColor: e.textProperty.currentData.fc
                                    }
                                }
                            })), t
                        }
                    }), r
                };

            function _typeof(e) {
                return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof(e)
            }
            var FootageInterface = (dataInterfaceFactory = function(e) {
                    function t(r) {
                        return r === "Outline" ? t.outlineInterface() : null
                    }
                    return t._name = "Outline", t.outlineInterface = function(r) {
                        var i = "",
                            n = r.getFootageData();

                        function a(o) {
                            if (n[o]) return i = o, _typeof(n = n[o]) === "object" ? a : n;
                            var s = o.indexOf(i);
                            if (s !== -1) {
                                var u = parseInt(o.substr(s + i.length), 10);
                                return _typeof(n = n[u]) === "object" ? a : n
                            }
                            return ""
                        }
                        return function() {
                            return i = "", n = r.getFootageData(), a
                        }
                    }(e), t
                }, function(e) {
                    function t(r) {
                        return r === "Data" ? t.dataInterface : null
                    }
                    return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
                }),
                dataInterfaceFactory, interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface
                };

            function getInterface(e) {
                return interfaces[e] || null
            }
            var expressionHelpers = {
                searchExpressions: function(e, t, r) {
                    t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
                },
                getSpeedAtTime: function(e) {
                    var t = this.getValueAtTime(e),
                        r = this.getValueAtTime(e + -.01),
                        i = 0;
                    if (t.length) {
                        var n;
                        for (n = 0; n < t.length; n += 1) i += Math.pow(r[n] - t[n], 2);
                        i = 100 * Math.sqrt(i)
                    } else i = 0;
                    return i
                },
                getVelocityAtTime: function(e) {
                    if (this.vel !== void 0) return this.vel;
                    var t, r, i = -.001,
                        n = this.getValueAtTime(e),
                        a = this.getValueAtTime(e + i);
                    if (n.length)
                        for (t = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) t[r] = (a[r] - n[r]) / i;
                    else t = (a - n) / i;
                    return t
                },
                getValueAtTime: function(e) {
                    return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(e) {
                    this.propertyGroup = e
                }
            };

            function addPropertyDecorator() {
                function e(f, m, c) {
                    if (!this.k || !this.keyframes) return this.pv;
                    f = f ? f.toLowerCase() : "";
                    var p, v, l, y, g, b = this.comp.renderedFrame,
                        S = this.keyframes,
                        _ = S[S.length - 1].t;
                    if (b <= _) return this.pv;
                    if (c ? v = _ - (p = m ? Math.abs(_ - this.elem.comp.globalData.frameRate * m) : Math.max(0, _ - this.elem.data.ip)) : ((!m || m > S.length - 1) && (m = S.length - 1), p = _ - (v = S[S.length - 1 - m].t)), f === "pingpong") {
                        if (Math.floor((b - v) / p) % 2 != 0) return this.getValueAtTime((p - (b - v) % p + v) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (f === "offset") {
                            var I = this.getValueAtTime(v / this.comp.globalData.frameRate, 0),
                                w = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime(((b - v) % p + v) / this.comp.globalData.frameRate, 0),
                                F = Math.floor((b - v) / p);
                            if (this.pv.length) {
                                for (y = (g = new Array(I.length)).length, l = 0; l < y; l += 1) g[l] = (w[l] - I[l]) * F + C[l];
                                return g
                            }
                            return (w - I) * F + C
                        }
                        if (f === "continue") {
                            var M = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                                A = this.getValueAtTime((_ - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (y = (g = new Array(M.length)).length, l = 0; l < y; l += 1) g[l] = M[l] + (M[l] - A[l]) * ((b - _) / this.comp.globalData.frameRate) / 5e-4;
                                return g
                            }
                            return M + (b - _) / .001 * (M - A)
                        }
                    }
                    return this.getValueAtTime(((b - v) % p + v) / this.comp.globalData.frameRate, 0)
                }

                function t(f, m, c) {
                    if (!this.k) return this.pv;
                    f = f ? f.toLowerCase() : "";
                    var p, v, l, y, g, b = this.comp.renderedFrame,
                        S = this.keyframes,
                        _ = S[0].t;
                    if (b >= _) return this.pv;
                    if (c ? v = _ + (p = m ? Math.abs(this.elem.comp.globalData.frameRate * m) : Math.max(0, this.elem.data.op - _)) : ((!m || m > S.length - 1) && (m = S.length - 1), p = (v = S[m].t) - _), f === "pingpong") {
                        if (Math.floor((_ - b) / p) % 2 == 0) return this.getValueAtTime(((_ - b) % p + _) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (f === "offset") {
                            var I = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                                w = this.getValueAtTime(v / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime((p - (_ - b) % p + _) / this.comp.globalData.frameRate, 0),
                                F = Math.floor((_ - b) / p) + 1;
                            if (this.pv.length) {
                                for (y = (g = new Array(I.length)).length, l = 0; l < y; l += 1) g[l] = C[l] - (w[l] - I[l]) * F;
                                return g
                            }
                            return C - (w - I) * F
                        }
                        if (f === "continue") {
                            var M = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                                A = this.getValueAtTime((_ + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (y = (g = new Array(M.length)).length, l = 0; l < y; l += 1) g[l] = M[l] + (M[l] - A[l]) * (_ - b) / .001;
                                return g
                            }
                            return M + (M - A) * (_ - b) / .001
                        }
                    }
                    return this.getValueAtTime((p - ((_ - b) % p + _)) / this.comp.globalData.frameRate, 0)
                }

                function r(f, m) {
                    if (!this.k) return this.pv;
                    if (f = .5 * (f || .4), (m = Math.floor(m || 5)) <= 1) return this.pv;
                    var c, p, v = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        l = v - f,
                        y = m > 1 ? (v + f - l) / (m - 1) : 1,
                        g = 0,
                        b = 0;
                    for (c = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; g < m;) {
                        if (p = this.getValueAtTime(l + g * y), this.pv.length)
                            for (b = 0; b < this.pv.length; b += 1) c[b] += p[b];
                        else c += p;
                        g += 1
                    }
                    if (this.pv.length)
                        for (b = 0; b < this.pv.length; b += 1) c[b] /= m;
                    else c /= m;
                    return c
                }

                function i(f) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var m = this._transformCachingAtTime.v;
                    if (m.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var c = this.a.getValueAtTime(f);
                        m.translate(-c[0] * this.a.mult, -c[1] * this.a.mult, c[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var p = this.s.getValueAtTime(f);
                        m.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var v = this.sk.getValueAtTime(f),
                            l = this.sa.getValueAtTime(f);
                        m.skewFromAxis(-v * this.sk.mult, l * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var y = this.r.getValueAtTime(f);
                        m.rotate(-y * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var g = this.rz.getValueAtTime(f),
                            b = this.ry.getValueAtTime(f),
                            S = this.rx.getValueAtTime(f),
                            _ = this.or.getValueAtTime(f);
                        m.rotateZ(-g * this.rz.mult).rotateY(b * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-_[2] * this.or.mult).rotateY(_[1] * this.or.mult).rotateX(_[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var I = this.px.getValueAtTime(f),
                            w = this.py.getValueAtTime(f);
                        if (this.data.p.z) {
                            var C = this.pz.getValueAtTime(f);
                            m.translate(I * this.px.mult, w * this.py.mult, -C * this.pz.mult)
                        } else m.translate(I * this.px.mult, w * this.py.mult, 0)
                    } else {
                        var F = this.p.getValueAtTime(f);
                        m.translate(F[0] * this.p.mult, F[1] * this.p.mult, -F[2] * this.p.mult)
                    }
                    return m
                }

                function n() {
                    return this.v.clone(new Matrix)
                }
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(f, m, c) {
                    var p = a(f, m, c);
                    return p.dynamicProperties.length ? p.getValueAtTime = i.bind(p) : p.getValueAtTime = n.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p
                };
                var o = PropertyFactory.getProp;
                PropertyFactory.getProp = function(f, m, c, p, v) {
                    var l = o(f, m, c, p, v);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = e, l.loopIn = t, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = m.a === 1 ? m.k.length : 0, l.propertyIndex = m.ix;
                    var y = 0;
                    return c !== 0 && (y = createTypedArray("float32", m.a === 1 ? m.k[0].s.length : m.k.length)), l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: y
                    }, expressionHelpers.searchExpressions(f, m, l), l.k && v.addDynamicProperty(l), l
                };
                var s = ShapePropertyFactory.getConstructorFunction(),
                    u = ShapePropertyFactory.getKeyframedConstructorFunction();

                function d() {}
                d.prototype = {
                    vertices: function(f, m) {
                        this.k && this.getValue();
                        var c, p = this.v;
                        m !== void 0 && (p = this.getValueAtTime(m, 0));
                        var v = p._length,
                            l = p[f],
                            y = p.v,
                            g = createSizedArray(v);
                        for (c = 0; c < v; c += 1) g[c] = f === "i" || f === "o" ? [l[c][0] - y[c][0], l[c][1] - y[c][1]] : [l[c][0], l[c][1]];
                        return g
                    },
                    points: function(f) {
                        return this.vertices("v", f)
                    },
                    inTangents: function(f) {
                        return this.vertices("i", f)
                    },
                    outTangents: function(f) {
                        return this.vertices("o", f)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(f, m) {
                        var c = this.v;
                        m !== void 0 && (c = this.getValueAtTime(m, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(c));
                        for (var p, v = this._segmentsLength, l = v.lengths, y = v.totalLength * f, g = 0, b = l.length, S = 0; g < b;) {
                            if (S + l[g].addedLength > y) {
                                var _ = g,
                                    I = c.c && g === b - 1 ? 0 : g + 1,
                                    w = (y - S) / l[g].addedLength;
                                p = bez.getPointInSegment(c.v[_], c.v[I], c.o[_], c.i[I], w, l[g]);
                                break
                            }
                            S += l[g].addedLength, g += 1
                        }
                        return p || (p = c.c ? [c.v[0][0], c.v[0][1]] : [c.v[c._length - 1][0], c.v[c._length - 1][1]]), p
                    },
                    vectorOnPath: function(f, m, c) {
                        f == 1 ? f = this.v.c : f == 0 && (f = .999);
                        var p = this.pointOnPath(f, m),
                            v = this.pointOnPath(f + .001, m),
                            l = v[0] - p[0],
                            y = v[1] - p[1],
                            g = Math.sqrt(Math.pow(l, 2) + Math.pow(y, 2));
                        return g === 0 ? [0, 0] : c === "tangent" ? [l / g, y / g] : [-y / g, l / g]
                    },
                    tangentOnPath: function(f, m) {
                        return this.vectorOnPath(f, m, "tangent")
                    },
                    normalOnPath: function(f, m) {
                        return this.vectorOnPath(f, m, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([d], s), extendPrototype([d], u), u.prototype.getValueAtTime = function(f) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), f *= this.elem.globalData.frameRate, (f -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                }, u.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var h = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(f, m, c, p, v) {
                    var l = h(f, m, c, p, v);
                    return l.propertyIndex = m.ix, l.lock = !1, c === 3 ? expressionHelpers.searchExpressions(f, m.pt, l) : c === 4 && expressionHelpers.searchExpressions(f, m.ks, l), l.k && f.addDynamicProperty(l), l
                }
            }

            function initialize$1() {
                addPropertyDecorator()
            }

            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(e, t) {
                    var r = this.calculateExpression(t);
                    if (e.t !== r) {
                        var i = {};
                        return this.copyData(i, e), i.t = r.toString(), i.__complete = !1, i
                    }
                    return e
                }, TextProperty.prototype.searchProperty = function() {
                    var e = this.searchKeyframes(),
                        t = this.searchExpressions();
                    return this.kf = e || t, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                }
            }

            function initialize() {
                addDecorator()
            }

            function SVGComposableEffect() {}
            SVGComposableEffect.prototype = {
                createMergeNode: function(e, t) {
                    var r, i, n = createNS("feMerge");
                    for (n.setAttribute("result", e), i = 0; i < t.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", t[i]), n.appendChild(r), n.appendChild(r);
                    return n
                }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

            function SVGTintFilter(e, t, r, i, n) {
                this.filterManager = t;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
                var o = this.createMergeNode(i, [n, i + "_tint_1", i + "_tint_2"]);
                e.appendChild(o)
            }

            function SVGFillFilter(e, t, r, i) {
                this.filterManager = t;
                var n = createNS("feColorMatrix");
                n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i), e.appendChild(n), this.matrixFilter = n
            }

            function SVGStrokeEffect(e, t, r) {
                this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
            }

            function SVGTritoneFilter(e, t, r, i) {
                this.filterManager = t;
                var n = createNS("feColorMatrix");
                n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(n);
                var a = createNS("feComponentTransfer");
                a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
                var o = createNS("feFuncR");
                o.setAttribute("type", "table"), a.appendChild(o), this.feFuncR = o;
                var s = createNS("feFuncG");
                s.setAttribute("type", "table"), a.appendChild(s), this.feFuncG = s;
                var u = createNS("feFuncB");
                u.setAttribute("type", "table"), a.appendChild(u), this.feFuncB = u, e.appendChild(a)
            }

            function SVGProLevelsFilter(e, t, r, i) {
                this.filterManager = t;
                var n = this.filterManager.effectElements,
                    a = createNS("feComponentTransfer");
                (n[10].p.k || n[10].p.v !== 0 || n[11].p.k || n[11].p.v !== 1 || n[12].p.k || n[12].p.v !== 1 || n[13].p.k || n[13].p.v !== 0 || n[14].p.k || n[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (n[17].p.k || n[17].p.v !== 0 || n[18].p.k || n[18].p.v !== 1 || n[19].p.k || n[19].p.v !== 1 || n[20].p.k || n[20].p.v !== 0 || n[21].p.k || n[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (n[24].p.k || n[24].p.v !== 0 || n[25].p.k || n[25].p.v !== 1 || n[26].p.k || n[26].p.v !== 1 || n[27].p.k || n[27].p.v !== 0 || n[28].p.k || n[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (n[31].p.k || n[31].p.v !== 0 || n[32].p.k || n[32].p.v !== 1 || n[33].p.k || n[33].p.v !== 1 || n[34].p.k || n[34].p.v !== 0 || n[35].p.k || n[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (n[3].p.k || n[3].p.v !== 0 || n[4].p.k || n[4].p.v !== 1 || n[5].p.k || n[5].p.v !== 1 || n[6].p.k || n[6].p.v !== 0 || n[7].p.k || n[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
            }

            function SVGDropShadowEffect(e, t, r, i, n) {
                var a = t.container.globalData.renderConfig.filterSize,
                    o = t.data.fs || a;
                e.setAttribute("x", o.x || a.x), e.setAttribute("y", o.y || a.y), e.setAttribute("width", o.width || a.width), e.setAttribute("height", o.height || a.height), this.filterManager = t;
                var s = createNS("feGaussianBlur");
                s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", i + "_drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, e.appendChild(s);
                var u = createNS("feOffset");
                u.setAttribute("dx", "25"), u.setAttribute("dy", "0"), u.setAttribute("in", i + "_drop_shadow_1"), u.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = u, e.appendChild(u);
                var d = createNS("feFlood");
                d.setAttribute("flood-color", "#00ff00"), d.setAttribute("flood-opacity", "1"), d.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = d, e.appendChild(d);
                var h = createNS("feComposite");
                h.setAttribute("in", i + "_drop_shadow_3"), h.setAttribute("in2", i + "_drop_shadow_2"), h.setAttribute("operator", "in"), h.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(h);
                var f = this.createMergeNode(i, [i + "_drop_shadow_4", n]);
                e.appendChild(f)
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
                }
            }, SVGFillFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[2].p.v,
                        r = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var e, t, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (this.filterManager.effectElements[1].p.v === 1 ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < i; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
                    p: e,
                    m: r
                });
                if (this.filterManager.effectElements[10].p.v === 3) {
                    var a = createNS("mask"),
                        o = createElementID();
                    a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                    var s = createNS("g");
                    for (s.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")"); n[0];) s.appendChild(n[0]);
                    this.elem.layerElement.appendChild(s), this.masker = a, t.setAttribute("stroke", "#fff")
                } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                    if (this.filterManager.effectElements[10].p.v === 2)
                        for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                    this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = t
            }, SVGStrokeEffect.prototype.renderFrame = function(e) {
                var t;
                this.initialized || this.initialize();
                var r, i, n = this.paths.length;
                for (t = 0; t < n; t += 1)
                    if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        var a;
                        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                            var o = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                u = i.getTotalLength();
                            a = "0 0 0 " + u * o + " ";
                            var d, h = u * (s - o),
                                f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                m = Math.floor(h / f);
                            for (d = 0; d < m; d += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            a += "0 " + 10 * u + " 0 0"
                        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        i.setAttribute("stroke-dasharray", a)
                    } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
                    var c = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")")
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v,
                        n = i[0] + " " + r[0] + " " + t[0],
                        a = i[1] + " " + r[1] + " " + t[1],
                        o = i[2] + " " + r[2] + " " + t[2];
                    this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o)
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
                var r = createNS(e);
                return r.setAttribute("type", "table"), t.appendChild(r), r
            }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, n) {
                for (var a, o, s = 0, u = Math.min(e, t), d = Math.max(e, t), h = Array.call(null, {
                        length: 256
                    }), f = 0, m = n - i, c = t - e; s <= 256;) o = (a = s / 256) <= u ? c < 0 ? n : i : a >= d ? c < 0 ? i : n : i + m * Math.pow((a - e) / c, 1 / r), h[f] = o, f += 1, s += 256 / 255;
                return h.join(" ")
            }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t, r = this.filterManager.effectElements;
                    this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
                }
            }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
                        var t = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
                    }
                    if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var r = this.filterManager.effectElements[3].p.v,
                            i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            n = r * Math.cos(i),
                            a = r * Math.sin(i);
                        this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
                    }
                }
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(e, t, r) {
                this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
            }

            function SVGGaussianBlurEffect(e, t, r, i) {
                e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
                var n = createNS("feGaussianBlur");
                n.setAttribute("result", i), e.appendChild(n), this.feGaussianBlur = n
            }

            function TransformEffect() {}

            function SVGTransformEffect(e, t) {
                this.init(t)
            }

            function CVTransformEffect(e) {
                this.init(e)
            }
            return SVGMatte3Effect.prototype.findSymbol = function(e) {
                for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
                    if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                    t += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
                var r = e.layerElement.parentNode;
                if (r) {
                    for (var i, n = r.children, a = 0, o = n.length; a < o && n[a] !== e.layerElement;) a += 1;
                    a <= o - 2 && (i = n[a + 1]);
                    var s = createNS("use");
                    s.setAttribute("href", "#" + t), i ? r.insertBefore(s, i) : r.appendChild(s)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
                if (!this.findSymbol(t)) {
                    var r = createElementID(),
                        i = createNS("mask");
                    i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
                    var n = e.globalData.defs;
                    n.appendChild(i);
                    var a = createNS("symbol");
                    a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), n.appendChild(a);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + r), i.appendChild(o), t.data.hd = !1, t.show()
                }
                e.setMatte(t.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = .3 * this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = r == 3 ? 0 : t,
                        n = r == 2 ? 0 : t;
                    this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
                    var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a)
                }
            }, TransformEffect.prototype.init = function(e) {
                this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
            }, TransformEffect.prototype.renderFrame = function(e) {
                if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
                    var t = this.effectsManager.effectElements,
                        r = t[0].p.v,
                        i = t[1].p.v,
                        n = t[2].p.v === 1,
                        a = t[3].p.v,
                        o = n ? a : t[4].p.v,
                        s = t[5].p.v,
                        u = t[6].p.v,
                        d = t[7].p.v;
                    this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * o, .01 * a, 1), this.matrix.rotate(-d * degToRads), this.matrix.skewFromAxis(-s * degToRads, (u + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
                }
            }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
        })
    });
    var X0 = x((mj, K0) => {
        "use strict";
        var AB = at(),
            Qr = (W0(), S1($0)),
            CB = U0();
        AB.define("lottie", K0.exports = function() {
            return {
                lottie: CB,
                createInstance: Qr.createInstance,
                cleanupElement: Qr.cleanupElement,
                init: Qr.init,
                destroy: Qr.destroy,
                ready: Qr.ready
            }
        })
    });
    var Z0 = x((vj, J0) => {
        "use strict";
        var Y0 = at();
        Y0.define("brand", J0.exports = function(e) {
            var t = {},
                r = document,
                i = e("html"),
                n = e("body"),
                a = ".w-webflow-badge",
                o = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                d;
            t.ready = function() {
                var c = i.attr("data-wf-status"),
                    p = i.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(p) && o.hostname !== p && (c = !0), c && !s && (d = d || f(), m(), setTimeout(m, 500), e(r).off(u, h).on(u, h))
            };

            function h() {
                var c = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", c ? "display: none !important;" : "")
            }

            function f() {
                var c = e('<a class=""></a>').attr("href", ""),
                    p = e("<img>").attr("src", "").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    v = e("<img>").attr("src", "").attr("alt", "");
                return c.append(p, v), c[0]
            }

            function m() {
                var c = n.children(a),
                    p = c.length && c.get(0) === d,
                    v = Y0.env("editor");
                if (p) {
                    v && c.remove();
                    return
                }
                c.length && c.remove(), v || n.append(d)
            }
            return t
        })
    });
    var e1 = x((yj, Q0) => {
        "use strict";
        var Vs = at();
        Vs.define("edit", Q0.exports = function(e, t, r) {
            if (r = r || {}, (Vs.env("test") || Vs.env("frame")) && !r.fixture && !TB()) return {
                exit: 1
            };
            var i = {},
                n = e(window),
                a = e(document.documentElement),
                o = document.location,
                s = "hashchange",
                u, d = r.load || m,
                h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? d() : o.search ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) && d() : n.on(s, f).triggerHandler(s);

            function f() {
                u || /\?edit/.test(o.hash) && d()
            }

            function m() {
                u = !0, window.WebflowEditor = !0, n.off(s, f), g(function(S) {
                    e.ajax({
                        url: y("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: a.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: c(S)
                    })
                })
            }

            function c(S) {
                return function(_) {
                    if (!_) {
                        console.error("Could not load editor data");
                        return
                    }
                    _.thirdPartyCookiesSupported = S, p(l(_.scriptPath), function() {
                        window.WebflowEditor(_)
                    })
                }
            }

            function p(S, _) {
                e.ajax({
                    type: "GET",
                    url: S,
                    dataType: "script",
                    cache: !0
                }).then(_, v)
            }

            function v(S, _, I) {
                throw console.error("Could not load editor script: " + _), I
            }

            function l(S) {
                return S.indexOf("//") >= 0 ? S : y("https://editor-api.webflow.com" + S)
            }

            function y(S) {
                return S.replace(/([^:])\/\//g, "$1/")
            }

            function g(S) {
                var _ = window.document.createElement("iframe");
                _.src = "https://webflow.com/site/third-party-cookie-check.html", _.style.display = "none", _.sandbox = "allow-scripts allow-same-origin";
                var I = function(w) {
                    w.data === "WF_third_party_cookies_unsupported" ? (b(_, I), S(!1)) : w.data === "WF_third_party_cookies_supported" && (b(_, I), S(!0))
                };
                _.onerror = function() {
                    b(_, I), S(!1)
                }, window.addEventListener("message", I, !1), window.document.body.appendChild(_)
            }

            function b(S, _) {
                window.removeEventListener("message", _, !1), S.remove()
            }
            return i
        });

        function TB() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var r1 = x((gj, t1) => {
        "use strict";
        var IB = at();
        IB.define("focus-visible", t1.exports = function() {
            function e(r) {
                var i = !0,
                    n = !1,
                    a = null,
                    o = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(b) {
                    return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
                }

                function u(b) {
                    var S = b.type,
                        _ = b.tagName;
                    return !!(_ === "INPUT" && o[S] && !b.readOnly || _ === "TEXTAREA" && !b.readOnly || b.isContentEditable)
                }

                function d(b) {
                    b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true")
                }

                function h(b) {
                    b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible")
                }

                function f(b) {
                    b.metaKey || b.altKey || b.ctrlKey || (s(r.activeElement) && d(r.activeElement), i = !0)
                }

                function m() {
                    i = !1
                }

                function c(b) {
                    s(b.target) && (i || u(b.target)) && d(b.target)
                }

                function p(b) {
                    s(b.target) && b.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                        n = !1
                    }, 100), h(b.target))
                }

                function v() {
                    document.visibilityState === "hidden" && (n && (i = !0), l())
                }

                function l() {
                    document.addEventListener("mousemove", g), document.addEventListener("mousedown", g), document.addEventListener("mouseup", g), document.addEventListener("pointermove", g), document.addEventListener("pointerdown", g), document.addEventListener("pointerup", g), document.addEventListener("touchmove", g), document.addEventListener("touchstart", g), document.addEventListener("touchend", g)
                }

                function y() {
                    document.removeEventListener("mousemove", g), document.removeEventListener("mousedown", g), document.removeEventListener("mouseup", g), document.removeEventListener("pointermove", g), document.removeEventListener("pointerdown", g), document.removeEventListener("pointerup", g), document.removeEventListener("touchmove", g), document.removeEventListener("touchstart", g), document.removeEventListener("touchend", g)
                }

                function g(b) {
                    b.target.nodeName && b.target.nodeName.toLowerCase() === "html" || (i = !1, y())
                }
                document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("visibilitychange", v, !0), l(), r.addEventListener("focus", c, !0), r.addEventListener("blur", p, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var a1 = x((bj, n1) => {
        "use strict";
        var i1 = at();
        i1.define("focus", n1.exports = function() {
            var e = [],
                t = !1;

            function r(o) {
                t && (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), e.unshift(o))
            }

            function i(o) {
                var s = o.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function n(o) {
                i(o) && (t = !0, setTimeout(() => {
                    for (t = !1, o.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function a() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && i1.env.safari && (document.addEventListener("mousedown", n, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: a
            }
        })
    });
    var o1 = x((xj, s1) => {
        "use strict";
        var pr = at();
        pr.define("links", s1.exports = function(e, t) {
            var r = {},
                i = e(window),
                n, a = pr.env(),
                o = window.location,
                s = document.createElement("a"),
                u = "w--current",
                d = /index\.(html|php)$/,
                h = /\/$/,
                f, m;
            r.ready = r.design = r.preview = c;

            function c() {
                n = a && pr.env("design"), m = pr.env("slug") || o.pathname || "", pr.scroll.off(v), f = [];
                for (var y = document.links, g = 0; g < y.length; ++g) p(y[g]);
                f.length && (pr.scroll.on(v), v())
            }

            function p(y) {
                if (!y.getAttribute("hreflang")) {
                    var g = n && y.getAttribute("href-disabled") || y.getAttribute("href");
                    if (s.href = g, !(g.indexOf(":") >= 0)) {
                        var b = e(y);
                        if (s.hash.length > 1 && s.host + s.pathname === o.host + o.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var S = e(s.hash);
                            S.length && f.push({
                                link: b,
                                sec: S,
                                active: !1
                            });
                            return
                        }
                        if (!(g === "#" || g === "")) {
                            var _ = s.href === o.href || g === m || d.test(g) && h.test(m);
                            l(b, u, _)
                        }
                    }
                }
            }

            function v() {
                var y = i.scrollTop(),
                    g = i.height();
                t.each(f, function(b) {
                    if (!b.link.attr("hreflang")) {
                        var S = b.link,
                            _ = b.sec,
                            I = _.offset().top,
                            w = _.outerHeight(),
                            C = g * .5,
                            F = _.is(":visible") && I + w - C >= y && I + C <= y + g;
                        b.active !== F && (b.active = F, l(S, u, F))
                    }
                })
            }

            function l(y, g, b) {
                var S = y.hasClass(g);
                b && S || !b && !S || (b ? y.addClass(g) : y.removeClass(g))
            }
            return r
        })
    });
    var l1 = x((Sj, h1) => {
        "use strict";
        var hn = at();
        hn.define("scroll", h1.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                i = p() ? null : window.history,
                n = e(window),
                a = e(document),
                o = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                    window.setTimeout(D, 15)
                },
                u = hn.env("editor") ? ".w-editor-body" : "body",
                d = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                h = 'a[href="#"]',
                f = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
                m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                c = document.createElement("style");
            c.appendChild(document.createTextNode(m));

            function p() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var v = /^#[a-zA-Z0-9][\w:.-]*$/;

            function l(D) {
                return v.test(D.hash) && D.host + D.pathname === r.host + r.pathname
            }
            let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function g() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches
            }

            function b(D, q) {
                var T;
                switch (q) {
                    case "add":
                        T = D.attr("tabindex"), T ? D.attr("data-wf-tabindex-swap", T) : D.attr("tabindex", "-1");
                        break;
                    case "remove":
                        T = D.attr("data-wf-tabindex-swap"), T ? (D.attr("tabindex", T), D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                        break
                }
                D.toggleClass("wf-force-outline-none", q === "add")
            }

            function S(D) {
                var q = D.currentTarget;
                if (!(hn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(q.className))) {
                    var T = l(q) ? q.hash : "";
                    if (T !== "") {
                        var L = e(T);
                        L.length && (D && (D.preventDefault(), D.stopPropagation()), _(T, D), window.setTimeout(function() {
                            I(L, function() {
                                b(L, "add"), L.get(0).focus({
                                    preventScroll: !0
                                }), b(L, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }

            function _(D) {
                if (r.hash !== D && i && i.pushState && !(hn.env.chrome && r.protocol === "file:")) {
                    var q = i.state && i.state.hash;
                    q !== D && i.pushState({
                        hash: D
                    }, "", D)
                }
            }

            function I(D, q) {
                var T = n.scrollTop(),
                    L = w(D);
                if (T !== L) {
                    var N = C(D, T, L),
                        H = Date.now(),
                        P = function() {
                            var R = Date.now() - H;
                            window.scroll(0, F(T, L, R, N)), R <= N ? s(P) : typeof q == "function" && q()
                        };
                    s(P)
                }
            }

            function w(D) {
                var q = e(d),
                    T = q.css("position") === "fixed" ? q.outerHeight() : 0,
                    L = D.offset().top - T;
                if (D.data("scroll") === "mid") {
                    var N = n.height() - T,
                        H = D.outerHeight();
                    H < N && (L -= Math.round((N - H) / 2))
                }
                return L
            }

            function C(D, q, T) {
                if (g()) return 0;
                var L = 1;
                return o.add(D).each(function(N, H) {
                    var P = parseFloat(H.getAttribute("data-scroll-time"));
                    !isNaN(P) && P >= 0 && (L = P)
                }), (472.143 * Math.log(Math.abs(q - T) + 125) - 2e3) * L
            }

            function F(D, q, T, L) {
                return T > L ? q : D + (q - D) * M(T / L)
            }

            function M(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }

            function A() {
                var {
                    WF_CLICK_EMPTY: D,
                    WF_CLICK_SCROLL: q
                } = t;
                a.on(q, f, S), a.on(D, h, function(T) {
                    T.preventDefault()
                }), document.head.insertBefore(c, document.head.firstChild)
            }
            return {
                ready: A
            }
        })
    });
    var p1 = x((Ej, u1) => {
        "use strict";
        var MB = at();
        MB.define("touch", u1.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(a) {
                return a = typeof a == "string" ? e(a).get(0) : a, a ? new i(a) : null
            };

            function i(a) {
                var o = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    d, h;
                a.addEventListener("touchstart", f, !1), a.addEventListener("touchmove", m, !1), a.addEventListener("touchend", c, !1), a.addEventListener("touchcancel", p, !1), a.addEventListener("mousedown", f, !1), a.addEventListener("mousemove", m, !1), a.addEventListener("mouseup", c, !1), a.addEventListener("mouseout", p, !1);

                function f(l) {
                    var y = l.touches;
                    y && y.length > 1 || (o = !0, y ? (s = !0, d = y[0].clientX) : d = l.clientX, h = d)
                }

                function m(l) {
                    if (o) {
                        if (s && l.type === "mousemove") {
                            l.preventDefault(), l.stopPropagation();
                            return
                        }
                        var y = l.touches,
                            g = y ? y[0].clientX : l.clientX,
                            b = g - h;
                        h = g, Math.abs(b) > u && r && String(r()) === "" && (n("swipe", l, {
                            direction: b > 0 ? "right" : "left"
                        }), p())
                    }
                }

                function c(l) {
                    if (o && (o = !1, s && l.type === "mouseup")) {
                        l.preventDefault(), l.stopPropagation(), s = !1;
                        return
                    }
                }

                function p() {
                    o = !1
                }

                function v() {
                    a.removeEventListener("touchstart", f, !1), a.removeEventListener("touchmove", m, !1), a.removeEventListener("touchend", c, !1), a.removeEventListener("touchcancel", p, !1), a.removeEventListener("mousedown", f, !1), a.removeEventListener("mousemove", m, !1), a.removeEventListener("mouseup", c, !1), a.removeEventListener("mouseout", p, !1), a = null
                }
                this.destroy = v
            }

            function n(a, o, s) {
                var u = e.Event(a, {
                    originalEvent: o
                });
                e(o.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    X0();
    Z0();
    e1();
    r1();
    a1();
    o1();
    l1();
    p1();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
