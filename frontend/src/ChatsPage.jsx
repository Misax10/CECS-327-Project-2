import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4d3b837f-f00d-4d27-9389-2cf7cc2574d7', 
        props.user.username, 
        props.user.secret)
    return( 
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage