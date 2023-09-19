import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MacroRegiaoService } from 'src/service/MacroRegiao.service';
import { PesquisaService } from 'src/service/Pesquisa.service';
import { MacroRegiao } from 'src/shared/interfaces/MacroRegiao';
import { Pesquisa } from 'src/shared/interfaces/Pesquisa';
import { Estado } from '../../shared/interfaces/Estado';
import { EstadoService } from '../../service/Estado.service';
import { Agregados } from 'src/shared/interfaces/Agregados';
import { PeriodoService } from 'src/service/Periodo.service';
import { Periodo } from 'src/shared/interfaces/Periodo';

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
public problemas: Array<Agregados> = [];
public periodos: Array<Periodo> = [];

constructor(
  private macroRegiao: MacroRegiaoService,
  private pesquisa: PesquisaService,
  private estado: EstadoService,
  private formBuilder: FormBuilder,
  private periodo: PeriodoService
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
    regiao: ['', [Validators.required]],
    agregado:['', [Validators.required]],
    problema:['', [Validators.required]],
    estado: ['']
  });
  console.log(this.formIBGE.get("regiao")?.valid);

  this.formIBGE.get("agregado")?.disable();
  this.formIBGE.get("problema")?.disable();
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
    }
  });
}

public getPesquisa():void{
  this.pesquisa.getPesquisas().subscribe({
    next: (res) => {
      this.pesquisas = res;
    }
  });
}

public getPeriodos():void{
  let id = this.formIBGE.get("problema")?.value;
  this.periodo.getPeriodos(id).subscribe({
    next: (res) => {
      this.periodos = res;
      console.log(this.periodos);
    }
  });
}

public actived(formName: string):void{
  this.formIBGE.get(formName)?.enable();
}

public setProblemas():void{
  this.problemas = this.formIBGE.get("agregado")?.value;
  console.log(this.formIBGE.get("agregado")?.value);
  console.log(this.formIBGE.get("agregado")?.valid);

}

}


