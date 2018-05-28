class Contacto{
// atributos de contacto
	public char nombre[30];
    public long telefono;

//metodos de contacto
    public void Contacto(char n[30], long t){

strcpy(this.nombre,n);
this.telefono = t;
}

void escribir(){
printf("Nombre: %s Telefono: %ld", this.nombre, this.telefono);

}
void cambiarTelefono(long nt){
this.telefono = nt;
}

main(){
	Contacto c1;
	c1 = new Contacto("pepe",1111);
	//crearContacto(&c1,"Pepe",1111);
	c1.escribir();
	c1.cambiarTelefono("jose",3333);
}

}