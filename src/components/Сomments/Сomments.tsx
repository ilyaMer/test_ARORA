import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { setMessages } from '../../store/reducers/commentsReducer/commentsReducerAction'
import { setUsers } from '../../store/reducers/userReduser/usersReducerAction'
import CommentsList from './CommentsList'
import style from './Сomments.module.css'

function Сomments() {

  const dispatch = useAppDispatch()
  const {messages} = useAppSelector(state => state.comments)

  useEffect(() => {
    dispatch(setMessages())  
    dispatch(setUsers())
  })
  

  return (
    <div className={style.comments}>
        <h1>Сomments</h1>
        <h3 className={style.title_comments}>Комментарии {messages.length}</h3>
        <CommentsList />
    </div>
  )
}

export default Сomments