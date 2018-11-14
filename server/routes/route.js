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

    app.put(
        '/api/v1/parcels/:id',
        ParcelControl.updateParcelStatus
    )
}

export default ParcelRoute;