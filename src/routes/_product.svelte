<script>
    import { fade } from 'svelte/transition';
    let { productSee } = $props();
</script>


<div
transition:fade={{ duration: 300 }}
class="product">
    <div class="frist episode">
        <div style="background-image: url(https://4kwallpapers.com/images/wallpapers/jungkook-bts-south-1080x2160-9554.jpg);" class="img"></div>
        <div class="content">
            <h1>{productSee.see.title}</h1>
            <p>{productSee.see.price}</p>
            <button>Kosarba</button>
        </div>
    </div>
    <div class="second episode">
        <div class="content"></div>
        <div style="background-image: url(https://i.pinimg.com/originals/eb/6b/da/eb6bda5b32e330ba0174c87bbd90f2e1.gif);" class="img"></div>
    </div>

    <div class="three episode">
        <div style="background-image: url(https://i.pinimg.com/736x/dd/19/d2/dd19d2f020e41deb631922a3604fa77b.jpg);" class="img"></div>
        <div class="content"></div>
    </div>
</div>

<style>
    .product {
        position: fixed;
        overflow-x: hidden;
        inset: 0;
        background-color: rgb(255, 255, 255);
        z-index: 200;
    }

    .episode {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: 80vh;
        margin-bottom: 10vh;
    }

    .img {
        position: relative;
        width: 40%;
        height: 100%;
        background-position: center;
        background-size: cover;

    }

    .content {
        width: 50%;
        height: 100%;
    }

    .frist .img {
        left: 10vw;
    }

    .frist .content {

        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    


    .second .content {
        
    }

    .second .img {
        right: 4vw;
    }

    .three .img {
        left: 3vw;
    }

</style>