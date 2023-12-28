
export default class HomePage{



    setNotificationCenterIsVisible(){

        cy.get('.flex-grow-1 > h3').should('be.visible')
    }

    setGeneralInfoIsDisplayed(){

        cy.get('.StepperWizardHeader_step-active__UE\+rj > .StepperWizardHeader_step-name__HObS6').should('be.visible')
    }


setClickOnProfileMenu(){

    cy.get('.ProfileButton_menu-image__6ukP- > img').click()
}

    setClickOnManageSubscription(){
        cy.get('.CollapseMenu_items-menu__Rpqv0 > ul > :nth-child(2) > a').click()

    }

    setMycontributionsButton(){
         
    
        cy.get('#mna\.navRoute\.myCatalogue').click()
       

    }
    setClickOnLayersButton(){

        cy.get('a[href="/penta-app-admin-guardian/MyContributions"]').click({force:true})

    }

    setUsersAndRolesButton(){

        cy.get('a[href="/penta-app-admin-guardian/UserManagement"]').click({force:true})
    }










    }