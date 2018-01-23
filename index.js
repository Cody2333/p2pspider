const fs = require('fs');
const path = require('path');
const bencode = require('bencode');

const P2PSpider = require('./lib');

const p2p = P2PSpider({
    nodesMaxSize: 400,
    maxConnections: 800,
    timeout: 10000
});

p2p.ignore(function (infohash, rinfo, callback) {
    const torrentFilePathSaveTo = path.join(__dirname, "torrents", infohash + ".torrent");
    fs.exists(torrentFilePathSaveTo, function(exists) {
        callback(exists); //if is not exists, download the metadata.
    });
});

p2p.on('metadata', function (metadata) {
    const torrentFilePathSaveTo = path.join(__dirname, "torrents", metadata.infohash + ".torrent");
    fs.writeFile(torrentFilePathSaveTo, bencode.encode({'info': metadata.info}), function(err) {
        if (err) {
            return console.error(err);
        }
        console.log(metadata.infohash + ".torrent has saved.");
    });
});

p2p.listen(6881, '0.0.0.0');
