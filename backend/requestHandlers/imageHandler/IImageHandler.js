"use strict";
/**
 * Created by owenray on 7/9/16.
 */

class IImageHandler
{
    getImageData(mediaItem, type)
    {

    }
}

IImageHandler.TYPE_BACKDROP = "backdrop";
IImageHandler.TYPE_POSTER = "poster";
IImageHandler.TYPE_POSTER_SMALL = "postersmall";

module.exports = IImageHandler;