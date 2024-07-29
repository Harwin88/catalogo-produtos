import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];

export const PagensPagenWorpressDocument = gql`
    query PagensPagenWorpress {
  pages {
    edges {
      node {
        id
        content
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    PagensPagenWorpress(variables?: Types.PagensPagenWorpressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PagensPagenWorpressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PagensPagenWorpressQuery>(PagensPagenWorpressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PagensPagenWorpress', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;