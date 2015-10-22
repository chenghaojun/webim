function ImageUploader(a) {
    var a = a || {}
      , b = a.file;
    if (b) {
        var c = c || URL
          , d = c.createObjectURL(b)
          , g = new Image;
        g.src = d,
        g.onload = function() {
            var b = this
              , c = b.width
              , h = b.height
              , i = c / h;
            c = a.noBlur ? a.width && a.width < c ? a.width : c : a.width || c,
            h = c / i;
            var j = document.createElement("canvas")
              , k = j.getContext("2d");
            j.width = c,
            j.height = h,
            k.drawImage(b, 0, 0, c, h);
            var l = a.quality || .8
              , m = j.toDataURL("image/jpeg", l)
              , n = navigator.userAgent;
            if (n.match(/iphone/i)) {
                var o = new f(g);
                o.render(j, {
                    maxWidth: c,
                    maxHeight: h,
                    quality: l
                }),
                m = j.toDataURL("image/jpeg", l)
            } else if (n.match(/Android/i)) {
                var p = new e;
                m = p.encode(k.getImageData(0, 0, c, h), 100 * l)
            }
            Object.getPrototypeOf(a.callback) === Function.prototype && a.callback({
                blob: d,
                base64: m,
                clearBase64: m.substr(m.indexOf(",") + 1),
                filename: a.filename || null 
            })
        }
    }
}
var e = function() {
    function a(a) {
        function b(a) {
            for (var b = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], c = 0; 64 > c; c++) {
                var d = y((b[c] * a + 50) / 100);
                1 > d ? d = 1 : d > 255 && (d = 255),
                z[P[c]] = d
            }
            for (var e = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], f = 0; 64 > f; f++) {
                var g = y((e[f] * a + 50) / 100);
                1 > g ? g = 1 : g > 255 && (g = 255),
                A[P[f]] = g
            }
            for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], i = 0, j = 0; 8 > j; j++)
                for (var k = 0; 8 > k; k++)
                    B[i] = 1 / (z[P[i]] * h[j] * h[k] * 8),
                    C[i] = 1 / (A[P[i]] * h[j] * h[k] * 8),
                    i++
        }
        function c(a, b) {
            for (var c = 0, d = 0, e = new Array, f = 1; 16 >= f; f++) {
                for (var g = 1; g <= a[f]; g++)
                    e[b[d]] = [],
                    e[b[d]][0] = c,
                    e[b[d]][1] = f,
                    d++,
                    c++;
                c *= 2
            }
            return e
        }
        function d() {
            t = c(Q, R),
            u = c(U, V),
            v = c(S, T),
            w = c(W, X)
        }
        function e() {
            for (var a = 1, b = 2, c = 1; 15 >= c; c++) {
                for (var d = a; b > d; d++)
                    E[32767 + d] = c,
                    D[32767 + d] = [],
                    D[32767 + d][1] = c,
                    D[32767 + d][0] = d;
                for (var e = -(b - 1); -a >= e; e++)
                    E[32767 + e] = c,
                    D[32767 + e] = [],
                    D[32767 + e][1] = c,
                    D[32767 + e][0] = b - 1 + e;
                a <<= 1,
                b <<= 1
            }
        }
        function f() {
            for (var a = 0; 256 > a; a++)
                O[a] = 19595 * a,
                O[a + 256 >> 0] = 38470 * a,
                O[a + 512 >> 0] = 7471 * a + 32768,
                O[a + 768 >> 0] = -11059 * a,
                O[a + 1024 >> 0] = -21709 * a,
                O[a + 1280 >> 0] = 32768 * a + 8421375,
                O[a + 1536 >> 0] = -27439 * a,
                O[a + 1792 >> 0] = -5329 * a
        }
        function g(a) {
            for (var b = a[0], c = a[1] - 1; c >= 0; )
                b & 1 << c && (I |= 1 << J),
                c--,
                J--,
                0 > J && (255 == I ? (h(255),
                h(0)) : h(I),
                J = 7,
                I = 0)
        }
        function h(a) {
            H.push(N[a])
        }
        function i(a) {
            h(a >> 8 & 255),
            h(255 & a)
        }
        function j(a, b) {
            var c, d, e, f, g, h, i, j, k, l = 0;
            const m = 8
              , n = 64;
            for (k = 0; m > k; ++k) {
                c = a[l],
                d = a[l + 1],
                e = a[l + 2],
                f = a[l + 3],
                g = a[l + 4],
                h = a[l + 5],
                i = a[l + 6],
                j = a[l + 7];
                var o = c + j
                  , p = c - j
                  , q = d + i
                  , r = d - i
                  , s = e + h
                  , t = e - h
                  , u = f + g
                  , v = f - g
                  , w = o + u
                  , x = o - u
                  , y = q + s
                  , z = q - s;
                a[l] = w + y,
                a[l + 4] = w - y;
                var A = .707106781 * (z + x);
                a[l + 2] = x + A,
                a[l + 6] = x - A,
                w = v + t,
                y = t + r,
                z = r + p;
                var B = .382683433 * (w - z)
                  , C = .5411961 * w + B
                  , D = 1.306562965 * z + B
                  , E = .707106781 * y
                  , G = p + E
                  , H = p - E;
                a[l + 5] = H + C,
                a[l + 3] = H - C,
                a[l + 1] = G + D,
                a[l + 7] = G - D,
                l += 8
            }
            for (l = 0,
            k = 0; m > k; ++k) {
                c = a[l],
                d = a[l + 8],
                e = a[l + 16],
                f = a[l + 24],
                g = a[l + 32],
                h = a[l + 40],
                i = a[l + 48],
                j = a[l + 56];
                var I = c + j
                  , J = c - j
                  , K = d + i
                  , L = d - i
                  , M = e + h
                  , N = e - h
                  , O = f + g
                  , P = f - g
                  , Q = I + O
                  , R = I - O
                  , S = K + M
                  , T = K - M;
                a[l] = Q + S,
                a[l + 32] = Q - S;
                var U = .707106781 * (T + R);
                a[l + 16] = R + U,
                a[l + 48] = R - U,
                Q = P + N,
                S = N + L,
                T = L + J;
                var V = .382683433 * (Q - T)
                  , W = .5411961 * Q + V
                  , X = 1.306562965 * T + V
                  , Y = .707106781 * S
                  , Z = J + Y
                  , $ = J - Y;
                a[l + 40] = $ + W,
                a[l + 24] = $ - W,
                a[l + 8] = Z + X,
                a[l + 56] = Z - X,
                l++
            }
            var _;
            for (k = 0; n > k; ++k)
                _ = a[k] * b[k],
                F[k] = _ > 0 ? _ + .5 | 0 : _ - .5 | 0;
            return F
        }
        function k() {
            i(65504),
            i(16),
            h(74),
            h(70),
            h(73),
            h(70),
            h(0),
            h(1),
            h(1),
            h(0),
            i(1),
            i(1),
            h(0),
            h(0)
        }
        function l(a, b) {
            i(65472),
            i(17),
            h(8),
            i(b),
            i(a),
            h(3),
            h(1),
            h(17),
            h(0),
            h(2),
            h(17),
            h(1),
            h(3),
            h(17),
            h(1)
        }
        function m() {
            i(65499),
            i(132),
            h(0);
            for (var a = 0; 64 > a; a++)
                h(z[a]);
            h(1);
            for (var b = 0; 64 > b; b++)
                h(A[b])
        }
        function n() {
            i(65476),
            i(418),
            h(0);
            for (var a = 0; 16 > a; a++)
                h(Q[a + 1]);
            for (var b = 0; 11 >= b; b++)
                h(R[b]);
            h(16);
            for (var c = 0; 16 > c; c++)
                h(S[c + 1]);
            for (var d = 0; 161 >= d; d++)
                h(T[d]);
            h(1);
            for (var e = 0; 16 > e; e++)
                h(U[e + 1]);
            for (var f = 0; 11 >= f; f++)
                h(V[f]);
            h(17);
            for (var g = 0; 16 > g; g++)
                h(W[g + 1]);
            for (var j = 0; 161 >= j; j++)
                h(X[j])
        }
        function o() {
            i(65498),
            i(12),
            h(3),
            h(1),
            h(0),
            h(2),
            h(17),
            h(3),
            h(17),
            h(0),
            h(63),
            h(0)
        }
        function p(a, b, c, d, e) {
            var f, h = e[0], i = e[240];
            const k = 16
              , l = 63
              , m = 64;
            for (var n = j(a, b), o = 0; m > o; ++o)
                G[P[o]] = n[o];
            var p = G[0] - c;
            c = G[0],
            0 == p ? g(d[0]) : (f = 32767 + p,
            g(d[E[f]]),
            g(D[f]));
            for (var q = 63; q > 0 && 0 == G[q]; q--)
                ;
            if (0 == q)
                return g(h),
                c;
            for (var r, s = 1; q >= s; ) {
                for (var t = s; 0 == G[s] && q >= s; ++s)
                    ;
                var u = s - t;
                if (u >= k) {
                    r = u >> 4;
                    for (var v = 1; r >= v; ++v)
                        g(i);
                    u = 15 & u
                }
                f = 32767 + G[s],
                g(e[(u << 4) + E[f]]),
                g(D[f]),
                s++
            }
            return q != l && g(h),
            c
        }
        function q() {
            for (var a = String.fromCharCode, b = 0; 256 > b; b++)
                N[b] = a(b)
        }
        function r(a) {
            if (0 >= a && (a = 1),
            a > 100 && (a = 100),
            x != a) {
                var c = 0;
                c = 50 > a ? Math.floor(5e3 / a) : Math.floor(200 - 2 * a),
                b(c),
                x = a
            }
        }
        function s() {
            var b = (new Date).getTime();
            a || (a = 50),
            q(),
            d(),
            e(),
            f(),
            r(a);
            (new Date).getTime() - b
        }
        var t, u, v, w, x, y = (Math.round,
        Math.floor), z = new Array(64), A = new Array(64), B = new Array(64), C = new Array(64), D = new Array(65535), E = new Array(65535), F = new Array(64), G = new Array(64), H = [], I = 0, J = 7, K = new Array(64), L = new Array(64), M = new Array(64), N = new Array(256), O = new Array(2048), P = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], Q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], U = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], V = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], W = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], X = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
        this.encode = function(a, b) {
            var c = (new Date).getTime();
            b && r(b),
            H = new Array,
            I = 0,
            J = 7,
            i(65496),
            k(),
            m(),
            l(a.width, a.height),
            n(),
            o();
            var d = 0
              , e = 0
              , f = 0;
            I = 0,
            J = 7,
            this.encode.displayName = "_encode_";
            for (var h, j, q, s, x, y, z, A, D, E = a.data, F = a.width, G = a.height, N = 4 * F, P = 0; G > P; ) {
                for (h = 0; N > h; ) {
                    for (x = N * P + h,
                    y = x,
                    z = -1,
                    A = 0,
                    D = 0; 64 > D; D++)
                        A = D >> 3,
                        z = 4 * (7 & D),
                        y = x + A * N + z,
                        P + A >= G && (y -= N * (P + 1 + A - G)),
                        h + z >= N && (y -= h + z - N + 4),
                        j = E[y++],
                        q = E[y++],
                        s = E[y++],
                        K[D] = (O[j] + O[q + 256 >> 0] + O[s + 512 >> 0] >> 16) - 128,
                        L[D] = (O[j + 768 >> 0] + O[q + 1024 >> 0] + O[s + 1280 >> 0] >> 16) - 128,
                        M[D] = (O[j + 1280 >> 0] + O[q + 1536 >> 0] + O[s + 1792 >> 0] >> 16) - 128;
                    d = p(K, B, d, t, v),
                    e = p(L, C, e, u, w),
                    f = p(M, C, f, u, w),
                    h += 32
                }
                P += 8
            }
            if (J >= 0) {
                var Q = [];
                Q[1] = J + 1,
                Q[0] = (1 << J + 1) - 1,
                g(Q)
            }
            i(65497);
            var R = "data:image/jpeg;base64," + btoa(H.join(""));
            H = [];
            (new Date).getTime() - c;
            return R
        }
        ,
        s()
    }
    return a
}
()
  , f = function() {
    function a(a) {
        var b = a.naturalWidth
          , c = a.naturalHeight;
        if (b * c > 1048576) {
            var d = document.createElement("canvas");
            d.width = d.height = 1;
            var e = d.getContext("2d");
            return e.drawImage(a, -b + 1, 0),
            0 === e.getImageData(0, 0, 1, 1).data[3]
        }
        return !1
    }
    function b(a, b, c) {
        var d = document.createElement("canvas");
        d.width = 1,
        d.height = c;
        var e = d.getContext("2d");
        e.drawImage(a, 0, 0);
        for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g; ) {
            var j = f[4 * (i - 1) + 3];
            0 === j ? h = i : g = i,
            i = h + g >> 1
        }
        var k = i / c;
        return 0 === k ? 1 : k
    }
    function c(a, b, c) {
        var e = document.createElement("canvas");
        return d(a, e, b, c),
        e.toDataURL("image/jpeg", b.quality || .8)
    }
    function d(c, d, f, g) {
        var h = c.naturalWidth
          , i = c.naturalHeight;
        if (h + i) {
            var j = f.width
              , k = f.height
              , l = d.getContext("2d");
            l.save(),
            e(d, l, j, k, f.orientation);
            var m = a(c);
            m && (h /= 2,
            i /= 2);
            var n = 1024
              , o = document.createElement("canvas");
            o.width = o.height = n;
            for (var p = o.getContext("2d"), q = g ? b(c, h, i) : 1, r = Math.ceil(n * j / h), s = Math.ceil(n * k / i / q), t = 0, u = 0; i > t; ) {
                for (var v = 0, w = 0; h > v; )
                    p.clearRect(0, 0, n, n),
                    p.drawImage(c, -v, -t),
                    l.drawImage(o, 0, 0, n, n, w, u, r, s),
                    v += n,
                    w += r;
                t += n,
                u += s
            }
            l.restore(),
            o = p = null 
        }
    }
    function e(a, b, c, d, e) {
        switch (e) {
        case 5:
        case 6:
        case 7:
        case 8:
            a.width = d,
            a.height = c;
            break;
        default:
            a.width = c,
            a.height = d
        }
        switch (e) {
        case 2:
            b.translate(c, 0),
            b.scale(-1, 1);
            break;
        case 3:
            b.translate(c, d),
            b.rotate(Math.PI);
            break;
        case 4:
            b.translate(0, d),
            b.scale(1, -1);
            break;
        case 5:
            b.rotate(.5 * Math.PI),
            b.scale(1, -1);
            break;
        case 6:
            b.rotate(.5 * Math.PI),
            b.translate(0, -d);
            break;
        case 7:
            b.rotate(.5 * Math.PI),
            b.translate(c, -d),
            b.scale(-1, 1);
            break;
        case 8:
            b.rotate(-.5 * Math.PI),
            b.translate(-c, 0)
        }
    }
    function f(a) {
        if (window.Blob && a instanceof Blob) {
            if (!g)
                throw Error("No createObjectURL function found to create blob url");
            var b = new Image;
            b.src = g.createObjectURL(a),
            this.blob = a,
            a = b
        }
        if (!a.naturalWidth && !a.naturalHeight) {
            var c = this;
            a.onload = a.onerror = function() {
                var a = c.imageLoadListeners;
                if (a) {
                    c.imageLoadListeners = null ;
                    for (var b = 0, d = a.length; d > b; b++)
                        a[b]()
                }
            }
            ,
            this.imageLoadListeners = []
        }
        this.srcImage = a
    }
    var g = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null ;
    return f.prototype.render = function(a, b, e) {
        if (this.imageLoadListeners) {
            var f = this;
            return void this.imageLoadListeners.push(function() {
                f.render(a, b, e)
            }
            )
        }
        b = b || {};
        var h = this.srcImage.naturalWidth
          , i = this.srcImage.naturalHeight
          , j = b.width
          , k = b.height
          , l = b.maxWidth
          , m = b.maxHeight
          , n = !this.blob || "image/jpeg" === this.blob.type;
        j && !k ? k = i * j / h << 0 : k && !j ? j = h * k / i << 0 : (j = h,
        k = i),
        l && j > l && (j = l,
        k = i * j / h << 0),
        m && k > m && (k = m,
        j = h * k / i << 0);
        var o = {
            width: j,
            height: k
        };
        for (var p in b)
            o[p] = b[p];
        var q = a.tagName.toLowerCase();
        "img" === q ? a.src = c(this.srcImage, o, n) : "canvas" === q && d(this.srcImage, a, o, n),
        "function" == typeof this.onrender && this.onrender(a),
        e && e(),
        this.blob && (this.blob = null ,
        g.revokeObjectURL(this.srcImage.src))
    }
    ,
    f
}
();