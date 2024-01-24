import { useReducer } from 'react'
import { descrement, inscrement } from './reducers/action'
import { initState, reducer } from './reducers/reducer'

function App() {
  const [number,dispatch] = useReducer(reducer,initState)
  return (
    <div className='container w-50 '>
      <h1 className='text-danger'>{number}</h1>
      <div >
        <button className="btn btn-dark" 
        onClick={()=>dispatch(inscrement(1))}>
          Inreament
          </button>
      </div>
      <div >
        <button className="btn btn-success" 
        onClick={()=>dispatch(descrement(1))}>
          Inreament
          </button>
      </div>
    </div>
  )
}

export default App
