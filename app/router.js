module.exports = app => {
    const { router, controller } = app;
    

    const isAdmin = app.role.can('admin');

    const logged = app.role.can('logged');




    router.get('/book/:bid/comment',controller.commentController.getAllComment);

    router.post('/book/:bid/comment',controller.commentController.createComment);

    router.delete('/book/:bid/comment/:cid',controller.commentController.delComment);

    router.put('/book/comment/:cid',controller.commentController.modifyComment);

    router.get('/book/comment/:cid',controller.commentController.getCommentByID);

    router.get('/book/comment/:cid/like',controller.commentController.likeComment);

    router.delete('/book/comment/:cid/like',controller.commentController.unlikeComment);



    router.get('/book',controller.bookController.getBookList)

    router.get('/book/ranking',controller.bookController.getRankList);
    // 书籍阅读量排行  书籍收藏排行

    router.get('/book/search',controller.bookController.searchBook)
    
    router.get('/book/recommend',controller.bookController.recommend)
    
    router.get('/book/:bid',controller.bookController.getBookByID)
    
    router.post('/book/:bid',controller.bookController.createChapter);
    
    router.post('/book',controller.bookController.addBook);

    router.put('/book/:bid',controller.bookController.modifyBook);

    router.put('/book/:bid/type',controller.bookController.changeType);
    
    router.delete('/book/:bid',controller.bookController.delBook);
    
    router.post('/book/:bid',controller.bookController.addChapter);

    router.get('/book/:bid/:chapterID',controller.bookController.geChapterByID)

    router.delete('/book/:bid/:chapterID',controller.bookController.delChapter);

    router.put('/book/:bid/:chapterID',controller.bookController.modifyChapter);
    

    router.get('/category',controller.categoryController.getAllCategory);

    router.get('/category/all',controller.categoryController.getCategoryAndType);

    router.post('/category',controller.categoryController.createCategory);

    router.delete('/category/:cid',controller.categoryController.deleteCategory);

    router.get('/category/type',controller.categoryController.getSubCategory)




    router.post('/user/login',controller.userController.login);

    router.get('/user/logout',controller.userController.logout);
    
    router.post('/user/register',controller.userController.register);
    
    router.put('/user/resetPassword',controller.userController.resetPassword);
    
    router.put('/user/info/:uid',controller.userController.updateUserInfo);
    
    router.get('/user/info/:uid',controller.userController.getUserInfo);

    router.get('/user/ranking',controller.userController.getRankList);
    
    
    
    router.get('/user/shelf',controller.userController.getShelfList);
    
    router.post('/user/shelf',controller.userController.createShelf);

    router.put('/user/shelf/:shelfID',controller.userController.modifyShelf);

    router.delete('/user/shelf/:shelfID',controller.userController.delShelf);
    
    router.get('/user/shelf/:shelfID',controller.userController.getShelfByID);

    router.post('/user/shelf/:shelfID',controller.userController.collectBook);

    router.delete('/user/shelf/:shelfID/:bid',controller.userController.cancelCollectBook);

    

    router.get('/user/collection',controller.userController.getAllCollection);

    router.post('/user/collection',controller.userController.collectComment);

    router.delete('/user/collection/:commentID',controller.userController.delCollectComment);



    router.get('/user/follower',controller.userController.getFollowerList);

    router.get('/user/following',controller.userController.getFollowingList);

    router.post('/user/following',controller.userController.followOne);

    router.delete('/user/following/:id',controller.userController.unfollow);

    

    router.post('/admin/login',controller.adminController.login);

    router.get('/admin/user/:rid',isAdmin,controller.adminController.getUserList);

    router.put('/admin/:uid',isAdmin,controller.adminController.modifyRole);

    router.get('/admin/search',isAdmin,controller.adminController.searchUser)





};