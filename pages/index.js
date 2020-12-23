import Page from '../components/page';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const img1 = 'https://source.unsplash.com/TbHPvVcZ_f4/999x444';

export default function Index() {
  return (
    <>
      <Page />

      <div>

        
        <Container>
          <Row>
            <Col>
              <div>
              <style jsx>{`
                   h1 {
                                      
                    margin-top: 80px;
                  
                  }
                  `}</style>

                <h1>
                  Responsive design is not about mobile. It’s not about tablets.
                  It’s not about desktops. It’s about The Web!
                </h1>
                <p>Jeremy Keith</p>
                
              </div>
            </Col>
          </Row>
        
          <Row>
            <Col md={12} >
              <div className=''>
              <style jsx>{`
                   {
                  
                    margin-top: 30px;
                    display: inline-block;
                  }
                  `}</style>
                <Image src={img1} rounded fluid></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
