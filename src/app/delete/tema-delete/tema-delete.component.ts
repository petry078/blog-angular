import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { temas } from 'src/app/model/Temas';
import { TemasService } from 'src/app/service/temas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})

export class TemaDeleteComponent implements OnInit {

  tema: temas = new temas()
  idTema: number
  
  constructor(private temaService: TemasService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    if(environment.token == ""){
      this.router.navigate(["/login"])
    }

    this.idTema = this.route.snapshot.params["id"]
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: temas)=>{
      this.tema = resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(()=>{
      alert("Tema apagado com sucesso.")
      this.router.navigate(["/temas"])
    })
  }

}