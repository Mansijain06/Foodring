import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from "react";
import './App.css';
import Landing from './components/Landing';
import Profile from './components/Profile';


import { USERS_API_URL } from "./const";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  }

])

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const data = await fetch(USERS_API_URL);
    const jsonData = await data.json();
    setUsers(jsonData.users);
  }
  return (
    <UserContext.Provider value={{ users: users }}>
      <div className="App">
        <header className="App-header">
          <RouterProvider router={appRouter} />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;

