import React, { useEffect } from 'react'
import { useAppDispatch } from './store/hooks/hooks'
import { setAuth } from './store/reducers/authReducer/authReducerAction'

function App() {

    const dispatch = useAppDispatch()

useEffect(() => {
    dispatch(setAuth())
}, [])


  return (
    <div>App</div>
  )
}

export default App