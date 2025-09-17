const LuckyTicketBFS = require('./LuckyTicketBFS');

function findLuckyTicket() {
    console.log(`Searching for lucky ticket holder...\n`);

    const peopleWithTickets = {
        'Alice': '123456',
        'Bob': '111222',
        'Charlie': '123123',
        'Diana': '999999',
        'Eva': '100100',
        'Frank': '555555',
        'Grace': '987654',
        'Henry': '111111',
        'Ivy': '123321',
        'Jack': '000000'
    };

    const searcher = new LuckyTicketBFS();
    searcher.addPeople(peopleWithTickets);

    const result = searcher.findLuckyTicketHolder();

    if (result) {
        console.log(`\n lucky ticket found`);
        console.log(`Person: ${result.person}`);
        console.log(`Ticket: ${result.ticket}`);
        console.log(`Verification: ${result.ticket.slice(0, 3)} = ${result.ticket.slice(3,6)}`);
    }
}

findLuckyTicket();