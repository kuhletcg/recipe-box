import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { editRecipe } from "../redux/actions/recipe";
function EditModal({ ingredients, id }) {
  const [modal, setModal] = useState(false);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRecipe({ newIngredients, id }));
    setModal(!modal);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <h3>Edit</h3>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <textarea
              cols="30"
              rows="2"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
            ></textarea>

            <Button type="submit">Submit</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Delete{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;
