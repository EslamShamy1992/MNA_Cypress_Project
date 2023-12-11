import CodedListPage from "../PageObjects/CodedListPage"
import { LoginPage } from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import { faker } from "@faker-js/faker"
 const codedlist= new CodedListPage()
const loginpage= new LoginPage()
 const homepage= new HomePage()

 describe('Coded lists Test Cases', () => {
    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login')
        loginpage.setLoginWithguardianOrg()
       
      })
      
      it.only('check that the user can contribute a coded lists successfully', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setCodedListName(faker.person.lastName())
        codedlist.setAlias('Coded List')
        codedlist.setCodedListDescription('this is a new coded list from eslam elshamy')
        codedlist.setEditablebutton()
        codedlist.setSearchablebutton()
        codedlist.setPrintablebutton()
        codedlist.setNextButtonCodedlistInfoStep()
        codedlist.setSaveButton()
        // assert that the coded list button is visible
        codedlist.setAssertThatcreatecodedlistbuttonIsVisible()
 
      })

    })
   
        


   
