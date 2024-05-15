let a: string = 'foo';
let b: number = 2;
let c: boolean = true;
let d: Date = new Date();
let e: (string | number)[] = ['one', 'two', 1];
let f: Array<string | number> = ['one', 'two', 1];
let g: { id: number; firstname: string } = { id: 1, firstname: '' };

function myFunction(param: unknown) {
  if (typeof param === 'number') {
    return param + 1;
  }
  if (typeof param === 'string') {
    return param.length;
  }
}

const myLambda = (param: number): string => {
  return 'hello ' + param;
};

const getFirstname = ({ firstname }: { id: number; firstname: string }) => {
  return firstname;
};
