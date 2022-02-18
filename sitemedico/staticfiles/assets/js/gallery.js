var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: '06e98caeefbeeff87eba4ab62bde0ddb'
});
userFeed.run();