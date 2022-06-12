import { IClub, clubes } from "../create";
import { IResponseClubes } from "./findAll";

export const findByText = (text: string): IResponseClubes => {
  const res = clubes.filter((club: IClub) =>
    club.name.toLowerCase().includes(text.toLowerCase())
  );
  return {
    msg: "Clubes filter",
    clubes: res,
  };
};
