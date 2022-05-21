import axios from 'axios';

const baseURL = process.env.REACT_APP_OPENAI_URL;

const service = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const openAiAPI = {
  prompt: (data) => {
    try {
      return service.post('/completions', data);
    } catch (error) {
      console.log('Error: ', error.message);
    }
  },
};

export default openAiAPI;
