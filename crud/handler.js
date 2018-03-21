// eslint-disable-next-line import/prefer-default-export
import aws from 'aws-sdk';
import lodash from 'lodash';

const dynamo = new aws.DynamoDB.DocumentClient();

export const create = (event, context) => {
  const payload = { TableName: 'Pets', Item: event.body };

  const cb = (err, data) => {
    if (err) {
      console.log(err);
      context.fail('Error creating pet');
    } else {
      console.log(data);
      context.succeed(data);
    }
  };

  dynamo.put(payload, cb);
};

export const show = function(event, context) {
  const payload = {
    TableName: 'Pets',
    Key: {
      petId: event.params.path.petId
    }
  };

  const cb = (err, data) => {
    if (err) {
      console.log(err);
      context.fail('Error retrieving pet');
    } else {
      console.log(data);
      context.done(null, data);
    }
  };

  dynamo.get(payload, cb);
};

export const list = function(event, context) {
  const payload = {
    TableName: 'Pets'
  };

  const cb = (err, data) => {
    if (err) {
      console.log(err);
      context.fail('Error getting pets');
    } else {
      console.log(data);
      context.done(null, data);
    }
  };

  dynamo.scan(payload, cb);
};
