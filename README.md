# betterr

A better way to handle errors

[![build status](https://img.shields.io/github/actions/workflow/status/syhner/betterr/CD.yml)](https://github.com/Syhner/betterr/actions/workflows/CD.yml)
[![coverage](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=coverage&query=%24.total.lines.pct&suffix=%25&url=https%3A%2F%2Fraw.githubusercontent.com%2FSyhner%2Fbetterr%2Fcoverage%2Fcoverage-summary.json)](https://syhner.github.io/betterr/)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/syhner/betterr)](https://security.snyk.io/package/npm/betterr)

## Advantages

- **File structure remains flat**, unlike with nested try...catch
- **Both data and errors are declared with `const`**, unlike with non-nested try...catch
- **Both data and errors are non-nullable**, once an early return occurs if the other is null
- **Both data and errors are available at the top level**, unlike with try...catch or promises
- **Work with errors that are always `Error` objects by default**, without compromising type-safety, unlike with try...catch or promises
- **TypeScript support** with optional generic parameters for data and error types

## Installation

```sh
$ npm install betterr
```

## Usage

```ts
import { betterr, betterrSync } from 'betterr';
// const { betterr, betterrSync } = require('betterr');

const { data: user, err } = await betterr(() => getRandomUser());
//            ^?    ^? user: User | null, err: Error | null

if (err) {
  // ^? err: Error
  return;
}

return user;
//     ^? user: User
```

- `betterr` can be used with both asynchronous and synchronous callbacks
- `betterrSync` can only be used with synchronous callbacks, but avoids wrapping the data in a promise, so `await` is not necessary

## TypeScript

Both `betterr` and `betterrSync` are generic, so the type of `data` and `error` can be provided. The callback return type must be assignable to the first generic parameter (for data).

```ts
/**
 * const betterrSync: <TData, TError = Error>(callback: () => TData) =>
 * | { data: TData; err: null }
 * | { data: null; err: TError }
 */

const { data, err } = betterrSync<User, MyError>(() => ({
  //    ^?    ^? data: User | null, err: MyError | null
  userId: 1,
}));
```
