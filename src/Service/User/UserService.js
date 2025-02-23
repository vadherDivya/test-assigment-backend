const User = require('../../model/user.model');

module.exports = {
    async createAccount(body) {
        let {name, deviceToken} = body;
        if(!name) {
            name = "josue"
        }
        const url = `http://localhost:3000/${name}`;
        try {
            let nameExist = await User.findOne({name});
            if(nameExist) {
                return { message: 'Name already exist!', data: nameExist};
            }
            const user = new User({ name, url, deviceToken });
            await user.save();
            return { message: 'User created.', data: user};
        } catch (error) {
            throw { error: error };
        }
    },

    async getPageName(name) {
        try {
            let page = await User.findOne({name: name});
            if(page) {
                return { message: 'Name already exist!', data: page};
            }

            return { message: 'Name not found!', data: {}}
        } catch (error) {
            throw { error: error };
        }
    }
}