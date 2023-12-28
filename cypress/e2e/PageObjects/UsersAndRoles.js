
export default class UsersAndRoles{
    
      generateRandomTwoChars() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const stringLength = 2;
        let randomString = '';
      
        for (let i = 0; i < stringLength; i++) {
          randomString += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      
        return randomString;
      }
      
setUsersButton(){

    cy.get('button[id="mna.permissions.userAndRoles.usersLabel"]').click()
}

setEditButton(){

    cy.get('a[href="/penta-app-admin-guardian/AdminInfo/liverpool"]').click({force:true})
}

setEditUserButton(edit){

    cy.get('img[title="Edit"]').eq(edit).click()
}

setDataManagerCheckBox(){

    cy.get('input[id="default.roles.Data Manager"]').click({force:true})
}

setSaveButton(){

    cy.get('button[id="mna.contribution.common.stepper.save"]').click({force:true})
}

setAddRoleButton(){
    cy.get('a[id="mna.permissions.userAndRoles.roles.addRoleTitle"]').click()
}

setRoleNameField(rolename){
    cy.get('input[id="mna.permissions.userAndRoles.roles.roleName"]').clear().type(rolename)
}

setRoleInitial(init){
   
        cy.get('input[id="mna.permissions.userAndRoles.roles.roleInitial"]').clear().type(init)
     
    
}

setRoleDescription(desc){
    cy.get('textarea[class="TextAreaInput_text-area__Fn7FZ"]').clear().type(desc)
}

setAddRoleSaveButton(){
    cy.get('button[id="mna.contribution.common.stepper.save"]').click()

}

setAddRoleCancelButton(){
    cy.get('button[id="mna.contribution.common.stepper.cancel"]').click()

}

setDeleteRoleButton(){
    cy.get('[src="/penta-app-admin-guardian/static/media/delete.54df2a2a8e04a4193e13799b5313ff46.svg"]').last().click()
}

setClickOnYesButton(){

    cy.get('button[class="mna-btn-danger mna-btn-md"]').click()
}

setEditButton(){
    cy.get('img[src="/penta-app-admin-guardian/static/media/edit.f718d58da5026aa6ea5ef7387a918218.svg"]').eq(0).click({force:true})
}

setAddUserButton(){

    cy.get('a[id="mna.permissions.users.addNewUser"]').click()
}

setAddUserFirstName(first){

    cy.get('input[id="mna.permissions.users.firstName"]').clear().type(first)
}

setAddUserLastName(last){

    cy.get('input[id="mna.permissions.users.lastName"]').clear().type(last)
}


setUserName(username){
    cy.get('input[id="mna.permissions.users.userName"]').clear().type(username)
}

setNickName(nickname){
    cy.get('input[id="mna.permissions.users.nickName"]').clear().type(nickname)
}

setPassword(pass){

    cy.get('input[id="mna.permissions.users.password"]').type(pass)
}

setConfirmPassword(confirm){

    cy.get('input[id="mna.permissions.users.confirmPassword"]').type(confirm)
}

setEmailAddress(email){

    cy.get('input[id="mna.permissions.users.emailAddress"]').clear().type(email)
}

setPhoneNumber(phone){

    cy.get('input[id="mna.permissions.users.phoneNumber"]').clear().type(phone)
}

setUserBirthday(birthday){
    cy.get('input[id="mna.permissions.users.birthDate"]').type(birthday)
}


setDeleteUserButton(equal){
    cy.get('img[title="Delete"]').eq(equal).click()
}

setConfirmDeleteButton(){
    cy.get('.mna-btn-danger').click()   
}

setExportUsersButton(){

    cy.get('a[download="users"]').click()
}






}