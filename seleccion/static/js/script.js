
function Inicio(){
	btnEliminar= document.getElementById('btnEliminar');
	btnEliminar.onclick= function(){abrir()};
	btnCerrar= document.getElementById('cerrarDlg');
	btnCerrar.onclick= function(){cerrar()};
}


function abrir(){
	dlgEliminar = document.getElementById('dlgEliminar');
	dlgEliminar.classList.remove("hide");
}

function cerrar(){
	dlgEliminar = document.getElementById('dlgEliminar');
	dlgEliminar.classList.add("hide");
}


