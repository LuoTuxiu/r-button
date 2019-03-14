import Vue from 'vue';

Vue.component('r-button', {
  data: function() {
    return {};
  },
  template: `
    <div>
      <button>
        <slot></slot>
      </button>
    </div>
  `,
});
