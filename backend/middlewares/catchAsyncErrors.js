module.exports = (func) => (reg, res, next) =>
  Promise.resolve(func(reg, res, next))
  .catch(next);
