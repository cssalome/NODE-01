//INTERFCES: moldes que representan estructuras de datos
// CLASE: molde para crear objetos

export interface IClub {
  id: number;
  name: string;
}

interface IResponse extends IClub {
  msg: string;
}
export const clubes: IClub[] = [];

const createClub = (id: number, name: string): IResponse => {
  clubes.push({ id, name });
  return { msg: "club creado exitosamente", name, id };
};

// // Desafio: La estructura de la respuesta  deberia ser la {msg: '', value: 'Boca Jrs', id: 1}
// const CrateResponce = (msg: string, value: string, id: number): IResponce => {
//   clubes.push({ id, name });
//   return { msg: "Club successfuly created", name, id };
// };

export default createClub;
