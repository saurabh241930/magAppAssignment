import dbClient from "../config/db.js";

const CREATE = async (payload) => {
  try {
    const createdDoc = await dbClient
      .put({ TableName: payload.TableName, Item: payload.data })
      .promise();

    createdDoc.then((data) => console.log("data", data));

    return createdDoc;
  } catch (error) {
    return error;
  }
};

const READ = async (payload) => {
  const params = {
    TableName: payload.TableName,
  };

  let scanResults = [];
  let items;
  do {
    items = await dbClient.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey != "undefined");

  return scanResults;
};

const UPDATE = async (payload) => {
  try {
    console.log(payload);
    const updateDoc = await dbClient
      .update({
        TableName: payload.TableName,
        Key: payload.Key,
        UpdateExpression: payload.UpdateExpression,
        ExpressionAttributeValues: payload.ExpressionAttributeValues,
        ReturnValues: "UPDATED_NEW",
      })
      .promise();
    console.log(updateDoc);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (payload) => {
  console.log(payload, "payload");
  try {
    const deletedDoc = await dbClient
      .delete({ TableName: payload.TableName, Key: payload.Key })
      .promise();
    console.log(deletedDoc);
    return deletedDoc;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default { CREATE, READ, UPDATE, DELETE };
