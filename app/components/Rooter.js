import { Conocimientos } from "../pages/Conocimientos.js"
import { Contacto } from "../pages/Contacto.js"
import { Inicio } from "../pages/Inicio.js"
import { Portafolio } from "../pages/Portafolio.js"
import { SobreMi } from "../pages/SobreMi.js"
import { MenuEffects } from "./Effects.js"
import { Form } from "./FormContact.js"
import { ProjectCards } from "./GetProjectCards.js"
import { RevertFixed } from "./helpers/RevertFixed.js"
import { Menu, MenuTop } from "./Menu.js"
import { MenuMobile } from "./MenuMobile.js"
import { Navigation } from "./Navigation.js"
import { ProgressBar } from "./ProgressBar.js"
import { SocialMedia } from "./SocialMedia.js"

const Rooter = ()=>{

    const w = window
    const $main = document.getElementById('root')
    const regExp = /^./

    let { hash } = location

    const Handler = async()=>{

        Navigation()

        switch (hash) {

            case `#/`: 

                $main.innerHTML = ''
                $main.appendChild(Inicio())
                $main.appendChild(SocialMedia())
                MenuEffects()
     
            break;

            case '': 

                $main.innerHTML = ''
                $main.appendChild(Inicio())
                $main.appendChild(SocialMedia())
                MenuEffects()
     
            break;

            case `#/Portafolio`: 

                $main.innerHTML = ''
                $main.appendChild(SocialMedia())
                $main.appendChild(Portafolio())
                MenuTop()
                ProjectCards()
                MenuMobile()
                RevertFixed('footer')
     
                break;
    
            case `#/Conocimientos`:

                $main.innerHTML = ''
                
                $main.appendChild(SocialMedia())
                $main.appendChild( await Conocimientos())
                
                MenuTop()
                MenuMobile()
                await ProgressBar()
                RevertFixed('footer')

                break;
    
            case `#/Sobre-mi`:

                $main.innerHTML = ''
                
                $main.appendChild(SocialMedia())
                $main.appendChild(SobreMi())
                MenuTop()
                RevertFixed('footer')
                MenuMobile()
         
                break;

            case `#/Contacto`:

                $main.innerHTML = ''
                    
                $main.appendChild(SocialMedia())
                $main.appendChild(Contacto())
                MenuTop()
                RevertFixed('footer')
                MenuMobile()
                Form()
             
                break;
        
            default: 
                
                break;
                
        }
    }
    Handler()
}

export { Rooter }