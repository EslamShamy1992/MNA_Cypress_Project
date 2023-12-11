export default class LayersPage{



    setOnBoardButton(){
        cy.get('a[href="/penta-app-admin-guardian/connectwizard"]').click()
    }


    setSelectLanguage(){

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

    setEnableOrDisableEditCapabilities(){

        cy.get('input[name="enableEdit"]').click()

    
    }

    setEnableorDisableSearchCapabilities(){

        cy.get('input[name="enableSearch"]').click()
    }

    setEnableOrDisablePrintCapabilities(){

        cy.get('input[name="enablePrint"]').click({force:true})
    }


    setUploadSampleFile(){
        cy.get('input[id="sampleData-add"]').attachFile('file.zip',{force:true})
    }
    setUploadSupportingFile(){
        cy.get('input[id="supportingFiles-add"]',).attachFile('ss.png',{force:true})
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

setAssertThatBasicInfoIsDisplayed(basicinfo){
    cy.get(':nth-child(1) > .SectionHeader_header__lknUG > .SectionHeader_title__bj5EQ').should('have.text',basicinfo)
}
}