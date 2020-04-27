import mongoose from "mongoose";

export async function connect(){
    try {
        // función asincrona . una vez que termina de ejecutarse muestra el msg por consola.
        await mongoose.connect('mongodb://localhost:27017/graphql', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('>>> DB is connected'); 
    } catch {
        console.log('>>> DB Fail!');
        console.log(e);
    }

}


