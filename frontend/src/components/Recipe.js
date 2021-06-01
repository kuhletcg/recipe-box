import React, { useState } from "react";
import { deleteRecipe } from "../redux/actions/recipe";
import { useDispatch } from "react-redux";

import {
  ListGroup,
  ListGroupItem,
  Collapse,
  CardBody,
  Button,
  Card,
} from "reactstrap";
import EditModal from "./EditModal";
function Recipe({ recipe, _id, ingredients }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <span onClick={toggle}>{recipe}</span>
          <Button onClick={() => dispatch(deleteRecipe(_id))}>Delete</Button>
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              {ingredients}
              <EditModal ingredients={ingredients} id={_id} />
            </CardBody>
          </Card>
        </Collapse>
      </ListGroup>
    </div>
  );
}

export default Recipe;
