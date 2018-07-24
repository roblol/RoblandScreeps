let baseSpawn = require('baseSpawn');

let harvesterSpawn = function(room) {
    baseSpawn.call(this, room);
    this.creepBuild = [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
    this.roleName = 'harvester';
};

harvesterSpawn.prototype.spawn = function() {
    if(this.count(this.roleName) < 2) {
        ParentClass.prototype.myMethod.call(this);
    }
};

harvesterSpawn.prototype = Object.create(baseSpawn.prototype);