const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object (helpful delimination of paramaters)
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams)

// Loop through parameters using arrow function and forEach method
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))