import { clubes, IResponse, IClub } from "../create";

const deleteClub = (id: number): IResponse => {
  const posClub = clubes.findIndex((club: IClub) => club.id === id);
  if (posClub === -1) {
    return {
      msg: "Id club not exist",
      club: undefined,
    };
  } else {
    const backup = clubes[posClub];
    clubes.splice(posClub, 1);
    return {
      msg: "Club delete",
      club: backup,
    };
  }
};

export default deleteClub;
