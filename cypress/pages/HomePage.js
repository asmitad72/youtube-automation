export const url = 'https://www.youtube.com/';
const searchInputSelector = "input[name='search_query']";
const channelSearchTitleSelector =
    ':nth-child(1) > #content-section > #info-section > #main-link > #info > #channel-title > #container > #text-container > #text';
const channelRendererTag = 'ytd-channel-renderer';
const avatarSectionId = '#avatar-section';
const channelPageTitleSelector = 'body > ytd-app:nth-child(4) > div:nth-child(6) > ytd-page-manager:nth-child(4) > ytd-browse:nth-child(1) > div:nth-child(3) > ytd-c4-tabbed-header-renderer:nth-child(1) > tp-yt-app-header-layout:nth-child(1) > div:nth-child(1) > tp-yt-app-header:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ytd-channel-name:nth-child(1) > div:nth-child(1) > div:nth-child(1) > yt-formatted-string:nth-child(1)';
const subscribeButton = '#subscribe-button > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill';
const subscribeButtonLoginPopup = "ytd-modal-with-title-and-button-renderer.style-scope";

export class HomePage {
    static visitPage(url) {
        cy.visit(url);
    }

    static setCookieConsent() {
        cy.get('body').then(($body) => {
            if ($body.find('#dialog').length > 0) {
                cy.get('#dialog > #content').scrollTo('bottom');
                cy.get(
                    ':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill'
                ).click();
            }
        });
    }

    static vefiryHomepage() {
        cy.url().should('eq', 'https://www.youtube.com/');
    }

    static searchInputAction(searchKey) {
        cy.get(searchInputSelector).click().type(searchKey).type('{enter}');
    }

    static verifyChannelTitle(searchKey, channelTitle) {
        HomePage.searchInputAction(searchKey);
        cy.get(channelSearchTitleSelector).should('contain.text', channelTitle);
    }

    static selectChannelFromResultByIndex(searchKey, index) {
        HomePage.searchInputAction(searchKey);
        cy.get(channelRendererTag).find(avatarSectionId).eq(index).click();
    }

    static verifyChannelPage(channelId, channelTitle) {
        const chanelUrl = url + channelId;
        HomePage.visitPage(chanelUrl);
        cy.get(channelPageTitleSelector).should('contain.text', channelTitle);
    }

    static subscribeChannel(channelId) {
        const chanelUrl = url + channelId;
        HomePage.visitPage(chanelUrl);
        cy.get(subscribeButton).click();
        cy.get(subscribeButtonLoginPopup).should('exist').and('be.visible');
    }
}
