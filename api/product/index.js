/**
 * product manager api
 * Created by liangyali on 14-11-19.
 */

var client = require('../../lib/ESClient');

module.exports = function (router) {

    var indexName = "product";
    var type = "products";
    /**
     * 添加商品
     *
     * PUT /product
     */
    router.put('/', function (req, res) {

        var body = req.body || {};

        var id = body.id;

        if (!id) {
            res.json({status: true, message: 'id is required!'})
            return;
        }

        client.index({
            index: indexName,
            type: type,
            id: id,
            body: body
        }, function (error, result) {
            if (error) {
                res.json({status: false, message: error});
                return;
            }

            res.json({status: true});
        });

    });

    /**
     * 删除商品
     */
    router.delete('/:id', function (req, res) {

        var id = req.params.id;

        client.delete({
            index: indexName,
            type: type,
            id: id
        }, function (error, result) {
            if (error) {
                res.json({status: false, message: error});
                return;
            }
            res.json({status: true});
        });
    });
};
