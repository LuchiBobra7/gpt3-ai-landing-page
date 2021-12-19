import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type GetPostsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', slug?: string | null | undefined, title?: string | null | undefined, image?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined }> };


export const GetPostsDocument = gql`
    query getPosts($first: Int) {
  posts(first: $first, orderBy: createdAt_DESC) {
    slug
    title
    image {
      url
      thumbnail: url(
        transformation: {image: {resize: {width: 610, height: 344, fit: crop}}, document: {output: {format: webp}}}
      )
      blurDataURL: url(
        transformation: {image: {resize: {width: 10, height: 10, fit: crop}}, document: {output: {format: webp}}}
      )
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetPostsDocumentString = print(GetPostsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPosts(variables?: GetPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetPostsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPostsQuery>(GetPostsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPosts');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;