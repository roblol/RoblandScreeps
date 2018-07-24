var roleRunner = require('roleRunner');
var spawner = require('spawner');

module.exports.loop = function () {
    
    spawner.run();
    roleRunner.run();
    
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
}

