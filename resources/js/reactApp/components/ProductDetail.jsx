import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductModal from "./ProductModal";

const ProductDetail = ({productId}) => {

  const [detail, setDetail] = useState([])
  // const [modalShow, setModalShow] = React.useState(false);

  const loadDetail = async () => {
    const response = await fetch(`api/product/${productId}`)
    const data = await response.json();

    console.log(data.data[0]);
    setDetail(data.data[0]);
  }

  useEffect(() => {
    loadDetail()
  }, [])

  return (  

  <>
  
  {/* <h1>{loadDetail}</h1> */}
  <Button variant="primary" onClick={() => setDetail(true)}>
    
  </Button>

  <ProductModal
    show={detail}
    onHide={() => setDetail(false)}
  />

  
</>
    
  )

}

export default ProductDetail