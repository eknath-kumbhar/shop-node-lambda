import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Products } from 'src/products.controller';

import schema from './schema';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  try {
    return formatJSONResponse(await new Products().getAll());
  } catch (error) {
    return formatJSONResponse({ message: error.message }, 404)
  }
};

export const main = middyfy(getProductsList);
