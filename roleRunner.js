const config = {
    'harvester': require('harvester'),
    'upgrader': require('upgrader'),
    'builder': require('builder'),
    'repairer': require('repairer')
}

let roleRunner = {
    run: function() {
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];
            
            let runner = new config[creep.memory.role](creep);
            runner.run();
        }
    }
}

module.exports = roleRunner;