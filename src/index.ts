/**
 * Represents the return type of the `betterr` and `betterrSync` functions:
 * a tuple with `data` (callback return value) and `err` (error during
 * execution), one of which will be null depending on the success of the
 * callback
 */
export type BetterrResult<TData, TError> = [TData, null] | [null, TError];

/**
 * Asynchronously executes the callback and returns a tuple with `data`
 * (callback return value) and `err` (error during execution), one of which
 * will be null depending on the success of the callback
 */
export const betterr = async <TData, TError extends Error = Error>(
  callback: () => TData | Promise<TData>,
): Promise<BetterrResult<TData, TError>> => {
  try {
    const data = await callback();
    return [data, null];
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return [null, err as TError];
  }
};

/**
 * Synchronously executes the callback and returns a tuple with `data`
 * (callback return value) and `err` (error during execution), one of
 * will be null depending on the success of the callback
 */
export const betterrSync = <TData, TError extends Error = Error>(
  callback: () => TData,
): BetterrResult<TData, TError> => {
  try {
    const data = callback();
    return [data, null];
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return [null, err as TError];
  }
};
