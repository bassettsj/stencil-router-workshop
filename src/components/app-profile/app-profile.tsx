import { Component, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {

    const moreUrl = `${this.history.location.pathname}/more`;
    return (
      <div class="app-profile">
        <h2>Profile</h2>
        {this.match && this.match.params.name ? (
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in
            through a route param!
            <stencil-route-link url={moreUrl}>More Info</stencil-route-link>
          </p>
        ) : null}
        <app-profile-form history={this.history}></app-profile-form>
        <stencil-route url={moreUrl} routeRender={() => (
          <div>
            <h4>More Info about {this.normalize(this.match.params.name)}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolore. Sit tempora atque dolorem quis! Sed deleniti aut odit, iste earum enim reiciendis libero amet pariatur adipisci maiores, alias laudantium.</p>
          </div>
        )}></stencil-route>
        <stencil-router-redirect url="/" />
      </div>
    );
  }
}
