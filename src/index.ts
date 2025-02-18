import leia from 'readline-sync';
import atividade01 from './atividade01';
import atividade02 from './atividade02';
import atividade03 from './atividade03';
import atividade04 from './atividade04';
import atividade05 from './atividade05';
import atividade06 from './atividade06';

const opcao = leia.keyInSelect([
  'Atividade 01', 
  'Atividade 02', 
  'Atividade 03', 
  'Atividade 04', 
  'Atividade 05',
  'Atividade 06'
], 'SELECIONE A ATIVIDADE QUE DESEJA EXECUTAR: ') + 1;

const atividade = {
  1: atividade01,
  2: atividade02,
  3: atividade03,
  4: atividade04,
  5: atividade05,
  6: atividade06
} as { [key: number]: () => void };

atividade[opcao]();
