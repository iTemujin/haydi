<script>
    let { data } = $props();
</script>

<div class="chat-login">
    <form on:submit={()=>{
        data.login = true;
    }}>
        <input bind:value={data.name} type="name" placeholder="Your name..." required/>
        <button type="submit">Send</button> 
    </form>
</div>

<style>
    .chat-login {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 250px;
        height: 100px;
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
    }

    input {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: #007BFF;
        color: white;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #0056b3;
    }
</style>