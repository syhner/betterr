import { describe, expect, it } from 'vitest';
import { betterr, betterrSync } from '.';

const returnData = async (data: string) => data;

const returnDataSync = (data: string) => data;

const throwError = async (message: string) => {
  throw new Error(message);
};

const throwErrorSync = (message: string) => {
  throw new Error(message);
};

const throwNonError = async (message: unknown) => {
  throw message;
};

const throwNonErrorSync = (message: unknown) => {
  throw message;
};

describe('betterr', () => {
  describe('Asynchronous functions', () => {
    const data = 'data';
    it('When no error is thrown, data should exist and error should be null', async () => {
      const { data: returnedData, err } = await betterr(() => returnData(data));

      expect(returnedData).to.equal(data);
      expect(err).toBe(null);
    });

    it('When an asynchronous error is thrown, data should be null and error should exist', async () => {
      const errorMessage = 'error';

      const { data, err } = await betterr(() => throwError(errorMessage));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });

    it('When an asynchronous non-error is thrown, data should be null and error should exist', async () => {
      const errorMessage = 'error';

      const { data, err } = await betterr(() => throwNonError(errorMessage));
      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });
  });

  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', async () => {
      const data = 'data';

      const { data: returnedData, err } = await betterr(() =>
        returnDataSync(data)
      );

      expect(returnedData).to.equal(data);
      expect(err).toBe(null);
    });

    it('When a synchronous error is thrown, data should be null and error should exist', async () => {
      const errorMessage = 'error';

      const { data, err } = await betterr(() => throwErrorSync(errorMessage));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', async () => {
      const errorMessage = 'error';

      const { data, err } = await betterr(() =>
        throwNonErrorSync(errorMessage)
      );
      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });
  });
});

describe('betterrSync', () => {
  describe('Synchronous functions', () => {
    it('When no error is thrown, data should exist and error should be null', () => {
      const data = 'data';

      const { data: returnedData, err } = betterrSync(() =>
        returnDataSync(data)
      );

      expect(returnedData).to.equal(data);
      expect(err).toBe(null);
    });

    it('When a synchronous error is thrown, data should be null and error should exist', () => {
      const errorMessage = 'error';

      const { data, err } = betterrSync(() => throwErrorSync(errorMessage));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });

    it('When a synchronous non-error is thrown, data should be null and error should exist', () => {
      const errorMessage = 'error';

      const { data, err } = betterrSync(() => throwNonErrorSync(errorMessage));

      expect(data).toBe(null);
      expect(err).toBeInstanceOf(Error);
      expect(err?.message).to.equal(errorMessage);
    });
  });
});
