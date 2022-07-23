import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Products } from 'src/products.controller';

import schema from './schema';

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    return formatJSONResponse(await new Products().getById(event.pathParameters.id));
  } catch (error) {
    return formatJSONResponse(null, 404)
  }
};

export const main = middyfy(getProductById);
