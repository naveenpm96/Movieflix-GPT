import React, { useEffect, useState } from "react";
import Login from "./Login";
import Browse from "../components/BrowsePage/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import SignIn from "./SignIn";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/ReduxStore/userSlice";
import ProtectedRoutes, { AuthRedirect } from "./ProtectedRoutes";
import GptSearch from "./GPT-Search/GptSearch";
import DebounceSearch from "./Debounce-Search/DebounceSearch";

const Body = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        const { email, displayName, uid } = user;
        dispatch(addUser({ email, displayName, uid }));
      } else {
        setIsAuthenticated(false);
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthRedirect isAuthenticated={isAuthenticated}>
          <Login />
        </AuthRedirect>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <AuthRedirect isAuthenticated={isAuthenticated}>
          <SignIn />
        </AuthRedirect>
      ),
    },
    {
      element: <ProtectedRoutes isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/gpt-search",
          element: <GptSearch />,
        },
        {
          path: "/search",
          element: <DebounceSearch />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 - Page not found.</h1>,
    },
  ]);

  return (
    <div className="relative">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
