import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Categories from "../../Pages/Categories/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import TermsAndCondition from "../../Pages/others/TermsAndConditions/TermsAndCondition";
import Profile from "../../Pages/Profile/Profile/Profile";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/news'),
            },
            {
                path: '/news_category/:id',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news_category/${params.id}`),
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            }
        ],
    }
])