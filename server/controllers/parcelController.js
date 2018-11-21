import parcels from "../models/parcels";

/**
 * @exports
 * @class ParcelControl
 * 
 */
class ParcelControl {
    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static getAllParcel (req,resp) {
        return resp.status(200).send({
            status: 'success',
            message: 'Parcels returned successfully',
            parcels: parcels
        });
    }

     /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static getSpecificParcel (req,resp) {
        const parcel = parcels.find(c => c.id === parseInt(req.params.id));
        if (!parcel) {
            return resp.status(404).send({
                status: 'error',
                message: 'No parcels exist for the id'
            });
        }
        return resp.status(200).send({
            status: 'success',
            message: '1 Parcel returned',
            parcel: parcel
        });
    }

    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static getAllUsersParcels (req, resp) {    
        const userId = Number(req.params.id);
        const allParcels = parcels.filter(parcel => parcel.userId === userId); 
                    return resp.status(200).json({
                        status: 'success',
                        message: 'All Parcel returned',
                        parcels: allParcels
                    });
    }

     /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static createParcel(req,resp) {
       
        const parcel = {
            id: parcels.length + 1,
            title: req.body.title,
            price: req.body.price,
            destination: req.body.destination,
            pickUpLocation: req.body.pickUpLocation,
            presentLocation: req.body.presentLocation,
            status: req.body.status
        };
        parcels.push(parcel);
        return resp.status(201).send({
            success: 'true',
            message: 'parcel created successfully', 
            parcel: parcel
        });
    }

    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static cancelParcel (req,resp) {
        const parcel = parcels.find(c => c.id === parseInt(req.params.id));
        if (!parcel) {
            return resp.status(404).json({
                status: 'error',
                message: 'No parcels exist for the id'
                    });
        }
        if (!req.body.status) {
            return resp.status(400).json({
                status: 'error',
                message: 'Status field required'
                });
        }
        parcel.status = "cancelled";
        return resp.status(200).json({
            status: 'success',
            message: 'Parcel successfully updated',
            parcel: parcel
        });
    }

     /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static changeParcelStatus (req,resp) {
        const parcel = parcels.find(c => c.id === parseInt(req.params.id));
        if (!parcel) {
            return resp.status(404).json({
                status: 'error',
                message: 'No parcels exist for the id'
                    });
        }
        if (!req.body.status) {
            return resp.status(400).json({
                status: 'error',
                message: 'Status field required'
                });
        }
        parcel.status = req.body.status;
        return resp.status(200).json({
            status: 'success',
            message: 'Parcel successfully updated',
            parcel: parcel
        });
    }
 }

export default ParcelControl;