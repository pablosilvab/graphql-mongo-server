# Graphql-mongo-server
Proyecto de juguete para probar GraphQL

## Ejecución

En ambiente de desarrollo:

```
npm start
```

Una vez finalizado el desarrollo:

Generar código: 
```
npm run build
```

Ejecutar:
```
npm serve
```

### Ejemplos:

#### Ejemplo con base de datos Mongo

* Agregar un nuevo Usuario 
```
mutation {
  createUser(input:{
    firstname: "Pablo"
    lastname: "Silva"
    age:25
  }) {
    _id
    firstname
    lastname
    age
  }
}
```

* Obtener todos los usuarios 
```
query {
  Users {
    _id
    firstname
    lastname
    age
  }
}
```

* Eliminar un usuario 
```
mutation {
  deleteUser(_id: "5ea767e3853b50433696bdd1") {
    firstname
    lastname
  }
}
```

* Actualizar un usuario 
```
mutation {
  updateUser(
    _id: "5ea769fd014f6544b7bc6029", 
    input: {
      firstname: "Neymar"
      lastname: "Jr"
    }) {
    firstname
    lastname
    age
  }
}
```

#### Ejemplo con datos dummy

* Query para listar todas las tareas
```
query {
  tasks {
    _id
    title
    description
    number
  }
}
```


* Mutation para crear una nueva tarea
```
mutation {
  createTask(input: {
      title: "Task 1", 
      description: "Awesome task"}) 
  {
    _id
    title
    description
    number
  }
}
```

## Conceptos

* Schema: Objeto donde puedes indicar todo lo que puedes consultar desde un cliente. GrapiQL simula una aplicación cliente. 
* Resolver: Los resolvers defines qué es lo que se va a hacer cuando se realiza una consulta.

## Herramientas

* [GraphQL](https://graphql.org)
* Babel
* Apollo GraphQL

