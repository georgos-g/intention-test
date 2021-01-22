import Page from '../components/page';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const img1 = 'https://source.unsplash.com/gcsNOsPEXfs/999x444';
const img2 = 'https://source.unsplash.com/oC66vXsqnc8/999x444';
const img3 = 'https://source.unsplash.com//jJT2r2n7lYA/999x444';
const img4 = 'https://source.unsplash.com/066YnuYv8xw/999x444';
const img5 = 'https://source.unsplash.com/BP3XOsSPlGA/999x444';
const img6 = 'https://source.unsplash.com/40k6ZqbsXuo/999x444';

export default function Development() {
  return (
    <>
      <Page />

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <h1>„Wie stelle ich mir ein Website-Projekt vor?“</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img1} rounded fluid></Image>
              </div>

              <div className='jumbotron'>
                <h4>1. PROJEKTÜBERSICHT </h4>
                <p className='lead '>
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
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img2} rounded fluid></Image>
              </div>

              <div className='jumbotron'>
                <h4>2. STRATEGIE / CONTENT </h4>
                <p className='lead '>
                  <strong>Content First!</strong> Zuerst wird eine
                  Content-Inventur gemacht. Dabei wird deutlich, wo noch Inhalte
                  erstellt werden müssen. Im Rahmen des vorhandenen Contents
                  ergeben sich Seiten-Strukturen, so dass die Navigation
                  festgelegt werden kann. Dabei wird der Inhalt für den
                  kleinstmöglichen Viewport erstellt/optimiert („Mobile First“)
                  und dann für größere Geräte mit Inhalten und Funktionalitäten
                  erweitert.
                </p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img3} rounded fluid></Image>
              </div>
              <div className='jumbotron'>
                <h4>3. WIREFRAMES</h4>
                <p className='lead '>
                  Im Rahmen der Inhaltsanalyse werden Wireframes erstellt. So
                  wird die Inhaltsstruktur der einzelnen Seiten erarbeitet, um
                  eine Grundlage für die Umsetzung zu bekommen. Bei Wireframes
                  wird ermittelt welche Position die Contentelemente auf der
                  Seite einnehmen sollen. Dabei wird für jeden wichtigen
                  Breakpoint ein Wireframe erstellt, um die wichtigen Änderungen
                  der Inhaltsdarstellung zu visualisieren.
                </p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img4} rounded fluid></Image>
              </div>
              <div className='jumbotron'>
                <h4>4. PROTOTYP</h4>
                <p className='lead '>
                  Aufgrund des Wireframes kann der erste interaktive Klickdummy
                  mit HTML/CSS erstellt werden. So kann die Funktionalität und
                  die Struktur der Website getestet werden. Korrekturen können
                  schnell vorgenommen werden und haben keine Auswirkungen auf
                  das Design. Wenn der Prototyp in allen Testszenarien
                  zufriedenstellend läuft, kann das Design entwickelt werden.
                </p>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img5} rounded fluid></Image>
              </div>
              <div className='jumbotron'>
                <h4>5. DESIGN ERARBEITEN</h4>
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
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className=''>
                <Image src={img6} rounded fluid></Image>
              </div>
              <div className='jumbotron'>
                <h4>6. TESTEN / ENTWICKELN</h4>
                <p className='lead '>
                  Der Prototyp wird von den Entwickler*innen und Designer*innen
                  (manchmal beide Funktionen in Personalunion) ausgearbeitet. Es
                  wird in verschiedenen, festgelegten Browsern und Geräten
                  ausführlich getestet und optimiert. Design und Code werden
                  parallel entwickelt. Der Prototyp durchläuft diverse
                  Korrekturschleifen. Der Prozess wiederholt sich so lange, bis
                  die Website fertig ist.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          h1 {
            margin-top: 60px;
            margin-bottom: 50px;
            text-align: center;
          }
          h4 {
            padding-bottom: 20px;
          }
          .jumbotron {
            padding: 20px;
            margin-top: 4px;
            height: 400px;
          }
          @media only screen and (max-width: 1500px) {
            .jumbotron {
              height: 450px;
            }
          }
          @media only screen and (max-width: 1278px) {
            .jumbotron {
              height: 500px;
            }
          }
          @media only screen and (max-width: 1199px) {
            .jumbotron {
              height: 350px;
            }
          }
          @media only screen and (max-width: 1180px) {
            .jumbotron {
              height: 370px;
            }
          }
          @media only screen and (max-width: 1170px) {
            .jumbotron {
              height: 390px;
            }
          }
          @media only screen and (max-width: 980px) {
            .jumbotron {
              height: 410px;
            }
          }
          @media only screen and (max-width: 930px) {
            .jumbotron {
              height: 440px;
            }
          }
          @media only screen and (max-width: 880px) {
            .jumbotron {
              height: 460px;
            }
          }
          @media only screen and (max-width: 816px) {
            .jumbotron {
              height: 480px;
            }
          }
          @media only screen and (max-width: 780px) {
            .jumbotron {
              height: 500px;
            }
          }
          @media only screen and (max-width: 767px) {
            .jumbotron {
              height: auto;
            }
          }
        `}</style>
      </div>
    </>
  );
}
