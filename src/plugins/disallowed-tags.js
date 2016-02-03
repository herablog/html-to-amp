function removeTags() {
  const selectors = [
    'style',
    'input',
    'textarea',
    'select',
    'option',
    'form',
    'embed',
    'applet',
    'param',
    'object',
    'frameset',
    'base',
    'script'
  ];
  this.$(selectors.join(',')).each((i, el) => {
    const $el = this.$(el);
    $el.remove();
  });
}

function replaceInlineTags() {
  const selectors = [
    'font'
  ];
  this.$(selectors.join(',')).each((i, el) => {
    const $el = this.$(el);
    const $conainer = this.$('<div>');
    const $newEl = this.$('<span>');
    $newEl.html($el.html());
    $conainer.append($newEl);
    $el.replaceWith($conainer.html());
  });
}

export default function () {
  return {
    removeDisallowedTags: () => {
      removeTags.bind(this)();
      return this;
    },
    replaceDisallowedTags: () => {
      replaceInlineTags.bind(this)();
      return this;
    }
  };
}
