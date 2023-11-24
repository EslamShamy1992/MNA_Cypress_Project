import { faker } from "@faker-js/faker";
import { LoginPage } from "../PageObjects/LoginPage";
import { RegisterPage } from "../PageObjects/RegisterPage";
const login= new LoginPage(); 
const register = new RegisterPage();

describe('Registration Test Cases', () => {
    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login/org')
      })
    it('the user should be able to register as Organization successfully ', () => {
      login.setClickOnRegister();
      register.setClickOnOrgRegister()
      register.setDisclaimerAgreement();
      register.setOrgName('Liverpool');
      register.setEmail('eslamelshamy1992+1@gmail.com');
      register.setPhoneNumber();
      register.setPassword();
      register.setConfirmPassword();
      register.setClickOnRegisterButton();
      //assert that confirmation message is displayed
      cy.get('.flex-grow-1').should('be.visible') 
     
    })

    it('the user should be able to register as individual successfully ', () => {
      login.setClickOnRegister();
      register.setClickOnIndividualUser()
      register.setDisclaimerAgreement()
      register.setIndividualFirstName('Eslam')
      register.setIndividualLastName('Elshamy')
      register.setEnterTheUserName(faker.person.middleName())
      register.setIndividualEmail(faker.internet.email())
      register.setIndividualPassword('55555Eslam@')
      register.setIndividualConfirmPassword('55555Eslam@')
      register.setCreateIndividualAccount()
      //assert that confirmation message is displayed
      cy.get('.flex-grow-1').should('be.visible') 
     
    })
  })