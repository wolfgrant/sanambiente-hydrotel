import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import PrivateRoute from '../components/private-route/PrivateRoute';
import Dashboard from '../pages/dashboard/Dashboard';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Login />
                        </PrivateRoute>
                    } />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute showNavBar={true}>
                            <Dashboard />
                        </PrivateRoute>
                    } />
            </Routes>
        </Router>
    );
}

export default Routing;