"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, description, watchUrl, imgUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.imgUrl = imgUrl;
        this.description = description;
        this.watchUrl = watchUrl;
    }
}
exports.Serie = Serie;
