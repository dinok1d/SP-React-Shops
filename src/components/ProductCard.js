import { Card, Col } from "react-bootstrap";
// import productStore from "../stores/productStore";
// import ProductModal from "./ProductModal";

function ProductCard({ product }) {
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price} KD</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;

// const handleDelete = () => productStore.deleteProduct(product._id);
// <Button className="m-1" onClick={handleDelete} variant="danger">
// DELETE
// </Button>
// <ProductModal oldProduct={product} />
