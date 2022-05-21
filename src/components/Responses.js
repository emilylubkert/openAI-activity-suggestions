import { Card, CardTitle, CardBody } from 'reactstrap';

function Responses({ responses }) {
    const newCard = responses.map((item, index) => {
      // console.log('index', index)
      return (
        <Card className="response-card" key={index}>
          <CardTitle>Prompt: {item.prompt}</CardTitle>
          <CardBody>Response: {item.response}</CardBody>
        </Card>
      );
    });
    return newCard;
  }

export default Responses;
