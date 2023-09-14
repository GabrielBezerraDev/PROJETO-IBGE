import { Agregados } from "./Agregados";

export interface Pesquisa{
  id: number;
  nome: string;
  agregados: Array<Agregados>;
}
