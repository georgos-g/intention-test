import Page from '../components/page';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Development() {
  return (
    <>
      <Page />

      <div>
        <Container fluid>
          <Row>
            <Col md={12} lg={6}>
            <div className=''>
              <Image src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=30'></Image>
            </div>
            </Col>
            <Col md={12} lg={6}>
              <div className='jumbotron'>
                <h3>1. PROJEKTÜBERSICHT </h3>
                <p className='lead'>
                  Zuerst sollten die Rahmenbedingungen des Projektes festgelegt
                  werden. Es ist vorteilhaft auch den Kunden mit ins Boot zu
                  holen. So kann man den Ablauf erklären und verdeutlichen, wie
                  sich Design und die technische Umsetzung gemeinsam entwickeln.{' '}
                  <br /> So bekommen die Kunden einen Eindruck über den Aufwand
                  für die Erstellung eines Web-Projekts (beim Auftragnehmer und
                  insbesondere bei sich).
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              {' '}
              <div className='jumbotron'>
                <h3>2. STRATEGIE / CONTENT </h3>
                <p className='lead '>
                  <strong>Content First!</strong> Zuerst wird eine
                  Content-Inventur gemacht. Dabei wird deutlich, wo noch Inhalte
                  erstellt werden müssen. Hier müssen die Ziele der Website, die
                  Kundenziele, die Erwartungen und Bedürfnisse der Zielgruppe,
                  wie auch die deren Nutzungsverhalten berücksichtigt werden. Im
                  Rahmen des vorhandenen Contents ergeben sich
                  Seiten-Strukturen, so dass die Navigation festgelegt werden
                  kann. Dabei wird der Inhalt für den kleinstmöglichen Viewport
                  erstellt/optimiert („Mobile First“) und dann für größere
                  Geräte mit Inhalten und Funktionalitäten erweitert.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='jumbotron'>
                <h3>3. WIREFRAMES / CONTENT CHOREOGRAFIE </h3>
                <p className='lead '>
                  Im Rahmen der Inhaltsanalyse werden Wireframes erstellt. So
                  wird die Inhaltsstruktur der einzelnen Seiten erarbeitet, um
                  eine Grundlage für die Umsetzung zu bekommen. Bei Wireframes
                  wird ermittelt welche Position der Content auf der Seite
                  einnehmen sollen. Dabei wird für jeden, um die wichtigen
                  Änderungen der Inhaltsdarstellung zu visualisieren.
                </p>
              </div>
            </Col>

            <Col>
              <div className='jumbotron'>
                <h3>4. PROTOTYP</h3>
                <p className='lead '>
                  Aufgrund des Wireframes kann der erste interaktive Klickdummy
                  mit HTML und CSS erstellt werden. Der Prototyp verdeutlicht
                  die Struktur, die Flexibilität und die Funktionalität der
                  Website. Hier geht es erstmal darum, die Funktionalität und
                  die Struktur der Website testen zu können. So können
                  eventuelle Korrekturen schnell vorgenommen werden und haben
                  keine Auswirkungen auf das Design, was doppelte Korrekturen
                  vermeidet. Wenn der Prototyp in allen Testszenarien
                  zufriedenstellend läuft, kann das Design entwickelt werden.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='jumbotron'>
                <h3>5. DESIGN ERARBEITEN</h3>
                <p className='lead '>
                  Designer*innen erstellen Moodboards oder Style Tiles. Die
                  dienen dazu, die optische Richtung und die gewünschte Wirkung
                  der Website zu visualisieren, nicht das finale Design. Die
                  Stilrichtung kann in Zusammenarbeit mit dem Kunden parallel
                  erarbeitet und entwickelt werden. Sobald das finale Design
                  entscheiden ist, kann dieser auf den Prototypen angewendet
                  werden.
                </p>
              </div>
            </Col>
            <Col>
              <div className='jumbotron'>
                <h3>6. TESTEN / ENTWICKELN</h3>
                <p className='lead '>
                  Der Prototyp wird von den Entwickler*innen und Designer*innen
                  (manchmal beide Funktionen in Personalunion) ausgearbeitet. Es
                  wird in verschiedenen, festgelegten Browsern und Geräten
                  ausführlich getestet und optimiert. Design und Code werden
                  parallel entwickelt. Der Prototyp durchläuft normalerweise
                  diverse Korrekturschleifen. Der Prozess wiederholt sich so
                  lange, bis die Website fertig ist.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='jumbotron'>
        <Card style={{}}>
          <Card.Img
            variant='top'
            src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=30'
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className=''>
        <Card>
          <Card.Img
            variant='top'
            src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=30'
          />
          <Card.Body>
            <Card.Title>1.PROJEKTÜBERSICHT </Card.Title>
            <Card.Text>
              Zuerst sollten die Rahmenbedingungen des Projektes festgelegt
              werden. Es ist vorteilhaft auch den Kunden mit ins Boot zu holen.
              So kann man den Ablauf erklären und verdeutlichen, wie sich Design
              und die technische Umsetzung gemeinsam entwickeln. <br /> So
              bekommen die Kunden einen Eindruck über den Aufwand für die
              Erstellung eines Web-Projekts (beim Auftragnehmer und insbesondere
              bei sich).
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
