const db = require('../db')
const Projects = require('../models/projects')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedProjects = async () => {
    const projects = [
        {
            title: 'Advanced Engine Modification',
            startDate: 'August 1, 2019',
            endDate: 'April 10, 2020',
            location: 'Detroit, MI',
            content:
                'In 2019 me and my friends got together and bored my 5.7 LS1 into a 6.0. Now I have the fastest car in the city!',
            car: '63e676b2aa84218a71e24aac',
        },
        {
            title: 'High-Performance Engine Rebuild',
            startDate: 'April 1, 2021',
            endDate: 'June 10, 2021',
            location: 'New York, NY',
            content:
                'I rebuilt my engine with high-performance components, making my car a true powerhouse on the road.',
            car: '63e676b2aa84218a71e24aac',
        },
        {
            title: 'Suspension Upgrade',
            startDate: 'January 1, 2021',
            endDate: 'March 10, 2021',
            location: 'Orlando, FL',
            content:
                'I upgraded the suspension on my car, giving it better handling and a more aggressive stance.',
        },
        {
            title: 'Performance Brake Upgrade',
            startDate: 'October 1, 2020',
            endDate: 'December 10, 2020',
            location: 'Chicago, IL',
            content:
                'I upgraded the brakes on my car, giving me the confidence to push it to the limit on the track.',
        },
        {
            title: 'Custom Exhaust System',
            startDate: 'July 1, 2020',
            endDate: 'September 10, 2020',
            location: 'Seattle, WA',
            content:
                'I custom-built an exhaust system for my hot rod, giving it a unique look and sound.',
        },
        {
            title: 'Supercharger Installation',
            startDate: 'April 1, 2020',
            endDate: 'June 10, 2020',
            location: 'Phoenix, AZ',
            content:
                "I installed a supercharger on my sedan and it's now a serious performer on the highway.",
        },
        {
            title: 'Race Engine Build',
            startDate: 'January 1, 2020',
            endDate: 'March 10, 2020',
            location: 'Atlanta, GA',
            content:
                "I built a race engine from scratch for my track car. It's a work of art and a powerhouse on the track.",
        },
        {
            title: 'Forced Induction Upgrade',
            startDate: 'October 1, 2019',
            endDate: 'December 10, 2019',
            location: 'Denver, CO',
            content:
                'I upgraded my turbocharger and intercooler system, giving my vehicle a significant boost in horsepower.',
        },
        {
            title: 'Nitrous Oxide Injection System',
            startDate: 'July 1, 2019',
            endDate: 'September 10, 2019',
            location: 'Dallas, TX',
            content:
                "I added a nitrous oxide injection system to my sports car and it's now capable of mind-blowing acceleration.",
        },
        {
            title: 'V8 Swap Project',
            startDate: 'April 1, 2019',
            endDate: 'June 10, 2019',
            location: 'Los Angeles, CA',
            content:
                "I swapped the original engine in my classic muscle car with a powerful V8. It's a whole new driving experience.",
        },
    ]

    await Projects.insertMany(projects)
    console.log('Created some projects!')
}
const run = async () => {
    await seedProjects()
    db.close()
}

run()
