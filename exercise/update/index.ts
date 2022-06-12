import { clubes, IClub, IResponse } from "../create";

const update = (id: number, name: string): IResponse => {
  const posClub = clubes.findIndex((club: IClub) => club.id === id);
  if (posClub === -1) {
    return {
      msg: "Id club not exist",
      club: undefined,
    };
  } else {
    clubes[posClub].name = name;
    return {
      msg: "Club update",
      club: clubes[posClub],
    };
  }
};

export default update;
