import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Herosection() {
  return (
    < > 

    <Container>
      <Row className=" justify-content-md-center">
        <div className=' col-lg-6 col-md-12 col-sm-12'>
          <p className=' hero fw-bold'> Hi I am Hafsa , <br />Software Developer</p>
          </div>
        <div className='justify-content-center text-center col-lg-6 col-md-12 col-sm-12'>
        <Image className='img1' src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360&t=st=1700235477~exp=1700236077~hmac=4557a6f3cc142616f302d4b8823a526d311278c4a35cd72aa3124e0c59e08c3f"  alt='hell' />
        </div>
      </Row>
    </Container>
    

    </ >
  );
}

