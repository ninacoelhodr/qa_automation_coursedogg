describe('Meetings api', () => {
    context('GET /meetings', () => {
        
        it('There are 3 upcoming featured meetings for September 2nd, 2021.', () => {
            cy.request({
                method: 'GET',
                url: 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?startDate=2021-09-02&endDate=2021-09-13'
            })
                .then((response) => {
                    let bodyResponse = JSON.parse(JSON.stringify(response.body));
                    expect(response).property('status').to.equal(200)
                    expect(response.body).to.not.be.null;  
                    expect(Object.keys(bodyResponse)).to.have.length.of.at.least(3);
                });
        });

        it('There is 1 event happening on November 20th, 2021.', () => {
            cy.request({
                method: 'GET',
                url: 'https://dev.coursedog.com/api/v1/em/demoschool_ezra/meetings?startDate=2021-11-20&endDate=2021-11-20'
            })
                .then((response) => {
                    let bodyResponse = JSON.parse(JSON.stringify(response.body));
                    expect(response).property('status').to.equal(200)
                    expect(response.body).to.not.be.null;  
                    expect(Object.keys(bodyResponse)).to.have.length.of.at.least(1);
                });
        });
    
    
    });
});