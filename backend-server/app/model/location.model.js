module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: true,
      type: Sequelize.STRING,
    }
  });
  return Location;
};
