<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## graphql
通过模式定义语言 SDL（Schema Definition Language)     
定义对象和对象之间关系的 schema

SDL 是一种在不同平台之间共享模式文件的与语言无关的方式。

## @nestjs/graphql
- GraphQLModule
- **ObjectType** // marks a class as a GraphQL type
- **ArgsType** // marks a class as a resolver arguments type 声明参数类，侧重于将多个独立的参数封装成一个类，方便在解析器中使用
- **InputType** // 对象参数，指定输入类型
- Args, 定义mutation参数类型
- Mutation
- Query
- Resolver
- ResolveField
- GraphQLDefinitionsFactory
- Scalar 装饰器指定标量类 CustomScalar
- InterfaceType 

ApolloServerPluginLandingPageLocalDefault

graphql 主要是分为 `schema`、`resolver` 两部分。

Nest 提供了两种构建 GraphQL 应用的方法：代码优先和模式优先方法。

在代码优先方法中，使用**装饰器**和 **TypeScript 类**来生成相应的 GraphQL 模式。避免在语言语法之间切换上下文。

在模式优先方法中，事实来源是 GraphQL SDL（模式定义语言）文件。Nest 基于 **GraphQL 模式**自动生成你的 TypeScript 定义（使用类或接口），以减少编写冗余样板代码的需要。

## 代码优先
**autoSchemaFile** GraphQL schema will be generated automatically。指定位置文件或内存

`@nestjs/graphql` 包读取通过ts装饰器定义的元数据并自动为你生成模式。

## Schema优先
**typePaths** 属性指示 `GraphQLModule` 应在何处查找你将编写的 GraphQL SDL 模式定义文件。
这些文件将在内存中合并，这允许你将模式拆分为多个文件并将它们定位在它们的*解析器*附近。

**definitions** 指定自动生成 TypeScript 定义的文件

建议：实现一个按需构建的脚本，避免每次启动时，生产内容

- typePaths
- definitions { path, outputAs } 动态生成ts
- watch
- GraphQLDefinitionsFactory 
  - generate
- 

## nullable
- items
- itemsAndList

## 订阅 subscription

一种将数据从**服务器**推送到选择收听来自服务器的实时消息的**客户端**的方法。
订阅类似于*查询*，因为它们指定一组要传递给客户端的字段，
但不是立即返回单个答案，而是打开一个通道，每次在服务器上发生**特定事件**时将结果发送给客户端 .

订阅的一个常见用例是通知客户端特定事件，例如创建新对象、更新字段等

installSubscriptionHandlers 启动订阅

默认类型：Int、Float、String、Boolean 和 ID。自定义原子数据类型（例如，Date）。

## 指令

## 接口 InterfaceType

```ts
import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Character {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}


@ObjectType({
  implements: () => [Character],
})
export class Human implements Character {
  id: string;
  name: string;
}
```

## 中间件


















