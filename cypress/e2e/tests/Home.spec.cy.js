import HomePage from "../PageObjects/HomePage"
import { LoginPage } from "../PageObjects/LoginPage";
import { RegisterPage } from "../PageObjects/RegisterPage";
const login= new LoginPage();
const homepage = new HomePage();
const register= new RegisterPage()
 describe(' HomePage TestCases ', () => {

  beforeEach(() => {
    cy.visit('/penta-app-admin-guardian/login')
    register.setClickOnOrgCard()
    login.setEnterOrgName('elshamy')
    login.setClickOnOrgLoginButton()
    login.setAdminUser()
       
  })
    
    it('passes', () => {
      
        homepage.setNotificationCenterIsVisible()
  
      })











 })