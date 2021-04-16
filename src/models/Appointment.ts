import { uuid } from 'uuidv4'

//Omit<>:  é uma função . Recebe dois parametros. qual é o tipo e qual é a váriavel que queremos omitir de dentro do objeto.

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({provider, date}: Omit<Appointment, 'id'>) {
    this.id = uuid()
    this.provider = provider;
    this.date = date

  }
}

export default Appointment
