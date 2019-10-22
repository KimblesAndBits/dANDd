module.exports = function (sequelize, DataTypes) {
	const Backstory = sequelize.define("Backstory",
		{
			story: {
				type: DataTypes.STRING
			},
			personality_traits: {
				type: DataTypes.TEXT
			},
			ideals: {
				type: DataTypes.TEXT
			},
			bonds: {
				type: DataTypes.TEXT
			},
			flaws: {
				type: DataTypes.TEXT
			}
		});

	return Backstory;
}; 