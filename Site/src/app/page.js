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