import {user} from '../modal/user'

exports.getUserList = async (ctx, next) => {
    try {
        let list = await user.find();
        let respon = {
            code: '0000',
            message: 'success',
            data: list
        }
        return respon;
    } catch (err) {
        let respon = {
            code: '9999',
            message: 'error',
            data: err
        }
        return respon;
    }
}
exports.register = async (reqBody) => {
    let dataArr = {
        username: reqBody.uname,
        password: reqBody.ukey,
        phone: '13162698677',
        emial: '690385384@qq.com',
        content: '123123'
    }
    try {
        let list = await user.find({username: reqBody.uname});
        console.log(list)
        let respon = {
            code: '0000',
            message: '',
        }
        if(list && list.length > 0) {
            respon.message = 'the user is exicet'
            respon.data = list
        }else {
            let newUser = await user.create(dataArr);
            console.log(newUser);
            respon.message = 'success'
            respon.data = newUser
        }
        return respon;
    } catch (err) {
        console.log(err)
        let respon = {
            code: '9999',
            message: 'error',
            data: err
        }
        return respon;
    }
}
exports.removeUser = async (reqBody) => {
    let dataArr = {
        id: reqBody.id,
    }
    try {
        let list = await user.delete(dataArr);
        let respon = {
            code: '0000',
            message: 'success',
            data: list
        }
        return respon;
    } catch (err) {
        let respon = {
            code: '9999',
            message: 'error',
            data: err
        }
        return respon;
    }
}