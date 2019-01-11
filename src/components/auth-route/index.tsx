const auth = {
  isAuthenticated: false,
  authenticate: function() {
    this.isAuthenticated = true;
  },
  logout: function() {
    this.isAuthenticated = false;
  }
}


const PrivateRoute = ({ component, ...props}) => {
  const Component = component;
  return (
    <stencil-route {...props} routeRender={(props) => {
      if (auth.isAuthenticated) {
        return <Component {...props} {...props.componentProps} />;
      }
      return <stencil-router-redirect url='/' />
    }}/>
  );
}


export {
  PrivateRoute,
  auth,
}
