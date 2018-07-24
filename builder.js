let baseRole = require('baseRole');

let builderRole = function(creep) {
  baseRole.call(this, creep);
};

builderRole.prototype = Object.create(baseRole.prototype);

builderRole.prototype.getTarget = function(creep) {
    return creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
};

builderRole.prototype.doWork = function(creep, target) {
    if(target && creep.build(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
};

module.exports = builderRole;