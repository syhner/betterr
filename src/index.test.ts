import { describe, expect, it } from 'vitest';
import { betterr, betterrSync } from '.';
import { Expect, Equal } from '../tests/types';
import * as utils from '../tests/utils';

const message = 'message' as const;

describe('betterr', () => {
  describe('Asynchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', async () => {
      const { data, err } = await betterr(() => utils.echo(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When an asynchronous error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => utils.throwError(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When an asynchronous extended error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() =>
        utils.throwExtendedError(message)
      );

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When an asynchronous error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => utils.throwError(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When an asynchronous non-error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => utils.throwNonError(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });
  });

  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', async () => {
      const { data, err } = await betterr(() => utils.echoSync(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() => utils.throwErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous extended error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() =>
        utils.throwExtendedErrorSync(message)
      );

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', async () => {
      const { data, err } = await betterr(() =>
        utils.throwNonErrorSync(message)
      );

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });
  });
});

describe('betterrSync', () => {
  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', () => {
      const { data, err } = betterrSync(() => utils.echoSync(message));

      expect(data).to.equal(message);
      expect(err).toBe(null);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous error is thrown, data should be null and error should exist', () => {
      const { data, err } = betterrSync(() => utils.throwErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous extended error is thrown, data should be null and error should exist', () => {
      const { data, err } = betterrSync(() =>
        utils.throwExtendedErrorSync(message)
      );

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', () => {
      const { data, err } = betterrSync(() => utils.throwNonErrorSync(message));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(message);

      type testsBefore = [
        Expect<Equal<typeof data, typeof message | null>>,
        Expect<Equal<typeof err, Error | null>>
      ];
      if (err) return;
      type testsAfter = [
        Expect<Equal<typeof data, typeof message>>,
        Expect<Equal<typeof err, null>>
      ];
    });
  });
});
