/**
 * Returns the signature of a function as a string.
 *
 * @param {(...args: unknown[]) => void} fn - The function to get the signature of.
 *
 * @returns {string} The signature of the function.
 *
 * @throws {Error} Throws an error if the provided function is undefined.
 */
const signature = (fn: (...args: unknown[]) => void): string => {
  const err = "Function is undefined";
  try {
    if (!fn) throw new Error(err);
    const name = fn?.name || "anonymous";
    const params = fn?.toString()?.split("(")[1]?.split(")")[0] || "";
    return `${name}(${params})`;
  } catch (error) {
    console.error(err);
    console.error(error);
    return err;
  }
};

/**
 * `handle` is a higher-order function that wraps a given function with error handling.
 *
 * @param {(...args: unknown[]) => void} fn - The function to be wrapped.
 *
 * @returns {(...args: unknown[]) => void} Returns a new function that, when called, calls the original function with the same arguments. If the original function is undefined, it throws an error and returns an empty function.
 *
 * @throws {Error} Throws an error if the provided function is undefined.
 */
const handle = (
  fn: (...args: unknown[]) => void,
): ((...args: unknown[]) => void) => {
  const err: string = "Function is undefined";
  try {
    if (!fn) throw new Error("Function is undefined");
    return (...args: unknown[]) => fn(...args);
  } catch (error) {
    console.error(err);
    console.error(error);
    return () => { };
  }
};

export { signature, handle };
