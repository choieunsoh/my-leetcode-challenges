type PartialTuple<Tuple extends any[], Extracted extends any[] = []> =
  // If the tuple provided has at least one required value
  Tuple extends [infer First, ...infer Remaining]
    ? // recurse back in to this type with one less item
      // in the original tuple, and the latest extracted value
      // added to the extracted list as optional
      PartialTuple<Remaining, [...Extracted, First?]>
    : // else if there are no more values,
      // return an empty tuple so that too is a valid option
      [...Extracted, ...Tuple];

type PartialParameters<Fn extends (...args: any[]) => any> = PartialTuple<Parameters<Fn>>;

type RemainingParameters<Provided extends any[], Expected extends any[]> =
  // if the expected array has any required items…
  Expected extends [infer ExpectedFirst, ...infer ExpectedRemaining]
    ? // if the provided array has at least one required item
      Provided extends [infer ProvidedFirst, ...infer ProvidedRemaining]
      ? // if the type is correct, recurse with one item less
        // in each array type
        ProvidedFirst extends ExpectedFirst
        ? RemainingParameters<ProvidedRemaining, ExpectedRemaining>
        : // else return this as invalid
          never
      : // else the remaining args is unchanged
        Expected
    : // else there are no more arguments
      [];

type CurriedFunction<Provided extends any[], Fn extends (...args: any[]) => any> = <
  NewArgs extends PartialTuple<RemainingParameters<Provided, Parameters<Fn>>>
>(
  ...args: NewArgs
) => CurriedFunctionOrReturnValue<[...Provided, ...NewArgs], Fn>;

type CurriedFunctionOrReturnValue<Provided extends any[], Fn extends (...args: any[]) => any> = RemainingParameters<
  Provided,
  Parameters<Fn>
> extends [any, ...any[]]
  ? CurriedFunction<Provided, Fn>
  : ReturnType<Fn>;

function curry<Fn extends (...args: any[]) => any, StartingArgs extends PartialParameters<Fn>>(
  targetFn: Fn,
  ...existingArgs: StartingArgs
): CurriedFunction<StartingArgs, Fn> {
  return function (...args) {
    const totalArgs = [...existingArgs, ...args];
    if (totalArgs.length >= targetFn.length) {
      return targetFn(...totalArgs);
    }
    return curry(targetFn, ...(totalArgs as PartialParameters<Fn>));
  };
}

function buildString(a: number, b: string, c: boolean): string {
  return `The ${a.toString(36)} ${b} ${c ? 'truth' : 'lie'}!`;
}
const curried = curry(buildString);
// const curried: CurriedFunction<
//   [],
//   (a: number, b: string, c: boolean) => string
// >
//const invalid = curried('not a number');
// Argument of type 'string' is not assignable
// to parameter of type 'number'.ts(2345)
//const invalid2 = curried(123)({ not: 'a string' });
// Argument of type '{ not: string; }' is not assignable
// to parameter of type 'string'.ts(2345)
const partway = curried(573566, 'is a');
const result2 = partway(false);
// const result: string
console.log(result2);
// Yes, I really did make that outdated a reference

const partway1 = curried(573566, 'is a', true);
console.log(partway1);

const configureRequest = (baseUrl: string, endpoint: string, params: Record<string, any>) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${baseUrl}${endpoint}?${queryString}`;
};

const curriedRequest = curry(configureRequest);
const curriedExampleRequest = curriedRequest('https://example.com');
const curriedUserApi = curriedExampleRequest('/api/users');
const curriedSearchUserApi = curriedUserApi({ firstName: 'Kiattipong', lastName: 'Kamonrat' });
console.log(curriedSearchUserApi);
