import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

function AppRouter() {
    const isAuth = false; // Replace this with your authentication logic

    return (
        <Router>
            <Routes>
                {isAuth &&
                    authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}

                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

                {/* Redirect to a default route if the user is authenticated */}
                {isAuth ? <Navigate to="/dashboard" /> : null}

                {/* Redirect to a login page if the user is not authenticated */}
                {!isAuth ? <Navigate to="/login" /> : null}
            </Routes>
        </Router>
    );
}

export default AppRouter;
