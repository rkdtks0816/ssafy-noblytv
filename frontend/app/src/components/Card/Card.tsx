import Container from './ContainerStyle';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

function Card() {
  return (
    <div style={{ margin: '22%' }}>
      <Container>
        <CardHeader />
        <CardBody />
      </Container>
    </div>
  );
}

export default Card;
