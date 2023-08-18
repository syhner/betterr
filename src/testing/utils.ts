export class ExtendedError extends Error {
  constructor(public message: string) {
    super();
  }
}

export async function echo<T>(message: T) {
  return message;
}

export function echoSync<T>(message: T) {
  return message;
}

export async function throwError<T extends string>(message: T) {
  throw new Error(message);
  return message;
}

export async function throwExtendedError<T extends string>(message: T) {
  throw new ExtendedError(message);
  return message;
}

export function throwErrorSync<T extends string>(message: T) {
  throw new Error(message);
  return message;
}

export function throwExtendedErrorSync<T extends string>(message: T) {
  throw new ExtendedError(message);
  return message;
}

export async function throwNonError<T>(message: T) {
  throw message;
  return message;
}

export function throwNonErrorSync<T>(message: T) {
  throw message;
  return message;
}
