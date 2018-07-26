let baseSpawn = require('baseSpawn');

let builderSpawn = function(room) {
    baseSpawn.call(this, room);
    this.roleName = 'builder';
    this.creepBuild = this.getTier(this.roleName, this.room);
};

builderSpawn.prototype = Object.create(baseSpawn.prototype);

builderSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 2 &&
        Object.values(this.room.find(FIND_CONSTRUCTION_SITES)).length > 0 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = builderSpawn;