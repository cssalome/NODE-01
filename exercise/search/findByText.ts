import { IClub, clubes } from "../create";

export const findByText = (text: string): IClub[] => {
  const res = clubes.filter((club: IClub) =>
    club.name.toLowerCase().includes(text.toLowerCase())
  );
  return res;
};
