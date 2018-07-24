let utilities = require('utilities');

var spawner = {

    run: function() {
        let harvesterCount = utilities.creepCount('harvester');
        let upgraderCount = utilities.creepCount('upgrader');
        let builderCount = utilities.creepCount('builder');
        let repairerCount = utilities.creepCount('repairer');
        
        if(Game.spawns['Robland'].energy == Game.spawns['Robland'].energyCapacity && harvesterCount < 2) {
            Game.spawns['Robland'].spawnCreep(
                [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
                'Harvester' + Game.time.toString(),
                {
                    memory: {
                        role: 'harvester',
                        refuel: true
                    }
                }
            );
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