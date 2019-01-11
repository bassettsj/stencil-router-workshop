import { Component } from '@stencil/core';

@Component({
  tag: 'app-btn',
  styleUrl: './button.css',
  shadow: true,
})
export class ButtonElement {
  render() {
    return <slot />;
  }
}
