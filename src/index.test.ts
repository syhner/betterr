import { describe, expect, it } from 'vitest';
import { betterr, betterrSync } from '.';
import { Expect, Equal } from '../tests/test-types';

const message = 'message' as const;

describe('betterr', () => {
  describe('Asynchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', async () => {
      const { data, err } = await betterr(() => echo(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When an asynchronous error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => throwError(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When an asynchronous non-error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => throwNonError(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });
  });

  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', async () => {
      const { data, err } = await betterr(() => echoSync(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When a synchronous error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => throwErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => throwNonErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });
  });
});

describe('betterrSync', () => {
  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', () => {
      const { data, err } = betterrSync(() => echoSync(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When a synchronous error is thrown, data should be null and error should exist', () => {
      const { data, err } = betterrSync(() => throwErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', () => {
      const { data, err } = betterrSync(() => throwNonErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type BeforeReturn =
        | Expect<Equal<typeof data, typeof message | null>>
        | Expect<Equal<typeof err, Error | null>>;
      if (err) return;
      type AfterReturn =
        | Expect<Equal<typeof data, typeof message>>
        | Expect<Equal<typeof err, null>>;
    });
  });
});

async function echo<T>(message: T) {
  return message;
}

function echoSync<T>(message: T) {
  return message;
}

async function throwError<T extends string>(message: T) {
  throw new Error(message);
  return message;
}

function throwErrorSync<T extends string>(message: T) {
  throw new Error(message);
  return message;
}

async function throwNonError<T>(message: T) {
  throw message;
  return message;
}

function throwNonErrorSync<T>(message: T) {
  throw message;
  return message;
}
