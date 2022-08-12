'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
('use strict');
var _chunkIIUZZLMVjs = require('./chunk-IIUZZLMV.js');
_chunkIIUZZLMVjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkIIUZZLMVjs.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunkIIUZZLMVjs.c.call(void 0, r))
    return _chunkIIUZZLMVjs.M.call(void 0, r, e);
  let n = await _chunkIIUZZLMVjs.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunkIIUZZLMVjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkIIUZZLMVjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkIIUZZLMVjs.d.call(
            void 0,
            _chalk2.default.red(
              `\u{1F6D1}  ${
                e != null && e.projectName
                  ? `${e == null ? void 0 : e.projectName} - `
                  : ''
              }${a}`,
            ),
          );
        }
      },
      n.input.target,
    );
  else
    try {
      return await _chunkIIUZZLMVjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkIIUZZLMVjs.d.call(
        void 0,
        _chalk2.default.red(
          `\u{1F6D1}  ${
            e != null && e.projectName
              ? `${e == null ? void 0 : e.projectName} - `
              : ''
          }${a}`,
        ),
      );
    }
};
var re = c;
exports.URL_REGEX = _chunkIIUZZLMVjs.s;
exports.VERBS_WITH_BODY = _chunkIIUZZLMVjs.r;
exports.addDependency = _chunkIIUZZLMVjs.v;
exports.camel = _chunkIIUZZLMVjs.g;
exports.default = re;
exports.defineConfig = _chunkIIUZZLMVjs.G;
exports.escape = _chunkIIUZZLMVjs.o;
exports.generalJSTypes = _chunkIIUZZLMVjs.p;
exports.generalJSTypesWithArray = _chunkIIUZZLMVjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkIIUZZLMVjs.z;
exports.generateBodyMutatorConfig = _chunkIIUZZLMVjs.B;
exports.generateBodyOptions = _chunkIIUZZLMVjs.y;
exports.generateDependencyImports = _chunkIIUZZLMVjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkIIUZZLMVjs.F;
exports.generateImports = _chunkIIUZZLMVjs.t;
exports.generateMutatorConfig = _chunkIIUZZLMVjs.D;
exports.generateMutatorImports = _chunkIIUZZLMVjs.u;
exports.generateMutatorRequestOptions = _chunkIIUZZLMVjs.E;
exports.generateOptions = _chunkIIUZZLMVjs.A;
exports.generateQueryParamsAxiosConfig = _chunkIIUZZLMVjs.C;
exports.generateVerbImports = _chunkIIUZZLMVjs.x;
exports.getNumberWord = _chunkIIUZZLMVjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkIIUZZLMVjs.J;
exports.kebab = _chunkIIUZZLMVjs.i;
exports.loadTsconfig = _chunkIIUZZLMVjs.I;
exports.pascal = _chunkIIUZZLMVjs.f;
exports.sanitize = _chunkIIUZZLMVjs.l;
exports.snake = _chunkIIUZZLMVjs.h;
exports.stringify = _chunkIIUZZLMVjs.k;
exports.toObjectString = _chunkIIUZZLMVjs.m;
exports.upper = _chunkIIUZZLMVjs.j;
