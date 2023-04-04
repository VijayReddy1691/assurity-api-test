/// <reference types = "cypress"/>

describe('Verify GET Categories Request', ()=> {
    it('Validate GET Categories Request',()=> {
        cy.request('GET','https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.Name).to.eq('Carbon credits')
            expect(response.body.CanRelist).to.eq(true)            
            var promotionsList = response.body.Promotions;
            for(var i =0; i < promotionsList.length; i++) {
                if(promotionsList[i].Name === 'Gallery' && promotionsList[i].Description === 'Good position in category') {
                    expect(promotionsList[i]).to.have.property('Name', 'Gallery')
                    expect(promotionsList[i]).to.have.property('Description', 'Good position in category')
                }

            }
            
        })
    })
})
