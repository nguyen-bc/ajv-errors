module.exports = (errors) => {
  return errors.reduce((m, e) => {
    var field = '';
    if (e.params && e.params.missingProperty) {
      field = e.params.missingProperty;
    } else {
      field = e.dataPath.slice(1);
    }
    return Object.assign(m, { [field]: e.message });
  }, {});
}