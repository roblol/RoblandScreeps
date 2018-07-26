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
    for(let tierConfig in spawnConfig.creeps[roleName].tiers) {
        if(room.energyCapacityAvailable > tierConfig.energy) {
            return tierConfig.config;
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