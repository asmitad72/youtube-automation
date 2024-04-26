describe('YouTube Channel Navigation', () => {
    beforeEach(() => {
        // Open YouTube homepage
        cy.visit('https://www.youtube.com/');
        cy.get('body').then(($body) => {
            if ($body.find('#dialog').length > 0) {
                cy.get('#dialog > #content').scrollTo('bottom');
                cy.get(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).click();
            }
        });
    });

    it('Accept cookies', () => {
         cy.get('body').then(($body) => {
            if ($body.find('#dialog').length > 0) {
                cy.get('#dialog > #content').scrollTo('bottom');
                cy.get(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).click();
            }
        });
    });

    it('Access YouTube Homepage', () => {
        cy.url().should('eq', 'https://www.youtube.com/');
    });

    it('Search for Channel goldmines', () => {
        cy.get("input[name='search_query']").click().type('goldmines{enter}');
        cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').should('contain.text', 'Goldmines');
    });

    it('Search for Channel tseries', () => {
        cy.get("input[name='search_query']").click().type('tseries{enter}');
        cy.get(':nth-child(2) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').should('contain.text', 'T-Series');
    });

    it('Select first Channel from Search Results', () => {
        cy.get("input[name='search_query']").click().type('goldmines{enter}');
        cy.get('ytd-channel-renderer')
        .find('#avatar-section')
        .eq(0)
        .click();
    });

    it('Select second Channel from Search Results', () => {
        cy.get("input[name='search_query']").click().type('goldmines{enter}');
        cy.get('ytd-channel-renderer')
        .find('#avatar-section')
        .eq(1)
        .click();
       
    });

    it('Verify Channel Page', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/@GoldminesTelefilms');
        // Verify channel details are displayed correctly
        cy.get('body > ytd-app:nth-child(4) > div:nth-child(6) > ytd-page-manager:nth-child(4) > ytd-browse:nth-child(1) > div:nth-child(3) > ytd-c4-tabbed-header-renderer:nth-child(1) > tp-yt-app-header-layout:nth-child(1) > div:nth-child(1) > tp-yt-app-header:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ytd-channel-name:nth-child(1) > div:nth-child(1) > div:nth-child(1) > yt-formatted-string:nth-child(1)').should('contain.text', 'Goldmines');
        
    });
  
    it('Subscribe to the Channel', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/@GoldminesTelefilms');
        // Click on the ""Subscribe"" button
        cy.get('#subscribe-button > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
        //Verify subscribe button is clicked
        cy.get('ytd-modal-with-title-and-button-renderer.style-scope').should('exist').and('be.visible');
        //fail test case
        //cy.get('ytd-modal-with-title-and-button-renderer.style-scope').should('not.exist').and('not.be.visible');

        // Verify user is subscribed to the channel (add assertions as needed)
     });






});
