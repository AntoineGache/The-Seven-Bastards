const template = document.createElement('template');
template.innerHTML = `
  <header>
        <div id="logo">
            <img src="../../images/logo_light.png" >
            <link href="main_page.css" type="text/css" rel="stylesheet"/>
        </div>
        <div id="slogan">
            <p class="sloganL">N°1 DANS LA</p>
            <p class="sloganL">CREATION DE</p>
            <p class="sloganL">CONCOURS</p>
            <p class="sloganL">D'ART</p>
        </div>
        <div id="profil">
            <img width="60vh" class="icon" src="../../images/icons/user_light.svg">
            <div id="ecritureProfil">
                <h2>ADMINISTRATEUR</h2>
                <h3><strong>login</strong></h3>
            </div>
        </div>
    </header>
    <div id="contenueCentrale">
        <div id="contenueCentraleG">
            <h2>concours à venir</h2>
            <label>"concours a venir"</label>
        </div>
        <div id="contenueCentraleD">
            <slot name="contenu"></slot>
        </div>
    </div>
    <footer>
        <div id="imagefooter">
            <a href="https://www.x.com/"><img src="../../images/logo-x.png"/></a>
            <a href="https://www.instagram.com/"><img src="../../images/logo-instagram.png"/></a>
            <a href="https://www.linkedin.com/"><img src="../../images/logo%20linkedin%20transparent%20background.png"/></a>
            <a href="https://www.facebook.com/"><img src="../../images/logo facebook blanc transparent background.png"/></a>
        </div>
        <p>The 7 bastards © Art Contests Creators<p>
    </footer>
`;

class PageTemplate extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('page-template', PageTemplate);