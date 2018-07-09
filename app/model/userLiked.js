// {app_root}/app/model/user.js
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const UserLikedModel = app.model.define('UserLiked', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        uid: {
            type: INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        cid: {
            type: INTEGER,
            references: {
                model: 'Book',
                key: 'id'
            }
        }

    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });
    return UserLikedModel;
};