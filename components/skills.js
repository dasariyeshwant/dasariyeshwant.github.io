const skillsTemplate = document.createElement('template');
skillsTemplate.innerHTML = `
    <link href="./assets/fontawesome/css/all.css" rel="stylesheet"/>
    <style>
        .skills-section {
            background: #CC2229;
            padding-bottom: 20px;
            height: 100%;
        }
        h2 {
            background: #4675B8;
            margin: 0;
            width: 60%;
            text-align: center;
            padding: 15px;
            color: #ffffff;
        }
        .skills-header {
            padding: 35px 0;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 100px;
        }
        .skills-header p {
            font-size: 0.7rem;
            font-weight: 700;
            text-align: right;
            border-bottom: 1px solid #FBBC05;
            color: #FBBC05;
        }
        .individual-skill-container {
            display: flex;
            position: relative;
            margin: 15px 5%;
        }
        .left-blue-box {
            width: 50px;
            height: 50px;
            background: #4675B8;
            font-weight: 700;
            display: flex;
            align-items: center;
            padding-left: 5px;
            z-index: 1;
        }
        .left-blue-box span {
            margin-left: 5px;
        }
        .middle-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #FBD050;
            margin-left: -20px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        .right-skill-name-box {
            
            height: 40px;
            background: #FBD050;
            margin-left: 5%;
            align-self: center;
            position: absolute;
            font-weight: 700;
            display: flex;
            align-items: center;
            z-index: 0;
        }
        .javascript-box {
            background: #FBD050;
            width: 70%;
        }
        .angular-box {
            background: #FB86A2;
            width: 53%;
        }
        .react-box {
            background: #61DAFB;
            width: 65%;
        }
        .css3-box {
            background: #264DE4;
            width: 60%;
        }
        .html5-box {
            background: #E96228;
            width: 67%;
        }
        .nodejs-box {
            background: #75AC64;
            width: 45%;
        }
        .js-icon-container {
            background: #FBD000;
        }
        .angular-icon-container {
            background: #FB86FF;
        }
        .react-icon-container {
            background: #61FFFF;
        }
        .css3-icon-container {
            background: #260FFF;
        }
        .html5-icon-container {
            background: #E95222;
        }
        .nodejs-icon-container {
            background: #75AC40;
        }
        .javascript-box span {
            margin-left: 27%;
        }
        .angular-box span {
            margin-left: 37%;
        }
        .react-box span {
            margin-left: 30%;
        }
        .css3-box span {
            margin-left: 32%;
        }
        .html5-box span {
            margin-left: 29%;
        }
        .nodejs-box span {
            margin-left: 43%;
        }
        .right-skill-name-box:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            border-bottom: 40px solid #CC2229;
            border-left: 25px solid transparent;
            width: 0;
        }
        .skill-icon {
            font-size: 1.3rem;
        }

        .skills-milestone-container {
            position: relative;
            width: 80%;
            margin: 0 auto;
        }

        .skill-milestone-name {
            transform: rotate(45deg) translateX(-100%);
            position: absolute;
            width: max-content;
            color: #FBBC05;
            font-style: italic;
        }

        .skill-milestone-marker {
            position: relative;
        }
        .marker1 {
            margin-left: 20%;
        }
        .marker2 {
            margin-left: 40%;
        }
        .marker3 {
            margin-left: 60%;
        }
        .marker4 {
            margin-left: 80%;
        }
        .marker5 {
            margin-left: 100%;
        }
        .skill-milestone-marker:after {
            border-right: 1px dashed #FBBC05;
            content: '';
            height: 400px;
            position: absolute;
        }
        .skills-notes {
            margin: 40px 0 20px;
            background: #4675B8;
            padding: 0 5%;
            font-size: 0.7rem;
            color: #ffffff;
            text-align: center;
        }
        @media only screen and (min-width: 600px) {
            h2 {
                width: 50%;
            }
            .skills-header p {
                font-size: 0.8rem;
            }
            .skills-notes {
                font-size: 0.8rem;
            }
        }
        @media only screen and (min-width: 768px) {
            h2 {
                width: 40%;
            }
            
        }
        @media only screen and (min-width: 992px) {
            h2 {
                width: 30%;
            }
            .skills-header p {
                font-size: 1rem;
            }
            .skills-notes {
                font-size: 1rem;
            }
        }
    </style>

    <div class="skills-section">
        <div class="skills-header">
            <h2>Skills</h2>
            <p>Numbers below represents number of active years</p>
        </div>
        <div class="skills-milestone-container"> 
            <div class="skill-milestone-marker marker1">
                <span class="skill-milestone-name">Ameture</span>
            </div>  
            <div class="skill-milestone-marker marker2">
                <span class="skill-milestone-name">Semi-pro</span>
            </div>  
            <div class="skill-milestone-marker marker3">
                <span class="skill-milestone-name">Professional</span>
            </div>  
            <div class="skill-milestone-marker marker4">
                <span class="skill-milestone-name">World Class*</span>
            </div>  
            <div class="skill-milestone-marker marker5">
                <span class="skill-milestone-name">Legendary*</span>
            </div>  
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#7</span>
            </div>
            <div class="middle-circle js-icon-container"><i class="fa-brands fa-js skill-icon"></i></div>
            <div class="right-skill-name-box javascript-box">
                <span>Javascript</span>
            </div>
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#6</span>
            </div>
            <div class="middle-circle angular-icon-container"><i class="fa-brands fa-angular skill-icon"></i></div>
            <div class="right-skill-name-box angular-box">
                <span>Angular</span>
            </div>
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#4</span>
            </div>
            <div class="middle-circle react-icon-container"><i class="fa-brands fa-react skill-icon"></i></div>
            <div class="right-skill-name-box react-box">
                <span>React</span>
            </div>
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#8</span>
            </div>
            <div class="middle-circle css3-icon-container"><i class="fa-brands fa-css3 skill-icon"></i></div>
            <div class="right-skill-name-box css3-box">
                <span>CSS</span>
            </div>
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#8</span>
            </div>
            <div class="middle-circle html5-icon-container"><i class="fa-brands fa-html5 skill-icon"></i></div>
            <div class="right-skill-name-box html5-box">
                <span>HTML</span>
            </div>
        </div>
        <div class="individual-skill-container">
            <div class="left-blue-box">
                <span>#5</span>
            </div>
            <div class="middle-circle nodejs-icon-container"><i class="fa-brands fa-node-js skill-icon"></i></div>
            <div class="right-skill-name-box nodejs-box">
                <span>NodeJs</span>
            </div>
        </div>
        <p class="skills-notes">Other Skills such as Redux, Webpack and supporting javascript libraries and tools have not been mentioned above.</p>
    </div>
`;

class Skills extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open' });
        shadowRoot.appendChild(skillsTemplate.content.cloneNode(true));
    }
}
customElements.define('skills-section', Skills);