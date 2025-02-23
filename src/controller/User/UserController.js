const UserService = require("../../Service/User/UserService");
module.exports = {
    async createAccount(req, res) {
        try {
            const body = req.body;
            const newUser = await UserService.createAccount(body);
            return res.status(200).json(newUser);
        } catch (error) {
            console.log('error', error);
            return res.status(error.statusCode | 400).json(error);
        }
    },

    async pageName(req, res) {
        try {
            const body = req.params.name;
            const page = await UserService.getPageName(body);
            return res.status(200).json(page);
        } catch (error) {
            console.log('error', error);
            return res.status(error.statusCode | 400).json(error);
        }
    }
}