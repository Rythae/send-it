import ParcelControl from "../controllers/parcelController";

const ParcelRoute = (app) => {
    app.get(
        '/api/v1/parcels',
        ParcelControl.getAllParcel
    )

}

export default ParcelRoute;
