import { Component } from "@stencil/core";

@Component({
  tag: 'app-protected',
})
export class AppProtected {
  render() {
    return (
      <div>
        <h2>Private Area!</h2>
        <app-login-link />
      </div>
    );
  }
}
