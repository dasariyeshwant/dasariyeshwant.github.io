const introductionTemplate = document.createElement('template');
introductionTemplate.innerHTML = `
    <style>
        .intro {
            position: relative;
        }
        .intro-typing-img {
            width: 7.5rem;
            height: 8rem;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
        }
        .intro-message-container {
            position: relative;
        }
        .intro-message-img {
            width: 100%;
        }
        
        p {
            margin: 0;
            font-size: 0.8rem;
        }
        h2 {
            margin-top: 5px;
            margin-bottom: 0;
            font-weight: 700;
            display: inline-block;
        }
        .display-cursor:after {
            content: var(--pseudo-cursor);
        }
        #para2:after {
            animation: blink 0.5s step-end infinite alternate;
        }
        .text-over {
            position: relative;
            margin: 0;
        }
        .text-over figcaption {
            position: absolute;
            top: 25%;
            padding: 0 8%;
        }
        .intro-message-img-desktop {
            display: none;
        }

        @keyframes blink {
            50% {
                content: '';
            }
        }
        
        @media only screen and (min-width: 400px) {
            p {
                font-size: 1rem;
            }
            .intro-typing-img {
                width: 8rem;
                height: 9rem;
            }
        }
        @media only screen and (min-width: 480px) {
            p {
                font-size: 1.3rem;
            }
            .intro-typing-img {
                width: 9rem;
                height: 10rem;
            }
        }
        @media only screen and (min-width: 600px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1.6rem;
            }
            .intro-typing-img {
                width: 12rem;
                height: 13rem;
            }
        }
        @media only screen and (min-width: 768px) {
            h2 {
                font-size: 1.3rem;
            }
            p {
                font-size: 1rem;
            }
            .intro-typing-img, .intro-message-img {
                display: none;
            }
            .intro-message-img-desktop {
                display: block;
                width: 100%
            }
            .text-over figcaption {
                left: 50%;
                top: 20%;
            }
        }
        @media only screen and (min-width: 992px) {
            h2 {
                font-size: 1.6rem;
            }
            p {
                font-size: 1.3rem;
            }
        }
        @media only screen and (min-width: 1200px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
    </style>
    <div class="intro">
        <img class="intro-typing-img" src="./assets/images/intro-typing-mobile.jpeg"/>
        <div class="intro-message-container">
            <figure class="text-over">
                <img class="intro-message-img" src="./assets/images/intro-message-mobile.jpeg"/>
                <img class="intro-message-img-desktop" src="./assets/images/intro-desktop.jpeg"/>
                <figcaption>
                    <h2 id="headerText"></h2>
                    <p id="para1"></p>
                    <p id="para2"></p>
                </figcaption>
            </figure>
        </div>
    </div>
`
class Introduction extends HTMLElement {
    headerTextIndex = 0;
    para1Index = 0;
    para2Index = 0;
    headerText = 'Hello World!';
    para1Text = 'Front-end Developer, Full-Stack developer & mentor. I develop web applications passionately, and I love what I do.';
    para2Text = 'Get Ready to turn your ideas into reality!';
    constructor() {
        super();
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(introductionTemplate.content.cloneNode(true));
        this.typeWriter();
    }
    

    typeWriter() {
        if ( this.headerText && this.headerTextIndex <  this.headerText.length) {
            const headerEle = this.shadowRoot.getElementById('headerText');
            headerEle.classList.add('display-cursor');
            headerEle.innerHTML = headerEle.innerHTML + this.headerText.charAt(this.headerTextIndex);
            this.headerTextIndex++; 
            setTimeout(() => this.typeWriter(), 100);
        } else {
            const headerEle = this.shadowRoot.getElementById('headerText');
            headerEle.classList.remove('display-cursor');
            this.typeWriterPara1();
        }
        
    }

    typeWriterPara1() {
        if ( this.para1Text && this.para1Index <  this.para1Text.length) {
            const para1Ele = this.shadowRoot.getElementById('para1');
            para1Ele.classList.add('display-cursor');
            para1Ele.innerHTML = para1Ele.innerHTML + this.para1Text.charAt(this.para1Index);
            this.para1Index++; 
            setTimeout(() => this.typeWriterPara1(), 60);
        } else {
            const para1Ele = this.shadowRoot.getElementById('para1');
            para1Ele.classList.remove('display-cursor');
            this.typeWriterPara2();
        }
        
    }

    typeWriterPara2() {
        if ( this.para2Text && this.para2Index <  this.para2Text.length) {
            const para2Ele = this.shadowRoot.getElementById('para2');
            para2Ele.classList.add('display-cursor');
            para2Ele.innerHTML = para2Ele.innerHTML + this.para2Text.charAt(this.para2Index);
            this.para2Index++; 
            setTimeout(() => this.typeWriterPara2(), 60);
        } 
    }
}

customElements.define('intro-section', Introduction, {extends: 'section'});