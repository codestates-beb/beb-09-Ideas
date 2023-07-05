import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Header from './components/frame/header/Header.jsx';
import Footer from './components/frame/footer/Footer.jsx';

import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import CreateBoard from './pages/CreateBoard.jsx';
import Manage from './pages/category/Manage.jsx';
import Economy from './pages/category/Economy.jsx';
import Security from './pages/category/Security.jsx';
import AI from './pages/category/AI.jsx';
import Blockchain from './pages/category/Blockchain.jsx';
import Cloud from './pages/category/Cloud.jsx';
import MainPage from './pages/MainPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/boards/create" element={<CreateBoard/>}/> 
                <Route path="/manage" element={<Manage/>}/>
                <Route path="/economy" element={<Economy/>}/>
                <Route path="/security" element={<Security/>}/>
                <Route path="/ai" element={<AI/>}/>
                <Route path="/blockchain" element={<Blockchain/>}/>
                <Route path="/cloud" element={<Cloud/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
            <Navbar />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
