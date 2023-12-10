export default class SubscriptionPage{



    setEnterURL(url){

        cy.get('.col-lg-6 > .TextFieldInput_input-icon-container__kMyzB > .TextFieldInput_input-container__XPE1C > .TextFieldInput_text-input__N7FVO').clear().type(url)
    }


    setCountry(country){

        cy.get('input[placeholder="Choose organization country"]').type(country)
    }

    setCity(city){

        cy.get('input[placeholder="Choose Organization City"]').type(city)
    }

    setNumberOfUsers(users){

        cy.get(':nth-child(5) > .TextFieldInput_input-icon-container__kMyzB > .TextFieldInput_input-container__XPE1C > .TextFieldInput_text-input__N7FVO').clear().type(users)
    }


    setOrgLogo(){
        
            cy.get('input[accept="image/*"]').attachFile('ss.png');
          
    }

    setClickOnNextButton(){

        cy.get('.mna-btn-primary').click()
    }

    setSelectContributor(){
        cy.get('.Checkbox_checkmark__Huc6G').click()
    }


    setClickOnFinishButton(){

        cy.get('.mna-btn-primary').click()
    }

    setSaveTheOrgLogo(){
        cy.get('.profile-avatar-modal-buttons > .mna-btn-primary').click()
    }

    setCoverPhoto(){

    cy.get('input[id="chooseBanner"]').attachFile('ss.png')
}
}