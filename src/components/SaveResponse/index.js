export default function saveResponse(prompt, response, responses, setter) {
    try {
      let responseObj = {};
      responseObj = { prompt, response };
      if(!prompt){
        throw new Error('Check prompt and try again');
      }
      if (typeof prompt !== "string") {
        throw new Error('Check prompt and try again');
      }
      if (prompt === '') {
        throw new Error('Please enter a prompt.')
      }
      let responseArray = [responseObj, ...responses];
      setter(responseArray);
      localStorage.setItem('responses', JSON.stringify(responseArray));
    } catch (error) {
      console.error('error', error);
    }
  }
