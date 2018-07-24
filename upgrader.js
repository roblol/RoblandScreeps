var roleUpgrader = {

    run: function(creep) {
        if(creep.carry.energy == 0) {
            creep.memory.refuel = true;
        }
        else if(creep.carry.energy == creep.carryCapacity) {
            creep.memory.refuel = false;
        }
        
        if(creep.memory.refuel) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;