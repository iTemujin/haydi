<script>
    let { productSee } = $props();

</script>

<div
class="product {productSee ? 'see':''}">
    <div class="bgimg"></div>
    <div class="main"></div>
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
        transform: scale(0);
        border-radius: 25%;
        transition: all 0.4s ease;
    }

    .product.see {
        transform: scale(1);
        border-radius: 0;
    }

    .bgimg {
        background-image: url('https://cdn.tatlerasia.com/tatlerasia/i/2023/03/28185238-bts-jungkook-calvin-klein-campaign-2023-underwear-model-kpop-ambassador-sp23-jung-kook-3-photo-credit-park-jong-ha-cropped_cover_1599x837.jpg');
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

    .bgimg::after {
        position: relative;
        display: block;
        content: '';
        width: 75%;
        height: 75%;
        background-image: url('https://cdn.tatlerasia.com/tatlerasia/i/2023/03/28185238-bts-jungkook-calvin-klein-campaign-2023-underwear-model-kpop-ambassador-sp23-jung-kook-3-photo-credit-park-jong-ha-cropped_cover_1599x837.jpg');
        background-position: center;
        background-size: cover;
    }

    

    .main {
        background-color: rgb(255, 255, 255);
        width: 50%;
        height: 100%;
    }
</style>