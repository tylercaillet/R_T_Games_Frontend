# R_T_Games_Frontend
![image](./images/video_game_image.png)

## Date: 05/08/2023

### Ryan Caillet

#### [LinkedIn](https://www.linkedin.com/in/ryan-caillet/) | [GitHub](https://github.com/rycaillet)

### Tyler Caillet

#### [LinkedIn](https://www.linkedin.com/in/tyler-caillet/) | [GitHub](https://github.com/tylercaillet)

---

####

**Website Link:**
[Heroku]() |
[frontend]()
---

## **_Description_**

#### We wanted to create an app that helps avid gamers find possible games that they might be interested in buying in the future. Gamers can leave reviews on certain games or even add games that might not be already listed. They will also be able to edit or delete their listing if they wanted to aswell. We're doing this project together to brush up or group coding skills and to further enhance our coding knowledge/efficiency. 

---

#### Link to Trello Board: [Trello](https://trello.com/b/naXdDCjY/game-over-p4)

### ERD

![image](./images/ERD.png)

---

### **_Technologies_**

- Front-End

  - React.js
  - CSS

- Back-End

  - node.js
  - express
  - Sequilize
  - PostgreSQL

---

### **_Getting Started_**

#### - Fork and Clone
run: 
1. `npm i`
2. `npm run start`

---

### **_Screenshots_**

> #### **Login Page**

![image]()

> #### **Home Page**

![image]()

> #### **Video Game Page**

![image]()

### **_Task Lists_**

- [ ] Add more pages so it can look like a proper website
- [ ] Make a Landing page
- [ ] Add user authentication
- [ ] Finish front-end logic
- [ ] Beautiful css styling

---

### **_Credits_**


---
I'm using postgresSQL and am having a routing issue for reviews. This is the review model: 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user_review',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Review.belongsTo(models.Listing, {
        foreignKey: 'listingId',
        as: 'listing_review',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init(
    {
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    listingId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'listings',
        key: 'id'
      }
    },
    review: DataTypes.STRING
  }, 
    {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
    }
  );
  return Review;
};
This is the review controller: 
const { Review } = require('../models')

const GetAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}
This is my router: 
router.get('/', controller.GetAllReviews) 
This is the error I'm getting when I try calling GetAllReviews in insomnia: 
This is the error message after implementing the change: 
Executing (default): SELECT “id”, “userId”, “listingId”, “review”, “createdAt”, “UserId” FROM “reviews” AS “Review”;
node:internal/process/promises:288
            triggerUncaughtException(err, true /* fromPromise */);
            ^
Error
    at Query.run (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/sequelize/lib/sequelize.js:315:28
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async PostgresQueryInterface.select (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async Review.findAll (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/sequelize/lib/model.js:1140:21)
    at async GetAllReviews (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/controllers/ReviewController.js:5:21) {
  name: ‘SequelizeDatabaseError’,
  parent: error: column “UserId” does not exist
      at Parser.parseErrorMessage (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:287:98)
      at Parser.handlePacket (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:126:29)
      at Parser.parse (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:39:38)
      at Socket.<anonymous> (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/index.js:11:42)
      at Socket.emit (node:events:513:28)
      at addChunk (node:internal/streams/readable:324:12)
      at readableAddChunk (node:internal/streams/readable:297:9)
      at Readable.push (node:internal/streams/readable:234:10)
      at TCP.onStreamRead (node:internal/stream_base_commons:190:23) {
    length: 166,
    severity: ‘ERROR’,
    code: ‘42703’,
    detail: undefined,
    hint: ‘Perhaps you meant to reference the column “Review.userId”.’,
    position: ‘60’,
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: ‘parse_relation.c’,
    line: ‘3643’,
    routine: ‘errorMissingColumn’,
    sql: ‘SELECT “id”, “userId”, “listingId”, “review”, “createdAt”, “UserId” FROM “reviews” AS “Review”;’,
    parameters: undefined
  },
  original: error: column “UserId” does not exist
      at Parser.parseErrorMessage (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:287:98)
      at Parser.handlePacket (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:126:29)
      at Parser.parse (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/parser.js:39:38)
      at Socket.<anonymous> (/Users/tylercaillet/Different_Projects/R_T_Games_Backend/node_modules/pg-protocol/dist/index.js:11:42)
      at Socket.emit (node:events:513:28)
      at addChunk (node:internal/streams/readable:324:12)
      at readableAddChunk (node:internal/streams/readable:297:9)
      at Readable.push (node:internal/streams/readable:234:10)
      at TCP.onStreamRead (node:internal/stream_base_commons:190:23) {
    length: 166,
    severity: ‘ERROR’,
    code: ‘42703’,
    detail: undefined,
    hint: ‘Perhaps you meant to reference the column “Review.userId”.’,
    position: ‘60’,
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: ‘parse_relation.c’,
    line: ‘3643’,
    routine: ‘errorMissingColumn’,
    sql: ‘SELECT “id”, “userId”, “listingId”, “review”, “createdAt”, “UserId” FROM “reviews” AS “Review”;’,
    parameters: undefined
  },
  sql: ‘SELECT “id”, “userId”, “listingId”, “review”, “createdAt”, “UserId” FROM “reviews” AS “Review”;’,
  parameters: {}
}