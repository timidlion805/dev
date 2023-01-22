import Aggregator from "./Aggregator"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FilterBar({ selectShoeBrand, selectColorType, sorting }) {
    return (
        <Nav>
            <Container>
                <Row>
                    <h2> Filter Your Favorite Shoe Brand! </h2>
                    <Col sm={4}>
                        <form>
                            <select name="selectList" onChange={selectShoeBrand}>
                                <option value="all"> All Shoes </option>
                                <option value="adidas"> Adidas </option>
                                <option value="nike"> Nike </option>
                                <option value="under"> Under Armour </option>
                            </select>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <h3> Choose Color: </h3>
                    <Col sm={4}>
                        <form>
                            <select name="selectList" onChange={selectColorType}>
                                <option value="Black"> Black </option>
                                <option value="White"> White </option>
                                <option value="Red"> Red</option>
                                <option value="Other"> Other</option>
                            </select>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <h4> Sort Prices: </h4>
                    <Col sm={4}>
                        <form>
                            <Nav.Item> <input type='radio' name='sort' id="price" value='price-low-high' onChange={sorting} />
                                <label for="sort"> Price High to Low</label> </Nav.Item>

                            <Nav.Item> <input type='radio' name='sort' id="price" value='high-to-low' onChange={sorting} />
                                <label for="sort"> Price Low to High</label> </Nav.Item>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <br>
                    </br>
                </Row>

            </Container>
        </Nav>
    );
}