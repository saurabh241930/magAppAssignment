import dbClient from "../config/db.js";


export const scanTable = async (tableName) => {
    const params = {
       TableName: tableName,
    };
 
    let scanResults = [];
    let items;
    do {
       items = await dbClient.scan(params).promise();
       items.Items.forEach((item) => scanResults.push(item));
       params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    console.log(scanResults);
 
    return scanResults;
 
 };



 const DELETE = async () => {
 try {
   const deletedDoc = await dbClient
     .delete({ TableName: 'todos', Key: {"task": "see its  done"} })
     .promise();
   console.log(deletedDoc);
   return deletedDoc;
 } catch (error) {
     console.log(error);
   return error;
 }
};

DELETE()