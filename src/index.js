function greet(name) {
  return `Hello, ${name || 'world'}!`;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { greet, subtract };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
