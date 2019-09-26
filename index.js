const { fetchBreedDescription } = require('./breedFetcher');
const raceName = process.argv[2];

const fetch = async name => {
  try {
    const result = await fetchBreedDescription(name);
    //console.log('result', result);
    
    if (result === null) console.log('The race does not exist');
    else console.log('Description: ', result);
    //const data = JSON.parse(body);
    //if (data.status && data.status !== 200) console.log(`Something wrong happend with the request code: ${data.status} message: ${data.message} `);
    //else if (!data[0]) console.log('The race does not exist');
    //else console.log('Description: ', data[0]['description']);
  } catch (err) {
    console.log('An error has occured: ', err.message);
  }
};

fetch(raceName);