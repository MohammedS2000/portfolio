import './index.css';
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import {DarkModeProvider} from './component/DarkToggle';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
    return(
        <DarkModeProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/Project' element={<Project/>} />
                <Route path='/Contact' element={<Contact/>} />
            </Routes>   
        </BrowserRouter>
        </DarkModeProvider>
    )
};

