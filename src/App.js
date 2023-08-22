import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NomadList from "./components/nomadList/NomadList";
import SideBar from "./components/sideBar/SideBar";
import chats from "./store/store";
import UserSidebar from "./components/userSidebar/UserSidebar";
import PageNotFound from "./components/errors/ErrorNotFound";
import Chat from "./components/chats/chatTamplate/chatTamplate";
function App() {
  return (
    <div className="app_wrapper">
      <BrowserRouter>
        <SideBar />
        <NomadList />
        <Routes>
        {chats.map((chat, i)=>{
          return(
            <Route key={i} path={chat.name} element={<Chat name={chat.name}/>}/>
          )
        })}
        <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <UserSidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
