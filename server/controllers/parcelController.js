import parcels from "../models/parcels";

class ParcelControl {
    static getAllParcel (req,resp) {
        return resp.status(200).send({
            status: 'success',
            message: 'Parcels returned successfully',
            parcels: parcels
        })
    }

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

    static updateParcelStatus (req,resp) {
        console.log(req.body.status);
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
        parcels[req.params.id-1].status = req.body.status;
        return resp.status(200).json({
            status: 'success',
            message: 'Parcel successfully updated',
            parcel: parcel
        });
    }

}

export default ParcelControl;