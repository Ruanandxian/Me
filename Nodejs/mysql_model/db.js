const Sequelize=require('sequelize')

console.log('init sequelize...')

var sequelize=new Sequelize('dbname','username','password',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

const ID_TYPE=Sequelize.STRING(50);


function defineModel(name,attributes){
    var attrs={};
    for(let key in attributes){
        let value=attributes[key];
        if(typeof value==='object'&&value['type']){
            value.allowNull=value.allowNull||false;
            attrs[key]=value;
        }else{
            attrs[key]={
                type:value,
                allowNull:false
            };
        }
    }
    attrs.id={
        type:ID_TYPE,
        primaryKey:true
    };
    attrs.createAt={
        type:Sequelize.BIGINT,
        allowNull:false
    };
    attrs.updateAt={
        type:Sequelize.BIGING,
        allowNull:false
    };
    attrs.version={
        type:Sequelize.BIGINT,
        allowNUll:false
    };
    return sequelize.define(name,attrs,{
        tableName:name,
        timestamps:false,
        hooks:{
            beforeValidate:function(obj){
                let now=Date.now();
                if(obj.isNewRecord){
                    if(!obj.id){
                        obj.id=generateID();
                    }
                    obj.createAt=now;
                    obj.updateAt=now;
                    obj.version=0;
                }else{
                    obj.updateAt=Date.now();
                    obj.version++;
                }
            }
        }
    });


}