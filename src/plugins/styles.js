export default function () {
  return {
    removeInlineStyles: () => {
      this.$('[style]').each((i, el) => {
        const $el = this.$(el);
        $el.removeAttr('style');
      });
      return this;
    }
  };
}
