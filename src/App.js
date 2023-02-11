import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Order from './components/Orders/Order';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home />
        },
        { path: '/about', element: <About /> },
        { path: '/orders', element: <Order /> },
        { path: '/login', element: <Login /> },
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
