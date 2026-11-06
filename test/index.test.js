const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/index');

test('greets by name', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('greets the world by default', () => {
  assert.strictEqual(greet(), 'Hello, world!');
});

test('subtracts two numbers', () => {
  const { subtract } = require('../src/index');
  assert.strictEqual(subtract(5, 3), 2);
});
