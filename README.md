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

