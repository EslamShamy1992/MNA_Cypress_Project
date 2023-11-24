export class LoginPage {
    constructor() {
        this.originURL = 'https://devstable.eastus.cloudapp.azure.com:8443';
      }
    setAdminUser(){
       
        cy.origin(this.originURL,()=>{ 
            cy.get('#username').type('eslam_shamy+4@hotmail.com')
            cy.get('#password').type('55555Eslam@')
            cy.get('#kc-login').click()
           
    });

  

    }
  
    setClickOnRegister(){
   
      cy.get('.Header_register-btn__90TWH').click()
    }
  












  }