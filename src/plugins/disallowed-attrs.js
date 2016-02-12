function removeAttrs() {
  const attrs = [
    'align',
    'clear'
  ];
  const selectors = attrs.map(a => {
    return `[${a}]`;
  });
  this.$(selectors.join(',')).each((i, el) => {
    const $el = this.$(el);
    const $attr = $el.attr();
    attrs.forEach(a => {
      if ($attr.hasOwnProperty(a)) {
        delete $attr[a];
      }
    });
    $el.attr($attr);
  });
}

export default function () {
  return {
    removeDisallowedAttrs: () => {
      removeAttrs.bind(this)();
      return this;
    }
  };
}
