const sum = async (val1, val2) => {
  return val1 + val2;
};

// console.log(sum(3, 4));

// const myPromise = new Promise((resolve) => resolve("Hello World"));
// myPromise
//   .then((result) => {
//     awdji;
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("error nih");
//   });

function isPasswordCorrect(password) {
  return new Promise((resolve, reject) => {
    console.log("Password:", password);
    if (password !== "123456") {
      return reject("Wrong password!");
    }

    resolve("Password is correct");
  });
}

isPasswordCorrect("123456")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));

isPasswordCorrect("123455")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));

isPasswordCorrect("123454")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));
