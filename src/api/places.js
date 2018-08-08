import * as httpClient from './httpClient'

const places = [
  {
    id: 'living-room',
    name: 'Living room',
    description: 'lorem ipsum',
    image: '',
    plantIds: [],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'lorem ipsum',
    image: '',
    plantIds: [],
  },
  {
    id: 'terrace',
    name: 'Terrace',
    description: 'lorem ipsum',
    image: '',
    plantIds: [],
  },
  {
    id: 'hall',
    name: 'Hall',
    description: 'lorem ipsum',
    image: '',
    plantIds: [],
  },
];
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
        console.log('una caca');
        reject(error)
      })
  })
  //return places;
}

export function setPlace( place ) {
  const client = httpClient.getInstance()
  return new Promise((resolve, reject) => {
    client
      .post('/places'+place)
      .then(response => {
        resolve(response.data)
        console.log('set place success');
        console.log(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}
