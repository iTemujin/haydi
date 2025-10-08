<script>
    import { useQuery } from "convex-svelte";
    import { api } from "../../../convex/_generated/api.js";

    let query = useQuery(api.tasks.get, {});

    let { name } = $props();

    let messages;

    $effect(() => {
        if (messages) {
            messages.scrollTop = messages.scrollHeight;
        }
    })

</script>

<dev class="main" bind:this={messages}>
    {#if query.isLoading}
        <p style="background-color: black; padding:10px; color:red">Loading...</p>
    {:else if query.error}
        Upsz... something went wrong: {query.error.toString()}
    {:else}
        {#each query.data as message}
            <div class="message {message.sender === name ? 'you' : 'another'}">
                <p>{message.text}</p>
                <span>{message.sender}</span>
            </div>
        {/each}
    {/if}
</dev>

<style>
    .main {
        backdrop-filter: blur(8px);
        background-color: rgba(0, 0, 0, 0.2);
        position: relative;
        width: 100%;
        height: 90%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    .message {
        color: white;
        max-width: 60%;
        width: fit-content;
        margin: 10px;
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 5px;
        border-radius: 10px;
        font-size: 1.2rem;
        overflow-wrap: break-word;
    }

    .another { 
        background-color: rgb(128, 128, 128);
        margin-left: 10px;
    }

    .you {
        background-color: rgb(0, 102, 255);
        margin-left: auto;
    }

    span {
        font-size: 0.8rem;
        color: rgb(255, 255, 255);
    }

</style>