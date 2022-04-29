<script>
    import ArticleEditor from './ArticleEditor.svelte'
    import ArticleViewer from './ArticleViewer.svelte'

    export let link, local

    $: editing = false

    async function content() {
        const url = `${link}?r=${Math.random()}`
        const res = await fetch(url)
        if(res.status != 200) throw "Не удалось загрузить запрашиваемый ресурс."
        content = await res.text()
        return content
    }

    const viewerParams = {content}
    const editorParams = {content, link}
</script>

{#if local}
    <p>local</p>
{/if}
{#if editing}
    <ArticleEditor {...editorParams} />
{:else}
    <ArticleViewer {...viewerParams} />
{/if}
