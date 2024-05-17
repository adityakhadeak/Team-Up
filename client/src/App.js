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
import PassRecover from './Pages/PassRecover';
import Dashboarduser from './Pages/UserProfile/Dashboarduser';
import Edituserinfo from './Pages/UserProfile/Edituserinfo';
import Applicationstatus from './Pages/UserProfile/Applicationstatus';import Explore from './Pages/Explore';
import RightSide from './Components/settings/RightSide';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/postproj' element={<Postproject />} />
        <Route path='/findproj' element={<Findproject />} />
        <Route path='/settings/*' element={<RightSide />} />
        <Route path='/recoverpassword' element={<PassRecover />} />
        <Route path='/dashboard' element={<Dashboarduser/>}/>
        <Route path='/applicationstatus' element={<Applicationstatus/>}/>
        <Route path='/edituser' element={<Edituserinfo/>}/>
      </Route >
    )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
