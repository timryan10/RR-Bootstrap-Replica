import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Listings() {
    return (
        <div>
            <h2>Browse stores in Raleigh</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                        <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/60x60/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                         <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/60x60/www.instacart.com/assets/domains/warehouse/logo/133/797e4d4c-4e74-4c2a-bde3-b525e71c4302.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Listings