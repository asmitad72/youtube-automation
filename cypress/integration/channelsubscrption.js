describe('YouTube Channel Navigation', () => {
    beforeEach(() => {
        // Open YouTube homepage
        cy.visit('https://www.youtube.com/');
        cy.get('body').then(($body) => {
            if ($body.find('#dialog').length > 0) {
                console.log('Cookies already accepted');
                cy.get('#dialog > #content').scrollTo('bottom');
                cy.get(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).click();
            }
        });
    });

    xit('Accept cookies', () => {
        cy.get('body').then(($body) => {
            if (
                $body.find(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).length > 0
            ) {
                cy.get('#dialog > #content').scrollTo('bottom');
                cy.get(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).click();
            }
        });
    });

    xit('Access YouTube Homepage', () => {
        // Verify YouTube homepage is loaded
        cy.url().should('eq', 'https://www.youtube.com/');
    });

    it('Search for Channel goldmines', () => {
        // Enter channel name in search bar and submit
        cy.get("input[name='search_query']").click().type('goldmines{enter}', { force: true });
        cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').should('contain.text', 'Goldmines');
    });

    it('Search for Channel tseries', () => {
        // Enter channel name in search bar and submit
        cy.get("input[name='search_query']").click().type('tseries{enter}', { force: true });
        cy.get(':nth-child(2) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').should('contain.text', 'T-Series');
    });

    xit('Select Channel from Search Results', () => {
        cy.get("input[name='search_query']").click().type('goldmines{enter}', { force: true });
        cy.get(':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text').should('contain.text', 'Goldmines');

        cy.get('#content-section')
        .find('#avatar-section')
        .first()
        .click();
    });

    xit('Verify Channel Page', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/channel/CHANNEL_ID');
        // Verify channel details are displayed correctly
        cy.get('h1').should('contain.text', 'Channel Name');
        cy.get('img').should('have.attr', 'alt', 'Channel Logo');
        cy.get('#description-container').should('contain.text', 'Channel Description');
    });

    xit('Subscribe to the Channel (Optional)', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/channel/CHANNEL_ID');
        // Click on the ""Subscribe"" button (if available)
        cy.get('yt-formatted-string#subscribe-button').click();
        // Verify user is subscribed to the channel (add assertions as needed)
    });

    xit('Explore Channel Content', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/channel/CHANNEL_ID');
        // Scroll through the channel page to explore content
        cy.scrollTo('bottom');
        // Add assertions to verify content exploration
    });

    xit('Navigate to Videos', () => {
        // Navigate to a channel page (replace URL with actual channel page URL)
        cy.visit('https://www.youtube.com/channel/CHANNEL_ID');
        // Click on the ""Videos"" tab
        cy.contains('Videos').click();
        // Verify user is redirected to the videos page
        cy.url().should('include', '/videos');
    });

    xit('Watch Videos', () => {
        // Navigate to a video page (replace URL with actual video page URL)
        cy.visit('https://www.youtube.com/watch?v=VIDEO_ID');
        // Add assertions to verify video watching functionality
    });

    xit('Return to Homepage', () => {
        // Navigate to a channel page or video page (replace URL with actual page URL)
        cy.visit('https://www.youtube.com/channel/CHANNEL_ID');
        // Click on the YouTube logo to return to the homepage
        cy.get('a#logo-icon').click();
        // Verify user is redirected to the homepage
        cy.url().should('eq', 'https://www.youtube.com/');
    });
});
