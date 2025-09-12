<script>
  // nincs külön script kell hozzá, csak ha dinamikus dolgokat akarsz
</script>

<style global>
  :root {
    --bg: #0b0f14;
    --text: #e6edf3;
  }

  body {
    margin:0;
    height:100%;
    font-family: ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial;
    color: var(--text);
    background:
      radial-gradient(1200px 600px at 10% -10%, hsla(200, 95%, 55%, 0.14), transparent 60%),
      radial-gradient(1000px 500px at 110% 10%, hsla(280, 92%, 60%, 0.12), transparent 50%),
      var(--bg);
    display: grid;
    place-items: center;
    padding: 32px;
  }
</style>

<h1>Ultra-modern háttér Svelte-ben!</h1>
