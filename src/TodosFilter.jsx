/* eslint-disable react/prop-types */

import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const TodosFilter = ({ SetChecked, setInComplete }) => {
    //get loading 
    const loading = useSelector(state => state.todos.loading);
    // For Complet filter
    const completeHandler = () => {
        SetChecked(checked => !checked)
    }
    // For Incomplete filter
    const inCompleteHandler = () => {
        setInComplete(inComplete => !inComplete)
    }
    return (
        <div>
            {
                loading ? <div className="card-footer">
                    <div className="complete-todos">
                        <Form.Check
                            onChange={completeHandler}
                            type="switch"
                            id="custom-switch"
                            label="Show Completed"
                        />
                        <Form.Check
                            onChange={inCompleteHandler}
                            type="switch"
                            id="custom-switch"
                            label="Show InComplete"
                        />
                    </div>
                </div>
                    :
                    ''
            }

        </div>
    );
};

export default TodosFilter;