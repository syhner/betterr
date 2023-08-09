export type BetterrReturn<TData, TError> =
  | { data: TData; err: null }
  | { data: null; err: TError };

export const betterr = async <TData, TError = Error>(
  callback: () => TData | Promise<TData>,
): Promise<BetterrReturn<TData, TError>> => {
  try {
    const data = await callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err } as { data: null; err: TError };
  }
};

export const betterrSync = <TData, TError = Error>(
  callback: () => TData,
): BetterrReturn<TData, TError> => {
  try {
    const data = callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err } as { data: null; err: TError };
  }
};
