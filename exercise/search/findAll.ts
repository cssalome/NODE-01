import { clubes, IClub } from "../create";

export interface IResponseClubes {
  msg: string;
  clubes: IClub[];
}

export const findAll = (): IResponseClubes => {
  return {
    msg: "Return all clubes",
    clubes,
  };
};
