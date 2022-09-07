import { useAppSelector } from '../../store/hooks/hooks'
import Comment from './Comment'
import style from './Сomments.module.css'

function CommentsList() {

    const { messages, isLoading, error } = useAppSelector(state => state.comments)



    return (
        <ul className={style.comments_list}>
            {messages.length > 0 && messages.map(i => <Comment key={i.id} {...i} />)}
        </ul>
    )
}

export default CommentsList