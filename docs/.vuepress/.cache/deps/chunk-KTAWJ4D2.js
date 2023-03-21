import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// node_modules/.pnpm/registry.npmmirror.com+util@0.10.4/node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+util@0.10.4/node_modules/util/support/isBufferBrowser.js"(exports, module) {
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
  }
});

// node_modules/.pnpm/registry.npmmirror.com+inherits@2.0.3/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+inherits@2.0.3/node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
  }
});

// node_modules/.pnpm/registry.npmmirror.com+util@0.10.4/node_modules/util/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+util@0.10.4/node_modules/util/util.js"(exports) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (isUndefined(global.process)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || "";
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      // "name": intentionally not styling
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            String(i),
            true
          ));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key,
            true
          ));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }
});

// node_modules/.pnpm/registry.npmmirror.com+path@0.12.7/node_modules/path/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+path@0.12.7/node_modules/path/path.js"(exports, module) {
    var isWindows = process.platform === "win32";
    var util = require_util();
    function normalizeArray(parts, allowAboveRoot) {
      var res = [];
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (!p || p === ".")
          continue;
        if (p === "..") {
          if (res.length && res[res.length - 1] !== "..") {
            res.pop();
          } else if (allowAboveRoot) {
            res.push("..");
          }
        } else {
          res.push(p);
        }
      }
      return res;
    }
    function trimArray(arr) {
      var lastIndex = arr.length - 1;
      var start = 0;
      for (; start <= lastIndex; start++) {
        if (arr[start])
          break;
      }
      var end = lastIndex;
      for (; end >= 0; end--) {
        if (arr[end])
          break;
      }
      if (start === 0 && end === lastIndex)
        return arr;
      if (start > end)
        return [];
      return arr.slice(start, end + 1);
    }
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var splitTailRe = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;
    var win32 = {};
    function win32SplitPath(filename) {
      var result = splitDeviceRe.exec(filename), device = (result[1] || "") + (result[2] || ""), tail = result[3] || "";
      var result2 = splitTailRe.exec(tail), dir = result2[1], basename = result2[2], ext = result2[3];
      return [device, dir, basename, ext];
    }
    function win32StatPath(path) {
      var result = splitDeviceRe.exec(path), device = result[1] || "", isUnc = !!device && device[1] !== ":";
      return {
        device,
        isUnc,
        isAbsolute: isUnc || !!result[2],
        // UNC paths are always absolute
        tail: result[3]
      };
    }
    function normalizeUNCRoot(device) {
      return "\\\\" + device.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
    }
    win32.resolve = function() {
      var resolvedDevice = "", resolvedTail = "", resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1; i--) {
        var path;
        if (i >= 0) {
          path = arguments[i];
        } else if (!resolvedDevice) {
          path = process.cwd();
        } else {
          path = process.env["=" + resolvedDevice];
          if (!path || path.substr(0, 3).toLowerCase() !== resolvedDevice.toLowerCase() + "\\") {
            path = resolvedDevice + "\\";
          }
        }
        if (!util.isString(path)) {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!path) {
          continue;
        }
        var result = win32StatPath(path), device = result.device, isUnc = result.isUnc, isAbsolute = result.isAbsolute, tail = result.tail;
        if (device && resolvedDevice && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
          continue;
        }
        if (!resolvedDevice) {
          resolvedDevice = device;
        }
        if (!resolvedAbsolute) {
          resolvedTail = tail + "\\" + resolvedTail;
          resolvedAbsolute = isAbsolute;
        }
        if (resolvedDevice && resolvedAbsolute) {
          break;
        }
      }
      if (isUnc) {
        resolvedDevice = normalizeUNCRoot(resolvedDevice);
      }
      resolvedTail = normalizeArray(
        resolvedTail.split(/[\\\/]+/),
        !resolvedAbsolute
      ).join("\\");
      return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
    };
    win32.normalize = function(path) {
      var result = win32StatPath(path), device = result.device, isUnc = result.isUnc, isAbsolute = result.isAbsolute, tail = result.tail, trailingSlash = /[\\\/]$/.test(tail);
      tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join("\\");
      if (!tail && !isAbsolute) {
        tail = ".";
      }
      if (tail && trailingSlash) {
        tail += "\\";
      }
      if (isUnc) {
        device = normalizeUNCRoot(device);
      }
      return device + (isAbsolute ? "\\" : "") + tail;
    };
    win32.isAbsolute = function(path) {
      return win32StatPath(path).isAbsolute;
    };
    win32.join = function() {
      var paths = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!util.isString(arg)) {
          throw new TypeError("Arguments to path.join must be strings");
        }
        if (arg) {
          paths.push(arg);
        }
      }
      var joined = paths.join("\\");
      if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
        joined = joined.replace(/^[\\\/]{2,}/, "\\");
      }
      return win32.normalize(joined);
    };
    win32.relative = function(from, to) {
      from = win32.resolve(from);
      to = win32.resolve(to);
      var lowerFrom = from.toLowerCase();
      var lowerTo = to.toLowerCase();
      var toParts = trimArray(to.split("\\"));
      var lowerFromParts = trimArray(lowerFrom.split("\\"));
      var lowerToParts = trimArray(lowerTo.split("\\"));
      var length = Math.min(lowerFromParts.length, lowerToParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (lowerFromParts[i] !== lowerToParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      if (samePartsLength == 0) {
        return to;
      }
      var outputParts = [];
      for (var i = samePartsLength; i < lowerFromParts.length; i++) {
        outputParts.push("..");
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join("\\");
    };
    win32._makeLong = function(path) {
      if (!util.isString(path))
        return path;
      if (!path) {
        return "";
      }
      var resolvedPath = win32.resolve(path);
      if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
        return "\\\\?\\" + resolvedPath;
      } else if (/^\\\\[^?.]/.test(resolvedPath)) {
        return "\\\\?\\UNC\\" + resolvedPath.substring(2);
      }
      return path;
    };
    win32.dirname = function(path) {
      var result = win32SplitPath(path), root = result[0], dir = result[1];
      if (!root && !dir) {
        return ".";
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    win32.basename = function(path, ext) {
      var f = win32SplitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    win32.extname = function(path) {
      return win32SplitPath(path)[3];
    };
    win32.format = function(pathObject) {
      if (!util.isObject(pathObject)) {
        throw new TypeError(
          "Parameter 'pathObject' must be an object, not " + typeof pathObject
        );
      }
      var root = pathObject.root || "";
      if (!util.isString(root)) {
        throw new TypeError(
          "'pathObject.root' must be a string or undefined, not " + typeof pathObject.root
        );
      }
      var dir = pathObject.dir;
      var base = pathObject.base || "";
      if (!dir) {
        return base;
      }
      if (dir[dir.length - 1] === win32.sep) {
        return dir + base;
      }
      return dir + win32.sep + base;
    };
    win32.parse = function(pathString) {
      if (!util.isString(pathString)) {
        throw new TypeError(
          "Parameter 'pathString' must be a string, not " + typeof pathString
        );
      }
      var allParts = win32SplitPath(pathString);
      if (!allParts || allParts.length !== 4) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[0],
        dir: allParts[0] + allParts[1].slice(0, -1),
        base: allParts[2],
        ext: allParts[3],
        name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
      };
    };
    win32.sep = "\\";
    win32.delimiter = ";";
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var posix = {};
    function posixSplitPath(filename) {
      return splitPathRe.exec(filename).slice(1);
    }
    posix.resolve = function() {
      var resolvedPath = "", resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? arguments[i] : process.cwd();
        if (!util.isString(path)) {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!path) {
          continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path[0] === "/";
      }
      resolvedPath = normalizeArray(
        resolvedPath.split("/"),
        !resolvedAbsolute
      ).join("/");
      return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
    };
    posix.normalize = function(path) {
      var isAbsolute = posix.isAbsolute(path), trailingSlash = path && path[path.length - 1] === "/";
      path = normalizeArray(path.split("/"), !isAbsolute).join("/");
      if (!path && !isAbsolute) {
        path = ".";
      }
      if (path && trailingSlash) {
        path += "/";
      }
      return (isAbsolute ? "/" : "") + path;
    };
    posix.isAbsolute = function(path) {
      return path.charAt(0) === "/";
    };
    posix.join = function() {
      var path = "";
      for (var i = 0; i < arguments.length; i++) {
        var segment = arguments[i];
        if (!util.isString(segment)) {
          throw new TypeError("Arguments to path.join must be strings");
        }
        if (segment) {
          if (!path) {
            path += segment;
          } else {
            path += "/" + segment;
          }
        }
      }
      return posix.normalize(path);
    };
    posix.relative = function(from, to) {
      from = posix.resolve(from).substr(1);
      to = posix.resolve(to).substr(1);
      var fromParts = trimArray(from.split("/"));
      var toParts = trimArray(to.split("/"));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push("..");
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join("/");
    };
    posix._makeLong = function(path) {
      return path;
    };
    posix.dirname = function(path) {
      var result = posixSplitPath(path), root = result[0], dir = result[1];
      if (!root && !dir) {
        return ".";
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    posix.basename = function(path, ext) {
      var f = posixSplitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    posix.extname = function(path) {
      return posixSplitPath(path)[3];
    };
    posix.format = function(pathObject) {
      if (!util.isObject(pathObject)) {
        throw new TypeError(
          "Parameter 'pathObject' must be an object, not " + typeof pathObject
        );
      }
      var root = pathObject.root || "";
      if (!util.isString(root)) {
        throw new TypeError(
          "'pathObject.root' must be a string or undefined, not " + typeof pathObject.root
        );
      }
      var dir = pathObject.dir ? pathObject.dir + posix.sep : "";
      var base = pathObject.base || "";
      return dir + base;
    };
    posix.parse = function(pathString) {
      if (!util.isString(pathString)) {
        throw new TypeError(
          "Parameter 'pathString' must be a string, not " + typeof pathString
        );
      }
      var allParts = posixSplitPath(pathString);
      if (!allParts || allParts.length !== 4) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      allParts[1] = allParts[1] || "";
      allParts[2] = allParts[2] || "";
      allParts[3] = allParts[3] || "";
      return {
        root: allParts[0],
        dir: allParts[0] + allParts[1].slice(0, -1),
        base: allParts[2],
        ext: allParts[3],
        name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
      };
    };
    posix.sep = "/";
    posix.delimiter = ":";
    if (isWindows)
      module.exports = win32;
    else
      module.exports = posix;
    module.exports.posix = posix;
    module.exports.win32 = win32;
  }
});

export {
  require_path
};
//# sourceMappingURL=chunk-KTAWJ4D2.js.map