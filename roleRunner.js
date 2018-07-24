var harvesterRole = require('harvester');
var roleUpgrader = require('upgrader');
var builderRole = require('builder');
var repairerRole = require('repairer');

const config = {
    'harvester': harvesterRole,
    'upgrader': roleUpgrader.run,
    'builder': builderRole,
    'repairer': repairerRole
}

let roleRunner = {
    run: function() {
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];
            
            if(creep.memory.role == 'builder' || creep.memory.role == 'harvester' || creep.memory.role == 'repairer') {
                let runner = new config[creep.memory.role](creep);
                runner.run();
            }
            else {
                config[creep.memory.role](creep);
            }
        }
    }
}

module.exports = roleRunner;