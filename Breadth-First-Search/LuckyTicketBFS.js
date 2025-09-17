class LuckyTicketBFS {
    constructor(people = {}) {
        this.people = people;
        this.queue = [];
        this.searched = new Set();
    }

    addPeople(peopleDict) {
        this.people = peopleDict;
        this.queue = Object.keys(peopleDict);
    }

    isLuckyTicket(ticket) {
        if (typeof ticket !== 'string' || ticket.length !== 6) return false;
        return ticket.slice(0, 3) === ticket.slice(3, 6);
    }

    findLuckyTicketHolder() {
        while (this.queue.length > 0) {
            const person = this.queue.shift();
            if (this.searched.has(person)) continue;
            
            const ticket = this.people[person];
            if (ticket && this.isLuckyTicket(ticket)) {
                console.log(`🎉 Found lucky ticket holder: ${person} with ticket ${ticket}`);
                return { person: person, ticket: ticket };
            }
            this.searched.add(person);
        }
        console.log('❌ No lucky ticket found');
        return null;
    }

    reset() {
        this.queue = [];
        this.searched = new Set();
    }
}

module.exports = LuckyTicketBFS;