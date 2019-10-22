module.exports = function (sequelize, DataTypes) {
	const Character = sequelize.define("Character-Page", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		level: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		race: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		class: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		alignment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		exp: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		strength: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		dexterity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		constitution: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		intelligence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		wisdom: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		charisma: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		speed: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		proficiency_bonus: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		saving_proficiency: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		skill_proficiency: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		max_hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		current_hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		temp_hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		hit_dice_total: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		hit_dice_current: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		spell_ability: DataTypes.STRING
	});

	Character.associate = function (models) {
		Character.belongsTo(models.User, {
			foreignKey: {
				references: {
					model: 'User',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasMany(models.Spell, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasMany(models.Weapon, { as: "Attack" }, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasMany(models.Proficiency, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasMany(models.Item, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasMany(models.Feature, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasOne(models.Appearance, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};
	Character.associate = function (models) {
		Character.hasOne(models.Backstory, {
			foreignKey: {
				references: {
					model: 'Character',
					key: 'id'
				}
			}
		});
	};

	return Character;
};