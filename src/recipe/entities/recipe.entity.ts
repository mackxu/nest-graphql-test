import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingredients: string[];
}
