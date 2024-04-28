// Importing chat components and logic hook from 'react-chat-engine-advanced' library
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

// ChatsPage component definition taking 'props' as an argument
const ChatsPage = (props) => {
    // Initializing chat properties using the useMultiChatLogic hook with project ID, username, and user secret
    const chatProps = useMultiChatLogic(
        '4d3b837f-f00d-4d27-9389-2cf7cc2574d7', // Project ID
        props.user.username, // Username of the logged-in user
        props.user.secret // Secret/token of the logged-in user
    );

    // Timezone offset set to -7 for Pacific Daylight Time (PDT)
    const timezoneOffset = -7;
    
    // Render the chat components with a full viewport height
    return( 
        <div style={{height:'100vh'}}>
            {/* MultiChatSocket component that establishes the websocket connection for the chat, with the timezone offset applied */}
            <MultiChatSocket {...chatProps} timezoneOffset={timezoneOffset}/>

            {/* MultiChatWindow component that displays the chat interface, also with a full viewport height */}
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    );
}

// Exporting ChatsPage for use in other parts of the application
export default ChatsPage;
