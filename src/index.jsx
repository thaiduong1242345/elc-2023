import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Startpage from "./pages/Startpage.jsx"
import Puzzle from './pages/Puzzle'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
// import Grid from '../components/crossword/Grid.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Startpage></Startpage>
    },
    {
        path: "/Puzzle",
        element: <Puzzle></Puzzle>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
