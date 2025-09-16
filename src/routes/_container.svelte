<script>
    export let products = [
        { image: "product1.jpg", title: "Termék 1", description: "Leírás 1", price: "$9.99" },
        { image: "product2.jpg", title: "Termék 2", description: "Leírás 2", price: "$12.99" },
        { image: "product3.jpg", title: "Termék 3", description: "Leírás 3", price: "$15.99" },
        { image: "product4.jpg", title: "Termék 4", description: "Leírás 4", price: "$19.99" }
    ];
</script>

<div class="product-grid">
    {#each products as product}
        <div class="product-card">
            <img src='./user.jpg' alt={product.title}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span class="price">{product.price}</span>
            <button>Add to Cart</button>
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
@media screen and (max-width: 480px) {
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
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    text-align: center;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4);
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

button {
    position: relative;
    padding: 10px 25px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255,255,255,0) 0%,
        rgba(200,180,255,0.25) 50%,
        rgba(255,255,255,0) 100%
    );
    transform: skewX(-20deg);
    pointer-events: none;
}

button:hover::before {
    animation: shine 1s ease forwards;
}

@keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
}
</style>