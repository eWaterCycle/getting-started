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

<table>
  <tr>
    <td>CaravanForcing</td>
    <td>DistributedMakkinkForcing</td>
    <td>DistributedUserForcing</td>
    <td>GenericDistributedForcing</td>
  </tr>
  <tr>
    <td>GenericLumpedForcing</td>
    <td>HypeForcing</td>
    <td>LisfloodForcing</td>
    <td>LumpedMakkinkForcing</td>
  </tr>
  <tr>
    <td>LumpedUserForcing</td>
    <td>MarrmotForcing</td>
    <td>PCRGlobWBForcing</td>
    <td>WflowForcing</td>
  </tr>
</table>

The type of forcing needed is model dependent!

The forcing object in eWaterCycle has some properties:
- start time
- end time
- directory, which is a path
- shapefile, also a path pointing to the shapefile, it also needs the accompanying files (so .shp + .cpg, .prj, .dbf, .shx)
- filenames, a dictionary containing the paths to the netCDF files where the data is stored for that variable
