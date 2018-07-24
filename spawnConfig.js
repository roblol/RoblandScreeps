module.exports = {
    creeps: {
        'basic': {
            tiers: [
                [WORK, MOVE, CARRY],
                [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            ]
        },
        'builder': {
            tiers: [
                [WORK, MOVE, CARRY],
                [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            ]
        },
        'harvester': {
            tiers: [
                [WORK, MOVE, CARRY],
                [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            ]
        },
        'repairer': {
            tiers: [
                [WORK, MOVE, CARRY],
                [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            ]
        },
        'upgrader': {
            tiers: [
                [WORK, MOVE, CARRY],
                [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            ]
        }
    }
};