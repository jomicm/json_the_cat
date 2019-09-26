// breedFetcherTest.js
const { fetchBreedDescription } = require('../breedFetcher');
const { expect } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via promise', async() => {
    const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
    const result = await fetchBreedDescription('Siberian');
    expect(result).to.equal(expectedDesc);
  });
  it('returns null for an invalid breed, via promise', async() => {
    const expectedDesc = null;
    const result = await fetchBreedDescription('');
    expect(result).to.equal(expectedDesc);
  });
});