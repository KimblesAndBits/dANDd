module.exports = function (sequelize, DataTypes) {
	const Feature = sequelize.define("Feature",
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

	return Feature;
}; 