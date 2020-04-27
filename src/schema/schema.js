import { resolvers } from "../resolvers/resolver";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = ` 

    type Query {
        hello: String
        greet(name: String): String
        requiredGreet(name: String!): String
    }

    `;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

