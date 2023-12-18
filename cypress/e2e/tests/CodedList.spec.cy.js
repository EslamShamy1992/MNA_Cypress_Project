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
      
      it('TC1-check that the user can contribute a coded lists successfully', () => {
      
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

      it('TC2-check contribute coded list while leaving all mandatory fields empty ', () => {
      
        codedlist.setClickOnCodedListsButton()
        codedlist.setCreateNewCodedListButton()
        codedlist.setSelectLanguage()
        codedlist.setClickOnNextButton()
        codedlist.setNextButtonCodedlistInfoStep()
         //assert that Basic Information is Displayed
         codedlist.setAssertThatBasicInfoIsDisplayed()
        
        
 
      })

      it('TC3-check skip coded list name by entering whitesapces', () => {
      
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

      it('TC4-check skip Alias field by entering whitesapces', () => {
      
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

      it('TC5-check skip Description field by entering whitesapces', () => {
      
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

      
      it('TC6-check skip Capabilities field', () => {
      
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

      it.only('TC7-check that the user can upload and replace csv file in manage table', () => {
      
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
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('replace.csv')
        codedlist.setConfirmButton()
        codedlist.setSuccessfullyAddedMessageIsdisplayed()
        codedlist.setManageSaveButton()
      
      })

      it('TC8-check that the user can Append csv file in manage table', () => {
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
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('replace.csv')
        codedlist.setUploadType('Replace')
        codedlist.setConfirmButton()
        codedlist.setSuccessfullyAddedMessageIsdisplayed()
        codedlist.setManageSaveButton()
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('Append.csv')
        codedlist.setUploadType('Append')
        codedlist.setConfirmButton()
        codedlist.setSuccessfullyAddedMessageIsdisplayed()
      
      
      })

      it('TC9-check that the user can Add smart csv file in manage table', () => {
      
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
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('replace.csv')
        codedlist.setUploadType('Replace')
        codedlist.setConfirmButton()
        codedlist.setSuccessfullyAddedMessageIsdisplayed()
        codedlist.setManageSaveButton()
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('Smart.csv')
        codedlist.setUploadType('Smart Upload')
        codedlist.setConfirmButton()
        codedlist.setSuccessfullyAddedMessageIsdisplayed()
      
      
      })


      it('TC10-check that the user can download tha table in manage page', () => {
      
        
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
        codedlist.setManageButton(0)
        codedlist.setUploadCSVFile('replace.csv')
        codedlist.setUploadType('Replace')
        codedlist.setConfirmButton()
        codedlist.setDownloadCSVFile()
        // Assert that the file is downloaded successfully 
        cy.verifyDownload('Coded List.csv');

      })

      it('TC11-check that the ID is unique ', () => {
      
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
        codedlist.setManageButton(0)
        codedlist.setAddNewRowButton()
        codedlist.setEnterID('1000','1000')
        codedlist.setManageSaveButton()
        // Assert that validation icon is displayed 
        cy.get('i[data-tip="IDs must be unique"]').should('be.visible')
        

      })



       

    })
   
        


   
