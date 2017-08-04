/* ASSIGNMENT 15 - Burger 2: The Sequel
Setting up Burger model */ 

module.exports = function(sequelize, DataTypes){
	return sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
}