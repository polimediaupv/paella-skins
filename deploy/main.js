import { Paella, PlayPauseButtonPlugin } from 'paella-core';
import { basicPlugins } from 'paella-basic-plugins';
import { slidePlugins } from 'paella-slide-plugins';
import { zoomPlugins } from 'paella-zoom-plugin';
import { userTrackingPlugins } from 'paella-user-tracking';


async function main() {
    const initParams = {
        // Initialization parameters
        plugins: [
            ...basicPlugins,
            ...slidePlugins,
            ...zoomPlugins,
            ...userTrackingPlugins
        ]
    };

    try {
        const paella = new Paella('player-container', initParams);
        // apply Opencast theme
        await paella.skin.loadSkin('skins/opencast/theme.json');
        // load Paella
        await paella.loadManifest()        
    }
    catch (e) {
        console.error(e);
    }
}

main();