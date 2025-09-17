<script>
	import { form } from "$app/server";
	import { fade } from "svelte/transition";

    let { ico } = $props();

    let login = $state(false)

    let username = $state('')
    let password = $state('')
</script>

<div
transition:fade={{duration: 300}}
class="user">


{#if login}
{:else}
    <form>
            <button
    onclick={ico.user = false}
    style="
    z-index:106;
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;">
        <i
        class="fas fa-xmark text-black text-lg"></i>
    </button>
        <h1>Please give email</h1>
        <input type="email" placeholder="Email">
        <button class="from_button">Continue</button>
    </form>
{/if}
</div>
 
<style>
input {
    height: 3rem;
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    padding: 0 1rem;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
    border-color: #6e8efb;
    box-shadow: 0 0 0 3px rgba(110, 142, 251, 0.15);
}

h1 {
    font-family: 'Segoe UI', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 1rem;
}

.user {
    background: #fafafa;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 101;
}

form {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 90%;
    max-width: 400px;
    text-align: center;
}

.from_button {
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.15s ease;
}

.from_button:hover {
    background: linear-gradient(135deg, #5a7cf3, #9465dc);
    transform: translateY(-2px);
}

</style>