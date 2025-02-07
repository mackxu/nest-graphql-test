// GraphQLScalarType实例

import { GraphQLScalarType } from 'graphql';

const validate = (uuid: unknown): string | never => {
  if (typeof uuid !== 'string' || !/^[0-9a-f]{8}$/i.test(uuid)) {
    throw new Error('invalid uuid!');
  }
  return uuid;
};

export const UuidScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'a simple UUID parse.',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (value) => validate(value),
});
