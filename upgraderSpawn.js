let baseSpawn = require('baseSpawn');

let upgraderSpawn = function(room) {
    baseSpawn.call(this, room);
    this.creepBuild = [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
    this.roleName = 'upgrader';
};

upgraderSpawn.prototype = Object.create(baseSpawn.prototype);

upgraderSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 4 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = upgraderSpawn;