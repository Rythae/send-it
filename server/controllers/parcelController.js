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


    static createParcel(req,resp) {
        if(!req.body.title) {
            return resp.status(400).send({
              success: 'error',
              message: 'title field required'
            });
        } else if(!req.body.pickUpLocation) {
            return resp.status(400).send({
              success: 'error',
              message: 'pickUpLocation field required'
            });
          
        } else if(!req.body.destination) {
            return resp.status(400).send({
              success: 'error',
              message: 'destination field required'
            });

        } else if(!req.body.price) {
            return resp.status(400).send({
              success: 'error',
              message: 'price field required'
            });

        } else if(!req.body.presentLocation) {
            return resp.status(400).send({
              success: 'error',
              message: 'presentLocation field required'
            });

        } else if(!req.body.status) {
            return resp.status(400).send({
              success: 'error',
              message: 'status field required'
            });
        }
          const parcel = {
            id: parcels.length + 1,
            title: req.body.title,
            price: req.body.price,
            destinatio: req.body.destination,
            pickUpLocation: req.body.pickUpLocation,
            presentLocation: req.body.presentLocation
          }
          parcels.push(parcel);
          return resp.status(201).send({
            success: 'true',
            message: 'parcel created successfully', 
            parcel: parcel
          });
    }

   
}



 
    

export default ParcelControl;