# POC5 - React

## Alunos:

* Caio Sampaio. RA: 10391053;
* Guilherme Picoli. RA: 10389843;
* Caio Filardi. RA: 10341128.

## Enunciado

Na sua POC você deve explicar o funcionamento dos seguintes conceitos de REACT, usando Next.js:
- Estrutura de Projeto NextJS 14 ou superior
- Criação de componentes simples (sem estado)
- Estilo CSS (global e módulo). 

## POC 5

Para essa POC, criamos uma galeria de imagens que simula uma galeria de obras de artes da Escola Nacional de Belas Artes da França.

### **Estrutura de Projeto NextJS 14 ou superior**:

Inicialmente, criaremos o projeto em NextJS 14 com o comando `npx create-next-app@latest nome-do-projeto`. Em seguida, escolheremos as seguintes configurações de projeto:

- Would you like to use TypeScript? ... **No**
- Would you like to use ESLint? ... **Yes**
- Would you like to use Tailwind CSS? ... **No**
- Would you like your code inside a `src/` directory? ... **Yes**
- Would you like to use App Router? (recommended) ... **Yes**
- Would you like to use Turbopack for next dev? ... **No**
- Would you like to customize the import alias (@/* by default)? ... **No**

![image](https://github.com/user-attachments/assets/c17cff2b-e40d-4a01-8858-18c0a47be6be)

Após a finalização das instalações de pacotes e geração de pastas, acrescentaremos duas novas pastas ao projeto (>src>app): 'assets', para imagens e mídias que gostaríamos de usar no nosso site, e 'components', para os componentes React/NextJS que iremos criar.

![image](https://github.com/user-attachments/assets/72251066-7a9f-412a-8a70-ff6f48fddaef)

Assim, temos na pasta principal os arquivos de configuração (como o package.json, jsconfig.json, next.config.mjs e etc.), pastas de pacote (>.next e >node-modules) e a pasta >src>app, dedicada ao Website.

Trabalharemos com os arquivos layout.js (manteremos como está), globals.css e page.js (limparemos para usar como desejarmos), page.module.css (manteremos o que foi gerado, mas acrescentaremos outros estilos) e com as pastas >assets e >components criadas.

### Criação de componentes simples (sem estado):  

Como o nosso site visa simular uma exposição de  obras de artes da Escola Nacional de Belas Artes da França, criaremos o arquivo "quadro.jsx" para o componente chamado "Quadro" na pasta >components. Sua função retornará um `<figure></figure>` contendo uma imagem (`<img/>`) da obra e um figure caption (`<figcaption></figcaption>`) com o nome da obra, nome do autor e o ano da produção. O código deverá ser assim:

```
export default function Quadro({url, titulo, autor, ano}){
    return (
        <figure>
            <img alt={titulo + '. ' + autor + ', ' + ano + '.'} src={url}/>
            <figcaption>{titulo + '. ' + autor + ', ' + ano + '.'}</figcaption>
        </figure>
    );
}
```

Posteriormente, devemos chamar esse componente na "page.js", responsável por renderizar a home do nosso Website. Como o conteúdo arquivo "page.js" foi apagado anteriormente, devemos criar uma nova função home():

```
export default function Home() {
  return (
  );
}
```

Importaremos o componente "quadro" criado com o comando `import Quadro from "./components/quadro";` e o usaremos como o elemento `<Quadro/>`. Para a página principal, criaremos uma `<main></main>` que englobará todos os demais elementos, um título e uma `<div></div>` para os quadros. O elemento `<Quadro/>` precisará dos atributos "url", "titulo", "autor" e "ano" (definidos no componente "quadro"). O código completo será:

```
import Quadro from "./components/quadro";

export default function Home() {
  return (
    <main>
      <h1>École Nationale Supérieure des Beaux-Arts</h1>
      <div>
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg" titulo="O Nascimento de Vênus" autor="Alexandre Cabanel" ano="1863"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/0/0d/Alexandre_Cabanel%2C_Ophelia.JPG" titulo="Ophelia" autor="Alexandre Cabanel" ano="1883"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/2/25/Alexandre-Louis_Leloir_-_Interlude_musical.jpg" titulo="Um interlúdio musical" autor="Alexandre-Louis Leloir" ano="1874"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg" titulo="A Morte de Sócrates" autor="Jacques-Louis David" ano="1787"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/9/9e/Gustave_Moreau_-_Piet%C3%A0.jpg" titulo="Pietà" autor="Gustave Moreau" ano="1854"/>

        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg" titulo="Dança no Le Moulin de la Galette" autor="Pierre-Auguste Renoir" ano="1876"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/e/e5/Cupid_and_Psyche_by_Fran%C3%A7ois-%C3%89douard_Picot.jpg" titulo="L'Amour et Psyché" autor="François-Édouard Picot" ano="1817"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg" titulo="Mulher com sombrinha - Madame Monet e seu filho" autor="Claude Monet" ano="1875"/>

        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/4/4e/David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg" titulo="Retrato de Antoine-Laurent Lavoisier e sua esposa" autor="Jacques-Louis David" ano="1788"/>
      
      </div>
    </main>
  );
}
```

Assim, já é possível visualizar os quadros:

![image](https://github.com/user-attachments/assets/6f7b97ad-50a9-48ce-9ea6-e608127a83f7)

Todavia, o site não possui estilos. Esse problema será abordado na próxima sessão.


### Estilo CSS (global e módulo):

O React/NextJS nos permite trabalhar com os estilos de forma global (para todo o site) ou de forma modular (para os componentes ou páginas criadas). Utilizaremos ambos os modos no nosso site.

Começaremos pela forma global para alteramos a cor de plano de fundo do site. Em "globals.css", localizado na pasta >src>app, deveremos inserir o seguinte código (esse arquivo foi previamente limpo):

```
body{
    background-color:rgb(250, 227, 181);
}
```

A alteração de cor de fundo torna-se imediatamente visível:

![image](https://github.com/user-attachments/assets/deb3b863-7707-445e-b8e7-bb29deda48f9)

Seguindo, partiremos para a forma modular com o arquivo "page.module.css". Esse arquivo é gerado automaticamente durante a criação do projeto e apenas acrescentaremos duas novas classes (não será necessário apagar o conteúdo presente do arquivo).

```
.escolaPage{
  text-align: center;
  width: 100%;
  height: 100%;
}

.escolaPage h1{
  color: brown;
}

.galeria{
  display: flex;
  flex-wrap: wrap;
}
```

Para fazer uso do estilo de módulo, deveremos importá-lo em seu elemento: o arquivo "page.js". Nele, faremos o import do estilo e chamaremos as classes criadas nos elementos `<main></main>` e na `<div></div>` para os quadros. Utilizaremos o `className={pageStyles.[classe]}` para isso. O código da "page.js" ficará da seguinte forma:

```
import pageStyles from "./page.module.css";
import Quadro from "./components/quadro";

export default function Home() {
  return (
    <main className={pageStyles.escolaPage}>
      <h1>École Nationale Supérieure des Beaux-Arts</h1>
      <div className={pageStyles.galeria}>
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg" titulo="O Nascimento de Vênus" autor="Alexandre Cabanel" ano="1863"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/0/0d/Alexandre_Cabanel%2C_Ophelia.JPG" titulo="Ophelia" autor="Alexandre Cabanel" ano="1883"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/2/25/Alexandre-Louis_Leloir_-_Interlude_musical.jpg" titulo="Um interlúdio musical" autor="Alexandre-Louis Leloir" ano="1874"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg" titulo="A Morte de Sócrates" autor="Jacques-Louis David" ano="1787"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/9/9e/Gustave_Moreau_-_Piet%C3%A0.jpg" titulo="Pietà" autor="Gustave Moreau" ano="1854"/>

        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg" titulo="Dança no Le Moulin de la Galette" autor="Pierre-Auguste Renoir" ano="1876"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/e/e5/Cupid_and_Psyche_by_Fran%C3%A7ois-%C3%89douard_Picot.jpg" titulo="L'Amour et Psyché" autor="François-Édouard Picot" ano="1817"/>
      
        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg" titulo="Mulher com sombrinha - Madame Monet e seu filho" autor="Claude Monet" ano="1875"/>

        <Quadro url="https://upload.wikimedia.org/wikipedia/commons/4/4e/David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg" titulo="Retrato de Antoine-Laurent Lavoisier e sua esposa" autor="Jacques-Louis David" ano="1788"/>
      
      </div>
    </main>
  );
}
```

Assim, o site mudou para:

![image](https://github.com/user-attachments/assets/19733b15-2ddf-470a-bd81-ee81268e86cf)

Entretanto, os quadros não possuem estilo e não remetem a uma exposição. O mais adequado seria aplicarmos um estilo modular ao componente "quadro.jsx" criado. Para isso, criaremos um arquivo chamado "quadro.module.css" em >src>app>components. Nele colocaremos o código:

```
.quadro {
    width: 400px;
    text-align: center;
}

.quadro img {
    width: 100%;
    padding: 10px;
    background-image: url(../assets/frame1.png);
    background-size: 100% 100%;
}

.quadro figcaption {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 10px;
}
```

Note que em "`.quadro img`" foi definido a Background Image "frame1.png". Essa imagem em .png foi inserida na pasta >src>app>assets.

![frame1](https://github.com/user-attachments/assets/68bb9e37-3f1f-428b-a918-30a11bac411f)

Semelhante a home, importaremos os estilos para os quadros no componente "Quadro". Após importar o estilo, basta chamar a classe na `<figure></figure>`. Confira o código completo abaixo:

```
import styles from "./quadro.module.css";

export default function Quadro({url, titulo, autor, ano}){
    return (
        <figure className={styles.quadro}>
            <img alt={titulo + '. ' + autor + ', ' + ano + '.'} src={url}/>
            <figcaption>{titulo + '. ' + autor + ', ' + ano + '.'}</figcaption>
        </figure>
    );
}
```

Os resultados são:

![image](https://github.com/user-attachments/assets/a79c8a2a-6195-444b-b588-567bcc58e281)

![image](https://github.com/user-attachments/assets/1cff024f-9aa7-4c80-836c-fc98bdc0f655)

![image](https://github.com/user-attachments/assets/960a6002-0e23-454a-b99c-9c355fbb4dde)

A estrutura final do Projeto ficou da seguinte maneira:

![image](https://github.com/user-attachments/assets/ccb52585-8586-41e7-b5ec-1ad597f04811)
