const RequestHandler = require('../RequestHandler');
const httpServer = require('../../HttpServer');
const Database = require('../../Database');
const MovieDB = require('moviedb-api');
const Settings = require('../../Settings');

const movieDB = new MovieDB({
  consume: true,
  apiKey: Settings.getValue('tmdb_apikey'),
});

class TMDBApiHandler extends RequestHandler {
  async handleRequest() {
    const item = Database.getById('media-item', this.context.params.id);
    let m;

    if (item.attributes.mediaType === 'tv') m = await movieDB.tvExternal_ids({ id: item.attributes['external-id'] });
    else m = await movieDB.movie({ id: item.attributes['external-id'] });

    this.context.redirect(`https://imdb.com/title/${m.imdb_id}`);
    return true;
  }
}

httpServer.registerRoute('get', '/api/redirectToIMDB/:id', TMDBApiHandler);

module.exports = TMDBApiHandler;
