// task 1 – Promise with setTimeout
function runTask(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`This task was ran ${arg} times`);
    }, 2000);
  });
}

// task 2 – async function using await with console logs
console.log("Lets start the task");

async function asyncRunner(arg) {
  const result = await runTask(arg);
  console.log(result);
}

// task 3 – call async function in a loop
for (let i = 0; i < 5; i++) {
  asyncRunner(i);
}
