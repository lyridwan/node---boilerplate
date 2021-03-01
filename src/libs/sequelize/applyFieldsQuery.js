export const applyFieldsQuery = (model, options) => {
  if (options.fields && typeof options.fields === 'string') {
    const fields = options.fields.split(',');

    const exclude = _.reduce(
      fields,
      (result, value) => {
        if (value[0] === '-') result.push(value.substr(1));
        return result;
      },
      [...options.attributes.exclude],
    );

    // eslint-disable-next-line no-param-reassign
    options.attributes = exclude.length > options.attributes.exclude.length ? { exclude } : fields;

    // eslint-disable-next-line no-param-reassign
    delete options.fields;
  }
};
