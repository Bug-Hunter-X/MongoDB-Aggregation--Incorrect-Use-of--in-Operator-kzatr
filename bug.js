```javascript
//Incorrect usage of $in operator in MongoDB aggregation
db.collection.aggregate([
  {
    $match: {
      "fieldName": {
        $in: ["value1", "value2"]
      }
    }
  }
]);
```