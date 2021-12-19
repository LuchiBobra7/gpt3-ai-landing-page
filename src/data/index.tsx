import { request } from 'graphql-request'
import { SERVER_API_ENDPOINT } from 'config/env'
import {
  GetPostsQuery,
  GetPostsDocument,
} from './queries/__generated__/getPosts'
import { POSTS_PER_PAGE } from 'constants/items'

export const getPosts = async (limit: number = POSTS_PER_PAGE) => {
  const result = await request<GetPostsQuery>(
    SERVER_API_ENDPOINT,
    GetPostsDocument,
    { limit }
  )

  const { posts } = result ?? {}

  return posts
}
