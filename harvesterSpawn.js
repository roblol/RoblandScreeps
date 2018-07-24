let baseSpawn = require('baseSpawn');

let harvesterSpawn = function(room) {
    baseSpawn.call(this, room);
    this.roleName = 'harvester';
    this.creepBuild = this.getTier(this.roleName, this.room);
};

harvesterSpawn.prototype = Object.create(baseSpawn.prototype);

harvesterSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 2 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = harvesterSpawn;