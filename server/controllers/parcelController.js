import parcels from "../models/parcels";

class ParcelControl {
    static getAllParcel (req,resp) {
        return resp.status(200).send({
            status: 'success',
            message: 'Parcels returned successfully',
            parcels: parcels
        })
    }
}

export default ParcelControl;