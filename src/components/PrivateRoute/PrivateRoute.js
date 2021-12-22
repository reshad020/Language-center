import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
  
  function PrivateRoute({ children, ...rest }) {
    const {user,loading} = useFirebase();
    if(loading){
      return <h1>Loading</h1>
  }
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;