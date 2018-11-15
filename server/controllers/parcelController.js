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
        const parcel = parcels.find(c => c.parcel_id === parseInt(req.params.id));
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

    static cancelParcel (req,resp) {
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
        parcel.status = "cancelled";
        return resp.status(200).json({
            status: 'success',
            message: 'Parcel successfully updated',
            parcel: parcel
        });
    }


    static createParcel(req,resp) {
        console.log(req.body)
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

    static getAllUsersParcels (req, resp) {
       
        const allParcels = parcels.filter(userParcels => userParcels.user_id === req.params.user_id) 
                    return resp.status(200).json({
                        status: 'success',
                        message: 'All Parcel returned',
                        parcels: allParcels
                    });
                }
            
    //     const userArray = []
    //     parcels.forEach((value, index) => {
    //         if(value.user_id  === req.body.user_id){
    //             return userArray.push(value)
    //              return resp.status(200).json({
    //                 status: 'success',
    //                 message: 'All Parcel returned',
    //                 parcel: userArray
    //             });
    //         }
    //         return resp.status(200).send({
    //             status: 'success',
    //             message: 'All Parcel returned',
    //             parcel: userArray
    //         });

    //     });
        
    // }

 }

export default ParcelControl;