import LayersPage from "../PageObjects/LayersPage"
import { LoginPage } from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import { RegisterPage } from "../PageObjects/RegisterPage"
const register= new RegisterPage()
const loginpage= new LoginPage()
const homepage= new HomePage()
const layerpage= new LayersPage()

describe('Layers Test Cases', () => {

    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login')
        register.setClickOnOrgCard()
        loginpage.setEnterOrgName('liverpool')
        loginpage.setClickOnOrgLoginButton()
        loginpage.setEnterUserNameFirstTime()
        loginpage.setEnterUserPassword()
        loginpage.setClickOnUserLoginButton()
      })
      
      it('check that the user can contribute a layer successfully', () => {
        //homepage.setMycontributionsButton()
        homepage.setClickOnLayersButton()
        layerpage.setOnBoardButton()
        layerpage.setSelectLanguage()
        layerpage.setClickOnNextButton()
        layerpage.setEnterLayerURL('http://193.122.150.171:8082/geoserver/gcwc/wfs')
        layerpage.setClickOnLoadButton()
        layerpage.setClickOnConnectButton()
        layerpage.setEnterAlias('hello layers')
        layerpage.setDescriptionField('this is the first layer')
        layerpage.setUploadSampleFile()
        layerpage.setUploadSupportingFile()
        layerpage.setNextButtonSpecifyStep()
        layerpage.setIsBasic()
        layerpage.setIsID()
        layerpage.setNextButtonFieldManagementStep()
        layerpage.setClickOnSaveButtonPreviewStep()
        //assert that on board button is visible
        layerpage.setAssertVisibleText('On-Board')
 
      })
    
     
})