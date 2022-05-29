//exemplo call back hell
/*setTimeout(() => {
  console.log("exec");
  setTimeout(() => {
    console.log("exec2");
    setTimeout(() => {
      console.log("exec3");
    }, 2000);
  }, 2000);
}, 2000);*/

function esperarPor(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("exec promise...");
      resolve();
    }, time);
  });
}

esperarPor().then(() => esperarPor()).then(esperarPor)
