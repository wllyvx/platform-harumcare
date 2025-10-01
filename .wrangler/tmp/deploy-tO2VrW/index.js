var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod2) => function __require2() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedAsync(name) {
  const fn = /* @__PURE__ */ notImplemented(name);
  fn.__promisify__ = () => /* @__PURE__ */ notImplemented(name + ".__promisify__");
  fn.native = fn;
  return fn;
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter((e) => e.name === name && (!type2 || e.entryType === type2));
      }
      getEntriesByType(type2) {
        return this._entries.filter((e) => e.entryType === type2);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type2, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type2 ? `${type2}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// dist/_worker.js/renderers.mjs
var renderers;
var init_renderers = __esm({
  "dist/_worker.js/renderers.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    renderers = [];
  }
});

// dist/_worker.js/chunks/path_h5kZAkfu.mjs
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
  if (!path) {
    return path;
  }
  return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
function hasFileExtension(path) {
  return WITH_FILE_EXT.test(path);
}
var MANY_TRAILING_SLASHES, WITH_FILE_EXT;
var init_path_h5kZAkfu = __esm({
  "dist/_worker.js/chunks/path_h5kZAkfu.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    __name(appendForwardSlash, "appendForwardSlash");
    __name(prependForwardSlash, "prependForwardSlash");
    MANY_TRAILING_SLASHES = /\/{2,}$/g;
    __name(collapseDuplicateTrailingSlashes, "collapseDuplicateTrailingSlashes");
    __name(removeTrailingForwardSlash, "removeTrailingForwardSlash");
    __name(removeLeadingForwardSlash, "removeLeadingForwardSlash");
    __name(trimSlashes, "trimSlashes");
    __name(isString, "isString");
    __name(joinPaths, "joinPaths");
    __name(isRemotePath, "isRemotePath");
    __name(slash, "slash");
    __name(fileExtension, "fileExtension");
    WITH_FILE_EXT = /\/[^/]+\.\w+$/;
    __name(hasFileExtension, "hasFileExtension");
  }
});

// dist/_worker.js/chunks/astro/server_CwYSbNCn.mjs
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n]) visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth) gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = /* @__PURE__ */ __name((...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  }, "fn");
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}
function createAstroGlobFn() {
  const globHandler = /* @__PURE__ */ __name((importMetaGlobResult) => {
    console.warn(`Astro.glob is deprecated and will be removed in a future major version of Astro.
Use import.meta.glob instead: https://vitejs.dev/guide/features.html#glob-import`);
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroGlobUsedOutside,
        message: AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroGlobNoMatch,
        message: AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  }, "globHandler");
  return globHandler;
}
function createAstro(site) {
  return {
    // TODO: this is no longer necessary for `Astro.site`
    // but it somehow allows working around caching issues in content collections for some tests
    site: void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open3 = `\x1B[${x}m`, close2 = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open3 + (!!~("" + txt).indexOf(close2) ? txt.replace(rgx, close2 + open3) : txt) + close2;
  };
}
async function renderEndpoint(mod2, context2, isPrerendered, logger) {
  const { request, url } = context2;
  const method = request.method.toUpperCase();
  let handler = mod2[method] ?? mod2["ALL"];
  if (!handler && method === "HEAD" && mod2["GET"]) {
    handler = mod2["GET"];
  }
  if (isPrerendered && !["GET", "HEAD"].includes(method)) {
    logger.warn(
      "router",
      `${url.pathname} ${bold(
        method
      )} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`
    );
  }
  if (handler === void 0) {
    logger.warn(
      "router",
      `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod2).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod2 ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")
    );
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error(
      "router",
      `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
    );
    return new Response(null, { status: 500 });
  }
  let response = await handler.call(mod2, context2);
  if (!response || response instanceof Response === false) {
    throw new AstroError(EndpointDidNotReturnAResponse);
  }
  if (REROUTABLE_STATUS_CODES.includes(response.status)) {
    try {
      response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
    } catch (err) {
      if (err.message?.includes("immutable")) {
        response = new Response(response.body, response);
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
      } else {
        throw err;
      }
    }
  }
  if (method === "HEAD") {
    return new Response(null, response);
  }
  return response;
}
function isPromise(value) {
  return !!value && typeof value === "object" && "then" in value && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable)) {
    for await (const chunk of streamAsyncIterator(iterable)) {
      yield unescapeHTML(chunk);
    }
  } else {
    for await (const chunk of iterable) {
      yield unescapeHTML(chunk);
    }
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (str[Symbol.for("astro:slot-string")]) {
      return str;
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str || hasGetReader(str)) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      }
      if (value === Infinity) {
        return [PROP_TYPE.Infinity, 1];
      }
      if (value === -Infinity) {
        return [PROP_TYPE.Infinity, -1];
      }
      if (value === void 0) {
        return [PROP_TYPE.Value];
      }
      return [PROP_TYPE.Value, value];
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        // This is a special prop added to prove that the client hydration method
        // was added statically.
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key)) {
        extracted.propsWithoutTransitionAttributes[key] = value;
      }
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(
      decodeURI(renderer.clientEntrypoint.toString())
    );
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined") {
      island.props[name] = props[name];
    }
  });
  return island;
}
function bitwise(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}
function isHeadAndContent(obj) {
  return typeof obj === "object" && obj !== null && !!obj[headAndContentSym];
}
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type2, directive) {
  switch (type2) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(result, directive)};${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
  return "";
}
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)?.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (typeof value === "string" && value.includes("&") && isHttpUrl(value)) {
    return markHTMLString(` ${key}="${toAttributeString(value, false)}"`);
  }
  if (htmlBooleanAttributes.test(key)) {
    return markHTMLString(value ? ` ${key}` : "");
  }
  if (value === "") {
    return markHTMLString(` ${key}`);
  }
  return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)}>`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function createBufferedRenderer(destination, renderFunction) {
  return new BufferedRenderer(destination, renderFunction);
}
function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function isHttpUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return VALID_PROTOCOLS.includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    if (result.userAssetsBase) {
      script.props.src = (result.base === "/" ? "" : result.base) + result.userAssetsBase + script.props.src;
    }
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link3) => renderElement$1("link", link3, false));
  let content = styles.join("\n") + links.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function renderHead() {
  return createRenderInstruction({ type: "head" });
}
function maybeRenderHead() {
  return createRenderInstruction({ type: "maybe-head" });
}
function encodeHexUpperCase(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    result += alphabetUpperCase[data[i] >> 4];
    result += alphabetUpperCase[data[i] & 15];
  }
  return result;
}
function decodeHex(data) {
  if (data.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }
  const result = new Uint8Array(data.length / 2);
  for (let i = 0; i < data.length; i += 2) {
    if (!(data[i] in decodeMap)) {
      throw new Error("Invalid character");
    }
    if (!(data[i + 1] in decodeMap)) {
      throw new Error("Invalid character");
    }
    result[i / 2] |= decodeMap[data[i]] << 4;
    result[i / 2] |= decodeMap[data[i + 1]];
  }
  return result;
}
function encodeBase64(bytes) {
  return encodeBase64_internal(bytes, base64Alphabet, EncodingPadding.Include);
}
function encodeBase64_internal(bytes, alphabet, padding) {
  let result = "";
  for (let i = 0; i < bytes.byteLength; i += 3) {
    let buffer = 0;
    let bufferBitSize = 0;
    for (let j = 0; j < 3 && i + j < bytes.byteLength; j++) {
      buffer = buffer << 8 | bytes[i + j];
      bufferBitSize += 8;
    }
    for (let j = 0; j < 4; j++) {
      if (bufferBitSize >= 6) {
        result += alphabet[buffer >> bufferBitSize - 6 & 63];
        bufferBitSize -= 6;
      } else if (bufferBitSize > 0) {
        result += alphabet[buffer << 6 - bufferBitSize & 63];
        bufferBitSize = 0;
      } else if (padding === EncodingPadding.Include) {
        result += "=";
      }
    }
  }
  return result;
}
function decodeBase64(encoded) {
  return decodeBase64_internal(encoded, base64DecodeMap, DecodingPadding.Required);
}
function decodeBase64_internal(encoded, decodeMap2, padding) {
  const result = new Uint8Array(Math.ceil(encoded.length / 4) * 3);
  let totalBytes = 0;
  for (let i = 0; i < encoded.length; i += 4) {
    let chunk = 0;
    let bitsRead = 0;
    for (let j = 0; j < 4; j++) {
      if (padding === DecodingPadding.Required && encoded[i + j] === "=") {
        continue;
      }
      if (padding === DecodingPadding.Ignore && (i + j >= encoded.length || encoded[i + j] === "=")) {
        continue;
      }
      if (j > 0 && encoded[i + j - 1] === "=") {
        throw new Error("Invalid padding");
      }
      if (!(encoded[i + j] in decodeMap2)) {
        throw new Error("Invalid character");
      }
      chunk |= decodeMap2[encoded[i + j]] << (3 - j) * 6;
      bitsRead += 6;
    }
    if (bitsRead < 24) {
      let unused;
      if (bitsRead === 12) {
        unused = chunk & 65535;
      } else if (bitsRead === 18) {
        unused = chunk & 255;
      } else {
        throw new Error("Invalid padding");
      }
      if (unused !== 0) {
        throw new Error("Invalid padding");
      }
    }
    const byteLength = Math.floor(bitsRead / 8);
    for (let i2 = 0; i2 < byteLength; i2++) {
      result[totalBytes] = chunk >> 16 - i2 * 8 & 255;
      totalBytes++;
    }
  }
  return result.slice(0, totalBytes);
}
async function decodeKey(encoded) {
  const bytes = decodeBase64(encoded);
  return crypto.subtle.importKey("raw", bytes, ALGORITHM, true, ["encrypt", "decrypt"]);
}
async function encryptString(key, raw) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH / 2));
  const data = encoder$1.encode(raw);
  const buffer = await crypto.subtle.encrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    data
  );
  return encodeHexUpperCase(iv) + encodeBase64(new Uint8Array(buffer));
}
async function decryptString(key, encoded) {
  const iv = decodeHex(encoded.slice(0, IV_LENGTH));
  const dataArray = decodeBase64(encoded.slice(IV_LENGTH));
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    dataArray
  );
  const decryptedString = decoder$1.decode(decryptedBuffer);
  return decryptedString;
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && obj !== null && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof SlotString) {
        content += chunk;
        if (chunk.instructions) {
          instructions ??= [];
          instructions.push(...chunk.instructions);
        }
      } else if (chunk instanceof Response) return;
      else if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
function createSlotValueFromString(content) {
  return function() {
    return renderTemplate`${unescapeHTML(content)}`;
  };
}
function containsServerDirective(props) {
  return "server:component-directive" in props;
}
function safeJsonStringify(obj) {
  return JSON.stringify(obj).replace(SCRIPT_RE, SCRIPT_REPLACER).replace(COMMENT_RE, COMMENT_REPLACER);
}
function createSearchParams(componentExport, encryptedProps, slots) {
  const params = new URLSearchParams();
  params.set("e", componentExport);
  params.set("p", encryptedProps);
  params.set("s", slots);
  return params;
}
function isWithinURLLimit(pathname, params) {
  const url = pathname + "?" + params.toString();
  const chars = url.length;
  return chars < 2048;
}
function renderServerIsland(result, _displayName, props, slots) {
  return {
    async render(destination) {
      const componentPath = props["server:component-path"];
      const componentExport = props["server:component-export"];
      const componentId = result.serverIslandNameMap.get(componentPath);
      if (!componentId) {
        throw new Error(`Could not find server component name`);
      }
      for (const key2 of Object.keys(props)) {
        if (internalProps.has(key2)) {
          delete props[key2];
        }
      }
      destination.write(createRenderInstruction({ type: "server-island-runtime" }));
      destination.write("<!--[if astro]>server-island-start<![endif]-->");
      const renderedSlots = {};
      for (const name in slots) {
        if (name !== "fallback") {
          const content = await renderSlotToString(result, slots[name]);
          renderedSlots[name] = content.toString();
        } else {
          await renderChild(destination, slots.fallback(result));
        }
      }
      const key = await result.key;
      const propsEncrypted = Object.keys(props).length === 0 ? "" : await encryptString(key, JSON.stringify(props));
      const hostId = crypto.randomUUID();
      const slash2 = result.base.endsWith("/") ? "" : "/";
      let serverIslandUrl = `${result.base}${slash2}_server-islands/${componentId}${result.trailingSlash === "always" ? "/" : ""}`;
      const potentialSearchParams = createSearchParams(
        componentExport,
        propsEncrypted,
        safeJsonStringify(renderedSlots)
      );
      const useGETRequest = isWithinURLLimit(serverIslandUrl, potentialSearchParams);
      if (useGETRequest) {
        serverIslandUrl += "?" + potentialSearchParams.toString();
        destination.write(
          `<link rel="preload" as="fetch" href="${serverIslandUrl}" crossorigin="anonymous">`
        );
      }
      destination.write(`<script type="module" data-astro-rerun data-island-id="${hostId}">${useGETRequest ? (
        // GET request
        `let response = await fetch('${serverIslandUrl}');`
      ) : (
        // POST request
        `let data = {
	componentExport: ${safeJsonStringify(componentExport)},
	encryptedProps: ${safeJsonStringify(propsEncrypted)},
	slots: ${safeJsonStringify(renderedSlots)},
};
let response = await fetch('${serverIslandUrl}', {
	method: 'POST',
	body: JSON.stringify(data),
});`
      )}
replaceServerIsland('${hostId}', response);<\/script>`);
    }
  };
}
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      case "server-island-runtime": {
        if (result._metadata.hasRenderedServerIslandRuntime) {
          return "";
        }
        result._metadata.hasRenderedServerIslandRuntime = true;
        return renderServerIslandRuntime();
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else if (chunk instanceof Response) {
    return "";
  } else if (isSlotString(chunk)) {
    let out = "";
    const c = chunk;
    if (c.instructions) {
      for (const instr of c.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
function renderChild(destination, child) {
  if (isPromise(child)) {
    return child.then((x) => renderChild(destination, x));
  }
  if (child instanceof SlotString) {
    destination.write(child);
    return;
  }
  if (isHTMLString(child)) {
    destination.write(child);
    return;
  }
  if (Array.isArray(child)) {
    return renderArray(destination, child);
  }
  if (typeof child === "function") {
    return renderChild(destination, child());
  }
  if (!child && child !== 0) {
    return;
  }
  if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
    return;
  }
  if (isRenderInstance(child)) {
    return child.render(destination);
  }
  if (isRenderTemplateResult(child)) {
    return child.render(destination);
  }
  if (isAstroComponentInstance(child)) {
    return child.render(destination);
  }
  if (ArrayBuffer.isView(child)) {
    destination.write(child);
    return;
  }
  if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    if (Symbol.asyncIterator in child) {
      return renderAsyncIterable(destination, child);
    }
    return renderIterable(destination, child);
  }
  destination.write(child);
}
function renderArray(destination, children) {
  const flushers = children.map((c) => {
    return createBufferedRenderer(destination, (bufferDestination) => {
      return renderChild(bufferDestination, c);
    });
  });
  const iterator = flushers[Symbol.iterator]();
  const iterate = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value: flusher, done } = iterator.next();
      if (done) {
        break;
      }
      const result = flusher.flush();
      if (isPromise(result)) {
        return result.then(iterate);
      }
    }
  }, "iterate");
  return iterate();
}
function renderIterable(destination, children) {
  const iterator = children[Symbol.iterator]();
  const iterate = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value, done } = iterator.next();
      if (done) {
        break;
      }
      const result = renderChild(destination, value);
      if (isPromise(result)) {
        return result.then(iterate);
      }
    }
  }, "iterate");
  return iterate();
}
async function renderAsyncIterable(destination, children) {
  for await (const value of children) {
    await renderChild(destination, value);
  }
}
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory)) {
    result._metadata.propagators.add(instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && obj !== null && !!obj[astroComponentInstanceSym];
}
async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response) return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route?.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    },
    cancel() {
      result.cancelled = true;
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (isHeadAndContent(factoryResult)) {
    if (!isRenderTemplateResult(factoryResult.content)) {
      throw new AstroError({
        ...OnlyResponseCanBeReturned,
        message: OnlyResponseCanBeReturned.message(
          route?.route,
          typeof factoryResult
        ),
        location: {
          file: route?.component
        }
      });
    }
    return factoryResult.content;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: {
        file: route?.component
      }
    });
  }
  return factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}
async function renderToAsyncIterable(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  let error4 = null;
  let next = null;
  const buffer = [];
  let renderingComplete = false;
  const iterator = {
    async next() {
      if (result.cancelled) return { done: true, value: void 0 };
      if (next !== null) {
        await next.promise;
      } else if (!renderingComplete && !buffer.length) {
        next = promiseWithResolvers();
        await next.promise;
      }
      if (!renderingComplete) {
        next = promiseWithResolvers();
      }
      if (error4) {
        throw error4;
      }
      let length = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        length += buffer[i].length;
      }
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i = 0, len = buffer.length; i < len; i++) {
        const item = buffer[i];
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer.length = 0;
      const returnValue = {
        // The iterator is done when rendering has finished
        // and there are no more chunks to return.
        done: length === 0 && renderingComplete,
        value: mergedArray
      };
      return returnValue;
    },
    async return() {
      result.cancelled = true;
      return { done: true, value: void 0 };
    }
  };
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          buffer.push(encoder.encode(doctype));
        }
      }
      if (chunk instanceof Response) {
        throw new AstroError(ResponseSentError);
      }
      const bytes = chunkToByteArray(result, chunk);
      if (bytes.length > 0) {
        buffer.push(bytes);
        next?.resolve();
      } else if (buffer.length > 0) {
        next?.resolve();
      }
    }
  };
  const renderResult = toPromise(() => templateResult.render(destination));
  renderResult.catch((err) => {
    error4 = err;
  }).finally(() => {
    renderingComplete = true;
    next?.resolve();
  });
  return {
    [Symbol.asyncIterator]() {
      return iterator;
    }
  };
}
function toPromise(fn) {
  try {
    const result = fn();
    return isPromise(result) ? result : Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName) return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
function guessRenderers(componentUrl) {
  const extname = componentUrl?.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    case void 0:
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && "client:only" in _props === false) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(
    _props,
    clientDirectives
  );
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error4;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children)) {
            renderer = r2;
            break;
          }
        } catch (e) {
          error4 ??= e;
        }
      }
      if (!renderer && error4) {
        throw error4;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        renderer = renderers2.find(
          ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
        );
      }
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer = renderers2.find(({ name }) => name === `@astrojs/${extname}` || name === extname);
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        const plural = validRenderers.length > 1;
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else {
        throw new AstroError({
          ...NoClientOnlyHint,
          message: NoClientOnlyHint.message(metadata.displayName),
          hint: NoClientOnlyHint.hint(
            probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")
          )
        });
      }
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r2) => probableRendererNames.includes(r2.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          propsWithoutTransitionAttributes,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots?.fallback);
    } else {
      performance.now();
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        propsWithoutTransitionAttributes,
        children,
        metadata
      ));
    }
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response) return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || renderer?.name === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(removeStaticAstroSlot(html, renderer?.ssr?.supportsAstroStaticSlot))
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = renderer?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template2 = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template2}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      if (hydration.directive !== "only" && renderer?.ssr.renderHydrationScript) {
        destination.write(
          createRenderInstruction({
            type: "renderer-hydration-script",
            rendererName: renderer.name,
            render: renderer.ssr.renderHydrationScript
          })
        );
      }
      const renderedElement = renderElement$1("astro-island", island, false);
      destination.write(markHTMLString(renderedElement));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag)) return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots?.default);
  return {
    render(destination) {
      if (children == null) return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  if (containsServerDirective(props)) {
    return renderServerIsland(result, displayName, props, slots);
  }
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    render(destination) {
      return instance.render(destination);
    }
  };
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Component.catch(handleCancellation).then((x) => {
      return renderComponent(result, displayName, x, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots).catch(handleCancellation);
  }
  props = normalizeProps(props);
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots).catch(handleCancellation);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots).catch(
    handleCancellation
  );
  function handleCancellation(e) {
    if (result.cancelled)
      return {
        render() {
        }
      };
    throw e;
  }
  __name(handleCancellation, "handleCancellation");
}
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "") {
      delete props["class"];
    }
  }
  return props;
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (isPage && !result.partial && nonAstroPageNeedsHeadInjection(Component)) {
    head += chunkToString(result, maybeRenderHead());
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !result.partial && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response) return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route?.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  return renderJSXVNode(result, vnode);
}
async function renderJSXVNode(result, vnode) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = /* @__PURE__ */ __name(function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      }, "extractSlots2");
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (vnode.props[hasTriedRenderComponentSymbol]) {
          delete vnode.props[hasTriedRenderComponentSymbol];
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2?.[AstroJSX] || !output2) {
            return await renderJSXVNode(result, output2);
          } else {
            return;
          }
        } else {
          vnode.props[hasTriedRenderComponentSymbol] = true;
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value?.["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0) return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
async function renderScript(result, id) {
  if (result._metadata.renderedScripts.has(id)) return;
  result._metadata.renderedScripts.add(id);
  const inlined = result.inlinedScripts.get(id);
  if (inlined != null) {
    if (inlined) {
      return markHTMLString(`<script type="module">${inlined}<\/script>`);
    } else {
      return "";
    }
  }
  const resolved = await result.resolve(id);
  return markHTMLString(
    `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`
  );
}
async function renderPage(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      {},
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
  let body;
  if (streaming) {
    if (isNode && !isDeno) {
      const nodeBody = await renderToAsyncIterable(
        result,
        componentFactory,
        props,
        children,
        true,
        route
      );
      body = nodeBody;
    } else {
      body = await renderToReadableStream(result, componentFactory, props, children, true, route);
    }
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response) return body;
  const init2 = result.response;
  const headers = new Headers(init2.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  let status = init2.status;
  let statusText = init2.statusText;
  if (route?.route === "/404") {
    status = 404;
    if (statusText === "OK") {
      statusText = "Not Found";
    }
  } else if (route?.route === "/500") {
    status = 500;
    if (statusText === "OK") {
      statusText = "Internal Server Error";
    }
  }
  if (status) {
    return new Response(body, { ...init2, headers, status, statusText });
  } else {
    return new Response(body, { ...init2, headers });
  }
}
function requireCssesc() {
  if (hasRequiredCssesc) return cssesc_1;
  hasRequiredCssesc = 1;
  var object = {};
  var hasOwnProperty = object.hasOwnProperty;
  var merge = /* @__PURE__ */ __name(function merge2(options, defaults) {
    if (!options) {
      return defaults;
    }
    var result = {};
    for (var key in defaults) {
      result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
    }
    return result;
  }, "merge");
  var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
  var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
  var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
  var cssesc = /* @__PURE__ */ __name(function cssesc2(string, options) {
    options = merge(options, cssesc2.options);
    if (options.quotes != "single" && options.quotes != "double") {
      options.quotes = "single";
    }
    var quote = options.quotes == "double" ? '"' : "'";
    var isIdentifier = options.isIdentifier;
    var firstChar = string.charAt(0);
    var output = "";
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var character = string.charAt(counter++);
      var codePoint = character.charCodeAt();
      var value = void 0;
      if (codePoint < 32 || codePoint > 126) {
        if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
          var extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
          } else {
            counter--;
          }
        }
        value = "\\" + codePoint.toString(16).toUpperCase() + " ";
      } else {
        if (options.escapeEverything) {
          if (regexAnySingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          }
        } else if (/[\t\n\f\r\x0B]/.test(character)) {
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
          value = "\\" + character;
        } else {
          value = character;
        }
      }
      output += value;
    }
    if (isIdentifier) {
      if (/^-[-\d]/.test(output)) {
        output = "\\-" + output.slice(1);
      } else if (/\d/.test(firstChar)) {
        output = "\\3" + firstChar + " " + output.slice(1);
      }
    }
    output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
      if ($1 && $1.length % 2) {
        return $0;
      }
      return ($1 || "") + $2;
    });
    if (!isIdentifier && options.wrap) {
      return quote + output + quote;
    }
    return output;
  }, "cssesc");
  cssesc.options = {
    "escapeEverything": false,
    "isIdentifier": false,
    "quotes": "single",
    "wrap": false
  };
  cssesc.version = "3.0.0";
  cssesc_1 = cssesc;
  return cssesc_1;
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var ASTRO_VERSION, REROUTE_DIRECTIVE_HEADER, REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE, NOOP_MIDDLEWARE_HEADER, ROUTE_TYPE_HEADER, DEFAULT_404_COMPONENT, REDIRECT_STATUS_CODES, REROUTABLE_STATUS_CODES, clientAddressSymbol, originPathnameSymbol, responseSentSymbol, ClientAddressNotAvailable, PrerenderClientAddressNotAvailable, StaticClientAddressNotAvailable, NoMatchingStaticPathFound, OnlyResponseCanBeReturned, MissingMediaQueryDirective, NoMatchingRenderer, NoClientOnlyHint, InvalidGetStaticPathsEntry, InvalidGetStaticPathsReturn, GetStaticPathsExpectedParams, GetStaticPathsInvalidRouteParam, GetStaticPathsRequired, ReservedSlotName, NoMatchingImport, InvalidComponentArgs, PageNumberParamNotFound, ImageMissingAlt, InvalidImageService, MissingImageDimension, FailedToFetchRemoteImageDimensions, UnsupportedImageFormat, UnsupportedImageConversion, PrerenderDynamicEndpointPathCollide, ExpectedImage, ExpectedImageOptions, ExpectedNotESMImage, IncompatibleDescriptorOptions, NoImageMetadata, ResponseSentError, MiddlewareNoDataOrNextCalled, MiddlewareNotAResponse, EndpointDidNotReturnAResponse, LocalsNotAnObject, LocalsReassigned, AstroResponseHeadersReassigned, LocalImageUsedWrongly, AstroGlobUsedOutside, AstroGlobNoMatch, MissingSharp, i18nNoLocaleFoundInPath, RewriteWithBodyUsed, ForbiddenRewrite, ExperimentalFontsNotEnabled, FontFamilyNotFound, ActionsReturnedInvalidDataError, ActionNotFoundError, SessionStorageInitError, SessionStorageSaveError, AstroError, FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY, $, bold, dim, red, green, yellow, blue, replace, ca, esca, pe, escape, escapeHTML, HTMLBytes, HTMLString, markHTMLString, AstroJSX, RenderInstructionSymbol, PROP_TYPE, transitionDirectivesToCopyOnIsland, dictionary, binary, headAndContentSym, astro_island_prebuilt_default, ISLAND_STYLES, voidElementNames, htmlBooleanAttributes, AMPERSAND_REGEX, DOUBLE_QUOTE_REGEX, STATIC_DIRECTIVES, toIdent, toAttributeString, kebab, toStyleString, noop, BufferedRenderer, isNode, isDeno, VALID_PROTOCOLS, uniqueElements, alphabetUpperCase, decodeMap, EncodingPadding$1, DecodingPadding$1, base64Alphabet, EncodingPadding, DecodingPadding, base64DecodeMap, ALGORITHM, encoder$1, decoder$1, IV_LENGTH, renderTemplateResultSym, RenderTemplateResult, slotString, SlotString, internalProps, SCRIPT_RE, COMMENT_RE, SCRIPT_REPLACER, COMMENT_REPLACER, renderServerIslandRuntime, Fragment, Renderer, encoder, decoder, astroComponentInstanceSym, AstroComponentInstance, DOCTYPE_EXP, needsHeadRenderingSymbol, rendererAliases, clientOnlyValues, ASTRO_SLOT_EXP, ASTRO_STATIC_SLOT_EXP, ClientOnlyPlaceholder, hasTriedRenderComponentSymbol, cssesc_1, hasRequiredCssesc;
var init_server_CwYSbNCn = __esm({
  "dist/_worker.js/chunks/astro/server_CwYSbNCn.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    ASTRO_VERSION = "5.7.13";
    REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
    REWRITE_DIRECTIVE_HEADER_KEY = "X-Astro-Rewrite";
    REWRITE_DIRECTIVE_HEADER_VALUE = "yes";
    NOOP_MIDDLEWARE_HEADER = "X-Astro-Noop";
    ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
    DEFAULT_404_COMPONENT = "astro-default-404.astro";
    REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308, 300, 304];
    REROUTABLE_STATUS_CODES = [404, 500];
    clientAddressSymbol = Symbol.for("astro.clientAddress");
    originPathnameSymbol = Symbol.for("astro.originPathname");
    responseSentSymbol = Symbol.for("astro.responseSent");
    ClientAddressNotAvailable = {
      name: "ClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in current adapter.",
      message: /* @__PURE__ */ __name((adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`, "message")
    };
    PrerenderClientAddressNotAvailable = {
      name: "PrerenderClientAddressNotAvailable",
      title: "`Astro.clientAddress` cannot be used inside prerendered routes.",
      message: /* @__PURE__ */ __name((name) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${name}`, "message")
    };
    StaticClientAddressNotAvailable = {
      name: "StaticClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in prerendered pages.",
      message: "`Astro.clientAddress` is only available on pages that are server-rendered.",
      hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR."
    };
    NoMatchingStaticPathFound = {
      name: "NoMatchingStaticPathFound",
      title: "No static path found for requested path.",
      message: /* @__PURE__ */ __name((pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`, "message"),
      hint: /* @__PURE__ */ __name((possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`, "hint")
    };
    OnlyResponseCanBeReturned = {
      name: "OnlyResponseCanBeReturned",
      title: "Invalid type returned by Astro page.",
      message: /* @__PURE__ */ __name((route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`, "message"),
      hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information."
    };
    MissingMediaQueryDirective = {
      name: "MissingMediaQueryDirective",
      title: "Missing value for `client:media` directive.",
      message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
    };
    NoMatchingRenderer = {
      name: "NoMatchingRenderer",
      title: "No matching renderer found.",
      message: /* @__PURE__ */ __name((componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`, "message"),
      hint: /* @__PURE__ */ __name((probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`, "hint")
    };
    NoClientOnlyHint = {
      name: "NoClientOnlyHint",
      title: "Missing hint on client:only directive.",
      message: /* @__PURE__ */ __name((componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`, "message"),
      hint: /* @__PURE__ */ __name((probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`, "hint")
    };
    InvalidGetStaticPathsEntry = {
      name: "InvalidGetStaticPathsEntry",
      title: "Invalid entry inside getStaticPath's return value",
      message: /* @__PURE__ */ __name((entryType) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${entryType}\``, "message"),
      hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    InvalidGetStaticPathsReturn = {
      name: "InvalidGetStaticPathsReturn",
      title: "Invalid value returned by getStaticPaths.",
      message: /* @__PURE__ */ __name((returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``, "message"),
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsExpectedParams = {
      name: "GetStaticPathsExpectedParams",
      title: "Missing params property on `getStaticPaths` route.",
      message: "Missing or empty required `params` property on `getStaticPaths` route.",
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsInvalidRouteParam = {
      name: "GetStaticPathsInvalidRouteParam",
      title: "Invalid value for `getStaticPaths` route parameter.",
      message: /* @__PURE__ */ __name((key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`, "message"),
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsRequired = {
      name: "GetStaticPathsRequired",
      title: "`getStaticPaths()` function required for dynamic routes.",
      message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
      hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

	If you meant for this route to be server-rendered, set \`export const prerender = false;\` in the page.`
    };
    ReservedSlotName = {
      name: "ReservedSlotName",
      title: "Invalid slot name.",
      message: /* @__PURE__ */ __name((slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`, "message")
    };
    NoMatchingImport = {
      name: "NoMatchingImport",
      title: "No import found for component.",
      message: /* @__PURE__ */ __name((componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`, "message"),
      hint: "Please make sure the component is properly imported."
    };
    InvalidComponentArgs = {
      name: "InvalidComponentArgs",
      title: "Invalid component arguments.",
      message: /* @__PURE__ */ __name((name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`, "message"),
      hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
    };
    PageNumberParamNotFound = {
      name: "PageNumberParamNotFound",
      title: "Page number param not found.",
      message: /* @__PURE__ */ __name((paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`, "message"),
      hint: "Rename your file to `[page].astro` or `[...page].astro`."
    };
    ImageMissingAlt = {
      name: "ImageMissingAlt",
      title: 'Image missing required "alt" property.',
      message: 'Image missing "alt" property. "alt" text is required to describe important images on the page.',
      hint: 'Use an empty string ("") for decorative images.'
    };
    InvalidImageService = {
      name: "InvalidImageService",
      title: "Error while loading image service.",
      message: "There was an error loading the configured image service. Please see the stack trace for more information."
    };
    MissingImageDimension = {
      name: "MissingImageDimension",
      title: "Missing image dimensions",
      message: /* @__PURE__ */ __name((missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are required in order to avoid CLS.`, "message"),
      hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."
    };
    FailedToFetchRemoteImageDimensions = {
      name: "FailedToFetchRemoteImageDimensions",
      title: "Failed to retrieve remote image dimensions",
      message: /* @__PURE__ */ __name((imageURL) => `Failed to get the dimensions for ${imageURL}.`, "message"),
      hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."
    };
    UnsupportedImageFormat = {
      name: "UnsupportedImageFormat",
      title: "Unsupported image format",
      message: /* @__PURE__ */ __name((format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
        ", "
      )} are supported by our image services.`, "message"),
      hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
    };
    UnsupportedImageConversion = {
      name: "UnsupportedImageConversion",
      title: "Unsupported image conversion",
      message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."
    };
    PrerenderDynamicEndpointPathCollide = {
      name: "PrerenderDynamicEndpointPathCollide",
      title: "Prerendered dynamic endpoint has path collision.",
      message: /* @__PURE__ */ __name((pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`, "message"),
      hint: /* @__PURE__ */ __name((filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``, "hint")
    };
    ExpectedImage = {
      name: "ExpectedImage",
      title: "Expected src to be an image.",
      message: /* @__PURE__ */ __name((src, typeofOptions, fullOptions) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${src}\` (type: \`${typeofOptions}\`).

Full serialized options received: \`${fullOptions}\`.`, "message"),
      hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
    };
    ExpectedImageOptions = {
      name: "ExpectedImageOptions",
      title: "Expected image options.",
      message: /* @__PURE__ */ __name((options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`, "message")
    };
    ExpectedNotESMImage = {
      name: "ExpectedNotESMImage",
      title: "Expected image options, not an ESM-imported image.",
      message: "An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.",
      hint: "Try changing `getImage(myImage)` to `getImage({ src: myImage })`"
    };
    IncompatibleDescriptorOptions = {
      name: "IncompatibleDescriptorOptions",
      title: "Cannot set both `densities` and `widths`",
      message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
      hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."
    };
    NoImageMetadata = {
      name: "NoImageMetadata",
      title: "Could not process image metadata.",
      message: /* @__PURE__ */ __name((imagePath) => `Could not process image metadata${imagePath ? ` for \`${imagePath}\`` : ""}.`, "message"),
      hint: "This is often caused by a corrupted or malformed image. Re-exporting the image from your image editor may fix this issue."
    };
    ResponseSentError = {
      name: "ResponseSentError",
      title: "Unable to set response.",
      message: "The response has already been sent to the browser and cannot be altered."
    };
    MiddlewareNoDataOrNextCalled = {
      name: "MiddlewareNoDataOrNextCalled",
      title: "The middleware didn't return a `Response`.",
      message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
    };
    MiddlewareNotAResponse = {
      name: "MiddlewareNotAResponse",
      title: "The middleware returned something that is not a `Response` object.",
      message: "Any data returned from middleware must be a valid `Response` object."
    };
    EndpointDidNotReturnAResponse = {
      name: "EndpointDidNotReturnAResponse",
      title: "The endpoint did not return a `Response`.",
      message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`."
    };
    LocalsNotAnObject = {
      name: "LocalsNotAnObject",
      title: "Value assigned to `locals` is not accepted.",
      message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
      hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
    };
    LocalsReassigned = {
      name: "LocalsReassigned",
      title: "`locals` must not be reassigned.",
      message: "`locals` can not be assigned directly.",
      hint: "Set a `locals` property instead."
    };
    AstroResponseHeadersReassigned = {
      name: "AstroResponseHeadersReassigned",
      title: "`Astro.response.headers` must not be reassigned.",
      message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
      hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
    };
    LocalImageUsedWrongly = {
      name: "LocalImageUsedWrongly",
      title: "Local images must be imported.",
      message: /* @__PURE__ */ __name((imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${imageFilePath}\`.`, "message"),
      hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."
    };
    AstroGlobUsedOutside = {
      name: "AstroGlobUsedOutside",
      title: "Astro.glob() used outside of an Astro file.",
      message: /* @__PURE__ */ __name((globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`, "message"),
      hint: "See Vite's documentation on `import.meta.glob` for more information: https://vite.dev/guide/features.html#glob-import"
    };
    AstroGlobNoMatch = {
      name: "AstroGlobNoMatch",
      title: "Astro.glob() did not match any files.",
      message: /* @__PURE__ */ __name((globStr) => `\`Astro.glob(${globStr})\` did not return any matching files.`, "message"),
      hint: "Check the pattern for typos."
    };
    MissingSharp = {
      name: "MissingSharp",
      title: "Could not find Sharp.",
      message: "Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",
      hint: "See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."
    };
    i18nNoLocaleFoundInPath = {
      name: "i18nNoLocaleFoundInPath",
      title: "The path doesn't contain any locale",
      message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale."
    };
    RewriteWithBodyUsed = {
      name: "RewriteWithBodyUsed",
      title: "Cannot use Astro.rewrite after the request body has been read",
      message: "Astro.rewrite() cannot be used if the request body has already been read. If you need to read the body, first clone the request."
    };
    ForbiddenRewrite = {
      name: "ForbiddenRewrite",
      title: "Forbidden rewrite to a static route.",
      message: /* @__PURE__ */ __name((from, to, component) => `You tried to rewrite the on-demand route '${from}' with the static route '${to}', when using the 'server' output. 

The static route '${to}' is rendered by the component
'${component}', which is marked as prerendered. This is a forbidden operation because during the build the component '${component}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`, "message"),
      hint: /* @__PURE__ */ __name((component) => `Add \`export const prerender = false\` to the component '${component}', or use a Astro.redirect().`, "hint")
    };
    ExperimentalFontsNotEnabled = {
      name: "ExperimentalFontsNotEnabled",
      title: "Experimental fonts are not enabled",
      message: "The Font component is used but experimental fonts have not been registered in the config.",
      hint: "Check that you have enabled experimental fonts and also configured your preferred fonts."
    };
    FontFamilyNotFound = {
      name: "FontFamilyNotFound",
      title: "Font family not found",
      message: /* @__PURE__ */ __name((family) => `No data was found for the \`"${family}"\` family passed to the \`<Font>\` component.`, "message"),
      hint: "This is often caused by a typo. Check that your Font component is using a `cssVariable` specified in your config."
    };
    ActionsReturnedInvalidDataError = {
      name: "ActionsReturnedInvalidDataError",
      title: "Action handler returned invalid data.",
      message: /* @__PURE__ */ __name((error4) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${error4}`, "message"),
      hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
    };
    ActionNotFoundError = {
      name: "ActionNotFoundError",
      title: "Action not found.",
      message: /* @__PURE__ */ __name((actionName) => `The server received a request for an action named \`${actionName}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`, "message"),
      hint: "You can run `astro check` to detect type errors caused by mismatched action names."
    };
    SessionStorageInitError = {
      name: "SessionStorageInitError",
      title: "Session storage could not be initialized.",
      message: /* @__PURE__ */ __name((error4, driver) => `Error when initializing session storage${driver ? ` with driver \`${driver}\`` : ""}. \`${error4 ?? ""}\``, "message"),
      hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
    };
    SessionStorageSaveError = {
      name: "SessionStorageSaveError",
      title: "Session data could not be saved.",
      message: /* @__PURE__ */ __name((error4, driver) => `Error when saving session data${driver ? ` with driver \`${driver}\`` : ""}. \`${error4 ?? ""}\``, "message"),
      hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
    };
    __name(normalizeLF, "normalizeLF");
    __name(codeFrame, "codeFrame");
    AstroError = class extends Error {
      static {
        __name(this, "AstroError");
      }
      loc;
      title;
      hint;
      frame;
      type = "AstroError";
      constructor(props, options) {
        const { name, title: title2, message, stack, location, hint, frame } = props;
        super(message, options);
        this.title = title2;
        this.name = name;
        if (message) this.message = message;
        this.stack = stack ? stack : this.stack;
        this.loc = location;
        this.hint = hint;
        this.frame = frame;
      }
      setLocation(location) {
        this.loc = location;
      }
      setName(name) {
        this.name = name;
      }
      setMessage(message) {
        this.message = message;
      }
      setHint(hint) {
        this.hint = hint;
      }
      setFrame(source, location) {
        this.frame = codeFrame(source, location);
      }
      static is(err) {
        return err.type === "AstroError";
      }
    };
    __name(validateArgs, "validateArgs");
    __name(baseCreateComponent, "baseCreateComponent");
    __name(createComponentWithOptions, "createComponentWithOptions");
    __name(createComponent, "createComponent");
    __name(createAstroGlobFn, "createAstroGlobFn");
    __name(createAstro, "createAstro");
    isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    __name(init, "init");
    bold = init(1, 22);
    dim = init(2, 22);
    red = init(31, 39);
    green = init(32, 39);
    yellow = init(33, 39);
    blue = init(34, 39);
    __name(renderEndpoint, "renderEndpoint");
    ({ replace } = "");
    ca = /[&<>'"]/g;
    esca = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    pe = /* @__PURE__ */ __name((m) => esca[m], "pe");
    escape = /* @__PURE__ */ __name((es) => replace.call(es, ca, pe), "escape");
    __name(isPromise, "isPromise");
    __name(streamAsyncIterator, "streamAsyncIterator");
    escapeHTML = escape;
    HTMLBytes = class extends Uint8Array {
      static {
        __name(this, "HTMLBytes");
      }
    };
    Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
      get() {
        return "HTMLBytes";
      }
    });
    HTMLString = class extends String {
      static {
        __name(this, "HTMLString");
      }
      get [Symbol.toStringTag]() {
        return "HTMLString";
      }
    };
    markHTMLString = /* @__PURE__ */ __name((value) => {
      if (value instanceof HTMLString) {
        return value;
      }
      if (typeof value === "string") {
        return new HTMLString(value);
      }
      return value;
    }, "markHTMLString");
    __name(isHTMLString, "isHTMLString");
    __name(markHTMLBytes, "markHTMLBytes");
    __name(hasGetReader, "hasGetReader");
    __name(unescapeChunksAsync, "unescapeChunksAsync");
    __name(unescapeChunks, "unescapeChunks");
    __name(unescapeHTML, "unescapeHTML");
    AstroJSX = "astro:jsx";
    __name(isVNode, "isVNode");
    RenderInstructionSymbol = Symbol.for("astro:render");
    __name(createRenderInstruction, "createRenderInstruction");
    __name(isRenderInstruction, "isRenderInstruction");
    __name(r, "r");
    __name(clsx, "clsx");
    PROP_TYPE = {
      Value: 0,
      JSON: 1,
      // Actually means Array
      RegExp: 2,
      Date: 3,
      Map: 4,
      Set: 5,
      BigInt: 6,
      URL: 7,
      Uint8Array: 8,
      Uint16Array: 9,
      Uint32Array: 10,
      Infinity: 11
    };
    __name(serializeArray, "serializeArray");
    __name(serializeObject, "serializeObject");
    __name(convertToSerializedForm, "convertToSerializedForm");
    __name(serializeProps, "serializeProps");
    transitionDirectivesToCopyOnIsland = Object.freeze([
      "data-astro-transition-scope",
      "data-astro-transition-persist",
      "data-astro-transition-persist-props"
    ]);
    __name(extractDirectives, "extractDirectives");
    __name(generateHydrateScript, "generateHydrateScript");
    dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    binary = dictionary.length;
    __name(bitwise, "bitwise");
    __name(shorthash, "shorthash");
    __name(isAstroComponentFactory, "isAstroComponentFactory");
    __name(isAPropagatingComponent, "isAPropagatingComponent");
    headAndContentSym = Symbol.for("astro.headAndContent");
    __name(isHeadAndContent, "isHeadAndContent");
    astro_island_prebuilt_default = `(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export \${v})\`),console.error(\`[hydrate] Error parsing props for component \${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(\`astro:\${c}\`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`[astro-island] Error hydrating \${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();`;
    ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
    __name(determineIfNeedsHydrationScript, "determineIfNeedsHydrationScript");
    __name(determinesIfNeedsDirectiveScript, "determinesIfNeedsDirectiveScript");
    __name(getDirectiveScriptText, "getDirectiveScriptText");
    __name(getPrescripts, "getPrescripts");
    voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
    htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i;
    AMPERSAND_REGEX = /&/g;
    DOUBLE_QUOTE_REGEX = /"/g;
    STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
    toIdent = /* @__PURE__ */ __name((k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index) => {
      if (/\W/.test(match)) return "";
      return index === 0 ? match : match.toUpperCase();
    }), "toIdent");
    toAttributeString = /* @__PURE__ */ __name((value, shouldEscape = true) => shouldEscape ? String(value).replace(AMPERSAND_REGEX, "&#38;").replace(DOUBLE_QUOTE_REGEX, "&#34;") : value, "toAttributeString");
    kebab = /* @__PURE__ */ __name((k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), "kebab");
    toStyleString = /* @__PURE__ */ __name((obj) => Object.entries(obj).filter(([_, v]) => typeof v === "string" && v.trim() || typeof v === "number").map(([k, v]) => {
      if (k[0] !== "-" && k[1] !== "-") return `${kebab(k)}:${v}`;
      return `${k}:${v}`;
    }).join(";"), "toStyleString");
    __name(defineScriptVars, "defineScriptVars");
    __name(formatList, "formatList");
    __name(addAttribute, "addAttribute");
    __name(internalSpreadAttributes, "internalSpreadAttributes");
    __name(renderElement$1, "renderElement$1");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    BufferedRenderer = class {
      static {
        __name(this, "BufferedRenderer");
      }
      chunks = [];
      renderPromise;
      destination;
      /**
       * Determines whether buffer has been flushed
       * to the final destination.
       */
      flushed = false;
      constructor(destination, renderFunction) {
        this.destination = destination;
        this.renderPromise = renderFunction(this);
        if (isPromise(this.renderPromise)) {
          Promise.resolve(this.renderPromise).catch(noop);
        }
      }
      write(chunk) {
        if (this.flushed) {
          this.destination.write(chunk);
        } else {
          this.chunks.push(chunk);
        }
      }
      flush() {
        if (this.flushed) {
          throw new Error("The render buffer has already been flushed.");
        }
        this.flushed = true;
        for (const chunk of this.chunks) {
          this.destination.write(chunk);
        }
        return this.renderPromise;
      }
    };
    __name(createBufferedRenderer, "createBufferedRenderer");
    isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
    isDeno = typeof Deno !== "undefined";
    __name(promiseWithResolvers, "promiseWithResolvers");
    VALID_PROTOCOLS = ["http:", "https:"];
    __name(isHttpUrl, "isHttpUrl");
    uniqueElements = /* @__PURE__ */ __name((item, index, all) => {
      const props = JSON.stringify(item.props);
      const children = item.children;
      return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
    }, "uniqueElements");
    __name(renderAllHeadContent, "renderAllHeadContent");
    __name(renderHead, "renderHead");
    __name(maybeRenderHead, "maybeRenderHead");
    __name(encodeHexUpperCase, "encodeHexUpperCase");
    __name(decodeHex, "decodeHex");
    alphabetUpperCase = "0123456789ABCDEF";
    decodeMap = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    };
    (function(EncodingPadding2) {
      EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
      EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
    })(EncodingPadding$1 || (EncodingPadding$1 = {}));
    (function(DecodingPadding2) {
      DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
      DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
    })(DecodingPadding$1 || (DecodingPadding$1 = {}));
    __name(encodeBase64, "encodeBase64");
    __name(encodeBase64_internal, "encodeBase64_internal");
    base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(decodeBase64, "decodeBase64");
    __name(decodeBase64_internal, "decodeBase64_internal");
    (function(EncodingPadding2) {
      EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
      EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
    })(EncodingPadding || (EncodingPadding = {}));
    (function(DecodingPadding2) {
      DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
      DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
    })(DecodingPadding || (DecodingPadding = {}));
    base64DecodeMap = {
      "0": 52,
      "1": 53,
      "2": 54,
      "3": 55,
      "4": 56,
      "5": 57,
      "6": 58,
      "7": 59,
      "8": 60,
      "9": 61,
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
      a: 26,
      b: 27,
      c: 28,
      d: 29,
      e: 30,
      f: 31,
      g: 32,
      h: 33,
      i: 34,
      j: 35,
      k: 36,
      l: 37,
      m: 38,
      n: 39,
      o: 40,
      p: 41,
      q: 42,
      r: 43,
      s: 44,
      t: 45,
      u: 46,
      v: 47,
      w: 48,
      x: 49,
      y: 50,
      z: 51,
      "+": 62,
      "/": 63
    };
    ALGORITHM = "AES-GCM";
    __name(decodeKey, "decodeKey");
    encoder$1 = new TextEncoder();
    decoder$1 = new TextDecoder();
    IV_LENGTH = 24;
    __name(encryptString, "encryptString");
    __name(decryptString, "decryptString");
    renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
    RenderTemplateResult = class {
      static {
        __name(this, "RenderTemplateResult");
      }
      [renderTemplateResultSym] = true;
      htmlParts;
      expressions;
      error;
      constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.error = void 0;
        this.expressions = expressions.map((expression) => {
          if (isPromise(expression)) {
            return Promise.resolve(expression).catch((err) => {
              if (!this.error) {
                this.error = err;
                throw err;
              }
            });
          }
          return expression;
        });
      }
      render(destination) {
        const flushers = this.expressions.map((exp) => {
          return createBufferedRenderer(destination, (bufferDestination) => {
            if (exp || exp === 0) {
              return renderChild(bufferDestination, exp);
            }
          });
        });
        let i = 0;
        const iterate = /* @__PURE__ */ __name(() => {
          while (i < this.htmlParts.length) {
            const html = this.htmlParts[i];
            const flusher = flushers[i];
            i++;
            if (html) {
              destination.write(markHTMLString(html));
            }
            if (flusher) {
              const result = flusher.flush();
              if (isPromise(result)) {
                return result.then(iterate);
              }
            }
          }
        }, "iterate");
        return iterate();
      }
    };
    __name(isRenderTemplateResult, "isRenderTemplateResult");
    __name(renderTemplate, "renderTemplate");
    slotString = Symbol.for("astro:slot-string");
    SlotString = class extends HTMLString {
      static {
        __name(this, "SlotString");
      }
      instructions;
      [slotString];
      constructor(content, instructions) {
        super(content);
        this.instructions = instructions;
        this[slotString] = true;
      }
    };
    __name(isSlotString, "isSlotString");
    __name(renderSlot, "renderSlot");
    __name(renderSlotToString, "renderSlotToString");
    __name(renderSlots, "renderSlots");
    __name(createSlotValueFromString, "createSlotValueFromString");
    internalProps = /* @__PURE__ */ new Set([
      "server:component-path",
      "server:component-export",
      "server:component-directive",
      "server:defer"
    ]);
    __name(containsServerDirective, "containsServerDirective");
    SCRIPT_RE = /<\/script/giu;
    COMMENT_RE = /<!--/gu;
    SCRIPT_REPLACER = "<\\/script";
    COMMENT_REPLACER = "\\u003C!--";
    __name(safeJsonStringify, "safeJsonStringify");
    __name(createSearchParams, "createSearchParams");
    __name(isWithinURLLimit, "isWithinURLLimit");
    __name(renderServerIsland, "renderServerIsland");
    renderServerIslandRuntime = /* @__PURE__ */ __name(() => markHTMLString(
      `
	<script>
		async function replaceServerIsland(id, r) {
			let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
			// If there's no matching script, or the request fails then return
			if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
			// Load the HTML before modifying the DOM in case of errors
			let html = await r.text();
			// Remove any placeholder content before the island script
			while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')
				s.previousSibling.remove();
			s.previousSibling?.remove();
			// Insert the new HTML
			s.before(document.createRange().createContextualFragment(html));
			// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
			s.remove();
		}
	<\/script>`.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("//")).join(" ")
    ), "renderServerIslandRuntime");
    Fragment = Symbol.for("astro:fragment");
    Renderer = Symbol.for("astro:renderer");
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    __name(stringifyChunk, "stringifyChunk");
    __name(chunkToString, "chunkToString");
    __name(chunkToByteArray, "chunkToByteArray");
    __name(isRenderInstance, "isRenderInstance");
    __name(renderChild, "renderChild");
    __name(renderArray, "renderArray");
    __name(renderIterable, "renderIterable");
    __name(renderAsyncIterable, "renderAsyncIterable");
    astroComponentInstanceSym = Symbol.for("astro.componentInstance");
    AstroComponentInstance = class {
      static {
        __name(this, "AstroComponentInstance");
      }
      [astroComponentInstanceSym] = true;
      result;
      props;
      slotValues;
      factory;
      returnValue;
      constructor(result, props, slots, factory) {
        this.result = result;
        this.props = props;
        this.factory = factory;
        this.slotValues = {};
        for (const name in slots) {
          let didRender = false;
          let value = slots[name](result);
          this.slotValues[name] = () => {
            if (!didRender) {
              didRender = true;
              return value;
            }
            return slots[name](result);
          };
        }
      }
      init(result) {
        if (this.returnValue !== void 0) {
          return this.returnValue;
        }
        this.returnValue = this.factory(result, this.props, this.slotValues);
        if (isPromise(this.returnValue)) {
          this.returnValue.then((resolved) => {
            this.returnValue = resolved;
          }).catch(() => {
          });
        }
        return this.returnValue;
      }
      render(destination) {
        const returnValue = this.init(this.result);
        if (isPromise(returnValue)) {
          return returnValue.then((x) => this.renderImpl(destination, x));
        }
        return this.renderImpl(destination, returnValue);
      }
      renderImpl(destination, returnValue) {
        if (isHeadAndContent(returnValue)) {
          return returnValue.content.render(destination);
        } else {
          return renderChild(destination, returnValue);
        }
      }
    };
    __name(validateComponentProps, "validateComponentProps");
    __name(createAstroComponentInstance, "createAstroComponentInstance");
    __name(isAstroComponentInstance, "isAstroComponentInstance");
    DOCTYPE_EXP = /<!doctype html/i;
    __name(renderToString, "renderToString");
    __name(renderToReadableStream, "renderToReadableStream");
    __name(callComponentAsTemplateResultOrResponse, "callComponentAsTemplateResultOrResponse");
    __name(bufferHeadContent, "bufferHeadContent");
    __name(renderToAsyncIterable, "renderToAsyncIterable");
    __name(toPromise, "toPromise");
    __name(componentIsHTMLElement, "componentIsHTMLElement");
    __name(renderHTMLElement, "renderHTMLElement");
    __name(getHTMLElementName, "getHTMLElementName");
    needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
    rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
    clientOnlyValues = /* @__PURE__ */ new Set(["solid-js", "react", "preact", "vue", "svelte"]);
    __name(guessRenderers, "guessRenderers");
    __name(isFragmentComponent, "isFragmentComponent");
    __name(isHTMLComponent, "isHTMLComponent");
    ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
    ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
    __name(removeStaticAstroSlot, "removeStaticAstroSlot");
    __name(renderFrameworkComponent, "renderFrameworkComponent");
    __name(sanitizeElementName, "sanitizeElementName");
    __name(renderFragmentComponent, "renderFragmentComponent");
    __name(renderHTMLComponent, "renderHTMLComponent");
    __name(renderAstroComponent, "renderAstroComponent");
    __name(renderComponent, "renderComponent");
    __name(normalizeProps, "normalizeProps");
    __name(renderComponentToString, "renderComponentToString");
    __name(nonAstroPageNeedsHeadInjection, "nonAstroPageNeedsHeadInjection");
    ClientOnlyPlaceholder = "astro-client-only";
    hasTriedRenderComponentSymbol = Symbol("hasTriedRenderComponent");
    __name(renderJSX, "renderJSX");
    __name(renderJSXVNode, "renderJSXVNode");
    __name(renderElement, "renderElement");
    __name(prerenderElementChildren, "prerenderElementChildren");
    __name(renderScript, "renderScript");
    __name(renderPage, "renderPage");
    __name(requireCssesc, "requireCssesc");
    requireCssesc();
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
    "-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
    __name(spreadAttributes, "spreadAttributes");
  }
});

// dist/_worker.js/chunks/astro-designed-error-pages_CjEd6zCM.mjs
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
function stringify_key(key) {
  return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }
  return arraybuffer;
}
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED) return void 0;
    if (index === NAN) return NaN;
    if (index === POSITIVE_INFINITY) return Infinity;
    if (index === NEGATIVE_INFINITY) return -Infinity;
    if (index === NEGATIVE_ZERO) return -0;
    if (standalone) throw new Error(`Invalid input`);
    if (index in hydrated) return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type2 = value[0];
        const reviver = revivers?.[type2];
        if (reviver) {
          return hydrated[index] = reviver(hydrate(value[1]));
        }
        switch (type2) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i = 1; i < value.length; i += 1) {
              set.add(hydrate(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate(value[i]), hydrate(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i = 1; i < value.length; i += 2) {
              obj[value[i]] = hydrate(value[i + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type2];
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            const typedArray = new TypedArrayConstructor(arraybuffer);
            hydrated[index] = typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index] = arraybuffer;
            break;
          }
          default:
            throw new Error(`Unknown type ${type2}`);
        }
      } else {
        const array = new Array(value.length);
        hydrated[index] = array;
        for (let i = 0; i < value.length; i += 1) {
          const n = value[i];
          if (n === HOLE) continue;
          array[i] = hydrate(n);
        }
      }
    } else {
      const object = {};
      hydrated[index] = object;
      for (const key in value) {
        const n = value[key];
        object[key] = hydrate(n);
      }
    }
    return hydrated[index];
  }
  __name(hydrate, "hydrate");
  return hydrate(0);
}
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key, fn: reducers[key] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index2 = p++;
    indexes.set(thing, index2);
    for (const { key, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index2] = `["${key}",${flatten(value2)}]`;
        return index2;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type2 = get_type(thing);
      switch (type2) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`
            );
            str += `,${flatten(key)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base64 = encode64(typedArray.buffer);
          str = '["' + type2 + '","' + base64 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key in thing) {
              keys.push(stringify_key(key));
              str += `,${stringify_string(key)},${flatten(thing[key])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key));
              str += `${stringify_string(key)}:${flatten(thing[key])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index2] = str;
    return index2;
  }
  __name(flatten, "flatten");
  const index = flatten(value);
  if (index < 0) return `${index}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type2 = typeof thing;
  if (type2 === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type2 === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
function isActionError(error4) {
  return typeof error4 === "object" && error4 != null && "type" in error4 && error4.type === "AstroActionError";
}
function isInputError(error4) {
  return typeof error4 === "object" && error4 != null && "type" in error4 && error4.type === "AstroActionInputError" && "issues" in error4 && Array.isArray(error4.issues);
}
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ [ACTION_QUERY_PARAMS$1.actionName]: name });
  return `?${searchParams.toString()}`;
}
function serializeActionResult(res) {
  if (res.error) {
    if (Object.assign(__vite_import_meta_env__, { OS: process.env.OS })?.DEV) {
      actionResultErrorStack.set(res.error.stack);
    }
    let body2;
    if (res.error instanceof ActionInputError) {
      body2 = {
        type: res.error.type,
        issues: res.error.issues,
        fields: res.error.fields
      };
    } else {
      body2 = {
        ...res.error,
        message: res.error.message
      };
    }
    return {
      type: "error",
      status: res.error.status,
      contentType: "application/json",
      body: JSON.stringify(body2)
    };
  }
  if (res.data === void 0) {
    return {
      type: "empty",
      status: 204
    };
  }
  let body;
  try {
    body = stringify(res.data, {
      // Add support for URL objects
      URL: /* @__PURE__ */ __name((value) => value instanceof URL && value.href, "URL")
    });
  } catch (e) {
    let hint = ActionsReturnedInvalidDataError.hint;
    if (res.data instanceof Response) {
      hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
    }
    throw new AstroError({
      ...ActionsReturnedInvalidDataError,
      message: ActionsReturnedInvalidDataError.message(String(e)),
      hint
    });
  }
  return {
    type: "data",
    status: 200,
    contentType: "application/json+devalue",
    body
  };
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    let json;
    try {
      json = JSON.parse(res.body);
    } catch {
      return {
        data: void 0,
        error: new ActionError({
          message: res.body,
          code: "INTERNAL_SERVER_ERROR"
        })
      };
    }
    if (Object.assign(__vite_import_meta_env__, { OS: process.env.OS })?.PROD) {
      return { error: ActionError.fromJson(json), data: void 0 };
    } else {
      const error4 = ActionError.fromJson(json);
      error4.stack = actionResultErrorStack.get();
      return {
        error: error4,
        data: void 0
      };
    }
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse(res.body, {
      URL: /* @__PURE__ */ __name((href) => new URL(href), "URL")
    }),
    error: void 0
  };
}
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", { value: true });
  dist.parse = parse2;
  dist.serialize = serialize;
  const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  const __toString = Object.prototype.toString;
  const NullObject = /* @__PURE__ */ (() => {
    const C = /* @__PURE__ */ __name(function() {
    }, "C");
    C.prototype = /* @__PURE__ */ Object.create(null);
    return C;
  })();
  function parse2(str, options) {
    const obj = new NullObject();
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1)
        break;
      const colonIdx = str.indexOf(";", index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === void 0) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  __name(parse2, "parse");
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9)
        return index;
    } while (++index < max);
    return max;
  }
  __name(startIndex, "startIndex");
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9)
        return index + 1;
    }
    return min;
  }
  __name(endIndex, "endIndex");
  function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
      return str;
    if (options.maxAge !== void 0) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += "; Domain=" + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += "; Path=" + options.path;
    }
    if (options.expires) {
      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += "; HttpOnly";
    }
    if (options.secure) {
      str += "; Secure";
    }
    if (options.partitioned) {
      str += "; Partitioned";
    }
    if (options.priority) {
      const priority2 = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
      switch (priority2) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${options.priority}`);
      }
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
      }
    }
    return str;
  }
  __name(serialize, "serialize");
  function decode(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  __name(decode, "decode");
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  __name(isDate, "isDate");
  return dist;
}
function template({
  title: title2,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title2}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
function ensure404Route(manifest2) {
  if (!manifest2.routes.some((route) => route.route === "/404")) {
    manifest2.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest2;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html" } }
  );
}
var ImportType, E, DevalueError, object_proto_names, is_identifier, KEY_STRING, UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO, ACTION_QUERY_PARAMS$1, ACTION_RPC_ROUTE_PATTERN, __vite_import_meta_env__, ACTION_QUERY_PARAMS, codeToStatusMap, statusToCodeMap, ActionError, ActionInputError, actionResultErrorStack, dist, hasRequiredDist, distExports, DEFAULT_404_ROUTE, default404Instance;
var init_astro_designed_error_pages_CjEd6zCM = __esm({
  "dist/_worker.js/chunks/astro-designed-error-pages_CjEd6zCM.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    !function(A) {
      A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase";
    }(ImportType || (ImportType = {}));
    1 === new Uint8Array(new Uint16Array([1]).buffer)[0];
    E = /* @__PURE__ */ __name(() => {
      return A = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKzkQwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQuFDAEKf0EAQQAoArAKIgBBDGoiATYCsApBARApIQJBACgCsAohAwJAAkACQAJAAkACQAJAAkAgAkEuRw0AQQAgA0ECajYCsAoCQEEBECkiAkHkAEYNAAJAIAJB8wBGDQAgAkHtAEcNB0EAKAKwCiICQQJqQZwIQQYQLw0HAkBBACgCnAoiAxAqDQAgAy8BAEEuRg0ICyAAIAAgAkEIakEAKALUCRABDwtBACgCsAoiAkECakGiCEEKEC8NBgJAQQAoApwKIgMQKg0AIAMvAQBBLkYNBwtBACEEQQAgAkEMajYCsApBASEFQQUhBkEBECkhAkEAIQdBASEIDAILQQAoArAKIgIpAAJC5YCYg9CMgDlSDQUCQEEAKAKcCiIDECoNACADLwEAQS5GDQYLQQAhBEEAIAJBCmo2ArAKQQIhCEEHIQZBASEHQQEQKSECQQEhBQwBCwJAAkACQAJAIAJB8wBHDQAgAyABTQ0AIANBAmpBoghBChAvDQACQCADLwEMIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAgsgBEGgAUYNAQtBACEHQQchBkEBIQQgAkHkAEYNAQwCC0EAIQRBACADQQxqIgI2ArAKQQEhBUEBECkhCQJAQQAoArAKIgYgAkYNAEHmACECAkAgCUHmAEYNAEEFIQZBACEHQQEhCCAJIQIMBAtBACEHQQEhCCAGQQJqQawIQQYQLw0EIAYvAQgQIEUNBAtBACEHQQAgAzYCsApBByEGQQEhBEEAIQVBACEIIAkhAgwCCyADIABBCmpNDQBBACEIQeQAIQICQCADKQACQuWAmIPQjIA5Ug0AAkACQCADLwEKIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAQtBACEIIARBoAFHDQELQQAhBUEAIANBCmo2ArAKQSohAkEBIQdBAiEIQQEQKSIJQSpGDQRBACADNgKwCkEBIQRBACEHQQAhCCAJIQIMAgsgAyEGQQAhBwwCC0EAIQVBACEICwJAIAJBKEcNAEEAKAKkCkEALwGYCiICQQN0aiIDQQAoArAKNgIEQQAgAkEBajsBmAogA0EFNgIAQQAoApwKLwEAQS5GDQRBAEEAKAKwCiIDQQJqNgKwCkEBECkhAiAAQQAoArAKQQAgAxABAkACQCAFDQBBACgC8AkhAQwBC0EAKALwCSIBIAY2AhwLQQBBAC8BlgoiA0EBajsBlgpBACgCqAogA0ECdGogATYCAAJAIAJBIkYNACACQSdGDQBBAEEAKAKwCkF+ajYCsAoPCyACEBpBAEEAKAKwCkECaiICNgKwCgJAAkACQEEBEClBV2oOBAECAgACC0EAQQAoArAKQQJqNgKwCkEBECkaQQAoAvAJIgMgAjYCBCADQQE6ABggA0EAKAKwCiICNgIQQQAgAkF+ajYCsAoPC0EAKALwCSIDIAI2AgQgA0EBOgAYQQBBAC8BmApBf2o7AZgKIANBACgCsApBAmo2AgxBAEEALwGWCkF/ajsBlgoPC0EAQQAoArAKQX5qNgKwCg8LAkAgBEEBcyACQfsAR3INAEEAKAKwCiECQQAvAZgKDQUDQAJAAkACQCACQQAoArQKTw0AQQEQKSICQSJGDQEgAkEnRg0BIAJB/QBHDQJBAEEAKAKwCkECajYCsAoLQQEQKSEDQQAoArAKIQICQCADQeYARw0AIAJBAmpBrAhBBhAvDQcLQQAgAkEIajYCsAoCQEEBECkiAkEiRg0AIAJBJ0cNBwsgACACQQAQKw8LIAIQGgtBAEEAKAKwCkECaiICNgKwCgwACwsCQAJAIAJBWWoOBAMBAQMACyACQSJGDQILQQAoArAKIQYLIAYgAUcNAEEAIABBCmo2ArAKDwsgAkEqRyAHcQ0DQQAvAZgKQf//A3ENA0EAKAKwCiECQQAoArQKIQEDQCACIAFPDQECQAJAIAIvAQAiA0EnRg0AIANBIkcNAQsgACADIAgQKw8LQQAgAkECaiICNgKwCgwACwsQJQsPC0EAIAJBfmo2ArAKDwtBAEEAKAKwCkF+ajYCsAoLRwEDf0EAKAKwCkECaiEAQQAoArQKIQECQANAIAAiAkF+aiABTw0BIAJBAmohACACLwEAQXZqDgQBAAABAAsLQQAgAjYCsAoLmAEBA39BAEEAKAKwCiIBQQJqNgKwCiABQQZqIQFBACgCtAohAgNAAkACQAJAIAFBfGogAk8NACABQX5qLwEAIQMCQAJAIAANACADQSpGDQEgA0F2ag4EAgQEAgQLIANBKkcNAwsgAS8BAEEvRw0CQQAgAUF+ajYCsAoMAQsgAUF+aiEBC0EAIAE2ArAKDwsgAUECaiEBDAALC4gBAQR/QQAoArAKIQFBACgCtAohAgJAAkADQCABIgNBAmohASADIAJPDQEgAS8BACIEIABGDQICQCAEQdwARg0AIARBdmoOBAIBAQIBCyADQQRqIQEgAy8BBEENRw0AIANBBmogASADLwEGQQpGGyEBDAALC0EAIAE2ArAKECUPC0EAIAE2ArAKC2wBAX8CQAJAIABBX2oiAUEFSw0AQQEgAXRBMXENAQsgAEFGakH//wNxQQZJDQAgAEEpRyAAQVhqQf//A3FBB0lxDQACQCAAQaV/ag4EAQAAAQALIABB/QBHIABBhX9qQf//A3FBBElxDwtBAQsuAQF/QQEhAQJAIABBpglBBRAdDQAgAEGWCEEDEB0NACAAQbAJQQIQHSEBCyABC0YBA39BACEDAkAgACACQQF0IgJrIgRBAmoiAEEAKALcCSIFSQ0AIAAgASACEC8NAAJAIAAgBUcNAEEBDwsgBBAmIQMLIAMLgwEBAn9BASEBAkACQAJAAkACQAJAIAAvAQAiAkFFag4EBQQEAQALAkAgAkGbf2oOBAMEBAIACyACQSlGDQQgAkH5AEcNAyAAQX5qQbwJQQYQHQ8LIABBfmovAQBBPUYPCyAAQX5qQbQJQQQQHQ8LIABBfmpByAlBAxAdDwtBACEBCyABC7QDAQJ/QQAhAQJAAkACQAJAAkACQAJAAkACQAJAIAAvAQBBnH9qDhQAAQIJCQkJAwkJBAUJCQYJBwkJCAkLAkACQCAAQX5qLwEAQZd/ag4EAAoKAQoLIABBfGpByghBAhAdDwsgAEF8akHOCEEDEB0PCwJAAkACQCAAQX5qLwEAQY1/ag4DAAECCgsCQCAAQXxqLwEAIgJB4QBGDQAgAkHsAEcNCiAAQXpqQeUAECcPCyAAQXpqQeMAECcPCyAAQXxqQdQIQQQQHQ8LIABBfGpB3AhBBhAdDwsgAEF+ai8BAEHvAEcNBiAAQXxqLwEAQeUARw0GAkAgAEF6ai8BACICQfAARg0AIAJB4wBHDQcgAEF4akHoCEEGEB0PCyAAQXhqQfQIQQIQHQ8LIABBfmpB+AhBBBAdDwtBASEBIABBfmoiAEHpABAnDQQgAEGACUEFEB0PCyAAQX5qQeQAECcPCyAAQX5qQYoJQQcQHQ8LIABBfmpBmAlBBBAdDwsCQCAAQX5qLwEAIgJB7wBGDQAgAkHlAEcNASAAQXxqQe4AECcPCyAAQXxqQaAJQQMQHSEBCyABCzQBAX9BASEBAkAgAEF3akH//wNxQQVJDQAgAEGAAXJBoAFGDQAgAEEuRyAAEChxIQELIAELMAEBfwJAAkAgAEF3aiIBQRdLDQBBASABdEGNgIAEcQ0BCyAAQaABRg0AQQAPC0EBC04BAn9BACEBAkACQCAALwEAIgJB5QBGDQAgAkHrAEcNASAAQX5qQfgIQQQQHQ8LIABBfmovAQBB9QBHDQAgAEF8akHcCEEGEB0hAQsgAQveAQEEf0EAKAKwCiEAQQAoArQKIQECQAJAAkADQCAAIgJBAmohACACIAFPDQECQAJAAkAgAC8BACIDQaR/ag4FAgMDAwEACyADQSRHDQIgAi8BBEH7AEcNAkEAIAJBBGoiADYCsApBAEEALwGYCiICQQFqOwGYCkEAKAKkCiACQQN0aiICQQQ2AgAgAiAANgIEDwtBACAANgKwCkEAQQAvAZgKQX9qIgA7AZgKQQAoAqQKIABB//8DcUEDdGooAgBBA0cNAwwECyACQQRqIQAMAAsLQQAgADYCsAoLECULC3ABAn8CQAJAA0BBAEEAKAKwCiIAQQJqIgE2ArAKIABBACgCtApPDQECQAJAAkAgAS8BACIBQaV/ag4CAQIACwJAIAFBdmoOBAQDAwQACyABQS9HDQIMBAsQLhoMAQtBACAAQQRqNgKwCgwACwsQJQsLNQEBf0EAQQE6APwJQQAoArAKIQBBAEEAKAK0CkECajYCsApBACAAQQAoAtwJa0EBdTYCkAoLQwECf0EBIQECQCAALwEAIgJBd2pB//8DcUEFSQ0AIAJBgAFyQaABRg0AQQAhASACEChFDQAgAkEuRyAAECpyDwsgAQs9AQJ/QQAhAgJAQQAoAtwJIgMgAEsNACAALwEAIAFHDQACQCADIABHDQBBAQ8LIABBfmovAQAQICECCyACC2gBAn9BASEBAkACQCAAQV9qIgJBBUsNAEEBIAJ0QTFxDQELIABB+P8DcUEoRg0AIABBRmpB//8DcUEGSQ0AAkAgAEGlf2oiAkEDSw0AIAJBAUcNAQsgAEGFf2pB//8DcUEESSEBCyABC5wBAQN/QQAoArAKIQECQANAAkACQCABLwEAIgJBL0cNAAJAIAEvAQIiAUEqRg0AIAFBL0cNBBAYDAILIAAQGQwBCwJAAkAgAEUNACACQXdqIgFBF0sNAUEBIAF0QZ+AgARxRQ0BDAILIAIQIUUNAwwBCyACQaABRw0CC0EAQQAoArAKIgNBAmoiATYCsAogA0EAKAK0CkkNAAsLIAILMQEBf0EAIQECQCAALwEAQS5HDQAgAEF+ai8BAEEuRw0AIABBfGovAQBBLkYhAQsgAQumBAEBfwJAIAFBIkYNACABQSdGDQAQJQ8LQQAoArAKIQMgARAaIAAgA0ECakEAKAKwCkEAKALQCRABAkAgAkEBSA0AQQAoAvAJQQRBBiACQQFGGzYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQIMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhAiABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIAJBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiACECA0BBACACQQJqNgKwCgJAAkACQEEBECkiAkEiRg0AIAJBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQIMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSECDAELIAIQLCECCwJAIAJBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAkEiRg0AIAJBJ0YNAEEAIAE2ArAKDwsgAhAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAkEsRg0AIAJB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiECDAELC0EAKALwCSIBIAA2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), (A2) => A2.charCodeAt(0));
      var A;
    }, "E");
    WebAssembly.compile(E()).then(WebAssembly.instantiate).then(({ exports: A }) => {
    });
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      /**
       * @param {string} message
       * @param {string[]} keys
       */
      constructor(message, keys) {
        super(message);
        this.name = "DevalueError";
        this.path = keys.join("");
      }
    };
    __name(is_primitive, "is_primitive");
    object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
      Object.prototype
    ).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(encode64, "encode64");
    __name(decode64, "decode64");
    KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(asciiToBinary, "asciiToBinary");
    __name(binaryToAscii, "binaryToAscii");
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
    __name(parse, "parse");
    __name(unflatten, "unflatten");
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    ACTION_QUERY_PARAMS$1 = {
      actionName: "_action"
    };
    ACTION_RPC_ROUTE_PATTERN = "/_actions/[...path]";
    __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_API_URL": "http://localhost:3000/api", "SITE": void 0, "SSR": true };
    ACTION_QUERY_PARAMS = ACTION_QUERY_PARAMS$1;
    codeToStatusMap = {
      // Implemented from tRPC error code table
      // https://trpc.io/docs/server/error-handling#error-codes
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      TIMEOUT: 405,
      CONFLICT: 409,
      PRECONDITION_FAILED: 412,
      PAYLOAD_TOO_LARGE: 413,
      UNSUPPORTED_MEDIA_TYPE: 415,
      UNPROCESSABLE_CONTENT: 422,
      TOO_MANY_REQUESTS: 429,
      CLIENT_CLOSED_REQUEST: 499,
      INTERNAL_SERVER_ERROR: 500
    };
    statusToCodeMap = Object.entries(codeToStatusMap).reduce(
      // reverse the key-value pairs
      (acc, [key, value]) => ({ ...acc, [value]: key }),
      {}
    );
    ActionError = class _ActionError extends Error {
      static {
        __name(this, "ActionError");
      }
      type = "AstroActionError";
      code = "INTERNAL_SERVER_ERROR";
      status = 500;
      constructor(params) {
        super(params.message);
        this.code = params.code;
        this.status = _ActionError.codeToStatus(params.code);
        if (params.stack) {
          this.stack = params.stack;
        }
      }
      static codeToStatus(code) {
        return codeToStatusMap[code];
      }
      static statusToCode(status) {
        return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
      }
      static fromJson(body) {
        if (isInputError(body)) {
          return new ActionInputError(body.issues);
        }
        if (isActionError(body)) {
          return new _ActionError(body);
        }
        return new _ActionError({
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    };
    __name(isActionError, "isActionError");
    __name(isInputError, "isInputError");
    ActionInputError = class extends ActionError {
      static {
        __name(this, "ActionInputError");
      }
      type = "AstroActionInputError";
      // We don't expose all ZodError properties.
      // Not all properties will serialize from server to client,
      // and we don't want to import the full ZodError object into the client.
      issues;
      fields;
      constructor(issues) {
        super({
          message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
          code: "BAD_REQUEST"
        });
        this.issues = issues;
        this.fields = {};
        for (const issue of issues) {
          if (issue.path.length > 0) {
            const key = issue.path[0].toString();
            this.fields[key] ??= [];
            this.fields[key]?.push(issue.message);
          }
        }
      }
    };
    __name(getActionQueryString, "getActionQueryString");
    __name(serializeActionResult, "serializeActionResult");
    __name(deserializeActionResult, "deserializeActionResult");
    actionResultErrorStack = /* @__PURE__ */ (/* @__PURE__ */ __name(function actionResultErrorStackFn() {
      let errorStack;
      return {
        set(stack) {
          errorStack = stack;
        },
        get() {
          return errorStack;
        }
      };
    }, "actionResultErrorStackFn"))();
    dist = {};
    __name(requireDist, "requireDist");
    distExports = requireDist();
    __name(template, "template");
    DEFAULT_404_ROUTE = {
      component: DEFAULT_404_COMPONENT,
      generate: /* @__PURE__ */ __name(() => "", "generate"),
      params: [],
      pattern: /\/404/,
      prerender: false,
      pathname: "/404",
      segments: [[{ content: "404", dynamic: false, spread: false }]],
      type: "page",
      route: "/404",
      fallbackRoutes: [],
      isIndex: false,
      origin: "internal"
    };
    __name(ensure404Route, "ensure404Route");
    __name(default404Page, "default404Page");
    default404Page.isAstroComponentFactory = true;
    default404Instance = {
      default: default404Page
    };
  }
});

// dist/_worker.js/chunks/index_DE25xXt9.mjs
function hasContentType(contentType, expected) {
  const type2 = contentType.split(";")[0].toLowerCase();
  return expected.some((t) => type2 === t);
}
function hasActionPayload(locals) {
  return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
  return (actionFn) => {
    if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) {
      return void 0;
    }
    return deserializeActionResult(locals._actionPayload.actionResult);
  };
}
function createCallAction(context2) {
  return (baseAction, input) => {
    Reflect.set(context2, ACTION_API_CONTEXT_SYMBOL, true);
    const action = baseAction.bind(context2);
    return action(input);
  };
}
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}
function redirectIsExternal(redirect) {
  if (typeof redirect === "string") {
    return redirect.startsWith("http://") || redirect.startsWith("https://");
  } else {
    return redirect.destination.startsWith("http://") || redirect.destination.startsWith("https://");
  }
}
async function renderRedirect(renderContext) {
  const {
    request: { method },
    routeData
  } = renderContext;
  const { redirect, redirectRoute } = routeData;
  const status = redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
  const headers = { location: encodeURI(redirectRouteGenerate(renderContext)) };
  if (redirect && redirectIsExternal(redirect)) {
    if (typeof redirect === "string") {
      return Response.redirect(redirect, status);
    } else {
      return Response.redirect(redirect.destination, status);
    }
  }
  return new Response(null, { status, headers });
}
function redirectRouteGenerate(renderContext) {
  const {
    params,
    routeData: { redirect, redirectRoute }
  } = renderContext;
  if (typeof redirectRoute !== "undefined") {
    return redirectRoute?.generate(params) || redirectRoute?.pathname || "/";
  } else if (typeof redirect === "string") {
    if (redirectIsExternal(redirect)) {
      return redirect;
    } else {
      let target = redirect;
      for (const param of Object.keys(params)) {
        const paramValue = params[param];
        target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
      }
      return target;
    }
  } else if (typeof redirect === "undefined") {
    return "/";
  }
  return redirect.destination;
}
function badRequest(reason) {
  return new Response(null, {
    status: 400,
    statusText: "Bad request: " + reason
  });
}
async function getRequestData(request) {
  switch (request.method) {
    case "GET": {
      const url = new URL(request.url);
      const params = url.searchParams;
      if (!params.has("s") || !params.has("e") || !params.has("p")) {
        return badRequest("Missing required query parameters.");
      }
      const rawSlots = params.get("s");
      try {
        return {
          componentExport: params.get("e"),
          encryptedProps: params.get("p"),
          slots: JSON.parse(rawSlots)
        };
      } catch {
        return badRequest("Invalid slots format.");
      }
    }
    case "POST": {
      try {
        const raw = await request.text();
        const data = JSON.parse(raw);
        return data;
      } catch {
        return badRequest("Request format is invalid.");
      }
    }
    default: {
      return new Response(null, { status: 405 });
    }
  }
}
function createEndpoint(manifest2) {
  const page21 = /* @__PURE__ */ __name(async (result) => {
    const params = result.params;
    if (!params.name) {
      return new Response(null, {
        status: 400,
        statusText: "Bad request"
      });
    }
    const componentId = params.name;
    const data = await getRequestData(result.request);
    if (data instanceof Response) {
      return data;
    }
    const imp = manifest2.serverIslandMap?.get(componentId);
    if (!imp) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    const key = await manifest2.key;
    const encryptedProps = data.encryptedProps;
    const propString = encryptedProps === "" ? "{}" : await decryptString(key, encryptedProps);
    const props = JSON.parse(propString);
    const componentModule = await imp();
    let Component = componentModule[data.componentExport];
    const slots = {};
    for (const prop in data.slots) {
      slots[prop] = createSlotValueFromString(data.slots[prop]);
    }
    result.response.headers.set("X-Robots-Tag", "noindex");
    if (isAstroComponentFactory(Component)) {
      const ServerIsland = Component;
      Component = /* @__PURE__ */ __name(function(...args) {
        return ServerIsland.apply(this, args);
      }, "Component");
      Object.assign(Component, ServerIsland);
      Component.propagation = "self";
    }
    return renderTemplate`${renderComponent(result, "Component", Component, props, slots)}`;
  }, "page");
  page21.isAstroComponentFactory = true;
  const instance = {
    default: page21,
    partial: true
  };
  return instance;
}
function matchRoute(pathname, manifest2) {
  return manifest2.routes.find((route) => {
    return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
  });
}
function isRoute404(route) {
  return ROUTE404_RE.test(route);
}
function isRoute500(route) {
  return ROUTE500_RE.test(route);
}
function isRoute404or500(route) {
  return isRoute404(route.route) || isRoute500(route.route);
}
function isRouteServerIsland(route) {
  return route.component === SERVER_ISLAND_COMPONENT;
}
function isRequestServerIsland(request, base = "") {
  const url = new URL(request.url);
  const pathname = base === "/" ? url.pathname.slice(base.length) : url.pathname.slice(base.length + 1);
  return pathname.startsWith(SERVER_ISLAND_BASE_PREFIX);
}
function requestIs404Or500(request, base = "") {
  const url = new URL(request.url);
  const pathname = url.pathname.slice(base.length);
  return isRoute404(pathname) || isRoute500(pathname);
}
function isRouteExternalRedirect(route) {
  return !!(route.type === "redirect" && route.redirect && redirectIsExternal(route.redirect));
}
function requestHasLocale(locales) {
  return function(context2) {
    return pathHasLocale(context2.url.pathname, locales);
  };
}
function pathHasLocale(path, locales) {
  const segments = path.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new AstroError(i18nNoLocaleFoundInPath);
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function getAllCodes(locales) {
  const result = [];
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      result.push(loopLocale);
    } else {
      result.push(...loopLocale.codes);
    }
  }
  return result;
}
function redirectToDefaultLocale({
  trailingSlash,
  format,
  base,
  defaultLocale
}) {
  return function(context2, statusCode) {
    if (shouldAppendForwardSlash(trailingSlash, format)) {
      return context2.redirect(`${appendForwardSlash(joinPaths(base, defaultLocale))}`, statusCode);
    } else {
      return context2.redirect(`${joinPaths(base, defaultLocale)}`, statusCode);
    }
  };
}
function notFound({ base, locales, fallback }) {
  return function(context2, response) {
    if (response?.headers.get(REROUTE_DIRECTIVE_HEADER) === "no" && typeof fallback === "undefined") {
      return response;
    }
    const url = context2.url;
    const isRoot = url.pathname === base + "/" || url.pathname === base;
    if (!(isRoot || pathHasLocale(url.pathname, locales))) {
      if (response) {
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
        return new Response(response.body, {
          status: 404,
          headers: response.headers
        });
      } else {
        return new Response(null, {
          status: 404,
          headers: {
            [REROUTE_DIRECTIVE_HEADER]: "no"
          }
        });
      }
    }
    return void 0;
  };
}
function redirectToFallback({
  fallback,
  locales,
  defaultLocale,
  strategy,
  base,
  fallbackType
}) {
  return async function(context2, response) {
    if (response.status >= 300 && fallback) {
      const fallbackKeys = fallback ? Object.keys(fallback) : [];
      const segments = context2.url.pathname.split("/");
      const urlLocale = segments.find((segment) => {
        for (const locale of locales) {
          if (typeof locale === "string") {
            if (locale === segment) {
              return true;
            }
          } else if (locale.path === segment) {
            return true;
          }
        }
        return false;
      });
      if (urlLocale && fallbackKeys.includes(urlLocale)) {
        const fallbackLocale = fallback[urlLocale];
        const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
        let newPathname;
        if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
          if (context2.url.pathname.includes(`${base}`)) {
            newPathname = context2.url.pathname.replace(`/${urlLocale}`, ``);
          } else {
            newPathname = context2.url.pathname.replace(`/${urlLocale}`, `/`);
          }
        } else {
          newPathname = context2.url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
        }
        if (fallbackType === "rewrite") {
          return await context2.rewrite(newPathname + context2.url.search);
        } else {
          return context2.redirect(newPathname + context2.url.search);
        }
      }
    }
    return response;
  };
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      return Math.sign(b.qualityValue - a.qualityValue);
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
            break;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentCode;
              break;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return getAllCodes(locales);
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(code);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale)) continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
  for (const locale of locales) {
    if (typeof locale === "string") {
      if (locale === defaultLocale) {
        return locale;
      }
    } else {
      if (locale.path === defaultLocale) {
        return locale.codes.at(0);
      }
    }
  }
}
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getCookiesFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of AstroCookies.consume(cookies)) {
    yield headerValue;
  }
  return [];
}
function createRequest({
  url,
  headers,
  method = "GET",
  body = void 0,
  logger,
  isPrerendered = false,
  routePattern,
  init: init2
}) {
  const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(
    // Filter out HTTP/2 pseudo-headers. These are internally-generated headers added to all HTTP/2 requests with trusted metadata about the request.
    // Examples include `:method`, `:scheme`, `:authority`, and `:path`.
    // They are always prefixed with a colon to distinguish them from other headers, and it is an error to add the to a Headers object manually.
    // See https://httpwg.org/specs/rfc7540.html#HttpRequest
    Object.entries(headers).filter(([name]) => !name.startsWith(":"))
  );
  if (typeof url === "string") url = new URL(url);
  if (isPrerendered) {
    url.search = "";
  }
  const request = new Request(url, {
    method,
    headers: headersObj,
    // body is made available only if the request is for a page that will be on-demand rendered
    body: isPrerendered ? null : body,
    ...init2
  });
  if (isPrerendered) {
    let _headers = request.headers;
    const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
    Object.defineProperty(request, "headers", {
      ...headersDesc,
      get() {
        logger.warn(
          null,
          `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`
        );
        return _headers;
      },
      set(newHeaders) {
        _headers = newHeaders;
      }
    });
  }
  return request;
}
function findRouteToRewrite({
  payload,
  routes,
  request,
  trailingSlash,
  buildFormat,
  base
}) {
  let newUrl = void 0;
  if (payload instanceof URL) {
    newUrl = payload;
  } else if (payload instanceof Request) {
    newUrl = new URL(payload.url);
  } else {
    newUrl = new URL(payload, new URL(request.url).origin);
  }
  let pathname = newUrl.pathname;
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  if (base !== "/") {
    const isBasePathRequest = newUrl.pathname === base || newUrl.pathname === removeTrailingForwardSlash(base);
    if (isBasePathRequest) {
      pathname = shouldAppendSlash ? "/" : "";
    } else if (newUrl.pathname.startsWith(base)) {
      pathname = shouldAppendSlash ? appendForwardSlash(newUrl.pathname) : removeTrailingForwardSlash(newUrl.pathname);
      pathname = pathname.slice(base.length);
    }
  }
  if (!pathname.startsWith("/") && shouldAppendSlash && newUrl.pathname.endsWith("/")) {
    pathname = prependForwardSlash(pathname);
  }
  if (pathname === "/" && base !== "/" && !shouldAppendSlash) {
    pathname = "";
  }
  if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) {
    newUrl.pathname = removeTrailingForwardSlash(base);
  } else {
    newUrl.pathname = joinPaths(...[base, pathname].filter(Boolean));
  }
  const decodedPathname = decodeURI(pathname);
  let foundRoute;
  for (const route of routes) {
    if (route.pattern.test(decodedPathname)) {
      foundRoute = route;
      break;
    }
  }
  if (foundRoute) {
    return {
      routeData: foundRoute,
      newUrl,
      pathname: decodedPathname
    };
  } else {
    const custom404 = routes.find((route) => route.route === "/404");
    if (custom404) {
      return { routeData: custom404, newUrl, pathname };
    } else {
      return { routeData: DEFAULT_404_ROUTE, newUrl, pathname };
    }
  }
}
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
  if (oldRequest.bodyUsed) {
    throw new AstroError(RewriteWithBodyUsed);
  }
  return createRequest({
    url: newUrl,
    method: oldRequest.method,
    body: oldRequest.body,
    isPrerendered,
    logger,
    headers: isPrerendered ? {} : oldRequest.headers,
    routePattern,
    init: {
      referrer: oldRequest.referrer,
      referrerPolicy: oldRequest.referrerPolicy,
      mode: oldRequest.mode,
      credentials: oldRequest.credentials,
      cache: oldRequest.cache,
      redirect: oldRequest.redirect,
      integrity: oldRequest.integrity,
      signal: oldRequest.signal,
      keepalive: oldRequest.keepalive,
      // https://fetch.spec.whatwg.org/#dom-request-duplex
      // @ts-expect-error It isn't part of the types, but undici accepts it and it allows to carry over the body to a new request
      duplex: "half"
    }
  });
}
function setOriginPathname(request, pathname) {
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(pathname));
}
function getOriginPathname(request) {
  const origin = Reflect.get(request, originPathnameSymbol);
  if (origin) {
    return decodeURIComponent(origin);
  }
  return new URL(request.url).pathname;
}
function getActionContext(context2) {
  const callerInfo = getCallerInfo(context2);
  const actionResultAlreadySet = Boolean(context2.locals._actionPayload);
  let action = void 0;
  if (callerInfo && context2.request.method === "POST" && !actionResultAlreadySet) {
    action = {
      calledFrom: callerInfo.from,
      name: callerInfo.name,
      handler: /* @__PURE__ */ __name(async () => {
        const pipeline = Reflect.get(context2, apiContextRoutesSymbol);
        const callerInfoName = shouldAppendForwardSlash(
          pipeline.manifest.trailingSlash,
          pipeline.manifest.buildFormat
        ) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
        const baseAction = await pipeline.getAction(callerInfoName);
        let input;
        try {
          input = await parseRequestBody(context2.request);
        } catch (e) {
          if (e instanceof TypeError) {
            return { data: void 0, error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" }) };
          }
          throw e;
        }
        const omitKeys = ["props", "getActionResult", "callAction", "redirect"];
        const actionAPIContext = Object.create(
          Object.getPrototypeOf(context2),
          Object.fromEntries(
            Object.entries(Object.getOwnPropertyDescriptors(context2)).filter(
              ([key]) => !omitKeys.includes(key)
            )
          )
        );
        Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
        const handler = baseAction.bind(actionAPIContext);
        return handler(input);
      }, "handler")
    };
  }
  function setActionResult(actionName, actionResult) {
    context2.locals._actionPayload = {
      actionResult,
      actionName
    };
  }
  __name(setActionResult, "setActionResult");
  return {
    action,
    setActionResult,
    serializeActionResult,
    deserializeActionResult
  };
}
function getCallerInfo(ctx) {
  if (ctx.routePattern === ACTION_RPC_ROUTE_PATTERN) {
    return { from: "rpc", name: ctx.url.pathname.replace(/^.*\/_actions\//, "") };
  }
  const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (queryParam) {
    return { from: "form", name: queryParam };
  }
  return void 0;
}
async function parseRequestBody(request) {
  const contentType = request.headers.get("content-type");
  const contentLength = request.headers.get("Content-Length");
  if (!contentType) return void 0;
  if (hasContentType(contentType, formContentTypes)) {
    return await request.clone().formData();
  }
  if (hasContentType(contentType, ["application/json"])) {
    return contentLength === "0" ? void 0 : await request.clone().json();
  }
  throw new TypeError("Unsupported content type");
}
async function callMiddleware(onRequest2, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = /* @__PURE__ */ __name(async (payload) => {
    nextCalled = true;
    responseFunctionPromise = responseFunction(apiContext, payload);
    return responseFunctionPromise;
  }, "next");
  let middlewarePromise = onRequest2(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod2, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod2.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return route.generate(validatedParams);
}
function generatePaginateFunction(routeMatch, base) {
  return /* @__PURE__ */ __name(function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = addRouteBase(routeMatch.generate({ ...params }), base);
      const next = pageNum === lastPage ? void 0 : addRouteBase(routeMatch.generate({ ...params, page: String(pageNum + 1) }), base);
      const prev = pageNum === 1 ? void 0 : addRouteBase(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        }),
        base
      );
      const first = pageNum === 1 ? void 0 : addRouteBase(
        routeMatch.generate({
          ...params,
          page: includesFirstPageNumber ? "1" : void 0
        }),
        base
      );
      const last = pageNum === lastPage ? void 0 : addRouteBase(routeMatch.generate({ ...params, page: String(lastPage) }), base);
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev, first, last }
          }
        }
      };
    });
    return result;
  }, "paginateUtility");
}
function addRouteBase(route, base) {
  let routeWithBase = joinPaths(base, route);
  if (routeWithBase === "") routeWithBase = "/";
  return routeWithBase;
}
async function callGetStaticPaths({
  mod: mod2,
  route,
  routeCache,
  logger,
  ssr,
  base
}) {
  const cached = routeCache.get(route);
  if (!mod2) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod2, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod2.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod2.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route, base)
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
async function getProps(opts) {
  const { logger, mod: mod2, routeData: route, routeCache, pathname, serverLike, base } = opts;
  if (!route || route.pathname) {
    return {};
  }
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === DEFAULT_404_COMPONENT) {
    return {};
  }
  const staticPaths = await callGetStaticPaths({
    mod: mod2,
    route,
    routeCache,
    logger,
    ssr: serverLike,
    base
  });
  const params = getParams(route, pathname);
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (serverLike ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  if (mod2) {
    validatePrerenderEndpointCollision(route, mod2, params);
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return props;
}
function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}
function validatePrerenderEndpointCollision(route, mod2, params) {
  if (route.type === "endpoint" && mod2.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}
function getFunctionExpression(slot) {
  if (!slot) return;
  const expressions = slot?.expressions?.filter((e) => isRenderInstruction(e) === false);
  if (expressions?.length !== 1) return;
  return expressions[0];
}
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error4) {
    if (options.strict) {
      throw error4;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error4) {
    return Promise.reject(error4);
  }
}
function isPrimitive(value) {
  const type2 = typeof value;
  return value === null || type2 !== "object" && type2 !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify$1(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify$1(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}
function defineDriver(factory) {
  return factory;
}
function createStorage(options = {}) {
  const context2 = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = /* @__PURE__ */ __name((key) => {
    for (const base of context2.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context2.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context2.mounts[""]
    };
  }, "getMount");
  const getMounts = /* @__PURE__ */ __name((base, includeParent) => {
    return context2.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context2.mounts[mountpoint]
    }));
  }, "getMounts");
  const onChange = /* @__PURE__ */ __name((event, key) => {
    if (!context2.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context2.watchListeners) {
      listener(event, key);
    }
  }, "onChange");
  const startWatch = /* @__PURE__ */ __name(async () => {
    if (context2.watching) {
      return;
    }
    context2.watching = true;
    for (const mountpoint in context2.mounts) {
      context2.unwatch[mountpoint] = await watch(
        context2.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  }, "startWatch");
  const stopWatch = /* @__PURE__ */ __name(async () => {
    if (!context2.watching) {
      return;
    }
    for (const mountpoint in context2.unwatch) {
      await context2.unwatch[mountpoint]();
    }
    context2.unwatch = {};
    context2.watching = false;
  }, "stopWatch");
  const runBatch = /* @__PURE__ */ __name((items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = /* @__PURE__ */ __name((mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    }, "getBatch");
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  }, "runBatch");
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify$1(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify$1(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context2.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context2.watchListeners.push(callback);
      return async () => {
        context2.watchListeners = context2.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context2.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context2.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context2.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context2.mountpoints.push(base);
        context2.mountpoints.sort((a, b) => b.length - a.length);
      }
      context2.mounts[base] = driver;
      if (context2.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context2.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context2.mounts[base]) {
        return;
      }
      if (context2.watching && base in context2.unwatch) {
        context2.unwatch[base]?.();
        delete context2.unwatch[base];
      }
      if (_dispose) {
        await dispose(context2.mounts[base]);
      }
      context2.mountpoints = context2.mountpoints.filter((key) => key !== base);
      delete context2.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: /* @__PURE__ */ __name((base, opts = {}) => storage.getKeys(base, opts), "keys"),
    get: /* @__PURE__ */ __name((key, opts = {}) => storage.getItem(key, opts), "get"),
    set: /* @__PURE__ */ __name((key, value, opts = {}) => storage.setItem(key, value, opts), "set"),
    has: /* @__PURE__ */ __name((key, opts = {}) => storage.hasItem(key, opts), "has"),
    del: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "del"),
    remove: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "remove")
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
async function resolveSessionDriver(driver) {
  if (!driver) {
    return null;
  }
  try {
    if (driver === "fs") {
      return await import.meta.resolve(builtinDrivers.fsLite);
    }
    if (driver in builtinDrivers) {
      return await import.meta.resolve(builtinDrivers[driver]);
    }
  } catch {
    return null;
  }
  return driver;
}
function sequence(...handlers2) {
  const filtered = handlers2.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context2, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context2);
    function applyHandle(i, handleContext) {
      const handle2 = filtered[i];
      const result = handle2(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request);
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.cookies = new AstroCookies(newRequest);
            handleContext.params = getParams(routeData, pathname);
            setOriginPathname(handleContext.request, oldPathname);
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
    __name(applyHandle, "applyHandle");
  });
}
function defineMiddleware(fn) {
  return fn;
}
var ACTION_API_CONTEXT_SYMBOL, formContentTypes, SERVER_ISLAND_ROUTE, SERVER_ISLAND_COMPONENT, SERVER_ISLAND_BASE_PREFIX, ROUTE404_RE, ROUTE500_RE, DELETED_EXPIRATION, DELETED_VALUE, responseSentSymbol2, identity, AstroCookie, AstroCookies, astroCookiesSymbol, VALID_PARAM_TYPES, RouteCache, Slots, suspectProtoRx, suspectConstructorRx, JsonSigRx, BASE64_PREFIX, DRIVER_NAME, memory, builtinDrivers, PERSIST_SYMBOL, DEFAULT_COOKIE_NAME, VALID_COOKIE_REGEX, unflatten2, stringify2, AstroSession, apiContextRoutesSymbol, RenderContext;
var init_index_DE25xXt9 = __esm({
  "dist/_worker.js/chunks/index_DE25xXt9.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_designed_error_pages_CjEd6zCM();
    init_server_CwYSbNCn();
    init_path_h5kZAkfu();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    ACTION_API_CONTEXT_SYMBOL = Symbol.for("astro.actionAPIContext");
    formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
    __name(hasContentType, "hasContentType");
    __name(hasActionPayload, "hasActionPayload");
    __name(createGetActionResult, "createGetActionResult");
    __name(createCallAction, "createCallAction");
    __name(shouldAppendForwardSlash, "shouldAppendForwardSlash");
    __name(redirectIsExternal, "redirectIsExternal");
    __name(renderRedirect, "renderRedirect");
    __name(redirectRouteGenerate, "redirectRouteGenerate");
    SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
    SERVER_ISLAND_COMPONENT = "_server-islands.astro";
    SERVER_ISLAND_BASE_PREFIX = "_server-islands";
    __name(badRequest, "badRequest");
    __name(getRequestData, "getRequestData");
    __name(createEndpoint, "createEndpoint");
    __name(matchRoute, "matchRoute");
    ROUTE404_RE = /^\/404\/?$/;
    ROUTE500_RE = /^\/500\/?$/;
    __name(isRoute404, "isRoute404");
    __name(isRoute500, "isRoute500");
    __name(isRoute404or500, "isRoute404or500");
    __name(isRouteServerIsland, "isRouteServerIsland");
    __name(isRequestServerIsland, "isRequestServerIsland");
    __name(requestIs404Or500, "requestIs404Or500");
    __name(isRouteExternalRedirect, "isRouteExternalRedirect");
    __name(requestHasLocale, "requestHasLocale");
    __name(pathHasLocale, "pathHasLocale");
    __name(getPathByLocale, "getPathByLocale");
    __name(normalizeTheLocale, "normalizeTheLocale");
    __name(getAllCodes, "getAllCodes");
    __name(redirectToDefaultLocale, "redirectToDefaultLocale");
    __name(notFound, "notFound");
    __name(redirectToFallback, "redirectToFallback");
    __name(parseLocale, "parseLocale");
    __name(sortAndFilterLocales, "sortAndFilterLocales");
    __name(computePreferredLocale, "computePreferredLocale");
    __name(computePreferredLocaleList, "computePreferredLocaleList");
    __name(computeCurrentLocale, "computeCurrentLocale");
    DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
    DELETED_VALUE = "deleted";
    responseSentSymbol2 = Symbol.for("astro.responseSent");
    identity = /* @__PURE__ */ __name((value) => value, "identity");
    AstroCookie = class {
      static {
        __name(this, "AstroCookie");
      }
      constructor(value) {
        this.value = value;
      }
      json() {
        if (this.value === void 0) {
          throw new Error(`Cannot convert undefined to an object.`);
        }
        return JSON.parse(this.value);
      }
      number() {
        return Number(this.value);
      }
      boolean() {
        if (this.value === "false") return false;
        if (this.value === "0") return false;
        return Boolean(this.value);
      }
    };
    AstroCookies = class {
      static {
        __name(this, "AstroCookies");
      }
      #request;
      #requestValues;
      #outgoing;
      #consumed;
      constructor(request) {
        this.#request = request;
        this.#requestValues = null;
        this.#outgoing = null;
        this.#consumed = false;
      }
      /**
       * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
       * in a Set-Cookie header added to the response.
       * @param key The cookie to delete
       * @param options Options related to this deletion, such as the path of the cookie.
       */
      delete(key, options) {
        const {
          // @ts-expect-error
          maxAge: _ignoredMaxAge,
          // @ts-expect-error
          expires: _ignoredExpires,
          ...sanitizedOptions
        } = options || {};
        const serializeOptions = {
          expires: DELETED_EXPIRATION,
          ...sanitizedOptions
        };
        this.#ensureOutgoingMap().set(key, [
          DELETED_VALUE,
          distExports.serialize(key, DELETED_VALUE, serializeOptions),
          false
        ]);
      }
      /**
       * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
       * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
       * from that set call, overriding any values already part of the request.
       * @param key The cookie to get.
       * @returns An object containing the cookie value as well as convenience methods for converting its value.
       */
      get(key, options = void 0) {
        if (this.#outgoing?.has(key)) {
          let [serializedValue, , isSetValue] = this.#outgoing.get(key);
          if (isSetValue) {
            return new AstroCookie(serializedValue);
          } else {
            return void 0;
          }
        }
        const decode = options?.decode ?? decodeURIComponent;
        const values = this.#ensureParsed();
        if (key in values) {
          const value = values[key];
          if (value) {
            return new AstroCookie(decode(value));
          }
        }
      }
      /**
       * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
       * part of the initial request or set via Astro.cookies.set(key)
       * @param key The cookie to check for.
       * @param _options This parameter is no longer used.
       * @returns
       */
      has(key, _options) {
        if (this.#outgoing?.has(key)) {
          let [, , isSetValue] = this.#outgoing.get(key);
          return isSetValue;
        }
        const values = this.#ensureParsed();
        return values[key] !== void 0;
      }
      /**
       * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
       * an object it will be stringified via JSON.stringify(value). Additionally you
       * can provide options customizing how this cookie will be set, such as setting httpOnly
       * in order to prevent the cookie from being read in client-side JavaScript.
       * @param key The name of the cookie to set.
       * @param value A value, either a string or other primitive or an object.
       * @param options Options for the cookie, such as the path and security settings.
       */
      set(key, value, options) {
        if (this.#consumed) {
          const warning = new Error(
            "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
          );
          warning.name = "Warning";
          console.warn(warning);
        }
        let serializedValue;
        if (typeof value === "string") {
          serializedValue = value;
        } else {
          let toStringValue = value.toString();
          if (toStringValue === Object.prototype.toString.call(value)) {
            serializedValue = JSON.stringify(value);
          } else {
            serializedValue = toStringValue;
          }
        }
        const serializeOptions = {};
        if (options) {
          Object.assign(serializeOptions, options);
        }
        this.#ensureOutgoingMap().set(key, [
          serializedValue,
          distExports.serialize(key, serializedValue, serializeOptions),
          true
        ]);
        if (this.#request[responseSentSymbol2]) {
          throw new AstroError({
            ...ResponseSentError
          });
        }
      }
      /**
       * Merges a new AstroCookies instance into the current instance. Any new cookies
       * will be added to the current instance, overwriting any existing cookies with the same name.
       */
      merge(cookies) {
        const outgoing = cookies.#outgoing;
        if (outgoing) {
          for (const [key, value] of outgoing) {
            this.#ensureOutgoingMap().set(key, value);
          }
        }
      }
      /**
       * Astro.cookies.header() returns an iterator for the cookies that have previously
       * been set by either Astro.cookies.set() or Astro.cookies.delete().
       * This method is primarily used by adapters to set the header on outgoing responses.
       * @returns
       */
      *headers() {
        if (this.#outgoing == null) return;
        for (const [, value] of this.#outgoing) {
          yield value[1];
        }
      }
      /**
       * Behaves the same as AstroCookies.prototype.headers(),
       * but allows a warning when cookies are set after the instance is consumed.
       */
      static consume(cookies) {
        cookies.#consumed = true;
        return cookies.headers();
      }
      #ensureParsed() {
        if (!this.#requestValues) {
          this.#parse();
        }
        if (!this.#requestValues) {
          this.#requestValues = {};
        }
        return this.#requestValues;
      }
      #ensureOutgoingMap() {
        if (!this.#outgoing) {
          this.#outgoing = /* @__PURE__ */ new Map();
        }
        return this.#outgoing;
      }
      #parse() {
        const raw = this.#request.headers.get("cookie");
        if (!raw) {
          return;
        }
        this.#requestValues = distExports.parse(raw, { decode: identity });
      }
    };
    astroCookiesSymbol = Symbol.for("astro.cookies");
    __name(attachCookiesToResponse, "attachCookiesToResponse");
    __name(getCookiesFromResponse, "getCookiesFromResponse");
    __name(getSetCookiesFromResponse, "getSetCookiesFromResponse");
    __name(createRequest, "createRequest");
    __name(findRouteToRewrite, "findRouteToRewrite");
    __name(copyRequest, "copyRequest");
    __name(setOriginPathname, "setOriginPathname");
    __name(getOriginPathname, "getOriginPathname");
    __name(getActionContext, "getActionContext");
    __name(getCallerInfo, "getCallerInfo");
    __name(parseRequestBody, "parseRequestBody");
    __name(callMiddleware, "callMiddleware");
    VALID_PARAM_TYPES = ["string", "number", "undefined"];
    __name(validateGetStaticPathsParameter, "validateGetStaticPathsParameter");
    __name(validateDynamicRouteModule, "validateDynamicRouteModule");
    __name(validateGetStaticPathsResult, "validateGetStaticPathsResult");
    __name(stringifyParams, "stringifyParams");
    __name(generatePaginateFunction, "generatePaginateFunction");
    __name(addRouteBase, "addRouteBase");
    __name(callGetStaticPaths, "callGetStaticPaths");
    RouteCache = class {
      static {
        __name(this, "RouteCache");
      }
      logger;
      cache = {};
      runtimeMode;
      constructor(logger, runtimeMode = "production") {
        this.logger = logger;
        this.runtimeMode = runtimeMode;
      }
      /** Clear the cache. */
      clearAll() {
        this.cache = {};
      }
      set(route, entry) {
        const key = this.key(route);
        if (this.runtimeMode === "production" && this.cache[key]?.staticPaths) {
          this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
        }
        this.cache[key] = entry;
      }
      get(route) {
        return this.cache[this.key(route)];
      }
      key(route) {
        return `${route.route}_${route.component}`;
      }
    };
    __name(findPathItemByKey, "findPathItemByKey");
    __name(routeIsRedirect, "routeIsRedirect");
    __name(routeIsFallback, "routeIsFallback");
    __name(getProps, "getProps");
    __name(getParams, "getParams");
    __name(validatePrerenderEndpointCollision, "validatePrerenderEndpointCollision");
    __name(getFunctionExpression, "getFunctionExpression");
    Slots = class {
      static {
        __name(this, "Slots");
      }
      #result;
      #slots;
      #logger;
      constructor(result, slots, logger) {
        this.#result = result;
        this.#slots = slots;
        this.#logger = logger;
        if (slots) {
          for (const key of Object.keys(slots)) {
            if (this[key] !== void 0) {
              throw new AstroError({
                ...ReservedSlotName,
                message: ReservedSlotName.message(key)
              });
            }
            Object.defineProperty(this, key, {
              get() {
                return true;
              },
              enumerable: true
            });
          }
        }
      }
      has(name) {
        if (!this.#slots) return false;
        return Boolean(this.#slots[name]);
      }
      async render(name, args = []) {
        if (!this.#slots || !this.has(name)) return;
        const result = this.#result;
        if (!Array.isArray(args)) {
          this.#logger.warn(
            null,
            `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
          );
        } else if (args.length > 0) {
          const slotValue = this.#slots[name];
          const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
          const expression = getFunctionExpression(component);
          if (expression) {
            const slot = /* @__PURE__ */ __name(async () => typeof expression === "function" ? expression(...args) : expression, "slot");
            return await renderSlotToString(result, slot).then((res) => {
              return res;
            });
          }
          if (typeof component === "function") {
            return await renderJSX(result, component(...args)).then(
              (res) => res != null ? String(res) : res
            );
          }
        }
        const content = await renderSlotToString(result, this.#slots[name]);
        const outHTML = chunkToString(result, content);
        return outHTML;
      }
    };
    suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(warnKeyDropped, "warnKeyDropped");
    __name(destr, "destr");
    __name(wrapToPromise, "wrapToPromise");
    __name(asyncCall, "asyncCall");
    __name(isPrimitive, "isPrimitive");
    __name(isPureObject, "isPureObject");
    __name(stringify$1, "stringify$1");
    BASE64_PREFIX = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    __name(base64Decode, "base64Decode");
    __name(base64Encode, "base64Encode");
    __name(normalizeKey, "normalizeKey");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    __name(filterKeyByDepth, "filterKeyByDepth");
    __name(filterKeyByBase, "filterKeyByBase");
    __name(defineDriver, "defineDriver");
    DRIVER_NAME = "memory";
    memory = defineDriver(() => {
      const data = /* @__PURE__ */ new Map();
      return {
        name: DRIVER_NAME,
        getInstance: /* @__PURE__ */ __name(() => data, "getInstance"),
        hasItem(key) {
          return data.has(key);
        },
        getItem(key) {
          return data.get(key) ?? null;
        },
        getItemRaw(key) {
          return data.get(key) ?? null;
        },
        setItem(key, value) {
          data.set(key, value);
        },
        setItemRaw(key, value) {
          data.set(key, value);
        },
        removeItem(key) {
          data.delete(key);
        },
        getKeys() {
          return [...data.keys()];
        },
        clear() {
          data.clear();
        },
        dispose() {
          data.clear();
        }
      };
    });
    __name(createStorage, "createStorage");
    __name(watch, "watch");
    __name(dispose, "dispose");
    builtinDrivers = {
      "azure-app-configuration": "unstorage/drivers/azure-app-configuration",
      "azureAppConfiguration": "unstorage/drivers/azure-app-configuration",
      "azure-cosmos": "unstorage/drivers/azure-cosmos",
      "azureCosmos": "unstorage/drivers/azure-cosmos",
      "azure-key-vault": "unstorage/drivers/azure-key-vault",
      "azureKeyVault": "unstorage/drivers/azure-key-vault",
      "azure-storage-blob": "unstorage/drivers/azure-storage-blob",
      "azureStorageBlob": "unstorage/drivers/azure-storage-blob",
      "azure-storage-table": "unstorage/drivers/azure-storage-table",
      "azureStorageTable": "unstorage/drivers/azure-storage-table",
      "capacitor-preferences": "unstorage/drivers/capacitor-preferences",
      "capacitorPreferences": "unstorage/drivers/capacitor-preferences",
      "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
      "cloudflareKVBinding": "unstorage/drivers/cloudflare-kv-binding",
      "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http",
      "cloudflareKVHttp": "unstorage/drivers/cloudflare-kv-http",
      "cloudflare-r2-binding": "unstorage/drivers/cloudflare-r2-binding",
      "cloudflareR2Binding": "unstorage/drivers/cloudflare-r2-binding",
      "db0": "unstorage/drivers/db0",
      "deno-kv-node": "unstorage/drivers/deno-kv-node",
      "denoKVNode": "unstorage/drivers/deno-kv-node",
      "deno-kv": "unstorage/drivers/deno-kv",
      "denoKV": "unstorage/drivers/deno-kv",
      "fs-lite": "unstorage/drivers/fs-lite",
      "fsLite": "unstorage/drivers/fs-lite",
      "fs": "unstorage/drivers/fs",
      "github": "unstorage/drivers/github",
      "http": "unstorage/drivers/http",
      "indexedb": "unstorage/drivers/indexedb",
      "localstorage": "unstorage/drivers/localstorage",
      "lru-cache": "unstorage/drivers/lru-cache",
      "lruCache": "unstorage/drivers/lru-cache",
      "memory": "unstorage/drivers/memory",
      "mongodb": "unstorage/drivers/mongodb",
      "netlify-blobs": "unstorage/drivers/netlify-blobs",
      "netlifyBlobs": "unstorage/drivers/netlify-blobs",
      "null": "unstorage/drivers/null",
      "overlay": "unstorage/drivers/overlay",
      "planetscale": "unstorage/drivers/planetscale",
      "redis": "unstorage/drivers/redis",
      "s3": "unstorage/drivers/s3",
      "session-storage": "unstorage/drivers/session-storage",
      "sessionStorage": "unstorage/drivers/session-storage",
      "uploadthing": "unstorage/drivers/uploadthing",
      "upstash": "unstorage/drivers/upstash",
      "vercel-blob": "unstorage/drivers/vercel-blob",
      "vercelBlob": "unstorage/drivers/vercel-blob",
      "vercel-kv": "unstorage/drivers/vercel-kv",
      "vercelKV": "unstorage/drivers/vercel-kv"
    };
    PERSIST_SYMBOL = Symbol();
    DEFAULT_COOKIE_NAME = "astro-session";
    VALID_COOKIE_REGEX = /^[\w-]+$/;
    unflatten2 = /* @__PURE__ */ __name((parsed, _) => {
      return unflatten(parsed, {
        URL: /* @__PURE__ */ __name((href) => new URL(href), "URL")
      });
    }, "unflatten");
    stringify2 = /* @__PURE__ */ __name((data, _) => {
      return stringify(data, {
        // Support URL objects
        URL: /* @__PURE__ */ __name((val) => val instanceof URL && val.href, "URL")
      });
    }, "stringify");
    AstroSession = class _AstroSession {
      static {
        __name(this, "AstroSession");
      }
      // The cookies object.
      #cookies;
      // The session configuration.
      #config;
      // The cookie config
      #cookieConfig;
      // The cookie name
      #cookieName;
      // The unstorage object for the session driver.
      #storage;
      #data;
      // The session ID. A v4 UUID.
      #sessionID;
      // Sessions to destroy. Needed because we won't have the old session ID after it's destroyed locally.
      #toDestroy = /* @__PURE__ */ new Set();
      // Session keys to delete. Used for partial data sets to avoid overwriting the deleted value.
      #toDelete = /* @__PURE__ */ new Set();
      // Whether the session is dirty and needs to be saved.
      #dirty = false;
      // Whether the session cookie has been set.
      #cookieSet = false;
      // The local data is "partial" if it has not been loaded from storage yet and only
      // contains values that have been set or deleted in-memory locally.
      // We do this to avoid the need to block on loading data when it is only being set.
      // When we load the data from storage, we need to merge it with the local partial data,
      // preserving in-memory changes and deletions.
      #partial = true;
      static #sharedStorage = /* @__PURE__ */ new Map();
      constructor(cookies, {
        cookie: cookieConfig = DEFAULT_COOKIE_NAME,
        ...config2
      }, runtimeMode) {
        this.#cookies = cookies;
        let cookieConfigObject;
        if (typeof cookieConfig === "object") {
          const { name = DEFAULT_COOKIE_NAME, ...rest } = cookieConfig;
          this.#cookieName = name;
          cookieConfigObject = rest;
        } else {
          this.#cookieName = cookieConfig || DEFAULT_COOKIE_NAME;
        }
        this.#cookieConfig = {
          sameSite: "lax",
          secure: runtimeMode === "production",
          path: "/",
          ...cookieConfigObject,
          httpOnly: true
        };
        this.#config = config2;
      }
      /**
       * Gets a session value. Returns `undefined` if the session or value does not exist.
       */
      async get(key) {
        return (await this.#ensureData()).get(key)?.data;
      }
      /**
       * Checks if a session value exists.
       */
      async has(key) {
        return (await this.#ensureData()).has(key);
      }
      /**
       * Gets all session values.
       */
      async keys() {
        return (await this.#ensureData()).keys();
      }
      /**
       * Gets all session values.
       */
      async values() {
        return [...(await this.#ensureData()).values()].map((entry) => entry.data);
      }
      /**
       * Gets all session entries.
       */
      async entries() {
        return [...(await this.#ensureData()).entries()].map(([key, entry]) => [key, entry.data]);
      }
      /**
       * Deletes a session value.
       */
      delete(key) {
        this.#data?.delete(key);
        if (this.#partial) {
          this.#toDelete.add(key);
        }
        this.#dirty = true;
      }
      /**
       * Sets a session value. The session is created if it does not exist.
       */
      set(key, value, { ttl } = {}) {
        if (!key) {
          throw new AstroError({
            ...SessionStorageSaveError,
            message: "The session key was not provided."
          });
        }
        let cloned;
        try {
          cloned = unflatten2(JSON.parse(stringify2(value)));
        } catch (err) {
          throw new AstroError(
            {
              ...SessionStorageSaveError,
              message: `The session data for ${key} could not be serialized.`,
              hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
            },
            { cause: err }
          );
        }
        if (!this.#cookieSet) {
          this.#setCookie();
          this.#cookieSet = true;
        }
        this.#data ??= /* @__PURE__ */ new Map();
        const lifetime = ttl ?? this.#config.ttl;
        const expires = typeof lifetime === "number" ? Date.now() + lifetime * 1e3 : lifetime;
        this.#data.set(key, {
          data: cloned,
          expires
        });
        this.#dirty = true;
      }
      /**
       * Destroys the session, clearing the cookie and storage if it exists.
       */
      destroy() {
        this.#destroySafe();
      }
      /**
       * Regenerates the session, creating a new session ID. The existing session data is preserved.
       */
      async regenerate() {
        let data = /* @__PURE__ */ new Map();
        try {
          data = await this.#ensureData();
        } catch (err) {
          console.error("Failed to load session data during regeneration:", err);
        }
        const oldSessionId = this.#sessionID;
        this.#sessionID = crypto.randomUUID();
        this.#data = data;
        await this.#setCookie();
        if (oldSessionId && this.#storage) {
          this.#storage.removeItem(oldSessionId).catch((err) => {
            console.error("Failed to remove old session data:", err);
          });
        }
      }
      // Persists the session data to storage.
      // This is called automatically at the end of the request.
      // Uses a symbol to prevent users from calling it directly.
      async [PERSIST_SYMBOL]() {
        if (!this.#dirty && !this.#toDestroy.size) {
          return;
        }
        const storage = await this.#ensureStorage();
        if (this.#dirty && this.#data) {
          const data = await this.#ensureData();
          this.#toDelete.forEach((key2) => data.delete(key2));
          const key = this.#ensureSessionID();
          let serialized;
          try {
            serialized = stringify2(data);
          } catch (err) {
            throw new AstroError(
              {
                ...SessionStorageSaveError,
                message: SessionStorageSaveError.message(
                  "The session data could not be serialized.",
                  this.#config.driver
                )
              },
              { cause: err }
            );
          }
          await storage.setItem(key, serialized);
          this.#dirty = false;
        }
        if (this.#toDestroy.size > 0) {
          const cleanupPromises = [...this.#toDestroy].map(
            (sessionId) => storage.removeItem(sessionId).catch((err) => {
              console.error(`Failed to clean up session ${sessionId}:`, err);
            })
          );
          await Promise.all(cleanupPromises);
          this.#toDestroy.clear();
        }
      }
      get sessionID() {
        return this.#sessionID;
      }
      /**
       * Loads a session from storage with the given ID, and replaces the current session.
       * Any changes made to the current session will be lost.
       * This is not normally needed, as the session is automatically loaded using the cookie.
       * However it can be used to restore a session where the ID has been recorded somewhere
       * else (e.g. in a database).
       */
      async load(sessionID) {
        this.#sessionID = sessionID;
        this.#data = void 0;
        await this.#setCookie();
        await this.#ensureData();
      }
      /**
       * Sets the session cookie.
       */
      async #setCookie() {
        if (!VALID_COOKIE_REGEX.test(this.#cookieName)) {
          throw new AstroError({
            ...SessionStorageSaveError,
            message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes."
          });
        }
        const value = this.#ensureSessionID();
        this.#cookies.set(this.#cookieName, value, this.#cookieConfig);
      }
      /**
       * Attempts to load the session data from storage, or creates a new data object if none exists.
       * If there is existing partial data, it will be merged into the new data object.
       */
      async #ensureData() {
        const storage = await this.#ensureStorage();
        if (this.#data && !this.#partial) {
          return this.#data;
        }
        this.#data ??= /* @__PURE__ */ new Map();
        const raw = await storage.get(this.#ensureSessionID());
        if (!raw) {
          return this.#data;
        }
        try {
          const storedMap = unflatten2(raw);
          if (!(storedMap instanceof Map)) {
            await this.#destroySafe();
            throw new AstroError({
              ...SessionStorageInitError,
              message: SessionStorageInitError.message(
                "The session data was an invalid type.",
                this.#config.driver
              )
            });
          }
          const now = Date.now();
          for (const [key, value] of storedMap) {
            const expired = typeof value.expires === "number" && value.expires < now;
            if (!this.#data.has(key) && !this.#toDelete.has(key) && !expired) {
              this.#data.set(key, value);
            }
          }
          this.#partial = false;
          return this.#data;
        } catch (err) {
          await this.#destroySafe();
          if (err instanceof AstroError) {
            throw err;
          }
          throw new AstroError(
            {
              ...SessionStorageInitError,
              message: SessionStorageInitError.message(
                "The session data could not be parsed.",
                this.#config.driver
              )
            },
            { cause: err }
          );
        }
      }
      /**
       * Safely destroys the session, clearing the cookie and storage if it exists.
       */
      #destroySafe() {
        if (this.#sessionID) {
          this.#toDestroy.add(this.#sessionID);
        }
        if (this.#cookieName) {
          this.#cookies.delete(this.#cookieName, this.#cookieConfig);
        }
        this.#sessionID = void 0;
        this.#data = void 0;
        this.#dirty = true;
      }
      /**
       * Returns the session ID, generating a new one if it does not exist.
       */
      #ensureSessionID() {
        this.#sessionID ??= this.#cookies.get(this.#cookieName)?.value ?? crypto.randomUUID();
        return this.#sessionID;
      }
      /**
       * Ensures the storage is initialized.
       * This is called automatically when a storage operation is needed.
       */
      async #ensureStorage() {
        if (this.#storage) {
          return this.#storage;
        }
        if (_AstroSession.#sharedStorage.has(this.#config.driver)) {
          this.#storage = _AstroSession.#sharedStorage.get(this.#config.driver);
          return this.#storage;
        }
        if (this.#config.driver === "test") {
          this.#storage = this.#config.options.mockStorage;
          return this.#storage;
        }
        if (this.#config.driver === "fs" || this.#config.driver === "fsLite" || this.#config.driver === "fs-lite") {
          this.#config.options ??= {};
          this.#config.driver = "fs-lite";
          this.#config.options.base ??= ".astro/session";
        }
        if (!this.#config?.driver) {
          throw new AstroError({
            ...SessionStorageInitError,
            message: SessionStorageInitError.message(
              "No driver was defined in the session configuration and the adapter did not provide a default driver."
            )
          });
        }
        let driver = null;
        const driverPackage = await resolveSessionDriver(this.#config.driver);
        try {
          if (this.#config.driverModule) {
            driver = (await this.#config.driverModule()).default;
          } else if (driverPackage) {
            driver = (await import(driverPackage)).default;
          }
        } catch (err) {
          if (err.code === "ERR_MODULE_NOT_FOUND") {
            throw new AstroError(
              {
                ...SessionStorageInitError,
                message: SessionStorageInitError.message(
                  err.message.includes(`Cannot find package '${driverPackage}'`) ? "The driver module could not be found." : err.message,
                  this.#config.driver
                )
              },
              { cause: err }
            );
          }
          throw err;
        }
        if (!driver) {
          throw new AstroError({
            ...SessionStorageInitError,
            message: SessionStorageInitError.message(
              "The module did not export a driver.",
              this.#config.driver
            )
          });
        }
        try {
          this.#storage = createStorage({
            driver: driver(this.#config.options)
          });
          _AstroSession.#sharedStorage.set(this.#config.driver, this.#storage);
          return this.#storage;
        } catch (err) {
          throw new AstroError(
            {
              ...SessionStorageInitError,
              message: SessionStorageInitError.message("Unknown error", this.#config.driver)
            },
            { cause: err }
          );
        }
      }
    };
    __name(resolveSessionDriver, "resolveSessionDriver");
    apiContextRoutesSymbol = Symbol.for("context.routes");
    RenderContext = class _RenderContext {
      static {
        __name(this, "RenderContext");
      }
      constructor(pipeline, locals, middleware, actions, pathname, request, routeData, status, clientAddress, cookies = new AstroCookies(request), params = getParams(routeData, pathname), url = new URL(request.url), props = {}, partial = void 0, session = pipeline.manifest.sessionConfig ? new AstroSession(cookies, pipeline.manifest.sessionConfig, pipeline.runtimeMode) : void 0) {
        this.pipeline = pipeline;
        this.locals = locals;
        this.middleware = middleware;
        this.actions = actions;
        this.pathname = pathname;
        this.request = request;
        this.routeData = routeData;
        this.status = status;
        this.clientAddress = clientAddress;
        this.cookies = cookies;
        this.params = params;
        this.url = url;
        this.props = props;
        this.partial = partial;
        this.session = session;
      }
      /**
       * A flag that tells the render content if the rewriting was triggered
       */
      isRewriting = false;
      /**
       * A safety net in case of loops
       */
      counter = 0;
      static async create({
        locals = {},
        middleware,
        pathname,
        pipeline,
        request,
        routeData,
        clientAddress,
        status = 200,
        props,
        partial = void 0,
        actions
      }) {
        const pipelineMiddleware = await pipeline.getMiddleware();
        const pipelineActions = actions ?? await pipeline.getActions();
        setOriginPathname(request, pathname);
        return new _RenderContext(
          pipeline,
          locals,
          sequence(...pipeline.internalMiddleware, middleware ?? pipelineMiddleware),
          pipelineActions,
          pathname,
          request,
          routeData,
          status,
          clientAddress,
          void 0,
          void 0,
          void 0,
          props,
          partial
        );
      }
      /**
       * The main function of the RenderContext.
       *
       * Use this function to render any route known to Astro.
       * It attempts to render a route. A route can be a:
       *
       * - page
       * - redirect
       * - endpoint
       * - fallback
       */
      async render(componentInstance, slots = {}) {
        const { cookies, middleware, pipeline } = this;
        const { logger, serverLike, streaming, manifest: manifest2 } = pipeline;
        const props = Object.keys(this.props).length > 0 ? this.props : await getProps({
          mod: componentInstance,
          routeData: this.routeData,
          routeCache: this.pipeline.routeCache,
          pathname: this.pathname,
          logger,
          serverLike,
          base: manifest2.base
        });
        const actionApiContext = this.createActionAPIContext();
        const apiContext = this.createAPIContext(props, actionApiContext);
        this.counter++;
        if (this.counter === 4) {
          return new Response("Loop Detected", {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
            status: 508,
            statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
          });
        }
        const lastNext = /* @__PURE__ */ __name(async (ctx, payload) => {
          if (payload) {
            const oldPathname = this.pathname;
            pipeline.logger.debug("router", "Called rewriting to:", payload);
            const {
              routeData,
              componentInstance: newComponent,
              pathname,
              newUrl
            } = await pipeline.tryRewrite(payload, this.request);
            if (this.pipeline.serverLike === true && this.routeData.prerender === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            this.routeData = routeData;
            componentInstance = newComponent;
            if (payload instanceof Request) {
              this.request = payload;
            } else {
              this.request = copyRequest(
                newUrl,
                this.request,
                // need to send the flag of the previous routeData
                routeData.prerender,
                this.pipeline.logger,
                this.routeData.route
              );
            }
            this.isRewriting = true;
            this.url = new URL(this.request.url);
            this.params = getParams(routeData, pathname);
            this.pathname = pathname;
            this.status = 200;
            setOriginPathname(this.request, oldPathname);
          }
          let response2;
          if (!ctx.isPrerendered) {
            const { action, setActionResult, serializeActionResult: serializeActionResult2 } = getActionContext(ctx);
            if (action?.calledFrom === "form") {
              const actionResult = await action.handler();
              setActionResult(action.name, serializeActionResult2(actionResult));
            }
          }
          switch (this.routeData.type) {
            case "endpoint": {
              response2 = await renderEndpoint(
                componentInstance,
                ctx,
                this.routeData.prerender,
                logger
              );
              break;
            }
            case "redirect":
              return renderRedirect(this);
            case "page": {
              const result = await this.createResult(componentInstance, actionApiContext);
              try {
                response2 = await renderPage(
                  result,
                  componentInstance?.default,
                  props,
                  slots,
                  streaming,
                  this.routeData
                );
              } catch (e) {
                result.cancelled = true;
                throw e;
              }
              response2.headers.set(ROUTE_TYPE_HEADER, "page");
              if (this.routeData.route === "/404" || this.routeData.route === "/500") {
                response2.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
              }
              if (this.isRewriting) {
                response2.headers.set(REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE);
              }
              break;
            }
            case "fallback": {
              return new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } });
            }
          }
          const responseCookies = getCookiesFromResponse(response2);
          if (responseCookies) {
            cookies.merge(responseCookies);
          }
          return response2;
        }, "lastNext");
        if (isRouteExternalRedirect(this.routeData)) {
          return renderRedirect(this);
        }
        const response = await callMiddleware(middleware, apiContext, lastNext);
        if (response.headers.get(ROUTE_TYPE_HEADER)) {
          response.headers.delete(ROUTE_TYPE_HEADER);
        }
        attachCookiesToResponse(response, cookies);
        return response;
      }
      createAPIContext(props, context2) {
        const redirect = /* @__PURE__ */ __name((path, status = 302) => new Response(null, { status, headers: { Location: path } }), "redirect");
        Reflect.set(context2, apiContextRoutesSymbol, this.pipeline);
        return Object.assign(context2, {
          props,
          redirect,
          getActionResult: createGetActionResult(context2.locals),
          callAction: createCallAction(context2)
        });
      }
      async #executeRewrite(reroutePayload) {
        this.pipeline.logger.debug("router", "Calling rewrite: ", reroutePayload);
        const oldPathname = this.pathname;
        const { routeData, componentInstance, newUrl, pathname } = await this.pipeline.tryRewrite(
          reroutePayload,
          this.request
        );
        if (this.pipeline.serverLike && !this.routeData.prerender && routeData.prerender) {
          throw new AstroError({
            ...ForbiddenRewrite,
            message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
            hint: ForbiddenRewrite.hint(routeData.component)
          });
        }
        this.routeData = routeData;
        if (reroutePayload instanceof Request) {
          this.request = reroutePayload;
        } else {
          this.request = copyRequest(
            newUrl,
            this.request,
            // need to send the flag of the previous routeData
            routeData.prerender,
            this.pipeline.logger,
            this.routeData.route
          );
        }
        this.url = new URL(this.request.url);
        this.cookies = new AstroCookies(this.request);
        this.params = getParams(routeData, pathname);
        this.pathname = pathname;
        this.isRewriting = true;
        this.status = 200;
        setOriginPathname(this.request, oldPathname);
        return await this.render(componentInstance);
      }
      createActionAPIContext() {
        const renderContext = this;
        const { cookies, params, pipeline, url } = this;
        const generator = `Astro v${ASTRO_VERSION}`;
        const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
          return await this.#executeRewrite(reroutePayload);
        }, "rewrite");
        return {
          cookies,
          routePattern: this.routeData.route,
          isPrerendered: this.routeData.prerender,
          get clientAddress() {
            return renderContext.getClientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          generator,
          get locals() {
            return renderContext.locals;
          },
          set locals(_) {
            throw new AstroError(LocalsReassigned);
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          rewrite,
          request: this.request,
          site: pipeline.site,
          url,
          get originPathname() {
            return getOriginPathname(renderContext.request);
          },
          get session() {
            if (this.isPrerendered) {
              pipeline.logger.warn(
                "session",
                `context.session was used when rendering the route ${green(this.routePattern)}, but it is not available on prerendered routes. If you need access to sessions, make sure that the route is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your routes server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            if (!renderContext.session) {
              pipeline.logger.warn(
                "session",
                `context.session was used when rendering the route ${green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            return renderContext.session;
          }
        };
      }
      async createResult(mod2, ctx) {
        const { cookies, pathname, pipeline, routeData, status } = this;
        const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest2, renderers: renderers2, resolve } = pipeline;
        const { links, scripts, styles } = await pipeline.headElements(routeData);
        const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest2.componentMetadata;
        const headers = new Headers({ "Content-Type": "text/html" });
        const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod2.partial);
        const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
        const response = {
          status: actionResult?.error ? actionResult?.error.status : status,
          statusText: actionResult?.error ? actionResult?.error.type : "OK",
          get headers() {
            return headers;
          },
          // Disallow `Astro.response.headers = new Headers`
          set headers(_) {
            throw new AstroError(AstroResponseHeadersReassigned);
          }
        };
        const result = {
          base: manifest2.base,
          userAssetsBase: manifest2.userAssetsBase,
          cancelled: false,
          clientDirectives,
          inlinedScripts,
          componentMetadata,
          compressHTML,
          cookies,
          /** This function returns the `Astro` faux-global */
          createAstro: /* @__PURE__ */ __name((astroGlobal, props, slots) => this.createAstro(result, astroGlobal, props, slots, ctx), "createAstro"),
          links,
          params: this.params,
          partial,
          pathname,
          renderers: renderers2,
          resolve,
          response,
          request: this.request,
          scripts,
          styles,
          actionResult,
          serverIslandNameMap: manifest2.serverIslandNameMap ?? /* @__PURE__ */ new Map(),
          key: manifest2.key,
          trailingSlash: manifest2.trailingSlash,
          _metadata: {
            hasHydrationScript: false,
            rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
            hasRenderedHead: false,
            renderedScripts: /* @__PURE__ */ new Set(),
            hasDirectives: /* @__PURE__ */ new Set(),
            hasRenderedServerIslandRuntime: false,
            headInTree: false,
            extraHead: [],
            propagators: /* @__PURE__ */ new Set()
          }
        };
        return result;
      }
      #astroPagePartial;
      /**
       * The Astro global is sourced in 3 different phases:
       * - **Static**: `.generator` and `.glob` is printed by the compiler, instantiated once per process per astro file
       * - **Page-level**: `.request`, `.cookies`, `.locals` etc. These remain the same for the duration of the request.
       * - **Component-level**: `.props`, `.slots`, and `.self` are unique to each _use_ of each component.
       *
       * The page level partial is used as the prototype of the user-visible `Astro` global object, which is instantiated once per use of a component.
       */
      createAstro(result, astroStaticPartial, props, slotValues, apiContext) {
        let astroPagePartial;
        if (this.isRewriting) {
          astroPagePartial = this.#astroPagePartial = this.createAstroPagePartial(
            result,
            astroStaticPartial,
            apiContext
          );
        } else {
          astroPagePartial = this.#astroPagePartial ??= this.createAstroPagePartial(
            result,
            astroStaticPartial,
            apiContext
          );
        }
        const astroComponentPartial = { props, self: null };
        const Astro = Object.assign(
          Object.create(astroPagePartial),
          astroComponentPartial
        );
        let _slots;
        Object.defineProperty(Astro, "slots", {
          get: /* @__PURE__ */ __name(() => {
            if (!_slots) {
              _slots = new Slots(
                result,
                slotValues,
                this.pipeline.logger
              );
            }
            return _slots;
          }, "get")
        });
        return Astro;
      }
      createAstroPagePartial(result, astroStaticPartial, apiContext) {
        const renderContext = this;
        const { cookies, locals, params, pipeline, url } = this;
        const { response } = result;
        const redirect = /* @__PURE__ */ __name((path, status = 302) => {
          if (this.request[responseSentSymbol]) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          return new Response(null, { status, headers: { Location: path } });
        }, "redirect");
        const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
          return await this.#executeRewrite(reroutePayload);
        }, "rewrite");
        const callAction = createCallAction(apiContext);
        return {
          generator: astroStaticPartial.generator,
          glob: astroStaticPartial.glob,
          routePattern: this.routeData.route,
          isPrerendered: this.routeData.prerender,
          cookies,
          get session() {
            if (this.isPrerendered) {
              pipeline.logger.warn(
                "session",
                `Astro.session was used when rendering the route ${green(this.routePattern)}, but it is not available on prerendered pages. If you need access to sessions, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            if (!renderContext.session) {
              pipeline.logger.warn(
                "session",
                `Astro.session was used when rendering the route ${green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            return renderContext.session;
          },
          get clientAddress() {
            return renderContext.getClientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          locals,
          redirect,
          rewrite,
          request: this.request,
          response,
          site: pipeline.site,
          getActionResult: createGetActionResult(locals),
          get callAction() {
            return callAction;
          },
          url,
          get originPathname() {
            return getOriginPathname(renderContext.request);
          }
        };
      }
      getClientAddress() {
        const { pipeline, request, routeData, clientAddress } = this;
        if (routeData.prerender) {
          throw new AstroError({
            ...PrerenderClientAddressNotAvailable,
            message: PrerenderClientAddressNotAvailable.message(routeData.component)
          });
        }
        if (clientAddress) {
          return clientAddress;
        }
        if (clientAddressSymbol in request) {
          return Reflect.get(request, clientAddressSymbol);
        }
        if (pipeline.adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(pipeline.adapterName)
          });
        }
        throw new AstroError(StaticClientAddressNotAvailable);
      }
      /**
       * API Context may be created multiple times per request, i18n data needs to be computed only once.
       * So, it is computed and saved here on creation of the first APIContext and reused for later ones.
       */
      #currentLocale;
      computeCurrentLocale() {
        const {
          url,
          pipeline: { i18n },
          routeData
        } = this;
        if (!i18n) return;
        const { defaultLocale, locales, strategy } = i18n;
        const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
        if (this.#currentLocale) {
          return this.#currentLocale;
        }
        let computedLocale;
        if (isRouteServerIsland(routeData)) {
          let referer = this.request.headers.get("referer");
          if (referer) {
            if (URL.canParse(referer)) {
              referer = new URL(referer).pathname;
            }
            computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
          }
        } else {
          let pathname = routeData.pathname;
          if (!routeData.pattern.test(url.pathname)) {
            for (const fallbackRoute of routeData.fallbackRoutes) {
              if (fallbackRoute.pattern.test(url.pathname)) {
                pathname = fallbackRoute.pathname;
                break;
              }
            }
          }
          pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname;
          computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
        }
        this.#currentLocale = computedLocale ?? fallbackTo;
        return this.#currentLocale;
      }
      #preferredLocale;
      computePreferredLocale() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n) return;
        return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
      }
      #preferredLocaleList;
      computePreferredLocaleList() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n) return;
        return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
      }
    };
    __name(sequence, "sequence");
    __name(defineMiddleware, "defineMiddleware");
  }
});

// dist/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs
var cloudflare_kv_binding_DMly_2Gl_exports = {};
__export(cloudflare_kv_binding_DMly_2Gl_exports, {
  default: () => cloudflareKvBinding
});
function defineDriver2(factory) {
  return factory;
}
function normalizeKey2(key, sep = ":") {
  if (!key) {
    return "";
  }
  return key.replace(/[:/\\]/g, sep).replace(/^[:/\\]|[:/\\]$/g, "");
}
function joinKeys2(...keys) {
  return keys.map((key) => normalizeKey2(key)).filter(Boolean).join(":");
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function getBinding(binding2) {
  let bindingName = "[binding]";
  if (typeof binding2 === "string") {
    bindingName = binding2;
    binding2 = globalThis[bindingName] || globalThis.__env__?.[bindingName];
  }
  if (!binding2) {
    throw createError(
      "cloudflare",
      `Invalid binding \`${bindingName}\`: \`${binding2}\``
    );
  }
  for (const key of ["get", "put", "delete"]) {
    if (!(key in binding2)) {
      throw createError(
        "cloudflare",
        `Invalid binding \`${bindingName}\`: \`${key}\` key is missing`
      );
    }
  }
  return binding2;
}
function getKVBinding(binding2 = "STORAGE") {
  return getBinding(binding2);
}
var DRIVER_NAME2, cloudflareKvBinding;
var init_cloudflare_kv_binding_DMly_2Gl = __esm({
  "dist/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    __name(defineDriver2, "defineDriver");
    __name(normalizeKey2, "normalizeKey");
    __name(joinKeys2, "joinKeys");
    __name(createError, "createError");
    __name(getBinding, "getBinding");
    __name(getKVBinding, "getKVBinding");
    DRIVER_NAME2 = "cloudflare-kv-binding";
    cloudflareKvBinding = defineDriver2((opts) => {
      const r2 = /* @__PURE__ */ __name((key = "") => opts.base ? joinKeys2(opts.base, key) : key, "r");
      async function getKeys(base = "") {
        base = r2(base);
        const binding2 = getKVBinding(opts.binding);
        const keys = [];
        let cursor = void 0;
        do {
          const kvList = await binding2.list({ prefix: base || void 0, cursor });
          keys.push(...kvList.keys);
          cursor = kvList.list_complete ? void 0 : kvList.cursor;
        } while (cursor);
        return keys.map((key) => key.name);
      }
      __name(getKeys, "getKeys");
      return {
        name: DRIVER_NAME2,
        options: opts,
        getInstance: /* @__PURE__ */ __name(() => getKVBinding(opts.binding), "getInstance"),
        async hasItem(key) {
          key = r2(key);
          const binding2 = getKVBinding(opts.binding);
          return await binding2.get(key) !== null;
        },
        getItem(key) {
          key = r2(key);
          const binding2 = getKVBinding(opts.binding);
          return binding2.get(key);
        },
        setItem(key, value, topts) {
          key = r2(key);
          const binding2 = getKVBinding(opts.binding);
          return binding2.put(
            key,
            value,
            topts ? {
              expirationTtl: topts?.ttl ? Math.max(topts.ttl, opts.minTTL ?? 60) : void 0,
              ...topts
            } : void 0
          );
        },
        removeItem(key) {
          key = r2(key);
          const binding2 = getKVBinding(opts.binding);
          return binding2.delete(key);
        },
        getKeys(base) {
          return getKeys(base).then(
            (keys) => keys.map((key) => opts.base ? key.slice(opts.base.length) : key)
          );
        },
        async clear(base) {
          const binding2 = getKVBinding(opts.binding);
          const keys = await getKeys(base);
          await Promise.all(keys.map((key) => binding2.delete(key)));
        }
      };
    });
  }
});

// node-built-in-modules:node:util
import libDefault from "node:util";
var require_node_util = __commonJS({
  "node-built-in-modules:node:util"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:node:stream
import libDefault2 from "node:stream";
var require_node_stream = __commonJS({
  "node-built-in-modules:node:stream"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/sharp/lib/is.js
var require_is = __commonJS({
  "node_modules/sharp/lib/is.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var defined = /* @__PURE__ */ __name(function(val) {
      return typeof val !== "undefined" && val !== null;
    }, "defined");
    var object = /* @__PURE__ */ __name(function(val) {
      return typeof val === "object";
    }, "object");
    var plainObject = /* @__PURE__ */ __name(function(val) {
      return Object.prototype.toString.call(val) === "[object Object]";
    }, "plainObject");
    var fn = /* @__PURE__ */ __name(function(val) {
      return typeof val === "function";
    }, "fn");
    var bool = /* @__PURE__ */ __name(function(val) {
      return typeof val === "boolean";
    }, "bool");
    var buffer = /* @__PURE__ */ __name(function(val) {
      return val instanceof Buffer;
    }, "buffer");
    var typedArray = /* @__PURE__ */ __name(function(val) {
      if (defined(val)) {
        switch (val.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
          case Int8Array:
          case Uint16Array:
          case Int16Array:
          case Uint32Array:
          case Int32Array:
          case Float32Array:
          case Float64Array:
            return true;
        }
      }
      return false;
    }, "typedArray");
    var arrayBuffer = /* @__PURE__ */ __name(function(val) {
      return val instanceof ArrayBuffer;
    }, "arrayBuffer");
    var string = /* @__PURE__ */ __name(function(val) {
      return typeof val === "string" && val.length > 0;
    }, "string");
    var number = /* @__PURE__ */ __name(function(val) {
      return typeof val === "number" && !Number.isNaN(val);
    }, "number");
    var integer = /* @__PURE__ */ __name(function(val) {
      return Number.isInteger(val);
    }, "integer");
    var inRange = /* @__PURE__ */ __name(function(val, min, max) {
      return val >= min && val <= max;
    }, "inRange");
    var inArray = /* @__PURE__ */ __name(function(val, list) {
      return list.includes(val);
    }, "inArray");
    var invalidParameterError = /* @__PURE__ */ __name(function(name, expected, actual) {
      return new Error(
        `Expected ${expected} for ${name} but received ${actual} of type ${typeof actual}`
      );
    }, "invalidParameterError");
    var nativeError = /* @__PURE__ */ __name(function(native, context2) {
      context2.message = native.message;
      return context2;
    }, "nativeError");
    module.exports = {
      defined,
      object,
      plainObject,
      fn,
      bool,
      buffer,
      typedArray,
      arrayBuffer,
      string,
      number,
      integer,
      inRange,
      inArray,
      invalidParameterError,
      nativeError
    };
  }
});

// node_modules/unenv/dist/runtime/node/child_process.mjs
var ChildProcess, _forkChild, exec, execFile, execFileSync, execSync, fork, spawn, spawnSync, child_process_default;
var init_child_process = __esm({
  "node_modules/unenv/dist/runtime/node/child_process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    ChildProcess = /* @__PURE__ */ notImplementedClass("child_process.ChildProcess");
    _forkChild = /* @__PURE__ */ notImplemented("child_process.ChildProcess");
    exec = /* @__PURE__ */ notImplemented("child_process.exec");
    execFile = /* @__PURE__ */ notImplemented("child_process.execFile");
    execFileSync = /* @__PURE__ */ notImplemented("child_process.execFileSync");
    execSync = /* @__PURE__ */ notImplemented("child_process.execSyn");
    fork = /* @__PURE__ */ notImplemented("child_process.fork");
    spawn = /* @__PURE__ */ notImplemented("child_process.spawn");
    spawnSync = /* @__PURE__ */ notImplemented("child_process.spawnSync");
    child_process_default = {
      ChildProcess,
      _forkChild,
      exec,
      execFile,
      execFileSync,
      execSync,
      fork,
      spawn,
      spawnSync
    };
  }
});

// node-built-in-modules:child_process
var require_child_process = __commonJS({
  "node-built-in-modules:child_process"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_child_process();
    module.exports = child_process_default;
  }
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isLinux = /* @__PURE__ */ __name(() => process.platform === "linux", "isLinux");
    var report2 = null;
    var getReport = /* @__PURE__ */ __name(() => {
      if (!report2) {
        if (isLinux() && process.report) {
          const orig = process.report.excludeNetwork;
          process.report.excludeNetwork = true;
          report2 = process.report.getReport();
          process.report.excludeNetwork = orig;
        } else {
          report2 = {};
        }
      }
      return report2;
    }, "getReport");
    module.exports = { isLinux, getReport };
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch2, statfs, glob;
var init_promises = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    access = /* @__PURE__ */ notImplemented("fs.access");
    copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
    cp = /* @__PURE__ */ notImplemented("fs.cp");
    open = /* @__PURE__ */ notImplemented("fs.open");
    opendir = /* @__PURE__ */ notImplemented("fs.opendir");
    rename = /* @__PURE__ */ notImplemented("fs.rename");
    truncate = /* @__PURE__ */ notImplemented("fs.truncate");
    rm = /* @__PURE__ */ notImplemented("fs.rm");
    rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
    mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
    readdir = /* @__PURE__ */ notImplemented("fs.readdir");
    readlink = /* @__PURE__ */ notImplemented("fs.readlink");
    symlink = /* @__PURE__ */ notImplemented("fs.symlink");
    lstat = /* @__PURE__ */ notImplemented("fs.lstat");
    stat = /* @__PURE__ */ notImplemented("fs.stat");
    link = /* @__PURE__ */ notImplemented("fs.link");
    unlink = /* @__PURE__ */ notImplemented("fs.unlink");
    chmod = /* @__PURE__ */ notImplemented("fs.chmod");
    lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
    lchown = /* @__PURE__ */ notImplemented("fs.lchown");
    chown = /* @__PURE__ */ notImplemented("fs.chown");
    utimes = /* @__PURE__ */ notImplemented("fs.utimes");
    lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
    realpath = /* @__PURE__ */ notImplemented("fs.realpath");
    mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
    writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
    appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
    readFile = /* @__PURE__ */ notImplemented("fs.readFile");
    watch2 = /* @__PURE__ */ notImplemented("fs.watch");
    statfs = /* @__PURE__ */ notImplemented("fs.statfs");
    glob = /* @__PURE__ */ notImplemented("fs.glob");
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR, UV_FS_SYMLINK_JUNCTION, O_RDONLY, O_WRONLY, O_RDWR, UV_DIRENT_UNKNOWN, UV_DIRENT_FILE, UV_DIRENT_DIR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET, UV_DIRENT_CHAR, UV_DIRENT_BLOCK, EXTENSIONLESS_FORMAT_JAVASCRIPT, EXTENSIONLESS_FORMAT_WASM, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, UV_FS_O_FILEMAP, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOATIME, O_NOFOLLOW, O_SYNC, O_DSYNC, O_DIRECT, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, F_OK, R_OK, W_OK, X_OK, UV_FS_COPYFILE_EXCL, COPYFILE_EXCL, UV_FS_COPYFILE_FICLONE, COPYFILE_FICLONE, UV_FS_COPYFILE_FICLONE_FORCE, COPYFILE_FICLONE_FORCE;
var init_constants = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_FS_SYMLINK_DIR = 1;
    UV_FS_SYMLINK_JUNCTION = 2;
    O_RDONLY = 0;
    O_WRONLY = 1;
    O_RDWR = 2;
    UV_DIRENT_UNKNOWN = 0;
    UV_DIRENT_FILE = 1;
    UV_DIRENT_DIR = 2;
    UV_DIRENT_LINK = 3;
    UV_DIRENT_FIFO = 4;
    UV_DIRENT_SOCKET = 5;
    UV_DIRENT_CHAR = 6;
    UV_DIRENT_BLOCK = 7;
    EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
    EXTENSIONLESS_FORMAT_WASM = 1;
    S_IFMT = 61440;
    S_IFREG = 32768;
    S_IFDIR = 16384;
    S_IFCHR = 8192;
    S_IFBLK = 24576;
    S_IFIFO = 4096;
    S_IFLNK = 40960;
    S_IFSOCK = 49152;
    O_CREAT = 64;
    O_EXCL = 128;
    UV_FS_O_FILEMAP = 0;
    O_NOCTTY = 256;
    O_TRUNC = 512;
    O_APPEND = 1024;
    O_DIRECTORY = 65536;
    O_NOATIME = 262144;
    O_NOFOLLOW = 131072;
    O_SYNC = 1052672;
    O_DSYNC = 4096;
    O_DIRECT = 16384;
    O_NONBLOCK = 2048;
    S_IRWXU = 448;
    S_IRUSR = 256;
    S_IWUSR = 128;
    S_IXUSR = 64;
    S_IRWXG = 56;
    S_IRGRP = 32;
    S_IWGRP = 16;
    S_IXGRP = 8;
    S_IRWXO = 7;
    S_IROTH = 4;
    S_IWOTH = 2;
    S_IXOTH = 1;
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    UV_FS_COPYFILE_EXCL = 1;
    COPYFILE_EXCL = 1;
    UV_FS_COPYFILE_FICLONE = 2;
    COPYFILE_FICLONE = 2;
    UV_FS_COPYFILE_FICLONE_FORCE = 4;
    COPYFILE_FICLONE_FORCE = 4;
  }
});

// node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_default;
var init_promises2 = __esm({
  "node_modules/unenv/dist/runtime/node/fs/promises.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises();
    init_constants();
    init_promises();
    promises_default = {
      constants: constants_exports,
      access,
      appendFile,
      chmod,
      chown,
      copyFile,
      cp,
      glob,
      lchmod,
      lchown,
      link,
      lstat,
      lutimes,
      mkdir,
      mkdtemp,
      open,
      opendir,
      readFile,
      readdir,
      readlink,
      realpath,
      rename,
      rm,
      rmdir,
      stat,
      statfs,
      symlink,
      truncate,
      unlink,
      utimes,
      watch: watch2,
      writeFile
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs
var Dir, Dirent, Stats, ReadStream2, WriteStream2, FileReadStream, FileWriteStream;
var init_classes = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    Dir = /* @__PURE__ */ notImplementedClass("fs.Dir");
    Dirent = /* @__PURE__ */ notImplementedClass("fs.Dirent");
    Stats = /* @__PURE__ */ notImplementedClass("fs.Stats");
    ReadStream2 = /* @__PURE__ */ notImplementedClass("fs.ReadStream");
    WriteStream2 = /* @__PURE__ */ notImplementedClass("fs.WriteStream");
    FileReadStream = ReadStream2;
    FileWriteStream = WriteStream2;
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs
function callbackify(fn) {
  const fnc = /* @__PURE__ */ __name(function(...args) {
    const cb = args.pop();
    fn().catch((error4) => cb(error4)).then((val) => cb(void 0, val));
  }, "fnc");
  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}
var access2, appendFile2, chown2, chmod2, copyFile2, cp2, lchown2, lchmod2, link2, lstat2, lutimes2, mkdir2, mkdtemp2, realpath2, open2, opendir2, readdir2, readFile2, readlink2, rename2, rm2, rmdir2, stat2, symlink2, truncate2, unlink2, utimes2, writeFile2, statfs2, close, createReadStream, createWriteStream, exists, fchown, fchmod, fdatasync, fstat, fsync, ftruncate, futimes, lstatSync, read, readv, realpathSync, statSync, unwatchFile, watch3, watchFile, write, writev, _toUnixTimestamp, openAsBlob, glob2, appendFileSync, accessSync, chownSync, chmodSync, closeSync, copyFileSync, cpSync, existsSync, fchownSync, fchmodSync, fdatasyncSync, fstatSync, fsyncSync, ftruncateSync, futimesSync, lchownSync, lchmodSync, linkSync, lutimesSync, mkdirSync, mkdtempSync, openSync, opendirSync, readdirSync, readSync, readvSync, readFileSync, readlinkSync, renameSync, rmSync, rmdirSync, symlinkSync, truncateSync, unlinkSync, utimesSync, writeFileSync, writeSync, writevSync, statfsSync, globSync;
var init_fs = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_promises();
    __name(callbackify, "callbackify");
    access2 = callbackify(access);
    appendFile2 = callbackify(appendFile);
    chown2 = callbackify(chown);
    chmod2 = callbackify(chmod);
    copyFile2 = callbackify(copyFile);
    cp2 = callbackify(cp);
    lchown2 = callbackify(lchown);
    lchmod2 = callbackify(lchmod);
    link2 = callbackify(link);
    lstat2 = callbackify(lstat);
    lutimes2 = callbackify(lutimes);
    mkdir2 = callbackify(mkdir);
    mkdtemp2 = callbackify(mkdtemp);
    realpath2 = callbackify(realpath);
    open2 = callbackify(open);
    opendir2 = callbackify(opendir);
    readdir2 = callbackify(readdir);
    readFile2 = callbackify(readFile);
    readlink2 = callbackify(readlink);
    rename2 = callbackify(rename);
    rm2 = callbackify(rm);
    rmdir2 = callbackify(rmdir);
    stat2 = callbackify(stat);
    symlink2 = callbackify(symlink);
    truncate2 = callbackify(truncate);
    unlink2 = callbackify(unlink);
    utimes2 = callbackify(utimes);
    writeFile2 = callbackify(writeFile);
    statfs2 = callbackify(statfs);
    close = /* @__PURE__ */ notImplementedAsync("fs.close");
    createReadStream = /* @__PURE__ */ notImplementedAsync("fs.createReadStream");
    createWriteStream = /* @__PURE__ */ notImplementedAsync("fs.createWriteStream");
    exists = /* @__PURE__ */ notImplementedAsync("fs.exists");
    fchown = /* @__PURE__ */ notImplementedAsync("fs.fchown");
    fchmod = /* @__PURE__ */ notImplementedAsync("fs.fchmod");
    fdatasync = /* @__PURE__ */ notImplementedAsync("fs.fdatasync");
    fstat = /* @__PURE__ */ notImplementedAsync("fs.fstat");
    fsync = /* @__PURE__ */ notImplementedAsync("fs.fsync");
    ftruncate = /* @__PURE__ */ notImplementedAsync("fs.ftruncate");
    futimes = /* @__PURE__ */ notImplementedAsync("fs.futimes");
    lstatSync = /* @__PURE__ */ notImplementedAsync("fs.lstatSync");
    read = /* @__PURE__ */ notImplementedAsync("fs.read");
    readv = /* @__PURE__ */ notImplementedAsync("fs.readv");
    realpathSync = /* @__PURE__ */ notImplementedAsync("fs.realpathSync");
    statSync = /* @__PURE__ */ notImplementedAsync("fs.statSync");
    unwatchFile = /* @__PURE__ */ notImplementedAsync("fs.unwatchFile");
    watch3 = /* @__PURE__ */ notImplementedAsync("fs.watch");
    watchFile = /* @__PURE__ */ notImplementedAsync("fs.watchFile");
    write = /* @__PURE__ */ notImplementedAsync("fs.write");
    writev = /* @__PURE__ */ notImplementedAsync("fs.writev");
    _toUnixTimestamp = /* @__PURE__ */ notImplementedAsync("fs._toUnixTimestamp");
    openAsBlob = /* @__PURE__ */ notImplementedAsync("fs.openAsBlob");
    glob2 = /* @__PURE__ */ notImplementedAsync("fs.glob");
    appendFileSync = /* @__PURE__ */ notImplemented("fs.appendFileSync");
    accessSync = /* @__PURE__ */ notImplemented("fs.accessSync");
    chownSync = /* @__PURE__ */ notImplemented("fs.chownSync");
    chmodSync = /* @__PURE__ */ notImplemented("fs.chmodSync");
    closeSync = /* @__PURE__ */ notImplemented("fs.closeSync");
    copyFileSync = /* @__PURE__ */ notImplemented("fs.copyFileSync");
    cpSync = /* @__PURE__ */ notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    fchownSync = /* @__PURE__ */ notImplemented("fs.fchownSync");
    fchmodSync = /* @__PURE__ */ notImplemented("fs.fchmodSync");
    fdatasyncSync = /* @__PURE__ */ notImplemented("fs.fdatasyncSync");
    fstatSync = /* @__PURE__ */ notImplemented("fs.fstatSync");
    fsyncSync = /* @__PURE__ */ notImplemented("fs.fsyncSync");
    ftruncateSync = /* @__PURE__ */ notImplemented("fs.ftruncateSync");
    futimesSync = /* @__PURE__ */ notImplemented("fs.futimesSync");
    lchownSync = /* @__PURE__ */ notImplemented("fs.lchownSync");
    lchmodSync = /* @__PURE__ */ notImplemented("fs.lchmodSync");
    linkSync = /* @__PURE__ */ notImplemented("fs.linkSync");
    lutimesSync = /* @__PURE__ */ notImplemented("fs.lutimesSync");
    mkdirSync = /* @__PURE__ */ notImplemented("fs.mkdirSync");
    mkdtempSync = /* @__PURE__ */ notImplemented("fs.mkdtempSync");
    openSync = /* @__PURE__ */ notImplemented("fs.openSync");
    opendirSync = /* @__PURE__ */ notImplemented("fs.opendirSync");
    readdirSync = /* @__PURE__ */ notImplemented("fs.readdirSync");
    readSync = /* @__PURE__ */ notImplemented("fs.readSync");
    readvSync = /* @__PURE__ */ notImplemented("fs.readvSync");
    readFileSync = /* @__PURE__ */ notImplemented("fs.readFileSync");
    readlinkSync = /* @__PURE__ */ notImplemented("fs.readlinkSync");
    renameSync = /* @__PURE__ */ notImplemented("fs.renameSync");
    rmSync = /* @__PURE__ */ notImplemented("fs.rmSync");
    rmdirSync = /* @__PURE__ */ notImplemented("fs.rmdirSync");
    symlinkSync = /* @__PURE__ */ notImplemented("fs.symlinkSync");
    truncateSync = /* @__PURE__ */ notImplemented("fs.truncateSync");
    unlinkSync = /* @__PURE__ */ notImplemented("fs.unlinkSync");
    utimesSync = /* @__PURE__ */ notImplemented("fs.utimesSync");
    writeFileSync = /* @__PURE__ */ notImplemented("fs.writeFileSync");
    writeSync = /* @__PURE__ */ notImplemented("fs.writeSync");
    writevSync = /* @__PURE__ */ notImplemented("fs.writevSync");
    statfsSync = /* @__PURE__ */ notImplemented("fs.statfsSync");
    globSync = /* @__PURE__ */ notImplemented("fs.globSync");
  }
});

// node_modules/unenv/dist/runtime/node/fs.mjs
var fs_default;
var init_fs2 = __esm({
  "node_modules/unenv/dist/runtime/node/fs.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises2();
    init_classes();
    init_fs();
    init_constants();
    init_constants();
    init_fs();
    init_classes();
    fs_default = {
      F_OK,
      R_OK,
      W_OK,
      X_OK,
      constants: constants_exports,
      promises: promises_default,
      Dir,
      Dirent,
      FileReadStream,
      FileWriteStream,
      ReadStream: ReadStream2,
      Stats,
      WriteStream: WriteStream2,
      _toUnixTimestamp,
      access: access2,
      accessSync,
      appendFile: appendFile2,
      appendFileSync,
      chmod: chmod2,
      chmodSync,
      chown: chown2,
      chownSync,
      close,
      closeSync,
      copyFile: copyFile2,
      copyFileSync,
      cp: cp2,
      cpSync,
      createReadStream,
      createWriteStream,
      exists,
      existsSync,
      fchmod,
      fchmodSync,
      fchown,
      fchownSync,
      fdatasync,
      fdatasyncSync,
      fstat,
      fstatSync,
      fsync,
      fsyncSync,
      ftruncate,
      ftruncateSync,
      futimes,
      futimesSync,
      glob: glob2,
      lchmod: lchmod2,
      globSync,
      lchmodSync,
      lchown: lchown2,
      lchownSync,
      link: link2,
      linkSync,
      lstat: lstat2,
      lstatSync,
      lutimes: lutimes2,
      lutimesSync,
      mkdir: mkdir2,
      mkdirSync,
      mkdtemp: mkdtemp2,
      mkdtempSync,
      open: open2,
      openAsBlob,
      openSync,
      opendir: opendir2,
      opendirSync,
      read,
      readFile: readFile2,
      readFileSync,
      readSync,
      readdir: readdir2,
      readdirSync,
      readlink: readlink2,
      readlinkSync,
      readv,
      readvSync,
      realpath: realpath2,
      realpathSync,
      rename: rename2,
      renameSync,
      rm: rm2,
      rmSync,
      rmdir: rmdir2,
      rmdirSync,
      stat: stat2,
      statSync,
      statfs: statfs2,
      statfsSync,
      symlink: symlink2,
      symlinkSync,
      truncate: truncate2,
      truncateSync,
      unlink: unlink2,
      unlinkSync,
      unwatchFile,
      utimes: utimes2,
      utimesSync,
      watch: watch3,
      watchFile,
      write,
      writeFile: writeFile2,
      writeFileSync,
      writeSync,
      writev,
      writevSync
    };
  }
});

// node-built-in-modules:fs
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fs2();
    module.exports = fs_default;
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var fs = require_fs();
    var LDD_PATH = "/usr/bin/ldd";
    var readFileSync2 = /* @__PURE__ */ __name((path) => fs.readFileSync(path, "utf-8"), "readFileSync");
    var readFile3 = /* @__PURE__ */ __name((path) => new Promise((resolve, reject) => {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    }), "readFile");
    module.exports = {
      LDD_PATH,
      readFileSync: readFileSync2,
      readFile: readFile3
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var childProcess = require_child_process();
    var { isLinux, getReport } = require_process();
    var { LDD_PATH, readFile: readFile3, readFileSync: readFileSync2 } = require_filesystem();
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = /* @__PURE__ */ __name(() => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    }, "safeCommand");
    var safeCommandSync = /* @__PURE__ */ __name(() => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    }, "safeCommandSync");
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
    var MUSL = "musl";
    var isFileMusl = /* @__PURE__ */ __name((f) => f.includes("libc.musl-") || f.includes("ld-musl-"), "isFileMusl");
    var familyFromReport = /* @__PURE__ */ __name(() => {
      const report2 = getReport();
      if (report2.header && report2.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report2.sharedObjects)) {
        if (report2.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    }, "familyFromReport");
    var familyFromCommand = /* @__PURE__ */ __name((out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    }, "familyFromCommand");
    var getFamilyFromLddContent = /* @__PURE__ */ __name((content) => {
      if (content.includes("musl")) {
        return MUSL;
      }
      if (content.includes("GNU C Library")) {
        return GLIBC;
      }
      return null;
    }, "getFamilyFromLddContent");
    var familyFromFilesystem = /* @__PURE__ */ __name(async () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = await readFile3(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    }, "familyFromFilesystem");
    var familyFromFilesystemSync = /* @__PURE__ */ __name(() => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync2(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    }, "familyFromFilesystemSync");
    var family = /* @__PURE__ */ __name(async () => {
      let family2 = null;
      if (isLinux()) {
        family2 = await familyFromFilesystem();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = await safeCommand();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    }, "family");
    var familySync = /* @__PURE__ */ __name(() => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromFilesystemSync();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = safeCommandSync();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    }, "familySync");
    var isNonGlibcLinux = /* @__PURE__ */ __name(async () => isLinux() && await family() !== GLIBC, "isNonGlibcLinux");
    var isNonGlibcLinuxSync = /* @__PURE__ */ __name(() => isLinux() && familySync() !== GLIBC, "isNonGlibcLinuxSync");
    var versionFromFilesystem = /* @__PURE__ */ __name(async () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = await readFile3(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    }, "versionFromFilesystem");
    var versionFromFilesystemSync = /* @__PURE__ */ __name(() => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync2(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    }, "versionFromFilesystemSync");
    var versionFromReport = /* @__PURE__ */ __name(() => {
      const report2 = getReport();
      if (report2.header && report2.header.glibcVersionRuntime) {
        return report2.header.glibcVersionRuntime;
      }
      return null;
    }, "versionFromReport");
    var versionSuffix = /* @__PURE__ */ __name((s) => s.trim().split(/\s+/)[1], "versionSuffix");
    var versionFromCommand = /* @__PURE__ */ __name((out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    }, "versionFromCommand");
    var version3 = /* @__PURE__ */ __name(async () => {
      let version4 = null;
      if (isLinux()) {
        version4 = await versionFromFilesystem();
        if (!version4) {
          version4 = versionFromReport();
        }
        if (!version4) {
          const out = await safeCommand();
          version4 = versionFromCommand(out);
        }
      }
      return version4;
    }, "version");
    var versionSync = /* @__PURE__ */ __name(() => {
      let version4 = null;
      if (isLinux()) {
        version4 = versionFromFilesystemSync();
        if (!version4) {
          version4 = versionFromReport();
        }
        if (!version4) {
          const out = safeCommandSync();
          version4 = versionFromCommand(out);
        }
      }
      return version4;
    }, "versionSync");
    module.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version: version3,
      versionSync
    };
  }
});

// node-built-in-modules:node:child_process
var require_node_child_process = __commonJS({
  "node-built-in-modules:node:child_process"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_child_process();
    module.exports = child_process_default;
  }
});

// node-built-in-modules:node:crypto
import libDefault3 from "node:crypto";
var require_node_crypto = __commonJS({
  "node-built-in-modules:node:crypto"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault3;
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug4;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug4 = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = /* @__PURE__ */ __name((value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    }, "makeSafeRegex");
    var createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug4(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    }, "createToken");
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = /* @__PURE__ */ __name((options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    }, "parseOptions");
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = /* @__PURE__ */ __name((a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    }, "compareIdentifiers");
    var rcompareIdentifiers = /* @__PURE__ */ __name((a, b) => compareIdentifiers(b, a), "rcompareIdentifiers");
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      static {
        __name(this, "SemVer");
      }
      constructor(version3, options) {
        options = parseOptions(options);
        if (version3 instanceof _SemVer) {
          if (version3.loose === !!options.loose && version3.includePrerelease === !!options.includePrerelease) {
            return version3;
          } else {
            version3 = version3.version;
          }
        } else if (typeof version3 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version3}".`);
        }
        if (version3.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug4("SemVer", version3, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version3.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version3}`);
        }
        this.raw = version3;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug4("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug4("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug4("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release3, identifier, identifierBase) {
        if (release3.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release3) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release3}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = /* @__PURE__ */ __name((version3, options, throwErrors = false) => {
      if (version3 instanceof SemVer) {
        return version3;
      }
      try {
        return new SemVer(version3, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    }, "parse");
    module.exports = parse2;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = /* @__PURE__ */ __name((version3, options) => {
      if (version3 instanceof SemVer) {
        return version3;
      }
      if (typeof version3 === "number") {
        version3 = String(version3);
      }
      if (typeof version3 !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version3.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version3)) && (!match || match.index + match[0].length !== version3.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse2(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    }, "coerce");
    module.exports = coerce;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var compare = /* @__PURE__ */ __name((a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose)), "compare");
    module.exports = compare;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gte = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) >= 0, "gte");
    module.exports = gte;
  }
});

// node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var LRUCache = class {
      static {
        __name(this, "LRUCache");
      }
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var eq = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) === 0, "eq");
    module.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var neq = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) !== 0, "neq");
    module.exports = neq;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gt = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) > 0, "gt");
    module.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lt = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) < 0, "lt");
    module.exports = lt;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lte = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) <= 0, "lte");
    module.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = /* @__PURE__ */ __name((a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    }, "cmp");
    module.exports = cmp;
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static {
        __name(this, "Comparator");
      }
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug4("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug4("comp", this);
      }
      parse(comp) {
        const r2 = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r2);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version3) {
        debug4("Comparator.test", version3, this.options.loose);
        if (this.semver === ANY || version3 === ANY) {
          return true;
        }
        if (typeof version3 === "string") {
          try {
            version3 = new SemVer(version3, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version3, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      static {
        __name(this, "Range");
      }
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug4("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug4("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug4("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug4("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug4("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug4("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version3) {
        if (!version3) {
          return false;
        }
        if (typeof version3 === "string") {
          try {
            version3 = new SemVer(version3, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version3, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = /* @__PURE__ */ __name((c) => c.value === "<0.0.0-0", "isNullSet");
    var isAny = /* @__PURE__ */ __name((c) => c.value === "", "isAny");
    var isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    }, "isSatisfiable");
    var parseComparator = /* @__PURE__ */ __name((comp, options) => {
      debug4("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug4("caret", comp);
      comp = replaceTildes(comp, options);
      debug4("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug4("xrange", comp);
      comp = replaceStars(comp, options);
      debug4("stars", comp);
      return comp;
    }, "parseComparator");
    var isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
    var replaceTildes = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    }, "replaceTildes");
    var replaceTilde = /* @__PURE__ */ __name((comp, options) => {
      const r2 = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r2, (_, M, m, p, pr) => {
        debug4("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug4("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug4("tilde return", ret);
        return ret;
      });
    }, "replaceTilde");
    var replaceCarets = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    }, "replaceCarets");
    var replaceCaret = /* @__PURE__ */ __name((comp, options) => {
      debug4("caret", comp, options);
      const r2 = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r2, (_, M, m, p, pr) => {
        debug4("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug4("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug4("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug4("caret return", ret);
        return ret;
      });
    }, "replaceCaret");
    var replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    }, "replaceXRanges");
    var replaceXRange = /* @__PURE__ */ __name((comp, options) => {
      comp = comp.trim();
      const r2 = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r2, (ret, gtlt, M, m, p, pr) => {
        debug4("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug4("xRange return", ret);
        return ret;
      });
    }, "replaceXRange");
    var replaceStars = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    }, "replaceStars");
    var replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    }, "replaceGTE0");
    var hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    }, "hyphenReplace");
    var testSet = /* @__PURE__ */ __name((set, version3, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version3)) {
          return false;
        }
      }
      if (version3.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug4(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version3.major && allowed.minor === version3.minor && allowed.patch === version3.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }, "testSet");
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var satisfies = /* @__PURE__ */ __name((version3, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version3);
    }, "satisfies");
    module.exports = satisfies;
  }
});

// node_modules/sharp/package.json
var require_package = __commonJS({
  "node_modules/sharp/package.json"(exports, module) {
    module.exports = {
      name: "sharp",
      description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
      version: "0.33.5",
      author: "Lovell Fuller <npm@lovell.info>",
      homepage: "https://sharp.pixelplumbing.com",
      contributors: [
        "Pierre Inglebert <pierre.inglebert@gmail.com>",
        "Jonathan Ong <jonathanrichardong@gmail.com>",
        "Chanon Sajjamanochai <chanon.s@gmail.com>",
        "Juliano Julio <julianojulio@gmail.com>",
        "Daniel Gasienica <daniel@gasienica.ch>",
        "Julian Walker <julian@fiftythree.com>",
        "Amit Pitaru <pitaru.amit@gmail.com>",
        "Brandon Aaron <hello.brandon@aaron.sh>",
        "Andreas Lind <andreas@one.com>",
        "Maurus Cuelenaere <mcuelenaere@gmail.com>",
        "Linus Unneb\xE4ck <linus@folkdatorn.se>",
        "Victor Mateevitsi <mvictoras@gmail.com>",
        "Alaric Holloway <alaric.holloway@gmail.com>",
        "Bernhard K. Weisshuhn <bkw@codingforce.com>",
        "Chris Riley <criley@primedia.com>",
        "David Carley <dacarley@gmail.com>",
        "John Tobin <john@limelightmobileinc.com>",
        "Kenton Gray <kentongray@gmail.com>",
        "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
        "Samy Al Zahrani <samyalzahrany@gmail.com>",
        "Chintan Thakkar <lemnisk8@gmail.com>",
        "F. Orlando Galashan <frulo@gmx.de>",
        "Kleis Auke Wolthuizen <info@kleisauke.nl>",
        "Matt Hirsch <mhirsch@media.mit.edu>",
        "Matthias Thoemmes <thoemmes@gmail.com>",
        "Patrick Paskaris <patrick@paskaris.gr>",
        "J\xE9r\xE9my Lal <kapouer@melix.org>",
        "Rahul Nanwani <r.nanwani@gmail.com>",
        "Alice Monday <alice0meta@gmail.com>",
        "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
        "YvesBos <yves_bos@outlook.com>",
        "Guy Maliar <guy@tailorbrands.com>",
        "Nicolas Coden <nicolas@ncoden.fr>",
        "Matt Parrish <matt.r.parrish@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Matthew McEachen <matthew+github@mceachen.org>",
        "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
        "Kenric D'Souza <kenric.dsouza@gmail.com>",
        "Oleh Aleinyk <oleg.aleynik@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Andrea Bianco <andrea.bianco@unibas.ch>",
        "Rik Heywood <rik@rik.org>",
        "Thomas Parisot <hi@oncletom.io>",
        "Nathan Graves <nathanrgraves+github@gmail.com>",
        "Tom Lokhorst <tom@lokhorst.eu>",
        "Espen Hovlandsdal <espen@hovlandsdal.com>",
        "Sylvain Dumont <sylvain.dumont35@gmail.com>",
        "Alun Davies <alun.owain.davies@googlemail.com>",
        "Aidan Hoolachan <ajhoolachan21@gmail.com>",
        "Axel Eirola <axel.eirola@iki.fi>",
        "Freezy <freezy@xbmc.org>",
        "Daiz <taneli.vatanen@gmail.com>",
        "Julian Aubourg <j@ubourg.net>",
        "Keith Belovay <keith@picthrive.com>",
        "Michael B. Klein <mbklein@gmail.com>",
        "Jordan Prudhomme <jordan@raboland.fr>",
        "Ilya Ovdin <iovdin@gmail.com>",
        "Andargor <andargor@yahoo.com>",
        "Paul Neave <paul.neave@gmail.com>",
        "Brendan Kennedy <brenwken@gmail.com>",
        "Brychan Bennett-Odlum <git@brychan.io>",
        "Edward Silverton <e.silverton@gmail.com>",
        "Roman Malieiev <aromaleev@gmail.com>",
        "Tomas Szabo <tomas.szabo@deftomat.com>",
        "Robert O'Rourke <robert@o-rourke.org>",
        "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
        "Christian Flintrup <chr@gigahost.dk>",
        "Manan Jadhav <manan@motionden.com>",
        "Leon Radley <leon@radley.se>",
        "alza54 <alza54@thiocod.in>",
        "Jacob Smith <jacob@frende.me>",
        "Michael Nutt <michael@nutt.im>",
        "Brad Parham <baparham@gmail.com>",
        "Taneli Vatanen <taneli.vatanen@gmail.com>",
        "Joris Dugu\xE9 <zaruike10@gmail.com>",
        "Chris Banks <christopher.bradley.banks@gmail.com>",
        "Ompal Singh <ompal.hitm09@gmail.com>",
        "Brodan <christopher.hranj@gmail.com>",
        "Ankur Parihar <ankur.github@gmail.com>",
        "Brahim Ait elhaj <brahima@gmail.com>",
        "Mart Jansink <m.jansink@gmail.com>",
        "Lachlan Newman <lachnewman007@gmail.com>",
        "Dennis Beatty <dennis@dcbeatty.com>",
        "Ingvar Stepanyan <me@rreverser.com>",
        "Don Denton <don@happycollision.com>"
      ],
      scripts: {
        install: "node install/check",
        clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
        test: "npm run test-lint && npm run test-unit && npm run test-licensing && npm run test-types",
        "test-lint": "semistandard && cpplint",
        "test-unit": "nyc --reporter=lcov --reporter=text --check-coverage --branches=100 mocha",
        "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;LGPL-3.0-or-later;MIT"',
        "test-leak": "./test/leak/leak.sh",
        "test-types": "tsd",
        "package-from-local-build": "node npm/from-local-build",
        "package-from-github-release": "node npm/from-github-release",
        "docs-build": "node docs/build && node docs/search-index/build",
        "docs-serve": "cd docs && npx serve",
        "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
      },
      type: "commonjs",
      main: "lib/index.js",
      types: "lib/index.d.ts",
      files: [
        "install",
        "lib",
        "src/*.{cc,h,gyp}"
      ],
      repository: {
        type: "git",
        url: "git://github.com/lovell/sharp.git"
      },
      keywords: [
        "jpeg",
        "png",
        "webp",
        "avif",
        "tiff",
        "gif",
        "svg",
        "jp2",
        "dzi",
        "image",
        "resize",
        "thumbnail",
        "crop",
        "embed",
        "libvips",
        "vips"
      ],
      dependencies: {
        color: "^4.2.3",
        "detect-libc": "^2.0.3",
        semver: "^7.6.3"
      },
      optionalDependencies: {
        "@img/sharp-darwin-arm64": "0.33.5",
        "@img/sharp-darwin-x64": "0.33.5",
        "@img/sharp-libvips-darwin-arm64": "1.0.4",
        "@img/sharp-libvips-darwin-x64": "1.0.4",
        "@img/sharp-libvips-linux-arm": "1.0.5",
        "@img/sharp-libvips-linux-arm64": "1.0.4",
        "@img/sharp-libvips-linux-s390x": "1.0.4",
        "@img/sharp-libvips-linux-x64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
        "@img/sharp-linux-arm": "0.33.5",
        "@img/sharp-linux-arm64": "0.33.5",
        "@img/sharp-linux-s390x": "0.33.5",
        "@img/sharp-linux-x64": "0.33.5",
        "@img/sharp-linuxmusl-arm64": "0.33.5",
        "@img/sharp-linuxmusl-x64": "0.33.5",
        "@img/sharp-wasm32": "0.33.5",
        "@img/sharp-win32-ia32": "0.33.5",
        "@img/sharp-win32-x64": "0.33.5"
      },
      devDependencies: {
        "@emnapi/runtime": "^1.2.0",
        "@img/sharp-libvips-dev": "1.0.4",
        "@img/sharp-libvips-dev-wasm32": "1.0.5",
        "@img/sharp-libvips-win32-ia32": "1.0.4",
        "@img/sharp-libvips-win32-x64": "1.0.4",
        "@types/node": "*",
        async: "^3.2.5",
        cc: "^3.0.1",
        emnapi: "^1.2.0",
        "exif-reader": "^2.0.1",
        "extract-zip": "^2.0.1",
        icc: "^3.0.0",
        "jsdoc-to-markdown": "^8.0.3",
        "license-checker": "^25.0.1",
        mocha: "^10.7.3",
        "node-addon-api": "^8.1.0",
        nyc: "^17.0.0",
        prebuild: "^13.0.1",
        semistandard: "^17.0.0",
        "tar-fs": "^3.0.6",
        tsd: "^0.31.1"
      },
      license: "Apache-2.0",
      engines: {
        node: "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      config: {
        libvips: ">=8.15.3"
      },
      funding: {
        url: "https://opencollective.com/libvips"
      },
      binary: {
        napi_versions: [
          9
        ]
      },
      semistandard: {
        env: [
          "mocha"
        ]
      },
      cc: {
        linelength: "120",
        filter: [
          "build/include"
        ]
      },
      nyc: {
        include: [
          "lib"
        ]
      },
      tsd: {
        directory: "test/types/"
      }
    };
  }
});

// node_modules/sharp/lib/libvips.js
var require_libvips = __commonJS({
  "node_modules/sharp/lib/libvips.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { spawnSync: spawnSync2 } = require_node_child_process();
    var { createHash } = require_node_crypto();
    var semverCoerce = require_coerce();
    var semverGreaterThanOrEqualTo = require_gte();
    var semverSatisfies = require_satisfies();
    var detectLibc = require_detect_libc();
    var { config: config2, engines, optionalDependencies } = require_package();
    var minimumLibvipsVersionLabelled = process.env.npm_package_config_libvips || /* istanbul ignore next */
    config2.libvips;
    var minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
    var prebuiltPlatforms = [
      "darwin-arm64",
      "darwin-x64",
      "linux-arm",
      "linux-arm64",
      "linux-s390x",
      "linux-x64",
      "linuxmusl-arm64",
      "linuxmusl-x64",
      "win32-ia32",
      "win32-x64"
    ];
    var spawnSyncOptions = {
      encoding: "utf8",
      shell: true
    };
    var log4 = /* @__PURE__ */ __name((item) => {
      if (item instanceof Error) {
        console.error(`sharp: Installation error: ${item.message}`);
      } else {
        console.log(`sharp: ${item}`);
      }
    }, "log");
    var runtimeLibc = /* @__PURE__ */ __name(() => detectLibc.isNonGlibcLinuxSync() ? detectLibc.familySync() : "", "runtimeLibc");
    var runtimePlatformArch = /* @__PURE__ */ __name(() => `${process.platform}${runtimeLibc()}-${process.arch}`, "runtimePlatformArch");
    var buildPlatformArch = /* @__PURE__ */ __name(() => {
      if (isEmscripten()) {
        return "wasm32";
      }
      const { npm_config_arch, npm_config_platform, npm_config_libc } = process.env;
      const libc = typeof npm_config_libc === "string" ? npm_config_libc : runtimeLibc();
      return `${npm_config_platform || process.platform}${libc}-${npm_config_arch || process.arch}`;
    }, "buildPlatformArch");
    var buildSharpLibvipsIncludeDir = /* @__PURE__ */ __name(() => {
      try {
        return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/include`);
      } catch {
        try {
          return __require("@img/sharp-libvips-dev/include");
        } catch {
        }
      }
      return "";
    }, "buildSharpLibvipsIncludeDir");
    var buildSharpLibvipsCPlusPlusDir = /* @__PURE__ */ __name(() => {
      try {
        return __require("@img/sharp-libvips-dev/cplusplus");
      } catch {
      }
      return "";
    }, "buildSharpLibvipsCPlusPlusDir");
    var buildSharpLibvipsLibDir = /* @__PURE__ */ __name(() => {
      try {
        return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/lib`);
      } catch {
        try {
          return __require(`@img/sharp-libvips-${buildPlatformArch()}/lib`);
        } catch {
        }
      }
      return "";
    }, "buildSharpLibvipsLibDir");
    var isUnsupportedNodeRuntime = /* @__PURE__ */ __name(() => {
      if (process.release?.name === "node" && process.versions) {
        if (!semverSatisfies(process.versions.node, engines.node)) {
          return { found: process.versions.node, expected: engines.node };
        }
      }
    }, "isUnsupportedNodeRuntime");
    var isEmscripten = /* @__PURE__ */ __name(() => {
      const { CC } = process.env;
      return Boolean(CC && CC.endsWith("/emcc"));
    }, "isEmscripten");
    var isRosetta = /* @__PURE__ */ __name(() => {
      if (process.platform === "darwin" && process.arch === "x64") {
        const translated = spawnSync2("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
        return (translated || "").trim() === "sysctl.proc_translated: 1";
      }
      return false;
    }, "isRosetta");
    var sha512 = /* @__PURE__ */ __name((s) => createHash("sha512").update(s).digest("hex"), "sha512");
    var yarnLocator = /* @__PURE__ */ __name(() => {
      try {
        const identHash = sha512(`imgsharp-libvips-${buildPlatformArch()}`);
        const npmVersion = semverCoerce(optionalDependencies[`@img/sharp-libvips-${buildPlatformArch()}`]).version;
        return sha512(`${identHash}npm:${npmVersion}`).slice(0, 10);
      } catch {
      }
      return "";
    }, "yarnLocator");
    var spawnRebuild = /* @__PURE__ */ __name(() => spawnSync2(`node-gyp rebuild --directory=src ${isEmscripten() ? "--nodedir=emscripten" : ""}`, {
      ...spawnSyncOptions,
      stdio: "inherit"
    }).status, "spawnRebuild");
    var globalLibvipsVersion = /* @__PURE__ */ __name(() => {
      if (process.platform !== "win32") {
        const globalLibvipsVersion2 = spawnSync2("pkg-config --modversion vips-cpp", {
          ...spawnSyncOptions,
          env: {
            ...process.env,
            PKG_CONFIG_PATH: pkgConfigPath()
          }
        }).stdout;
        return (globalLibvipsVersion2 || "").trim();
      } else {
        return "";
      }
    }, "globalLibvipsVersion");
    var pkgConfigPath = /* @__PURE__ */ __name(() => {
      if (process.platform !== "win32") {
        const brewPkgConfigPath = spawnSync2(
          'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
          spawnSyncOptions
        ).stdout || "";
        return [
          brewPkgConfigPath.trim(),
          process.env.PKG_CONFIG_PATH,
          "/usr/local/lib/pkgconfig",
          "/usr/lib/pkgconfig",
          "/usr/local/libdata/pkgconfig",
          "/usr/libdata/pkgconfig"
        ].filter(Boolean).join(":");
      } else {
        return "";
      }
    }, "pkgConfigPath");
    var skipSearch = /* @__PURE__ */ __name((status, reason, logger) => {
      if (logger) {
        logger(`Detected ${reason}, skipping search for globally-installed libvips`);
      }
      return status;
    }, "skipSearch");
    var useGlobalLibvips = /* @__PURE__ */ __name((logger) => {
      if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(false, "SHARP_IGNORE_GLOBAL_LIBVIPS", logger);
      }
      if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(true, "SHARP_FORCE_GLOBAL_LIBVIPS", logger);
      }
      if (isRosetta()) {
        return skipSearch(false, "Rosetta", logger);
      }
      const globalVipsVersion = globalLibvipsVersion();
      return !!globalVipsVersion && /* istanbul ignore next */
      semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
    }, "useGlobalLibvips");
    module.exports = {
      minimumLibvipsVersion,
      prebuiltPlatforms,
      buildPlatformArch,
      buildSharpLibvipsIncludeDir,
      buildSharpLibvipsCPlusPlusDir,
      buildSharpLibvipsLibDir,
      isUnsupportedNodeRuntime,
      runtimePlatformArch,
      log: log4,
      yarnLocator,
      spawnRebuild,
      globalLibvipsVersion,
      pkgConfigPath,
      useGlobalLibvips
    };
  }
});

// node_modules/sharp/lib/sharp.js
var require_sharp = __commonJS({
  "node_modules/sharp/lib/sharp.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { familySync, versionSync } = require_detect_libc();
    var { runtimePlatformArch, isUnsupportedNodeRuntime, prebuiltPlatforms, minimumLibvipsVersion } = require_libvips();
    var runtimePlatform = runtimePlatformArch();
    var paths = [
      `../src/build/Release/sharp-${runtimePlatform}.node`,
      "../src/build/Release/sharp-wasm32.node",
      `@img/sharp-${runtimePlatform}/sharp.node`,
      "@img/sharp-wasm32/sharp.node"
    ];
    var sharp2;
    var errors = [];
    for (const path of paths) {
      try {
        sharp2 = __require(path);
        break;
      } catch (err) {
        errors.push(err);
      }
    }
    if (sharp2) {
      module.exports = sharp2;
    } else {
      const [isLinux, isMacOs, isWindows] = ["linux", "darwin", "win32"].map((os) => runtimePlatform.startsWith(os));
      const help = [`Could not load the "sharp" module using the ${runtimePlatform} runtime`];
      errors.forEach((err) => {
        if (err.code !== "MODULE_NOT_FOUND") {
          help.push(`${err.code}: ${err.message}`);
        }
      });
      const messages = errors.map((err) => err.message).join(" ");
      help.push("Possible solutions:");
      if (isUnsupportedNodeRuntime()) {
        const { found, expected } = isUnsupportedNodeRuntime();
        help.push(
          "- Please upgrade Node.js:",
          `    Found ${found}`,
          `    Requires ${expected}`
        );
      } else if (prebuiltPlatforms.includes(runtimePlatform)) {
        const [os, cpu] = runtimePlatform.split("-");
        const libc = os.endsWith("musl") ? " --libc=musl" : "";
        help.push(
          "- Ensure optional dependencies can be installed:",
          "    npm install --include=optional sharp",
          "- Ensure your package manager supports multi-platform installation:",
          "    See https://sharp.pixelplumbing.com/install#cross-platform",
          "- Add platform-specific dependencies:",
          `    npm install --os=${os.replace("musl", "")}${libc} --cpu=${cpu} sharp`
        );
      } else {
        help.push(
          `- Manually install libvips >= ${minimumLibvipsVersion}`,
          "- Add experimental WebAssembly-based dependencies:",
          "    npm install --cpu=wasm32 sharp",
          "    npm install @img/sharp-wasm32"
        );
      }
      if (isLinux && /(symbol not found|CXXABI_)/i.test(messages)) {
        try {
          const { config: config2 } = __require(`@img/sharp-libvips-${runtimePlatform}/package`);
          const libcFound = `${familySync()} ${versionSync()}`;
          const libcRequires = `${config2.musl ? "musl" : "glibc"} ${config2.musl || config2.glibc}`;
          help.push(
            "- Update your OS:",
            `    Found ${libcFound}`,
            `    Requires ${libcRequires}`
          );
        } catch (errEngines) {
        }
      }
      if (isLinux && /\/snap\/core[0-9]{2}/.test(messages)) {
        help.push(
          "- Remove the Node.js Snap, which does not support native modules",
          "    snap remove node"
        );
      }
      if (isMacOs && /Incompatible library version/.test(messages)) {
        help.push(
          "- Update Homebrew:",
          "    brew update && brew upgrade vips"
        );
      }
      if (errors.some((err) => err.code === "ERR_DLOPEN_DISABLED")) {
        help.push("- Run Node.js without using the --no-addons flag");
      }
      if (isWindows && /The specified procedure could not be found/.test(messages)) {
        help.push(
          "- Using the canvas package on Windows?",
          "    See https://sharp.pixelplumbing.com/install#canvas-and-windows",
          "- Check for outdated versions of sharp in the dependency tree:",
          "    npm ls sharp"
        );
      }
      help.push(
        "- Consult the installation documentation:",
        "    See https://sharp.pixelplumbing.com/install"
      );
      throw new Error(help.join("\n"));
    }
  }
});

// node_modules/sharp/lib/constructor.js
var require_constructor = __commonJS({
  "node_modules/sharp/lib/constructor.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var util = require_node_util();
    var stream = require_node_stream();
    var is = require_is();
    require_sharp();
    var debuglog = util.debuglog("sharp");
    var Sharp = /* @__PURE__ */ __name(function(input, options) {
      if (arguments.length === 1 && !is.defined(input)) {
        throw new Error("Invalid input");
      }
      if (!(this instanceof Sharp)) {
        return new Sharp(input, options);
      }
      stream.Duplex.call(this);
      this.options = {
        // resize options
        topOffsetPre: -1,
        leftOffsetPre: -1,
        widthPre: -1,
        heightPre: -1,
        topOffsetPost: -1,
        leftOffsetPost: -1,
        widthPost: -1,
        heightPost: -1,
        width: -1,
        height: -1,
        canvas: "crop",
        position: 0,
        resizeBackground: [0, 0, 0, 255],
        useExifOrientation: false,
        angle: 0,
        rotationAngle: 0,
        rotationBackground: [0, 0, 0, 255],
        rotateBeforePreExtract: false,
        flip: false,
        flop: false,
        extendTop: 0,
        extendBottom: 0,
        extendLeft: 0,
        extendRight: 0,
        extendBackground: [0, 0, 0, 255],
        extendWith: "background",
        withoutEnlargement: false,
        withoutReduction: false,
        affineMatrix: [],
        affineBackground: [0, 0, 0, 255],
        affineIdx: 0,
        affineIdy: 0,
        affineOdx: 0,
        affineOdy: 0,
        affineInterpolator: this.constructor.interpolators.bilinear,
        kernel: "lanczos3",
        fastShrinkOnLoad: true,
        // operations
        tint: [-1, 0, 0, 0],
        flatten: false,
        flattenBackground: [0, 0, 0],
        unflatten: false,
        negate: false,
        negateAlpha: true,
        medianSize: 0,
        blurSigma: 0,
        precision: "integer",
        minAmpl: 0.2,
        sharpenSigma: 0,
        sharpenM1: 1,
        sharpenM2: 2,
        sharpenX1: 2,
        sharpenY2: 10,
        sharpenY3: 20,
        threshold: 0,
        thresholdGrayscale: true,
        trimBackground: [],
        trimThreshold: -1,
        trimLineArt: false,
        gamma: 0,
        gammaOut: 0,
        greyscale: false,
        normalise: false,
        normaliseLower: 1,
        normaliseUpper: 99,
        claheWidth: 0,
        claheHeight: 0,
        claheMaxSlope: 3,
        brightness: 1,
        saturation: 1,
        hue: 0,
        lightness: 0,
        booleanBufferIn: null,
        booleanFileIn: "",
        joinChannelIn: [],
        extractChannel: -1,
        removeAlpha: false,
        ensureAlpha: -1,
        colourspace: "srgb",
        colourspacePipeline: "last",
        composite: [],
        // output
        fileOut: "",
        formatOut: "input",
        streamOut: false,
        keepMetadata: 0,
        withMetadataOrientation: -1,
        withMetadataDensity: 0,
        withIccProfile: "",
        withExif: {},
        withExifMerge: true,
        resolveWithObject: false,
        // output format
        jpegQuality: 80,
        jpegProgressive: false,
        jpegChromaSubsampling: "4:2:0",
        jpegTrellisQuantisation: false,
        jpegOvershootDeringing: false,
        jpegOptimiseScans: false,
        jpegOptimiseCoding: true,
        jpegQuantisationTable: 0,
        pngProgressive: false,
        pngCompressionLevel: 6,
        pngAdaptiveFiltering: false,
        pngPalette: false,
        pngQuality: 100,
        pngEffort: 7,
        pngBitdepth: 8,
        pngDither: 1,
        jp2Quality: 80,
        jp2TileHeight: 512,
        jp2TileWidth: 512,
        jp2Lossless: false,
        jp2ChromaSubsampling: "4:4:4",
        webpQuality: 80,
        webpAlphaQuality: 100,
        webpLossless: false,
        webpNearLossless: false,
        webpSmartSubsample: false,
        webpPreset: "default",
        webpEffort: 4,
        webpMinSize: false,
        webpMixed: false,
        gifBitdepth: 8,
        gifEffort: 7,
        gifDither: 1,
        gifInterFrameMaxError: 0,
        gifInterPaletteMaxError: 3,
        gifReuse: true,
        gifProgressive: false,
        tiffQuality: 80,
        tiffCompression: "jpeg",
        tiffPredictor: "horizontal",
        tiffPyramid: false,
        tiffMiniswhite: false,
        tiffBitdepth: 8,
        tiffTile: false,
        tiffTileHeight: 256,
        tiffTileWidth: 256,
        tiffXres: 1,
        tiffYres: 1,
        tiffResolutionUnit: "inch",
        heifQuality: 50,
        heifLossless: false,
        heifCompression: "av1",
        heifEffort: 4,
        heifChromaSubsampling: "4:4:4",
        heifBitdepth: 8,
        jxlDistance: 1,
        jxlDecodingTier: 0,
        jxlEffort: 7,
        jxlLossless: false,
        rawDepth: "uchar",
        tileSize: 256,
        tileOverlap: 0,
        tileContainer: "fs",
        tileLayout: "dz",
        tileFormat: "last",
        tileDepth: "last",
        tileAngle: 0,
        tileSkipBlanks: -1,
        tileBackground: [255, 255, 255, 255],
        tileCentre: false,
        tileId: "https://example.com/iiif",
        tileBasename: "",
        timeoutSeconds: 0,
        linearA: [],
        linearB: [],
        // Function to notify of libvips warnings
        debuglog: /* @__PURE__ */ __name((warning) => {
          this.emit("warning", warning);
          debuglog(warning);
        }, "debuglog"),
        // Function to notify of queue length changes
        queueListener: /* @__PURE__ */ __name(function(queueLength) {
          Sharp.queue.emit("change", queueLength);
        }, "queueListener")
      };
      this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
      return this;
    }, "Sharp");
    Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
    Object.setPrototypeOf(Sharp, stream.Duplex);
    function clone() {
      const clone2 = this.constructor.call();
      const { debuglog: debuglog2, queueListener, ...options } = this.options;
      clone2.options = structuredClone(options);
      clone2.options.debuglog = debuglog2;
      clone2.options.queueListener = queueListener;
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          clone2.options.input.buffer = this.options.input.buffer;
          clone2.emit("finish");
        });
      }
      return clone2;
    }
    __name(clone, "clone");
    Object.assign(Sharp.prototype, { clone });
    module.exports = Sharp;
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = /* @__PURE__ */ __name(function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    }, "isArrayish");
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module.exports = /* @__PURE__ */ __name(function swizzle2(args) {
      var results = [];
      for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    }, "swizzle");
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          var i2 = i * 2;
          rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r2 = Math.round(rgba[0] / 255 * 100);
      var g = Math.round(rgba[1] / 255 * 100);
      var b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g + "%, " + b + "%)" : "rgba(" + r2 + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    __name(clamp, "clamp");
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
    __name(hexDouble, "hexDouble");
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r2, g, b);
      const max = Math.max(r2, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r2 === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r2) / delta;
      } else if (b === max) {
        h = 4 + (r2 - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r2, g, b);
      const diff = v - Math.min(r2, g, b);
      const diffc = /* @__PURE__ */ __name(function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      }, "diffc");
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r2);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r2 === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r2 = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r2, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r2, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r2, 1 - g, 1 - b);
      const c = (1 - r2 - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    __name(comparativeDistance, "comparativeDistance");
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r2 = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r2 * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r2 * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r2 * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r2;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r2 = v;
          g = n;
          b = wh;
          break;
        case 1:
          r2 = n;
          g = v;
          b = wh;
          break;
        case 2:
          r2 = wh;
          g = v;
          b = n;
          break;
        case 3:
          r2 = wh;
          g = n;
          b = v;
          break;
        case 4:
          r2 = n;
          g = wh;
          b = v;
          break;
        case 5:
          r2 = v;
          g = wh;
          b = n;
          break;
      }
      return [r2 * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r2 = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r2 * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r2;
      let g;
      let b;
      r2 = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r2 = r2 > 31308e-7 ? 1.055 * r2 ** (1 / 2.4) - 0.055 : r2 * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r2 = Math.min(Math.max(0, r2), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r2 * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r2, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r2 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r2 = args[0];
      const g = args[1];
      const b = args[2];
      if (r2 === g && g === b) {
        if (r2 < 8) {
          return 16;
        }
        if (r2 > 248) {
          return 231;
        }
        return Math.round((r2 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r2 / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r2 = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r2, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r2 = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r2, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r2 = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r2, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r2, g), b);
      const min = Math.min(Math.min(r2, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r2) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r2) / chroma;
      } else {
        hue = 4 + (r2 - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    __name(buildGraph, "buildGraph");
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    __name(deriveBFS, "deriveBFS");
    function link3(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    __name(link3, "link");
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link3(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    __name(wrapConversion, "wrapConversion");
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRaw, "wrapRaw");
    function wrapRounded(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRounded, "wrapRounded");
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color(object, model) {
      if (!(this instanceof Color)) {
        return new Color(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i = 0; i < channels; i++) {
          const limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    __name(Color, "Color");
    Color.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to[self.model](args);
      },
      percentString(places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color(this);
        }
        if (args.length > 0) {
          return new Color(args, model);
        }
        return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") {
          color = zeroArray(args, channels);
        }
        return new Color(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    __name(roundTo, "roundTo");
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    __name(roundToPlace, "roundToPlace");
    function getset(model, channel2, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] || (limiters[m] = []))[channel2] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel2] = value;
          return result;
        }
        result = this[model]().color[channel2];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    __name(getset, "getset");
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    __name(maxfn, "maxfn");
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    __name(assertArray, "assertArray");
    function zeroArray(array, length) {
      for (let i = 0; i < length; i++) {
        if (typeof array[i] !== "number") {
          array[i] = 0;
        }
      }
      return array;
    }
    __name(zeroArray, "zeroArray");
    module.exports = Color;
  }
});

// node_modules/sharp/lib/input.js
var require_input = __commonJS({
  "node_modules/sharp/lib/input.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var color = require_color();
    var is = require_is();
    var sharp2 = require_sharp();
    var align = {
      left: "low",
      center: "centre",
      centre: "centre",
      right: "high"
    };
    function _inputOptionsFromObject(obj) {
      const { raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page: page21, pages, subifd } = obj;
      return [raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page21, pages, subifd].some(is.defined) ? { raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page: page21, pages, subifd } : void 0;
    }
    __name(_inputOptionsFromObject, "_inputOptionsFromObject");
    function _createInputDescriptor(input, inputOptions, containerOptions) {
      const inputDescriptor = {
        failOn: "warning",
        limitInputPixels: Math.pow(16383, 2),
        ignoreIcc: false,
        unlimited: false,
        sequentialRead: true
      };
      if (is.string(input)) {
        inputDescriptor.file = input;
      } else if (is.buffer(input)) {
        if (input.length === 0) {
          throw Error("Input Buffer is empty");
        }
        inputDescriptor.buffer = input;
      } else if (is.arrayBuffer(input)) {
        if (input.byteLength === 0) {
          throw Error("Input bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input, 0, input.byteLength);
      } else if (is.typedArray(input)) {
        if (input.length === 0) {
          throw Error("Input Bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
      } else if (is.plainObject(input) && !is.defined(inputOptions)) {
        inputOptions = input;
        if (_inputOptionsFromObject(inputOptions)) {
          inputDescriptor.buffer = [];
        }
      } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) {
        inputDescriptor.buffer = [];
      } else {
        throw new Error(`Unsupported input '${input}' of type ${typeof input}${is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
      }
      if (is.object(inputOptions)) {
        if (is.defined(inputOptions.failOnError)) {
          if (is.bool(inputOptions.failOnError)) {
            inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
          } else {
            throw is.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
          }
        }
        if (is.defined(inputOptions.failOn)) {
          if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
            inputDescriptor.failOn = inputOptions.failOn;
          } else {
            throw is.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
          }
        }
        if (is.defined(inputOptions.density)) {
          if (is.inRange(inputOptions.density, 1, 1e5)) {
            inputDescriptor.density = inputOptions.density;
          } else {
            throw is.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
          }
        }
        if (is.defined(inputOptions.ignoreIcc)) {
          if (is.bool(inputOptions.ignoreIcc)) {
            inputDescriptor.ignoreIcc = inputOptions.ignoreIcc;
          } else {
            throw is.invalidParameterError("ignoreIcc", "boolean", inputOptions.ignoreIcc);
          }
        }
        if (is.defined(inputOptions.limitInputPixels)) {
          if (is.bool(inputOptions.limitInputPixels)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? Math.pow(16383, 2) : 0;
          } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
          } else {
            throw is.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
          }
        }
        if (is.defined(inputOptions.unlimited)) {
          if (is.bool(inputOptions.unlimited)) {
            inputDescriptor.unlimited = inputOptions.unlimited;
          } else {
            throw is.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
          }
        }
        if (is.defined(inputOptions.sequentialRead)) {
          if (is.bool(inputOptions.sequentialRead)) {
            inputDescriptor.sequentialRead = inputOptions.sequentialRead;
          } else {
            throw is.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
          }
        }
        if (is.defined(inputOptions.raw)) {
          if (is.object(inputOptions.raw) && is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4)) {
            inputDescriptor.rawWidth = inputOptions.raw.width;
            inputDescriptor.rawHeight = inputOptions.raw.height;
            inputDescriptor.rawChannels = inputOptions.raw.channels;
            inputDescriptor.rawPremultiplied = !!inputOptions.raw.premultiplied;
            switch (input.constructor) {
              case Uint8Array:
              case Uint8ClampedArray:
                inputDescriptor.rawDepth = "uchar";
                break;
              case Int8Array:
                inputDescriptor.rawDepth = "char";
                break;
              case Uint16Array:
                inputDescriptor.rawDepth = "ushort";
                break;
              case Int16Array:
                inputDescriptor.rawDepth = "short";
                break;
              case Uint32Array:
                inputDescriptor.rawDepth = "uint";
                break;
              case Int32Array:
                inputDescriptor.rawDepth = "int";
                break;
              case Float32Array:
                inputDescriptor.rawDepth = "float";
                break;
              case Float64Array:
                inputDescriptor.rawDepth = "double";
                break;
              default:
                inputDescriptor.rawDepth = "uchar";
                break;
            }
          } else {
            throw new Error("Expected width, height and channels for raw pixel input");
          }
        }
        if (is.defined(inputOptions.animated)) {
          if (is.bool(inputOptions.animated)) {
            inputDescriptor.pages = inputOptions.animated ? -1 : 1;
          } else {
            throw is.invalidParameterError("animated", "boolean", inputOptions.animated);
          }
        }
        if (is.defined(inputOptions.pages)) {
          if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 1e5)) {
            inputDescriptor.pages = inputOptions.pages;
          } else {
            throw is.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
          }
        }
        if (is.defined(inputOptions.page)) {
          if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 1e5)) {
            inputDescriptor.page = inputOptions.page;
          } else {
            throw is.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
          }
        }
        if (is.defined(inputOptions.level)) {
          if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) {
            inputDescriptor.level = inputOptions.level;
          } else {
            throw is.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
          }
        }
        if (is.defined(inputOptions.subifd)) {
          if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 1e5)) {
            inputDescriptor.subifd = inputOptions.subifd;
          } else {
            throw is.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
          }
        }
        if (is.defined(inputOptions.create)) {
          if (is.object(inputOptions.create) && is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is.integer(inputOptions.create.channels)) {
            inputDescriptor.createWidth = inputOptions.create.width;
            inputDescriptor.createHeight = inputOptions.create.height;
            inputDescriptor.createChannels = inputOptions.create.channels;
            if (is.defined(inputOptions.create.noise)) {
              if (!is.object(inputOptions.create.noise)) {
                throw new Error("Expected noise to be an object");
              }
              if (!is.inArray(inputOptions.create.noise.type, ["gaussian"])) {
                throw new Error("Only gaussian noise is supported at the moment");
              }
              if (!is.inRange(inputOptions.create.channels, 1, 4)) {
                throw is.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createNoiseType = inputOptions.create.noise.type;
              if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
                inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
              } else {
                throw is.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
              }
              if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
                inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
              } else {
                throw is.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
              }
            } else if (is.defined(inputOptions.create.background)) {
              if (!is.inRange(inputOptions.create.channels, 3, 4)) {
                throw is.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
              }
              const background = color(inputOptions.create.background);
              inputDescriptor.createBackground = [
                background.red(),
                background.green(),
                background.blue(),
                Math.round(background.alpha() * 255)
              ];
            } else {
              throw new Error("Expected valid noise or background to create a new input image");
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected valid width, height and channels to create a new input image");
          }
        }
        if (is.defined(inputOptions.text)) {
          if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) {
            inputDescriptor.textValue = inputOptions.text.text;
            if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) {
              throw new Error("Expected only one of dpi or height");
            }
            if (is.defined(inputOptions.text.font)) {
              if (is.string(inputOptions.text.font)) {
                inputDescriptor.textFont = inputOptions.text.font;
              } else {
                throw is.invalidParameterError("text.font", "string", inputOptions.text.font);
              }
            }
            if (is.defined(inputOptions.text.fontfile)) {
              if (is.string(inputOptions.text.fontfile)) {
                inputDescriptor.textFontfile = inputOptions.text.fontfile;
              } else {
                throw is.invalidParameterError("text.fontfile", "string", inputOptions.text.fontfile);
              }
            }
            if (is.defined(inputOptions.text.width)) {
              if (is.integer(inputOptions.text.width) && inputOptions.text.width > 0) {
                inputDescriptor.textWidth = inputOptions.text.width;
              } else {
                throw is.invalidParameterError("text.width", "positive integer", inputOptions.text.width);
              }
            }
            if (is.defined(inputOptions.text.height)) {
              if (is.integer(inputOptions.text.height) && inputOptions.text.height > 0) {
                inputDescriptor.textHeight = inputOptions.text.height;
              } else {
                throw is.invalidParameterError("text.height", "positive integer", inputOptions.text.height);
              }
            }
            if (is.defined(inputOptions.text.align)) {
              if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) {
                inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align];
              } else {
                throw is.invalidParameterError("text.align", "valid alignment", inputOptions.text.align);
              }
            }
            if (is.defined(inputOptions.text.justify)) {
              if (is.bool(inputOptions.text.justify)) {
                inputDescriptor.textJustify = inputOptions.text.justify;
              } else {
                throw is.invalidParameterError("text.justify", "boolean", inputOptions.text.justify);
              }
            }
            if (is.defined(inputOptions.text.dpi)) {
              if (is.integer(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 1e6)) {
                inputDescriptor.textDpi = inputOptions.text.dpi;
              } else {
                throw is.invalidParameterError("text.dpi", "integer between 1 and 1000000", inputOptions.text.dpi);
              }
            }
            if (is.defined(inputOptions.text.rgba)) {
              if (is.bool(inputOptions.text.rgba)) {
                inputDescriptor.textRgba = inputOptions.text.rgba;
              } else {
                throw is.invalidParameterError("text.rgba", "bool", inputOptions.text.rgba);
              }
            }
            if (is.defined(inputOptions.text.spacing)) {
              if (is.integer(inputOptions.text.spacing) && is.inRange(inputOptions.text.spacing, -1e6, 1e6)) {
                inputDescriptor.textSpacing = inputOptions.text.spacing;
              } else {
                throw is.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", inputOptions.text.spacing);
              }
            }
            if (is.defined(inputOptions.text.wrap)) {
              if (is.string(inputOptions.text.wrap) && is.inArray(inputOptions.text.wrap, ["word", "char", "word-char", "none"])) {
                inputDescriptor.textWrap = inputOptions.text.wrap;
              } else {
                throw is.invalidParameterError("text.wrap", "one of: word, char, word-char, none", inputOptions.text.wrap);
              }
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected a valid string to create an image with text.");
          }
        }
      } else if (is.defined(inputOptions)) {
        throw new Error("Invalid input options " + inputOptions);
      }
      return inputDescriptor;
    }
    __name(_createInputDescriptor, "_createInputDescriptor");
    function _write(chunk, encoding, callback) {
      if (Array.isArray(this.options.input.buffer)) {
        if (is.buffer(chunk)) {
          if (this.options.input.buffer.length === 0) {
            this.on("finish", () => {
              this.streamInFinished = true;
            });
          }
          this.options.input.buffer.push(chunk);
          callback();
        } else {
          callback(new Error("Non-Buffer data on Writable Stream"));
        }
      } else {
        callback(new Error("Unexpected data on Writable Stream"));
      }
    }
    __name(_write, "_write");
    function _flattenBufferIn() {
      if (this._isStreamInput()) {
        this.options.input.buffer = Buffer.concat(this.options.input.buffer);
      }
    }
    __name(_flattenBufferIn, "_flattenBufferIn");
    function _isStreamInput() {
      return Array.isArray(this.options.input.buffer);
    }
    __name(_isStreamInput, "_isStreamInput");
    function metadata(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.metadata(this.options, (err, metadata2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, metadata2);
              }
            });
          });
        } else {
          sharp2.metadata(this.options, (err, metadata2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, metadata2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            const finished = /* @__PURE__ */ __name(() => {
              this._flattenBufferIn();
              sharp2.metadata(this.options, (err, metadata2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(metadata2);
                }
              });
            }, "finished");
            if (this.writableFinished) {
              finished();
            } else {
              this.once("finish", finished);
            }
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.metadata(this.options, (err, metadata2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(metadata2);
              }
            });
          });
        }
      }
    }
    __name(metadata, "metadata");
    function stats(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.stats(this.options, (err, stats2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, stats2);
              }
            });
          });
        } else {
          sharp2.stats(this.options, (err, stats2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, stats2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.on("finish", function() {
              this._flattenBufferIn();
              sharp2.stats(this.options, (err, stats2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(stats2);
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.stats(this.options, (err, stats2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(stats2);
              }
            });
          });
        }
      }
    }
    __name(stats, "stats");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Private
        _inputOptionsFromObject,
        _createInputDescriptor,
        _write,
        _flattenBufferIn,
        _isStreamInput,
        // Public
        metadata,
        stats
      });
      Sharp.align = align;
    };
  }
});

// node_modules/sharp/lib/resize.js
var require_resize = __commonJS({
  "node_modules/sharp/lib/resize.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var gravity = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    };
    var position = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    };
    var extendWith = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    };
    var strategy = {
      entropy: 16,
      attention: 17
    };
    var kernel = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3"
    };
    var fit = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    };
    var mapFitToCanvas = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };
    function isRotationExpected(options) {
      return options.angle % 360 !== 0 || options.useExifOrientation === true || options.rotationAngle !== 0;
    }
    __name(isRotationExpected, "isRotationExpected");
    function isResizeExpected(options) {
      return options.width !== -1 || options.height !== -1;
    }
    __name(isResizeExpected, "isResizeExpected");
    function resize(widthOrOptions, height, options) {
      if (isResizeExpected(this.options)) {
        this.options.debuglog("ignoring previous resize options");
      }
      if (this.options.widthPost !== -1) {
        this.options.debuglog("operation order will be: extract, resize, extract");
      }
      if (is.defined(widthOrOptions)) {
        if (is.object(widthOrOptions) && !is.defined(options)) {
          options = widthOrOptions;
        } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
          this.options.width = widthOrOptions;
        } else {
          throw is.invalidParameterError("width", "positive integer", widthOrOptions);
        }
      } else {
        this.options.width = -1;
      }
      if (is.defined(height)) {
        if (is.integer(height) && height > 0) {
          this.options.height = height;
        } else {
          throw is.invalidParameterError("height", "positive integer", height);
        }
      } else {
        this.options.height = -1;
      }
      if (is.object(options)) {
        if (is.defined(options.width)) {
          if (is.integer(options.width) && options.width > 0) {
            this.options.width = options.width;
          } else {
            throw is.invalidParameterError("width", "positive integer", options.width);
          }
        }
        if (is.defined(options.height)) {
          if (is.integer(options.height) && options.height > 0) {
            this.options.height = options.height;
          } else {
            throw is.invalidParameterError("height", "positive integer", options.height);
          }
        }
        if (is.defined(options.fit)) {
          const canvas = mapFitToCanvas[options.fit];
          if (is.string(canvas)) {
            this.options.canvas = canvas;
          } else {
            throw is.invalidParameterError("fit", "valid fit", options.fit);
          }
        }
        if (is.defined(options.position)) {
          const pos = is.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
          if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
            this.options.position = pos;
          } else {
            throw is.invalidParameterError("position", "valid position/gravity/strategy", options.position);
          }
        }
        this._setBackgroundColourOption("resizeBackground", options.background);
        if (is.defined(options.kernel)) {
          if (is.string(kernel[options.kernel])) {
            this.options.kernel = kernel[options.kernel];
          } else {
            throw is.invalidParameterError("kernel", "valid kernel name", options.kernel);
          }
        }
        if (is.defined(options.withoutEnlargement)) {
          this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
        }
        if (is.defined(options.withoutReduction)) {
          this._setBooleanOption("withoutReduction", options.withoutReduction);
        }
        if (is.defined(options.fastShrinkOnLoad)) {
          this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
        }
      }
      if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
        this.options.rotateBeforePreExtract = true;
      }
      return this;
    }
    __name(resize, "resize");
    function extend(extend2) {
      if (is.integer(extend2) && extend2 > 0) {
        this.options.extendTop = extend2;
        this.options.extendBottom = extend2;
        this.options.extendLeft = extend2;
        this.options.extendRight = extend2;
      } else if (is.object(extend2)) {
        if (is.defined(extend2.top)) {
          if (is.integer(extend2.top) && extend2.top >= 0) {
            this.options.extendTop = extend2.top;
          } else {
            throw is.invalidParameterError("top", "positive integer", extend2.top);
          }
        }
        if (is.defined(extend2.bottom)) {
          if (is.integer(extend2.bottom) && extend2.bottom >= 0) {
            this.options.extendBottom = extend2.bottom;
          } else {
            throw is.invalidParameterError("bottom", "positive integer", extend2.bottom);
          }
        }
        if (is.defined(extend2.left)) {
          if (is.integer(extend2.left) && extend2.left >= 0) {
            this.options.extendLeft = extend2.left;
          } else {
            throw is.invalidParameterError("left", "positive integer", extend2.left);
          }
        }
        if (is.defined(extend2.right)) {
          if (is.integer(extend2.right) && extend2.right >= 0) {
            this.options.extendRight = extend2.right;
          } else {
            throw is.invalidParameterError("right", "positive integer", extend2.right);
          }
        }
        this._setBackgroundColourOption("extendBackground", extend2.background);
        if (is.defined(extend2.extendWith)) {
          if (is.string(extendWith[extend2.extendWith])) {
            this.options.extendWith = extendWith[extend2.extendWith];
          } else {
            throw is.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", extend2.extendWith);
          }
        }
      } else {
        throw is.invalidParameterError("extend", "integer or object", extend2);
      }
      return this;
    }
    __name(extend, "extend");
    function extract(options) {
      const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
      if (this.options[`width${suffix}`] !== -1) {
        this.options.debuglog("ignoring previous extract options");
      }
      ["left", "top", "width", "height"].forEach(function(name) {
        const value = options[name];
        if (is.integer(value) && value >= 0) {
          this.options[name + (name === "left" || name === "top" ? "Offset" : "") + suffix] = value;
        } else {
          throw is.invalidParameterError(name, "integer", value);
        }
      }, this);
      if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
        if (this.options.widthPre === -1 || this.options.widthPost === -1) {
          this.options.rotateBeforePreExtract = true;
        }
      }
      return this;
    }
    __name(extract, "extract");
    function trim(options) {
      this.options.trimThreshold = 10;
      if (is.defined(options)) {
        if (is.object(options)) {
          if (is.defined(options.background)) {
            this._setBackgroundColourOption("trimBackground", options.background);
          }
          if (is.defined(options.threshold)) {
            if (is.number(options.threshold) && options.threshold >= 0) {
              this.options.trimThreshold = options.threshold;
            } else {
              throw is.invalidParameterError("threshold", "positive number", options.threshold);
            }
          }
          if (is.defined(options.lineArt)) {
            this._setBooleanOption("trimLineArt", options.lineArt);
          }
        } else {
          throw is.invalidParameterError("trim", "object", options);
        }
      }
      if (isRotationExpected(this.options)) {
        this.options.rotateBeforePreExtract = true;
      }
      return this;
    }
    __name(trim, "trim");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        resize,
        extend,
        extract,
        trim
      });
      Sharp.gravity = gravity;
      Sharp.strategy = strategy;
      Sharp.kernel = kernel;
      Sharp.fit = fit;
      Sharp.position = position;
    };
  }
});

// node_modules/sharp/lib/composite.js
var require_composite = __commonJS({
  "node_modules/sharp/lib/composite.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var blend = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };
    function composite(images) {
      if (!Array.isArray(images)) {
        throw is.invalidParameterError("images to composite", "array", images);
      }
      this.options.composite = images.map((image) => {
        if (!is.object(image)) {
          throw is.invalidParameterError("image to composite", "object", image);
        }
        const inputOptions = this._inputOptionsFromObject(image);
        const composite2 = {
          input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
          blend: "over",
          tile: false,
          left: 0,
          top: 0,
          hasOffset: false,
          gravity: 0,
          premultiplied: false
        };
        if (is.defined(image.blend)) {
          if (is.string(blend[image.blend])) {
            composite2.blend = blend[image.blend];
          } else {
            throw is.invalidParameterError("blend", "valid blend name", image.blend);
          }
        }
        if (is.defined(image.tile)) {
          if (is.bool(image.tile)) {
            composite2.tile = image.tile;
          } else {
            throw is.invalidParameterError("tile", "boolean", image.tile);
          }
        }
        if (is.defined(image.left)) {
          if (is.integer(image.left)) {
            composite2.left = image.left;
          } else {
            throw is.invalidParameterError("left", "integer", image.left);
          }
        }
        if (is.defined(image.top)) {
          if (is.integer(image.top)) {
            composite2.top = image.top;
          } else {
            throw is.invalidParameterError("top", "integer", image.top);
          }
        }
        if (is.defined(image.top) !== is.defined(image.left)) {
          throw new Error("Expected both left and top to be set");
        } else {
          composite2.hasOffset = is.integer(image.top) && is.integer(image.left);
        }
        if (is.defined(image.gravity)) {
          if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
            composite2.gravity = image.gravity;
          } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
            composite2.gravity = this.constructor.gravity[image.gravity];
          } else {
            throw is.invalidParameterError("gravity", "valid gravity", image.gravity);
          }
        }
        if (is.defined(image.premultiplied)) {
          if (is.bool(image.premultiplied)) {
            composite2.premultiplied = image.premultiplied;
          } else {
            throw is.invalidParameterError("premultiplied", "boolean", image.premultiplied);
          }
        }
        return composite2;
      });
      return this;
    }
    __name(composite, "composite");
    module.exports = function(Sharp) {
      Sharp.prototype.composite = composite;
      Sharp.blend = blend;
    };
  }
});

// node_modules/sharp/lib/operation.js
var require_operation = __commonJS({
  "node_modules/sharp/lib/operation.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var color = require_color();
    var is = require_is();
    var vipsPrecision = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };
    function rotate(angle, options) {
      if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) {
        this.options.debuglog("ignoring previous rotate options");
      }
      if (!is.defined(angle)) {
        this.options.useExifOrientation = true;
      } else if (is.integer(angle) && !(angle % 90)) {
        this.options.angle = angle;
      } else if (is.number(angle)) {
        this.options.rotationAngle = angle;
        if (is.object(options) && options.background) {
          const backgroundColour = color(options.background);
          this.options.rotationBackground = [
            backgroundColour.red(),
            backgroundColour.green(),
            backgroundColour.blue(),
            Math.round(backgroundColour.alpha() * 255)
          ];
        }
      } else {
        throw is.invalidParameterError("angle", "numeric", angle);
      }
      return this;
    }
    __name(rotate, "rotate");
    function flip(flip2) {
      this.options.flip = is.bool(flip2) ? flip2 : true;
      return this;
    }
    __name(flip, "flip");
    function flop(flop2) {
      this.options.flop = is.bool(flop2) ? flop2 : true;
      return this;
    }
    __name(flop, "flop");
    function affine(matrix, options) {
      const flatMatrix = [].concat(...matrix);
      if (flatMatrix.length === 4 && flatMatrix.every(is.number)) {
        this.options.affineMatrix = flatMatrix;
      } else {
        throw is.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
      }
      if (is.defined(options)) {
        if (is.object(options)) {
          this._setBackgroundColourOption("affineBackground", options.background);
          if (is.defined(options.idx)) {
            if (is.number(options.idx)) {
              this.options.affineIdx = options.idx;
            } else {
              throw is.invalidParameterError("options.idx", "number", options.idx);
            }
          }
          if (is.defined(options.idy)) {
            if (is.number(options.idy)) {
              this.options.affineIdy = options.idy;
            } else {
              throw is.invalidParameterError("options.idy", "number", options.idy);
            }
          }
          if (is.defined(options.odx)) {
            if (is.number(options.odx)) {
              this.options.affineOdx = options.odx;
            } else {
              throw is.invalidParameterError("options.odx", "number", options.odx);
            }
          }
          if (is.defined(options.ody)) {
            if (is.number(options.ody)) {
              this.options.affineOdy = options.ody;
            } else {
              throw is.invalidParameterError("options.ody", "number", options.ody);
            }
          }
          if (is.defined(options.interpolator)) {
            if (is.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
              this.options.affineInterpolator = options.interpolator;
            } else {
              throw is.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
            }
          }
        } else {
          throw is.invalidParameterError("options", "object", options);
        }
      }
      return this;
    }
    __name(affine, "affine");
    function sharpen(options, flat, jagged) {
      if (!is.defined(options)) {
        this.options.sharpenSigma = -1;
      } else if (is.bool(options)) {
        this.options.sharpenSigma = options ? -1 : 0;
      } else if (is.number(options) && is.inRange(options, 0.01, 1e4)) {
        this.options.sharpenSigma = options;
        if (is.defined(flat)) {
          if (is.number(flat) && is.inRange(flat, 0, 1e4)) {
            this.options.sharpenM1 = flat;
          } else {
            throw is.invalidParameterError("flat", "number between 0 and 10000", flat);
          }
        }
        if (is.defined(jagged)) {
          if (is.number(jagged) && is.inRange(jagged, 0, 1e4)) {
            this.options.sharpenM2 = jagged;
          } else {
            throw is.invalidParameterError("jagged", "number between 0 and 10000", jagged);
          }
        }
      } else if (is.plainObject(options)) {
        if (is.number(options.sigma) && is.inRange(options.sigma, 1e-6, 10)) {
          this.options.sharpenSigma = options.sigma;
        } else {
          throw is.invalidParameterError("options.sigma", "number between 0.000001 and 10", options.sigma);
        }
        if (is.defined(options.m1)) {
          if (is.number(options.m1) && is.inRange(options.m1, 0, 1e6)) {
            this.options.sharpenM1 = options.m1;
          } else {
            throw is.invalidParameterError("options.m1", "number between 0 and 1000000", options.m1);
          }
        }
        if (is.defined(options.m2)) {
          if (is.number(options.m2) && is.inRange(options.m2, 0, 1e6)) {
            this.options.sharpenM2 = options.m2;
          } else {
            throw is.invalidParameterError("options.m2", "number between 0 and 1000000", options.m2);
          }
        }
        if (is.defined(options.x1)) {
          if (is.number(options.x1) && is.inRange(options.x1, 0, 1e6)) {
            this.options.sharpenX1 = options.x1;
          } else {
            throw is.invalidParameterError("options.x1", "number between 0 and 1000000", options.x1);
          }
        }
        if (is.defined(options.y2)) {
          if (is.number(options.y2) && is.inRange(options.y2, 0, 1e6)) {
            this.options.sharpenY2 = options.y2;
          } else {
            throw is.invalidParameterError("options.y2", "number between 0 and 1000000", options.y2);
          }
        }
        if (is.defined(options.y3)) {
          if (is.number(options.y3) && is.inRange(options.y3, 0, 1e6)) {
            this.options.sharpenY3 = options.y3;
          } else {
            throw is.invalidParameterError("options.y3", "number between 0 and 1000000", options.y3);
          }
        }
      } else {
        throw is.invalidParameterError("sigma", "number between 0.01 and 10000", options);
      }
      return this;
    }
    __name(sharpen, "sharpen");
    function median(size) {
      if (!is.defined(size)) {
        this.options.medianSize = 3;
      } else if (is.integer(size) && is.inRange(size, 1, 1e3)) {
        this.options.medianSize = size;
      } else {
        throw is.invalidParameterError("size", "integer between 1 and 1000", size);
      }
      return this;
    }
    __name(median, "median");
    function blur(options) {
      let sigma;
      if (is.number(options)) {
        sigma = options;
      } else if (is.plainObject(options)) {
        if (!is.number(options.sigma)) {
          throw is.invalidParameterError("options.sigma", "number between 0.3 and 1000", sigma);
        }
        sigma = options.sigma;
        if ("precision" in options) {
          if (is.string(vipsPrecision[options.precision])) {
            this.options.precision = vipsPrecision[options.precision];
          } else {
            throw is.invalidParameterError("precision", "one of: integer, float, approximate", options.precision);
          }
        }
        if ("minAmplitude" in options) {
          if (is.number(options.minAmplitude) && is.inRange(options.minAmplitude, 1e-3, 1)) {
            this.options.minAmpl = options.minAmplitude;
          } else {
            throw is.invalidParameterError("minAmplitude", "number between 0.001 and 1", options.minAmplitude);
          }
        }
      }
      if (!is.defined(options)) {
        this.options.blurSigma = -1;
      } else if (is.bool(options)) {
        this.options.blurSigma = options ? -1 : 0;
      } else if (is.number(sigma) && is.inRange(sigma, 0.3, 1e3)) {
        this.options.blurSigma = sigma;
      } else {
        throw is.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
      }
      return this;
    }
    __name(blur, "blur");
    function flatten(options) {
      this.options.flatten = is.bool(options) ? options : true;
      if (is.object(options)) {
        this._setBackgroundColourOption("flattenBackground", options.background);
      }
      return this;
    }
    __name(flatten, "flatten");
    function unflatten3() {
      this.options.unflatten = true;
      return this;
    }
    __name(unflatten3, "unflatten");
    function gamma(gamma2, gammaOut) {
      if (!is.defined(gamma2)) {
        this.options.gamma = 2.2;
      } else if (is.number(gamma2) && is.inRange(gamma2, 1, 3)) {
        this.options.gamma = gamma2;
      } else {
        throw is.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
      }
      if (!is.defined(gammaOut)) {
        this.options.gammaOut = this.options.gamma;
      } else if (is.number(gammaOut) && is.inRange(gammaOut, 1, 3)) {
        this.options.gammaOut = gammaOut;
      } else {
        throw is.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
      }
      return this;
    }
    __name(gamma, "gamma");
    function negate(options) {
      this.options.negate = is.bool(options) ? options : true;
      if (is.plainObject(options) && "alpha" in options) {
        if (!is.bool(options.alpha)) {
          throw is.invalidParameterError("alpha", "should be boolean value", options.alpha);
        } else {
          this.options.negateAlpha = options.alpha;
        }
      }
      return this;
    }
    __name(negate, "negate");
    function normalise(options) {
      if (is.plainObject(options)) {
        if (is.defined(options.lower)) {
          if (is.number(options.lower) && is.inRange(options.lower, 0, 99)) {
            this.options.normaliseLower = options.lower;
          } else {
            throw is.invalidParameterError("lower", "number between 0 and 99", options.lower);
          }
        }
        if (is.defined(options.upper)) {
          if (is.number(options.upper) && is.inRange(options.upper, 1, 100)) {
            this.options.normaliseUpper = options.upper;
          } else {
            throw is.invalidParameterError("upper", "number between 1 and 100", options.upper);
          }
        }
      }
      if (this.options.normaliseLower >= this.options.normaliseUpper) {
        throw is.invalidParameterError(
          "range",
          "lower to be less than upper",
          `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`
        );
      }
      this.options.normalise = true;
      return this;
    }
    __name(normalise, "normalise");
    function normalize(options) {
      return this.normalise(options);
    }
    __name(normalize, "normalize");
    function clahe(options) {
      if (is.plainObject(options)) {
        if (is.integer(options.width) && options.width > 0) {
          this.options.claheWidth = options.width;
        } else {
          throw is.invalidParameterError("width", "integer greater than zero", options.width);
        }
        if (is.integer(options.height) && options.height > 0) {
          this.options.claheHeight = options.height;
        } else {
          throw is.invalidParameterError("height", "integer greater than zero", options.height);
        }
        if (is.defined(options.maxSlope)) {
          if (is.integer(options.maxSlope) && is.inRange(options.maxSlope, 0, 100)) {
            this.options.claheMaxSlope = options.maxSlope;
          } else {
            throw is.invalidParameterError("maxSlope", "integer between 0 and 100", options.maxSlope);
          }
        }
      } else {
        throw is.invalidParameterError("options", "plain object", options);
      }
      return this;
    }
    __name(clahe, "clahe");
    function convolve(kernel) {
      if (!is.object(kernel) || !Array.isArray(kernel.kernel) || !is.integer(kernel.width) || !is.integer(kernel.height) || !is.inRange(kernel.width, 3, 1001) || !is.inRange(kernel.height, 3, 1001) || kernel.height * kernel.width !== kernel.kernel.length) {
        throw new Error("Invalid convolution kernel");
      }
      if (!is.integer(kernel.scale)) {
        kernel.scale = kernel.kernel.reduce(function(a, b) {
          return a + b;
        }, 0);
      }
      if (kernel.scale < 1) {
        kernel.scale = 1;
      }
      if (!is.integer(kernel.offset)) {
        kernel.offset = 0;
      }
      this.options.convKernel = kernel;
      return this;
    }
    __name(convolve, "convolve");
    function threshold(threshold2, options) {
      if (!is.defined(threshold2)) {
        this.options.threshold = 128;
      } else if (is.bool(threshold2)) {
        this.options.threshold = threshold2 ? 128 : 0;
      } else if (is.integer(threshold2) && is.inRange(threshold2, 0, 255)) {
        this.options.threshold = threshold2;
      } else {
        throw is.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
      }
      if (!is.object(options) || options.greyscale === true || options.grayscale === true) {
        this.options.thresholdGrayscale = true;
      } else {
        this.options.thresholdGrayscale = false;
      }
      return this;
    }
    __name(threshold, "threshold");
    function boolean(operand, operator, options) {
      this.options.boolean = this._createInputDescriptor(operand, options);
      if (is.string(operator) && is.inArray(operator, ["and", "or", "eor"])) {
        this.options.booleanOp = operator;
      } else {
        throw is.invalidParameterError("operator", "one of: and, or, eor", operator);
      }
      return this;
    }
    __name(boolean, "boolean");
    function linear(a, b) {
      if (!is.defined(a) && is.number(b)) {
        a = 1;
      } else if (is.number(a) && !is.defined(b)) {
        b = 0;
      }
      if (!is.defined(a)) {
        this.options.linearA = [];
      } else if (is.number(a)) {
        this.options.linearA = [a];
      } else if (Array.isArray(a) && a.length && a.every(is.number)) {
        this.options.linearA = a;
      } else {
        throw is.invalidParameterError("a", "number or array of numbers", a);
      }
      if (!is.defined(b)) {
        this.options.linearB = [];
      } else if (is.number(b)) {
        this.options.linearB = [b];
      } else if (Array.isArray(b) && b.length && b.every(is.number)) {
        this.options.linearB = b;
      } else {
        throw is.invalidParameterError("b", "number or array of numbers", b);
      }
      if (this.options.linearA.length !== this.options.linearB.length) {
        throw new Error("Expected a and b to be arrays of the same length");
      }
      return this;
    }
    __name(linear, "linear");
    function recomb(inputMatrix) {
      if (!Array.isArray(inputMatrix)) {
        throw is.invalidParameterError("inputMatrix", "array", inputMatrix);
      }
      if (inputMatrix.length !== 3 && inputMatrix.length !== 4) {
        throw is.invalidParameterError("inputMatrix", "3x3 or 4x4 array", inputMatrix.length);
      }
      const recombMatrix = inputMatrix.flat().map(Number);
      if (recombMatrix.length !== 9 && recombMatrix.length !== 16) {
        throw is.invalidParameterError("inputMatrix", "cardinality of 9 or 16", recombMatrix.length);
      }
      this.options.recombMatrix = recombMatrix;
      return this;
    }
    __name(recomb, "recomb");
    function modulate(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "plain object", options);
      }
      if ("brightness" in options) {
        if (is.number(options.brightness) && options.brightness >= 0) {
          this.options.brightness = options.brightness;
        } else {
          throw is.invalidParameterError("brightness", "number above zero", options.brightness);
        }
      }
      if ("saturation" in options) {
        if (is.number(options.saturation) && options.saturation >= 0) {
          this.options.saturation = options.saturation;
        } else {
          throw is.invalidParameterError("saturation", "number above zero", options.saturation);
        }
      }
      if ("hue" in options) {
        if (is.integer(options.hue)) {
          this.options.hue = options.hue % 360;
        } else {
          throw is.invalidParameterError("hue", "number", options.hue);
        }
      }
      if ("lightness" in options) {
        if (is.number(options.lightness)) {
          this.options.lightness = options.lightness;
        } else {
          throw is.invalidParameterError("lightness", "number", options.lightness);
        }
      }
      return this;
    }
    __name(modulate, "modulate");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        rotate,
        flip,
        flop,
        affine,
        sharpen,
        median,
        blur,
        flatten,
        unflatten: unflatten3,
        gamma,
        negate,
        normalise,
        normalize,
        clahe,
        convolve,
        threshold,
        boolean,
        linear,
        recomb,
        modulate
      });
    };
  }
});

// node_modules/sharp/lib/colour.js
var require_colour = __commonJS({
  "node_modules/sharp/lib/colour.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var color = require_color();
    var is = require_is();
    var colourspace = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };
    function tint(tint2) {
      this._setBackgroundColourOption("tint", tint2);
      return this;
    }
    __name(tint, "tint");
    function greyscale(greyscale2) {
      this.options.greyscale = is.bool(greyscale2) ? greyscale2 : true;
      return this;
    }
    __name(greyscale, "greyscale");
    function grayscale(grayscale2) {
      return this.greyscale(grayscale2);
    }
    __name(grayscale, "grayscale");
    function pipelineColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspacePipeline = colourspace2;
      return this;
    }
    __name(pipelineColourspace, "pipelineColourspace");
    function pipelineColorspace(colorspace) {
      return this.pipelineColourspace(colorspace);
    }
    __name(pipelineColorspace, "pipelineColorspace");
    function toColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspace = colourspace2;
      return this;
    }
    __name(toColourspace, "toColourspace");
    function toColorspace(colorspace) {
      return this.toColourspace(colorspace);
    }
    __name(toColorspace, "toColorspace");
    function _setBackgroundColourOption(key, value) {
      if (is.defined(value)) {
        if (is.object(value) || is.string(value)) {
          const colour = color(value);
          this.options[key] = [
            colour.red(),
            colour.green(),
            colour.blue(),
            Math.round(colour.alpha() * 255)
          ];
        } else {
          throw is.invalidParameterError("background", "object or string", value);
        }
      }
    }
    __name(_setBackgroundColourOption, "_setBackgroundColourOption");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public
        tint,
        greyscale,
        grayscale,
        pipelineColourspace,
        pipelineColorspace,
        toColourspace,
        toColorspace,
        // Private
        _setBackgroundColourOption
      });
      Sharp.colourspace = colourspace;
      Sharp.colorspace = colourspace;
    };
  }
});

// node_modules/sharp/lib/channel.js
var require_channel = __commonJS({
  "node_modules/sharp/lib/channel.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var bool = {
      and: "and",
      or: "or",
      eor: "eor"
    };
    function removeAlpha() {
      this.options.removeAlpha = true;
      return this;
    }
    __name(removeAlpha, "removeAlpha");
    function ensureAlpha(alpha) {
      if (is.defined(alpha)) {
        if (is.number(alpha) && is.inRange(alpha, 0, 1)) {
          this.options.ensureAlpha = alpha;
        } else {
          throw is.invalidParameterError("alpha", "number between 0 and 1", alpha);
        }
      } else {
        this.options.ensureAlpha = 1;
      }
      return this;
    }
    __name(ensureAlpha, "ensureAlpha");
    function extractChannel(channel2) {
      const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
      if (Object.keys(channelMap).includes(channel2)) {
        channel2 = channelMap[channel2];
      }
      if (is.integer(channel2) && is.inRange(channel2, 0, 4)) {
        this.options.extractChannel = channel2;
      } else {
        throw is.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel2);
      }
      return this;
    }
    __name(extractChannel, "extractChannel");
    function joinChannel(images, options) {
      if (Array.isArray(images)) {
        images.forEach(function(image) {
          this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
        }, this);
      } else {
        this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
      }
      return this;
    }
    __name(joinChannel, "joinChannel");
    function bandbool(boolOp) {
      if (is.string(boolOp) && is.inArray(boolOp, ["and", "or", "eor"])) {
        this.options.bandBoolOp = boolOp;
      } else {
        throw is.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
      }
      return this;
    }
    __name(bandbool, "bandbool");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public instance functions
        removeAlpha,
        ensureAlpha,
        extractChannel,
        joinChannel,
        bandbool
      });
      Sharp.bool = bool;
    };
  }
});

// node-built-in-modules:node:path
import libDefault4 from "node:path";
var require_node_path = __commonJS({
  "node-built-in-modules:node:path"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault4;
  }
});

// node_modules/sharp/lib/output.js
var require_output = __commonJS({
  "node_modules/sharp/lib/output.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var path = require_node_path();
    var is = require_is();
    var sharp2 = require_sharp();
    var formats = /* @__PURE__ */ new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]);
    var jp2Regex = /\.(jp[2x]|j2[kc])$/i;
    var errJp2Save = /* @__PURE__ */ __name(() => new Error("JP2 output requires libvips with support for OpenJPEG"), "errJp2Save");
    var bitdepthFromColourCount = /* @__PURE__ */ __name((colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours))), "bitdepthFromColourCount");
    function toFile(fileOut, callback) {
      let err;
      if (!is.string(fileOut)) {
        err = new Error("Missing output file path");
      } else if (is.string(this.options.input.file) && path.resolve(this.options.input.file) === path.resolve(fileOut)) {
        err = new Error("Cannot use same file for input and output");
      } else if (jp2Regex.test(path.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
        err = errJp2Save();
      }
      if (err) {
        if (is.fn(callback)) {
          callback(err);
        } else {
          return Promise.reject(err);
        }
      } else {
        this.options.fileOut = fileOut;
        const stack = Error();
        return this._pipeline(callback, stack);
      }
      return this;
    }
    __name(toFile, "toFile");
    function toBuffer(options, callback) {
      if (is.object(options)) {
        this._setBooleanOption("resolveWithObject", options.resolveWithObject);
      } else if (this.options.resolveWithObject) {
        this.options.resolveWithObject = false;
      }
      this.options.fileOut = "";
      const stack = Error();
      return this._pipeline(is.fn(options) ? options : callback, stack);
    }
    __name(toBuffer, "toBuffer");
    function keepExif() {
      this.options.keepMetadata |= 1;
      return this;
    }
    __name(keepExif, "keepExif");
    function withExif(exif) {
      if (is.object(exif)) {
        for (const [ifd, entries] of Object.entries(exif)) {
          if (is.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is.string(v)) {
                this.options.withExif[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is.invalidParameterError(`${ifd}.${k}`, "string", v);
              }
            }
          } else {
            throw is.invalidParameterError(ifd, "object", entries);
          }
        }
      } else {
        throw is.invalidParameterError("exif", "object", exif);
      }
      this.options.withExifMerge = false;
      return this.keepExif();
    }
    __name(withExif, "withExif");
    function withExifMerge(exif) {
      this.withExif(exif);
      this.options.withExifMerge = true;
      return this;
    }
    __name(withExifMerge, "withExifMerge");
    function keepIccProfile() {
      this.options.keepMetadata |= 8;
      return this;
    }
    __name(keepIccProfile, "keepIccProfile");
    function withIccProfile(icc, options) {
      if (is.string(icc)) {
        this.options.withIccProfile = icc;
      } else {
        throw is.invalidParameterError("icc", "string", icc);
      }
      this.keepIccProfile();
      if (is.object(options)) {
        if (is.defined(options.attach)) {
          if (is.bool(options.attach)) {
            if (!options.attach) {
              this.options.keepMetadata &= ~8;
            }
          } else {
            throw is.invalidParameterError("attach", "boolean", options.attach);
          }
        }
      }
      return this;
    }
    __name(withIccProfile, "withIccProfile");
    function keepMetadata() {
      this.options.keepMetadata = 31;
      return this;
    }
    __name(keepMetadata, "keepMetadata");
    function withMetadata(options) {
      this.keepMetadata();
      this.withIccProfile("srgb");
      if (is.object(options)) {
        if (is.defined(options.orientation)) {
          if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
            this.options.withMetadataOrientation = options.orientation;
          } else {
            throw is.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
          }
        }
        if (is.defined(options.density)) {
          if (is.number(options.density) && options.density > 0) {
            this.options.withMetadataDensity = options.density;
          } else {
            throw is.invalidParameterError("density", "positive number", options.density);
          }
        }
        if (is.defined(options.icc)) {
          this.withIccProfile(options.icc);
        }
        if (is.defined(options.exif)) {
          this.withExifMerge(options.exif);
        }
      }
      return this;
    }
    __name(withMetadata, "withMetadata");
    function toFormat(format, options) {
      const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
      if (!actualFormat) {
        throw is.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format);
      }
      return this[actualFormat](options);
    }
    __name(toFormat, "toFormat");
    function jpeg(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jpegQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("jpegProgressive", options.progressive);
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jpegChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
        if (is.defined(optimiseCoding)) {
          this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
        }
        if (is.defined(options.mozjpeg)) {
          if (is.bool(options.mozjpeg)) {
            if (options.mozjpeg) {
              this.options.jpegTrellisQuantisation = true;
              this.options.jpegOvershootDeringing = true;
              this.options.jpegOptimiseScans = true;
              this.options.jpegProgressive = true;
              this.options.jpegQuantisationTable = 3;
            }
          } else {
            throw is.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
          }
        }
        const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
        if (is.defined(trellisQuantisation)) {
          this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
        }
        if (is.defined(options.overshootDeringing)) {
          this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
        }
        const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
        if (is.defined(optimiseScans)) {
          this._setBooleanOption("jpegOptimiseScans", optimiseScans);
          if (optimiseScans) {
            this.options.jpegProgressive = true;
          }
        }
        const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
        if (is.defined(quantisationTable)) {
          if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
            this.options.jpegQuantisationTable = quantisationTable;
          } else {
            throw is.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
          }
        }
      }
      return this._updateFormatOut("jpeg", options);
    }
    __name(jpeg, "jpeg");
    function png(options) {
      if (is.object(options)) {
        if (is.defined(options.progressive)) {
          this._setBooleanOption("pngProgressive", options.progressive);
        }
        if (is.defined(options.compressionLevel)) {
          if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
            this.options.pngCompressionLevel = options.compressionLevel;
          } else {
            throw is.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
          }
        }
        if (is.defined(options.adaptiveFiltering)) {
          this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.pngBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.palette)) {
          this._setBooleanOption("pngPalette", options.palette);
        } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
          this._setBooleanOption("pngPalette", true);
        }
        if (this.options.pngPalette) {
          if (is.defined(options.quality)) {
            if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
              this.options.pngQuality = options.quality;
            } else {
              throw is.invalidParameterError("quality", "integer between 0 and 100", options.quality);
            }
          }
          if (is.defined(options.effort)) {
            if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
              this.options.pngEffort = options.effort;
            } else {
              throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
            }
          }
          if (is.defined(options.dither)) {
            if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
              this.options.pngDither = options.dither;
            } else {
              throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
            }
          }
        }
      }
      return this._updateFormatOut("png", options);
    }
    __name(png, "png");
    function webp(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.webpQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.alphaQuality)) {
          if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
            this.options.webpAlphaQuality = options.alphaQuality;
          } else {
            throw is.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
          }
        }
        if (is.defined(options.lossless)) {
          this._setBooleanOption("webpLossless", options.lossless);
        }
        if (is.defined(options.nearLossless)) {
          this._setBooleanOption("webpNearLossless", options.nearLossless);
        }
        if (is.defined(options.smartSubsample)) {
          this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
        }
        if (is.defined(options.preset)) {
          if (is.string(options.preset) && is.inArray(options.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) {
            this.options.webpPreset = options.preset;
          } else {
            throw is.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", options.preset);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
            this.options.webpEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 6", options.effort);
          }
        }
        if (is.defined(options.minSize)) {
          this._setBooleanOption("webpMinSize", options.minSize);
        }
        if (is.defined(options.mixed)) {
          this._setBooleanOption("webpMixed", options.mixed);
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("webp", options);
    }
    __name(webp, "webp");
    function gif(options) {
      if (is.object(options)) {
        if (is.defined(options.reuse)) {
          this._setBooleanOption("gifReuse", options.reuse);
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("gifProgressive", options.progressive);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.gifBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.effort)) {
          if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
            this.options.gifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
          }
        }
        if (is.defined(options.dither)) {
          if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
            this.options.gifDither = options.dither;
          } else {
            throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
          }
        }
        if (is.defined(options.interFrameMaxError)) {
          if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
            this.options.gifInterFrameMaxError = options.interFrameMaxError;
          } else {
            throw is.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", options.interFrameMaxError);
          }
        }
        if (is.defined(options.interPaletteMaxError)) {
          if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
            this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
          } else {
            throw is.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", options.interPaletteMaxError);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("gif", options);
    }
    __name(gif, "gif");
    function jp2(options) {
      if (!this.constructor.format.jp2k.output.buffer) {
        throw errJp2Save();
      }
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jp2Quality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jp2Lossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
            this.options.jp2TileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
            this.options.jp2TileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jp2ChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
      }
      return this._updateFormatOut("jp2", options);
    }
    __name(jp2, "jp2");
    function trySetAnimationOptions(source, target) {
      if (is.object(source) && is.defined(source.loop)) {
        if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
          target.loop = source.loop;
        } else {
          throw is.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
        }
      }
      if (is.object(source) && is.defined(source.delay)) {
        if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
          target.delay = [source.delay];
        } else if (Array.isArray(source.delay) && source.delay.every(is.integer) && source.delay.every((v) => is.inRange(v, 0, 65535))) {
          target.delay = source.delay;
        } else {
          throw is.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
        }
      }
    }
    __name(trySetAnimationOptions, "trySetAnimationOptions");
    function tiff(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.tiffQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
            this.options.tiffBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
          }
        }
        if (is.defined(options.tile)) {
          this._setBooleanOption("tiffTile", options.tile);
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && options.tileWidth > 0) {
            this.options.tiffTileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && options.tileHeight > 0) {
            this.options.tiffTileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
          }
        }
        if (is.defined(options.miniswhite)) {
          this._setBooleanOption("tiffMiniswhite", options.miniswhite);
        }
        if (is.defined(options.pyramid)) {
          this._setBooleanOption("tiffPyramid", options.pyramid);
        }
        if (is.defined(options.xres)) {
          if (is.number(options.xres) && options.xres > 0) {
            this.options.tiffXres = options.xres;
          } else {
            throw is.invalidParameterError("xres", "number greater than zero", options.xres);
          }
        }
        if (is.defined(options.yres)) {
          if (is.number(options.yres) && options.yres > 0) {
            this.options.tiffYres = options.yres;
          } else {
            throw is.invalidParameterError("yres", "number greater than zero", options.yres);
          }
        }
        if (is.defined(options.compression)) {
          if (is.string(options.compression) && is.inArray(options.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) {
            this.options.tiffCompression = options.compression;
          } else {
            throw is.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", options.compression);
          }
        }
        if (is.defined(options.predictor)) {
          if (is.string(options.predictor) && is.inArray(options.predictor, ["none", "horizontal", "float"])) {
            this.options.tiffPredictor = options.predictor;
          } else {
            throw is.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
          }
        }
        if (is.defined(options.resolutionUnit)) {
          if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ["inch", "cm"])) {
            this.options.tiffResolutionUnit = options.resolutionUnit;
          } else {
            throw is.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
          }
        }
      }
      return this._updateFormatOut("tiff", options);
    }
    __name(tiff, "tiff");
    function avif(options) {
      return this.heif({ ...options, compression: "av1" });
    }
    __name(avif, "avif");
    function heif(options) {
      if (is.object(options)) {
        if (is.string(options.compression) && is.inArray(options.compression, ["av1", "hevc"])) {
          this.options.heifCompression = options.compression;
        } else {
          throw is.invalidParameterError("compression", "one of: av1, hevc", options.compression);
        }
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.heifQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.heifLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
            this.options.heifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 9", options.effort);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.heifChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [8, 10, 12])) {
            if (options.bitdepth !== 8 && this.constructor.versions.heif) {
              throw is.invalidParameterError("bitdepth when using prebuilt binaries", 8, options.bitdepth);
            }
            this.options.heifBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "8, 10 or 12", options.bitdepth);
          }
        }
      } else {
        throw is.invalidParameterError("options", "Object", options);
      }
      return this._updateFormatOut("heif", options);
    }
    __name(heif, "heif");
    function jxl(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jxlDistance = options.quality >= 30 ? 0.1 + (100 - options.quality) * 0.09 : 53 / 3e3 * options.quality * options.quality - 23 / 20 * options.quality + 25;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        } else if (is.defined(options.distance)) {
          if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
            this.options.jxlDistance = options.distance;
          } else {
            throw is.invalidParameterError("distance", "number between 0.0 and 15.0", options.distance);
          }
        }
        if (is.defined(options.decodingTier)) {
          if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
            this.options.jxlDecodingTier = options.decodingTier;
          } else {
            throw is.invalidParameterError("decodingTier", "integer between 0 and 4", options.decodingTier);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jxlLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 3, 9)) {
            this.options.jxlEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 3 and 9", options.effort);
          }
        }
      }
      return this._updateFormatOut("jxl", options);
    }
    __name(jxl, "jxl");
    function raw(options) {
      if (is.object(options)) {
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(
            options.depth,
            ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"]
          )) {
            this.options.rawDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
          }
        }
      }
      return this._updateFormatOut("raw");
    }
    __name(raw, "raw");
    function tile(options) {
      if (is.object(options)) {
        if (is.defined(options.size)) {
          if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
            this.options.tileSize = options.size;
          } else {
            throw is.invalidParameterError("size", "integer between 1 and 8192", options.size);
          }
        }
        if (is.defined(options.overlap)) {
          if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
            if (options.overlap > this.options.tileSize) {
              throw is.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
            }
            this.options.tileOverlap = options.overlap;
          } else {
            throw is.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
          }
        }
        if (is.defined(options.container)) {
          if (is.string(options.container) && is.inArray(options.container, ["fs", "zip"])) {
            this.options.tileContainer = options.container;
          } else {
            throw is.invalidParameterError("container", "one of: fs, zip", options.container);
          }
        }
        if (is.defined(options.layout)) {
          if (is.string(options.layout) && is.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
            this.options.tileLayout = options.layout;
          } else {
            throw is.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
          }
        }
        if (is.defined(options.angle)) {
          if (is.integer(options.angle) && !(options.angle % 90)) {
            this.options.tileAngle = options.angle;
          } else {
            throw is.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
          }
        }
        this._setBackgroundColourOption("tileBackground", options.background);
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(options.depth, ["onepixel", "onetile", "one"])) {
            this.options.tileDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
          }
        }
        if (is.defined(options.skipBlanks)) {
          if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
            this.options.tileSkipBlanks = options.skipBlanks;
          } else {
            throw is.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
          }
        } else if (is.defined(options.layout) && options.layout === "google") {
          this.options.tileSkipBlanks = 5;
        }
        const centre = is.bool(options.center) ? options.center : options.centre;
        if (is.defined(centre)) {
          this._setBooleanOption("tileCentre", centre);
        }
        if (is.defined(options.id)) {
          if (is.string(options.id)) {
            this.options.tileId = options.id;
          } else {
            throw is.invalidParameterError("id", "string", options.id);
          }
        }
        if (is.defined(options.basename)) {
          if (is.string(options.basename)) {
            this.options.tileBasename = options.basename;
          } else {
            throw is.invalidParameterError("basename", "string", options.basename);
          }
        }
      }
      if (is.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
        this.options.tileFormat = this.options.formatOut;
      } else if (this.options.formatOut !== "input") {
        throw is.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
      }
      return this._updateFormatOut("dz");
    }
    __name(tile, "tile");
    function timeout(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "object", options);
      }
      if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
        this.options.timeoutSeconds = options.seconds;
      } else {
        throw is.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
      }
      return this;
    }
    __name(timeout, "timeout");
    function _updateFormatOut(formatOut, options) {
      if (!(is.object(options) && options.force === false)) {
        this.options.formatOut = formatOut;
      }
      return this;
    }
    __name(_updateFormatOut, "_updateFormatOut");
    function _setBooleanOption(key, val) {
      if (is.bool(val)) {
        this.options[key] = val;
      } else {
        throw is.invalidParameterError(key, "boolean", val);
      }
    }
    __name(_setBooleanOption, "_setBooleanOption");
    function _read() {
      if (!this.options.streamOut) {
        this.options.streamOut = true;
        const stack = Error();
        this._pipeline(void 0, stack);
      }
    }
    __name(_read, "_read");
    function _pipeline(callback, stack) {
      if (typeof callback === "function") {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, data, info4);
              }
            });
          });
        } else {
          sharp2.pipeline(this.options, (err, data, info4) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, data, info4);
            }
          });
        }
        return this;
      } else if (this.options.streamOut) {
        if (this._isStreamInput()) {
          this.once("finish", () => {
            this._flattenBufferIn();
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                this.emit("error", is.nativeError(err, stack));
              } else {
                this.emit("info", info4);
                this.push(data);
              }
              this.push(null);
              this.on("end", () => this.emit("close"));
            });
          });
          if (this.streamInFinished) {
            this.emit("finish");
          }
        } else {
          sharp2.pipeline(this.options, (err, data, info4) => {
            if (err) {
              this.emit("error", is.nativeError(err, stack));
            } else {
              this.emit("info", info4);
              this.push(data);
            }
            this.push(null);
            this.on("end", () => this.emit("close"));
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.once("finish", () => {
              this._flattenBufferIn();
              sharp2.pipeline(this.options, (err, data, info4) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  if (this.options.resolveWithObject) {
                    resolve({ data, info: info4 });
                  } else {
                    resolve(data);
                  }
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                if (this.options.resolveWithObject) {
                  resolve({ data, info: info4 });
                } else {
                  resolve(data);
                }
              }
            });
          });
        }
      }
    }
    __name(_pipeline, "_pipeline");
    module.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public
        toFile,
        toBuffer,
        keepExif,
        withExif,
        withExifMerge,
        keepIccProfile,
        withIccProfile,
        keepMetadata,
        withMetadata,
        toFormat,
        jpeg,
        jp2,
        png,
        webp,
        tiff,
        avif,
        heif,
        jxl,
        gif,
        raw,
        tile,
        timeout,
        // Private
        _updateFormatOut,
        _setBooleanOption,
        _read,
        _pipeline
      });
    };
  }
});

// node-built-in-modules:node:events
import libDefault5 from "node:events";
var require_node_events = __commonJS({
  "node-built-in-modules:node:events"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault5;
  }
});

// node_modules/unenv/dist/runtime/node/internal/os/constants.mjs
var UV_UDP_REUSEADDR, dlopen2, errno, signals, priority;
var init_constants2 = __esm({
  "node_modules/unenv/dist/runtime/node/internal/os/constants.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_UDP_REUSEADDR = 4;
    dlopen2 = {
      RTLD_LAZY: 1,
      RTLD_NOW: 2,
      RTLD_GLOBAL: 256,
      RTLD_LOCAL: 0,
      RTLD_DEEPBIND: 8
    };
    errno = {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 98,
      EADDRNOTAVAIL: 99,
      EAFNOSUPPORT: 97,
      EAGAIN: 11,
      EALREADY: 114,
      EBADF: 9,
      EBADMSG: 74,
      EBUSY: 16,
      ECANCELED: 125,
      ECHILD: 10,
      ECONNABORTED: 103,
      ECONNREFUSED: 111,
      ECONNRESET: 104,
      EDEADLK: 35,
      EDESTADDRREQ: 89,
      EDOM: 33,
      EDQUOT: 122,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 113,
      EIDRM: 43,
      EILSEQ: 84,
      EINPROGRESS: 115,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 106,
      EISDIR: 21,
      ELOOP: 40,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 90,
      EMULTIHOP: 72,
      ENAMETOOLONG: 36,
      ENETDOWN: 100,
      ENETRESET: 102,
      ENETUNREACH: 101,
      ENFILE: 23,
      ENOBUFS: 105,
      ENODATA: 61,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 37,
      ENOLINK: 67,
      ENOMEM: 12,
      ENOMSG: 42,
      ENOPROTOOPT: 92,
      ENOSPC: 28,
      ENOSR: 63,
      ENOSTR: 60,
      ENOSYS: 38,
      ENOTCONN: 107,
      ENOTDIR: 20,
      ENOTEMPTY: 39,
      ENOTSOCK: 88,
      ENOTSUP: 95,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 95,
      EOVERFLOW: 75,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 71,
      EPROTONOSUPPORT: 93,
      EPROTOTYPE: 91,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 116,
      ETIME: 62,
      ETIMEDOUT: 110,
      ETXTBSY: 26,
      EWOULDBLOCK: 11,
      EXDEV: 18
    };
    signals = {
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 7,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 10,
      SIGSEGV: 11,
      SIGUSR2: 12,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 17,
      SIGSTKFLT: 16,
      SIGCONT: 18,
      SIGSTOP: 19,
      SIGTSTP: 20,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 23,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 29,
      SIGPOLL: 29,
      SIGPWR: 30,
      SIGSYS: 31
    };
    priority = {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    };
  }
});

// node_modules/unenv/dist/runtime/node/os.mjs
var constants, NUM_CPUS, availableParallelism, arch2, machine, endianness, cpus, getPriority, setPriority, homedir, tmpdir, devNull, freemem, totalmem, loadavg, uptime2, hostname, networkInterfaces, platform2, type, release2, version2, userInfo, EOL, os_default;
var init_os = __esm({
  "node_modules/unenv/dist/runtime/node/os.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_constants2();
    constants = {
      UV_UDP_REUSEADDR,
      dlopen: dlopen2,
      errno,
      signals,
      priority
    };
    NUM_CPUS = 8;
    availableParallelism = /* @__PURE__ */ __name(() => NUM_CPUS, "availableParallelism");
    arch2 = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const info4 = {
        model: "",
        speed: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0
        }
      };
      return Array.from({ length: NUM_CPUS }, () => info4);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    setPriority = /* @__PURE__ */ notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    devNull = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [
      0,
      0,
      0
    ], "loadavg");
    uptime2 = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => {
      return { lo0: [
        {
          address: "127.0.0.1",
          netmask: "255.0.0.0",
          family: "IPv4",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "127.0.0.1/8"
        },
        {
          address: "::1",
          netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "::1/128",
          scopeid: 0
        },
        {
          address: "fe80::1",
          netmask: "ffff:ffff:ffff:ffff::",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "fe80::1/64",
          scopeid: 1
        }
      ] };
    }, "networkInterfaces");
    platform2 = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release2 = /* @__PURE__ */ __name(() => "", "release");
    version2 = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((opts) => {
      const encode = /* @__PURE__ */ __name((str) => {
        if (opts?.encoding) {
          const buff = Buffer.from(str);
          return opts.encoding === "buffer" ? buff : buff.toString(opts.encoding);
        }
        return str;
      }, "encode");
      return {
        gid: 1e3,
        uid: 1e3,
        homedir: encode("/"),
        shell: encode("/bin/sh"),
        username: encode("root")
      };
    }, "userInfo");
    EOL = "\n";
    os_default = {
      arch: arch2,
      availableParallelism,
      constants,
      cpus,
      EOL,
      endianness,
      devNull,
      freemem,
      getPriority,
      homedir,
      hostname,
      loadavg,
      machine,
      networkInterfaces,
      platform: platform2,
      release: release2,
      setPriority,
      tmpdir,
      totalmem,
      type,
      uptime: uptime2,
      userInfo,
      version: version2
    };
  }
});

// node-built-in-modules:node:os
var require_node_os = __commonJS({
  "node-built-in-modules:node:os"(exports, module) {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_os();
    module.exports = os_default;
  }
});

// node_modules/sharp/lib/utility.js
var require_utility = __commonJS({
  "node_modules/sharp/lib/utility.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var events = require_node_events();
    var detectLibc = require_detect_libc();
    var is = require_is();
    var { runtimePlatformArch } = require_libvips();
    var sharp2 = require_sharp();
    var runtimePlatform = runtimePlatformArch();
    var libvipsVersion = sharp2.libvipsVersion();
    var format = sharp2.format();
    format.heif.output.alias = ["avif", "heic"];
    format.jpeg.output.alias = ["jpe", "jpg"];
    format.tiff.output.alias = ["tif"];
    format.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
    var interpolators = {
      /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
      nearest: "nearest",
      /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
      bilinear: "bilinear",
      /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
      bicubic: "bicubic",
      /** [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100). Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2. */
      locallyBoundedBicubic: "lbb",
      /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
      nohalo: "nohalo",
      /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
      vertexSplitQuadraticBasisSpline: "vsqbs"
    };
    var versions2 = {
      vips: libvipsVersion.semver
    };
    if (!libvipsVersion.isGlobal) {
      if (!libvipsVersion.isWasm) {
        try {
          versions2 = __require(`@img/sharp-${runtimePlatform}/versions`);
        } catch (_) {
          try {
            versions2 = __require(`@img/sharp-libvips-${runtimePlatform}/versions`);
          } catch (_2) {
          }
        }
      } else {
        try {
          versions2 = __require("@img/sharp-wasm32/versions");
        } catch (_) {
        }
      }
    }
    versions2.sharp = require_package().version;
    if (versions2.heif && format.heif) {
      format.heif.input.fileSuffix = [".avif"];
      format.heif.output.alias = ["avif"];
    }
    function cache(options) {
      if (is.bool(options)) {
        if (options) {
          return sharp2.cache(50, 20, 100);
        } else {
          return sharp2.cache(0, 0, 0);
        }
      } else if (is.object(options)) {
        return sharp2.cache(options.memory, options.files, options.items);
      } else {
        return sharp2.cache();
      }
    }
    __name(cache, "cache");
    cache(true);
    function concurrency(concurrency2) {
      return sharp2.concurrency(is.integer(concurrency2) ? concurrency2 : null);
    }
    __name(concurrency, "concurrency");
    if (detectLibc.familySync() === detectLibc.GLIBC && !sharp2._isUsingJemalloc()) {
      sharp2.concurrency(1);
    } else if (detectLibc.familySync() === detectLibc.MUSL && sharp2.concurrency() === 1024) {
      sharp2.concurrency(require_node_os().availableParallelism());
    }
    var queue = new events.EventEmitter();
    function counters() {
      return sharp2.counters();
    }
    __name(counters, "counters");
    function simd(simd2) {
      return sharp2.simd(is.bool(simd2) ? simd2 : null);
    }
    __name(simd, "simd");
    function block(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp2.block(options.operation, true);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    __name(block, "block");
    function unblock(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp2.block(options.operation, false);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    __name(unblock, "unblock");
    module.exports = function(Sharp) {
      Sharp.cache = cache;
      Sharp.concurrency = concurrency;
      Sharp.counters = counters;
      Sharp.simd = simd;
      Sharp.format = format;
      Sharp.interpolators = interpolators;
      Sharp.versions = versions2;
      Sharp.queue = queue;
      Sharp.block = block;
      Sharp.unblock = unblock;
    };
  }
});

// node_modules/sharp/lib/index.js
var require_lib = __commonJS({
  "node_modules/sharp/lib/index.js"(exports, module) {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Sharp = require_constructor();
    require_input()(Sharp);
    require_resize()(Sharp);
    require_composite()(Sharp);
    require_operation()(Sharp);
    require_colour()(Sharp);
    require_channel()(Sharp);
    require_output()(Sharp);
    require_utility()(Sharp);
    module.exports = Sharp;
  }
});

// dist/_worker.js/chunks/sharp_Cnl7Ig-l.mjs
var sharp_Cnl7Ig_l_exports = {};
__export(sharp_Cnl7Ig_l_exports, {
  default: () => sharp_default
});
async function loadSharp() {
  let sharpImport;
  try {
    sharpImport = (await Promise.resolve().then(() => __toESM(require_lib(), 1))).default;
  } catch {
    throw new AstroError(MissingSharp);
  }
  sharpImport.cache(false);
  return sharpImport;
}
var sharp, qualityTable, fitMap, sharpService, sharp_default;
var init_sharp_Cnl7Ig_l = __esm({
  "dist/_worker.js/chunks/sharp_Cnl7Ig-l.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_image_endpoint_By2xXWVB();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    qualityTable = {
      low: 25,
      mid: 50,
      high: 80,
      max: 100
    };
    __name(loadSharp, "loadSharp");
    fitMap = {
      fill: "fill",
      contain: "inside",
      cover: "cover",
      none: "outside",
      "scale-down": "inside",
      outside: "outside",
      inside: "inside"
    };
    sharpService = {
      validateOptions: baseService.validateOptions,
      getURL: baseService.getURL,
      parseURL: baseService.parseURL,
      getHTMLAttributes: baseService.getHTMLAttributes,
      getSrcSet: baseService.getSrcSet,
      async transform(inputBuffer, transformOptions, config2) {
        if (!sharp) sharp = await loadSharp();
        const transform = transformOptions;
        if (transform.format === "svg") return { data: inputBuffer, format: "svg" };
        const result = sharp(inputBuffer, {
          failOnError: false,
          pages: -1,
          limitInputPixels: config2.service.config.limitInputPixels
        });
        result.rotate();
        const withoutEnlargement = Boolean(transform.fit);
        if (transform.width && transform.height && transform.fit) {
          const fit = fitMap[transform.fit] ?? "inside";
          result.resize({
            width: Math.round(transform.width),
            height: Math.round(transform.height),
            fit,
            position: transform.position,
            withoutEnlargement
          });
        } else if (transform.height && !transform.width) {
          result.resize({
            height: Math.round(transform.height),
            withoutEnlargement
          });
        } else if (transform.width) {
          result.resize({
            width: Math.round(transform.width),
            withoutEnlargement
          });
        }
        if (transform.format) {
          let quality = void 0;
          if (transform.quality) {
            const parsedQuality = parseQuality(transform.quality);
            if (typeof parsedQuality === "number") {
              quality = parsedQuality;
            } else {
              quality = transform.quality in qualityTable ? qualityTable[transform.quality] : void 0;
            }
          }
          const isGifInput = inputBuffer[0] === 71 && // 'G'
          inputBuffer[1] === 73 && // 'I'
          inputBuffer[2] === 70 && // 'F'
          inputBuffer[3] === 56 && // '8'
          (inputBuffer[4] === 57 || inputBuffer[4] === 55) && // '9' or '7'
          inputBuffer[5] === 97;
          if (transform.format === "webp" && isGifInput) {
            result.webp({ quality: typeof quality === "number" ? quality : void 0, loop: 0 });
          } else {
            result.toFormat(transform.format, { quality });
          }
        }
        const { data, info: info4 } = await result.toBuffer({ resolveWithObject: true });
        return {
          data,
          format: info4.format
        };
      }
    };
    sharp_default = sharpService;
  }
});

// dist/_worker.js/chunks/image-endpoint_By2xXWVB.mjs
function matchPattern$1(url, remotePattern) {
  return matchProtocol$1(url, remotePattern.protocol) && matchHostname$1(url, remotePattern.hostname, true) && matchPort$1(url, remotePattern.port) && matchPathname$1(url, remotePattern.pathname, true);
}
function matchPort$1(url, port) {
  return !port || port === url.port;
}
function matchProtocol$1(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname$1(url, hostname2, allowWildcard = false) {
  if (!hostname2) {
    return true;
  } else if (!allowWildcard || !hostname2.startsWith("*")) {
    return hostname2 === url.hostname;
  } else if (hostname2.startsWith("**.")) {
    const slicedHostname = hostname2.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname2.startsWith("*.")) {
    const slicedHostname = hostname2.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname$1(url, pathname, allowWildcard = false) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed$1(src, {
  domains,
  remotePatterns
}) {
  if (!URL.canParse(src)) {
    return false;
  }
  const url = new URL(src);
  return domains.some((domain2) => matchHostname$1(url, domain2)) || remotePatterns.some((remotePattern) => matchPattern$1(url, remotePattern));
}
function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}
function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}
function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type2) {
  const size = ICON_TYPE_SIZE[type2];
  return { width: size, height: size, type: type2 };
}
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type2 = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type2 === 3 || type2 === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
function detector(input) {
  const byte = input[0];
  const type2 = firstBytes.get(byte);
  if (type2 && typeHandlers.get(type2).validate(input)) {
    return type2;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}
function lookup$1(input) {
  const type2 = detector(input);
  if (typeof type2 !== "undefined") {
    const size = typeHandlers.get(type2).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type2;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type2);
}
async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup$1(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type: type2, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type2,
    orientation
  };
}
async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await Promise.resolve().then(() => (init_sharp_Cnl7Ig_l(), sharp_Cnl7Ig_l_exports)).catch((e) => {
      const error4 = new AstroError(InvalidImageService);
      error4.cause = e;
      throw error4;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig2) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  let originalFormat;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    originalFormat = result.format;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
    originalFormat = clonedSrc.format;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig2.experimentalLayout;
  if (imageConfig2.experimentalResponsiveImages && layout) {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig2.experimentalBreakpoints?.length ? imageConfig2.experimentalBreakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    if (resolvedOptions.priority) {
      resolvedOptions.loading ??= "eager";
      resolvedOptions.decoding ??= "sync";
      resolvedOptions.fetchpriority ??= "high";
    } else {
      resolvedOptions.loading ??= "lazy";
      resolvedOptions.decoding ??= "async";
      resolvedOptions.fetchpriority ??= "auto";
    }
    delete resolvedOptions.priority;
    delete resolvedOptions.densities;
    if (layout !== "none") {
      resolvedOptions.style = addCSSVarsToStyle(
        {
          fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
          pos: resolvedOptions.position
        },
        resolvedOptions.style
      );
      resolvedOptions["data-astro-image"] = layout;
    }
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig2) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig2) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig2);
  const matchesOriginal = /* @__PURE__ */ __name((transform) => transform.width === originalWidth && transform.height === originalHeight && transform.format === originalFormat, "matchesOriginal");
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesOriginal(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig2),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesOriginal(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig2) : {}
  };
}
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
function isRemotePath2(src) {
  const decoded = src.replace(/%5C/gi, "\\");
  if (decoded[0] === "\\") {
    return true;
  }
  if (/^(?:http|https|ftp|ws):\\/.test(decoded)) {
    return true;
  }
  return URL_PROTOCOL_REGEX.test(decoded) || decoded.startsWith("data:");
}
function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname2, allowWildcard = false) {
  if (!hostname2) {
    return true;
  } else if (!allowWildcard || !hostname2.startsWith("*")) {
    return hostname2 === url.hostname;
  } else if (hostname2.startsWith("**.")) {
    const slicedHostname = hostname2.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname2.startsWith("*.")) {
    const slicedHostname = hostname2.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard = false) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed(src, {
  domains,
  remotePatterns
}) {
  if (!URL.canParse(src)) {
    return false;
  }
  const url = new URL(src);
  return domains.some((domain2) => matchHostname(url, domain2)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
var VALID_SUPPORTED_FORMATS, DEFAULT_OUTPUT_FORMAT, DEFAULT_HASH_PROPS, DEFAULT_RESOLUTIONS, LIMITED_RESOLUTIONS, getWidths, getSizesAttribute, sortNumeric, baseService, cssFitValues, decoder2, toUTF8String, toHexString, readInt16LE, readUInt16BE, readUInt16LE, readUInt24LE, readInt32LE, readUInt32BE, readUInt32LE, methods, BMP, TYPE_ICON, SIZE_HEADER$1, SIZE_IMAGE_ENTRY, ICO, TYPE_CURSOR, CUR, DDS, gifRegexp, GIF, brandMap, HEIF, SIZE_HEADER, FILE_LENGTH_OFFSET, ENTRY_LENGTH_OFFSET, ICON_TYPE_SIZE, ICNS, J2C, JP2, EXIF_MARKER, APP1_DATA_SIZE_BYTES, EXIF_HEADER_BYTES, TIFF_BYTE_ALIGN_BYTES, BIG_ENDIAN_BYTE_ALIGN, LITTLE_ENDIAN_BYTE_ALIGN, IDF_ENTRY_BYTES, NUM_DIRECTORY_ENTRIES_BYTES, JPG, KTX, pngSignature, pngImageHeaderChunkName, pngFriedChunkName, PNG, PNMTypes, handlers, PNM, PSD, svgReg, extractorRegExps, INCH_CM, units, unitsReg, SVG, TGA, signatures, TIFF, WEBP, typeHandlers, types, firstBytes, $$Astro$2, $$Image, mimes, $$Astro$1, $$Picture, mod, $$Astro, $$Font, imageConfig, getImage, URL_PROTOCOL_REGEX, prerender, GET, _page, page;
var init_image_endpoint_By2xXWVB = __esm({
  "dist/_worker.js/chunks/image-endpoint_By2xXWVB.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_path_h5kZAkfu();
    init_server_CwYSbNCn();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    VALID_SUPPORTED_FORMATS = [
      "jpeg",
      "jpg",
      "png",
      "tiff",
      "webp",
      "gif",
      "svg",
      "avif"
    ];
    DEFAULT_OUTPUT_FORMAT = "webp";
    DEFAULT_HASH_PROPS = [
      "src",
      "width",
      "height",
      "format",
      "quality",
      "fit",
      "position"
    ];
    DEFAULT_RESOLUTIONS = [
      640,
      // older and lower-end phones
      750,
      // iPhone 6-8
      828,
      // iPhone XR/11
      960,
      // older horizontal phones
      1080,
      // iPhone 6-8 Plus
      1280,
      // 720p
      1668,
      // Various iPads
      1920,
      // 1080p
      2048,
      // QXGA
      2560,
      // WQXGA
      3200,
      // QHD+
      3840,
      // 4K
      4480,
      // 4.5K
      5120,
      // 5K
      6016
      // 6K
    ];
    LIMITED_RESOLUTIONS = [
      640,
      // older and lower-end phones
      750,
      // iPhone 6-8
      828,
      // iPhone XR/11
      1080,
      // iPhone 6-8 Plus
      1280,
      // 720p
      1668,
      // Various iPads
      2048,
      // QXGA
      2560
      // WQXGA
    ];
    getWidths = /* @__PURE__ */ __name(({
      width,
      layout,
      breakpoints = DEFAULT_RESOLUTIONS,
      originalWidth
    }) => {
      const smallerThanOriginal = /* @__PURE__ */ __name((w) => !originalWidth || w <= originalWidth, "smallerThanOriginal");
      if (layout === "full-width") {
        return breakpoints.filter(smallerThanOriginal);
      }
      if (!width) {
        return [];
      }
      const doubleWidth = width * 2;
      const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
      if (layout === "fixed") {
        return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
      }
      if (layout === "constrained") {
        return [
          // Always include the image at 1x and 2x the specified width
          width,
          doubleWidth,
          ...breakpoints
        ].filter((w) => w <= maxSize).sort((a, b) => a - b);
      }
      return [];
    }, "getWidths");
    getSizesAttribute = /* @__PURE__ */ __name(({
      width,
      layout
    }) => {
      if (!width || !layout) {
        return void 0;
      }
      switch (layout) {
        // If screen is wider than the max size then image width is the max size,
        // otherwise it's the width of the screen
        case "constrained":
          return `(min-width: ${width}px) ${width}px, 100vw`;
        // Image is always the same width, whatever the size of the screen
        case "fixed":
          return `${width}px`;
        // Image is always the width of the screen
        case "full-width":
          return `100vw`;
        case "none":
        default:
          return void 0;
      }
    }, "getSizesAttribute");
    __name(matchPattern$1, "matchPattern$1");
    __name(matchPort$1, "matchPort$1");
    __name(matchProtocol$1, "matchProtocol$1");
    __name(matchHostname$1, "matchHostname$1");
    __name(matchPathname$1, "matchPathname$1");
    __name(isRemoteAllowed$1, "isRemoteAllowed$1");
    __name(isESMImportedImage, "isESMImportedImage");
    __name(isRemoteImage, "isRemoteImage");
    __name(resolveSrc, "resolveSrc");
    __name(isLocalService, "isLocalService");
    __name(parseQuality, "parseQuality");
    sortNumeric = /* @__PURE__ */ __name((a, b) => a - b, "sortNumeric");
    baseService = {
      validateOptions(options) {
        if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
          throw new AstroError({
            ...ExpectedImage,
            message: ExpectedImage.message(
              JSON.stringify(options.src),
              typeof options.src,
              JSON.stringify(options, (_, v) => v === void 0 ? null : v)
            )
          });
        }
        if (!isESMImportedImage(options.src)) {
          if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
            throw new AstroError({
              ...LocalImageUsedWrongly,
              message: LocalImageUsedWrongly.message(options.src)
            });
          }
          let missingDimension;
          if (!options.width && !options.height) {
            missingDimension = "both";
          } else if (!options.width && options.height) {
            missingDimension = "width";
          } else if (options.width && !options.height) {
            missingDimension = "height";
          }
          if (missingDimension) {
            throw new AstroError({
              ...MissingImageDimension,
              message: MissingImageDimension.message(missingDimension, options.src)
            });
          }
        } else {
          if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
            throw new AstroError({
              ...UnsupportedImageFormat,
              message: UnsupportedImageFormat.message(
                options.src.format,
                options.src.src,
                VALID_SUPPORTED_FORMATS
              )
            });
          }
          if (options.widths && options.densities) {
            throw new AstroError(IncompatibleDescriptorOptions);
          }
          if (options.src.format === "svg") {
            options.format = "svg";
          }
          if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
            throw new AstroError(UnsupportedImageConversion);
          }
        }
        if (!options.format) {
          options.format = DEFAULT_OUTPUT_FORMAT;
        }
        if (options.width) options.width = Math.round(options.width);
        if (options.height) options.height = Math.round(options.height);
        if (options.layout && options.width && options.height) {
          options.fit ??= "cover";
          delete options.layout;
        }
        if (options.fit === "none") {
          delete options.fit;
        }
        return options;
      },
      getHTMLAttributes(options) {
        const { targetWidth, targetHeight } = getTargetDimensions(options);
        const {
          src,
          width,
          height,
          format,
          quality,
          densities,
          widths,
          formats,
          layout,
          priority: priority2,
          fit,
          position,
          ...attributes
        } = options;
        return {
          ...attributes,
          width: targetWidth,
          height: targetHeight,
          loading: attributes.loading ?? "lazy",
          decoding: attributes.decoding ?? "async"
        };
      },
      getSrcSet(options) {
        const { targetWidth, targetHeight } = getTargetDimensions(options);
        const aspectRatio = targetWidth / targetHeight;
        const { widths, densities } = options;
        const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
        let transformedWidths = (widths ?? []).sort(sortNumeric);
        let imageWidth = options.width;
        let maxWidth = Infinity;
        if (isESMImportedImage(options.src)) {
          imageWidth = options.src.width;
          maxWidth = imageWidth;
          if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
            transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
            transformedWidths.push(maxWidth);
          }
        }
        transformedWidths = Array.from(new Set(transformedWidths));
        const {
          width: transformWidth,
          height: transformHeight,
          ...transformWithoutDimensions
        } = options;
        let allWidths = [];
        if (densities) {
          const densityValues = densities.map((density) => {
            if (typeof density === "number") {
              return density;
            } else {
              return parseFloat(density);
            }
          });
          const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
          allWidths = densityWidths.map((width, index) => ({
            width,
            descriptor: `${densityValues[index]}x`
          }));
        } else if (transformedWidths.length > 0) {
          allWidths = transformedWidths.map((width) => ({
            width,
            descriptor: `${width}w`
          }));
        }
        return allWidths.map(({ width, descriptor }) => {
          const height = Math.round(width / aspectRatio);
          const transform = { ...transformWithoutDimensions, width, height };
          return {
            transform,
            descriptor,
            attributes: {
              type: `image/${targetFormat}`
            }
          };
        });
      },
      getURL(options, imageConfig2) {
        const searchParams = new URLSearchParams();
        if (isESMImportedImage(options.src)) {
          searchParams.append("href", options.src.src);
        } else if (isRemoteAllowed$1(options.src, imageConfig2)) {
          searchParams.append("href", options.src);
        } else {
          return options.src;
        }
        const params = {
          w: "width",
          h: "height",
          q: "quality",
          f: "format",
          fit: "fit",
          position: "position"
        };
        Object.entries(params).forEach(([param, key]) => {
          options[key] && searchParams.append(param, options[key].toString());
        });
        const imageEndpoint = joinPaths("/", imageConfig2.endpoint.route);
        return `${imageEndpoint}?${searchParams}`;
      },
      parseURL(url) {
        const params = url.searchParams;
        if (!params.has("href")) {
          return void 0;
        }
        const transform = {
          src: params.get("href"),
          width: params.has("w") ? parseInt(params.get("w")) : void 0,
          height: params.has("h") ? parseInt(params.get("h")) : void 0,
          format: params.get("f"),
          quality: params.get("q"),
          fit: params.get("fit"),
          position: params.get("position") ?? void 0
        };
        return transform;
      }
    };
    __name(getTargetDimensions, "getTargetDimensions");
    __name(isImageMetadata, "isImageMetadata");
    cssFitValues = ["fill", "contain", "cover", "scale-down"];
    __name(addCSSVarsToStyle, "addCSSVarsToStyle");
    decoder2 = new TextDecoder();
    toUTF8String = /* @__PURE__ */ __name((input, start = 0, end = input.length) => decoder2.decode(input.slice(start, end)), "toUTF8String");
    toHexString = /* @__PURE__ */ __name((input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), ""), "toHexString");
    readInt16LE = /* @__PURE__ */ __name((input, offset = 0) => {
      const val = input[offset] + input[offset + 1] * 2 ** 8;
      return val | (val & 2 ** 15) * 131070;
    }, "readInt16LE");
    readUInt16BE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1], "readUInt16BE");
    readUInt16LE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8, "readUInt16LE");
    readUInt24LE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16, "readUInt24LE");
    readInt32LE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24), "readInt32LE");
    readUInt32BE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3], "readUInt32BE");
    readUInt32LE = /* @__PURE__ */ __name((input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24, "readUInt32LE");
    methods = {
      readUInt16BE,
      readUInt16LE,
      readUInt32BE,
      readUInt32LE
    };
    __name(readUInt, "readUInt");
    __name(readBox, "readBox");
    __name(findBox, "findBox");
    BMP = {
      validate: /* @__PURE__ */ __name((input) => toUTF8String(input, 0, 2) === "BM", "validate"),
      calculate: /* @__PURE__ */ __name((input) => ({
        height: Math.abs(readInt32LE(input, 22)),
        width: readUInt32LE(input, 18)
      }), "calculate")
    };
    TYPE_ICON = 1;
    SIZE_HEADER$1 = 2 + 2 + 2;
    SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
    __name(getSizeFromOffset, "getSizeFromOffset");
    __name(getImageSize$1, "getImageSize$1");
    ICO = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_ICON;
      },
      calculate(input) {
        const nbImages = readUInt16LE(input, 4);
        const imageSize = getImageSize$1(input, 0);
        if (nbImages === 1) return imageSize;
        const imgs = [imageSize];
        for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
          imgs.push(getImageSize$1(input, imageIndex));
        }
        return {
          height: imageSize.height,
          images: imgs,
          width: imageSize.width
        };
      }
    };
    TYPE_CURSOR = 2;
    CUR = {
      validate(input) {
        const reserved = readUInt16LE(input, 0);
        const imageCount = readUInt16LE(input, 4);
        if (reserved !== 0 || imageCount === 0) return false;
        const imageType = readUInt16LE(input, 2);
        return imageType === TYPE_CURSOR;
      },
      calculate: /* @__PURE__ */ __name((input) => ICO.calculate(input), "calculate")
    };
    DDS = {
      validate: /* @__PURE__ */ __name((input) => readUInt32LE(input, 0) === 542327876, "validate"),
      calculate: /* @__PURE__ */ __name((input) => ({
        height: readUInt32LE(input, 12),
        width: readUInt32LE(input, 16)
      }), "calculate")
    };
    gifRegexp = /^GIF8[79]a/;
    GIF = {
      validate: /* @__PURE__ */ __name((input) => gifRegexp.test(toUTF8String(input, 0, 6)), "validate"),
      calculate: /* @__PURE__ */ __name((input) => ({
        height: readUInt16LE(input, 8),
        width: readUInt16LE(input, 6)
      }), "calculate")
    };
    brandMap = {
      avif: "avif",
      mif1: "heif",
      msf1: "heif",
      // hief-sequence
      heic: "heic",
      heix: "heic",
      hevc: "heic",
      // heic-sequence
      hevx: "heic"
      // heic-sequence
    };
    __name(detectBrands, "detectBrands");
    HEIF = {
      validate(buffer) {
        const ftype = toUTF8String(buffer, 4, 8);
        const brand = toUTF8String(buffer, 8, 12);
        return "ftyp" === ftype && brand in brandMap;
      },
      calculate(buffer) {
        const metaBox = findBox(buffer, "meta", 0);
        const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
        const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
        const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
        if (ispeBox) {
          return {
            height: readUInt32BE(buffer, ispeBox.offset + 16),
            width: readUInt32BE(buffer, ispeBox.offset + 12),
            type: detectBrands(buffer, 8, metaBox.offset)
          };
        }
        throw new TypeError("Invalid HEIF, no size found");
      }
    };
    SIZE_HEADER = 4 + 4;
    FILE_LENGTH_OFFSET = 4;
    ENTRY_LENGTH_OFFSET = 4;
    ICON_TYPE_SIZE = {
      ICON: 32,
      "ICN#": 32,
      // m => 16 x 16
      "icm#": 16,
      icm4: 16,
      icm8: 16,
      // s => 16 x 16
      "ics#": 16,
      ics4: 16,
      ics8: 16,
      is32: 16,
      s8mk: 16,
      icp4: 16,
      // l => 32 x 32
      icl4: 32,
      icl8: 32,
      il32: 32,
      l8mk: 32,
      icp5: 32,
      ic11: 32,
      // h => 48 x 48
      ich4: 48,
      ich8: 48,
      ih32: 48,
      h8mk: 48,
      // . => 64 x 64
      icp6: 64,
      ic12: 32,
      // t => 128 x 128
      it32: 128,
      t8mk: 128,
      ic07: 128,
      // . => 256 x 256
      ic08: 256,
      ic13: 256,
      // . => 512 x 512
      ic09: 512,
      ic14: 512,
      // . => 1024 x 1024
      ic10: 1024
    };
    __name(readImageHeader, "readImageHeader");
    __name(getImageSize, "getImageSize");
    ICNS = {
      validate: /* @__PURE__ */ __name((input) => toUTF8String(input, 0, 4) === "icns", "validate"),
      calculate(input) {
        const inputLength = input.length;
        const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER;
        let imageHeader = readImageHeader(input, imageOffset);
        let imageSize = getImageSize(imageHeader[0]);
        imageOffset += imageHeader[1];
        if (imageOffset === fileLength) return imageSize;
        const result = {
          height: imageSize.height,
          images: [imageSize],
          width: imageSize.width
        };
        while (imageOffset < fileLength && imageOffset < inputLength) {
          imageHeader = readImageHeader(input, imageOffset);
          imageSize = getImageSize(imageHeader[0]);
          imageOffset += imageHeader[1];
          result.images.push(imageSize);
        }
        return result;
      }
    };
    J2C = {
      // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
      validate: /* @__PURE__ */ __name((input) => toHexString(input, 0, 4) === "ff4fff51", "validate"),
      calculate: /* @__PURE__ */ __name((input) => ({
        height: readUInt32BE(input, 12),
        width: readUInt32BE(input, 8)
      }), "calculate")
    };
    JP2 = {
      validate(input) {
        if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
        const ftypBox = findBox(input, "ftyp", 0);
        if (!ftypBox) return false;
        return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
      },
      calculate(input) {
        const jp2hBox = findBox(input, "jp2h", 0);
        const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
        if (ihdrBox) {
          return {
            height: readUInt32BE(input, ihdrBox.offset + 8),
            width: readUInt32BE(input, ihdrBox.offset + 12)
          };
        }
        throw new TypeError("Unsupported JPEG 2000 format");
      }
    };
    EXIF_MARKER = "45786966";
    APP1_DATA_SIZE_BYTES = 2;
    EXIF_HEADER_BYTES = 6;
    TIFF_BYTE_ALIGN_BYTES = 2;
    BIG_ENDIAN_BYTE_ALIGN = "4d4d";
    LITTLE_ENDIAN_BYTE_ALIGN = "4949";
    IDF_ENTRY_BYTES = 12;
    NUM_DIRECTORY_ENTRIES_BYTES = 2;
    __name(isEXIF, "isEXIF");
    __name(extractSize, "extractSize");
    __name(extractOrientation, "extractOrientation");
    __name(validateExifBlock, "validateExifBlock");
    __name(validateInput, "validateInput");
    JPG = {
      validate: /* @__PURE__ */ __name((input) => toHexString(input, 0, 2) === "ffd8", "validate"),
      calculate(input) {
        input = input.slice(4);
        let orientation;
        let next;
        while (input.length) {
          const i = readUInt16BE(input, 0);
          if (input[i] !== 255) {
            input = input.slice(i);
            continue;
          }
          if (isEXIF(input)) {
            orientation = validateExifBlock(input, i);
          }
          validateInput(input, i);
          next = input[i + 1];
          if (next === 192 || next === 193 || next === 194) {
            const size = extractSize(input, i + 5);
            if (!orientation) {
              return size;
            }
            return {
              height: size.height,
              orientation,
              width: size.width
            };
          }
          input = input.slice(i + 2);
        }
        throw new TypeError("Invalid JPG, no size found");
      }
    };
    KTX = {
      validate: /* @__PURE__ */ __name((input) => {
        const signature = toUTF8String(input, 1, 7);
        return ["KTX 11", "KTX 20"].includes(signature);
      }, "validate"),
      calculate: /* @__PURE__ */ __name((input) => {
        const type2 = input[5] === 49 ? "ktx" : "ktx2";
        const offset = type2 === "ktx" ? 36 : 20;
        return {
          height: readUInt32LE(input, offset + 4),
          width: readUInt32LE(input, offset),
          type: type2
        };
      }, "calculate")
    };
    pngSignature = "PNG\r\n\n";
    pngImageHeaderChunkName = "IHDR";
    pngFriedChunkName = "CgBI";
    PNG = {
      validate(input) {
        if (pngSignature === toUTF8String(input, 1, 8)) {
          let chunkName = toUTF8String(input, 12, 16);
          if (chunkName === pngFriedChunkName) {
            chunkName = toUTF8String(input, 28, 32);
          }
          if (chunkName !== pngImageHeaderChunkName) {
            throw new TypeError("Invalid PNG");
          }
          return true;
        }
        return false;
      },
      calculate(input) {
        if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
          return {
            height: readUInt32BE(input, 36),
            width: readUInt32BE(input, 32)
          };
        }
        return {
          height: readUInt32BE(input, 20),
          width: readUInt32BE(input, 16)
        };
      }
    };
    PNMTypes = {
      P1: "pbm/ascii",
      P2: "pgm/ascii",
      P3: "ppm/ascii",
      P4: "pbm",
      P5: "pgm",
      P6: "ppm",
      P7: "pam",
      PF: "pfm"
    };
    handlers = {
      default: /* @__PURE__ */ __name((lines) => {
        let dimensions = [];
        while (lines.length > 0) {
          const line = lines.shift();
          if (line[0] === "#") {
            continue;
          }
          dimensions = line.split(" ");
          break;
        }
        if (dimensions.length === 2) {
          return {
            height: parseInt(dimensions[1], 10),
            width: parseInt(dimensions[0], 10)
          };
        } else {
          throw new TypeError("Invalid PNM");
        }
      }, "default"),
      pam: /* @__PURE__ */ __name((lines) => {
        const size = {};
        while (lines.length > 0) {
          const line = lines.shift();
          if (line.length > 16 || line.charCodeAt(0) > 128) {
            continue;
          }
          const [key, value] = line.split(" ");
          if (key && value) {
            size[key.toLowerCase()] = parseInt(value, 10);
          }
          if (size.height && size.width) {
            break;
          }
        }
        if (size.height && size.width) {
          return {
            height: size.height,
            width: size.width
          };
        } else {
          throw new TypeError("Invalid PAM");
        }
      }, "pam")
    };
    PNM = {
      validate: /* @__PURE__ */ __name((input) => toUTF8String(input, 0, 2) in PNMTypes, "validate"),
      calculate(input) {
        const signature = toUTF8String(input, 0, 2);
        const type2 = PNMTypes[signature];
        const lines = toUTF8String(input, 3).split(/[\r\n]+/);
        const handler = handlers[type2] || handlers.default;
        return handler(lines);
      }
    };
    PSD = {
      validate: /* @__PURE__ */ __name((input) => toUTF8String(input, 0, 4) === "8BPS", "validate"),
      calculate: /* @__PURE__ */ __name((input) => ({
        height: readUInt32BE(input, 14),
        width: readUInt32BE(input, 18)
      }), "calculate")
    };
    svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
    extractorRegExps = {
      height: /\sheight=(['"])([^%]+?)\1/,
      root: svgReg,
      viewbox: /\sviewBox=(['"])(.+?)\1/i,
      width: /\swidth=(['"])([^%]+?)\1/
    };
    INCH_CM = 2.54;
    units = {
      in: 96,
      cm: 96 / INCH_CM,
      em: 16,
      ex: 8,
      m: 96 / INCH_CM * 100,
      mm: 96 / INCH_CM / 10,
      pc: 96 / 72 / 12,
      pt: 96 / 72,
      px: 1
    };
    unitsReg = new RegExp(
      `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
    );
    __name(parseLength, "parseLength");
    __name(parseViewbox, "parseViewbox");
    __name(parseAttributes, "parseAttributes");
    __name(calculateByDimensions, "calculateByDimensions");
    __name(calculateByViewbox, "calculateByViewbox");
    SVG = {
      // Scan only the first kilo-byte to speed up the check on larger files
      validate: /* @__PURE__ */ __name((input) => svgReg.test(toUTF8String(input, 0, 1e3)), "validate"),
      calculate(input) {
        const root = extractorRegExps.root.exec(toUTF8String(input));
        if (root) {
          const attrs = parseAttributes(root[0]);
          if (attrs.width && attrs.height) {
            return calculateByDimensions(attrs);
          }
          if (attrs.viewbox) {
            return calculateByViewbox(attrs, attrs.viewbox);
          }
        }
        throw new TypeError("Invalid SVG");
      }
    };
    TGA = {
      validate(input) {
        return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
      },
      calculate(input) {
        return {
          height: readUInt16LE(input, 14),
          width: readUInt16LE(input, 12)
        };
      }
    };
    __name(readIFD, "readIFD");
    __name(readValue, "readValue");
    __name(nextTag, "nextTag");
    __name(extractTags, "extractTags");
    __name(determineEndianness, "determineEndianness");
    signatures = [
      // '492049', // currently not supported
      "49492a00",
      // Little endian
      "4d4d002a"
      // Big Endian
      // '4d4d002a', // BigTIFF > 4GB. currently not supported
    ];
    TIFF = {
      validate: /* @__PURE__ */ __name((input) => signatures.includes(toHexString(input, 0, 4)), "validate"),
      calculate(input) {
        const isBigEndian = determineEndianness(input) === "BE";
        const ifdBuffer = readIFD(input, isBigEndian);
        const tags = extractTags(ifdBuffer, isBigEndian);
        const width = tags[256];
        const height = tags[257];
        if (!width || !height) {
          throw new TypeError("Invalid Tiff. Missing tags");
        }
        return { height, width };
      }
    };
    __name(calculateExtended, "calculateExtended");
    __name(calculateLossless, "calculateLossless");
    __name(calculateLossy, "calculateLossy");
    WEBP = {
      validate(input) {
        const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
        const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
        const vp8Header = "VP8" === toUTF8String(input, 12, 15);
        return riffHeader && webpHeader && vp8Header;
      },
      calculate(input) {
        const chunkHeader = toUTF8String(input, 12, 16);
        input = input.slice(20, 30);
        if (chunkHeader === "VP8X") {
          const extendedHeader = input[0];
          const validStart = (extendedHeader & 192) === 0;
          const validEnd = (extendedHeader & 1) === 0;
          if (validStart && validEnd) {
            return calculateExtended(input);
          } else {
            throw new TypeError("Invalid WebP");
          }
        }
        if (chunkHeader === "VP8 " && input[0] !== 47) {
          return calculateLossy(input);
        }
        const signature = toHexString(input, 3, 6);
        if (chunkHeader === "VP8L" && signature !== "9d012a") {
          return calculateLossless(input);
        }
        throw new TypeError("Invalid WebP");
      }
    };
    typeHandlers = /* @__PURE__ */ new Map([
      ["bmp", BMP],
      ["cur", CUR],
      ["dds", DDS],
      ["gif", GIF],
      ["heif", HEIF],
      ["icns", ICNS],
      ["ico", ICO],
      ["j2c", J2C],
      ["jp2", JP2],
      ["jpg", JPG],
      ["ktx", KTX],
      ["png", PNG],
      ["pnm", PNM],
      ["psd", PSD],
      ["svg", SVG],
      ["tga", TGA],
      ["tiff", TIFF],
      ["webp", WEBP]
    ]);
    types = Array.from(typeHandlers.keys());
    firstBytes = /* @__PURE__ */ new Map([
      [56, "psd"],
      [66, "bmp"],
      [68, "dds"],
      [71, "gif"],
      [73, "tiff"],
      [77, "tiff"],
      [82, "webp"],
      [105, "icns"],
      [137, "png"],
      [255, "jpg"]
    ]);
    __name(detector, "detector");
    __name(lookup$1, "lookup$1");
    __name(imageMetadata, "imageMetadata");
    __name(inferRemoteSize, "inferRemoteSize");
    __name(getConfiguredImageService, "getConfiguredImageService");
    __name(getImage$1, "getImage$1");
    $$Astro$2 = createAstro();
    $$Image = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
      Astro2.self = $$Image;
      const props = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      if (typeof props.width === "string") {
        props.width = parseInt(props.width);
      }
      if (typeof props.height === "string") {
        props.height = parseInt(props.height);
      }
      const layout = props.layout ?? imageConfig.experimentalLayout ?? "none";
      const useResponsive = imageConfig.experimentalResponsiveImages && layout !== "none";
      if (useResponsive) {
        props.layout ??= imageConfig.experimentalLayout;
        props.fit ??= imageConfig.experimentalObjectFit ?? "cover";
        props.position ??= imageConfig.experimentalObjectPosition ?? "center";
      }
      const image = await getImage(props);
      const additionalAttributes = {};
      if (image.srcSet.values.length > 0) {
        additionalAttributes.srcset = image.srcSet.attribute;
      }
      const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
      return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/astro/components/Image.astro", void 0);
    mimes = {
      "3g2": "video/3gpp2",
      "3gp": "video/3gpp",
      "3gpp": "video/3gpp",
      "3mf": "model/3mf",
      "aac": "audio/aac",
      "ac": "application/pkix-attr-cert",
      "adp": "audio/adpcm",
      "adts": "audio/aac",
      "ai": "application/postscript",
      "aml": "application/automationml-aml+xml",
      "amlx": "application/automationml-amlx+zip",
      "amr": "audio/amr",
      "apng": "image/apng",
      "appcache": "text/cache-manifest",
      "appinstaller": "application/appinstaller",
      "appx": "application/appx",
      "appxbundle": "application/appxbundle",
      "asc": "application/pgp-keys",
      "atom": "application/atom+xml",
      "atomcat": "application/atomcat+xml",
      "atomdeleted": "application/atomdeleted+xml",
      "atomsvc": "application/atomsvc+xml",
      "au": "audio/basic",
      "avci": "image/avci",
      "avcs": "image/avcs",
      "avif": "image/avif",
      "aw": "application/applixware",
      "bdoc": "application/bdoc",
      "bin": "application/octet-stream",
      "bmp": "image/bmp",
      "bpk": "application/octet-stream",
      "btf": "image/prs.btif",
      "btif": "image/prs.btif",
      "buffer": "application/octet-stream",
      "ccxml": "application/ccxml+xml",
      "cdfx": "application/cdfx+xml",
      "cdmia": "application/cdmi-capability",
      "cdmic": "application/cdmi-container",
      "cdmid": "application/cdmi-domain",
      "cdmio": "application/cdmi-object",
      "cdmiq": "application/cdmi-queue",
      "cer": "application/pkix-cert",
      "cgm": "image/cgm",
      "cjs": "application/node",
      "class": "application/java-vm",
      "coffee": "text/coffeescript",
      "conf": "text/plain",
      "cpl": "application/cpl+xml",
      "cpt": "application/mac-compactpro",
      "crl": "application/pkix-crl",
      "css": "text/css",
      "csv": "text/csv",
      "cu": "application/cu-seeme",
      "cwl": "application/cwl",
      "cww": "application/prs.cww",
      "davmount": "application/davmount+xml",
      "dbk": "application/docbook+xml",
      "deb": "application/octet-stream",
      "def": "text/plain",
      "deploy": "application/octet-stream",
      "dib": "image/bmp",
      "disposition-notification": "message/disposition-notification",
      "dist": "application/octet-stream",
      "distz": "application/octet-stream",
      "dll": "application/octet-stream",
      "dmg": "application/octet-stream",
      "dms": "application/octet-stream",
      "doc": "application/msword",
      "dot": "application/msword",
      "dpx": "image/dpx",
      "drle": "image/dicom-rle",
      "dsc": "text/prs.lines.tag",
      "dssc": "application/dssc+der",
      "dtd": "application/xml-dtd",
      "dump": "application/octet-stream",
      "dwd": "application/atsc-dwd+xml",
      "ear": "application/java-archive",
      "ecma": "application/ecmascript",
      "elc": "application/octet-stream",
      "emf": "image/emf",
      "eml": "message/rfc822",
      "emma": "application/emma+xml",
      "emotionml": "application/emotionml+xml",
      "eps": "application/postscript",
      "epub": "application/epub+zip",
      "exe": "application/octet-stream",
      "exi": "application/exi",
      "exp": "application/express",
      "exr": "image/aces",
      "ez": "application/andrew-inset",
      "fdf": "application/fdf",
      "fdt": "application/fdt+xml",
      "fits": "image/fits",
      "g3": "image/g3fax",
      "gbr": "application/rpki-ghostbusters",
      "geojson": "application/geo+json",
      "gif": "image/gif",
      "glb": "model/gltf-binary",
      "gltf": "model/gltf+json",
      "gml": "application/gml+xml",
      "gpx": "application/gpx+xml",
      "gram": "application/srgs",
      "grxml": "application/srgs+xml",
      "gxf": "application/gxf",
      "gz": "application/gzip",
      "h261": "video/h261",
      "h263": "video/h263",
      "h264": "video/h264",
      "heic": "image/heic",
      "heics": "image/heic-sequence",
      "heif": "image/heif",
      "heifs": "image/heif-sequence",
      "hej2": "image/hej2k",
      "held": "application/atsc-held+xml",
      "hjson": "application/hjson",
      "hlp": "application/winhlp",
      "hqx": "application/mac-binhex40",
      "hsj2": "image/hsj2",
      "htm": "text/html",
      "html": "text/html",
      "ics": "text/calendar",
      "ief": "image/ief",
      "ifb": "text/calendar",
      "iges": "model/iges",
      "igs": "model/iges",
      "img": "application/octet-stream",
      "in": "text/plain",
      "ini": "text/plain",
      "ink": "application/inkml+xml",
      "inkml": "application/inkml+xml",
      "ipfix": "application/ipfix",
      "iso": "application/octet-stream",
      "its": "application/its+xml",
      "jade": "text/jade",
      "jar": "application/java-archive",
      "jhc": "image/jphc",
      "jls": "image/jls",
      "jp2": "image/jp2",
      "jpe": "image/jpeg",
      "jpeg": "image/jpeg",
      "jpf": "image/jpx",
      "jpg": "image/jpeg",
      "jpg2": "image/jp2",
      "jpgm": "image/jpm",
      "jpgv": "video/jpeg",
      "jph": "image/jph",
      "jpm": "image/jpm",
      "jpx": "image/jpx",
      "js": "text/javascript",
      "json": "application/json",
      "json5": "application/json5",
      "jsonld": "application/ld+json",
      "jsonml": "application/jsonml+json",
      "jsx": "text/jsx",
      "jt": "model/jt",
      "jxl": "image/jxl",
      "jxr": "image/jxr",
      "jxra": "image/jxra",
      "jxrs": "image/jxrs",
      "jxs": "image/jxs",
      "jxsc": "image/jxsc",
      "jxsi": "image/jxsi",
      "jxss": "image/jxss",
      "kar": "audio/midi",
      "ktx": "image/ktx",
      "ktx2": "image/ktx2",
      "less": "text/less",
      "lgr": "application/lgr+xml",
      "list": "text/plain",
      "litcoffee": "text/coffeescript",
      "log": "text/plain",
      "lostxml": "application/lost+xml",
      "lrf": "application/octet-stream",
      "m1v": "video/mpeg",
      "m21": "application/mp21",
      "m2a": "audio/mpeg",
      "m2t": "video/mp2t",
      "m2ts": "video/mp2t",
      "m2v": "video/mpeg",
      "m3a": "audio/mpeg",
      "m4a": "audio/mp4",
      "m4p": "application/mp4",
      "m4s": "video/iso.segment",
      "ma": "application/mathematica",
      "mads": "application/mads+xml",
      "maei": "application/mmt-aei+xml",
      "man": "text/troff",
      "manifest": "text/cache-manifest",
      "map": "application/json",
      "mar": "application/octet-stream",
      "markdown": "text/markdown",
      "mathml": "application/mathml+xml",
      "mb": "application/mathematica",
      "mbox": "application/mbox",
      "md": "text/markdown",
      "mdx": "text/mdx",
      "me": "text/troff",
      "mesh": "model/mesh",
      "meta4": "application/metalink4+xml",
      "metalink": "application/metalink+xml",
      "mets": "application/mets+xml",
      "mft": "application/rpki-manifest",
      "mid": "audio/midi",
      "midi": "audio/midi",
      "mime": "message/rfc822",
      "mj2": "video/mj2",
      "mjp2": "video/mj2",
      "mjs": "text/javascript",
      "mml": "text/mathml",
      "mods": "application/mods+xml",
      "mov": "video/quicktime",
      "mp2": "audio/mpeg",
      "mp21": "application/mp21",
      "mp2a": "audio/mpeg",
      "mp3": "audio/mpeg",
      "mp4": "video/mp4",
      "mp4a": "audio/mp4",
      "mp4s": "application/mp4",
      "mp4v": "video/mp4",
      "mpd": "application/dash+xml",
      "mpe": "video/mpeg",
      "mpeg": "video/mpeg",
      "mpf": "application/media-policy-dataset+xml",
      "mpg": "video/mpeg",
      "mpg4": "video/mp4",
      "mpga": "audio/mpeg",
      "mpp": "application/dash-patch+xml",
      "mrc": "application/marc",
      "mrcx": "application/marcxml+xml",
      "ms": "text/troff",
      "mscml": "application/mediaservercontrol+xml",
      "msh": "model/mesh",
      "msi": "application/octet-stream",
      "msix": "application/msix",
      "msixbundle": "application/msixbundle",
      "msm": "application/octet-stream",
      "msp": "application/octet-stream",
      "mtl": "model/mtl",
      "mts": "video/mp2t",
      "musd": "application/mmt-usd+xml",
      "mxf": "application/mxf",
      "mxmf": "audio/mobile-xmf",
      "mxml": "application/xv+xml",
      "n3": "text/n3",
      "nb": "application/mathematica",
      "nq": "application/n-quads",
      "nt": "application/n-triples",
      "obj": "model/obj",
      "oda": "application/oda",
      "oga": "audio/ogg",
      "ogg": "audio/ogg",
      "ogv": "video/ogg",
      "ogx": "application/ogg",
      "omdoc": "application/omdoc+xml",
      "onepkg": "application/onenote",
      "onetmp": "application/onenote",
      "onetoc": "application/onenote",
      "onetoc2": "application/onenote",
      "opf": "application/oebps-package+xml",
      "opus": "audio/ogg",
      "otf": "font/otf",
      "owl": "application/rdf+xml",
      "oxps": "application/oxps",
      "p10": "application/pkcs10",
      "p7c": "application/pkcs7-mime",
      "p7m": "application/pkcs7-mime",
      "p7s": "application/pkcs7-signature",
      "p8": "application/pkcs8",
      "pdf": "application/pdf",
      "pfr": "application/font-tdpfr",
      "pgp": "application/pgp-encrypted",
      "pkg": "application/octet-stream",
      "pki": "application/pkixcmp",
      "pkipath": "application/pkix-pkipath",
      "pls": "application/pls+xml",
      "png": "image/png",
      "prc": "model/prc",
      "prf": "application/pics-rules",
      "provx": "application/provenance+xml",
      "ps": "application/postscript",
      "pskcxml": "application/pskc+xml",
      "pti": "image/prs.pti",
      "qt": "video/quicktime",
      "raml": "application/raml+yaml",
      "rapd": "application/route-apd+xml",
      "rdf": "application/rdf+xml",
      "relo": "application/p2p-overlay+xml",
      "rif": "application/reginfo+xml",
      "rl": "application/resource-lists+xml",
      "rld": "application/resource-lists-diff+xml",
      "rmi": "audio/midi",
      "rnc": "application/relax-ng-compact-syntax",
      "rng": "application/xml",
      "roa": "application/rpki-roa",
      "roff": "text/troff",
      "rq": "application/sparql-query",
      "rs": "application/rls-services+xml",
      "rsat": "application/atsc-rsat+xml",
      "rsd": "application/rsd+xml",
      "rsheet": "application/urc-ressheet+xml",
      "rss": "application/rss+xml",
      "rtf": "text/rtf",
      "rtx": "text/richtext",
      "rusd": "application/route-usd+xml",
      "s3m": "audio/s3m",
      "sbml": "application/sbml+xml",
      "scq": "application/scvp-cv-request",
      "scs": "application/scvp-cv-response",
      "sdp": "application/sdp",
      "senmlx": "application/senml+xml",
      "sensmlx": "application/sensml+xml",
      "ser": "application/java-serialized-object",
      "setpay": "application/set-payment-initiation",
      "setreg": "application/set-registration-initiation",
      "sgi": "image/sgi",
      "sgm": "text/sgml",
      "sgml": "text/sgml",
      "shex": "text/shex",
      "shf": "application/shf+xml",
      "shtml": "text/html",
      "sieve": "application/sieve",
      "sig": "application/pgp-signature",
      "sil": "audio/silk",
      "silo": "model/mesh",
      "siv": "application/sieve",
      "slim": "text/slim",
      "slm": "text/slim",
      "sls": "application/route-s-tsid+xml",
      "smi": "application/smil+xml",
      "smil": "application/smil+xml",
      "snd": "audio/basic",
      "so": "application/octet-stream",
      "spdx": "text/spdx",
      "spp": "application/scvp-vp-response",
      "spq": "application/scvp-vp-request",
      "spx": "audio/ogg",
      "sql": "application/sql",
      "sru": "application/sru+xml",
      "srx": "application/sparql-results+xml",
      "ssdl": "application/ssdl+xml",
      "ssml": "application/ssml+xml",
      "stk": "application/hyperstudio",
      "stl": "model/stl",
      "stpx": "model/step+xml",
      "stpxz": "model/step-xml+zip",
      "stpz": "model/step+zip",
      "styl": "text/stylus",
      "stylus": "text/stylus",
      "svg": "image/svg+xml",
      "svgz": "image/svg+xml",
      "swidtag": "application/swid+xml",
      "t": "text/troff",
      "t38": "image/t38",
      "td": "application/urc-targetdesc+xml",
      "tei": "application/tei+xml",
      "teicorpus": "application/tei+xml",
      "text": "text/plain",
      "tfi": "application/thraud+xml",
      "tfx": "image/tiff-fx",
      "tif": "image/tiff",
      "tiff": "image/tiff",
      "toml": "application/toml",
      "tr": "text/troff",
      "trig": "application/trig",
      "ts": "video/mp2t",
      "tsd": "application/timestamped-data",
      "tsv": "text/tab-separated-values",
      "ttc": "font/collection",
      "ttf": "font/ttf",
      "ttl": "text/turtle",
      "ttml": "application/ttml+xml",
      "txt": "text/plain",
      "u3d": "model/u3d",
      "u8dsn": "message/global-delivery-status",
      "u8hdr": "message/global-headers",
      "u8mdn": "message/global-disposition-notification",
      "u8msg": "message/global",
      "ubj": "application/ubjson",
      "uri": "text/uri-list",
      "uris": "text/uri-list",
      "urls": "text/uri-list",
      "vcard": "text/vcard",
      "vrml": "model/vrml",
      "vtt": "text/vtt",
      "vxml": "application/voicexml+xml",
      "war": "application/java-archive",
      "wasm": "application/wasm",
      "wav": "audio/wav",
      "weba": "audio/webm",
      "webm": "video/webm",
      "webmanifest": "application/manifest+json",
      "webp": "image/webp",
      "wgsl": "text/wgsl",
      "wgt": "application/widget",
      "wif": "application/watcherinfo+xml",
      "wmf": "image/wmf",
      "woff": "font/woff",
      "woff2": "font/woff2",
      "wrl": "model/vrml",
      "wsdl": "application/wsdl+xml",
      "wspolicy": "application/wspolicy+xml",
      "x3d": "model/x3d+xml",
      "x3db": "model/x3d+fastinfoset",
      "x3dbz": "model/x3d+binary",
      "x3dv": "model/x3d-vrml",
      "x3dvz": "model/x3d+vrml",
      "x3dz": "model/x3d+xml",
      "xaml": "application/xaml+xml",
      "xav": "application/xcap-att+xml",
      "xca": "application/xcap-caps+xml",
      "xcs": "application/calendar+xml",
      "xdf": "application/xcap-diff+xml",
      "xdssc": "application/dssc+xml",
      "xel": "application/xcap-el+xml",
      "xenc": "application/xenc+xml",
      "xer": "application/patch-ops-error+xml",
      "xfdf": "application/xfdf",
      "xht": "application/xhtml+xml",
      "xhtml": "application/xhtml+xml",
      "xhvml": "application/xv+xml",
      "xlf": "application/xliff+xml",
      "xm": "audio/xm",
      "xml": "text/xml",
      "xns": "application/xcap-ns+xml",
      "xop": "application/xop+xml",
      "xpl": "application/xproc+xml",
      "xsd": "application/xml",
      "xsf": "application/prs.xsf+xml",
      "xsl": "application/xml",
      "xslt": "application/xml",
      "xspf": "application/xspf+xml",
      "xvm": "application/xv+xml",
      "xvml": "application/xv+xml",
      "yaml": "text/yaml",
      "yang": "application/yang",
      "yin": "application/yin+xml",
      "yml": "text/yaml",
      "zip": "application/zip"
    };
    __name(lookup, "lookup");
    $$Astro$1 = createAstro();
    $$Picture = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
      Astro2.self = $$Picture;
      const defaultFormats = ["webp"];
      const defaultFallbackFormat = "png";
      const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
      const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
      if (props.alt === void 0 || props.alt === null) {
        throw new AstroError(ImageMissingAlt);
      }
      const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
      if (scopedStyleClass) {
        if (pictureAttributes.class) {
          pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
        } else {
          pictureAttributes.class = scopedStyleClass;
        }
      }
      const layout = props.layout ?? imageConfig.experimentalLayout ?? "none";
      const useResponsive = imageConfig.experimentalResponsiveImages && layout !== "none";
      if (useResponsive) {
        props.layout ??= imageConfig.experimentalLayout;
        props.fit ??= imageConfig.experimentalObjectFit ?? "cover";
        props.position ??= imageConfig.experimentalObjectPosition ?? "center";
      }
      for (const key in props) {
        if (key.startsWith("data-astro-cid")) {
          pictureAttributes[key] = props[key];
        }
      }
      const originalSrc = await resolveSrc(props.src);
      const optimizedImages = await Promise.all(
        formats.map(
          async (format) => await getImage({
            ...props,
            src: originalSrc,
            format,
            widths: props.widths,
            densities: props.densities
          })
        )
      );
      let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
      if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
        resultFallbackFormat = originalSrc.format;
      }
      const fallbackImage = await getImage({
        ...props,
        format: resultFallbackFormat,
        widths: props.widths,
        densities: props.densities
      });
      const imgAdditionalAttributes = {};
      const sourceAdditionalAttributes = {};
      if (props.sizes) {
        sourceAdditionalAttributes.sizes = props.sizes;
      }
      if (fallbackImage.srcSet.values.length > 0) {
        imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
      }
      const { class: className, ...attributes } = {
        ...imgAdditionalAttributes,
        ...fallbackImage.attributes
      };
      return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
        const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
        return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
      })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/astro/components/Picture.astro", void 0);
    mod = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null
    }, Symbol.toStringTag, { value: "Module" }));
    $$Astro = createAstro();
    $$Font = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
      Astro2.self = $$Font;
      const { fontsData } = mod;
      if (!fontsData) {
        throw new AstroError(ExperimentalFontsNotEnabled);
      }
      const { cssVariable, preload = false } = Astro2.props;
      const data = fontsData.get(cssVariable);
      if (!data) {
        throw new AstroError({
          ...FontFamilyNotFound,
          message: FontFamilyNotFound.message(cssVariable)
        });
      }
      return renderTemplate`${preload && data.preloadData.map(({ url, type: type2 }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type2}`, "type")} crossorigin>`)}<style>${unescapeHTML(data.css)}</style>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/astro/components/Font.astro", void 0);
    imageConfig = { "endpoint": { "route": "/_image", "entrypoint": "@astrojs/cloudflare/image-endpoint" }, "service": { "entrypoint": "astro/assets/services/sharp", "config": {} }, "domains": [], "remotePatterns": [], "experimentalResponsiveImages": false };
    getImage = /* @__PURE__ */ __name(async (options) => await getImage$1(options, imageConfig), "getImage");
    URL_PROTOCOL_REGEX = /^(?:(?:http|ftp|https|ws):?\/\/|\/\/)/;
    __name(isRemotePath2, "isRemotePath");
    __name(matchPattern, "matchPattern");
    __name(matchPort, "matchPort");
    __name(matchProtocol, "matchProtocol");
    __name(matchHostname, "matchHostname");
    __name(matchPathname, "matchPathname");
    __name(isRemoteAllowed, "isRemoteAllowed");
    prerender = false;
    GET = /* @__PURE__ */ __name((ctx) => {
      const href = ctx.url.searchParams.get("href");
      if (!href) {
        return new Response("Missing 'href' query parameter", {
          status: 400,
          statusText: "Missing 'href' query parameter"
        });
      }
      if (isRemotePath2(href)) {
        if (isRemoteAllowed(href, imageConfig) === false) {
          return new Response("Forbidden", { status: 403 });
        } else {
          return Response.redirect(href, 302);
        }
      }
      return fetch(new URL(href, ctx.url.origin));
    }, "GET");
    _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      GET,
      prerender
    }, Symbol.toStringTag, { value: "Module" }));
    page = /* @__PURE__ */ __name(() => _page, "page");
  }
});

// dist/_worker.js/pages/_image.astro.mjs
var image_astro_exports = {};
__export(image_astro_exports, {
  page: () => page,
  renderers: () => renderers
});
var init_image_astro = __esm({
  "dist/_worker.js/pages/_image.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_image_endpoint_By2xXWVB();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
  }
});

// dist/_worker.js/chunks/PrimaryLayout_DfsEkHQg.mjs
var $$Navbar, $$Footer, $$PrimaryLayout;
var init_PrimaryLayout_DfsEkHQg = __esm({
  "dist/_worker.js/chunks/PrimaryLayout_DfsEkHQg.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Navbar = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-md sticky top-0 z-50"> <div class="container mx-auto px-4"> <nav class="flex items-center justify-between h-16"> <!-- logo --> <div class="flex-shrink-0"> <a href="/" class="flex items-center"> <img src="/images/logo/logo.png" alt="Logo Harum Care" class="h-8 w-auto mr-2"> </a> </div> <!-- menu desktop --> <div class="hidden md:block"> <ul class="flex space-x-8"> <li> <a href="/" class="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Beranda</a> </li> <li> <a href="/campaign" class="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Kampanye</a> </li> <li> <a href="/news" class="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Berita</a> </li> </ul> </div> <!-- tombol aksi desktop --> <div id="auth-nav" class="hidden md:flex items-center space-x-3"> <!-- placeholder javascript --> <span class="text-gray-600">Loading...</span> </div> </nav> </div> </header> <!-- Mobile Navigation Bar - Sticky Bottom --> <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"> <div class="flex items-center justify-around py-2"> <!-- Beranda --> <a href="/" class="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-blue-600 transition duration-200"> <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> <span class="text-xs">Beranda</span> </a> <!-- Kampanye --> <a href="/campaign" class="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-blue-600 transition duration-200"> <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg> <span class="text-xs">Kampanye</span> </a> <!-- Berita --> <a href="/news" class="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-blue-600 transition duration-200"> <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> <span class="text-xs">Berita</span> </a> <!-- Profile --> <a href="/profile" class="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-blue-600 transition duration-200"> <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span class="text-xs">Profil</span> </a> </div> </div> ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Navbar.astro", void 0);
    $$Footer = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 border-t border-gray-200 pt-10 pb-6"> <div class="container mx-auto px-4"> <!-- Grid untuk bagian utama footer --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> <!-- Kolom 1: Logo & Tentang --> <div> <h3 class="font-bold text-gray-800 mb-4">Tentang Harum Care</h3> <p class="text-gray-600 mb-4">Platform donasi terpercaya untuk membantu mereka yang membutuhkan dengan transparansi dan akuntabilitas.</p> <div class="flex space-x-4"> <a href="#" class="text-gray-600 hover:text-blue-600"> <span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-600 hover:text-blue-600"> <span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-600 hover:text-blue-600"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> </div> </div> <!-- Kolom 2: Kontak & Bantuan --> <div> <h3 class="font-bold text-gray-800 mb-4">Kontak & Bantuan</h3> <ul class="space-y-2"> <li class="flex items-start"> <svg class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span class="text-gray-600">harumcare@gmail.com</span> </li> <li class="flex items-start"> <svg class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-gray-600">+62 21 1234 5678</span> </li> <li class="flex items-start"> <svg class="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="text-gray-600">Karawang, Jawa Barat, Indonesia</span> </li> </ul> </div> </div> <!-- Garis pemisah --> <div class="border-t border-gray-200 pt-6"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-600 text-sm">
&copy; 2025 Harum Care Indonesia. All rights reserved.
</p> <div class="mt-4 md:mt-0"> <ul class="flex space-x-4 text-sm"> <li><a href="/privacy" class="text-gray-600 hover:text-blue-600">Kebijakan Privasi</a></li> <li><a href="/terms" class="text-gray-600 hover:text-blue-600">Syarat & Ketentuan</a></li> <li><a href="/faq" class="text-gray-600 hover:text-blue-600">FAQ</a></li> </ul> </div> </div> </div> </div> </footer>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Footer.astro", void 0);
    $$PrimaryLayout = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Harum Care Indonesia - Platform donasi terpercaya dan transparan"><link rel="icon" href="/favicon.png"><title>Harum Care Indonesia</title>${renderHead()}</head> <body class="font-inter bg-gray-50 text-gray-800"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="container mx-auto min-h-[calc(100vh-200px)]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/PrimaryLayout.astro", void 0);
  }
});

// dist/_worker.js/pages/404.astro.mjs
var astro_exports = {};
__export(astro_exports, {
  page: () => page2,
  renderers: () => renderers
});
var $$404, $$file, $$url, _page2, page2;
var init_astro = __esm({
  "dist/_worker.js/pages/404.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$404 = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, { "title": "404 - Halaman Tidak Ditemukan" }, { "default": /* @__PURE__ */ __name(($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 flex items-center justify-center"> <div class="text-center"> <div class="mb-8"> <h1 class="text-9xl font-bold text-gray-300">404</h1> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2> <p class="text-gray-600 mb-8">
Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
</p> </div> <div class="space-y-4"> <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
Kembali ke Beranda
</a> <div class="flex justify-center space-x-4"> <a href="/news" class="text-blue-600 hover:text-blue-700 font-medium">
Berita
</a> <a href="/campaign" class="text-blue-600 hover:text-blue-700 font-medium">
Kampanye
</a> <a href="/about" class="text-blue-600 hover:text-blue-700 font-medium">
Tentang Kami
</a> </div> </div> </div> </main> `, "default") })}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/404.astro", void 0);
    $$file = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/404.astro";
    $$url = "/404";
    _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$404,
      file: $$file,
      url: $$url
    }, Symbol.toStringTag, { value: "Module" }));
    page2 = /* @__PURE__ */ __name(() => _page2, "page");
  }
});

// dist/_worker.js/pages/about.astro.mjs
var about_astro_exports = {};
__export(about_astro_exports, {
  page: () => page3,
  renderers: () => renderers
});
var $$About, $$file2, $$url2, _page3, page3;
var init_about_astro = __esm({
  "dist/_worker.js/pages/about.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$About = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${maybeRenderHead()}<h1>Tentang Kami</h1>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/about.astro", void 0);
    $$file2 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/about.astro";
    $$url2 = "/about";
    _page3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$About,
      file: $$file2,
      url: $$url2
    }, Symbol.toStringTag, { value: "Module" }));
    page3 = /* @__PURE__ */ __name(() => _page3, "page");
  }
});

// dist/_worker.js/chunks/AdminLayout_sNY25o1Y.mjs
var $$Astro2, $$AdminLayout;
var init_AdminLayout_sNY25o1Y = __esm({
  "dist/_worker.js/chunks/AdminLayout_sNY25o1Y.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro2 = createAstro();
    $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro2, $$props, $$slots);
      Astro2.self = $$AdminLayout;
      const { title: title2 = "Admin Dashboard" } = Astro2.props;
      const currentPath = Astro2.url.pathname;
      const isActive = /* @__PURE__ */ __name((path) => {
        if (path === "/admin" && currentPath === "/admin") return true;
        if (path !== "/admin" && currentPath.startsWith(path)) return true;
        return false;
      }, "isActive");
      const menuItems = [
        {
          name: "Home",
          href: "/admin/",
          icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        },
        {
          name: "Campaign",
          href: "/admin/campaign",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
          name: "News",
          href: "/admin/news",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
          name: "User",
          href: "/admin/users",
          icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        },
        {
          name: "Donation",
          href: "/admin/donation",
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 1118 0z"
        }
      ];
      return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Harum Care Indonesia - Admin Dashboard"><link rel="icon" href="/favicon.svg"><title>${title2} - Harum Care Indonesia</title>${renderHead()}</head> <body class="bg-gray-50"> <!-- Authentication Loading Screen --> <div id="authLoading" class="fixed inset-0 bg-white z-50 flex items-center justify-center"> <div class="text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p class="text-gray-600">Memverifikasi akses...</p> </div> </div> <!-- Unauthorized Access Screen --> <div id="authError" class="fixed inset-0 bg-white z-50 flex items-center justify-center hidden"> <div class="text-center max-w-md mx-auto p-6"> <div class="text-red-500 mb-4"> <svg class="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h2 class="text-2xl font-bold text-gray-900 mb-2">Akses Ditolak</h2> <p class="text-gray-600 mb-6">Anda tidak memiliki akses ke halaman admin atau sesi telah berakhir.</p> <div class="space-y-3"> <button id="loginRedirect" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
Login sebagai Admin
</button> <button id="homeRedirect" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
Kembali ke Beranda
</button> </div> </div> </div> <!-- Main Admin Interface --> <div id="adminInterface" class="flex h-screen hidden"> <!-- Sidebar --> <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0" id="sidebar"> <div class="flex items-center justify-center h-16 px-4 bg-blue-600"> <a href="/"> <img src="/images/logo/logo-putih.png" alt="Logo Harum Care" class="h-8 w-auto mr-2"> </a> </div> <nav class="mt-8"> <div class="px-4 space-y-2"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : "text-gray-700 hover:bg-gray-100"}`, "class")}> <svg${addAttribute(`mr-3 h-5 w-5 ${isActive(item.href) ? "text-blue-500" : "text-gray-500 group-hover:text-gray-700"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(item.icon, "d")}></path> </svg> ${item.name} </a>`)} </div> </nav> <!-- Logout Button --> <div class="absolute bottom-0 w-full p-4"> <button id="logoutBtn" class="group flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"> <svg class="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg>
Logout
</button> </div> </div> <!-- Main Content --> <div class="flex-1 flex flex-col overflow-hidden lg:ml-0"> <!-- Top Header --> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="flex items-center justify-between h-16 px-4"> <!-- Mobile menu button --> <div class="flex items-center"> <button class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" id="mobile-menu-button"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <h1 class="ml-4 text-2xl font-semibold text-gray-900 lg:ml-0"> ${title2} </h1> </div> <!-- User Profile --> <div class="flex items-center space-x-4"> <div class="relative"> <button class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center"> <span class="text-sm font-medium text-white">A</span> </div> <span class="ml-2 text-gray-700 font-medium" id="adminName">Admin</span> </button> </div> </div> </div> </header> <!-- Page Content --> <main class="flex-1 overflow-y-auto bg-gray-50"> <div class="p-6"> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> </div> <!-- Mobile menu overlay --> <div class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden" id="mobile-overlay"></div> ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/AdminLayout.astro", void 0);
  }
});

// dist/_worker.js/pages/admin/campaign/create-campaign.astro.mjs
var create_campaign_astro_exports = {};
__export(create_campaign_astro_exports, {
  page: () => page4,
  renderers: () => renderers
});
var $$CreateCampaign, $$file3, $$url3, _page4, page4;
var init_create_campaign_astro = __esm({
  "dist/_worker.js/pages/admin/campaign/create-campaign.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$CreateCampaign = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Create Campaign" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="create-section" class="create-campaign-section max-w-7xl flex items-center justify-center mx-auto px-4 py-16" style="display: none;"> <div class="container bg-white shadow-2xl shadow-blue-500/50 max-w-2xl mx-auto px-8 md:px-0 py-11 rounded-2xl"> <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">Buat Campaign Baru</h2> <form id="create-campaign-form" class="max-w-md mx-auto" enctype="multipart/form-data"> <div class="mb-6"> <label for="title-input" class="block text-gray-600 mb-2"></label> <input placeholder="Judul Campaign" type="text" name="title" required id="title-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> <div class="mb-6"> <label for="description-input" class="block text-gray-600 mb-2"></label> <textarea placeholder="Deskripsi Campaign" name="description" id="description-input" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea> </div> <div class="mb-6"> <label for="image-input" class="block text-gray-600 mb-2">Campaign Image</label> <div class="space-y-4"> <input type="file" name="image" id="image-input" accept="image/*" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"> <div id="image-preview" class="hidden"> <img id="preview-img" src="" alt="Preview" class="w-full max-w-xs mx-auto rounded-lg shadow-md"> <p class="text-sm text-gray-500 text-center mt-2">Image Preview</p> </div> </div> </div> <div class="mb-6"> <label for="targetAmount-input" class="block text-gray-600 mb-2"></label> <input placeholder="Target Donasi" type="number" name="targetAmount" required id="targetAmount-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> <div class="mb-6"> <label for="startDate-input" class="block text-gray-600 mb-2">Start Date</label> <input type="date" name="startDate" required id="startDate-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> <div class="mb-6"> <label for="endDate-input" class="block text-gray-600 mb-2">End Date</label> <input type="date" name="endDate" required id="endDate-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> <div class="mb-6"> <label for="organizationName-input" class="block text-gray-600 mb-2"></label> <input placeholder="Nama Organisasi" type="text" name="organizationName" id="organizationName-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> <div class="mb-6"> <label for="organizationLogo-input" class="block text-gray-600 mb-2">Logo Organisasi</label> <div class="space-y-4"> <input type="file" name="organizationLogo" id="organizationLogo-input" accept="image/*" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"> <div id="logo-preview" class="hidden"> <img id="preview-logo" src="" alt="Logo Preview" class="w-24 h-24 mx-auto rounded-lg shadow-md object-cover"> <p class="text-sm text-gray-500 text-center mt-2">Logo Preview</p> </div> </div> </div> <div class="mb-8"> <label for="category-input" class="block text-gray-600 mb-2">Kategori</label> <select name="category" id="category-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> <option value="">Pilih Kategori</option> <option value="kesehatan">Kesehatan</option> <option value="pendidikan">Pendidikan</option> <option value="lingkungan">Lingkungan</option> <option value="bencana">Bencana Alam</option> <option value="kemiskinan">Kemiskinan</option> <option value="anak">Anak-anak</option> <option value="lansia">Lansia</option> <option value="difabel">Difabel</option> <option value="hewan">Hewan</option> <option value="new">+ Tambah Kategori Baru</option> </select> <div id="new-category-input" class="mt-4 hidden"> <input type="text" id="custom-category" placeholder="Masukkan nama kategori baru" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> </div> </div> <button type="submit" id="submit-btn" class="w-full bg-blue-600 text-white p-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"> <span id="submit-text">Buat Campaign</span> <span id="loading-text" class="hidden">Membuat...</span> </button> </form> </div> </section> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro", void 0);
    $$file3 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro";
    $$url3 = "/admin/campaign/create-campaign";
    _page4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$CreateCampaign,
      file: $$file3,
      url: $$url3
    }, Symbol.toStringTag, { value: "Module" }));
    page4 = /* @__PURE__ */ __name(() => _page4, "page");
  }
});

// dist/_worker.js/pages/admin/campaign.astro.mjs
var campaign_astro_exports = {};
__export(campaign_astro_exports, {
  page: () => page5,
  renderers: () => renderers
});
var $$Index, $$file4, $$url4, _page5, page5;
var init_campaign_astro = __esm({
  "dist/_worker.js/pages/admin/campaign.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Kelola Campaigns" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-6"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <div class="mt-4 sm:mt-0"> <a href="/admin/campaign/create-campaign"> <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
+ Tambah Campaign
</button> </a> </div> </div> </div>  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Cari Campaign</label> <input type="text" id="searchInput" placeholder="Cari berdasarkan judul..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Kategori</label> <select id="categoryFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Kategori</option> <!-- Categories will be populated dynamically --> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Status</label> <select id="statusFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Status</option> <option value="active">Aktif</option> <option value="completed">Selesai</option> <option value="expired">Berakhir</option> </select> </div> <div class="flex items-end"> <button id="resetFilters" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Reset Filter
</button> </div> </div> </div>  <div id="loadingState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p class="text-gray-600">Memuat data campaign...</p> </div>  <div id="errorState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center hidden"> <div class="text-red-500 mb-4"> <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">Gagal Memuat Data</h3> <p class="text-gray-600 mb-4">Terjadi kesalahan saat mengambil data campaign.</p> <button id="retryButton" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Coba Lagi
</button> </div>  <div id="campaignTable" class="bg-white rounded-lg shadow-sm border border-gray-200 hidden"> <div class="px-6 py-4 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Daftar Campaign</h3> <p class="text-sm text-gray-600 mt-1">Total: <span id="totalCampaigns">0</span> campaign</p> </div> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisasi</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th> </tr> </thead> <tbody id="campaignTableBody" class="bg-white divide-y divide-gray-200"> <!-- Campaign rows will be inserted here --> </tbody> </table> </div> <!-- Pagination --> <div class="px-6 py-4 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="text-sm text-gray-700">
Menampilkan <span id="showingFrom">1</span> - <span id="showingTo">10</span> dari <span id="totalItems">0</span> campaign
</div> <div class="flex space-x-2"> <button id="prevPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
Sebelumnya
</button> <div id="pageNumbers" class="flex space-x-1"> <!-- Page numbers will be inserted here --> </div> <button id="nextPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
Selanjutnya
</button> </div> </div> </div> </div>  <div id="viewModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden overflow-y-auto h-full w-full"> <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-semibold text-gray-900">Detail Campaign</h3> <button onclick="closeViewModal()" class="text-gray-400 hover:text-gray-500"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div id="viewModalContent" class="space-y-4"> <!-- Content will be populated dynamically --> </div> </div> </div>  <div id="editModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden overflow-y-auto h-full w-full"> <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-semibold text-gray-900">Edit Campaign</h3> <button onclick="closeEditModal()" class="text-gray-400 hover:text-gray-500"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="editCampaignForm" class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Judul Campaign</label> <input type="text" id="editTitle" name="title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label> <textarea id="editDescription" name="description" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Target Donasi</label> <input type="number" id="editTargetAmount" name="targetAmount" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label> <select id="editCategory" name="category" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> <option value="">Pilih Kategori</option> <option value="kesehatan">Kesehatan</option> <option value="pendidikan">Pendidikan</option> <option value="lingkungan">Lingkungan</option> <option value="bencana">Bencana Alam</option> <option value="kemiskinan">Kemiskinan</option> <option value="anak">Anak-anak</option> <option value="lansia">Lansia</option> <option value="difabel">Difabel</option> <option value="hewan">Hewan</option> <option value="lainnya">Lainnya</option> </select> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label> <input type="date" id="editStartDate" name="startDate" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Berakhir</label> <input type="date" id="editEndDate" name="endDate" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> </div> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Gambar Campaign</label> <input type="file" id="editImage" name="image" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <p class="text-sm text-gray-500 mt-1">Biarkan kosong jika tidak ingin mengubah gambar</p> </div> <div class="flex justify-end space-x-3 mt-6"> <button type="button" onclick="closeEditModal()" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
Batal
</button> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
Simpan Perubahan
</button> </div> </form> </div> </div>  <div id="deleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden overflow-y-auto h-full w-full"> <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"> <div class="mt-3 text-center"> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"> <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">Hapus Campaign</h3> <div class="mt-2 px-7 py-3"> <p class="text-sm text-gray-500">
Apakah Anda yakin ingin menghapus campaign ini? Tindakan ini tidak dapat dibatalkan.
</p> </div> <div class="items-center px-4 py-3"> <button id="confirmDelete" class="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mr-2">
Hapus
</button> <button onclick="closeDeleteModal()" class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
Batal
</button> </div> </div> </div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/index.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/index.astro", void 0);
    $$file4 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/index.astro";
    $$url4 = "/admin/campaign";
    _page5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index,
      file: $$file4,
      url: $$url4
    }, Symbol.toStringTag, { value: "Module" }));
    page5 = /* @__PURE__ */ __name(() => _page5, "page");
  }
});

// dist/_worker.js/pages/admin/donation.astro.mjs
var donation_astro_exports = {};
__export(donation_astro_exports, {
  page: () => page6,
  renderers: () => renderers
});
var $$Index2, $$file5, $$url5, _page6, page6;
var init_donation_astro = __esm({
  "dist/_worker.js/pages/admin/donation.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index2 = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Kelola Donasi" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-500">Donasi Selesai</p> <p class="text-2xl font-semibold text-gray-900" id="completedCount">
0
</p> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-500">Pending</p> <p class="text-2xl font-semibold text-gray-900" id="pendingCount">
0
</p> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-500">Gagal</p> <p class="text-2xl font-semibold text-gray-900" id="failedCount">0</p> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-500">Total Dana</p> <p class="text-2xl font-semibold text-gray-900" id="totalAmount">
Rp 0
</p> </div> </div> </div> </div>  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Cari Donasi</label> <input type="text" id="searchInput" placeholder="Cari berdasarkan ID transaksi atau nama donatur..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Status Pembayaran</label> <select id="statusFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Status</option> <option value="completed">Selesai</option> <option value="pending">Pending</option> <option value="failed">Gagal</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Metode Pembayaran</label> <select id="paymentMethodFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Metode</option> <option value="bank_transfer">Transfer Bank</option> <option value="e_wallet">E-Wallet</option> </select> </div> <div class="flex items-end"> <button id="resetFilters" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Reset Filter
</button> </div> </div> </div>  <div id="loadingState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p class="text-gray-600">Memuat data donasi...</p> </div>  <div id="errorState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center hidden"> <div class="text-red-500 mb-4"> <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">Gagal Memuat Data</h3> <p class="text-gray-600 mb-4">
Terjadi kesalahan saat mengambil data donasi.
</p> <button id="retryButton" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Coba Lagi
</button> </div>  <div id="authErrorState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center hidden"> <div class="text-red-500 mb-4"> <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">Akses Ditolak</h3> <p class="text-gray-600 mb-4">
Anda tidak memiliki akses atau sesi telah berakhir.
</p> <button onclick="window.location.href='/auth/login'" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Login Kembali
</button> </div>  <div class="mb-4"> <button id="addDonationButton" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-2 rounded-md">
+ Tambah Donasi
</button> </div>  <div id="addDonationModal" class="fixed inset-0 bg-blue-900/70 hidden z-50 justify-center items-center"> <div class="flex items-center justify-center p-4 mx-auto h-full max-h-screen"> <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"> <div class="p-6 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Tambah Donasi Baru</h3> </div> <div class="overflow-y-auto flex-1 p-6"> <form id="addDonationForm" class="space-y-4"> <!-- Campaign Selection --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Campaign
</label> <select id="campaignSelect" name="campaignId" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Pilih Campaign</option> </select> </div> <!-- Nama Donatur --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Nama Donatur
</label> <input type="text" name="donorName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan nama donatur"> </div> <!-- Jumlah Donasi --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Jumlah Donasi
</label> <input type="number" name="amount" required min="1000" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Minimal Rp 1.000"> </div> <!-- Metode Pembayaran --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Metode Pembayaran
</label> <select name="paymentMethod" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Pilih metode pembayaran</option> <option value="bank_transfer">Transfer Bank</option> <option value="e_wallet">E-Wallet</option> <option value="credit_card">Kartu Kredit</option> </select> </div> <!-- Status Pembayaran --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Status Pembayaran
</label> <select name="paymentStatus" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="pending">Pending</option> <option value="completed">Selesai</option> <option value="failed">Gagal</option> </select> </div> <!-- Pesan --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Pesan (Opsional)
</label> <textarea name="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan pesan donatur"></textarea> </div> <!-- Donasi Anonim --> <div class="flex items-center"> <input type="checkbox" name="isAnonymous" id="isAnonymous" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"> <label for="isAnonymous" class="ml-2 block text-sm text-gray-700">
Donasi sebagai Anonim
</label> </div> </form> </div> <div class="p-6 border-t border-gray-200"> <div class="flex justify-end space-x-3"> <button type="button" id="cancelAddDonationButton" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
Batal
</button> <button type="submit" form="addDonationForm" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
Tambah Donasi
</button> </div> </div> </div> </div> </div>  <div id="donationTable" class="bg-white rounded-lg shadow-sm border border-gray-200 hidden"> <div class="px-6 py-4 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Daftar Donasi</h3> <p class="text-sm text-gray-600 mt-1">
Total: <span id="totalDonationsTable">0</span> donasi
</p> </div> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Transaksi</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donatur</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metode</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bukti Transfer</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th> </tr> </thead> <tbody id="donationTableBody" class="bg-white divide-y divide-gray-200"> <!-- Donation rows will be inserted here --> </tbody> </table> </div> <!-- Pagination --> <div class="px-6 py-4 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="text-sm text-gray-700">
Menampilkan <span id="showingFrom">1</span> - <span id="showingTo">10</span> dari <span id="totalItems">0</span> donasi
</div> <div class="flex space-x-2"> <button id="prevPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
Sebelumnya
</button> <div id="pageNumbers" class="flex space-x-1"> <!-- Page numbers will be inserted here --> </div> <button id="nextPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
Selanjutnya
</button> </div> </div> </div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/donation/index.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/donation/index.astro", void 0);
    $$file5 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/donation/index.astro";
    $$url5 = "/admin/donation";
    _page6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index2,
      file: $$file5,
      url: $$url5
    }, Symbol.toStringTag, { value: "Module" }));
    page6 = /* @__PURE__ */ __name(() => _page6, "page");
  }
});

// dist/_worker.js/pages/admin/news/create-news.astro.mjs
var create_news_astro_exports = {};
__export(create_news_astro_exports, {
  page: () => page7,
  renderers: () => renderers
});
var $$CreateNews, $$file6, $$url6, _page7, page7;
var init_create_news_astro = __esm({
  "dist/_worker.js/pages/admin/news/create-news.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$CreateNews = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Tambah Berita Baru" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-6"> <!-- Header --> <div class="mb-6"> <h1 class="text-2xl font-semibold text-gray-900">Tambah Berita Baru</h1> <p class="mt-1 text-sm text-gray-600">Buat berita baru untuk ditampilkan di website.</p> </div> <!-- Form --> <div class="bg-white rounded-lg shadow-sm border border-gray-200"> <form id="createNewsForm" class="p-6 space-y-6"> <!-- Title --> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
Judul Berita <span class="text-red-500">*</span> </label> <input type="text" id="title" name="title" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan judul berita..."> </div> <!-- Content --> <div> <label for="content" class="block text-sm font-medium text-gray-700 mb-1">
Konten Berita <span class="text-red-500">*</span> </label> <div class="border border-gray-300 rounded-lg p-2"> <textarea id="content" name="content" required rows="12" class="w-full px-3 py-2 border-0 focus:ring-0" placeholder="Tulis konten berita di sini..."></textarea> <div class="border-t pt-2 flex justify-end space-x-2"> <button type="button" id="boldBtn" class="px-3 py-1 text-sm border rounded hover:bg-gray-50"> <strong>B</strong> </button> <button type="button" id="italicBtn" class="px-3 py-1 text-sm border rounded hover:bg-gray-50"> <em>I</em> </button> <button type="button" id="underlineBtn" class="px-3 py-1 text-sm border rounded hover:bg-gray-50"> <u>U</u> </button> <button type="button" id="bulletListBtn" class="px-3 py-1 text-sm border rounded hover:bg-gray-50">
• List
</button> <button type="button" id="numberListBtn" class="px-3 py-1 text-sm border rounded hover:bg-gray-50">
1. List
</button> </div> </div> <p class="mt-1 text-sm text-gray-500">
Tip: Gunakan tombol format di atas untuk mempercantik teks
</p> </div> <!-- Image Upload --> <div> <label class="block text-sm font-medium text-gray-700 mb-1">
Gambar Berita
</label> <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg"> <div class="space-y-1 text-center"> <div class="flex flex-col items-center"> <img id="imagePreview" class="hidden mb-4 max-h-48 rounded"> <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"> <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <div class="flex text-sm text-gray-600"> <label for="image" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"> <span>Upload gambar</span> <input id="image" name="image" type="file" class="sr-only" accept="image/*"> </label> <p class="pl-1">atau drag and drop</p> </div> <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> </div> </div> </div> <!-- Category and Status --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
Kategori <span class="text-red-500">*</span> </label> <div class="space-y-2"> <select id="category" name="category" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Pilih Kategori</option> </select> <!-- Custom Category Input (hidden by default) --> <div id="customCategoryInput" class="hidden"> <input type="text" id="customCategory" name="customCategory" placeholder="Masukkan nama kategori baru..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <p class="mt-1 text-xs text-gray-500">Kategori baru akan ditambahkan ke daftar kategori</p> </div> </div> </div> <div> <label for="status" class="block text-sm font-medium text-gray-700 mb-1">
Status <span class="text-red-500">*</span> </label> <select id="status" name="status" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="draft">Draft</option> <option value="published">Published</option> </select> </div> </div> <!-- Related Campaign --> <div> <label for="campaignId" class="block text-sm font-medium text-gray-700 mb-1">
Kampanye Terkait (Opsional)
</label> <select id="campaignId" name="campaignId" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Tidak ada kampanye terkait</option> </select> <p class="mt-1 text-sm text-gray-500">
Pilih kampanye jika berita ini terkait dengan kampanye tertentu
</p> </div> <!-- Action Buttons --> <div class="flex justify-end space-x-3 pt-6 border-t"> <a href="/admin/news" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Batal
</a> <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Simpan Berita
</button> </div> </form> </div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/create-news.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/create-news.astro", void 0);
    $$file6 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/create-news.astro";
    $$url6 = "/admin/news/create-news";
    _page7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$CreateNews,
      file: $$file6,
      url: $$url6
    }, Symbol.toStringTag, { value: "Module" }));
    page7 = /* @__PURE__ */ __name(() => _page7, "page");
  }
});

// dist/_worker.js/pages/admin/news.astro.mjs
var news_astro_exports = {};
__export(news_astro_exports, {
  page: () => page8,
  renderers: () => renderers
});
var $$Index3, $$file7, $$url7, _page8, page8;
var init_news_astro = __esm({
  "dist/_worker.js/pages/admin/news.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index3 = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Kelola Berita" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-6"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <div class="mt-4 sm:mt-0"> <a href="/admin/news/create-news"> <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
+ Tambah Berita
</button> </a> </div> </div> </div>  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Cari Berita</label> <input type="text" id="searchInput" placeholder="Cari berdasarkan judul..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Kategori</label> <select id="categoryFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Kategori</option> <option value="umum">Umum</option> <option value="kegiatan">Kegiatan</option> <option value="pengumuman">Pengumuman</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Status</label> <select id="statusFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Semua Status</option> <option value="published">Published</option> <option value="draft">Draft</option> </select> </div> <div class="flex items-end"> <button id="resetFilters" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Reset Filter
</button> </div> </div> </div>  <div id="loadingState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p class="text-gray-600">Memuat data berita...</p> </div>  <div id="errorState" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center hidden"> <div class="text-red-500 mb-4"> <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">Gagal Memuat Data</h3> <p class="text-gray-600 mb-4">Terjadi kesalahan saat mengambil data berita.</p> <button id="retryButton" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
Coba Lagi
</button> </div>  <div id="newsTable" class="bg-white rounded-lg shadow-sm border border-gray-200 hidden"> <div class="px-6 py-4 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Daftar Berita</h3> <p class="text-sm text-gray-600 mt-1">Total: <span id="totalNews">0</span> berita</p> </div> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Berita</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penulis</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th> </tr> </thead> <tbody id="newsTableBody" class="bg-white divide-y divide-gray-200"> <!-- News rows will be inserted here --> </tbody> </table> </div> <!-- Pagination --> <div class="px-6 py-4 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="text-sm text-gray-700">
Menampilkan <span id="showingFrom">1</span> - <span id="showingTo">10</span> dari <span id="totalItems">0</span> berita
</div> <div class="flex space-x-2"> <button id="prevPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
Sebelumnya
</button> <div id="pageNumbers" class="flex space-x-1"> <!-- Page numbers will be inserted here --> </div> <button id="nextPage" class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
Selanjutnya
</button> </div> </div> </div> </div>  <div id="newsModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden overflow-y-auto h-full w-full"> <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"> <div class="flex justify-between items-center mb-4"> <h3 id="modalTitle" class="text-lg font-semibold text-gray-900">Tambah Berita</h3> <button onclick="closeNewsModal()" class="text-gray-400 hover:text-gray-500"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="newsForm" class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Judul Berita</label> <input type="text" id="newsTitle" name="title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Konten</label> <textarea id="newsContent" name="content" rows="6" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label> <select id="newsCategory" name="category" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> <option value="">Pilih Kategori</option> <option value="umum">Umum</option> <option value="kegiatan">Kegiatan</option> <option value="pengumuman">Pengumuman</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Status</label> <select id="newsStatus" name="status" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> <option value="draft">Draft</option> <option value="published">Published</option> </select> </div> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-1">Gambar Berita</label> <input type="file" id="newsImage" name="image" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <p class="text-sm text-gray-500 mt-1">Biarkan kosong jika tidak ingin mengubah gambar</p> </div> <div class="flex justify-end space-x-3 mt-6"> <button type="button" onclick="closeNewsModal()" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
Batal
</button> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
Simpan
</button> </div> </form> </div> </div>  <div id="deleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 hidden overflow-y-auto h-full w-full"> <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"> <div class="mt-3 text-center"> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"> <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">Hapus Berita</h3> <div class="mt-2 px-7 py-3"> <p class="text-sm text-gray-500">
Apakah Anda yakin ingin menghapus berita ini? Tindakan ini tidak dapat dibatalkan.
</p> </div> <div class="items-center px-4 py-3"> <button id="confirmDelete" class="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mr-2">
Hapus
</button> <button onclick="closeDeleteModal()" class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
Batal
</button> </div> </div> </div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/index.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/index.astro", void 0);
    $$file7 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/index.astro";
    $$url7 = "/admin/news";
    _page8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index3,
      file: $$file7,
      url: $$url7
    }, Symbol.toStringTag, { value: "Module" }));
    page8 = /* @__PURE__ */ __name(() => _page8, "page");
  }
});

// dist/_worker.js/pages/admin/users.astro.mjs
var users_astro_exports = {};
__export(users_astro_exports, {
  page: () => page9,
  renderers: () => renderers
});
var $$Index4, $$file8, $$url8, _page9, page9;
var init_users_astro = __esm({
  "dist/_worker.js/pages/admin/users.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index4 = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Kelola User" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <button id="openModalBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md">
+ Tambah User
</button> </div> <div id="error-container" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert"> <strong class="font-bold">Error!</strong> <span id="error-message" class="block sm:inline"></span> </div> <div id="loading" class="text-center py-8"> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div> <p class="mt-2 text-gray-600">Memuat data...</p> </div> <!-- Modal Tambah User --> <div id="addUserModal" class="fixed inset-0 bg-blue-900/70 hidden z-50 justify-center items-center"> <div class="flex items-center justify-center p-4 mx-auto h-full max-h-screen"> <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"> <div class="p-6 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Tambah User Baru</h3> </div> <div class="overflow-y-auto flex-1 p-6"> <form id="addUserForm" class="space-y-4"> <div> <label for="nama" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label> <input type="text" id="nama" name="nama" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label> <input type="text" id="username" name="username" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="nomorHp" class="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label> <input type="tel" id="nomorHp" name="nomorHp" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="role" class="block text-sm font-medium text-gray-700 mb-2">Role</label> <select id="role" name="role" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="user">User</option> <option value="admin">Admin</option> </select> </div> </form> </div> <div class="p-6 border-t border-gray-200"> <div class="flex justify-end space-x-3"> <button type="button" id="closeModalBtn" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
Batal
</button> <button type="submit" form="addUserForm" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
Tambah User
</button> </div> </div> </div> </div> </div> <!-- Modal Edit User --> <div id="editUserModal" class="fixed inset-0 bg-blue-900/70 hidden z-50 justify-center items-center"> <div class="flex items-center justify-center p-4 mx-auto h-full max-h-screen"> <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"> <div class="p-6 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Edit User</h3> </div> <div class="overflow-y-auto flex-1 p-6"> <form id="editUserForm" class="space-y-4"> <input type="hidden" id="edit-user-id" name="userId"> <div> <label for="edit-nama" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label> <input type="text" id="edit-nama" name="nama" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="edit-username" class="block text-sm font-medium text-gray-700 mb-2">Username</label> <input type="text" id="edit-username" name="username" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="edit-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" id="edit-email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="edit-nomorHp" class="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label> <input type="tel" id="edit-nomorHp" name="nomorHp" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="edit-password" class="block text-sm font-medium text-gray-700 mb-2">Password Baru (Kosongkan jika tidak ingin mengubah)</label> <input type="password" id="edit-password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label for="edit-role" class="block text-sm font-medium text-gray-700 mb-2">Role</label> <select id="edit-role" name="role" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="user">User</option> <option value="admin">Admin</option> </select> </div> </form> </div> <div class="p-6 border-t border-gray-200"> <div class="flex justify-end space-x-3"> <button type="button" id="closeEditModalBtn" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
Batal
</button> <button type="submit" form="editUserForm" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
Simpan Perubahan
</button> </div> </div> </div> </div> </div> <!-- Modal Konfirmasi Hapus --> <div id="deleteConfirmModal" class="fixed inset-0 bg-blue-900/70 hidden z-50 justify-center items-center"> <div class="flex items-center justify-center p-4 mx-auto h-full max-h-screen"> <div class="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col"> <div class="p-6 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">Konfirmasi Hapus</h3> </div> <div class="p-6"> <p class="text-gray-600">
Apakah Anda yakin ingin menghapus user <span id="deleteUserName" class="font-semibold"></span>?
</p> <input type="hidden" id="deleteUserId"> </div> <div class="p-6 border-t border-gray-200"> <div class="flex justify-end space-x-3"> <button id="cancelDeleteBtn" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
Batal
</button> <button id="confirmDeleteBtn" class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
Hapus
</button> </div> </div> </div> </div> </div> <div id="user-table" class="hidden"> <div class="bg-white shadow-md rounded-lg overflow-hidden"> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. HP</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th> </tr> </thead> <tbody id="user-table-body" class="bg-white divide-y divide-gray-200"></tbody> </table> </div> </div> </div> <div id="no-data" class="hidden text-center py-8 text-gray-600">
Tidak ada data user yang ditemukan.
</div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/users/index.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/users/index.astro", void 0);
    $$file8 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/users/index.astro";
    $$url8 = "/admin/users";
    _page9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index4,
      file: $$file8,
      url: $$url8
    }, Symbol.toStringTag, { value: "Module" }));
    page9 = /* @__PURE__ */ __name(() => _page9, "page");
  }
});

// dist/_worker.js/pages/admin.astro.mjs
var admin_astro_exports = {};
__export(admin_astro_exports, {
  page: () => page10,
  renderers: () => renderers
});
var $$Index5, $$file9, $$url9, _page10, page10;
var init_admin_astro = __esm({
  "dist/_worker.js/pages/admin.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AdminLayout_sNY25o1Y();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index5 = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-8"> <h2 class="text-3xl font-bold text-gray-900 mb-2">Selamat Datang, Admin!</h2> <p class="text-gray-600">Kelola platform donasi Harum Care Indonesia dari dashboard ini.</p> </div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Total Users --> <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-600">Total Users</p> <p class="text-2xl font-semibold text-gray-900" id="totalUsers">-</p> <a href="/admin/users" class="text-sm text-blue-600 hover:text-blue-800 font-medium">
Lihat semua users →
</a> </div> </div> </div> <!-- Total Campaigns --> <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-600">Total Campaigns</p> <p class="text-2xl font-semibold text-gray-900" id="totalCampaigns">-</p> <a href="/admin/campaign" class="text-sm text-blue-600 hover:text-blue-800 font-medium">
Lihat semua campaign →
</a> </div> </div> </div> <!-- Total Donations --> <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200"> <div class="flex items-center"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 1118 0z"></path> </svg> </div> </div> <div class="ml-4"> <p class="text-sm font-medium text-gray-600">Total Donasi</p> <p class="text-2xl font-semibold text-gray-900" id="totalDonations">-</p> <a href="/admin/donation" class="text-sm text-blue-600 hover:text-blue-800 font-medium">
Lihat semua donasi →
</a> </div> </div> </div> </div> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro", void 0);
    $$file9 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro";
    $$url9 = "/admin";
    _page10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index5,
      file: $$file9,
      url: $$url9
    }, Symbol.toStringTag, { value: "Module" }));
    page10 = /* @__PURE__ */ __name(() => _page10, "page");
  }
});

// dist/_worker.js/chunks/AuthLayout_BSBGPm13.mjs
var $$AuthLayout;
var init_AuthLayout_BSBGPm13 = __esm({
  "dist/_worker.js/chunks/AuthLayout_BSBGPm13.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Harum Care Indonesia - Platform donasi terpercaya dan transparan"><link rel="icon" href="/favicon.png"><title>Harum Care Indonesia</title>${renderHead()}</head> <body class="font-inter bg-gray-50"> <div class="block px-8 py-4"> <a href="/"> <img src="/images/logo/logo.png" alt="Harum Care Indonesia" class="h-10"> </a> </div> <main class="container mx-auto min-h-[calc(100vh-200px)]"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/AuthLayout.astro", void 0);
  }
});

// dist/_worker.js/pages/auth/login.astro.mjs
var login_astro_exports = {};
__export(login_astro_exports, {
  page: () => page11,
  renderers: () => renderers
});
var $$LoginForm, $$Login, $$file10, $$url10, _page11, page11;
var init_login_astro = __esm({
  "dist/_worker.js/pages/auth/login.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AuthLayout_BSBGPm13();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$LoginForm = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${maybeRenderHead()}<div class="bg-white flex flex-col justify-center items-center border border-gray-500/30 w-full max-w-md rounded-2xl shadow-2xl px-8 py-8"> <div class="mb-8"> <h3 class="text-2xl font-semibold text-gray-800">Silahkan Login</h3> </div> <form id="login-form" class="w-full mx-auto"> <div class="mb-6"> <label for="username-input" class="hidden text-gray-600 mb-2">Username atau Email</label> <input type="text" name="username" required id="username-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Username atau Email"> </div> <div class="mb-8"> <label for="password-input" class="hidden text-gray-600 mb-2">Password</label> <input type="password" name="password" required id="password-input" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password"> </div> <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
Login
</button> </form> <div class="text-center mt-8"> <p>Belum punya akun? <span class="font-bold text-blue-400"><a href="/auth/signup">Daftar</a></span></p> </div> </div> ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/auth/LoginForm.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/auth/LoginForm.astro", void 0);
    $$Login = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": /* @__PURE__ */ __name(($$result2) => renderTemplate` ${maybeRenderHead()}<section class="login-section h-screen bg-white mx-auto"> <div class="flex flex-col h-full md:flex-row"> <div class="hidden lg:flex flex-col justify-center items-center w-full rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-amber-600 text-center px-4 py-8"> <div class="text-white w-full flex flex-col gap-8 max-w-md"> <div class="border-b border-white/30 pb-4"> <h1 class="text-4xl font-bold">Hadirkan Kebaikan di Hati Anda</h1> </div> <p class="text-xl italic">
Satu langkah lagi untuk melanjutkan kebaikan.
</p> </div> </div> <div class="flex flex-col gap-8 justify-center w-full items-center bg-white text-center px-4 py-8"> <div class="flex flex-col gap-2"> <h2 class="text-4xl font-bold text-gray-800">Selamat Datang</h2> <p class="text-gray-600">Lanjutkan perjalanan Anda untuk melakukan perubahan positif di masyarakat.</p> </div> ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} </div> </div> </section> `, "default") })}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/login.astro", void 0);
    $$file10 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/login.astro";
    $$url10 = "/auth/login";
    _page11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Login,
      file: $$file10,
      url: $$url10
    }, Symbol.toStringTag, { value: "Module" }));
    page11 = /* @__PURE__ */ __name(() => _page11, "page");
  }
});

// dist/_worker.js/pages/auth/logout.astro.mjs
var logout_astro_exports = {};
__export(logout_astro_exports, {
  page: () => page12,
  renderers: () => renderers
});
var $$Astro3, $$Logout, $$file11, $$url11, _page12, page12;
var init_logout_astro = __esm({
  "dist/_worker.js/pages/auth/logout.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro3 = createAstro();
    $$Logout = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro3, $$props, $$slots);
      Astro2.self = $$Logout;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      }
      return Astro2.redirect("/");
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/logout.astro", void 0);
    $$file11 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/logout.astro";
    $$url11 = "/auth/logout";
    _page12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Logout,
      file: $$file11,
      url: $$url11
    }, Symbol.toStringTag, { value: "Module" }));
    page12 = /* @__PURE__ */ __name(() => _page12, "page");
  }
});

// dist/_worker.js/pages/auth/signup.astro.mjs
var signup_astro_exports = {};
__export(signup_astro_exports, {
  page: () => page13,
  renderers: () => renderers
});
var $$Signup, $$file12, $$url12, _page13, page13;
var init_signup_astro = __esm({
  "dist/_worker.js/pages/auth/signup.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_AuthLayout_BSBGPm13();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Signup = createComponent(async ($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="signup-section h-screen bg-white mx-auto"> <div class="flex flex-col h-full md:flex-row"> <div class="hidden lg:flex flex-col justify-center items-center w-full rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-amber-600 text-center px-4 py-8"> <div class="text-white w-full flex flex-col gap-8 max-w-md"> <div class="border-b border-white/30 pb-4"> <h1 class="text-4xl font-bold">Bergabunglah dengan Kebaikan</h1> </div> <p class="text-xl italic">
Mulai perjalanan Anda untuk menciptakan dampak positif di masyarakat.
</p> </div> </div> <div class="flex flex-col gap-8 justify-center w-full items-center bg-white text-center px-4 py-8"> <div class="flex flex-col gap-2"> <h2 class="text-4xl font-bold text-gray-800">Daftar Akun Baru</h2> <p class="text-gray-600">Bergabunglah dengan kami untuk menciptakan perubahan positif.</p> <p class="text-sm text-gray-500 mt-2">
Sudah punya akun?
<a href="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">
Masuk di sini
</a> </p> </div> <div class="w-full max-w-md"> <form class="space-y-6" action="/api/auth/signup" method="POST" id="signupForm"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="nama" class="block text-sm font-medium text-gray-700 mb-2">
Nama Lengkap
</label> <input id="nama" name="nama" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
Username
</label> <input id="username" name="username" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email
</label> <input id="email" name="email" type="email" autocomplete="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> <div> <label for="nomorHp" class="block text-sm font-medium text-gray-700 mb-2">
Nomor HP
</label> <input id="nomorHp" name="nomorHp" type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
Password
</label> <input id="password" name="password" type="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> <div> <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
Konfirmasi Password
</label> <input id="confirmPassword" name="confirmPassword" type="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"> </div> </div> <div> <button type="submit" class="w-full flex justify-center py-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]">
Daftar Sekarang
</button> </div> </form> </div> </div> </div> </section> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro", void 0);
    $$file12 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro";
    $$url12 = "/auth/signup";
    _page13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Signup,
      file: $$file12,
      url: $$url12
    }, Symbol.toStringTag, { value: "Module" }));
    page13 = /* @__PURE__ */ __name(() => _page13, "page");
  }
});

// dist/_worker.js/pages/campaign/_id_.astro.mjs
var id_astro_exports = {};
__export(id_astro_exports, {
  page: () => page14,
  renderers: () => renderers
});
var $$Astro4, prerender2, $$id, $$file13, $$url13, _page14, page14;
var init_id_astro = __esm({
  "dist/_worker.js/pages/campaign/_id_.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro4 = createAstro();
    prerender2 = false;
    $$id = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro4, $$props, $$slots);
      Astro2.self = $$id;
      const API_URL = "http://localhost:3000/api";
      const { id } = Astro2.params;
      let campaign = null;
      try {
        const res = await fetch(`${API_URL}/campaigns/${id}`);
        if (res.ok) {
          campaign = await res.json();
        }
      } catch (e) {
      }
      if (!campaign) {
        console.warn(`Campaign not found in props, redirecting to /404...`);
        return Astro2.redirect("/404");
      }
      const parseDate = /* @__PURE__ */ __name((dateString) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          return date;
        }
        const isoDate = new Date(dateString.replace(/\//g, "-"));
        if (!isNaN(isoDate.getTime())) {
          return isoDate;
        }
        return null;
      }, "parseDate");
      const today = /* @__PURE__ */ new Date();
      const endDate = parseDate(campaign.endDate);
      let daysLeft = 0;
      if (endDate) {
        const timeDiff = endDate.getTime() - today.getTime();
        daysLeft = Math.max(0, Math.ceil(timeDiff / (1e3 * 3600 * 24)));
      } else {
        console.warn("Invalid end date:", campaign.endDate);
      }
      const currentAmount = campaign.currentAmount || 0;
      const targetAmount = campaign.targetAmount || 1;
      const percentageFunded = Math.min(
        Math.round(currentAmount / targetAmount * 100),
        100
      );
      const isCampaignEnded = daysLeft <= 0;
      const isTargetReached = currentAmount >= targetAmount;
      const isCampaignActive = !isCampaignEnded && !isTargetReached;
      const formatCurrency = /* @__PURE__ */ __name((amount) => {
        const numAmount = Number(amount) || 0;
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(numAmount);
      }, "formatCurrency");
      const formatDate = /* @__PURE__ */ __name((dateString) => {
        const date = parseDate(dateString);
        if (!date) {
          return "Tanggal tidak valid";
        }
        return new Intl.DateTimeFormat("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(date);
      }, "formatDate");
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, {}, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full relative max-w-6xl mx-auto"> <div class="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-300 relative overflow-hidden"> <img${addAttribute(campaign.imageUrl, "src")}${addAttribute(campaign.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"> <div class="container mx-auto px-4 pb-8 md:pb-16"> <span class="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4"> ${campaign.category} </span> <h1 class="text-white text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl"> ${campaign.title} </h1> </div> </div> </div> </section>  ${isCampaignEnded && renderTemplate`<section class="max-w-6xl mx-auto px-4 mt-4 mb-6"> <div class="bg-red-50 border border-red-200 rounded-lg p-4"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-red-800">
Kampanye Telah Berakhir
</h3> <div class="mt-2 text-sm text-red-700"> <p>Periode penggalangan dana untuk kampanye ini telah berakhir pada ${formatDate(campaign.endDate)}.</p> </div> </div> </div> </div> </section>`}${isTargetReached && !isCampaignEnded && renderTemplate`<section class="max-w-6xl mx-auto px-4 mt-4 mb-6"> <div class="bg-green-50 border border-green-200 rounded-lg p-4"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-green-800">
Target Donasi Tercapai! 🎉
</h3> <div class="mt-2 text-sm text-green-700"> <p>Kampanye ini telah mencapai target donasi sebesar ${formatCurrency(targetAmount)}. Terima kasih atas dukungan semua donatur!</p> </div> </div> </div> </div> </section>`}<section class="max-w-6xl mx-auto py-8"> <div class="lg:flex lg:space-x-8"> <!-- Campaign Details --> <div class="lg:w-2/3 px-2"> <div class="mb-6 flex flex-col gap-4"> <div class="flex gap-2 md:gap-4"> <p class="text-gray-600">
Berakhir dalam <span class="font-semibold">${daysLeft} hari</span> </p> </div> <div class="flex items-center gap-2 bg-gray-200 rounded py-4 px-2"> <img${addAttribute(campaign.organizationLogo ? campaign.organizationLogo : "/images/icons/user-default.svg", "src")} alt="Profil Organisasi" class="h-10 w-auto"> <p class="text-gray-600">Dibuat oleh <span class="font-semibold text-blue-600">${campaign.organizationName}</span></p> </div> </div> <h2 class="text-2xl font-bold mb-4">Deskripsi Kampanye</h2> <p class="text-gray-600 mb-6">${campaign.description}</p> <!-- Donation History Section --> <div id="donation-history" class="my-8"> <h3 class="text-xl font-bold mb-4 flex items-center"> <svg class="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path> </svg>
Riwayat Donasi
</h3> <div id="donation-list" class="space-y-4"> <!-- Donation items will be loaded here --> <div class="text-center py-8"> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div> <p class="text-gray-500 mt-2">Memuat data donasi...</p> </div> </div> <div id="donation-pagination" class="mt-6 flex justify-center"> <!-- Pagination will be loaded here --> </div> </div> <!-- Related News Section --> <div id="related-news" class="my-8"> <h3 class="text-xl font-bold mb-4">Berita Terkait</h3> <div id="news-list" class="space-y-4"> <!-- News items will be loaded here --> </div> </div> </div> <!-- Sticky Donation Card --> <div class="lg:w-1/3 px-2"> <div class="sticky top-20"> <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl shadow-lg"> <div class="p-6"> <h2 class="text-2xl font-bold mb-4 text-blue-800 flex items-center"> <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path> </svg>
Bantu Sekarang
</h2> <!-- Progress Section --> <div class="mb-6 bg-white p-4 rounded-lg shadow-sm"> <div class="flex justify-between text-sm mb-2"> <span class="font-semibold text-blue-600">${formatCurrency(campaign.currentAmount)}</span> <span class="text-gray-500">dari ${formatCurrency(campaign.targetAmount)}</span> </div> <div class="w-full bg-gray-200 rounded-full h-3 mb-3"> <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"${addAttribute(`width: ${percentageFunded}%`, "style")}></div> </div> <div class="grid grid-cols-3 gap-2 text-center"> <div class="bg-blue-50 p-2 rounded-lg"> <p class="text-xs text-blue-600 font-medium">Terkumpul</p> <p class="font-bold text-blue-800">${percentageFunded}%</p> </div> <div class="bg-green-50 p-2 rounded-lg"> <p class="text-xs text-green-600 font-medium">Donatur</p> <p class="font-bold text-green-800"> ${campaign.donorCount || 0} </p> </div> <div class="bg-orange-50 p-2 rounded-lg"> <p class="text-xs text-orange-600 font-medium">Sisa Hari</p> <p class="font-bold text-orange-800">${daysLeft}</p> </div> </div> </div> <!-- Quick Amount Buttons --> <div class="mb-6"> <p class="text-sm font-semibold text-gray-700 mb-3">Pilih Jumlah Donasi:</p> <div class="grid grid-cols-3 gap-2"> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="25000">Rp 25K</button> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="50000">Rp 50K</button> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="100000">Rp 100K</button> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="250000">Rp 250K</button> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="500000">Rp 500K</button> <button type="button" class="amount-btn bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200" data-amount="1000000">Rp 1M</button> </div> </div> <!-- Progressive Disclosure Toggle --> <div class="mb-4"> <button type="button" id="toggle-form-btn" class="w-full py-3 px-4 bg-white border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"> <span id="toggle-text">Lanjutkan Donasi</span> <svg id="toggle-icon" class="w-5 h-5 ml-2 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> </div> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> <!-- Donation Form --> <form id="donate-form" class="space-y-4 hidden"${addAttribute(campaign._id, "data-campaign-id")}> ${!isCampaignActive && renderTemplate`<div class="mb-4 p-3 bg-gray-100 rounded-md"> <p class="text-sm text-gray-600 text-center"> ${isCampaignEnded ? "Kampanye ini telah berakhir dan tidak dapat menerima donasi lagi." : "Target donasi telah tercapai. Terima kasih atas dukungan semua donatur!"} </p> </div>`} <div> <label for="donor-name" class="block text-sm font-semibold text-gray-700 mb-2">Nama Donatur</label> <input type="text" id="donor-name" name="donor-name" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="Kosongkan jika ingin anonim"${addAttribute(!isCampaignActive, "disabled")}> </div> <div> <label for="donation-amount" class="block text-sm font-semibold text-gray-700 mb-2">Jumlah Donasi</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span> <input type="text" id="donation-amount" name="donation-amount" class="mt-1 py-3 pl-10 pr-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200" placeholder="1.000.000" required${addAttribute(!isCampaignActive, "disabled")}> </div> </div> <div> <label for="donation-message" class="block text-sm font-semibold text-gray-700 mb-2">Pesan Donasi</label> <textarea id="donation-message" name="donation-message" rows="3" maxlength="500" class="mt-1 py-3 px-4 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 resize-none" placeholder="Tuliskan pesan dukungan atau doa untuk kampanye ini (opsional)"${addAttribute(!isCampaignActive, "disabled")}></textarea> <div class="mt-1 text-xs text-gray-500 text-right"> <span id="message-counter">0</span>/500 karakter
</div> </div> <button type="submit"${addAttribute(`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isCampaignActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`, "class")}${addAttribute(!isCampaignActive, "disabled")}> ${isCampaignActive ? "\u{1F49D} Lanjut ke Pembayaran" : "\u274C Kampanye Tidak Aktif"} </button> </form> </div> </div> </div> </div> </div></section> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/[id].astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/[id].astro", void 0);
    $$file13 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/[id].astro";
    $$url13 = "/campaign/[id]";
    _page14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$id,
      file: $$file13,
      prerender: prerender2,
      url: $$url13
    }, Symbol.toStringTag, { value: "Module" }));
    page14 = /* @__PURE__ */ __name(() => _page14, "page");
  }
});

// dist/_worker.js/chunks/Card_Cxd0AMOM.mjs
var $$Astro5, $$Card;
var init_Card_Cxd0AMOM = __esm({
  "dist/_worker.js/chunks/Card_Cxd0AMOM.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro5 = createAstro();
    $$Card = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro5, $$props, $$slots);
      Astro2.self = $$Card;
      const {
        _id,
        title: title2,
        description,
        imageUrl,
        targetAmount,
        currentAmount,
        daysLeft,
        donorCount,
        organizationName,
        organizationLogo,
        category
      } = Astro2.props;
      const percentageFunded = Math.min(Math.round(currentAmount / targetAmount * 100), 100);
      const formatCurrency = /* @__PURE__ */ __name((amount) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(amount);
      }, "formatCurrency");
      const trimmedDescription = description.length > 120 ? `${description.substring(0, 120)}...` : description;
      return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/campaign/${_id}`, "href")} class="block h-full" data-astro-cid-xjhe6f3p> <div class="bg-white rounded-b-2xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300 max-w-sm h-full flex flex-col cursor-pointer" data-astro-cid-xjhe6f3p> <!-- Badge kategori --> <div class="relative flex-shrink-0" data-astro-cid-xjhe6f3p> <img${addAttribute(imageUrl, "src")}${addAttribute(title2, "alt")} class="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300" loading="lazy" data-astro-cid-xjhe6f3p> <span class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium" data-astro-cid-xjhe6f3p> ${category} </span> </div> <div class="p-5 flex flex-col flex-grow" data-astro-cid-xjhe6f3p> <!-- Detail donasi --> <div class="mb-4 flex-grow" data-astro-cid-xjhe6f3p> <h3 class="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-500 transition-colors duration-200 line-clamp-2" data-astro-cid-xjhe6f3p>${title2}</h3> <p class="text-gray-600 text-sm mb-4 line-clamp-3" data-astro-cid-xjhe6f3p>${trimmedDescription}</p> <!-- Progress bar --> <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2" data-astro-cid-xjhe6f3p> <div class="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 h-2.5 rounded-full"${addAttribute(`width: ${percentageFunded}%`, "style")} data-astro-cid-xjhe6f3p></div> </div> <div class="flex justify-between text-sm mb-4" data-astro-cid-xjhe6f3p> <span class="font-semibold text-blue-600" data-astro-cid-xjhe6f3p>${formatCurrency(currentAmount)}</span> <span class="text-gray-500" data-astro-cid-xjhe6f3p>dari ${formatCurrency(targetAmount)}</span> </div> </div> <!-- Info tambahan --> <div class="grid grid-cols-3 gap-2 mb-4 text-center flex-shrink-0" data-astro-cid-xjhe6f3p> <div class="bg-gray-50 p-2 rounded" data-astro-cid-xjhe6f3p> <p class="text-xs text-gray-500" data-astro-cid-xjhe6f3p>Terkumpul</p> <p class="font-semibold text-gray-800" data-astro-cid-xjhe6f3p>${percentageFunded}%</p> </div> <div class="bg-gray-50 p-2 rounded" data-astro-cid-xjhe6f3p> <p class="text-xs text-gray-500" data-astro-cid-xjhe6f3p>Donatur</p> <p class="font-semibold text-gray-800" data-astro-cid-xjhe6f3p>${donorCount}</p> </div> <div class="bg-gray-50 p-2 rounded" data-astro-cid-xjhe6f3p> <p class="text-xs text-gray-500" data-astro-cid-xjhe6f3p>Sisa Hari</p> <p class="font-semibold text-gray-800" data-astro-cid-xjhe6f3p>${daysLeft}</p> </div> </div> <!-- Informasi penggalang dana --> <div class="flex items-center mb-4 flex-shrink-0" data-astro-cid-xjhe6f3p> <img${addAttribute(organizationLogo ? organizationLogo : "/images/icons/user-default.svg", "src")}${addAttribute(organizationName, "alt")} class="w-8 h-8 rounded-full mr-2 object-cover" data-astro-cid-xjhe6f3p> <span class="text-sm text-gray-600" data-astro-cid-xjhe6f3p>Oleh <span class="font-medium" data-astro-cid-xjhe6f3p>${organizationName}</span></span> </div> <!-- Tombol donasi --> <div class="flex-shrink-0" data-astro-cid-xjhe6f3p> <div class="w-full bg-black text-white p-3 rounded-lg font-medium group-hover:bg-blue-700 transition-colors duration-200 text-center" data-astro-cid-xjhe6f3p>
Donasi Sekarang
</div> </div> </div> </div> </a> `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Card.astro", void 0);
  }
});

// dist/_worker.js/pages/campaign.astro.mjs
var campaign_astro_exports2 = {};
__export(campaign_astro_exports2, {
  page: () => page15,
  renderers: () => renderers
});
var $$Astro$12, $$AllCampaign, $$Astro6, $$Index6, $$file14, $$url14, _page15, page15;
var init_campaign_astro2 = __esm({
  "dist/_worker.js/pages/campaign.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_Card_Cxd0AMOM();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro$12 = createAstro();
    $$AllCampaign = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
      Astro2.self = $$AllCampaign;
      const { campaigns, totalPages, currentPage, categories, activeCategory, searchQuery } = Astro2.props;
      const today = /* @__PURE__ */ new Date();
      const campaignsWithDaysLeft = campaigns.map((campaign) => {
        const endDate = new Date(campaign.endDate);
        const timeDiff = endDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1e3 * 3600 * 24));
        return { ...campaign, daysLeft: daysLeft >= 0 ? daysLeft : 0 };
      });
      function formatCategory(category) {
        return category.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
      }
      __name(formatCategory, "formatCategory");
      function buildUrl(params) {
        const urlParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value && value.trim() !== "") {
            urlParams.append(key, value.trim());
          }
        });
        return `/campaign?${urlParams.toString()}`;
      }
      __name(buildUrl, "buildUrl");
      return renderTemplate`${maybeRenderHead()}<section class="campaign-section relative px-4 py-8 md:py-16" data-astro-cid-lfnpelcz> <div class="campaign-container max-w-7xl mx-auto" data-astro-cid-lfnpelcz> <!-- Header Section --> <div class="text-center mb-12" data-astro-cid-lfnpelcz> <h1 class="text-4xl font-bold text-gray-800 mb-4" data-astro-cid-lfnpelcz>Semua Kampanye</h1> <p class="text-gray-600 max-w-2xl mx-auto" data-astro-cid-lfnpelcz>
Temukan dan dukung berbagai kampanye yang membutuhkan bantuan Anda. Setiap donasi membawa perubahan berarti bagi mereka yang membutuhkan.
</p> </div> <!-- Filter Section --> <div class="mb-8" data-astro-cid-lfnpelcz> <form id="filter-form" class="flex flex-col md:flex-row gap-4 items-end" data-astro-cid-lfnpelcz> <!-- Search Input --> <div class="flex-1" data-astro-cid-lfnpelcz> <label for="search" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-lfnpelcz>Cari Kampanye</label> <input type="text" id="search" name="search"${addAttribute(searchQuery, "value")} placeholder="Cari berdasarkan judul atau deskripsi..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lfnpelcz> </div> <!-- Category Filter --> <div class="w-full md:w-48" data-astro-cid-lfnpelcz> <label for="category" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-lfnpelcz>Kategori</label> <select id="category" name="category" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lfnpelcz> <option value="" data-astro-cid-lfnpelcz>Semua Kategori</option> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}${addAttribute(cat === activeCategory, "selected")} data-astro-cid-lfnpelcz> ${formatCategory(cat)} </option>`)} </select> </div> <!-- Submit Button --> <button type="submit" class="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200" data-astro-cid-lfnpelcz>
Terapkan Filter
</button> <!-- Reset Button --> ${(searchQuery || activeCategory) && renderTemplate`<a href="/campaign" class="w-full md:w-auto px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center" data-astro-cid-lfnpelcz>
Reset Filter
</a>`} </form> </div> <!-- Campaign Cards --> ${campaignsWithDaysLeft.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 place-content-center" data-astro-cid-lfnpelcz> ${campaignsWithDaysLeft.map((campaign) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "_id": campaign._id, "title": campaign.title || "Untitled", "description": campaign.description || "Tidak ada Deskripsi", "imageUrl": campaign.imageUrl, "targetAmount": campaign.targetAmount, "currentAmount": campaign.currentAmount || 0, "daysLeft": campaign.daysLeft || 0, "donorCount": campaign.donorCount || 0, "organizationName": campaign.organizationName || "Anonymous", "organizationLogo": campaign.organizationLogo, "category": formatCategory(campaign.category) || "Tidak Berkategori", "data-astro-cid-lfnpelcz": true })}`)} </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-lfnpelcz> <p class="text-gray-500" data-astro-cid-lfnpelcz>Tidak ada kampanye yang tersedia saat ini.</p> </div>`} <!-- Pagination --> ${totalPages > 1 && renderTemplate`<div class="flex justify-center mt-12 space-x-2" data-astro-cid-lfnpelcz> ${Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => renderTemplate`<a${addAttribute(buildUrl({ page: pageNum.toString(), search: searchQuery, category: activeCategory }), "href")}${addAttribute(`px-4 py-2 rounded-lg ${pageNum === currentPage ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-lfnpelcz> ${pageNum} </a>`)} </div>`} </div> </section>  ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/campaign/AllCampaign.astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/campaign/AllCampaign.astro", void 0);
    $$Astro6 = createAstro();
    $$Index6 = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro6, $$props, $$slots);
      Astro2.self = $$Index6;
      const API_URL = "http://localhost:3000/api";
      const { searchParams } = Astro2.url;
      const page21 = Number(searchParams.get("page")) || 1;
      const search = searchParams.get("search") || "";
      const category = searchParams.get("category") || "";
      async function fetchCampaigns(page22 = 1, limit = 12, search2 = "", category2 = "") {
        try {
          const params = new URLSearchParams();
          params.append("page", page22.toString());
          params.append("limit", limit.toString());
          if (search2 && search2.trim() !== "") {
            params.append("search", search2.trim());
          }
          if (category2 && category2.trim() !== "") {
            params.append("category", category2.trim());
          }
          const url = `${API_URL}/campaigns?${params.toString()}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch campaigns");
          }
          const data = await response.json();
          return {
            campaigns: data.campaigns || [],
            totalPages: data.totalPages || 1,
            currentPage: data.currentPage || 1,
            total: data.total || 0
          };
        } catch (error4) {
          console.error("Error fetching campaigns:", error4);
          return {
            campaigns: [],
            totalPages: 1,
            currentPage: 1,
            total: 0
          };
        }
      }
      __name(fetchCampaigns, "fetchCampaigns");
      const campaignData = await fetchCampaigns(page21, 12, search, category);
      const categories = [...new Set(campaignData.campaigns.map((campaign) => campaign.category))].filter(Boolean).sort();
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, { "data-astro-cid-qsfofcz6": true }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${renderComponent($$result2, "AllCampaign", $$AllCampaign, { "campaigns": campaignData.campaigns, "totalPages": campaignData.totalPages, "currentPage": campaignData.currentPage, "categories": categories, "activeCategory": category, "searchQuery": search, "data-astro-cid-qsfofcz6": true })} `, "default") })} `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/index.astro", void 0);
    $$file14 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/index.astro";
    $$url14 = "/campaign";
    _page15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index6,
      file: $$file14,
      url: $$url14
    }, Symbol.toStringTag, { value: "Module" }));
    page15 = /* @__PURE__ */ __name(() => _page15, "page");
  }
});

// dist/_worker.js/pages/news/_slug_.astro.mjs
var slug_astro_exports = {};
__export(slug_astro_exports, {
  page: () => page16,
  renderers: () => renderers
});
var $$Astro7, $$slug, $$file15, $$url15, _page16, page16;
var init_slug_astro = __esm({
  "dist/_worker.js/pages/news/_slug_.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro7 = createAstro();
    $$slug = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro7, $$props, $$slots);
      Astro2.self = $$slug;
      const { slug } = Astro2.params;
      let news = null;
      let error4 = null;
      if (slug) {
        try {
          const API_URL = "http://localhost:3000/api";
          const response = await fetch(`${API_URL}/news/${slug}`);
          if (response.ok) {
            news = await response.json();
          } else {
            error4 = "Berita tidak ditemukan";
          }
        } catch (err) {
          console.error("Error fetching news:", err);
          error4 = "Terjadi kesalahan saat memuat berita";
        }
      }
      if (!slug || error4 || !news) {
        return Astro2.redirect("/404");
      }
      const formatDate = /* @__PURE__ */ __name((dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }, "formatDate");
      const getCategoryLabel = /* @__PURE__ */ __name((category) => {
        const categories = {
          "umum": "Umum",
          "kegiatan": "Kegiatan",
          "pengumuman": "Pengumuman"
        };
        return categories[category] || category;
      }, "getCategoryLabel");
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, { "title": `${news.title} - Harum Care Indonesia`, "data-astro-cid-vcwz2lde": true }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50" data-astro-cid-vcwz2lde> <article class="max-w-4xl mx-auto px-4 py-8" data-astro-cid-vcwz2lde> <!-- Breadcrumb --> <nav class="mb-8" data-astro-cid-vcwz2lde> <ol class="flex items-center space-x-2 text-sm text-gray-600" data-astro-cid-vcwz2lde> <li data-astro-cid-vcwz2lde><a href="/" class="hover:text-blue-600" data-astro-cid-vcwz2lde>Beranda</a></li> <li data-astro-cid-vcwz2lde><span class="mx-2" data-astro-cid-vcwz2lde>/</span></li> <li data-astro-cid-vcwz2lde><a href="/news" class="hover:text-blue-600" data-astro-cid-vcwz2lde>Berita</a></li> <li data-astro-cid-vcwz2lde><span class="mx-2" data-astro-cid-vcwz2lde>/</span></li> <li class="text-gray-900" data-astro-cid-vcwz2lde>${news.title}</li> </ol> </nav> <!-- Article Header --> <header class="mb-8" data-astro-cid-vcwz2lde> <div class="mb-4" data-astro-cid-vcwz2lde> <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" data-astro-cid-vcwz2lde> ${getCategoryLabel(news.category)} </span> </div> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight" data-astro-cid-vcwz2lde> ${news.title} </h1> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600" data-astro-cid-vcwz2lde> <div class="flex items-center gap-4" data-astro-cid-vcwz2lde> <div class="flex items-center gap-2" data-astro-cid-vcwz2lde> <img src="/images/icons/user-default.svg" alt="Author" class="w-6 h-6 rounded-full" data-astro-cid-vcwz2lde> <span data-astro-cid-vcwz2lde>${news.author?.nama || "Anonymous"}</span> </div> <span data-astro-cid-vcwz2lde>•</span> <time${addAttribute(news.createdAt, "datetime")} data-astro-cid-vcwz2lde> ${formatDate(news.createdAt)} </time> </div> <div class="flex items-center gap-4" data-astro-cid-vcwz2lde> <span class="flex items-center gap-1" data-astro-cid-vcwz2lde> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vcwz2lde> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-vcwz2lde></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-vcwz2lde></path> </svg> ${news.viewCount} dilihat
</span> </div> </div> </header> <!-- Featured Image --> ${news.image && renderTemplate`<div class="mb-8" data-astro-cid-vcwz2lde> <img${addAttribute(news.image, "src")}${addAttribute(news.title, "alt")} class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" onerror="console.error('Failed to load image:', this.src)" data-astro-cid-vcwz2lde> </div>`} <!-- Article Content --> <div class="prose prose-lg max-w-none" data-astro-cid-vcwz2lde> <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm" data-astro-cid-vcwz2lde> <div class="whitespace-pre-wrap text-gray-700 leading-relaxed" data-astro-cid-vcwz2lde> ${news.content} </div> </div> </div> <!-- Related Campaign Section --> <div id="related-campaign" class="mt-8" data-astro-cid-vcwz2lde> <h3 class="text-xl font-bold mb-4" data-astro-cid-vcwz2lde>Kampanye Terkait</h3> <div id="campaign-info" class="bg-white p-6 rounded-lg shadow-sm" data-astro-cid-vcwz2lde> <!-- Campaign info will be loaded here --> </div> </div> <!-- Article Footer --> <footer class="mt-8 pt-8 border-t border-gray-200" data-astro-cid-vcwz2lde> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600" data-astro-cid-vcwz2lde> <div data-astro-cid-vcwz2lde> <p data-astro-cid-vcwz2lde>Terakhir diperbarui: ${formatDate(news.updatedAt)}</p> </div> <div class="flex gap-4" data-astro-cid-vcwz2lde> <a href="/news" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium" data-astro-cid-vcwz2lde> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vcwz2lde> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-vcwz2lde></path> </svg>
Kembali ke Berita
</a> </div> </div> </footer> </article> </main> `, "default") })}  ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro", void 0);
    $$file15 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro";
    $$url15 = "/news/[slug]";
    _page16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$slug,
      file: $$file15,
      url: $$url15
    }, Symbol.toStringTag, { value: "Module" }));
    page16 = /* @__PURE__ */ __name(() => _page16, "page");
  }
});

// dist/_worker.js/pages/news.astro.mjs
var news_astro_exports2 = {};
__export(news_astro_exports2, {
  page: () => page17,
  renderers: () => renderers
});
var $$Astro$13, $$NewsCardLarge, $$Astro8, $$Index7, $$file16, $$url16, _page17, page17;
var init_news_astro2 = __esm({
  "dist/_worker.js/pages/news.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro$13 = createAstro();
    $$NewsCardLarge = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$13, $$props, $$slots);
      Astro2.self = $$NewsCardLarge;
      const {
        _id,
        title: title2,
        content,
        image,
        slug,
        author,
        category,
        createdAt,
        viewCount
      } = Astro2.props;
      const formatDate = /* @__PURE__ */ __name((dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }, "formatDate");
      const truncateContent = /* @__PURE__ */ __name((text, maxLength = 200) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
      }, "truncateContent");
      return renderTemplate`${maybeRenderHead()}<article class="news-card-large group cursor-pointer transition-all duration-300 hover:-translate-y-1" data-astro-cid-nf5xofni> <a${addAttribute(`/news/${slug}`, "href")} class="block h-full" data-astro-cid-nf5xofni> <div class="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg h-full flex flex-col" data-astro-cid-nf5xofni> <!-- Image Section --> <div class="news-image-container-large relative overflow-hidden flex-shrink-0" data-astro-cid-nf5xofni> <img${addAttribute(image || "/images/empty-image-placeholder.webp", "src")}${addAttribute(title2, "alt")} class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" onerror="console.error('Failed to load image:', this.src)" data-astro-cid-nf5xofni> <div class="absolute top-3 left-3" data-astro-cid-nf5xofni> <span class="text-sm bg-white/90 text-gray-700 px-3 py-1.5 rounded-full font-medium shadow-sm" data-astro-cid-nf5xofni> ${category} </span> </div> </div> <!-- Content Section --> <div class="news-content-large p-6 flex flex-col flex-grow" data-astro-cid-nf5xofni> <!-- Meta Info --> <div class="news-meta-large flex items-center gap-3 mb-3 flex-shrink-0" data-astro-cid-nf5xofni> <div class="author-info-large flex items-center gap-2" data-astro-cid-nf5xofni> <img src="/images/icons/user-default.svg" alt="Author" class="w-8 h-8 rounded-full border border-gray-100" data-astro-cid-nf5xofni> <div class="flex flex-col" data-astro-cid-nf5xofni> <p class="text-sm font-medium text-gray-900" data-astro-cid-nf5xofni>${author?.nama || "Anonymous"}</p> <span class="text-sm text-gray-500" data-astro-cid-nf5xofni> ${formatDate(createdAt)} </span> </div> </div> <div class="view-count-large ml-auto flex items-center gap-1.5 text-sm text-gray-500" data-astro-cid-nf5xofni> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nf5xofni> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-nf5xofni></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-nf5xofni></path> </svg> ${viewCount} </div> </div> <!-- Title --> <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 flex-shrink-0" data-astro-cid-nf5xofni> ${title2} </h3> <!-- Content Preview --> <p class="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow" data-astro-cid-nf5xofni> ${truncateContent(content, 200)} </p> <!-- Read More Button --> <div class="flex items-center justify-between flex-shrink-0" data-astro-cid-nf5xofni> <span class="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm transition-colors duration-300" data-astro-cid-nf5xofni>
Baca Selengkapnya
<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nf5xofni> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-nf5xofni></path> </svg> </span> </div> </div> </div> </a> </article> `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/news/NewsCardLarge.astro", void 0);
    $$Astro8 = createAstro();
    $$Index7 = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro8, $$props, $$slots);
      Astro2.self = $$Index7;
      const { searchParams } = Astro2.url;
      const page21 = parseInt(searchParams.get("page") || "1");
      const category = searchParams.get("category") || "";
      const limit = 9;
      let newsData = {
        news: [],
        currentPage: 1,
        totalPages: 1,
        totalNews: 0
      };
      try {
        const queryParams = new URLSearchParams({
          page: page21.toString(),
          limit: limit.toString(),
          status: "published"
        });
        if (category) {
          queryParams.append("category", category);
        }
        const response = await fetch(`${"http://localhost:3000/api"}/news?${queryParams}`);
        if (response.ok) {
          newsData = await response.json();
        }
      } catch (error4) {
        console.error("Error fetching news:", error4);
      }
      const { news, currentPage, totalPages, totalNews } = newsData;
      const categories = [
        { value: "", label: "Semua Kategori" },
        { value: "umum", label: "Umum" },
        { value: "kegiatan", label: "Kegiatan" },
        { value: "pengumuman", label: "Pengumuman" }
      ];
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, { "title": "Berita - Harum Care Indonesia" }, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50"> <!-- Hero Section --> <section class="bg-blue-600 text-white py-16"> <div class="max-w-7xl mx-auto px-4"> <div class="text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-4">Berita & Informasi</h1> <p class="text-xl text-blue-100 max-w-2xl mx-auto">
Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan berita dari Harum Care Indonesia
</p> </div> </div> </section> <!-- Filter Section --> <section class="py-8 bg-white border-b"> <div class="max-w-7xl mx-auto px-4"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div class="flex items-center gap-4"> <label for="category-filter" class="text-sm font-medium text-gray-700">
Filter Kategori:
</label> <select id="category-filter" class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" onchange="window.location.href = this.value ? \`/news?category=\${this.value}\` : '/news'"> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat.value, "value")}${addAttribute(cat.value === category, "selected")}> ${cat.label} </option>`)} </select> </div> <div class="text-sm text-gray-600">
Menampilkan ${news.length} dari ${totalNews} berita
</div> </div> </div> </section> <!-- News Grid --> <section class="py-12"> <div class="max-w-7xl mx-auto px-4"> ${news.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"> ${news.map((item) => renderTemplate`${renderComponent($$result2, "NewsCardLarge", $$NewsCardLarge, { "_id": item._id, "title": item.title, "content": item.content, "image": item.image, "slug": item.slug, "author": item.author, "category": item.category, "createdAt": item.createdAt, "viewCount": item.viewCount })}`)} </div>` : renderTemplate`<div class="text-center py-16"> <div class="mb-6"> <img src="/images/empty-image-placeholder.webp" alt="No news" class="w-32 h-32 mx-auto opacity-50"> </div> <h3 class="text-2xl font-semibold text-gray-700 mb-2">Tidak Ada Berita</h3> <p class="text-gray-500 mb-6"> ${category ? `Tidak ada berita dalam kategori "${category}"` : "Belum ada berita yang tersedia"} </p> ${category && renderTemplate`<a href="/news" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
Lihat Semua Berita
</a>`} </div>`} <!-- Pagination --> ${totalPages > 1 && renderTemplate`<div class="flex justify-center mt-12"> <nav class="flex items-center gap-2"> ${currentPage > 1 && renderTemplate`<a${addAttribute(`/news?page=${currentPage - 1}${category ? `&category=${category}` : ""}`, "href")} class="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
Sebelumnya
</a>`} ${Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => renderTemplate`<a${addAttribute(`/news?page=${pageNum}${category ? `&category=${category}` : ""}`, "href")}${addAttribute(`px-4 py-2 text-sm border rounded-md transition-colors ${pageNum === currentPage ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 hover:bg-gray-50"}`, "class")}> ${pageNum} </a>`)} ${currentPage < totalPages && renderTemplate`<a${addAttribute(`/news?page=${currentPage + 1}${category ? `&category=${category}` : ""}`, "href")} class="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
Selanjutnya
</a>`} </nav> </div>`} </div> </section> </main> `, "default") })}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/index.astro", void 0);
    $$file16 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/index.astro";
    $$url16 = "/news";
    _page17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index7,
      file: $$file16,
      url: $$url16
    }, Symbol.toStringTag, { value: "Module" }));
    page17 = /* @__PURE__ */ __name(() => _page17, "page");
  }
});

// dist/_worker.js/pages/payment/_id_.astro.mjs
var id_astro_exports2 = {};
__export(id_astro_exports2, {
  page: () => page18,
  renderers: () => renderers
});
var prerender3, $$id2, $$file17, $$url17, _page18, page18;
var init_id_astro2 = __esm({
  "dist/_worker.js/pages/payment/_id_.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    prerender3 = false;
    $$id2 = createComponent(async ($$result, $$props, $$slots) => {
      const bankAccount = "123456789";
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, {}, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full relative max-w-xl mx-auto py-8"> <div class="px-8 text-center"> <h1 class="text-3xl font-bold mb-1">Selesaikan Donasi Anda</h1> <p class="mb-6">Pilih metode pembayaran dan ikuti instruksi yang diberikan</p> </div> <!-- Bank Transfer Details --> <div id="bank-transfer-details" class="bg-white border border-gray-200 p-6 rounded-lg mb-6 hidden"> <h2 class="text-xl font-semibold mb-4">Detail Pembayaran - Transfer Bank</h2> <div class="mb-4"> <p class="text-gray-700 mb-2">Nomor Rekening:</p> <div class="flex gap-5"> <p id="account-number" class="rounded-md bg-gray-100 border border-gray-200 p-4 w-full font-medium text-2xl">${bankAccount}</p> <button id="copy-account" class="bg-gray-500 text-white px-2 py-0 rounded-md hover:bg-gray-600 transition-colors duration-200">Copy</button> </div> </div> <div class="mb-4"> <p class="text-gray-700 mb-2">Jumlah Transfer:</p> <div class="flex justify-between gap-5"> <p id="total-amount" class="bg-green-100 p-4 w-full rounded-md border border-green-300 font-bold text-4xl text-green-500"></p> <button id="copy-amount" class="bg-gray-500 text-white px-2 py-0 rounded-md hover:bg-gray-600 transition">Copy</button> </div> <p class="text-sm text-gray-500 mt-2">*Sudah termasuk kode unik</p> </div> <div class="bg-sky-500/10 border border-sky-400 text-sky-800 py-4 px-2 rounded-md"> <p class="font-bold text-xl mb-2">Instruksi Transfer Bank:</p> <ul class="list-disc px-4"> <li>Transfer sesuai <span class="italic">jumlah tepat</span> yang tertera di atas <span class="font-semibold">(termasuk kode unik)</span></li> <li>Cantumkan <span class="font-semibold">nama Anda</span> pada deskripsi transfer</li> <li>Simpan <span class="font-semibold">bukti transfer</span> untuk diunggah pada formulir di bawah</li> </ul> </div> </div> <!-- QRIS Payment Details --> <div id="qris-payment-details" class="bg-white border border-gray-200 p-6 rounded-lg mb-6 hidden"> <h2 class="text-xl font-semibold mb-4">Detail Pembayaran - QRIS</h2> <div class="text-center mb-6"> <p class="text-gray-700 mb-4">Scan QR Code di bawah ini untuk pembayaran:</p> <div class="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block"> <img src="/images/QRIS.png" alt="QRIS Payment Code" class="w-64 h-64 mx-auto"> </div> </div> <div class="mb-4"> <p class="text-gray-700 mb-2">Jumlah Pembayaran:</p> <div class="flex justify-between gap-5"> <p id="qris-total-amount" class="bg-green-100 p-4 w-full rounded-md border border-green-300 font-bold text-4xl text-green-500"></p> <button id="copy-qris-amount" class="bg-gray-500 text-white px-2 py-0 rounded-md hover:bg-gray-600 transition">Copy</button> </div> <p class="text-sm text-gray-500 mt-2">*Sudah termasuk kode unik</p> </div> <div class="bg-sky-500/10 border border-sky-400 text-sky-800 py-4 px-2 rounded-md"> <p class="font-bold text-xl mb-2">Instruksi Pembayaran QRIS:</p> <ul class="list-disc px-4"> <li>Buka aplikasi e-wallet atau mobile banking Anda</li> <li>Pilih menu "Scan QR" atau "QR Code"</li> <li>Scan QR code di atas</li> <li>Pastikan jumlah pembayaran sesuai dengan yang tertera <span class="font-semibold">(termasuk kode unik)</span></li> <li>Simpan <span class="font-semibold">bukti pembayaran</span> untuk diunggah pada formulir di bawah</li> </ul> </div> </div> <div id="loading" class="text-center">Memuat data donasi...</div> <div id="error" class="bg-red-100 p-6 rounded-lg text-center hidden"> <p class="text-red-700">Gagal memuat data donasi. Silakan coba lagi atau hubungi admin.</p> </div> <!-- Payment Method Selection --> <div id="payment-method-section" class="bg-white rounded-lg p-6 mb-6 border border-gray-200 hidden"> <h2 class="text-xl font-semibold mb-4">Pilih Metode Pembayaran</h2> <div class="space-y-3"> <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"> <input type="radio" name="payment-method" value="bank_transfer" class="mr-3 text-blue-600 focus:ring-blue-500" checked> <div class="flex items-center"> <span class="text-2xl mr-3">🏦</span> <div> <div class="font-semibold text-gray-800">Transfer Bank</div> <div class="text-sm text-gray-600">Transfer ke rekening bank kami</div> </div> </div> </label> <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"> <input type="radio" name="payment-method" value="qris" class="mr-3 text-blue-600 focus:ring-blue-500"> <div class="flex items-center"> <span class="text-2xl mr-3">📱</span> <div> <div class="font-semibold text-gray-800">QRIS</div> <div class="text-sm text-gray-600">Scan QR code untuk pembayaran</div> </div> </div> </label> </div> <button type="button" id="confirm-payment-method" class="w-full mt-4 py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
Konfirmasi Metode Pembayaran
</button> </div> <form id="upload-proof-form" class="bg-white rounded-md p-8 space-y-4 hidden border border-gray-200" data-donation-id="" data-campaign-id=""> <div class=""> <label for="proof-input" class="block text-xl font-semibold">Unggah Bukti Transfer</label> <input type="file" id="proof-input" name="proof" accept="image/*" class="mt-1 p-4 block w-full bg-stone-200 rounded-md border border-dashed border-stone-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required> <div id="proof-preview" class="hidden mt-4"> <img id="preview-proof" src="" alt="Preview" class="w-full max-w-xs mx-auto rounded-lg shadow-md"> <p class="text-sm text-gray-500 text-center mt-2">Pratinjau Bukti Transfer</p> </div> </div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
Kirim Bukti Transfer
</button> </form> </section> `, "default") })} ${renderScript($$result, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/payment/[id].astro?astro&type=script&index=0&lang.ts")}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/payment/[id].astro", void 0);
    $$file17 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/payment/[id].astro";
    $$url17 = "/payment/[id]";
    _page18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$id2,
      file: $$file17,
      prerender: prerender3,
      url: $$url17
    }, Symbol.toStringTag, { value: "Module" }));
    page18 = /* @__PURE__ */ __name(() => _page18, "page");
  }
});

// dist/_worker.js/pages/profile.astro.mjs
var profile_astro_exports = {};
__export(profile_astro_exports, {
  page: () => page19,
  renderers: () => renderers
});
var $$Index8, $$file18, $$url18, _page19, page19;
var init_profile_astro = __esm({
  "dist/_worker.js/pages/profile.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Index8 = createComponent(($$result, $$props, $$slots) => {
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, { "title": "Profil - Harum Care Indonesia" }, { "default": /* @__PURE__ */ __name(($$result2) => renderTemplate` ${maybeRenderHead()}<div id="profile-container" class="min-h-screen bg-gray-50"> <!-- Loading State --> <div id="loading-state" class="flex items-center justify-center min-h-screen"> <div class="text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div> <p class="text-gray-600">Memuat profil...</p> </div> </div> <!-- Profile Content --> <div id="profile-content" class="hidden"> <!-- Header --> <div class="bg-white shadow-sm"> <div class="container mx-auto px-4 py-4"> <div class="flex items-center"> <a href="/" class="mr-4"> <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <h1 class="text-xl font-semibold text-gray-800">Profil Saya</h1> </div> </div> </div> <!-- Profile Info --> <div class="container mx-auto px-4 py-6"> <!-- User Info Card --> <div class="bg-white rounded-lg shadow-sm border border-gray-500/30 p-6 mb-6"> <div class="flex items-center space-x-4"> <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div class="flex-1"> <h2 id="user-name" class="text-xl font-semibold text-gray-800">Loading...</h2> <p id="user-role" class="text-gray-600">Loading...</p> <p id="user-email" class="text-sm text-gray-500">Loading...</p> </div> </div> </div> <!-- Action Buttons --> <div id="action-buttons" class="space-y-3"> <!-- Placeholder untuk tombol aksi --> </div> <!-- Login Prompt (untuk user yang belum login) --> <div id="login-prompt" class="hidden bg-white rounded-lg shadow-sm border border-gray-500/30 p-6"> <div class="text-center"> <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h3 class="text-lg font-semibold text-gray-800 mb-2">Anda Belum Masuk</h3> <p class="text-gray-600 mb-6">Silakan masuk ke akun Anda untuk melihat profil lengkap dan mengakses fitur lainnya.</p> <div class="space-y-3"> <a href="/auth/login" class="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200 font-medium text-center block">
Masuk ke Akun
</a> <p class="text-sm text-gray-500">
Belum punya akun?
<a href="/auth/signup" class="text-blue-600 hover:text-blue-700 font-medium">Daftar di sini</a> </p> </div> </div> </div> </div> </div> </div> ${renderScript($$result2, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro?astro&type=script&index=0&lang.ts")} `, "default") })}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro", void 0);
    $$file18 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro";
    $$url18 = "/profile";
    _page19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index8,
      file: $$file18,
      url: $$url18
    }, Symbol.toStringTag, { value: "Module" }));
    page19 = /* @__PURE__ */ __name(() => _page19, "page");
  }
});

// dist/_worker.js/pages/index.astro.mjs
var index_astro_exports = {};
__export(index_astro_exports, {
  page: () => page20,
  renderers: () => renderers
});
var $$Astro$3, $$LatestCampaign, __freeze, __defProp2, __template, _a, $$Astro$22, $$Hero, $$MenuIcons, $$Astro$14, $$NewsCard, $$Astro9, $$LatestNews, $$Index9, $$file19, $$url19, _page20, page20;
var init_index_astro = __esm({
  "dist/_worker.js/pages/index.astro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_CwYSbNCn();
    init_PrimaryLayout_DfsEkHQg();
    init_Card_Cxd0AMOM();
    init_renderers();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    $$Astro$3 = createAstro();
    $$LatestCampaign = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
      Astro2.self = $$LatestCampaign;
      const {
        title: title2 = "Program Terbaru",
        campaigns = [],
        showViewAll = true,
        viewAllLink = "/campaign"
      } = Astro2.props;
      const today = /* @__PURE__ */ new Date();
      const campaignsWithDaysLeft = campaigns.map((campaign) => {
        const endDate = new Date(campaign.endDate);
        const timeDiff = endDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1e3 * 3600 * 24));
        return { ...campaign, daysLeft: daysLeft >= 0 ? daysLeft : 0 };
      });
      const featuredCampaigns = campaignsWithDaysLeft.slice(0, 6);
      return renderTemplate`${maybeRenderHead()}<section class="campaign-section px-4 py-8 md:py-16" data-astro-cid-ehpw7xbh> <div class="campaign-container max-w-7xl mx-auto" data-astro-cid-ehpw7xbh> <!-- Header Section --> <h2 class="bg-blue-500 text-white text-lg rounded-t-lg w-fit px-3 py-1 font-semibold mb-4" data-astro-cid-ehpw7xbh>${title2}</h2> <!-- Campaign Cards --> ${featuredCampaigns.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-content-center items-stretch" data-astro-cid-ehpw7xbh> ${featuredCampaigns.map((campaign) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "_id": campaign._id, "title": campaign.title || "Untitled", "description": campaign.description || "Tidak ada Deskripsi", "imageUrl": campaign.imageUrl, "targetAmount": campaign.targetAmount, "currentAmount": campaign.currentAmount || 0, "daysLeft": campaign.daysLeft, "donorCount": campaign.donorCount || 0, "organizationName": campaign.organizationName || "Anonymous", "organizationLogo": campaign.organizationLogo, "category": campaign.category || "Tidak Berkategori", "data-astro-cid-ehpw7xbh": true })}`)} </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-ehpw7xbh> <p class="text-gray-500" data-astro-cid-ehpw7xbh>Tidak ada kampanye yang tersedia saat ini.</p> </div>`} <!-- View All Button --> ${showViewAll && featuredCampaigns.length > 0 && renderTemplate`<div class="text-center mt-12" data-astro-cid-ehpw7xbh> <a${addAttribute(viewAllLink, "href")} class="inline-block px-8 py-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300" data-astro-cid-ehpw7xbh>
Lihat Semua Kampanye
</a> </div>`} </div> </section> `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/campaign/LatestCampaign.astro", void 0);
    __freeze = Object.freeze;
    __defProp2 = Object.defineProperty;
    __template = /* @__PURE__ */ __name((cooked, raw) => __freeze(__defProp2(cooked, "raw", { value: __freeze(cooked.slice()) })), "__template");
    $$Astro$22 = createAstro();
    $$Hero = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$22, $$props, $$slots);
      Astro2.self = $$Hero;
      const { campaigns = [] } = Astro2.props;
      const campaignsToShow = Array.isArray(campaigns) ? campaigns.slice(0, 3) : [];
      const slideCount = campaignsToShow.length > 0 ? campaignsToShow.length : 3;
      return renderTemplate(_a || (_a = __template(["", '<section class="relative w-full h-[28vh] md:h-[35vh] overflow-hidden"> <!-- background Slideshow --> <div id="slideshow" aria-label="Galeri foto kampanye"> ', " ", ' </div> <!-- teks di atas slideshow --> <div class="relative z-10 flex items-center justify-center h-full bg-black/60 text-white text-center px-4"> <div> <h1 class="text-2xl md:text-3xl font-bold">\nBuat Perubahan.\n</h1> <h1 class="text-2xl md:text-3xl text-blue-200 font-bold mb-3">\nSatu Donasi, Sejuta Harapan\n</h1> </div> <!-- selector --> <div class="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2"> ', ' </div> </div> </section> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    let current = 0;\n    const slides = document.querySelectorAll(".slide");\n    const indicator = document.querySelectorAll(".indicator")\n    const total = slides.length;\n\n    function showSlide(index) {\n      slides.forEach((slide, i) => {\n        slide.style.opacity = i === index ? "1" : "0";\n      });\n      indicator?.forEach((indicator, i) => {\n        indicator.classList.toggle("bg-white/60", i === index);\n        indicator.classList.toggle("bg-white/30", i !== index);\n      })\n    }\n\n    function nextSlide() {\n      current = (current + 1) % total;\n      showSlide(current);\n    }\n\n    indicator?.forEach((indicator, i) => {\n    indicator.addEventListener("click", () => {\n      current = i;\n      showSlide(current);\n      // Reset timer\n      slideInterval = setInterval(nextSlide, 5000);\n      clearInterval(slideInterval);\n    });\n  });\n\n    showSlide(current);\n    setInterval(nextSlide, 5000); // 5 detik\n  });\n<\/script>'])), maybeRenderHead(), campaignsToShow.length > 0 && campaignsToShow.map((c) => renderTemplate`<div class="slide absolute inset-0 transition-opacity duration-1000 bg-cover bg-center"${addAttribute(`background-image: url('${c.imageUrl || "/images/slide1.jpg"}')`, "style")}></div>`), campaignsToShow.length === 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": /* @__PURE__ */ __name(($$result2) => renderTemplate` <div class="slide absolute inset-0 transition-opacity duration-1000 bg-cover bg-center" style="background-image: url('/images/slide1.jpg')"></div> <div class="slide absolute inset-0 transition-opacity duration-1000 bg-cover bg-center" style="background-image: url('/images/slide2.jpg')"></div> <div class="slide absolute inset-0 transition-opacity duration-1000 bg-cover bg-center" style="background-image: url('/images/slide3.jpg')"></div> `, "default") })}`, Array.from({ length: slideCount }).map((_, i) => renderTemplate`<button${addAttribute(`h-2 w-8 rounded-full ${i === 0 ? "bg-white/60" : "bg-white/30"} indicator`, "class")}${addAttribute(i, "data-index")}></button>`));
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/home/Hero.astro", void 0);
    $$MenuIcons = createComponent(($$result, $$props, $$slots) => {
      const iconGrid = `<img class="w-20 h-20 md:w-28 md:h-28 object-contain" src="/images/UI/icons/house.png" alt="Icon Donasi">`;
      const iconNews = `<img class="w-20 h-20 md:w-28 md:h-28 object-contain" src="/images/UI/icons/document.png" alt="Icon Berita">`;
      const iconDonate = `<img class="w-20 h-20 md:w-28 md:h-28 object-contain" src="/images/UI/icons/love.png" alt="Icon Beranda">`;
      const menus = [
        { href: "/campaign", label: "Mulai Berdonasi", iconHtml: iconDonate, highlight: true },
        { href: "/news", label: "Baca Berita", iconHtml: iconNews },
        { href: "/home", label: "Beranda", iconHtml: iconGrid }
        // Tambahkan item baru cukup menambahkan objek di sini
      ];
      const totalSlots = 10;
      const placeholderCount = Math.max(0, totalSlots - menus.length);
      return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="max-w-6xl mx-auto px-4 py-6 md:py-8"> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4"> ${menus.map((menu) => renderTemplate`<a${addAttribute(menu.href, "href")} class="group flex flex-col justify-center items-center gap-2"${addAttribute(menu.label, "aria-label")}> <div${addAttribute(`relative h-12 w-12 md:h-14 md:w-14 rounded-lg text-white flex items-center justify-center transition-colors overflow-visible
            ${menu.highlight ? "bg-amber-500 ring-2 ring-amber-300 shadow-lg shadow-amber-200/60 group-hover:bg-amber-600" : "bg-blue-600/30 group-hover:bg-blue-700"}`, "class")}> ${menu.highlight && renderTemplate`<span class="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-white text-amber-600 border border-amber-200">
🙏
</span>`} <div class="absolute -right-2 md:-right-3">${unescapeHTML(menu.iconHtml)}</div> </div> <div class="flex flex-col items-center min-h-8"> <span class="text-xs text-center font-medium md:text-sm">${menu.label}</span> </div> </a>`)}  ${Array.from({ length: placeholderCount }).map((_, index) => renderTemplate`<div class="flex flex-col items-center gap-2"${addAttribute(`Menu placeholder ${index + 1}`, "aria-label")}> <div class="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gray-200 border border-gray-300"></div> <span class="h-3 w-10 md:w-12 bg-gray-200 rounded"></span> </div>`)} </div> </div> </section>`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/home/MenuIcons.astro", void 0);
    $$Astro$14 = createAstro();
    $$NewsCard = createComponent(($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro$14, $$props, $$slots);
      Astro2.self = $$NewsCard;
      const {
        _id,
        title: title2,
        content,
        image,
        slug,
        author,
        category,
        createdAt,
        viewCount
      } = Astro2.props;
      const formatDate = /* @__PURE__ */ __name((dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }, "formatDate");
      const truncateContent = /* @__PURE__ */ __name((text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
      }, "truncateContent");
      return renderTemplate`${maybeRenderHead()}<article class="news-card-compact group cursor-pointer transition-all duration-300 hover:-translate-y-1 flex-shrink-0" data-astro-cid-mmc5xzxl> <a${addAttribute(`/news/${slug}`, "href")} class="block h-full" data-astro-cid-mmc5xzxl> <div class="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md h-full flex flex-col" data-astro-cid-mmc5xzxl> <!-- Image Section --> <div class="news-image-container-compact relative overflow-hidden flex-shrink-0" data-astro-cid-mmc5xzxl> <img${addAttribute(image || "/images/empty-image-placeholder.webp", "src")}${addAttribute(title2, "alt")} class="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105" onerror="console.error('Failed to load image:', this.src)" data-astro-cid-mmc5xzxl> <div class="absolute top-2 left-2" data-astro-cid-mmc5xzxl> <span class="text-xs bg-white/90 text-gray-700 px-2 py-1 rounded-full font-medium shadow-sm" data-astro-cid-mmc5xzxl> ${category} </span> </div> </div> <!-- Content Section --> <div class="news-content-compact p-4 flex flex-col flex-grow" data-astro-cid-mmc5xzxl> <!-- Meta Info --> <div class="news-meta-compact flex items-center gap-2 mb-2 flex-shrink-0" data-astro-cid-mmc5xzxl> <div class="author-info-compact flex items-center gap-1.5" data-astro-cid-mmc5xzxl> <img src="/images/icons/user-default.svg" alt="Author" class="w-6 h-6 rounded-full border border-gray-100" data-astro-cid-mmc5xzxl> <div class="flex flex-col" data-astro-cid-mmc5xzxl> <p class="text-xs font-medium text-gray-900" data-astro-cid-mmc5xzxl>${author?.nama || "Anonymous"}</p> <span class="text-xs text-gray-500" data-astro-cid-mmc5xzxl> ${formatDate(createdAt)} </span> </div> </div> <div class="view-count-compact ml-auto flex items-center gap-1 text-xs text-gray-500" data-astro-cid-mmc5xzxl> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mmc5xzxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-mmc5xzxl></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-mmc5xzxl></path> </svg> ${viewCount} </div> </div> <!-- Title --> <h3 class="text-sm font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 flex-shrink-0" data-astro-cid-mmc5xzxl> ${title2} </h3> <!-- Content Preview --> <p class="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-3 flex-grow" data-astro-cid-mmc5xzxl> ${truncateContent(content, 100)} </p> <!-- Read More Button --> <div class="flex items-center justify-between flex-shrink-0" data-astro-cid-mmc5xzxl> <span class="inline-flex items-center gap-1 text-blue-600 group-hover:text-blue-700 font-medium text-xs transition-colors duration-300" data-astro-cid-mmc5xzxl>
Baca Selengkapnya
<svg class="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mmc5xzxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-mmc5xzxl></path> </svg> </span> </div> </div> </div> </a> </article> `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/news/NewsCard.astro", void 0);
    $$Astro9 = createAstro();
    $$LatestNews = createComponent(async ($$result, $$props, $$slots) => {
      const Astro2 = $$result.createAstro($$Astro9, $$props, $$slots);
      Astro2.self = $$LatestNews;
      const {
        title: title2 = "Berita Terbaru",
        subtitle = "Dapatkan informasi terbaru seputar kegiatan dan pengumuman kami",
        limit = 6,
        showViewAll = true,
        viewAllLink = "/news"
      } = Astro2.props;
      let latestNews = [];
      try {
        const response = await fetch(`${"http://localhost:3000/api"}/news/latest?limit=${limit}`);
        if (response.ok) {
          latestNews = await response.json();
        }
      } catch (error4) {
        console.error("Error fetching latest news:", error4);
      }
      return renderTemplate`${maybeRenderHead()}<section class="news-section px-4 py-8 md:py-16" data-astro-cid-qa5o63iu> <div class="news-container max-w-7xl mx-auto" data-astro-cid-qa5o63iu> <!-- Header Section --> <h2 class="bg-blue-500 text-white text-lg rounded-t-lg w-fit px-3 py-1 font-semibold mb-4" data-astro-cid-qa5o63iu>${title2}</h2> <!-- News Cards --> ${latestNews.length > 0 ? renderTemplate`<div class="news-scroll-container" data-astro-cid-qa5o63iu> <div class="news-scroll-wrapper" data-astro-cid-qa5o63iu> ${latestNews.map((news) => renderTemplate`${renderComponent($$result, "NewsCard", $$NewsCard, { "_id": news._id, "title": news.title, "content": news.content, "image": news.image, "slug": news.slug, "author": news.author, "category": news.category, "createdAt": news.createdAt, "viewCount": news.viewCount, "data-astro-cid-qa5o63iu": true })}`)} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-qa5o63iu> <div class="mb-4" data-astro-cid-qa5o63iu> <img src="/images/empty-image-placeholder.webp" alt="No news" class="w-32 h-32 mx-auto opacity-50" data-astro-cid-qa5o63iu> </div> <h3 class="text-xl font-semibold text-gray-700 mb-2" data-astro-cid-qa5o63iu>Belum Ada Berita</h3> <p class="text-gray-500" data-astro-cid-qa5o63iu>Berita terbaru akan muncul di sini</p> </div>`} <!-- View All Button --> ${showViewAll && latestNews.length > 0 && renderTemplate`<div class="text-center mt-12" data-astro-cid-qa5o63iu> <a${addAttribute(viewAllLink, "href")} class="inline-block px-8 py-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium" data-astro-cid-qa5o63iu>
Lihat Semua Berita
</a> </div>`} </div> </section> `;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/news/LatestNews.astro", void 0);
    $$Index9 = createComponent(async ($$result, $$props, $$slots) => {
      const API_URL = "http://localhost:3000/api";
      async function fetchCampaigns() {
        try {
          const response = await fetch(`${API_URL}/campaigns`);
          if (!response.ok) {
            throw new Error("Failed to fetch campaigns");
          }
          const data = await response.json();
          return {
            campaigns: data.campaigns || [],
            totalPages: data.totalPages || 1,
            currentPage: data.currentPage || 1,
            total: data.total || 0
          };
        } catch (error4) {
          console.error("Error fetching campaigns:", error4);
          return {
            campaigns: [],
            totalPages: 1,
            currentPage: 1,
            total: 0
          };
        }
      }
      __name(fetchCampaigns, "fetchCampaigns");
      const campaignData = await fetchCampaigns();
      return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, {}, { "default": /* @__PURE__ */ __name(async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "campaigns": campaignData.campaigns?.slice(0, 3) })} ${renderComponent($$result2, "MenuIcons", $$MenuIcons, {})} ${renderComponent($$result2, "LatestNews", $$LatestNews, {})} ${renderComponent($$result2, "LatestCampaign", $$LatestCampaign, { "campaigns": campaignData.campaigns })} `, "default") })}`;
    }, "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/index.astro", void 0);
    $$file19 = "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/index.astro";
    $$url19 = "";
    _page20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: $$Index9,
      file: $$file19,
      url: $$url19
    }, Symbol.toStringTag, { value: "Module" }));
    page20 = /* @__PURE__ */ __name(() => _page20, "page");
  }
});

// dist/_worker.js/_noop-actions.mjs
var noop_actions_exports = {};
__export(noop_actions_exports, {
  server: () => server
});
var server;
var init_noop_actions = __esm({
  "dist/_worker.js/_noop-actions.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    server = {};
  }
});

// dist/_worker.js/_astro-internal_middleware.mjs
var astro_internal_middleware_exports = {};
__export(astro_internal_middleware_exports, {
  onRequest: () => onRequest
});
var onRequest$1, onRequest;
var init_astro_internal_middleware = __esm({
  "dist/_worker.js/_astro-internal_middleware.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_designed_error_pages_CjEd6zCM();
    init_server_CwYSbNCn();
    init_index_DE25xXt9();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    onRequest$1 = /* @__PURE__ */ __name((context2, next) => {
      if (context2.isPrerendered) {
        context2.locals.runtime ??= {
          env: process.env
        };
      }
      return next();
    }, "onRequest$1");
    onRequest = sequence(
      onRequest$1
    );
  }
});

// dist/_worker.js/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_renderers();

// dist/_worker.js/chunks/_@astrojs-ssr-adapter_Da06DMDr.mjs
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_path_h5kZAkfu();
init_index_DE25xXt9();
init_server_CwYSbNCn();
init_astro_designed_error_pages_CjEd6zCM();

// dist/_worker.js/chunks/noop-middleware_DFJY6lHj.mjs
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_CwYSbNCn();
globalThis.process ??= {};
globalThis.process.env ??= {};
var NOOP_MIDDLEWARE_FN = /* @__PURE__ */ __name(async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
}, "NOOP_MIDDLEWARE_FN");

// dist/_worker.js/chunks/_@astrojs-ssr-adapter_Da06DMDr.mjs
import "cloudflare:workers";
globalThis.process ??= {};
globalThis.process.env ??= {};
function createI18nMiddleware(i18n, base, trailingSlash, format) {
  if (!i18n) return (_, next) => next();
  const payload = {
    ...i18n,
    trailingSlash,
    base,
    format
  };
  const _redirectToDefaultLocale = redirectToDefaultLocale(payload);
  const _noFoundForNonLocaleRoute = notFound(payload);
  const _requestHasLocale = requestHasLocale(payload.locales);
  const _redirectToFallback = redirectToFallback(payload);
  const prefixAlways = /* @__PURE__ */ __name((context2, response) => {
    const url = context2.url;
    if (url.pathname === base + "/" || url.pathname === base) {
      return _redirectToDefaultLocale(context2);
    } else if (!_requestHasLocale(context2)) {
      return _noFoundForNonLocaleRoute(context2, response);
    }
    return void 0;
  }, "prefixAlways");
  const prefixOtherLocales = /* @__PURE__ */ __name((context2, response) => {
    let pathnameContainsDefaultLocale = false;
    const url = context2.url;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return _noFoundForNonLocaleRoute(context2);
    }
    return void 0;
  }, "prefixOtherLocales");
  return async (context2, next) => {
    const response = await next();
    const type2 = response.headers.get(ROUTE_TYPE_HEADER);
    const isReroute = response.headers.get(REROUTE_DIRECTIVE_HEADER);
    if (isReroute === "no" && typeof i18n.fallback === "undefined") {
      return response;
    }
    if (type2 !== "page" && type2 !== "fallback") {
      return response;
    }
    if (requestIs404Or500(context2.request, base)) {
      return response;
    }
    if (isRequestServerIsland(context2.request, base)) {
      return response;
    }
    const { currentLocale } = context2;
    switch (i18n.strategy) {
      // NOTE: theoretically, we should never hit this code path
      case "manual": {
        return response;
      }
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(context2, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(context2, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = _noFoundForNonLocaleRoute(context2, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = _noFoundForNonLocaleRoute(context2, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(context2, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(context2, response);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    return _redirectToFallback(context2, response);
  };
}
__name(createI18nMiddleware, "createI18nMiddleware");
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}
__name(localeHasntDomain, "localeHasntDomain");
var NOOP_ACTIONS_MOD = {
  server: {}
};
var FORM_CONTENT_TYPES = [
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
];
var SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
function createOriginCheckMiddleware() {
  return defineMiddleware((context2, next) => {
    const { request, url, isPrerendered } = context2;
    if (isPrerendered) {
      return next();
    }
    if (SAFE_METHODS.includes(request.method)) {
      return next();
    }
    const isSameOrigin = request.headers.get("origin") === url.origin;
    const hasContentType2 = request.headers.has("content-type");
    if (hasContentType2) {
      const formLikeHeader = hasFormLikeHeader(request.headers.get("content-type"));
      if (formLikeHeader && !isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    } else {
      if (!isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    }
    return next();
  });
}
__name(createOriginCheckMiddleware, "createOriginCheckMiddleware");
function hasFormLikeHeader(contentType) {
  if (contentType) {
    for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) {
      if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) {
        return true;
      }
    }
  }
  return false;
}
__name(hasFormLikeHeader, "hasFormLikeHeader");
function createDefaultRoutes(manifest2) {
  const root = new URL(manifest2.hrefRoot);
  return [
    {
      instance: default404Instance,
      matchesComponent: /* @__PURE__ */ __name((filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href, "matchesComponent"),
      route: DEFAULT_404_ROUTE.route,
      component: DEFAULT_404_COMPONENT
    },
    {
      instance: createEndpoint(manifest2),
      matchesComponent: /* @__PURE__ */ __name((filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href, "matchesComponent"),
      route: SERVER_ISLAND_ROUTE,
      component: SERVER_ISLAND_COMPONENT
    }
  ];
}
__name(createDefaultRoutes, "createDefaultRoutes");
var Pipeline = class {
  static {
    __name(this, "Pipeline");
  }
  constructor(logger, manifest2, runtimeMode, renderers2, resolve, serverLike, streaming, adapterName = manifest2.adapterName, clientDirectives = manifest2.clientDirectives, inlinedScripts = manifest2.inlinedScripts, compressHTML = manifest2.compressHTML, i18n = manifest2.i18n, middleware = manifest2.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest2.site ? new URL(manifest2.site) : void 0, defaultRoutes = createDefaultRoutes(manifest2), actions = manifest2.actions) {
    this.logger = logger;
    this.manifest = manifest2;
    this.runtimeMode = runtimeMode;
    this.renderers = renderers2;
    this.resolve = resolve;
    this.serverLike = serverLike;
    this.streaming = streaming;
    this.adapterName = adapterName;
    this.clientDirectives = clientDirectives;
    this.inlinedScripts = inlinedScripts;
    this.compressHTML = compressHTML;
    this.i18n = i18n;
    this.middleware = middleware;
    this.routeCache = routeCache;
    this.site = site;
    this.defaultRoutes = defaultRoutes;
    this.actions = actions;
    this.internalMiddleware = [];
    if (i18n?.strategy !== "manual") {
      this.internalMiddleware.push(
        createI18nMiddleware(i18n, manifest2.base, manifest2.trailingSlash, manifest2.buildFormat)
      );
    }
  }
  internalMiddleware;
  resolvedMiddleware = void 0;
  resolvedActions = void 0;
  /**
   * Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
   * it returns a no-op function
   */
  async getMiddleware() {
    if (this.resolvedMiddleware) {
      return this.resolvedMiddleware;
    } else if (this.middleware) {
      const middlewareInstance = await this.middleware();
      const onRequest2 = middlewareInstance.onRequest ?? NOOP_MIDDLEWARE_FN;
      if (this.manifest.checkOrigin) {
        this.resolvedMiddleware = sequence(createOriginCheckMiddleware(), onRequest2);
      } else {
        this.resolvedMiddleware = onRequest2;
      }
      return this.resolvedMiddleware;
    } else {
      this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
      return this.resolvedMiddleware;
    }
  }
  setActions(actions) {
    this.resolvedActions = actions;
  }
  async getActions() {
    if (this.resolvedActions) {
      return this.resolvedActions;
    } else if (this.actions) {
      return await this.actions();
    }
    return NOOP_ACTIONS_MOD;
  }
  async getAction(path) {
    const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
    let { server: server2 } = await this.getActions();
    if (!server2 || !(typeof server2 === "object")) {
      throw new TypeError(
        `Expected \`server\` export in actions file to be an object. Received ${typeof server2}.`
      );
    }
    for (const key of pathKeys) {
      if (!(key in server2)) {
        throw new AstroError({
          ...ActionNotFoundError,
          message: ActionNotFoundError.message(pathKeys.join("."))
        });
      }
      server2 = server2[key];
    }
    if (typeof server2 !== "function") {
      throw new TypeError(
        `Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server2}.`
      );
    }
    return server2;
  }
};
var RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
var RedirectSinglePageBuiltModule = {
  page: /* @__PURE__ */ __name(() => Promise.resolve(RedirectComponentInstance), "page"),
  onRequest: /* @__PURE__ */ __name((_, next) => next(), "onRequest"),
  renderers: []
};
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log3(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
__name(log3, "log");
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
__name(isLogLevelEnabled, "isLogLevelEnabled");
function info3(opts, label, message, newLine = true) {
  return log3(opts, "info", label, message, newLine);
}
__name(info3, "info");
function warn3(opts, label, message, newLine = true) {
  return log3(opts, "warn", label, message, newLine);
}
__name(warn3, "warn");
function error3(opts, label, message, newLine = true) {
  return log3(opts, "error", label, message, newLine);
}
__name(error3, "error");
function debug3(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
__name(debug3, "debug");
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
__name(getEventPrefix, "getEventPrefix");
var Logger = class {
  static {
    __name(this, "Logger");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info3(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn3(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error3(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug3(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
};
var AstroIntegrationLogger = class _AstroIntegrationLogger {
  static {
    __name(this, "AstroIntegrationLogger");
  }
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new _AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info3(this.options, this.label, message);
  }
  warn(message) {
    warn3(this.options, this.label, message);
  }
  error(message) {
    error3(this.options, this.label, message);
  }
  debug(message) {
    debug3(this.label, message);
  }
};
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  if (!assetsPrefix) return "";
  if (typeof assetsPrefix === "string") return assetsPrefix;
  const dotLessFileExtension = fileExtension2.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
__name(getAssetsPrefix, "getAssetsPrefix");
function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    return joinPaths(pf, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
__name(createAssetLink, "createAssetLink");
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
__name(createStylesheetElement, "createStylesheetElement");
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
__name(createStylesheetElementSet, "createStylesheetElementSet");
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
__name(createModuleScriptElement, "createModuleScriptElement");
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
__name(createModuleScriptElementWithSrc, "createModuleScriptElementWithSrc");
function redirectTemplate({
  status,
  absoluteLocation,
  relativeLocation,
  from
}) {
  const delay = status === 302 ? 2 : 0;
  return `<!doctype html>
<title>Redirecting to: ${relativeLocation}</title>
<meta http-equiv="refresh" content="${delay};url=${relativeLocation}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${absoluteLocation}">
<body>
	<a href="${relativeLocation}">Redirecting ${from ? `from <code>${from}</code> ` : ""}to <code>${relativeLocation}</code></a>
</body>`;
}
__name(redirectTemplate, "redirectTemplate");
var AppPipeline = class _AppPipeline extends Pipeline {
  static {
    __name(this, "AppPipeline");
  }
  static create({
    logger,
    manifest: manifest2,
    runtimeMode,
    renderers: renderers2,
    resolve,
    serverLike,
    streaming,
    defaultRoutes
  }) {
    const pipeline = new _AppPipeline(
      logger,
      manifest2,
      runtimeMode,
      renderers2,
      resolve,
      serverLike,
      streaming,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      defaultRoutes
    );
    return pipeline;
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    const module = await this.getModuleForRoute(routeData);
    return module.page();
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r2) => r2.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { newUrl, pathname, componentInstance, routeData };
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: /* @__PURE__ */ __name(() => Promise.resolve(defaultRoute.instance), "page"),
          renderers: []
        };
      }
    }
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.manifest.pageMap) {
        const importComponentInstance = this.manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        return await importComponentInstance();
      } else if (this.manifest.pageModule) {
        return this.manifest.pageModule;
      }
      throw new Error(
        "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
      );
    }
  }
};
var App = class _App {
  static {
    __name(this, "App");
  }
  #manifest;
  #manifestData;
  #logger = new Logger({
    dest: consoleLogDestination,
    level: "info"
  });
  #baseWithoutTrailingSlash;
  #pipeline;
  #adapterLogger;
  constructor(manifest2, streaming = true) {
    this.#manifest = manifest2;
    this.#manifestData = {
      routes: manifest2.routes.map((route) => route.routeData)
    };
    ensure404Route(this.#manifestData);
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#pipeline = this.#createPipeline(streaming);
    this.#adapterLogger = new AstroIntegrationLogger(
      this.#logger.options,
      this.#manifest.adapterName
    );
  }
  getAdapterLogger() {
    return this.#adapterLogger;
  }
  /**
   * Creates a pipeline by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createPipeline(streaming = false) {
    return AppPipeline.create({
      logger: this.#logger,
      manifest: this.#manifest,
      runtimeMode: "production",
      renderers: this.#manifest.renderers,
      defaultRoutes: createDefaultRoutes(this.#manifest),
      resolve: /* @__PURE__ */ __name(async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        if (bundlePath.startsWith("data:") || bundlePath.length === 0) {
          return bundlePath;
        } else {
          return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
        }
      }, "resolve"),
      serverLike: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  /**
   * It removes the base from the request URL, prepends it with a forward slash and attempts to decoded it.
   *
   * If the decoding fails, it logs the error and return the pathname as is.
   * @param request
   * @private
   */
  #getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    try {
      return decodeURI(pathname);
    } catch (e) {
      this.getAdapterLogger().error(e.toString());
      return pathname;
    }
  }
  match(request) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname)) return void 0;
    let pathname = this.#computePathnameFromDomain(request);
    if (!pathname) {
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    }
    let routeData = matchRoute(decodeURI(pathname), this.#manifestData);
    if (!routeData || routeData.prerender) return void 0;
    return routeData;
  }
  #computePathnameFromDomain(request) {
    let pathname = void 0;
    const url = new URL(request.url);
    if (this.#manifest.i18n && (this.#manifest.i18n.strategy === "domains-prefix-always" || this.#manifest.i18n.strategy === "domains-prefix-other-locales" || this.#manifest.i18n.strategy === "domains-prefix-always-no-redirect")) {
      let host = request.headers.get("X-Forwarded-Host");
      let protocol = request.headers.get("X-Forwarded-Proto");
      if (protocol) {
        protocol = protocol + ":";
      } else {
        protocol = url.protocol;
      }
      if (!host) {
        host = request.headers.get("Host");
      }
      if (host && protocol) {
        host = host.split(":")[0];
        try {
          let locale;
          const hostAsUrl = new URL(`${protocol}//${host}`);
          for (const [domainKey, localeValue] of Object.entries(
            this.#manifest.i18n.domainLookupTable
          )) {
            const domainKeyAsUrl = new URL(domainKey);
            if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
              locale = localeValue;
              break;
            }
          }
          if (locale) {
            pathname = prependForwardSlash(
              joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
            );
            if (url.pathname.endsWith("/")) {
              pathname = appendForwardSlash(pathname);
            }
          }
        } catch (e) {
          this.#logger.error(
            "router",
            `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
          );
          this.#logger.error("router", `Error: ${e}`);
        }
      }
    }
    return pathname;
  }
  #redirectTrailingSlash(pathname) {
    const { trailingSlash } = this.#manifest;
    if (pathname === "/" || pathname.startsWith("/_")) {
      return pathname;
    }
    const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
    if (path !== pathname) {
      return path;
    }
    if (trailingSlash === "ignore") {
      return pathname;
    }
    if (trailingSlash === "always" && !hasFileExtension(pathname)) {
      return appendForwardSlash(pathname);
    }
    if (trailingSlash === "never") {
      return removeTrailingForwardSlash(pathname);
    }
    return pathname;
  }
  async render(request, renderOptions) {
    let routeData;
    let locals;
    let clientAddress;
    let addCookieHeader;
    const url = new URL(request.url);
    const redirect = this.#redirectTrailingSlash(url.pathname);
    const prerenderedErrorPageFetch = renderOptions?.prerenderedErrorPageFetch ?? fetch;
    if (redirect !== url.pathname) {
      const status = request.method === "GET" ? 301 : 308;
      return new Response(
        redirectTemplate({
          status,
          relativeLocation: url.pathname,
          absoluteLocation: redirect,
          from: request.url
        }),
        {
          status,
          headers: {
            location: redirect + url.search
          }
        }
      );
    }
    addCookieHeader = renderOptions?.addCookieHeader;
    clientAddress = renderOptions?.clientAddress ?? Reflect.get(request, clientAddressSymbol);
    routeData = renderOptions?.routeData;
    locals = renderOptions?.locals;
    if (routeData) {
      this.#logger.debug(
        "router",
        "The adapter " + this.#manifest.adapterName + " provided a custom RouteData for ",
        request.url
      );
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (locals) {
      if (typeof locals !== "object") {
        const error4 = new AstroError(LocalsNotAnObject);
        this.#logger.error(null, error4.stack);
        return this.#renderError(request, {
          status: 500,
          error: error4,
          clientAddress,
          prerenderedErrorPageFetch
        });
      }
    }
    if (!routeData) {
      routeData = this.match(request);
      this.#logger.debug("router", "Astro matched the following route for " + request.url);
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (!routeData) {
      routeData = this.#manifestData.routes.find(
        (route) => route.component === "404.astro" || route.component === DEFAULT_404_COMPONENT
      );
    }
    if (!routeData) {
      this.#logger.debug("router", "Astro hasn't found routes that match " + request.url);
      this.#logger.debug("router", "Here's the available routes:\n", this.#manifestData);
      return this.#renderError(request, {
        locals,
        status: 404,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    const pathname = this.#getPathnameFromRequest(request);
    const defaultStatus = this.#getDefaultStatusCode(routeData, pathname);
    let response;
    let session;
    try {
      const mod2 = await this.#pipeline.getModuleForRoute(routeData);
      const renderContext = await RenderContext.create({
        pipeline: this.#pipeline,
        locals,
        pathname,
        request,
        routeData,
        status: defaultStatus,
        clientAddress
      });
      session = renderContext.session;
      response = await renderContext.render(await mod2.page());
    } catch (err) {
      this.#logger.error(null, err.stack || err.message || String(err));
      return this.#renderError(request, {
        locals,
        status: 500,
        error: err,
        clientAddress,
        prerenderedErrorPageFetch
      });
    } finally {
      await session?.[PERSIST_SYMBOL]();
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
      return this.#renderError(request, {
        locals,
        response,
        status: response.status,
        // We don't have an error to report here. Passing null means we pass nothing intentionally
        // while undefined means there's no error
        error: response.status === 500 ? null : void 0,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    if (response.headers.has(REROUTE_DIRECTIVE_HEADER)) {
      response.headers.delete(REROUTE_DIRECTIVE_HEADER);
    }
    if (addCookieHeader) {
      for (const setCookieHeaderValue of _App.getSetCookieFromResponse(response)) {
        response.headers.append("set-cookie", setCookieHeaderValue);
      }
    }
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
   * For example,
   * ```ts
   * for (const cookie_ of App.getSetCookieFromResponse(response)) {
   *     const cookie: string = cookie_
   * }
   * ```
   * @param response The response to read cookies from.
   * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
   */
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, {
    locals,
    status,
    response: originalResponse,
    skipMiddleware = false,
    error: error4,
    clientAddress,
    prerenderedErrorPageFetch
  }) {
    const errorRoutePath = `/${status}${this.#manifest.trailingSlash === "always" ? "/" : ""}`;
    const errorRouteData = matchRoute(errorRoutePath, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        if (statusURL.toString() !== request.url) {
          const response2 = await prerenderedErrorPageFetch(statusURL.toString());
          const override = { status };
          return this.#mergeResponses(response2, originalResponse, override);
        }
      }
      const mod2 = await this.#pipeline.getModuleForRoute(errorRouteData);
      let session;
      try {
        const renderContext = await RenderContext.create({
          locals,
          pipeline: this.#pipeline,
          middleware: skipMiddleware ? NOOP_MIDDLEWARE_FN : void 0,
          pathname: this.#getPathnameFromRequest(request),
          request,
          routeData: errorRouteData,
          status,
          props: { error: error4 },
          clientAddress
        });
        session = renderContext.session;
        const response2 = await renderContext.render(await mod2.page());
        return this.#mergeResponses(response2, originalResponse);
      } catch {
        if (skipMiddleware === false) {
          return this.#renderError(request, {
            locals,
            status,
            response: originalResponse,
            skipMiddleware: true,
            clientAddress,
            prerenderedErrorPageFetch
          });
        }
      } finally {
        await session?.[PERSIST_SYMBOL]();
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, originalResponse, override) {
    if (!originalResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
    try {
      originalResponse.headers.delete("Content-type");
    } catch {
    }
    const mergedHeaders = new Map([
      ...Array.from(newResponse.headers),
      ...Array.from(originalResponse.headers)
    ]);
    const newHeaders = new Headers();
    for (const [name, value] of mergedHeaders) {
      newHeaders.set(name, value);
    }
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
      // If you're looking at here for possible bugs, it means that it's not a bug.
      // With the middleware, users can meddle with headers, and we should pass to the 404/500.
      // If users see something weird, it's because they are setting some headers they should not.
      //
      // Although, we don't want it to replace the content-type, because the error page must return `text/html`
      headers: newHeaders
    });
  }
  #getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.test(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404")) return 404;
    if (route.endsWith("/500")) return 500;
    return 200;
  }
};
async function handle(manifest2, app, request, env2, context2) {
  const { pathname } = new URL(request.url);
  const bindingName = "SESSION";
  globalThis.__env__ ??= {};
  globalThis.__env__[bindingName] = env2[bindingName];
  if (manifest2.assets.has(pathname)) {
    return env2.ASSETS.fetch(request.url.replace(/\.html$/, ""));
  }
  const routeData = app.match(request);
  if (!routeData) {
    const asset = await env2.ASSETS.fetch(
      request.url.replace(/index.html$/, "").replace(/\.html$/, "")
    );
    if (asset.status !== 404) {
      return asset;
    }
  }
  Reflect.set(request, Symbol.for("astro.clientAddress"), request.headers.get("cf-connecting-ip"));
  const locals = {
    runtime: {
      env: env2,
      cf: request.cf,
      caches,
      ctx: {
        waitUntil: /* @__PURE__ */ __name((promise) => context2.waitUntil(promise), "waitUntil"),
        // Currently not available: https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions
        passThroughOnException: /* @__PURE__ */ __name(() => {
          throw new Error(
            "`passThroughOnException` is currently not available in Cloudflare Pages. See https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions."
          );
        }, "passThroughOnException"),
        props: {}
      }
    }
  };
  const response = await app.render(
    request,
    {
      routeData,
      locals,
      prerenderedErrorPageFetch: /* @__PURE__ */ __name(async (url) => {
        return env2.ASSETS.fetch(url.replace(/\.html$/, ""));
      }, "prerenderedErrorPageFetch")
    }
  );
  if (app.setCookieHeaders) {
    for (const setCookieHeader of app.setCookieHeaders(response)) {
      response.headers.append("Set-Cookie", setCookieHeader);
    }
  }
  return response;
}
__name(handle, "handle");
function createExports(manifest2) {
  const app = new App(manifest2);
  const fetch2 = /* @__PURE__ */ __name(async (request, env2, context2) => {
    return await handle(manifest2, app, request, env2, context2);
  }, "fetch");
  return { default: { fetch: fetch2 } };
}
__name(createExports, "createExports");
var serverEntrypointModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));

// dist/_worker.js/manifest_A4U1Aewg.mjs
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_CwYSbNCn();
init_astro_designed_error_pages_CjEd6zCM();
globalThis.process ??= {};
globalThis.process.env ??= {};
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
__name(sanitizeParams, "sanitizeParams");
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
__name(getParameter, "getParameter");
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
__name(getSegment, "getSegment");
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
__name(getRouteGenerator, "getRouteGenerator");
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
__name(deserializeRouteData, "deserializeRouteData");
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
__name(deserializeManifest, "deserializeManifest");
var manifest = deserializeManifest({ "hrefRoot": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/", "cacheDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/.astro/", "outDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/dist/", "srcDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/", "publicDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/public/", "buildClientDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/dist/", "buildServerDir": "file:///D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/dist/_worker.js/", "adapterName": "@astrojs/cloudflare", "routes": [{ "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "page", "component": "_server-islands.astro", "params": ["name"], "segments": [[{ "content": "_server-islands", "dynamic": false, "spread": false }], [{ "content": "name", "dynamic": true, "spread": false }]], "pattern": "^\\/_server-islands\\/([^/]+?)\\/?$", "prerender": false, "isIndex": false, "fallbackRoutes": [], "route": "/_server-islands/[name]", "origin": "internal", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "endpoint", "isIndex": false, "route": "/_image", "pattern": "^\\/_image\\/?$", "segments": [[{ "content": "_image", "dynamic": false, "spread": false }]], "params": [], "component": "node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", "pathname": "/_image", "prerender": false, "fallbackRoutes": [], "origin": "internal", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/404", "isIndex": false, "type": "page", "pattern": "^\\/404\\/?$", "segments": [[{ "content": "404", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/404.astro", "pathname": "/404", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/about", "isIndex": false, "type": "page", "pattern": "^\\/about\\/?$", "segments": [[{ "content": "about", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/about.astro", "pathname": "/about", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/campaign/create-campaign", "isIndex": false, "type": "page", "pattern": "^\\/admin\\/campaign\\/create-campaign\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "campaign", "dynamic": false, "spread": false }], [{ "content": "create-campaign", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/campaign/create-campaign.astro", "pathname": "/admin/campaign/create-campaign", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/campaign", "isIndex": true, "type": "page", "pattern": "^\\/admin\\/campaign\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "campaign", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/campaign/index.astro", "pathname": "/admin/campaign", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/donation", "isIndex": true, "type": "page", "pattern": "^\\/admin\\/donation\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "donation", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/donation/index.astro", "pathname": "/admin/donation", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/news/create-news", "isIndex": false, "type": "page", "pattern": "^\\/admin\\/news\\/create-news\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "news", "dynamic": false, "spread": false }], [{ "content": "create-news", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/news/create-news.astro", "pathname": "/admin/news/create-news", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/news", "isIndex": true, "type": "page", "pattern": "^\\/admin\\/news\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "news", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/news/index.astro", "pathname": "/admin/news", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin/users", "isIndex": true, "type": "page", "pattern": "^\\/admin\\/users\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }], [{ "content": "users", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/users/index.astro", "pathname": "/admin/users", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/admin", "isIndex": true, "type": "page", "pattern": "^\\/admin\\/?$", "segments": [[{ "content": "admin", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/admin/index.astro", "pathname": "/admin", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/auth/login", "isIndex": false, "type": "page", "pattern": "^\\/auth\\/login\\/?$", "segments": [[{ "content": "auth", "dynamic": false, "spread": false }], [{ "content": "login", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/auth/login.astro", "pathname": "/auth/login", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/auth/logout", "isIndex": false, "type": "page", "pattern": "^\\/auth\\/logout\\/?$", "segments": [[{ "content": "auth", "dynamic": false, "spread": false }], [{ "content": "logout", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/auth/logout.astro", "pathname": "/auth/logout", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/auth/signup", "isIndex": false, "type": "page", "pattern": "^\\/auth\\/signup\\/?$", "segments": [[{ "content": "auth", "dynamic": false, "spread": false }], [{ "content": "signup", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/auth/signup.astro", "pathname": "/auth/signup", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/campaign/[id]", "isIndex": false, "type": "page", "pattern": "^\\/campaign\\/([^/]+?)\\/?$", "segments": [[{ "content": "campaign", "dynamic": false, "spread": false }], [{ "content": "id", "dynamic": true, "spread": false }]], "params": ["id"], "component": "src/pages/campaign/[id].astro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }, { "type": "inline", "content": ".campaign-section[data-astro-cid-lfnpelcz],.campaign-section[data-astro-cid-qsfofcz6]{background-color:#f9fafb}\n.line-clamp-2[data-astro-cid-xjhe6f3p]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-xjhe6f3p]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n" }], "routeData": { "route": "/campaign", "isIndex": true, "type": "page", "pattern": "^\\/campaign\\/?$", "segments": [[{ "content": "campaign", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/campaign/index.astro", "pathname": "/campaign", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }, { "type": "inline", "content": ".prose[data-astro-cid-vcwz2lde]{color:inherit}.prose[data-astro-cid-vcwz2lde] p[data-astro-cid-vcwz2lde]{margin-bottom:1.5rem}.prose[data-astro-cid-vcwz2lde] h1[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] h2[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] h3[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] h4[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] h5[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] h6[data-astro-cid-vcwz2lde]{color:#1f2937;font-weight:600;margin-top:2rem;margin-bottom:1rem}.prose[data-astro-cid-vcwz2lde] h1[data-astro-cid-vcwz2lde]{font-size:2rem}.prose[data-astro-cid-vcwz2lde] h2[data-astro-cid-vcwz2lde]{font-size:1.5rem}.prose[data-astro-cid-vcwz2lde] h3[data-astro-cid-vcwz2lde]{font-size:1.25rem}.prose[data-astro-cid-vcwz2lde] ul[data-astro-cid-vcwz2lde],.prose[data-astro-cid-vcwz2lde] ol[data-astro-cid-vcwz2lde]{margin-bottom:1.5rem;padding-left:1.5rem}.prose[data-astro-cid-vcwz2lde] li[data-astro-cid-vcwz2lde]{margin-bottom:.5rem}.prose[data-astro-cid-vcwz2lde] blockquote[data-astro-cid-vcwz2lde]{border-left:4px solid #3b82f6;padding-left:1rem;margin:1.5rem 0;font-style:italic;color:#6b7280}.prose[data-astro-cid-vcwz2lde] a[data-astro-cid-vcwz2lde]{color:#3b82f6;text-decoration:underline}.prose[data-astro-cid-vcwz2lde] a[data-astro-cid-vcwz2lde]:hover{color:#2563eb}\n" }], "routeData": { "route": "/news/[slug]", "isIndex": false, "type": "page", "pattern": "^\\/news\\/([^/]+?)\\/?$", "segments": [[{ "content": "news", "dynamic": false, "spread": false }], [{ "content": "slug", "dynamic": true, "spread": false }]], "params": ["slug"], "component": "src/pages/news/[slug].astro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }, { "type": "inline", "content": ".line-clamp-2[data-astro-cid-nf5xofni]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-nf5xofni]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.news-card-large[data-astro-cid-nf5xofni]{width:100%;height:100%;min-height:420px}.news-image-container-large[data-astro-cid-nf5xofni]{aspect-ratio:16/9}.news-image-container-large[data-astro-cid-nf5xofni] img[data-astro-cid-nf5xofni]{width:100%;height:100%;object-fit:cover}.news-card-large[data-astro-cid-nf5xofni] a[data-astro-cid-nf5xofni]{text-decoration:none;color:inherit}.news-card-large[data-astro-cid-nf5xofni]:hover{transform:translateY(-4px);box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}@media (max-width: 768px){.news-card-large[data-astro-cid-nf5xofni]{min-height:380px}.news-content-large[data-astro-cid-nf5xofni]{padding:1rem}.news-image-container-large[data-astro-cid-nf5xofni] img[data-astro-cid-nf5xofni]{height:12rem}}@media (max-width: 640px){.news-card-large[data-astro-cid-nf5xofni]{min-height:350px}.news-image-container-large[data-astro-cid-nf5xofni] img[data-astro-cid-nf5xofni]{height:10rem}}\n" }], "routeData": { "route": "/news", "isIndex": true, "type": "page", "pattern": "^\\/news\\/?$", "segments": [[{ "content": "news", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/news/index.astro", "pathname": "/news", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/payment/[id]", "isIndex": false, "type": "page", "pattern": "^\\/payment\\/([^/]+?)\\/?$", "segments": [[{ "content": "payment", "dynamic": false, "spread": false }], [{ "content": "id", "dynamic": true, "spread": false }]], "params": ["id"], "component": "src/pages/payment/[id].astro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }], "routeData": { "route": "/profile", "isIndex": true, "type": "page", "pattern": "^\\/profile\\/?$", "segments": [[{ "content": "profile", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/profile/index.astro", "pathname": "/profile", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [{ "type": "external", "src": "/_astro/create-campaign.DZRtQdEs.css" }, { "type": "inline", "content": ".line-clamp-2[data-astro-cid-xjhe6f3p]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-xjhe6f3p]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.campaign-section[data-astro-cid-ehpw7xbh]{background-color:#f9fafb;border-radius:32px 32px 0 0;box-shadow:0 -8px 30px #0000000d}@media (max-width: 768px){.campaign-section[data-astro-cid-ehpw7xbh]{border-radius:24px 24px 0 0}}.line-clamp-2[data-astro-cid-mmc5xzxl]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-mmc5xzxl]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.news-card-compact[data-astro-cid-mmc5xzxl]{width:280px;height:360px}.news-image-container-compact[data-astro-cid-mmc5xzxl]{aspect-ratio:16/9}.news-image-container-compact[data-astro-cid-mmc5xzxl] img[data-astro-cid-mmc5xzxl]{width:100%;height:100%;object-fit:cover}.news-card-compact[data-astro-cid-mmc5xzxl] a[data-astro-cid-mmc5xzxl]{text-decoration:none;color:inherit}.news-card-compact[data-astro-cid-mmc5xzxl]:hover{transform:translateY(-2px);box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}@media (max-width: 768px){.news-card-compact[data-astro-cid-mmc5xzxl]{width:240px;height:320px}}.news-section[data-astro-cid-qa5o63iu]{background-color:#fff}.news-container[data-astro-cid-qa5o63iu]{position:relative}.news-scroll-container[data-astro-cid-qa5o63iu]{overflow-x:auto;overflow-y:hidden;padding-bottom:1rem;margin-bottom:1rem}.news-scroll-container[data-astro-cid-qa5o63iu]::-webkit-scrollbar{height:8px}.news-scroll-container[data-astro-cid-qa5o63iu]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:4px}.news-scroll-container[data-astro-cid-qa5o63iu]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.news-scroll-container[data-astro-cid-qa5o63iu]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.news-scroll-wrapper[data-astro-cid-qa5o63iu]{display:flex;gap:1.5rem;padding:.5rem 0;min-width:max-content}@media (max-width: 768px){.news-section[data-astro-cid-qa5o63iu]{padding-left:1rem;padding-right:1rem}.news-scroll-wrapper[data-astro-cid-qa5o63iu]{gap:1rem}}\n" }], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "trailingSlash": "ignore", "compressHTML": true, "componentMetadata": [["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/donation/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/create-news.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/users/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/login.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/404.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/logout.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/[id].astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/index.astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/payment/[id].astro", { "propagation": "none", "containsHead": true }], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro", { "propagation": "none", "containsHead": true }]], "renderers": [], "clientDirectives": [["idle", '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();']], "entryModules": { "\0astro-internal:middleware": "_astro-internal_middleware.mjs", "\0noop-actions": "_noop-actions.mjs", "\0@astro-page:src/pages/404@_@astro": "pages/404.astro.mjs", "\0@astro-page:src/pages/about@_@astro": "pages/about.astro.mjs", "\0@astro-page:src/pages/admin/campaign/create-campaign@_@astro": "pages/admin/campaign/create-campaign.astro.mjs", "\0@astro-page:src/pages/admin/campaign/index@_@astro": "pages/admin/campaign.astro.mjs", "\0@astro-page:src/pages/admin/donation/index@_@astro": "pages/admin/donation.astro.mjs", "\0@astro-page:src/pages/admin/news/create-news@_@astro": "pages/admin/news/create-news.astro.mjs", "\0@astro-page:src/pages/admin/news/index@_@astro": "pages/admin/news.astro.mjs", "\0@astro-page:src/pages/admin/users/index@_@astro": "pages/admin/users.astro.mjs", "\0@astro-page:src/pages/admin/index@_@astro": "pages/admin.astro.mjs", "\0@astro-page:src/pages/auth/login@_@astro": "pages/auth/login.astro.mjs", "\0@astro-page:src/pages/auth/logout@_@astro": "pages/auth/logout.astro.mjs", "\0@astro-page:src/pages/auth/signup@_@astro": "pages/auth/signup.astro.mjs", "\0@astro-page:src/pages/campaign/[id]@_@astro": "pages/campaign/_id_.astro.mjs", "\0@astro-page:src/pages/campaign/index@_@astro": "pages/campaign.astro.mjs", "\0@astro-page:src/pages/news/[slug]@_@astro": "pages/news/_slug_.astro.mjs", "\0@astro-page:src/pages/news/index@_@astro": "pages/news.astro.mjs", "\0@astro-page:src/pages/payment/[id]@_@astro": "pages/payment/_id_.astro.mjs", "\0@astro-page:src/pages/profile/index@_@astro": "pages/profile.astro.mjs", "\0@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs", "\0@astrojs-ssr-virtual-entry": "index.js", "\0@astro-renderers": "renderers.mjs", "\0@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js": "pages/_image.astro.mjs", "\0@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs", "\0@astrojs-manifest": "manifest_A4U1Aewg.mjs", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs": "chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/node_modules/astro/dist/assets/services/sharp.js": "chunks/sharp_Cnl7Ig-l.mjs", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.FoQ68s0J.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro?astro&type=script&index=0&lang.ts": "_astro/create-campaign.astro_astro_type_script_index_0_lang.AQZ-XtHH.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/donation/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.CmerRE-I.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.DlWs7BpA.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/news/create-news.astro?astro&type=script&index=0&lang.ts": "_astro/create-news.astro_astro_type_script_index_0_lang.2_NNDHuY.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/users/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.DxCqp0g3.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.BqYEPHz7.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro?astro&type=script&index=0&lang.ts": "_astro/signup.astro_astro_type_script_index_0_lang.DQXZNcT9.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/campaign/[id].astro?astro&type=script&index=0&lang.ts": "_astro/_id_.astro_astro_type_script_index_0_lang.Ug-rEyGC.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro?astro&type=script&index=0&lang.ts": "_astro/_slug_.astro_astro_type_script_index_0_lang.BZRMQFUH.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro?astro&type=script&index=0&lang.ts": "_astro/index.astro_astro_type_script_index_0_lang.3FV06uCP.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/payment/[id].astro?astro&type=script&index=0&lang.ts": "_astro/_id_.astro_astro_type_script_index_0_lang.5FUb_pVR.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/auth/LoginForm.astro?astro&type=script&index=0&lang.ts": "_astro/LoginForm.astro_astro_type_script_index_0_lang.CUk3raLw.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts": "_astro/AdminLayout.astro_astro_type_script_index_0_lang.D_MyS3u2.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/campaign/AllCampaign.astro?astro&type=script&index=0&lang.ts": "_astro/AllCampaign.astro_astro_type_script_index_0_lang.Dpf6PyFC.js", "D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts": "_astro/Navbar.astro_astro_type_script_index_0_lang.CfkTGb7w.js", "astro:scripts/before-hydration.js": "" }, "inlinedScripts": [["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/campaign/create-campaign.astro?astro&type=script&index=0&lang.ts", 'const w="http://localhost:3000/api";async function y(o){try{const e=new FormData;e.append("image",o);const t=localStorage.getItem("token"),n=await fetch(`${w}/upload`,{method:"POST",headers:{Authorization:`Bearer ${t}`},body:e});if(!n.ok)throw new Error("Failed to upload image");return(await n.json()).imageUrl}catch(e){return console.error("Error uploading image:",e.message),null}}async function v(o){try{const e=localStorage.getItem("token"),t=await fetch(`${w}/campaigns`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(o)});if(!t.ok)throw new Error("Failed to create campaign");return await t.json()}catch(e){return console.error("Error creating campaign:",e.message),null}}function f(o,e,t){const n=document.getElementById(o),r=document.getElementById(e),c=document.getElementById(t);n&&r&&c&&n.addEventListener("change",function(s){const a=s.target.files[0];if(a){const i=new FileReader;i.onload=function(l){c.src=l.target.result,r.classList.remove("hidden")},i.readAsDataURL(a)}else r.classList.add("hidden")})}function E(){const o=document.getElementById("category-input"),e=document.getElementById("new-category-input"),t=document.getElementById("custom-category");o&&e&&t&&o.addEventListener("change",function(){this.value==="new"?(e.classList.remove("hidden"),t.setAttribute("required","required")):(e.classList.add("hidden"),t.removeAttribute("required"))})}window.addEventListener("load",()=>{const o=document.querySelector("#create-section"),e=localStorage.getItem("role");console.log("Checking role - userRole:",e),o?e==="admin"?o.style.display="block":(console.log("User is not admin, redirecting to /"),window.location.href="/"):console.error("Create section not found in DOM"),f("image-input","image-preview","preview-img"),f("organizationLogo-input","logo-preview","preview-logo"),E();const t=document.querySelector("#create-campaign-form");t?(console.log("Create campaign form found, adding event listener..."),t.addEventListener("submit",async n=>{n.preventDefault(),console.log("Create campaign form submitted");const r=document.getElementById("submit-btn"),c=document.getElementById("submit-text"),s=document.getElementById("loading-text");r.disabled=!0,c.classList.add("hidden"),s.classList.remove("hidden");try{const a=document.querySelector("#image-input").files[0];let i="";if(a&&(console.log("Uploading campaign image..."),i=await y(a),!i))throw new Error("Failed to upload campaign image");const l=document.querySelector("#organizationLogo-input").files[0];let u="";if(l&&(console.log("Uploading organization logo..."),u=await y(l),!u))throw new Error("Failed to upload organization logo");const h=document.getElementById("category-input"),g=document.getElementById("custom-category");let d=h.value;if(d==="new"&&g&&(d=g.value.trim().toLowerCase(),!d))throw new Error("Nama kategori baru harus diisi");const m={title:document.querySelector("#title-input").value,description:document.querySelector("#description-input").value,imageUrl:i,targetAmount:Number(document.querySelector("#targetAmount-input").value),currentAmount:0,startDate:document.querySelector("#startDate-input").value,endDate:document.querySelector("#endDate-input").value,donorCount:0,organizationName:document.querySelector("#organizationName-input").value,organizationLogo:u,category:d};console.log("Sending create campaign request with:",m);const p=await v(m);if(console.log("Create campaign response:",p),p)alert("Campaign created successfully!"),window.location.href="/admin/campaign",console.log("Campaign created, redirecting to home");else throw new Error("Failed to create campaign")}catch(a){console.error("Error:",a.message),alert(`Error: ${a.message}`)}finally{r.disabled=!1,c.classList.remove("hidden"),s.classList.add("hidden")}})):console.error("Create campaign form not found in DOM")});'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts", 'const h=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(t),p=async()=>{try{const t="http://localhost:3000/api",o=localStorage.getItem("token");if(!o){window.location.href="/auth/login";return}const[r,i,c]=await Promise.all([fetch(`${t}/users`,{headers:{Authorization:`Bearer ${o}`}}),fetch(`${t}/campaigns/stats`,{headers:{Authorization:`Bearer ${o}`}}),fetch(`${t}/donations`,{headers:{Authorization:`Bearer ${o}`}})]),[m,l,d]=await Promise.all([r.json(),i.json(),c.json()]),u=(d.donations||[]).filter(e=>e.paymentStatus==="completed").reduce((e,g)=>e+g.amount,0),n=document.getElementById("totalUsers"),a=document.getElementById("totalCampaigns"),s=document.getElementById("totalDonations");n&&a&&s&&(n.textContent=m.length.toString(),a.textContent=l.totalCampaigns.toString(),s.textContent=h(u))}catch(t){console.error("Error updating dashboard:",t)}};document.addEventListener("DOMContentLoaded",p);'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/auth/signup.astro?astro&type=script&index=0&lang.ts", 'const t=document.getElementById("signupForm"),r=document.getElementById("password"),o=document.getElementById("confirmPassword"),i="http://localhost:3000/api";t&&r&&o&&t.addEventListener("submit",async n=>{if(n.preventDefault(),r.value!==o.value){alert("Password dan konfirmasi password tidak cocok!");return}const a=new FormData(t);a.delete("confirmPassword");const s=Object.fromEntries(a);try{const e=await fetch(`${i}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(e.ok)alert("Pendaftaran berhasil!"),window.location.href="/auth/login?registered=true";else{const d=await e.json();alert(d.error||"Terjadi kesalahan saat mendaftar")}}catch(e){alert("Terjadi kesalahan saat mendaftar"),console.error("Error:",e)}});'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/news/[slug].astro?astro&type=script&index=0&lang.ts", 'async function c(){try{const n="http://localhost:3000/api",e=window.location.pathname.split("/").pop(),s=await fetch(`${n}/news/${e}`);if(!s.ok)throw new Error("Failed to fetch news data");const i=await s.json(),a=document.getElementById("campaign-info");if(a&&i.relatedCampaign){const t=i.relatedCampaign,d=new Date(t.endDate),l=new Date,r=Math.max(0,Math.ceil((d.getTime()-l.getTime())/(1e3*3600*24))),o=Math.min(Math.round(t.currentAmount/t.targetAmount*100),100);a.innerHTML=`\n          <div class="flex flex-col md:flex-row gap-6">\n            <div class="md:w-1/3">\n              <img \n                src="${t.imageUrl||"/images/empty-image-placeholder.webp"}" \n                alt="${t.title}"\n                class="w-full h-48 object-cover rounded-lg"\n              />\n            </div>\n            <div class="md:w-2/3">\n              <h4 class="text-lg font-semibold text-gray-800 mb-2">\n                <a href="/campaign/${t._id}" class="hover:text-blue-600 transition-colors">\n                  ${t.title}\n                </a>\n              </h4>\n              <p class="text-gray-600 mb-4">\n                ${t.description?t.description.substring(0,150)+"...":"Tidak ada deskripsi"}\n              </p>\n              \n              <div class="space-y-3">\n                <div>\n                  <div class="flex justify-between text-sm mb-1">\n                    <span class="font-medium">Progress Donasi</span>\n                    <span class="text-blue-600">${o}%</span>\n                  </div>\n                  <div class="w-full bg-gray-200 rounded-full h-2">\n                    <div \n                      class="bg-blue-600 h-2 rounded-full transition-all duration-300" \n                      style="width: ${o}%"\n                    ></div>\n                  </div>\n                  <div class="flex justify-between text-xs text-gray-500 mt-1">\n                    <span>Rp ${t.currentAmount?.toLocaleString("id-ID")||0}</span>\n                    <span>Rp ${t.targetAmount?.toLocaleString("id-ID")||0}</span>\n                  </div>\n                </div>\n                \n                <div class="grid grid-cols-2 gap-4 text-center">\n                  <div class="bg-gray-50 p-3 rounded">\n                    <p class="text-xs text-gray-500">Sisa Hari</p>\n                    <p class="font-semibold text-gray-800">${r}</p>\n                  </div>\n                  <div class="bg-gray-50 p-3 rounded">\n                    <p class="text-xs text-gray-500">Donatur</p>\n                    <p class="font-semibold text-gray-800">${t.donorCount||0}</p>\n                  </div>\n                </div>\n                \n                <a \n                  href="/campaign/${t._id}" \n                  class="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center w-full md:w-auto"\n                >\n                  Lihat Kampanye\n                </a>\n              </div>\n            </div>\n          </div>\n        `}else a&&(a.innerHTML=\'<p class="text-gray-500 text-center py-4">Berita ini tidak terkait dengan kampanye tertentu.</p>\')}catch(n){console.error("Error loading related campaign:",n);const e=document.getElementById("campaign-info");e&&(e.innerHTML=\'<p class="text-gray-500 text-center py-4">Gagal memuat informasi kampanye terkait.</p>\')}}window.addEventListener("load",c);'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/pages/profile/index.astro?astro&type=script&index=0&lang.ts", 'function u(){const d=localStorage.getItem("token"),s=localStorage.getItem("role"),c=localStorage.getItem("userName"),m=localStorage.getItem("userEmail"),n=document.querySelector("#loading-state"),r=document.querySelector("#profile-content"),l=document.querySelector("#action-buttons"),a=document.querySelector("#login-prompt");if(!n||!r||!l||!a){console.error("Required elements not found");return}if(d){n.classList.add("hidden"),r.classList.remove("hidden"),a.classList.add("hidden");const e=document.querySelector("#user-name"),t=document.querySelector("#user-role"),o=document.querySelector("#user-email");e&&(e.textContent=c||"User"),t&&(t.textContent=s==="admin"?"Administrator":"User"),o&&(o.textContent=m||"Email tidak tersedia"),l.innerHTML=`\n          <div class="bg-white rounded-lg shadow-sm border border-gray-500/30 p-6">\n            <h3 class="text-lg font-semibold text-gray-800 mb-4">Aksi</h3>\n            <div class="space-y-3">\n              <a \n                href="/auth/logout" \n                id="logout-btn"\n                class="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition duration-200 font-medium text-center block"\n              >\n                Keluar dari Akun\n              </a>\n              ${s==="admin"?`\n                <a \n                  href="/admin/" \n                  class="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200 font-medium text-center block"\n                >\n                  Panel Administrator\n                </a>\n              `:""}\n            </div>\n          </div>\n        `;const i=document.querySelector("#logout-btn");i&&i.addEventListener("click",g=>{g.preventDefault(),console.log("Logging out..."),localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),window.location.href="/"})}else{n.classList.add("hidden"),r.classList.remove("hidden"),a.classList.remove("hidden");const e=document.querySelector("#user-name"),t=document.querySelector("#user-role"),o=document.querySelector("#user-email");e&&(e.textContent="Pengunjung"),t&&(t.textContent="Belum masuk ke akun"),o&&(o.textContent="Silakan masuk untuk melihat profil lengkap"),l.innerHTML=""}}document.addEventListener("DOMContentLoaded",()=>{u()});window.addEventListener("storage",u);'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/auth/LoginForm.astro?astro&type=script&index=0&lang.ts", 'const a="http://localhost:3000/api";async function l(n){try{const o=await fetch(`${a}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),e=await o.json();if(!o.ok)throw new Error(e.error||"Login failed");return e.token&&(localStorage.setItem("token",e.token),localStorage.setItem("role",e.role),localStorage.setItem("userName",e.nama)),e}catch(o){return o instanceof Error&&console.error("Error logging in:",o.message),null}}window.addEventListener("load",()=>{const n=document.querySelector("#login-form");n?(console.log("Login form found, adding event listener..."),n.addEventListener("submit",async o=>{o.preventDefault(),console.log("Login form submitted");const e=document.querySelector("#username-input"),t=document.querySelector("#password-input");if(!e||!t){console.error("Required form elements not found");return}const s={username:e.value,password:t.value};console.log("Sending login request with:",s);const r=await l(s);console.log("Login response:",r),r&&r.token?(window.location.href="/",console.log("Login successful, redirecting to home")):(alert("Login gagal. Silakan periksa username/email dan password Anda."),console.log("Login failed"))})):console.error("Login form not found in DOM")});'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts", 'class a{constructor(){this.token=null,this.role=null,this.userName=null,this.init()}init(){this.checkAuthentication()}checkAuthentication(){try{return this.token=localStorage.getItem("token"),this.role=localStorage.getItem("role"),this.userName=localStorage.getItem("userName")||localStorage.getItem("name"),console.log("Auth check:",{hasToken:!!this.token,role:this.role,userName:this.userName}),!this.token||this.role!=="admin"?(this.showAuthError(),!1):this.isTokenExpired()?(console.log("Token expired"),this.clearAuth(),this.showAuthError(),!1):(this.showAdminInterface(),!0)}catch(e){return console.error("Authentication error:",e),this.showAuthError(),!1}}isTokenExpired(){if(!this.token)return!0;try{const e=JSON.parse(atob(this.token.split(".")[1])),n=Math.floor(Date.now()/1e3);return e.exp&&e.exp<n}catch(e){return console.error("Token validation error:",e),!0}}clearAuth(){localStorage.removeItem("token"),localStorage.removeItem("role"),localStorage.removeItem("userName"),localStorage.removeItem("name"),localStorage.removeItem("userId")}showAuthError(){document.getElementById("authLoading")?.classList.add("hidden"),document.getElementById("authError")?.classList.remove("hidden"),document.getElementById("adminInterface")?.classList.add("hidden")}showAdminInterface(){document.getElementById("authLoading")?.classList.add("hidden"),document.getElementById("authError")?.classList.add("hidden"),document.getElementById("adminInterface")?.classList.remove("hidden");const e=document.getElementById("adminName");e&&this.userName&&(e.textContent=this.userName)}logout(){this.clearAuth(),window.location.href="/auth/login"}redirectToLogin(){window.location.href="/auth/login"}redirectToHome(){window.location.href="/"}}document.addEventListener("DOMContentLoaded",()=>{const o=new a;document.getElementById("loginRedirect")?.addEventListener("click",()=>{o.redirectToLogin()}),document.getElementById("homeRedirect")?.addEventListener("click",()=>{o.redirectToHome()}),document.getElementById("logoutBtn")?.addEventListener("click",()=>{confirm("Apakah Anda yakin ingin logout?")&&o.logout()});const e=document.getElementById("mobile-menu-button"),n=document.getElementById("sidebar"),i=document.getElementById("mobile-overlay");function r(){n?.classList.toggle("-translate-x-full"),i?.classList.toggle("hidden")}e?.addEventListener("click",r),i?.addEventListener("click",r),n?.querySelectorAll("a")?.forEach(t=>{t.addEventListener("click",()=>{window.innerWidth<1024&&r()})}),window.addEventListener("storage",t=>{(t.key==="token"||t.key==="role")&&(!t.newValue||t.key==="role"&&t.newValue!=="admin")&&o.showAuthError()}),setInterval(()=>{o.checkAuthentication()},5*60*1e3)});window.AdminAuthGuard=a;'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/campaign/AllCampaign.astro?astro&type=script&index=0&lang.ts", 'const e=document.getElementById("filter-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const a=new FormData(e),t=new URLSearchParams,r=a.get("search")?.toString().trim(),n=a.get("category")?.toString().trim();r&&t.append("search",r),n&&t.append("category",n),window.location.href=`/campaign?${t.toString()}`});'], ["D:/PERSONAL/KULIAH/SKRIPSI/APP/platform-harumcare/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts", 'function o(){const e=document.querySelector("#auth-nav"),t=localStorage.getItem("token"),n=localStorage.getItem("role");if(console.log("Updating nav - userToken:",t,"userRole:",n),e)if(t){const a=localStorage.getItem("userName")||"User",r=n==="admin"?`Admin ${a}`:a;e.innerHTML=`\n          <span class="py-4 px-2 text-gray-500">Welcome, ${r}</span>\n          <a href="/profile" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">Profil</a>\n        `}else e.innerHTML=`\n          <a href="/profile" class="py-2 px-4 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Profil</a>\n        `}window.addEventListener("load",()=>{o()});window.addEventListener("storage",o);window.addEventListener("pageshow",e=>{e.persisted&&(console.log("Page loaded from cache, updating nav..."),o())});']], "assets": ["/_astro/create-campaign.DZRtQdEs.css", "/favicon.svg", "/harum care indonesia_logomark_fullcolor.png", "/font/Inter-Italic-VariableFont_opsz,wght.ttf", "/font/Inter-VariableFont_opsz,wght.ttf", "/_astro/create-news.astro_astro_type_script_index_0_lang.2_NNDHuY.js", "/_astro/index.astro_astro_type_script_index_0_lang.CmerRE-I.js", "/_astro/index.astro_astro_type_script_index_0_lang.DlWs7BpA.js", "/_astro/index.astro_astro_type_script_index_0_lang.DxCqp0g3.js", "/_astro/index.astro_astro_type_script_index_0_lang.FoQ68s0J.js", "/_astro/_id_.astro_astro_type_script_index_0_lang.5FUb_pVR.js", "/_astro/_id_.astro_astro_type_script_index_0_lang.Ug-rEyGC.js", "/images/empty-image-placeholder.webp", "/images/QRIS.png", "/_worker.js/index.js", "/_worker.js/renderers.mjs", "/_worker.js/_@astrojs-ssr-adapter.mjs", "/_worker.js/_astro-internal_middleware.mjs", "/_worker.js/_noop-actions.mjs", "/images/icons/user-default.svg", "/images/UI/login-cover.jpg", "/images/UI/login-UI.png", "/images/UI/no-proof-placeholder.webp", "/images/logo/logo-putih.png", "/images/logo/logo.png", "/_worker.js/chunks/AdminLayout_sNY25o1Y.mjs", "/_worker.js/chunks/astro-designed-error-pages_CjEd6zCM.mjs", "/_worker.js/chunks/astro_DpfEGAsq.mjs", "/_worker.js/chunks/AuthLayout_BSBGPm13.mjs", "/_worker.js/chunks/Card_Cxd0AMOM.mjs", "/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "/_worker.js/chunks/image-endpoint_By2xXWVB.mjs", "/_worker.js/chunks/index_DE25xXt9.mjs", "/_worker.js/chunks/noop-middleware_DFJY6lHj.mjs", "/_worker.js/chunks/path_h5kZAkfu.mjs", "/_worker.js/chunks/PrimaryLayout_DfsEkHQg.mjs", "/_worker.js/chunks/sharp_Cnl7Ig-l.mjs", "/_worker.js/chunks/_@astrojs-ssr-adapter_Da06DMDr.mjs", "/_worker.js/pages/404.astro.mjs", "/_worker.js/pages/about.astro.mjs", "/_worker.js/pages/admin.astro.mjs", "/_worker.js/pages/campaign.astro.mjs", "/_worker.js/pages/index.astro.mjs", "/_worker.js/pages/news.astro.mjs", "/_worker.js/pages/profile.astro.mjs", "/_worker.js/pages/_image.astro.mjs", "/_worker.js/_astro/create-campaign.DZRtQdEs.css", "/_worker.js/chunks/astro/server_CwYSbNCn.mjs", "/images/UI/icons/document.png", "/images/UI/icons/house.png", "/images/UI/icons/love.png", "/_worker.js/pages/admin/campaign.astro.mjs", "/_worker.js/pages/admin/donation.astro.mjs", "/_worker.js/pages/admin/news.astro.mjs", "/_worker.js/pages/admin/users.astro.mjs", "/_worker.js/pages/auth/login.astro.mjs", "/_worker.js/pages/auth/logout.astro.mjs", "/_worker.js/pages/auth/signup.astro.mjs", "/_worker.js/pages/campaign/_id_.astro.mjs", "/_worker.js/pages/news/_slug_.astro.mjs", "/_worker.js/pages/payment/_id_.astro.mjs", "/_worker.js/pages/admin/campaign/create-campaign.astro.mjs", "/_worker.js/pages/admin/news/create-news.astro.mjs"], "buildFormat": "directory", "checkOrigin": true, "serverIslandNameMap": [], "key": "l+orOaQqO7vmBjlaE+twv6d8C1n3aszSAOAyh5YL9Yk=", "sessionConfig": { "driver": "cloudflare-kv-binding", "options": { "binding": "SESSION" } } });
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => Promise.resolve().then(() => (init_cloudflare_kv_binding_DMly_2Gl(), cloudflare_kv_binding_DMly_2Gl_exports));

// dist/_worker.js/index.js
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_image_astro(), image_astro_exports)), "_page0");
var _page1 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_astro(), astro_exports)), "_page1");
var _page22 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_about_astro(), about_astro_exports)), "_page2");
var _page32 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_create_campaign_astro(), create_campaign_astro_exports)), "_page3");
var _page42 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_campaign_astro(), campaign_astro_exports)), "_page4");
var _page52 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_donation_astro(), donation_astro_exports)), "_page5");
var _page62 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_create_news_astro(), create_news_astro_exports)), "_page6");
var _page72 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_news_astro(), news_astro_exports)), "_page7");
var _page82 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_users_astro(), users_astro_exports)), "_page8");
var _page92 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_admin_astro(), admin_astro_exports)), "_page9");
var _page102 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_login_astro(), login_astro_exports)), "_page10");
var _page112 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_logout_astro(), logout_astro_exports)), "_page11");
var _page122 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_signup_astro(), signup_astro_exports)), "_page12");
var _page132 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_astro(), id_astro_exports)), "_page13");
var _page142 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_campaign_astro2(), campaign_astro_exports2)), "_page14");
var _page152 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_slug_astro(), slug_astro_exports)), "_page15");
var _page162 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_news_astro2(), news_astro_exports2)), "_page16");
var _page172 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_astro2(), id_astro_exports2)), "_page17");
var _page182 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_profile_astro(), profile_astro_exports)), "_page18");
var _page192 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_astro(), index_astro_exports)), "_page19");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/404.astro", _page1],
  ["src/pages/about.astro", _page22],
  ["src/pages/admin/campaign/create-campaign.astro", _page32],
  ["src/pages/admin/campaign/index.astro", _page42],
  ["src/pages/admin/donation/index.astro", _page52],
  ["src/pages/admin/news/create-news.astro", _page62],
  ["src/pages/admin/news/index.astro", _page72],
  ["src/pages/admin/users/index.astro", _page82],
  ["src/pages/admin/index.astro", _page92],
  ["src/pages/auth/login.astro", _page102],
  ["src/pages/auth/logout.astro", _page112],
  ["src/pages/auth/signup.astro", _page122],
  ["src/pages/campaign/[id].astro", _page132],
  ["src/pages/campaign/index.astro", _page142],
  ["src/pages/news/[slug].astro", _page152],
  ["src/pages/news/index.astro", _page162],
  ["src/pages/payment/[id].astro", _page172],
  ["src/pages/profile/index.astro", _page182],
  ["src/pages/index.astro", _page192]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_noop_actions(), noop_actions_exports)), "actions"),
  middleware: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_astro_internal_middleware(), astro_internal_middleware_exports)), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! https://mths.be/cssesc v3.0.0 by @mathias */
//# sourceMappingURL=index.js.map
