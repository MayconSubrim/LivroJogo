var inicio = `<main id="back">
<span class="textozada">O menino que se alimentava de pesadelos</span>
<img class="start" src="/imagens/5ABE.gif" alt="">
</main>`;


var pagina1 = `<h3>apenas para testes</h3>
        <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/11/jojo-stone-ocean-1.jpg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis sint facilis eveniet, vero quas modi velit excepturi praesentium nulla nihil enim qui doloribus eaque, officia accusamus vel unde rerum recusandae cumque. Quod dolore atque nulla, autem doloribus, deleniti, laboriosam veniam ratione repellendus magnam ut ea minus ad error enim aut ipsam iste sed eius labore. Expedita, sequi fugit. Distinctio quia, vitae possimus reiciendis, corrupti culpa molestiae aperiam at sunt asperiores, ab odit exercitationem voluptatum doloribus cumque veniam rem totam! Iusto sapiente facilis, odio debitis voluptatibus repellendus ipsum quasi consectetur blanditiis reprehenderit. Culpa optio aperiam, ullam cumque distinctio atque harum ab mollitia, animi ea, deserunt ratione temporibus dolore reiciendis. Unde architecto temporibus numquam voluptate aspernatur. Quisquam, eius cum? Velit quae id illum provident esse nesciunt adipisci voluptates doloribus autem, facilis tenetur consequuntur ullam harum nemo fugit. Fugit, vel sint. Dolor voluptas quas molestiae reprehenderit, facere placeat labore fuga accusantium quasi ad tempora, cupiditate veritatis optio nam fugit iure? Explicabo suscipit doloremque sapiente ab. Incidunt repellendus voluptatem optio sapiente dolorem. Eveniet illo fugiat labore aperiam inventore ut explicabo repellendus. Numquam ad necessitatibus sequi, quasi deleniti commodi optio eaque ducimus minima velit explicabo dolorem quis. Rerum nam expedita provident rem. Odio, minus.</p>
        <button onclick="carregarConteudo(pagina2)">ir para esquerda</button>
        <button onclick="carregarConteudo(pagina3)">ir para direita</button>`;

var pagina2 = `<h3>apenas para testes</h3>
<img src="https://criticalhits.com.br/wp-content/uploads/2021/06/jojo4.jpg" alt="">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis sint facilis eveniet, vero quas modi velit excepturi praesentium nulla nihil enim qui doloribus eaque, officia accusamus vel unde rerum recusandae cumque. Quod dolore atque nulla, autem doloribus, deleniti, laboriosam veniam ratione repellendus magnam ut ea minus ad error enim aut ipsam iste sed eius labore. Expedita, sequi fugit. Distinctio quia, vitae possimus reiciendis, corrupti culpa molestiae aperiam at sunt asperiores, ab odit exercitationem voluptatum doloribus cumque veniam rem totam! Iusto sapiente facilis, odio debitis voluptatibus repellendus ipsum quasi consectetur blanditiis reprehenderit. Culpa optio aperiam, ullam cumque distinctio atque harum ab mollitia, animi ea, deserunt ratione temporibus dolore reiciendis. Unde architecto temporibus numquam voluptate aspernatur. Quisquam, eius cum? Velit quae id illum provident esse nesciunt adipisci voluptates doloribus autem, facilis tenetur consequuntur ullam harum nemo fugit. Fugit, vel sint. Dolor voluptas quas molestiae reprehenderit, facere placeat labore fuga accusantium quasi ad tempora, cupiditate veritatis optio nam fugit iure? Explicabo suscipit doloremque sapiente ab. Incidunt repellendus voluptatem optio sapiente dolorem. Eveniet illo fugiat labore aperiam inventore ut explicabo repellendus. Numquam ad necessitatibus sequi, quasi deleniti commodi optio eaque ducimus minima velit explicabo dolorem quis. Rerum nam expedita provident rem. Odio, minus.</p>
<button>ir para esquerda</button>
<button>ir para direita</button>`;

var pagina3 = `<h3>apenas para testes</h3>
<img src="https://pipocatime.files.wordpress.com/2020/06/jojo-capa.jpg" alt="">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis sint facilis eveniet, vero quas modi velit excepturi praesentium nulla nihil enim qui doloribus eaque, officia accusamus vel unde rerum recusandae cumque. Quod dolore atque nulla, autem doloribus, deleniti, laboriosam veniam ratione repellendus magnam ut ea minus ad error enim aut ipsam iste sed eius labore. Expedita, sequi fugit. Distinctio quia, vitae possimus reiciendis, corrupti culpa molestiae aperiam at sunt asperiores, ab odit exercitationem voluptatum doloribus cumque veniam rem totam! Iusto sapiente facilis, odio debitis voluptatibus repellendus ipsum quasi consectetur blanditiis reprehenderit. Culpa optio aperiam, ullam cumque distinctio atque harum ab mollitia, animi ea, deserunt ratione temporibus dolore reiciendis. Unde architecto temporibus numquam voluptate aspernatur. Quisquam, eius cum? Velit quae id illum provident esse nesciunt adipisci voluptates doloribus autem, facilis tenetur consequuntur ullam harum nemo fugit. Fugit, vel sint. Dolor voluptas quas molestiae reprehenderit, facere placeat labore fuga accusantium quasi ad tempora, cupiditate veritatis optio nam fugit iure? Explicabo suscipit doloremque sapiente ab. Incidunt repellendus voluptatem optio sapiente dolorem. Eveniet illo fugiat labore aperiam inventore ut explicabo repellendus. Numquam ad necessitatibus sequi, quasi deleniti commodi optio eaque ducimus minima velit explicabo dolorem quis. Rerum nam expedita provident rem. Odio, minus.</p>
<button>ir para esquerda</button>
<button>ir para direita</button>`;

var elemento = document.getElementById("conteudo");
function carregarConteudo(conteudo) {
  elemento.innerHTML = conteudo;
}


var pagina = document.getElementById("corpo");

function troca(){
        pagina.classList.toggle("altocontraste");
        pagina.classList.remove("altocontraste1", "altocontraste2");

}
function troca1(){
        pagina.classList.toggle("altocontraste1");
        pagina.classList.remove("altocontraste", "altocontraste2");
}
function troca2(){
        pagina.classList.toggle("altocontraste2");
        pagina.classList.remove("altocontraste1", "altocontraste3");
}

carregarConteudo(inicio)
