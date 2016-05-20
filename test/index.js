import 'babel-polyfill';
import toTitleCase from '../src';
import chai from 'chai';
chai.should();

const testStrings = [
  [ 'foo', 'Foo' ],
  [ 'the quick brown fox', 'The Quick Brown Fox' ],
  [ 'tHe QuIcK bRoWn FoX jUmPeD oVeR tHe lAzY dOgS', 'The Quick Brown Fox Jumped Over the Lazy Dogs' ],
  [ 'A flock of 4,484 seagulls of Cornwall ate a heron today',
    'A Flock of 4,484 Seagulls of Cornwall Ate a Heron Today' ],
  [ 'THESE ARE ALL CAPITAL IDEAS BUT PER THE REALITY WE SHOULD NOT DO THEM',
    'These Are All Capital Ideas but per the Reality We Should Not Do Them' ],
];
describe('toTitleCase', () => {
  for (const [ string, converted ] of testStrings) {
    it(`it should convert ${ string } to titleCase`, () => {
      toTitleCase(string).should.equal(converted);
    });
  }
});
