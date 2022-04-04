import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { temas } from '../model/Temas';
import { Router } from '@angular/router';
import { TemasService } from '../service/temas.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  temas: temas = new temas()
  listaTemas: temas[]

  constructor(private router: Router, private temasService: TemasService){}

  ngOnInit(){
    if(environment.token == ""){
      alert("Sessão expirada. Logue novamente!")
      this.router.navigate(["/login"])
    }
    this.findAlltemas()
  }
  
  findAlltemas(){
    this.temasService.getAllTema().subscribe((resp: temas[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    console.log(this.temas)
    this.temasService.postTema(this.temas).subscribe((resp: temas)=>{
      this.temas = resp
      alert("Categoria cadastrada.")
      this.temas = new temas()
    })
  }

}
