import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/signinPage';
import GlobalStyle from './styles/GlobalStyle';
import SignUp from './pages/signupPage';
function App() {
  return (
   <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path='/' exact element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/home'/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
