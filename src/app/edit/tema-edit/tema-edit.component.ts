import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { temas } from 'src/app/model/Temas';
import { TemasService } from 'src/app/service/temas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: temas = new temas()
  
  constructor(private temaService: TemasService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    if(environment.token == ""){
      alert("Sessão expirada. Logue novamente!")
      this.router.navigate(["/login"])
    }
    let id = this.route.snapshot.params["id"]
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: temas) => {this.tema = resp})
  }

}
