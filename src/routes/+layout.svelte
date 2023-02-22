<script lang="ts">
	import { onMount } from "svelte";
    import { Modals, closeModal } from 'svelte-modals';

    onMount(() => {
        const kstText = document.getElementById('kstText') as HTMLElement;
        
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const intersecting = entry.isIntersecting;
                console.log(intersecting);
                kstText!.style.visibility = intersecting ? 'hidden' : 'visible';
            };
        }, { threshold: .25 });

        const logo = document.getElementById('kstLogo');
        observer.observe(logo!);
    });
</script>

<nav>    
    <span id="kstText">Kick Serve Tennis</span>
    <span>
        <svg height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ffffff;} </style> <g> <path class="st0" d="M507.316,126.733L138.349,97.498l-5.612-31.861c-5.154-29.076-28.294-51.611-57.524-55.942L9.677,0 L4.684,33.717l65.544,9.72c14.676,2.165,26.342,13.504,28.919,28.134l52.95,300.107c4.969,28.168,29.431,48.69,58.044,48.698 h229.728l6.828-34.102H210.142c-12.049,0.017-22.373-8.662-24.454-20.522l-7.42-41.992h283.58L507.316,126.733z"></path> <path class="st0" d="M223.148,438.658c-20.253,0-36.667,16.426-36.667,36.678c0,20.254,16.414,36.663,36.667,36.663 c20.258,0,36.675-16.409,36.675-36.663C259.823,455.084,243.405,438.658,223.148,438.658z"></path> <path class="st0" d="M386.068,438.658c-20.257,0-36.666,16.426-36.666,36.678c0,20.254,16.409,36.663,36.666,36.663 c20.258,0,36.68-16.409,36.68-36.663C422.748,455.084,406.327,438.658,386.068,438.658z"></path> </g> </g></svg>
    </span>
</nav>

<a href="/"><img id="kstLogo" src="https://kickserve.biz/kstlogo.png" alt="Kick Serve Tennis logo" height=150/></a>

<slot></slot>

<Modals>
    <div slot="backdrop" class="backdrop" on:click={closeModal}></div>
</Modals>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.50)
    }

    nav {
        display: flex;
        background: #507599;
        padding: 1em;
        border-bottom: 2px solid #729349;
        color: #fff;
        font-size: 1.25em;
        position: fixed;
        width: 100%;
        justify-content: space-between;
        box-sizing: border-box;
    }

    nav * {
        vertical-align: top;
        padding-top: 5px;
    }

    a {
        color: #fff;
    }

    svg {
        margin-top: -8px;
    }

    #kstLogo {
        position: relative;
        left: 10px;
        margin-top: 10px;
    }

    #kstText {
        display: block;
        visibility: hidden;
    }
</style>