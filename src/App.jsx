import { useState } from "react";
import "./App.css";
import { Table } from "./Component/Table";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Post } from "./Component/Post";
import { Album } from "./Component/Album";
import { Comment } from "./Component/Comment";
import { CompletedTodos } from "./Component/CompletedTodos";
import { PendingTodo } from "./Component/PendingTodo";
import { Todos } from "./Component/Todos";

function App() {
  const [postNum, setPostnum] = useState(1);
  const [commentNum, setCommentNum] = useState(1);
  const [todosNum, setTodosNum] = useState(1);
  const [pendingNum, setPendingNum] = useState(1);
  const [completedNum, setCompletedNum] = useState(1);
  const [albumNum, setAlbumNum] = useState(1);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Table
              Post={setPostnum}
              Album={setAlbumNum}
              Comment={setCommentNum}
              Completed={setCompletedNum}
              Pending={setPendingNum}
              Todos={setTodosNum}
            />
          }
        />

        <Route exact path="/post" element={<Post id={postNum} />} />
        <Route
          exact
          path="/completed"
          element={<CompletedTodos id={completedNum} />}
        />
        <Route
          exact
          path="/pending"
          element={<PendingTodo id={pendingNum} />}
        />
        <Route exact path="/todos" element={<Todos id={todosNum} />} />
        <Route exact path="/comment" element={<Comment id={commentNum} />} />
        <Route exact path="/album" element={<Album id={albumNum} />} />
      </Routes>
    </div>
  );
}

export default App;
