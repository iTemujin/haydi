<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg'; 
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let { children } = $props();



  import Menu from './menu_.svelte';
  import Search from './search_.svelte';
  import User from './user_.svelte'



	let ico = $state({'menu': false, 'search': false, 'user': false, 'cart': false});
	
  function thisopen(event) {
    for (let key in ico) {
      ico[key] = false
    }

		let name = event.currentTarget.dataset.ico;
		ico[name] = !ico[name];
		if (name === 'search' && ico.search) {
			setTimeout(() => {
				document.querySelector('.search input')?.focus();
			}, 450);
		}
	}





</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <title>H a y d i h a</title>
</svelte:head>



<header>
	<button class="ico {ico.menu ? "be":""}" data-ico=menu on:click={thisopen} style="left: 1rem;"><i class="fas fa-bars"></i></button>
	<button class="ico {ico.search ? "be":""}"  data-ico=search on:click={thisopen} style="left: 3.5rem;"><i class="fas fa-magnifying-glass"></i></button>
	<button class="ico {ico.user ? "be":"" }" data-ico=user on:click={thisopen} style="right: 3.5rem;"><i class="fas fa-user-circle"></i></button>
	<button class="ico {ico.cart ? "be":""}" data-ico=cart on:click={thisopen} style="right: 1rem;"><i class="fas fa-shopping-cart"></i></button>
</header>

{#if ico.menu}
  <Menu {ico} />
{:else if ico.search}
  <Search {ico} />
{:else if ico.user}
  <User {ico} />
{/if}




<style>
:root {
  --_Contcolor: #1f2937;          /* sötétszürke, megbízható */
  --_pointer: #4f46e5;            /* modern kék-lila kiemelés */
  --_accent-muted: rgba(79, 70, 229, 0.2); /* hover / fókusz finom szín */
  --_background: #f9fafb;         /* világos háttér */
  --_input-bg: #ffffff;           /* input mező háttér */
  --_input-placeholder: #9ca3af;  /* halvány placeholder */
  --_input-border: #d1d5db;       /* input alap border */
}


/* Header */
header {
  position: fixed;
  backdrop-filter: blur(8px);
  top: 0;
  z-index: 100;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--_Contcolor);
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

header::before {
  content: "Haydi";
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--_Contcolor);
  letter-spacing: 0.05em;
}

header::after {
  content: "Ha";
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  padding: 1px 6px;
  color:#ffffff;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 4px;
  letter-spacing: 0.05em;
  margin-left: 0.2rem;
}

/* Ikonok */
.ico {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--_Contcolor);
  transition: all 0.5s ease;
  border-radius: 6px;
  padding: 0.3rem;
}

.ico.be {
  transition: all 0.3s ease-in-out;
  transform: scale(1.1) translateY(-2px);
  color: transparent;
}
</style>











<main style="top: 4rem; position: relative;">
	{@render children?.()}
</main>