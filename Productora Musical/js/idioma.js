//declaracion de clases usando constantes
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logoText = document.querySelector('.logoText');
const tp2 = document.querySelector('.tp2');
const menuHome = document.querySelector('.menuHome');
const menuSectionOne = document.querySelector('.menuSectionOne');
const menuSectionTwo = document.querySelector('.menuSectionTwo');
const menuSectionThree = document.querySelector('.menuSectionThree');
const menuSectionFour = document.querySelector('.menuSectionFour');
const menuSectionFive = document.querySelector('.menuSectionFive');
const menuSectionSixs = document.querySelector('.menuSectionSixs');
const busc = document.querySelector('.busc');
const volv = document.querySelector('.volv');
const titulajes = document.querySelector('.titulajes');
const inic = document.querySelector('.inic');
const des1 = document.querySelector('.des1');
const titulajes1 = document.querySelector('.titulajes1');
const des2 = document.querySelector('.des2');
const testi = document.querySelector('.testi');
const test1 = document.querySelector('.test1');
const test2 = document.querySelector('.test2');
const test3 = document.querySelector('.test3');
const test4 = document.querySelector('.test4');
const test5 = document.querySelector('.test5');
const test6 = document.querySelector('.test6');
const desc1 = document.querySelector('.desc1');
const desc2 = document.querySelector('.desc2');
const desc3 = document.querySelector('.desc3');
const desc4 = document.querySelector('.desc4');
const desc5 = document.querySelector('.desc5');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const opt5 = document.querySelector('.opt5');
const opt6 = document.querySelector('.opt6');
const opt7 = document.querySelector('.opt7');
const opt8 = document.querySelector('.opt8');
const opt9 = document.querySelector('.opt9');
const opt10 = document.querySelector('.opt10');
const opt11 = document.querySelector('.opt11');
const opt12 = document.querySelector('.opt12');
const opt13 = document.querySelector('.opt13');
const opt14 = document.querySelector('.opt14');
const opt15 = document.querySelector('.opt15');
const titulos1 = document.querySelector('.titulos1');
const opt16 = document.querySelector('.opt16');
const opt17 = document.querySelector('.opt17');
const opt18 = document.querySelector('.opt18');





//recorrido del ciclo for-Each en funcion flecha
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        tp2.textContent = changeLanguage[attr].tp2;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuSectionOne.textContent = changeLanguage[attr].menuSectionOne;
        menuSectionTwo.textContent = changeLanguage[attr].menuSectionTwo;
        menuSectionThree.textContent = changeLanguage[attr].menuSectionThree;
        menuSectionFour.textContent = changeLanguage[attr].menuSectionFour;
        menuSectionFive.textContent = changeLanguage[attr].menuSectionFive;
        menuSectionSixs.textContent = changeLanguage[attr].menuSectionSixs;
        busc.textContent = changeLanguage[attr].busc;
        volv.textContent = changeLanguage[attr].volv;
        inic.textContent = changeLanguage[attr].inic;
        titulajes.textContent = changeLanguage[attr].titulajes;
        des1.textContent = changeLanguage[attr].des1;
        titulajes1.textContent = changeLanguage[attr].titulajes1;
        des2.textContent = changeLanguage[attr].des2;
        testi.textContent = changeLanguage[attr].testi;
        test1.textContent = changeLanguage[attr].test1;
        test2.textContent = changeLanguage[attr].test2;
        test3.textContent = changeLanguage[attr].test3;
        test4.textContent = changeLanguage[attr].test4;
        test5.textContent = changeLanguage[attr].test5;
        test6.textContent = changeLanguage[attr].test6;
        desc1.textContent = changeLanguage[attr].desc1;
        desc2.textContent = changeLanguage[attr].desc2;
        desc3.textContent = changeLanguage[attr].desc3;
        desc4.textContent = changeLanguage[attr].desc4;
        desc5.textContent = changeLanguage[attr].desc5;
        opt1.textContent = changeLanguage[attr].opt1;
        opt2.textContent = changeLanguage[attr].opt2;
        opt3.textContent = changeLanguage[attr].opt3;
        opt4.textContent = changeLanguage[attr].opt4;
        opt5.textContent = changeLanguage[attr].opt5;
        opt6.textContent = changeLanguage[attr].opt6;
        opt7.textContent = changeLanguage[attr].opt7;
        opt8.textContent = changeLanguage[attr].opt8;
        opt9.textContent = changeLanguage[attr].opt9;
        opt10.textContent = changeLanguage[attr].opt10;
        opt11.textContent = changeLanguage[attr].opt11;
        opt12.textContent = changeLanguage[attr].opt12;
        opt13.textContent = changeLanguage[attr].opt13;
        opt14.textContent = changeLanguage[attr].opt14;
        opt15.textContent = changeLanguage[attr].opt15;
        titulos1.textContent = changeLanguage[attr].titulos1;
        opt16.textContent = changeLanguage[attr].opt16;
        opt17.textContent = changeLanguage[attr].opt17;
        opt18.textContent = changeLanguage[attr].opt18;


    });
});


//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {

    "spanish": {
        "tp2": "Estudio de Grabación Dunamis",
        "menuHome": "Inicio",
        "menuSectionOne": "Equipo",
        "menuSectionTwo": "Producción",
        "menuSectionThree": "Experiencia",
        "menuSectionFour": "Servicios",
        "menuSectionFive": "Eventos",
        "menuSectionSixs": "Contacto",
        "busc": "Buscar",
        "volv": "Volver",
        "inic": "Iniciar",
        "titulajes": "¡Bienvenido a Dunamis!",
        "des1": "En Producciones Dunamis trabajamos arduamente, tenemos versatilidad en los géneros musicales y el con objetivo claro primordial de conseguir calidad.",
        "titulajes1": "La mejor producción del país",
        "des2": "El mejor estudio de grabación en Costa Rica es el que genere mejores resultados en nivel de producción y en nivel de mercado. Por esta razón es que la producción que se haga dentro del estudio de grabación será tan importante como el nivel artístico del que se esté produciendo.",
        "testi": "Testimoniales de nuestros Clientes",
        "test1": "Me inscribí al servicio de Dunamis y ha sido increíble.",
        "test2": "Recomiendo el estudio a ojos cerrados, me han ayudado mucho en mis proyectos.",
        "test3": "Recibí muy buen soporte, sin duda soy un cliente fijo.",
        "test4": "Solo puedo decir gracias por el servicio, los usaría siempre.",
        "test5": "Me han guiado en todos los procesos son muy buenos.",
        "test6": "Estoy emocionado por mi próximo disco, espero muchos lo conozcan.",
        "desc1": "Estadísticas",
        "desc2": "Años de Experiencia",
        "desc3": "Proyectos Completados",
        "desc4": "Colaboraciones con Artistas",
        "desc5": "Horas de Grabación",
        "opt1": "Compañía",
        "opt2": "Sobre Nosotros",
        "opt3": "Nuestros Servicios",
        "opt4": "Privacidad",
        "opt5": "Afiliarse",
        "opt6": "Ayuda",
        "opt7": "Preguntas Fequentes",
        "opt8": "Compra",
        "opt9": "Estado de Compra",
        "opt10": "Opciones de pago",
        "opt11": "Valores",
        "opt12": "Misión",
        "opt13": "Visión",
        "opt14": "Nosotros",
        "opt15": "Síguenos",
        "titulos1": "Nuestro Estudio",
        "opt16": "Contamos con la Mejor Tecnología",
        "opt17": "Ver vídeo",
        "opt18": "Cerrar"
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "tp2": "Recording Studio Dunamis",
        "menuHome": "Home",
        "menuSectionOne": "Team",
        "menuSectionTwo": "Production",
        "menuSectionThree": "Experience",
        "menuSectionFour": "Services",
        "menuSectionFive": "Events",
        "menuSectionSixs": "Contact",
        "busc": "Search",
        "volv": "Back",
        "inic": "Begin",
        "titulajes": "Welcome to Dunamis!",
        "des1": "Productions Dunamis, we work hardly, we provide versatility in different genres, with the clear objective of achieving Quality",
        "titulajes1": "The best Production in the Country",
        "des2": "The best Recording studio in Costa Rica is the one that delivers better results when it comes to production and market level. Due to this reason is that the production done inside our Studio will be as important as the artistic level that is being produced.",
        "testi": "Testimonials from our Clients",
        "test1": "I signed up for the Dunamis service and it has been amazing.",
        "test2": "I recommend the study with closed eyes, they had helped me a lot in my projects.",
        "test3": "I received very good support, I am definitely a regular customer.",
        "test4": "I can only say thank you for the service, I would always choose them.",
        "test5": "They have guided me in all the processes, they are very good.",
        "test6": "I'm excited for my next album, I hope many know it.",
        "desc1": "Statistics",
        "desc2": "Years of Experience",
        "desc3": "Completed Projects",
        "desc4": "Colaborations with Artists",
        "desc5": "Recording Hours",
        "opt1": "Company",
        "opt2": "About Us",
        "opt3": "Our Services",
        "opt4": "Privacy",
        "opt5": "Join us",
        "opt6": "Help",
        "opt7": "Frequent Questions",
        "opt8": "Buy",
        "opt9": "Buy Status",
        "opt10": "Payment Options",
        "opt11": "Values",
        "opt12": "Mision",
        "opt13": "Vision",
        "opt14": "Us",
        "opt15": "Follow Us",
        "titulos1": "Our Studio",
        "opt16": "We got the Best Technology",
        "opt17": "Watch video",
        "opt18": "Close"
    },
    "portuguese": {
        "tp2": "Estúdio de Gravação Dunamis",
        "menuHome": "Inicio",
        "menuSectionOne": "Equipa",
        "menuSectionTwo": "Produção",
        "menuSectionThree": "Experiência",
        "menuSectionFour": "Serviços",
        "menuSectionFive": "Eventos",
        "menuSectionSixs": "Contato",
        "busc": "Pesquisar",
        "volv": "Voltar",
        "inic": "Começar",
        "titulajes": "¡Seja Bem-vindo ao Dunamis!",
        "des1": "Produções Dunamis, trabalhamos forte, proporcionamos versatilidade em diversos gêneros, com o objetivo claro de alcançar a Qualidade",
        "titulajes1": "A melhor Produtora do Pais",
        "des2": "O melhor estúdio de gravação da Costa Rica é aquele que oferece melhores resultados em termos de produção e nível de mercado. Por isso é que a produção feita dentro do nosso Estúdio será tão importante quanto o nível artístico que está sendo produzido.",
        "testi": "Depoimentos de nossos Clientes",
        "test1": "Eu me inscrevi no serviço Dunamis e tem sido incrível.",
        "test2": "Recomendo o estudo de olhos fechados, eles me ajudaram muito em meus projetos.",
        "test3": "Recebi um suporte muito bom, sou definitivamente um cliente regular.",
        "test4": "Só posso agradecer pelo serviço, eu sempre os escolheria.",
        "test5": "Eles me orientaram em todos os processos, são muito bons.",
        "test6": "Estou animado pelo meu seguinte album, espero muito que vocês o conheçam.",
        "desc1": "Estatisticas",
        "desc2": "Anos de Experiência",
        "desc3": "Projetos Completos",
        "desc4": "Colaborações com Artistas",
        "desc5": "Horas de Gravação",
        "opt1": "Companhia",
        "opt2": "Sobre nós",
        "opt3": "Nossos serviços",
        "opt4": "Privacidade",
        "opt5": "Junte-se a nós",
        "opt6": "Ajuda",
        "opt7": "Perguntas Frequentes",
        "opt8": "Comprar",
        "opt9": "Status da Compra",
        "opt10": "Opções de Pagamento",
        "opt11": "Valores",
        "opt12": "Missão",
        "opt13": "Visão",
        "opt14": "Nós",
        "opt15": "Siga-nos",
        "titulos1": "Nosso Estúdio",
        "opt16": "Temos a melhor Tecnologia",
        "opt17": "Assistir Vídeo",
        "opt18": "Fechar"
    }
}