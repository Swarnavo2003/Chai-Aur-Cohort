function ptaNhi(fn, delay) {
  let myId;
  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function greet(name) {
  console.log(`Hello ${name}`);
}

const sachMehNhiPatta = ptaNhi(() => greet("hitesh"), 3000);
sachMehNhiPatta();
sachMehNhiPatta();
sachMehNhiPatta();
sachMehNhiPatta();

// remove past request => keep refernce of it
// fire new request
// userRequest() => debouncesUserRequest()
