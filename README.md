# discover-nodeJS

---

## /basics

Some basic commands

packages 

```sh
npm init
npm install --save express basic-auth-connect path util http fs
```

---

## /api

## NodeJS Todo List API

### Getting started

```sh
$ npm install
$ npm install -g nodemon
$ nodemon app.js
```

packages 

```sh
npm install --save bluebird body-parser express moment mongoose morgan
```

### Model - Task Schema

```json
{
    "title": "Titre de ma tache",
    "description": "Description",
    "created": "Tue Jun 20 2017 14:24:29 GMT+0200",
    "status": "pending"
}
```

#### Status Enumeration:
 - pending
 - ongoing
 - complete


### API

| Verb    | Endpoint                   | Description           |
|---------|----------------------------|-----------------------|
| GET     | /todo/tasks                | Get All the task      |
| POST    | /todo/tasks                | Create a task         |
| GET     | /todo/tasks/:id            | Get a single task     |
| GET     | /todo/tasks/status/:status | Find a task by status |
| PUT     | /todo/tasks/:id            | Update a task         |
| DELETE  | /todo/tasks/:id            | Delete a single task  |

### MongoDB

#### Running mongo

```sh
$ sudo docker run --name mymongo -p 27017:27017 -d mongo
```

#### Executing mongo

```sh
sudo docker exec -it mymongo /bin/bash
```

---

## /express

packages

```sh
npm init 
npm install --save express pug
```

Express discovery

```sh
node clock.js
node counter.js
node express.js
node funk.js
node hello.js
node readdir.js
node readdir.js
node rw.js
node server.js
```

---

## /task-gulp

Automating tasks

packages

```sh
npm init
npm install --save concurrently gulp gulp-concat gulp-sass gulp-uglify lite-server
```

nodeJS : commands

```sh
npm start #init to dev environment
npm run build #production case without watchers
npm run dev #dev case
```

alternatively : commands

```sh
nodemon gulpfile.js
```

---

## /Play

Just few basics bindings var.

## /Todo

Instal Angular :

```sh
ng new [name_project]
cd [name_project]
```

Instal Bootstrap

```sh
npm install --save bootstrap
```

Veillez à inclure les sources dans .angular-cli.json (styles)

Génération de composants

```sh
ng generate component [name] --spec false
#or
ng g c [name] --spec false
```
