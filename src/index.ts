export {};

// EXAMPLE 1 - Extend a Type in TypeScript

type TypeA = {
  name: string;
};

type TypeB = TypeA & {
  age: number;
};

type TypeC = TypeB & {
  country: string;
};

const employee: TypeC = {
  name: 'Bobby Hadz',
  age: 30,
  country: 'Chile',
};

// ---------------------------------------------------

// // EXAMPLE 2 - Add a property to an existing Type in TypeScript

// type Employee = {
//   id: number;
//   name: string;
// };

// // 👇️ use intersection type
// type Person = Employee & {
//   country: string;
// };

// const person: Person = {
//   id: 1,
//   name: 'Bobby Hadz',
//   country: 'Germany',
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Extending a Type with an already defined interface

// type TypeA = {
//   name: string;
//   age: number;
// };

// interface InterfaceA {
//   country: string;
// }

// type TypeB = TypeA & InterfaceA;

// const employee: TypeB = {
//   name: 'Bobby Hadz',
//   age: 30,
//   country: 'Chile',
// };

// ---------------------------------------------------

// // EXAMPLE 4 - Extending an Interface with a Type in TypeScript

// type TypeA = {
//   name: string;
//   country: string;
// };

// interface InterfaceA extends TypeA {
//   age: number;
// }

// const employee: InterfaceA = {
//   name: 'Bobby Hadz',
//   age: 30,
//   country: 'Chile',
// };

// ---------------------------------------------------

// // EXAMPLE 5 - Overriding the type of a Property when extending a Type

// type TypeA = {
//   id: string;
//   name: string;
// };

// type TypeB = Omit<TypeA, 'id'> & {
//   id: number; // 👈️ override the type of the property
//   age: number;
//   country: string;
// };

// const employee: TypeB = {
//   id: 100,
//   name: 'Bobby Hadz',
//   age: 30,
//   country: 'Chile',
// };
