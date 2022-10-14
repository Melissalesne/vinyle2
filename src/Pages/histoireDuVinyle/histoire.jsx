import React from "react";
import "./histoire.css";

export default function histoire() {
  return (
    <>
      <h1 className="titre_histoire">L'histoire du vinyle </h1>

      <div className="section-container ">
        <div className="image-histoire d-flex flex-wrap justify-content-center align-items-end mt-5">
          <img src="./assets/images/disque.png" alt="" />
        </div>
        <h4 className="title-histoire text-center mt-4">
          Qui à inventé le vinyle ?
        </h4>
        <p className="paragraphe">
          A la fin du <strong>XIXe siècle </strong>apparaît le disque 78 tours,
          un type de disque phonographique joué sur un gramophone mécanique,
          sous l’impulsion de l’ingénieur germano-américain{" "}
          <strong>Emile Berliner.</strong> Peu à peu, le gramophone est remplacé
          par le tourne-disque. Ce nouveau type de lecteur permet de jouer des
          morceaux de 3 minutes 30, soit des « tubes », et de 5 minutes pour la
          musique classique. A partir des années 1920, le disque 78 tours se
          démocratise en étant joué sur des juke-boxes (dans les bars,
          restaurants, magasins, hôtels…) et en radiodiffusion, tandis que
          l’amplification électronique permet d’obtenir un son plus puissant et
          fiable.
        </p>
        <h4 className="title-histoire text-center mt-4">
          Le vinyle le plus rare au monde
        </h4>
        <p className="paragraphe">
          Le vinyle d’un album de<strong>Bob Dylan</strong> considéré comme l’un
          des plus rares au monde a été mis en vente sur Ebay ce mardi au prix
          de 100 000 dollars. Il s’agit de
          <strong>
            « The Freewheelin » , sorti en 1963 sur Columbia Records.
          </strong>
          Cette album a permi à Bob Dylan d’accéder au cercle des génies de la
          musique, en gagnant la reconnaissance des professionnels et du public.
          Ce vinyle est spécial car c’est un exemplaire non censuré. Il possède
          quatre chansons supprimées du pressage final. La chaîne américaine
          CBS, propriétaire du label Columbia Records, exige le retrait du titre{" "}
          <strong> « Talkin’ John Birch Paranoid »</strong> , empêchant même
          l’artiste de présenter l’oeuvre satirique sur le plateau de{" "}
          <strong>Ed Sullivan Show.</strong>
          Les trois autres compositions sont mises à l’index. L’une des usines
          de pressage n’aurait pas reçu l’ordre de changer les morceaux, et
          aurait pressé un nombre infime de copies du vinyle original avec les
          quatre titres.
        </p>
        <h4 className="title-histoire text-center mt-4">
          Les vieux vinyles très recherchés
        </h4>
        <p className="paragraphe">
          Le top 10 des vinyles les plus recherchés <strong>Elvis</strong>{" "}
          compte parmi les très recherchés, <strong>les Beatles</strong>{" "}
          également. Mais, <strong>Double Fantasy de John Lennon </strong>
          fait beaucoup plus rage chez les collectionneurs. En effet, ce membre
          des Beatles a été assassiné par David Chapman après que celui-ci lui
          fasse dédicacer le disque. Ce disque est quasiment une pièce à
          conviction pour ce drame.{" "}
          <strong>
            Une première tentative de vente affiche 100.000 euros.
          </strong>{" "}
          Toutefois, cette démarche n’a pas été fructueuse bien que le disque
          soit extrêmement mythique. Parmi le top 10 des vinyles recherché, il y
          a aussi <strong>Bob Dylan et The Quarrymen.</strong>
        </p>
      </div>
    </>
  );
}
