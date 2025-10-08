<script>
    import { api } from '../../../convex/_generated/api.js';
    import { useConvexClient } from 'convex-svelte';

    const client = useConvexClient();

    let { name } = $props();

    let message = $state('');
 // vagy $props() alapján, ha dinamikus

    async function sendMessage(e) {
        e.preventDefault(); // ne frissítse az oldalt
        if (!message.trim()) return; // üres üzenet ne menjen el

        await client.mutation(api.tasks.send, {
            sender: name,
            text: message
        });

        message = '';
    }
</script>

<div class="main">
    <form on:submit={sendMessage}>
        <input
            type="text"
            placeholder="Type a message..."
            bind:value={message}
        />
        <button type="submit">></button>
    </form>
</div>

<style>
    .main {
        background-color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        min-height: 50px;
    }

    form {
        position: relative;
        width: 95%;
        height: 70%;
        font-size: 16px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        padding-left: 2%;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        font-size: 1.3rem;
        padding-right: 55px;
    }

    button {
        position: absolute;
        border: none;
        right: 1%;
        width: 50px;
        height: 90%;
        border-radius: 8px;
        color: white;
        background-color: rgb(0, 102, 255);
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(0, 80, 200);
    }
</style>
