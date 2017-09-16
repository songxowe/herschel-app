const express = require('express');
const mysql = require('mysql');
// const common = require('../libs/common');
const db = mysql.createPool({   // 创建数据库连接池
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});
module.exports = () => {
    const route = express.Router();
    const getHomeStr = `SELECT p_id,p_name,p_price,p_img_url,p_uprice FROM product_2`;
    const getCateNames = `SELECT * FROM category ORDER BY category_id desc`;
    //get homePage datas
    route.get('/home', (req, res) => {
        getHomeDatas(getHomeStr, res);
        // console.log("数据库链接成功！！！");
    });

    function getHomeDatas(getHomeStr, res) {
        db.query(getHomeStr, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    }
/*
    route.get('/category', (req, res) => {
        getCateNamesDatas(getCateNames, res);
    });

    function getCateNamesDatas(getCateNames, res) {
        db.query(getCateNames, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    };
    route.get('/categorygoods', (req, res) => {
        let mId = req.query.mId;
        const sql = `select * from product,category where product.category_id=category.category_id and category.category_id='${mId}'`;
        getCateGoods(sql, res);
    });

    function getCateGoods(sql, res) {
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    }
    */
    route.get('/detail', (req, res) => {
        let produId = req.query.mId;
        const imagesStr = `select image_url from product_image where p_id='${produId}'`;
        const productStr = `select * from product where p_id='${produId}'`;
        let detailDatas = [];
        db.query(imagesStr, (err, imgDatas) => {
            if (err) {
                console.error(err);
                res.status(500).send('database err').end();
            } else {
                detailDatas.push(imgDatas);

                db.query(productStr, (err, goodsData) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('database err').end();
                    } else {
                        detailDatas.push(goodsData);
                        res.send(detailDatas);
                    }
                });
            }
        });

    });

    route.get('/cart', (req, res) => {
        let carId = req.query.cId;
        const amountStr = `select p_amount from shopping_car where car_id='${carId}'`;
        const productStr = `select * from product where p_id='${produId}'`;
        let detailDatas = [];
        db.query(amountStr, (err, proMounts) => {
            if (err) {
                console.error(err);
                res.status(500).send('database err').end();
            } else {
                detailDatas.push(proMounts);

                db.query(productStr, (err, goodsData) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('database err').end();
                    } else {
                        detailDatas.push(goodsData);
                        res.send(detailDatas);
                    }
                });
            }
        });
    })
/*
    router.get('/list',(req, res) => {
       //     let carId = res.query.cId;
       //     let uId = res.query.uId;
       //     let pId = res.query.pId;
            let creaDate = res.query.creaDate
            const insCartInfo = `INSERT INTO shopping_car(car_id,u_id,p_amount,created,p_id) VALUES('carId','4','1','2017-07-08 22:30:40')`;
            delCart(insCartInfo, res);

            // 验证添加购物车是否成功  
            function delCart(insUserInfo, res) {
                db.query(insUserInfo, (err) => {
                    if (err) {
                        console.error(err);
                        res.send({ 'msg': '无法添加至购物车!', 'status': 0 }).end();
                    } else {
                        res.send({ 'msg': '加入购物车成功!', 'status': 1 }).end();
                        alert("添加购物车成功!");
                    }
                })
            }  
    })
*/

    route.get('/search', (req, res) => {
        let keyWord = req.query.kw;
        let hot = req.query.hot;
        let priceUp = req.query.priceUp;
        let priceDown = req.query.priceDown;
        const keywordStr = `select  *  from product where product.p_name like '%${keyWord}%'`;
        const hotStr = `select  *  from product where product.p_name like '%${keyWord}%' order by p_comment_num desc`;
        const priceUpStr = `select  *  from product where product.p_name like '%${keyWord}%' order by p_uprice asc`;
        const priceDownStr = `select  *  from product where product.p_name like '%${keyWord}%' order by p_uprice desc`;
        if (keyWord != '') {
            if (hot != '') {
                getSearchDatas(hotStr, res);
                console.log("模糊查询成功!");
            } else if (priceUp != '') {
                getSearchDatas(priceUpStr, res);
            } else if (priceDown != '') {
                getSearchDatas(priceDownStr, res);
            } else {
                getSearchDatas(keywordStr, res);
            }
        }

    });
    /**
        get search datas
    */
    function getSearchDatas(keywordStr, res) {
        db.query(keywordStr, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    }
    /*
     *user reg func
     */
    route.post('/reg', (req, res) => {

        let mObj = {};
        for (let obj in req.body) {
            mObj = JSON.parse(obj);
        }
        let regName = mObj.regName;
        let regPasswd = mObj.regPasswd;
        regPasswd = common.md5(regPasswd + common.MD5_SUFFXIE);
        const insUserInfo = `INSERT INTO user(u_name,u_password,u_gender,car_id) VALUES('${regName}','${regPasswd}','${regName}')`;
        delReg(insUserInfo, res);
    });
    /*
     *deal user register
     */
    function delReg(insUserInfo, res) {
        db.query(insUserInfo, (err) => {
            if (err) {
                console.error(err);
                res.send({ 'msg': '服务器出错', 'status': 0 }).end();
            } else {
                res.send({ 'msg': '注册成功', 'status': 1 }).end();
            }
        })
    };
    route.post('/login', (req, res) => {

        let mObj = {};
        for (let obj in req.body) {
            mObj = JSON.parse(obj);
            console.log(mObj);
        }
        let username = mObj.loginName;
        let password = mObj.loginPawd;
        // console.log(username, mObj.passwd);
        const selectUser = `SELECT * FROM user where u_name='${username}'`;
        db.query(selectUser, (err, data) => {
            if (err) {
                console.log(err);
                res.send({ 'msg': '服务器出错', 'status': 0 }).end();
            } else {
                if (data.length == 0) {
                    res.send({ 'msg': '该用户不存在', 'status': -1 }).end();
                } else {
                    let dataw = data[0];
                    //login sucess
                    if (dataw.u_password === password) {
                        //save the session 
                        req.session['u_id'] = dataw.u_id;
                        dataw.msg = "登录成功";
                        dataw.status = 1;
                        res.send(dataw).end();
                    } else {
                        res.send({ 'msg': '密码不正确', 'status': -2 }).end();
                    }
                }
            }
        });

    });
    route.get('/userinfo', (req, res) => {
        let uId = req.query.uId;
        const getU = `SELECT user_name,user_number FROM user where user_id='${uId}'`;
        db.query(getU, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data[0]);
                }
            }
        });
    });
    return route;
   
}
