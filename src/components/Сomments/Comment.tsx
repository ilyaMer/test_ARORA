import moment from 'moment'
import { useAppSelector } from '../../store/hooks/hooks'
import { CommentsType } from '../../store/reducers/commentsReducer/commentsReducer'
import style from './Сomments.module.css'

function Comment(props: CommentsType) {

    const { isLoading, error, users } = useAppSelector(state => state.users)

    console.log(users)

    const userName = isLoading ? "" : users.find(item => item.id === props.author)

    const humanDateFormat = moment(props.timestamp * 1000).format("MMM Do YY")

    return (
        <>
            <li className={style.comment}>
                <div className={style.comment__img}>
                    <img src="" alt="" width={'50px'} />
                </div>
                <div className={style.comment__right_side}>
                    <div className={style.comment__header}>
                        <div className={style.comment__name}>
                            {userName ? decodeURI(userName.name) : 'Аноним'}
                        </div>
                        <time className={style.comment__date}>{humanDateFormat}</time>
                    </div>
                    <p className={style.comment__body}>
                        {decodeURI(props.message).replace('%3F', '?').replace('%2C', ',')}
                    </p>
                    <div className={style.comment__footer}>
                        <button className={style.comment_btn + style.comment_btn_default}>Ответить</button>
                    </div>
                </div>
                <hr className={style.comment__line}/>
            </li >
        </>
    )
}

export default Comment