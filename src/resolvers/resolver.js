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
    }
};