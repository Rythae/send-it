import ParcelControl from "../controllers/parcelController";

const ParcelRoute = (app) => {
    app.get(
        '/api/v1/parcels',
        ParcelControl.getAllParcel
    )

    app.get(
        '/api/v1/parcels/:id',
        ParcelControl.getSpecificParcel
    )

    app.get(
        '/api/v1/users/:id/parcels',
        ParcelControl.getAllUsersParcels
    )

    app.put(
        '/api/v1/parcels/:id/cancel',
        ParcelControl.cancelParcel
    )
    app.post(
        '/api/v1/parcels',
        ParcelControl.createParcel
    )
}

export default ParcelRoute;