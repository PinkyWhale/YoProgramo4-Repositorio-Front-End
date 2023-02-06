import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvgarcete-web';
  oficio: string = 'QA Automation';
  birthday = new Date(1990,8,1);
  persona={
    nombre1 : 'Erica',
    nombre2 : 'Elizabeth',
    apellido: 'Garcete',
  }
  residencia ={
    ciudad :'CABA',
    barrio : 'Villa del Parque',
    pais : 'Argentina',
  }
  presentacion= () =>{
    return ""
  }
}
