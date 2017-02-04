/**
 * LabanController
 *
 * @description :: Server-side logic for managing Labans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        return res.view("labanview", { foo: "bazzz" });
    },
};

