import { IClub, clubes} from '../create'
import { IResponse} from '../delete'

const update = (id: number, name: string): IResponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    return {
      msg: 'Club invalido',
      start: false
    }
  } else {
    clubes[pos].name = name;//clubes en la posición .name
    return {
      msg:'club modificado exitosamente',
      status: true,
    }
  }
}

export default update