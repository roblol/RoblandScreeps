let utilities = require('utilities');

let baseSpawn = function(room) {
    this.room = room;
    this.creepBuild = [WORK, CARRY, MOVE];
    this.roleName = 'basic';
}

baseSpawn.prototype.count = function(roleName) {
    return utilities.creepCount(roleName);
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