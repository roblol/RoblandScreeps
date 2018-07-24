let baseSpawn = require('baseSpawn');

let builderSpawn = function(room) {
    baseSpawn.call(this, room);
    this.creepBuild = [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
    this.roleName = 'builder';
};

builderSpawn.prototype = Object.create(baseSpawn.prototype);

builderSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 1 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = builderSpawn;