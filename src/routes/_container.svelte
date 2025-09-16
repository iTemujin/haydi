<script>
    export let products = [
        { image: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1be69659-50e9-403d-b5e5-2804d131ad3e/IMG_4377.JPG", title: "Termék 1", description: "Leírás 1", price: "$9.99" },
        { image: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D", title: "Termék 2", description: "Leírás 2", price: "$12.99" },
        { image: "https://c4.wallpaperflare.com/wallpaper/523/513/195/snsd-yoona-im-yoona-korean-women-model-asian-hd-wallpaper-preview.jpg", title: "Termék 3", description: "Leírás 3", price: "$15.99" },
        { image: "https://w0.peakpx.com/wallpaper/334/1020/HD-wallpaper-jennie-blackpink-korean-singer-model-thumbnail.jpg", title: "Termék 4", description: "Leírás 4", price: "$19.99" }
    ];
</script>

<div class="product-grid">
    {#each products as product}
        <div class="product-card">
            <img src={product.image} alt={product.title}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span class="price">{product.price}</span>
        </div>
    {/each}
</div>

<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 15px; 
}

/* Mobilon két oszlop */
@media screen and (max-width: 780px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2px;
        padding: 0px;
    }
}

/* Product card */
.product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px) saturate(180%);
    text-align: center;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    backdrop-filter: blur(8px);
    padding-bottom: 10px;
    z-index: 10;
}

.product-card:hover {
    z-index: 11;
}

.product-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    color: #fff;
    text-shadow: 0 0 5px #a777e3, 0 0 10px #a777e3, 0 0 20px #6e8efb;
}

p {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.8);
}

.price {
    font-size: 0.9rem;
    font-weight: bold;
    color: #a777e3;
}


</style>