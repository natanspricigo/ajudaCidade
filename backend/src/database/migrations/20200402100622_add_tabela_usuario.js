
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.bigIncrements('codigo'); //primary key e autoincrement com bigInt
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("usuario");
};
