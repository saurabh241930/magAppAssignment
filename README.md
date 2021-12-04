# magmaAssignment


## SERVER SETUP

```
cd server
yarn
yarn  start
```


## CLIENT SETUP

```
cd client
yarn
yarn  start
```

## BACKEND CODE STRUCTURE

```
controllers-
-todo controller
--createTask : connects create api route with CREATE service
--readTasks : connects read api route with READ service
--deleteTask : connects delete api route with DELETE service
--updateTask : connects update api route with UPDATE service

-services-
-todo services
--CREATE,READ,UPDATE,DELETE : contains the db querying part & can be resued for other CRUD operations

-routes-
--contains routes for CRUD opertaion

-config
--contains db configuration & connection instance which is being exported to services file

-middlewares
--contains routes mount file where all the routes have been imported

```