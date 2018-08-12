module.exports = (errors) => {
  return errors.reduce((m, e) => {
    var mp = null;
    var dp = '';
    var field = '';
    if (e.params && e.params.missingProperty) {
      mp = e.params.missingProperty;
    }

    if (e.dataPath && e.dataPath.length > 0) {
      dp = e.dataPath.slice(1);
    }

    if (dp !== '') {
      field = mp !== null ? `${dp}.${mp}` : dp;
    } else {
      field = mp;
    }

    return Object.assign(m, { [field]: e.message });
  }, {});
}