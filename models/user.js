module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define("User",
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			user_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			token: {
				type: DataTypes.STRING,
				allowNull: false
			}
		});

	return User;
};