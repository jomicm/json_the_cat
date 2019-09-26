const request = require('request');
const { URL } = require('./constants');

const fetchBreedDescription = name => {
  return new Promise((resolve, reject) => {
    request(URL + name, (err, response, body) => {
      if (err) reject(err);
      else {
        const data = JSON.parse(body);
        if (data.status && data.status !== 200) reject(new Error(`Something wrong happend with the request code: ${data.status} message: ${data.message}`));
        if (!Array.isArray(data)) reject(new Error(`There is something wrong with the URL provided`));
        if (data[0]) resolve(data[0].description.trim());
        else resolve(null);
      }
    });
  });
};

module.exports = { fetchBreedDescription };