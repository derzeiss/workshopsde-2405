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

// ---- INTERFACES & COMPLEX TYPES ----

const people = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    age: 34,
  },
  {
    id: 2,
    firstname: 'John',
    lastname: 'Palmer',
    age: 4,
  },
  {
    id: 3,
    firstname: 'Max',
    lastname: 'Pane',
    age: 99999,
  },
];

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  age?: number;
  address: Address;
}

interface Address {
  street: string;
  nr: string;
}

type PersonT = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  address: Address;
};

interface User extends Person {
  password: string;
  role: UserRole;
}

type UserT = Person & {
  password: string;
};

type UserRole = 'admin' | 'user' | 'guest';

const user: User = {
  id: 3,
  firstname: 'Max',
  lastname: 'Pane',
  age: 99999,
  role: 'guest',
  password: '',
  address: {
    street: '',
    nr: '',
  },
};

type Id = string;

type PatchUser = (id: string, user: Partial<User>) => Partial<User>;

const patchUser: PatchUser = (id, user) => {
  return user;
};

const u: Partial<User> = {
  id: 1,
};

type UserCreateDTO = Omit<User, 'id'>;
type UserId = Pick<User, 'id'>;

const collection: Record<string, number> = {
  aslkdj: 1,
};

// ---- GENERICS ----
