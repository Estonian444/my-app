import React from "react"
import s from './Dialogs.module.css'
import Dialogitem from "./DialogsItem/DialogsItem.jsx"
import Messages from "./Messages/Messages"


const Dialogs = (props) => { 

  
    let dialogsElement = props.dialogs
        .map( d => <Dialogitem name={d.name} id={d.id} />);

    let messagesElement = props.messages
        .map( m => <Messages message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs