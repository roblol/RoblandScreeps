let spawnConfig = require('spawnConfig');

let baseSpawn = function(room) {
    this.room = room;
    this.roleName = 'basic';
    this.creepBuild = this.getTier(this.roleName, this.room);
}

baseSpawn.prototype.count = function(roleName, room) {
    return Object.values(room.find(FIND_MY_CREEPS)).filter(a => a.memory.role == roleName).length;
}

baseSpawn.prototype.getTier = function(roleName, room) {
    let tiers = spawnConfig.creeps[roleName].tiers;

    for(let i = 0; i < tiers.length; i++) {
        if(room.energyCapacityAvailable > tiers[i].energy) {
            return tiers[i].config;
        }
    }
}

baseSpawn.prototype.canSpawn = function() {
    throw 'must be overridden';
}

baseSpawn.prototype.spawn = function() {
    let firstSpawner = this.room.find(FIND_MY_SPAWNS)[0];
    firstSpawner.spawnCreep(
        this.creepBuild,
        this.roleName + Game.time.toString(),
        {
            memory: {
                role: this.roleName,
                refuel: true
            }
        }
    );
};

module.exports = baseSpawn;