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
    setContact (name, phone) {
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
    }
}