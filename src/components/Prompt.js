import { useEffect, useState } from 'react';
import Responses from './Responses';
import openAiAPI from './api';
import generatePrompt from './GeneratePrompt/'
import saveResponse from '../SaveResponse';

function Prompt() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  function getSavedResponse() {
    const saved = localStorage.getItem('responses');
    if (saved) {
      setResponses(JSON.parse(saved));
    }
  }

  useEffect(() => {
    getSavedResponse();
  }, []);

  const data = {
    prompt: generatePrompt(input),
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  async function onSubmit(event) {
    event.preventDefault();
    let response = await openAiAPI.prompt(data);
    saveResponse(input, response.data.choices[0].text, responses, setResponses);
    setInput('');
  }

  function clearResponses() {
    localStorage.removeItem('responses');
    setResponses([]);
  }

  return (
    <>
      <h3>Enter prompt</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='word'
          placeholder='What is the weather?'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type='submit' value='What should I do?' />
      </form>
      <div className='response-container'>
        {responses ? <Responses responses={responses} /> : null}
      </div>
      <button onClick={clearResponses}>Clear Responses</button>
    </>
  );
}

export default Prompt;
