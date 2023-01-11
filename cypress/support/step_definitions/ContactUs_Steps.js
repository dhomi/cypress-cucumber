/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
    cy.get('[name="first_name"]').type("Hugo")
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type("Blogs")
})

When('I enter an email adress', () => {
    cy.get('[name="email"]').type("test@email.com")
})

When('I type a comment', () => {
    cy.get('textarea[name="message"]').type("Hello world!")
})
