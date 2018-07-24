let baseRole = require('baseRole');

let repairerRole = function(creep) {
    baseRole.call(this, creep);
};

repairerRole.prototype = Object.create(baseRole.prototype);

repairerRole.prototype.getTarget = function(creep) {
    targets = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.hits < object.hitsMax
    });
    
    targets.sort((a,b) => a.hits - b.hits);
    return targets[0];
};

repairerRole.prototype.doWork = function(creep, target) {
    if(creep.repair(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
};

module.exports = repairerRole;