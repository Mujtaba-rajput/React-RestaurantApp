import burger from "../images/Burger2x.png";
import drinks from "../images/drinks.png";
import { Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <section className="hero bglite">
        <Container>
          <Row className="justify-content-">
            <Col xs={12} md={8} lg={6}>
              <h1 className="my-3 ">
                Welcome! <br />
                To the New Restuarant
              </h1>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center m-0 py-3">
          <Col xs={12} md={8} lg={6}>
            <div className="card-group">
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={burger}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Beef Burger</h5>
                  <p className="card-text">
                    This is Beef Burger from from New Restuarant
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={drinks}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Drinks</h5>
                  <p className="card-text">
                    This is Cold drink from New Restuarant
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={burger}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Chicken Burger</h5>
                  <p className="card-text">
                    This is Chicken Burger from New Restuarant
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Cards;
