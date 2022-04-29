import settings from './settings.json'
import { setRouter } from '@yababay67/hash-router'
import ArticleRouter from './router'

if(settings.withHashRouting){
    setRouter(ArticleRouter)
}
