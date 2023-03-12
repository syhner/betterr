# betterr

A better way to handle errors

## Advantages

- **File structure remains flat**, unlike with nested try...catch
- **Both data and errors are declared with `const`**, unlike with non-nested try...catch
- **Both data and errors are non-nullable**, once an early return occurs if the other is null
- **Both data and errors are available at the top level**, unlike with try..catch or promises
- **Work with errors that are always `Error` objects**, without compromising type-safety, unlike with try...catch or promises

## Installation

```sh
$ npm install betterr
```

## Usage

```ts
import { betterr, betterrSync } from 'betterr';
// const { betterr, betterrSync } = require('betterr');

async function main() {
  const { data: user, err } = await betterr(() => getRandomUser());
  //            ^?    ^? user: User | null, err: Error | null

  if (err) {
    // ^? err: Error
    return;
  }

  return user;
  //     ^? user: User
}
```

- `betterr` can be used with both asynchronous and synchronous callbacks
- `betterrSync` can only be used with synchronous callbacks, but avoids wrapping the data in a promise, so `await` is not necessary

## TypeScript

Both `betterr` and `betterrSync` are generic, so the type of `data` can be provided so long as the callback return type is assignable to the generic parameter

```ts
const { data, err } = betterrSync<User>(() => ({
  //    ^? data: User
  userId: 1,
}));
```
