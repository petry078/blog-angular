import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { temas } from '../model/Temas';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemasService } from '../service/temas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaTemas: temas[]
  idTema: number
  tema: temas = new temas()
  user: User = new User()
  idUser = environment.id
  
  constructor(private router: Router, private postagemService: PostagemService, private temaService: TemasService){}

  ngOnInit(){
    if(environment.token == ""){
      alert("Sessão expirada. Logue novamente!")
      this.router.navigate(["/login"])
    }
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: temas[]) =>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: temas)=>{
      this.tema = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.temas = this.tema
    //data automática//
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert("Postagem realizada com sucesso.")
      this.postagem = new Postagem()
    })
  }

}
