import { auth } from "../auth-route";
import { Component, Prop } from '@stencil/core';
import { RouterHistory } from "@stencil/router";

@Component({
  tag: 'app-logout'
})
export class AppLogout {
  @Prop() history: RouterHistory;
  componentDidLoad() {
    auth.logout();
    this.history.replace('/');
  }
}
