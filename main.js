document.querySelectorAll('div.conc').forEach((i) => {
    i.addEventListener('click', () => {

        modal();

        let name = i.getAttribute('title');
        const conteudo = teste[name];

        const html = `
        <section class="design">
            <div class="header">
                <div class="search">
                    <div class="icon">
                        <span class="i-lock">
                            <svg width="15" height="21" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17C2 16.2044 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H20C20.7956 14 21.5587 14.3161 22.1213 14.8787C22.6839 15.4413 23 16.2044 23 17V26C23 26.7956 22.6839 27.5587 22.1213 28.1213C21.5587 28.6839 20.7956 29 20 29H5C4.20435 29 3.44129 28.6839 2.87868 28.1213C2.31607 27.5587 2 26.7956 2 26V17Z" stroke="#B3B3B3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 21.5C11 21.8978 11.158 22.2794 11.4393 22.5607C11.7206 22.842 12.1022 23 12.5 23C12.8978 23 13.2794 22.842 13.5607 22.5607C13.842 22.2794 14 21.8978 14 21.5C14 21.1022 13.842 20.7206 13.5607 20.4393C13.2794 20.158 12.8978 20 12.5 20C12.1022 20 11.7206 20.158 11.4393 20.4393C11.158 20.7206 11 21.1022 11 21.5Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 14V8C6 6.4087 6.68482 4.88258 7.90381 3.75736C9.12279 2.63214 10.7761 2 12.5 2C14.2239 2 15.8772 2.63214 17.0962 3.75736C18.3152 4.88258 19 6.4087 19 8V14" stroke="#B3B3B3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div class="url">
                        <p class="link">
                            https://Tec-Informatica/Trabalho1000/${conteudo.conteúdo.fonte.replace(/\s+/g, '')}
                        </p>
                    </div>
                </div>
                <div class="close">
                <span class="btn-close">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9M1 9L9 1" stroke="#AB1111" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
            </div>
            <div class="contain">
                <div class="init">
                    <h1 class="title">${conteudo.tema}</h1>
                </div>
                <div class="main">
                    <div class="image">
                        <img src="./Imagens/${name}.jpg" alt="" class="img">
                        <small class="caption">
                            ${conteudo.conteúdo.fonte}
                        </small>
                    </div>
                    <div class="box">
                        <p class="text">${conteudo.conteúdo.conceito}</p>
                    </div>
                </div>
            </div>
        </section>
        `;

        document.getElementById('modal').innerHTML = html;

        document.querySelector('.close').addEventListener('click', () => {
            document.querySelector('.modal').remove();
            document.body.style.overflow = 'auto';
        })
    });
});

function modal() {
    const back = document.createElement('div');
    back.className = 'modal';
    back.id = 'modal';

    document.body.style.overflow = 'hidden';

    document.body.appendChild(back);
}