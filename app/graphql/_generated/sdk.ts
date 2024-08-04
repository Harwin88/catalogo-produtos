import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];

export const PageByIdDocument = gql`
    query PageById($id: ID!) {
  page(id: $id) {
    id
    content
  }
}
    `;
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
    PageById(variables: Types.PageByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PageByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PageByIdQuery>(PageByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PageById', 'query', variables);
    },
    PagensPagenWorpress(variables?: Types.PagensPagenWorpressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PagensPagenWorpressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PagensPagenWorpressQuery>(PagensPagenWorpressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PagensPagenWorpress', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;