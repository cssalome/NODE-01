import createClub from "./create/index";
import { findAll, findOne, findByText } from "./search";
import deleteClub from "./delete/index";
import update from "./update";

const main = (): any => {
  const club1 = createClub(1, "Boca Jrs");
  console.log(club1);

  createClub(2, "River Plate");
  createClub(3, "Racing");
  createClub(4, "Talleres Perico");

  const find = findOne(2);
  console.log(find);

  const filter = findByText("c");
  console.log(filter);

  const resDelete = deleteClub(3);
  console.log(resDelete);

  const updateRes = update(1, "Boca Jrs El Mas Grande");
  console.log(updateRes);

  const res = findAll();
  console.log(res);
};

main();
