function gerar() {
    let min = 1
    let max = 20
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('section#resultado')

    switch (num) {
        case 0:
            res.innerHTML = `<h2>Biscoitinho de Alho com Queijo</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/TnEenXXXyI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 1:
            res.innerHTML = `<h2>Linguiça Assada, Macarronese e Arroz</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/y8K2YLgCHrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 2:
            res.innerHTML = `<h2>Cookie de Nescau</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/H13wNhXQIw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 3:
            res.innerHTML = `<h2>Panqueca</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/sSraK9VaoBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 4:
            res.innerHTML = `<h2>Biscoitinho de Coco</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/BALQnawTwt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 5:
            res.innerHTML = `<h2>Bolo de Chocolate com Morangos</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/GCndRVFPrBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 6:
            res.innerHTML = `<h2>Oniom Rings com Queijo</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/K8mYnHXaWPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 7:
            res.innerHTML = `<h2>Bolo de Água</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWniCEkQ8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 8:
            res.innerHTML = `<h2>Moqueca de Peixe e Camarão</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/RohIjiJ80ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 9:
            res.innerHTML = `<h2>Bolo Choconinho</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/uZq608qPVa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 10:
            res.innerHTML = `<h2>Bolo de Banana</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ceBxlp3wyzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 11:
            res.innerHTML = `<h2>Frango e Creme de Milho</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/L8sTTvPYuOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 12:
            res.innerHTML = `<h2>Cachorro Quente no Palito</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/KiAz4Jde2vM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 13:
            res.innerHTML = `<h2>Paella de Frutos do Mar</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/5qMAaYt219g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 14:
            res.innerHTML = `<h2>Risoto de Camarão</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dRgP0wQa5zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 15:
            res.innerHTML = `<h2>Torta Banoffee</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/um-5z8cWzG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 16:
            res.innerHTML = `<h2>Cuca de Banana com Doce de Leite</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8isYx5WpijQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 17:
            res.innerHTML = `<h2>Torta Salgada</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/LPHEl6wom4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 18:
            res.innerHTML = `<h2>Ragu de Carne com Polenta Cremosa</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/dBzqCe-oMgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 19:
            res.innerHTML = `<h2>Arroz com Pinhão e Linguiça</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/1YOpgq5zmIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 20:
            res.innerHTML = `<h2>Brigadeiro Fit</h2>`
            res.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/7Qou44kgz8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
    }    
}