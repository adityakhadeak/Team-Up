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
import Postproject from './Pages/Postproject';
import Findproject from './Pages/Findproject';
import Footer from './Components/footer'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/postproj' element={<Postproject />} />
        <Route path='/findproj' element={<Findproject />} />
        <Route path='/footer' element={<Footer />} />
      </Route >
    )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
