const Smartphone = require("../models/Smartphone");
const EReader = require("../models/EReader");
const Headphone = require("../models/Headphone");
const Laptop = require("../models/Laptop");
const Monitor = require("../models/Monitor");
const Mouse = require("../models/Mouse");
const PortableSpeaker = require("../models/PortableSpeaker");
const Quadcopter = require("../models/Quadcopter");
const Smartwatch = require("../models/Smartwatch");
const Tablet = require("../models/Tablet");
const TV = require("../models/TV");
const createProductModel = require("../models/Product");

const findCollection = (collectionModel) => {
  switch (collectionModel) {
    case "smartphones":
      return Smartphone;
    case "e-readers":
      return EReader;
    case "headphones":
      return Headphone;
    case "laptops":
      return Laptop;
    case "monitors":
      return Monitor;
    case "mouses":
      return Mouse;
      case "portable-speakers":
        /* case "portable_speakers": */
          return PortableSpeaker;
    case "quadcopters":
      return Quadcopter;
    case "smartwatches":
      return Smartwatch;
    case "tablets":
      return Tablet;
    case "tv":
      return TV;
    default:
      return createProductModel(collectionModel);
  }
};

module.exports = { findCollection };
