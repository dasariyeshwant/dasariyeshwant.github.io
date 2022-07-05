const contactTemplate = document.createElement('template');
contactTemplate.innerHTML = `
    <style>
        .contact-section {
            width: 100%;
            background: #4A154B;
            padding: 15px 5%;
            color: #ffffff;
            box-sizing: border-box;
        }
        * {
            box-sizing: inherit;
        }
        h2 {
            font-size: 1rem;
            font-weight: 700;
            margin-top: 0;
        }
        h3 {
            font-size: 1.2rem;
            font-weight: 700;
            padding: 0 25px;
        }
        .contact-info-container {
            
        }
        .contact-info-container > p {
            padding: 5px 10px;
            background: #4675B8;
            margin-bottom: 0; 
        }
        .contact-form {
            background: #000000;
            padding: 5px 10px;
            height: 300px;
        }
        input {
            background: transparent;
            border: none;
            width: 90%;
        }
        input:focus {
            border: none;
            color: #ffffff;
            outline: none;
        }
    </style>
    <div class="contact-section">
        <h2>Got a Project in Mind?</h2>
        <h3>Let's Talk</h3>
        <div class="contact-info-container">
            <p>Shoot me an email</p>
            <div class="contact-form">
                <div> &gt; Enter your name</div>
                &gt; <input name="visitorName" id="visitorName"/>
            </div>
        </div>
    </div>
`;

class Contact extends HTMLElement {
    visitorName = '';
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(contactTemplate.content.cloneNode(true));
        console.log('this is: ', this.shadowRoot.getElementById('visitorName'));
        console.log('this is 1: ', this.shadowRoot.querySelector('#visitorName'));
        this.shadowRoot.getElementById('visitorName').addEventListener('keypress', (event) => this.saveName(event))
            
    }
    saveName(event) {
        if (event.keyCode === 13) {
            event.disabled = true;
            console.log('I am being pressed: ', event.target.value);
        }
       
    }
}

customElements.define('contact-section', Contact, {extends: 'section'});