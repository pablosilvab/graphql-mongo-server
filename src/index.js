import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema/schema";
import {connect} from "./db"

const app = express();
connect();

app.get('/', (req,res)=>{
    res.json({
        message: 'hello world'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, ()=>{
    console.log('Server running on port: 3000');
})