export default class LayersPage{



    setOnBoardButton(){
        cy.get('a[href="/penta-app-admin-guardian/connectwizard"]').click()
    }


    setSelectLanguage(language){

        cy.get(':nth-child(1) > .Checkbox_container__xEcJj > .Checkbox_check-container__KYtui > .Checkbox_checkmark__Huc6G').click()
    }

    setClickOnNextButton(){

        cy.get('button[class="mna-btn-md mna-btn-primary"]').click()
    }

    setEnterLayerURL(layerurl){
        //layer url http://193.122.150.171:8082/geoserver/gcwc/wfs
        cy.get('input[class="TextFieldInput_text-input__N7FVO"]').type(layerurl)
    }

    setClickOnLoadButton(){
        cy.get('button[id="mna.contribution.common.modal.load"]').click()
    
    }

    setClickOnConnectButton(){
        cy.get('button[id="mna.contribution.common.modal.connect"]').click()
    }

    setEnterAlias(alias){
        cy.get('input[id="mna.contribution.layer.basicInfo.displayNameLabel"]').type(alias)

    }

    setDescriptionField(description){
        cy.get('textarea[name="description"]').type(description)
    }

    setEnableEditCapabilities(){

        cy.get('input[name="enableEdit"]').click()

    
    }

    setEnableSearchCapabilities(){

        cy.get('input[name="enableSearch"]').click()
    }

    setEnablePrintCapabilities(){

        cy.get('input[nname="enablePrint"]').click()
    }


    setUploadSampleFile(){
        cy.get(':nth-child(1) > .BaseInput_input-container__AAt\+t > .FileUploadInput_upload-container__aIhLl > .mna-btn-md').type('ss.png')
    }
    setUploadSupportingFile(){
        cy.get(':nth-child(2) > .BaseInput_input-container__AAt\+t > .FileUploadInput_upload-container__aIhLl > .mna-btn-md').type('ss.png')
    }


setSharedToOrganizationRadioButton(){

    cy.get('input[value="PRIVATE"]').click()
}

setSharedToMarketPlaceRadioButton(){

    cy.get('input[value="PUBLIC"]').click()
}

setNextButtonSpecifyStep(){

    cy.get('button[id="mna.contribution.common.stepper.next"]').click()
}
setNextButtonFieldManagementStep(){

    cy.get('button[id="mna.contribution.common.stepper.next"]').click()
}

setIsBasic(){
    cy.get('input[id="isBasicInfo.0"]').click({force:true})
}

setIsID(){

    cy.get('input[id="isKeyField.0"]').click({force:true})
}

setClickOnSaveButtonPreviewStep(){

    cy.get('button[id="mna.contribution.common.stepper.save"]').click()
}

setAssertVisibleText(){
    cy.get('a[href="/penta-app-admin-guardian/connectwizard"]').should('be.visible')
}
}