<script>
    import { fade } from 'svelte/transition';
    let { productSee } = $props();
</script>

<div
transition:fade={{ duration: 300 }}
onclick={()=>{
    productSee.see = null
}}
class="product">
    <div style="background-image: url({productSee.see.img});" class="bgimg">
        <div style="background-image: url({productSee.see.img});" class="img"></div>
    </div>
    <div class="main">
        <h1 style="padding: 2rem;">{productSee.see.title}</h1>
    </div>
</div>

<style>
    .product {
        position: fixed;
        display: flex;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        overflow: hidden;
        transition: all 0.4s ease;
    }


    .bgimg {
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }

    .bgimg::before {
        position: absolute;
        content:'';
        backdrop-filter: blur(8px);
        width: 50%;
        height: 100%;
    }

    .img {
        position: relative;
        display: block;
        content: '';
        width: 75%;
        height: 75%;
        background-position: center;
        background-size: cover;
    }

    

    .main {
        background-color: rgb(255, 255, 255);
        width: 50%;
        height: 100%;
    }
</style>