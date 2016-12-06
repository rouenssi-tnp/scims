/** @flow */

import type { Action as AccountAction } from './account'
import type { Action as ArticleAction } from './article'
import type { Action as CategoryAction } from './category'
import type { Action as CommentAction } from './comment'

import type { State } from '../reducers'

export type Action
  = AccountAction
  | ArticleAction
  | CategoryAction
  | CommentAction
  | Thunk<State, Action>
