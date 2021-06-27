import { Action } from "redux";

export type ArticleAction = {
  title?: string
  complete?: boolean
  }
  export type State = {
    data: Array<string>
    complete: Array<string>
  }