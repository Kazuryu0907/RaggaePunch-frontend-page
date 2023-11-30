/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreatePostInput = {
  adults: Scalars['Int']['input'];
  checked: Scalars['Boolean']['input'];
  childrens: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  time: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostModel;
  updateCheck: PostModel;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationUpdateCheckArgs = {
  id: Scalars['Int']['input'];
};

export type PostModel = {
  __typename?: 'PostModel';
  adults: Scalars['Int']['output'];
  checked: Scalars['Boolean']['output'];
  childrens: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<PostModel>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  postAdded: PostModel;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<(
    { __typename?: 'PostModel' }
    & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
  )> | null };

export type UpdateCheckMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UpdateCheckMutation = { __typename?: 'Mutation', updateCheck: (
    { __typename?: 'PostModel' }
    & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
  ) };

export type PostAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PostAddedSubscription = { __typename?: 'Subscription', postAdded: (
    { __typename?: 'PostModel' }
    & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
  ) };

export type PostFragmentFragment = { __typename?: 'PostModel', id: string, name: string, time: string, checked: boolean } & { ' $fragmentName'?: 'PostFragmentFragment' };

export const PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"checked"}}]}}]} as unknown as DocumentNode<PostFragmentFragment, unknown>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"checked"}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const UpdateCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCheck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCheck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"checked"}}]}}]} as unknown as DocumentNode<UpdateCheckMutation, UpdateCheckMutationVariables>;
export const PostAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"postAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"postFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"postFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"checked"}}]}}]} as unknown as DocumentNode<PostAddedSubscription, PostAddedSubscriptionVariables>;



export function useGetPostsQuery(options?: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostsQuery, GetPostsQueryVariables>({ query: GetPostsDocument, ...options });
};


export function useUpdateCheckMutation() {
  return Urql.useMutation<UpdateCheckMutation, UpdateCheckMutationVariables>(UpdateCheckDocument);
};


export function usePostAddedSubscription<TData = PostAddedSubscription>(options?: Omit<Urql.UseSubscriptionArgs<PostAddedSubscriptionVariables>, 'query'>, handler?: Urql.SubscriptionHandler<PostAddedSubscription, TData>) {
  return Urql.useSubscription<PostAddedSubscription, TData, PostAddedSubscriptionVariables>({ query: PostAddedDocument, ...options }, handler);
};