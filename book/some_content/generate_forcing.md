# Generating Forcing Data

There are different ways to get forcing data for your model run that are supported by eWaterCycle.
They also differ per model, so you will have to check the documentation of the model you want to use.

Every model needs forcing data, there are several possible ways to get this forcing data:
- Camels Forcing using Caravan
- ERA5 reanalysis
  - Shapefile you made yourself
  - Shapefile from Caravan dataset
- CMIP6 historical data
- CMIP6 future data
- Manual data input

eWaterCycle supports different types of forcings, currently it supports:
* CaravanForcing
* DistributedMakkinkForcing
* DistributedUserForcing
* GenericDistributedForcing
* GenericLumpedForcing
* HypeForcing
* LisfloodForcing
* LumpedMakkinkForcing
* LumpedUserForcing
* MarrmotForcing
* PCRGlobWBForcing
* WflowForcing

The type of forcing needed is model dependent!
