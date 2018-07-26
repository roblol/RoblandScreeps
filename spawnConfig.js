module.exports = {
    creeps: {
        'basic': {
            0: {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            },
            1: {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            }
        },
        'builder': {
            0: {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            },
            1: {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            }
        },
        'harvester': {
            0: {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            },
            1: {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            }
        },
        'repairer': {
            0: {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            },
            1: {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            }
        },
        'upgrader': {
            0: {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            },
            1: {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            }
        }
    }
};