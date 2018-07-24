let baseSpawn = require('baseSpawn');

let harvesterSpawn = function(room) {
    baseSpawn.call(this, room);
    this.creepBuild = [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
    this.roleName = 'harvester';
};

harvesterSpawn.prototype = Object.create(baseSpawn.prototype);

harvesterSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 2 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = harvesterSpawn;