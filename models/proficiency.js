module.exports = function (sequelize, DataTypes) {
	const Proficiency = sequelize.define("Proficiency",
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

	return Proficiency;
}; 