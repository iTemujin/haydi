<script>
    let { title } = $props();
</script>

<div class="colorfull_button">
    {title}
</div>


<style>
    .colorfull_button {
        width: 90%;
        height: 4rem;
        background-color: transparent;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .colorfull_button:hover {
        transform: translateY(-2px) scale(1.05);
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        color: white;
        transition: 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .colorfull_button:active {
        transform: translateY(0) scale(1.1);
    }
</style>