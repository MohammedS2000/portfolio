import './index.css';
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import {DarkModeProvider} from './component/DarkToggle';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/Header';


export default function App() {
    return(
        <DarkModeProvider>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/Project' element={<Project/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='*' element={<Home/>} />
            </Routes>   
        </BrowserRouter>
        </DarkModeProvider>
    )
};

