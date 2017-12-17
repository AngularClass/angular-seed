import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
})

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID }
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID }
        }
      }
    }
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID }
        }
      }
    }
  })
})
