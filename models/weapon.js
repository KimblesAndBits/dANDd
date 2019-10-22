module.exports = function (sequelize, DataTypes) {
	const Weapon = sequelize.define("Weapon",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			damage_dice: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			damage_type: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			attack_bonus: DataTypes.INTEGER,
			description: DataTypes.STRING
		});

	return Weapon;
};