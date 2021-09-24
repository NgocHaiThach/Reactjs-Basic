import React, { Component } from 'react'
import axios from 'axios'

import { 
    Containter, 
    Row, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button,
    Col,
    Container} from 'reactstrap'
import { CartContetx } from '../contexts/Cart'


class Products extends Component {
  constructor(props) {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
      axios.get('https://z35to.sse.codesandbox.io/products')
      .then(res => {
          this.setState({
              products: res.data
          })
      })
  }

  render() {
    const { products } = this.state
    return (
        <Container className="mt-4">
            <h2>Products</h2>
            <Row className="mt-4">
                {products.map(product => (
                    <Col sm="4">
                        <Card className="mt-4">
                            <CardImg
                                top width="100%"
                                src={product.imageUrl}
                                alt="Product image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CartContetx.Consumer>
                                   {({ addToCart }) => 
                                   <Button onClick={() => addToCart(product) }>Add to card</Button> 
                                   }
                                </CartContetx.Consumer>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
  }
}

export default Products
