let entrada=["Ensalada tricolor con tomates, zanahoria y remolachas","Brusqueta Capresse","Brusqueta Funghi","Torre de verduras escalivadas","Ensalada verde, manzana verde, queso azul y vinagreta de aceto","Tarta de jamon y queso","Bruschetta de champignones","Ensalada caprese","Jamon con palmitos","Pizzeta a la fugazzeta","Torre de berenjenas gratinadas","Sopa de verduras","Ensalada mix verdes con rabanitos y queso azul","Bruschetta con queso de cabra y cebolla caramelizada","Empanada de jamon y queso","Ceviche de salmon y mango","Panceta a la criolla","Ensalada mix verdes, queso azul y frutos secos","Fritatta de verdeo y hongos","Esparragos en panceta gratinados","Ensalada tibia de pollo","Melon con jamon","Creppes de verdura","Ensalada Caesar","Ensalada Waldorf con jamon bocatti"];

let principal=["Pollo mechado con salsa de mostaza","Pollo al provenzal","Fetuccinis al verdeo","Chop Suey de ternera y arroz","Ravioles de salmon en crema de hierbas","Pollo al verdeo","Entrecorte al roquefort","Solomillo de cerdo al Malbec","Sorrentinos de jamon y queso con Filetto y albahaca","Solomillo de cerdo al ajillo","Carne de cerdo a la mostaza","Fetuccinis con Filetto y pesto","Matambre de ternera a la fugazzeta","Pechuga rellena","Ravioles de jamon y queso con salsa bolognesa"]

let postre=["Tarta Vianner","Gelato","Tiramisú","Panna Cotta","Creppes tibios de durazno y nutella","Manzanas al horno","Ensalada de frutas o helado","Copa Melba","Torta de vainilla y chocolate con salsa de frutos rojos","Copa brownie","Clasico flan casero","Clasico Vigilante","Manjar Tower con helado","Panna cotta de malbec","Biscuit de chocolate y helado","Copa mendocina","Mil hojas con crema de chocolate","Copa jamaica","Creppes tibios de dulce de leche", "Chocotorta con frutos rojos", "Duraznos al chantilly","Copa oreo","Copa tiramisu","Copa chocolina","Mousse de mango, frutos rojos y crocante de chocolate","Chocotorta","Mousse de mango y crocante de chocolate","Banana split","Minitorta de durazno, crema y dulce de leche"];


function aleatorio(){
    /// SALIDA DE ENTRADAS

    let indice1 = Math.floor(Math.random() * entrada.length);
    document.getElementById("entrada").innerHTML=entrada[indice1];
    entrada.splice(indice1,1)
    if(entrada.length == 0 || entrada[indice1] === undefined){
        entrada=["Ensalada tricolor con tomates, zanahoria y remolachas","Brusqueta Capresse","Brusqueta Funghi","Torre de verduras escalivadas","Ensalada verde, manzana verde, queso azul y vinagreta de aceto","Tarta de jamon y queso","Bruschetta de champignones","Ensalada caprese","Jamon con palmitos","Pizzeta a la fugazzeta","Torre de berenjenas gratinadas","Sopa de verduras","Ensalada mix verdes con rabanitos y queso azul","Bruschetta con queso de cabra y cebolla caramelizada","Empanada de jamon y queso","Ceviche de salmon y mango","Panceta a la criolla","Ensalada mix verdes, queso azul y frutos secos","Fritatta de verdeo y hongos","Esparragos en panceta gratinados","Ensalada tibia de pollo","Melon con jamon","Creppes de verdura","Ensalada Caesar","Ensalada Waldorf con jamon bocatti"];
        }
    
    indice1 = Math.floor(Math.random() * entrada.length);
    document.getElementById("entrada2").innerHTML=entrada[indice1];
    entrada.splice(indice1,1)
    if(entrada.length == 0 || entrada[indice1] === undefined){
        entrada=["Ensalada tricolor con tomates, zanahoria y remolachas","Brusqueta Capresse","Brusqueta Funghi","Torre de verduras escalivadas","Ensalada verde, manzana verde, queso azul y vinagreta de aceto","Tarta de jamon y queso","Bruschetta de champignones","Ensalada caprese","Jamon con palmitos","Pizzeta a la fugazzeta","Torre de berenjenas gratinadas","Sopa de verduras","Ensalada mix verdes con rabanitos y queso azul","Bruschetta con queso de cabra y cebolla caramelizada","Empanada de jamon y queso","Ceviche de salmon y mango","Panceta a la criolla","Ensalada mix verdes, queso azul y frutos secos","Fritatta de verdeo y hongos","Esparragos en panceta gratinados","Ensalada tibia de pollo","Melon con jamon","Creppes de verdura","Ensalada Caesar","Ensalada Waldorf con jamon bocatti"];
        }
    
    indice1 = Math.floor(Math.random() * entrada.length);
    document.getElementById("entrada3").innerHTML=entrada[indice1];
    entrada.splice(indice1,1)
    if(entrada.length == 0 || entrada[indice1] === undefined){
        entrada=["Ensalada tricolor con tomates, zanahoria y remolachas","Brusqueta Capresse","Brusqueta Funghi","Torre de verduras escalivadas","Ensalada verde, manzana verde, queso azul y vinagreta de aceto","Tarta de jamon y queso","Bruschetta de champignones","Ensalada caprese","Jamon con palmitos","Pizzeta a la fugazzeta","Torre de berenjenas gratinadas","Sopa de verduras","Ensalada mix verdes con rabanitos y queso azul","Bruschetta con queso de cabra y cebolla caramelizada","Empanada de jamon y queso","Ceviche de salmon y mango","Panceta a la criolla","Ensalada mix verdes, queso azul y frutos secos","Fritatta de verdeo y hongos","Esparragos en panceta gratinados","Ensalada tibia de pollo","Melon con jamon","Creppes de verdura","Ensalada Caesar","Ensalada Waldorf con jamon bocatti"];
        }
    console.log("entrada"+entrada.length)    

    /// SALIDA DE PLATOS PRINCIPALES
    
    let indice2 = Math.floor(Math.random() * principal.length);
    document.getElementById("main").innerHTML=principal[indice2];
    principal.splice(indice2,1)
    if (principal.length == 0 || principal[indice2] === undefined) {
        principal=["Pollo mechado con salsa de mostaza","Pollo al provenzal","Fetuccinis al verdeo","Chop Suey de ternera y arroz","Ravioles de salmon en crema de hierbas","Pollo al verdeo","Entrecorte al roquefort","Solomillo de cerdo al Malbec","Sorrentinos de jamon y queso con Filetto y albahaca","Solomillo de cerdo al ajillo","Carne de cerdo a la mostaza","Fetuccinis con Filetto y pesto","Matambre de ternera a la fugazzeta","Pechuga rellena","Ravioles de jamon y queso con salsa bolognesa"]
        }

    
    indice2 = Math.floor(Math.random() * principal.length);
    document.getElementById("main2").innerHTML=principal[indice2];
    principal.splice(indice2,1)
    if (principal.length == 0 || principal[indice2] === undefined) {
        principal=["Pollo mechado con salsa de mostaza","Pollo al provenzal","Fetuccinis al verdeo","Chop Suey de ternera y arroz","Ravioles de salmon en crema de hierbas","Pollo al verdeo","Entrecorte al roquefort","Solomillo de cerdo al Malbec","Sorrentinos de jamon y queso con Filetto y albahaca","Solomillo de cerdo al ajillo","Carne de cerdo a la mostaza","Fetuccinis con Filetto y pesto","Matambre de ternera a la fugazzeta","Pechuga rellena","Ravioles de jamon y queso con salsa bolognesa"]
        }
    
    indice2 = Math.floor(Math.random() * principal.length);
    document.getElementById("main3").innerHTML=principal[indice2];
    principal.splice(indice2,1)
    if (principal.length == 0 || principal[indice2] === undefined) {
        principal=["Pollo mechado con salsa de mostaza","Pollo al provenzal","Fetuccinis al verdeo","Chop Suey de ternera y arroz","Ravioles de salmon en crema de hierbas","Pollo al verdeo","Entrecorte al roquefort","Solomillo de cerdo al Malbec","Sorrentinos de jamon y queso con Filetto y albahaca","Solomillo de cerdo al ajillo","Carne de cerdo a la mostaza","Fetuccinis con Filetto y pesto","Matambre de ternera a la fugazzeta","Pechuga rellena","Ravioles de jamon y queso con salsa bolognesa"]
        }

    //SALIDAS DE POSTRES    
    
    let indice3 = Math.floor(Math.random() * postre.length);
    document.getElementById("postre").innerHTML=postre[indice3];
    postre.splice(indice3,1)
    if (postre.length == 0 || postre[indice3] === undefined) {
        postre=["Tarta Vianner","Gelato","Tiramisú","Panna Cotta","Creppes tibios de durazno y nutella","Manzanas al horno","Ensalada de frutas o helado","Copa Melba","Torta de vainilla y chocolate con salsa de frutos rojos","Copa brownie","Clasico flan casero","Clasico Vigilante","Manjar Tower con helado","Panna cotta de malbec","Biscuit de chocolate y helado","Copa mendocina","Mil hojas con crema de chocolate","Copa jamaica","Creppes tibios de dulce de leche", "Chocotorta con frutos rojos", "Duraznos al chantilly","Copa oreo","Copa tiramisu","Copa chocolina","Mousse de mango, frutos rojos y crocante de chocolate","Chocotorta","Mousse de mango y crocante de chocolate","Banana split","Minitorta de durazno, crema y dulce de leche"];

    }
    
    indice3 = Math.floor(Math.random() * postre.length);
    document.getElementById("postre2").innerHTML=postre[indice3];
    postre.splice(indice3,1)
    if (postre.length == 0 || postre[indice3] === undefined) {
        postre=["Tarta Vianner","Gelato","Tiramisú","Panna Cotta","Creppes tibios de durazno y nutella","Manzanas al horno","Ensalada de frutas o helado","Copa Melba","Torta de vainilla y chocolate con salsa de frutos rojos","Copa brownie","Clasico flan casero","Clasico Vigilante","Manjar Tower con helado","Panna cotta de malbec","Biscuit de chocolate y helado","Copa mendocina","Mil hojas con crema de chocolate","Copa jamaica","Creppes tibios de dulce de leche", "Chocotorta con frutos rojos", "Duraznos al chantilly","Copa oreo","Copa tiramisu","Copa chocolina","Mousse de mango, frutos rojos y crocante de chocolate","Chocotorta","Mousse de mango y crocante de chocolate","Banana split","Minitorta de durazno, crema y dulce de leche"];

    }                                       
}

aleatorio()