import {tasks} from '../sample/sample'

export const resolvers = {
    Query: {
        hello: () =>{
            return 'Hello World with GraphQL!!!!'
        },
        greet(root, args){
            console.log(args);
            return "Hello!"
        },
        requiredGreet(root, {name}){
            console.log(name);
            return `Hello ${name}!`
        },
        tasks(){
            return tasks;
        }
    },
    Mutation: {
        createTask(_, {input}){
            console.log(input);
            input._id = tasks.length;
            tasks.push(input)
            return input;
        }
    }
};