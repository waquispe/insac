module.exports = (app) => {
  const ROUTE = {}

  ROUTE.get = {
    path        : '/api/v1/autores',
    method      : 'get',
    description : 'Devuelve una lista de registros.'
  }

  ROUTE.getId = {
    path        : '/api/v1/autores/:id',
    method      : 'get',
    description : 'Devuelve un registro por ID.'
  }

  ROUTE.create = {
    path        : '/api/v1/autores',
    method      : 'post',
    description : 'Crea un nuevo registro.'
  }

  ROUTE.update = {
    path        : '/api/v1/autores/:id',
    method      : 'put',
    description : 'Modifica un registro por ID.'
  }

  ROUTE.destroy = {
    path        : '/api/v1/autores/:id',
    method      : 'delete',
    description : 'Elimina un registro por ID.'
  }

  ROUTE.restore = {
    path        : '/api/v1/autores/:id/restore',
    method      : 'put',
    description : 'Restaura un usuario eliminado por ID.'
  }

  // <!-- [CLI] - [COMPONENT] --!> //

  return ROUTE
}
