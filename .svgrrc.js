module.exports = {
  titleProp: true,
  cleanupIDs: {
    prefix: {
      toString() {
        this.counter = this.counter || 0;
        return `id-${this.counter++}`;
      },
    },
  },
};
