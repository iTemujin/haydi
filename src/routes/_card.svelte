<script>
    let { product, productSee } = $props()


    let like =  $state(false)
</script>

<article
onclick={()=>{
    productSee = true
}}
class="product-card">
    <div class="img" style="background-image: url({product.image});">
        {#if like} 
            <button
            onclick={(e)=>{
                e.stopPropagation();
                like = false
            }}
            style="
                    background-color: #e11d48;
                    color: white;
                    " class="heart-btn fas fa-heart"></button>
        {:else}
            <button
            onclick={(e)=>{
                e.stopPropagation();
                like = true
            }}
            style="
                    background-color: white;
                    color: #333;
                    " class="heart-btn far fa-heart"></button>
        {/if}
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
        aspect-ratio: 1 / 1.5;  
        background-position: center;
        background-size: cover;
        position: relative; /* fontos! hogy a button absolute-olható legyen ide */
    }

    .heart-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1rem;
        border: none;
        cursor: pointer;
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 50%;
        box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease;
        
    }

    .heart-btn:hover {
        color: #db2777;
        transform: scale(1.1);
    }

    .heart-btn:active {
        transform: scale(1.2);
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

    @media screen and (max-width: 1300px) {
        .product-card {
            padding: 0px;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;

        }
    }


</style>
