import { describe, it } from 'mocha';
import { expect } from 'chai';

import ln from './ln';

describe('ln', () => {
  it('works for non-zero argments ln(1)=0', () => expect(ln(1)).equal(0));
  it('works for non-zero argments ln(e)=1', () => expect(ln(Math.E)).equal(1));
  it('works for zero arguments ln(0)=0', () => expect(ln(0)).equal(0));
  it('works for negative argments ln(-1)=0', () => expect(ln(-1)).equal(0));
  it('works for negative argments ln(-e)=1', () => expect(ln(-Math.E)).equal(1));
});
