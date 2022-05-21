# Fun with GPT-3: OpenAI Activity Suggestions
## Shopify Frontend Developer Intern Challenge 2022

### Description
This is a frontend web application based on OpenAI's [Create Completion API] (https://beta.openai.com/docs/api-reference/completions). Users can input a type of weather (e.g., sunny, rainy, snowy, etc.) and upon submit, the API will return 3 activity suggestions appropriate for the weather. API responses persist with page refresh through local storage. 

### Tech 
React | CSS | Axios with OpenAI

### How to Run
View the deployed app [here](https://elubkert-shopify-frontend.herokuapp.com/)

#### To Run Locally:
- Fork this repo
- Clone this repo `git clone https://github.com/<your-username>/openAI-activity-suggestions`
- To get your own API key:
  - Go to https://beta.openai.com/signup
  - Enter your email address and password
  - Verify your email address
  - Verify your phone number by entering the code that is sent to you via SMS
  - Once logged in, go to https://beta.openai.com/account/api-keys to get your secret API key
- `npm install` to install dependencies
- Create .env file with REACT_APP_OPENAI_API_KEY=<your-secret-key-here>
- `npm start` to run in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Roadmap for Future Improvement
- Add auth functionality to allow users to create account and save responses
- Allow user to change AI engine (currently set to 'text-curie-001' to balance speed and cost)
  
### Contact
elubkert@gmail.com

### License
MIT








