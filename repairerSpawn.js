let baseSpawn = require('baseSpawn');

let repairerSpawn = function(room) {
    baseSpawn.call(this, room);
    this.roleName = 'repairer';
    this.creepBuild = this.getTier(this.roleName, this.room);
};

repairerSpawn.prototype = Object.create(baseSpawn.prototype);

repairerSpawn.prototype.canSpawn = function() {
    return this.count(this.roleName, this.room) < 1 &&
        this.room.energyCapacityAvailable == this.room.energyAvailable;
};

module.exports = repairerSpawn;