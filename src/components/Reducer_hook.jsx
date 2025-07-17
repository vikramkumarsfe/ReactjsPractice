import 'font-awesome/css/font-awesome.min.css'
import { useReducer } from 'react'

const Reducer = () => {
    const reducer  = (state, action) => {
        state = action
        return state
    }
   const [loader, setLoader] = useReducer(reducer, false)

   const toggle = () => {
    setLoader(!loader)
   }
    return (
        <div className='p-4 block '>
            { loader && <i className='fa fa-spinner fa-spin text-6xl'></i>}
            <h1> Reducer</h1>

            <button 
            onClick={toggle}
            className='bg-violet-600 text-white rounded px-3 py-2 '
            >
                Toggle Loader
            </button>
        </div>
    )
}

export default Reducer