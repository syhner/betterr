/**
 * Represents the return type of the `betterr` and `betterrSync` functions:
 * an object with `data` (callback return value) and `err` (error during
 * execution), one of which will be null depending on the success of the
 * callback
 */
export type BetterrResult<TData, TError> =
  | { data: TData; err: null }
  | { data: null; err: TError };

/**
 * Asynchronously executes the callback and returns an object with `data`
 * (callback return value) and `err` (error during execution), one of which
 * will be null depending on the success of the callback
 */
export const betterr = async <TData, TError extends Error = Error>(
  callback: () => TData | Promise<TData>,
): Promise<BetterrResult<TData, TError>> => {
  try {
    const data = await callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err: err as TError };
  }
};

/**
 * Synchronously executes the callback and returns an object with `data`
 * (callback return value) and `err` (error during execution), one of
 * will be null depending on the success of the callback
 */
export const betterrSync = <TData, TError extends Error = Error>(
  callback: () => TData,
): BetterrResult<TData, TError> => {
  try {
    const data = callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err: err as TError };
  }
};
