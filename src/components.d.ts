/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppLogin {
    'history': RouterHistory;
  }
  interface AppLoginAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppLogout {
    'history': RouterHistory;
  }
  interface AppLogoutAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppProfile {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppProfileForm {
    'history': RouterHistory;
  }
  interface AppProfileFormAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppProtected {}
  interface AppProtectedAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppLoginLink {}
  interface AppLoginLinkAttributes extends StencilHTMLAttributes {}

  interface AppBtn {}
  interface AppBtnAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppLogin': Components.AppLogin;
    'AppLogout': Components.AppLogout;
    'AppProfile': Components.AppProfile;
    'AppProfileForm': Components.AppProfileForm;
    'AppProtected': Components.AppProtected;
    'AppRoot': Components.AppRoot;
    'AppLoginLink': Components.AppLoginLink;
    'AppBtn': Components.AppBtn;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-login': Components.AppLoginAttributes;
    'app-logout': Components.AppLogoutAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-profile-form': Components.AppProfileFormAttributes;
    'app-protected': Components.AppProtectedAttributes;
    'app-root': Components.AppRootAttributes;
    'app-login-link': Components.AppLoginLinkAttributes;
    'app-btn': Components.AppBtnAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppLoginElement extends Components.AppLogin, HTMLStencilElement {}
  var HTMLAppLoginElement: {
    prototype: HTMLAppLoginElement;
    new (): HTMLAppLoginElement;
  };

  interface HTMLAppLogoutElement extends Components.AppLogout, HTMLStencilElement {}
  var HTMLAppLogoutElement: {
    prototype: HTMLAppLogoutElement;
    new (): HTMLAppLogoutElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppProfileFormElement extends Components.AppProfileForm, HTMLStencilElement {}
  var HTMLAppProfileFormElement: {
    prototype: HTMLAppProfileFormElement;
    new (): HTMLAppProfileFormElement;
  };

  interface HTMLAppProtectedElement extends Components.AppProtected, HTMLStencilElement {}
  var HTMLAppProtectedElement: {
    prototype: HTMLAppProtectedElement;
    new (): HTMLAppProtectedElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppLoginLinkElement extends Components.AppLoginLink, HTMLStencilElement {}
  var HTMLAppLoginLinkElement: {
    prototype: HTMLAppLoginLinkElement;
    new (): HTMLAppLoginLinkElement;
  };

  interface HTMLAppBtnElement extends Components.AppBtn, HTMLStencilElement {}
  var HTMLAppBtnElement: {
    prototype: HTMLAppBtnElement;
    new (): HTMLAppBtnElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-login': HTMLAppLoginElement
    'app-logout': HTMLAppLogoutElement
    'app-profile': HTMLAppProfileElement
    'app-profile-form': HTMLAppProfileFormElement
    'app-protected': HTMLAppProtectedElement
    'app-root': HTMLAppRootElement
    'app-login-link': HTMLAppLoginLinkElement
    'app-btn': HTMLAppBtnElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-login': HTMLAppLoginElement;
    'app-logout': HTMLAppLogoutElement;
    'app-profile': HTMLAppProfileElement;
    'app-profile-form': HTMLAppProfileFormElement;
    'app-protected': HTMLAppProtectedElement;
    'app-root': HTMLAppRootElement;
    'app-login-link': HTMLAppLoginLinkElement;
    'app-btn': HTMLAppBtnElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
