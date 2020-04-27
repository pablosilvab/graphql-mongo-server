import {tasks} from '../sample/sample'

import User from '../models/User'

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
        },
        async Users(){
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, {input}){
            console.log(input);
            input._id = tasks.length;
            tasks.push(input)
            return input;
        },
        async createUser(_, {input}){
            console.log(input);
            const newUser = new User(input);
            await newUser.save();
            return newUser;    
        }
    }
};