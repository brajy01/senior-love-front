import ConversationList from "../components/ConversationList";
import ConversationDetail from "../components/ConversationDetail";

function Messages() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="border-r-4 lg:w-1/3 lg:overflow-y-auto">
          <ConversationList />
        </div>
        <div className="lg:w-2/3 lg:overflow-y-auto hidden lg:block">
          <ConversationDetail />
        </div>
      </div>
    </>
  );
}

export default Messages;
