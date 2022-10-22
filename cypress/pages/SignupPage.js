

class SignupPage { // representa a pagina de cadastro
    
    go() {
        
        cy.visit('/') 

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){ // função que vai preencher todo formulario de cadastro // essa função recebe o objeto "deliver" que é a própria massa de teste
         
         cy.get('input[name="fullName"]').type(deliver.name)
         cy.get('input[name="cpf"]').type(deliver.cpf)
         cy.get('input[name="email"]').type(deliver.email)
         cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

         cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
         cy.get('input[type="button"][value="Buscar CEP"]').click()

         cy.get('input[name="address-number"]').type(deliver.address.number)
         cy.get('input[name="address-details"]').type(deliver.address.details)

         cy.get('input[name="address"]').should('have.value', deliver.address.street) //should para fazer a verificação, para verificar se os campos foram auto completado após clicar para procurar o CEP, pode usar o should para verificar se o campo foi preenchido corretamente 
         cy.get('input[name="district"]').should('have.value', deliver.address.district) 
         cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state) 


         cy.contains('.delivery-method li', deliver.delivery_method).click()

         cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh) // attachFile é um componente da biblioteca cypress-file-upload' 
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) { // função que encapsula a validação

        cy.get(' .swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)

    }

    alertMessageShouldBe(expectedMessage) {
       // cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible') // essa opção faz a combinação de localizador com o texto

    }
}

export default new SignupPage; // aqui esta sendo exportada a classe para que ela possa ser 
//importada na camada de testes, com essa escrita já exporta instanciado, facilita a manutenção e implemtação do código
