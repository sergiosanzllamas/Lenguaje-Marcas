#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct{
char nombre[30];
long telefono;
}Contacto;

void crearContacto(Contacto *c,char n[30], long t){

strcpy(c->nombre,n);
c->telefono = t;
}

void escribirContacto(Contacto c){
	printf("Nombre: %s Telefono: %ld", c.nombre, c.telefono);

}
void cambiarTelefono(Contacto *c, long nt){
	c->telefono = nt;

}
int main(){

Contacto c1;
crearContacto(&c1,"Pepe",1111);
escribirContacto(c1);
cambiarTelefono(&c1,2222);





	return EXIT_SUCCESS;
}


