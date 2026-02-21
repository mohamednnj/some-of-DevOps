import { pathToFileURL } from 'url';

function helloWorld(name) {
  return `Hello, ${name}!`;
}

export default helloWorld;

if (process.argv[1]) {
  const currentFileUrl = pathToFileURL(process.argv[1]).href;

  if (import.meta.url === currentFileUrl) {
    const name = process.argv[2] || 'World';
    console.log(helloWorld(name));
  }
}