# betterr

A better way to handle errors

## Advantages

- **File structure remains flat**, unlike with nested try...catch blocks
- **Variables are declared with const**, unlike with non-nested try...catch blocks
- **Both data and errors are available at the top level**, unlike with try..catch or promises
- **Work with errors that are always instances of `Error` with full type safety**, unlike with try...catch or promises
- **Work with data that is non-nullable**, once an early return occurs in the case of an error

## Installation

```
$ npm install betterr
```

## Usage

```ts
async function main() {
  const { data: user, err } = await betterr(() => getLoggedUser());
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

Both `betterr` and `betterrSync` are generic, so the type of `data` can be provided

```ts
const { data, err } = betterrSync<User>(() => ({
  //    ^? data: User
  userId: '1',
}));
```
