import { checkNumber, checkNumber2, job } from './job';

// job().then(console.log).catch(console.error);
// checkNumber(2).then(console.log).catch(console.error);
// checkNumber(1).then(console.log).catch(console.error);
// checkNumber('test').then(console.log).catch(console.error);

// job().then(checkNumber).then(console.log).catch(console.error);
// job()
//   .then(checkNumber)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

job()
  .then(checkNumber2)
  .then((number) => number * 2)
  .then(console.log)
  .catch((number) => console.log(`"${number}" is greater than 5`));
/*
Modify the function checkNumber that it returns the value as is (so the actual number). Resolve in case of odd or even number and reject if the number is greater than 5
Modify your then and catch block, that it either doubles the value or prints an error to the console, that the generated number is greater than 5
*/
