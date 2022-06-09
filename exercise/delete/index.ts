import { IClub, clubes } from "../create";

export interface IResponse {
  msg: string;
  status: boolean;
}

const deleteClub = (id: number): IResponse => {
  //posicion
  //splice a esa posicion
  const pos = clubes.findIndex((club: IClub) => club.id === id);

  if (pos === -1) {
    return {
      msg: "Club inválido",
      status: false,
    };
  } else {
    clubes.splice(pos, 1);
    return {
      msg: "Club borrado exitosamente",
      status: true,
    };
  }
};

export default deleteClub;
