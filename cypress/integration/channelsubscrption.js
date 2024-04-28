import { HomePage, url } from '../pages/HomePage';

describe('YouTube Channel Navigation', () => {
    beforeEach(() => {
        HomePage.visitPage(url);
        HomePage.setCookieConsent();
    });

    it('Accept cookies', () => {
        HomePage.setCookieConsent();
    });

    it('Access YouTube Homepage', () => {
        HomePage.vefiryHomepage();
    });

    it('Search for Channel goldmines', () => {
        HomePage.verifyChannelTitle('goldmines', 'Goldmines');
    });

    it('Select first Channel from Search Results', () => {
        HomePage.selectChannelFromResultByIndex('goldmines', 0);
    });

    it('Select second Channel from Search Results', () => {
        HomePage.selectChannelFromResultByIndex('goldmines', 1);
    });

    it('Verify Channel Page', () => {
        HomePage.verifyChannelPage('@GoldminesTelefilms', 'Goldmines');
    });

    it('Subscribe to the Channel', () => {
        HomePage.subscribeChannel('@GoldminesTelefilms');
    });
});
