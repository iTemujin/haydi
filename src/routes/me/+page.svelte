<script></script>

<button 
onclick={ ()=>{
    alert('Button clicked!');
} } disabled>
    Off
</button>

<style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: var(--_button-bg, #007BFF);
        color: var(--_button-text, white);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: var(--_button-hover-bg, #0056b3);
    }


    button:disabled {
        background-color: var(--_button-disabled-bg, #cccccc);
        cursor: not-allowed;
    }
</style>