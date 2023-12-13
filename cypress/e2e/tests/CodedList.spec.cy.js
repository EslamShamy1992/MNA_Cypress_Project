import CodedListPage from "../PageObjects/CodedListPage"
import { LoginPage } from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import { faker } from "@faker-js/faker"
 const codedlist= new CodedListPage()
const loginpage= new LoginPage()
 const homepage= new HomePage()

 describe('Coded lists Test Cases', () => {
    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login',)
        loginpage.setLoginWithguardianOrg()
       
      })
      
      it('1-check that the user can contribute a coded lists successfully', () => {
      
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

      it('2-check contribute coded list while leaving all mandatory fields empty ', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

      it('3-check skip coded list name by entering whitesapces', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setCodedListName('    ')
        codedlist.setAlias(faker.person.firstName())
        codedlist.setCodedListDescription(faker.person.fullName())
        codedlist.setEditablebutton()
        codedlist.setSearchablebutton()
        codedlist.setPrintablebutton()
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

      it('4-check skip Alias field by entering whitesapces', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setCodedListName(faker.person.firstName())
        codedlist.setAlias('    ')
        codedlist.setCodedListDescription(faker.person.fullName())
        codedlist.setEditablebutton()
        codedlist.setSearchablebutton()
        codedlist.setPrintablebutton()
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

      it('5-check skip Description field by entering whitesapces', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setCodedListName(faker.person.firstName())
        codedlist.setAlias(faker.person.firstName())
        codedlist.setCodedListDescription('    ')
        codedlist.setEditablebutton()
        codedlist.setSearchablebutton()
        codedlist.setPrintablebutton()
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

      
      it('6-check skip Capabilities field', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setCodedListName(faker.person.firstName())
        codedlist.setAlias(faker.person.firstName())
        codedlist.setCodedListDescription(faker.person.fullName())
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

    })
   
        


   
