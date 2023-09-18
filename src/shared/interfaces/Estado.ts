import { MacroRegiao } from "./MacroRegiao";

export interface Estado{
  id: number,
  sigla: string,
  nome: string,
  regiao: MacroRegiao
}
