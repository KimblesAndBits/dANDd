module.exports = function (sequelize, DataTypes) {
	const Spell = sequelize.define("Spell",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		});

	return Spell;
}; 