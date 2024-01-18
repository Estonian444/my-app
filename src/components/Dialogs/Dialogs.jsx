import React from "react"
import s from './Dialogs.module.css'
import Dialogitem from "./DialogsItem/DialogsItem.jsx"
import Messages from "./Messages/Messages"


const Dialogs = (props) => { 

    let dialogsElement = props.state.dialogs
        .map( d => <Dialogitem name={d.name} id={d.id} />);
    let messagesElement = props.state.messages
        .map( m => <Messages message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }   
    
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updataNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.postContent}>
                    <textarea ref={newMessageElement} onChange={onMessageChange} 
                    value={props.newMessageText}/>
                    <div>
                        <button onClick={addMessage}>Отправить</button>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs