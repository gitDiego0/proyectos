//Creo la variable fecha para poder tener la fehca actual y trabajar a partir de un dia.

var fecha=new Date();
var cuerpo=document.getElementById("Cuerpo");
var dia=0;
var dias=['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
var mes=fecha.getMonth()+1;
var anio=fecha.getFullYear();
var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];



function init(){
    PintarCalendario();
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

                              
                var celda=document.createElement("td");
                celda.setAttribute("id","hoy");
                var texto=document.createTextNode(dia);
                celda.appendChild(texto);
                fila.appendChild(celda);
                tabla.appendChild(fila);
                

            }else{

                
                var celda=document.createElement("td");
                celda.setAttribute("id","normalDay");
                var texto=document.createTextNode(dia);
                if(i%7==0){
                    celda.setAttribute("id","Festivo");
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


function pintarMes(mes)
{
    /*var tabla=document.getElementById("Calendario");
    var fila1=document.createElement("tr");

    var celda1=document.createElement("th");
    var texto1=document.createTextNode(meses[mes-1]);
    //celda1.setAttribute("id","NombreMes");
    celda1.appendChild(texto1);
    fila1.appendChild(celda1);
    tabla.appendChild(fila1);*/

    var TextoMeses=document.getElementById("Mes");
    TextoMeses.innerHTML=meses[mes-1];

}

function pintarAnio(anioP)
{
    var TextoAnio=document.getElementById("Anio");
    TextoAnio.innerHTML="&nbsp;"+anioP;
}

function pintarDias(){

    var tabla=document.getElementById("Calendario");
    
    /*var fila1=document.createElement("tr");
    var celda1=document.createTextNode(meses[mes-1]);
    //celda1.setAttribute("id","NombreMes");
    fila1.appendChild(celda1);
    tabla.appendChild(fila1);*/

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
    /*
    pintarMes(mes);
    pintarDias();
    pintarTabla2(anio,mes);
    */
   
   if(mes<1)
    {
        mes=12;
        anio=anio-1;
        PintarCalendario(anio,mes)
    }else{
        mes=mes-1;
        PintarCalendario(anio,mes)
    }
    
    
}

function mesMas()
{
    
    
    LimpiarPantalla();
    /*pintarMes(mes);
    pintarDias();
    pintarTabla2(anio,mes);*/
    
    if(mes>12){
        mes=1;
        anio=anio+1;
        PintarCalendario(anio,mes);
    }else{
        mes=mes+1
        PintarCalendario(anio,mes);
    }
    
    
}

function anioMenos()
{
    anio=anio-1;
    LimpiarPantalla();
    /*pintarAnio(anio);
    pintarDias();
    pintarTabla2(anio,mes);*/
    PintarCalendario(anio,mes);
}

function anioMas()
{
    
    anio=anio+1;
    LimpiarPantalla();
    /*pintarAnio(anio);
    pintarDias();
    pintarTabla2(anio,mes);*/
    PintarCalendario(anio,mes);
}

function LimpiarPantalla()
{
    var tabla=document.getElementById("Calendario");
    tabla.innerHTML="";
}












