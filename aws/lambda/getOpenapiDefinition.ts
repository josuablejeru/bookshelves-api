import { toApiResult } from "./utils"
import openapi from './generated/openapi.json'

export const handler = async () => {

  return toApiResult(200, openapi)
}