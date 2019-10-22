module.exports = function (sequelize, DataTypes) {
	const Item = sequelize.define("Item",
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

	return Item;
}; 