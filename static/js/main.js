$( document ).ready(()=>{
    ga();
});

const ga = () =>{
    var imported = document.createElement('script');
    imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-180630857-1';
    document.head.appendChild(imported);


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-180630857-1');
};