# Diretrizes de Segurança e Proteção de Conteúdo

Este documento detalha as medidas técnicas implementadas para a proteção da propriedade intelectual e ativos visuais do escritório Vanessa Streck Advocacia.

## 🛡️ Camadas de Proteção (Anticópia)

Para mitigar a extração de código e salvamento não autorizado de fotos e textos, foram implementados os seguintes escutadores de eventos (`EventListeners`) no arquivo `main.js`:

### 1. Bloqueio de Menu de Contexto
Desabilita globalmente o clique direito do mouse em qualquer parte da página.
- **Objetivo:** Impedir o acesso rápido às funções "Salvar imagem como...", "Copiar endereço da imagem" e "Inspecionar".

### 2. Bloqueio de Atalhos de Desenvolvedor (Anti-DevTools)
Captura e cancela sequências de teclas conhecidas que abrem ferramentas de inspeção:
- `F12` (Atalho universal de DevTools).
- `Ctrl+Shift+I` (Inspect).
- `Ctrl+Shift+J` (Console).
- `Ctrl+Shift+C` (Element Selector).
- `Ctrl+U` (Ver código-fonte da página).
- `Ctrl+S` (Salvar página completa localmente).

### 3. Proteção contra Drag-and-Drop (Imagens Inarrastáveis)
Cancela o evento `dragstart` para elementos de mídia.
- **Objetivo:** Impedir que usuários "arrastem" fotos da equipe ou do escritório diretamente para o desktop ou para uma nova aba do navegador.

## 🍪 Política de Cookies e Privacidade

Como parte do compromisso com a privacidade e conformidade com a LGPD:
- **Zero Cookies:** O site **não armazena cookies** de rastreamento no navegador do usuário.
- **Métricas Externas:** Não há scripts de terceiros (Analytics/Tracking) coletando dados de navegação no momento.
- **Formulários:** Os dados submetidos pelo formulário de contato são transmitidos via SSL diretamente para processamento e não são salvos em bancos de dados locais inseguros.

## ⚠️ Limitações Técnicas
É importante notar que, embora essas barreiras desencorajem o plágio, elas não o tornam impossível para usuários com conhecimento técnico avançado. A melhor proteção é a monitoria constante da integridade da marca Vanessa Streck na web.
