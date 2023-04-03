/* eslint-disable react/style-prop-object */
import React from 'react';
import Menu from '../Menu';
import images from "../images/JavaScript.png";
import images1 from "../images/php.webp";
import images2 from "../images/html-css.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../App.css";
import{
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import{
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {useState} from "react";
import SortableItem from "../SortableItem";
function Formation() {
  const [languages, setLanguages]=useState(["Javascript","Python","TypeScript"]);
  
  return (
    <>
    <div>
      
      <Menu />
      
      <h1 align="center">Nos Formations</h1>
      <div class="card-group" id="imagesJavascript">
        <div class="card" >
          <img src={images} class="card-img-top" alt="Jascript" />
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 pour l'interpréter.

              JavaScript est aussi employé pour les serveurs Web6 avec l'utilisation par exemple de Node.js7 ou de Deno8.

              JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.

              C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.

              JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20179.</p>

          </div>
        </div>
        <div class="card">
          <img src={images1} class="card-img-top" alt="PHP" />
          <div class="card-body">
            <h5 class="card-title">PHP</h5>
            <p class="card-text">JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 pour l'interpréter.

              JavaScript est aussi employé pour les serveurs Web6 avec l'utilisation (par exemple) de Node.js7 ou de Deno8.

              JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.

              C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.

              JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20179.</p>

          </div>
        </div>
        <div class="card">
          <img src={images2} class="card-img-top" alt="HTML et CSS" />
          <div class="card-body">
            <h5 class="card-title">HTML et CSS</h5>
            <p class="card-text">JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 pour l'interpréter.

              JavaScript est aussi employé pour les serveurs Web6 avec l'utilisation (par exemple) de Node.js7 ou de Deno8.

              JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.

              C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.

              JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20179.</p>

          </div>
        </div>
      </div>
      
      
    

    </div>
   
    <div>
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      >
        <Container id ="p-3">
          <h3>Les langages de programmations</h3>
          <SortableContext items={languages}
          strategy={verticalListSortingStrategy}
          >
            {languages.map(language => <SortableItem key={language} id={language}/>)}
          </SortableContext>
          </Container>
    </DndContext>
    </div>
    </>
  );
  function handleDragEnd(event){
    console.log("Drag and colled");
    const {active,over}=event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);
    if(active.id !== over.id){
      setLanguages((items)=>{
        const activeIndex=items.indexOf(active.id);
        const overIndex=items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      })
    }
  }
}

export default Formation;