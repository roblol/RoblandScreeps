let baseRole = require('baseRole');

let harvesterRole = function(creep) {
    baseRole.call(this, creep);
};

harvesterRole.prototype = Object.create(baseRole.prototype);

harvesterRole.prototype.getTarget = function(creep) {
    let targets = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.energy < object.energyCapacity
    });
    
    targets.sort((a,b) => a.energy - b.energy);
    return targets[0];
};

harvesterRole.prototype.doWork = function(creep, target) {
    if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
};

module.exports = harvesterRole;