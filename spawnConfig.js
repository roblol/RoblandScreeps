module.exports = {
    creeps: {
        'basic': {
            tiers: [
                {
                    energy: 0,
                    config: [WORK, MOVE, CARRY]
                }
            ]
        },
        'builder': {
            tiers: [
                {
                    energy: 1300,
                    config: [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 800,
                    config: [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 550,
                    config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
                },
                {
                    energy: 0,
                    config: [WORK, MOVE, CARRY]
                }
            ]
        },
        'harvester': {
            tiers: [
                {
                    energy: 1300,
                    config: [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 800,
                    config: [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 550,
                    config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
                },
                {
                    energy: 0,
                    config: [WORK, MOVE, CARRY]
                }
            ]
        },
        'repairer': {
            tiers: [
                {
                    energy: 550,
                    config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
                },
                {
                    energy: 0,
                    config: [WORK, MOVE, CARRY]
                }
            ]
        },
        'upgrader': {
            tiers: [
                {
                    energy: 1300,
                    config: [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 800,
                    config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
                },
                {
                    energy: 550,
                    config: [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
                },
                {
                    energy: 0,
                    config: [WORK, MOVE, CARRY]
                }
            ]
        }
    }
};