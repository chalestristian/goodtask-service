import { Express, json } from 'express'
import { bodyParser, contentType} from './middlewares/'

export default function setupMiddlewares (app: Express): void {
  app.use(bodyParser)
  app.use(contentType)
  app.use(json());
}