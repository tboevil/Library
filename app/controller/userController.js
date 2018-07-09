'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.session = ctx.session;
    this.userService = ctx.service.userService;
  }
  async login() {
    this.ctx.validate({
      account: { type: 'string'},
      password: { type: 'string', min: 8, max: 20 },
      rememberMe: { type: 'boolean', required: false },
    });
    const {
      account,
      password,
      rememberMe,
    } = this.ctx.request.body;
    const response = await this.userService.login(account, password);
    if (response.error) this.ctx.status = 403;
    if (!response.error && rememberMe) this.ctx.session.maxAge = ms('30d');
    this.ctx.body = response;
  }
  async logout() {
    this.ctx.session = null;
    this.ctx.body = '退出成功';
  }
  async register() {
    // this.ctx.validate({
    //   account: { type: 'string'},
    //   password: { type: 'string', min: 8, max: 20 },
    //   nickname: {type: 'string', min: 1, max: 20 , required: false },
    //   avatar: {type: 'url', required: false },
    //   signature:{type: 'string', min: 0, max: 200,required:false}
    // });
    // const {
    //   account ,
    //   password,
    //   nickname = 'guest',
    //   avatar = null,
    //   signature = '这个人很懒,什么都没有留下',
    // } = this.ctx.request.body;
    const {userList} = this.ctx.request.body;
    const response = await this.userService.register(userList);
    if (response.error) this.ctx.status = 409;
    this.ctx.body = response;
  }
  async resetPassword() {

  }
  async updateUserInfo() {
    this.ctx.validate({
      nickname: {type: 'string', min: 1, max: 20 , required: false },
      avatar: {type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200,required:false}
    });
    const uid = this.ctx.params.uid;    
    const {
      nickname = 'guest',
      avatar = null,
      signature = '这个人很懒,什么都没有留下',
    } = this.ctx.request.body;
    const response = await this.userService.updateUserInfo( uid,nickname, avatar, signature);
    this.ctx.body = response;
  }
  async getUserInfo() {
    const uid = this.ctx.params.uid;
    const response = await this.userService.getUserInfo(uid);
    if(response.error) this.ctx.state = 404;
    this.ctx.body = response;
  }
  async getRankList() {

  }
  async getShelfList() {

  }
  async createShelf() {

  }
  async modifyShelf() {

  }
  async delShelf() {

  }
  async getShelfByID() {

  }
  async collectBook() {

  }
  async cancelCollectBook() {

  }
  async getAllCollection() {

  }
  async collectComment() {

  }
  async delCollectComment() {

  }
  async getFollowerList() {

  }
  async getFollowingList() {

  }
  async followOne() {

  }
  async unfollow() {

  }
}

module.exports = UserController;