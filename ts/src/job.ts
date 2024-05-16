const randint = (min: number, max?: number) => {
  if (max === undefined) {
    max = min;
    max = 0;
  }
  return Math.round(min + Math.floor(max - min * Math.random()));
};

export const job = () => new Promise<number>((res) => setTimeout(() => res(randint(10)), 2000));

export const checkNumber = (data: unknown) =>
  new Promise((res, rej) => {
    if (typeof data !== 'number') return rej('err');
    if (data % 2 !== 0) return setTimeout(() => res('odd'), 1000);
    return setTimeout(() => res('even'), 2000);
  });

export const checkNumber2 = (number: number) =>
  new Promise<number>((res, rej) => {
    if (number > 5) return rej(number);
    res(number);
  });

/*
Create a new exported function checkNumber. Your function receives a parameter data.
Your function must always return a promise
If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

Import and test your function with the parameters "test", 1 and 2
Now we have to deal with the difficult part of promises: chaining. Chaining promises is the very reason we have promises in the first place. It's a proper way to tell JavaScript the next thing to do after an asynchronous task is done, thus avoiding the pyramid of doom we saw in the previous lessons.
Import the functions created in one and 2 and chain them.
Add another then and catch block to log the result or the error
Modify the function checkNumber that it returns the value as is (so the actual number). Resolve in case of odd or even number and reject if the number is greater than 5
Modify your then and catch block, that it either doubles the value or prints an error to the console, that the generated number is greater than 5
*/
