
import { LoginPage } from "../PageObjects/LoginPage"
import HomePage from "../PageObjects/HomePage"
import UsersAndRoles from "../PageObjects/UsersAndRoles"
import { faker } from "@faker-js/faker"
const loginpage = new LoginPage()
const homepage = new HomePage()
const usersAndroles = new UsersAndRoles()

describe('Users And Roles Test Cases', () => {
  beforeEach(() => {
    cy.visit('/penta-app-admin-guardian/login')
    loginpage.setLoginWithguardianOrg()
    // numberOfEmails++

  })

  it('TC1-check adding a new role ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setAddRoleButton()
    usersAndroles.setRoleNameField(faker.person.firstName())
    usersAndroles.setRoleInitial(usersAndroles.generateRandomTwoChars())
    usersAndroles.setRoleDescription(faker.person.jobDescriptor())
    usersAndroles.setAddRoleSaveButton()
    // Assert that role added successfully message is displayed
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')

  })

  it('TC2-check delete a role ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setAddRoleButton()
    usersAndroles.setRoleNameField(usersAndroles.generateRandomTwoChars())
    usersAndroles.setRoleInitial(usersAndroles.generateRandomTwoChars())
    usersAndroles.setRoleDescription(faker.person.jobDescriptor())
    usersAndroles.setAddRoleSaveButton()
    usersAndroles.setDeleteRoleButton()
    usersAndroles.setClickOnYesButton()
    // assert that role deleted successfully message is displayed
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')


  })

  it('TC3-check edit a role ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setEditButton()
    usersAndroles.setRoleNameField(usersAndroles.generateRandomTwoChars())
    usersAndroles.setRoleInitial(usersAndroles.generateRandomTwoChars())
    usersAndroles.setRoleDescription(faker.person.jobDescriptor())
    usersAndroles.setAddRoleSaveButton()
    // assert that role edited successfully message is displayed
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')


  })

  it.only('TC1-check adding a new role by entering whitespaces in the manadatory fields  ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setAddRoleButton()
    usersAndroles.setRoleNameField('    ')
    usersAndroles.setRoleInitial('  ')
    usersAndroles.setRoleDescription('     ')
    usersAndroles.setAddRoleSaveButton()
     // Assert that add role title is still displayed
     cy.get('.SectionHeader_title__bj5EQ').should('be.visible')
   

  })

  it.only('TC1-check leave all mandatory fields empty in add new role page', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setAddRoleButton()
    usersAndroles.setAddRoleSaveButton()
    // Assert that add role title is still displayed
    cy.get('.SectionHeader_title__bj5EQ').should('be.visible')
  })

  it('TC4-check adding a new user', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setAddUserButton()
    usersAndroles.setAddUserFirstName(faker.person.firstName())
    usersAndroles.setAddUserLastName(faker.person.lastName())
    usersAndroles.setUserName(faker.person.fullName())
    usersAndroles.setNickName(faker.person.middleName())
    usersAndroles.setPassword('55555Eslam@')
    usersAndroles.setConfirmPassword('55555Eslam@')
    usersAndroles.setEmailAddress(`eslamelshamy1992+6@gmail.com`)
    usersAndroles.setPhoneNumber('1006838663')
    usersAndroles.setUserBirthday('21/01/1992')
    usersAndroles.setDataManagerCheckBox()
    usersAndroles.setSaveButton()


  })

  it('TC5-check delete a user ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setDeleteUserButton(0)
    usersAndroles.setConfirmDeleteButton()
    // Assert that user deleted successfully message is displayed
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')

  })

  it('TC6-check edit a user data ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setEditUserButton(0)
    usersAndroles.setAddUserFirstName(faker.person.firstName())
    usersAndroles.setAddUserLastName(faker.person.lastName())
    usersAndroles.setNickName(faker.person.middleName())
    usersAndroles.setPassword('55555Eslam@@')
    usersAndroles.setConfirmPassword('55555Eslam@@')
    usersAndroles.setEmailAddress(`eslamelshamy1992+4@gmail.com`)
    usersAndroles.setPhoneNumber('1006838664')
    usersAndroles.setUserBirthday('21/01/1993')
    usersAndroles.setSaveButton()
    // Assert that user updated successfully is displayed
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')


  })


  it('TC7-check add new user while leaving all mandatory fields empty', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setAddUserButton()
    usersAndroles.setSaveButton()
    // Assert that the Add user title is displayed
    cy.get('.SectionHeader_title__bj5EQ').should('be.visible')

  })

  it('TC8-check skip all the mandatory fields by entering whitespaces in add user page', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setAddUserButton()
    usersAndroles.setAddUserFirstName('    ')
    usersAndroles.setAddUserLastName('    ')
    usersAndroles.setUserName('    ')
    usersAndroles.setNickName('    ')
    usersAndroles.setPassword('    ')
    usersAndroles.setConfirmPassword('    ')
    usersAndroles.setEmailAddress(`    `)
    usersAndroles.setPhoneNumber('    ')
    usersAndroles.setUserBirthday('21/01/1992')
    usersAndroles.setSaveButton()
    // Assert that the Add user title is displayed
    cy.get('.SectionHeader_title__bj5EQ').should('be.visible')

  })


  it('TC9-check that export all users data functionality is working correctly ', () => {

    homepage.setUsersAndRolesButton()
    usersAndroles.setUsersButton()
    usersAndroles.setExportUsersButton()
    // assert that the file is downloaded successfully
    cy.verifyDownload('users.csv')


  })





})




