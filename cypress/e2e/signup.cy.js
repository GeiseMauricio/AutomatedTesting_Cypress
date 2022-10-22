
import signupPage from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory'

//import { it } from 'faker-br/lib/locales';



describe('Signup', () => { // bloco de suite de testes

        /*beforeEach(function () {
        cy.fixture('deliver').then((d)=>{ // d é abreviação de deliver
            this.deliver = d // this é uma palavra reservada para eu criar uma variavel de contexto, a variavel de contexto nesse caso é "deliver"
            // usa o this para ter acesso a informação nos outros casos de testes

        }) //chama o objeto do cypress, fixture é uma função do cypress, que consegue obter uma massa de teste que ta na camada de fixture
        // a função fixtures trabalha de forma assincrona, ela precisa cumprir uma promessa, e quando isso acontece no JS
        // precisa usar a subfunção "then" para pegar o resultado da promessa, essa subfunção pega o resultado da massa de teste

   
    })*/

        //var signup = new SignupPage() // cria uma instância da classe SignupPage na variavel signup, dessa forma signup vai ter acesso a todas  as funções de SignupPage

        // abaixo faz todas a chamadas dos steps

       // esse bloco foi so para entender como funciona os ganchos  before e after

        /*before(function() {
            cy.log('Tudo aqui é executado uma única vez ANTES de Todos os casos de testes')

        })

        beforeEach(function() {
            cy.log('Aqui tudo é executado sempre ANTES de cada caso de teste')
        })


        after(function() {
            cy.log('Tudo aqui é executado uma única vez DEPOIS de Todos os casos de testes')

        })

        afterEach(function() {
            cy.log('Aqui tudo é executado sempre DEPOIS de cada caso de teste')
        })*/

        //skip - ele pula os cenários de testes que não estão sendo validados no momento

    it('User should be deliver', function () { 
        // caso de teste usando it "Seja um entregador é o nome do caso de teste"
         //bloco onde vamos ter a implementação do caso de teste
         //()=> arow function fica mais elegante usar no código, esse simbolo tambem representa uma função
         // no cypress só permite usar o locator, não tem como usar a busca por xpath
         //constante em JS é um objeto que é imutável

        
         var deliver = signupFactory.deliver()   // esse bloco é minha massa de teste
            
            
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
          
         
    })
 

   it('Incorrect document', function () { // caso de teste usando it "Seja um entregador é o nome do caso de teste"
        //bloco onde vamos ter a implementação do caso de teste
        //()=> arow function fica mais elegante usar no código, esse simbolo tambem representa uma função
        // no cypress só permite usar o locator, não tem como usar a busca por xpath
        //constante em JS é um objeto que é imutável
        
        var deliver = signupFactory.deliver() 

        deliver.cpf = '000000000AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')


    })

    it('Incorrect email', function () { 
               
        var deliver = signupFactory.deliver() 

        deliver.email = 'geise.mauricio.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function(){

        const messages = [
            { field: 'name', output: 'É necessário informar o nome'} ,
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function(){ // uma função de gancho, quando executado vai acessar a página
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){ //loop para percorrer o array
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)

            })

        })
    })

})

    /*it('Required Fields', function(){ //caso de testes que faz a validação de todos os campos obrigatórios

        signupPage.go() //acessa a pagina de cadastro
        signupPage.submit() // funcão que submete os dados inseridos


        //campos obrigatórios que precisam ser preeenchidos
        signupPage.alertMessageShouldBe('É necessário informar o nome')
        signupPage.alertMessageShouldBe('É necessário informar o CPF')
        signupPage.alertMessageShouldBe('É necessário informar o email')
        signupPage.alertMessageShouldBe('É necessário informar o CEP')
        signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        signupPage.alertMessageShouldBe('Selecione o método de entrega')
        signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')

    })*/
    


 
//"ul" em html são agrupador de listas, e "li" é um item de lista