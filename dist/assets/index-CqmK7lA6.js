(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function f0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xu = { exports: {} },
  rl = {},
  Gu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  d0 = Symbol.for("react.portal"),
  p0 = Symbol.for("react.fragment"),
  m0 = Symbol.for("react.strict_mode"),
  h0 = Symbol.for("react.profiler"),
  v0 = Symbol.for("react.provider"),
  g0 = Symbol.for("react.context"),
  y0 = Symbol.for("react.forward_ref"),
  w0 = Symbol.for("react.suspense"),
  x0 = Symbol.for("react.memo"),
  C0 = Symbol.for("react.lazy"),
  $o = Symbol.iterator;
function k0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($o && e[$o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qu = Object.assign,
  bu = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bu),
    (this.updater = n || Ju);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function es() {}
es.prototype = on.prototype;
function Vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bu),
    (this.updater = n || Ju);
}
var Hi = (Vi.prototype = new es());
Hi.constructor = Vi;
qu(Hi, on.prototype);
Hi.isPureReactComponent = !0;
var Uo = Array.isArray,
  ts = Object.prototype.hasOwnProperty,
  Ai = { current: null },
  ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ts.call(t, r) && !ns.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ai.current,
  };
}
function S0(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function E0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bo = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? E0("" + e.key)
    : t.toString(36);
}
function Cr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case d0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + kl(o, 0) : r),
      Uo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bo, "$&/") + "/"),
          Cr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Wi(l) &&
            (l = S0(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Uo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + kl(i, u);
      o += Cr(i, t, n, s, l);
    }
  else if (((s = k0(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + kl(i, u++)), (o += Cr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function N0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  kr = { transition: null },
  _0 = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Ai,
  };
T.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = on;
T.Fragment = p0;
T.Profiler = h0;
T.PureComponent = Vi;
T.StrictMode = m0;
T.Suspense = w0;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = qu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ai.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ts.call(t, s) &&
        !ns.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: g0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: v0, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = rs;
T.createFactory = function (e) {
  var t = rs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: y0, render: e };
};
T.isValidElement = Wi;
T.lazy = function (e) {
  return { $$typeof: C0, _payload: { _status: -1, _result: e }, _init: N0 };
};
T.memo = function (e, t) {
  return { $$typeof: x0, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.2.0";
Gu.exports = T;
var Mn = Gu.exports;
const j0 = f0(Mn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L0 = Mn,
  P0 = Symbol.for("react.element"),
  z0 = Symbol.for("react.fragment"),
  T0 = Object.prototype.hasOwnProperty,
  M0 = L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  F0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) T0.call(t, r) && !F0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: P0,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: M0.current,
  };
}
rl.Fragment = z0;
rl.jsx = ls;
rl.jsxs = ls;
Xu.exports = rl;
var p = Xu.exports,
  Zl = {},
  is = { exports: {} },
  we = {},
  os = { exports: {} },
  us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, P) {
    var z = E.length;
    E.push(P);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        G = E[Q];
      if (0 < l(G, P)) (E[Q] = P), (E[z] = G), (z = Q);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      z = E.pop();
    if (z !== P) {
      E[0] = z;
      e: for (var Q = 0, G = E.length, tr = G >>> 1; Q < tr; ) {
        var gt = 2 * (Q + 1) - 1,
          Cl = E[gt],
          yt = gt + 1,
          nr = E[yt];
        if (0 > l(Cl, z))
          yt < G && 0 > l(nr, Cl)
            ? ((E[Q] = nr), (E[yt] = z), (Q = yt))
            : ((E[Q] = Cl), (E[gt] = z), (Q = gt));
        else if (yt < G && 0 > l(nr, z)) (E[Q] = nr), (E[yt] = z), (Q = yt);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var z = E.sortIndex - P.sortIndex;
    return z !== 0 ? z : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    C = !1,
    $ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= E)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function g(E) {
    if (((C = !1), d(E), !x))
      if (n(s) !== null) (x = !0), wl(S);
      else {
        var P = n(c);
        P !== null && xl(g, P.startTime - E);
      }
  }
  function S(E, P) {
    (x = !1), C && ((C = !1), f(j), (j = -1)), (w = !0);
    var z = m;
    try {
      for (
        d(P), h = n(s);
        h !== null && (!(h.expirationTime > P) || (E && !je()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = Q(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(s) && r(s),
            d(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var tr = !0;
      else {
        var gt = n(c);
        gt !== null && xl(g, gt.startTime - P), (tr = !1);
      }
      return tr;
    } finally {
      (h = null), (m = z), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    j = -1,
    W = 5,
    M = -1;
  function je() {
    return !(e.unstable_now() - M < W);
  }
  function an() {
    if (_ !== null) {
      var E = e.unstable_now();
      M = E;
      var P = !0;
      try {
        P = _(!0, E);
      } finally {
        P ? cn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Io = new MessageChannel(),
      c0 = Io.port2;
    (Io.port1.onmessage = an),
      (cn = function () {
        c0.postMessage(null);
      });
  } else
    cn = function () {
      $(an, 0);
    };
  function wl(E) {
    (_ = E), N || ((N = !0), cn());
  }
  function xl(E, P) {
    j = $(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), wl(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return E();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = m;
      m = E;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = {
          id: v++,
          callback: P,
          priorityLevel: E,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > Q
          ? ((E.sortIndex = z),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (C ? (f(j), (j = -1)) : (C = !0), xl(g, z - Q)))
          : ((E.sortIndex = G), t(s, E), x || w || ((x = !0), wl(S))),
        E
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (E) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return E.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(us);
os.exports = us;
var R0 = os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Mn,
  ye = R0;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var as = new Set(),
  Fn = {};
function Tt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) as.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  O0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vo = {},
  Ho = {};
function D0(e) {
  return Xl.call(Ho, e)
    ? !0
    : Xl.call(Vo, e)
    ? !1
    : O0.test(e)
    ? (Ho[e] = !0)
    : ((Vo[e] = !0), !1);
}
function I0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $0(e, t, n, r) {
  if (t === null || typeof t > "u" || I0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Yi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Yi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Yi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($0(t, n, l, r) && (n = null),
    r || l === null
      ? D0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = ss.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  cs = Symbol.for("react.provider"),
  fs = Symbol.for("react.context"),
  Xi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ds = Symbol.for("react.offscreen"),
  Ao = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ao && e[Ao]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Sl;
function wn(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var El = !1;
function Nl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function U0(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Rt:
      return "Portal";
    case Gl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fs:
        return (e.displayName || "Context") + ".Consumer";
      case cs:
        return (e._context.displayName || "Context") + ".Provider";
      case Xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return bl(e(t));
        } catch {}
    }
  return null;
}
function B0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ps(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function V0(e) {
  var t = ps(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = V0(e));
}
function ms(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ps(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hs(e, t) {
  (t = t.checked), t != null && Ki(e, "checked", t, !1);
}
function ti(e, t) {
  hs(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ni(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ni(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dt(n) };
}
function vs(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ko(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  ys = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  H0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function (e) {
  H0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sn[t] = Sn[e]);
  });
});
function ws(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sn.hasOwnProperty(e) && Sn[e])
    ? ("" + t).trim()
    : t + "px";
}
function xs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ws(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var A0 = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ii(e, t) {
  if (t) {
    if (A0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function oi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Kt = null,
  Zt = null;
function Zo(e) {
  if ((e = bn(e))) {
    if (typeof si != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = sl(t)), si(e.stateNode, e.type, t));
  }
}
function Cs(e) {
  Kt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Kt = e);
}
function ks() {
  if (Kt) {
    var e = Kt,
      t = Zt;
    if (((Zt = Kt = null), Zo(e), t)) for (e = 0; e < t.length; e++) Zo(t[e]);
  }
}
function Ss(e, t) {
  return e(t);
}
function Es() {}
var _l = !1;
function Ns(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return Ss(e, t, n);
  } finally {
    (_l = !1), (Kt !== null || Zt !== null) && (Es(), ks());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ai = !1;
if (Ye)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    ai = !1;
  }
function W0(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1,
  Rr = null,
  Or = !1,
  ci = null,
  Q0 = {
    onError: function (e) {
      (En = !0), (Rr = e);
    },
  };
function Y0(e, t, n, r, l, i, o, u, s) {
  (En = !1), (Rr = null), W0.apply(Q0, arguments);
}
function K0(e, t, n, r, l, i, o, u, s) {
  if ((Y0.apply(this, arguments), En)) {
    if (En) {
      var c = Rr;
      (En = !1), (Rr = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (ci = c));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (Mt(e) !== e) throw Error(y(188));
}
function Z0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Xo(l), e;
        if (i === r) return Xo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function js(e) {
  return (e = Z0(e)), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = ye.unstable_scheduleCallback,
  Go = ye.unstable_cancelCallback,
  X0 = ye.unstable_shouldYield,
  G0 = ye.unstable_requestPaint,
  Y = ye.unstable_now,
  J0 = ye.unstable_getCurrentPriorityLevel,
  qi = ye.unstable_ImmediatePriority,
  zs = ye.unstable_UserBlockingPriority,
  Dr = ye.unstable_NormalPriority,
  q0 = ye.unstable_LowPriority,
  Ts = ye.unstable_IdlePriority,
  ll = null,
  $e = null;
function b0(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : n2,
  e2 = Math.log,
  t2 = Math.LN2;
function n2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e2(e) / t2) | 0)) | 0;
}
var ur = 64,
  sr = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Cn(u)) : ((i &= o), i !== 0 && (r = Cn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Cn(o)) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function r2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function l2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Me(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = r2(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ms() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function i2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function bi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rs,
  eo,
  Os,
  Ds,
  Is,
  di = !1,
  ar = [],
  lt = null,
  it = null,
  ot = null,
  Dn = new Map(),
  In = new Map(),
  et = [],
  o2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function u2(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Dn.set(i, pn(Dn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), In.set(i, pn(In.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function $s(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _s(n)), t !== null)) {
          (e.blockedOn = t),
            Is(e.priority, function () {
              Os(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ui = r), n.target.dispatchEvent(r), (ui = null);
    } else return (t = bn(n)), t !== null && eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qo(e, t, n) {
  Sr(e) && n.delete(t);
}
function s2() {
  (di = !1),
    lt !== null && Sr(lt) && (lt = null),
    it !== null && Sr(it) && (it = null),
    ot !== null && Sr(ot) && (ot = null),
    Dn.forEach(qo),
    In.forEach(qo);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, s2)));
}
function $n(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ar.length) {
    mn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && mn(lt, e),
      it !== null && mn(it, e),
      ot !== null && mn(ot, e),
      Dn.forEach(t),
      In.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    $s(n), n.blockedOn === null && et.shift();
}
var Xt = Ge.ReactCurrentBatchConfig,
  $r = !0;
function a2(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), to(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function c2(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), to(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function to(e, t, n, r) {
  if ($r) {
    var l = pi(e, t, n, r);
    if (l === null) Il(e, t, r, Ur, n), Jo(e, r);
    else if (u2(l, e, t, n, r)) r.stopPropagation();
    else if ((Jo(e, r), t & 4 && -1 < o2.indexOf(e))) {
      for (; l !== null; ) {
        var i = bn(l);
        if (
          (i !== null && Rs(i),
          (i = pi(e, t, n, r)),
          i === null && Il(e, t, r, Ur, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Ur = null;
function pi(e, t, n, r) {
  if (((Ur = null), (e = Ji(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _s(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ur = e), null;
}
function Us(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (J0()) {
        case qi:
          return 1;
        case zs:
          return 4;
        case Dr:
        case q0:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  no = null,
  Er = null;
function Bs() {
  if (Er) return Er;
  var e,
    t = no,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function bo() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cr
        : bo),
      (this.isPropagationStopped = bo),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = xe(un),
  qn = H({}, un, { view: 0, detail: 0 }),
  f2 = xe(qn),
  Ll,
  Pl,
  hn,
  il = H({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Ll = e.screenX - hn.screenX), (Pl = e.screenY - hn.screenY))
              : (Pl = Ll = 0),
            (hn = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  eu = xe(il),
  d2 = H({}, il, { dataTransfer: 0 }),
  p2 = xe(d2),
  m2 = H({}, qn, { relatedTarget: 0 }),
  zl = xe(m2),
  h2 = H({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v2 = xe(h2),
  g2 = H({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  y2 = xe(g2),
  w2 = H({}, un, { data: 0 }),
  tu = xe(w2),
  x2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  C2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  k2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function S2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = k2[e]) ? !!t[e] : !1;
}
function lo() {
  return S2;
}
var E2 = H({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = x2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? C2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  N2 = xe(E2),
  _2 = H({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = xe(_2),
  j2 = H({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  L2 = xe(j2),
  P2 = H({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z2 = xe(P2),
  T2 = H({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  M2 = xe(T2),
  F2 = [9, 13, 27, 32],
  io = Ye && "CompositionEvent" in window,
  Nn = null;
Ye && "documentMode" in document && (Nn = document.documentMode);
var R2 = Ye && "TextEvent" in window && !Nn,
  Vs = Ye && (!io || (Nn && 8 < Nn && 11 >= Nn)),
  ru = " ",
  lu = !1;
function Hs(e, t) {
  switch (e) {
    case "keyup":
      return F2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function As(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function O2(e, t) {
  switch (e) {
    case "compositionend":
      return As(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ru);
    case "textInput":
      return (e = t.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function D2(e, t) {
  if (Dt)
    return e === "compositionend" || (!io && Hs(e, t))
      ? ((e = Bs()), (Er = no = nt = null), (Dt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var I2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!I2[e.type] : t === "textarea";
}
function Ws(e, t, n, r) {
  Cs(r),
    (t = Br(t, "onChange")),
    0 < t.length &&
      ((n = new ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  Un = null;
function $2(e) {
  ta(e, 0);
}
function ol(e) {
  var t = Ut(e);
  if (ms(t)) return e;
}
function U2(e, t) {
  if (e === "change") return t;
}
var Qs = !1;
if (Ye) {
  var Tl;
  if (Ye) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"),
        (Ml = typeof ou.oninput == "function");
    }
    Tl = Ml;
  } else Tl = !1;
  Qs = Tl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  _n && (_n.detachEvent("onpropertychange", Ys), (Un = _n = null));
}
function Ys(e) {
  if (e.propertyName === "value" && ol(Un)) {
    var t = [];
    Ws(t, Un, e, Ji(e)), Ns($2, t);
  }
}
function B2(e, t, n) {
  e === "focusin"
    ? (uu(), (_n = t), (Un = n), _n.attachEvent("onpropertychange", Ys))
    : e === "focusout" && uu();
}
function V2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Un);
}
function H2(e, t) {
  if (e === "click") return ol(t);
}
function A2(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function W2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == "function" ? Object.is : W2;
function Bn(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Xl.call(t, l) || !Re(e[l], t[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = su(n);
  }
}
function Ks(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ks(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zs() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Q2(e) {
  var t = Zs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ks(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = au(n, i));
        var o = au(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y2 = Ye && "documentMode" in document && 11 >= document.documentMode,
  It = null,
  mi = null,
  jn = null,
  hi = !1;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hi ||
    It == null ||
    It !== Fr(r) ||
    ((r = It),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jn && Bn(jn, r)) ||
      ((jn = r),
      (r = Br(mi, "onSelect")),
      0 < r.length &&
        ((t = new ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = It))));
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $t = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Fl = {},
  Xs = {};
Ye &&
  ((Xs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  "TransitionEvent" in window || delete $t.transitionend.transition);
function ul(e) {
  if (Fl[e]) return Fl[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return (Fl[e] = t[n]);
  return e;
}
var Gs = ul("animationend"),
  Js = ul("animationiteration"),
  qs = ul("animationstart"),
  bs = ul("transitionend"),
  ea = new Map(),
  fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  ea.set(e, t), Tt(t, [e]);
}
for (var Rl = 0; Rl < fu.length; Rl++) {
  var Ol = fu[Rl],
    K2 = Ol.toLowerCase(),
    Z2 = Ol[0].toUpperCase() + Ol.slice(1);
  mt(K2, "on" + Z2);
}
mt(Gs, "onAnimationEnd");
mt(Js, "onAnimationIteration");
mt(qs, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(bs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), K0(r, t, void 0, e), (e.currentTarget = null);
}
function ta(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          du(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, c), (i = s);
        }
    }
  }
  if (Or) throw ((e = ci), (Or = !1), (ci = null), e);
}
function D(e, t) {
  var n = t[xi];
  n === void 0 && (n = t[xi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (na(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), na(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      as.forEach(function (n) {
        n !== "selectionchange" && (X2.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Dl("selectionchange", !1, t));
  }
}
function na(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var l = a2;
      break;
    case 4:
      l = c2;
      break;
    default:
      l = to;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ns(function () {
    var c = i,
      v = Ji(n),
      h = [];
    e: {
      var m = ea.get(e);
      if (m !== void 0) {
        var w = ro,
          x = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = N2;
            break;
          case "focusin":
            (x = "focus"), (w = zl);
            break;
          case "focusout":
            (x = "blur"), (w = zl);
            break;
          case "beforeblur":
          case "afterblur":
            w = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = p2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = L2;
            break;
          case Gs:
          case Js:
          case qs:
            w = v2;
            break;
          case bs:
            w = z2;
            break;
          case "scroll":
            w = f2;
            break;
          case "wheel":
            w = M2;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = y2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = nu;
        }
        var C = (t & 4) !== 0,
          $ = !C && e === "scroll",
          f = C ? (m !== null ? m + "Capture" : null) : m;
        C = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = On(a, f)), g != null && C.push(Hn(a, g, d)))),
            $)
          )
            break;
          a = a.return;
        }
        0 < C.length &&
          ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ui &&
            (x = n.relatedTarget || n.fromElement) &&
            (Ct(x) || x[Ke]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? Ct(x) : null),
              x !== null &&
                (($ = Mt(x)), x !== $ || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((C = eu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = nu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            ($ = w == null ? m : Ut(w)),
            (d = x == null ? m : Ut(x)),
            (m = new C(g, a + "leave", w, n, v)),
            (m.target = $),
            (m.relatedTarget = d),
            (g = null),
            Ct(v) === c &&
              ((C = new C(f, a + "enter", x, n, v)),
              (C.target = d),
              (C.relatedTarget = $),
              (g = C)),
            ($ = g),
            w && x)
          )
            t: {
              for (C = w, f = x, a = 0, d = C; d; d = Ft(d)) a++;
              for (d = 0, g = f; g; g = Ft(g)) d++;
              for (; 0 < a - d; ) (C = Ft(C)), a--;
              for (; 0 < d - a; ) (f = Ft(f)), d--;
              for (; a--; ) {
                if (C === f || (f !== null && C === f.alternate)) break t;
                (C = Ft(C)), (f = Ft(f));
              }
              C = null;
            }
          else C = null;
          w !== null && pu(h, m, w, C, !1),
            x !== null && $ !== null && pu(h, $, x, C, !0);
        }
      }
      e: {
        if (
          ((m = c ? Ut(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var S = U2;
        else if (iu(m))
          if (Qs) S = A2;
          else {
            S = V2;
            var N = B2;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = H2);
        if (S && (S = S(e, c))) {
          Ws(h, S, n, v);
          break e;
        }
        N && N(e, m, c),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ni(m, "number", m.value);
      }
      switch (((N = c ? Ut(c) : window), e)) {
        case "focusin":
          (iu(N) || N.contentEditable === "true") &&
            ((It = N), (mi = c), (jn = null));
          break;
        case "focusout":
          jn = mi = It = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), cu(h, n, v);
          break;
        case "selectionchange":
          if (Y2) break;
        case "keydown":
        case "keyup":
          cu(h, n, v);
      }
      var _;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Dt
          ? Hs(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Vs &&
          n.locale !== "ko" &&
          (Dt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Dt && (_ = Bs())
            : ((nt = v),
              (no = "value" in nt ? nt.value : nt.textContent),
              (Dt = !0))),
        (N = Br(c, j)),
        0 < N.length &&
          ((j = new tu(j, e, null, n, v)),
          h.push({ event: j, listeners: N }),
          _ ? (j.data = _) : ((_ = As(n)), _ !== null && (j.data = _)))),
        (_ = R2 ? O2(e, n) : D2(e, n)) &&
          ((c = Br(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new tu("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    ta(h, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = On(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = On(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = On(n, i)), s != null && o.unshift(Hn(n, s, u)))
        : l || ((s = On(n, i)), s != null && o.push(Hn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var G2 = /\r\n?/g,
  J2 = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      G2,
      `
`
    )
    .replace(J2, "");
}
function pr(e, t, n) {
  if (((t = mu(t)), mu(e) !== t && n)) throw Error(y(425));
}
function Vr() {}
var vi = null,
  gi = null;
function yi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  q2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  b2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(ec);
        }
      : wi;
function ec(e) {
  setTimeout(function () {
    throw e;
  });
}
function $l(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + sn,
  An = "__reactProps$" + sn,
  Ke = "__reactContainer$" + sn,
  xi = "__reactEvents$" + sn,
  tc = "__reactListeners$" + sn,
  nc = "__reactHandles$" + sn;
function Ct(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vu(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[Ie] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[An] || null;
}
var Ci = [],
  Bt = -1;
function ht(e) {
  return { current: e };
}
function I(e) {
  0 > Bt || ((e.current = Ci[Bt]), (Ci[Bt] = null), Bt--);
}
function O(e, t) {
  Bt++, (Ci[Bt] = e.current), (e.current = t);
}
var pt = {},
  ie = ht(pt),
  de = ht(!1),
  _t = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Hr() {
  I(de), I(ie);
}
function gu(e, t, n) {
  if (ie.current !== pt) throw Error(y(168));
  O(ie, t), O(de, n);
}
function ra(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, B0(e) || "Unknown", l));
  return H({}, n, r);
}
function Ar(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (_t = ie.current),
    O(ie, e),
    O(de, de.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ra(e, t, _t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(de),
      I(ie),
      O(ie, e))
    : I(de),
    O(de, n);
}
var Ve = null,
  al = !1,
  Ul = !1;
function la(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function rc(e) {
  (al = !0), la(e);
}
function vt() {
  if (!Ul && Ve !== null) {
    Ul = !0;
    var e = 0,
      t = R;
    try {
      var n = Ve;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (al = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ps(qi, vt), l);
    } finally {
      (R = t), (Ul = !1);
    }
  }
  return null;
}
var Vt = [],
  Ht = 0,
  Wr = null,
  Qr = 0,
  Ce = [],
  ke = 0,
  jt = null,
  He = 1,
  Ae = "";
function wt(e, t) {
  (Vt[Ht++] = Qr), (Vt[Ht++] = Wr), (Wr = e), (Qr = t);
}
function ia(e, t, n) {
  (Ce[ke++] = He), (Ce[ke++] = Ae), (Ce[ke++] = jt), (jt = e);
  var r = He;
  e = Ae;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Ae = i + e);
  } else (He = (1 << i) | (n << l) | r), (Ae = e);
}
function uo(e) {
  e.return !== null && (wt(e, 1), ia(e, 1, 0));
}
function so(e) {
  for (; e === Wr; )
    (Wr = Vt[--Ht]), (Vt[Ht] = null), (Qr = Vt[--Ht]), (Vt[Ht] = null);
  for (; e === jt; )
    (jt = Ce[--ke]),
      (Ce[ke] = null),
      (Ae = Ce[--ke]),
      (Ce[ke] = null),
      (He = Ce[--ke]),
      (Ce[ke] = null);
}
var ge = null,
  ve = null,
  U = !1,
  Te = null;
function oa(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ve = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jt !== null ? { id: He, overflow: Ae } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Si(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!wu(e, t)) {
        if (ki(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ge;
        t && wu(e, t)
          ? oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (ki(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function mr(e) {
  if (e !== ge) return !1;
  if (!U) return xu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (ki(e)) throw (ua(), Error(y(418)));
    for (; t; ) oa(e, t), (t = ut(t.nextSibling));
  }
  if ((xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ge ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ua() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function en() {
  (ve = ge = null), (U = !1);
}
function ao(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var lc = Ge.ReactCurrentBatchConfig;
function Pe(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Yr = ht(null),
  Kr = null,
  At = null,
  co = null;
function fo() {
  co = At = Kr = null;
}
function po(e) {
  var t = Yr.current;
  I(Yr), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gt(e, t) {
  (Kr = e),
    (co = At = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), At === null)) {
      if (Kr === null) throw Error(y(308));
      (At = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else At = At.next = e;
  return t;
}
var kt = null;
function mo(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function sa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function aa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), mo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function _r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
function Cu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            C = u;
          switch (((m = t), (w = n), C.tag)) {
            case 1:
              if (((x = C.payload), typeof x == "function")) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = C.payload),
                (m = typeof x == "function" ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = H({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Pt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ca = new ss.Component().refs;
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      i = We(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Fe(t, e, l, r), _r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Fe(t, e, l, r), _r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ct(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Fe(t, e, r, n), _r(t, e, r));
  },
};
function Su(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  );
}
function fa(e, t, n) {
  var r = !1,
    l = pt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(t) ? _t : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Eu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function _i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ca), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(t) ? _t : ie.current), (l.context = bt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === ca && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function da(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ft(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var S = d.type;
    return S === Ot
      ? v(f, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === qe &&
            Nu(S) === a.type))
      ? ((g = l(a, d.props)), (g.ref = vn(f, a, d)), (g.return = f), g)
      : ((g = Mr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = vn(f, a, d)),
        (g.return = f),
        g);
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, g, S) {
    return a === null || a.tag !== 7
      ? ((a = Nt(d, f.mode, g, S)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = Mr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case qe:
          var g = a._init;
          return h(f, g(a._payload), d);
      }
      if (xn(a) || fn(a))
        return (a = Nt(a, f.mode, d, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function m(f, a, d, g) {
    var S = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return S !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === S ? s(f, a, d, g) : null;
        case Rt:
          return d.key === S ? c(f, a, d, g) : null;
        case qe:
          return (S = d._init), m(f, a, S(d._payload), g);
      }
      if (xn(d) || fn(d)) return S !== null ? null : v(f, a, d, g, null);
      hr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(a, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case lr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, S);
        case Rt:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, S);
        case qe:
          var N = g._init;
          return w(f, a, d, N(g._payload), S);
      }
      if (xn(g) || fn(g)) return (f = f.get(d) || null), v(a, f, g, S, null);
      hr(a, g);
    }
    return null;
  }
  function x(f, a, d, g) {
    for (
      var S = null, N = null, _ = a, j = (a = 0), W = null;
      _ !== null && j < d.length;
      j++
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var M = m(f, _, d[j], g);
      if (M === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && M.alternate === null && t(f, _),
        (a = i(M, a, j)),
        N === null ? (S = M) : (N.sibling = M),
        (N = M),
        (_ = W);
    }
    if (j === d.length) return n(f, _), U && wt(f, j), S;
    if (_ === null) {
      for (; j < d.length; j++)
        (_ = h(f, d[j], g)),
          _ !== null &&
            ((a = i(_, a, j)), N === null ? (S = _) : (N.sibling = _), (N = _));
      return U && wt(f, j), S;
    }
    for (_ = r(f, _); j < d.length; j++)
      (W = w(_, f, j, d[j], g)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? j : W.key),
          (a = i(W, a, j)),
          N === null ? (S = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        _.forEach(function (je) {
          return t(f, je);
        }),
      U && wt(f, j),
      S
    );
  }
  function C(f, a, d, g) {
    var S = fn(d);
    if (typeof S != "function") throw Error(y(150));
    if (((d = S.call(d)), d == null)) throw Error(y(151));
    for (
      var N = (S = null), _ = a, j = (a = 0), W = null, M = d.next();
      _ !== null && !M.done;
      j++, M = d.next()
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var je = m(f, _, M.value, g);
      if (je === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && je.alternate === null && t(f, _),
        (a = i(je, a, j)),
        N === null ? (S = je) : (N.sibling = je),
        (N = je),
        (_ = W);
    }
    if (M.done) return n(f, _), U && wt(f, j), S;
    if (_ === null) {
      for (; !M.done; j++, M = d.next())
        (M = h(f, M.value, g)),
          M !== null &&
            ((a = i(M, a, j)), N === null ? (S = M) : (N.sibling = M), (N = M));
      return U && wt(f, j), S;
    }
    for (_ = r(f, _); !M.done; j++, M = d.next())
      (M = w(_, f, j, M.value, g)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? j : M.key),
          (a = i(M, a, j)),
          N === null ? (S = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        _.forEach(function (an) {
          return t(f, an);
        }),
      U && wt(f, j),
      S
    );
  }
  function $(f, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var S = d.key, N = a; N !== null; ) {
              if (N.key === S) {
                if (((S = d.type), S === Ot)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === qe &&
                    Nu(S) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = vn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Ot
              ? ((a = Nt(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Mr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = vn(f, a, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Rt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case qe:
          return (N = d._init), $(f, a, N(d._payload), g);
      }
      if (xn(d)) return x(f, a, d, g);
      if (fn(d)) return C(f, a, d, g);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, g)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return $;
}
var tn = da(!0),
  pa = da(!1),
  er = {},
  Ue = ht(er),
  Wn = ht(er),
  Qn = ht(er);
function St(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function vo(e, t) {
  switch ((O(Qn, t), O(Wn, e), O(Ue, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = li(t, e));
  }
  I(Ue), O(Ue, t);
}
function nn() {
  I(Ue), I(Wn), I(Qn);
}
function ma(e) {
  St(Qn.current);
  var t = St(Ue.current),
    n = li(t, e.type);
  t !== n && (O(Wn, e), O(Ue, n));
}
function go(e) {
  Wn.current === e && (I(Ue), I(Wn));
}
var B = ht(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bl = [];
function yo() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var jr = Ge.ReactCurrentDispatcher,
  Vl = Ge.ReactCurrentBatchConfig,
  Lt = 0,
  V = null,
  Z = null,
  J = null,
  Gr = !1,
  Ln = !1,
  Yn = 0,
  ic = 0;
function ne() {
  throw Error(y(321));
}
function wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Re(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, r, l, i) {
  if (
    ((Lt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jr.current = e === null || e.memoizedState === null ? ac : cc),
    (e = n(r, l)),
    Ln)
  ) {
    i = 0;
    do {
      if (((Ln = !1), (Yn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = Z = null),
        (t.updateQueue = null),
        (jr.current = fc),
        (e = n(r, l));
    } while (Ln);
  }
  if (
    ((jr.current = Jr),
    (t = Z !== null && Z.next !== null),
    (Lt = 0),
    (J = Z = V = null),
    (Gr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Co() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function _e() {
  if (Z === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) (J = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Lt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (V.lanes |= v),
          (Pt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Re(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ha() {}
function va(e, t) {
  var n = V,
    r = _e(),
    l = t(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    ko(wa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zn(9, ya.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Lt & 30 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ya(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), xa(t) && Ca(e);
}
function wa(e, t, n) {
  return n(function () {
    xa(t) && Ca(e);
  });
}
function xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function Ca(e) {
  var t = Ze(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function _u(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sc.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ka() {
  return _e().memoizedState;
}
function Lr(e, t, n, r) {
  var l = De();
  (V.flags |= e),
    (l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Zn(1 | t, n, i, r));
}
function ju(e, t) {
  return Lr(8390656, 8, e, t);
}
function ko(e, t) {
  return fl(2048, 8, e, t);
}
function Sa(e, t) {
  return fl(4, 2, e, t);
}
function Ea(e, t) {
  return fl(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _a(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, Na.bind(null, t, e), n)
  );
}
function So() {}
function ja(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function La(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return Lt & 21
    ? (Re(n, t) || ((n = Ms()), (V.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function oc(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Vl.transition = r);
  }
}
function za() {
  return _e().memoizedState;
}
function uc(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ta(e))
  )
    Ma(t, n);
  else if (((n = sa(e, t, n, r)), n !== null)) {
    var l = ue();
    Fe(n, e, r, l), Fa(n, t, r);
  }
}
function sc(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) Ma(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), mo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = sa(e, t, l, r)),
      n !== null && ((l = ue()), Fe(n, e, r, l), Fa(n, t, r));
  }
}
function Ta(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Ma(e, t) {
  Ln = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
var Jr = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ac = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, Na.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = uc.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _u,
    useDebugValue: So,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = _u(!1),
        t = e[0];
      return (e = oc.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = De();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Lt & 30 || ga(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ju(wa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zn(9, ya.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = q.identifierPrefix;
      if (U) {
        var n = Ae,
          r = He;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ic++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cc = {
    readContext: Ne,
    useCallback: ja,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: _a,
    useInsertionEffect: Sa,
    useLayoutEffect: Ea,
    useMemo: La,
    useReducer: Hl,
    useRef: ka,
    useState: function () {
      return Hl(Kn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = _e();
      return Pa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: za,
    unstable_isNewReconciler: !1,
  },
  fc = {
    readContext: Ne,
    useCallback: ja,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: _a,
    useInsertionEffect: Sa,
    useLayoutEffect: Ea,
    useMemo: La,
    useReducer: Al,
    useRef: ka,
    useState: function () {
      return Al(Kn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = _e();
      return Z === null ? (t.memoizedState = e) : Pa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: za,
    unstable_isNewReconciler: !1,
  };
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += U0(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dc = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      br || ((br = !0), (Ii = r)), ji(e, t);
    }),
    n
  );
}
function Oa(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ji(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dc();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = _c.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pc = Ge.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? pa(t, null, n, r) : tn(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Gt(t, l),
    (r = xo(e, t, n, r, i, l)),
    (n = Co()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && uo(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Mu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !To(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Da(e, t, i, r, l))
      : ((e = Mr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Li(e, t, n, r, l);
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Qt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Qt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(Qt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Qt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function $a(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Li(e, t, n, r, l) {
  var i = pe(n) ? _t : ie.current;
  return (
    (i = bt(t, i)),
    Gt(t, l),
    (n = xo(e, t, n, r, i, l)),
    (r = Co()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && uo(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Ar(t);
  } else i = !1;
  if ((Gt(t, l), t.stateNode === null))
    Pr(e, t), fa(t, n, r), _i(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(n) ? _t : ie.current), (c = bt(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Eu(t, o, r, c)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || de.current || be
        ? (typeof v == "function" && (Ni(t, n, v, r), (s = t.memoizedState)),
          (u = be || Su(t, n, u, r, m, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      aa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Pe(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? _t : ie.current), (s = bt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Eu(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      Zr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || de.current || be
      ? (typeof w == "function" && (Ni(t, n, w, r), (x = t.memoizedState)),
        (c = be || Su(t, n, c, r, m, x, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, i, l);
}
function Pi(e, t, n, r, l, i) {
  $a(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && yu(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (pc.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && yu(t, n, !0),
    t.child
  );
}
function Ua(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gu(e, t.context, !1),
    vo(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
  return en(), ao(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(B, l & 1),
    e === null)
  )
    return (
      Si(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = zi),
              e)
            : Eo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return mc(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ft(u, i)) : ((i = Nt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ti(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ft(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eo(e, t) {
  return (
    (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vr(e, t, n, r) {
  return (
    r !== null && ao(r),
    tn(t, e.child, null, n),
    (e = Eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mc(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(y(422)))), vr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, o),
        (t.child.memoizedState = Ti(o)),
        (t.memoizedState = zi),
        i);
  if (!(t.mode & 1)) return vr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Wl(i, r, void 0)), vr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), Fe(r, e, l, -1));
    }
    return zo(), (r = Wl(Error(y(421)))), vr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jc.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = ut(l.nextSibling)),
      (ge = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((Ce[ke++] = He),
        (Ce[ke++] = Ae),
        (Ce[ke++] = jt),
        (He = e.id),
        (Ae = e.overflow),
        (jt = t)),
      (t = Eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ou(e, n, t);
        else if (e.tag === 19) Ou(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ql(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ql(t, !0, n, null, i);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hc(e, t, n) {
  switch (t.tag) {
    case 3:
      Ua(t), en();
      break;
    case 5:
      ma(t);
      break;
    case 1:
      pe(t.type) && Ar(t);
      break;
    case 4:
      vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ba(e, t, n)
          : (O(B, B.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      O(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Va(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ia(e, t, n);
  }
  return Xe(e, t, n);
}
var Ha, Mi, Aa, Wa;
Ha = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Mi = function () {};
Aa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), St(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    ii(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Fn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Fn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && D("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vc(e, t, n) {
  var r = t.pendingProps;
  switch ((so(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Hr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        I(de),
        I(ie),
        yo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Bi(Te), (Te = null)))),
        Mi(e, t),
        re(t),
        null
      );
    case 5:
      go(t);
      var l = St(Qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Aa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = St(Ue.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ie] = t), (r[An] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) D(kn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Wo(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Yo(r, i), D("invalid", r);
          }
          ii(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Fn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              ir(r), Qo(r, i, !0);
              break;
            case "textarea":
              ir(r), Ko(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ie] = t),
            (e[An] = r),
            Ha(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = oi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) D(kn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Wo(e, r), (l = ei(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Yo(e, r), (l = ri(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ii(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? xs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ys(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Fn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && Ki(e, i, s, o));
              }
            switch (n) {
              case "input":
                ir(e), Qo(e, r, !1);
                break;
              case "textarea":
                ir(e), Ko(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = St(Qn.current)), St(Ue.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (I(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          ua(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ie] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Te !== null && (Bi(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? X === 0 && (X = 3) : zo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        nn(), Mi(e, t), e === null && Vn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return po(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Hr(), re(t), null;
    case 19:
      if ((I(B), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) gn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Xr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > ln &&
            ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return re(t), null;
          } else
            2 * Y() - i.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          O(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Po(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function gc(e, t) {
  switch ((so(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        I(de),
        I(ie),
        yo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return go(t), null;
    case 13:
      if ((I(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(B), null;
    case 4:
      return nn(), null;
    case 10:
      return po(t.type._context), null;
    case 22:
    case 23:
      return Po(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  le = !1,
  yc = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function Fi(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Du = !1;
function wc(e, t) {
  if (((vi = $r), (e = Zs()), oo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gi = { focusedElem: e, selectionRange: n }, $r = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var C = x.memoizedProps,
                    $ = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Pe(t.type, C),
                      $
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          A(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (x = Du), (Du = !1), x;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Fi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qa(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[An], delete t[xi], delete t[tc], delete t[nc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ya(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ya(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), (e = e.sibling);
}
var b = null,
  ze = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ka(e, t, n), (n = n.sibling);
}
function Ka(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = b,
        l = ze;
      (b = null),
        Je(e, t, n),
        (b = r),
        (ze = l),
        b !== null &&
          (ze
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (ze
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? $l(e.parentNode, n)
              : e.nodeType === 1 && $l(e, n),
            $n(e))
          : $l(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = ze),
        (b = n.stateNode.containerInfo),
        (ze = !0),
        Je(e, t, n),
        (b = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Je(e, t, n), (le = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function $u(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yc()),
      t.forEach(function (r) {
        var l = Lc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (ze = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Ka(i, o, l), (b = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Za(t, e), (t = t.sibling);
}
function Za(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Oe(e), r & 4)) {
        try {
          Pn(3, e, e.return), dl(3, e);
        } catch (C) {
          A(e, e.return, C);
        }
        try {
          Pn(5, e, e.return);
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 1:
      Le(t, e), Oe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (C) {
          A(e, e.return, C);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && hs(l, i),
              oi(u, o);
            var c = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? xs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ys(l, h)
                : v === "children"
                ? Rn(l, h)
                : Ki(l, v, h, c);
            }
            switch (u) {
              case "input":
                ti(l, i);
                break;
              case "textarea":
                vs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Yt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[An] = i;
          } catch (C) {
            A(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (C) {
          A(e, e.return, C);
        }
      break;
    case 4:
      Le(t, e), Oe(e);
      break;
    case 13:
      Le(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (jo = Y())),
        r & 4 && $u(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || v), Le(t, e), (le = c)) : Le(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((m = k), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (C) {
                      A(r, n, C);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Bu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (k = w)) : Bu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ws("display", o)));
              } catch (C) {
                A(e, e.return, C);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (C) {
                A(e, e.return, C);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Oe(e), r & 4 && $u(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ya(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Iu(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Iu(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xc(e, t, n) {
  (k = e), Xa(e);
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = gr;
        var c = le;
        if (((gr = o), (le = s) && !c))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Vu(l);
        for (; i !== null; ) (k = i), Xa(i), (i = i.sibling);
        (k = l), (gr = u), (le = c);
      }
      Uu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Uu(e);
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ku(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ku(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && $n(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Ri(t));
      } catch (m) {
        A(t, t.return, m);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Bu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Vu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (s) {
            A(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ri(t);
          } catch (s) {
            A(t, o, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var Cc = Math.ceil,
  qr = Ge.ReactCurrentDispatcher,
  No = Ge.ReactCurrentOwner,
  Ee = Ge.ReactCurrentBatchConfig,
  F = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Qt = ht(0),
  X = 0,
  Xn = null,
  Pt = 0,
  pl = 0,
  _o = 0,
  zn = null,
  ce = null,
  jo = 0,
  ln = 1 / 0,
  Be = null,
  br = !1,
  Ii = null,
  at = null,
  yr = !1,
  rt = null,
  el = 0,
  Tn = 0,
  $i = null,
  zr = -1,
  Tr = 0;
function ue() {
  return F & 6 ? Y() : zr !== -1 ? zr : (zr = Y());
}
function ct(e) {
  return e.mode & 1
    ? F & 2 && ee !== 0
      ? ee & -ee
      : lc.transition !== null
      ? (Tr === 0 && (Tr = Ms()), Tr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), ($i = null), Error(y(185)));
  Jn(e, n, r),
    (!(F & 2) || e !== q) &&
      (e === q && (!(F & 2) && (pl |= n), X === 4 && tt(e, ee)),
      me(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((ln = Y() + 500), al && vt()));
}
function me(e, t) {
  var n = e.callbackNode;
  l2(e, t);
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Go(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Go(n), t === 1))
      e.tag === 0 ? rc(Hu.bind(null, e)) : la(Hu.bind(null, e)),
        b2(function () {
          !(F & 6) && vt();
        }),
        (n = null);
    else {
      switch (Fs(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = zs;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = Dr;
      }
      n = r0(n, Ga.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ga(e, t) {
  if (((zr = -1), (Tr = 0), F & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = qa();
    (q !== e || ee !== t) && ((Be = null), (ln = Y() + 500), Et(e, t));
    do
      try {
        Ec();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    fo(),
      (qr.current = i),
      (F = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fi(e)), l !== 0 && ((r = l), (t = Ui(e, l)))), t === 1)
    )
      throw ((n = Xn), Et(e, 0), tt(e, r), me(e, Y()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !kc(l) &&
          ((t = tl(e, r)),
          t === 2 && ((i = fi(e)), i !== 0 && ((r = i), (t = Ui(e, i)))),
          t === 1))
      )
        throw ((n = Xn), Et(e, 0), tt(e, r), me(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xt(e, ce, Be);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = jo + 500 - Y()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(xt.bind(null, e, ce, Be), t);
            break;
          }
          xt(e, ce, Be);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cc(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(xt.bind(null, e, ce, Be), r);
            break;
          }
          xt(e, ce, Be);
          break;
        case 5:
          xt(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === n ? Ga.bind(null, e) : null;
}
function Ui(e, t) {
  var n = zn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Bi(t)),
    e
  );
}
function Bi(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function kc(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~_o,
      t &= ~pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (F & 6) throw Error(y(327));
  Jt();
  var t = Ir(e, 0);
  if (!(t & 1)) return me(e, Y()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fi(e);
    r !== 0 && ((t = r), (n = Ui(e, r)));
  }
  if (n === 1) throw ((n = Xn), Et(e, 0), tt(e, t), me(e, Y()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, ce, Be),
    me(e, Y()),
    null
  );
}
function Lo(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((ln = Y() + 500), al && vt());
  }
}
function zt(e) {
  rt !== null && rt.tag === 0 && !(F & 6) && Jt();
  var t = F;
  F |= 1;
  var n = Ee.transition,
    r = R;
  try {
    if (((Ee.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ee.transition = n), (F = t), !(F & 6) && vt();
  }
}
function Po() {
  (he = Qt.current), I(Qt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), q2(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hr();
          break;
        case 3:
          nn(), I(de), I(ie), yo();
          break;
        case 5:
          go(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          I(B);
          break;
        case 19:
          I(B);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          Po();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = ft(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Xn = null),
    (_o = pl = Pt = 0),
    (ce = zn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Ja(e, t) {
  do {
    var n = K;
    try {
      if ((fo(), (jr.current = Jr), Gr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((Lt = 0),
        (J = Z = V = null),
        (Ln = !1),
        (Yn = 0),
        (No.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Xn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Pu(o);
          if (w !== null) {
            (w.flags &= -257),
              zu(w, o, u, i, t),
              w.mode & 1 && Lu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var C = new Set();
              C.add(s), (t.updateQueue = C);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Lu(i, c, t), zo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var $ = Pu(o);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256),
              zu($, o, u, i, t),
              ao(rn(s, u));
            break e;
          }
        }
        (i = s = rn(s, u)),
          X !== 4 && (X = 2),
          zn === null ? (zn = [i]) : zn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ra(i, s, t);
              Cu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (at === null || !at.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Oa(i, u, t);
                Cu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      e0(n);
    } catch (S) {
      (t = S), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = qr.current;
  return (qr.current = Jr), e === null ? Jr : e;
}
function zo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Pt & 268435455) && !(pl & 268435455)) || tt(q, ee);
}
function tl(e, t) {
  var n = F;
  F |= 2;
  var r = qa();
  (q !== e || ee !== t) && ((Be = null), Et(e, t));
  do
    try {
      Sc();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if ((fo(), (F = n), (qr.current = r), K !== null)) throw Error(y(261));
  return (q = null), (ee = 0), X;
}
function Sc() {
  for (; K !== null; ) ba(K);
}
function Ec() {
  for (; K !== null && !X0(); ) ba(K);
}
function ba(e) {
  var t = n0(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? e0(e) : (K = t),
    (No.current = null);
}
function e0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gc(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = vc(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function xt(e, t, n) {
  var r = R,
    l = Ee.transition;
  try {
    (Ee.transition = null), (R = 1), Nc(e, t, n, r);
  } finally {
    (Ee.transition = l), (R = r);
  }
  return null;
}
function Nc(e, t, n, r) {
  do Jt();
  while (rt !== null);
  if (F & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (i2(e, i),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      r0(Dr, function () {
        return Jt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ee.transition), (Ee.transition = null);
    var o = R;
    R = 1;
    var u = F;
    (F |= 4),
      (No.current = null),
      wc(e, n),
      Za(n, e),
      Q2(gi),
      ($r = !!vi),
      (gi = vi = null),
      (e.current = n),
      xc(n),
      G0(),
      (F = u),
      (R = o),
      (Ee.transition = i);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (rt = e), (el = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    b0(n.stateNode),
    me(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Ii), (Ii = null), e);
  return (
    el & 1 && e.tag !== 0 && Jt(),
    (i = e.pendingLanes),
    i & 1 ? (e === $i ? Tn++ : ((Tn = 0), ($i = e))) : (Tn = 0),
    vt(),
    null
  );
}
function Jt() {
  if (rt !== null) {
    var e = Fs(el),
      t = Ee.transition,
      n = R;
    try {
      if (((Ee.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (el = 0), F & 6)) throw Error(y(331));
        var l = F;
        for (F |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (k = h);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var m = v.sibling,
                        w = v.return;
                      if ((Qa(v), v === c)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (k = m);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var $ = C.sibling;
                    (C.sibling = null), (C = $);
                  } while (C !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (S) {
                  A(u, u.return, S);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((F = l), vt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ee.transition = t);
    }
  }
  return !1;
}
function Au(e, t, n) {
  (t = rn(n, t)),
    (t = Ra(e, t, 1)),
    (e = st(e, t, 1)),
    (t = ue()),
    e !== null && (Jn(e, 1, t), me(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) Au(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Au(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Oa(t, e, 1)),
            (t = st(t, e, 1)),
            (e = ue()),
            t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _c(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Y() - jo)
        ? Et(e, 0)
        : (_o |= n)),
    me(e, t);
}
function t0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ze(e, t)), e !== null && (Jn(e, t, n), me(e, n));
}
function jc(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), t0(e, n);
}
function Lc(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), t0(e, n);
}
var n0;
n0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), hc(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && ia(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = bt(t, ie.current);
      Gt(t, n), (l = xo(null, t, r, e, l, n));
      var i = Co();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Ar(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            _i(t, r, e, n),
            (t = Pi(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && uo(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = zc(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Li(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Mu(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Li(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Fu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ua(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          aa(e, t),
          Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ge = t,
                U = !0,
                Te = null,
                n = pa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ma(t),
        e === null && Si(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        yi(r, l) ? (o = null) : i !== null && yi(r, i) && (t.flags |= 32),
        $a(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Si(t), null;
    case 13:
      return Ba(e, t, n);
    case 4:
      return (
        vo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Tu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          O(Yr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Re(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ei(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ei(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        Mu(e, t, r, l, n)
      );
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Ar(t)) : (e = !1),
        Gt(t, n),
        fa(t, r, l),
        _i(t, r, l, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return Va(e, t, n);
    case 22:
      return Ia(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function r0(e, t) {
  return Ps(e, t);
}
function Pc(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Pc(e, t, n, r);
}
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zc(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Mr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ot:
        return Nt(n.children, l, i, t);
      case Zi:
        (o = 8), (l |= 8);
        break;
      case Gl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = i), e
        );
      case Jl:
        return (e = Se(13, n, t, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = Se(19, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case ds:
        return ml(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cs:
              o = 10;
              break e;
            case fs:
              o = 9;
              break e;
            case Xi:
              o = 11;
              break e;
            case Gi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nt(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = ds),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tc(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Tc(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Mc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function l0(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ra(e, n, t);
  }
  return t;
}
function i0(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Mo(n, r, !0, e, l, i, o, u, s)),
    (e.context = l0(null)),
    (n = e.current),
    (r = ue()),
    (l = ct(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = ct(l);
  return (
    (n = l0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, o)),
    e !== null && (Fe(e, l, o, i), _r(e, l, o)),
    o
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fo(e, t) {
  Wu(e, t), (e = e.alternate) && Wu(e, t);
}
function Fc() {
  return null;
}
var o0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
vl.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  hl(e, t, null, null);
};
vl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      hl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ds();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && $s(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qu() {}
function Rc(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = nl(o);
        i.call(c);
      };
    }
    var o = i0(t, r, e, 0, null, !1, !1, "", Qu);
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Mo(e, 0, !1, null, null, !1, !1, "", Qu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      hl(t, s, n, r);
    }),
    s
  );
}
function yl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = nl(o);
        u.call(s);
      };
    }
    hl(t, o, e, l);
  } else o = Rc(n, t, e, l, r);
  return nl(o);
}
Rs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (bi(t, n | 1), me(t, Y()), !(F & 6) && ((ln = Y() + 500), vt()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ue();
          Fe(r, e, 1, l);
        }
      }),
        Fo(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ue();
      Fe(t, e, 134217728, n);
    }
    Fo(e, 134217728);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ue();
      Fe(n, e, t, r);
    }
    Fo(e, t);
  }
};
Ds = function () {
  return R;
};
Is = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ms(r), ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      vs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ss = Lo;
Es = zt;
var Oc = { usingClientEntryPoint: !1, Events: [bn, Ut, sl, Cs, ks, Lo] },
  yn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Dc = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = js(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Fc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (ll = wr.inject(Dc)), ($e = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(y(200));
  return Mc(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = o0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Mo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Ro(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = js(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return zt(e);
};
we.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return yl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = o0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = i0(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ke] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
we.render = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return yl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zt(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Lo;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function u0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0);
    } catch (e) {
      console.error(e);
    }
}
u0(), (is.exports = we);
var Ic = is.exports,
  Yu = Ic;
(Zl.createRoot = Yu.createRoot), (Zl.hydrateRoot = Yu.hydrateRoot);
const L = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2:
      "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:
      "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  },
  Qe = {
    section: `flex md:flex-row flex-col ${L.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${L.paddingY}`,
    sectionImgReverse: `flex-1 flex ${L.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${L.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${L.flexStart} flex-col`,
  },
  $c = "/assets/airbnb-Dof9H5Si.png",
  Uc = "/assets/bill-DoOYledN.png",
  Bc = "/assets/binance-DFoX6ZoZ.png",
  Vc = "/assets/card-CR2i1fwz.png",
  Hc = "/assets/coinbase-CagEyBrw.png",
  Ac = "/assets/dropbox-B-SvEtGM.png",
  s0 = "/assets/logo-DKFkkrla.svg",
  Wc =
    "data:image/svg+xml,%3csvg%20width='43'%20height='28'%20viewBox='0%200%2043%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.7984%2027.6L18.9984%200H12.3984L0.398438%2027.6H11.7984ZM35.7984%2027.6L42.9984%200H36.3984L24.3984%2027.6H35.7984Z'%20fill='url(%23paint0_linear_310_509)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_310_509'%20x1='28.8615'%20y1='-24.7969'%20x2='41.7939'%20y2='24.1471'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.00887753'%20stop-color='%23DEF9FA'/%3e%3cstop%20offset='0.1723'%20stop-color='%23BEF3F5'/%3e%3cstop%20offset='0.4204'%20stop-color='%239DEDF0'/%3e%3cstop%20offset='0.5512'%20stop-color='%237DE7EB'/%3e%3cstop%20offset='0.7154'%20stop-color='%235CE1E6'/%3e%3cstop%20offset='1'%20stop-color='%2333BBCF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  Qc = "/assets/robot-BlYcY9VY.png",
  Yc =
    "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.4966%200.931172C30.6963%200.109757%2029.5118%20-0.196261%2028.4074%200.125863L2.65282%207.61524C1.48754%207.93897%200.661604%208.8683%200.439113%2010.0489C0.21182%2011.2504%201.00574%2012.7757%202.04297%2013.4135L10.0959%2018.3629C10.9218%2018.8702%2011.9878%2018.743%2012.6713%2018.0537L21.8927%208.77488C22.3569%208.2917%2023.1252%208.2917%2023.5894%208.77488C24.0536%209.24196%2024.0536%209.99895%2023.5894%2010.4821L14.352%2019.7625C13.6669%2020.4503%2013.5389%2021.5213%2014.0431%2022.3524L18.9635%2030.486C19.5397%2031.4524%2020.5321%2032%2021.6206%2032C21.7486%2032%2021.8927%2032%2022.0207%2031.9839C23.2693%2031.8228%2024.2617%2030.9692%2024.6298%2029.7612L32.2649%204.03967C32.6011%202.94445%2032.297%201.75259%2031.4966%200.931172'%20fill='%2300F6FF'/%3e%3c/svg%3e",
  Kc =
    "data:image/svg+xml,%3csvg%20width='28'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5649%2031.8619C13.7421%2031.9544%2013.9402%2032.0015%2014.1384%2031.9999C14.3365%2031.9984%2014.533%2031.9497%2014.7118%2031.8556L20.4204%2028.8039C22.0392%2027.941%2023.3069%2026.9761%2024.2959%2025.8527C26.4463%2023.4051%2027.6206%2020.2813%2027.5997%2017.0602L27.532%206.43517C27.5256%205.21138%2026.7218%204.11938%2025.533%203.72243L14.9131%200.159303C14.2737%20-0.0572148%2013.573%20-0.0525079%2012.9448%200.170286L2.36516%203.8605C1.18284%204.27314%200.393559%205.37298%200.400003%206.59834L0.467655%2017.2155C0.488595%2020.4413%201.70312%2023.551%203.88895%2025.9735C4.88764%2027.0812%206.1666%2028.032%207.80315%2028.8808L13.5649%2031.8619ZM12.0537%2019.3743C12.2921%2019.6034%2012.6014%2019.7163%2012.9106%2019.7132C13.2199%2019.7116%2013.5276%2019.5955%2013.7627%2019.3633L20.0013%2013.213C20.47%2012.7501%2020.4652%2012.0064%2019.9916%2011.5498C19.5164%2011.0933%2018.7513%2011.0964%2018.2826%2011.5593L12.8929%2016.8718L10.6861%2014.7505C10.211%2014.294%209.44745%2014.2987%208.9771%2014.7615C8.50837%2015.2244%208.5132%2015.9681%208.98838%2016.4246L12.0537%2019.3743Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
  Zc =
    "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.4696%2019.7122C25.0552%2020.1138%2024.8648%2020.6946%2024.9592%2021.2642L26.3816%2029.1362C26.5016%2029.8034%2026.22%2030.4786%2025.6616%2030.8642C25.1144%2031.2642%2024.3864%2031.3122%2023.7896%2030.9922L16.7032%2027.2962C16.4568%2027.165%2016.1832%2027.0946%2015.9032%2027.0866H15.4696C15.3192%2027.109%2015.172%2027.157%2015.0376%2027.2306L7.94959%2030.9442C7.59919%2031.1202%207.20239%2031.1826%206.81359%2031.1202C5.86639%2030.941%205.23439%2030.0386%205.38959%2029.0866L6.81359%2021.2146C6.90799%2020.6402%206.71759%2020.0562%206.30319%2019.6482L0.525591%2014.0482C0.042391%2013.5794%20-0.125609%2012.8754%200.095191%2012.2402C0.309591%2011.6066%200.856791%2011.1442%201.51759%2011.0402L9.46959%209.88663C10.0744%209.82423%2010.6056%209.45623%2010.8776%208.91223L14.3816%201.72823C14.4648%201.56823%2014.572%201.42103%2014.7016%201.29623L14.8456%201.18423C14.9208%201.10103%2015.0072%201.03223%2015.1032%200.976232L15.2776%200.912232L15.5496%200.800232H16.2232C16.8248%200.862632%2017.3544%201.22263%2017.6312%201.76023L21.1816%208.91223C21.4376%209.43543%2021.9352%209.79863%2022.5096%209.88663L30.4616%2011.0402C31.1336%2011.1362%2031.6952%2011.6002%2031.9176%2012.2402C32.1272%2012.8818%2031.9464%2013.5858%2031.4536%2014.0482L25.4696%2019.7122Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
  Xc =
    "data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%202L19%202C19.2652%202%2019.5196%201.89464%2019.7071%201.70711C19.8946%201.51957%2020%201.26522%2020%201C20%200.734784%2019.8946%200.480429%2019.7071%200.292892C19.5196%200.105356%2019.2652%200%2019%200L9%200C8.73478%200%208.48043%200.105356%208.29289%200.292892C8.10536%200.480429%208%200.734784%208%201C8%201.26522%208.10536%201.51957%208.29289%201.70711C8.48043%201.89464%208.73478%202%209%202ZM19%2010L1%2010C0.734784%2010%200.480429%2010.1054%200.292892%2010.2929C0.105356%2010.4804%200%2010.7348%200%2011C0%2011.2652%200.105356%2011.5196%200.292892%2011.7071C0.480429%2011.8946%200.734784%2012%201%2012L19%2012C19.2652%2012%2019.5196%2011.8946%2019.7071%2011.7071C19.8946%2011.5196%2020%2011.2652%2020%2011C20%2010.7348%2019.8946%2010.4804%2019.7071%2010.2929C19.5196%2010.1054%2019.2652%2010%2019%2010V10ZM1%207L19%207C19.2652%207%2019.5196%206.89464%2019.7071%206.70711C19.8946%206.51957%2020%206.26522%2020%206C20%205.73478%2019.8946%205.48043%2019.7071%205.29289C19.5196%205.10536%2019.2652%205%2019%205L1%205C0.734784%205%200.480429%205.10536%200.292892%205.29289C0.105356%205.48043%200%205.73478%200%206C0%206.26522%200.105356%206.51957%200.292892%206.70711C0.480429%206.89464%200.734784%207%201%207Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
  Gc =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4099%209L16.7099%202.71C16.8982%202.5217%2017.004%202.2663%2017.004%202C17.004%201.7337%2016.8982%201.47831%2016.7099%201.29C16.5216%201.1017%2016.2662%200.995911%2015.9999%200.995911C15.7336%200.995911%2015.4782%201.1017%2015.2899%201.29L8.99994%207.59L2.70994%201.29C2.52164%201.1017%202.26624%200.995911%201.99994%200.995911C1.73364%200.995911%201.47824%201.1017%201.28994%201.29C1.10164%201.47831%200.995847%201.7337%200.995847%202C0.995847%202.2663%201.10164%202.5217%201.28994%202.71L7.58994%209L1.28994%2015.29C1.19621%2015.383%201.12182%2015.4936%201.07105%2015.6154C1.02028%2015.7373%200.994141%2015.868%200.994141%2016C0.994141%2016.132%201.02028%2016.2627%201.07105%2016.3846C1.12182%2016.5064%201.19621%2016.617%201.28994%2016.71C1.3829%2016.8037%201.4935%2016.8781%201.61536%2016.9289C1.73722%2016.9797%201.86793%2017.0058%201.99994%2017.0058C2.13195%2017.0058%202.26266%2016.9797%202.38452%2016.9289C2.50638%2016.8781%202.61698%2016.8037%202.70994%2016.71L8.99994%2010.41L15.2899%2016.71C15.3829%2016.8037%2015.4935%2016.8781%2015.6154%2016.9289C15.7372%2016.9797%2015.8679%2017.0058%2015.9999%2017.0058C16.132%2017.0058%2016.2627%2016.9797%2016.3845%2016.9289C16.5064%2016.8781%2016.617%2016.8037%2016.7099%2016.71C16.8037%2016.617%2016.8781%2016.5064%2016.9288%2016.3846C16.9796%2016.2627%2017.0057%2016.132%2017.0057%2016C17.0057%2015.868%2016.9796%2015.7373%2016.9288%2015.6154C16.8781%2015.4936%2016.8037%2015.383%2016.7099%2015.29L10.4099%209Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
  Jc = "/assets/google-CfHiuw7M.svg",
  qc = "/assets/apple-CEYRg74y.svg",
  bc =
    "data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.98978%2015.2615C4.75588%2014.9828%204.76972%2014.5786%205.00787%2014.3167L5.07837%2014.2489L16.0903%205.00887C16.3943%204.75371%2016.8477%204.79338%2017.1029%205.09746C17.3367%205.37621%2017.3229%205.78038%2017.0848%206.04234L17.0143%206.11006L6.00238%2015.3501C5.69829%2015.6053%205.24494%2015.5656%204.98978%2015.2615Z'%20fill='white'/%3e%3cpath%20d='M8.33877%205.57975C7.94325%205.546%207.64998%205.19801%207.68372%204.8025C7.7144%204.44294%208.00478%204.16787%208.35448%204.14619L8.46097%204.14745L16.6132%204.843C16.9739%204.87377%2017.2493%205.16571%2017.2697%205.51648L17.268%205.62327L16.538%2013.7732C16.5026%2014.1686%2016.1534%2014.4604%2015.758%2014.425C15.3986%2014.3928%2015.1247%2014.1012%2015.1045%2013.7514L15.1062%2013.645L15.7714%206.21386L8.33877%205.57975Z'%20fill='white'/%3e%3c/svg%3e",
  e1 =
    "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M15.9988%2029.331C14.9735%2029.331%2013.9495%2028.9417%2013.1668%2028.1643L12.1935%2027.191C11.8161%2026.815%2011.3108%2026.607%2010.7748%2026.6057H9.40546C7.19212%2026.6057%205.39079%2024.8043%205.39079%2022.591V21.2203C5.38946%2020.6857%205.18146%2020.1803%204.80412%2019.8003L3.84679%2018.8443C2.27879%2017.2857%202.27212%2014.7377%203.83212%2013.1683L4.80546%2012.1937C5.18146%2011.8163%205.38946%2011.311%205.39079%2010.775V9.40699C5.39079%207.19232%207.19212%205.39099%209.40546%205.39099H10.7761C11.3108%205.39099%2011.8148%205.18299%2012.1948%204.80299L13.1535%203.84699C14.7121%202.27899%2017.2588%202.27099%2018.8295%203.83232L19.8028%204.80565C20.1815%205.18299%2020.6855%205.39099%2021.2201%205.39099H22.5908C24.8041%205.39099%2026.6055%207.19232%2026.6055%209.40699V10.7763C26.6068%2011.311%2026.8148%2011.8163%2027.1921%2012.1963L28.1495%2013.1537C28.9081%2013.9083%2029.3281%2014.9137%2029.3321%2015.987C29.3348%2017.0537%2028.9241%2018.0577%2028.1761%2018.8163C28.1628%2018.8297%2028.1508%2018.8443%2028.1375%2018.8563L27.1908%2019.803C26.8148%2020.1803%2026.6068%2020.6857%2026.6055%2021.2217V22.591C26.6055%2024.8043%2024.8041%2026.6057%2022.5908%2026.6057H21.2201C20.6855%2026.607%2020.1801%2026.815%2019.8015%2027.1923L18.8428%2028.1497C18.0615%2028.9363%2017.0295%2029.331%2015.9988%2029.331'%20fill='%23393939'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.3904%2013.4012C13.1704%2013.6212%2012.8851%2013.7399%2012.5691%2013.7399C12.2731%2013.7399%2011.9824%2013.6186%2011.7491%2013.3999C11.5277%2013.1799%2011.4024%2012.8786%2011.4024%2012.5732C11.4024%2012.2826%2011.5251%2011.9839%2011.7411%2011.7532C11.8597%2011.6332%2012.0011%2011.5426%2012.1424%2011.4946C12.5451%2011.3106%2013.0797%2011.4186%2013.3971%2011.7519C13.5104%2011.8652%2013.5971%2011.9892%2013.6544%2012.1186C13.7171%2012.2572%2013.7491%2012.4146%2013.7491%2012.5732C13.7491%2012.8906%2013.6224%2013.1852%2013.3904%2013.4012ZM20.254%2011.7464C19.7993%2011.2931%2019.0593%2011.2931%2018.6047%2011.7464L11.7513%2018.5998C11.2967%2019.0544%2011.2967%2019.7944%2011.7513%2020.2504C11.9727%2020.4704%2012.2647%2020.5918%2012.5767%2020.5918C12.8887%2020.5918%2013.1807%2020.4704%2013.4007%2020.2504L20.254%2013.3971C20.7087%2012.9411%2020.7087%2012.2024%2020.254%2011.7464ZM19.8744%2018.3519C19.4424%2018.1706%2018.9304%2018.2692%2018.5891%2018.6106C18.5184%2018.6932%2018.4184%2018.8212%2018.3504%2018.9719C18.2784%2019.1346%2018.2691%2019.3092%2018.2691%2019.4266C18.2691%2019.5439%2018.2784%2019.7172%2018.3504%2019.8799C18.4171%2020.0292%2018.4971%2020.1506%2018.6024%2020.2559C18.8437%2020.4799%2019.1237%2020.5932%2019.4357%2020.5932C19.7317%2020.5932%2020.0224%2020.4732%2020.2611%2020.2506C20.4731%2020.0386%2020.5891%2019.7452%2020.5891%2019.4266C20.5891%2019.1066%2020.4731%2018.8146%2020.2597%2018.6012C20.1424%2018.4852%2020.0011%2018.3946%2019.8744%2018.3519Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
  t1 =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5001%200C4.7011%200%200%204.72075%200%2010.544C0%2015.7667%203.78548%2020.092%208.74886%2020.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886%205.10564%2010.2817%203.73225%2012.5209%203.73225C13.5934%203.73225%2014.515%203.8125%2014.7826%203.84784V6.48217L13.2295%206.48292C12.012%206.48292%2011.7773%207.06377%2011.7773%207.91643V9.79645H14.6824L14.3035%2012.7422H11.7773V21C16.9724%2020.3651%2021%2015.9296%2021%2010.5409C21%204.72075%2016.2989%200%2010.5001%200Z'%20fill='white'/%3e%3c/svg%3e",
  n1 =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9466%206.17408C20.8974%205.05826%2020.7169%204.29115%2020.4584%203.62644C20.1917%202.92086%2019.7814%202.28916%2019.2438%201.76402C18.7186%201.23071%2018.0826%200.816309%2017.3851%200.553821C16.7164%200.295339%2015.9531%200.114899%2014.8371%200.0657021C13.7127%200.0123392%2013.3558%200%2010.5041%200C7.65239%200%207.29545%200.0123392%206.17525%200.0615356C5.05923%200.110732%204.29197%200.291333%203.62729%200.549654C2.92142%200.816309%202.28959%201.22655%201.76436%201.76402C1.23095%202.28916%200.816625%202.92503%200.553926%203.62243C0.295395%204.29115%200.114921%205.0541%200.0657146%206.16991C0.0123415%207.29406%200%207.65093%200%2010.5021C0%2013.3532%200.0123415%2013.7101%200.0615474%2014.8301C0.110753%2015.9459%200.291388%2016.713%200.549919%2017.3777C0.816625%2018.0833%201.23095%2018.715%201.76436%2019.2401C2.28959%2019.7735%202.92558%2020.1879%203.62312%2020.4503C4.29197%2020.7088%205.05506%2020.8893%206.17125%2020.9385C7.29128%2020.9878%207.64838%2021%2010.5001%2021C13.3518%2021%2013.7087%2020.9878%2014.8289%2020.9385C15.9449%2020.8893%2016.7122%2020.7088%2017.3769%2020.4503C18.7885%2019.9047%2019.9045%2018.7889%2020.4502%2017.3777C20.7086%2016.709%2020.8892%2015.9459%2020.9385%2014.8301C20.9877%2013.7101%2021%2013.3532%2021%2010.5021C21%207.65093%2020.9958%207.29406%2020.9466%206.17408ZM19.0552%2014.748C19.01%2015.7736%2018.8377%2016.3275%2018.6941%2016.6967C18.3411%2017.6115%2017.6149%2018.3376%2016.6999%2018.6905C16.3306%2018.8341%2015.7726%2019.0063%2014.7509%2019.0514C13.643%2019.1007%2013.3107%2019.1129%2010.5083%2019.1129C7.70576%2019.1129%207.36934%2019.1007%206.26549%2019.0514C5.2397%2019.0063%204.68578%2018.8341%204.31649%2018.6905C3.86114%2018.5222%203.44665%2018.2556%203.11023%2017.9069C2.76146%2017.5663%202.49475%2017.1561%202.32646%2016.7008C2.18285%2016.3316%202.01055%2015.7736%201.96551%2014.7522C1.91614%2013.6446%201.90396%2013.3122%201.90396%2010.5103C1.90396%207.7083%201.91614%207.37194%201.96551%206.26846C2.01055%205.24287%202.18285%204.68905%202.32646%204.31983C2.49475%203.86441%202.76146%203.45016%203.11439%203.11364C3.45483%202.76494%203.86514%202.49828%204.32066%202.33018C4.68994%202.1866%205.24804%202.01433%206.26966%201.96914C7.37751%201.91994%207.70993%201.9076%2010.5123%201.9076C13.3189%201.9076%2013.6512%201.91994%2014.755%201.96914C15.7808%202.01433%2016.3347%202.1866%2016.704%202.33018C17.1594%202.49828%2017.5739%202.76494%2017.9103%203.11364C18.2591%203.45417%2018.5258%203.86441%2018.6941%204.31983C18.8377%204.68905%2019.01%205.24687%2019.0552%206.26846C19.1044%207.3761%2019.1167%207.7083%2019.1167%2010.5103C19.1167%2013.3122%2019.1044%2013.6404%2019.0552%2014.748Z'%20fill='white'/%3e%3cpath%20d='M10.5%206C8.01567%206%206%208.01554%206%2010.5C6%2012.9845%208.01567%2015%2010.5%2015C12.9845%2015%2015%2012.9845%2015%2010.5C15%208.01554%2012.9845%206%2010.5%206ZM10.5%2013.419C8.88829%2013.419%207.58096%2012.1118%207.58096%2010.5C7.58096%208.88816%208.88829%207.58096%2010.5%207.58096C12.1118%207.58096%2013.419%208.88816%2013.419%2010.5C13.419%2012.1118%2012.1118%2013.419%2010.5%2013.419Z'%20fill='white'/%3e%3cpath%20d='M18%205.5C18%206.32835%2017.3284%207%2016.4999%207C15.6716%207%2015%206.32835%2015%205.5C15%204.67146%2015.6716%204%2016.4999%204C17.3284%204%2018%204.67146%2018%205.5Z'%20fill='white'/%3e%3c/svg%3e",
  r1 =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4855%200H1.51453C0.67804%200%200%200.67804%200%201.51453V19.4855C0%2020.322%200.67804%2021%201.51453%2021H19.4855C20.322%2021%2021%2020.322%2021%2019.4855V1.51453C21%200.67804%2020.322%200%2019.4855%200V0ZM7.44882%2015.873H4.89159V8.17957H7.44882V15.873ZM6.17029%207.12903H6.15363C5.2955%207.12903%204.74051%206.53831%204.74051%205.80003C4.74051%205.04508%205.31248%204.4707%206.18727%204.4707C7.06206%204.4707%207.60039%205.04508%207.61705%205.80003C7.61705%206.53831%207.06206%207.12903%206.17029%207.12903ZM16.6696%2015.873H14.1127V11.7572C14.1127%2010.7229%2013.7425%2010.0174%2012.8172%2010.0174C12.1108%2010.0174%2011.6901%2010.4933%2011.5052%2010.9526C11.4376%2011.117%2011.4211%2011.3467%2011.4211%2011.5767V15.873H8.86402C8.86402%2015.873%208.89751%208.90135%208.86402%208.17957H11.4211V9.26889C11.7609%208.74466%2012.3689%207.99901%2013.7257%207.99901C15.4081%207.99901%2016.6696%209.09858%2016.6696%2011.4616V15.873Z'%20fill='white'/%3e%3c/svg%3e",
  l1 =
    "data:image/svg+xml,%3csvg%20width='23'%20height='19'%20viewBox='0%200%2023%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23%202.24931C22.1447%202.63077%2021.2333%202.88362%2020.2831%203.00638C21.2606%202.413%2022.0067%201.48054%2022.3574%200.356615C21.4461%200.909077%2020.4398%201.29931%2019.3674%201.51708C18.5021%200.580231%2017.2687%200%2015.9232%200C13.3127%200%2011.2111%202.15431%2011.2111%204.79531C11.2111%205.17531%2011.2427%205.54069%2011.3203%205.88854C7.40025%205.69415%203.93156%203.78392%201.60137%200.874C1.19456%201.59162%200.955938%202.413%200.955938%203.29723C0.955938%204.95754%201.79688%206.42931%203.05037%207.28138C2.29281%207.26677%201.54962%207.04315%200.92%206.69092C0.92%206.70554%200.92%206.72454%200.92%206.74354C0.92%209.07323%202.55444%2011.0083%204.69775%2011.4541C4.31394%2011.5608%203.89562%2011.6119%203.4615%2011.6119C3.15963%2011.6119%202.85487%2011.5944%202.56881%2011.5301C3.17975%2013.4286%204.91338%2014.8244%206.97475%2014.8697C5.3705%2016.1456%203.33356%2016.9144%201.12844%2016.9144C0.74175%2016.9144%200.370875%2016.8968%200%2016.8486C2.08869%2018.2181%204.56406%2019%207.2335%2019C15.9102%2019%2020.654%2011.6923%2020.654%205.358C20.654%205.14608%2020.6468%204.94146%2020.6367%204.73831C21.5726%204.06308%2022.3589%203.21977%2023%202.24931Z'%20fill='white'/%3e%3c/svg%3e",
  i1 = "/assets/people01-e34zibMw.png",
  o1 = "/assets/people02-CZ7st6Cu.png",
  u1 = "/assets/people03-BY58aYFM.png",
  xr = [
    { id: "home", title: "Home" },
    { id: "features", title: "Features" },
    { id: "product", title: "Product" },
    { id: "clients", title: "Clients" },
  ],
  a0 = [
    {
      id: "feature-1",
      icon: Zc,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: Kc,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: Yc,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ],
  s1 = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: i1,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: o1,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: u1,
    },
  ],
  a1 = [
    { id: "stats-1", title: "User Active", value: "3800+" },
    { id: "stats-2", title: "Trusted by Company", value: "230+" },
    { id: "stats-3", title: "Transaction", value: "$230M+" },
  ],
  c1 = [
    {
      title: "Useful Links",
      links: [
        { name: "Content", link: "https://www.hoobank.com/content/" },
        { name: "How it Works", link: "https://www.hoobank.com/how-it-works/" },
        { name: "Create", link: "https://www.hoobank.com/create/" },
        { name: "Explore", link: "https://www.hoobank.com/explore/" },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Help Center", link: "https://www.hoobank.com/help-center/" },
        { name: "Partners", link: "https://www.hoobank.com/partners/" },
        { name: "Suggestions", link: "https://www.hoobank.com/suggestions/" },
        { name: "Blog", link: "https://www.hoobank.com/blog/" },
        { name: "Newsletters", link: "https://www.hoobank.com/newsletters/" },
      ],
    },
    {
      title: "Partner",
      links: [
        { name: "Our Partner", link: "https://www.hoobank.com/our-partner/" },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ],
  Ku = [
    { id: "social-media-1", icon: n1, link: "https://www.instagram.com/" },
    { id: "social-media-2", icon: t1, link: "https://www.facebook.com/" },
    { id: "social-media-3", icon: l1, link: "https://www.twitter.com/" },
    { id: "social-media-4", icon: r1, link: "https://www.linkedin.com/" },
  ],
  f1 = [
    { id: "client-1", logo: $c },
    { id: "client-2", logo: Bc },
    { id: "client-3", logo: Hc },
    { id: "client-4", logo: Ac },
  ],
  d1 = () => {
    const [e, t] = Mn.useState("Home"),
      [n, r] = Mn.useState(!1);
    return p.jsxs("nav", {
      className: "w-full flex py-6 justify-between items-center navbar",
      children: [
        p.jsx("img", {
          src: s0,
          alt: "hoobank",
          className: "w-[124px] h-[32px]",
        }),
        p.jsx("ul", {
          className: "list-none sm:flex hidden justify-end items-center flex-1",
          children: xr.map((l, i) =>
            p.jsx(
              "li",
              {
                className: `font-poppins font-normal cursor-pointer text-[16px] ${
                  e === l.title ? "text-white" : "text-dimWhite"
                } ${i === xr.length - 1 ? "mr-0" : "mr-10"}`,
                onClick: () => t(l.title),
                children: p.jsx("a", { href: `#${l.id}`, children: l.title }),
              },
              l.id
            )
          ),
        }),
        p.jsxs("div", {
          className: "sm:hidden flex flex-1 justify-end items-center",
          children: [
            p.jsx("img", {
              src: n ? Gc : Xc,
              alt: "menu",
              className: "w-[28px] h-[28px] object-contain",
              onClick: () => r(!n),
            }),
            p.jsx("div", {
              className: `${
                n ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`,
              children: p.jsx("ul", {
                className:
                  "list-none flex justify-end items-start flex-1 flex-col",
                children: xr.map((l, i) =>
                  p.jsx(
                    "li",
                    {
                      className: `font-poppins font-medium cursor-pointer text-[16px] ${
                        e === l.title ? "text-white" : "text-dimWhite"
                      } ${i === xr.length - 1 ? "mb-0" : "mb-4"}`,
                      onClick: () => t(l.title),
                      children: p.jsx("a", {
                        href: `#${l.id}`,
                        children: l.title,
                      }),
                    },
                    l.id
                  )
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  p1 = () =>
    p.jsxs("section", {
      id: "product",
      className: Qe.sectionReverse,
      children: [
        p.jsxs("div", {
          className: Qe.sectionImgReverse,
          children: [
            p.jsx("img", {
              src: Uc,
              alt: "billing",
              className: "w-[100%] h-[100%] relative z-[5]",
            }),
            p.jsx("div", {
              className:
                "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient",
            }),
            p.jsx("div", {
              className:
                "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient",
            }),
          ],
        }),
        p.jsxs("div", {
          className: Qe.sectionInfo,
          children: [
            p.jsxs("h2", {
              className: L.heading2,
              children: [
                "Easily control your ",
                p.jsx("br", { className: "sm:block hidden" }),
                " billing & invoicing",
              ],
            }),
            p.jsx("p", {
              className: `${L.paragraph} max-w-[470px] mt-5`,
              children:
                "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
            }),
            p.jsxs("div", {
              className: "flex flex-row flex-wrap sm:mt-10 mt-6",
              children: [
                p.jsx("img", {
                  src: qc,
                  alt: "google_play",
                  className:
                    "w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer",
                }),
                p.jsx("img", {
                  src: Jc,
                  alt: "google_play",
                  className:
                    "w-[144.17px] h-[43.08px] object-contain cursor-pointer",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Do = ({ styles: e }) =>
    p.jsx("button", {
      type: "button",
      className: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${e}`,
      children: "Get Started",
    }),
  m1 = () =>
    p.jsxs("section", {
      className: Qe.section,
      children: [
        p.jsxs("div", {
          className: Qe.sectionInfo,
          children: [
            p.jsxs("h2", {
              className: L.heading2,
              children: [
                "Find a better card deal ",
                p.jsx("br", { className: "sm:block hidden" }),
                " in few easy steps.",
              ],
            }),
            p.jsx("p", {
              className: `${L.paragraph} max-w-[470px] mt-5`,
              children:
                "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
            }),
            p.jsx(Do, { styles: "mt-10" }),
          ],
        }),
        p.jsx("div", {
          className: Qe.sectionImg,
          children: p.jsx("img", {
            src: Vc,
            alt: "billing",
            className: "w-[100%] h-[100%]",
          }),
        }),
      ],
    }),
  h1 = ({ icon: e, title: t, content: n, index: r }) =>
    p.jsxs("div", {
      className: `flex flex-row p-6 rounded-[20px] ${
        r !== a0.length - 1 ? "mb-6" : "mb-0"
      } feature-card`,
      children: [
        p.jsx("div", {
          className: `w-[64px] h-[64px] rounded-full ${L.flexCenter} bg-dimBlue`,
          children: p.jsx("img", {
            src: e,
            alt: "star",
            className: "w-[50%] h-[50%] object-contain",
          }),
        }),
        p.jsxs("div", {
          className: "flex-1 flex flex-col ml-3",
          children: [
            p.jsx("h4", {
              className:
                "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1",
              children: t,
            }),
            p.jsx("p", {
              className:
                "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
              children: n,
            }),
          ],
        }),
      ],
    }),
  v1 = () =>
    p.jsxs("section", {
      id: "features",
      className: Qe.section,
      children: [
        p.jsxs("div", {
          className: Qe.sectionInfo,
          children: [
            p.jsxs("h2", {
              className: L.heading2,
              children: [
                "You do the business, ",
                p.jsx("br", { className: "sm:block hidden" }),
                " we’ll handle the money.",
              ],
            }),
            p.jsx("p", {
              className: `${L.paragraph} max-w-[470px] mt-5`,
              children:
                "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
            }),
            p.jsx(Do, { styles: "mt-10" }),
          ],
        }),
        p.jsx("div", {
          className: `${Qe.sectionImg} flex-col`,
          children: a0.map((e, t) => p.jsx(h1, { ...e, index: t }, e.id)),
        }),
      ],
    }),
  g1 = () =>
    p.jsx("section", {
      className: `${L.flexCenter} my-4`,
      children: p.jsx("div", {
        className: `${L.flexCenter} flex-wrap w-full`,
        children: f1.map((e) =>
          p.jsx(
            "div",
            {
              className: `flex-1 ${L.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`,
              children: p.jsx("img", {
                src: e.logo,
                alt: "client_logo",
                className: "sm:w-[192px] w-[100px] object-contain",
              }),
            },
            e.id
          )
        ),
      }),
    }),
  y1 = () =>
    p.jsxs("section", {
      className: `${L.flexCenter} ${L.marginY} ${L.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
      children: [
        p.jsxs("div", {
          className: "flex-1 flex flex-col",
          children: [
            p.jsx("h2", {
              className: L.heading2,
              children: "Let’s try our service now!",
            }),
            p.jsx("p", {
              className: `${L.paragraph} max-w-[470px] mt-5`,
              children:
                "Everything you need to accept card payments and grow your business anywhere on the planet.",
            }),
          ],
        }),
        p.jsx("div", {
          className: `${L.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
          children: p.jsx(Do, {}),
        }),
      ],
    }),
  w1 = () =>
    p.jsx("section", {
      className: `${L.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`,
      children: a1.map((e) =>
        p.jsxs(
          "div",
          {
            className: "flex-1 flex justify-start items-center flex-row m-3",
            children: [
              p.jsx("h4", {
                className:
                  "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white",
                children: e.value,
              }),
              p.jsx("p", {
                className:
                  "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
                children: e.title,
              }),
            ],
          },
          e.id
        )
      ),
    }),
  x1 = () =>
    p.jsxs("section", {
      className: `${L.flexCenter} ${L.paddingY} flex-col`,
      children: [
        p.jsxs("div", {
          className: `${L.flexStart} md:flex-row flex-col mb-8 w-full`,
          children: [
            p.jsxs("div", {
              className: "flex-[1] flex flex-col justify-start mr-10",
              children: [
                p.jsx("img", {
                  src: s0,
                  alt: "hoobank",
                  className: "w-[266px] h-[72.14px] object-contain",
                }),
                p.jsx("p", {
                  className: `${L.paragraph} mt-4 max-w-[312px]`,
                  children:
                    "A new way to make the payments easy, reliable and secure.",
                }),
              ],
            }),
            p.jsx("div", {
              className:
                "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10",
              children: c1.map((e) =>
                p.jsxs(
                  "div",
                  {
                    className: "flex flex-col ss:my-0 my-4 min-w-[150px]",
                    children: [
                      p.jsx("h4", {
                        className:
                          "font-poppins font-medium text-[18px] leading-[27px] text-white",
                        children: e.title,
                      }),
                      p.jsx("ul", {
                        className: "list-none mt-4",
                        children: e.links.map((t, n) =>
                          p.jsx(
                            "li",
                            {
                              className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                n !== e.links.length - 1 ? "mb-4" : "mb-0"
                              }`,
                              children: t.name,
                            },
                            t.name
                          )
                        ),
                      }),
                    ],
                  },
                  e.title
                )
              ),
            }),
          ],
        }),
        p.jsxs("div", {
          className:
            "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]",
          children: [
            p.jsx("p", {
              className:
                "font-poppins font-normal text-center text-[18px] leading-[27px] text-white",
              children: "Copyright Ⓒ 2022 HooBank. All Rights Reserved.",
            }),
            p.jsx("div", {
              className: "flex flex-row md:mt-0 mt-6",
              children: Ku.map((e, t) =>
                p.jsx(
                  "img",
                  {
                    src: e.icon,
                    alt: e.id,
                    className: `w-[21px] h-[21px] object-contain cursor-pointer ${
                      t !== Ku.length - 1 ? "mr-6" : "mr-0"
                    }`,
                    onClick: () => window.open(e.link),
                  },
                  e.id
                )
              ),
            }),
          ],
        }),
      ],
    }),
  C1 = ({ content: e, name: t, title: n, img: r }) =>
    p.jsxs("div", {
      className:
        "flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
      children: [
        p.jsx("img", {
          src: Wc,
          alt: "double_quotes",
          className: "w-[42.6px] h-[27.6px] object-contain",
        }),
        p.jsx("p", {
          className:
            "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10",
          children: e,
        }),
        p.jsxs("div", {
          className: "flex flex-row",
          children: [
            p.jsx("img", {
              src: r,
              alt: t,
              className: "w-[48px] h-[48px] rounded-full",
            }),
            p.jsxs("div", {
              className: "flex flex-col ml-4",
              children: [
                p.jsx("h4", {
                  className:
                    "font-poppins font-semibold text-[20px] leading-[32px] text-white",
                  children: t,
                }),
                p.jsx("p", {
                  className:
                    "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite",
                  children: n,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  k1 = () =>
    p.jsxs("section", {
      id: "clients",
      className: `${L.paddingY} ${L.flexCenter} flex-col relative `,
      children: [
        p.jsx("div", {
          className:
            "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40",
        }),
        p.jsxs("div", {
          className:
            "w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]",
          children: [
            p.jsxs("h2", {
              className: L.heading2,
              children: [
                "What People are ",
                p.jsx("br", { className: "sm:block hidden" }),
                " saying about us",
              ],
            }),
            p.jsx("div", {
              className: "w-full md:mt-0 mt-6",
              children: p.jsx("p", {
                className: `${L.paragraph} text-left max-w-[450px]`,
                children:
                  "Everything you need to accept card payments and grow your business anywhere on the planet.",
              }),
            }),
          ],
        }),
        p.jsx("div", {
          className:
            "flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]",
          children: s1.map((e) => p.jsx(C1, { ...e }, e.id)),
        }),
      ],
    }),
  Zu = () =>
    p.jsx("div", {
      className: `${L.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`,
      children: p.jsxs("div", {
        className: `${L.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`,
        children: [
          p.jsxs("div", {
            className: `${L.flexStart} flex-row`,
            children: [
              p.jsx("p", {
                className:
                  "font-poppins font-medium text-[18px] leading-[23.4px]",
                children: p.jsx("span", {
                  className: "text-gradient",
                  children: "Get",
                }),
              }),
              p.jsx("img", {
                src: bc,
                alt: "arrow-up",
                className: "w-[23px] h-[23px] object-contain",
              }),
            ],
          }),
          p.jsx("p", {
            className: "font-poppins font-medium text-[18px] leading-[23.4px]",
            children: p.jsx("span", {
              className: "text-gradient",
              children: "Started",
            }),
          }),
        ],
      }),
    }),
  S1 = () =>
    p.jsxs("section", {
      id: "home",
      className: `flex md:flex-row flex-col ${L.paddingY}`,
      children: [
        p.jsxs("div", {
          className: `flex-1 ${L.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
          children: [
            p.jsxs("div", {
              className:
                "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
              children: [
                p.jsx("img", {
                  src: e1,
                  alt: "discount",
                  className: "w-[32px] h-[32px]",
                }),
                p.jsxs("p", {
                  className: `${L.paragraph} ml-2`,
                  children: [
                    p.jsx("span", { className: "text-white", children: "20%" }),
                    " Discount For",
                    " ",
                    p.jsx("span", {
                      className: "text-white",
                      children: "1 Month",
                    }),
                    " Account",
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "flex flex-row justify-between items-center w-full",
              children: [
                p.jsxs("h1", {
                  className:
                    "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
                  children: [
                    "The Next ",
                    p.jsx("br", { className: "sm:block hidden" }),
                    " ",
                    p.jsx("span", {
                      className: "text-gradient",
                      children: "Generation",
                    }),
                    " ",
                  ],
                }),
                p.jsx("div", {
                  className: "ss:flex hidden md:mr-4 mr-0",
                  children: p.jsx(Zu, {}),
                }),
              ],
            }),
            p.jsx("h1", {
              className:
                "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full",
              children: "Payment Method.",
            }),
            p.jsx("p", {
              className: `${L.paragraph} max-w-[470px] mt-5`,
              children:
                "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
            }),
          ],
        }),
        p.jsxs("div", {
          className: `flex-1 flex ${L.flexCenter} md:my-0 my-10 relative`,
          children: [
            p.jsx("img", {
              src: Qc,
              alt: "billing",
              className: "w-[100%] h-[100%] relative z-[5]",
            }),
            p.jsx("div", {
              className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient",
            }),
            p.jsx("div", {
              className:
                "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40",
            }),
            p.jsx("div", {
              className:
                "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient",
            }),
          ],
        }),
        p.jsx("div", {
          className: `ss:hidden ${L.flexCenter}`,
          children: p.jsx(Zu, {}),
        }),
      ],
    }),
  E1 = () =>
    p.jsxs("div", {
      className: "bg-primary w-full overflow-hidden",
      children: [
        p.jsx("div", {
          className: `${L.paddingX} ${L.flexCenter}`,
          children: p.jsx("div", {
            className: `${L.boxWidth}`,
            children: p.jsx(d1, {}),
          }),
        }),
        p.jsx("div", {
          className: `bg-primary ${L.flexStart}`,
          children: p.jsx("div", {
            className: `${L.boxWidth}`,
            children: p.jsx(S1, {}),
          }),
        }),
        p.jsx("div", {
          className: `bg-primary ${L.paddingX} ${L.flexCenter}`,
          children: p.jsxs("div", {
            className: `${L.boxWidth}`,
            children: [
              p.jsx(w1, {}),
              p.jsx(v1, {}),
              p.jsx(p1, {}),
              p.jsx(m1, {}),
              p.jsx(k1, {}),
              p.jsx(g1, {}),
              p.jsx(y1, {}),
              p.jsx(x1, {}),
            ],
          }),
        }),
      ],
    });
Zl.createRoot(document.getElementById("root")).render(
  p.jsx(j0.StrictMode, { children: p.jsx(E1, {}) })
);
