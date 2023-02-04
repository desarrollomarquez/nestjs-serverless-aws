import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { v4 as uuid } from "uuid";
import * as AWS from "aws-sdk";
import Book from "./interface";

ConfigModule.forRoot()


const dynamoDB = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: process.env.DYNAMODB_ENDPOINT, 
    })
  : new AWS.DynamoDB.DocumentClient();
console.log(dynamoDB)


@Injectable()
export class AppService {
  async getBooks(): Promise<any> {
    try {
      return dynamoDB
        .scan({
          TableName: "BooksTable",
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async createBook(book: Book): Promise<any> {
    const bookObj = {
      id: uuid(),
      ...book,
    };
    console.log(book)
    try {
      return await dynamoDB
        .put({
          TableName: "BooksTable",
          Item: bookObj,
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getBook(id: string): Promise<any> {
    try {
      console.log(dynamoDB)
      return await dynamoDB
        .get({
          TableName: "BooksTable",
          Key: { id },
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async deleteBook(id: string): Promise<any> {
    try {
      return await dynamoDB
        .delete({
          TableName: "BooksTable",
          Key: {
            todosId: id,
          },
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
