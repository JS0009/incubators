import { MarkdownRouter } from '@yababay67/hash-router'
import Article from './components/Article'

class ArticleRouter extends MarkdownRouter {

    async getComponent() {
        if (this.link === '/') return await super.getComponent()
        super.showDynamic()
        if (this.link.startsWith('content/')) {
            const html = await this.fetchMarkdown(true)
            return <Article url={this.link} markdown={this.markdown} html={this.html} />
        }
        return false
    }

    showError(err) {
        console.log(err)
    }
}

export default ArticleRouter
