let utilities = require('utilities');
let harvesterSpawn = require('harvesterSpawn');

var spawner = {

    run: function() {
        let upgraderCount = utilities.creepCount('upgrader');
        let builderCount = utilities.creepCount('builder');
        let repairerCount = utilities.creepCount('repairer');

        for(let name in Game.rooms) {
            let room = Game.rooms[name];

            if(room.energyCapacityAvailable == room.energyAvailable) {
                let hSpawn = new harvesterSpawn(room);
                hSpawn.spawn();
            }
        }

        if(Game.spawns['Robland'].energy == Game.spawns['Robland'].energyCapacity && repairerCount < 1) {
            Game.spawns['Robland'].spawnCreep(
                [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                'Repairer' + Game.time.toString(),
                {
                    memory: {
                        role: 'repairer',
                        refuel: true
                    }
                }
            );
        }
        
        if(Game.spawns['Robland'].energy == Game.spawns['Robland'].energyCapacity && upgraderCount < 5) {
            Game.spawns['Robland'].spawnCreep(
                [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                'Upgrader' + Game.time.toString(),
                {
                    memory: {
                        role: 'upgrader',
                        refuel: true
                    }
                }
            );
        }
        
        if(Game.spawns['Robland'].energy == Game.spawns['Robland'].energyCapacity && builderCount < 0) {
            Game.spawns['Robland'].spawnCreep(
                [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                'Builder' + Game.time.toString(),
                {
                    memory: {
                        role: 'builder',
                        refuel: true
                    }
                }
            );
        }
	}
};

module.exports = spawner;