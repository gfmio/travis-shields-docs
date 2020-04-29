/**
 * Takes the natural logarithm of a number
 *
 * Returns ln(-n), if `n` is negative and `0` if n is 0
 */
export default function ln(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return ln(-n);
  }
  return Math.log(n);
}
