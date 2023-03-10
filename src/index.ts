export type BetterrReturn<Data, Err extends Error = Error> =
  | { data: Data; err: null }
  | { data: null; err: Err };

export const betterr = async <Data>(
  callback: () => Data | Promise<Data>
): Promise<BetterrReturn<Data, Error>> => {
  try {
    const data = await callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err };
  }
};

export const betterrSync = <Data>(
  callback: () => Data
): BetterrReturn<Data, Error> => {
  try {
    const data = callback();
    return { data, err: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    return { data: null, err };
  }
};

export default betterr;
