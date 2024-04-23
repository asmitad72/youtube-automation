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
});
