# Fun with GPT-3: OpenAI Activity Suggestions
## Shopify Frontend Developer Intern Challenge 2022

### Description
This is a frontend web application based on OpenAI's <a href="https://beta.openai.com/docs/api-reference/completions" target="_blank" rel="noopener noreferrer">Create Completion API</a>.

Users can input a type of weather (e.g., sunny, rainy, snowy, etc.) and upon submit, the API will return 3 activity suggestions appropriate for the weather. API responses persist with page refresh through local storage. 

### Tech 
React | CSS | Axios with OpenAI

### How to Run
View the deployed app <a href="https://elubkert-shopify-frontend.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>

#### To Run Locally:
- Fork this repo
- Clone this repo `git clone https://github.com/<your-username>/openAI-activity-suggestions`
- To get your own API key:
  - Go to <a href="https://beta.openai.com/signup" target="_blank" rel="noopener noreferrer">https://beta.openai.com/signup</a>
  - Enter your email address and password
  - Verify your email address and phone number
  - Once logged in, go to <a href="https://beta.openai.com/account/api-keys " target="_blank" rel="noopener noreferrer">https://beta.openai.com/account/api-keys </a>to get your secret API key
- `npm install` to install dependencies
- Create .env file with REACT_APP_OPENAI_API_KEY=your-secret-key-here
- `npm start` to run in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Roadmap for Future Improvement
- Add auth functionality to allow users to create account and save responses
- Allow user to change AI engine (currently set to 'text-curie-001' to balance speed and cost)
  
### Contact
elubkert@gmail.com

### License
MIT








