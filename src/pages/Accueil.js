import React from 'react';
import Menu from '../Menu.js';
import images from "../images/code.jpg"

function Accueil(props) {
    return (
        <div>
            <Menu/>
            <h1 align="center">Aprendre la programation </h1>
            <div class="card">
            <img  src={images} class="card-img-top" alt="code"/>
            <div class="card-body">
            <h5 class="card-title">React</h5>
            <p class="card-text">Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.

Des vues déclaratives rendent votre code plus prévisible et plus facile à déboguer.

À base de composants
Créez des composants autonomes qui maintiennent leur propre état, puis assemblez-les pour créer des interfaces utilisateurs complexes.

Dans la mesure où les composants sont écrits en JavaScript plutôt que sous la forme de gabarits, vous pouvez facilement utiliser des données complexes dans vos applications et garder l’état hors du DOM.

Utilisable partout
Comme nous ne présumons rien sur les autres technologies que vous utilisez, vous pouvez développer de nouvelles fonctionnalités avec React sans avoir à réécrire votre code existant.

React peut aussi être utilisé côté serveur avec Node, ou pour créer des applications mobiles grâce à React Native.</p>
           
            </div>
</div>

        </div>
    );
}

export default Accueil;