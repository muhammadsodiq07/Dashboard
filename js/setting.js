// const template = document.createElement('template');
// template.innerHTML = `
//   <style>
//     .header__link-vue {
//       font-weight: 700;
//       padding-top: 8px;
//       font-size: 14px;
//       letter-spacing: -0.5px;
//       display: inline-block;
//       color: $color-text;
//       text-decoration: none;
//       text-transform: uppercase;
//     }
//   </style>
//   <div class="user-card">
//         <a href="https://demos.creative-tim.com/vue-notus/#/" class="header__link-vue">
//         <slot name="email"/>
//         </a>
//     </div>
//   </div>
// `;

// class UserCard extends HTMLElement {
//   constructor() {
//     super();
//     this.showInfo = true;

//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//   }
// }

// window.customElements.define('user-card', UserCard);