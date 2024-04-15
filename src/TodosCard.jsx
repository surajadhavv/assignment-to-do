/* eslint-disable react/prop-types */
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checkedTodos, removeTodos, unCheckedTodos } from "./redux/todosSlice";
import { useState } from "react";

const TodosCard = ({ item }) => {
    const [checked, SetChecked] = useState(true);
    // dispatch
    const dispatch = useDispatch();
    const handleChange = () => {
        SetChecked(checked => !checked)
        if (checked) {
            dispatch(checkedTodos({
                id: item.id
            }))
        } else {
            dispatch(unCheckedTodos({
                id: item.id
            }))
        }
    }
    return (
        <div>
            <ListGroup as="ol" numbered>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox onChange={handleChange} aria-label="Checkbox for following text input" />
                    <Form.Control aria-label="Text input with checkbox" value={item.name} disabled />
                    <Badge className="pt-3" style={{ width: '80px'}} bg={item.status === 'Complete' ? 'success' : 'dark'}>{item.status}</Badge>
                    <div className="cross-button">
                        <span onClick={() => dispatch(removeTodos({
                            id: item.id
                        }))} className="ms-3" style={{
                            fontSize: '10px',
                            marginTop: '20px',
                            display: 'flex',
                            cursor: 'pointer'
                        }}>&#10006;</span>
                    </div>
                </InputGroup>
            </ListGroup>
        </div >
    );
};

export default TodosCard;