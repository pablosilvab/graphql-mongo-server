import { resolvers } from "../resolvers/resolver";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = ` 

    type Query {
        hello: String
    }

    `;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

