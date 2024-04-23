describe('YouTube Channel Navigation', () => {
  beforeEach(() => {
    // Open YouTube homepage
    cy.visit('https://www.youtube.com/');
  });

	it('Accept cookies', () => {
        cy.get("body > ytd-app:nth-child(5) > ytd-consent-bump-v2-lightbox:nth-child(11) > tp-yt-paper-dialog:nth-child(1) > div:nth-child(4)").scrollTo('bottom');
		cy.get("button[aria-label='Accept the use of cookies and other data for the purposes described']").should("be.visible")
		cy.get("button[aria-label='Accept the use of cookies and other data for the purposes described']").click();
	})

  it('Access YouTube Homepage', () => {
		
    // Verify YouTube homepage is loaded
    cy.url().should('eq', 'https://www.youtube.com/');
  });

  xit('Search for Channel', () => {
    // Enter channel name in search bar and submit
    cy.get('input#search').type('Channel Name{enter}');
    // Verify search results are displayed
    cy.get('h3').should('contain.text', 'Channel Name');
  });

  xit('Select Channel from Search Results', () => {
    // Enter channel name in search bar and submit
    cy.get('input#search').type('Channel Name{enter}');
    // Click on the first search result
    cy.get('h3').first().click();
    // Verify user is redirected to channel page
    cy.url().should('include', '/channel/');
  })

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