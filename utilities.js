module.exports = {
    creepCount: function(role) {
        return Object.values(Game.creeps).filter(a => a.memory.role == role).length;
    }
};