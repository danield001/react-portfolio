import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutPage from './AboutPage';
import ContactPage from "./ContactPage";
import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'resume',
                element: <ResumePage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider value={router} />
);

