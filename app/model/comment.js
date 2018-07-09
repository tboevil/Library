// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const CommentModel = app.model.define('Comment', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: STRING(2000),
            allowNull: false,
        },
        liked:{
            type:INTEGER,
            allowNull:false,
            defaultValue:0
        },
        created_at: {
            type: DATE,
            allowNull: true,
        },
        updated_at: {
            type: DATE,
            allowNull: true,
        },

    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    CommentModel.associate = function() {
        CommentModel.belongsTo(app.model.User, { foreignKey: 'uid' });
        CommentModel.belongsToMany(app.model.User, { through:'likedComment',foreignKey: 'cid' });
        CommentModel.belongsToMany(app.model.User, { through:'unlikedComment',foreignKey: 'cid' });
        CommentModel.belongsTo(app.model.Book, { foreignKey: 'bid' }); 
              
    };
    return CommentModel;
};