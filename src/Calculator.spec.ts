import { describe, it } from 'mocha';
import { expect } from 'chai';

import Calculator from './Calculator';

describe('Calculator', () => {
  it('has the correct initial value when no argument is supplied', () => expect(new Calculator().value()).equal(0));
  it('has the correct initial value when an argument is supplied', () => expect(new Calculator(3).value()).equal(3));

  const calculator = new Calculator();

  it('can add', () => expect(calculator.add(2).value()).equal(2));
  it('can sub', () => expect(calculator.sub(1).value()).equal(1));
  it('can mul', () => expect(calculator.mul(12).value()).equal(12));
  it('can div', () => expect(calculator.div(2).value()).equal(6));
  it('can mod', () => expect(calculator.mod(4).value()).equal(2));
  it('can exp', () => expect(calculator.sub(1).exp().value()).equal(Math.E));
  it('can ln', () => expect(calculator.ln().value()).equal(1));
  it('can clear', () => expect(calculator.clear().value()).equal(0));

  it('can invert', () => expect(calculator.clear().add(2).inverse().value()).equal(1 / 2));

  it('can sin', () => expect(calculator.clear().sin().value()).equal(0));
  it('can cos', () => expect(calculator.clear().cos().value()).equal(1));
  it('can tan', () => expect(calculator.clear().tan().value()).equal(0));
  it('can sinh', () => expect(calculator.clear().sinh().value()).equal(0));
  it('can cosh', () => expect(calculator.clear().cosh().value()).equal(1));
  it('can tanh', () => expect(calculator.clear().tanh().value()).equal(0));
  it('can asin', () => expect(calculator.clear().asin().value()).equal(0));
});
