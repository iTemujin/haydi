<script>
    import Button from '$lib/button.svelte';
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    let { ico } = $props();

    let test = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Careers'];
    let ide = $state(['', '', '', '', '', '']);
    
    $effect(() => {
        if (ico.menu) {
            console.log('Menu opened');
            for (let i = 0; i < test.length; i++) {
                setTimeout(() => {
                    ide = test.slice(0, i + 1);
                }, 200 * i);
            }
        }
    });
</script>

<div transition:fade={{duration: 300}}  class="menu">
    <button
    onclick={ico.menu = false}
    style="
    position: absolute;
    top: 1rem;
    left: 1rem;">
        <i
        class="fas fa-xmark text-black text-lg"></i>
    </button>

    
    <div class="container mycontainer">
            {#each ide as option}
            <div transition:fly={{ duration:2300, x:-300 }} style="width:100%; display:flex; justify-content:center;"><Button title={option} /></div>
        {/each}
    </div>
</div>
   
<style>
    .menu {
        color: var(--Contcolor);
        backdrop-filter: blur(8px);
        position: fixed;
        inset: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mycontainer {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }


</style>