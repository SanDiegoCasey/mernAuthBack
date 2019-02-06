'use strict';
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://standarduser:thinkful1@ds121135.mlab.com:21135/mernauth';
exports.PORT = process.env.PORT || 5000;
exports.JWT_SECRET = process.env.JWT_SECRET || 'fffff';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
