import React  from "react";
import "../filterItem/filterItem.css";
// import { Modal, Button } from "react-bootstrap";
// import FilterModalBox from "../filtermodalbox";


const FilterItem = ({ filter, setFilteredItem }) => {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      <div className="filter-item cur-pointer" value={filter.title} onClick={e=>setFilteredItem(e.target.value)}>
        {filter.title}
      </div>

      {/* Modal */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>   
        
        <Modal.Body>
          <FilterModalBox setFilteredItem={setFilteredItem}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" style={{ fontSize: "0.8rem" }} onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="danger" style={{ fontSize: "0.8rem" }} onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default FilterItem;
