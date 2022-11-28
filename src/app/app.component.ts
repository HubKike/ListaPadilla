import { Component } from '@angular/core';
//import { stringify } from 'querystring';
import Alumnos_json from 'src/assets/json/alumnos.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CHListaAlumnos-Padilla';
  listaAlumnos: any = Alumnos_json;
  fecha: Date = new Date();
  color!: string;

  userClicked(username: string): void {
    alert('El alumno ' + username + ' fue clickeado')
  }

  //alumnosMayores = this.listaAlumnos.filter((i:any) => i.age >= 21);

  getIndicador(calificacion: number): string {

    console.log("Calificación: " + calificacion)

    if (calificacion <= 6) {
      this.color = "#f95959";
    }
    else if (calificacion == 7) {
      this.color = "#ffe700";
    }
    else if (calificacion == 8 || calificacion == 9) {
      this.color = "#97cba9";
    }
    else if (calificacion == 10) {
      this.color = "#42b883";
    }
    return this.color;
  }

}
