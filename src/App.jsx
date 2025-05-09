import './index.css';
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import {DarkModeProvider} from './component/DarkToggle';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './component/Header';
import NotFound from './pages/NotFound';

const myRouter = createBrowserRouter(
    [
        {path:"/", element : <Header />, children: [
            { index : true, element:<Home/>},
            { path: "home", element:<Home/>},
            { path: "project", element:<Project/>},
            { path: "contact", element:<Contact/>},
            { path: "*", element:<NotFound/>}
        ]}
        
    ]
)

export default function App() {
    return(
        <DarkModeProvider>
            <RouterProvider router={myRouter}/>
        </DarkModeProvider>
        
    )
};

