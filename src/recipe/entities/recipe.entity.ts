import { ObjectType, Field, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { UuidScalar } from 'src/graphql/scalar/uuid';

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

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingredients: string[];
}
