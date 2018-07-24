module.exports = {
    creepCount: function(role) {
        return Object.values(Game.creeps).filter(a => a.memory.role == role).length;
    },

    creepCountRoom: function(role, room) {
        return Object.values(room.find(FIND_MY_CREEPS)).filter(a => a.memory.role == role).length;
    }
};