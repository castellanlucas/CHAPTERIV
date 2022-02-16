/// <reference types="cypress" />

    var Chance = require('chance')
    var chance = new Chance()

/// mocha > Test Runner
/// describe, context, it

describe('cadastro', () => {
    it('Quando eu informar os dados e finalizar, entao o cadastro deve ser finalizado', () => {
        cy.visit('https://form-agilizei.netlify.app')

        // Inputs de texto, textarea / email > utilizar type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // Inputs Radio, checkboxes > utilizar check
        cy.get('input[value =n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        //Inputs do tipo Combobox , selects > select
        cy.get('select#countries').select('Dinamarca', {force:true})
        cy.get('select#years').select('1990', {force:true})
        cy.get('select#months').select('Setembro', {force:true})
        cy.get('select#days').select('6', {force:true})

        //Inputs de senha > type
        cy.get('input#firstpassword').type('Alunos@2022')
        cy.get('input#secondpassword').type('Alunos@2022')

        //Inputs do tipo button
        cy.get('#submitbtn').click()

        //espero que minha aplicação seja direcionada para listagem
        //url
        //deveria conter listagem
        //should contain listagem
        cy.url().should('contain', 'listagem')




        //input[name=firstName]
        //input[name=lastName]
        //textarea[name=adress]
        //input[name=emailAdress]

        //input[value =n]
        //input[type=checkbox]

        //select#countries
        //select#years
        //select#months
        //select#days
        //select#firstpassword
        //select#secondpassword
    });
});