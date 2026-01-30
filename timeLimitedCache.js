/**
 * TimeLimitedCache
 * Stores key-value pairs with an expiration time.
 */
var TimeLimitedCache = function () {
  // Map to store key -> { value, expireTime }
  this.cache = new Map();
};

/**
 * set(key, value, duration)
 * - Stores the value with an expiration time
 * - Returns true if key already existed and was NOT expired
 * - Otherwise returns false
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const now = Date.now();

  // Check if key exists and is still valid
  const isUnexpired =
    this.cache.has(key) && this.cache.get(key).expire > now;

  // Store / overwrite the key with new value and expiry
  this.cache.set(key, {
    value: value,
    expire: now + duration,
  });

  return isUnexpired;
};

/**
 * get(key)
 * - Returns value if key exists and is not expired
 * - Returns -1 if key is missing or expired
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const { value, expire } = this.cache.get(key);

  // If expired, remove and return -1
  if (Date.now() > expire) {
    this.cache.delete(key);
    return -1;
  }

  return value;
};

/**
 * count()
 * - Returns number of un-expired keys
 * - Also cleans up expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let count = 0;

  for (const [key, data] of this.cache) {
    if (data.expire > now) {
      count++;
    } else {
      // Remove expired entries
      this.cache.delete(key);
    }
  }

  return count;
};
