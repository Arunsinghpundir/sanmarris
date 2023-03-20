
import './App.css'
import { Table } from './Component/Table'
import { Routes, Route, useNavigate,Link } from "react-router-dom";
import { Post } from './Post';

function App() {
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Table  />} />
      <Route exact path="/post" element={<Post id={1} />} />
      </Routes>
    </div>
  )
}

export default App
