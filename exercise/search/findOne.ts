import { IClub, clubes, IResponse } from "../create";

export const findOne = (id: number): IResponse => {
  const findClub = clubes.find((club: IClub) => club.id === id);
  if (findClub) {
    return {
      msg: "Club Exists",
      club: findClub,
    };
  } else {
    return {
      msg: "Club not exist",
      club: findClub,
    };
  }
};
