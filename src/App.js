import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddUser from "./screens/add-user/AddUser";
import Users from "./screens/users/Users";
import NotFound from "./screens/not_found/NotFound";

function App() {
  return (
      <Router>
              <Routes>
                  <Route exact path="/" element={<Users/>}/>
                  <Route exact path="/users" element={<Users/>}/>
                  <Route exact path="/add_user" element={<AddUser/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
      </Router>
  );
}

export default App;
