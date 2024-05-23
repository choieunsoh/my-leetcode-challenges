// Conditional Types

// NonNullable utility type
type Age = number | null | undefined;
type NonNullableAge = NonNullable<Age>;

type Person = {
  name: string;
  age: number;
};
type Example1 = Person extends {} ? string : number;

type NullableString = string | null;

let firstName: NullableString;
firstName = null;
firstName = 'Bob';

console.log(firstName);

// Remove Null utility type
type RemoveNull<T> = T extends null ? never : T;

type NotNullableString = RemoveNull<NullableString>;
let firstName2: NotNullableString;
//firstName2 = null;
// Type 'null' is not assignable to type 'string'.
firstName2 = 'Bob';

// My NonNullable utility type
type MyNonNullable<T> = T extends null | undefined ? never : T;

// Creating a type for removing values from a union type
// Exclude
const person = {
  name: 'Fred',
  age: 30,
  email: 'fred@somewhere.com',
};

console.log(person);

type RemoveFromUnion<T, K> = T extends K ? never : T;

type ContactKeys = RemoveFromUnion<keyof typeof person, 'age'>;

// Creating a type that creates an object with certain keys from another type
// Pick
type ObjectWithKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Contact = ObjectWithKeys<typeof person, 'name' | 'email'>;

// Creating a type that creates an object without certain keys from another type
// Omit
type ObjectWithoutKeys<T, K extends keyof T> = ObjectWithKeys<T, RemoveFromUnion<keyof T, K>>;

type Profile = ObjectWithoutKeys<typeof person, 'name' | 'email'>;

type NullableProps<T> = {
  [P in keyof T]: null extends T[P] ? never : P;
}[keyof T];

type NullablePerson = NullableProps<typeof person>;

type Person2 = {
  name: string;
  age: number;
  email?: string;
};

type NullablePerson2 = NullableProps<Person2>;

type ReturnTypeAsync<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R>
  ? R
  : T extends (...args: any) => infer R
  ? R
  : any;

export type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
