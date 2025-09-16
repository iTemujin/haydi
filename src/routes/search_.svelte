<script>
	import { fade } from "svelte/transition";

    let searchNow_ = $state('');

    let { ico } = $props();

</script>

<div transition:fade={{ duration: 300 }} class="search">
    <div onclick={ico.search = false} class="background"></div>
	<input bind:value={searchNow_} type="text" placeholder="Search..." />
</div>

<style>
/* Háttér a kereső mögött */
.background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%);
}

/* Kereső input */
.search input {
  border: none;
  background-color: var(--_input-bg);
  position: absolute;
  margin-top: 5vh;
  width: 80%;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;
  outline: none;
  transition: all 0.7s ease;
  color: var(--_Contcolor);
}

.search input::placeholder {
  color: var(--_input-placeholder);
}

.search input:focus {
  outline: none;
  border-color: var(--_pointer);
  box-shadow: 0 0 0 2px var(--_accent-muted);
  background-color: var(--_input-bg);
  color: var(--_Contcolor);
}

.search input:not(:placeholder-shown) {
	transform: scale(1.1);
}


/* Kereső overlay */
.search {
  justify-content: center;
  z-index: 101;
  position: fixed;
  width: 100vw;
  height: 100vh;
  border-bottom: 1px solid var(--_Contcolor);
  top: 0;
  left: 0;
  display: flex;

  pointer-events: auto;
}

.search.open {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}

</style>