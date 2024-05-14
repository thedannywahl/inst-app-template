import type { RGB } from "types";

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
 * Lightens or darkens a color with a specified percentage.
 *
 * @param {RGB} color - The color to mix. This should be a string in the format "rgb(r g b)" or "rgb(r g b / a)".
 * @param {number} amount - The percentage to mix the color by. This should be a number between -100 and 100.
 * If the amount is less than 0, it will be treated as 0. If the amount is more than 100, it will be treated as 100.
 *
 * @returns {string} The mixed color. This will be a string in the format "rgb(r g b / a)",
 * where r, g, and b are the mixed red, green, and blue color components, and a is the original alpha component or 1.
 *
 * @throws {Error} Will throw an error if the color format is invalid.
 * 
 * @example mix("rgb(255 0 0)", 50); // "rgb(255 128 128 / 1)"
 */
const mix = (color: RGB, amount: number): string => {
  const match = color.match(/\(([^)]+)\)/);
  if (!match) throw new Error("Invalid color format");
  const rgb = match[1]
    .split(" ")
    .filter((v) => v !== "/")
    .map(Number);
  const shaded = rgb
    .slice(0, 3)
    .map((c) =>
      Math.min(
        255,
        Math.max(
          0,
          Math.floor(
            c + 255 * (1 - (1 - Math.min(100, Math.max(-100, amount)) / 100)),
          ),
        ),
      ),
    );
  return `rgb(${[...shaded].join(" ")} / ${rgb[3] ? rgb[3] : 1})`;
};

export { signature, mix };
