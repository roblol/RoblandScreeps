let baseRole = require('baseRole');

let upgraderRole = function(creep) {
    baseRole.call(this, creep);
};

upgraderRole.prototype = Object.create(baseRole.prototype);

upgraderRole.prototype.getTarget = function(creep) {
    return creep.room.controller;
};

upgraderRole.prototype.doWork = function(creep, target) {
    if(creep.upgradeController(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
};

module.exports = upgraderRole;