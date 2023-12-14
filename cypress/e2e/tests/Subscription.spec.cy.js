import { faker } from "@faker-js/faker";
import { LoginPage } from "../PageObjects/LoginPage";
import { RegisterPage } from "../PageObjects/RegisterPage";
import HomePage from "../PageObjects/HomePage";
import  SubscriptionPage  from "../PageObjects/SubscriptionPage";
const login= new LoginPage(); 
const register = new RegisterPage();
const homepage= new HomePage();
const subscription= new SubscriptionPage()
const Url= faker.internet.url()
const country= faker.location.country()
const city= faker.location.city()

describe('Subscription Test Cases', () => {

    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login')
       login.setLoginWithguardianOrg()
    })
      // it('TC1-check that the user can subscribe successfully', () => {
      //   homepage.setClickOnProfileMenu()
      //   homepage.setClickOnManageSubscription()
      //   subscription.setEnterURL(Url)
      //   subscription.setCountry('Egypt')
      //   subscription.setCity('Cairo')
      //   subscription.setNumberOfUsers('2')
      //   subscription.setOrgLogo()
      //   subscription.setSaveTheOrgLogo()
      //   // subscription.setCoverPhoto()
      //   subscription.setClickOnNextButton()
      //   subscription.setSelectContributor()
      //   subscription.setClickOnNextButton()
      //   homepage.setNotificationCenterIsVisible()

         
      // })




    })