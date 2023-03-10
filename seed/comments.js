const db = require('../db')
const Comments = require('../models/comments')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedComments = async () => {
    const comments = [
        {
            name: 'James Smith',
            comment:
                "I've been a Honda Civic owner for years and I absolutely love it. It's a great car for both city and highway driving and is very fuel-efficient.",
        },
        {
            name: 'Michael Davis',
            comment:
                "I just got my Model 3 and I am blown away by the technology and the driving experience. It's like nothing I've ever driven before.",
        },
        {
            name: 'Sarah Johnson',
            comment:
                "I've been driving my Camry for a few months now and I am thoroughly impressed with its performance and reliability. It's the perfect family car.",
        },
        {
            name: 'Emily Johnson',
            comment:
                'I purchased the Altima for its spacious interior and great safety features. I have been very happy with my decision and would definitely recommend it to others.',
        },
        {
            name: 'William Brown',
            comment:
                'I am a big fan of the Mustang. The sleek design and powerful engine make it the perfect car for a thrilling drive. Plus, it turns heads wherever I go!',
        },
        {
            name: 'Ashley Davis',
            comment:
                'I recently purchased the Camaro and I am so happy with my choice. The car handles beautifully and has plenty of power. I highly recommend it to anyone looking for a sports car.',
        },
        {
            name: 'David Wilson',
            comment:
                "I've been a BMW owner for years and the 3 Series is by far my favorite. It's the perfect balance of luxury, performance, and practicality.",
        },
        {
            name: 'John Doe',
            comment:
                "I recently purchased a Corolla and I am extremely impressed with its reliability and fuel-efficiency. It's a great car for anyone in need of a dependable daily driver.",
        },
        {
            name: 'Jane Doe',
            comment:
                "I've been a proud Accord owner for many years now. It's a great car for families, with plenty of space and a comfortable ride. I highly recommend it.",
        },
        {
            name: 'Michael Smith',
            comment:
                "I recently upgraded to the Model S and I am blown away by the technology and the driving experience. It's a game-changer in the electric car market.",
        },
    ]

    await Comments.insertMany(comments)
    console.log('Created some comments!')
}
const run = async () => {
    await seedComments()
    db.close()
}

run()
