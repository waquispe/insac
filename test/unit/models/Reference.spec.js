'use strict'
const Reference = require('../../../lib/models/Reference')
const String = require('../../../lib/datatypes/String')
const StringValidator = require('../../../lib/validators/StringValidator')
const Field = require('../../../lib/models/Field')
const Model = require('../../../lib/models/Model')

describe('\n - Clase: Reference\n', () => {

  describe(` Método: constructor`, () => {
    it('Instanciando un objeto con parámetros', () => {
      let model = 'usuario', type = '1:N'
      let field = new Reference({allowNull: false}, {model, undefined, type})
      expect(field instanceof Field).to.equal(true)
      expect(field.type instanceof String).to.equal(true)
      expect(field.description).to.equal('')
      expect(field.allowNull).to.equal(false)
      expect(field.primaryKey).to.equal(false)
      expect(field.autoIncrement).to.equal(false)
      expect(field.defaultValue).to.equal(undefined)
      expect(typeof field.reference).to.equal('object')
      expect(field.reference.model).to.equal(model)
      expect(field.reference.as).to.equal('usuario')
      expect(field.reference.type).to.equal(type)
      expect(field.reference.key).to.equal('id')
    })
  })

  describe(` Método: sequelize`, () => {
    it('Verificando el objeto sequelize de un field de tipo referencia', () => {
      let model = 'usuario', as = 'usuario_personalizado', type = '1:N', key = 'key'
      let field = new Reference({allowNull: false}, {model, as, type, key})
      let sequelizeField = field.sequelize()
      expect(typeof sequelizeField.type).to.equal('object')
      expect(sequelizeField.allowNull).to.equal(false)
      expect(sequelizeField.primaryKey).to.equal(false)
      expect(sequelizeField.autoIncrement).to.equal(false)
      expect(sequelizeField.defaultValue).to.equal(undefined)
      expect(typeof sequelizeField.references).to.equal('object')
      expect(sequelizeField.references.model).to.equal(model)
      expect(sequelizeField.references.as).to.equal(as)
      expect(sequelizeField.references.key).to.equal(key)
    })
  })

  describe(` Método (static): ONE_TO_ONE`, () => {
    it('Verificando la instancia ONE_TO_ONE', () => {
      let usuario = new Model('usuario', {
        fields: {
          username: {
            description: 'Nombre de usuario'
          }
        }
      })
      let field = Reference.ONE_TO_ONE(usuario, {allowNull:false, key:'username'})
      expect(field instanceof Field).to.equal(true)
      expect(field.type instanceof String).to.equal(true)
      expect(field.validator instanceof StringValidator).to.equal(true)
      expect(field.description).to.equal(`Nombre de usuario del registro 'usuario'`)
      expect(field.allowNull).to.equal(false)
      expect(field.primaryKey).to.equal(false)
      expect(field.autoIncrement).to.equal(false)
      expect(typeof field.reference).to.equal('object')
      expect(field.reference.model).to.equal('usuario')
      expect(field.reference.as).to.equal('usuario')
      expect(field.reference.type).to.equal('1:1')
      expect(field.reference.key).to.equal('username')
    })
  })

  describe(` Método (static): ONE_TO_MANY`, () => {
    it('Verificando la instancia ONE_TO_MANY', () => {
      let usuario = new Model('usuario', {
        fields: {
          username: {
            description: 'Nombre de usuario'
          }
        }
      })
      let field = Reference.ONE_TO_MANY(usuario, {allowNull:false, key:'username'})
      expect(field instanceof Field).to.equal(true)
      expect(field.type instanceof String).to.equal(true)
      expect(field.validator instanceof StringValidator).to.equal(true)
      expect(field.description).to.equal(`Nombre de usuario del registro 'usuario'`)
      expect(field.allowNull).to.equal(false)
      expect(field.primaryKey).to.equal(false)
      expect(field.autoIncrement).to.equal(false)
      expect(typeof field.reference).to.equal('object')
      expect(field.reference.model).to.equal('usuario')
      expect(field.reference.as).to.equal('usuario')
      expect(field.reference.type).to.equal('1:N')
      expect(field.reference.key).to.equal('username')
    })
  })

})
