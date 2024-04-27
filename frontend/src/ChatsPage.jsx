import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4d3b837f-f00d-4d27-9389-2cf7cc2574d7', 
        props.user.username, 
        props.user.secret)
    // Set timezoneOffset to -7 for Pacific Daylight Time
    const timezoneOffset = -7;
    
    return( 
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps} timezoneOffset={timezoneOffset}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage