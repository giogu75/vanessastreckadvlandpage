# Vanessa Streck Escritório de Advocacia - Documentação do Projeto

## 📌 Visão Geral
Uma *landing page* profissional, moderna e de alta autoridade desenvolvida de forma singular para o escritório de advocacia Vanessa Streck. Com foco em transmitir confiança, alicerçada nos mais de 20 anos de tradição da marca e em sua expertise em Direito Previdenciário e Civil, o design utiliza uma paleta *premium* (bordô, preto e branco) baseada em princípios de responsividade rigorosa e UX (Experiência do Usuário).

---

## 🚀 Funcionalidades e Estrutura (Features)

### 1. Sistema de Cabeçalho (Header) Inteligente
- **Glassmorphism Sutil:** Fundo translúcido com filtro *blur* e transparência de `95%` para apresentar um visual polido frente aos conteúdos da rolagem.
- **Scroll Dinâmico:** Ao rolar a página para baixo, o cabeçalho reduz sua altura automaticamente e ganha uma sombra tênue, minimizando a distração durante a leitura, de forma manipulada via JavaScript.
- **Logo Oficial Redimensionado:** Imagem da marca em formato panorâmico ("LOGO VARIAÇÃO 1 - VERMELHO") que se adapta perfeitamente aos grids do desktop, tablet e aparelhos mobile de telas menores, mudando perfeitamente a sua dimensão total em CSS Media Queries ao escalar a janela.
- **CTA WhatsApp Premium:** Botão de chamada para ação central em formato "*pílula*" utilizando a cor oficial do WhatsApp (`#25D366`), construído com ícone SVG integrado, peso forte na fonte (`font-weight: 700`) e física de animação de elevação (`hover shadow`) ao pairar o mouse.

### 2. Navegação Mobile Interativa (Menu Celular)
- Implementação robusta contendo um **Menu Hambúrguer** que substitui as opções originais da Navbar por um modal de tela-cheia suave interposto.
- **Body Lock (Trava de Rolagem):** Garantindo acessibilidade em aparelhos celulares, ativamos dinamicamente uma classe `no-scroll` que remove todo o *scroll* físico do fundo da página caso o Menu esteja ativado. O usuário interage focadamente com os itens de tela.
- Fechamento dinâmico: Ao escolher um link, o recurso se desabilita por via de escutadores (`EventListeners`).

### 3. Eixo Vertical (Desktop Alignment Axis)
- Foi implementado um sistema invisível global em que todo o conteúdo (`main .container`) foi empurrado de maneira fluída à esquerda (`padding-left: 4rem`), obedecendo a linha de respiro original proveniente do *header* e de seu longo espaço com a logo horizontal final.
- **Reset Mobile:** Garantindo não estrangular o espaço estreito de pequenos celulares móveis, todo o alinhamento de eixo desaparece nativamente abaixo na quebra de proporção `992px`.

### 4. Seções Componentizadas do Site
*   **01. Início (Hero Section):** Sessão introdutória que utiliza transição `linear-gradient` opaca servindo com um escudo contra reflexos da imagem de fundo para realces nos textos (`Newsreader`, tipo serifado vs texto de suporte base `Inter`).
*   **02. Nossas Áreas / Serviços:** Grade dividida em que o Direito Previdenciário e Direito civil habitam *Cards* que abrem dinamicamente. Utilizam transição avançada nativamente via CSS `cubic-bezier` no instante que o mouse interage, promovendo efeito de tela profunda.
*   **03. Sobre o Escritório:** Design assimétrico utilizando caixa visual rígida para expor a contagem viva de "20+ Anos de Advocacia", e a tradição conectada a modernidade. 
*   **04. Nossa Equipe:** Cartão focado no perfil individual, suportando que em futuros crescimentos do escritório, apenas adicione-se dados ao `.team-grid`. Suporta ganho de escala lenta `scale(1.05)` da fotografia principal para retenção de interação do uso.
*   **05. Contato e Backend Integrado:** Todo o contate-nos opera por trás com submissão em *Ajax* e **Web3Forms API**. O JavaScript desativa imediatamente o botão via DOM (modificando-o para "Enviando..."), impedindo chamadas duplas por cliques duplos. As respostas dos servidores notificam ao usuário por mensagens assíncronas simples em vez de enviá-lo para fora da sessão atual.

### 5. Micro-interações Sistêmicas Adicionais
- **Scroll Reveal API:** O portal usa inteiramente `IntersectionObserver`. O navegador analisa matematicamente a tela do usuário para só acionar as caixas visuais do site via rolagem (`translateY`) se elas, de fato, invadirem o ângulo de leitura do visitante, gerando carregamentos em cascata esteticamente prazerosos.
- **Smooth Anchor Scrolling:** Links (`#sobre`,`#contato`) rolam a tela nativamente re-calculando ativamente os `100px` extras perdidos acima do local alvo por conta do encobrimento gerado pelo tamanho constante do *Header*.
- **Widget do Whatsapp Fixo:** Gatilho permanente e colorido sempre disponível a alcance dos celulares, fixo na parte inferior direita dos dispositivos (`bottom`/`right`), maximizando as taxas de conversão (CRO).

### 6. Segurança e Integridade de Conteúdo (Proteção Anticópia)
Implementamos uma camada de proteção ativa via JavaScript para dificultar a extração não autorizada de ativos e códigos:
- **Bloqueio de Menu de Contexto:** Desabilita o clique direito em toda a interface, impedindo o acesso rápido a "Salvar imagem" e "Inspecionar".
- **Interdição de DevTools:** Bloqueio de atalhos de sistema como `F12`, `Ctrl+Shift+I/J/C` e `Ctrl+U` (Ver código-fonte), protegendo a propriedade intelectual do layout.
- **Proteção contra Drag-and-Drop:** Imagens e links foram configurados como "não arrastáveis", evitando o download involuntário ou cópia rápida de arquivos para o desktop.
- **Bloqueio de Salvamento:** Desativação do atalho `Ctrl+S` para impedir a cópia local integral da estrutura do site.

---

## 🛠 Estack Tecnológico Arquitetural (Sem Dependências)
- **HTML5:** Totalmente semântico e categorizado, providenciando escalabilidade SEO por divisões com ID dinâmicas exclusivas.
- **CSS3 Vanilla Moderno:** Uso forte de variáveis de raízes unificadas (`:root`), Flexbox, CSS Grids Complexos, Filtros e animações de alta performance nativas. Sem frameworks engessados ou pacotes instaláveis como Bootstrap/Tailwind.
- **JavaScript (ES6+ Puro):** Responsável por ser um controlador fino que executa operações na Nuvem e processa elementos no navegador (como animações com temporizadores e modulação de classes) sem impactar no carregamento total do pacote principal do arquivo.
