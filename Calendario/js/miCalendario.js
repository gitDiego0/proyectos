//Creo la variable fecha para poder tener la fehca actual y trabajar a partir de un dia.

var fecha=new Date();
var cuerpo=document.getElementById("Cuerpo");
var dia=0;
var dias=['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
var mes=fecha.getMonth()+1;
var anio=fecha.getFullYear();
var meses=['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];



function init(){
    PintarCalendario(mes);
}

function pintar(){

    //funcion de prueba para ver como trabajan algunos componentes
    document.getElementById("Cuerpo").innerText= "hola";
    document.getElementById("Cuerpo").innerText= ultimoDiaMes;
}


function pintarTabla2(anioP,mesP)
{
    var verPrimerDia=new Date(anioP,mesP-1,1);
    var verUltimoDia=new Date(anioP,mesP,0);
    var primerDia=(verPrimerDia.getDay()==0)?7:verPrimerDia.getDay();
    var ultimoDia=verUltimoDia.getDate();
    var fecha2=new Date(anioP,mesP,0,0,0,0,0);

    //fecha2.setFullYear(anioP);
    //fecha2.setMonth(mesP);

    var ulitmoCuadro=primerDia+ultimoDia;



    var tabla=document.getElementById("Calendario");
    var fila=document.createElement("tr");

    for(var i=1;i<43;i++)
    {
        if(i==primerDia)

		{

			// determinamos en que dia empieza

			dia=1;

		}

		if(i<primerDia || i>=ulitmoCuadro)

		{
			// celda vacia
                      
            var celda=document.createElement("td");
            celda.innerHTML="&nbsp;";
            fila.appendChild(celda);
            tabla.appendChild(fila);
            

		}else{

			// se muestran los dias

			if(dia==fecha.getDate() && mesP==fecha.getMonth()+1 && anioP==fecha.getFullYear()){

                    //añade la id hoy al dia actual en el que estamos          
                var celda=document.createElement("td");
                celda.setAttribute("id","hoy");
                var texto=document.createTextNode(dia);
                celda.appendChild(texto);
                fila.appendChild(celda);
                tabla.appendChild(fila);
                

            }else{

                //si el dia no es hoy crea la id normalDay para darle otro formato diferente
                var celda=document.createElement("td");
                celda.setAttribute("id","normalDay");
                var texto=document.createTextNode(dia);
                if(i%7==0){ //
                    celda.setAttribute("id","Festivo"); //Añade la id festivo a los domingos.
                }
                celda.appendChild(texto);
                fila.appendChild(celda);
                tabla.appendChild(fila);
                
            }
			dia++;

		}
        
		if(i%7==0)

		{

			if(dia>ultimoDia)

				break;

                var fila=document.createElement("tr");
                tabla.appendChild(fila);

        }
    }
}


function pintarMes(mesP)
{

    var TextoMeses=document.getElementById("Mes");
    TextoMeses.innerHTML=meses[mesP];

}

function pintarAnio(anioP)
{
    var TextoAnio=document.getElementById("Anio");
    TextoAnio.innerHTML="&nbsp;"+anioP;
}

function pintarDias(){

    var tabla=document.getElementById("Calendario");
    

    var fila=document.createElement("tr");
    for(i=0;i<dias.length;i++)
    {
        var celda=document.createElement("td");
        var texto=document.createTextNode(dias[i]);
        celda.setAttribute("id","dias");
        if(dias[i]=="Dom"){
            celda.setAttribute("id","Domingo");
        }
        celda.appendChild(texto);
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
}

function PintarCalendario()
{
    pintarMes(mes);
    pintarAnio(anio);
    pintarDias();
    pintarTabla2(anio,mes);
}


function mesMenos()
{
    
    
    LimpiarPantalla();
    
   
   if(mes<0)
    {
        mes=11;
        anio=anio-1;
        PintarCalendario()
    }else{
        mes=mes-1;
        PintarCalendario()
    }
    
    
}

function mesMas()
{
    
    
    LimpiarPantalla();
    if(mes>11){
        mes=0;
        anio=anio+1;
        PintarCalendario();
    }else{
        mes=mes+1
        PintarCalendario();
    }
    
    
}

function anioMenos()
{
    anio=anio-1;
    LimpiarPantalla();
    PintarCalendario();
}

function anioMas()
{
    
    anio=anio+1;
    LimpiarPantalla();
    PintarCalendario();
}

function LimpiarPantalla()
{
    var tabla=document.getElementById("Calendario");
    tabla.innerHTML="";
}

function FechaActual()
{
    LimpiarPantalla();
    anio=fecha.getFullYear();
    mes=fecha.getMonth()+1;
    PintarCalendario();
}












