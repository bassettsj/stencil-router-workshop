import { RouterHistory } from '@stencil/router';
import { auth } from '../auth-route';
import {
  Component,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'app-login',
})
export class AppLogin {
  @Prop() history: RouterHistory;
  onSubmit = (e: UIEvent) => {
    e.preventDefault();
    auth.authenticate();
    this.history.replace('/protected');
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" name="password" />
        </div>
        <app-btn>
          <button type="submit">Submit</button>
        </app-btn>
      </form>
    )
  };
}
