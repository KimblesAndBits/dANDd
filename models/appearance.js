module.exports = function (sequelize, DataTypes) {
	const Appearance = sequelize.define("Appearance",
		{
			eyes: {
				type: DataTypes.STRING
			},
			hair: {
				type: DataTypes.TEXT
			},
			age: {
				type: DataTypes.TEXT
			},
			weight: {
				type: DataTypes.TEXT
			},
			height: {
				type: DataTypes.TEXT
			},
			skin: {
				type: DataTypes.TEXT
			},
		});

	return Appearance;
}; 