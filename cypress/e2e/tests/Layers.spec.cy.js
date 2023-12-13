import LayersPage from "../PageObjects/LayersPage"
import { LoginPage } from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import { faker } from "@faker-js/faker"
const loginpage= new LoginPage()
const homepage= new HomePage()
const layerpage= new LayersPage()
describe('Layers Test Cases', () => {
    beforeEach(() => {
        cy.visit('/penta-app-admin-guardian/login')
        loginpage.setLoginWithguardianOrg()
       
      })
      
      it('TC1-check that the user can contribute a layer successfully', () => {
      
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
      it('TC2-check contribute a layer while leaving all mandatory fields empty ', () => {
       
        homepage.setClickOnLayersButton()
        layerpage.setOnBoardButton()
        layerpage.setSelectLanguage()
        layerpage.setClickOnNextButton()
        layerpage.setEnterLayerURL('http://193.122.150.171:8082/geoserver/gcwc/wfs')
        layerpage.setClickOnLoadButton()
        layerpage.setClickOnConnectButton()
        layerpage.setEnableOrDisableEditCapabilities()
        layerpage.setEnableOrDisablePrintCapabilities()
        layerpage.setEnableorDisableSearchCapabilities()
        layerpage.setNextButtonSpecifyStep()
        //assert that Basic Information is Displayed
        layerpage.setAssertThatBasicInfoIsDisplayed('Basic Information')
        
       
      })
    
      it('TC3- check skip Alias field by entering whitespaces ', () => {
       
        homepage.setClickOnLayersButton()
        layerpage.setOnBoardButton()
        layerpage.setSelectLanguage()
        layerpage.setClickOnNextButton()
        layerpage.setEnterLayerURL('http://193.122.150.171:8082/geoserver/gcwc/wfs')
        layerpage.setClickOnLoadButton()
        layerpage.setClickOnConnectButton()
        layerpage.setEnterAlias('    ')
        layerpage.setDescriptionField(faker.person.fullName())
        layerpage.setNextButtonSpecifyStep()
        //assert that Basic Information is Displayed
        layerpage.setAssertThatBasicInfoIsDisplayed('Basic Information')
        
       
      })

      it('TC4- check skip Description field by entering whitespaces ', () => {
       
        homepage.setClickOnLayersButton()
        layerpage.setOnBoardButton()
        layerpage.setSelectLanguage()
        layerpage.setClickOnNextButton()
        layerpage.setEnterLayerURL('http://193.122.150.171:8082/geoserver/gcwc/wfs')
        layerpage.setClickOnLoadButton()
        layerpage.setClickOnConnectButton()
        layerpage.setEnterAlias(faker.person.firstName())
        layerpage.setDescriptionField('    ')
        layerpage.setNextButtonSpecifyStep()
        //assert that Basic Information is Displayed
        layerpage.setAssertThatBasicInfoIsDisplayed('Basic Information')
        
       
      })

      it('TC5- check skip Capabilities fields ', () => {
       
        homepage.setClickOnLayersButton()
        layerpage.setOnBoardButton()
        layerpage.setSelectLanguage()
        layerpage.setClickOnNextButton()
        layerpage.setEnterLayerURL('http://193.122.150.171:8082/geoserver/gcwc/wfs')
        layerpage.setClickOnLoadButton()
        layerpage.setClickOnConnectButton()
        layerpage.setEnterAlias(faker.person.firstName())
        layerpage.setDescriptionField(faker.person.fullName())
        layerpage.setEnableOrDisableEditCapabilities()
        layerpage.setEnableOrDisablePrintCapabilities()
        layerpage.setEnableorDisableSearchCapabilities()
        layerpage.setNextButtonSpecifyStep()
        //assert that Basic Information is Displayed
        layerpage.setAssertThatBasicInfoIsDisplayed('Basic Information')
        
       
      })
})