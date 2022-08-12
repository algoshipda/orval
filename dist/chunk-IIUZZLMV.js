'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ki = Object.create;
var on = Object.defineProperty;
var Ii = Object.getOwnPropertyDescriptor;
var Di = Object.getOwnPropertyNames;
var Gi = Object.getPrototypeOf,
  qi = Object.prototype.hasOwnProperty;
var Q = ((e) =>
  typeof require != 'undefined'
    ? require
    : typeof Proxy != 'undefined'
    ? new Proxy(e, {
        get: (t, r) => (typeof require != 'undefined' ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var Fi = (e, t) => () => (e && (t = e((e = 0))), t);
var E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Ni = (e, t, r, n) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Di(t))
      !qi.call(e, o) &&
        o !== r &&
        on(e, o, {
          get: () => t[o],
          enumerable: !(n = Ii(t, o)) || n.enumerable,
        });
  return e;
};
var ue = (e, t, r) => (
  (r = e != null ? ki(Gi(e)) : {}),
  Ni(
    t || !e || !e.__esModule
      ? on(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var c = Fi(() => {});
var sr = E((sO, Go) => {
  c();
  var Gp = Object.prototype;
  function qp(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || Gp;
    return e === r;
  }
  Go.exports = qp;
});
var Fo = E((iO, qo) => {
  c();
  function Fp(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  qo.exports = Fp;
});
var Bo = E((aO, No) => {
  c();
  var Np = Fo(),
    Bp = Np(Object.keys, Object);
  No.exports = Bp;
});
var Vo = E((pO, Uo) => {
  c();
  var Up = sr(),
    Vp = Bo(),
    Wp = Object.prototype,
    Qp = Wp.hasOwnProperty;
  function Hp(e) {
    if (!Up(e)) return Vp(e);
    var t = [];
    for (var r in Object(e)) Qp.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  Uo.exports = Hp;
});
var ir = E((mO, Wo) => {
  c();
  var zp =
    typeof global == 'object' && global && global.Object === Object && global;
  Wo.exports = zp;
});
var le = E((cO, Qo) => {
  c();
  var _p = ir(),
    Kp = typeof self == 'object' && self && self.Object === Object && self,
    Lp = _p || Kp || Function('return this')();
  Qo.exports = Lp;
});
var ar = E((lO, Ho) => {
  c();
  var Yp = le(),
    Jp = Yp.Symbol;
  Ho.exports = Jp;
});
var Lo = E((uO, Ko) => {
  c();
  var zo = ar(),
    _o = Object.prototype,
    Xp = _o.hasOwnProperty,
    Zp = _o.toString,
    et = zo ? zo.toStringTag : void 0;
  function em(e) {
    var t = Xp.call(e, et),
      r = e[et];
    try {
      e[et] = void 0;
      var n = !0;
    } catch (e2) {}
    var o = Zp.call(e);
    return n && (t ? (e[et] = r) : delete e[et]), o;
  }
  Ko.exports = em;
});
var Jo = E((fO, Yo) => {
  c();
  var tm = Object.prototype,
    rm = tm.toString;
  function nm(e) {
    return rm.call(e);
  }
  Yo.exports = nm;
});
var tt = E((dO, es) => {
  c();
  var Xo = ar(),
    om = Lo(),
    sm = Jo(),
    im = '[object Null]',
    am = '[object Undefined]',
    Zo = Xo ? Xo.toStringTag : void 0;
  function pm(e) {
    return e == null
      ? e === void 0
        ? am
        : im
      : Zo && Zo in Object(e)
      ? om(e)
      : sm(e);
  }
  es.exports = pm;
});
var pr = E((gO, ts) => {
  c();
  function mm(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  ts.exports = mm;
});
var mr = E((yO, rs) => {
  c();
  var cm = tt(),
    lm = pr(),
    um = '[object AsyncFunction]',
    fm = '[object Function]',
    dm = '[object GeneratorFunction]',
    gm = '[object Proxy]';
  function ym(e) {
    if (!lm(e)) return !1;
    var t = cm(e);
    return t == fm || t == dm || t == um || t == gm;
  }
  rs.exports = ym;
});
var os = E((hO, ns) => {
  c();
  var hm = le(),
    Om = hm['__core-js_shared__'];
  ns.exports = Om;
});
var as = E((OO, is) => {
  c();
  var cr = os(),
    ss = (function () {
      var e = /[^.]+$/.exec((cr && cr.keys && cr.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function bm(e) {
    return !!ss && ss in e;
  }
  is.exports = bm;
});
var lr = E((bO, ps) => {
  c();
  var $m = Function.prototype,
    xm = $m.toString;
  function Sm(e) {
    if (e != null) {
      try {
        return xm.call(e);
      } catch (e3) {}
      try {
        return e + '';
      } catch (e4) {}
    }
    return '';
  }
  ps.exports = Sm;
});
var cs = E(($O, ms) => {
  c();
  var Tm = mr(),
    wm = as(),
    Rm = pr(),
    jm = lr(),
    Pm = /[\\^$.*+?()[\]{}|]/g,
    Em = /^\[object .+?Constructor\]$/,
    vm = Function.prototype,
    Cm = Object.prototype,
    Mm = vm.toString,
    Am = Cm.hasOwnProperty,
    km = RegExp(
      '^' +
        Mm.call(Am)
          .replace(Pm, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Im(e) {
    if (!Rm(e) || wm(e)) return !1;
    var t = Tm(e) ? km : Em;
    return t.test(jm(e));
  }
  ms.exports = Im;
});
var us = E((xO, ls) => {
  c();
  function Dm(e, t) {
    return e == null ? void 0 : e[t];
  }
  ls.exports = Dm;
});
var Be = E((SO, fs) => {
  c();
  var Gm = cs(),
    qm = us();
  function Fm(e, t) {
    var r = qm(e, t);
    return Gm(r) ? r : void 0;
  }
  fs.exports = Fm;
});
var gs = E((TO, ds) => {
  c();
  var Nm = Be(),
    Bm = le(),
    Um = Nm(Bm, 'DataView');
  ds.exports = Um;
});
var hs = E((wO, ys) => {
  c();
  var Vm = Be(),
    Wm = le(),
    Qm = Vm(Wm, 'Map');
  ys.exports = Qm;
});
var bs = E((RO, Os) => {
  c();
  var Hm = Be(),
    zm = le(),
    _m = Hm(zm, 'Promise');
  Os.exports = _m;
});
var xs = E((jO, $s) => {
  c();
  var Km = Be(),
    Lm = le(),
    Ym = Km(Lm, 'Set');
  $s.exports = Ym;
});
var Ts = E((PO, Ss) => {
  c();
  var Jm = Be(),
    Xm = le(),
    Zm = Jm(Xm, 'WeakMap');
  Ss.exports = Zm;
});
var Ms = E((EO, Cs) => {
  c();
  var ur = gs(),
    fr = hs(),
    dr = bs(),
    gr = xs(),
    yr = Ts(),
    vs = tt(),
    Ue = lr(),
    ws = '[object Map]',
    ec = '[object Object]',
    Rs = '[object Promise]',
    js = '[object Set]',
    Ps = '[object WeakMap]',
    Es = '[object DataView]',
    tc = Ue(ur),
    rc = Ue(fr),
    nc = Ue(dr),
    oc = Ue(gr),
    sc = Ue(yr),
    ve = vs;
  ((ur && ve(new ur(new ArrayBuffer(1))) != Es) ||
    (fr && ve(new fr()) != ws) ||
    (dr && ve(dr.resolve()) != Rs) ||
    (gr && ve(new gr()) != js) ||
    (yr && ve(new yr()) != Ps)) &&
    (ve = function (e) {
      var t = vs(e),
        r = t == ec ? e.constructor : void 0,
        n = r ? Ue(r) : '';
      if (n)
        switch (n) {
          case tc:
            return Es;
          case rc:
            return ws;
          case nc:
            return Rs;
          case oc:
            return js;
          case sc:
            return Ps;
        }
      return t;
    });
  Cs.exports = ve;
});
var At = E((vO, As) => {
  c();
  function ic(e) {
    return e != null && typeof e == 'object';
  }
  As.exports = ic;
});
var Is = E((CO, ks) => {
  c();
  var ac = tt(),
    pc = At(),
    mc = '[object Arguments]';
  function cc(e) {
    return pc(e) && ac(e) == mc;
  }
  ks.exports = cc;
});
var Fs = E((MO, qs) => {
  c();
  var Ds = Is(),
    lc = At(),
    Gs = Object.prototype,
    uc = Gs.hasOwnProperty,
    fc = Gs.propertyIsEnumerable,
    dc = Ds(
      (function () {
        return arguments;
      })(),
    )
      ? Ds
      : function (e) {
          return lc(e) && uc.call(e, 'callee') && !fc.call(e, 'callee');
        };
  qs.exports = dc;
});
var Bs = E((AO, Ns) => {
  c();
  var gc = Array.isArray;
  Ns.exports = gc;
});
var hr = E((kO, Us) => {
  c();
  var yc = 9007199254740991;
  function hc(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= yc;
  }
  Us.exports = hc;
});
var Ws = E((IO, Vs) => {
  c();
  var Oc = mr(),
    bc = hr();
  function $c(e) {
    return e != null && bc(e.length) && !Oc(e);
  }
  Vs.exports = $c;
});
var Hs = E((DO, Qs) => {
  c();
  function xc() {
    return !1;
  }
  Qs.exports = xc;
});
var Ls = E((rt, Ve) => {
  c();
  var Sc = le(),
    Tc = Hs(),
    Ks = typeof rt == 'object' && rt && !rt.nodeType && rt,
    zs = Ks && typeof Ve == 'object' && Ve && !Ve.nodeType && Ve,
    wc = zs && zs.exports === Ks,
    _s = wc ? Sc.Buffer : void 0,
    Rc = _s ? _s.isBuffer : void 0,
    jc = Rc || Tc;
  Ve.exports = jc;
});
var Js = E((GO, Ys) => {
  c();
  var Pc = tt(),
    Ec = hr(),
    vc = At(),
    Cc = '[object Arguments]',
    Mc = '[object Array]',
    Ac = '[object Boolean]',
    kc = '[object Date]',
    Ic = '[object Error]',
    Dc = '[object Function]',
    Gc = '[object Map]',
    qc = '[object Number]',
    Fc = '[object Object]',
    Nc = '[object RegExp]',
    Bc = '[object Set]',
    Uc = '[object String]',
    Vc = '[object WeakMap]',
    Wc = '[object ArrayBuffer]',
    Qc = '[object DataView]',
    Hc = '[object Float32Array]',
    zc = '[object Float64Array]',
    _c = '[object Int8Array]',
    Kc = '[object Int16Array]',
    Lc = '[object Int32Array]',
    Yc = '[object Uint8Array]',
    Jc = '[object Uint8ClampedArray]',
    Xc = '[object Uint16Array]',
    Zc = '[object Uint32Array]',
    k = {};
  k[Hc] = k[zc] = k[_c] = k[Kc] = k[Lc] = k[Yc] = k[Jc] = k[Xc] = k[Zc] = !0;
  k[Cc] =
    k[Mc] =
    k[Wc] =
    k[Ac] =
    k[Qc] =
    k[kc] =
    k[Ic] =
    k[Dc] =
    k[Gc] =
    k[qc] =
    k[Fc] =
    k[Nc] =
    k[Bc] =
    k[Uc] =
    k[Vc] =
      !1;
  function el(e) {
    return vc(e) && Ec(e.length) && !!k[Pc(e)];
  }
  Ys.exports = el;
});
var Zs = E((qO, Xs) => {
  c();
  function tl(e) {
    return function (t) {
      return e(t);
    };
  }
  Xs.exports = tl;
});
var ti = E((nt, We) => {
  c();
  var rl = ir(),
    ei = typeof nt == 'object' && nt && !nt.nodeType && nt,
    ot = ei && typeof We == 'object' && We && !We.nodeType && We,
    nl = ot && ot.exports === ei,
    Or = nl && rl.process,
    ol = (function () {
      try {
        var e = ot && ot.require && ot.require('util').types;
        return e || (Or && Or.binding && Or.binding('util'));
      } catch (e5) {}
    })();
  We.exports = ol;
});
var si = E((FO, oi) => {
  c();
  var sl = Js(),
    il = Zs(),
    ri = ti(),
    ni = ri && ri.isTypedArray,
    al = ni ? il(ni) : sl;
  oi.exports = al;
});
var br = E((NO, ii) => {
  c();
  var pl = Vo(),
    ml = Ms(),
    cl = Fs(),
    ll = Bs(),
    ul = Ws(),
    fl = Ls(),
    dl = sr(),
    gl = si(),
    yl = '[object Map]',
    hl = '[object Set]',
    Ol = Object.prototype,
    bl = Ol.hasOwnProperty;
  function $l(e) {
    if (e == null) return !0;
    if (
      ul(e) &&
      (ll(e) ||
        typeof e == 'string' ||
        typeof e.splice == 'function' ||
        fl(e) ||
        gl(e) ||
        cl(e))
    )
      return !e.length;
    var t = ml(e);
    if (t == yl || t == hl) return !e.size;
    if (dl(e)) return !pl(e).length;
    for (var r in e) if (bl.call(e, r)) return !1;
    return !0;
  }
  ii.exports = $l;
});
var Dt = {
  name: 'orval',
  description: 'A swagger client generator for typescript',
  version: '6.9.6',
  license: 'MIT',
  files: ['dist'],
  bin: { orval: 'dist/bin/orval.js' },
  main: 'dist/index.js',
  keywords: [
    'rest',
    'client',
    'swagger',
    'open-api',
    'fetch',
    'data fetching',
    'code-generation',
    'angular',
    'react',
    'react-query',
    'svelte',
    'svelte-query',
    'vue',
    'vue-query',
    'msw',
    'mock',
    'axios',
    'vue-query',
    'vue',
    'swr',
  ],
  author: { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  repository: { type: 'git', url: 'https://github.com/anymaniax/orval' },
  scripts: {
    build:
      'tsup ./src/bin/orval.ts ./src/index.ts --minify --clean --dts --splitting',
    dev: "tsup ./src/bin/orval.ts ./src/index.ts --clean --watch src --onSuccess 'yarn generate-api'",
    lint: 'eslint src/**/*.ts',
    test: 'vitest --global test.ts',
    format: 'prettier --write .',
    'format:staged': 'pretty-quick --staged',
    prerelease: 'yarn build && cd ./tests && yarn generate && yarn build',
    release: 'dotenv release-it',
    postrelease: 'yarn build && yarn update-samples',
    'generate-api':
      'node ./dist/bin/orval.js --config ./samples/react-query/basic/orval.config.ts --watch',
    prepare: 'husky install && cd ./samples/react-query/basic && yarn',
    commitlint: 'commitlint',
    'update-samples': 'zx ./scripts/update-samples.mjs',
  },
  devDependencies: {
    '@commitlint/cli': '^17.0.2',
    '@commitlint/config-conventional': '^17.0.3',
    '@faker-js/faker': '^7.3.0',
    '@release-it/conventional-changelog': '^5.0.0',
    '@types/chalk': '^2.2.0',
    '@types/commander': '^2.12.2',
    '@types/fs-extra': '^9.0.12',
    '@types/inquirer': '^8.2.0',
    '@types/lodash.get': '^4.4.6',
    '@types/lodash.omit': '^4.5.6',
    '@types/lodash.omitby': '^4.6.6',
    '@types/lodash.uniq': '^4.5.6',
    '@types/lodash.uniqby': '^4.7.6',
    '@types/lodash.uniqwith': '^4.5.6',
    '@types/micromatch': '^4.0.2',
    '@types/node': '^18.0.0',
    '@types/prettier': '^2.4.4',
    '@types/request': '^2.48.8',
    '@types/validator': '^13.7.1',
    '@typescript-eslint/eslint-plugin': '^5.14.0',
    '@typescript-eslint/parser': '^5.14.0',
    'dotenv-cli': '^5.1.0',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.5.0',
    'eslint-plugin-prettier': '^4.0.0',
    husky: '^8.0.1',
    'lint-staged': '^13.0.3',
    'npm-run-all': '^4.1.5',
    prettier: '2.6.2',
    'pretty-quick': '^3.1.3',
    'release-it': '^15.1.0',
    rimraf: '^3.0.2',
    tsup: '^5.12.0',
    typescript: '^4.6.2',
    vitest: '^0.6.0',
    zx: '^7.0.2',
  },
  dependencies: {
    '@apidevtools/swagger-parser': '^10.1.0',
    acorn: '^8.7.0',
    cac: '^6.7.12',
    chalk: '^4.1.2',
    chokidar: '^3.5.3',
    'compare-versions': '^4.1.3',
    cuid: '^2.1.8',
    debug: '^4.3.3',
    esbuild: '^0.14.25',
    esutils: '2.0.3',
    execa: '^5.1.1',
    'find-up': '5.0.0',
    'fs-extra': '^10.0.1',
    globby: '11.0.4',
    'ibm-openapi-validator': '^0.83.0',
    inquirer: '^8.2.0',
    'lodash.get': '^4.4.2',
    'lodash.omit': '^4.5.0',
    'lodash.omitby': '^4.6.0',
    'lodash.uniq': '^4.5.0',
    'lodash.uniqby': '^4.7.0',
    'lodash.uniqwith': '^4.5.0',
    micromatch: '^4.0.4',
    'openapi3-ts': '^2.0.2',
    'string-argv': '^0.3.1',
    swagger2openapi: '^7.0.8',
    tsconfck: '^2.0.1',
    upath: '^2.0.1',
    url: '^0.11.0',
    validator: '^13.7.0',
  },
};
c();
var H = {
    ANGULAR: 'angular',
    AXIOS: 'axios',
    AXIOS_FUNCTIONS: 'axios-functions',
    REACT_QUERY: 'react-query',
    SVELTE_QUERY: 'svelte-query',
    VUE_QUERY: 'vue-query',
  },
  pe = {
    SINGLE: 'single',
    SPLIT: 'split',
    TAGS: 'tags',
    TAGS_SPLIT: 'tags-split',
  },
  Z = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    PATCH: 'patch',
    DELETE: 'delete',
    HEAD: 'head',
  };
c();
var _upath = require('upath');
var A = (e) => Boolean(e.$ref),
  sn = (e) => !_upath.extname.call(void 0, e);
function N(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function D(e) {
  return typeof e == 'string';
}
function an(e) {
  return typeof e == 'number';
}
function Y(e) {
  return typeof e == 'boolean';
}
function B(e) {
  return typeof e == 'function';
}
function we(e) {
  return typeof e > 'u';
}
function pn(e) {
  return typeof e === null;
}
var mn = (e) => Object.values(Z).includes(e),
  Me = (e, t) => e === t;
c();
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
var _readline = require('readline');
var _readline2 = _interopRequireDefault(_readline);
var q = console.log,
  iu = (exports.e = ({ name: e, version: t, description: r }) =>
    q(
      `\u{1F37B} Start ${_chalk2.default.cyan.bold(e)} ${_chalk2.default.green(
        `v${t}`,
      )}${r ? ` - ${r}` : ''}`,
    )),
  fn = (e) => q(_chalk2.default.red(e));
var dn = (e) =>
    q(
      `\u{1F389} ${
        e ? `${_chalk2.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  gn = (e) => {
    q(_chalk2.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        q(
          _chalk2.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  yn = (e) => {
    q(_chalk2.default.red('(!) Errors')),
      e.forEach((t) =>
        q(
          _chalk2.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Gt = { silent: 0, error: 1, warn: 2, info: 3 },
  ln,
  un,
  qt = 0;
function Vi() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    _readline2.default.cursorTo(process.stdout, 0, 0),
    _readline2.default.clearScreenDown(process.stdout);
}
function J(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Gt[e],
    s = n && process.stdout.isTTY && !process.env.CI ? Vi : () => {};
  function i(u, m, l = {}) {
    if (o >= Gt[u]) {
      let d = u === 'info' ? 'log' : u,
        g = () => {
          if (l.timestamp) {
            let f =
              u === 'info'
                ? _chalk2.default.cyan.bold(r)
                : u === 'warn'
                ? _chalk2.default.yellow.bold(r)
                : _chalk2.default.red.bold(r);
            return `${_chalk2.default.dim(
              new Date().toLocaleTimeString(),
            )} ${f} ${m}`;
          } else return m;
        };
      u === ln && m === un
        ? (qt++, s(), console[d](g(), _chalk2.default.yellow(`(x${qt + 1})`)))
        : ((qt = 0), (un = m), (ln = u), l.clear && s(), console[d](g()));
    }
  }
  let a = new Set(),
    p = {
      hasWarned: !1,
      info(u, m) {
        i('info', u, m);
      },
      warn(u, m) {
        (p.hasWarned = !0), i('warn', u, m);
      },
      warnOnce(u, m) {
        a.has(u) || ((p.hasWarned = !0), i('warn', u, m), a.add(u));
      },
      error(u, m) {
        (p.hasWarned = !0), i('error', u, m);
      },
      clearScreen(u) {
        o >= Gt[u] && s();
      },
    };
  return p;
}
c();
var Ft = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  pt = Ft('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  mt = 'a-z' + Ft('DF-F6,F8-FF', '00'),
  _e = 'A-Z' + Ft('C0-D6,D8-DE', '00'),
  Wi = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  fe = {
    capitalize: new RegExp('(^|[' + pt + '])([' + mt + '])', 'g'),
    pascal: new RegExp('(^|[' + pt + '])+([' + mt + _e + '])', 'g'),
    fill: new RegExp('[' + pt + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + mt + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + Wi + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + _e + '])([' + _e + ']*)([' + _e + '])(?=[^' + _e + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + mt + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + pt + ']'),
  },
  Qi = (e) => e.replace(fe.apostrophe, ''),
  hn = String.prototype.toUpperCase,
  Nt = String.prototype.toLowerCase,
  ct = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(fe.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = Qi(e)),
    e
  ),
  Hi = (e) => Nt.call(e.charAt(0)) + e.slice(1),
  zi = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  Bt = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && fe.upper.test(e) && (e = Nt.call(e)),
      !t && !fe.hole.test(e))
    ) {
      var o = ct(e, ' ');
      fe.hole.test(o) && (e = o);
    }
    return !r && !fe.room.test(e) && (e = e.replace(fe.relax, zi)), e;
  },
  On = (e, t, r) => ct(Nt.call(Bt(e, !!t)), t, r),
  b = (exports.f = (e) =>
    ct(
      Bt(e, !1, !0).replace(fe.pascal, (t, r, n) => hn.call(n)),
      '',
      !0,
    )),
  j = (exports.g = (e) => Hi(b(e))),
  pu = (exports.h = (e) => On(e, '_', !0)),
  Re = (exports.i = (e) => On(e, '-', !0)),
  mu = (exports.j = (e, t, r) => ct(hn.call(Bt(e, !!t, !1, !0)), t, r));
c();
var _esutils = require('esutils');
var _lodashget = require('lodash.get');
var _lodashget2 = _interopRequireDefault(_lodashget);
var K = (e) => {
    if (!(we(e) || pn(e)))
      return D(e)
        ? `'${e}'`
        : an(e) || Y(e) || B(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(K).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let i = K(n);
            return s.length === 1
              ? `{ ${r}: ${i}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${i}, }`
                : t + `${r}: ${i}, `
              : `{ ${r}: ${i}, `;
          }, '');
  },
  U = (exports.l = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: i = !1,
        special: a = !1,
      } = t != null ? t : {},
      p = e;
    return (
      a !== !0 &&
        (p = p.replace(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/g, '')),
      r !== !0 && (p = p.replace(/[\s]/g, r)),
      n !== !0 && (p = p.replace(/['_']/g, n)),
      o !== !0 && (p = p.replace(/[.]/g, o)),
      s !== !0 && (p = p.replace(/[-]/g, s)),
      i && (p = _esutils.keyword.isKeywordES5(p, !0) ? `_${p}` : p),
      p
    );
  }),
  F = (exports.m = (e, t) =>
    e.length
      ? (t ? e.map((n) => _lodashget2.default.call(void 0, n, t)) : e).join(`,
    `) + ','
      : ''),
  Li = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  lt = (exports.n = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + Li[n], '')),
  ut = (exports.o = (e, t = "'") => e.replace(t, `\\${t}`));
c();
var Yi = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  Ae = (exports.q = Yi.reduce(
    (e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e),
    [],
  )),
  oe = (exports.r = [Z.POST, Z.PUT, Z.PATCH, Z.DELETE]),
  yu = (exports.s =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
c();
var _lodashuniq = require('lodash.uniq');
var _lodashuniq2 = _interopRequireDefault(_lodashuniq);
var _lodashuniqwith = require('lodash.uniqwith');
var _lodashuniqwith2 = _interopRequireDefault(_lodashuniqwith);
var Sn = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? _lodashuniqwith2.default
          .call(
            void 0,
            e,
            (o, s) =>
              o.name === s.name &&
              o.default === s.default &&
              o.specKey === s.specKey,
          )
          .sort()
          .map(({ specKey: o, name: s, values: i, alias: a }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${i ? '' : 'type '}{ ${s}${
                    a ? ` as ${a}` : ''
                  } } from '../${_upath.join.call(void 0, p, j(s))}';`
                : `import ${i ? '' : 'type '}{ ${s}${
                    a ? ` as ${a}` : ''
                  } } from './${_upath.join.call(void 0, p, j(s))}';`;
            }
            return `import ${i ? '' : 'type '}{ ${s}${
              a ? ` as ${a}` : ''
            } } from './${j(s)}';`;
          }).join(`
`)
      : '',
  z = (exports.u = ({ mutators: e, implementation: t, oneMore: r }) => {
    let n = _lodashuniqwith2.default
      .call(void 0, e, (o, s) => o.name === s.name && o.default === s.default)
      .map((o) => {
        let s = `${r ? '../' : ''}${o.path}`,
          a = `import ${o.default ? o.name : `{ ${o.name} }`} from '${s}'`;
        if (t && (o.hasErrorType || o.bodyTypeName)) {
          let p = '';
          o.hasErrorType &&
            t.includes(o.errorTypeName) &&
            (p = o.default
              ? `ErrorType as ${o.errorTypeName}`
              : o.errorTypeName);
          let u = '';
          o.bodyTypeName &&
            t.includes(o.bodyTypeName) &&
            (u = o.default ? `BodyType as ${o.bodyTypeName}` : o.bodyTypeName),
            (u || p) &&
              ((a += `
`),
              (a += `import type { ${p}${
                p && u ? ', ' : ''
              }${u} } from '${s}'`));
        }
        return a;
      }).join(`
`);
    return n
      ? n +
          `
`
      : '';
  }),
  $n = ({
    deps: e,
    isAllowSyntheticDefaultImports: t,
    dependency: r,
    specsName: n,
    key: o,
    onlyTypes: s,
  }) => {
    let i = e.find((l) => l.default && (t || !l.syntheticDefaultImport)),
      a = t ? void 0 : e.find((l) => l.syntheticDefaultImport),
      p = _lodashuniq2.default.call(
        void 0,
        e
          .filter((l) => !l.default && !l.syntheticDefaultImport)
          .map(({ name: l, alias: d }) => (d ? `${l} as ${d}` : l)),
      ).join(`,
  `),
      u = '',
      m = a ? `import * as ${a.name} from '${r}';` : '';
    if (m) {
      if (e.length === 1) return m;
      u += `${m}
`;
    }
    return (
      (u += `import ${s ? 'type ' : ''}${i ? `${i.name}${p ? ',' : ''}` : ''}${
        p
          ? `{
  ${p}
}`
          : ''
      } from '${r}${o !== 'default' && n[o] ? `/${n[o]}` : ''}'`),
      u
    );
  },
  Xi = (exports.v = ({
    implementation: e,
    exports: t,
    dependency: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
  }) => {
    let i = t.filter((p) => e.includes(p.alias || p.name));
    if (!i.length) return;
    let a = i.reduce((p, u) => {
      var l, d, g, f;
      let m = o && u.specKey ? u.specKey : 'default';
      return u.values && (s || !u.syntheticDefaultImport)
        ? ((p[m] = {
            ...p[m],
            values: [
              ...((d = (l = p[m]) == null ? void 0 : l.values) != null
                ? d
                : []),
              u,
            ],
          }),
          p)
        : ((p[m] = {
            ...p[m],
            types: [
              ...((f = (g = p[m]) == null ? void 0 : g.types) != null ? f : []),
              u,
            ],
          }),
          p);
    }, {});
    return Object.entries(a).map(([p, { values: u, types: m }]) => {
      let l = '';
      return (
        u &&
          (l += $n({
            deps: u,
            isAllowSyntheticDefaultImports: s,
            dependency: r,
            specsName: n,
            key: p,
            onlyTypes: !1,
          })),
        m &&
          (u &&
            (l += `
`),
          (l += $n({
            deps: m,
            isAllowSyntheticDefaultImports: s,
            dependency: r,
            specsName: n,
            key: p,
            onlyTypes: !0,
          }))),
        l
      );
    }).join(`
`);
  }),
  ft = (exports.w = (e, t, r, n, o) => {
    let s = t
      .map((i) =>
        Xi({
          ...i,
          implementation: e,
          specsName: r,
          hasSchemaDir: n,
          isAllowSyntheticDefaultImports: o,
        }),
      )
      .filter(Boolean).join(`
`);
    return s
      ? s +
          `
`
      : '';
  }),
  de = (exports.x = ({
    response: e,
    body: t,
    queryParams: r,
    headers: n,
    params: o,
  }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...(n ? [{ name: n.schema.name }] : []),
    ...o.flatMap(({ imports: s }) => s),
  ]);
c();
var Zi = (e, t, r) =>
    t && e.formData
      ? `
      formData,`
      : r && e.formUrlEncoded
      ? `
      formUrlEncoded,`
      : e.implementation
      ? `
      ${e.implementation},`
      : '',
  ea = (exports.z = ({
    response: e,
    isExactOptionalPropertyTypes: t,
    queryParams: r,
    headers: n,
    requestOptions: o,
    hasSignal: s,
  }) => {
    var p;
    let i = o !== !1;
    if (!r && !n && !e.isBlob)
      return i
        ? 'options'
        : s
        ? t
          ? '...(signal ? { signal } : {})'
          : 'signal'
        : '';
    let a = '';
    return (
      i ||
        (r &&
          (a += `
        params,`),
        n &&
          (a += `
        headers,`),
        s &&
          (a += t
            ? `
        ...(signal ? { signal } : {}),`
            : `
        signal,`)),
      e.isBlob &&
        (!N(o) || !o.hasOwnProperty('responseType')) &&
        (a += `
        responseType: 'blob',`),
      N(o) &&
        (a += `
 ${(p = K(o)) == null ? void 0 : p.slice(1, -1)}`),
      i &&
        ((a += `
    ...options,`),
        r &&
          (a += `
        params: {...params, ...options?.params},`),
        n &&
          (a += `
        headers: {...headers, ...options?.headers},`)),
      a
    );
  }),
  ge = (exports.A = ({
    route: e,
    body: t,
    headers: r,
    queryParams: n,
    response: o,
    verb: s,
    requestOptions: i,
    isFormData: a,
    isFormUrlEncoded: p,
    isAngular: u,
    isExactOptionalPropertyTypes: m,
    hasSignal: l,
  }) => {
    let d = oe.includes(s),
      g = d ? Zi(t, a, p) : '',
      f = ea({
        response: o,
        queryParams: n == null ? void 0 : n.schema,
        headers: r == null ? void 0 : r.schema,
        requestOptions: i,
        isExactOptionalPropertyTypes: m,
        hasSignal: l,
      }),
      y = f ? `{${f}}` : '';
    return s === Z.DELETE
      ? g
        ? `
      \`${e}\`,{${u ? 'body' : 'data'}:${g} ${f === 'options' ? `...${f}` : f}}
    `
        : `
      \`${e}\`,${f === 'options' ? f : y}
    `
      : `
      \`${e}\`,${d ? g || 'undefined,' : ''}${f === 'options' ? f : y}
    `;
  }),
  ta = (exports.B = (e, t, r) =>
    t && e.formData
      ? `,
       data: formData`
      : r && e.formUrlEncoded
      ? `,
       data: formUrlEncoded`
      : e.implementation
      ? `,
      data: ${e.implementation}`
      : ''),
  ra = (exports.C = (e, t) => {
    if (!t && !e.isBlob) return '';
    let r = '';
    return (
      t &&
        (r += `,
        params`),
      e.isBlob &&
        (r += `,
        responseType: 'blob'`),
      r
    );
  }),
  ye = (exports.D = ({
    route: e,
    body: t,
    headers: r,
    queryParams: n,
    response: o,
    verb: s,
    isFormData: i,
    isFormUrlEncoded: a,
    isBodyVerb: p,
    hasSignal: u,
    isExactOptionalPropertyTypes: m,
  }) => {
    let l = p ? ta(t, i, a) : '',
      d = ra(o, n),
      g = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}', ${r ? '...headers' : ''}}`
        : r
        ? `,
      headers`
        : '';
    return `{url: \`${e}\`, method: '${s}'${g}${l}${d}${
      !p && u ? `, ${m ? '...(signal ? { signal }: {})' : 'signal'}` : ''
    }
    }`;
  }),
  he = (exports.E = (e, t) => {
    var r, n;
    return t
      ? N(e)
        ? `{${(n = K(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : N(e)
      ? (r = K(e)) == null
        ? void 0
        : r.slice(1, -1)
      : '';
  }),
  Oe = (exports.F = ({
    body: e,
    formData: t,
    formUrlEncoded: r,
    isFormData: n,
    isFormUrlEncoded: o,
  }) =>
    n && e.formData
      ? t
        ? `const formData = ${t.name}(${e.implementation})`
        : e.formData
      : o && e.formUrlEncoded
      ? r
        ? `const formUrlEncoded = ${r.name}(${e.implementation})`
        : e.formUrlEncoded
      : '');
c();
c();
var _url = require('url');
var _url2 = _interopRequireDefault(_url);
c();
var _esbuild = require('esbuild');
var _fs = require('fs');
var _fs2 = _interopRequireDefault(_fs);
var _globby = require('globby');
var _globby2 = _interopRequireDefault(_globby);
var _micromatch = require('micromatch');
var _micromatch2 = _interopRequireDefault(_micromatch);
var _path = require('path');
var _path2 = _interopRequireDefault(_path);
c();
var _debug = require('debug');
var _debug2 = _interopRequireDefault(_debug);
var Tn = process.env.ORVAL_DEBUG_FILTER,
  Ut = process.env.DEBUG;
function wn(e, t = {}) {
  let r = _debug2.default.call(void 0, e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...i) => {
    (Tn && !s.includes(Tn)) ||
      (n && !(Ut != null && Ut.includes(o))) ||
      r(s, ...i);
  };
}
var M = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = sn(e),
      o = n ? _upath.join.call(void 0, e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      i = _upath.dirname.call(void 0, o),
      a = _upath.basename.call(void 0, o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: i,
      filename: a,
    };
  },
  En = wn('orval:file-load'),
  Wt = new Map();
async function dt(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: i,
      tsconfig: a,
      load: p = !0,
    } = t != null ? t : {},
    u = Date.now(),
    m,
    l = !1,
    d = !1;
  if (e) (m = _path2.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let y = _path2.default.resolve(r, `${o}.js`);
    if ((_fs2.default.existsSync(y) && (m = y), !m)) {
      let h = _path2.default.resolve(r, `${o}.mjs`);
      _fs2.default.existsSync(h) && ((m = h), (d = !0));
    }
    if (!m) {
      let h = _path2.default.resolve(r, `${o}.ts`);
      _fs2.default.existsSync(h) && ((m = h), (l = !0));
    }
  }
  m ||
    (e
      ? J(s).error(_chalk2.default.red(`File not found => ${e}`))
      : o
      ? J(s).error(_chalk2.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : J(s).error(_chalk2.default.red('File not found')),
    process.exit(1));
  let g = _upath.normalizeSafe.call(void 0, m),
    f = Wt.get(m);
  if (f) return { path: g, ...f, cached: !0 };
  try {
    let y;
    if (!y && !l && !d)
      try {
        delete Q.cache[Q.resolve(m)],
          (y = Q(m)),
          En(`cjs loaded in ${Date.now() - u}ms`);
      } catch (h) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(h.message)
        )
          throw h;
      }
    if (!y) {
      let { code: h } = await ma(
        m,
        d,
        r || _upath.dirname.call(void 0, g),
        i,
        a == null ? void 0 : a.compilerOptions,
      );
      p ? (y = await ca(m, h, n)) : (y = h),
        En(`bundled file loaded in ${Date.now() - u}ms`);
    }
    return Wt.set(m, { file: y }), { path: g, file: y };
  } catch (y) {
    return Wt.set(m, { error: y }), { path: g, error: y };
  }
}
async function ma(e, t = !1, r, n, o) {
  let s = await _esbuild.build.call(void 0, {
      absWorkingDir: process.cwd(),
      entryPoints: [e],
      outfile: 'out.js',
      write: !1,
      platform: 'node',
      bundle: !0,
      format: t ? 'esm' : 'cjs',
      sourcemap: 'inline',
      metafile: !0,
      target: 'es6',
      minifyWhitespace: !0,
      plugins: [
        ...(n || (o == null ? void 0 : o.paths)
          ? [
              {
                name: 'aliasing',
                setup(a) {
                  a.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let u = Object.keys(n),
                        m = u.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, u),
                        );
                      if (m) {
                        let l = _micromatch2.default.scan(m),
                          d = _micromatch2.default.scan(n[m]),
                          g = _upath.resolve.call(void 0, r, d.base),
                          f = l.base
                            ? p.replace(l.base, g)
                            : _upath.joinSafe.call(void 0, g, p),
                          h = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(h)
                          ? { path: h }
                          : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let u = Object.keys(o == null ? void 0 : o.paths),
                        m = u.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, u),
                        );
                      if (m) {
                        let l = _micromatch2.default.scan(m),
                          d = _micromatch2.default.scan(
                            o == null ? void 0 : o.paths[m][0],
                          ),
                          g = _upath.resolve.call(void 0, r, d.base),
                          f = l.base
                            ? p.replace(l.base, g)
                            : _upath.joinSafe.call(void 0, g, p),
                          h = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(h)
                          ? { path: h }
                          : void 0;
                      }
                    }
                  });
                },
              },
            ]
          : []),
        {
          name: 'externalize-deps',
          setup(a) {
            a.onResolve({ filter: /.*/ }, (p) => {
              let u = p.path;
              if (u[0] !== '.' && !_path2.default.isAbsolute(u))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(a) {
            a.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let u = await _fs2.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: u
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(_path2.default.dirname(p.path)),
                  )
                  .replace(/\b__filename\b/g, JSON.stringify(p.path)),
              };
            });
          },
        },
      ],
    }),
    { text: i } = s.outputFiles[0];
  return {
    code: i,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function ca(e, t, r) {
  let n = _path2.default.extname(e),
    o = Q.extensions[n];
  (Q.extensions[n] = (a, p) => {
    p === e ? a._compile(t, p) : o(a, p);
  }),
    delete Q.cache[Q.resolve(e)];
  let s = Q(e),
    i = r && s.__esModule ? s.default : s;
  return (Q.extensions[n] = o), i;
}
async function Qt(e, t) {
  let r = await _globby2.default.call(void 0, e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => _fs2.default.promises.unlink(n)));
}
c();
var _isURL = require('validator/lib/isURL');
var _isURL2 = _interopRequireDefault(_isURL);
var ua = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  be = (e) => _isURL2.default.call(void 0, e) || ua.test(e);
var Ke = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  ya = new RegExp('~1', 'g'),
  $e = (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(ya, '/')),
      s = _lodashget2.default.call(
        void 0,
        t.override,
        [...o.slice(0, 2), 'suffix'],
        '',
      ),
      i = o[o.length - 1];
    if (!r) return { name: b(i) + s, originalName: i, refPaths: o };
    let a = be(t.specKey)
      ? _url2.default.resolve(t.specKey, r)
      : _upath.resolve.call(void 0, M(t.specKey).dirname, r);
    return { name: b(i) + s, originalName: i, specKey: a, refPaths: o };
  };
c();
var _fsextra = require('fs-extra');
var _inquirer = require('inquirer');
var _inquirer2 = _interopRequireDefault(_inquirer);
c();
var _https = require('https');
var _https2 = _interopRequireDefault(_https);
var Cn = (e, t) =>
  new Promise((r, n) => {
    let o = _https2.default.request(e, (s) => {
      let i = '';
      s.on('data', (a) => (i += a.toString())),
        s.on('error', n),
        s.on('end', () => {
          let a = {
            status: s.statusCode,
            headers: s.headers,
            body: JSON.parse(i),
          };
          s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
            ? r(a)
            : n(a);
        });
    });
    o.on('error', n), t && o.write(t, 'binary'), o.end();
  });
var Sa = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
    let s = JSON.stringify({
      query: `query {
      repository(name: "${t}", owner: "${r}") {
        object(expression: "${n}:${o}") {
          ... on Blob {
            text
          }
        }
      }
    }`,
    });
    return [
      {
        method: 'POST',
        hostname: 'api.github.com',
        path: '/graphql',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'orval-importer',
          authorization: `bearer ${e}`,
          'Content-Length': s.length,
        },
      },
      s,
    ];
  },
  Ta = async (e) => {
    if (await _fsextra.pathExists.call(void 0, e))
      return _fsextra.readFile.call(void 0, e, 'utf-8');
    {
      let t = await _inquirer2.default.prompt([
        {
          type: 'input',
          name: 'githubToken',
          message:
            'Please provide a GitHub token with `repo` rules checked (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)',
        },
        {
          type: 'confirm',
          name: 'saveToken',
          message:
            'Would you like to store your token for the next time? (stored in your node_modules)',
        },
      ]);
      return (
        t.saveToken &&
          (await _fsextra.outputFile.call(void 0, e, t.githubToken)),
        t.githubToken
      );
    }
  },
  wa = async (e) => {
    var u, m, l, d;
    let t = _upath.join.call(void 0, __dirname, '.githubToken'),
      r = await Ta(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , i, ...a] = n.split('/'),
      p = a.join('/');
    try {
      let { body: g } = await Cn(
        ...Sa({ accessToken: r, repo: s, owner: o, branch: i, path: p }),
      );
      return (
        (u = g.errors) != null &&
          u.length &&
          ((m = g.errors) == null
            ? void 0
            : m.some((y) => (y == null ? void 0 : y.type) === 'NOT_FOUND')) &&
          (
            await _inquirer2.default.prompt([
              {
                type: 'confirm',
                name: 'removeToken',
                message:
                  "Your token doesn't have the correct permissions, should we remove it?",
              },
            ])
          ).removeToken &&
          (await _fsextra.unlink.call(void 0, t)),
        (d = (l = g.data) == null ? void 0 : l.repository) == null
          ? void 0
          : d.object.text
      );
    } catch (g) {
      throw g.body
        ? (g.body.message === 'Bad credentials' &&
            (
              await _inquirer2.default.prompt([
                {
                  type: 'confirm',
                  name: 'removeToken',
                  message:
                    "Your token doesn't have the correct permissions, should we remove it?",
                },
              ])
            ).removeToken &&
            (await _fsextra.unlink.call(void 0, t)),
          g.body.message || `Oups... \u{1F37B}. ${g}`)
        : `Oups... \u{1F37B}. ${g}`;
    }
  },
  An = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return wa(e.url);
    },
  };
c();
var gt = (e) => e && typeof e == 'object';
function Ee(e, t) {
  return !gt(t) || !gt(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : gt(s) && gt(o)
            ? (r[n] = Ee(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
c();
var kn = ({ title: e, description: t, version: r }) => [
  `Generated by ${Dt.name} v${Dt.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
c();
var _findup = require('find-up');
var _findup2 = _interopRequireDefault(_findup);
var In = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await _findup2.default.call(void 0, ['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => ue(Q(n))) : void 0;
  }
  let r = se(e, t);
  if (_fsextra.existsSync.call(void 0, r))
    return await Promise.resolve().then(() => ue(Q(r)));
};
c();
var _tsconfck = require('tsconfck');
var Gn = async (e, t = process.cwd()) => {
    var r, n;
    if (we(e)) {
      let o = await _findup2.default.call(
        void 0,
        ['tsconfig.json', 'jsconfig.json'],
        { cwd: t },
      );
      return o ? (await _tsconfck.parse.call(void 0, o)).tsconfig : void 0;
    }
    if (D(e)) {
      let o = se(e, t);
      if (_fsextra.existsSync.call(void 0, o)) {
        let s = await _tsconfck.parse.call(void 0, o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: a }) => a === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (N(e)) return e;
  },
  X = (exports.J = (e) => {
    var t, r, n;
    return e
      ? !!((n =
          (t = e == null ? void 0 : e.compilerOptions) == null
            ? void 0
            : t.allowSyntheticDefaultImports) != null
          ? n
          : (r = e == null ? void 0 : e.compilerOptions) == null
          ? void 0
          : r.esModuleInterop)
      : !0;
  });
function Qf(e) {
  return e;
}
var Fn = async (e, t = process.cwd(), r = {}) => {
    var h,
      S,
      $,
      x,
      T,
      w,
      R,
      P,
      C,
      v,
      I,
      G,
      ae,
      Ce,
      L,
      re,
      Qe,
      He,
      ze,
      it,
      at,
      jr,
      Pr,
      Er,
      vr,
      Cr,
      Mr,
      Ar,
      kr,
      Ir,
      Dr,
      Gr,
      qr,
      Fr,
      Nr,
      Br,
      Ur,
      Vr,
      Wr,
      Qr,
      Hr,
      zr,
      _r,
      Kr,
      Lr,
      Yr,
      Jr,
      Xr,
      Zr,
      en,
      tn,
      rn,
      nn;
    let n = await (B(e) ? e() : e);
    n.input ||
      (J().error(_chalk2.default.red('Config require an input')),
      process.exit(1)),
      n.output ||
        (J().error(_chalk2.default.red('Config require an output')),
        process.exit(1));
    let o = D(n.input) ? { target: n.input } : n.input,
      s = D(n.output) ? { target: n.output } : n.output,
      i = se(s.workspace || '', t),
      { clean: a, prettier: p, client: u, mode: m, mock: l, tslint: d } = r,
      g = await Gn(s.tsconfig || r.tsconfig, t),
      f = await In(s.packageJson || r.packageJson, t),
      y = {
        input: {
          target: Ca(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: se(
              (h = o.override) == null ? void 0 : h.transformer,
              t,
            ),
          },
          converterOptions: (S = o.converterOptions) != null ? S : {},
          parserOptions: Ee(va, ($ = o.parserOptions) != null ? $ : {}),
        },
        output: {
          target: se(s.target, i),
          schemas: se(s.schemas, i),
          workspace: s.workspace ? i : void 0,
          client:
            (T = (x = s.client) != null ? x : u) != null
              ? T
              : H.AXIOS_FUNCTIONS,
          mode: Ma((w = s.mode) != null ? w : m),
          mock: (P = (R = s.mock) != null ? R : l) != null ? P : !1,
          clean: (v = (C = s.clean) != null ? C : a) != null ? v : !1,
          prettier: (G = (I = s.prettier) != null ? I : p) != null ? G : !1,
          tslint: (Ce = (ae = s.tslint) != null ? ae : d) != null ? Ce : !1,
          tsconfig: g,
          typescriptVersion: s.typescriptVersion,
          packageJson: f,
          headers: (L = s.headers) != null ? L : !1,
          override: {
            ...s.override,
            operations: qn(
              (Qe = (re = s.override) == null ? void 0 : re.operations) != null
                ? Qe
                : {},
              i,
            ),
            tags: qn(
              (ze = (He = s.override) == null ? void 0 : He.tags) != null
                ? ze
                : {},
              i,
            ),
            mutator: De(i, (it = s.override) == null ? void 0 : it.mutator),
            formData:
              (Er = Y((at = s.override) == null ? void 0 : at.formData)
                ? (Pr = s.override) == null
                  ? void 0
                  : Pr.formData
                : De(i, (jr = s.override) == null ? void 0 : jr.formData)) !=
              null
                ? Er
                : !0,
            formUrlEncoded:
              (Ar = Y((vr = s.override) == null ? void 0 : vr.formUrlEncoded)
                ? (Mr = s.override) == null
                  ? void 0
                  : Mr.formUrlEncoded
                : De(
                    i,
                    (Cr = s.override) == null ? void 0 : Cr.formUrlEncoded,
                  )) != null
                ? Ar
                : !0,
            header:
              ((kr = s.override) == null ? void 0 : kr.header) === !1
                ? !1
                : B((Ir = s.override) == null ? void 0 : Ir.header)
                ? (Dr = s.override) == null
                  ? void 0
                  : Dr.header
                : kn,
            requestOptions:
              (qr = (Gr = s.override) == null ? void 0 : Gr.requestOptions) !=
              null
                ? qr
                : !0,
            components: {
              schemas: {
                suffix: Ke.schemas,
                ...((Br =
                  (Nr = (Fr = s.override) == null ? void 0 : Fr.components) ==
                  null
                    ? void 0
                    : Nr.schemas) != null
                  ? Br
                  : {}),
              },
              responses: {
                suffix: Ke.responses,
                ...((Wr =
                  (Vr = (Ur = s.override) == null ? void 0 : Ur.components) ==
                  null
                    ? void 0
                    : Vr.responses) != null
                  ? Wr
                  : {}),
              },
              parameters: {
                suffix: Ke.parameters,
                ...((zr =
                  (Hr = (Qr = s.override) == null ? void 0 : Qr.components) ==
                  null
                    ? void 0
                    : Hr.parameters) != null
                  ? zr
                  : {}),
              },
              requestBodies: {
                suffix: Ke.requestBodies,
                ...((Lr =
                  (Kr = (_r = s.override) == null ? void 0 : _r.components) ==
                  null
                    ? void 0
                    : Kr.requestBodies) != null
                  ? Lr
                  : {}),
              },
            },
            query: {
              useQuery: !0,
              signal: !0,
              ...((Jr = (Yr = s.override) == null ? void 0 : Yr.query) != null
                ? Jr
                : {}),
            },
            swr: {
              ...((Zr = (Xr = s.override) == null ? void 0 : Xr.swr) != null
                ? Zr
                : {}),
            },
            angular: {
              provideIn:
                (rn =
                  (tn = (en = s.override) == null ? void 0 : en.angular) == null
                    ? void 0
                    : tn.provideIn) != null
                  ? rn
                  : 'root',
            },
            useDates: ((nn = s.override) == null ? void 0 : nn.useDates) || !1,
          },
        },
        hooks: n.hooks ? Aa(n.hooks) : {},
      };
    return (
      y.input.target ||
        (J().error(_chalk2.default.red('Config require an input target')),
        process.exit(1)),
      !y.output.target &&
        !y.output.schemas &&
        (J().error(
          _chalk2.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      y
    );
  },
  va = { validate: !0, resolve: { github: An } },
  De = (e, t) => {
    var r;
    return N(t)
      ? (t.path ||
          (J().error(_chalk2.default.red('Mutator need a path')),
          process.exit(1)),
        {
          ...t,
          path: _upath.resolve.call(void 0, e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        })
      : D(t)
      ? { path: _upath.resolve.call(void 0, e, t), default: !0 }
      : t;
  },
  Ca = (e, t) => (D(e) && !be(e) ? se(e, t) : e),
  se = (e, t) => (D(e) ? _upath.resolve.call(void 0, t, e) : e),
  qn = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map(
        ([
          r,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: i,
            requestOptions: a,
            ...p
          },
        ]) => [
          r,
          {
            ...p,
            ...(n ? { transformer: se(n, t) } : {}),
            ...(o ? { mutator: De(t, o) } : {}),
            ...(s ? { formData: Y(s) ? s : De(t, s) } : {}),
            ...(i ? { formUrlEncoded: Y(i) ? i : De(t, i) } : {}),
          },
        ],
      ),
    ),
  Ma = (e) =>
    e
      ? Object.values(pe).includes(e)
        ? e
        : (J().warn(
            _chalk2.default.yellow(`Unknown the provided mode => ${e}`),
          ),
          pe.SINGLE)
      : pe.SINGLE,
  Aa = (e) =>
    Object.keys(e).reduce(
      (r, n) =>
        D(e[n])
          ? { ...r, [n]: [e[n]] }
          : Array.isArray(e[n])
          ? { ...r, [n]: e[n] }
          : B(e[n])
          ? { ...r, [n]: [e[n]] }
          : r,
      {},
    );
c();
var Nn = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => ue(Q('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((a) => typeof a == 'string')
        : e;
  q(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((a) => '"' + a + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (a, p) => {
      q(`Change detected: ${a} ${p}`);
      try {
        await t();
      } catch (u) {
        q(_chalk2.default.red(u));
      }
    });
};
c();
c();
var _swaggerparser = require('@apidevtools/swagger-parser');
var _swaggerparser2 = _interopRequireDefault(_swaggerparser);
var _console = require('console');
c();
var _lodashomit = require('lodash.omit');
var _lodashomit2 = _interopRequireDefault(_lodashomit);
c();
var me = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
c();
var _swagger2openapi = require('swagger2openapi');
var _swagger2openapi2 = _interopRequireDefault(_swagger2openapi);
var Bn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? _swagger2openapi2.default.convertObj(e, t, (o, s) => {
            o
              ? (q(
                  _chalk2.default.yellow(`${r}
=> ${o}`),
                ),
                n(e))
              : n(s.openapi);
          })
        : n(e);
    });
  } catch (n) {
    throw `Oups... \u{1F37B}.
Path: ${r}
Parsing Error: ${n}`;
  }
};
c();
var yt = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (D(e)) {
      let n = _upath.resolve.call(void 0, t, e),
        o = await Promise.resolve().then(() => ue(Q(n)));
      return r && N(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
c();
c();
var Un = (e) => /[^{]*{[\w*_-]*}.*/.test(e),
  Vn = (e) => {
    let t = e.match(/([^{]*){?([\w*_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = U(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Un(t[3]) ? Vn(t[3]) : t[3];
    return Un(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  Wn = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${Vn(n)}` : `${r}/${n}`,
        '',
      );
c();
var V = (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let u = V(e == null ? void 0 : e.schema, t, r);
    return { schema: { ...e, schema: u.schema }, imports: r };
  }
  if (!A(e)) return { schema: e, imports: r };
  let { name: n, originalName: o, specKey: s, refPaths: i } = $e(e.$ref, t),
    a = _lodashget2.default.call(void 0, t.specs[s || t.specKey], i);
  if (!a) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return V(a, { ...t, specKey: s || t.specKey }, [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
c();
c();
var Fa = [
    {
      exports: [
        { name: 'HttpClient', values: !0 },
        { name: 'HttpHeaders' },
        { name: 'HttpParams' },
        { name: 'HttpContext' },
      ],
      dependency: '@angular/common/http',
    },
    {
      exports: [{ name: 'Injectable', values: !0 }],
      dependency: '@angular/core',
    },
    { exports: [{ name: 'Observable', values: !0 }], dependency: 'rxjs' },
  ],
  _t = new Map(),
  Qn = () => Fa,
  Hn = (e) => {
    let t = U(e);
    return `${b(t)}Service`;
  },
  zn = ({
    title: e,
    isRequestOptions: t,
    isMutator: r,
    isGlobalMutator: n,
    provideIn: o,
  }) => `
${
  t && !n
    ? `type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};`
    : ''
}

${
  t && r
    ? `// eslint-disable-next-line
    type ThirdParameter<T extends (...args: any) => any> = T extends (
  config: any,
  httpClient: any,
  args: infer P,
) => any
  ? P
  : never;`
    : ''
}

@Injectable(${o ? `{ providedIn: '${Y(o) ? 'root' : o}' }` : ''})
export class ${e} {
  constructor(
    private http: HttpClient,
  ) {}`,
  _n = ({ operationNames: e }) => {
    let t = `};

`;
    return (
      e.forEach((r) => {
        _t.has(r) &&
          (t +=
            _t.get(r) +
            `
`);
      }),
      t
    );
  },
  Na = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: i,
      verb: a,
      override: p,
      formData: u,
      formUrlEncoded: m,
    },
    { route: l, context: d },
  ) => {
    var w, R;
    let g = (p == null ? void 0 : p.requestOptions) !== !1,
      f = (p == null ? void 0 : p.formData) !== !1,
      y = (p == null ? void 0 : p.formUrlEncoded) !== !1,
      h = !!(
        (R = (w = d.tsconfig) == null ? void 0 : w.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      S = oe.includes(a),
      $ = Oe({
        formData: u,
        formUrlEncoded: m,
        body: s,
        isFormData: f,
        isFormUrlEncoded: y,
      }),
      x = n.definition.success || 'unknown';
    if ((_t.set(r, `export type ${b(r)}ClientResult = NonNullable<${x}>`), o)) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: y,
          hasSignal: !1,
          isBodyVerb: S,
          isExactOptionalPropertyTypes: h,
        }),
        C = g ? he(p == null ? void 0 : p.requestOptions, o.hasThirdArg) : '',
        v =
          o.bodyTypeName && s.definition
            ? F(i, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(i, 'implementation');
      return ` ${r}<TData = ${x}>(
    ${v}
 ${
   g && o.hasThirdArg ? `options?: ThirdParameter<typeof ${o.name}>` : ''
 }) {${$}
      return ${o.name}<TData>(
      ${P},
      this.http,
      ${C});
    }
  `;
    }
    let T = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: a,
      requestOptions: p == null ? void 0 : p.requestOptions,
      isFormData: f,
      isFormUrlEncoded: y,
      isAngular: !0,
      isExactOptionalPropertyTypes: h,
      hasSignal: !1,
    });
    return ` ${r}<TData = ${x}>(
    ${F(i, 'implementation')} ${
      g
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${$}
    return this.http.${a}<TData>(${T});
  }
`;
  },
  Kn = (e, t) => {
    let r = de(e);
    return { implementation: Na(e, t), imports: r };
  };
c();
var Ba = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  ht = new Map(),
  Kt = (e) => [...(e ? [] : Ba)],
  Ua = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: i,
      verb: a,
      override: p,
      formData: u,
      formUrlEncoded: m,
    },
    { route: l, context: d },
  ) => {
    var w, R;
    let g = (p == null ? void 0 : p.requestOptions) !== !1,
      f = (p == null ? void 0 : p.formData) !== !1,
      y = (p == null ? void 0 : p.formUrlEncoded) !== !1,
      h = !!(
        (R = (w = d.tsconfig) == null ? void 0 : w.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      S = X(d.tsconfig),
      $ = Oe({
        formData: u,
        formUrlEncoded: m,
        body: s,
        isFormData: f,
        isFormUrlEncoded: y,
      }),
      x = oe.includes(a);
    if (o) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: y,
          isBodyVerb: x,
          hasSignal: !1,
          isExactOptionalPropertyTypes: h,
        }),
        C = g ? he(p == null ? void 0 : p.requestOptions, o.hasSecondArg) : '';
      ht.set(
        r,
        (I) =>
          `export type ${b(r)}Result = NonNullable<Awaited<ReturnType<${
            I ? `ReturnType<typeof ${I}>['${r}']` : `typeof ${r}`
          }>>>`,
      );
      let v =
        o.bodyTypeName && s.definition
          ? F(i, 'implementation').replace(
              new RegExp(`(\\w*):\\s?${s.definition}`),
              `$1: ${o.bodyTypeName}<${s.definition}>`,
            )
          : F(i, 'implementation');
      return `const ${r} = (
    ${v}
 ${
   g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>,` : ''
 }) => {${$}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${P},
      ${C});
    }
  `;
    }
    let T = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: a,
      requestOptions: p == null ? void 0 : p.requestOptions,
      isFormData: f,
      isFormUrlEncoded: y,
      isExactOptionalPropertyTypes: h,
      hasSignal: !1,
    });
    return (
      ht.set(
        r,
        () =>
          `export type ${b(r)}Result = AxiosResponse<${
            n.definition.success || 'unknown'
          }>`,
      ),
      `const ${r} = <TData = AxiosResponse<${
        n.definition.success || 'unknown'
      }>>(
    ${F(i, 'implementation')} ${
        g
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${$}
    return axios${S ? '' : '.default'}.${a}(${T});
  }
`
    );
  },
  Lt = (e) => {
    let t = U(e);
    return `get${b(t)}`;
  },
  Yt = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
${
  t && r
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}
  ${
    n
      ? ''
      : `export const ${e} = () => {
`
  }`,
  Jt = ({
    operationNames: e,
    title: t,
    noFunction: r,
    hasMutator: n,
    hasAwaitedType: o,
  }) => {
    let s = '';
    return (
      r ||
        (s += `return {${e.join(',')}}};
`),
      n &&
        !o &&
        (s += `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`),
      e.forEach((i) => {
        ht.has(i) &&
          (s +=
            ht.get(i)(r ? void 0 : t) +
            `
`);
      }),
      s
    );
  },
  Xt = (e, t) => {
    let r = de(e);
    return { implementation: Ua(e, t), imports: r };
  },
  Ln = (e, t, r) => {
    let { implementation: n, imports: o } = Xt(e, t, r);
    return { implementation: 'export ' + n, imports: o };
  };
c();
c();
var Yn = (e) => /[^{]*{[\w*_-]*}.*/.test(e),
  Jn = (e) => {
    let t = e.match(/([^{]*){?([\w*_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = U(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Yn(t[3]) ? Jn(t[3]) : t[3];
    return Yn(e) ? `${r}:${n}${o}` : `${r}${n}${o}`;
  },
  Xn = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o, s) =>
          !o && !s ? n : o.includes('{') ? `${n}/${Jn(o)}` : `${n}/${o}`,
        t,
      );
c();
c();
c();
var Zn = {
  email: 'faker.internet.email()',
  zipCode: 'faker.address.zipCode()',
  city: 'faker.address.city()',
  streetName: 'faker.address.streetName()',
  country: 'faker.address.country()',
  date: 'faker.date.recent()',
  iban: 'faker.finance.iban()',
  userName: 'faker.internet.userName()',
  firstName: 'faker.name.firstName()',
  lastName: 'faker.name.lastName()',
  jobTitle: 'faker.name.jobTitle()',
  gender: 'faker.name.gender()',
  phoneNumber: 'faker.phone.phoneNumber()',
  url: 'faker.internet.url()',
};
c();
c();
var eo = (e, t, r) => {
  var i, a, p, u;
  let n = Object.entries(
      (a = (i = t.specs[r].components) == null ? void 0 : i.schemas) != null
        ? a
        : [],
    ).reduce((m, [l, d]) => ((m[l] = d), m), {}),
    o = Object.entries(
      (u = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? u
        : [],
    ).reduce((m, [l, d]) => {
      var g, f;
      return (
        (m[l] = A(d)
          ? d
          : (f = (g = d.content) == null ? void 0 : g['application/json']) ==
            null
          ? void 0
          : f.schema),
        m
      );
    }, {});
  return { ...{ ...n, ...o }[e], specKey: r };
};
var Va = (e) => e[0] === '/' && e[e.length - 1] === '/',
  Ot = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (Va(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: Ye(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  Ye = (e, t) => (t ? `faker.helpers.arrayElement([${e}, null])` : e),
  ce = ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: i,
  }) => {
    if (A(e)) {
      let { name: p, specKey: u = s.specKey } = $e(e.$ref, s),
        m = { ...eo(p, s, u), name: p, path: e.path, isRef: !0 };
      return {
        ...Le({
          item: m,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: { ...s, specKey: u },
          imports: i,
        }),
        type: m.type,
      };
    }
    return {
      ...Le({
        item: e,
        mockOptions: t,
        operationId: r,
        tags: n,
        combine: o,
        context: s,
        imports: i,
      }),
      type: e.type,
    };
  };
c();
var _cuid = require('cuid');
var _cuid2 = _interopRequireDefault(_cuid);
c();
var to = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
c();
var ro = ({
  item: e,
  separator: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: i,
  imports: a,
}) => {
  var d, g, f;
  let p = [],
    u = (
      (d = s == null ? void 0 : s.includedProperties) != null ? d : []
    ).slice(0),
    m =
      A(e) || e.properties
        ? ce({
            schema: _lodashomit2.default.call(void 0, e, t),
            combine: { separator: 'allOf', includedProperties: [] },
            mockOptions: r,
            operationId: n,
            tags: o,
            context: i,
            imports: a,
          })
        : void 0;
  return (
    u.push(
      ...((g = m == null ? void 0 : m.includedProperties) != null ? g : []),
    ),
    {
      value: ((f = e[t]) != null ? f : []).reduce((y, h, S, $) => {
        var w, R;
        let x = ce({
          schema: { ...h, name: e.name, path: e.path ? e.path : '#' },
          combine: {
            separator: t,
            includedProperties:
              t !== 'oneOf'
                ? u
                : (w = m == null ? void 0 : m.includedProperties) != null
                ? w
                : [],
          },
          mockOptions: r,
          operationId: n,
          tags: o,
          context: i,
          imports: a,
        });
        p.push(...x.imports),
          u.push(...((R = x.includedProperties) != null ? R : []));
        let T =
          (m == null ? void 0 : m.value) && t === 'oneOf'
            ? `${x.value.slice(0, -1)},${m.value}}`
            : x.value;
        return !S && !s
          ? x.enums || t === 'oneOf'
            ? $.length === 1
              ? `faker.helpers.arrayElement([${T}])`
              : `faker.helpers.arrayElement([${T},`
            : $.length === 1
            ? x.type !== 'object'
              ? `${T}`
              : `{${T}}`
            : `{${T},`
          : $.length - 1 === S
          ? x.enums || t === 'oneOf'
            ? `${y}${T}${s ? '' : '])'}`
            : `${y}${T}${m != null && m.value ? `,${m.value}` : ''}${
                s ? '' : '}'
              }`
          : T
          ? `${y}${T},`
          : y;
      }, ''),
      imports: p,
      name: e.name,
      includedProperties: u,
    }
  );
};
c();
var Ge = (e) => (_esutils.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var no = ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: i,
}) => {
  if (A(e))
    return ce({
      schema: {
        ...e,
        name: e.name,
        path: e.path ? `${e.path}.${e.name}` : e.name,
      },
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: i,
    });
  if (e.allOf || e.oneOf || e.anyOf) {
    let a = e.allOf ? 'allOf' : e.oneOf ? 'oneOf' : 'anyOf';
    return ro({
      item: e,
      separator: a,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: i,
    });
  }
  if (e.properties) {
    let a = !o || (o == null ? void 0 : o.separator) === 'oneOf' ? '{' : '',
      p = [],
      u = [];
    return (
      (a += Object.entries(e.properties)
        .map(([m, l]) => {
          if (o != null && o.includedProperties.includes(m)) return;
          let d =
            (t == null ? void 0 : t.required) ||
            (Array.isArray(e.required) ? e.required : []).includes(m);
          if (to(e.path, `\\.${m}\\.`) >= 1) return;
          let g = ce({
            schema: {
              ...l,
              name: m,
              path: e.path ? `${e.path}.${m}` : `#.${m}`,
            },
            mockOptions: t,
            operationId: r,
            tags: n,
            context: s,
            imports: p,
          });
          p.push(...g.imports), u.push(m);
          let f = Ge(m);
          return !d && !g.overrided
            ? `${f}: faker.helpers.arrayElement([${g.value}, undefined])`
            : `${f}: ${g.value}`;
        })
        .filter(Boolean)
        .join(', ')),
      (a += !o || (o == null ? void 0 : o.separator) === 'oneOf' ? '}' : ''),
      { value: a, imports: p, name: e.name, includedProperties: u }
    );
  }
  if (e.additionalProperties) {
    if (Y(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let a = ce({
      schema: {
        ...e.additionalProperties,
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
      },
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: i,
    });
    return {
      ...a,
      value: `{
        '${_cuid2.default.call(void 0)}': ${a.value}
      }`,
    };
  }
  return { value: '{}', imports: [], name: e.name };
};
var Le = ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: i,
}) => {
  var d, g, f, y;
  let a = Ot(
    (g = (d = r == null ? void 0 : r.operations) == null ? void 0 : d[n]) ==
      null
      ? void 0
      : g.properties,
    e,
  );
  if (a) return a;
  let p = Object.entries(
      (f = r == null ? void 0 : r.tags) != null ? f : {},
    ).reduce((h, [S, $]) => (o.includes(S) ? Ee(h, $) : h), {}),
    u = Ot(p == null ? void 0 : p.properties, e);
  if (u) return u;
  let m = Ot(r == null ? void 0 : r.properties, e);
  if (m) return m;
  let l = { ...Zn, ...((y = r == null ? void 0 : r.format) != null ? y : {}) };
  if (e.format && l[e.format])
    return {
      value: Ye(l[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: Ye(
          `faker.datatype.number({min: ${e.minimum}, max: ${e.maximum}})`,
          e.nullable,
        ),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: '[]', imports: [], name: e.name };
      let {
        value: h,
        enums: S,
        imports: $,
        name: x,
      } = ce({
        schema: {
          ...e.items,
          name: e.name,
          path: e.path ? `${e.path}.[]` : '#.[]',
        },
        combine: s,
        mockOptions: r,
        operationId: n,
        tags: o,
        context: i,
        imports: t,
      });
      if (S) {
        if (!A(e.items)) return { value: h, imports: $, name: e.name };
        let T = t.find((R) => x.replace('[]', '') === R.name);
        return {
          value: `faker.helpers.arrayElements(Object.values(${
            (T == null ? void 0 : T.name) || x
          }))`,
          imports: T
            ? [
                ...$,
                {
                  ...T,
                  values: !0,
                  ...(Me(i.specKey, i.target) ? {} : { specKey: i.specKey }),
                },
              ]
            : $,
          name: e.name,
        };
      }
      return {
        value: `Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (${h}))`,
        imports: $,
        name: e.name,
      };
    }
    case 'string': {
      let h = 'faker.random.word()',
        S = [];
      if (e.enum) {
        let $ = "['" + e.enum.map((x) => ut(x)).join("','") + "']";
        e.isRef &&
          (($ = `Object.values(${e.name})`),
          (S = [
            {
              name: e.name,
              values: !0,
              ...(Me(i.specKey, i.target) ? {} : { specKey: i.specKey }),
            },
          ])),
          (h = `faker.helpers.arrayElement(${$})`);
      }
      return {
        value: Ye(h, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: S,
      };
    }
    case 'object':
    default:
      return no({
        item: e,
        mockOptions: r,
        operationId: n,
        tags: o,
        combine: s,
        context: i,
        imports: t,
      });
  }
};
var bt = (e, t) =>
    Object.entries(B(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = B(o) ? `(${o})()` : K(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  za = (e, t) => {
    var r, n, o;
    return {
      required: (r = t == null ? void 0 : t.mock) == null ? void 0 : r.required,
      ...((n = t == null ? void 0 : t.mock) != null && n.properties
        ? { properties: bt(t.mock.properties, e) }
        : {}),
      ...((o = t == null ? void 0 : t.mock) != null && o.format
        ? { format: bt(t.mock.format, e) }
        : {}),
      ...(t != null && t.operations
        ? {
            operations: Object.entries(t.operations).reduce((s, [i, a]) => {
              var p;
              return (
                (p = a.mock) != null &&
                  p.properties &&
                  (s[i] = { properties: bt(a.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {}),
      ...(t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [i, a]) => {
              var p;
              return (
                (p = a.mock) != null &&
                  p.properties &&
                  (s[i] = { properties: bt(a.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {}),
    };
  },
  _a = (e) => {
    let t = e.endsWith('[]');
    switch (t ? e.slice(0, -2) : e) {
      case 'number':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.datatype.number())'
          : 'faker.datatype.number().toString()';
      case 'string':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.random.word())'
          : 'faker.random.word()';
      default:
        return 'undefined';
    }
  },
  Ka = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    r.types.success.reduce(
      (i, { value: a, originalSchema: p, imports: u, isRef: m }) => {
        var g, f;
        if (!a || Ae.includes(a)) {
          let y = _a(a);
          return i.definitions.push(o ? o(y, r.definition.success) : y), i;
        }
        if (!p) return i;
        let l = V(p, s),
          d = Le({
            item: { name: a, ...l.schema },
            imports: u,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: m
              ? {
                  ...s,
                  specKey:
                    (f = (g = r.imports[0]) == null ? void 0 : g.specKey) !=
                    null
                      ? f
                      : s.specKey,
                }
              : s,
          });
        return (
          i.imports.push(...d.imports),
          i.definitions.push(
            o ? o(d.value, r.definition.success) : d.value.toString(),
          ),
          i
        );
      },
      { definitions: [], imports: [] },
    ),
  oo = ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let i = za(s.specs[s.specKey], n),
      { definitions: a, imports: p } = Ka({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: i,
        transformer: o,
        context: s,
      });
    return { definition: '[' + a.join(', ') + ']', definitions: a, imports: p };
  },
  so = (e, t) => {
    var o, s, i;
    let r =
        (i =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : i.data,
      n = B(r) ? `(${r})()` : K(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var La = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  xe = ({
    implementation: e,
    imports: t,
    specsName: r,
    hasSchemaDir: n,
    isAllowSyntheticDefaultImports: o,
  }) => ft(e, [...La, ...t], r, n, o),
  io = (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: i },
  ) => {
    var f, y;
    let {
        definitions: a,
        definition: p,
        imports: u,
      } = oo({ operationId: e, tags: n, response: t, override: s, context: i }),
      m = Xn(o, (f = s == null ? void 0 : s.mock) == null ? void 0 : f.baseUrl),
      l = so(e, s),
      d = '';
    l
      ? (d = l)
      : a.length > 1
      ? (d = `faker.helpers.arrayElement(${p})`)
      : a[0] && (d = a[0]);
    let g = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          d && d !== 'undefined'
            ? `export const get${b(e)}Mock = () => (${d})

`
            : '',
        handler: `rest.${r}('${m}', (_req, res, ctx) => {
        return res(
          ctx.delay(${
            ((y = s == null ? void 0 : s.mock) == null ? void 0 : y.delay) ||
            1e3
          }),
          ctx.status(200, 'Mocked status'),${
            d && d !== 'undefined'
              ? `
ctx.${g}(get${b(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: u,
    };
  };
c();
var _lodashomitby = require('lodash.omitby');
var _lodashomitby2 = _interopRequireDefault(_lodashomitby);
c();
var W = {
  PARAM: 'param',
  BODY: 'body',
  QUERY_PARAM: 'queryParam',
  HEADER: 'header',
};
var er = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  Ja = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryStoreResult' },
        { name: 'UseInfiniteQueryStoreResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@sveltestack/svelte-query',
    },
  ],
  ao = (e) => [...(e ? [] : er), ...Ja],
  Xa = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'react-query',
    },
  ],
  Za = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@tanstack/react-query',
    },
  ],
  po = (e, t) => {
    var o, s, i, a, p, u;
    let r =
        (i =
          (o = t == null ? void 0 : t.dependencies) == null
            ? void 0
            : o['react-query']) != null
          ? i
          : (s = t == null ? void 0 : t.devDependencies) == null
          ? void 0
          : s['react-query'],
      n =
        (u =
          (a = t == null ? void 0 : t.dependencies) == null
            ? void 0
            : a['@tanstack/react-query']) != null
          ? u
          : (p = t == null ? void 0 : t.devDependencies) == null
          ? void 0
          : p['@tanstack/react-query'];
    return [...(e ? [] : er), ...(r && !n ? Xa : Za)];
  },
  ep = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
      ],
      dependency: 'vue-query',
    },
    {
      exports: [
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'vue-query/types',
    },
    {
      exports: [{ name: 'UseQueryReturnType' }],
      dependency: 'vue-query/lib/vue/useBaseQuery',
    },
  ],
  mo = (e) => [...(e ? [] : er), ...ep],
  tp = ({ isRequestOptions: e, hasSignal: t }) =>
    e
      ? `options?: AxiosRequestConfig
`
      : t
      ? `signal?: AbortSignal
`
      : '',
  rp = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: i,
      verb: a,
      formData: p,
      formUrlEncoded: u,
      override: m,
    },
    { route: l, context: d },
  ) => {
    var P, C;
    let g = m.requestOptions !== !1,
      f = m.formData !== !1,
      y = m.formUrlEncoded !== !1,
      h = !!m.query.signal,
      S = X(d.tsconfig),
      $ = !!(
        (C = (P = d.tsconfig) == null ? void 0 : P.compilerOptions) != null &&
        C.exactOptionalPropertyTypes
      ),
      x = oe.includes(a),
      T = Oe({
        formData: p,
        formUrlEncoded: u,
        body: s,
        isFormData: f,
        isFormUrlEncoded: y,
      });
    if (o) {
      let v = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: y,
          isBodyVerb: x,
          hasSignal: h,
          isExactOptionalPropertyTypes: $,
        }),
        I =
          (o == null ? void 0 : o.bodyTypeName) && s.definition
            ? F(i, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(i, 'implementation'),
        G = g ? he(m.requestOptions, o.hasSecondArg) : '';
      return o.isHook
        ? `export const use${b(r)}Hook = () => {
        const ${r} = ${o.name}<${n.definition.success || 'unknown'}>();

        return (
    ${I}
 ${
   g && o.hasSecondArg
     ? `options?: SecondParameter<ReturnType<typeof ${o.name}>>,`
     : ''
 }${
            !x && h
              ? `signal?: AbortSignal
`
              : ''
          }) => {${T}
        return ${r}(
          ${v},
          ${G});
        }
      }
    `
        : `export const ${r} = (
    ${I}
 ${g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>,` : ''}${
            !x && h
              ? `signal?: AbortSignal
`
              : ''
          }) => {${T}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${v},
      ${G});
    }
  `;
    }
    let w = ge({
        route: l,
        body: s,
        headers: e,
        queryParams: t,
        response: n,
        verb: a,
        requestOptions: m == null ? void 0 : m.requestOptions,
        isFormData: f,
        isFormUrlEncoded: y,
        isExactOptionalPropertyTypes: $,
        hasSignal: h,
      }),
      R = tp({ isRequestOptions: g, hasSignal: h });
    return `export const ${r} = (
    ${F(i, 'implementation')} ${R} ): Promise<AxiosResponse<${
      n.definition.success || 'unknown'
    }>> => {${T}
    return axios${S ? '' : '.default'}.${a}(${w});
  }
`;
  },
  Zt = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  np = ['getNextPageParam', 'getPreviousPageParam'],
  op = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = N(t)
      ? ` ${
          (o = K(
            _lodashomitby2.default.call(
              void 0,
              t,
              (s, i) => !!(r !== Zt.INFINITE && np.includes(i)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !N(t) || !t.hasOwnProperty('enabled')
            ? `enabled: !!(${e.map(({ name: s }) => s).join(' && ')}),`
            : ''
        }${n} ...queryOptions}`
      : t
      ? `{${n} ...queryOptions}`
      : 'queryOptions';
  },
  sp = (e) =>
    e
      ? e.hasSecondArg && !e.isHook
        ? `request?: SecondParameter<typeof ${e.name}>`
        : e.hasSecondArg && e.isHook
        ? `request?: SecondParameter<ReturnType<typeof ${e.name}>>`
        : ''
      : 'axios?: AxiosRequestConfig',
  co = ({
    operationName: e,
    definitions: t,
    mutator: r,
    isRequestOptions: n,
    type: o,
  }) => {
    let s = r == null ? void 0 : r.isHook,
      i = o
        ? `Use${b(o)}Options<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${b(e)}Hook>` : `typeof ${e}`
          }>>, TError, TData>`
        : `UseMutationOptions<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${b(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    if (!n) return `${o ? 'queryOptions' : 'mutationOptions'}?: ${i}`;
    let a = sp(r);
    return `options?: { ${o ? 'query' : 'mutation'}?:${i}, ${a}}
`;
  },
  ip = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case H.SVELTE_QUERY:
        return `Use${b(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${b(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case H.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${b(
          t,
        )}Result<TData, TError>>`;
      case H.REACT_QUERY:
      default:
        return ` Use${b(t)}Result<TData, TError>`;
    }
  },
  ap = ({
    isRequestOptions: e,
    mutator: t,
    isExactOptionalPropertyTypes: r,
    hasSignal: n,
  }) =>
    !t && e
      ? n
        ? `{ ${
            r ? '...(signal ? { signal } : {})' : 'signal'
          }, ...axiosOptions }`
        : 'axiosOptions'
      : (t == null ? void 0 : t.hasSecondArg) && e
      ? n
        ? 'requestOptions, signal'
        : 'requestOptions'
      : n
      ? 'signal'
      : '',
  pp = ({ isRequestOptions: e, mutator: t }) => {
    if (!e) return '';
    let r = 'const {query: queryOptions';
    return (
      t || (r += ', axios: axiosOptions'),
      t != null && t.hasSecondArg && (r += ', request: requestOptions'),
      (r += '} = options ?? {};'),
      r
    );
  },
  mp = ({ hasQueryParam: e, hasSignal: t }) =>
    !e && !t
      ? ''
      : e
      ? t
        ? '{ signal, pageParam }'
        : '{ pageParam }'
      : '{ signal }',
  cp = ({
    queryOption: { name: e, queryParam: t, options: r, type: n },
    operationName: o,
    queryKeyFnName: s,
    queryProperties: i,
    queryKeyProperties: a,
    params: p,
    props: u,
    mutator: m,
    isRequestOptions: l,
    response: d,
    outputClient: g,
    isExactOptionalPropertyTypes: f,
    hasSignal: y,
  }) => {
    let h = F(u, 'implementation'),
      S = t
        ? u
            .map(({ name: v }) =>
              v === 'params' ? `{ ${t}: pageParam, ...params }` : v,
            )
            .join(',')
        : i,
      $ = ip({
        outputClient: g,
        type: n,
        isMutatorHook: m == null ? void 0 : m.isHook,
        operationName: o,
      }),
      x = `AxiosError<${d.definition.errors || 'unknown'}>`;
    m &&
      (x = m.hasErrorType
        ? `${m.default ? b(o) : ''}ErrorType<${
            d.definition.errors || 'unknown'
          }>`
        : d.definition.errors || 'unknown');
    let T =
        m != null && m.isHook
          ? `ReturnType<typeof use${b(o)}Hook>`
          : `typeof ${o}`,
      w = co({
        operationName: o,
        definitions: '',
        mutator: m,
        isRequestOptions: l,
        type: n,
      }),
      R = ap({
        isRequestOptions: l,
        isExactOptionalPropertyTypes: f,
        mutator: m,
        hasSignal: y,
      }),
      P = pp({ isRequestOptions: l, mutator: m }),
      C = mp({
        hasQueryParam: !!t && u.some(({ type: v }) => v === 'queryParam'),
        hasSignal: y,
      });
    return `
export type ${b(e)}QueryResult = NonNullable<Awaited<ReturnType<${T}>>>
export type ${b(e)}QueryError = ${x}

export const ${j(
      `use-${e}`,
    )} = <TData = Awaited<ReturnType<${T}>>, TError = ${x}>(
 ${h} ${w}
  ): ${$} & { queryKey: QueryKey } => {

  ${P}

  const queryKey = queryOptions?.queryKey ?? ${s}(${a});

  ${m != null && m.isHook ? `const ${o} =  use${b(o)}Hook();` : ''}

  const queryFn: QueryFunction<Awaited<ReturnType<${
    m != null && m.isHook ? `ReturnType<typeof use${b(o)}Hook>` : `typeof ${o}`
  }>>> = (${C}) => ${o}(${S}${S ? ', ' : ''}${R});

  const query = ${j(`use-${n}`)}<Awaited<ReturnType<${
      m != null && m.isHook
        ? `ReturnType<typeof use${b(o)}Hook>`
        : `typeof ${o}`
    }>>, TError, TData>(queryKey, queryFn, ${op({
      params: p,
      options: r,
      type: n,
    })}) as ${$} & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}
`;
  },
  lp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: i,
      mutator: a,
      response: p,
      operationId: u,
    },
    { route: m, override: { operations: l = {} }, context: d },
    g,
  ) => {
    var R, P, C;
    let f = i == null ? void 0 : i.query,
      y = (i == null ? void 0 : i.requestOptions) !== !1,
      h = (R = l[u]) == null ? void 0 : R.query,
      S = !!(
        (C = (P = d.tsconfig) == null ? void 0 : P.compilerOptions) != null &&
        C.exactOptionalPropertyTypes
      );
    if (
      o === Z.GET ||
      (h == null ? void 0 : h.useInfinite) ||
      (h == null ? void 0 : h.useQuery)
    ) {
      let v = n
          .map(({ name: L, type: re }) =>
            re === W.BODY ? r.implementation : L,
          )
          .join(','),
        I = n
          .filter((L) => L.type !== W.HEADER)
          .map(({ name: L, type: re }) =>
            re === W.BODY ? r.implementation : L,
          )
          .join(','),
        G = [
          ...(f != null && f.useInfinite
            ? [
                {
                  name: j(`${t}-infinite`),
                  options: f == null ? void 0 : f.options,
                  type: Zt.INFINITE,
                  queryParam: f == null ? void 0 : f.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(f != null && f.useQuery) && !(f != null && f.useInfinite)) ||
          (f == null ? void 0 : f.useQuery)
            ? [
                {
                  name: t,
                  options: f == null ? void 0 : f.options,
                  type: Zt.QUERY,
                },
              ]
            : []),
        ],
        ae = j(`get-${t}-queryKey`),
        Ce = F(
          n.filter((L) => L.type !== W.HEADER),
          'implementation',
        );
      return `export const ${ae} = (${Ce}) => [\`${m}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${G.reduce(
      (L, re) =>
        L +
        cp({
          queryOption: re,
          operationName: t,
          queryKeyFnName: ae,
          queryProperties: v,
          queryKeyProperties: I,
          params: s,
          props: n,
          mutator: a,
          isRequestOptions: y,
          response: p,
          outputClient: g,
          isExactOptionalPropertyTypes: S,
          hasSignal: !!f.signal,
        }),
      '',
    )}
`;
    }
    let $ = n
        .map(({ definition: v, type: I }) =>
          I === W.BODY
            ? a != null && a.bodyTypeName
              ? `data: ${a.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : v,
        )
        .join(';'),
      x = n
        .map(({ name: v, type: I }) => (I === W.BODY ? 'data' : v))
        .join(','),
      T = `AxiosError<${p.definition.errors || 'unknown'}>`;
    a &&
      (T = a.hasErrorType
        ? `${a.default ? b(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let w =
      a != null && a.isHook
        ? `ReturnType<typeof use${b(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${b(t)}MutationResult = NonNullable<Awaited<ReturnType<${w}>>>
    ${
      r.definition
        ? `export type ${b(t)}MutationBody = ${
            a != null && a.bodyTypeName
              ? `${a.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${b(t)}MutationError = ${T}

    export const ${j(`use-${t}`)} = <TError = ${T},
    ${$ ? '' : 'TVariables = void,'}
    TContext = unknown>(${co({
      operationName: t,
      definitions: $,
      mutator: a,
      isRequestOptions: y,
    })}) => {
      ${
        y
          ? `const {mutation: mutationOptions${
              a
                ? a != null && a.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {};`
          : ''
      }

      ${a != null && a.isHook ? `const ${t} =  use${b(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${w}>>, ${
      $ ? `{${$}}` : 'TVariables'
    }> = (${x ? 'props' : ''}) => {
          ${x ? `const {${x}} = props ?? {};` : ''}

          return  ${t}(${x}${x ? ',' : ''}${
      y
        ? a
          ? a != null && a.hasSecondArg
            ? 'requestOptions'
            : ''
          : 'axiosOptions'
        : ''
    })
        }

      return useMutation<Awaited<ReturnType<typeof ${t}>>, TError, ${
      $ ? `{${$}}` : 'TVariables'
    }, TContext>(mutationFn, mutationOptions)
    }
    `;
  },
  $t = () => '',
  xt = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
${
  e && t
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}`,
  St = () => '',
  Tt = (e, t, r) => {
    let n = de(e),
      o = rp(e, t),
      s = lp(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
c();
var up = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  fp = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  lo = (e) => [...(e ? [] : up), ...fp],
  dp = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: i,
      verb: a,
      formData: p,
      formUrlEncoded: u,
      override: m,
    },
    { route: l, context: d },
  ) => {
    var w, R;
    let g = (m == null ? void 0 : m.requestOptions) !== !1,
      f = (m == null ? void 0 : m.formData) !== !1,
      y = (m == null ? void 0 : m.formUrlEncoded) !== !1,
      h = !!(
        (R = (w = d.tsconfig) == null ? void 0 : w.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      S = oe.includes(a),
      $ = X(d.tsconfig),
      x = Oe({
        formData: p,
        formUrlEncoded: u,
        body: s,
        isFormData: f,
        isFormUrlEncoded: y,
      });
    if (o) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: y,
          hasSignal: !1,
          isBodyVerb: S,
          isExactOptionalPropertyTypes: h,
        }),
        C =
          (o == null ? void 0 : o.bodyTypeName) && s.definition
            ? F(i, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(i, 'implementation'),
        v = g ? he(m == null ? void 0 : m.requestOptions, o.hasSecondArg) : '';
      return `export const ${r} = (
    ${C}
 ${
   g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>` : ''
 }) => {${x}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${P},
      ${v});
    }
  `;
    }
    let T = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: a,
      requestOptions: m == null ? void 0 : m.requestOptions,
      isFormData: f,
      isFormUrlEncoded: y,
      isExactOptionalPropertyTypes: h,
      hasSignal: !1,
    });
    return `export const ${r} = (
    ${F(i, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${n.definition.success || 'unknown'}>> => {${x}
    return axios${$ ? '' : '.default'}.${a}(${T});
  }
`;
  },
  gp = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
    let n = `SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & { swrKey?: Key, enabled?: boolean }`;
    return r
      ? `options?: { swr?:${n}, ${
          t
            ? t != null && t.hasSecondArg
              ? `request?: SecondParameter<typeof ${t.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        } }
`
      : `swrOptions?: ${n}`;
  },
  yp = ({
    operationName: e,
    swrKeyFnName: t,
    swrProperties: r,
    swrKeyProperties: n,
    params: o,
    mutator: s,
    isRequestOptions: i,
    response: a,
    swrOptions: p,
    props: u,
  }) => {
    var f;
    let m = F(u, 'implementation'),
      l = r,
      d = `const isEnabled = swrOptions?.enabled !== false${
        o.length ? ` && !!(${o.map(({ name: y }) => y).join(' && ')})` : ''
      }
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? ${t}(${n}) : null);`,
      g = `AxiosError<${a.definition.errors || 'unknown'}>`;
    return (
      s &&
        (g = s.hasErrorType
          ? `ErrorType<${a.definition.errors || 'unknown'}>`
          : a.definition.errors || 'unknown'),
      `
export type ${b(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${b(e)}QueryError = ${g}

export const ${j(`use-${e}`)} = <TError = ${g}>(
 ${m} ${gp({ operationName: e, mutator: s, isRequestOptions: i })}
  ) => {

  ${
    i
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${d}
  const swrFn = () => ${e}(${l}${l ? ', ' : ''}${
        i
          ? s
            ? s != null && s.hasSecondArg
              ? 'requestOptions'
              : ''
            : 'axiosOptions'
          : ''
      });

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, ${
    p.options
      ? `{
    ${(f = K(p.options)) == null ? void 0 : f.slice(1, -1)}
    ...swrOptions
  }`
      : 'swrOptions'
  })

  return {
    swrKey,
    ...query
  }
}
`
    );
  },
  hp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: i,
      mutator: a,
      response: p,
    },
    { route: u },
  ) => {
    let m = (i == null ? void 0 : i.requestOptions) !== !1;
    if (o !== Z.GET) return '';
    let l = n
        .map(({ name: y, type: h }) => (h === W.BODY ? r.implementation : y))
        .join(','),
      d = n
        .filter((y) => y.type !== W.HEADER)
        .map(({ name: y, type: h }) => (h === W.BODY ? r.implementation : y))
        .join(','),
      g = j(`get-${t}-key`),
      f = F(
        n.filter((y) => y.type !== W.HEADER),
        'implementation',
      );
    return `export const ${g} = (${f}) => [\`${u}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${yp({
      operationName: t,
      swrKeyFnName: g,
      swrProperties: l,
      swrKeyProperties: d,
      params: s,
      props: n,
      mutator: a,
      isRequestOptions: m,
      response: p,
      swrOptions: i.swr,
    })}
`;
  },
  uo = () => '',
  fo = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
  ${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
  ${
    e && t
      ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
      : ''
  }`,
  go = () => '',
  yo = (e, t) => {
    let r = de(e),
      n = dp(e, t),
      o = hp(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
var Je = H.AXIOS,
  ho = {
    axios: { client: Xt, header: Yt, dependencies: Kt, footer: Jt, title: Lt },
    'axios-functions': {
      client: Ln,
      header: (e) => Yt({ ...e, noFunction: !0 }),
      dependencies: Kt,
      footer: (e) => Jt({ ...e, noFunction: !0 }),
      title: Lt,
    },
    angular: {
      client: Kn,
      header: zn,
      dependencies: Qn,
      footer: _n,
      title: Hn,
    },
    'react-query': {
      client: Tt,
      header: xt,
      dependencies: po,
      footer: St,
      title: $t,
    },
    'svelte-query': {
      client: Tt,
      header: xt,
      dependencies: ao,
      footer: St,
      title: $t,
    },
    'vue-query': {
      client: Tt,
      header: xt,
      dependencies: mo,
      footer: St,
      title: $t,
    },
    swr: { client: yo, header: fo, dependencies: lo, footer: go, title: uo },
  },
  Xe = (e) => {
    let t = B(e) ? e(ho) : ho[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  Se = ({
    client: e = Je,
    implementation: t,
    imports: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
    hasGlobalMutator: i,
    packageJson: a,
  }) => {
    let { dependencies: p } = Xe(e);
    return ft(t, [...p(i, a), ...r], n, o, s);
  },
  wt = ({
    outputClient: e = Je,
    isRequestOptions: t,
    isGlobalMutator: r,
    isMutator: n,
    provideIn: o,
    hasAwaitedType: s,
    titles: i,
  }) => {
    let { header: a } = Xe(e);
    return {
      implementation: a({
        title: i.implementation,
        isRequestOptions: t,
        isGlobalMutator: r,
        isMutator: n,
        provideIn: o,
        hasAwaitedType: s,
      }),
      implementationMSW: `export const ${i.implementationMSW} = () => [
`,
    };
  },
  Rt = ({
    outputClient: e = Je,
    operationNames: t,
    hasMutator: r,
    hasAwaitedType: n,
    titles: o,
  }) => {
    let { footer: s } = Xe(e),
      i;
    try {
      B(e)
        ? ((i = s(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (i = s({
            operationNames: t,
            title: o.implementation,
            hasMutator: r,
            hasAwaitedType: n,
          }));
    } catch (e6) {
      i = s({
        operationNames: t,
        title: o.implementation,
        hasMutator: r,
        hasAwaitedType: n,
      });
    }
    return {
      implementation: i,
      implementationMSW: `]
`,
    };
  },
  jt = ({ outputClient: e = Je, title: t, customTitleFunc: r }) => {
    let { title: n } = Xe(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${b(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${b(t)}MSW` };
  },
  Op = (e, t) =>
    t.mock
      ? B(t.mock)
        ? t.mock(e, t)
        : io(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  Oo = (e = Je, t, r) =>
    t.reduce((n, o) => {
      let { client: s } = Xe(e),
        i = s(o, r, e),
        a = Op(o, r);
      return (
        (n[o.operationId] = {
          implementation: o.doc + i.implementation,
          imports: i.imports,
          implementationMSW: a.implementation,
          importsMSW: a.imports,
          tags: o.tags,
          mutator: o.mutator,
          formData: o.formData,
          formUrlEncoded: o.formUrlEncoded,
          operationName: o.operationName,
          types: i.types,
        }),
        n
      );
    }, {});
c();
c();
var bp = '\\*/',
  tr = '*\\/',
  rr = new RegExp(bp, 'g');
function _({ description: e, deprecated: t, summary: r }, n = !1) {
  var u;
  let o = (
      Array.isArray(e)
        ? e.filter((m) => !m.includes('eslint-disable'))
        : [e || '']
    ).map((m) => m.replace(rr, tr)),
    s = [e, t, r].reduce((m, l) => (l ? m + 1 : m), 0);
  if (!s) return '';
  let i = s === 1 && n,
    a = Array.isArray(e)
      ? (u = e.find((m) => m.includes('eslint-disable'))) == null
        ? void 0
        : u.replace(rr, tr)
      : void 0,
    p = `${
      a
        ? `/* ${a} */
`
        : ''
    }/**`;
  return (
    e &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(rr, tr)}`)),
    (p += i
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
c();
c();
var _lodashuniqby = require('lodash.uniqby');
var _lodashuniqby2 = _interopRequireDefault(_lodashuniqby);
c();
var Ze = (e, t, r, n) => {
  let { schema: o, imports: s } = V(t, r),
    i = A(t) ? s[0].name : e,
    a = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${a} = new URLSearchParams();
`
      : `const ${a} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let u = Object.entries(o.properties).reduce((m, [l, d]) => {
      var y;
      let { schema: g } = V(d, r),
        f = '';
      return (
        g.type === 'object'
          ? (f = `${a}.append('${l}', JSON.stringify(${j(i)}${
              l.includes('-') ? `['${l}']` : `.${l}`
            }));
`)
          : g.type === 'array'
          ? (f = `${j(i)}${
              l.includes('-') ? `['${l}']` : `.${l}`
            }.forEach(value => ${a}.append('${l}', value));
`)
          : g.type === 'number' || g.type === 'integer' || g.type === 'boolean'
          ? (f = `${a}.append('${l}', ${j(i)}${
              l.includes('-') ? `['${l}']` : `.${l}`
            }.toString())
`)
          : (f = `${a}.append('${l}', ${j(i)}${
              l.includes('-') ? `['${l}']` : `.${l}`
            })
`),
        (y = o.required) != null && y.includes(l)
          ? m + f
          : m +
            `if(${j(i)}${
              l.includes('-') ? `['${l}']` : `.${l}`
            } !== undefined) {
 ${f} }
`
      );
    }, '');
    return `${p}${u}`;
  }
  return o.type === 'array'
    ? `${p}${j(i)}.forEach(value => ${a}.append('data', value))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${a}.append('data', ${j(i)}.toString())
`
    : `${p}${a}.append('data', ${j(i)})
`;
};
c();
c();
var qe = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = Pt(e, t);
    return (
      (n += `

`),
      (n += `// eslint-disable-next-line @typescript-eslint/no-redeclare
`),
      (n += `export const ${r} = {
${o}} as const;
`),
      n
    );
  },
  Pt = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = n.startsWith("'") ? n.slice(1, -1) : n;
      return (
        !Number.isNaN(Number(o))
          ? (o = xp(o))
          : (o = U(n, { underscore: '_', whitespace: '_', dash: !0 })),
        r +
          `  ${_esutils.keyword.isIdentifierNameES5(o) ? o : `'${o}'`}: ${n},
`
      );
    }, ''),
  xp = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
c();
c();
c();
var bo = ({ schema: e, name: t, context: r }) => {
  if (e.items) {
    let n = ie({ schema: e.items, propName: t + 'Item', context: r });
    return {
      value: `${n.value}[]`,
      imports: n.imports,
      schemas: n.schemas,
      isEnum: !1,
      type: 'array',
      isRef: !1,
    };
  } else throw new Error('All arrays must have an `items` key define');
};
c();
c();
var Tp = ({ resolvedData: e, resolvedValue: t, separator: r }) =>
    e.isEnum.every((o) => o)
      ? `${e.values.join(' | ')}${t ? ` | ${t.value}` : ''}`
      : r === 'allOf'
      ? `${e.values.join(' & ')}${t ? ` & ${t.value}` : ''}`
      : t
      ? `(${e.values.join(` & ${t.value}) | (`)} & ${t.value})`
      : e.values.join(' | '),
  $o = ({ name: e, schema: t, separator: r, context: n, nullable: o }) => {
    var m;
    let s = (m = t[r]) != null ? m : [],
      i = s.reduce(
        (l, d) => {
          let g = e ? e + b(r) : void 0;
          g && l.schemas.length && (g = g + b(lt(l.schemas.length + 1)));
          let f = ie({ schema: d, propName: g, combined: !0, context: n });
          return (
            l.values.push(f.value),
            l.imports.push(...f.imports),
            l.schemas.push(...f.schemas),
            l.isEnum.push(f.isEnum),
            l.types.push(f.type),
            l.isRef.push(f.isRef),
            l
          );
        },
        {
          values: [],
          imports: [],
          schemas: [],
          isEnum: [],
          isRef: [],
          types: [],
        },
      ),
      a = i.isEnum.every((l) => l),
      p;
    t.properties &&
      (p = Fe({
        item: _lodashomit2.default.call(void 0, t, r),
        name: e,
        context: n,
      }));
    let u = Tp({ resolvedData: i, separator: r, resolvedValue: p });
    if (a && e && s.length > 1) {
      let l = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${b(e)} = ${wp(i)}`;
      return {
        value: `typeof ${b(e)}[keyof typeof ${b(e)}] ${o};` + l,
        imports: i.imports.map((d) => ({ ...d, values: !0 })),
        schemas: i.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: u + o,
      imports: p ? [...i.imports, ...p.imports] : i.imports,
      schemas: p ? [...i.schemas, ...p.schemas] : i.schemas,
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  },
  wp = ({ values: e, isRef: t, types: r }) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${Pt(e[0], r[0])}} as const`
      : `{${e
          .map((o, s) => (t[s] ? `...${o},` : Pt(o, r[s])))
          .join('')}} as const`;
var xo = ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (A(e)) {
    let { name: i, specKey: a } = $e(e.$ref, r);
    return {
      value: i + n,
      imports: [{ name: i, specKey: a }],
      schemas: [],
      isEnum: !1,
      type: 'object',
      isRef: !0,
    };
  }
  if (e.allOf || e.oneOf || e.anyOf) {
    let i = e.allOf ? 'allOf' : e.oneOf ? 'oneOf' : 'anyOf';
    return $o({ schema: e, name: t, separator: i, context: r, nullable: n });
  }
  if (e.properties && Object.entries(e.properties).length > 0)
    return Object.entries(e.properties).reduce(
      (i, [a, p], u, m) => {
        var S, $, x;
        let l = (Array.isArray(e.required) ? e.required : []).includes(a),
          d = t ? b(t) + b(a) : void 0;
        !!(
          (x =
            ($ = (S = r.specs[r.target]) == null ? void 0 : S.components) ==
            null
              ? void 0
              : $.schemas) != null && x[d || '']
        ) && (d = d + 'Property');
        let f = ie({ schema: p, propName: d, context: r }),
          y = e.readOnly || p.readOnly;
        u || (i.value += '{');
        let h = _(p, !0);
        if (
          (i.imports.push(...f.imports),
          (i.value += `
  ${h ? `${h}  ` : ''}${y ? 'readonly ' : ''}${Ge(a)}${l ? '' : '?'}: ${
            f.value
          };`),
          i.schemas.push(...f.schemas),
          m.length - 1 === u)
        ) {
          if (e.additionalProperties)
            if (Y(e.additionalProperties))
              i.value += `
  [key: string]: any;
 }`;
            else {
              let T = ne({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              i.value += `
  [key: string]: ${T.value};
}`;
            }
          else
            i.value += `
}`;
          i.value += n;
        }
        return i;
      },
      {
        imports: [],
        schemas: [],
        value: '',
        isEnum: !1,
        type: 'object',
        isRef: !1,
        schema: {},
      },
    );
  if (e.additionalProperties) {
    if (Y(e.additionalProperties))
      return {
        value: '{ [key: string]: any }' + n,
        imports: [],
        schemas: [],
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    let i = ne({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${i.value}}` + n,
      imports: (o = i.imports) != null ? o : [],
      schemas: (s = i.schemas) != null ? s : [],
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  }
  return {
    value: e.type === 'object' ? '{ [key: string]: any }' : 'unknown' + n,
    imports: [],
    schemas: [],
    isEnum: !1,
    type: 'object',
    isRef: !1,
  };
};
var Fe = ({ item: e, name: t, context: r }) => {
  let n = e.nullable ? ' | null' : '';
  switch ((!e.type && e.items && (e.type = 'array'), e.type)) {
    case 'number':
    case 'integer': {
      let o = 'number',
        s = !1;
      return (
        e.enum && ((o = e.enum.join(' | ')), (s = !0)),
        {
          value: o + n,
          isEnum: s,
          type: 'number',
          schemas: [],
          imports: [],
          isRef: !1,
        }
      );
    }
    case 'boolean':
      return {
        value: 'boolean' + n,
        type: 'boolean',
        isEnum: !1,
        schemas: [],
        imports: [],
        isRef: !1,
      };
    case 'array': {
      let { value: o, ...s } = bo({ schema: e, name: t, context: r });
      return { value: o + n, ...s };
    }
    case 'string': {
      let o = 'string',
        s = !1;
      return (
        e.enum &&
          ((o = `'${e.enum
            .map((i) => (D(i) ? ut(i) : i))
            .filter(Boolean)
            .join("' | '")}'`),
          (s = !0)),
        e.format === 'binary' && (o = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (o = 'Date'),
        {
          value: o + n,
          isEnum: s,
          type: 'string',
          imports: [],
          schemas: [],
          isRef: !1,
        }
      );
    }
    case 'object':
    default: {
      let { value: o, ...s } = xo({
        item: e,
        name: t,
        context: r,
        nullable: n,
      });
      return { value: o, ...s };
    }
  }
};
var ne = ({ schema: e, name: t, context: r }) => {
  if (A(e)) {
    let { schema: o, imports: s } = V(e, r),
      { name: i, specKey: a, schemaName: p } = s[0],
      u = a || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: i,
      imports: [{ name: i, specKey: u, schemaName: p }],
      type: (o == null ? void 0 : o.type) || 'object',
      schemas: [],
      isEnum: !!(o != null && o.enum),
      originalSchema: o,
      isRef: !0,
    };
  }
  return {
    ...Fe({ item: e, name: t, context: r }),
    originalSchema: e,
    isRef: !1,
  };
};
var ie = ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var i;
  let o = ne({ schema: e, name: t, context: n }),
    s = _((i = o.originalSchema) != null ? i : {});
  if (
    t &&
    !o.isEnum &&
    (o == null ? void 0 : o.type) === 'object' &&
    new RegExp(/{|&|\|/).test(o.value)
  )
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [
        ...o.schemas,
        {
          name: t,
          model: `${s}export type ${t} = ${o.value};
`,
          imports: o.imports,
        },
      ],
      isEnum: !1,
      type: 'object',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  if (t && o.isEnum && !r && !o.isRef) {
    let a = qe(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + a, imports: o.imports }],
      isEnum: !1,
      type: 'enum',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  }
  return o;
};
var So = ['multipart/form-data'],
  To = ['application/x-www-form-urlencoded'],
  jp = ({ mediaType: e, propName: t, context: r }) =>
    e.schema ? ie({ schema: e.schema, propName: t, context: r }) : void 0,
  Ne = (e, t, r, n = 'unknown') => {
    let o = e
      .filter(([s, i]) => Boolean(i))
      .map(([s, i]) => {
        var a, p;
        if (A(i)) {
          let {
              schema: u,
              imports: [{ name: m, specKey: l, schemaName: d }],
            } = V(i, r),
            [g, f] =
              (p = Object.entries((a = u.content) != null ? a : {})[0]) != null
                ? p
                : [],
            y = So.includes(g),
            h = To.includes(g);
          if ((!y && !h) || !(f != null && f.schema))
            return [
              {
                value: m,
                imports: [{ name: m, specKey: l, schemaName: d }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                isRef: !0,
                originalSchema: f == null ? void 0 : f.schema,
                key: s,
                contentType: g,
              },
            ];
          let S = y
              ? Ze(m, f == null ? void 0 : f.schema, {
                  ...r,
                  specKey: l || r.specKey,
                })
              : void 0,
            $ = h
              ? Ze(
                  m,
                  f == null ? void 0 : f.schema,
                  { ...r, specKey: l || r.specKey },
                  !0,
                )
              : void 0;
          return [
            {
              value: m,
              imports: [{ name: m, specKey: l, schemaName: d }],
              schemas: [],
              type: 'unknown',
              isEnum: !1,
              formData: S,
              formUrlEncoded: $,
              isRef: !0,
              originalSchema: f == null ? void 0 : f.schema,
              key: s,
              contentType: g,
            },
          ];
        }
        return i.content
          ? Object.entries(i.content)
              .map(([m, l], d, g) => {
                let f = s ? b(t) + b(s) : void 0;
                f && g.length > 1 && (f = f + b(lt(d + 1)));
                let y = jp({ mediaType: l, propName: f, context: r });
                if (!y) return;
                let h = So.includes(m),
                  S = To.includes(m);
                if ((!h && !S) || !f) return { ...y, contentType: m };
                let $ = h ? Ze(f, l.schema, r) : void 0,
                  x = S ? Ze(f, l.schema, r, !0) : void 0;
                return { ...y, formData: $, formUrlEncoded: x, contentType: m };
              })
              .filter((m) => m)
              .map((m) => ({ ...m, key: s }))
          : [
              {
                value: n,
                imports: [],
                schemas: [],
                type: n,
                isEnum: !1,
                key: s,
                isRef: !1,
                contentType: 'application/json',
              },
            ];
      });
    return _lodashuniqby2.default.call(
      void 0,
      o.flatMap((s) => s),
      'value',
    );
  };
var wo = ({ requestBody: e, operationName: t, context: r, contentType: n }) => {
  let o = Ne([[r.override.components.requestBodies.suffix, e]], t, r),
    s = n
      ? o.filter((m) => {
          let l = !0,
            d = !1;
          return (
            n.include && (l = n.include.includes(m.contentType)),
            n.exclude && (d = n.exclude.includes(m.contentType)),
            l && !d
          );
        })
      : o,
    i = s.flatMap(({ imports: m }) => m),
    a = s.flatMap(({ schemas: m }) => m),
    p = s.map(({ value: m }) => m).join(' | '),
    u =
      Ae.includes(p.toLowerCase()) || s.length > 1
        ? j(t) + r.override.components.requestBodies.suffix
        : j(p);
  return {
    definition: p,
    implementation: u,
    imports: i,
    schemas: a,
    ...(s.length === 1
      ? {
          formData: s[0].formData,
          formUrlEncoded: s[0].formUrlEncoded,
          contentType: s[0].contentType,
        }
      : { formData: '', formUrlEncoded: '', contentType: '' }),
  };
};
c();
var Ro = (e, t, r) =>
  e.operationId
    ? e.operationId
    : b(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              U(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
c();
var jo = ({ parameters: e = [], context: t }) =>
  e.reduce(
    (r, n) => {
      if (A(n)) {
        let { schema: o, imports: s } = V(n, t);
        (o.in === 'path' || o.in === 'query' || o.in === 'header') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path' || n.in === 'header') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [], header: [] },
  );
c();
var Pp = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  Po = ({ route: e, pathParams: t = [], operationId: r, context: n }) =>
    Pp(e).map((s) => {
      let i = t.find(
        ({ parameter: f }) =>
          U(j(f.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
      );
      if (!i)
        throw new Error(
          `The path params ${s} can't be found in parameters (${r})`,
        );
      let { name: a, required: p = !1, schema: u } = i.parameter,
        m = U(j(a), { es5keyword: !0 });
      if (!u)
        return {
          name: m,
          definition: `${m}${p ? '' : '?'}: unknown`,
          implementation: `${m}${p ? '' : '?'}: unknown`,
          default: !1,
          required: p,
          imports: [],
        };
      let l = ne({
          schema: u,
          context: {
            ...n,
            ...(i.imports.length ? { specKey: i.imports[0].specKey } : {}),
          },
        }),
        d = `${m}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
        g = `${m}${!p && !l.originalSchema.default ? '?' : ''}${
          l.originalSchema.default
            ? `= ${K(l.originalSchema.default)}`
            : `: ${l.value}`
        }`;
      return {
        name: m,
        definition: d,
        implementation: g,
        default: l.originalSchema.default,
        required: p,
        imports: l.imports,
      };
    });
c();
c();
var Eo = (e) =>
  e.sort((t, r) =>
    t.default
      ? 1
      : r.default
      ? -1
      : t.required && r.required
      ? 0
      : t.required
      ? -1
      : r.required
      ? 1
      : 0,
  );
var vo = ({ body: e, queryParams: t, params: r, headers: n }) => {
  let o = {
      name: e.implementation,
      definition: `${e.implementation}: ${e.definition}`,
      implementation: `${e.implementation}: ${e.definition}`,
      default: !1,
      required: !0,
      type: W.BODY,
    },
    s = {
      name: 'params',
      definition: `params${t != null && t.isOptional ? '?' : ''}: ${
        t == null ? void 0 : t.schema.name
      }`,
      implementation: `params${t != null && t.isOptional ? '?' : ''}: ${
        t == null ? void 0 : t.schema.name
      }`,
      default: !1,
      required: we(t == null ? void 0 : t.isOptional)
        ? !1
        : !(t != null && t.isOptional),
      type: W.QUERY_PARAM,
    },
    i = {
      name: 'headers',
      definition: `headers${n != null && n.isOptional ? '?' : ''}: ${
        n == null ? void 0 : n.schema.name
      }`,
      implementation: `headers${n != null && n.isOptional ? '?' : ''}: ${
        n == null ? void 0 : n.schema.name
      }`,
      default: !1,
      required: we(n == null ? void 0 : n.isOptional)
        ? !1
        : !(n != null && n.isOptional),
      type: W.HEADER,
    },
    a = [
      ...r.map((u) => ({ ...u, type: W.PARAM })),
      ...(e.definition ? [o] : []),
      ...(t ? [s] : []),
      ...(n ? [i] : []),
    ];
  return Eo(a);
};
c();
var Ep = (e, t, r) =>
    e.map(({ parameter: n, imports: o }) => {
      let { name: s, required: i, schema: a, content: p } = n,
        {
          value: u,
          imports: m,
          isEnum: l,
          type: d,
          schemas: g,
          isRef: f,
        } = ne({
          schema: a || p['application/json'].schema,
          context: r,
          name: b(t) + b(s),
        }),
        y = Ge(s);
      if (o.length)
        return {
          definition: `${y}${!i || a.default ? '?' : ''}: ${o[0].name}`,
          imports: o,
          schemas: [],
        };
      if (l && !f) {
        let S = b(t) + b(s),
          $ = qe(u, d, S);
        return {
          definition: `${y}${!i || a.default ? '?' : ''}: ${S}`,
          imports: [{ name: S }],
          schemas: [...g, { name: S, model: $, imports: m }],
        };
      }
      return {
        definition: `${y}${!i || a.default ? '?' : ''}: ${u}`,
        imports: m,
        schemas: g,
      };
    }),
  nr = ({
    queryParams: e = [],
    operationName: t,
    context: r,
    suffix: n = 'params',
  }) => {
    if (!e.length) return;
    let o = Ep(e, t, r),
      s = o.flatMap(({ imports: l }) => l),
      i = o.flatMap(({ schemas: l }) => l),
      a = `${b(t)}${b(n)}`,
      p = o.map(({ definition: l }) => l).join('; '),
      u = e.every(({ parameter: l }) => !l.required);
    return {
      schema: {
        name: a,
        model: `export type ${a} = { ${p} };
`,
        imports: s,
      },
      deps: i,
      isOptional: u,
    };
  };
c();
var Co = ({ responses: e, operationName: t, context: r, contentType: n }) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let o = Ne(Object.entries(e), t, r, 'void'),
    s = n
      ? o.filter((d) => {
          let g = !0,
            f = !1;
          return (
            n.include && (g = n.include.includes(d.contentType)),
            n.exclude && (f = n.exclude.includes(d.contentType)),
            g && !f
          );
        })
      : o,
    i = s.reduce(
      (d, g) => (
        g.key.startsWith('2') ? d.success.push(g) : d.errors.push(g), d
      ),
      { success: [], errors: [] },
    ),
    a = s.flatMap(({ imports: d }) => d),
    p = s.flatMap(({ schemas: d }) => d),
    u = [...new Set(s.map(({ contentType: d }) => d))],
    m = i.success
      .map(({ value: d, formData: g }) => (g ? 'Blob' : d))
      .join(' | '),
    l = i.errors.map(({ value: d }) => d).join(' | ');
  return {
    imports: a,
    definition: { success: m || 'unknown', errors: l || 'unknown' },
    isBlob: m === 'Blob',
    types: i,
    contentTypes: u,
    schemas: p,
  };
};
c();
var _acorn = require('acorn');
c();
c();
var or = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
var te = (e, t) => {
    let r = _upath.relative.call(void 0, e, t);
    return _upath.normalizeSafe.call(void 0, `.${_upath.sep}${r}`);
  },
  Et = (e, t) => {
    if (be(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(M(r.pathname).dirname, '')
        .replace(`.${or(e)}`, '');
    }
    return (
      '/' +
      _upath.normalize
        .call(void 0, _upath.relative.call(void 0, M(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${or(e)}`, '')
    );
  };
var vt = 'BodyType',
  ko = (e, t) => {
    let r = M(e),
      n = M(t.path),
      { pathWithoutExtension: o } = M(te(r.dirname, n.path));
    return o;
  },
  Mt = async ({
    output: e,
    mutator: t,
    name: r,
    workspace: n,
    tsconfig: o,
  }) => {
    if (!t || !e) return;
    let s = t.default,
      i = t.name ? t.name : `${r}Mutator`,
      a = t.path,
      p = await _fsextra.readFile.call(void 0, a, 'utf8'),
      u =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      m =
        p.includes(`export type ${vt}`) || p.includes(`export interface ${vt}`),
      l = t.default ? `${b(r)}ErrorType` : 'ErrorType',
      d = t.default ? `${b(r)}${vt}` : vt,
      { file: g, cached: f } = await dt(a, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (g) {
      let y = s ? 'default' : t.name,
        h = Ip(g, y);
      h ||
        (J().error(
          _chalk2.default.red(
            `Your mutator file doesn't have the ${y} exported function`,
          ),
        ),
        process.exit(1));
      let S = ko(e, t),
        $ = t.name
          ? !!t.name.startsWith('use') && !!h.returnNumberOfParams
          : !!h.returnNumberOfParams;
      return {
        name: t.name || !$ ? i : `use${b(i)}`,
        path: S,
        default: s,
        hasErrorType: u,
        errorTypeName: l,
        hasSecondArg: $ ? h.returnNumberOfParams > 1 : h.numberOfParams > 1,
        hasThirdArg: h.numberOfParams > 2,
        isHook: $,
        ...(m ? { bodyTypeName: d } : {}),
      };
    } else {
      let y = ko(e, t);
      return (
        f ||
          J().warn(
            _chalk2.default.yellow('Failed to parse provided mutator function'),
          ),
        {
          name: i,
          path: y,
          default: s,
          hasSecondArg: !1,
          hasThirdArg: !1,
          isHook: !1,
          hasErrorType: u,
          errorTypeName: l,
          ...(m ? { bodyTypeName: d } : {}),
        }
      );
    }
  },
  Ip = (e, t) => {
    var r, n;
    try {
      let o = _acorn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((a) => {
                var p, u, m, l, d, g, f;
                if (a.type === 'ExpressionStatement')
                  return ((m =
                    (u =
                      (p = a.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : u.properties) != null &&
                    m.some((y) => {
                      var h;
                      return ((h = y.key) == null ? void 0 : h.name) === t;
                    })) ||
                    ((d =
                      (l = a.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : d.name) === t
                    ? !0
                    : (f =
                        (g = a.expression.right) == null
                          ? void 0
                          : g.properties) == null
                    ? void 0
                    : f.some((y) => y.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return Ct(o, s.expression.right.name);
        let a =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return a.value.name
          ? Ct(o, a.value.name)
          : a.value.type === 'FunctionExpression' ||
            a.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: a.value.params.length }
          : void 0;
      }
      let i = s.expression.arguments[1].properties.find((a) => {
        var p;
        return ((p = a.key) == null ? void 0 : p.name) === t;
      });
      return Ct(o, i.value.body.name);
    } catch (e7) {
      return;
    }
  },
  Ct = (e, t) => {
    var s, i, a, p, u, m, l;
    let r =
      (s = e == null ? void 0 : e.body) == null
        ? void 0
        : s.find((d) => {
            if (d.type === 'VariableDeclaration')
              return d.declarations.find((g) => g.id.name === t);
            if (d.type === 'FunctionDeclaration' && d.id.name === t) return d;
          });
    if (!r) return;
    if (r.type === 'FunctionDeclaration') {
      let d =
        (a = (i = r.body) == null ? void 0 : i.body) == null
          ? void 0
          : a.find((g) => g.type === 'ReturnStatement');
      return (p = d == null ? void 0 : d.argument) != null && p.params
        ? {
            numberOfParams: r.params.length,
            returnNumberOfParams: d.argument.params.length,
          }
        : { numberOfParams: r.params.length };
    }
    let n = r.declarations.find((d) => d.id.name === t);
    if (n.init.name) return Ct(e, n.init.name);
    let o =
      (m = (u = n.init.body) == null ? void 0 : u.body) == null
        ? void 0
        : m.find((d) => d.type === 'ReturnStatement');
    return (l = o == null ? void 0 : o.argument) != null && l.params
      ? {
          numberOfParams: n.init.params.length,
          returnNumberOfParams: o.argument.params.length,
        }
      : { numberOfParams: n.init.params.length };
  };
var Dp = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var He;
    let {
        responses: i,
        requestBody: a,
        parameters: p,
        tags: u = [],
        deprecated: m,
        description: l,
        summary: d,
      } = r,
      g = Ro(r, n, e),
      f = t.override.operations[r.operationId],
      y = Object.entries(t.override.tags).reduce(
        (ze, [it, at]) => (u.includes(it) ? Ee(ze, at) : ze),
        {},
      ),
      h = { ...t.override, ...y, ...f },
      S =
        (f == null ? void 0 : f.operationName) ||
        ((He = t.override) == null ? void 0 : He.operationName),
      $ = S ? S(r, n, e) : j(g),
      x = U($, { es5keyword: !0 }),
      T = Co({
        responses: i,
        operationName: x,
        context: s,
        contentType: h.contentType,
      }),
      w = wo({
        requestBody: a,
        operationName: x,
        context: s,
        contentType: h.contentType,
      }),
      R = jo({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      P = nr({ queryParams: R.query, operationName: x, context: s }),
      C = t.headers
        ? await nr({
            queryParams: R.header,
            operationName: x,
            context: s,
            suffix: 'headers',
          })
        : void 0,
      v = Po({ route: n, pathParams: R.path, operationId: g, context: s }),
      I = vo({ body: w, queryParams: P, params: v, headers: C }),
      G = await Mt({
        output: t.target,
        name: x,
        mutator: h == null ? void 0 : h.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      ae =
        D(h == null ? void 0 : h.formData) || N(h == null ? void 0 : h.formData)
          ? await Mt({
              output: t.target,
              name: x,
              mutator: h.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ce =
        D(h == null ? void 0 : h.formUrlEncoded) ||
        N(h == null ? void 0 : h.formUrlEncoded)
          ? await Mt({
              output: t.target,
              name: x,
              mutator: h.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      L = _({ description: l, deprecated: m, summary: d }),
      re = {
        verb: e,
        tags: u,
        summary: r.summary,
        operationId: g,
        operationName: x,
        response: T,
        body: w,
        headers: C,
        queryParams: P,
        params: v,
        props: I,
        mutator: G,
        formData: ae,
        formUrlEncoded: Ce,
        override: h,
        doc: L,
      },
      Qe = await yt(h == null ? void 0 : h.transformer, s.workspace);
    return Qe ? Qe(re) : re;
  },
  Io = ({ verbs: e, output: t, route: r, context: n }) =>
    me(
      Object.entries(e),
      async (o, [s, i]) => {
        if (mn(s)) {
          let a = await Dp({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: i,
            context: n,
          });
          o.push(a);
        }
        return o;
      },
      [],
    );
var Do = async ({ output: e, context: t }) =>
  me(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = Wn(n),
        i = o,
        a = t;
      if (A(o)) {
        let { schema: l, imports: d } = V(o, t);
        (i = l), (a = { ...t, ...(d.length ? { specKey: d[0].specKey } : {}) });
      }
      let p = await Io({ verbs: i, output: e, route: s, context: a }),
        u = p.reduce(
          (l, { queryParams: d, headers: g, body: f, response: y }) => (
            d && l.push(d.schema, ...d.deps),
            g && l.push(g.schema, ...g.deps),
            l.push(...f.schemas),
            l.push(...y.schemas),
            l
          ),
          [],
        ),
        m = Oo(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: a,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...u), (r.operations = { ...r.operations, ...m }), r
      );
    },
    { operations: {}, schemas: [] },
  );
c();
var ai = ue(br());
var $r = (e = {}, t, r) =>
  (0, ai.default)(e)
    ? []
    : Object.entries(e).reduce((n, [o, s]) => {
        let i = Ne([[r, s]], o, t, 'void'),
          a = i.flatMap(({ imports: g }) => g),
          p = i.flatMap(({ schemas: g }) => g),
          u = i.map(({ value: g }) => g).join(' | '),
          m = `${b(o)}${r}`,
          d = `${_(s)}export type ${m} = ${u || 'unknown'};
`;
        return (
          n.push(...p), m !== u && n.push({ name: m, model: d, imports: a }), n
        );
      }, []);
c();
var pi = (e = {}, t, r) =>
  Object.entries(e).reduce((n, [o, s]) => {
    let i = `${b(o)}${r}`,
      { schema: a, imports: p } = V(s, t);
    if (a.in !== 'query') return n;
    if (!a.schema || p.length)
      return (
        n.push({
          name: i,
          imports: p.length
            ? [
                {
                  name: p[0].name,
                  specKey: p[0].specKey,
                  schemaName: p[0].schemaName,
                },
              ]
            : [],
          model: `export type ${i} = ${p.length ? p[0].name : 'unknown'};
`,
        }),
        n
      );
    let u = ie({ schema: a.schema, propName: i, context: t }),
      l = `${_(s)}export type ${i} = ${u.value || 'unknown'};
`;
    return (
      n.push(...u.schemas),
      i !== u.value && n.push({ name: i, model: l, imports: u.imports }),
      n
    );
  }, []);
c();
var li = ue(br());
c();
var mi = (e, t) => {
  var n, o;
  let r = { ...e };
  for (let s of Object.values(r))
    if ((n = s.discriminator) != null && n.mapping) {
      let { mapping: i, propertyName: a } = s.discriminator;
      for (let [p, u] of Object.entries(i)) {
        let m;
        try {
          let { name: l } = $e(u, t);
          m = r[l];
        } catch (e8) {
          m = r[u];
        }
        !m ||
          ((m.properties = {
            ...m.properties,
            [a]: { type: 'string', enum: [p] },
          }),
          (m.required = [...((o = m.required) != null ? o : []), a]));
      }
    }
  return r;
};
c();
var ci = ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = Fe({ item: t, name: e, context: r }),
    s = o.value === '{}',
    i = '';
  (i += _(t)),
    s &&
      (r.tslint
        ? (i += `// tslint:disable-next-line:no-empty-interface
`)
        : (i += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !Ae.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (i += `export interface ${e} ${o.value}
`)
      : (i += `export type ${e} = ${o.value};
`);
  let a = o.imports.filter((u) => u.name !== e);
  return [...o.schemas, { name: e, model: i, imports: a }];
};
var ui = (e = {}, t, r) => {
  if ((0, li.default)(e)) return [];
  let n = mi(e, t);
  return Object.entries(n).reduce((s, [i, a]) => {
    let p = b(i) + r;
    if (
      (!a.type || a.type === 'object') &&
      !a.allOf &&
      !a.oneOf &&
      !a.anyOf &&
      !A(a) &&
      !a.nullable
    )
      return s.push(...ci({ name: p, schema: a, context: t, suffix: r })), s;
    {
      let u = ne({ schema: a, name: p, context: t }),
        m = '',
        l = u.imports;
      if (((m += _(a)), u.isEnum && !u.isRef)) m += qe(u.value, u.type, p);
      else if (p === u.value && u.isRef) {
        let d = u.imports.find((g) => g.name === p);
        if (!d)
          m += `export type ${p} = ${u.value};
`;
        else {
          let g =
            d != null && d.specKey
              ? `${b(Et(d.specKey, t.specKey))}${u.value}`
              : `${u.value}Bis`;
          (m += `export type ${p} = ${g};
`),
            (l = l.map((f) => (f.name === p ? { ...f, alias: g } : f)));
        }
      } else
        m += `export type ${p} = ${u.value};
`;
      return s.push(...u.schemas, { name: p, model: m, imports: l }), s;
    }
  }, []);
};
c();
var _ibmopenapivalidator = require('ibm-openapi-validator');
var _ibmopenapivalidator2 = _interopRequireDefault(_ibmopenapivalidator);
var fi = async (e) => {
  let { errors: t, warnings: r } = await _ibmopenapivalidator2.default.call(
    void 0,
    e,
  );
  r.length && gn(r), t.length && yn(t);
};
var Tl = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await yt(t.override.transformer, r)
        : void 0;
    return me(
      Object.entries(e),
      async (s, [i, a]) => {
        let p = await Bn(a, t.converterOptions, i),
          u = n ? n(p) : p;
        return t.validation && (await fi(u)), (s[i] = u), s;
      },
      {},
    );
  },
  xr = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Tl({ specs: e, input: t, workspace: o }),
      i = Object.entries(s).reduce((u, [m, l]) => {
        var $, x, T, w, R, P;
        let d = {
            specKey: m,
            target: n,
            workspace: o,
            specs: s,
            override: r.override,
            tslint: r.tslint,
            tsconfig: r.tsconfig,
            packageJson: r.packageJson,
          },
          g = ui(
            l.openapi
              ? (T = l.components) == null
                ? void 0
                : T.schemas
              : {
                  ..._lodashomit2.default.call(void 0, l, [
                    'openapi',
                    'info',
                    'servers',
                    'paths',
                    'components',
                    'security',
                    'tags',
                    'externalDocs',
                  ]),
                  ...((x = ($ = l.components) == null ? void 0 : $.schemas) !=
                  null
                    ? x
                    : {}),
                },
            d,
            r.override.components.schemas.suffix,
          ),
          f = $r(
            (w = l.components) == null ? void 0 : w.responses,
            d,
            r.override.components.responses.suffix,
          ),
          y = $r(
            (R = l.components) == null ? void 0 : R.requestBodies,
            d,
            r.override.components.requestBodies.suffix,
          ),
          h = pi(
            (P = l.components) == null ? void 0 : P.parameters,
            d,
            r.override.components.parameters.suffix,
          ),
          S = [...g, ...f, ...y, ...h];
        return S.length && (u[m] = S), u;
      }, {}),
      a = await Do({
        output: r,
        context: {
          specKey: n,
          target: n,
          workspace: o,
          specs: s,
          override: r.override,
          tslint: r.tslint,
          tsconfig: r.tsconfig,
          packageJson: r.packageJson,
        },
      });
    return {
      ...a,
      schemas: { ...i, [n]: [...((p = i[n]) != null ? p : []), ...a.schemas] },
      target: n,
      info: s[n].info,
    };
  };
var Pl = async (e, { validate: t, ...r }, n) => {
    if (t)
      try {
        await _swaggerparser2.default.validate(e);
      } catch (s) {
        if ((s == null ? void 0 : s.name) === 'ParserError') throw s;
        _console.log.call(void 0, `\u26A0\uFE0F  ${_chalk2.default.yellow(s)}`);
      }
    let o = (await _swaggerparser2.default.resolve(e, r)).values();
    return n
      ? o
      : Object.fromEntries(
          Object.entries(o).map(([s, i]) => [
            _upath.resolve.call(void 0, s),
            i,
          ]),
        );
  },
  gi = async (e, t) => {
    let { input: r, output: n } = t;
    if (N(r.target))
      return xr({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = be(r.target),
      s = await Pl(r.target, r.parserOptions, o);
    return xr({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
c();
var _execa = require('execa');
var _execa2 = _interopRequireDefault(_execa);
c();
var _stringargv = require('string-argv');
var hi = async (e, t = [], r = []) => {
  q(_chalk2.default.white(`Running ${e} hook...`));
  for (let n of t)
    if (D(n)) {
      let [o, ...s] = [
        ..._stringargv.parseArgsStringToArgv.call(void 0, n),
        ...r,
      ];
      try {
        await _execa2.default.call(void 0, o, s);
      } catch (i) {
        q(_chalk2.default.red(`\u{1F6D1} Failed to run ${e} hook: ${i}`));
      }
    } else B(n) && (await n(r));
};
c();
var Il = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let i = s;
    return (
      (i += Sn({ imports: e, target: r, isRootKey: n, specsName: o })),
      (i += e.length
        ? `

`
        : `
`),
      (i += t),
      i
    );
  },
  Sr = (e, t) => _upath.join.call(void 0, e, `/${t}.ts`);
var Dl = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let i = j(t.name);
    try {
      await _fsextra.outputFile.call(
        void 0,
        Sr(e, i),
        Il({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let a = Sr(e, 'index'),
        u = (await _fsextra.readFile.call(void 0, a)).toString();
      !u.includes(`export * from './${i}'`) &&
        !u.includes(`export * from "./${i}"`) &&
        (await _fsextra.appendFile.call(
          void 0,
          Sr(e, 'index'),
          `export * from './${i}';
`,
        ));
    } catch (a) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${i} => ${a}`;
    }
  },
  bi = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await _fsextra.ensureFile.call(
      void 0,
      _upath.join.call(void 0, e, '/index.ts'),
    ),
    Promise.all(
      t.map((i) =>
        Dl({
          path: e,
          schema: i,
          target: r,
          isRootKey: n,
          specsName: o,
          header: s,
        }),
      ),
    )
  );
c();
c();
var Gl = (e, t) =>
    e +
    `${t}
`,
  Te = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => Gl(r, n), '');
c();
var _compareversions = require('compare-versions');
var kt = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: a }) => a),
    o = (r == null ? void 0 : r.client) === H.ANGULAR,
    s = jt({
      outputClient: r.client,
      title: b(t.title),
      customTitleFunc: r.override.title,
    }),
    i = Object.values(e).reduce(
      (a, p, u, m) => {
        var l, d, g, f, y, h, S;
        if (
          (a.imports.push(...p.imports),
          a.importsMSW.push(...p.importsMSW),
          (a.implementation +=
            p.implementation +
            `
`),
          (a.implementationMSW.function += p.implementationMSW.function),
          (a.implementationMSW.handler += p.implementationMSW.handler),
          p.mutator && a.mutators.push(p.mutator),
          p.formData && a.formData.push(p.formData),
          p.formUrlEncoded && a.formUrlEncoded.push(p.formUrlEncoded),
          u === m.length - 1)
        ) {
          let $ = a.mutators.some((P) => (o ? P.hasThirdArg : P.hasSecondArg)),
            x =
              (S =
                (h =
                  (g = r.typescriptVersion) != null
                    ? g
                    : (d =
                        (l = r.packageJson) == null
                          ? void 0
                          : l.dependencies) == null
                    ? void 0
                    : d.typescript) != null
                  ? h
                  : (y =
                      (f = r.packageJson) == null
                        ? void 0
                        : f.devDependencies) == null
                  ? void 0
                  : y.typescript) != null
                ? S
                : '4.4.0',
            T = _compareversions.compare.call(void 0, x, '4.5.0', '>='),
            w = wt({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: $,
              isGlobalMutator: !!r.override.mutator,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: T,
              titles: s,
            });
          (a.implementation = w.implementation + a.implementation),
            (a.implementationMSW.handler =
              w.implementationMSW + a.implementationMSW.handler);
          let R = Rt({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            hasMutator: !!a.mutators.length,
            hasAwaitedType: T,
            titles: s,
          });
          (a.implementation += R.implementation),
            (a.implementationMSW.handler += R.implementationMSW);
        }
        return a;
      },
      {
        imports: [],
        implementation: '',
        implementationMSW: { function: '', handler: '' },
        importsMSW: [],
        mutators: [],
        formData: [],
        formUrlEncoded: [],
      },
    );
  return {
    ...i,
    implementationMSW:
      i.implementationMSW.function + i.implementationMSW.handler,
  };
};
var $i = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: i, dirname: a } = M(n.target, { backupFilename: j(r.title) }),
      {
        imports: p,
        importsMSW: u,
        implementation: m,
        implementationMSW: l,
        mutators: d,
        formData: g,
        formUrlEncoded: f,
      } = kt(e, r, n),
      y = s,
      h = n.schemas ? te(a, M(n.schemas).dirname) : void 0,
      S = X(n.tsconfig);
    return (
      (y += Se({
        client: n.client,
        implementation: m,
        imports: h
          ? [
              {
                exports: p.filter(($) => !u.some((x) => $.name === x.name)),
                dependency: h,
              },
            ]
          : [],
        specsName: o,
        hasSchemaDir: !!n.schemas,
        isAllowSyntheticDefaultImports: S,
        hasGlobalMutator: !!n.override.mutator,
        packageJson: n.packageJson,
      })),
      n.mock &&
        (y += xe({
          implementation: l,
          imports: h ? [{ exports: u, dependency: h }] : [],
          specsName: o,
          hasSchemaDir: !!n.schemas,
          isAllowSyntheticDefaultImports: S,
        })),
      d && (y += z({ mutators: d, implementation: m })),
      g && (y += z({ mutators: g })),
      f && (y += z({ mutators: f })),
      n.schemas || (y += Te(t)),
      (y += `

${m}`),
      n.mock &&
        ((y += `

`),
        (y += l)),
      await _fsextra.outputFile.call(void 0, i, y),
      [i]
    );
  } catch (i) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${i}`;
  }
};
c();
var xi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: i,
        dirname: a,
        extension: p,
      } = M(n.target, { backupFilename: j(r.title) }),
      {
        imports: u,
        implementation: m,
        implementationMSW: l,
        importsMSW: d,
        mutators: g,
        formData: f,
        formUrlEncoded: y,
      } = kt(e, r, n),
      h = s,
      S = s,
      $ = n.schemas ? te(a, M(n.schemas).dirname) : './' + i + '.schemas',
      x = X(n.tsconfig);
    (h += Se({
      client: n.client,
      implementation: m,
      imports: [{ exports: u, dependency: $ }],
      specsName: o,
      hasSchemaDir: !!n.schemas,
      isAllowSyntheticDefaultImports: x,
      hasGlobalMutator: !!n.override.mutator,
      packageJson: n.packageJson,
    })),
      (S += xe({
        implementation: l,
        imports: [{ exports: d, dependency: $ }],
        specsName: o,
        hasSchemaDir: !!n.schemas,
        isAllowSyntheticDefaultImports: x,
      }));
    let T = n.schemas
      ? void 0
      : _upath.join.call(void 0, a, i + '.schemas' + p);
    if (T) {
      let C = s + Te(t);
      await _fsextra.outputFile.call(
        void 0,
        _upath.join.call(void 0, a, i + '.schemas' + p),
        C,
      );
    }
    g && (h += z({ mutators: g, implementation: m })),
      f && (h += z({ mutators: f })),
      y && (h += z({ mutators: y })),
      (h += `
${m}`),
      (S += `
${l}`);
    let w = i + (H.ANGULAR === n.client ? '.service' : '') + p,
      R = _upath.join.call(void 0, a, w);
    await _fsextra.outputFile.call(void 0, _upath.join.call(void 0, a, w), h);
    let P = n.mock ? _upath.join.call(void 0, a, i + '.msw' + p) : void 0;
    return (
      P && (await _fsextra.outputFile.call(void 0, P, S)),
      [R, ...(T ? [T] : []), ...(P ? [P] : [])]
    );
  } catch (i) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${i}`;
  }
};
c();
c();
var Bl = (e) => ({ ...e, tags: e.tags.length ? e.tags : ['default'] }),
  Ul = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, i, a;
      let o = r[n];
      return (
        (r[n] = o
          ? {
              implementation: o.implementation + t.implementation,
              imports: [...o.imports, ...t.imports],
              importsMSW: [...o.importsMSW, ...t.importsMSW],
              implementationMSW: {
                function:
                  o.implementationMSW.function + t.implementationMSW.function,
                handler:
                  o.implementationMSW.handler + t.implementationMSW.handler,
              },
              mutators: t.mutator
                ? [...((s = o.mutators) != null ? s : []), t.mutator]
                : o.mutators,
              formData: t.formData
                ? [...((i = o.formData) != null ? i : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((a = o.formUrlEncoded) != null ? a : []),
                    t.formUrlEncoded,
                  ]
                : o.formUrlEncoded,
            }
          : {
              imports: t.imports,
              importsMSW: t.importsMSW,
              mutators: t.mutator ? [t.mutator] : [],
              formData: t.formData ? [t.formData] : [],
              formUrlEncoded: t.formUrlEncoded ? [t.formUrlEncoded] : [],
              implementation: t.implementation,
              implementationMSW: {
                function: t.implementationMSW.function,
                handler: t.implementationMSW.handler,
              },
            }),
        r
      );
    }, e),
  It = (e, t) => {
    let r = t.client === H.ANGULAR,
      n = Object.values(e)
        .map(Bl)
        .reduce((o, s, i, a) => {
          let p = Ul(o, s);
          return i === a.length - 1
            ? Object.entries(p).reduce((u, [m, l]) => {
                var x, T, w, R, P, C, v, I;
                let d = !!(
                    (x = l.mutators) != null &&
                    x.some((G) => (r ? G.hasThirdArg : G.hasSecondArg))
                  ),
                  g = Object.values(e)
                    .filter(({ tags: G }) => G.includes(m))
                    .map(({ operationName: G }) => G),
                  f =
                    (v =
                      (C =
                        (w =
                          (T = t.packageJson) == null
                            ? void 0
                            : T.dependencies) == null
                          ? void 0
                          : w.typescript) != null
                        ? C
                        : (P =
                            (R = t.packageJson) == null
                              ? void 0
                              : R.devDependencies) == null
                        ? void 0
                        : P.typescript) != null
                      ? v
                      : '4.4.0',
                  y = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
                  h = jt({
                    outputClient: t.client,
                    title: b(m),
                    customTitleFunc: t.override.title,
                  }),
                  S = Rt({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: g,
                    hasMutator: !!((I = l.mutators) != null && I.length),
                    hasAwaitedType: y,
                    titles: h,
                  }),
                  $ = wt({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: d,
                    isGlobalMutator: !!t.override.mutator,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: y,
                    titles: h,
                  });
                return (
                  (u[m] = {
                    implementation:
                      $.implementation + l.implementation + S.implementation,
                    implementationMSW: {
                      function: l.implementationMSW.function,
                      handler:
                        $.implementationMSW +
                        l.implementationMSW.handler +
                        S.implementationMSW,
                    },
                    imports: l.imports,
                    importsMSW: l.importsMSW,
                    mutators: l.mutators,
                    formData: l.formData,
                    formUrlEncoded: l.formUrlEncoded,
                  }),
                  u
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, i]) => (
        (o[s] = {
          ...i,
          implementationMSW:
            i.implementationMSW.function + i.implementationMSW.handler,
        }),
        o
      ),
      {},
    );
  };
var Si = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: i,
      dirname: a,
      extension: p,
    } = M(n.target, { backupFilename: j(r.title) }),
    u = It(e, n),
    m = X(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(u).map(async ([d, g]) => {
        try {
          let {
              imports: f,
              implementation: y,
              implementationMSW: h,
              importsMSW: S,
              mutators: $,
              formData: x,
              formUrlEncoded: T,
            } = g,
            w = s,
            R = s,
            P = n.schemas
              ? '../' + te(a, M(n.schemas).dirname)
              : '../' + i + '.schemas';
          (w += Se({
            client: n.client,
            implementation: y,
            imports: [{ exports: f, dependency: P }],
            specsName: o,
            hasSchemaDir: !!n.schemas,
            isAllowSyntheticDefaultImports: m,
            hasGlobalMutator: !!n.override.mutator,
            packageJson: n.packageJson,
          })),
            (R += xe({
              implementation: h,
              imports: [{ exports: S, dependency: P }],
              specsName: o,
              hasSchemaDir: !!n.schemas,
              isAllowSyntheticDefaultImports: m,
            }));
          let C = n.schemas
            ? void 0
            : _upath.join.call(void 0, a, i + '.schemas' + p);
          if (C) {
            let ae = s + Te(t);
            await _fsextra.outputFile.call(void 0, C, ae);
          }
          $ && (w += z({ mutators: $, implementation: y, oneMore: !0 })),
            x && (w += z({ mutators: x, oneMore: !0 })),
            T && (w += z({ mutators: T, oneMore: !0 })),
            (w += `
${y}`),
            (R += `
${h}`);
          let v = Re(d) + (H.ANGULAR === n.client ? '.service' : '') + p,
            I = _upath.join.call(void 0, a, Re(d), v);
          await _fsextra.outputFile.call(void 0, I, w);
          let G = n.mock
            ? _upath.join.call(void 0, a, Re(d), Re(d) + '.msw' + p)
            : void 0;
          return (
            G && (await _fsextra.outputFile.call(void 0, G, R)),
            [I, ...(C ? [C] : []), ...(G ? [G] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${d} => ${f}`;
        }
      }),
    )
  ).flatMap((d) => d);
};
c();
var Ri = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: i,
      dirname: a,
      extension: p,
    } = M(n.target, { backupFilename: j(r.title) }),
    u = It(e, n),
    m = X(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(u).map(async ([d, g]) => {
        try {
          let {
              imports: f,
              implementation: y,
              implementationMSW: h,
              importsMSW: S,
              mutators: $,
              formData: x,
              formUrlEncoded: T,
            } = g,
            w = s,
            R = n.schemas ? te(a, M(n.schemas).dirname) : './' + i + '.schemas';
          (w += Se({
            client: n.client,
            implementation: y,
            imports: [
              {
                exports: f.filter((v) => !S.some((I) => v.name === I.name)),
                dependency: R,
              },
            ],
            specsName: o,
            hasSchemaDir: !!n.schemas,
            isAllowSyntheticDefaultImports: m,
            hasGlobalMutator: !!n.override.mutator,
            packageJson: n.packageJson,
          })),
            n.mock &&
              (w += xe({
                implementation: h,
                imports: [{ exports: S, dependency: R }],
                specsName: o,
                hasSchemaDir: !!n.schemas,
                isAllowSyntheticDefaultImports: m,
              }));
          let P = n.schemas
            ? void 0
            : _upath.join.call(void 0, a, i + '.schemas' + p);
          if (P) {
            let v = s + Te(t);
            await _fsextra.outputFile.call(void 0, P, v);
          }
          $ && (w += z({ mutators: $, implementation: y })),
            x && (w += z({ mutators: x })),
            T && (w += z({ mutators: T })),
            (w += `

`),
            (w += y),
            n.mock &&
              ((w += `

`),
              (w += h));
          let C = _upath.join.call(void 0, a, `${Re(d)}${p}`);
          return (
            await _fsextra.outputFile.call(void 0, C, w), [C, ...(P ? [P] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${d} => ${f}`;
        }
      }),
    )
  ).flatMap((d) => d);
};
var Ll = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? _({ description: r }) : r;
  },
  Ei = async ({ operations: e, schemas: t, target: r, info: n }, o, s, i) => {
    let { output: a } = s,
      p = i || n.title,
      u = Object.keys(t).reduce((g, f) => {
        let h = Et(f, r).slice(1).split('/').join('-');
        return (g[f] = h), g;
      }, {}),
      m = Ll(a.override.header, n);
    if (a.schemas) {
      let g = a.schemas;
      await Promise.all(
        Object.entries(t).map(([f, y]) => {
          let h = Me(f, r) ? g : _upath.join.call(void 0, g, u[f]);
          return bi({
            schemaPath: h,
            schemas: y,
            target: r,
            specsName: u,
            isRootKey: Me(f, r),
            header: m,
          });
        }),
      );
    }
    let l = [];
    if (a.target)
      switch (a.mode) {
        case pe.SPLIT:
          l = await xi({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: u,
            header: m,
          });
          break;
        case pe.TAGS:
          l = await Ri({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: u,
            header: m,
          });
          break;
        case pe.TAGS_SPLIT:
          l = await Si({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: u,
            header: m,
          });
          break;
        case pe.SINGLE:
        default:
          l = await $i({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: u,
            header: m,
          });
          break;
      }
    if (a.workspace) {
      let g = a.workspace,
        f = l
          .filter((h) => !h.endsWith('.msw.ts'))
          .map((h) => te(g, M(h).pathWithoutExtension));
      a.schemas && f.push(te(g, M(a.schemas).dirname));
      let y = _upath.join.call(void 0, g, '/index.ts');
      if (await _fsextra.pathExists.call(void 0, y)) {
        let h = await _fsextra.readFile.call(void 0, y, 'utf8'),
          S = f.filter(($) => !h.includes($));
        await _fsextra.appendFile.call(
          void 0,
          y,
          _lodashuniq2.default
            .call(void 0, S)
            .map(($) => `export * from '${$}';`).join(`
`) +
            `
`,
        );
      } else
        await _fsextra.outputFile.call(
          void 0,
          y,
          _lodashuniq2.default
            .call(void 0, f)
            .map((h) => `export * from '${h}';`).join(`
`) +
            `
`,
        );
      l = [y, ...l];
    }
    let d = [...(a.schemas ? [M(a.schemas).dirname] : []), ...l];
    if (
      (s.hooks.afterAllFilesWrite &&
        (await hi('afterAllFilesWrite', s.hooks.afterAllFilesWrite, d)),
      a.prettier)
    )
      try {
        await _execa2.default.call(void 0, 'prettier', ['--write', ...d]);
      } catch (e9) {
        _console.log.call(
          void 0,
          _chalk2.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    dn(p);
  };
c();
var vi = (e) => {
  fn(e), process.exit(1);
};
var Mi = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await Qt(['**/*', '!**/*.d.ts', ...o], M(t.output.target).dirname)),
        t.output.schemas &&
          (await Qt(['**/*', '!**/*.d.ts', ...o], M(t.output.schemas).dirname)),
        q(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await gi(e, t);
    await Ei(n, e, t, r);
  },
  Ai = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await Mi(t, n, r);
        } catch (o) {
          q(_chalk2.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else vi('Project not found');
      return;
    }
    return me(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Mi(t, s, o));
        } catch (i) {
          q(_chalk2.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${i}`));
        }
        return n;
      },
      [],
    );
  },
  vx = (exports.M = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await dt(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = _upath.dirname.call(void 0, r),
      i = await (B(n) ? n() : n),
      a = await me(
        Object.entries(i),
        async (u, [m, l]) => ((u[m] = await Fn(l, s, t)), u),
        {},
      ),
      p = Object.entries(a)
        .filter(
          ([u]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            u === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: u }]) => u.target)
        .filter((u) => D(u));
    (t == null ? void 0 : t.watch) && p.length
      ? Nn(
          t == null ? void 0 : t.watch,
          () => Ai(a, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await Ai(a, s, t == null ? void 0 : t.projectName);
  });
exports.a = Dt;
exports.b = c;
exports.c = D;
exports.d = q;
exports.e = iu;
exports.f = b;
exports.g = j;
exports.h = pu;
exports.i = Re;
exports.j = mu;
exports.k = K;
exports.l = U;
exports.m = F;
exports.n = lt;
exports.o = ut;
exports.p = Yi;
exports.q = Ae;
exports.r = oe;
exports.s = yu;
exports.t = Sn;
exports.u = z;
exports.v = Xi;
exports.w = ft;
exports.x = de;
exports.y = Zi;
exports.z = ea;
exports.A = ge;
exports.B = ta;
exports.C = ra;
exports.D = ye;
exports.E = he;
exports.F = Oe;
exports.G = Qf;
exports.H = Fn;
exports.I = Gn;
exports.J = X;
exports.K = Nn;
exports.L = Mi;
exports.M = vx;
