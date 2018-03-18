// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, callback) => {
  const p = new Promise(resolve => {
    resolve('success');
  });
  p
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless Webpack (Ecma Script) v1.0! first module!',
          input: event
        })
      })
    )
    .catch(e => callback(e));
};
