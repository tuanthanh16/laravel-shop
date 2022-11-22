import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductDetail from './ProductDetail';

export default function ProductModal(props) {

  console.log(props);

  return (
    <Modal
      {...props}
      size="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <div className="card h-100 shadow rounded">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.show.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div></div>            
            <p>{props.show.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
           </Modal.Footer>
        </div>
    </Modal>
  );
}