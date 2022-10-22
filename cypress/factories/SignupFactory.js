
var faker = require('faker-br')


export default {


    deliver: function()  {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
        name: `${firstName} ${lastName}`,
        cpf: '77436423215',
        email:  faker.internet.email(firstName),
        whatsapp: '92991645616',
        address: {
           postalcode: '69086051',
           street: 'Rua Rio Dimiti',
           number: '51',
           details: 'Quadra 49 Ao lado do Restaurante Sabor Nordestino',
           district: 'São José Operário',
           city_state: 'Manaus/AM'
           },

       delivery_method: 'Moto', 
       cnh: 'CNH.jpg'
       }
       return data
    }
}