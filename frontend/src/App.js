import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import SignIn from './components/SignIn';
import DerData from './pages/DerData';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import SignUp from './components/SignUp';
import AboutUs from './pages/AboutUs';
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';
import AdminContextProvider from './context/AdminContext';

function App() {
  return (
    <div className='main-container'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/log-in' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route
          path='/admin'
          element={
            <AuthRoute>
              <AdminContextProvider>
                <AdminPage />
              </AdminContextProvider>
            </AuthRoute>
          }
        />

        <Route path='/der-data/' element={<DerData />}>
          <Route path=':id' element={<DerData />} />
        </Route>

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
