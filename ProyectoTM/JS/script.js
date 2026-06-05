/*Categoría*/
const carrusel = document.getElementById("carrusel-ctg");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
btnSiguiente.addEventListener("click", function(){
    if(carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 10){
        carrusel.scrollLeft = 0;
    }
    else{
        carrusel.scrollLeft += 270;
    }
});

btnAnterior.addEventListener("click", function(){
    if(carrusel.scrollLeft <= 0){
    carrusel.scrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    }
    else{
        carrusel.scrollLeft -= 270;
    }
});

/*Colecciones*/
const carruselClc = document.getElementById("carrusel-clc");
const btnAnterior1 = document.getElementById("anterior-1");
const btnSiguiente1 = document.getElementById("siguiente-1");
btnSiguiente1.addEventListener("click", function(){
    if(carruselClc.scrollLeft + carruselClc.clientWidth >= carruselClc.scrollWidth - 10){
        carruselClc.scrollLeft = 0;
    }
    else{
        carruselClc.scrollLeft += 280;
    }
});
btnAnterior1.addEventListener("click", function(){
    if(carruselClc.scrollLeft <= 0){
        carruselClc.scrollLeft = carruselClc.scrollWidth - carruselClc.clientWidth;
    }
    else{
        carruselClc.scrollLeft -= 270;
    }
});