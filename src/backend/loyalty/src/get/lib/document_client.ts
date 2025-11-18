import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput, QueryCommandOutput } from '@aws-sdk/lib-dynamodb';
import { captureAWSv3Client } from 'aws-xray-sdk-core';

const ddbClient = new DynamoDBClient({});
const client = DynamoDBDocumentClient.from(ddbClient);

captureAWSv3Client(ddbClient);

/**
 * Document Client Interface
 * 
 * A replaceable document client object that can be replaced 
 */
export interface DocumentClientInterface {
  query(params: QueryCommandInput): Promise<QueryCommandOutput>;
}

/**
 * Default Document Client implementation using AWS SDK v3
 */
class DefaultDocumentClientImpl implements DocumentClientInterface {
  async query(params: QueryCommandInput): Promise<QueryCommandOutput> {
    const command = new QueryCommand(params);
    return await client.send(command);
  }
}

/**
 * Default Document Client
 * 
 * @type DocumentClientInterface
 */
export const DefaultDocumentClient: DocumentClientInterface = new DefaultDocumentClientImpl();
export type QueryInput = QueryCommandInput;
export type ItemList = Record<string, any>[];
export type QueryOutput = QueryCommandOutput;