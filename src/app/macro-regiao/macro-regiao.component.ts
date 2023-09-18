import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MacroRegiaoService } from 'src/service/MacroRegiao.service';
import { PesquisaService } from 'src/service/Pesquisa.service';
import { MacroRegiao } from 'src/shared/interfaces/MacroRegiao';
import { Pesquisa } from 'src/shared/interfaces/Pesquisa';
import { Estado } from '../../shared/interfaces/Estado';
import { EstadoService } from '../../service/Estado.service';

@Component({
  selector: 'app-macro-regiao',
  templateUrl: './macro-regiao.component.html',
  styleUrls: ['./macro-regiao.component.scss']
})
export class MacroRegiaoComponent implements OnInit {

public macroRegiaoCard: Array<MacroRegiao> = [];
public pesquisas: Array<Pesquisa> = [];
public panelOpenState = false;
public formIBGE: FormGroup;
public selectArray: Array<string> = [];
public estadoArray: Array<Estado> = [];

constructor(
  private macroRegiao: MacroRegiaoService,
  private pesquisa: PesquisaService,
  private estado: EstadoService,
  private formBuilder: FormBuilder
  ){

}

ngOnInit(): void {
    this.getAllMacroRegioes();
    this.getAllEstados();
    this.getPesquisa();
    this.initForm();
}

public initForm():void{
  this.formIBGE = this.formBuilder.group({
    teste:[''],
    regiao: [''],
    agregado:['', [Validators.required]],
    problema:[''],
    estado: ['']
  });
  this.formIBGE.get("problema")?.disable();
}

public teste():void{
  console.log(this.formIBGE.get("teste")?.value);
}

public getAllMacroRegioes():void{
  this.macroRegiao.getAllMacroRegiao().subscribe({
    next: (res) => {
      this.macroRegiaoCard = res;
      console.log(this.macroRegiaoCard);
    }
  })
}

public getAllEstados():void{
  this.estado.getAllEstados(1).subscribe({
    next: (res) => {
      this.estadoArray = res;
      console.log(this.estadoArray);
    }
  });
}

public getPesquisa():void{
  this.pesquisa.getPesquisas().subscribe({
    next: (res) => {
      this.pesquisas = res;
      console.log(this.pesquisas);
    }
  });
}

public setProblemas():void{
  this.formIBGE.get("problema")?.setValue(this.formIBGE.get("agregado")?.value);
  console.log(this.formIBGE.get("agregado")?.value);
}

public convertArray(array:string):void{
  console.log();
  // return array.split(',');
}

public ableInput():void{
  // this.selectArray = this.formIBGE.get("select")?.value;
  // this.selectArray ?  this.formIBGE.get("estado")?.enable() : this.formIBGE.get("estado")?.disable();
  // console.log(this.selectArray);
  // console.log(this.formIBGE.get("select")?.value);
}

}


//OI, eu
