
var PotionFactory = function() {
  this.alchemySkill = 100;

  // sanity check to check the data looks valid
  this.validateIngredientsEffects = function() {
    var badness = false;
    _.each(this.ingredients, function(ingredient) {
      _.each(ingredient['effects'], function(effect) {
        if ( typeof this.effects[effect] === 'undefined' ) {
          console.log(ingredient + ' ' + effect + ' is undefined!');
        } else {
          if ( typeof this.effects[effect]['cost'] === 'undefined' ) {
            console.log(effect + ' has no cost!');
            badness = true
          }
          if ( typeof this.effects[effect]['mag'] === 'undefined' ) {
            console.log(effect + ' has no mag!');
            badness = true
          }
          if ( typeof this.effects[effect]['dur'] === 'undefined' ) {
            console.log(effect + ' has no dur!');
            badness = true
          }
        }
      }, this);
    }, this);
    if (badness) {
      alert("alchemy data failed internal consistency check!\ne-mail lamont@scriptkiddie.org and let him know");
    }
  }

  this.ingredients = {
    abecan_longfin: {
      effects: [
        'weakness_to_frost',
        'fortify_sneak',
        'weakness_to_poison',
        'fortify_restoration'
      ]
    },
    ancestor_moth_wing: {
      dlc: 'dawnguard',
      effects: [
        'damage_stamina',
        'fortify_conjuration',
        'damage_magicka_regen',
        'fortify_enchanting'
      ]
    },
    ash_creep_cluster: {
      dlc: 'dragonborn',
      effects: [
        'damage_stamina',
        'invisibility',
        'resist_fire',
        'fortify_destruction'
      ]
    },
    ash_hopper_jelly: {
      dlc: 'dragonborn',
      effects: [
        'restore_health',
        'fortify_light_armor',
        'resist_shock',
        'weakness_to_frost'
      ]
    },
    ashen_grass_pod: {
      dlc: 'dragonborn',
      effects: [
        'resist_fire',
        'weakness_to_shock',
        'fortify_lockpicking',
        'fortify_sneak'
      ]
    },
    bear_claws: {
      effects: [
        'restore_stamina',
        'fortify_health',
        'fortify_one_handed',
        'damage_magicka_regen'
      ]
    },
    bee: {
      effects: [
        'restore_stamina',
        'ravage_stamina',
        'regenerate_stamina',
        'weakness_to_shock',
      ]
    },
    beehive_husk: {
      effects: [
        'resist_poison',
        'fortify_light_armor',
        'fortify_sneak',
        'fortify_destruction',
      ]
    },
    berits_ashes: {
      dlc: "quest",
      name: "Berit's Ashes",
      effects: [
        'damage_stamina',
        'resist_fire',
        'fortify_conjuration',
        'ravage_stamina'
      ]
    },
    bleeding_crown: {
      effects: [
        'weakness_to_fire',
        'fortify_block',
        'weakness_to_poison',
        'resist_magic'
      ]
    },
    blisterwort: {
      effects: [
        'damage_stamina',
        'frenzy',
        'restore_health',
        'fortify_smithing',
      ]
    },
    blue_butterfly_wing: {
      effects: [
        'damage_stamina',
        'fortify_conjuration',
        'damage_magicka_regen',
        'fortify_enchanting'
      ]
    },
    blue_dartwing: {
      effects: [
        'resist_shock',
        'fortify_pickpocket',
        'restore_health',
        'fear'
      ]
    },
    blue_mountain_flower: {
      effects: [
        'restore_health',
        'fortify_conjuration',
        'fortify_health',
        'damage_magicka_regen'
      ]
    },
    boar_tusk: {
      dlc: 'dragonborn',
      effects: [
        'fortify_stamina',
        'fortify_health',
        'fortify_block',
        'frenzy'
      ]
    },
    bone_meal: {
      effects: [
        'damage_stamina',
        'resist_fire',
        'fortify_conjuration',
        'ravage_stamina'
      ]
    },
    briar_heart: {
      effects: [
        'restore_magicka',
        'fortify_block',
        'paralysis',
        'fortify_magicka'
      ]
    },
    burnt_spriggan_wood: {
      dlc: 'dragonborn',
      effects: [
        'weakness_to_fire',
        'fortify_alteration',
        'damage_magicka_regen',
        'slow'
      ]
    },
    butterfly_wing: {
      effects: [
        'restore_health',
        'fortify_barter',
        'lingering_damage_stamina',
        'damage_magicka'
      ]
    },
    canis_root: {
      effects: [
        'damage_stamina',
        'fortify_one_handed',
        'fortify_marksman',
        'paralysis'
      ]
    },
    charred_skeever_hide: {
      effects: [
        'restore_stamina',
        'cure_disease',
        'resist_poison',
        'restore_health',
      ]
    },
    chaurus_eggs: {
      effects: [
        'weakness_to_poison',
        'fortify_stamina',
        'damage_magicka',
        'invisibility'
      ]
    },
    chaurus_hunter_antennae: {
      dlc: 'dawnguard'
    },
    chickens_egg: {
      name: "Chicken's Egg",
      effects: [
        'resist_magic',
        'damage_magicka_regen',
        'waterbreathing',
        'lingering_damage_stamina'
      ]
    },
    creep_cluster: {
      effects: [
        'restore_magicka',
        'damage_stamina_regen',
        'fortify_carry_weight',
        'weakness_to_magic'
      ]
    },
    crimson_nirnroot: {
      effects: [
        'damage_health',
        'damage_stamina',
        'invisibility',
        'resist_magic'
      ]
    },
    cyrodilic_spadetail: {
      effects: [
        'damage_stamina',
        'fortify_restoration',
        'fear',
        'ravage_health'
      ]
    },
    daedra_heart: {
      effects: [
        'restore_health',
        'damage_stamina_regen',
        'damage_magicka',
        'fear'
      ]
    },
    deathbell: {
      effects: [
        'damage_health',
        'ravage_stamina',
        'slow',
        'weakness_to_poison'
      ]
    },
    dragons_tongue: {
      name: "Dragon's Tongue",
      effects: [
        'resist_fire',
        'fortify_barter',
        'fortify_illusion',
        'fortify_two_handed'
      ]
    },
    dwarven_oil: {
      effects: [
        'weakness_to_magic',
        'fortify_illusion',
        'regenerate_magicka',
        'restore_magicka'
      ]
    },
    ectoplasm: {
      effects: [
        'restore_magicka',
        'fortify_destruction',
        'fortify_magicka',
        'damage_health'
      ]
    },
    elves_ear: {
      effects: [
        'restore_magicka',
        'fortify_marksman',
        'weakness_to_frost',
        'resist_fire'
      ]
    },
    emperor_parasol_moss: {
      dlc: 'dragonborn',
      effects: [
        'damage_health',
        'fortify_magicka',
        'regenerate_health',
        'fortify_two_handed'
      ]
    },
    eye_of_sabre_cat: {
      name: "Eye of Sabre Cat",
      effects: [
        'restore_stamina',
        'ravage_health',
        'damage_magicka',
        'restore_health'
      ]
    },
    falmer_ear: {
      effects: [
        'damage_health',
        'frenzy',
        'resist_poison',
        'fortify_lockpicking'
      ]
    },
    farengars_frost_salt: {
      dlc: "quest",
      name: "Farengar's Frost Salt",
      effects: [
        'weakness_to_fire',
        'resist_frost',
        'restore_magicka',
        'fortify_conjuration'
      ]
    },
    felsaad_tern_feathers: {
      dlc: 'dragonborn',
      effects: [
        'restore_health',
        'fortify_light_armor',
        'cure_disease',
        'resist_magic'
      ]
    },
    fine_cut_void_salts: {
      dlc: "quest",
      effects: [
        'weakness_to_shock',
        'resist_magic',
        'damage_health',
        'fortify_magicka'
      ]
    },
    fire_salts: {
      effects: [
        'weakness_to_frost',
        'resist_fire',
        'restore_magicka',
        'regenerate_magicka'
      ]
    },
    fly_amanita: {
      effects: [
        'resist_fire',
        'fortify_two_handed',
        'frenzy',
        'regenerate_stamina'
      ]
    },
    frost_mirriam: {
      effects: [
        'resist_frost',
        'fortify_sneak',
        'ravage_magicka',
        'damage_stamina_regen'
      ]
    },
    frost_salts: {
      effects: [
        'weakness_to_fire',
        'resist_frost',
        'restore_magicka',
        'fortify_conjuration'
      ]
    },
    garlic: {
      effects: [
        'resist_poison',
        'fortify_stamina',
        'regenerate_magicka',
        'regenerate_health'
      ]
    },
    giant_lichen: {
      effects: [
        'weakness_to_shock',
        'ravage_health',
        'weakness_to_poison',
        'restore_magicka'
      ]
    },
    giants_toe: {
      name: "Giant's Toe",
      effects: [
        'damage_stamina',
        'fortify_health',
        'fortify_carry_weight',
        'damage_stamina_regen'
      ]
    },
    gleamblossom: {
      dlc: 'dawnguard',
      effects: [
        'resist_magic',
        'fear',
        'regenerate_health',
        'paralysis'
      ]
    },
    glow_dust: {
      effects: [
        'damage_magicka',
        'damage_magicka_regen',
        'fortify_destruction',
        'resist_shock'
      ]
    },
    glowing_mushroom: {
      effects: [
        'resist_shock',
        'fortify_destruction',
        'fortify_smithing',
        'fortify_health'
      ]
    },
    grass_pod: {
      effects: [
        'resist_poison',
        'ravage_magicka',
        'fortify_alteration',
        'restore_magicka'
      ]
    },
    hagraven_claw: {
      effects: [
        'resist_magic',
        'lingering_damage_magicka',
        'fortify_enchanting',
        'fortify_barter'
      ]
    },
    hagraven_feathers: {
      effects: [
        'damage_magicka',
        'fortify_conjuration',
        'frenzy',
        'weakness_to_shock'
      ]
    },
    hanging_moss: {
      effects: [
        'damage_magicka',
        'fortify_health',
        'damage_magicka_regen',
        'fortify_one_handed'
      ]
    },
    hawk_beak: {
      effects: [
        'restore_stamina',
        'resist_frost',
        'fortify_carry_weight',
        'resist_shock'
      ]
    },
    hawk_feathers: {
      effects: [
        'cure_disease',
        'fortify_light_armor',
        'fortify_one_handed',
        'fortify_sneak'
      ]
    },
    hawks_egg: {
      name: "Hawk's Egg",
      dlc: 'hearthfire',
      effects: [
        'resist_magic',
        'damage_magicka_regen',
        'waterbreathing',
        'lingering_damage_stamina'
     ]
    },
    histcarp: {
      effects: [
        'restore_stamina',
        'fortify_magicka',
        'damage_stamina_regen',
        'waterbreathing'
      ]
    },
    honeycomb: {
      effects: [
        'restore_stamina',
        'fortify_block',
        'fortify_light_armor',
        'ravage_stamina'
      ]
    },
    human_flesh: {
      effects: [
        'damage_health',
        'paralysis',
        'restore_magicka',
        'fortify_sneak'
      ]
    },
    human_heart: {
      effects: [
        'damage_health',
        'damage_magicka',
        'damage_magicka_regen',
        'frenzy'
      ]
    },
    ice_wraith_teeth: {
      effects: [
        'weakness_to_frost',
        'fortify_heavy_armor',
        'invisibility',
        'weakness_to_fire'
      ]
    },
    imp_stool: {
      effects: [
        'damage_health',
        'lingering_damage_health',
        'paralysis',
        'restore_health'
      ]
    },
    jarrin_root: {
      dlc: "quest",
      effects: [
        'damage_health',
        'damage_magicka',
        'damage_stamina',
        'damage_magicka_regen'
      ]
    },
    jazbay_grapes: {
      effects: [
        'weakness_to_magic',
        'fortify_magicka',
        'regenerate_magicka',
        'ravage_health'
      ]
    },
    juniper_berries: {
      effects: [
        'weakness_to_fire',
        'fortify_marksman',
        'regenerate_health',
        'damage_stamina_regen',
      ]
    },
    large_antlers: {
      effects: [
        'restore_stamina',
        'fortify_stamina',
        'slow',
        'damage_stamina_regen',
      ]
    },
    lavender: {
      effects: [
        'resist_magic',
        'fortify_stamina',
        'ravage_magicka',
        'fortify_conjuration'
      ]
    },
    luna_moth_wing: {
      effects: [
        'damage_magicka',
        'fortify_light_armor',
        'regenerate_health',
        'invisibility'
      ]
    },
    moon_sugar: {
      effects: [
        'weakness_to_fire',
        'resist_frost',
        'restore_magicka',
        'regenerate_magicka'
      ]
    },
    mora_tapinella: {
      effects: [
        'restore_magicka',
        'lingering_damage_health',
        'regenerate_stamina',
        'fortify_illusion'
      ]
    },
    mudcrab_chitin: {
      effects: [
        'restore_stamina',
        'cure_disease',
        'resist_poison',
        'resist_fire'
      ]
    },
    namiras_rot: {
      name: "Namira's Rot",
      effects: [
        'damage_magicka',
        'fortify_lockpicking',
        'fear',
        'regenerate_health'
      ]
    },
    netch_jelly: {
      dlc: 'dragonborn',
      effects: [
        'paralysis',
        'fortify_carry_weight',
        'restore_stamina',
        'fear'
      ]
    },
    nightshade: {
      effects: [
        'damage_health',
        'damage_magicka_regen',
        'lingering_damage_stamina',
        'fortify_destruction'
      ]
    },
    nirnroot: {
      effects: [
        'damage_health',
        'damage_stamina',
        'invisibility',
        'resist_magic'
      ]
    },
    nordic_barnacle: {
      effects: [
        'damage_magicka',
        'waterbreathing',
        'regenerate_health',
        'fortify_pickpocket'
      ]
    },
    orange_dartwing: {
      effects: [
        'restore_stamina',
        'ravage_magicka',
        'fortify_pickpocket',
        'lingering_damage_health'
      ]
    },
    pearl: {
      effects: [
        'restore_stamina',
        'fortify_block',
        'restore_magicka',
        'resist_shock'
      ]
    },
    pine_thrush_egg: {
      effects: [
        'restore_stamina',
        'fortify_lockpicking',
        'weakness_to_poison',
        'resist_shock'
      ]
    },
    poison_bloom: {
      dlc: 'dawnguard',
      effects: [
        'damage_health',
        'slow',
        'fortify_carry_weight',
        'fear'
      ]
    },
    powdered_mammoth_tusk: {
      effects: [
        'restore_stamina',
        'fortify_sneak',
        'weakness_to_fire',
        'fear'
      ]
    },
    purple_mountain_flower: {
      effects: [
        'restore_stamina',
        'fortify_sneak',
        'lingering_damage_magicka',
        'resist_frost'
      ]
    },
    red_mountain_flower: {
      effects: [
        'restore_magicka',
        'ravage_magicka',
        'fortify_magicka',
        'damage_health'
      ]
    },
    river_betty: {
      effects: [
        'damage_health',
        'fortify_alteration',
        'slow',
        'fortify_carry_weight'
      ]
    },
    rock_warbler_egg: {
      effects: [
        'restore_health',
        'fortify_one_handed',
        'damage_stamina',
        'weakness_to_magic'
      ]
    },
    sabre_cat_tooth: {
      effects: [
        'restore_stamina',
        'fortify_heavy_armor',
        'fortify_smithing',
        'weakness_to_poison'
      ]
    },
    salmon_roe: {
      dlc: 'hearthfire',
      effects: [
        'restore_stamina',
        'waterbreathing',
        'fortify_magicka',
        'regenerate_magicka'
      ]
    },
    salt_pile: {
      effects: [
        'weakness_to_magic',
        'fortify_restoration',
        'slow',
        'regenerate_magicka'
      ]
    },
    scaly_pholiota: {
      effects: [
        'weakness_to_magic',
        'fortify_illusion',
        'regenerate_stamina',
        'fortify_carry_weight'
      ]
    },
    scathecraw: {
      dlc: 'dragonborn',
      effects: [
        'ravage_health',
        'ravage_stamina',
        'ravage_magicka',
        'lingering_damage_health'
      ]
    },
    silverside_perch: {
      effects: [
        'restore_stamina',
        'damage_stamina_regen',
        'ravage_health',
        'resist_frost'
      ]
    },
    skeever_tail: {
      effects: [
        'damage_stamina_regen',
        'ravage_health',
        'damage_health',
        'fortify_light_armor'
      ]
    },
    slaughterfish_egg: {
      effects: [
        'resist_poison',
        'fortify_pickpocket',
        'lingering_damage_health',
        'fortify_stamina'
      ]
    },
    slaughterfish_scales: {
      effects: [
        'resist_frost',
        'lingering_damage_health',
        'fortify_heavy_armor',
        'fortify_block'
      ]
    },
    small_antlers: {
      effects: [
        'weakness_to_poison',
        'fortify_restoration',
        'lingering_damage_stamina',
        'damage_health'
      ]
    },
    small_pearl: {
      effects: [
        'restore_stamina',
        'fortify_one_handed',
        'fortify_restoration',
        'resist_frost'
      ]
    },
    snowberries: {
      effects: [
        'resist_fire',
        'fortify_enchanting',
        'resist_frost',
        'resist_shock'
      ]
    },
    spawn_ash: {
      dlc: 'dragonborn',
      effects: [
        'ravage_stamina',
        'resist_fire',
        'fortify_enchanting',
        'ravage_magicka'
      ]
    },
    spider_egg: {
      effects: [
        'damage_stamina',
        'damage_magicka_regen',
        'fortify_lockpicking',
        'fortify_marksman'
      ]
    },
    spriggan_sap: {
      effects: [
        'damage_magicka_regen',
        'fortify_enchanting',
        'fortify_smithing',
        'fortify_alteration'
      ]
    },
    swamp_fungal_pod: {
      effects: [
        'resist_shock',
        'lingering_damage_magicka',
        'paralysis',
        'restore_health'
      ]
    },
    taproot: {
      effects: [
        'weakness_to_magic',
        'fortify_illusion',
        'regenerate_magicka',
        'restore_magicka'
      ]
    },
    thistle_branch: {
      effects: [
        'resist_frost',
        'ravage_stamina',
        'resist_poison',
        'fortify_heavy_armor'
      ]
    },
    torchbug_thorax: {
      effects: [
        'restore_stamina',
        'lingering_damage_magicka',
        'weakness_to_magic',
        'fortify_stamina'
      ]
    },
    trama_root: {
      dlc: 'dragonborn',
      effects: [
        'weakness_to_shock',
        'fortify_carry_weight',
        'damage_magicka',
        'slow'
      ]
    },
    troll_fat: {
      effects: [
        'resist_poison',
        'fortify_two_handed',
        'frenzy',
        'damage_health'
      ]
    },
    tundra_cotton: {
      effects: [
        'resist_magic',
        'fortify_magicka',
        'fortify_block',
        'fortify_barter'
      ]
    },
    vampire_dust: {
      effects: [
        'invisibility',
        'restore_magicka',
        'regenerate_health',
        'cure_disease'
      ]
    },
    void_salts: {
      effects: [
        'weakness_to_shock',
        'resist_magic',
        'damage_health',
        'fortify_magicka'
      ]
    },
    wheat: {
      effects: [
        'restore_health',
        'fortify_health',
        'damage_stamina_regen',
        'lingering_damage_magicka'
      ]
    },
    white_cap: {
      effects: [
        'weakness_to_frost',
        'fortify_heavy_armor',
        'restore_magicka',
        'ravage_magicka'
      ]
    },
    wisp_wrappings: {
      effects: [
        'restore_stamina',
        'fortify_destruction',
        'fortify_carry_weight',
        'resist_magic',
      ]
    },
    yellow_mountain_flower: {
      dlc: 'dawnguard',
      effects: [
        'resist_poison',
        'fortify_restoration',
        'fortify_health',
        'damage_stamina_regen'
      ]
    }
  };

  this.multipliers = {
    bear_claws: {
      restore_stamina: {
        mag: 0.8
      }
    },
    beehive_husk: {
      resist_poison: {
        mag: 0.5
      }
    },
    boar_tusk: {
      fortify_health: {
        dur: 5
      },
      fortify_stamina: {
        mag: 1.25,
        dur: 5
      }
    },
    blisterwort: {
      restore_health: {
        mag: 0.6
      }
    },
    briar_heart: {
      fortify_block: {
        mag: 0.5
      }
    },
    charred_skeever_hide: {
      cure_disease: {
        mag: 0.4
      }
    },
    crimson_nirnroot: {
      damage_health: {
        mag: 3
      },
      damage_stamina: {
        mag: 3
      }
    },
    deathbell: {
      damage_health: {
        mag: 1.5
      },
      ravage_stamina: {
        dur: 2
      }
    },
    ectoplasm: {
      fortify_destruction: {
        mag: 0.8
      },
    },
    emperor_parasol_moss: {
      damage_health: {
        mag: 1.5,
        dur: 10
      }
    },
    giants_toe: {
      fortify_health: {
        dur: 5
      }
    },
    hawk_feathers: {
      cure_disease: {
        mag: 0.4
      }
    },
    honeycomb: {
      fortify_block: {
        mag: 0.4
      }
    },
    imp_stool: {
      restore_health: {
        mag: 0.6
      },
    },
    jarrin_root: {
      damage_health: {
        mag: 100
      }
    },
    netch_jelly: {
      restore_stamina: {
        mag: 2
      }
    },
    nightshade: {
      fortify_destruction: {
        mag: 0.8
      }
    },
    nirnroot: {
      damage_health: {
        dur: 10
      }
    },
    poison_bloom: {
      damage_health: {
        mag: 1.5
      }
    },
    river_betty: {
      damage_health: {
        mag: 2.5,
        dur: 10
      }
    },
    salmon_roe: {
      restore_stamina: {
        mag: 0.4
      },
      waterbreathing: {
        dur: 60.0/5.0
      },
      fortify_magicka: {
        dur: 5.0/60.0,
        mag: 12.5
      }
    },
    thistle_branch: {
      resist_poison: {
        mag: 0.75
      }
    }
  };

  this.effects = {
    cure_disease: {
      description: "Cures all diseases",
      cost: 0.5,
      mag: 5,
      dur: 0
    },
    damage_health: {
      description: "Causes MAG points of posion damage",
      cost: 3,
      mag: 2,
      dur: 1
    },
    damage_magicka: {
      description: "Drains the target's Magicka by MAG points",
      cost: 2.2,
      mag: 3,
      dur: 0
    },
    damage_magicka_regen: {
      description: "Decrease the target's Magicka regeneration by MAG% for DUR seconds",
      cost: 0.5,
      mag: 100,
      dur: 5
    },
    damage_stamina: {
      description: "Drain the target's Stamina by MAG points",
      cost: 1.8,
      mag: 3,
      dur: 0
    },
    damage_stamina_regen: {
      description: "Decrease the target's Stamina regeneration by MAG% for DUR seconds",
      cost: 0.3,
      mag: 100,
      dur: 5
    },
    fear: {
      description: "Creatures and people up to level MAG flee from combat for DUR seconds",
      cost: 5,
      mag: 1,
      dur: 30
    },
    fortify_alteration: {
      description: "Alteration spells last MAG% longer for DUR seconds",
      cost: 0.2,
      mag: 4,
      dur: 60
    },
    fortify_barter: {
      description: "You haggle for MAG% better prices for DUR seconds",
      cost: 2,
      mag: 1,
      dur: 30
    },
    fortify_block: {
      description: "Blocking absorbs MAG% more damage for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_carry_weight: {
      description: "Carrying capacity increases by MAG for DUR seconds",
      cost: 0.15,
      mag: 4,
      dur: 300
    },
    fortify_conjuration: {
      description: "Conjuration spells last MAG% longer for DUR seconds",
      cost: 0.25,
      mag: 5,
      dur: 60
    },
    fortify_destruction: {
      description: "Destruction spells are MAG% stronger for DUR seconds",
      cost: 0.5,
      mag: 5,
      dur: 60
    },
    fortify_enchanting: {
      description: "For DUR seconds, items are echanted MAG% stronger",
      cost: 0.6,
      mag: 1,
      dur: 30
    },
    fortify_health: {
      description: "Health is increased by MAG points for DUR seconds",
      cost: 0.35,
      mag: 4,
      dur: 60
    },
    fortify_heavy_armor: {
      description: "Increase Heavy Armor skill by MAG points for DUR seconds",
      cost: 0.5,
      mag: 2,
      dur: 60
    },
    fortify_illusion: {
      description: "Illusion spells are MAG% stronger for DUR seconds",
      cost: 0.4,
      mag: 4,
      dur: 60
    },
    fortify_light_armor: {
      description: "Increases Light Armor skill by MAG points for DUR seconds",
      cost: 0.5,
      mag: 2,
      dur: 60
    },
    fortify_lockpicking: {
      description: "Lockpicking is MAG% easier for DUR seconds",
      cost: 0.5,
      mag: 2,
      dur: 30
    },
    fortify_magicka: {
      description: "Magicka is increased by MAG points for DUR seconds",
      cost: 0.3,
      mag: 4,
      dur: 60
    },
    fortify_marksman: {
      description: "Bows do MAG% more damage for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_one_handed: {
      description: "One-handed weapons do MAG% more damage for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_pickpocket: {
      description: "Pickpocketing is MAG% easier for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_restoration: {
      description: "Restoration spells are MAG% stronger for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_smithing: {
      description: "For DUR seconds, weapon and armor improving is MAG% better",
      cost: 0.75,
      mag: 4,
      dur: 30
    },
    fortify_sneak: {
      description: "You are MAG% harder to detect for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    fortify_stamina: {
      description: "Stamina is incrased by MAG points for DUR seconds",
      cost: 0.3,
      mag: 4,
      dur: 60
    },
    fortify_two_handed: {
      description: "Two-handed weapons do MAG% more damage for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    frenzy: {
      description: "Creatures and people up to level MAG will attack anything nearby for DUR seconds",
      cost: 15,
      mag: 1,
      dur: 10
    },
    invisibility: {
      description: "Invisibility for DUR seconds",
      cost: 100,
      mag: 0,
      dur: 4
    },
    lingering_damage_health: {
      description: "Causes MAG points of poison damage for DUR seconds",
      cost: 12,
      mag: 1,
      dur: 10
    },
    lingering_damage_magicka: {
      description: "Drains the target's Magicka by MAG points per second for DUR seconds",
      cost: 10,
      mag: 1,
      dur: 10
    },
    lingering_damage_stamina: {
      description: "Drains the target's Stamina by MAG points per second for DUR seconds",
      cost: 1.8,
      mag: 1,
      dur: 10
    },
    paralysis: {
      description: "Target is paralyzed for DUR seconds",
      cost: 500,
      mag: 0,
      dur: 1
    },
    ravage_health: {
      description: "Causes MAG points of concentrated poison damage",
      cost: 0.4,
      mag: 2,
      dur: 10
    },
    ravage_magicka: {
      description: "Concentrated poison damages magicka by MAG points",
      cost: 1,
      mag: 2,
      dur: 10
    },
    ravage_stamina: {
      description: "Concentrated poison damages stamina by MAG points",
      cost: 1.6,
      mag: 2,
      dur: 10
    },
    regenerate_health: {
      description: "Health regenerates MAG% faster for DUR seconds",
      cost: 0.1,
      mag: 5,
      dur: 300
    },
    regenerate_magicka: {
      description: "Magicka regenerates MAG% faster for DUR seconds",
      cost: 0.1,
      mag: 5,
      dur: 300
    },
    regenerate_stamina: {
      description: "Stamina regenerates MAG% faster for DUR seconds",
      cost: 0.1,
      mag: 5,
      dur: 300
    },
    resist_fire: {
      description: "Resist MAG% of fire dmaage for DUR seconds",
      cost: 0.5,
      mag: 3,
      dur: 60
    },
    resist_frost: {
      description: "Resist MAG% of frost damage for DUR seconds",
      cost: 0.5,
      mag: 3,
      dur: 60
    },
    resist_magic: {
      description: "Resist MAG% of magic for DUR seconds",
      cost: 1,
      mag: 1,
      dur: 60
    },
    resist_poison: {
      description: "Resist MAG% of poison for DUR seconds",
      cost: 0.5,
      mag: 4,
      dur: 60
    },
    resist_shock: {
      description: "Resist MAG% of shock damage for DUR seconds",
      cost: 0.5,
      mag: 3,
      dur: 60
    },
    restore_health: {
      description: "Restore MAG points of Health",
      cost: 0.5,
      mag: 5,
      dur: 0
    },
    restore_magicka: {
      description: "Restore MAG points of Magicka",
      cost: 0.6,
      mag: 5,
      dur: 0
    },
    restore_stamina: {
      description: "Restore MAG Stamina",
      cost: 0.6,
      mag: 5,
      dur: 0
    },
    slow: {
      description: "Target moves at 50% speed for DUR seconds",
      cost: 1,
      mag: 50,
      dur: 5
    },
    waterbreathing: {
      description: "Can breathe underwater for DUR seconds",
      cost: 30,
      mag: 0,
      dur: 30
    },
    weakness_to_fire: {
      description: "Target is MAG% weaker to fire damage for DUR seconds",
      cost: 0.6,
      mag: 3,
      dur: 30
    },
    weakness_to_frost: {
      description: "Target is MAG% weaker to frost damage for DUR seconds",
      cost: 0.5,
      mag: 3,
      dur: 30
    },
    weakness_to_magic: {
      description: "Target is MAG% weaker to magic for DUR seconds",
      cost: 1,
      mag: 2,
      dur: 30
    },
    weakness_to_poison: {
      description: "Target is MAG% weaker to poison for DUR seconds",
      cost: 1,
      mag: 2,
      dur: 30
    },
    weakness_to_shock: {
      description: "Target is MAG% weaker to shock damage for DUR seconds",
      cost: 0.7,
      mag: 3,
      dur: 30
    }
  };

  this.ingredientDisplayName = function(ingredient) {
    if ( this.ingredients[ingredient].name ) {
      return this.ingredients[ingredient].name
    }
    return ingredient.replace(/_/g, " ").replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };

  this.potionIntersection = function(e1, e2) {
    var effects = new Array();
    _.each(e1, function(effect1) {
      _.each(e2, function(effect2) {
        if ( effect1.effect === effect2.effect ) {
          if ( effect1.cost > effect2.cost ) {
            effects.push(effect1);
          } else {
            effects.push(effect2);
          }
        }
      });
    });
    return effects;
  };

  this.expandEffect = function(effect, ingredient) {
    var cost = this.effects[effect]['cost'];
    var mag = this.effects[effect]['mag'];
    var dur = this.effects[effect]['dur'];

    if ( this.multipliers[ingredient] && this.multipliers[ingredient][effect] ) {

      var multipliers = this.multipliers[ingredient][effect];

      if ( multipliers['mag'] ) {
        mag *= multipliers['mag'];
      }

      if ( multipliers['dur'] ) {
        dur *= multipliers['dur'];
      }
    }

    if ( _.contains(['invisibility','paralysis','slow'], effect) ) {
      dur *= 4 * Math.pow(1.5, this.alchemySkill/100.0);  // alchemy skill == 100
    } else {
      mag *= 4 * Math.pow(1.5, this.alchemySkill/100.0);  // alchemy skill == 100
    }
    var gold;
    if ( dur > 0 ) {
      if ( mag > 0 ) {
        gold = Math.floor(cost * Math.pow(mag, 1.1) * 0.0794328 * Math.pow(dur, 1.1))
      } else {
        gold = Math.floor(cost * 0.0794328 * Math.pow(dur, 1.1))
      }
    } else {
      gold = Math.floor(cost * Math.pow(mag, 1.1) )
    }
    return {
      effect: effect,
      dur: dur,
      mag: mag,
      cost: gold
    }
  };

  this.setAlchemySkill = function(alchemySkill) {
    this.alchemySkill = alchemySkill;
  };

  this.potionUniqEffects = function(effects) {
    var ret = new Array();
    var doneburger = {};
    for(i=0;i<effects.length;i++) {
      var winner = true
        for(j=0;j<effects.length;j++) {
      if (i === j) {
        continue;
      }
      if (( effects[i].effect === effects[j].effect ) && ( effects[i].cost < effects[j].cost )) {
        winner = false
      }
        }
        if (winner && !doneburger[effects[i].effect] ) {
          doneburger[effects[i].effect] = true;
          ret.push(effects[i]);
        }
    }
    return ret;
  }

  this.mixPotion = function() {
    var ingredient1 = arguments[0];
    var ingredient2 = arguments[1];
    var ingredient3 = arguments[2];
    var effects1 = this.ingredients[ingredient1]['effects'];
    var expanded_effects1 = _.map(effects1, function(effect) { return this.expandEffect(effect, ingredient1) }, this);
    var effects2 = this.ingredients[ingredient2]['effects'];
    var expanded_effects2 = _.map(effects2, function(effect) { return this.expandEffect(effect, ingredient2) }, this);
    var effects3;
    var expanded_effects2;
    if ( ingredient3 ) {
      effects3 = this.ingredients[ingredient3]['effects'];
      expanded_effects3 = _.map(effects3, function(effect) { return this.expandEffect(effect, ingredient3) }, this);
    }
    var potion_effects = this.potionIntersection(expanded_effects1, expanded_effects2);
    if ( effects3 ) {
      potion_effects = potion_effects.concat(this.potionIntersection(expanded_effects1, expanded_effects3));
      potion_effects = potion_effects.concat(this.potionIntersection(expanded_effects2, expanded_effects3));
    }
    if ( potion_effects.length == 0 ) {
      return;
    }
    potion_effects = this.potionUniqEffects(potion_effects);
    potion_effects = _.sortBy(potion_effects, function(effect) {return -effect['cost']});
    total_cost = _.reduce(potion_effects, function(m, effect) { return m + effect['cost'] }, 0);
    return {
      effects: potion_effects,
      total_cost: total_cost
    }
  };

  // array representation that is more useful for the angular data model
  this.ingredientsList = function() {
    return _.map(this.ingredients, function(ingredient, label) { return { name: this.ingredientDisplayName(label), label: label, effects: ingredient['effects'], dlc: ingredient['dlc'] }}, this);
  };

  this.pickMaxValue = function(available) {
    var max_i;
    var max_j;
    var max_k;
    var max_cost = -1;
    var max_potion;

    var ret = {};
    ret['ingredients'] = new Array;

    // need two things to mix
    if (available.length < 2 ) { return; }

    var i,j;

    // find best two-reagent potion
    for(i=0;i<(available.length-1);i++) {
      for(j=i+1;j<available.length;j++) {
        potion = this.mixPotion(available[i]['label'], available[j]['label']);
        if ( typeof potion === 'undefined' ) {
          continue;
        }
        if ( potion['total_cost'] > max_cost ) {
          max_potion = potion;
          max_cost = potion['total_cost'];
          max_i = i;
          max_j = j;
        }
      }
    }

    // can't even mix two reagents, no point in going for three
    if (max_cost < 0) { return; }

    // find best three-reagent potion
    if (available.length > 2) {
      for(i=0;i<(available.length-2);i++) {
        for(j=i+1;j<available.length-1;j++) {
          for(k=j+1;k<available.length;k++) {
            potion = this.mixPotion(available[i]['label'], available[j]['label'], available[k]['label']);
            if ( typeof potion === 'undefined' ) {
              continue;
            }
            if ( potion['total_cost'] > max_cost ) {
              max_potion = potion;
              max_cost = potion['total_cost'];
              max_i = i;
              max_j = j;
              max_k = k;
            }
          }
        }
      }
    }

    ret['ingredients'].push(available[max_i]);
    ret['ingredients'].push(available[max_j]);

    if (typeof max_k !== 'undefined') {
      ret['ingredients'].push(available[max_k]);
    }

    // find the minimum num of the two or three reagents to use as the num to mix
    var min_num = 999999; // expect skyrim loops at 256 or something
    _.each(ret['ingredients'], function(ingredient) { if ( ingredient['num'] < min_num ) { min_num = ingredient['num'] } });
    ret['num'] = min_num;

    ret['potion'] = max_potion;

    return ret;
  }

  this.solveIngredients = function(reagents) {
    // need a copy to mutate or we wind up updating the view
    reagents = _.map(reagents, function(reagent) { return { label: reagent['label'], num: reagent['num'] } });
    var ret = new Array();
    while(1) {
      // strip out all the reagents with zero
      reagents = _.select(reagents, function(reagent) { return reagent['num'] > 0 });
      var round = this.pickMaxValue(reagents);
      if (typeof round === 'undefined' ) {
        break;
      }
      ret.push(round);
      _.each(reagents, function(reagent) {
        _.each(round['ingredients'], function(ingredient) {
          if ( reagent['label'] === ingredient['label'] ) {
            reagent['num'] -= round['num'];
          }
        });
      });
    }
    return _.sortBy(ret, function(result) { return -result['potion']['total_cost'] });
  }
}

var potion_factory = new PotionFactory;

//console.log(potion_factory.mixPotion('hagraven_claw', 'hawk_beak'));

potion_factory.validateIngredientsEffects();

