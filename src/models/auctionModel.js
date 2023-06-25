import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const auctionSchema = new Schema(
  {
    carName: {
      type: String,
      required: true,
    },

    condition: {
      type: String,
      required: true,
    },

    bodyType: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    passengerCapacity: {
      type: String,
      required: true,
    },

    exteriorColor: {
      type: String,
      required: true,
    },

    fuelType: {
      type: String,
      required: true,
    },

    mileage: {
      type: String,
      required: true,
    },

    transmission: {
        type: String,
        required: true,
    },
  
    drivetrain: {
        type: String,
        required: true,
    },
  
      engineCapacity: {
        type: String,
        required: true,
      },
  
      power: {
        type: String,
        required: true,
      },
  
      carPrice: {
        type: String,
        required: true,
      },
  
      carImage: {
        type: String,
        required: true,
      },

      features: [],

      length: {
        type: String,
      },

      width: {
        type: String,
      },

      height: {
        type: String,
      },

      cargoVolume: {
        type: String,
      },

  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Auction', auctionSchema);