import axios from 'axios';

const APIs = {
  p: 'http://20.244.56.144/evaluation-service/primes',
  f: 'http://20.244.56.144/evaluation-service/fibo',
  e: 'http://20.244.56.144/evaluation-service/even',
  r: 'http://20.244.56.144/evaluation-service/rand',
};

export const fetchNumbers = async (type) => {
  try {
    const url = APIs[type];
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching numbers for type ${type}:`, error.message);
    return null;
  }
};
