
export default class{



    setClickOnCodedListsButton(){
        cy.get('a[href="/penta-app-admin-guardian/MyContributionsCodedLists"]').click({force:true})

    }


    setCreateNewCodedListButton(){

        cy.get('a[id="mna.catalogues.contribution.lookups.btnCreate"]').click()
    }

    setSelectLanguage(){

        cy.get(':nth-child(1) > .Checkbox_container__xEcJj > .Checkbox_check-container__KYtui > .Checkbox_checkmark__Huc6G').click()
    }

    
    setClickOnNextButton(){

        cy.get('button[class="mna-btn-md mna-btn-primary"]').click()
    }


    setCodedListName(codedlist){

        cy.get('input[placeholder="Coded List Name"]').type(codedlist)
    }


    
    setAlias(alias){

        cy.get('input[name="displayName"]').type(alias)
    }


    setCodedListDescription(description){

        cy.get('textarea[name="description"]').type(description)
    }

    setEditablebutton(){

        cy.get('input[name="enableEdit"]').click({force:true})
    }


    setSearchablebutton(){

        cy.get('input[name="enableSearch"]').click({force:true})
    }
    

    setPrintablebutton(){

        cy.get('input[name="enablePrint"]').click({force:true})
    }
    
    setNextButtonCodedlistInfoStep(){
        cy.get('button[class="mna-btn-primary mna-btn-md"]').click()
    }

    setSaveButton(){
        cy.get('button[class="mna-btn-primary mna-btn-md"]').click()
    
    }
    
    setAssertThatcreatecodedlistbuttonIsVisible(){

        cy.get('a[id="mna.catalogues.contribution.lookups.btnCreate"]').should('be.visible')
    }
    setAssertThatBasicInfoIsDisplayed(basicinfo){
        cy.get('span[class="SectionHeader_title__bj5EQ"]').should('be.visible')
    }
    
    setManageButton(num){

        cy.get('button[id="mna.catalogues.common.cards.btnManage"]').eq(num).click()
    }
    
    setUploadCSVFile(uploadfile){
        cy.get('input[id="uploadLookupFile"]').attachFile(uploadfile)
    }


    setUploadButton(){

        cy.get('label[class="FileInput_button__MLBOr undefined"]').click()
    }


    setUploadType(select){

        cy.get('select[name="uploadType"]').select(select)
    }
    setConfirmButton(){

        cy.get('.col-md-2 > .mna-btn-secondary').click()
    }


    setSuccessfullyAddedMessageIsdisplayed(){
        cy.get('.alert-success > .Notifications_message__-4Kx8').should('be.visible')
    }

    setDownloadCSVFile(){
        cy.get('a[id="mna.catalogues.contribution.lookups.manageTable.downloadBtn"]').click()
    }
    setManageSaveButton(){

        cy.get('button[id="mna.catalogues.contribution.lookups.manageTable.saveBtn"]').click()
    }

    setAddNewRowButton(){

        cy.get('button[id="mna.contribution.plugin.addRowBtn"]').click()
    }
    
    setEnterID(id1,id2){

        cy.get('input[id="lookup-table.id.1"]').clear().type(id1)
        cy.get('input[id="lookup-table.id.2"]').clear().type(id2)
    }
}