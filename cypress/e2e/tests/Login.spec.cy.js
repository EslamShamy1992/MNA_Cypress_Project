import {LoginPage} from "../PageObjects/LoginPage";
import { RegisterPage } from "../PageObjects/RegisterPage";
import HomePage from "../PageObjects/HomePage";
 const login= new LoginPage();
 const register= new RegisterPage()
 const homepage= new HomePage()
describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login')
           
      })

    it('check login as organization with a valid data for the fisrt time ', () => {
      register.setClickOnOrgCard()
      login.setEnterOrgName('Liverpool')
      login.setClickOnOrgLoginButton()
      login.setEnterUserNameFirstTime()
      login.setEnterUserPassword()
      login.setClickOnUserLoginButton()
      // //Assert that General Info is displayed
      homepage.setGeneralInfoIsDisplayed()
      
     
    })

    it('check login as organization with a valid data ', () => {
      register.setClickOnOrgCard()
      login.setEnterOrgName('elshamy')
      login.setClickOnOrgLoginButton()
      login.setEnterUserName()
      login.setEnterUserPassword()
      login.setClickOnUserLoginButton()
      //Assert that notification center is displayed
      homepage.setNotificationCenterIsVisible()
      
     
    })

    it('check login as Individual User with a valid data ', () => {
      register.setClickOnIndividualUser()
      login.setEnterUserName()
      login.setEnterUserPassword()
      login.setClickOnUserLoginButton()
      //Assert that notification center is displayed
      homepage.setNotificationCenterIsVisible()

    })

  })