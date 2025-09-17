<script>
    let { product } = $props()
</script>

<div class="product-card">
    <div class="img" style="background-image: url({product.image});"></div>
    <h2>{product.title}</h2>
    <span class="price">{product.price}</span>
</div>

<style>
    .product-card {
        padding: 5px;
        cursor: pointer;
        z-index: 20;
        gap: 0px;
    }

    @media screen and (max-width: 780px) {
    .product-card {
        padding: 0px;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

    .product-card:hover {
        z-index: 21
    }

    h2 {
        position: relative;
        font-family: 'Orbitron', sans-serif;
        font-size: 1rem;
        left: 0.5rem;
    }

    .price {
        position: relative;
        left: 0.5rem;
        font-size: 0.9rem;
        font-weight: bold;
    }
    
    .img {
        width: 100%;
        height: 300px;
        background-position: center;
        background-size: cover;
    }
</style>