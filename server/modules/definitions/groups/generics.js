exports.genericEntity = {
    NAME: "",
    LABEL: "Unknown Entity",
    TYPE: "unknown",
    DAMAGE_CLASS: 0,
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 16,
    INDEPENDENT: false,
    CONTROLLERS: ["doNothing"],
    HAS_NO_MASTER: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "toTarget",
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: "normal",
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_0: [],
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    UPGRADES_TIER_5: [],
    UPGRADES_TIER_6: [],
    UPGRADES_TIER_7: [],
    UPGRADES_TIER_8: [],
    UPGRADES_TIER_9: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
exports.genericTank = {
    LABEL: "Unknown Class",
    TYPE: "tank",
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: "motor",
    FACING_TYPE: "toTarget",
    SIZE: 12,
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    IGNORED_BY_AI: false,
    BODY: {
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
    HITS_OWN_TYPE: "hardOnlyTanks",
};

exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};