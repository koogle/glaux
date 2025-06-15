import { test } from 'node:test';
import assert from 'node:assert';

test('pi should be approximately 3.14159', () => {
  const pi = Math.PI;
  assert.strictEqual(typeof pi, 'number');
  assert(pi > 3.14);
  assert(pi < 3.15);
  assert.strictEqual(Math.round(pi * 100000) / 100000, 3.14159);
});

test('pi should have correct precision', () => {
  const pi = Math.PI;
  assert.strictEqual(pi.toString().substring(0, 7), '3.14159');
});