import { Login } from "./Locators";
export class LoginPage {
    constructor() {
        this.originURL = 'https://devstable.eastus.cloudapp.azure.com:8443';
      }


      

      
    setAdminUser(){
       
        cy.origin(this.originURL,()=>{ 
            cy.get('input[id="username"]').type('eslam_shamy+4@hotmail.com')
            cy.get('input[id="password"]').type('55555Eslam@')
            cy.get('input[id="kc-login"]').click()   
    });
  
    }
    
    setLoginWithguardianOrg(){
      cy.get('.LoginTypes_org-icon__ru7AT').click()
      cy.get('.login-org').type('liverpool')
      cy.get('.mna-btn-primary').click()
      cy.origin(this.originURL,()=>{ 
        cy.get('input[id="username"]').type('eslamelshamy1992+1@gmail.com')
        cy.get('input[id="password"]').type('55555Eslam@')
        cy.get('input[id="kc-login"]').click()

      });
    }
  
    setClickOnRegister(){
   
      cy.get('.Header_register-btn__90TWH').click()
    }
  
    setEnterOrgName(org){
       cy.get('.login-org').type(org)
      
    }

    setClickOnOrgLoginButton(){
       cy.get('.mna-btn-primary').click()
    }


    setEnterUserNameFirstTime(){
      cy.origin(this.originURL,()=>{ 
        cy.get('input[id="username"]').type('eslamelshamy1992+1@gmail.com')

      });
    }
    setEnterUserName(){
      cy.origin(this.originURL,()=>{ 
        cy.get('input[id="username"]').type('eslam_shamy+4@hotmail.com')

      });
    }

    setEnterUserPassword(){
      cy.origin(this.originURL,()=>{ 
        cy.get('input[id="password"]').type('55555Eslam@')

      });
    }

    setClickOnUserLoginButton(){
      cy.origin(this.originURL,()=>{ 
        cy.get('input[id="kc-login"]').click()
      });
    }

    setConfirmationMessageIsDisplayed(){

      cy.get('.flex-grow-1').should('be.visible') 
    }





  }