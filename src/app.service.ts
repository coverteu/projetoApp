import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      nome: "teste",
      senha: 1234
    }
    return objeto
  }
}
