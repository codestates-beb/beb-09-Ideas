import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Header from './components/frame/header/Header.jsx';
import Footer from './components/frame/footer/Footer.jsx';

import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import CreateBoard from './pages/CreateBoard.jsx';
import CategoryBoard from './pages/CategoryBoard.jsx';
import MainPage from './pages/MainPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ReadingBoard from './pages/ReadingBoard';
import Sidebar from './components/frame/sidebar/Sidebar';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/board/create" element={<CreateBoard/>}/> 
                <Route path="/:category" element={<CategoryBoard/>}/>
                <Route path="/board/:id" element={<ReadingBoard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>  
            <Footer/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
