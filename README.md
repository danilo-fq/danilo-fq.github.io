# Portfólio — Danilo Ferreira

Meu portfólio pessoal, onde reúno quem eu sou, o que estou estudando e os projetos que venho construindo na transição para o desenvolvimento web.

🔗 **Site:** https://danilo-fq.github.io/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat&logo=github&logoColor=white)

## Sobre o projeto

Sou estudante do 2º período de Análise e Desenvolvimento de Sistemas na UNIPE e venho de uma graduação em Engenharia de Energias Renováveis. Este site nasceu como exercício das aulas de front-end e virou o lugar onde testo, na prática, o que aprendo: layout responsivo, componentes do Bootstrap, variáveis de CSS e um pouco de JavaScript.

A página é dividida em cinco blocos — apresentação, sobre, formação, habilidades e projetos — e termina com um rodapé de contato com minhas redes e um formulário.

É um projeto simples de propósito: sem framework, sem build, sem dependências instaladas. Só HTML, CSS e JS, publicados direto pelo GitHub Pages.

## O que tem na página

- **Apresentação** — quem sou, o que estou cursando e o que busco (estágio/júnior em desenvolvimento fullstack).
- **Sobre** — o resumo da minha transição de carreira.
- **Formação** — tabela com os cursos e o status de cada um.
- **Habilidades** — tags com as tecnologias e competências que estou desenvolvendo.
- **Projetos** — cards com link para os repositórios no GitHub.
- **Contato** — redes sociais, formulário e o ano atualizado automaticamente.

## Tecnologias

| Tecnologia | Onde entra |
|---|---|
| HTML5 | Estrutura semântica (`header`, `main`, `section`, `article`, `footer`) |
| CSS3 | Estilos próprios, variáveis e ajustes sobre o tema dark |
| Bootstrap 5.3.8 | Grid, navbar, cards, tabela, formulário e utilitários (via CDN) |
| JavaScript (vanilla) | Ano no rodapé e interações do formulário |
| Google Fonts | Fonte Roboto |
| GitHub Pages | Hospedagem estática a partir da branch `main` |

## Estrutura

```
.
├── index.html          # página única do portfólio
├── css/
│   └── style.css       # tema dark, tipografia e ajustes finos
├── scripts/
│   └── script.js       # ano automático e comportamento do formulário
└── img/
    └── foto.jpg        # foto de perfil
```

## Rodando localmente

Não tem instalação nem build. Basta abrir o `index.html` direto no navegador.

## Deploy

O site é publicado automaticamente pelo **GitHub Pages** a cada push na branch `main`, usando a raiz do repositório como origem (`main` / `/ (root)`). Não existe etapa de build — o que está no repositório é o que vai para o ar.

Para atualizar o site, é só commitar e dar push na `main`.

## Sobre o formulário

O layout do formulário está pronto, mas o envio ainda não está ligado a nenhum serviço — hoje ele é apenas visual. A ideia é integrar um serviço de formulário para sites estáticos (sem precisar de backend) para receber as mensagens por e-mail.

## Contato

- GitHub: [@danilo-fq](https://github.com/danilo-fq)
- LinkedIn: [danilo-fq](https://www.linkedin.com/in/danilo-fq/)
- Site: [https://danilo-fq.github.io/](https://danilo-fq.github.io/)

Se encontrar algum problema ou tiver uma sugestão, fico feliz com uma issue aberta no repositório.

## Licença

Sem licença definida por enquanto — é um projeto pessoal. O código está público e pode servir de referência para quem estiver aprendendo, mas não redistribua o conteúdo pessoal (textos e foto) como se fosse seu.

---

Feito por [Danilo Ferreira](https://github.com/danilo-fq).
