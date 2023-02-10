const db = require('../db')
const Cars = require('../models/cars')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedCars = async () => {
    const cars = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbOaz3g7XWLBoRmKG68XJ0D9Nl8U3sshdUQ&usqp=CAU',
            owner: 'Yuurieru-san',
            make: 'Mazda',
            model: 'Atenza',
            year: 2016,
        },
        {
            image: 'https://musclecardna.com/wp-content/uploads/pontiac-gto-projectgto2004-2.jpg',
            owner: 'GoatModeScotty',
            make: 'Pontiac',
            model: 'GTO',
            year: 2004,
        },
        {
            image: 'https://pbs.twimg.com/media/Fg5tjAJXgAISWh_?format=jpg&name=4096x4096',
            owner: 'ThatDudeInBlue',
            make: 'Nissan',
            model: '240',
            year: 1990,
        },
        {
            image: 'https://i.pinimg.com/originals/d0/8b/88/d08b88e50667f1924045f6c9b84bca87.jpg',
            owner: 'John Doe',
            make: 'Toyota',
            model: 'Camry',
            year: 2018,
        },
        {
            image: 'https://fitmentinc.s3.amazonaws.com/Blog+Content/Best+First+Mods+For+a+10th+Gen+Honda+Civic/Light+Blue+Civic+Type+R+1.jpg',
            owner: 'Jane Doe',
            make: 'Honda',
            model: 'Civic',
            year: 2020,
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWpECGqQTzMVCiQHyrHdJ-f3sWDGR9V1v8w&usqp=CAU',
            owner: 'Mr.Anderson',
            make: 'Tesla',
            model: 'Model III',
            year: 2021,
        },
        {
            image: 'https://images.fitmentindustries.com/web-compressed/1827174-1-2019-altima-nissan-s-stock-air-suspension-avid1-av06-black.jpg',
            owner: 'EJ',
            make: 'Nissan',
            model: 'Altima',
            year: 2019,
        },
        {
            image: 'https://www.autocollectionofmurfreesboro.com/galleria_images/14699/14699_main_l.jpg',
            owner: 'Willy B',
            make: 'Ford',
            model: 'Mustang',
            year: 2017,
        },
        {
            image: 'https://lightingtrendz.com/mm5/graphics/00000001/1/2016-2018%20Chevrolet%20Camaro%206.png',
            owner: 'Ash Davis',
            make: 'Chevy',
            model: 'Camaro',
            year: 2016,
        },
        {
            image: 'https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/9e5cffb57a47c81d13b7478d25300df7',
            owner: 'Domingo',
            make: 'BMW',
            model: '3 Series',
            year: 2012,
        },
    ]

    await Cars.insertMany(cars)
    console.log('Created some cars!')
}
const run = async () => {
    await seedCars()
    db.close()
}

run()
