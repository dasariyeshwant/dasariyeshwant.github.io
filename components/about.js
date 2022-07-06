const aboutTemplate = document.createElement('template');

aboutTemplate.innerHTML = `
    <style>
        .about-section {
            width: 100%;
            background: #FBD050;
            position: relative;
            padding-bottom: 20px;
        }
        p {
            padding: 0 15px;
        }
        
        p:first-of-type {
            margin: 0;
        }

        .profile-img-container {
            position: relative;
        }
        .camera-pic {
            width: 100%;
            position: absolute;
        }
        .profile-pic {
            width: 100%;
        }
        h2 {
            position: absolute;
            font-weight: 700;
            font-size: 2rem;
            right: 50px;
            top: 0;
        }
        .hide-on-mobile {
            display: none;
        }
        @media only screen and (min-width: 600px) {
            h2 {
                font-size: 2.5rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
        @media only screen and (min-width: 768px) {
            .about-section {
                display: flex;
            }
            p {
                font-size: 1rem;
            }
            h2 {
                position: relative;
                text-align: center;
            }
            .hide-on-mobile {
                display: block;
            }
            .hide-on-tablet-and-up {
                display: none;
            }
            .profile-pic {
                width: 125%;
            }
            .about-para {
                z-index: 1;
            }
        }
        @media only screen and (min-width: 992px) {
            h2 {
                font-size: 3rem;
            }
            p {
                font-size: 1.3rem;
            }
        }
        @media only screen and (min-width: 1200px) {
            p {
                font-size: 1.6rem;
            }
        }
    </style>
    <div class="about-section">
        <div class="profile-img-container">
              <img class="profile-pic" src="./assets/images/profile-camera-pic2.png"/>
        </div>
        <h2 class="hide-on-tablet-and-up">About</h2>
        <div class="about-para">
            <h2 class="hide-on-mobile">About</h2>
            <p>
                Hi, I’m Yeshwant. I Front-end Engineer with over 7 years of experience in developing rich and
                engaging client side applications using Javascript and
                latest libraries and frameworks available. Apart from being
                Front-end Engineer, I am also a full stack javascript developer who specializes in creating API’s using Node and express.
            </p>
            <p>
            I also enjoy training and mentoring other fellow developers or people who want to get into front-end world.
            </p>
        </div>
    </div>
`;

class About extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(aboutTemplate.content.cloneNode(true));
    }
}
customElements.define('about-section', About);