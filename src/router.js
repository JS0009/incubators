import { MarkdownRouter } from "@yababay67/hash-router"
import Article from './components/Article.svelte'
import ErrorHolder from './components/ErrorHolder.svelte'

class ArticleRouter extends MarkdownRouter {
    async getComponent(){
        if(this.link.startsWith('content/')) return Article
        return false
    }

    static showError(error){
        new ErrorHolder({target: MarkdownRouter.prepareDynamic(), props: {error}})
    }
}

export default ArticleRouter
