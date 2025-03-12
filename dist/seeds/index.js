import db from '../config/connection.js';
import { Thoughts, Username } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomThoughts } from './data.js';
try {
    await db();
    await cleanDB();
    // Create empty array to hold the students
    const usernames = [];
    // Loop 20 times -- add students to the students array
    for (let i = 0; i < 20; i++) {
        const randomName = getRandomName();
        usernames.push({
            name: randomName
        });
    }
    // Add students to the collection and await the results
    const usernameData = await Username.create(usernames);
    const thoughts = getRandomThoughts(10);
    // Add courses to the collection and await the results
    await Thoughts.create(thoughts);
    // Log out the seed data to indicate what should appear in the database
    console.table(usernameData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
}
catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
}
