# Prisma Tutorial

Prisma an Object Relational Mapping Tools which makes working with relational database lot more easier and faster.


## Getting Started

### Install Prisma and Prisma-Client

```diff

    $ npm install  @prisma/client prisma

```

### Setup your database_url

Create a `.env` file and add and update the following

```diff
    DATABASE_URL="`PROVIDER`://`USER`:`PASSWORD`@`host`:`PORT`/`databaseName`?schema=public"
```
for eg

```
    DATABASE_URL="postgresql://postgres:1234@localhost:5432/prisma-tut?schema=public
```

### Initialized prima using the below command

```diff

    $ prisma init

```



### Update the `Prisma/schema.prisma` file present after running the above commands

`Prisma/schema.prisma`

```js

    datasource db{
        provider = "postgresql"
        url = env("DATABASE_URL")
    }

    generator client{
        provider="prisma-client-js"
    } 

    // Define your database models here

    model User{
        id      String      @id @default(autoincrement())

        email   String      @unique

        name    String      

        posts   Posts[]
        
        createdAt  DateTime  @default(now())
    }

    model Posts{
        id      String      @id
        createdAt   DateTime    @default(now())
        title       String
        author      User        @relation(fields: [authorId], references: [id]) 
        authorId    String 
    }
```

### Run Migration
This is the process of `synchronizing` all tables within the database.

```diff

    $ prisma migrate dev --name somemigrationname

```

### Run Prisma generate
This would check and see if `@prisma/client` is installed, if it isnt, it would install it.

```diff

    $ prisma generate
```

### Still In Development
