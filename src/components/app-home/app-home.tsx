import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h2>
          Routing Getting Started!
        </h2>

        <stencil-route-link url='/profile/stencil' anchorClass="btn">
          Profile page
        </stencil-route-link>
      </div>
    );
  }
}
