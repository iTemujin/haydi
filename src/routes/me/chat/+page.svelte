<script lang="ts">
    import  Chat  from './chat.svelte'
    import Login from './login.svelte'

    import { useQuery } from 'convex-svelte';
    import { api } from "../../../convex/_generated/api.js";

    const query = useQuery(api.tasks.get, {});

    let data = $state({name: null, login: false})
</script>

{#if !data.login}
    <Login {data} />
{:else}
    <Chat {data}/>
{/if}
<!-- 
{#if query.isLoading}
    <p>Loading...</p>
{:else if query.error}
    failed to load: {query.error.toString()}
{:else}
    <ul>
        {#each query.data as task}
            <li>
                {task.isComplete ? '✅' : '❌'}
                <span>{task.text}</span>
            </li>
        {/each}
    </ul>
{/if}
 -->
