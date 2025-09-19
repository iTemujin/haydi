<script>
    let { product } = $props()
</script>

<article class="product-card">
    <div class="img" style="background-image: url({product.image});">
        <button class="heart-btn far fa-heart"></button>
    </div>
    <h2>{product.title}</h2>
    <span class="price">{product.price}</span>
</article>

<style>
    .product-card {
        padding: 5px;
        cursor: pointer;
        z-index: 20;
        gap: 0px;
        position: relative;
    }

    .img {
        width: 100%;
        height: 300px;
        background-position: center;
        background-size: cover;
        position: relative; /* fontos! hogy a button absolute-olható legyen ide */
    }

    .heart-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1rem;
        color: #333;
        background: none;
        border: none;
        cursor: pointer;
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
        transition: 0.2s ease;
    }

    .heart-btn:hover {
        color: #db2777;
        transform: scale(1.1);
    }

    .heart-btn:focus {
        outline: 3px solid rgba(219,39,119,0.55)
    }
    

    .heart-btn[disabled]{ opacity:0.6; cursor: not-allowed; }



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

    @media screen and (max-width: 780px) {
        .product-card {
            padding: 0px;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
        }
    }
</style>
