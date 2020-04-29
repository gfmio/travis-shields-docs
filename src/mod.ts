/**
 * Computes the modulus of two numbers
 *
 * Returns 0, if `b` is 0
 */
export default function mod(a: number, b: number) {
  return b === 0 ? 0 : a % b;
}
