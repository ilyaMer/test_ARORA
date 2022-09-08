import { Avatar, Grid, Paper } from "@material-ui/core";
import moment from 'moment'
import { useAppSelector } from '../../store/hooks/hooks'
import { CommentsType } from '../../store/reducers/commentsReducer/commentsReducer'
import style from './Сomments.module.css'

function Comment(props: CommentsType) {

    const { isLoading, error, users } = useAppSelector(state => state.users)

    const userName = isLoading ? "" : users.find(item => item.id === props.author)

    const humanDateFormat = moment(props.timestamp * 1000).format("MMM Do YY")

    return (
        <>
            <li className={style.comment}>
                <Paper style={{ padding: "40px 20px", marginTop: 10, width: "80%" }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={userName ? userName.image : ''}/>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>{userName ? decodeURI(userName.name) : 'Аноним'}</h4>
                            <p style={{ textAlign: "left" }}>
                                {decodeURI(props.message).replace('%3F', '?').replace('%2C', ',')}{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                {humanDateFormat}
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            </li >
        </>
    )
}

export default Comment