# betterr

A better way to handle errors

[![build status](https://img.shields.io/github/actions/workflow/status/syhner/betterr/CD.yml)](https://github.com/Syhner/betterr/actions/workflows/CD.yml)
[![coverage](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=coverage&query=%24.total.lines.pct&suffix=%25&url=https%3A%2F%2Fraw.githubusercontent.com%2FSyhner%2Fbetterr%2Fcoverage%2Fcoverage-summary.json)](https://syhner.github.io/betterr/)

## Advantages

Unlike with try...catch or promises:

- Both data and errors are declared with const, available at the top level, and non-nullable (once the other is handled)
- Errors are always Error objects

## Installation

```sh
$ npm install betterr
```

## Usage

1. Wrap any code that may throw

```ts
import { betterr } from 'betterr'; // const { betterr } = require('betterr');

const [user, err] = await betterr(() => getUserWithId(1));
// user: User | null, err: Error | null
```

2. Now either

- Avoid handling the error, and use optional chaining

  ```ts
  const maybeName = user?.name; // maybeName: string | undefined
  ```

- Handle the error (interrupting the control flow), after which optional chaining is not needed

  ```ts
  if (err) return; // user: User (after error handled)
  const name = user.name; // name: string
  ```

## Explanation

`betterr` / `betterSync` execute a callback and return a tuple with `data` (callback return value) and `err` (error during execution), one of which will be null depending on the success of the callback.

- `betterr` can be used with both asynchronous and synchronous callbacks.

- `betterrSync` can only be used with synchronous callbacks, but avoids wrapping the data in a promise so that `await` is not necessary.

## TypeScript

Both `betterr` and `betterrSync` are generic.

- The callback return type must be assignable to the first generic parameter (for `data`). It defaults to the callback return type.
- The second generic parameter (for `err`) must extend the `Error` object. It defaults to `Error`.

```ts
/**
 * const betterrSync: <TData, TError extends Error = Error>
 * (callback: () => TData) => [TData, null] | [null, TError]
 */

const [user, err] = betterrSync<User, RangeError>(() => ({ id: 1 }));
// data: User | null, err: RangeError | null
```
