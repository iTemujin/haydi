<script>
	import { form } from "$app/server";

    let login = $state(false)

    let username = $state('')
    let password = $state('')
</script>

<div
class="user">
{#if login}
{:else}
    <form>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Continue</button>
    </form>
{/if}
</div>
 
<style>
    .user {
        color: var(--Contcolor);
        background-color: var(--_background);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        z-index: 101;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    button {
        color: white;
        padding: 15px 50px;
        background-color: transparent;
    }
</style>