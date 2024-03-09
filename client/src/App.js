import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Route >
    )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
