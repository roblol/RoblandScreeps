module.exports = {
    creeps: {
        'basic': {
            '0': {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            }
        },
        'builder': {
            '3': {
                energy: 1300,
                config: [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
            },
            '2': {
                energy: 800,
                config: [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
            },
            '1': {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            },
            '0': {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            }
        },
        'harvester': {
            '3': {
                energy: 1300,
                config: [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
            },
            '2': {
                energy: 800,
                config: [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
            },
            '1': {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            },
            '0': {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            }
        },
        'repairer': {
            '1': {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            },
            '0': {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            }
        },
        'upgrader': {
            '3': {
                energy: 1300,
                config: [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
            },
            '2': {
                energy: 800,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
            },
            '1': {
                energy: 550,
                config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
            },
            '0': {
                energy: 0,
                config: [WORK, MOVE, CARRY]
            }
        }
    }
};