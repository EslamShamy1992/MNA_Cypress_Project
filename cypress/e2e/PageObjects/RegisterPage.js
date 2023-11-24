export class RegisterPage {


setClickOnOrgRegister(){

    cy.get('.LoginTypes_side-block-org__LBdVW').click()
}

setDisclaimerAgreement(){

    cy.get('.mna-btn-primary').click()
}

setOrgName(orgname){

    cy.get(':nth-child(1) > .TextFieldInput_input-icon-container__kMyzB > .TextFieldInput_input-container__XPE1C > .TextFieldInput_text-input__N7FVO').type(orgname)

    
}

setEmail(email){

    cy.get(':nth-child(2) > .TextFieldInput_input-icon-container__kMyzB > .TextFieldInput_input-container__XPE1C > .TextFieldInput_text-input__N7FVO').type(email)

}

setPhoneNumber(){

    cy.get('.PhoneInputInput').type("1006838663")
   
}

setPassword(){

    cy.get('input[name="password"]').type("55555Eslam@")
   
}

setConfirmPassword(){

    cy.get('#input_confirmPassword').type("55555Eslam@")
   
}

setClickOnRegisterButton(){
    cy.get('.RegisterOrg_register-button__lNLDr').click()
}

setClickOnIndividualUser(){
    
    cy.get('.LoginTypes_side-block-user__10Ml3').click();
}

setIndividualFirstName(firstname){
    cy.get(':nth-child(1) > .signup_form-control__Pxnwj').type(firstname)
}

setIndividualLastName(lastname){
    cy.get('.pt-xl-0 > .signup_form-control__Pxnwj').type(lastname)
}

setEnterTheUserName(username){

    cy.get(':nth-child(3) > .signup_form-control__Pxnwj').type(username)
}

setIndividualEmail(email){

    cy.get(':nth-child(4) > .signup_form-control__Pxnwj').type(email)
}

setIndividualPassword(password){

    cy.get('input[name="Password"]').type(password)
}

setIndividualConfirmPassword(confirmpass){
    
    cy.get('input[name="confirmPassword"]').type(confirmpass)
}

setCreateIndividualAccount(){

    cy.get('.btn').click()
}















}