#!/bin/bash

# 删除devDependencies
npm prune --production
# 打包并压缩代码
tar -jcf poly_3device.tar.bz2 * 

if [ $1 == 'dev' ];then
# 复制到服务器上   
scp poly_3device.tar.bz2 live@60.205.151.71:~/ 
# 解压
ssh live@60.205.151.71 'mkdir -p poly_3device && tar -jxf poly_3device.tar.bz2 -C poly_3device'
# 重启pm2   
ssh live@60.205.151.71 'rm poly_3device.tar.bz2 && cd poly_3device && pm2 start pm2_dev.json' 
fi
if [ $1 == 'pro' ];then
# 复制到服务器上   
scp poly_3device.tar.bz2 live@123.57.139.200:~/ 
# 解压
ssh live@123.57.139.200 'mkdir -p poly_3device && tar -jxf poly_3device.tar.bz2 -C poly_3device'
# 重启pm2   
ssh live@123.57.139.200 'rm poly_3device.tar.bz2 && cd poly_3device && pm2 start pm2_pro.json' 
fi