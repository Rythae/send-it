import ParcelModel from '../models/Parcel';

const Parcel = new ParcelModel();

/**
 * @exports
 * @class ParcelControl
 * 
 */
class ParcelController {
    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static async getAllParcel (req,resp) {

        const parcels = await Parcel.getAll();
        return resp.status(200).send({
            status: 'success',
            message: 'Parcels returned successfully',
            parcels
        });
    }

     /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static async getSpecificParcel (req,resp) {
        const id = req.params.id;
        const parcel = await Parcel.getOne(id);
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
    static async getAUsersParcels (req, resp) {  
        const userId = req.params.userId;  
        const allParcels = await Parcel.getAUsersParcels(userId);

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
    static async createParcel(req,resp) {
        const parcelData = req.body;
        parcelData.status = 'pending';
        parcelData.weightMetric = '20k/g';
        // if the user didn't enter the weight, and empty string should be used
        parcelData.weight = parcelData.weight || "";
        // temporary user id to be fetch from the jwt middleware 
        parcelData.placedBy = 1;

        const parcel = await Parcel.create(parcelData);

        return resp.status(201).send({
            success: 'true`',
            message: 'parcel created successfully', 
            parcel
        });
    }

    /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static async cancelParcel (req,resp) {
        const id = req.params.id;
        const parcel = await Parcel.getOne(id);
        if (!parcel) {
            return resp.status(404).json({
                status: 'error',
                message: 'No parcels exist for the id'
                    });
        }

        const canceledParcel = await Parcel.cancelOrder(id);
        return resp.status(200).json({
            status: 'success',
            message: 'Parcel successfully cancelled',
            parcel: canceledParcel
        });
    }

     /**
     * @staticmethod
     * @param {object} req - Request object
     * @param {object} resp - Response object
     * @return {json} resp.json
     */
    static async changeParcelStatus (req,resp) {
        const id = req.params.id;
        const parcel = await Parcel.getOne(id);

        if (!parcel) {
            return resp.status(404).json({
                status: 'error',
                message: 'No parcels exist for the id'
                    });
        }
    
        const updatedParcel = await Parcel.changeStatus(id, req.body.status);
        return resp.status(200).json({
            status: 'success',
            message: 'Status successfully changed',
            parcel: updatedParcel
        });
    }
 }

export default ParcelController;