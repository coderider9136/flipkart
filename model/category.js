const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")
let slug = require("slugify")

class cat extends Model {};

cat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
    }

}, {
    modelName: "cat",
    tableName: "category",
    sequelize
})

//cat.sync({ force: true })


async function add(param) {
    let arr = {}
    arr.slug = param.name
    arr.name = param.name
    if (param.pId) {
        arr.pId = param.pId

    }
    console.log(arr)

    let catData = await cat.create(arr).catch((err) => { return { error: err } })
    if (catData.error || !catData) {
        return { error: { status: 400, message: catData.error.message } }
    }
    return { data: catData }
}

function Nested(categories, pId = null) {
    const nestedList = [];
    let catValue;
    if (pId == null) {
        catValue = categories.filter(data => data.pId == undefined)
    } else {
        catValue = categories.filter(data => data.pId == pId)
    }
    for (let cate of catValue) {
        nestedList.push({
            id: cate.id,
            name: cate.name,
            slug: cate.slug,
            children: Nested(categories, cate.id)
        })
    }
    return { nestedList }
}

async function get() {
    let getCat = await cat.findAll().catch((err) => { return { error: err } })

    if (!getCat || getCat.error) {
        return { error: { status: 400, message: getCat.error.message } }
    }

    let catList = Nested(getCat)

    return { data: catList }

}






async function getOne(param) {
    let arr = []

    let getCat = await cat.findOne({ where: { id: param.id } }).catch((err) => { return { error: err } })

    if (!getCat || getCat.error) {
        return { error: { status: 400, message: getCat.error.message } }
    }
    arr.push(getCat)
    let catList = Nested(arr)

    return { data: catList }

}

module.exports = {
    add,
    get,
    getOne,
}