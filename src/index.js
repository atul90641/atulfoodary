import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import CommunityPage from './pages/CommunityPage';
import TestPage from './pages/TestPage';
import FoodCommunity from './pages/FoodCommunity';
import EmailSent from './pages/EmailSent';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const router = createBrowserRouter([
 {
  path: "/",
  element: <IndexPage />,
 },

 {
  path: "/recipe",
  element: <RecipeListPage />,
 },

 {
  path: "/recipe/:recipe_id",
  element: <RecipePage />,
 },

 {
  path: "/community",
  element: <CommunityPage />,
 },

 {
    path: "/learn",
    element: <TestPage />,
 },

 {
   path: "/foodCommunity",
   element: <FoodCommunity />,
 },

 {
   path: "/email",
   element: <EmailSent />,
 },

 {
  path: "/login",
  element: <Login />,
 },
 {
  path: "/signup",
  element: <SignUp />,
 }

]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);