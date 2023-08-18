# betterr

A better way to handle errors

[![build status](https://img.shields.io/github/actions/workflow/status/syhner/betterr/CD.yml)](https://github.com/Syhner/betterr/actions/workflows/CD.yml)
[![coverage](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=coverage&query=%24.total.lines.pct&suffix=%25&url=https%3A%2F%2Fraw.githubusercontent.com%2FSyhner%2Fbetterr%2Fcoverage%2Fcoverage-summary.json)](https://syhner.github.io/betterr/)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/syhner/betterr)](https://security.snyk.io/package/npm/betterr)

## Installation

```sh
$ npm install betterr
```

## Usage

`betterr` executes a callback and returns an object with `data` (callback return value) and `err` (error during execution), one of which will be null depending on the success of the callback.

```ts
// const { betterr, betterrSync } = require('betterr');
import { betterr, betterrSync } from 'betterr';

// user: User | null, err: Error | null
const { data: user, err } = await betterr(() => getUserWithId(1));

// Safely use optional chaining without having to handle the error case
const maybeName = user?.name;

// The error is guaranteed to be an Error object inside the conditional block
if (err) return;

// The data (user) is now non-nullable due to an early return in the error case
const name = user.name;
```

- `betterr` can be used with both asynchronous and synchronous callbacks
- `betterrSync` can only be used with synchronous callbacks, but avoids wrapping the data in a promise so that `await` is not necessary

## TypeScript

Both `betterr` and `betterrSync` are generic.

- The callback return type must be assignable to the first generic parameter (for `data`). It defaults to the callback return type.
- The second generic parameter (for error) must extend the `Error` object. It defaults to `Error`.

```ts
/**
 * const betterrSync: <TData, TError extends Error = Error>
 * (callback: () => TData) =>
 * | { data: TData; err: null }
 * | { data: null; err: TError }
 */

const { data, err } = betterrSync<User, RangeError>(() => ({ id: 1 }));
// data: User | null, err: RangeError | null
```
