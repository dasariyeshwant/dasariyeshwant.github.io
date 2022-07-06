const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <style>
        .navbar {
            background: #FBBC05;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
        }
        .logo {
            width: 55px;
            height: 55px;
        }
        .menu-icon {
            align-self: center;
            margin-right: 20px;
        }
        .nav-items {
           margin-right: 20px;
           font-weight: bold;
        }
        .menu {
            display: flex;
        }
        .nav-items li {
            list-style-type: none;
            display: inline;
        }
        .hidden {
            display: none;
        }
    </style>
    <Header class="navbar">
        <a href="">
            <img class="logo" src="./assets/images/logo-transparent.png"/>
        </a>
        <div class="menu">
            <ul class="nav-items hidden" id="nav-items">
                <li>
                    Blog
                </li>
            </ul>
            <i class="fa fa-bars menu-icon" id="menu-icon"></i>
        </div>
    </Header>
`

class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const showdowRoot = this.attachShadow({mode: 'open'});
        showdowRoot.appendChild(navbarTemplate.content.cloneNode(true));
        
    
        this.shadowRoot.getElementById('menu-icon')
            .addEventListener('click', () => this.toggle());
        // this.addEventListener("click", function(event) {
        //     console.log('the event is: ', event);
        //     console.log('the target is: ', event.target);
        //     console.log('the target classlist is: ', event.target.classList);
        //     console.log('the path is: ', event.path);
        //     if (event.path[0].classList.contains('fa-bars')) {
        //         this.toggle();
        //     }
            
        // });
        
    }
    toggle() {
        const navItems = this.shadowRoot.getElementById('nav-items');
        if(navItems && navItems.classList.contains('hidden')) {
            navItems.setAttribute('class', 'nav-items');
            console.log('it is hidden');
        } else {
            navItems.setAttribute('class', 'nav-items hidden');
        }
    }
}

customElements.define('nav-bar', Navbar)