import { Component, Prop, Element } from '@stencil/core';
import {  RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-profile-form',
  styleUrl: 'app-profile-form.css',
  shadow: true
})
export class AppProfileForm {
  @Element() el: HTMLStencilElement;
  @Prop() history: RouterHistory;

  onSubmit = (e: UIEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameEl = form.elements.namedItem('name') as HTMLInputElement;
    this.history.replace(`/profile/${nameEl.value}`);
    nameEl.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="name">New Name</label>
          <input type="text" required id="name" name="name" />
        </div>
        <app-btn>
          <button type="submit" class="btn">Change</button>
        </app-btn>
      </form>
    );
  }
}



