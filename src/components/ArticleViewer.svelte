<script>
    import ErrorHolder from './ErrorHolder.svelte'
    import Showdown from 'showdown'
    const converter = new Showdown.Converter()
    export let content
</script>

{#await content() then content}
    {@html converter.makeHtml(content)}
{:catch error}
    <ErrorHolder {error} />
{/await}

