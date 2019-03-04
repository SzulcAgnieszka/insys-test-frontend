import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/actions";
import { Container, Row, Col, Tabs, Tab, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.scss'
import logo from './marilyn-monroe.jpg'

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home'
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    renderImages = () => {
        const { images } = this.props;
        return images && images.map((image, index) => {
            return index <= 8 && <Col xs={12} sm={6} md={4} key={index} className='padding-15 d-flex justify-center align-center'>
                <a href={image.link} target="_blank">>
                    <Image src={image.media.m} className='image' />
                </a>
            </Col>
        })
    }

    render() {
        const user = <FontAwesomeIcon icon="user" />;
        const image = <FontAwesomeIcon icon="image" />;
        return (
            <Container fluid className='no-padding'>
                <Row className='background'>
                    <Image src={logo} roundedCircle thumbnail className='logo' />
                </Row>
                <Row>
                    <Col xs={12} className="no-padding">
                        <Tabs
                            id="controlled-tab-example"
                            className='navigation d-flex'
                            activeKey={this.state.key}
                            onSelect={key => this.setState({ key })}>
                            <Tab eventKey="home" title={user}>
                                <Row>
                                    <Col className='margin-r-2'>
                                        <h2><strong>Marilyn Monroe</strong></h2>
                                        <div className='margin-r-1 location'>
                                            <FontAwesomeIcon icon='map-marker-alt' />
                                            <span>Poznań, PL</span>
                                        </div>
                                        <div className='margin-r-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        <div className='quote padding-15'>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                            </div>
                                        <div className='margin-r-1'>
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                            </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title={image}>
                                <Row>
                                    {this.renderImages()}
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container >
        );
    }
}

const mapStateToProps = state => ({
    images: state.images,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(Home);
