import express from "express";
import graphqlHTTP from "express-graphql";

const app = express();

app.get('/', (req,res)=>{
    res.json({
        message: 'hello world'
    })
})

const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, ()=>{
    console.log('Server running on port: 3000');
})