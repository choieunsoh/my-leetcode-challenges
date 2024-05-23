// Inferring types in a conditional type

function addPerson(personName: string) {
  return {
    type: 'AddPerson',
    payload: personName,
  };
}

function removePerson(id: number) {
  return {
    type: 'RemovePerson',
    payload: id,
  };
}

type AddPersonType = typeof addPerson;
type RemovePersonType = typeof removePerson;

type FunctionReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type Actions = FunctionReturnType<AddPersonType> | FunctionReturnType<RemovePersonType>;

const person = { name: 'Fred' };
//type PersonType = FunctionReturnType<typeof person>;
// Type: { name: string } does not safety the constraint (...args: any) => any
