const request = require('request');
const { URL } = require('./constants');
const raceName = process.argv[2];

const requestBreed = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
};

const getBreed = async url => {
  try {
    const body = await requestBreed(url);
    const data = JSON.parse(body);
    if (data.status && data.status !== 200) console.log(`Something wrong happend with the request code: ${data.status} message: ${data.message} `);
    else if (!data[0]) console.log('The race does not exist');
    else console.log('Description: ', data[0]['description']);
  } catch (err) {
    console.log('An error has occured: ', err.message);
  }
};

getBreed(URL + raceName);