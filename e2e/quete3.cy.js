const datas = require('../../fixtures/data');

datas.forEach(data => {
    
    describe('test API', () => {
        
        beforeEach(() => {
            cy.requestApi(data.query.q, data.query.type, data.query.limit).then(response => {
                cy.wrap(response).as('response')
                })
            })
        
        it('check status', () => {
            cy.get('@response').its('status').should('eq', 200)
        })

        it('check format', () => {
            cy.get("@response")
                .its("headers")
                .its('content-type').should('include', data.expected.format);
        });

        it('check info, array and lenght', () => {
            cy.get("@response").then(response => {
                expect(response.body).has.property('Similar')
                expect(response.body.Similar)
                    .has.property("Info")
                    .is.an("array")
                    .has.lengthOf(data.query.q.length);
            })
        });
    })  
})
