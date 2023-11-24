import {LoginPage} from "../PageObjects/LoginPage";
 const login= new LoginPage();
describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login/org')
        cy.get('.login-org').type('elshamy')
        cy.get('.mna-btn-primary').click()
        login.setAdminUser()
        
      })


    it('passes', () => {

        cy.get(':nth-child(6) > #navbarDropdown').click()
        cy.get('[href="/penta-app-admin/MyCataloguePlugins"]').click()

    })
  })