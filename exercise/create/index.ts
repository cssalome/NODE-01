//INTERFCES: moldes que representan estructuras de datos
// CLASE: molde para crear objetos

export interface IClub {
  id: number;
  name: string;
}

export interface IResponse {
  msg: string;
  club: IClub | undefined;
}

export const clubes: IClub[] = [];

const createClub = (id: number, name: string): IResponse => {
  clubes.push({ id, name });
  return {
    msg: "Create club",
    club: { name, id },
  };
};

export default createClub;
