import { Component } from "@stencil/core";
import { auth } from './';

@Component({
  tag: 'app-login-link'
})
export class AppLoginLink {
  render() {
    if (auth.isAuthenticated) {
      return (
        <stencil-route-link url='/logout'>Logout</stencil-route-link>
      );
    }
    return (
      <stencil-route-link url='/login'>Login</stencil-route-link>
    );
  }
}
