// PCUS Intelligent Merge Result
// Successfully merged 50 developers' contributions
// Each developer added a unique utility function

// Developer 1: calculateTax
function calculateTax(amount, rate) { return amount * rate; }

// Developer 2: formatCurrency
function formatCurrency(value) { return `$${value.toFixed(2)}`; }

// Developer 3: validateEmail
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

// Developer 4: generateUUID
function generateUUID() { return Math.random().toString(36).substr(2, 9); }

// Developer 5: debounce
function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }

// Developer 6: throttle
function throttle(fn, limit) { let inThrottle; return (...args) => { if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }

// Developer 7: deepClone
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

// Developer 8: capitalize
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// Developer 9: sortByKey
function sortByKey(arr, key) { return arr.sort((a, b) => a[key] > b[key] ? 1 : -1); }

// Developer 10: chunk
function chunk(arr, size) { return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size)); }

// Developer 11: flatten
function flatten(arr) { return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item) : item), []); }

// Developer 12: unique
function unique(arr) { return [...new Set(arr)]; }

// Developer 13: sleep
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

// Developer 14: retry
async function retry(fn, times) { for (let i = 0; i < times; i++) { try { return await fn(); } catch (e) { if (i === times - 1) throw e; } } }

// Developer 15: memoize
function memoize(fn) { const cache = {}; return (...args) => { const key = JSON.stringify(args); return cache[key] || (cache[key] = fn(...args)); }; }

// Developer 16: parseQueryString
function parseQueryString(url) { return Object.fromEntries(new URLSearchParams(url.split("?")[1])); }

// Developer 17: clamp
function clamp(num, min, max) { return Math.min(Math.max(num, min), max); }

// Developer 18: randomInt
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// Developer 19: isObject
function isObject(val) { return val !== null && typeof val === "object" && !Array.isArray(val); }

// Developer 20: isEmpty
function isEmpty(val) { return val == null || (Array.isArray(val) && val.length === 0) || (typeof val === "object" && Object.keys(val).length === 0); }

// Developer 21: pick
function pick(obj, keys) { return keys.reduce((acc, key) => { if (key in obj) acc[key] = obj[key]; return acc; }, {}); }

// Developer 22: omit
function omit(obj, keys) { return Object.keys(obj).filter(k => !keys.includes(k)).reduce((acc, k) => { acc[k] = obj[k]; return acc; }, {}); }

// Developer 23: merge
function merge(...objs) { return Object.assign({}, ...objs); }

// Developer 24: groupBy
function groupBy(arr, key) { return arr.reduce((acc, item) => { (acc[item[key]] = acc[item[key]] || []).push(item); return acc; }, {}); }

// Developer 25: countBy
function countBy(arr, fn) { return arr.reduce((acc, item) => { const key = fn(item); acc[key] = (acc[key] || 0) + 1; return acc; }, {}); }

// Developer 26: sum
function sum(arr) { return arr.reduce((a, b) => a + b, 0); }

// Developer 27: average
function average(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }

// Developer 28: median
function median(arr) { const sorted = [...arr].sort((a, b) => a - b); const mid = Math.floor(sorted.length / 2); return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2; }

// Developer 29: range
function range(start, end, step = 1) { return Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step); }

// Developer 30: zip
function zip(...arrays) { return Array.from({ length: Math.max(...arrays.map(a => a.length)) }, (_, i) => arrays.map(a => a[i])); }

// Developer 31: difference
function difference(arr1, arr2) { return arr1.filter(x => !arr2.includes(x)); }

// Developer 32: intersection
function intersection(arr1, arr2) { return arr1.filter(x => arr2.includes(x)); }

// Developer 33: union
function union(...arrays) { return [...new Set(arrays.flat())]; }

// Developer 34: shuffle
function shuffle(arr) { const result = [...arr]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }

// Developer 35: sample
function sample(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Developer 36: take
function take(arr, n) { return arr.slice(0, n); }

// Developer 37: drop
function drop(arr, n) { return arr.slice(n); }

// Developer 38: compact
function compact(arr) { return arr.filter(Boolean); }

// Developer 39: partition
function partition(arr, fn) { return arr.reduce((acc, item) => { acc[fn(item) ? 0 : 1].push(item); return acc; }, [[], []]); }

// Developer 40: findIndex
function findIndex(arr, fn) { for (let i = 0; i < arr.length; i++) if (fn(arr[i])) return i; return -1; }

// Developer 41: findLast
function findLast(arr, fn) { for (let i = arr.length - 1; i >= 0; i--) if (fn(arr[i])) return arr[i]; }

// Developer 42: times
function times(n, fn) { return Array.from({ length: n }, (_, i) => fn(i)); }

// Developer 43: noop
function noop() {}

// Developer 44: identity
function identity(x) { return x; }

// Developer 45: constant
function constant(value) { return () => value; }

// Developer 46: compose
function compose(...fns) { return x => fns.reduceRight((acc, fn) => fn(acc), x); }

// Developer 47: pipe
function pipe(...fns) { return x => fns.reduce((acc, fn) => fn(acc), x); }

// Developer 48: curry
function curry(fn) { return function curried(...args) { return args.length >= fn.length ? fn(...args) : (...more) => curried(...args, ...more); }; }

// Developer 49: once
function once(fn) { let called = false, result; return (...args) => { if (!called) { called = true; result = fn(...args); } return result; }; }

// Developer 50: negate
function negate(fn) { return (...args) => !fn(...args); }


// Export all 50 functions
module.exports = {
  calculateTax,
  formatCurrency,
  validateEmail,
  generateUUID,
  debounce,
  throttle,
  deepClone,
  capitalize,
  sortByKey,
  chunk,
  flatten,
  unique,
  sleep,
  retry,
  memoize,
  parseQueryString,
  clamp,
  randomInt,
  isObject,
  isEmpty,
  pick,
  omit,
  merge,
  groupBy,
  countBy,
  sum,
  average,
  median,
  range,
  zip,
  difference,
  intersection,
  union,
  shuffle,
  sample,
  take,
  drop,
  compact,
  partition,
  findIndex,
  findLast,
  times,
  noop,
  identity,
  constant,
  compose,
  pipe,
  curry,
  once,
  negate
};
