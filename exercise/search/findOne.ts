import { IClub, clubes } from "../create";

export const findOne = (id: number) => {
  const find = clubes.find((club: IClub) => club.id === id);
  return find;
};
