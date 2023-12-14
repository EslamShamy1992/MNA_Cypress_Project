import { faker } from "@faker-js/faker";
import { LoginPage } from "../PageObjects/LoginPage";
import { RegisterPage } from "../PageObjects/RegisterPage";
const login= new LoginPage(); 
const register = new RegisterPage();
const username= faker.person.middleName()
const email= faker.internet.email()
describe('Registration Test Cases', () => {
    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login/org')
       
      })
    it('TC-1the user should be able to register as Organization successfully ', () => {
      login.setClickOnRegister();
      register.setClickOnOrgCard()
      register.setDisclaimerAgreement();
      register.setOrgName(username);
      register.setEmail(email);
      register.setPhoneNumber();
      register.setPassword();
      register.setConfirmPassword();
      register.setClickOnRegisterButton();
      //assert that confirmation message is displayed
      login.setConfirmationMessageIsDisplayed()
     
    })

    it('TC2-the user should be able to register as individual successfully ', () => {
      login.setClickOnRegister();
      register.setClickOnIndividualUser()
      register.setDisclaimerAgreement()
      register.setIndividualFirstName('Eslam')
      register.setIndividualLastName('Elshamy')
      register.setEnterTheUserName(username)
      register.setIndividualEmail(email)
      register.setIndividualPassword('55555Eslam@')
      register.setIndividualConfirmPassword('55555Eslam@')
      register.setCreateIndividualAccount()
      //assert that confirmation message is displayed
      login.setConfirmationMessageIsDisplayed()
     
    })
  })
  