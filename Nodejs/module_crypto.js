crypto模块的目的是为了提供通用的加密和哈希算法


//MD5和SHA1
const crypto=require('crypto');

const hash=crypto.createHash('md5');

hash.update('Hello world');
hash.update('Hello nodejs');

console.log(hash.digest('hex'));







// Hmac
// 增加密匙
const crypto=require('crypto');

const hmac=crypto.createHmac('sha256','secret-key')

hmac.update('hello world');
hmac.update('hello world');

console.log(hmac.digest('hex'));






// AES一种常用的对称加密算法，加解密都用同一个密匙
const crypto=require('crypto');

function aesEncrypt(data,key){
    //录入密码
    const cipher=crypto.createCipher('aes192',key);
    // 录入数据
    var crypted=cipher.update(data,'utf-8','hex');
    crypted+=cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key){
    // 录入密码
    const decipher=crypto.createDecipher('aes192',key);
    // 解析数据
    var decrypted=decipher.update(encrypted,'hex','utf-8');
    decrypted+=decipher.final('utf-8');
    return decrypted;
}

var data='hello ,this is a secret message!';
var key='Password';
var encrypted=aesEncrypt(data,key);
var decrypted=aesDecrypt(encrypted,key);

console.log('Plain text:'+data);
console.log('Encrypted text:'+encrypted);
console.log('Decrypted text:'+decrypted);





// Diffie-Hellman密匙交换协议,可以在双方都不泄漏密钥的情况下协商出一个密钥来
const crypto=require('crypto');

//小明的keys
var ming=crypto.createDiffieHellman(512);
var ming_keys=ming.generateKeys();

var prime=ming.getPrime();
var generator=ming.getGenerator();

console.log('Prime:'+prime.toString('hex'));
console.log('Generator:'+generator.toString('hex'))


// 小红的keys
var hong=crypto.createDiffieHellman(prime,generator);
var hong_keys=hong.generateKeys();

//交换密匙
var ming_secret=ming.computeSecret(hong_keys);
var hong_secret=hong.computeSecret(ming_keys);

console.log('Secret of Xiao Ming：'+ming_secret.toString('hex'));
console.log('Secret of Xiao Hong:'+hong_secret.toString('hex'));





// RSA非对称加密算法，由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，或者通过公钥加密，私钥解密

// 生成一个RSA密钥对，获得了加密的rsa-key.pem文件
// openssl genrsa -aes256 -out rsa-key.pem 2048
// 通过上面的rsa-key.pem加密文件，可以导出原始的私钥
// openssl rsa -in rsa-key.pem -outform PEM -out rsa-prv.pem
// 类似的，我们用下面的命令导出原始的公钥
// openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-pub.pem

// 原始私钥文件rsa-prv.pem和原始公钥文件rsa-pub.pem，编码格式均为PEM。

const 
    fs=require('fs'),
    crypto=require('crypto');

// 从文件加载key
function loadKey(file){
    // key实际上就是pem编码的字符串
    return fs.readFileSync(file,'utf-8');
}

let
    // 私钥
    prvKey=loadKey('./ras-prv.pem'),
    // 公钥
    pubKey=loadKey('./ras-pub.pem'),
    message="hello world";
// 使用私钥加密
let enc_by_prv=crypto.privateEncrypt(prvKey,Buffer.from(message,'utf-8'));
console.log('encrypted by private key:'+enc_by_prv.toString('hex'));
// 使用公钥解密
let dec_by_pub=crypto.publicDecrypt(pubKey,enc_by_prv);
console.log('decrypted by public key:'+dec_by_pub.toString('utf-8'));

// 使用公钥加密
let enc_by_pub=crypto.publicEncrypt(pubKey,Buffer.from(message,'utf-8'));
console.log('encrypted by public key:'+enc_by_pub.toString('hex'));
// 使用私钥解密
let dec_by_prv=crypto.privateDecrypt(prvKey,enc_by_pub);
console.log('decrypted by private key:'+dec_by_prv.toString('utf-8'));


// 实际上，RSA并不适合加密大数据，而是先生成一个随机的AES密码，用AES加密原始信息，
// 然后用RSA加密AES口令，这样，实际使用RSA时，给对方传的密文分两部分，
// 一部分是AES加密的密文，另一部分是RSA加密的AES口令。对方用RSA先解密出AES口令，
// 再用AES解密密文，即可获得明文。

