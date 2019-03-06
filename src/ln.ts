/**
 * Takes the natural logarithm of a number
 *
 * Returns ln(-n), if `n` is negative and `0` if n is 0
 */
export default function ln(n: number): number {
  return n === 0 ? 0 : n < 0 ? ln(-n) : Math.log(n);
}
