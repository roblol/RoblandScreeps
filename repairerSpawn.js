let baseSpawn = require('baseSpawn');

let repairerSpawn = function(room) {
    baseSpawn.call(this, room);
    this.creepBuild = [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
    this.roleName = 'repairer';
};

repairerSpawn.prototype = Object.create(baseSpawn.prototype);

repairerSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 1 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = repairerSpawn;