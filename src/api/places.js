import * as httpClient from './httpClient'

export function getPlaces() {
  const client = httpClient.getInstance()
  return new Promise((resolve, reject) => {
    client
      .get('/places')
      .then(response => {
        resolve(response.data)
        console.log('get places success');
        console.log(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}
