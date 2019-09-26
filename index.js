const { fetchBreedDescription } = require('./breedFetcher');
const raceName = process.argv[2];

const fetch = async name => {
  try {
    const result = await fetchBreedDescription(name);
    if (result === null) console.log('The race does not exist');
    else console.log('Description: ', result);
  } catch (err) {
    console.log('An error has occured: ', err.message);
  }
};

fetch(raceName);