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
            overflow: auto;
        }
        input {
            background: transparent;
            border: none;
            width: 90%;
            color: #ffffff;
        }
        input:focus {
            border: none;
            color: #ffffff;
            outline: none;
        }
        .email-section {
            display: none;
        }
        .content-section {
            display: none;
        }
        .confirmation-section {
            display: none;
        }
        .success-section {
            display: none;
        }
        .error-section {
            display: none;
        }
        .email-side-note {
            font-size: 0.8rem;
        }
        .sorry-element {
            margin: 0;
            color: red;
            font-size: 0.8rem;
        }
    </style>
    <div class="contact-section">
        <h2>Got a Project in Mind?</h2>
        <h3>Let's Talk</h3>
        <div class="contact-info-container">
            <p>Shoot me an email <span class="email-side-note">(press enter key after filling details)</span></p>
            <div class="contact-form">
                <form>
                    <div class="name-section" id="name-section">
                        <div> &gt; Enter your name</div>
                        <div id="visitorNameContainer">
                            &gt; <input type="text" name="visitorName" id="visitorName" tabindex="-1"/>
                        </div>
                    </div>
                    <div class="email-section" id="email-section">
                        <div> &gt; Enter your Email</div>
                        <div id="visitorEmailContainer">
                            &gt; <input type="email" name="visitorEmail" id="visitorEmail" tabindex="-1"/>
                        </div>
                    </div>
                    <div class="content-section" id="content-section">
                        <div> &gt; Enter your Message</div>
                        <div id="visitorMessageContainer">
                            &gt; <input name="visitorMessage" id="visitorMessage" tabindex="-1"/>
                        </div>
                    </div>
                    <div class="confirmation-section" id="confirmation-section">
                        <div> &gt; Are you Sure you want to send the above message? (Y/N)</div>
                        <div id="visitorConfirmationContainer">
                            &gt; <input name="visitorConfirmation" id="visitorConfirmation" tabindex="-1"/>
                        </div>
                    </div>
                    <div class="success-section">
                        <div> &gt; Your message was sent successfully.</div>
                    </div>
                    <div class="error-section">
                        <div> &gt; Resetting, Please wait...</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

class Contact extends HTMLElement {
    visitorName = '';
    visitorEmail = '';
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(contactTemplate.content.cloneNode(true));
        this.shadowRoot.getElementById('visitorName').addEventListener('keypress', (event) => this.saveDetails(event));
        this.shadowRoot.getElementById('visitorEmail').addEventListener('keypress', (event) => this.saveDetails(event));
        this.shadowRoot.getElementById('visitorMessage').addEventListener('keypress', (event) => this.saveDetails(event));
        this.shadowRoot.getElementById('visitorConfirmation').addEventListener('keypress', (event) => this.saveDetails(event));
            
    }
    validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    saveDetails(event) {
        if (event.keyCode === 13) {
            event.disabled = true;
            if (event.target.name === 'visitorName') {
                if (event.target.value.trim() === '') {
                    const box = this.shadowRoot.getElementById('name-section');
                    const nameElement = this.shadowRoot.getElementById('visitorNameContainer');
                    const divElement = document.createElement('div');
                    const symbolElement = document.createElement('div');
                    symbolElement.innerHTML = '&gt;';
                    divElement.appendChild(symbolElement);
                    const sorryElement = document.createElement('p');
                    sorryElement.setAttribute('class', 'sorry-element');
                    sorryElement.innerHTML = 'Sorry, try again.';
                    divElement.appendChild(sorryElement);
                    box.insertBefore(divElement, nameElement);
                    this.shadowRoot.getElementById('visitorName').value = "";
                    this.shadowRoot.getElementById('visitorName').scrollIntoView();
                } else {
                    this.visitorName = event.target.value;
                    this.shadowRoot.getElementById('visitorName').setAttribute('disabled', true);
                    this.shadowRoot.querySelector('.email-section').style.display = 'block';
                    this.shadowRoot.querySelector('#visitorEmail').focus();
                }

            }
            if (event.target.name === 'visitorEmail') {
                if (this.validateEmail(event.target.value)) {
                    this.visitorEmail = event.target.value;
                    this.shadowRoot.getElementById('visitorEmail').setAttribute('disabled', true);
                    this.shadowRoot.querySelector('.content-section').style.display = 'block';
                    this.shadowRoot.querySelector('#visitorMessage').focus();
                } else {
                    const box = this.shadowRoot.getElementById('email-section');
                    const nameElement = this.shadowRoot.getElementById('visitorEmailContainer');
                    const divElement = document.createElement('div');
                    const symbolElement = document.createElement('div');
                    symbolElement.innerHTML = `&gt; ${event.target.value}`;
                    divElement.appendChild(symbolElement);
                    const sorryElement = document.createElement('p');
                    sorryElement.setAttribute('class', 'sorry-element');
                    sorryElement.innerHTML = 'Sorry, try again.';
                    divElement.appendChild(sorryElement);
                    box.insertBefore(divElement, nameElement);
                    this.shadowRoot.getElementById('visitorEmail').value = "";
                    this.shadowRoot.getElementById('visitorEmail').scrollIntoView();
                }
            }
            if (event.target.name === 'visitorMessage') {
                if (event.target.value.trim() === '') {
                    const box = this.shadowRoot.getElementById('content-section');
                    const nameElement = this.shadowRoot.getElementById('visitorMessageContainer');
                    const divElement = document.createElement('div');
                    const symbolElement = document.createElement('div');
                    symbolElement.innerHTML = `&gt;`;
                    divElement.appendChild(symbolElement);
                    const sorryElement = document.createElement('p');
                    sorryElement.setAttribute('class', 'sorry-element');
                    sorryElement.innerHTML = 'Sorry, try again.';
                    divElement.appendChild(sorryElement);
                    box.insertBefore(divElement, nameElement);
                    this.shadowRoot.getElementById('visitorMessage').value = "";
                    this.shadowRoot.getElementById('visitorMessage').scrollIntoView();
                } else {
                    this.shadowRoot.getElementById('visitorMessage').setAttribute('disabled', true);
                    this.shadowRoot.querySelector('.confirmation-section').style.display = 'block';
                    this.shadowRoot.querySelector('#visitorConfirmation').focus();
                }
            }
            if (event.target.name === 'visitorConfirmation') {
                if (event.target.value.trim().toLowerCase() === 'y' || event.target.value.trim().toLowerCase() === 'yes') {
                    this.shadowRoot.getElementById('visitorConfirmation').setAttribute('disabled', true);
                    this.shadowRoot.querySelector('.name-section').style.display = 'none';
                    this.shadowRoot.querySelector('.email-section').style.display = 'none';
                    this.shadowRoot.querySelector('.content-section').style.display = 'none';
                    this.shadowRoot.querySelector('.confirmation-section').style.display = 'none';
                    this.shadowRoot.querySelector('.success-section').style.display = 'block';
                    setTimeout(() => {
                        this.shadowRoot.querySelector('.name-section').style.display = 'block';
                        this.shadowRoot.querySelector('form').reset();
                        this.shadowRoot.getElementById('visitorName').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorEmail').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorMessage').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorConfirmation').removeAttribute('disabled');
                        this.shadowRoot.querySelector('.success-section').style.display = 'none';
                    }, 5000);
                } else if (event.target.value.trim().toLowerCase() === 'n' || event.target.value.trim().toLowerCase() === 'no') {
                    this.shadowRoot.getElementById('visitorConfirmation').setAttribute('disabled', true);
                    this.shadowRoot.querySelector('.name-section').style.display = 'none';
                    this.shadowRoot.querySelector('.email-section').style.display = 'none';
                    this.shadowRoot.querySelector('.content-section').style.display = 'none';
                    this.shadowRoot.querySelector('.confirmation-section').style.display = 'none';
                    this.shadowRoot.querySelector('.error-section').style.display = 'block';
                    setTimeout(() => {
                        this.shadowRoot.querySelector('.name-section').style.display = 'block';
                        this.shadowRoot.querySelector('form').reset();
                        this.shadowRoot.getElementById('visitorName').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorEmail').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorMessage').removeAttribute('disabled');
                        this.shadowRoot.getElementById('visitorConfirmation').removeAttribute('disabled');
                        this.shadowRoot.querySelector('.error-section').style.display = 'none';
                    }, 5000);
                } else {
                    const box = this.shadowRoot.getElementById('confirmation-section');
                    const nameElement = this.shadowRoot.getElementById('visitorConfirmationContainer');
                    const divElement = document.createElement('div');
                    const symbolElement = document.createElement('div');
                    symbolElement.innerHTML = `&gt; ${event.target.value}`;
                    divElement.appendChild(symbolElement);
                    const sorryElement = document.createElement('p');
                    sorryElement.setAttribute('class', 'sorry-element');
                    sorryElement.innerHTML = 'Sorry, try again.';
                    divElement.appendChild(sorryElement);
                    box.insertBefore(divElement, nameElement);
                    this.shadowRoot.getElementById('visitorConfirmation').value = "";
                    this.shadowRoot.getElementById('visitorConfirmation').scrollIntoView();
                }
            }
        }
       
    }
}

customElements.define('contact-section', Contact);