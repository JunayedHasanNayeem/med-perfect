import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth"


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    //While collecting the user data, show spinner.
    if(isLoading){
        return <Spinner animation="border" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) :
                    <Redirect
                        to={{
                            pathname: "/sign-in",
                            state: { from: location }
                        }}
                    />
            }

        />

    )


};

export default PrivateRoute