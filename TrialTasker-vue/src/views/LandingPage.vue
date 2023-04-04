<template>
    <div class="container">
        <div class="navbar">
            <div class="navbarLogo">
                <Logo fill="--brown" />
            </div>
            <div class="buttons">

                <RouterLink :to="{ name: 'Login' }" class="navButton">
                    <div class="buttonLogin">Login
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'Register' }" class="navButton">
                    <div class="buttonRegister">Registrarse</div>
                </RouterLink>
            </div>
        </div>
        <div class="contenido">

            <div class="texto1">
                <p id="textoPart1">Bienvenido a TrialTasker</p>
                <p id="textoPart2">La plataforma dedicada unicamente a abogados donde podras llevar tu calendario y tus
                    casos
                    ordenadamente</p>
            </div>
            <div class="image1">
                <img src="@/assets/img/broabogados.svg" alt="imagenAbogado1" class="imagen1">
            </div>
        </div>

        <div class="contenido">

            <div class="texto2">
                <p>Nuestra plataforma está diseñada específicamente para abogados y se adapta perfectamente a sus
                    necesidades. Ya sea que esté buscando un sistema de gestión de casos, herramientas de colaboración
                    en equipo o una forma de automatizar su facturación, estamos aquí para ayudarlo.</p>
            </div>
            <div class="image2">
                <img src="@/assets/img/imgabogados1.svg" alt="" class="imagen2">
            </div>
            <div class="texto2">
                <p>Sabemos que como abogado, su tiempo es valioso y necesita herramientas efectivas para simplificar su
                    trabajo diario y aumentar la eficiencia. Nuestra plataforma ha sido diseñada específicamente para
                    satisfacer las necesidades únicas de los abogados y proporcionar una solución integral para todas
                    sus necesidades</p>
            </div>
        </div>

        <div class="contenido">
            <div class="image3">
                <img src="@/assets/img/lawabogados.svg" alt="" class="imagen3">
            </div>
            <div class="texto3">
                Además, nuestra plataforma es fácil de usar y está diseñada para proporcionar una experiencia de usuario
                sin complicaciones.

                Nos esforzamos por brindar un servicio de alta calidad y atención personalizada a cada uno de nuestros
                clientes. Trabajamos en estrecha colaboración con usted para entender sus necesidades y objetivos
                específicos

                ¡Únase a nuestra plataforma hoy y descubra cómo podemos ayudarlo a simplificar su práctica legal y
                mejorar la satisfacción del cliente!
            </div>
            <div class="image3">
                <img src="@/assets/img/privacyabogados.svg" alt="" class="imagen4">
            </div>
        </div>
        <footer>
            <div class="foologo">
                <Logo fill="--brown" class="logofoo" />
            </div>

            <div class="informacionfoo">
                <div class="informacion">
                    <h4>Contacto</h4>
                    <p>Correo: trialtasker@gmail.com</p>
                    <p>Telefono: 329234823</p>
                </div>
                <div class="informacion">
                    <h4>Informacion</h4>
                    <p>dfhgsdfhhhhhhgdf</p>
                    <p>dfhgsdfhhhhhdsfgdf</p>

                </div>
            </div>

        </footer>
    </div>
</template>

<script setup>
import Logo from '../components/logo/Logo.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

/* variables */
:root {
    --background: #edecec;
    --brown: #664200;
    --beige: #fff2bf;
    --my-hover-dark: #473800;
    --my-hover-ligth: #e8e8e8;
    --white: #fff;
    --black: #000;
    --azul: #0600ff;
}

/* body */
.container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--background);
}

/* navbar */
.navbar {
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}

.navbarLogo {
    width: 300px;
}

/* navbar Buttons */
.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.buttonLogin {
    width: 200px;
    height: 39px;
    background-color: var(--brown);
    border-radius: 5px;
    text-align: center;
    padding: 8px;
}

.buttonRegister {
    width: 200px;
    height: 39px;
    background-color: var(--brown);
    border-radius: 5px;
    text-align: center;
    padding: 8px;
}

.navButton {
    color: var(--white);
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
}

/* hover de los botones */
.buttonLogin:hover {
    background-color: var(--white);
}

.buttonRegister:hover {
    background-color: var(--white);
}

.navButton:hover {
    color: var(--black);
}

/* Primera parte del contenido */
.contenido {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    text-align: center;
}

.part1 {
    display: flex;
    width: 100%;
}

.image1 {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imagen1 {
    width: 85%;
}

.texto1 {
    width: 45%;
}

#textoPart1 {
    font-weight: bold;
    font-size: 50px;
    font-family: 'Roboto Condensed', sans-serif;
}

/* segunda parte del contenido */
#textoPart2 {
    font-size: 25px;
    font-family: 'Roboto Condensed', sans-serif;

}

.texto2 {
    width: 30%;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
}

.image2 {
    width: 30%;
}

.imagen2 {
    width: 100%;
}

/* tercera parte del contenido */
.imagen3 {
    width: 100%;
}

.image3 {
    width: 30%;
}

.texto3 {
    width: 30%;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
}

.imagen4 {
    width: 100%;
}

/* footer */
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--brown);


}

.logo {
    width: 200px;
}

.informacion {
    color: var(--white);
    padding: 0px 5px;
}

.foologo {
    width: 20%;
    text-align: center;
}

.logofoo {
    width: 100%;
}

.informacionfoo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
}

@media screen and (max-width:820px) {
    
    .image1 {
        width: 100%;
    }

    .texto1 {
        width: 100%;
        padding: 0px 10px;
    }

    .texto2 {
        width: 100%;
        padding: 0px 10px;
    }

    .image2 {
        width: 85%;
    }

    .image3 {
        width: 85%;
    }

    .texto3 {
        width: 100%;
        padding: 0px 10px;
    }

    .buttonLogin {
        width: 120px;
    }

    .buttonRegister {
        width: 120px;
    }

    .navbarLogo {
        width: 200px;
    }

    footer {
        height: auto;
    }

    .foologo {
        width: 100%;
        text-align: center;
    }

    .logofoo {
        width: 50%;
    }

    .informacionfoo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
}
</style>