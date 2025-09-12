/**
 * Advanced phone book based on a hash table
 * @class PhoneBook
 */
class PhoneBook {
    /**
     * Creates PhoneBook instance
     */
    constructor() {
        this.contacts = {};
        this.stats = {
            totalContacts: 0,
            lastUpdate: new Date()
        };
    }

    /**
     * Adds or updates a contact
     * @param {string} name - Contact name
     * @param {string} phone - phone number
     * @returns {boolean} - operation succes status
     */
    setContact(name, phone) {
        if (!name || !phone) {
            console.log('Name and phone are necessary');
            return false;
        }

        const existingContact = this.contacts[name];

        this.contacts[name] = {
            phone: phone,
            createdAt: existingContact ? existingContact.createdAt : new Date(),
            updatedAt: new Date()
        };

        if (!existingContact) {
            this.stats.totalContacts++;
        }

        this.stats.lastUpdate = new Date();
        console.log(`Contact "${name}" ${existingContact ? 'updates' : 'added'}`);
        return true;
    }

    /**
     * Gets contact by name
     * @param {string} name - Contact name
     * @returns {object | null} Contact object or null
     */

    getContact(name) {
        const contact = this.contacts[name];
        if (contact) {
            console.log(`Found contact: ${name} - ${contact.phone}`);
            return { name, ...contact };
        } else {
            console.log(`Contact ${name} not found`);
            return null;
        }
    }

    /**
     * Deletes a contact
     * @param {string} name - contact name
     * @returns {boolean} operation success status
     */
    deleteContact(name) {
        if (this.contacts[name]) {
            delete this.contacts[name];
            this.stats.totalContacts--;
            this.stats.lastUpdate = new Date();
            console.log(`Contact ${name} deleted`);
            return true;
        }
        console.log(`Contact ${name} not found for deletion`);
        return false;
    }
    /**
     * Returns all contacts
     * @returns {Array} Array of all contacts
     */
    getAllContacts() {
        const contacts = Object.entries(this.contacts).map(([name, contact]) => ({
            name,
            ...contact
        }));
        console.log(`Total contacts: ${contacts.length}`);
        return contacts;
    }
    /**
     * Return statistics
     * @returns {Object} Statistic object
     */
    getStatus() {
        return { ...this.stats };
    }
}
module.exports = PhoneBook;