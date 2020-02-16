import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( usuarios: any[], texto: string ): any[] {

    if ( texto.length === 0 ) { return usuarios; }

    texto = texto.toLocaleLowerCase();

    return usuarios.filter( usuario => {
      return usuario.prof_nombre.toLocaleLowerCase().includes(texto)
             || usuario.sal_nombre.toLocaleLowerCase().includes(texto);
    });

}

}
