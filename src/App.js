import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUser from "./screens/edit-user/EditUser";
import Users from "./screens/users/Users";
import NotFound from "./screens/not_found/NotFound";
import AddUser from "./screens/add-user/AddUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/add_user" element={<AddUser />} />
        <Route exact path="/edit_user" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
