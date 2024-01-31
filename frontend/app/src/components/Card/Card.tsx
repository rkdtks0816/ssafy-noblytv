import Container from './ContainerStyle';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

function Card() {
  return (
    <>
      <div style={{ marginTop: '22%' }} />
      <Container>
        <CardHeader />
        <CardBody />
      </Container>
    </>
  );
}

export default Card;
