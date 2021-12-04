import AWS from "aws-sdk";
import dotenv from 'dotenv';

dotenv.config();


let awsConfig = {
  region: "ap-south-1",
  endpoint: "http://dynamodb.ap-south-1.amazonaws.com",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_SECRET_KEY,
};

AWS.config.update(awsConfig);

let dbClient = new AWS.DynamoDB.DocumentClient();

export default dbClient;
