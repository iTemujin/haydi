<script>
    import Output  from './output.svelte';
    import Input from './input.svelte';
    let { data } = $props();
    const name = data.name
</script>

<div class="main">
    <Output {name}/>
    <Input {name}/>
</div>

<style>
    .main {
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
</style>