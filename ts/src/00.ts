const one: number = 1;
const hi: string = 'hi';
const theTruth: boolean = true;

const two = 2;
const hello = 'hello';

const john: { id: number; firstname: string } = { id: 1, firstname: 'John' };

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  age: number | null;
  address?: Address;
}

interface Address {
  street: string;
  zip: string;
  city: string;
}

const johnPerson: Person = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  age: 42,
  address: {
    street: 'main road 1',
    zip: '1337',
    city: 'LA',
  },
};

const arr: (string | number)[] = [1, '2', 3];
const arr2: Array<string | number> = [1, 2, 3];

const fn: (param1: string, param2: number) => boolean = (param1, param2) => !!(param1 + param2);

type PersonT = {
  id: 1;
  firstname: 'John';
  lastname: 'Doe';
  age: 42;
  address: {
    street: 'main road 1';
    zip: '1337';
    city: 'LA';
  };
};

type UserType = 'admin' | 'user' | 'guest';
type Id = number;

interface User extends Person {
  id: Id;
  password: string;
  type: UserType;
}

const johnUser: User = {
  ...johnPerson,
  password: '123',
  type: 'admin',
};

type UserDTO = Partial<User>;
type UserAge = Pick<User, 'age'>;
type UserCreateDTO = Omit<User, 'id'>;
type UserPatchDTO = Partial<Omit<User, 'id'>>; // also possible: Partial<UserCreateDTO>

/** ---- generics ----  */
const asValObj = <T>(arr: T[]) => arr.map((val) => ({ val }));

const nums = asValObj([1, 2, 3]);
const strings = asValObj(['one', 'two', 'three']);

console.log(nums[0].val + 1);
console.log(strings[0].val.length);

const logPropertyValueRecord = (obj: Record<string, unknown>, key: string) => {
  console.log(obj[key]);
};

const logPropertyValue = <T, U extends keyof T>(obj: T, key: U) => {
  console.log(obj[key]);
  return obj[key];
};

logPropertyValueRecord({ one: 'one', two: 'two' }, 'slkjasdlkj');
logPropertyValue(johnUser, 'age');

export {};
