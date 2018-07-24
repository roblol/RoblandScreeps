let harvesterSpawn = require('harvesterSpawn');
let builderSpawn = require('builderSpawn');
let repairerSpawn = require('repairerSpawn');
let upgraderSpawn = require('upgraderSpawn');

var spawner = {
    run: function() {
        for(let name in Game.rooms) {
            let room = Game.rooms[name];

            let hSpawn = new harvesterSpawn(room);
            let rSpawn = new repairerSpawn(room);
            let uSpawn = new upgraderSpawn(room);
            let bSpawn = new builderSpawn(room);

            if (hSpawn.canSpawn()) {
                hSpawn.spawn();
            } else if (rSpawn.canSpawn()) {
                rSpawn.spawn();
            } else if (uSpawn.canSpawn()) {
                uSpawn.spawn();
            } else if (bSpawn.canSpawn()) {
                bSpawn.spawn();
            }
        }
	}
};

module.exports = spawner;