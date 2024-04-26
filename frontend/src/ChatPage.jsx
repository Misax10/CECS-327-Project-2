import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const handleAuth = (authUser) => {
    console.log('Authenticated User:', authUser); // This should now log { username: "090", secret: "whatever-the-correct-secret-is" }
    setUser(authUser);
  };
  
  return (
    <div className="background">
      <PrettyChatWindow
        projectId= '4d3b837f-f00d-4d27-9389-2cf7cc2574d7'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
