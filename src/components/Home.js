import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/actions";
import { Container, Row, Col, Tabs, Tab, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts(1));
    }

    renderImages = () => {
        const { images } = this.props;
        return images && images.map((image, index) => {
            return <Col xs={12} sm={6} md={4} key={index}>
                <Image src={image.media.m} thumbnail />
            </Col>
        })
    }

    render() {
        const user = <FontAwesomeIcon icon="user" />;
        const image = <FontAwesomeIcon icon="image" />;
        const mapMarkerAlt = <FontAwesomeIcon icon='map-marker-alt' />
        return (
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                    <Image src="holder.js/171x180" roundedCircle />
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={this.state.key}
                            onSelect={key => this.setState({ key })}>
                            <Tab eventKey="home" title={user}>
                                <Row>
                                    <Col>1 of 2</Col>
                                    <Col>2 of 2</Col>
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
