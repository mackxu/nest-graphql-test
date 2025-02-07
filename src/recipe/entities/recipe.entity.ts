import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { UuidScalar } from 'src/graphql/scalar/uuid';

export enum Color {
  Red,
  Green,
  Blue,
}

registerEnumType(Color, {
  name: 'Color',
  description: 'a simple enum type Color',
  valuesMap: {
    Red: { deprecationReason: 'no needed' },
    Blue: { description: 'blue color' },
  },
});

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  info?: JSON;

  @Field(() => UuidScalar, { nullable: true })
  uid?: string;

  @Field(() => Color, { nullable: true })
  favoriteColor?: Color;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingredients: string[];
}
