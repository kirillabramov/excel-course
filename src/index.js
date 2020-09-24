import './scss/index.scss';

console.log('Hello World');

async function start() {
  return await Promise.resolve('test');
}

start().then(console.log);
