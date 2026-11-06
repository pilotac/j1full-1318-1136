function greet(name) {
  return `Hello, ${name || 'world'}!`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
