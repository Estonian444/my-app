import React from "react"
import { Link } from "react-router-dom"
import s from './Dialogs.module.css'

const Dialogitem = (props) => {
    let path = "/dialogs" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
    <Link to={path}>{props.name}</Link>
</div>
}

const Messages = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> 
                <Dialogitem name='Kostiy' id='1'/>
                <Dialogitem name='Sergey' id='2'/>
                <Dialogitem name='Mary' id='3'/>
                <Dialogitem name='Nasty' id='4'/>
                <Dialogitem name='Dima' id='5'/>
            </div>
            <div className={s.messages}>
                <Messages message="HI"/>
                <Messages message="HYoyooyoyI"/>
                <Messages message="xaxaxa"/>
                <Messages message="hello"/>
            </div>
        </div>
    )
}

export default Dialogs