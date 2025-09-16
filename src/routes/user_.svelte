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
    left: 1rem;">
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
        background-color: rgba(255, 255, 255, 0.75);
        border: none;
        border-radius: 4px;
        color: var(--Contcolor);
        box-shadow: inset 0 0 4px 0px black;
    }

    h1 {
        font-family: 'Orbitron', 'Segoe UI', sans-serif; /* futurisztikus, techno hatás */
        font-size: 3rem; /* nagy és hangsúlyos */
        letter-spacing: 2px; /* levelek közti távolság */
        font-size: 2rem;
        color: white;
        text-shadow: 0 0 8px black;
    }

    .user {
        color: var(--Contcolor);
        background-image: url("user.jpg");
        background-position: center;
        background-size: cover;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        z-index: 101;
    }


    form {
        backdrop-filter: blur(8px);
        box-shadow: 0 0 15px 1px rgba(30, 30, 30, 0.25);
        z-index: 102;
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
        width: 100vw;
        height: 100vh;
        max-width: 600px;
    }

.from_button {
    position: relative;
    padding: 15px 50px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.from_button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255,255,255,0) 0%,
        rgba(200, 180, 255, 0.25) 50%, /* lila fény */
        rgba(255,255,255,0) 100%
    );
    transform: skewX(-20deg);
    pointer-events: none;
}

.from_button:hover::before {
    animation: shine 1s ease forwards;
}

@keyframes shine {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

</style>