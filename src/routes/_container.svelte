<script>
    import Card from './_card.svelte'
    import Product from './_product.svelte'

    let products = [
        { image: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1be69659-50e9-403d-b5e5-2804d131ad3e/IMG_4377.JPG", title: "Termék 1", description: "Leírás 1", price: "$9.99" },
        { image: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D", title: "Termék 2", description: "Leírás 2", price: "$12.99" },
        { image: "https://c4.wallpaperflare.com/wallpaper/523/513/195/snsd-yoona-im-yoona-korean-women-model-asian-hd-wallpaper-preview.jpg", title: "Termék 3", description: "Leírás 3", price: "$15.99" },
        { image: "https://w0.peakpx.com/wallpaper/334/1020/HD-wallpaper-jennie-blackpink-korean-singer-model-thumbnail.jpg", title: "Termék 4", description: "Leírás 4", price: "$19.99" },
        { image: "https://cdn.tatlerasia.com/tatlerasia/i/2023/03/28185238-bts-jungkook-calvin-klein-campaign-2023-underwear-model-kpop-ambassador-sp23-jung-kook-3-photo-credit-park-jong-ha-cropped_cover_1599x837.jpg", title: "Jungkook", description: "Jungkook", price: "$1 929 900,99"  },
       
        { image: "https://linguasia.com/wp-content/uploads/Han-Euddeum-1024x682.jpg", title: "Termék 1", description: "Leírás 1", price: "$9.99" },
        { image: "https://image.kpopmap.com/2022/08/kpop-idol-vs-model-twice-sana_9.jpg", title: "Termék 2", description: "Leírás 2", price: "$12.99" },
        { image: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg", title: "Termék 3", description: "Leírás 3", price: "$15.99" },
        { image: "https://cdn.mos.cms.futurecdn.net/TffczLphkRvUoKr2KHy72n.jpg", title: "Termék 4", description: "Leírás 4", price: "$19.99" },
        { image: "https://static.pullandbear.net/2/static2/itxwebstandard/responsive/genderselector/woman_m.jpg?ts=20250917021204", title: "Jungkook", description: "Jungkook", price: "$1 929 900,99"  },
        
        
    ];

    let productSee = $state(false)
</script>

<Product {productSee} />

<div class="product-grid">
    {#each products as product}
        <Card {product} {productSee} />
    {/each}
</div>

<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 15px; 
}

/* Mobilon két oszlop */
@media screen and (max-width: 600px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media screen and (min-width: 601px) and (max-width: 1300px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}
</style>