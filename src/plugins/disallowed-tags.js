function inlineTags() {
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
      inlineTags.bind(this)();
      return this;
    }
  };
}
