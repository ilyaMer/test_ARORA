import style from './Headers.module.css'
import { useEffect } from 'react'
import { setAuth } from '../../store/reducers/authReducer/authReducerAction'
import { useAppDispatch } from '../../store/hooks/hooks'

function Headers() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAuth())
  })

  return (
    <div className={style.headers}>
    </div>
  )
}

export default Headers