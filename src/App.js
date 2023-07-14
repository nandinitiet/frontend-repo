// import logo from './logo.svg';
// import './App.css';
import SignInForm from './SignInSide'
import SignUpForm from './SignUp'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from './components/reset/reset';
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
              <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='/ser' element={<Services />} />
                <Route path='/pro' element={<Profile />} /> */}
                <Route path='/' element={<SignInForm />} />
                <Route path='/reg' element={<SignUpForm />} />
                <Route path='/reset' element={<ResetPassword />} />
              </Routes>
            </BrowserRouter>  
    </div>
  );
}

export default App;
