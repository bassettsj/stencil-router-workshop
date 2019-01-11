import { Component } from '@stencil/core';
import { PrivateRoute } from '../auth-route';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <main>
          <stencil-router id="root" >
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/login' component='app-login' />
              <stencil-route url='/logout' component='app-logout' />
              <PrivateRoute url="/protected" component='app-protected' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
