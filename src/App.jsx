import { useState } from 'react';
import './App.css'
import { addTodos } from './redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import TodosCard from './TodosCard';
import TodosFilter from './TodosFilter';

function App() {
  const [todos, setTodos] = useState()
  const [number, setNumber] = useState(1);
  const [checked, SetChecked] = useState(false);
  const [inComplete, setInComplete] = useState(false);
  // dispatch redux
  const dispatch = useDispatch();
  // get data from redux
  const getTodos = useSelector(state => state.todos.todos)
  //get loading 
  const loading = useSelector(state => state.todos.loading);
  // Add Todo Data
  const todosHandler = (e) => {
    setNumber(number + 1)
    e.preventDefault();
    dispatch(addTodos({
      id: number,
      name: todos,
      status: 'Incomplete'
    }))
    setTodos('')
  }

  return (
    <>
      <div className="todo-input">
        <h1 className='text-center mb-4'>Todos</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={todosHandler}>
              <input onChange={((e) => setTodos(e.target.value))} type="text" value={todos || ''} placeholder='Add a task' required />
            </form>
            <div className="todos-show mt-3">
              {
                loading ?
                  <div className="card">
                    <div className="card-body">
                      {(() => {
                        if (checked) {
                          return (
                            getTodos.filter(item => item.status === 'Complete')
                              .map(item => < TodosCard key={item.id} item={item} />)
                          )
                        } else if (inComplete) {
                          return (
                            getTodos.filter(item => item.status === 'Incomplete')
                              .map(item => < TodosCard key={item.id} item={item} />)
                          )
                        } else {
                          return (
                            getTodos.map(item => < TodosCard key={item.id} item={item} />)
                          )
                        }
                      })()}
                    </div>
                    <TodosFilter
                      SetChecked={SetChecked}
                      checked={checked}
                      setInComplete={setInComplete}
                    />
                  </div>
                  :
                  <div></div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
