let baseRole = function(creep){
    this.creep = creep;
};

baseRole.prototype.checkFuel = function(creep) {
    if(creep.carry.energy == 0) {
        return true;
    }
    else if(creep.carry.energy == creep.carryCapacity) {
        return false;
    }
    return creep.memory.refuel;
};

baseRole.prototype.refuel = function(creep) {
    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
    }
};

baseRole.prototype.getTarget = function(creep) {
    throw 'must be overridden';
};

baseRole.prototype.doWork = function(creep, target) {
    throw 'must be overridden';
};

baseRole.prototype.run = function() {
    this.creep.memory.refuel = this.checkFuel(this.creep);
    
    if(this.creep.memory.refuel) {
        this.refuel(this.creep);
    }
    else {
        let target = this.getTarget(this.creep);
        this.doWork(this.creep, target);
    }
};

module.exports = baseRole;