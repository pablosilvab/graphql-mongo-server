import { resolvers } from "../resolvers/resolver";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = ` 

    type Query {
        hello: String
        greet(name: String): String
        requiredGreet(name: String!): String
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    } 

    type Mutation {
        createTask(input: TaskInput): Task
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

